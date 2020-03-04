import React from 'react';
import config from '../../config';
import io from 'socket.io-client';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BottomBar from '../BottomBar/BottomBar';
import './Chat.css';
// //esline-disable-next-line
// import NLPAPI from "../../utils/NLPAPI";
// //esline-disable-next-line
// import GiphyAPI from "../../utils/GiphyAPI";
// //esline-disable-next-line

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chat: [],
      content: '',
      name: '',
      firstcall: '',
    };
  }

  // APIsearch = query => {
  //   NLPAPI.searchNLP(query)
  //     .then(res => 
  //       console.log(res)
  //       )
  //     .catch(err => console.log(err));
  // };

  componentDidMount() {
    this.socket = io(config[process.env.NODE_ENV].endpoint);

    // Load the last 10 messages in the window.
    this.socket.on('init', (msg) => {
      this.setState((state) => ({
        chat: [...state.chat, ...msg.reverse()],
      }), this.scrollToBottom);
    });

    // Update the chat if a new message is broadcasted.
    this.socket.on('push', (msg) => {
      this.setState((state) => ({
        chat: [...state.chat, msg],
      }), this.scrollToBottom);
    });
  }

  // Save the message the user is typing in the input field.
  handleContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  //
  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  // When the user is posting a new message.
  handleSubmit(event) {
    console.log(event);
    // Prevent the form to reload the current page.
    event.preventDefault();

    // this.APIsearch(this.state.firstcall);

    this.setState((state) => {
      console.log(state);
      console.log('this', this.socket);
      // Send the new message to the server.
      this.socket.emit('message', {
        name: state.name,
        content: state.content,
      });

      // Update the chat with the user's message and remove the current message.
      return {
        chat: [...state.chat, {
          name: state.name,
          content: state.content,
          firstcall: state.firstcall,
        }],
        firstcall: state.content,
        content: '',
        
      };
    }, this.scrollToBottom);
  }

  // Always make sure the window is scrolled down to the last message.
  scrollToBottom() {
    const chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
  }

  render() {
    return (
      <div className="App">
        <Paper id="chat" elevation={3}>
          {this.state.chat.map((el, index) => {
            return (
              <div key={index}>
                <Typography variant="caption" className="name">
                  {el.name}
                </Typography>
                <Typography variant="body1" className="content">
                  {el.content}
                </Typography>
              </div>
            );
          })}
        </Paper>
        <BottomBar
          content={this.state.content}
          handleContent={this.handleContent.bind(this)}
          handleName={this.handleName.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          name={this.state.name}
        />
      </div>
    );
  }
};

export default Chat;
