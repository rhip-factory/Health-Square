import React, { Component } from 'react';
// import LayoutContentWrapper from '../components/utility/layoutWrapper';
// import LayoutContent from '../components/utility/layoutContent';

export default class extends Component {
 
render() {
  return (
    <div className="guestbookDiv">
      <form onSubmit={this.addToMessageBoard} className="guestBookForm">
        <label htmlFor="" className="guestlabel">
          What is your name?
        </label>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          className="NameinputForm"
        />
        <label className="guestlabel" htmlFor="">
          Leave a nice message:
        </label>
        <textarea
          className="MessageinputForm"
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <div className="Submit">
          <button type="submit" value="Submit" className="guestbook-message">
            Submit Message
          </button>
        </div>
      </form>
    </div>
  )