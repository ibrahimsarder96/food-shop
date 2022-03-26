import React from 'react';

const Question = () => {
  return (
    <div>
      <h2>How React Work</h2>
      <p>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.
      JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</p>
      <h2>How useState Work</h2>
      <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
    </div>
  );
};

export default Question;