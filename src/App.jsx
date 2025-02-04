import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";




function App() {
  const [isGameStarted,setIsGameStarted] = useState(false);
  const toggleGamePlay = ()=>{
    setIsGameStarted((prev)=>!prev);
  }
  
  return (
    <>
      {
        isGameStarted? <GamePlay/>:<StartGame
          toggle={toggleGamePlay}
        />
      }
      {/* <StartGame/> */}

    </>
  )
}

export default App
