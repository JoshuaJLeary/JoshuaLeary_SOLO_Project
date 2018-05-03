const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from database
  res.send(req.user);
});

router.get('/profile', (req, res) => {
  console.log('user:',req.user);
  if(req.isAuthenticated()){
    const queryText = `SELECT name, city, skill, bio, alcohol, tobacco FROM person WHERE id = $1`;
  pool.query(queryText, [req.user.id])
  .then( (result) => {
    console.log('result.rows:', result.rows);
    res.send(result.rows);
  })
  .catch( (error) => {
    console.log('error in GET', error);
    res.sendStatus(500);
  })
  }else {
    res.sendStatus(403);
  }
  
});

router.get('/events', (req, res) => {
    const queryText = `SELECT * FROM event`;
    pool.query(queryText)
    .then( (result) => {
      console.log('result.rows:', result.rows);
      res.send(result.rows);
    })
    .catch( (error) => {
      console.log('error in event GET:', error);
      res.sendStatus(500);
    })
});

router.get('/myEvent', (req, res) => {
  console.log('user:', req.user);
  if(req.isAuthenticated()){
    const queryText = `SELECT `;
  pool.query(queryText)
  .then( (result) => {
    console.log('result.rows:', result.rows);
    res.send(result.rows);
  })
  .catch( (error) => {
    console.log('error in Get', error);
    res.sendStatus(500);
  })
  }else {
    res.sendStatus(403);
  }
  
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  console.log(req.body);
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const golfer = req.body.golfProfile;

  const queryText = 'INSERT INTO person (username, password, name, city, skill, bio, alcohol, tobacco) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id';
  pool.query(queryText, [username, password, golfer.name, golfer.city, golfer.skill, golfer.bio, golfer.alcohol, golfer.tobacco])
    .then(() => { res.sendStatus(201); })
    .catch((err) => { next(err); });
});

router.post('/event', (req, res, next) => {
  console.log(req.body);
  const event = req.body;
  (async () => {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      let queryText = `INSERT INTO event (event_name, course_name, course_address, course_phone, tee_time) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
      const values = [event.name, event.course, event.address, event.phone, event.teeTime];
      const eventResult = await client.query(queryText, values);
      const eventId = eventResult.rows[0].id;

      queryText = `INSERT INTO attendee (person_id, event_id) VALUES ($1, $2) RETURNING id`;
      const result = await client.query(queryText, [req.user.id, eventId]);
      await client.query('COMMIT');
      res.sendStatus(201);
    }catch(err) {
      console.log('ROLLBACK', err);
      await client.query('ROLLBACK');
      throw err;
    }finally {
      client.release();
    }
  })().catch( (error) => {
    console.log('CATCH', error);
    res.sendStatus(500);
  });

});


// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.get('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
