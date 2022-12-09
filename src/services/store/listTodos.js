import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../../models';
const listTodos = async () => {
    try {
        return await DataStore.query(Todo);
    } catch (err) {
        return err;
    }
}

export default listTodos;