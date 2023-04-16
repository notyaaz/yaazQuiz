import { decode } from 'html-entities'
import React, { useEffect, useState } from 'react'

export default function Quistion({data, ChangeSum}) {
  let {question,correct_answer,incorrect_answers} = data
  let ar = [...incorrect_answers, correct_answer]
  
  const [ans, setAns] = useState([])
  const [clicked, setClicked] = useState(false)

  const btn = "btn btn-outline-secondary"
  const wrongClickedBtn = "btn btn-danger"
  const wrongBtn = "btn btn-outline-danger"
  const correctBtn = "btn btn-success"
  

  function shuffle(array){
    
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
  }
  
  
  useEffect(()=>{
    setAns(shuffle(ar))
    setClicked(false)
    setId(99)
  },[correct_answer]) 
  
  
  function handleClick(){
    setClicked(true)
  }

  
  function handleCorrect(){
    handleClick()
    ChangeSum(1)
  }
  
  const [id, setId] = useState(10)
  function handleFalse(e, ide){
    handleClick()
    setId(ide)
  }
  
  console.log(ans)

  return (
    <div className='my-5'>
      <h3>{decode(question)}</h3>

      <div className="d-flex justify-content-evenly align-items-center my-5 gap-1">
        {ans.map((ele,index) => {
          
          if(ele === correct_answer){
            return <button key={index} disabled={clicked?true:false} onClick={handleCorrect} className={clicked?correctBtn:btn}>{decode(ele)}</button>
          }
          else{
            return(
             <button 
            key={index} 
            disabled={clicked?true:false} 
            onClick={(e)=>{handleFalse(e, index)}}  
            className={clicked ? index===id ? wrongClickedBtn : wrongBtn : btn}>{ele}
            </button>
            )
          }
        })}
      </div>
      <hr />
    </div>
  )
}
