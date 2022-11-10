import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlimName from './FlimName';
const PersonDetails = ({ flimData }) => {
  const [person, setperson] = useState([]);
  const [details, setdetails] = useState();
  useEffect(() => {
    let baseURL = "https://swapi.py4e.com/api/films/"
    axios.get(baseURL).then((response) => {
      setdetails(response.data.results);
      console.log("ajith", response.data)
    })
    // (async()=>{
    //   let flimData;
    //   try{
    //     const response=await fetch("https://swapi.py4e.com/api/films/")
    //     flimData= await response.json();
    //   }catch(error){
    //     console.log(error);
    //     flimData =[];
    //   }
    //    setperson(flimData.results);
    //    setdetails(flimData.results);

    // })();
  }, []);
  return (
    <>
      <FlimName details={details} />
    </>
  )
}

export default PersonDetails; 