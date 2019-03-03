import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        headerTitle="Messaging"
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
            message: 'Hi {previousValue}! What is your gender?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', trigger: '5' },
              { value: 'female', label: 'Female', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'How old are you?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: 'problem',
            validator: (value) => {
              if (isNaN(value)) {
                return 'Please provide age in numeric form';
              } else if (value < 0) {
                return "Really?? I think you mistyped your age. Tell me your age, it's between us I promise";
              } else if (value > 120) {
                return `${value}? Come on!`;
              }
              return true;
            },
          },
          {
            id: 'problem',
            message: 'How may I be of help today?',
            trigger: 'userProblem',
          },
          {
            id: 'userProblem',
            user: true,
            trigger: 'symptoms',
          },
          {
            id: 'symptoms',
            message: "What symptoms are you experiencing",
            trigger: 'userSymptoms',
          },
          {
            id: 'userSymptoms',
            user: true,
            trigger: 'medication',
          },
          {
            id: "medication",
            message: "Have you actually tried taking any medication?",
            trigger: 'medicationQuestion',
          },
          {
            id: "medicationQuestion",
            options: [
              { value: 'yes', label: 'Yes', trigger: 'userMedication' },
              { value: 'no', label: 'No', trigger: 'userMedication' },
            ],
          },
          {
            id: 'userMedication',
            user: true,
            trigger: 'advice',
          },
          {
            id: 'advice',
            message: 'From symptoms and medications provided, you can take a little aspirine and agbo jedi',
            end: true
          },
        ]}
      />
    );
  }
}

export default SimpleForm;