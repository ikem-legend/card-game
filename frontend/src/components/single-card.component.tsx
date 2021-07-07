import React, { FC } from 'react'
import CloverImg from '../assets/images/Clover.svg'

const SingleCard: FC = () => {
  return (
    <div className="bg-white m-0.5 p-2 w-1/6 rounded-2xl h-40">
      <div className="mb-0.5 h-1/5 text-6xl font-bold">5</div>
      <div className="h-1/5 mt-6 mb-0.5 pl-2">
        <img src={CloverImg} alt="card" className="h-4/5" />
      </div>
      <div className="float-right h-1/2 px-2">
        <img src={CloverImg} alt="card" className="h-5/6" />
      </div>
    </div>
  )
}

export default SingleCard
