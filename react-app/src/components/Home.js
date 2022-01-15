import React, {Component} from "react";
import { useParams } from "react-router-dom";

const Home = () => {

  const { id } = useParams();
  
  return (
    <div className="App">
    <header className="App-header">
    </header>

    <p>Here is Home</p>
    <p>Hello, {id}</p>

  </div>
  );
};

export default Home;
