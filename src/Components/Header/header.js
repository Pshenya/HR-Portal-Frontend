import React from 'react';

import './header.css'

import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ROUTES } from "../Routes/routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";


// const useStyles = makeStyles((theme) => ({
//     root: {
//         padding: '2px 2px',
//         display: 'flex',
//         alignItems: 'center',
//         width: 300,
//     },
//     input: {
//         marginLeft: theme.spacing(1),
//         flex: 1,
//     },
//     iconButton: {
//         padding: 5,
//     },
// }));

export default function Header({isLoggedIn}) {

    const loginPath = isLoggedIn ? ROUTES.PROFILE : ROUTES.LOGIN;

    return (
        <div className="header">
            <header>
                <Navbar collapseOnSelect expand="sm">
                    <Container fluid>
                        <Navbar.Brand className="nav-logo">
                            <h1 className="d-inline-block align-top logo">
                                <Link to="/">LOGO</Link>
                            </h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link as={Link} to={ROUTES.COMMENTS}>ОТЗЫВЫ</Nav.Link>
                                <Nav.Link as={Link} to={ROUTES.RATINGS}>ЛУЧШИЕ HR</Nav.Link>
                                <Nav.Link as={Link} to={ROUTES.VACANCIES}>ВАКАНСИИ</Nav.Link>
                                <Nav.Link as={Link} to={ROUTES.STATS}>СТАТИСТИКА ЗП</Nav.Link>
                            </Nav>
                            <Link className="header-icon" to={ROUTES.PROFILE}>
                                <FontAwesomeIcon icon={faUser} size="1x"/>
                            </Link>
                            {/*<div className="flex-placeholder"></div>*/}
                            {/*<Paper component="form" className={classes.root}>*/}
                            {/*    <InputBase*/}
                            {/*        className={classes.input}*/}
                            {/*        placeholder="Поиск"*/}
                            {/*        inputProps={{'aria-label': 'search'}}*/}
                            {/*    />*/}
                            {/*    <IconButton type="submit" className={classes.iconButton} aria-label="search">*/}
                            {/*        <SearchIcon/>*/}
                            {/*    </IconButton>*/}
                            {/*</Paper>*/}

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}

