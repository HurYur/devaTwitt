import React from 'react';
import {Button} from 'react-bootstrap';

class TextInput extends React.Component{
    constructor(props){
        super(props);
        this.state = { newMessageText: '', messageCharactersLimit: this.props.charactersLimit || 200};
    }
    messageType = (messageText) => {
        if(messageText.length <= this.state.messageCharactersLimit){
            this.setState({newMessageText: messageText});
        }
    };
    sendPost = (message) => {
        this.props.onSend(message);
    };
    render(){
        const {newMessageText, messageCharactersLimit} = this.state;
        return (
            <div className="new-message-container">
                <textarea value={newMessageText}
                          onChange={(e) => this.messageType(e.target.value)} />
                <div className="symbol-count">
                    {messageCharactersLimit - newMessageText.length} symbols left
                </div>
                <Button bsStyle="info" onClick={() => this.sendPost(newMessageText)}>
                    { this.props.btnText ?  this.props.btnText : "Send"}
                </Button>
            </div>
        )}
}

export default TextInput;