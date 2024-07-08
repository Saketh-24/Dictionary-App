import React from 'react'
import './Meaning.css'

function Meaning({searchResult}) {
 
  return (
    <div>
        <div className='partsofspeech'>
        {searchResult[0].meanings[0].partOfSpeech}  
        </div>
        <div className='Meanings'>
        <div className="definitions">
            {
               searchResult[0].meanings[0].definitions.map((element,index)=>
                (
                    <div className='definition' key={index}>{element.definition}</div>
                )   
                )
            }
        </div>
        </div>
    </div>

  )
}

export default Meaning
