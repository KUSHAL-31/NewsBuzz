import React from 'react'
import './compStyle/NewsItem.css'

const NewsItem = ({ img, title, description, url, author, source, dates }) => {
    return (
        <>
            <div className="news-box">
                <p className="source">{source}</p>
                <div className="news-image">
                    <img src={img} alt="null" />
                </div>
                <div className="news-date"><h3>{author}</h3>
                    <p>{Date(dates)}</p>
                </div>
                <div className="news-heading">{title}</div>
                <div className="news-info">{description}</div>
                <button><a href={url} target="_blank">Read More</a></button>
            </div>
        </>
    )
}

export default NewsItem
