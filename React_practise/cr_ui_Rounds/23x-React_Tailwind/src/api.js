// async/await hai ye aur ye jo hai ye promises ka advance version
// hai aur ye easily readable hota hai
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok)
      throw new Error("Failed to fetch to-dos. Please try again later.");

    const res = await response.json();
    console.log(res);

    // console.log(res);
  } catch (err) {
    //  catch {
    // console.error("Failed to fetch to-dos. Please try again later.");
    console.error(err);
  }
  // finally {
  //   // Yeh block hamesha chalega, chahe error aaye ya na aaye
  //   console.log("Fetch attempt finished.");
  //   // Example: loading ko false karna
  //   // setIsLoading(false);
  // }
};

fetchData();
