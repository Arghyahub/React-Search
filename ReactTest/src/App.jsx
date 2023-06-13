import React from 'react'

import Search from "./search/Search"

const App = () => {
  return (
    <div style={{ height: "100%" , width: "100%" , display: "flex" , flexDirection: "column" }}>
      <h1>Search Something</h1>
      <div style={{height: "25px"}}>
        <Search />
      </div>

      <div>Yo</div>

    </div>
  )
}

export default App