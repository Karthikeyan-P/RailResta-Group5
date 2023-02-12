import React, { useEffect, useRef, useState } from 'react';
import './Registration.css';

function displayPasswordCriteria() {
    var criteriaList = document.getElementById('pwd-criteria')
    var pwdCriterias = [
        "A password should be alphanumeric.",
        "Password must have atleast one uppercase character.",
        "Password must contain a special character (@, $, !, &, etc).",
        "Password length must be atleast 8 characters."]
    if (criteriaList.childNodes.length === 0) {
        var ul = document.createElement("ul")
        var li
        pwdCriterias.forEach(ele => {
            li = document.createElement("li")
            li.setAttribute("classname", "lst-item")
            li.innerHTML = ele
            ul.appendChild(li)
        });
        criteriaList.appendChild(ul)
    }
}

function Register(props) {
    const initialRender = useRef(true)
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [formErrors, setFormErrors] = useState({
        passwordValid: 'Password meets Criteria',
        confirmPwd: 'Password Matches'
    })

    const validatePwd = (pwd) => {
        var pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        return pattern.test(pwd) ? true : false
    }

    const handlePwdInput = (pwd) => {
        setPassword(pwd)
        var isValid = validatePwd(pwd)
        if (!isValid) {
            setFormErrors({ ...formErrors, passwordValid: 'Password does not match the requirements' })
        }
        else {
            setFormErrors({ ...formErrors, passwordValid: 'Password meets Criteria' })
        }
    }

    const removeSection = () => {
        var criteriaList = document.getElementById('pwd-criteria')
        var errorMsg = document.getElementById('error-msg')
        if (criteriaList.children.length !== 0) {
            criteriaList.removeChild(criteriaList.children[0])
        }
        if (errorMsg.children.length !== 0) {
            errorMsg.removeChild(errorMsg.children[0])
        }
    }

    const doesPwdMatch = (confirmPwd) => {
        setConfirmPassword(confirmPwd)
        var pwd = document.getElementById('password').value
        if (pwd !== confirmPwd) {
            setFormErrors({ ...formErrors, confirmPwd: 'Re-entered password does not match given password' })
        }
        else {
            setFormErrors({ ...formErrors, confirmPwd: 'Password Matches' })
        }
    }

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
        }
        else {
            var p1, p2
            var activeElement = document.activeElement.getAttribute('id')
            switch (activeElement) {
                case 'password':
                    const { passwordValid } = formErrors
                    var errorSection = document.getElementById('error-msg')
                    if (errorSection.childNodes.length === 0) {
                        p1 = document.createElement('p')
                    }
                    else {
                        errorSection.removeChild(errorSection.children[0])
                        p1 = document.createElement('p')
                    }
                    passwordValid === 'Password meets Criteria' ? p1.setAttribute("class", "successMsg") : p1.setAttribute("class", "errorMsg")
                    p1.innerHTML = passwordValid
                    errorSection.appendChild(p1)
                    break

                case 'confirm-password':
                    var confirmPwdMsg = document.getElementById('confirm-pwd-msg')
                    console.log(confirmPwdMsg)
                    const { confirmPwd } = formErrors
                    if (confirmPwdMsg.childNodes.length === 0) {
                        p2 = document.createElement('p')
                    }
                    else {
                        confirmPwdMsg.removeChild(confirmPwdMsg.children[0])
                        p2 = document.createElement('p')
                    }
                    p2.innerHTML = confirmPwd
                    p2.setAttribute("class", "successMsg")
                    confirmPwdMsg.appendChild(p2)
                    break

                default:
                    break;

            }

        }
    }, [formErrors])


    return (
        <div>
                <h2 className="title form-title">Customer Registration Form</h2>
                <form className="registration-form">
                <div className="form-content">
                    <div className="customer-info">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name" value={firstName}
                            onChange={(event) => setfirstName(event.target.value)} required />
                    </div>
                    <div className="customer-info">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name" value={lastName}
                            onChange={(event) => setlastName(event.target.value)} required />
                    </div>
                    <div className="customer-info">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email}
                            onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className="customer-info">
                        <label id="pwd" htmlFor="password">Password</label>
                        <div id="pwd-criteria"></div>
                        <input type="password" id="password" name="password" value={password}
                            onChange={(event) => handlePwdInput(event.target.value)} onClick={displayPasswordCriteria} onBlur={removeSection} required />
                        <div id="error-msg"></div>
                    </div>
                    <div className="customer-info">
                        <label htmlFor="confirm-password">Confirm-Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword}
                            onChange={(event) => doesPwdMatch(event.target.value)} required />
                        <div id="confirm-pwd-msg"></div>
                    </div>
                    <div className="customer-info">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address" value={address}
                            onChange={(event) => setAddress(event.target.value)} />
                    </div>
                    <button type="submit" id="btn" onClick={() => alert('Customer Registration Was Successful')}>Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Register