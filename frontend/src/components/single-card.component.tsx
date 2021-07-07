import React, { FC } from 'react'
import CloverImg from '../assets/images/Clover.svg'
import DiamondImg from '../assets/images/Diamond.svg'
import HeartImg from '../assets/images/Heart.svg'
import SpadeImg from '../assets/images/Spade.svg'
import { SingleCardData } from '../constants/card-deck'

type SingleCardProps = {
  cardDetails: SingleCardData
}

type CardObjectData = {
  [key: string]: string
}

const SingleCard: FC<SingleCardProps> = ({ cardDetails }) => {
  const cardObj: CardObjectData = {
    Clubs: CloverImg,
    Diamonds: DiamondImg,
    Hearts: HeartImg,
    Spades: SpadeImg,
  }
  const cardNum = cardDetails.number
  const cardImgSrc = cardObj[cardDetails.suit]
  const cardImgAlt = cardDetails.suit
  return (
    <div className="inline-block bg-white my-0.5 p-2 w-1/6 rounded-2xl h-40">
      <div className="mb-0.5 h-1/5 text-6xl font-bold">{cardNum}</div>
      <div className="h-1/5 mt-6 mb-0.5 pl-2">
        <img src={cardImgSrc} alt={cardImgAlt} className="h-4/5" />
      </div>
      <div className="float-right h-1/2 px-2">
        <img src={cardImgSrc} alt={cardImgAlt} className="h-5/6" />
      </div>
    </div>
  )
}

export default SingleCard
