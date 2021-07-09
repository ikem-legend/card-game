import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { SingleCardData } from '../constants/card-deck'
import SingleCard from './single-card.component'

type CardDisplayProps = {
  cards: SingleCardData[]
  transition: boolean
  setTransition: Dispatch<SetStateAction<boolean>>
}

const CardDisplay: FC<CardDisplayProps> = ({ cards, transition, setTransition }) => {
  // useEffect(() => {
  //   console.log({ cards, prevCards })
  //   if (prevCards && cards[0] !== prevCards[0]) {
  //     setTransition(false)
  //     setTimeout(() => {
  //       setTransition(true)
  //     }, 200)
  //   }
  // }, [cards])
  return (
    <div
      className={`flex ${cards.length > 2 ? 'justify-between' : 'justify-center space-x-6'} ${
        cards.length ? 'my-28' : 'my-40'
      } mx-auto w-3/5 min-h-full z-20`}
    >
      <TransitionGroup component={null}>
        {cards.map((cardData, idx) => (
          <SingleCard key={idx} cardDetails={cardData} transition={transition} />
        ))}
      </TransitionGroup>
    </div>
  )
}

export default CardDisplay
