import React from "react";
import "./index.css";
import Like from "../../assets/heart-regular.svg";
import { useState } from "react";

function Card({img,title,deck,year,rated,released,runtime,lang,country,like}){
    const [isLiked, setIsLiked]= useState(false)
    function handleImg(){
        setIsLiked(!isLiked);
        like(!isLiked)
    }
  return (
    <div>
      <div className="movieSection__container">
        <div className="movie container">
          <div className="card">
            <img src={img} alt="" width={500} height={400} />
            <div className="info">
              <div className="title">
                <div className="titles">
                  <h3>{title}</h3>
                  <div className="like">
                    <img src={Like} width={25} height={25} alt="" onClick={handleImg}/>
                    <p>{isLiked ? "Liked" : "Dislike"}</p>
                  </div>
                </div>
                <p>{deck}</p>
              </div>
              <div className="year-reyting">
                <div className="year">
                  <h5>Yil:</h5>
                  <p>{year}</p>
                </div>
                <div className="reyting">
                  <h5>Reyting:</h5>
                  <p>{rated}</p>
                </div>
              </div>
              <div className="time">
                <div className="made-time">
                  <h5>Chiqarilgan sana:</h5>
                  <p>{released}</p>
                </div>
                <div className="movie-time">
                  <h5>Davomiyligi:</h5>
                  <p>{runtime}</p>
                </div>
              </div>
              <div className="language">
                <div className="movie-lang">
                  <h5>Til:</h5>
                  <p>{lang}</p>
                </div>
                <div className="country">
                  <h5>Mamlakat:</h5>
                  <p>{country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
