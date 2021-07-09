import React, { FC } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { SingleCardData } from '../constants/card-deck'
import SingleCard from './single-card.component'

type CardDisplayProps = {
  cards: SingleCardData[]
  transition: boolean
}

const CardDisplay: FC<CardDisplayProps> = ({ cards, transition }) => {
  return (
    <div
      className={`flex ${cards.length > 2 ? 'justify-between' : 'justify-center space-x-6'} ${
        cards.length ? 'my-28' : 'my-48'
      } mx-auto w-3/5 min-h-full z-20`}
    >
      {cards.length ? (
        <TransitionGroup component={null}>
          {cards.map((cardData, idx) => (
            <SingleCard key={idx} cardDetails={cardData} transition={transition} />
          ))}
        </TransitionGroup>
      ) : null}
    </div>
  )
}

export default CardDisplay
