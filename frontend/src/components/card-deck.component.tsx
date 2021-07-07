import React, { FC } from 'react'

type CardDeckProps = {
  cardsLeft: number
}

const CardDeck: FC<CardDeckProps> = ({ cardsLeft }) => {
  return (
    <div className="text-center mb-1">
      <div className="m-auto w-1/6 bg-black text-white text-xl border border-solid border-light-yellow">
        <p className="mb-0">{cardsLeft}</p>
        <p className="mt-0">Cards left</p>
      </div>
    </div>
  )
}

export default CardDeck
