import React, { useState,useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [data,setData]=useState([])
  console.log(data)
  useEffect(() =>{
    getData()
  },[])

  const getData=async() =>{
    const response=await fetch("https://jsonplaceholder.typicode.com/photos")
    //console.log(response)
    const jsonData=await response.json()
   // console.log(jsonData)
    setData(jsonData)
  }
  return (
    <>
        <div>
          <nav className="navbar navbar-dark bg-primary">
            <span className="navbar-brand mb-0 h1">React Fetci Api</span>
          </nav>
          <div className="container mt-4">
            <div className="row">
              {data.map((values)=> (
                <div key={values.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                  <div className="card h-80">
                    <img src={values.url} alt={values.title} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">TITLE:<span >{values.title}</span></h5>
                      <h6 className="card-title">URL:<span>{values.url}</span></h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

   {/* <h2>React Fetch Api</h2>
    <div className="container">
      {data.map((values)=>{
        return(
          <>
            <h5>{values.title}</h5>
            <p>{values.url}</p>
          </>
          
        )
      })}      
    
    </div>
    */}
  </>
    
  )
}

export default App