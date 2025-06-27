import React from "react"
import './homepage.css'
function Homepage(){
    return(
    <div>
        <div className="navbar">
            <div>
            <h3>Taskify</h3>
            </div>
            <div>
            <button>Tasks</button>
            <button>Notes</button>
            <button>Profile</button>
            <button className="logout">Logout</button>
        </div>
        </div>
        <hr className="divider"/>
        <div className="page">
            <div>
            <h2>My Tasks</h2>
            </div>
            <div>
            <button>Filter</button>
            <button>Sort</button>
            <button className="newtask">+ New Task</button>
        </div>
        </div>
    </div>
    )
}
export default Homepage