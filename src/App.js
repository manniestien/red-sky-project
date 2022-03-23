import React, { useState, Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUserForm from "./UserForms/AddUser";
import EditUserForm from "./UserForms/EditUser";
import UserTable from "./UserTable/UserTable";

const App = () => {
  const openModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    UsersGet();
    // getAllData()
  }, []);

  var usersData = [];
  const UsersGet = () => {
    fetch(`https://reqres.in/api/users?page=2`)
      .then((res) => res.json())
      .then((result) => {
        setUsers(result.data);
        usersData = result.data;
        console.log(usersData);
      });
  };
  // Data

  const initialFormState = { id: null, name: "", username: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    setOpen(false);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      avatar: user.avatar,
    });
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <AddUserForm addUser={addUser} isOpen={open} toggle={openModal} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <UserTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
            addUser={addUser}
            isOpen={open}
            toggle={openModal}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
