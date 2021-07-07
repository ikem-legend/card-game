import React, { FC } from 'react'
import { SingleCardData } from '../constants/card-deck'
import SingleCard from './single-card.component'

type CardDisplayProps = {
  cards: SingleCardData[]
}

const CardDisplay: FC<CardDisplayProps> = ({ cards }) => {
  return (
    <div className="flex justify-between my-28 mx-auto w-3/5">
      {cards.map((cardData, idx) => (
        <SingleCard key={idx} cardDetails={cardData} />
      ))}
    </div>
  )
}

export default CardDisplay
