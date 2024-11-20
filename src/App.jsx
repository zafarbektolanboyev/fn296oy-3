import React from "react";
import "./App.css";
import regularHeart from "./assets/heart-regular.svg";
import Card from "./components/Card";
import movieData from "./assets/movie.json";
import { useState } from "react";

function App() {
   const [likes, setLikes]= useState(0)
   function handleLike(isLiked){
    setLikes((prev) => (isLiked ? prev + 1 : prev - 1))
   }
  return (
    <>
      <header className="header__container container">
        <div className="logo">
          <div className="logo-img"></div>
          <h1>Kino Ro'yxati</h1>
        </div>
        <nav className="nav">
          <ul className="menu">
            <li>
              <a href="#">Bosh sahifa</a>
            </li>
            <li>
              <a href="#">Kinolar</a>
            </li>
            <li>
              <a href="#">Yangiliklar</a>
            </li>
          </ul>
        </nav>
        <div className="likes">
          <img src={regularHeart} width={50} height={50} alt="" />
          <span>{likes}</span>
          <h3>Likes</h3>
        </div>
      </header>
      <div className="movie">
        {movieData.length > 0 &&
          movieData.map(function (movie) {
            return (
              <Card
                key={movie.id}
                img={movie.Images[1]}
                title={movie.Title}
                deck={movie.Plot}
                year={movie.Year}
                released={movie.Released}
                runtime={movie.Runtime}
                lang={movie.Language}
                rated={movie.Rated}
                country={movie.Country}
                like={handleLike}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
