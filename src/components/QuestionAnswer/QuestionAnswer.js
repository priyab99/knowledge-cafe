import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div>
            <h3>What is the difference between props and state?</h3>
            <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.</p>
            <p>Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            <h3>How does useState work?</h3>
            <p>useState is React Hook that allows one to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            <h3> What are the purpose of useEffect other than fetching data?</h3>
            <p>The useEffect in react js allows one to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</p>
            <h3>How does React work?</h3>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
        </div>
    );
};

export default QuestionAnswer;