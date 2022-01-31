import React, { Component } from "react";
import { Alert, Col } from "react-bootstrap";
import { clearMessages } from "../redux/features/messageSlice";
import { store } from "../redux/store";
import $ from "jquery";

export default class FlashMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    if (store.getState().messenger.hasNewMessages) {
      this.setState({ messages: store.getState().messenger.messages });
      setTimeout(() => {
        store.dispatch(clearMessages());
      }, 500);
      setTimeout(() => {
        $("#alert").hide();
        this.setState({ messages: [] });
      }, 3000);
    }
  }

  popMessage = (msg) => {
    this.setState({
      messages: this.state.messages.filter((message) => {
        return message.message !== msg;
      }),
    });
  };

  render() {
    if (this.state.messages.length > 0) {
      return (
        <Col className="flash-message-column mg-lg-t-9 w-25">
          {this.state.messages.map((message, key) => (
            <Alert
              key={key}
              variant={`${message.type}`}
              onClose={() => this.popMessage(message.message)}
              transition={true}
              id="alert"
              dismissible
            >
              {message.message}
            </Alert>
          ))}
        </Col>
      );
    } else {
      return "";
    }
  }
}
