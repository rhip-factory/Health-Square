import React from 'react'

class Landing extends React.Component {

  render(){
    return(

    )
  }
}

    

        <div class="container">
                <div class="split left">
                  <h1>Meet TEAM <br> IOTA INC</h1>
                  
                  <a href="#" class="button">Let's Take a Quick Tour...</a>
                </div>
                <div class="split right">
                  <h1>MEMBER?</h1>
                  <a href="#" class="button">SignUp</a>
                </div>
              </div>
        
        <script>
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
        </script>
</body>
</html>