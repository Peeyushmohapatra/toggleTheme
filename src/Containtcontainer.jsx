import React from 'react'
import "./containtcontainer.css"

const Containtcontainer = ({dark}) => {
  return (
    <div style={dark ? {backgroundColor:"rgb(40,44,53)"} : {backgroundColor:"white"}} className='textContainer'>
        <div className='one'>
            <h1 style={dark ? {color:"rgb(237,170,200)"} : {color:"rgb(225,44,101)"}}>The WET Codbase</h1>
            <p>Sunday 4th,2023 11 min read</p>
            <p>Come waste your time with me</p>
        </div>
        <div className='one'>
        <h1 style={dark ? {color:"rgb(237,170,200)"} : {color:"rgb(225,44,101)"}} >Goodby, Clean Code</h1>
            <p>Friday 22nd,2023 5 min read</p>
            <p>Let clean code guide you. Then let it go.</p>
        </div>
        <div className='one'>
        <h1 style={dark ? {color:"rgb(237,170,200)"} : {color:"rgb(225,44,101)"}}>My Decade In Review</h1>
            <p>Saturday 11th,2023 5 min read</p>
            <p>A Personal reflection.</p>
        </div>
        <div className='one'>
        <h1 style={dark ? {color:"rgb(237,170,200)"} : {color:"rgb(225,44,101)"}}>What Are The React Team Principles</h1>
            <p>Thursday 4th,2023 5 min read</p>
            <p>A Personal reflection.</p>
        </div>
    </div>
  )
}

export default Containtcontainer