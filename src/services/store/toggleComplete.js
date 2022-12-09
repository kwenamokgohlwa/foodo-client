import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../../models';
const toggleTodo = async (id) => {
    try {
        const original = await DataStore.query(Todo, id);
        await DataStore.save(
            Todo.copyOf(original, updated => {
                updated.complete = !original.complete;
            })
        );
    } catch (err) {
        return err;
    }
}

export default toggleTodo;