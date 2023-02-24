import React from 'react'
import "./header.css"

const Header = ({dark , darkTheme}) => {
  return (
    <div style={dark ? {backgroundColor:"rgb(40,44,53)", color:"white"} : {backgroundColor:"white", color:"black"}} className='header'>
        <div className='heading'>
            <p>Overreacted</p>
        </div>
        <div className='buttonContainer'>
            <button style={dark ? {backgroundColor: "rgb(253,161,195)", color:"black"} : {backgroundColor:"rgb(204,52,103)",color:"white"}} onClick={() => {
                darkTheme(!dark)
            }}>Toggle</button>
        </div>
    </div>
  )
}

export default Header