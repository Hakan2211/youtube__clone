import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import RecommendedVideos from "./layout/RecommendedVideos/RecommendedVideos";
import SearchPage from "./pages/Searchpage/Searchpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
