import React from 'react'
import './Qna.css'
const Question = (props) => {
  return (
       <div className='col col-12 col-md-6 ques d-flex justify-content-center flex-column align-items-center '>
      <h1>{props.queston}</h1>
      <p>{props.ans}</p>
      </div>
      
  )
}

export default Question
