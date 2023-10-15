import React, { useState, useEffect } from "react";
import TopArticle from "../TopArticle/TopArticle";
import "./NewsArticle.css";

const NewsArticle = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const apiKey = ""; // Replace with your News API key
  useEffect(() => {
    // Define a function to fetch news data
    const fetchNewsData = async () => {
      try {
        props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}&page=${pageNumber}&pageSize=9`;
        const response = await fetch(url);
        props.setProgress(30)
        const data = await response.json();
        props.setProgress(80)
        if (data.status === "ok") {
          setArticles(data.articles);
          let totalP = Math.ceil(data.totalResults/8);
          setTotalPages(totalP);
        } else {
          console.error("Failed to fetch news data.");
        }
        props.setProgress(100)
      } catch (error) {
        console.error("An error occurred while fetching news data:", error);
      }
    };
    // Call the fetchNewsData function when the component mounts or when the page number changes
    fetchNewsData();
  }, [pageNumber, props.category]);
  const capitalizeFirstLetter = (word)=> {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }  
  document.title = "NewsMingle - " + capitalizeFirstLetter(props.category)
  return (
    <>
    <TopArticle url={articles[0]!== undefined?articles[0].url:""} urlToImage={articles[0]!== undefined?articles[0].urlToImage:""} title={articles[0]!== undefined?articles[0].title:""} description={articles[0]!== undefined?articles[0].description:""}/>
    <h2>Top {capitalizeFirstLetter(props.category)} Headlines:</h2>
      <div className="news-articles">
        {articles.map((news,index) => {
          if (index === 0) {
            return null;
          }
          return (
            <div className="box" key={news.url}>
              <div className="author">
                <p>{news.source.name}</p>
              </div>
              <div className="image-box">
                <img src={news.urlToImage !== null ?news.urlToImage: "https://images.unsplash.com/photo-1586880234202-32a56790c681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} alt={news.title} />
              </div>
              <div className="content-box">
                <h4>{news.title.length >= 60 ? news.title.slice(0, 65) + "..." : news.title}</h4>
                <p>{news.description !== null ? news.description.slice(0, 90) + "..." : ""}</p>
              </div>
              <div className="btns">
                <a href={news.url} target="_blank" rel="noreferrer" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="action-btns">
        <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber === totalPages-1}>Next</button>
      </div>
    </>
  );
};

NewsArticle.defaultProps = {
  category: 'general'
}

export default NewsArticle;
