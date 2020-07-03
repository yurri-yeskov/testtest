import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import './stylesheet/styles.scss';

import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import LoginWindow from '@components/Login';
import RegisterWindow from '@components/Register';
import ForgotPasswordWindow from '@components/ForgotPassword';

import MainPage from '@pages/MainPage';
import TestPage from '@pages/TestPage/TestPage';
import AppContext from './contexts/AppContext';

const App = () => {
    return (
        <HashRouter>
            <AppContext>
                <Header />
                <Main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                        <Route path="/test">
                            <TestPage />
                        </Route>
                    </Switch>

                    <LoginWindow />
                    <RegisterWindow />
                    <ForgotPasswordWindow />
                </Main>
                <Footer />
            </AppContext>
        </HashRouter>
    );
};

export default App;
