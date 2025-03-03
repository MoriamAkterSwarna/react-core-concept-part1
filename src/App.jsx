//  Video 38-2 start here
import Actor from "./Actor";
import "./App.css";
import BookStore from "./BookStore";
import Singer from "./Singer";
import Todo from "./Todo";

function App() {


  // For Video 38-9 

  const books = [ 
    {id: 1, name: 'Physics', price : 120},
    {id: 2, name: 'Chemistry', price : 130},
    {id: 3, name: 'Math', price : 140},
    {id: 4, name: 'Biology', price : 150},
    {id: 5, name: 'English', price : 160},
  ]


  // For Video 38-8  

  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 
    'Rubel', 'Salman shah'
   ]

   const singers = [
    {  name:'Dr. Mahfuzur Rahman', age: 65,}, 
    {name: 'Eva Rahman', age: 35}, 
    {name: 'Shuvro Dev', age: 45},
    {name: 'Priton', age: 29},
  ]

  return (
    <>
      <h1>Vite + React</h1>


      {/* For Video 38-9 */}

      <BookStore books={books} />





      {/* For Video 38-8 */}

      {
        singers.map(singer => <Singer singer={singer}  />)
      }


      <Actor name="Bappa Raz" />

      {
        actors.map(actor => <Actor name={actor} />)
      }



      {/* For Video 38-6 */}
      {/* <Todo task="Learn React" isDone={true} />
      <Todo task="Explore core Concepts" isDone={false} />
      <Todo task="Try JSX" isDone={true} /> */}

      {/* <Device name="laptop" price="55k" />
      <Device name="Mobile" price="15k" />
      <Device name="Watch" price="3k" />

      <Person />
      <Person />
      <Person />
      <Student grade="7" score="99" />
      <Student grade={12} score = "85" />
      <Student />

      <Developer /> */}
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

function Student({ grade = 1, score = 0 }) {
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
