import React, { Component } from 'react';
// import LayoutContentWrapper from '../components/utility/layoutWrapper';
// import LayoutContent from '../components/utility/layoutContent';

export default class extends Component {
  render() {
    return (
          <h1>Messages</h1>
          import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};

ReactDOM.render(
  <Button type="primary" onClick={info}>Display normal message</Button>,
  mountNode
);
    );
  }
}
