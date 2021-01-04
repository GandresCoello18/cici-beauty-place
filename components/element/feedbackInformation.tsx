import React from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'

const FeedbackInformation = () => {
  return (
    <div className="p-2">
      <div className="row justify-content-start">
        <div className="col-12 col-md-5 mb-3 mb-md-0">
          <span>Tu pregunta fue respondida?</span>
        </div>
        <div className="col-3 col-md-2 border-right">
          <AiFillLike /> Yes
        </div>
        <div className="col-3 col-md-2">
          <AiFillDislike /> No
        </div>
      </div>
    </div>
  )
}

export default FeedbackInformation
