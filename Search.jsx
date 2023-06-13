import { useState } from "react";
import "./Search.css"

import Trie from "./trie";
import datas from "./data"

// -------- FEED DATA INTO THE DS ---------
const search = new Trie() ;
datas.forEach(elem => {
  search.insertWord(elem[0],elem[1]) ;
});
// ----------------------------------------


//  -------  CONFIGURE THE STYLE HERE ------

const componentHeight = "250px" ; // Height of the component
const componentWidth = "100vw" ;

const inputHeight = "25px" ;    // Height of the text input box


//------- CSS code for futher styling---------
const searchDiv = {
  display: "flex",
  flexDirection: "column",
  width: `${componentWidth}`,
  position: "absolute",
  zIndex: "10",
  left: "0"
}


const inputStyl = {
  height: `${inputHeight}`,
  borderRight: "none",
  borderRadius: "4rem 0 0 4rem",
  outline: "none",
  paddingLeft: "10px",
  width: `calc(100% - ${inputHeight} - 20px)` ,
}

const resultDiv = {
  display: "flex" , 
  flexDirection: "column",
  maxHeight: `${componentHeight}`,
  overflowY: "scroll",
}

const resultStyl = {
  textTransform: "capitalize",
  cursor: "pointer",
  height: "25px" ,
  textDecoration: "none",
  paddingLeft: "2%",
  fontSize: "1.2rem",
  fontFamily: "monospace",
  backgroundColor: "white",
}

// -----------------------------------------



const Search = () => {
  const [Display, setDisplay] = useState([]) ;

  const handleChange = (e) => {
    setDisplay( search.getWords(e.target.value) ) ;
  }

  return (
    <div id="search" style={searchDiv}>

      <div className="input-div">
        <input type="text" onChange={handleChange} style={inputStyl} />
        <p className="input-icon" style={{height: `${inputHeight}` , width: `${inputHeight}` }}>🔍</p>
      </div>

      <div style={resultDiv}>
        { Display.map((outer) => (
          outer.links.map((inner,ind) => (
            <a key={ind} href={inner} style={resultStyl}  >{outer.str}</a>
          ))
        ))
        }
      </div>

    </div>
  )
}

export default Search;