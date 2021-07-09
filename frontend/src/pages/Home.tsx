import React, { FC, useState } from 'react'
import CardDeck from '../components/card-deck.component'
import CardDisplay from '../components/card-display.component'
import useCardState from '../hooks/use-card-state.hook'

const Home: FC = () => {
  const [cardDeckState, { dealCards, resetCardDeck }, winStatus] = useCardState()
  const [transition, setTransition] = useState(false)
  const serveCards = (): void => {
    setTransition(false)
    setTransition(false)
    setTimeout(() => {
      setTransition(true)
      dealCards()
    }, 100)
  }
  // Cards displayed will be last 5 of selected cards or last 2 when necessary
  // Since the selected cards array will have a maximum length of 52, then we can
  // ensure only 2 cards are served when it has a length of 50
  const cardsForDisplay =
    cardDeckState.selectedCards.length <= 50
      ? cardDeckState.selectedCards.slice(cardDeckState.selectedCards.length - 5)
      : cardDeckState.selectedCards.slice(cardDeckState.selectedCards.length - 2)
  return (
    <div className="min-h-full w-full p-10 bg-gradient-to-b from-transparent to-near-black bg-deep-green">
      <CardDeck cardsLeft={Object.keys(cardDeckState.cardDeck).length} winStatus={winStatus} />
      <CardDisplay cards={cardsForDisplay} transition={transition} setTransition={setTransition} />
      {Object.keys(cardDeckState.cardDeck).length === 0 ? (
        <div className="text-center">
          {!winStatus ? (
            <div className="mb-8 text-white text-3xl">
              <p>You lose.</p>
              <p>Better luck next time!</p>
            </div>
          ) : null}
          <button
            type="button"
            className="bg-transparent text-medium-yellow border-4 border-solid border-medium-yellow rounded-lg py-4 px-10"
            onClick={resetCardDeck}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div className="text-center">
            <button
              type="submit"
              className="bg-medium-yellow text-black mt-8 py-4 px-8 rounded-lg font-bold text-2xl uppercase"
              onClick={serveCards}
            >
              DEAL
            </button>
          </div>
          {Object.keys(cardDeckState.cardDeck).length !== 52 ? (
            <div className="text-right">
              <button
                type="button"
                className="bg-transparent text-medium-yellow border-2 border-solid border-light-yellow rounded-lg py-2 px-4"
                onClick={resetCardDeck}
              >
                Reset
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  )
}

export default Home
