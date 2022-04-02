import React from 'react';

import NewsItem from '../../components/NewsItem';

import './home.css';

import news from '../../news';

class HomePage extends React.Component {

    render() {
        return (
            <main className='main'>
                <div className='news-feed'>
                    {news.map(news => (
                        <NewsItem key={news.id} news={news} />
                    ))}
                </div>
            </main>
        );
    }
}

export default HomePage;
