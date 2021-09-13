import './App.css';
import React,{useState, useEffect } from 'react'
import axios from 'axios';

const PopularArticles =() => {

 const[articles,setArticles] = useState([])
 const[period,setPeriod] = useState (1);
 const [isLoading, setIsLoading] = useState(true)
  
 useEffect(() => {
    const fetchArticles = async() =>{
    try {
      const res = await 
 fetch(
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=GVjE3dH9M9S4YaMGBRjPdGS5ELXaZGnq')
   
const articles= await res.json()
console.log(articles.results)
setArticles(articles.results.num_results)
  }
catch (error) {
  console.error(error);
}
   }
   fetchArticles()

 },[])
 
 
 return (
    <>
    <section>
<h1>NEW YORK TIMES MOST RECENT ARTICLES</h1>

      </section>
      </>
  );
}

export default PopularArticles;
