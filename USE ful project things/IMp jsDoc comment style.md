Yeh **JavaScript documentation comments** ka concept hai, jo **JSDoc** format use karta hai. Iska purpose code ko **self-explanatory** banana hai taaki doosre developers ya tum khud bhi baad me easily samajh sako ki koi function kya karta hai.

---

### **JSDoc kya hota hai?**
- Yeh ek **standard format** hai JavaScript code ko document karne ke liye.
- Isme **multi-line comments (`/** ... */`)** likh kar function ke parameters aur return values describe ki jaati hain.
- IDEs (VS Code, WebStorm) aur parsers bhi isko samajh sakte hain aur **hover pe details dikhate hain**.

---

### **JSDoc ka format samajhte hain:**

#### **1. `@param` → Function ke parameters ko describe karta hai**
Format:
```js
@param {<data-type>} <variable-name> <description>
```
Example:
```js
/**
 * Kisi user ke details validate karta hai.
 *
 * @param {{ username: string, password: string, confirmPassword: string }} data
 *  User ka username, password aur confirmPassword ka object.
 *
 * @returns {boolean}
 *  Agar validation pass ho gaya toh `true` return karega, warna `false`.
 */
const validateInput = (data) => {
  // Function logic yahan aayega
};
```
---
#### **2. `@returns` → Function ka return type batata hai**
Format:
```js
@returns {<data-type>} <description>
```
Example:
```js
/**
 * Yeh function check karega ki username aur password sahi hain ya nahi.
 *
 * @param {string} username  - User ka username
 * @param {string} password  - User ka password
 * @returns {boolean}        - Agar valid hai toh `true`, warna `false`
 */
function checkCredentials(username, password) {
  return username.length > 5 && password.length > 5;
}
```
---
### **Thoda Advance Samajhna Hai?**
Kuch aur cases bhi dekho:

#### **1. Optional Properties**
Agar koi property optional ho toh `?` use karte hain:
```js
@param {{ success: boolean, message?: string }} response
```
- `success` **required** hai.
- `message` **optional** hai.

---

#### **2. Multiple Data Types**
Agar koi parameter **do types ka ho sakta hai**, toh `|` use karte hain:
```js
@param {number | undefined} age
```
- Yeh batata hai ki `age` **number bhi ho sakta hai, ya undefined bhi**.

---

### **Kyun Zaroori Hai?**
✅ Code **samajhna easy** ho jata hai.  
✅ **IDEs hover pe details dikha sakte hain**.  
✅ Documentation **automatically generate ho sakti hai**.  
✅ **Team work me fayda hota hai**, sabko easily samajh aata hai.  

Agar **koi function likhne ke baad** tum **uspe cursor le jaake hover karoge**, toh JSDoc ke comments IDE me dikhenge.

---

### **TL;DR (Short Answer)**
- **JSDoc ek commenting style hai jo function ke parameters aur return values ko explain karta hai.**
- **`@param` bataata hai ki function kaunsa argument accept karta hai.**
- **`@returns` bataata hai ki function kya return karega.**
- **IDEs (VS Code, WebStorm) automatically ye comments ko hover pe dikha dete hain, jo samajhne me help karta hai.**

Matlab agar koi **3 mahine baad** code dekhe, toh bina function padhe sirf **comments dekhke samajh jayega**! 🚀