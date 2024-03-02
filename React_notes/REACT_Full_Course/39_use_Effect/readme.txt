 # Introducing Dummy Api json/ json placeholder

what is the problem is that 


# 38 Data fetching using Fetch

1. fetch: Modern JavaScript API for network requests.
2. Promise-Based: Returns a Promise with a Response
object.
3. Usage: Default is GET. For POST use method: 'POST'
4. Response: Use .then() and response.json() for JSON data.
5. Errors: Doesn't reject on HTTP errors. Check response.ok.
6. Headers: Managed using the Headers API.



# 39 The useEffect Hook 

## What is the problem of fetch ?

When we open any social media app we don't have to fetch anything it automatically loads everything 

<u> Why can't we do it ?? </u>


1. In function-based components, useEffect handles
side effects like data fetching or event listeners.
2. useEffect runs automatically after every render by
default.
3. By providing a dependency array, useEffect will only
run when specified variables change. An empty array
means the effect runs once.
4. Multiple useEffect hooks can be used in a single
component for organizing different side effects
separately