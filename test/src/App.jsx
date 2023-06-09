import { useState } from "react";

import Trie from "./trie";
import datas from "./data"
const search = new Trie() ;
// Feed Data to Trie
datas.forEach(elem => {
  search.insertWord(elem[0],elem[1]) ;
});
// DS work complete

const App = () => {
  const [Display, setDisplay] = useState([]) ;

  const handleChange = (e) => {
    setDisplay( search.getWords(e.target.value) ) ;
  }

  return (
    <div style={{display: "flex" , flexDirection: "column"}}>
      <input type="text" onChange={handleChange} />
      <div style={{ display: "flex" , flexDirection: "column"}}>
        { Display.map((outer) => (
          outer.links.map((inner,ind) => (
            <a key={ind} href={inner} style={{textTransform: "capitalize"}} >{outer.str}</a>
          ))
        ))
        }
      </div>
    </div>
  )
}

export default App