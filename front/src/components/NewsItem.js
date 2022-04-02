import React from "react";
import './NewsItem.css';

// import { Link } from 'react-router-dom';

function NewsItem({ news }) {
    return (
        <div className='news-item'>
            <div className='news-item__header'>
                <div className='news-item__title'>{news.title}</div>
                <div className='news-item__username'>{news.author}</div>
            </div>
            <img
                className='news-item_image'
                src={news.image}
                alt={news.title}
            />
            <p>{news.text}</p>
        </div>
    );
}

export default NewsItem;
