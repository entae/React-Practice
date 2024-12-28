import { Component } from 'react';

import classes from './User.module.css';

// render() method in a class is like the equivalent to the return statement in a functional component

// extends = inherits
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;

// Class based components can technically work together with functional components