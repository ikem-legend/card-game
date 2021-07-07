import React, { FC } from 'react'
import WinnerImg from '../assets/images/winner.svg'

type CardDeckProps = {
  cardsLeft: number
  winStatus: boolean
}

const CardDeck: FC<CardDeckProps> = ({ cardsLeft, winStatus }) => {
  return (
    <div className="text-center mb-1">
      <div className="m-auto py-1 w-1/6 bg-black text-white border border-solid border-light-yellow">
        <p className="mb-0 text-5xl">{cardsLeft}</p>
        <p className="mt-0 text-xl">Cards left</p>
      </div>
      {winStatus ? (
        <div className="-mt-8">
          <img src={WinnerImg} alt="winner" className="mx-auto" />
        </div>
      ) : null}
    </div>
  )
}

export default CardDeck
