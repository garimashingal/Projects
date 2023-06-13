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
      <div>
        <button className="add-button">Add</button>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
