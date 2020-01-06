import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import { Tooltip } from '@material-ui/core';



const UserList = (props) =>{
    return ( 
        <div style={{backgroundColor:'#8FBC8F'}}> 
        <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={`https://joeschmoe.io/api/v1/${props.user.name}`} alt="Avatar">
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <Link style={{textDecoration:'none'}}  to={"/user/" + props.user.id} key={props.user.id}>{props.user.name}</Link>
        </ListItem>
        <Divider variant="inset" component="li" />
        </List>  
    </div>
    )
} 
export default UserList;