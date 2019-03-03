import React, { Component } from 'react';
// import LayoutContentWrapper from '../components/utility/layoutWrapper';
// import LayoutContent from '../components/utility/layoutContent';

export default class extends Component {
  render() {
    return (
      <Form for={user} onSubmit={...}>
  <Field name="firstName" />
  <Field name="lastName" />

  <Field name="email" />
  <Field name="password" />

  <button>Submit</button>
</Form>
      <h1>Enquiries</h1> 
    );
    
  }
}

