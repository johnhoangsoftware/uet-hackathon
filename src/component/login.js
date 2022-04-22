import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    } 


    config = {
            method: 'post',
            url: 'https://covid-goodlife.herokuapp.com/api/auth/login?username=hanzo&password=hide29f90892',
            headers: { }
    };

    
    handleChange = event => {
        console.log(event.target.value);
        this.setState({ username: event.target.value });
    }

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    }

    handlerLogin = e => {
        var config = {
            method: 'post',
            url: 'https://covid-goodlife.herokuapp.com/api/auth/login?username=hanzo&password=hide29f90892',
            headers: { }
        };
        axios(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
        
    }

    

    render() {
        return (
            <form onSubmit={this.handlerLogin} className = "login-form">

                <h3 className="login-title">Đăng nhập</h3>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Mật khẩu" onChange={this.handleChangePassword} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                
                <div className="button-container">
                    <button type= "submit" className="button-login" href="#">Sign in</button>
                </div>
           
                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
            </form>
        );
    }
}