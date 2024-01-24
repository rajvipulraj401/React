  # React Level 2-

# `Fragments______`

### 1. What?

`Allows grouping of multiple elements without
extra DOM nodes.(without extra div)`

### 2. Why?

• Return multiple elements without a wrapping
parent.
• Cleaner DOM and consistent styling.

### 3. How? Two syntaxes:

1. <React.Fragment>...</React.Fragment>
2. Short: <>...</>



# `Map method in React______`


 **Purpose**: Render lists from array data.

 **JSX Elements**: Transform array items into JSX.

 **Inline Rendering**: Directly inside JSX

```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```
 **Key Prop**: Assign unique key for optimized re-renders.

```jsx
<div key={item.id}>{item.name}</div>
```


**NOTE - Each child in a list should have unique key prop We have to add a key  as it helps react , React kahta hai ki jabhi bhi aap ek list ko render krte hai toh har item ke paas apna ek id hona chahiye kyunki React ka kaam hi yahi hai ki ye update ko save krta hai .Agr page me kuch change hua hai toh  bas utna hi page mujhe change krna pade poore page me change na karna pade  . SO it says that ki agar aap iske andar id de denge toh mujhe pata chal jayega jab iske andar changes honge , `Mujhe sirf iswale me  change krna hai, nahi toh agar saare item same honge toh ek bhi change hoga toh mujhe sabko change krna hoga so REACT USE KRNE KA WHOLE POINT KHARAB HOJAYEGA`**




NOTE2 - Key is saved in virtual Dom it will not be seen in browser inspect


![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/mapKey.png)




# `Conditional Rendering______`

#### `When we do rendering based on certain condition it is called conditional Rendering`

• Displaying content based on certain conditions.
• Allows for dynamic user interfaces.


## Methods---

### 1.`If-else statements:` Choose between two blocks of content.

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/conditional0.png)


### 2.`Ternary operators`: Quick way to choose between two options.

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/conditional1.png)

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/conditional2.png)

### 3.`Logical operators`: Useful for rendering content when a condition is true.

![Alt Text](
https://github.com/rajvipulraj401/React/blob/main/React_notes/REACT_Full_Course/18-ReactLevel_2/conditional3.png)

## `Benefits of Doing conditional rendering :---`


• Enhances **user experience**.

• Reduces unnecessary rendering.

• Makes apps **more interactive and responsive**.




# `Props______` 


## Props in React

• Short for properties

• Mechanism for passing data.

• Read-only by default

## Usage

• Pass data from parent to child component.

• Makes components reusable.

• Defined as attributes in JSX.

## `Key Points`

• Props is an object in javascript which catches all the arguments inside the props object•

• Data flows `one-way` (downwards).

• `Props are immutable.`

• Used for communication between components.
Examples
<Header title="My App" />



props are passed as a attribute


How to identify the components ?

First we have to identify that the individual components have some value in themselves or not .

for example the Heading can be a component as it has a meaning in itself.

