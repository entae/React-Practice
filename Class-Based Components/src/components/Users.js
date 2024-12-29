import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  // constructor is used for managing state
  // with class-based components state is always an object
  // it always has-to also use the name 'state'
  constructor() {
    super();
    this.state = {
      showUsers: true,
    }
  }

  componentDidUpdate() {
    // try {
    //   someCodeWhichMightFail()
    // } catch (err) {
    //   handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error('No users provided!')
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT
    // setState merges the update to the existing object,
    // unlike useState which overrides the state with the new state, but doesn't merge
    this.setState((curState) => {
      return { showUsers: !curState.showUsers}
    })
  }

  render() {

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    )
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
