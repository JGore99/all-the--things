import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import JeffThings from '../JeffThings/JeffThings'
import FunctionalThings from '../FunctionalThings/FunctionalThings'
import StyledThings from '../StyledThings/StyledThings'
import EpicThings from '../EpicThings/EpicThings';
import Home from '../Home/Home';


const App = () => {


  const [merkisThings] = useState([
    {
      name: "Switzerland",
      image: "https://www.expatica.com/app/uploads/sites/9/2017/07/cost-of-living-thun.jpg",
      attributes: ["Clearn", "Picturesque", "Expensive", "Public Drinking"]
      
    },
    {
      name: "History",
      image: "https://s7d2.scene7.com/is/image/Kennametal/History?$MobileBanner$&",
      attributes: ["Interesting","Informative","Blueprint for future"]
    },
    {
      name: "Podcasts",
      image: "https://yt3.ggpht.com/ytc/AKedOLS2KcFQ2ddXLYVpxbXNVqf7nsi0NWg4_R4HqKIl=s900-c-k-c0x00ffffff-no-rj",
      attributes: ["Fun","Inspiring","Uplifting"]
    },
   ])

  const [jeffsThings] = useState([
    {
      name: "records",
      image: "https://images.unsplash.com/photo-1605055510925-4c9626126167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      attributes: ["record stacks"],
    },
    {
      name: "dogs",
      image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      attributes: ["dog"],
    },
    {
      name: "cocktails",
      image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      attributes: ["drinks"],
    },

  ])

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
  const [darbysThings] = useState ([
    {
      name: "The Witcher",
      image: "https://images.unsplash.com/photo-1622643048696-883eafe4d8dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80",
      attributes: ["epic fantasy", "toss a coin to your witcher", "magic", "golden dragons", "Yennefer"]
    }, 
    {
      name: "Cats",
      image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      attributes: ["meow", "fluffy", "evil-cute"]
    }, 
  ])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* All the <Route> components should live here */}
        <Route path='/the-merkis-things' element={<FunctionalThings things={merkisThings} />} />
        <Route path='/the-jeff-things' element={<JeffThings things={jeffsThings} />} />
        <Route path='/the-functional-things' element={<FunctionalThings things={shahzadsThings} />} />
        <Route path='/the-well-styled-things' element={<StyledThings things={davidsThings} />} />
        <Route path ="/epic-things" element={<EpicThings things={darbysThings} />} />
      </Routes>
    </>
  );
}

export default App;
