import React, { useState } from "react";

import SavedList from "./Movies/SavedList";
import { Switch, Route, Link } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path="/movies/:id">
          <Movie addToSavedList={addToSavedList}></Movie>
        </Route>
        <Route path="/">
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
