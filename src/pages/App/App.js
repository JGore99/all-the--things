import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import FunctionalThings from '../FunctionalThings/FunctionalThings'
import StyledThings from '../StyledThings/StyledThings'
import Home from '../Home/Home';


const App = () => {
  const [davidsThings] = useState([
    {
      name: "waffle",
      image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",  
      attributes: ["tasty", "fluffy", "breakfast", "yummy"],
    },
    {
      name: "giraffe",
      image: "https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",  
      attributes: ["tall", "cool", "fun", "animal", "(David doesn't acually own a giraffe)"], 
    },
    {
      name: "Liam",
      image: "https://i.imgur.com/l2qX34X.jpg",  
      attributes: ["fluffy", "happy", "sleepy", "dumb"], 
    },
    {
      name: "Poptart®",
      image: "https://i.imgur.com/q9zgcaP.jpg",  
      attributes: ["pastry?", "food?", "edible?", "Horrible when toasted!"], 
    },
  ])
  const [shahzadsThings] = useState([
    {
      name: "functional programming",
      image: "https://imgs.xkcd.com/comics/functional.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
    {
      name: "React hooks",
      image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
    },
    {
      name: "BluBlockers",
      image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
      attributes: ["very attractive", "useful probably!", "good for viewing tacos", "such hip", "worn by all the cool kids"],
    },
    { 
      name: "Healthy food", 
      image: "https://i.imgur.com/gRxOxsA.jpg", 
      attributes: ["makes you live a long time", "consistent poops", "probably tacos sometimes!", "farm to market"], 
    },
  ])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* All the <Route> components should live here */}
        <Route path='/the-functional-things' element={<FunctionalThings things={shahzadsThings} />} />
        <Route path='/the-well-styled-things' element={<StyledThings things={davidsThings} />} />
      </Routes>
    </>
  );
}
 
export default App;
