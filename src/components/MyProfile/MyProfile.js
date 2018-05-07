import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';
import Paper from 'material-ui/Paper';
import MyProfileView from '../MyProfileView/MyProfileView';
import { connect } from 'react-redux';

class MyProfile extends Component {
    render() {
        let myGolf = this.props.state.golfProfile.map((golfer) => {
            console.log(this.props);
            console.log('golfer:', golfer);
            return <MyProfileView handleClickEdit = {this.props.handleClickEdit} golfer={golfer}/> 
          })
        return (
            <div>
                {myGolf}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    state,
  });

export default connect(mapStateToProps)(MyProfile);
