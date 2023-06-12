import { useState } from "react";

import Trie from "./trie";
import datas from "./data"

// -------- FEED DATA INTO THE DS ---------
const search = new Trie() ;
datas.forEach(elem => {
  search.insertWord(elem[0],elem[1]) ;
});
// ----------------------------------------


//  -------  CONFIGURE THE STYLE HERE ------
const inputStyl = {
  height: "25px",
  borderRight: "none",
  borderRadius: "4rem 0 0 4rem",
  outline: "none",
  paddingLeft: "10px",
  width: "100%" 
}

const resultStyl = {
  textTransform: "capitalize",
  cursor: "pointer",
  height: "25px" ,
  textDecoration: "none",
  marginLeft: "2%",
  fontSize: "1.2rem",
  fontFamily: "monospace"
}

// -----------------------------------------



const App = () => {
  const [Display, setDisplay] = useState([]) ;

  const handleChange = (e) => {
    setDisplay( search.getWords(e.target.value) ) ;
  }

  return (
    <div style={{display: "flex" , flexDirection: "column"}}>
    
      <div style={{display: "flex", alignItems: "center"}}>
        <input type="text" onChange={handleChange} style={inputStyl} />
        <p style={{border: "2px solid grey" , margin: "0" , height: `${inputStyl.height}` , borderLeft: "none" , padding: "1px" , borderRadius: "0 4rem 4rem 0"}}>🔍</p>
      </div>
      <div style={{ display: "flex" , flexDirection: "column"}}>
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

export default App