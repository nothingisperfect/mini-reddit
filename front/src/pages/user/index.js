import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { AppState } from "../../AppState";

import App from "../../App";
import './user.css';

class User extends React.Component {
    state = {
        nickname: '',
        nicknameError: null,
    };

    nickChangeHandler = event => {
        const nickname = event.target.value;
        this.setState({
            nickname,
            nicknameError: !nickname,
        });
    };

    submitHandler = event => {
        event.preventDefault();
        const { nickname } = this.state;

        if(nickname) {
            this.setState({
                nickname: '',
                nicknameError: false,
            });
        }
        this.setState({
            nicknameError: !nickname,
        });
        this.props.user.nickname = nickname;
        ReactDOM.render(<App/>, document.getElementById('root'));
    };

    logoutHandler = event => {
        event.preventDefault();
        this.props.user.nickname = null;
        ReactDOM.render(<App/>, document.getElementById('root'));
    }

    render() {
        const { nickname, nicknameError } = this.state;
        
        if(!this.props.user.nickname) {
            return (
            <form className='user-form' onSubmit={this.submitHandler}>
                <div className='user-form__field'>
                    <input 
                        value={nickname}
                        onChange={this.nickChangeHandler}
                        placeholder='Введите имя пользователя'
                    />
                    {nicknameError ? (
                        <div className='error'>Некорретное имя пользователя</div>
                    ) : null}

                        <button className='button' type='submit'>Войти</button>
                 </div>
            </form>
        )} else {
            return (
            <form className='user-form' onSubmit={this.logoutHandler}>
            <div className='user-form__field'>
                
                <p>{this.props.user.nickname}</p>
                <button className='button' type='submit'>Выйти</button>
                
                </div>
            </form>
        )}
    }
}

export default User;
