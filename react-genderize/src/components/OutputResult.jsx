import React from 'react'
import { RequestName } from './RequestName'
import { ResultGender } from './ResultGender'

const OutputResult = () => {
  return (
    <div className='result-field'>
      <div>Name</div>
      <RequestName />
      <div>gender</div>
      <ResultGender />
    </div>
  )
}

export { OutputResult }
