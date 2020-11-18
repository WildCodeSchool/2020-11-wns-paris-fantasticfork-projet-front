import React from "react";
import { Typography, Button } from "@material-ui/core";
import ArticleList from "./Components/Forum/ArticleList.js";
import Article from "./Components/Forum/Article";
import Paper from "@material-ui/core/Paper";
import "./index.css";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Typography variant="h2" component="h2" className="text1">
        Studn'Connect
      </Typography>
      <Typography variant="h4" component="h4" className="text1">
        Your Questions
      </Typography>
      <ArticleList />
      <Paper />
      <Button />
      <Article />
    </div>
  );
}

export default App;
