import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'


const WeatherApi = () => {
const apiKey = "901d672d14c778eefb41af3fd3871f1f"

const [posts, setPosts] = React.useState([]);
<<<<<<< HEAD



axios.get(`https:api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`)
=======
const CityName = "London"


axios.get(`https:api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${apiKey}`)
>>>>>>> df2534ab76bd5fd9bc9bb2e023cbfffed472ef14
.then(res => {
    const ApiData = res.data;
    setPosts({ ApiData });
    console.log(posts)
  })
    // React.useEffect(() => {
    //     axios.get(`https:api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`)
    //       .then(res => {
    //         const newPosts = res
    //           .map(obj => obj.data);
      
    //         setPosts(newPosts);
    //       });
    //   }, []);

    return(
        <div>
        <h1>/r/reactjs</h1>
        <ul>
          {posts.map(post => (
            <li>{post.name}</li>
          ))}
        </ul>
      </div>

    );
}


export default WeatherApi;