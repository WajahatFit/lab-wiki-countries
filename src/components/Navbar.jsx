import React from 'react'




export default function Navbar() {
    const styles = {
        color: 'white',
        textDecoration: 'none',
        
    }
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <p className="navbar-brand" style={styles}>  WikiCountries</p>
          
        </div>
      </nav>
  )
}
