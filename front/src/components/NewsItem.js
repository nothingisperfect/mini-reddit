import React from "react";
import './NewsItem.css';
import { AppState } from '../AppState';
import ReactDOM from 'react-dom';

function NewsItem({ news }) {
    var clickHandler = async () => {
        await fetch("http://localhost:3001/api/news/" + news._id, {
            method: 'DELETE'
        })
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
    }

    return (
        <div className='news-item'>
            <div className='news-item__header'>
                <div className='news-item__title'>{news.title}</div>
                <div className='news-item__username'>{news.author}</div>
            </div>
            {news.image && <img
                className='news-item_image'
                src={news.image}
                alt={news.title}
            />}
            <p>{news.text}</p>
            <div>
                {AppState.nickname === news.author && 
                <button className='button' type='button' onClick={clickHandler}>Удалить</button>}
            </div>
        </div>
    );
}

export default NewsItem;
