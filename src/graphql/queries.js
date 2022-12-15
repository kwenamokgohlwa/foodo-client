/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listTodos = /* GraphQL */ `
  query ListTodos {
    listTodos {
      id
      title
      complete
      owner
    }
  }
`;
export const getTodoById = /* GraphQL */ `
  query GetTodoById($todoId: String!) {
    getTodoById(todoId: $todoId) {
      id
      title
      complete
      owner
    }
  }
`;
