import React from 'react'
import './Synonyms.css'

function Synonyms({searchResult}) {
  return (
    <div>
        <div className='synonyms'>
        {
        searchResult[0].meanings[0].synonyms[0] && 
        <div className="Synonyms">
        <h1 style={{color: "#124E66", textAlign:"center"}}>Synonyms</h1>
        <ol>        
            {
           searchResult[0].meanings[0].synonyms.map((element,index)=>
            (
                <li className='definition' key={index}>{element}</li>
            )   
            )
        }
        </ol>
        </div>
        }
        </div>
    </div>
  )
}

export default Synonyms
