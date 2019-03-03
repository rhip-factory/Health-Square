import React, { Component } from 'react';
// import LayoutContentWrapper from '../components/utility/layoutWrapper';
// import LayoutContent from '../components/utility/layoutContent';

export default class extends Component {
  render() {
    return (
          <h1>Messages</h1>
          
    );
  }
  class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list">                 
        {this.props.messages.map(message => {
          return (
           <li key={message.id}>
             <div>
               {message.senderId}
             </div>
             <div>
               {message.text}
             </div>
           </li>
         )
       })}
     </ul>
    )
  }
}
}

import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};

ReactDOM.render(
  <Button type="primary" onClick={info}>Display normal message</Button>,
  mountNode
);
