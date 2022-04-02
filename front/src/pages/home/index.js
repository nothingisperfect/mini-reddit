import React from 'react';

import About from '../../components/About';
import NewsItem from '../../components/NewsItem';
import Header from '../../components/Header';

import news from '../../news';

class HomePage extends React.Component {

    render() {
        return(
            <div className='app'>
                <Header brand='Mini Reddit'/>

                <main className='main'>
                    <About title='test app'>
                        <p>the best mini reddit ever</p>
                    </About>

                    <div className='news-feed'>
                        <div className='container'>
                            {news.map(news => (
                                <NewsItem key={news.id} news={news} />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default HomePage;
