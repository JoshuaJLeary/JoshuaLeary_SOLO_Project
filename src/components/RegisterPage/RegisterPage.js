import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
      golfProfile: {
        name: '',
        city: '',
        skill: '',
        bio: '',
        alcohol: false,
        tobacco: false,
      }
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const request = new Request('api/user/register', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          golfProfile: this.state.golfProfile,
        }),
      });

      // making the request to the server to post the country
      fetch(request)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/home');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
      golfProfile: {
      ...this.state.golfProfile,
      [propertyName]: event.target.value,
      }
    });
    // console.log(this.state)

  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        {this.renderAlert()}
        <form onSubmit={this.registerUser}>
          <h1>Create Profile</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                name="name"
                value={this.state.golfProfile.name}
                onChange={this.handleInputChangeFor('name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              City:
              <input
                type="text"
                name="city"
                value={this.state.golfProfile.city}
                onChange={this.handleInputChangeFor('city')}
              />
            </label>
           <div>
           <InputLabel htmlFor="skill_level">Skill Level</InputLabel>
           <Select
            value={this.state.golfProfile.skill}
            onChange={this.handleInputChangeFor('skill')}
            // inputProps={{
            //   name: 'age',
            //   id: 'age-simple',
            // }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value='Beginner'>Beginner</MenuItem>
            <MenuItem value='Amateur'>Amateur</MenuItem>
            <MenuItem value='Professional'>Professional</MenuItem>
          </Select>
            {/* <label htmlFor="skill">
              Skill Level:
              <input
                type="integer"
                name="skill"
                value={this.state.golfProfile.skill}
                onChange={this.handleInputChangeFor('skill')}
              />
            </label> */}
          </div>
          <div>
            <label htmlFor="bio">
              Bio:
              <input
                type="text"
                name="bio"
                value={this.state.golfProfile.bio}
                onChange={this.handleInputChangeFor('bio')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="alcohol">
              Alcohol:
              <input
                type="boolean"
                name="alocohol"
                value={this.state.golfProfile.alcohol}
                onChange={this.handleInputChangeFor('alcohol')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="tobacco">
              Tobacco:
              <input
                type="boolean"
                name="tobacco"
                value={this.state.golfProfile.tobacco}
                onChange={this.handleInputChangeFor('tobacco')}
              />
            </label>
          </div>
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value="Register"
            />
            <Link to="/home">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;

