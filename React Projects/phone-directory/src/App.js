import Header from "./Header";
import "./App.css";

function App() {
  let subscribers = [
    {
      id: 1,
      name: "Shilpa Bhatt",
      phone: "2222222222",
    },
    {
      id: 2,
      name: "Bhavani Rai",
      phone: "9999999999",
    },
  ];
  return (
    <div>
      <Header />
      <div className="component-body-container">
        <button className="custom-btn add-button">Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <br />
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {subscribers.map((sub) => {
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
        })}
      </div>
    </div>
  );
}

export default App;
