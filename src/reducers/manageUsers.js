export default function manageUsers(state = {users: []}, action){

  switch (action.type) {
    case 'ADD_USER':
        console.log("this is state", state)
        console.log("this the action", action.type)
        return Object.assign({}, state, {users: state.users.concat(action.user)})
      break;
    default:
      return state;
  }
}
