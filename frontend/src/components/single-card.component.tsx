import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import CloverImg from '../assets/images/Clover.svg'
import DiamondImg from '../assets/images/Diamond.svg'
import HeartImg from '../assets/images/Heart.svg'
import SpadeImg from '../assets/images/Spade.svg'
import { SingleCardData } from '../constants/card-deck'

type SingleCardProps = {
  cardDetails: SingleCardData
  transition: boolean
}

type CardObjectData = {
  [key: string]: string
}

const SingleCard: FC<SingleCardProps> = ({ cardDetails, transition }) => {
  const cardObj: CardObjectData = {
    Clubs: CloverImg,
    Diamonds: DiamondImg,
    Hearts: HeartImg,
    Spades: SpadeImg,
  }
  const cardNum = cardDetails.number
  const cardImgSrc = cardObj[cardDetails.suit]
  const cardImgAlt = cardDetails.suit
  const cardColor =
    cardDetails.suit === 'Diamonds' || cardDetails.suit === 'Hearts' ? 'text-card-red' : ''
  return (
    <CSSTransition in={transition} timeout={100} classNames="card">
      <div
        className={`inline-block bg-white my-0.5 p-2 w-1/6 rounded-2xl h-40 ${
          !transition ? 'card' : ''
        }`}
      >
        <div className={`mb-0.5 h-1/5 text-6xl font-bold ${cardColor}`}>{cardNum}</div>
        <div className="h-1/5 mt-6 mb-0.5 pl-2">
          <img src={cardImgSrc} alt={cardImgAlt} className="h-4/5" />
        </div>
        <div className="float-right h-1/2 px-2">
          <img src={cardImgSrc} alt={cardImgAlt} className="h-5/6" />
        </div>
      </div>
    </CSSTransition>
  )
}

export default SingleCard
