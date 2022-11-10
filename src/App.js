import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PersonDetails from "./PersonDetails";
import SocialCard from "./SocialCard";
import axios from 'axios';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState();

  useEffect(() => {
    let baseURL = "https://swapi.dev/api/people"
    axios.get(baseURL).then((response) => {
      setUsers(response.data.results);
      console.log('abc', response.data)
    })
    
  }, []);



  return (

    <div className="App">
      <h2>SocialCard</h2>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<SocialCard users={users} />}
            />
            <Route
              path="/PersonDetails"
              element={<PersonDetails />}
            />
          </Routes>
        </BrowserRouter>

      </div>
    </div>

  );
}

export default App;