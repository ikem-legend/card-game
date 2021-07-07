import React, { FC } from 'react'
import CardDeck from '../components/card-deck.component'
import CardDisplay from '../components/card-display.component'

const Home: FC = () => {
  return (
    <div className="h-screen w-full p-10 bg-gradient-to-b from-transparent to-near-black bg-deep-green">
      <CardDeck />
      <CardDisplay />
      <div>
        <button>DEAL</button>
      </div>
      <div>
        <button>Reset</button>
      </div>
    </div>
  )
}

export default Home
