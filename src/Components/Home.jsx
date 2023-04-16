import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import Quistion from './Quistion'

export default function Home() {

  const [quistions, setQuistions] = useState([])
  const [sum, setSum] = useState(0)


  async function getQuistionsData(){
    let {data} = await axios.get(`https://opentdb.com/api.php?amount=5&type=multiple`)
    let {results} = data
    setQuistions(results)
  }


  function ChangeSum(amount){
    setSum(prev => prev + amount)
  }

  function handlePlay(){
    getQuistionsData()
    setSum(0)
  }

  useEffect(()=>{
    getQuistionsData()
  },[])

  console.log(sum)

  return (
    <div>
      <Header/>

      <div className="container">
        {quistions.map((ele, index) =>{
          return <Quistion ChangeSum={ChangeSum} data={ele} key={index}/>
        })}

      <h4>you scored {sum}/5</h4>
      <div onClick={handlePlay} className="btn btn-dark mb-5">Play again!</div>  
      </div>
    </div>
  )
}
