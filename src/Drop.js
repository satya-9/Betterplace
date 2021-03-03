import React from "react";
import "./styles.css";
import Form from "./Form";
class Drop extends React.Component {
  constructor() {
    super();
    this.state = {
      s: 1,
      gender: "",
      nat: "",
      res: "",
      users: [],
      updated: false
    };
  }
  previousbutton = () => {
    if (this.state.s > 1) {
      var a = this.state.s;
      this.setState({ s: a - 1 });
    }
  };
  nextbutton = () => {
    var b = this.state.s;
    this.setState({ s: b + 1 });
  };
  componentDidUpdate(prevState, prevProps) {
    console.log("cdu");
    if (
      prevProps.gender !== this.state.gender ||
      prevProps.res !== this.state.res ||
      prevProps.nat !== this.state.nat ||
      prevProps.s !== this.state.s
    ) {
      this.fetchdata();
    }
  }
  genderchange = (e) => {
    this.setState({ gender: e.target.value });
  };
  natchange = (e) => {
    this.setState({ nat: e.target.value });
  };
  reschange = (e) => {
    this.setState({ res: e.target.value });
  };
  fetchdata = () => {
    let url = `https://randomuser.me/api?page=${this.state.s}&results=${this.state.res}&gender=${this.state.gender}&nat=${this.state.nat}`;
    fetch(url)
      .then((res) => {
        //console.log(res);
        return res.json();
      })
      .then((users) => {
        this.setState({ users: users.results });
      });
  };

  render() {
    console.log(this.state.s);
    return (
      <div>
        <div className="Header">
        <div className="selects">
        <select className="gender" value={this.state.gender || ""} onChange={this.genderchange}>
          <option>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select className="nationality" value={this.state.nat || ""} onChange={this.natchange}>
          <option>Nationality</option>
          <option value="AU">Australia</option>
          <option value="BR">Brazil</option>
          <option value="CA">Canada</option>
          <option value="GB">GREAT BRITAIN</option>
          <option value="US">US</option>
        </select>
        <select className="ResultPerPage" value={this.state.res || ""} onChange={this.reschange}>
          <option>ResultsPerPage</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        </div>
        <div className="prenext">
        <button className="previous" onClick={this.previousbutton}>Previous</button>
        <button className="next"  onClick={this.nextbutton}>Next</button>
        </div>
        </div>
        <div className="users">
        <Form users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default Drop;
