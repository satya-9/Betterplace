import React from "react";
import "./styles.css";
class Popup extends React.Component {
  state = { open: false };

  handleclick = () => {
    this.setState({ open: !this.state.open });
    console.log("cliked");
  };

  render() {
    return (
      <div>
        <img className="smallimage" src={this.props.image} onClick={this.handleclick} alt="no" />
        {this.state.open && (
          <dialog
            className="image_dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleclick}
          >
            <img
              className="image_large"
              src={this.props.image}
              onClick={this.handleclick}
              alt="my"
            />
          </dialog>
        )}
      </div>
    );
  }
}
export default Popup;
