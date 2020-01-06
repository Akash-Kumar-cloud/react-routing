import React, { Component } from 'react';
import Axios from 'axios';
import UserList from './UserList';

class Users extends Component{
    state = {
        users: [],
    };

    componentDidMount(){
        Axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            this.setState({users: res.data});
        });
    }
    render(){
        console.log('some')
        return(
        this.state.users.map((userIter) => {
            return <UserList key = {userIter.id} user = {userIter} />
        }))
       
        // return (
        //     <div>
        //         {userList}
        //     </div>
        // )

    }
}
export default Users;