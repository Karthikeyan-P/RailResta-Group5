import React from "react";
import './Dashboard.css'
import instagram from './instagram-new.png'
import facebook from './facebook-new.png'
import google from './google-logo.png'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            registeredUsers: [],
            email: "",
            password: "",
            isLoggedin: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:3004/RegisteredUsers').then(
            response => {
                return response.json()
            }).then(
                data => {
                    console.log(JSON.stringify(data))
                    this.setState({
                        registeredUsers: data
                    })
                }
            )
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    };

    isAuthorizedUser = event => {
        event.preventDefault()
        var userEmail = this.state.email
        var password = this.state.password
        this.state.registeredUsers.forEach(user => {
            if (user.email === userEmail && user.password === password) {
                // this.setState({ isLoggedin: true })
                alert('success')
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Login to Your Account</h1>
                <p id="subtitle">Login using social networks</p>
                <div className="logos">
                    <img src={google} />
                    <img src={instagram} />
                    <img src={facebook} />
                </div>
                <p id="seperator">OR</p>
                <form className="login-form">
                    <input type="email" id="email" name="email" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email} required />
                    <input type="password" id="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} required />
                    <button type="submit" onClick={this.isAuthorizedUser}>Login</button>
                </form>
            </div>
        )
    }
}

export default Dashboard