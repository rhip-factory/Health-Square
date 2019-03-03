import React from 'react'
import "./landing.css"

class Landing extends React.Component {

  componentDidMount() {
    
  }

  componentWillUnmount(){

  }


  render() {
    return (
      <div className="container">
        <div className="split left">
          <h1>Meet TEAM <br /> IOTA INC</h1>

          <a href="#" className="button">Let's Take a Quick Tour...</a>
        </div>
        <div className="split right">
          <h1>MEMBER?</h1>
          <a href="#" className="button">SignUp</a>
        </div>
      </div>
    )
  }
}

export default Landing