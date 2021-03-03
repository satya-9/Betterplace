import React from "react";
import Userinfo from "./Userinfo";
import "./styles.css";
function Form(props) {
  const users = props.users;
  return (
    <div>
      <ul>
        <div>
        {users.map((user, id) => (
          <Userinfo
            name={
              users[id].name.title +
              " " +
              users[id].name.first +
              " " +
              users[id].name.last
            }
            thumbnail={users[id].picture.thumbnail}
            gender={users[id].gender}
            email={users[id].email}
            phone={users[id].cell}
            nationality={users[id].location.country}
            
          />
        ))}
        </div>
      </ul>
    </div>
  );
}
export default Form;
