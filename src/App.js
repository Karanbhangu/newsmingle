import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import NewsArticle from "./components/NewsArticle/NewsArticle";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(2);
  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar color="#0f52ba" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={<NewsArticle setProgress={setProgress} />}
          />
          <Route
            exact
            path="/business"
            element={<NewsArticle setProgress={setProgress} category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<NewsArticle setProgress={setProgress} category="entertainment" />}
          />
          <Route
            exact
            path="/general"
            element={<NewsArticle setProgress={setProgress} category="general" />}
          />
          <Route
            exact
            path="/health"
            element={<NewsArticle setProgress={setProgress} category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<NewsArticle setProgress={setProgress} category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<NewsArticle setProgress={setProgress} category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<NewsArticle setProgress={setProgress} category="technology" />}
          />
          <Route
            exact
            path="/about"
            element={<About setProgress={setProgress} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
