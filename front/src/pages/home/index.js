import React from 'react';

import NewsItem from '../../components/NewsItem';

import './home.css';

class HomePage extends React.Component {
    state = {
        news: null,
        //newsError: null,
    };
    async componentDidMount() {
        this.setState({news: null}) 
        const response = await fetch('http://localhost:3001/api/news');
        const data = await response.json();
        this.setState({ news: data })
    }

    render() {
        const { news } = this.state;
        
        return (
            <main className='main'>
                <div className='news-feed'>
                    {news ? news.map(news => (
                        <NewsItem key={news._id} news={news} />
                    )) : (<p>loading...</p>)} 
                </div>
            </main>
        );
    }
}

export default HomePage;
