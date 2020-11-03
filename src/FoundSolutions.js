import React from 'react';
import './FoundSolutions.css';

function FoundSolutions({words, headerText}) {
var wordLength = words.length;
    return(
        <div className="Found-solutions-list">
            
            {wordLength > 0 &&
                <h4>{headerText}: {wordLength}</h4>
            }   
            <ul>
        {words.map((solution) => {return <li key={solution}>{solution}</li>})}
            </ul>
        </div>
    );
}

export default FoundSolutions;