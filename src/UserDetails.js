import React,{ Component} from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


class UserDetails extends Component{
    state = {
        user : null
    };

    componentDidMount(){
        Axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
        .then(res => {
            this.setState({user: res.data});
        });
    }
    render(){
        if(this.state.user === null){
            return 'loading...'
        }
        return (
            <div style={{backgroundColor:'#FFFACD'}}>
<center><Card variant="outlined" style={{maxWidth:275,backgroundColor:'cyan'}} >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
        <img src={`https://joeschmoe.io/api/v1/${this.state.user.name}`} alt="Avatar"></img>
        </Typography>
        <Typography color="textSecondary">
          {this.state.user.name} ( {this.state.user.username})
        </Typography>
        <Typography variant="body2" component="p">
          {this.state.user.email}
        </Typography><br />
        <Typography color="textSecondary">
        <InputLabel htmlFor="grouped-select">Address</InputLabel>
        <Select>
          <MenuItem>Street - {this.state.user.address.street}</MenuItem>
          <MenuItem>City - {this.state.user.address.city}</MenuItem>
                <MenuItem>Zipcode - {this.state.user.address.zipcode}</MenuItem>
        </Select>
        </Typography><br />
        <Typography color="textSecondary">
          {this.state.user.phone}
        </Typography>
        <Typography color="textSecondary">
          {this.state.user.website}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </center>
            </div>

        );
    }
}
export default UserDetails;