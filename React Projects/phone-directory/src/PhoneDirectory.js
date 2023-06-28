import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { Route, Routes } from "react-router-dom";

class PhoneDirectory extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [
        {
          id: 1,
          name: "Veena Bhat",
          phone: "9999999999",
        },
        {
          id: 2,
          name: "Shilpa Chaudhary",
          phone: "9999999888",
        },
      ],
    };
  }

  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({ subscribersList: subscribersList });
    //console.log(subscribersList);
  };

  navigatePageHandler = (path) => {
    this.props.navigatePageHandler(path);
  };

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <ShowSubscribers subscribersList={this.state.subscribersList} />
          }
        />
        <Route
          path="/add"
          element={
            <AddSubscriber
              navigatePageHandler={this.navigatePageHandler}
              addSubscriberHandler={this.addSubscriberHandler}
            />
          }
        />
      </Routes>
    );
  }
}

export default PhoneDirectory;
