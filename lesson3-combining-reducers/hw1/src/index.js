import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('UA'));

store.dispatch(addProduct({ id: 1, name: 'product1' }));
store.dispatch(addProduct({ id: 2, name: 'product2' }));
store.dispatch(removeProduct(2));

store.dispatch(setUser({ name: 'Tom', id: 1 }));
store.dispatch(setUser({ name: 'Bob', id: 2 }));
store.dispatch(removeUser());
