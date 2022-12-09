import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../../models';
const createTodo = async (title) => {
    try {
        await DataStore.save(
            new Todo({
                "title": title,
                "complete": false
            })
        );
    } catch (err) {
        return err;
    }
}

export default createTodo;