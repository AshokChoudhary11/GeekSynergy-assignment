import React from "react";
import "./index.css";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

const Movie = ({ movie }) => {
  console.log("movie", movie);
  return (
    <div className="card_container">
      <div className="card_details">
        <div>
          <TiArrowSortedUp style={{ fontSize: "32px" }} />
          <div className="voteCount">{movie?.voting}</div>
          <TiArrowSortedDown style={{ fontSize: "32px" }} />
          <div>Votes</div>
        </div>
        <div className="movie_poster">
          <img
            src={movie?.poster}
            alt="Movie poster"
          />
        </div>
        <div>
          <div className="movieName">{movie?.title}</div>
          <div className="moviesDetails">
            <span className="moviesDetailsSpan">Genre: </span>
            <span>{movie?.genre}</span>
          </div>
          <div className="moviesDetails">
            <span className="moviesDetailsSpan">Director: </span>
            <span>{movie?.director}</span>
          </div>
          <div className="moviesDetails">
            <span className="moviesDetailsSpan">Starring: </span>
            <span>{`${movie?.stars[0]}`}</span>
          </div>
          <div className="moviesDetails">
            {`Mins | ${movie?.language} `}
          </div>
          <div className="moviesDetails_last">
            {`${movie?.pageViews} views | Voted by ${movie?.totalVoted} people`}{" "}
          </div>
        </div>
      </div>
      <div className="WatchButtons">Watch Trailer</div>
    </div>
  );
};

export default Movie;
