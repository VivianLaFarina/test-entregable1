import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'
import dataBase from "./db/db.json"

const images = ["bg1", "bg2", "bg3", "bg4"]

function App() {

  const getRandomItem = (listItems) => {
    const randomIdex = Math.floor(Math.random() * listItems.length)
    return listItems [randomIdex]
  }
  const [quote, setquote] = useState(getRandomItem(dataBase))
  const [bgImage, setBgImage] = useState(getRandomItem(images))


  const handleNewQuote = () => {
    setquote(getRandomItem(dataBase))
    setBgImage(getRandomItem(images))
  }

  return (
    <div className= {`App ${bgImage}`} >
      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />
      

    </div>
  )
}

export default App
