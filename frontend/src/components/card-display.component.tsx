import React, { FC } from 'react'
import { SingleCardData } from '../constants/card-deck'
import SingleCard from './single-card.component'

type CardDisplayProps = {
  cards: SingleCardData[]
}

const CardDisplay: FC<CardDisplayProps> = ({ cards }) => {
  return (
    <div
      className={`flex ${cards.length > 2 ? 'justify-between' : 'justify-center space-x-6'} ${
        cards.length ? 'my-28' : 'my-40'
      } mx-auto w-3/5 min-h-full`}
    >
      {cards.map((cardData, idx) => (
        <SingleCard key={idx} cardDetails={cardData} />
      ))}
    </div>
  )
}

export default CardDisplay
