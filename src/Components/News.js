import React, {useState} from 'react'
import { useEffect } from 'react';
import NewsItem from './NewsItem'
import './news.css'
import Spinner from '../Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {

      const [articles, setArticles] = useState([
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
              "id": null,
              "name": "BBC News"
            },
            "author": null,
            "title": "Troubles legacy act: Ireland takes human rights case against UK - BBC.com",
            "description": "The Irish government takes a human rights case over UK's decision to offer immunity for Troubles-era crimes.",
            "url": "https://www.bbc.com/news/uk-northern-ireland-67769920",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6617/production/_115553162_soldiersrunfrombomb.jpg",
            "publishedAt": "2023-12-20T15:50:00Z",
            "content": "The Irish government is to begin a legal challenge against the UK government over its decision to offer immunity for Troubles-era crimes. \r\nThe UK's controversial Troubles legacy act became law in Se… [+6482 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Athletic"
            },
            "author": "Zack Rosenblatt",
            "title": "Aaron Rodgers’ season is (officially) over, so Jets mint turn the page to 2024 - The Athletic",
            "description": "Rodgers said Tuesday he would not play again this season. What implications does that have for the final three games and beyond?",
            "url": "https://theathletic.com/5150462/2023/12/20/aaron-rodgers-jets-2024-roster/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/12/19203141/GettyImages-1737678292-scaled-e1703035927819.jpg",
            "publishedAt": "2023-12-20T15:48:17Z",
            "content": "The New York Jets dream is officially dead. Maybe it really died four plays into the season, but officially it happened Tuesday, when Aaron Rodgers finally succumbed to the reality of his Achilles in… [+7070 chars]"
          }
      ])

      const [page, setPage] = useState(1);
      const [loading, setLoading] = useState(true);
      const [totalResults, setTotalResults] = useState(0);

      const update = async()=>{
        props.setProgress(10)
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=917e1aa9cbd746528a0b6e36f4c5c267&page=1&pagesize=12`
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30)
      let parsedData = await data.json();
      setLoading(false)
      props.setProgress(70)
      setArticles(parsedData.articles);
      document.title=`News App - ${capitalize()}`
      setTotalResults(parsedData.totalResults)
      props.setProgress(100)
      setPage(1)
      }

    useEffect(()=>{
      update();
    }, [])

    // const previous = async ()=>{
    //   setPage(page-1)
    //   update()
    // }

    // const next = async ()=>{
    //   setPage(page+1)
    //   update()
    // }

    const capitalize = ()=>{

      let a = (props.category)[0].toUpperCase() + (props.category).slice(1);
      return a;
    }

    const fetchMoreData = async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=917e1aa9cbd746528a0b6e36f4c5c267&page=${page+1}&pagesize=12`
      setPage(page+1)
      setLoading(false)
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
      document.title=`News App - ${capitalize()}`
      setTotalResults(parsedData.totalResults)
    }


    return (
        <>
      <h2 style={{marginTop: '50px', display: 'flex', justifyContent: 'center'}}>News - {capitalize()} - Top HeadLines</h2>
      {loading && <div className="flex"><Spinner/></div>}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<div className='flex'>{!loading && <Spinner/>}</div>}
        >
      <div className='flex'>
        {/* {this.state.loading && <Spinner/>} */}
        
          {!loading && articles.map((e)=>{
            return <NewsItem key={e.url} title={e.title?e.title: "No Title"} description={e.description} imageUrl={e.urlToImage?e.urlToImage: 'https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo.png?v=20221020135629&w=240&h=240&zc=2'} url={e.url} author={e.author?e.author:"Unknown"} date={new Date(e.publishedAt).toGMTString()}/>
        })}
      </div>
      </InfiniteScroll>
      {/* <div className='buttton'>
        <input type='button' disabled={this.state.page<=1} value='Previous' onClick={this.previous} className='margin1'/>
        <input type='button' disabled={this.state.page>=6} value='Next' onClick={this.next} className='margin2'/>
      </div> */}
      </>
    )
}

News.defaultProps = {
  country: 'in',
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
}

// https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=0427f36be56b47d4b165c5cfad1a0cc8&page=${page+1}&pagesize=12
// https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=917e1aa9cbd746528a0b6e36f4c5c267&page=1&pagesize=12
// https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f1acc85e29584427b1a29da5796acdb8&page=${page+1}&pagesize=12
export default News