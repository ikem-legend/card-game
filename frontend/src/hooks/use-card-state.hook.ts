import { useEffect, useReducer, useState } from 'react'
import FullCardDeck, { CardDeckData, SingleCardData } from '../constants/card-deck'

type ActionType = {
  type: 'PICK_CARDS' | 'RESET_CARD_DECK'
}

type CardStateData = {
  cardDeck: CardDeckData
  selectedCards: SingleCardData[]
}

type CardReducerData = [
  CardStateData,
  {
    dealCards(): void
    resetCardDeck(): void
  },
  boolean
]

const initialState = {
  cardDeck: { ...FullCardDeck },
  selectedCards: [],
}
// const [count, setCount] = useState(0)

const useCardState = (): CardReducerData => {
  const cardReducer = (state: CardStateData, action: ActionType) => {
    // Account for ensuring 5 cards are picked per deal
    // and remainder picked when less than 5
    const cardIndex = Math.floor(Math.random() * 52)
    const updatedState = { ...state } // Do a deep copy as child object is mutated
    // const resetState = { ...state }
    switch (action.type) {
      case 'PICK_CARDS':
        // Since the previously selected object keys are deleted,
        // then new items can only be selected only when the randomly generated
        // index exists as a key in the cardDeck
        if (state.cardDeck[cardIndex]) {
          updatedState.selectedCards.push(updatedState.cardDeck[cardIndex])
          delete updatedState.cardDeck[cardIndex]
        } else {
          cardReducer(state, action)
        }
        return updatedState

      case 'RESET_CARD_DECK':
        return {
          cardDeck: { ...FullCardDeck },
          selectedCards: [],
        }

      default:
        return state
    }
  }
  const [cardDeckState, dispatch] = useReducer(cardReducer, initialState)

  const dealCards = (): void => {
    if (Object.keys(cardDeckState.cardDeck).length === 2) {
      for (let i = 0; i < 2; i += 1) {
        dispatch({ type: 'PICK_CARDS' })
      }
    } else {
      for (let i = 0; i < 5; i += 1) {
        dispatch({ type: 'PICK_CARDS' })
      }
    }
    // setCount(cnt => cnt + 1)
  }

  const resetCardDeck = (): void => {
    dispatch({ type: 'RESET_CARD_DECK' })
  }
  const [winStatus, setWinStatus] = useState(false)
  const lastCardsDetails: string[] = []

  useEffect(() => {
    if (cardDeckState.selectedCards.length === 52) {
      const lastCardsArr = cardDeckState.selectedCards
        .slice(cardDeckState.selectedCards.length - 2)
        .map((card) => card.number)
      if (lastCardsArr.indexOf('A') !== -1) {
        setWinStatus(true)
      }
    }
  }, [cardDeckState.selectedCards, lastCardsDetails, setWinStatus])
  return [cardDeckState, { dealCards, resetCardDeck }, winStatus]
}

export default useCardState
