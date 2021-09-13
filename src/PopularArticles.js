import './App.css';
import React,{useState, useEffect } from 'react'

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
 const {abstract, 
    byline,
    assert_id,
    published_date,
    section,
    title,
    updated,
    url} =article

   return(
    
     <div className='articleDiv'>

     <article key="assert_id"> 
     <h2>{title}</h2>
    <p>Abstract: {abstract}</p>
     <p>{byline}</p>
     <p>{section}</p>
     <p>Published Date: {published_date}</p>
     <p>Updated: {updated}</p>
     <p>{url}</p>
      </article>
      </div>
   )
      })}


      </section>
      </>
  );
}

export default PopularArticles;
