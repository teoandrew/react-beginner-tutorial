/*
Note about this file: Use .jsx instead of .js for better code completion
*/

// import React and the Component class from the React module
// you can manually do it by hand, or you can use this shortcut from the 'Simple React Snippets' extension
import React, { Component } from 'react'; // "imrc"

// "cc"
class Counter extends Component {
    // state = {} // we don't need this yet
    render() { 
        return <h1>Hello World</h1>;
    }
}
 
export default Counter; 
/*
we can also skip this last line and put it at the beginning of the class: export default Counter extends Component
but let's stick to the templates moving forward
*/