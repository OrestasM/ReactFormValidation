import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class Form extends React.Component{
    state = {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        show: false
    }

    stateChangeHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    toggleHandler = (e) =>{
        e.preventDefault();
        console.log("Toggle handler activated!");
        const showState = this.state.show;
        this.setState({
            show: !showState
        })
    }
    render () {

        const { classes } = this.props;
        return (
            <div>

                <FormControl className={classes.formControl}>
                <InputLabel >Username</InputLabel>
                <Input name="username" value={this.state.username} onChange={this.stateChangeHandler} />
                </FormControl>
                <br/>
                <FormControl>
                <InputLabel >Firstname</InputLabel>
                <Input name="firstname" value={this.state.firstname} onChange={this.stateChangeHandler} />
                </FormControl>
                <br/>
                <Button 
                    variant="contained" 
                    size="small" 
                    color="primary" 
                    className={classes.button}
                    onClick={this.toggleHandler.bind(this)}>
                    small
                </Button>
                <form>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.username} 
                        onChange={this.stateChangeHandler}/>
                    <br/>
                    <input 
                        type="text" 
                        name="firstname" 
                        placeholder="Firstname" 
                        value={this.state.firstname} 
                        onChange={this.stateChangeHandler.bind(this)}/>
                    <br/>
                    <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Lastname" 
                        value={this.state.lastname} 
                        onChange={this.stateChangeHandler.bind(this)}/>
                    <br/>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.stateChangeHandler.bind(this)}/>
                    <br/>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.stateChangeHandler.bind(this)}/>    
                    <br/>
                    <button onClick={this.toggleHandler.bind(this)}>Click here</button>
                </form>
                {this.state.show ? 
                    <div>
                    {this.state.username}
                    <br/>
                    {this.state.firstname}
                    <br/>
                    {this.state.lastname}
                    <br/>
                    {this.state.email}
                    <br/>
                    {this.state.password}
                    <br/>
                </div>
                
                :null}
                
            </div>
        )
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

  export default withStyles(styles)(Form);