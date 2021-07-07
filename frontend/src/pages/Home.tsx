import React, { FC } from 'react'
import CardDeck from '../components/card-deck.component'
import CardDisplay from '../components/card-display.component'
import useCardState from '../hooks/use-card-state.hook'

const Home: FC = () => {
  const [cardDeckState, { dealCards, resetCardDeck }] = useCardState()
  // Cards displayed will be last 5 of selected cards or last 2 when necessary
  return (
    <div className="h-screen w-full p-10 bg-gradient-to-b from-transparent to-near-black bg-deep-green">
      <CardDeck cardsLeft={Object.keys(cardDeckState.cardDeck).length} />
      <CardDisplay />
      <div className="text-center">
        <button
          type="submit"
          className="bg-medium-yellow text-black mt-8 py-4 px-8 rounded-lg font-bold text-2xl uppercase"
          onClick={dealCards}
        >
          DEAL
        </button>
      </div>
      <div className="text-right">
        <button
          type="button"
          className="bg-transparent text-medium-yellow border-2 border-solid border-light-yellow rounded-lg py-2 px-4"
          onClick={resetCardDeck}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Home
