import React from "react";

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
            this.props.onSubmit();
            return;
        }
        this.setState({
            nicknameError: !nickname,
        });
    };

    render() {
        const { nickname, nicknameError } = this.state;
        
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
            </div>

            <button className='button' type='submit'>
                Войти
            </button>

            
        </form>
        );
    }
}

export default User;
