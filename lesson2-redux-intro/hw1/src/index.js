import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ name: 'Bob', id: 1 }));
store.dispatch(addUser({ name: 'Tom', id: 2 }));
store.dispatch(addUser({ name: 'Ann', id: 3 }));
store.dispatch(addUser({ name: 'Rob', id: 4 }));
store.dispatch(addUser({ name: 'Jack', id: 5 }));
store.dispatch(addUser({ name: 'Kate', id: 6 }));
store.dispatch(deleteUser(6));

console.log(store.getState());
