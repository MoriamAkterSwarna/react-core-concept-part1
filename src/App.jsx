//  Video 38-2 start here
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <Device name="laptop" price="55k" />
      <Device name="Mobile" price="15k" />
      <Device name="Watch" price="3k" />

      <Person />
      <Person />
      <Person />
      <Student grade="7" score="99" />
      <Student grade={12} score = "85" />
      <Student />

      <Developer />
    </>
  );
}

// Video 38-3 start here

//

function Person() {
  const age = 25;
  const money = 100;
  const person = { name: "Sakib", age: 22 };

  return (
    <h3>
      I am
      {/* a Person  */}
      {person.name}
      with age: {age + money}
    </h3>
  );
}

function Student({ grade =1, score =0 }) {
  // console.log(props)
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade} </p>
      <p>score: {score} </p>
    </div>
  );
}

// Video 38-3 end here

// Video 38-4 start here

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid green",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h2>This is a Developer</h2>
      <p>Salary: </p>
      <p>Position: </p>
    </div>
  );
}

function Device(props) {
  console.log(props);

  return (
    <h2>
      This Device :{props.name} Price: {props.price}{" "}
    </h2>
  );
}

// Video 38-4 end here

export default App;

//  Video 38-2 end here
