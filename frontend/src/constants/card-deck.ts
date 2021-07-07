export type SingleCardData = {
  number: string
  suit: string
}

export type CardDeckData = {
  [key: number]: SingleCardData
}

/* To ensure that accessing cards and their details in the deck is very fast
 * a nested object is used to represent the card deck with keys as numbers
 * and the value as the individual cards. The numbers will then be used
 * for randomly selecting cards from the deck
 */
const FullCardDeck: CardDeckData = {
  0: { number: 'A', suit: 'Clubs' },
  1: { number: '2', suit: 'Clubs' },
  2: { number: '3', suit: 'Clubs' },
  3: { number: '4', suit: 'Clubs' },
  4: { number: '5', suit: 'Clubs' },
  5: { number: '6', suit: 'Clubs' },
  6: { number: '7', suit: 'Clubs' },
  7: { number: '8', suit: 'Clubs' },
  8: { number: '9', suit: 'Clubs' },
  9: { number: '10', suit: 'Clubs' },
  10: { number: 'J', suit: 'Clubs' },
  11: { number: 'Q', suit: 'Clubs' },
  12: { number: 'K', suit: 'Clubs' },
  13: { number: 'A', suit: 'Diamonds' },
  14: { number: '2', suit: 'Diamonds' },
  15: { number: '3', suit: 'Diamonds' },
  16: { number: '4', suit: 'Diamonds' },
  17: { number: '5', suit: 'Diamonds' },
  18: { number: '6', suit: 'Diamonds' },
  19: { number: '7', suit: 'Diamonds' },
  20: { number: '8', suit: 'Diamonds' },
  21: { number: '9', suit: 'Diamonds' },
  22: { number: '10', suit: 'Diamonds' },
  23: { number: 'J', suit: 'Diamonds' },
  24: { number: 'Q', suit: 'Diamonds' },
  25: { number: 'K', suit: 'Diamonds' },
  26: { number: 'A', suit: 'Hearts' },
  27: { number: '2', suit: 'Hearts' },
  28: { number: '3', suit: 'Hearts' },
  29: { number: '4', suit: 'Hearts' },
  30: { number: '5', suit: 'Hearts' },
  31: { number: '6', suit: 'Hearts' },
  32: { number: '7', suit: 'Hearts' },
  33: { number: '8', suit: 'Hearts' },
  34: { number: '9', suit: 'Hearts' },
  35: { number: '10', suit: 'Hearts' },
  36: { number: 'J', suit: 'Hearts' },
  37: { number: 'Q', suit: 'Hearts' },
  38: { number: 'K', suit: 'Hearts' },
  39: { number: 'A', suit: 'Spades' },
  40: { number: '2', suit: 'Spades' },
  41: { number: '3', suit: 'Spades' },
  42: { number: '4', suit: 'Spades' },
  43: { number: '5', suit: 'Spades' },
  44: { number: '6', suit: 'Spades' },
  45: { number: '7', suit: 'Spades' },
  46: { number: '8', suit: 'Spades' },
  47: { number: '9', suit: 'Spades' },
  48: { number: '10', suit: 'Spades' },
  49: { number: 'J', suit: 'Spades' },
  50: { number: 'Q', suit: 'Spades' },
  51: { number: 'K', suit: 'Spades' },
}

export default FullCardDeck
