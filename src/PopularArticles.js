import './App.css';
import React,{useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

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

    <section>
            {articles.map ((article) => {
        const {abstract, 
            byline,
            assert_id,
            published_date,
            section,
            title,
            updated,
            url
          } =article

    return(
      
      // <div className='articleDiv'>
      <div style={{ marginBottom: '5vh' }}>
        <div class="parent container d-flex justify-content-center align-items-center h-100">
          <Card style={{ width: '100%' }}>
          <Card.Header style={{background:'magnolia'}}><h1>{title}</h1></Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                {abstract}
                </Card.Text>
                <Button variant="primary"> <a style ={{color:'white'}}  href= {url} target="_blank" >READ MORE</a></Button>
              </Card.Body>
              <Card.Footer>{byline}</Card.Footer>
            </Card>
            
        </div>
        {/* <article key="assert_id"> 
            <h2>{title}</h2>
            <p>Abstract: {abstract}</p>
            <p>{byline}</p>
            <p>Section: {section}</p>
            <p>Published Date: {published_date}</p>
            <p>Updated: {updated}</p>
            <p><a href= {url} target="_blank" >READ MORE: </a> </p>
          </article> */}

        
      </div>
        )
      })}


      </section>
      </>
  );
}

export default PopularArticles;
