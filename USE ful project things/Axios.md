### **Axios API Notes 📝**

#### **📌 What is Axios?**

Axios is a **promise-based** HTTP client for **browsers & Node.js** that makes it easier to perform API requests. It provides better features compared to Fetch API, such as **automatic JSON parsing, request cancellation, timeout handling, and error handling**.

---

### **📌 How to Install Axios?**

#### **👉 Using npm/yarn (for Node.js & frontend projects)**

```sh
npm install axios  # or yarn add axios
```

#### **👉 Using CDN (for browser only)**

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

---

### **📌 Axios vs Fetch API**

| Feature                  | Axios                                       | Fetch API                                                                |
| ------------------------ | ------------------------------------------- | ------------------------------------------------------------------------ |
| **Installation**         | Requires `npm install axios`                | Built-in, no installation needed                                         |
| **Response Handling**    | Auto converts JSON (`res.data`)             | Requires `res.json()`                                                    |
| **Error Handling**       | Automatically catches network & HTTP errors | Only network errors are caught, HTTP errors need manual check (`res.ok`) |
| **Request Cancellation** | Yes (`CancelToken`)                         | Yes (`AbortController`)                                                  |
| **Timeout Handling**     | Yes (`timeout` option)                      | No, needs manual handling with `setTimeout`                              |
| **Interceptors**         | Yes (Modify request & response globally)    | No built-in support                                                      |
| **Node.js Support**      | ✅ Yes                                      | ❌ No                                                                    |

---

### **📌 Basic Axios Syntax**

#### **👉 GET Request**

```javascript
axios
  .get("https://reqres.in/api/users/2")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error:", error.message));
```

#### **👉 GET Request (async/await)**

```javascript
const fetchData = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users/2");
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
fetchData();
```

---

### **📌 Sending Data with Axios**

#### **👉 POST Request**

```javascript
axios
  .post("https://reqres.in/api/users", {
    name: "John Doe",
    job: "Developer",
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error:", error.message));
```

#### **👉 PUT Request**

```javascript
axios
  .put("https://reqres.in/api/users/2", {
    name: "John Updated",
    job: "Senior Developer",
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error:", error.message));
```

#### **👉 DELETE Request**

```javascript
axios
  .delete("https://reqres.in/api/users/2")
  .then((response) => console.log("Deleted Successfully"))
  .catch((error) => console.error("Error:", error.message));
```

---

### **📌 Setting Headers in Axios**

```javascript
axios
  .get("https://reqres.in/api/users", {
    headers: {
      Authorization: "Bearer my-token",
      "Content-Type": "application/json",
    },
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error:", error.message));
```

---

### **📌 Setting a Timeout in Axios**

```javascript
axios
  .get("https://reqres.in/api/users", { timeout: 5000 }) // 5 seconds
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Request Timeout:", error.message));
```

---

### **📌 Canceling a Request in Axios**

```javascript
const controller = new AbortController();
axios
  .get("https://reqres.in/api/users", { signal: controller.signal })
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Request Canceled:", error.message));

// Cancel the request
controller.abort();
```

---

### **📌 Axios Interceptors (Modify Requests & Responses)**

#### **👉 Request Interceptor**

```javascript
axios.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer my-token";
  console.log("Request sent:", config);
  return config;
});
```

#### **👉 Response Interceptor**

```javascript
axios.interceptors.response.use(
  (response) => {
    console.log("Response received:", response);
    return response;
  },
  (error) => {
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);
```

---

### **📌 Global Axios Configuration**

```javascript
axios.defaults.baseURL = "https://reqres.in/api";
axios.defaults.headers.common["Authorization"] = "Bearer my-token";
axios.defaults.timeout = 5000;
```

---

### **📌 Conclusion**

✅ **Axios** makes API requests easier with **automatic JSON parsing, better error handling, and advanced features like timeouts, interceptors, and request cancellation.**  
👉 If you need a **lightweight built-in solution**, use **Fetch API**.  
👉 If you want **more features and simplicity**, use **Axios**. 🚀

---

### ✅ **Axios vs Fetch API – Key Differences-----------**

| Feature                             | Fetch API                                             | Axios                                                          |
| ----------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------- |
| **HTTP Errors Handling (4xx, 5xx)** | Manually check `if (!res.ok)`, then throw error       | Automatically throws an error for non-2xx responses            |
| **ReadableStream Support**          | Needs `res.body` check for browser support            | No need to check, as Axios handles response parsing            |
| **JSON Parsing**                    | Manually call `await res.json()`                      | Automatically parses JSON, no need for `res.json()`            |
| **Default Headers**                 | Need to manually set headers                          | Sends default headers (e.g., `Content-Type: application/json`) |
| **Request Timeout**                 | Not supported directly, need AbortController          | Supports `timeout` option                                      |
| **Request Cancellation**            | Use `AbortController` manually                        | Uses `axios.CancelToken` for easy cancellation                 |
| **Automatic Data Transformation**   | Returns a `Response` object, manual conversion needed | Automatically converts response to JSON                        |
| **Supports Upload Progress**        | Not built-in                                          | Has built-in support for upload/download progress              |
| **CSRF Protection**                 | Need to handle manually                               | Built-in CSRF protection with credentials support              |

---

### **📌 Summary (Jo Tumhe Fetch vs Axios me Antar Laga)**

1️⃣ **Axios automatically HTTP errors ko throw kar deta hai**, whereas Fetch me manually `if (!res.ok)` check karna padta hai.  
2️⃣ **ReadableStream check karne ki zaroorat nahi**, kyunki Axios directly JSON response de deta hai.  
3️⃣ **JSON parsing manually nahi karni padti**, kyunki Axios `res.data` me already parsed response deta hai, whereas Fetch me `await res.json()` likhna padta hai.  
4️⃣ **Timeout aur request cancellation easy hai**, whereas Fetch me `AbortController` use karna padta hai.

---

### 🚀 **Example: Fetch vs Axios**

#### **Fetch API**

```javascript
const handleClick = async (e) => {
  let idVal = e.target.textContent;

  try {
    const res = await fetch(`https://reqres.in/api/users/${idVal}`);

    if (!res.ok)
      throw new Error(`HTTP Error: ${res.status} - ${res.statusText}`);

    const dataRes = await res.json(); // ✅ JSON Parse manually
    if (!dataRes.data)
      throw new Error("API Response does not contain 'data' field.");

    console.log("Fetched Data:", dataRes.data);
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
};
```

#### **Axios API (Same Functionality with Less Code)**

```javascript
import axios from "axios";

const handleClick = async (e) => {
  let idVal = e.target.textContent;

  try {
    const res = await axios.get(`https://reqres.in/api/users/${idVal}`);

    if (!res.data || !res.data.data) {
      throw new Error("API Response does not contain 'data' field.");
    }

    console.log("Fetched Data:", res.data.data);
  } catch (error) {
    console.error("Axios Error:", error.message);
  }
};
```

✅ **Axios code short aur clean hai, kyunki errors aur JSON parsing automatically ho rahi hai!** 🎯

Yeh **Axios ka complete notes** hai, jo **use cases, syntax, aur best practices** cover karta hai! 🎯 **Agar aur koi specific cheez chahiye toh batao.** 😃

---

# ✅ **Axios API – Complete Guide (with Async/Await)**

Axios ek **promise-based HTTP client** hai jo Fetch API se **zyada features** provide karta hai. Isme **error handling aur JSON parsing automatically hoti hai**, aur **timeout, request cancelation, interceptors** jaise extra features bhi milte hain.

Axios me **5 main HTTP methods** hote hain:

| Method     | Description                                |
| ---------- | ------------------------------------------ |
| **GET**    | Data retrieve karne ke liye                |
| **POST**   | Server pe naya data send karne ke liye     |
| **PUT**    | Existing data replace/update karne ke liye |
| **PATCH**  | Data ka kuch part update karne ke liye     |
| **DELETE** | Data delete karne ke liye                  |

---

## 📌 **1️⃣ Axios GET Request (Data Fetch Karna)**

```javascript
const getData = async () => {
  try {
    const res = await axios.get("https://reqres.in/api/users/2");

    console.log("GET Response:", res.data); // ✅ JSON parsing nahi karna padta
  } catch (error) {
    console.error("GET Error:", error.response?.status, error.message);
  }
};

getData();
```

✅ **Automatic JSON parsing hota hai (`res.data` use karo)**  
✅ **Error handling automatically ho jati hai**

---

## 📌 **2️⃣ Axios POST Request (Data Send Karna)**

```javascript
const postData = async () => {
  try {
    const res = await axios.post("https://reqres.in/api/users", {
      name: "John Doe",
      job: "Software Engineer",
    });

    console.log("POST Response:", res.data);
  } catch (error) {
    console.error("POST Error:", error.response?.status, error.message);
  }
};

postData();
```

✅ **`Content-Type: application/json` automatically set hota hai**  
✅ **JSON.stringify() karne ki zaroorat nahi hai**

---

## 📌 **3️⃣ Axios PUT Request (Pura Object Update Karna)**

```javascript
const putData = async () => {
  try {
    const res = await axios.put("https://reqres.in/api/users/2", {
      name: "John Updated",
      job: "Full Stack Developer",
    });

    console.log("PUT Response:", res.data);
  } catch (error) {
    console.error("PUT Error:", error.response?.status, error.message);
  }
};

putData();
```

✅ **Axios automatically request body JSON me convert karta hai**  
✅ **Headers manually set karne ki zaroorat nahi hoti**

---

## 📌 **4️⃣ Axios PATCH Request (Partially Update Karna)**

```javascript
const patchData = async () => {
  try {
    const res = await axios.patch("https://reqres.in/api/users/2", {
      job: "Senior Developer",
    });

    console.log("PATCH Response:", res.data);
  } catch (error) {
    console.error("PATCH Error:", error.response?.status, error.message);
  }
};

patchData();
```

✅ **Sirf wahi fields update hongi jo bheji gayi hain**

---

## 📌 **5️⃣ Axios DELETE Request (Data Delete Karna)**

```javascript
const deleteData = async () => {
  try {
    const res = await axios.delete("https://reqres.in/api/users/2");

    console.log("DELETE Response:", res.data);
  } catch (error) {
    console.error("DELETE Error:", error.response?.status, error.message);
  }
};

deleteData();
```

✅ **Response empty ho sakta hai, lekin Axios error handle kar leta hai**

---

## 🔥 **Extra Features of Axios**

### **1️⃣ Timeout Handle Karna**

```javascript
const fetchDataWithTimeout = async () => {
  try {
    const res = await axios.get("https://reqres.in/api/users", {
      timeout: 5000,
    });

    console.log("Data:", res.data);
  } catch (error) {
    console.error("Timeout Error:", error.message);
  }
};

fetchDataWithTimeout();
```

✅ **Axios me timeout set karna simple hai (`{ timeout: 5000 }`).**

---

### **2️⃣ Parallel API Calls (`Promise.all()`)**

```javascript
const fetchMultipleData = async () => {
  try {
    const [user1, user2] = await Promise.all([
      axios.get("https://reqres.in/api/users/1"),
      axios.get("https://reqres.in/api/users/2"),
    ]);

    console.log("Users:", user1.data, user2.data);
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
};

fetchMultipleData();
```

✅ **Multiple API calls ek saath execute karne ke liye `Promise.all()` use hota hai.**

---

### **3️⃣ Request Cancel Karna (Axios CancelToken)**

```javascript
const controller = new AbortController();

const fetchDataWithCancel = async () => {
  try {
    const res = await axios.get("https://reqres.in/api/users", {
      signal: controller.signal,
    });

    console.log("Data:", res.data);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    } else {
      console.error("Fetch Error:", error.message);
    }
  }
};

// ✅ 3 sec baad request cancel
setTimeout(() => controller.abort(), 3000);

fetchDataWithCancel();
```

✅ **Request cancel karne ka simple way hai Axios me.**

---

### **4️⃣ Global Default Headers Set Karna**

```javascript
axios.defaults.headers.common["Authorization"] = "Bearer token123";
```

✅ **Har request ke saath `Authorization` header automatically bhejega.**

---

## 🎯 **Conclusion: Fetch vs Axios**

| Feature                 | Fetch API                                         | Axios                                   |
| ----------------------- | ------------------------------------------------- | --------------------------------------- |
| **JSON Parsing**        | Manually `res.json()` likhna padta hai            | Automatically handle hota hai           |
| **Error Handling**      | `if (!res.ok) throw new Error()` likhna padta hai | Automatically handle hota hai           |
| **Timeout**             | `AbortController` ka use karna padta hai          | `{ timeout: 5000 }` option built-in hai |
| **Headers**             | Manually `Content-Type` set karna padta hai       | Automatically handle hota hai           |
| **Data Send**           | `JSON.stringify()` karna padta hai                | Directly object send kar sakte hain     |
| **Request Cancelation** | `AbortController` se handle hota hai              | `CancelToken` easy tarika hai           |

---

## ✅ **Final Verdict**

- **Simple aur easy-to-use API chahiye toh Axios better hai.**
- **Agar browser built-in API chahiye aur extra control chahiye toh Fetch use karo.**

Agar kuch aur doubts hain toh batao! 😃🚀

---

### ✅ **Fetch API – Complete Guide (with Async/Await)**

Fetch API ka kaam Axios jaisa hi hota hai, lekin **manual handling** zyada karni padti hai. Fetch API me **5 main HTTP methods** hote hain:

| Method     | Description                                |
| ---------- | ------------------------------------------ |
| **GET**    | Data retrieve karne ke liye                |
| **POST**   | Server pe naya data send karne ke liye     |
| **PUT**    | Existing data replace/update karne ke liye |
| **PATCH**  | Data ka kuch part update karne ke liye     |
| **DELETE** | Data delete karne ke liye                  |

---

## 📌 **1️⃣ Fetch GET Request (Data Fetch Karna)**

```javascript
const getData = async () => {
  try {
    const res = await fetch("https://reqres.in/api/users/2");

    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

    const data = await res.json(); // ✅ JSON parsing manually karna padta hai
    console.log("GET Response:", data);
  } catch (error) {
    console.error("GET Error:", error.message);
  }
};

getData();
```

✅ **Manual Error Handling karni padti hai (`if (!res.ok)`).**  
✅ **`res.json()` likhna padta hai, kyunki Fetch JSON auto-parse nahi karta.**

---

## 📌 **2️⃣ Fetch POST Request (Data Send Karna)**

```javascript
const postData = async () => {
  try {
    const res = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // ✅ Headers manually set karne padte hain
      },
      body: JSON.stringify({
        name: "John Doe",
        job: "Software Engineer",
      }),
    });

    const data = await res.json();
    console.log("POST Response:", data);
  } catch (error) {
    console.error("POST Error:", error.message);
  }
};

postData();
```

✅ **`Content-Type: application/json` manually set karna padta hai.**  
✅ **`JSON.stringify()` karna padta hai, nahi to error aayega.**

---

## 📌 **3️⃣ Fetch PUT Request (Pura Object Update Karna)**

```javascript
const putData = async () => {
  try {
    const res = await fetch("https://reqres.in/api/users/2", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "John Updated",
        job: "Full Stack Developer",
      }),
    });

    const data = await res.json();
    console.log("PUT Response:", data);
  } catch (error) {
    console.error("PUT Error:", error.message);
  }
};

putData();
```

✅ **Pura object replace hota hai.**

---

## 📌 **4️⃣ Fetch PATCH Request (Partially Update Karna)**

```javascript
const patchData = async () => {
  try {
    const res = await fetch("https://reqres.in/api/users/2", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        job: "Senior Developer",
      }),
    });

    const data = await res.json();
    console.log("PATCH Response:", data);
  } catch (error) {
    console.error("PATCH Error:", error.message);
  }
};

patchData();
```

✅ **Sirf wahi fields update hongi jo bheji gayi hain.**

---

## 📌 **5️⃣ Fetch DELETE Request (Data Delete Karna)**

```javascript
const deleteData = async () => {
  try {
    const res = await fetch("https://reqres.in/api/users/2", {
      method: "DELETE",
    });

    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

    const data = await res.json();
    console.log("DELETE Response:", data);
  } catch (error) {
    console.error("DELETE Error:", error.message);
  }
};

deleteData();
```

✅ **Response empty ho sakta hai, isliye `res.json()` error de sakta hai.**

---

## 🔥 **Extra Features of Fetch API**

### **1️⃣ Timeout Handle Karna (AbortController)**

```javascript
const controller = new AbortController();
const signal = controller.signal;

const fetchDataWithTimeout = async () => {
  try {
    const res = await fetch("https://reqres.in/api/users", { signal });
    const data = await res.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
};

// ✅ 5 sec baad request cancel
setTimeout(() => controller.abort(), 5000);

fetchDataWithTimeout();
```

---

### **2️⃣ Parallel API Calls**

```javascript
const fetchMultipleData = async () => {
  try {
    const [user1, user2] = await Promise.all([
      fetch("https://reqres.in/api/users/1").then((res) => res.json()),
      fetch("https://reqres.in/api/users/2").then((res) => res.json()),
    ]);

    console.log("Users:", user1, user2);
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
};

fetchMultipleData();
```

✅ **Multiple API calls ek saath execute karne ke liye `Promise.all()` use hota hai.**

---

### 🎯 **Conclusion: Fetch vs Axios**

| Feature            | Fetch API                                         | Axios                               |
| ------------------ | ------------------------------------------------- | ----------------------------------- |
| **JSON Parsing**   | Manually `res.json()` likhna padta hai            | Automatically handle hota hai       |
| **Error Handling** | `if (!res.ok) throw new Error()` likhna padta hai | Automatically handle hota hai       |
| **Timeout**        | `AbortController` ka use karna padta hai          | `timeout` option built-in hai       |
| **Headers**        | Manually `Content-Type` set karna padta hai       | Automatically handle hota hai       |
| **Data Send**      | `JSON.stringify()` karna padta hai                | Directly object send kar sakte hain |

---

## ✅ **Final Verdict**

- Agar simple aur **auto error handling** chahiye toh **Axios better hai**.
- Agar **browser native API** use karni hai aur **extra control** chahiye toh **Fetch use karo**.

Koi aur doubt ho toh batao! 😃🚀
