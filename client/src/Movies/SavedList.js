import React from "react";
import { NavLink, Link } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink
        activeStyle={{
          color: "Green",
        }}
        key={movie.id}
        to={`/movies/${movie.id}`}
      >
        <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    <Link to="/">
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
