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

