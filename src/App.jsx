//  Video 38-2 start here
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <Person />
      <Person />
      <Person />
      <Student />
    </>
  );
}

// Video 38-3 start here

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

function Student() {
  return  ( 
  <div>
    <h3>This is a student</h3>
    <p>Class: </p>
    <p>score: </p>
  </div>
  )
}



// Video 38-3 end here



export default App;

//  Video 38-2 end here
