import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import './App.css'
import Meaning from './components/Meaning';
import axios from 'axios';


const App = () => {
  let [search,setsearch] = useState("")
  let [searchResult,setsearchResult] = useState(null)
  let [error,seterror] = useState(null)


  async function Handler()
    {
      try 
      {
      let result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
            if(!result)
            {
              seterror("KeyWord not found....")
              setsearchResult(null)
            }
            else{
              setsearchResult(result.data)
              console.log(result)
              seterror(null)
            }
      } catch (error) {
         seterror("Something wrong please try again....")
         setsearchResult(null)
      }
    }

  return (
    <div>
      <div className='input-section'>
        <input
        type='text'
        placeholder='Search for a word'
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        ></input>
        <button type='submit' onClick={Handler} ><IoSearch /></button>
      </div>
      {error && <p>{error}</p>}
      {searchResult && <Meaning searchResult={searchResult}/> }
    </div>
  )
}

export default App
