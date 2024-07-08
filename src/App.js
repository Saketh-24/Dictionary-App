import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import './App.css'
import Meaning from './components/Meaning';
import axios from 'axios';
import Phonetic from './components/Phonetic';
import { FaBookOpen } from "react-icons/fa";
import Synonyms from './components/Synonyms';
import { CgDarkMode } from "react-icons/cg";


const App = () => {
  let [search,setsearch] = useState("")
  let [searchResult,setsearchResult] = useState(null)
  let [error,seterror] = useState(null)
  let [darkMode,setDarkMode] = useState(false)

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };

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
    <div className="container">
      <div className='header'>
      <div className='heading'>
      <FaBookOpen className='logo' />
      <h2>Dictionary</h2>
      </div>
      <button type='submit' onClick={darkModeHandler}><CgDarkMode /></button>
      </div>
      <div className='input-section'>
        <input
        type='text'
        placeholder='Search for a word'
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        ></input>
        <button type='submit' onClick={Handler} ><IoSearch /></button>
      </div>
      {error && <p className='error'>{error}</p>}
      {searchResult && <div>
      <Phonetic search={search} searchResult={searchResult} />
      <Meaning searchResult={searchResult}/>
      <Synonyms searchResult={searchResult}/>
      </div>}
    </div>
  )
}

export default App
