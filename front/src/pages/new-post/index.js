import React from "react";
import { useNavigate } from "react-router-dom"

import "../../pages/user";
import './new-post.css';

class PostForm extends React.Component {
    state = {
        title: '',
        titleError: null,
        text: '',
        textError: null,
        img: '',
        imgError: null,
    };

    titleChangeHandler = event => {
        const title = event.target.value;
        this.setState({
            title,
            titleError: !title,
        });
    };

    textChangeHandler = event => {
        const text = event.target.value;
        this.setState({
            text,
            textError: !text,
        });
    };

    imgChangeHandler = event => {
        const img = event.target.value;
        this.setState({
            img,
            imgError: !img,
        });
    }

    submitHandler = event => {
        event.preventDefault();
        const { title, text, img } = this.state;

        if(title && (text || img)) {
            this.setState({
                title: '',
                titleError: false,
                text: '',
                textError: false,
                img: '',
                imgError: false,
            });
            this.props.onSubmit();
            return;
        }
        this.setState({
            titleError: !title,
            textError: !text,
            imgError: !img,
        });
    };

    render() {
        const { title, titleError, text, textError, img, imgError} = this.state;

            return (
            <form className='post-form' onSubmit={this.submitHandler}>
                    <div className='post-form__field'>
                        <input 
                            value={title}
                            onChange={this.titleChangeHandler}
                            placeholder='Тема нового поста'
                        />
                        {titleError ? (
                            <div className='error'>Впишите тему</div>
                        ) : null}
                    </div>

                    <div className='post-form__field'>
                        <textarea
                            rows='10'
                            value={text}
                            onChange={this.textChangeHandler}
                            placeholder='Текст вашего поста'
                        ></textarea>
                    </div>

                    <div className='post-form__field'>
                        <input 
                            value={img}
                            onChange={this.imgChangeHandler}
                            placeholder='Добавьте ссылку на картинку к посту'
                        />
                    </div>
                    {textError && imgError ? (
                            <div className='error'>Добавьте текст к посту 
                            или ссылку на картинку</div>
                        ) : null}
                    
                    <button className='button' type='submit'>
                        Опубликовать
                    </button>
            </form>
        );
    }
}

export default PostForm;
