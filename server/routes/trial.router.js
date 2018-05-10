router.post('/attend', (req, res, next) => {
    // console.log('req.body:',req.body);
    if(req.isAuthenticated()){
      const attending = req.body;
      // console.log('req.body2:', attending);
      (async () => {
        const client = await pool.connect();
        try {
          await client.query('BEGIN');
          let queryText = `SELECT event_id FROM attendee WHERE event_id = $1`;
          const attendeeResult = await client.query(queryText, [attending.id] )
          console.log('attendeeResult:', attendeeResult.rows);
          if(attendeeResult.rows.length >= 4){
            res.sendStatus(500);
            alert('This Event is full, Please select another Event!');
          }else {
            let queryText = `INSERT INTO attendee (person_id, event_id) VALUES ($1, $2)`;
            pool.query(queryText, [req.user.id, attending.id])
            .then( () => {res.sendStatus(201); })
            .catch( (error) => {
              if(error.constraint === 'uc_tab'){
                  res.sendStatus(501);
          }else {
            console.log('error in POST /attend:',error);
            res.sendStatus(500);
        }      
      })
          }
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
      
    }else {
      res.sendStatus(403);
    }
  
  });