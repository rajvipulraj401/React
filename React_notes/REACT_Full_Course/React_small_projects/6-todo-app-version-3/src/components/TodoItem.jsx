import "../App.css";
// in order to go one level back

function TodoItem({ entry }) {
  // The thing is we are hardcoding the data.

  //   NOTES - now we got the entry props which we passed from the App.js
  // so we destructure the props object which we passed now we have the array and inside that the elements
  // in the object  it now we have an array and using the map method we will iterate and get each index and display it however we want.

  return (
    <div className="container">
      {/* <div className="row kg-row"> */}
      {entry.map((curr) => {
        return (
          <>
            <div className="row kg-row">
              <div className="col-6">{curr.name}</div>
              <div className="col-4">{curr.duedate}</div>
              <div className="col-2 kg-col">
                <button type="button" className="btn btn-danger  kg-button">
                  Delete
                </button>
              </div>
            </div>
          </>

          /*
                What error i had ?

                ans - THe error i faced was that i was not rendriing with map method correctly . alSO inside MAP method there were multiple lines so i needed to use 
                return keyword and also include in paranthesis and  fragments because there need to be a parent div ELSE we CANNOT return so many divs from a functiion 
                .(chahe wo map method me se ho ya khi aur pe ).

                    lastly when i was rendering with map method i should have gone and seen `chrome dev tools` and also should have done console.log to see 
                    what styles are being applied and what are not and then also give hard look to see how i am rendering it and what will happen.
        
*/
          /*
   **What error I had?**

   *Answer:* The error I faced was that I was not rendering with the `map` method correctly. Also, inside the `map` method, there were multiple lines,
    so I needed to use the `return` keyword and also include parentheses and fragments because there needs to be a parent div. Otherwise, 
    we cannot return so many divs from a function (whether it's inside a `map` method or elsewhere).

   Lastly, when I was rendering with the `map` method, I should have used `**Chrome DevTools**` to inspect the rendered elements and also used `console.log` 
   to see which styles are being applied and which are not. It's important to carefully review how I'm rendering the elements and anticipate what will happen.
*/
        );
      })}
    </div>
  );
}

export default TodoItem;

// function TodoItem({ todoName, todoDate }) {
//   return (
//     <div className="container">
//       <div className="row kg-row">
//         <div className="col-6">{todoName}</div>
//         <div className="col-4">{todoDate}</div>
//         <div className="col-2">
//           <button type="button" className="btn btn-danger kg-button">
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TodoItem;
