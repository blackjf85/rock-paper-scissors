import React from 'react'

const Results = ({player, computer, message}) => {
    return (
        <div>
            { !player ? <h3>Please Make a Choice!</h3> : <h3>You chose {player} and the computer chose {computer}. {message}</h3>}
        </div>
    )
}

export default Results
