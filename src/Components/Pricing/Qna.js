import React from 'react'
import Qnadata from './qnadata'
import Question from './Question'

const Qna = () => {
  return (
    <div className='row mx-5 gx-2 d-flex justify-content-center align-items-center'>
      {Qnadata.map((val,ind)=>{
        return(
            
            <Question key={ind}
            queston={val.questionn}
            ans={val.anser}
            />
        )
      })}
      </div>
    
  )
}

export default Qna
