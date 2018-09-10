import React from "react";
import './form.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

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
    
    change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
        [e.target.name]: e.target.value
    });
    };

    validate = () => {
    let isError = false;
    const errors = {
        firstNameError: "",
        lastNameError: "",
        usernameError: "",
        emailError: "",
        passwordError: ""
    };

    if (this.state.username.length < 5) {
        isError = true;
        errors.usernameError = "Username needs to be atleast 5 characters long";
    }

    if (this.state.email.indexOf("@") === -1) {
        isError = true;
        errors.emailError = "Requires valid email";
    }

    this.setState({
        ...this.state,
        ...errors
    });

    return isError;
    };

    onSubmit = e => {
    e.preventDefault();
    
    const err = this.validate();
    if (!err) {
        // clear form
        this.setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
        });
        this.props.onSubmit(this.state);
    }
    };
    render () {

        const { classes } = this.props;
        return (
            <div>

                <FormControl>
                    <InputLabel >Username</InputLabel>
                    <Input 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.stateChangeHandler} />
                    <FormHelperText id="name-error-text">{this.state.usernameError}</FormHelperText>
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
                    <FormHelperText id="name-error-text">{this.state.passwordError}</FormHelperText>
                </FormControl>
                <br/>
                <Button 
                    variant="contained" 
                    size="small" 
                    color="primary" 
                    className={classes.button}
                    //onClick={this.toggleHandler.bind(this)}>
                    onClick={e => this.onSubmit(e)}
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