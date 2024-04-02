import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import Movie from "../movie";


const BACKEND_URL = process.env.NODE_ENV === "production" ? "":"https://hoblist.com/"
const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${BACKEND_URL}api/movieList`, {
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        });
        setMovies(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Movie List</h2>
      <div className="dashboard">
        {movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
