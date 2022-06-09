import React, { useState } from "react";
import "./bootstrap.min.css";
import "./App.css";

import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Food from "./components/Food";
import Alert from "./components/Alert";

function App() {
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "17afa061";
  const APP_KEY = "6c41ba8d1169a871de8ef457efc24032";

  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${query}`;

  async function getData() {
    if (query !== "") {
      const result = await Axios.get(url);
      if (result.data.hints.length === 0) {
        return setAlert("No food with such name");
      }
      console.log(result.data.hints);
      setFoods(result.data.hints);
      setQuery("");
      setAlert(" ");
    } else {
      setAlert("Please enter the name of a food");
    }
  }

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1>Food Nutrition</h1>
      {alert !== " " && <Alert alert={alert} />}
      <form onSubmit={onSubmit} className="search-form">
        <input
          class="form-control"
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" class="btn btn-primary" value="Search" />
      </form>
      <div className="foods">
        {foods !== [] &&
          foods.map((food) => <Food key={uuidv4()} food={food} />)}
      </div>
    </div>
  );
}

export default App;
