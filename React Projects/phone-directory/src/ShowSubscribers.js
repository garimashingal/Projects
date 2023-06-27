import React, { Component } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";

class ShowSubscribers extends Component {
  // let subscribers = [
  //   {
  //     id: 1,
  //     name: "Shilpa Bhatt",
  //     phone: "2222222222",
  //   },
  //   {
  //     id: 2,
  //     name: "Bhavani Rai",
  //     phone: "9999999999",
  //   },
  // ];

  // constructor() {
  //   super();
  //   this.state = {
  //     subscribersListToShow: [],
  //   };
  //   console.log("Constructor Called");
  // }

  // componentDidMount() {
  //   console.log("Component Did Mount Called");
  //   let newSubscriber = {
  //     id: 0,
  //     name: "Garima Shingal",
  //     phone: "9999999999",
  //   };
  //   let newSubscriberList = this.state.subscribersListToShow;
  //   newSubscriberList.push(newSubscriber);

  //   this.setState({ subscribersListToShow: newSubscriberList });
  // }

  render() {
    console.log("Render Called");
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-button">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <br />
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            //this.state.subscribersListToShow.map((sub) => {
            this.props.subscribersList.map((sub) => {
              return (
                <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <br />
                  <span className="grid-item">{sub.phone}</span>
                  <span className="grid-item action-btn-container">
                    <button className="custom-btn delete-button">Delete</button>
                  </span>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
