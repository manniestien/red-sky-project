import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "@fontsource/marcellus";
import "@fontsource/montserrat";

const UserTable = (props) => {
  return (
    <>
      <div className="container" id="projContainer">
        <h2 id="project-header">REDSKY CODING CHALLENGE</h2>
        <hr />
        <div className="container">
          <div className="row justify-content-center">
            <div className="flex-box">
              <button
                className="btn btn-lg "
                onClick={() => {
                  props.toggle();
                }}
                style={{
                  backgroundColor: "#DD013F",
                  color: "white",
                  float: "left",
                }}
              >
                CREAT NEW USER
              </button>
            </div>
            <div>
              <div>
                <br></br>
                <div className="row">
                  <table className="table ">
                    <thead>
                      <tr className="userList">
                        <th colspan="9">USER LIST</th>
                      </tr>
                      <tr className="secHeader">
                        <th> AVATAR</th>
                        <th> FIRST NAME</th>
                        <th> LAST NAME</th>
                        <th> EMAIL ADDRESS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.users.map((user) => (
                        <tr key={user.id}>
                          <td>
                            <img
                              src={user.avatar}
                              alt={user.first_name}
                              style={{ height: 24, width: 24 }}
                            />
                          </td>
                          <td> {user.first_name} </td>
                          <td> {user.last_name}</td>
                          <td> {user.email}</td>
                          <td style={{ marginRight: "0px", color: "blue" }}>
                            <button
                              style={{
                                backgroundColor: "#DD013F",
                                color: "white",
                              }}
                              onClick={() => {
                                props.editRow(user);
                              }}
                              className="btn "
                            >
                              EDIT{" "}
                            </button>
                            <button
                              style={{
                                marginLeft: "10px",
                                backgroundColor: "#DD013F",
                                color: "white",
                              }}
                              onClick={() => props.deleteUser(user.id)}
                              className="btn "
                            >
                              DELETE{" "}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
