import React from "react";
import "./styles.css";
import Popup from "./Popup";
function Userinfo(props) {
  return (
    <div className="userinfo_image">
      <div>
        <Popup className="userimage" image={props.thumbnail} alt="my"></Popup>
      </div>
      <div className="userinfo_details">
        <div className="username">
          <label className="userlabel">Name:</label>
          <div className="userdetail">{props.name}</div>
        </div>
        <div className="username">
          <label className="userlabel">Gender:</label>
          <div>{props.gender}</div>
        </div>
        <div className="username">
          <label className="userlabel">Email:</label>
          <div>{props.email}</div>
        </div>
        <div className="username">
          <label className="userlabel">Phone:</label>
          <div>{props.phone}</div>
        </div>
        <div className="username">
          <label className="userlabel">Nationality:</label>
          <div>{props.nationality}</div>

          
        </div>
      </div>
    </div>
  );
}
export default Userinfo;
