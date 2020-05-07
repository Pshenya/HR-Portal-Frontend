import React, { Component } from 'react';

import {connect} from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { ROUTES } from '../../../../Routes/routes';
import { userActions } from "../../../../Actions";

import '../login.css';
import '../forms.css';

import 'bootstrap-social';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faGoogle, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Form, Button } from "react-bootstrap";


class SignInPage extends Component {
    constructor(props) {
        super(props);

        // reset login status

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {email, password} = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    render() {
        const {loggingIn} = this.props;
        const {email, password, submitted} = this.state;
        return (
            <div className="signIn-content">
                <div className="signIn-header">
                    <h1 className="signIn-logo">
                        <Link to="/">LOGO</Link>
                    </h1>
                    <Link className="x-class" aria-label="back to HR's" to={ROUTES.MAIN}>
                        <FontAwesomeIcon icon={faTimesCircle} size="2x"/>
                    </Link>
                </div>
                <div className="signIn-main">
                    <h1 className="signIn-title">Вход</h1>
                    <div className="new-user">
                        <h3>У вас ещё нет аккаунта? <Link to={ROUTES.REGISTRATION}>Создать</Link></h3>
                    </div>
                    <div className="login-content">
                        <div className="left-content">
                            <Form className="common-form mx-auto" name="form" onSubmit={this.handleSubmit}>
                                <Form.Group className={submitted && !email ? ' has-error' : ''}>
                                    <Form.Label htmlFor="email">Эл. почта</Form.Label>
                                    <Form.Control type="text" name="email" value={email} onChange={this.handleChange} />
                                    {submitted && !email &&
                                    <div className="help-block">Это обязательное поле</div>
                                    }
                                </Form.Group>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <Form.Label htmlFor="password">Пароль</Form.Label>
                                    <Form.Control type="password" name="password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                    <div className="help-block">Это обязательное поле</div>
                                    }
                                </div>
                                <Form.Group>
                                    <button className="form-btn">Войти</button>
                                    {loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </Form.Group>
                            </Form>
                            {/*<Form onSubmit={this.handleSubmit} className="common-form mx-auto">*/}
                            {/*    <Form.Group controlId="formEmail">*/}
                            {/*        <Form.Form.Label>Эл. почта:</Form.Form.Label>*/}
                            {/*        <Form.Control type="email" name="email" value={email} onChange={this.handleChange} />*/}
                            {/*    </Form.Group>*/}

                            {/*    <Form.Group controlId="formPassword">*/}
                            {/*        <Form.Form.Label>Пароль:</Form.Form.Label>*/}
                            {/*        <Form.Control type="password" name="password" value={password} onChange={this.handleChange}/>*/}
                            {/*    </Form.Group>*/}
                            {/*    <Form.Group controlId="formBasicCheckbox">*/}
                            {/*        <Form.Check type="checkbox" Form.Label="Запомнить меня"/>*/}
                            {/*    </Form.Group>*/}
                            {/*    <Button className="form-btn">Войти</Button>*/}
                            {/*</Form>*/}
                        </div>
                        <div className="divider"></div>
                        <div className="right-content">
                            <a className="btn btn-block btn-social btn-google">
                                <FontAwesomeIcon className="google-icon" icon={faGoogle}/>
                                Sign in with Google
                            </a>
                            <a className="btn btn-block btn-social btn-facebook">
                                <FontAwesomeIcon className="google-icon" icon={faFacebook}/>
                                Sign in with Facebook
                            </a>
                            <a className="btn btn-block btn-social btn-linkedin">
                                <FontAwesomeIcon className="google-icon" icon={faLinkedin}/>
                                Sign in with LinkedIn
                            </a>
                            <a className="btn btn-block btn-social btn-github">
                                <FontAwesomeIcon className="google-icon" icon={faGithub}/>
                                Sign in with Github
                            </a>
                        </div>
                    </div>
                    <div className="terms-of-use">
                        <p>Входя в аккаунт, вы соглашаетесь с <a href="/">пользовательским соглашением</a> и,
                            подтверждаете,
                            что ознакомились с <a href="/">политикой конфиденциальности</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { loggingIn } = state.auth;
    return {loggingIn};
};

const mapDispatchToProps = {
    login: userActions.login,
    logout: userActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);