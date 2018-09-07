import React from "react";
import './form.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';

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
        usernameError: "",
        firstnameError: "",
        lastnameError: "",
        emailError: "",
        passwordError: "",
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

    validate = () =>{
        console.log("Submit pressed")
        let isError = false;
        const errors = {
            firstNameError: "",
            lastNameError: "",
            usernameError: "",
            emailError: "",
            passwordError: ""
          };

        if(this.state.username.length < 5){
            isError=true;
            errors.usernameError = "Username must be longer than 4 symbols"
        }

        if(this.state.email.indexOf("@") === -1){
            isError=true;
            errors.emailError = "Email address must be valid"
        }

        if(isError){
            this.setState({
                ...this.state,
                ...errors
            })
            
        }
        console.log(this.state);
        return isError;
        
    }

    render () {

        const { classes } = this.props;
        return (
            <div>

                <FormControl className={classes.formControl}>
                    <InputLabel >Username</InputLabel>
                    <Input 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.stateChangeHandler} />
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel >Firstname</InputLabel>
                    <Input 
                        name="firstname" 
                        value={this.state.firstname} 
                        onChange={this.stateChangeHandler} />
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel >Lastname</InputLabel>
                    <Input 
                        name="lastname" 
                        value={this.state.lastname} 
                        onChange={this.stateChangeHandler} />
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel >Email</InputLabel>
                    <Input 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.stateChangeHandler}
                        />
                    <FormHelperText id="name-error-text">{this.state.emailError}</FormHelperText>
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel >Password</InputLabel>
                    <Input 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.stateChangeHandler} />
                </FormControl>
                <br/>
                <TextField
                    id="password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <br/>
                <Button 
                    variant="contained" 
                    size="small" 
                    color="primary" 
                    className={classes.button}
                    //onClick={this.toggleHandler.bind(this)}>
                    onClick={this.validate.bind(this)}
                    >
                    Submit
                </Button>
                
                {/*this.state.show ? 
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
                
                :null*/}
                
            </div>
        )
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

  export default withStyles(styles)(Form);