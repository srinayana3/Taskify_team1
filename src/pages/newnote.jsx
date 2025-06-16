import React from "react"
import './newnote.css'
function Newnote(){
  return(
    <div class="container">
      <div className="header"> 
        <h2 id="newnote">New Note</h2>
        <span className="closebtn">&times;</span>
      </div>
      <hr className="divider"/>
      <form className="noteform">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" placeholder="Enter note title" />
        <label htmlFor="content">Content</label>
        <textarea id="content" placeholder="Enter note content"></textarea>
        <div className="footer">
        <button type="button" className="buttons" id="cancel-btn">Cancel</button>
        <button type="submit" className="buttons" id="submitbtn">Create Note</button>
        </div>
      </form>
    </div>
  )
}
export default Newnote