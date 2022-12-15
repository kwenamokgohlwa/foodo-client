/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo($todo: CreateTodoInput!) {
    createTodo(todo: $todo) {
      id
      owner
      title
      complete
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo($todoId: String!) {
    deleteTodo(todoId: $todoId) {
      id
      owner
      title
      complete
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo($todo: UpdateTodoInput!) {
    updateTodo(todo: $todo) {
      id
      owner
      title
      complete
    }
  }
`;
