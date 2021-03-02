import React from 'react';
import { BrowserRouter as Router, 
  Route, 
  Switch, } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ArticlesListPage from './pages/ArticlesListPage';
import Article from './pages/Article';
import Navbar from './Navbar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
     <div className="App">
       <Navbar />
      <div id="page-body">
    {/* SWITCH - makes sure that only one route is rendered at the time
      It will render the first route that matches the URL, and not any other.
      It means we need to put NotFoundPage at the end because otherwise it will
      be the only thing that shows up since it always matches with the URL.
    */}
     <Switch>
     <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/articles-list" component={ArticlesListPage} exact />
      <Route path="/article/:name" component={Article} exact />
      <Route component={NotFoundPage} />
     </Switch>
      </div> 
     </div>
    </Router>
  );
}

export default App;

// CONNECTING FRONTEND to BACKEND 
// React - frontend
// NodeJs and Express - server backend, supporitng functionality like
// upvoting, adding comments 
// MongoDB - store data permanently 
// So far we tested frontend and backend separetly -->
// Until now we used Postaman to test backend
// In order to bring out frontend and backend together --> 
// we need to make Frontend to make api requests instead of Postam -->
// for example: when the user visits the specific article, our frontend needs 
// to automatically make request to load the upvote and comments for that article
// and then it needs to display that information in correct places in the page
// we also want to make our frontend to enable users to upvote and comment the articles
// we will use BUILT-IN API FETCH, fetch does not work in Internet Explorer so we need to -->
// npm install --save whatwg-fetch 