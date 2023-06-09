import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{border: "2px solid black" , marign: "5rem" , height: "50vh"}}>
      <App />
    </div>
  </React.StrictMode>,
)
