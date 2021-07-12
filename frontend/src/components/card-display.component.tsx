import React, { FC, useEffect, useState } from 'react'
import { SingleCardData } from '../constants/card-deck'
import SingleCard from './single-card.component'

type CardDisplayProps = {
  cards: SingleCardData[]
  transition: boolean
}

const CardDisplay: FC<CardDisplayProps> = ({ cards, transition }) => {
  const [splitCardClass, setSplitCardClass] = useState(false)
  useEffect(() => {
    if (cards.length && cards.length > 2) {
      setSplitCardClass(true)
    } else {
      setSplitCardClass(false)
    }
  }, [cards])
  return (
    <div
      className={`flex ${cards.length > 2 ? 'justify-between' : 'justify-center space-x-6'} ${
        cards.length ? 'my-28' : 'my-48'
      } mx-auto w-3/5 min-h-full z-20`}
    >
      {cards.length
        ? cards.map((cardData, idx) => (
            <SingleCard
              key={idx}
              cardDetails={cardData}
              transition={transition}
              split={splitCardClass}
              cardIndex={idx + 1}
            />
          ))
        : null}
    </div>
  )
}

export default CardDisplay
