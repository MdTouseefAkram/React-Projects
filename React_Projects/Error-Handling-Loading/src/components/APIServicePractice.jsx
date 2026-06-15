import React from 'react'

const APIServicePractice = () => {
    let fetchData = async function(){
        try{
            let response = await fetch(`https://jsonplaceholder.typicode.com/invalid-url`);

            if(!response.ok){
                throw new Error(`API Error: ${response.status} ${response.statusText}`)
            }
            let data = await response.json();
            return data;
    
        } catch (error){
            throw new Error(`Failed to fetch data: ${error.message}`); //"Failed to fetch data: API Error: 404 Not Found"

        }
    }
  return (
    <div>APIServicePractice</div>
  )
}

export default APIServicePractice


//! 1️⃣ response
// When you make a network request with fetch():
// const response = await fetch("https://api.example.com/data");
//? response is a Response object returned by the browser. It contains information about the HTTP response — both the status (like 200, 404) and the data.

//! 2️⃣ .ok
// response.ok is a boolean property.
// It’s true if the response status code is in the range 200–299 (successful responses).
// Otherwise, it’s false (like 404 Not Found, 500 Internal Server Error).
// Example:
// response.status = 200  → response.ok = true
// response.status = 404  → response.ok = false

//! 3️⃣ .status
// response.status gives the HTTP status code of the response.
// Examples: 200, 404, 500, etc.
// It’s a number.
// console.log(response.status); // 200 or 404

//! 4️⃣ .statusText
// response.statusText gives the textual description of the status code.
// Examples: "OK" for 200, "Not Found" for 404.
// It’s a string.
// console.log(response.statusText); // "OK" or "Not Found"