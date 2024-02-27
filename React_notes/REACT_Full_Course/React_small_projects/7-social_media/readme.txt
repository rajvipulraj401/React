part 1.

1) we will use bootstrap library to add header , footer , sidebar , (few ui portions ) How we can directly use them from bootstrap .



part 2 ---


1)In this next part we will use react , convert each things in react  and start implementing the functionalities ( to do posts, create a list of posts which we can open in new tab to see different posts)


----------------------------------------------------------------------------------------------------------------------------------



HOW will our ui will look ?

-> we need header.

-> we need sidebar.(jisme 2 options honge a) create post b) view post/Home)

-> Footer.

-> Beech ka content humne left me konsa tab select kiya hai uske base pe different different ui dikhna chahiye .

-> create post se hume ek form dikhna chahiye jisse mai post ke  bhut saare detail daalke ek post create krsaku.

-> On clicking Home/View button we should be able to view all the created post.

------------------------------------------------------------------------------------------------------------------------------------


NOte- In jsx every tag should be closing tag (no self closing tag like html)


Q1) Why we have to give double {}  curly brackets when writing any stryle property in jsx ??

When providing styles in JSX, we use double curly braces (`{{}}`) because:

- When applying styles in JSX, the `style` attribute expects an object representing the CSS styles.
- This object consists of key-value pairs where the keys are CSS properties (in camelCase) and the values are the corresponding property values (as strings).
- Therefore, the `style` attribute in JSX accepts an object as its value, making it possible to dynamically apply CSS styles to elements.

1. **First Pair of Curly Braces:** It indicates that we are embedding JavaScript expressions within JSX.
2. **Second Pair of Curly Braces:** Inside the embedded JavaScript, we use single curly braces to create an object for the style.

Example in JSX:

```jsx
<div style={{ width: "10px" }}>Hello</div>
```

Equivalent JavaScript code:

```javascript
const styles = { width: "10px" };
```

In JSX, the double curly braces help distinguish between the JSX syntax and the embedded JavaScript expression. The inner pair is used for creating a JavaScript object representing the styles.
