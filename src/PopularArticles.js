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
console.log(articles)
setArticles(articles.results)
  }
catch (error) {
  console.error(error);
}
   }
   fetchArticles()

 },[])
 
 
 return (
    <>
    <h1>NEW YORK TIMES MOST RECENT ARTICLES</h1>
    <section>
            {articles.map ((article) => {
 const {abstract, adx_keywords,
   byline,assert_id,published_date, 
   section,titles,type, updated,url} =article

   return(
    
    <article key="assert_id"> 
    
    <h2><b>{titles}</b></h2>
    <p>{abstract}</p>
     <p>{byline}</p>
     <p>{section}</p>
     <p>{published_date}</p>
     <p>{updated}</p>
     <p>{url}</p>


  
    </article>
   )
      })}


      </section>
      </>
  );
}

export default PopularArticles;
