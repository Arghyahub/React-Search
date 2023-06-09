import { useState } from "react";

import Trie from "./trie";
const search = new Trie() ;

search.insertWord("Hello","https://google.com") ;
search.insertWord("Hemlo","https://bing.com") ;
search.insertWord("Help","https://msn.com") ;
search.insertWord("Heavy","https://yahoo.com") ;
search.insertWord("Hethen","https://yandex.com") ;
search.insertWord("Heap","https://github.com") ;

const App = () => {
  const [Display, setDisplay] = useState([]) ;

  const handleChange = (e) => {
    setDisplay( search.getWords(e.target.value) ) ;
  }

  return (
    <div style={{height: "100vh" , width: "100vw" , display: "flex", justifyContent: "center" , alignItems: "center" , flexDirection: "column"}}>
      <input type="text" onChange={handleChange} />
      <div style={{ display: "flex" , flexDirection: "column"}}>
        { Display.map((outer) => (
          outer.links.map((inner,ind) => (
            <a key={ind} href={inner}>{outer.str}</a>
          ))
        ))
        }
      </div>
    </div>
  )
}

export default App