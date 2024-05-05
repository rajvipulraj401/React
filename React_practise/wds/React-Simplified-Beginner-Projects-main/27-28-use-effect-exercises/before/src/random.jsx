import React, { useState } from "react";

function random() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ]);

  function addItem() {
    setItems((currentItems) => {
      return [{ id: crypto.randomUUID(), name: "New Item" }, ...currentItems];
    });
  }
  //   return (
  //     <div>
  //       <button onClick={addItem}>Add Item</button>
  //       <pre>
  //         {items.map((item) => {
  //           return (
  //             <div>
  //               {item.name}
  //               <input type="text" />
  //             </div>
  //           );
  //         })}
  //       </pre>
  //     </div>
  //   );
  // }

  // export default random;

  /* You gonna notice that the input is actually  statyed at the same index
instead of going down with the component because they are tied to this component  .The reason for this is that
by default react try to figure out which one of your elements
is associated with which item in your array and to do that it associates
the index of the array with specific set of components so what happens as we are mapping
the index 0 item has this input attached to it always, So 
This return right here is associated with the index 0 and 
when we add a new  element to the beginning of my list we can see what happens is
that input that  stil associates with index 0 stays with index 0


 Even though the name of the item is changing so that is a big problem and in order
 to solve this we need to add a key prop to every single
 element  in the array , So by default it uses the index and we should never use
 the index we should always pass keys else we will get bugs like this*/

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <pre>
        {items.map((item) => {
          return (
            <div key={item.id}>
              {item.name}
              <input type="text" />
            </div>
          );
        })}
      </pre>
    </div>
  );
}

export default random;

/* Now we can see that this input is correctly linked up with this item 
and this key is telling react what the actual identifier is 
 so no matter we change the order , whether elements removed . It Knows
 that which id is associated with which specific return */

/* Note- we need to make sure the id should be unique . we cannot have the same key 
  and the keys actually need to be unique for actual instance of the loop
  we are looping through*/

/*Note 2-- The id need to be stay the same between each one of your
  renders  because  if they changed react will have no way of knowing of how to 
  hook things up*/

/*note 3-- YOu do not set the key inside the actual component 
  Keys must always be defined where you are using the loops

  so this is wrong
  
  export function Item(){
    return <div key = {item.id}></div>
  }


  */
