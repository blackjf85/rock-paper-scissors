import React from 'react'

const Results = ({player, computer, message, winCount, loseCount, tieCount}) => {
    return (
        <div>
            { !player ? <h3>Please Make a Choice!</h3> : <h3>You chose {player.toLowerCase()} and the computer chose {computer.toLowerCase()}. {message}</h3>}
            <div className="counts">
                <p className="pSpacing win">Wins: {winCount}</p>
                <p className="pSpacing lose">Loses: {loseCount}</p>
                <p className="pSpacing tie">Ties: {tieCount}</p>
            </div>
        </div>
    )
}

export default Results
