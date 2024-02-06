# 28 **React-icon Library**

1. You can use a lot of icons without managing them.

2. Install Package

   `npm install react-icons –save`

3. Use icon:

   `import {IconName} from "react-icons/fc";`

   // Also, you can directly copy the icon from the react-icons website and use it as a component:

   // e.g., <BiMessageAdd/>

   // Remember to import it:

   // import {BiMessageAdd} from "react-icons/bi";

   // Then, you can use it in your code.

   //ex `import {BiMessageAdd} from "react-icons/bi";`

**The bi at last means all the icons starting with the name Bi**

# 29 **Inspecting with React Dev Tools**

1. Inspection: Allows inspection of React component hierarchies.
2. State & Props: View and edit the current state and props of components.
3. Performance: Analyze component re-renders and performance bottlenecks.
4. Navigation: Conveniently navigate through the entire component tree.
5. Filtering: Filter components by name or source to locate them quickly.
6. Real-time Feedback: See live changes as you modify state or props.

# 30 **How React Works**

## Root Component:

• The App is the main or root component of a React application.

• It's the starting point of your React component tree.

## Virtual DOM:

• React creates an in-memory structure called the virtual DOM.

• Different from the actual browser DOM.

• It's a lightweight representation where each node stands for a component and its attributes.

## Reconciliation Process:

• When component data changes, React updates the virtual DOM's state to mirror these changes.

• React then compares the current and previous versions of the virtual DOM.

• It identifies the specific nodes that need updating. (means specific HTML nodes which have been changed and it will identify them and only change them )

• Only these nodes are updated in the real browser DOM, making it efficient.

so,
` IN conclusion - Virtual dom is the tree of my components and the Html tree is the real dom which is made by browser.THis tree (virtual dom ) is made by react and i only do changes in the components and react put my changes in the virtual dom and the final changes which happens (only the changed part from the previous version ) react only put that in the real DOM.`

# 30 **React and ReactDOM (virtual DOM)**

• The actual updating of the browser's DOM isn't done by React itself

• It's handled by a companion library called react-dom

• `React Dom converts the React component tree into actual browser DOM means in Html`

## **Root Element**

• The root div acts as a container for the React app

• The script tag is where the React app starts executing

• The component tree is rendered inside this root element

## **Strict Mode Component**

• It's a special component in React

• Doesn't have a visual representation

• Its purpose is to spot potential issues in your React app

## **Platform Independence**

• React's design allows it to be platform-agnostic

• While react-dom helps build web UIs using React, ReactNative can be used to craft mobile app UIs

## **React Vs Angular Vs Vue**

### React, Angular, and Vue:

• React is a library, while Angular and Vue.js are frameworks.

• React focuses on UI; Angular and Vue.js offer comprehensive tools for full app development.

### Library vs. Framework:

• A library offers specific functionality.

• A framework provides a set of tools and guidelines.

• React is a tool; Angular and Vue.js are toolsets.

`Example - Understand that a library is like a hammer which is only for one specific purpose. For instance, React is a library that is only used for making UI.`

`In contrast, a framework is like a toolset which offers a complete package. It includes various tools such as a hammer, screw, screwdriver, etc. So basically, it is complete.`

**Example frameworks include Vue and Angular.**

### React's Specialty:

• React's main role is crafting dynamic, interactive UIs.

• It doesn't handle routing, HTTP calls, state management, and more.

### React's Flexibility:

• React doesn't dictate tool choices for other app aspects.

• Developers pick what fits their project best.

### About Angular and Vue.js:

• Angular, developed by Google, provides a robust framework with a steep learning curve.

• Vue.js is known for its simplicity and ease of integration, making it beginner-friendly.

**Note**

`Always remove console.log from the final project.
Read errors that you get in the browser; it's essential for becoming a good developer.`
