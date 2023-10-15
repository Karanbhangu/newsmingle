import React from "react";
import "./TopArticle.css";

function TopArticle(props) {
  return (
    <>
      <div className={props.darkMode?"main-headline dark":"main-headline"} style={{ backgroundImage: `url(${props.urlToImage})` }}>
        <div className="fixed-headline">
          <h2>{props.title}</h2>
          <h4>{props.description}</h4>
          <a href={props.url} target="_blank" rel="noreferrer">Read full article here.</a>
        </div>
      </div>
    </>
  );
}

TopArticle.defaultProps = {
  urlToImage: 'https://plus.unsplash.com/premium_photo-1688561383203-31fed3d85417?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  title: 'Launching of NewsMingle by KaranBhangu',
  description: 'News is a project made by me while i was learning react. This project helped to gain a lot of knowledge about react, its working, how useState works. You can click below to get to my github account',
  url: 'https://github.com/karanbhangu'
}
export default TopArticle;