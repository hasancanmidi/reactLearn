import React, { useEffect, useState } from "react";
import { List } from "semantic-ui-react";
import TodoService from "../Services/TodoService";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todoService = new TodoService();
    todoService.getTodos().then((result) => setTodos(result.data));
  });

  return (
    <div>
      <div>
        <List>
          {todos.map((todo) => (
            <List.Item>{todo.title}</List.Item>
          ))}
        </List>
      </div>
    </div>
  );
}
