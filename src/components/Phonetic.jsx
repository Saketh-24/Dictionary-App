import React, { useEffect, useState } from 'react'
import './Phonetic.css'

function Phonetic({search,searchResult}) {

    let [audio,setaudio] = useState()
    let [keyword,setkeyword] = useState()


    useEffect(()=>
    {
        if(searchResult[0].phonetics[0].audio)
        {
            setaudio(searchResult[0].phonetics[0].audio)
        }
        else
        {
            setaudio("")
        }
        setkeyword(search)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchResult])

  return (
    <div className='Phonetic'>
        <div className='left-side'>
            <h1>{keyword}</h1>
            {searchResult[0].phonetic}
        </div>
        <div className="right-side">
            <audio key={audio} controls>
            <source src={audio} type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>
        </div>
    </div>
  )
}

export default Phonetic
