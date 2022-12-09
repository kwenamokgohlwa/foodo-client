import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../../models';
const deleteTodo = async (id) => {
    try {
        const deleteModel = await DataStore.query(Todo, id);
        await DataStore.delete(deleteModel);
    } catch (err) {
        return err;
    }
};

export default deleteTodo;