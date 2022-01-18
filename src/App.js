import { Container } from "@mui/material";
import React from "react";
import "./App.css"
import Header from "./components/Header";
import MainNavbar from "./components/MainNavbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Trending from "./components/Trending";
import Movie from "./components/Movie";
import Series from "./components/Series";
import Search from "./components/Search";
import FetchState from "./contexts/fetchState";
function App(){
  return(
    <>
    <FetchState>
    <Router>
    <Header/>
    <div className="styling">
      <Container>
      <Switch>
          <Route exact path="/">
            <Trending />
          </Route>
          <Route exact path="/movie">
            <Movie />
          </Route>
          <Route exact path="/series">
            <Series />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </Container>
    </div>
    <MainNavbar /> 
    </Router>
    </FetchState>
    </>
  )
}

export default App;