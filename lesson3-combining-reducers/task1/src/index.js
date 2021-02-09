import store from './store';
import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(increment());

store.dispatch(addUser({ name: 'Tom', id: 1 }));
store.dispatch(addUser({ name: 'Bob', id: 2 }));
store.dispatch(deleteUser(2));
store.dispatch(updateUser({ age: 100 }));
