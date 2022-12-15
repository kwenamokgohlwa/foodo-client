/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo($todo: CreateTodoInput!) {
    createTodo(todo: $todo) {
      id
      title
      complete
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo($todoId: String!) {
    deleteTodo(todoId: $todoId) {
      id
      title
      complete
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo($todo: UpdateTodoInput!) {
    updateTodo(todo: $todo) {
      id
      title
      complete
      owner
    }
  }
`;
