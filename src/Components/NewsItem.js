import React, { Component } from 'react'
import './newsitem.css'

const NewsItem = (props)=> {

        let {title, description, imageUrl, url,author, date} = props
        return (
            <>
                <div className='main'>
                    <div className='faltu'><img src={imageUrl} alt='' width='300px'/></div>
                    <div className='description'><h5>{title}</h5><p>{description}</p><p> By {author} on {date}</p></div>
                    <a href={url} target="_blank" rel="noopener noreferrer"><input type='button' value='Read More' className='button'/></a>
                </div>
            </>
        )
}

export default NewsItem