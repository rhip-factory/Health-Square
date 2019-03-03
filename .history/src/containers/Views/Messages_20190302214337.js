
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
                <button className="chat-button" onClick={this.changeView}>Send a message</button>
            </div>
        )
    }
}
export default ChatMessage;




export default class extends Component {
  render() {
    return (
          <h1>Messages</h1>
          
    );
  }
}
