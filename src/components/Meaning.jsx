import React from 'react'
import './Meaning.css'

function Meaning({searchResult}) {
 
  return (
    <div>
        <div className='partsofspeech'>
        <span>Parts Of Speech</span>
        {searchResult[0].meanings[0].partOfSpeech}  
        </div>
        <div className='Meanings'>
        <h1 style={{color: "#124E66"}}>Meanings</h1>
        <div className="definitions">
            <ol>        
                {
               searchResult[0].meanings[0].definitions.map((element,index)=>
                (
                    <li className='definition' key={index}>{element.definition}</li>
                )   
                )
            }
            </ol>
        </div>
        </div>
    </div>

  )
}

export default Meaning
