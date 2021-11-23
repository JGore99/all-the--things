import { Link } from 'react-router-dom'
import React from 'react'


const Home = (props) => {
  return (
    <>
      {/* All the <a> tags should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-jeff-things">Jeff's Things</Link><br/>
      <Link to="/the-functional-things">Shahzad's Things</Link><br/>
      <Link to="/the-well-styled-things">David's Things</Link><br/>
      <Link to="/the-merkis-things">Merkis Things</Link><br/>
      <Link to ="/epic-things"> Darby's Things</Link>
    </>
  );
}

export default Home;