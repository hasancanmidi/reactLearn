import React, { useEffect, useState } from "react";
import { List } from "semantic-ui-react";
import UserService from "../Services/UsersService";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let usersService = new UserService();
    usersService.getUsers().then((result) => setUsers(result.data));
  });

  return (
    <div>
      <div>
        <List>
          {users.map((users) => (
            <List.Item>{"User : "+users.name + " " + "Username : "+users.username}</List.Item>

          ))}
        </List>
      </div>
    </div>
  );
}