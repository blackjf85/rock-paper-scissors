import React, { useState } from 'react'

const Game = () => {
    const [randomNum, setRandomNum] = useState(Math.random())
    const [computer, setComputer] = useState("");
    const [player, setPlayer] = useState("");
    const [message, setMessage] = useState("")

    const playerRock = (e) => {
        setRandomNum(Math.random());
        if (randomNum > 0 && randomNum <= 0.33){
            setComputer('Rock');
            setMessage("It's A Tie!");
        }else if(randomNum > 0.33 && randomNum <= 0.66){
            setComputer('Paper');
            setMessage("You Lose!");
        }else if(randomNum > 0.66 && randomNum <= 1){
            setComputer('Scissors')
            setMessage("You Win!");
        };
        setPlayer("Rock")
    } ;

    const playerPaper = (e) => {
        e.preventDefault()
        setRandomNum(Math.random());
        if (randomNum > 0 && randomNum <= 0.33){
            setComputer('Rock');
            setMessage("You Win!");
        }else if(randomNum > 0.33 && randomNum <= 0.66){
            setComputer('Paper');
            setMessage("It's A Tie!");
        }else if(randomNum > 0.66 && randomNum <= 1){
            setComputer('Scissors');
            setMessage("You Lose!");
        };
        setPlayer("Paper")
    } ;

    const playerScissors = (e) => {
        e.preventDefault()
        setRandomNum(Math.random());
        if (randomNum > 0 && randomNum <= 0.33){
            setComputer('Rock');
            setMessage("You Lose!");
        }else if(randomNum > 0.33 && randomNum <= 0.66){
            setComputer('Paper');
            setMessage("You Win!");
        }else if(randomNum > 0.66 && randomNum <= 1){
            setComputer('Scissors');
            setMessage("It's A Tie!");
        };
        setPlayer("Scissors")
    } ;

    return (
        <div>
            <h2>Let's Play!</h2>
            <div>
                <p>You: {player}</p> 
                <p>Computer: {computer}</p>
            </div>
            <div class="player-choice">
                <button id="rock" onClick={playerRock}>Rock</button>
                <button id="paper" onClick={playerPaper}>Paper</button>
                <button id="scissors" onClick={playerScissors}>Scissors</button>
            </div>
            <div>
                <h3>{message}</h3>
            </div>
        </div>
    )
}

export default Game
