import React, { Component } from 'react';
// import LayoutContentWrapper from '../components/utility/layoutWrapper';
// import LayoutContent from '../components/utility/layoutContent';
class  ChatMessage extends Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
    }
    changeView() {
        this.props.changeView('signup')
    }
    render() {
        return (
            <div>
                <button className="chat-button" onClick={this.changeView}>Message</button>
            </div>
            
          
        )
    }
}
export default ChatMessage;

render() {
  return(
      <div className="form-container">
          <h1>Let's Talk</h1>
          <form onSubmit={this.handleSubmit} className="form">
              <label htmlFor="email">What is your email?</label>
              <input type="email" name="username" onChange={this.handleChange} className="input" />
              <button className="submit">Submit</button>
          </form>
      </div>
  )
}
