import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import './compStyle/News.css'


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const fetchData = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=a5ceadd388ce4af99c405fbfe2af64a1&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsBuzz`;
        fetchData();
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=a5ceadd388ce4af99c405fbfe2af64a1&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

    return (
        <div className="n-cont">
            <div className="heading"><h1>NewsBuzz - Top {capitalize(props.category)} Headlines</h1></div>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="news-grid">
                    {articles.map((element) => {
                        return <NewsItem key={element.url} img={element.urlToImage ? element.urlToImage : "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png"} title={element.title ? element.title : "No title"} description={element.description ? ((element.description.length > 155) ? element.description.slice(0, 152).concat("...") : element.description) : "No description"} url={element.url} author={element.author ? element.author : "Unknown"} source={element.source.name ? element.source.name : "Unknown"} dates={element.publishedAt} />
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


export default News
