// * Video 38-6 Start here

// export default function Todo  ({task})  {
//     return (
//         <li>
//             Task : {task}
//         </li>
//     );
// };

//* Conditional Rendering Option 1

// export default function Todo  ({task, isDone})  {
//     if(isDone == true){
//         return <li>Finished : {task}</li>;
//     }else{
//         return <li>Work on : {task}</li>;
//     }
// };

//* Conditional Rendering Option 2

// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished : {task}</li>;
//   }
//   return <li>Work on : {task}</li>;
// }

//* For Video 38-6 end here

//* for Video 38-7 start here

//? Conditional Rendering Option 3: ternary operator

// export default function Todo({ task, isDone }) {
//     return <li>{isDone ? 'Finished' : 'Work On'} : {task}</li>;
//     }

//? Conditional Rendering Option 4: logical && operator

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone && ": Done"}
//     </li>
//   );
// }

//? Conditional Rendering Option 5: logical || operator

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone || ": Do it now"}
//     </li>
//   );
// }



//? Conditional Rendering Option 6 : Using a variable 



export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
      listItem = <li>Finished : {task}</li>;
    } else {
      listItem = <li>Work on : {task}</li>;
    }

    return listItem;
}


//* for Video 38-7 end here