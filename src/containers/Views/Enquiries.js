import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class Enquiries extends Component {
  render() {
    return (
      <ChatBot
        headerTitle="Submit Enquiry"
        recognitionEnable={true}
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What is your email address or phone number?',
            trigger: 'mail',
          },
          {
            id: 'mail',
            user: true,
            trigger: 'enquiries',
          },
          {
            id: 'enquiries',
            message: 'What do you want to know about',
            trigger: 'submitEnquiry',
          },
          {
            id: 'submitEnquiry',
            user: true,
            trigger: 'advice',
          },
          {
            id: 'advice',
            message: "I'm sorry, I don't have an answer presently, I'll contact my oga at the top and would get back to you either by phone or mail provided",
            end: true
          },
        ]}
      />
    );
  }
}

export default Enquiries;