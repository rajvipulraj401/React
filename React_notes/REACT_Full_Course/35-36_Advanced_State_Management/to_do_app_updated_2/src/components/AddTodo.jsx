import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  /* useRef ne mera ek variable bana diya iski mai jab bhi value
  chahunga toh update ho jayegi ya value mujhe mil jayegi  but finally kya hoga ki between
  different different render cycles iski value update nahi hogi aur dusra
   advantage ye hoga ki dekiye agar mai Ek hi component ko 4 jagah use krunga toh state 
   kya hoti hai sabki apni apni hoti hai yaani state jo hai across component same nahi hai
   koi static variable type ki chiz nahi hai DUSRA java ya c++ language jaisa
     so this variable `noofUpdates` here  runs with Components so this state 
     runs with components. 
     
     So , This means if you have used a component at two different places so what will happen
     is that their state will also be different. So useRef also works like that . So what we could
     have done is that we could have declare variable outside the function so then that variable 
     will be declared in javaScript environment and we would get that variable and it will also not 
     change between cycles. But the disadvantage of that is that between different components 
     it will get shared .  
     
     But here what we want is that we don't want to share it between different components ,we only 
     want to share it in my own component between multiple paint cycles (between multiple re-renders)*/

  /* If we want states but no ui repainting then we can use useRef */

  /* What is the benefit of using useRef+
  
  answer - We can use useRef directly with jsx elements ,if we want to get reference
  of our jsx elements that mean we want to use our jsx elements then we can use useRef.
  for example in order to add our to do item --> Whenever the add button is pressed the form onSubmit 
  is done , We want that the input value of text and date mujhe mil jaaye but we don't know where it is.
  Agar id wagairah lagake dhundne ki kosis krunga toh it will be like normal javaScript type code So what i 
  have to do here is we have to put onChange handler always . So what is it's 
  Alternate , Alternate ye hai ki mai inki bhi reference bana ke rakh loo. (dono input ka) And jab actually mera submission ho 
  toh jaake inki current value utha lo . Taaki baar baar mereko poora ka poora page update nahi 
  krna pade . Kuch bhi add krne pr ye ho rha hai . 
  So we can save all this paint cycles (re-rendering )By using use Ref

    So by using useRef -
     Suppose if we want to use useRef in any jsx element then 
    There is an attribute called ref it is by default in all react components
     and we can assign anyvalue to it .
  */

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); // preventing the default behaviour of onSubmit attri in forms
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = ""; //emptyin the inputs
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
    // in order to use todoName or todoDate (wo pehle hona bhi toh chahiye )
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleAddButtonClicked}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo Here "
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-2 kg-col">
            <button
              /* when we don't write type attribute in button tag
                 then its type attribute its treated as submit*/
              // type="button"
              className="btn btn-success  kg-button"
              // onClick={handleAddButtonClicked}
            >
              <BiMessageAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
