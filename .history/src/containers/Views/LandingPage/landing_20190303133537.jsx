import React from 'react'
import "./landing.css"

class Landing extends React.Component {

  componentDidMount() {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const container = document.querySelector(".container");

    left.addEventListener("mouseenter", () => {
      container.classList.add("hover-left");
    });

    left.addEventListener("mouseleave", () => {
      container.classList.remove("hover-left");
    });

    right.addEventListener("mouseenter", () => {
      container.classList.add("hover-right");
    });

    right.addEventListener("mouseleave", () => {
      container.classList.remove("hover-right");
    });
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