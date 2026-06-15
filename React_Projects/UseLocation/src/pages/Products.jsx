import React from 'react'
import { useLocation } from 'react-router-dom'
//! Example 2: Read Query Parameters
//! Purpose: Extract ?category=mobile&id=10 using new URLSearchParams()

const Products = () => {
    let {search} = useLocation(); //search contains the query parameters — the part of the URL after “?”
    let query = new URLSearchParams(search); // new URLSearchParams() is a built-in JavaScript class used to read, create, and work with query parameters in a URL.

    let category = query.get("category");
    let id = query.get("id");

  return (
    <>
    {/*We must open the URL like this: http://localhost:5173/products?category=mobile&id=10 the output shows like Category: mobile ,ID: 10*/}
    <h2>Category: {category}</h2>
    <h3>ID: {id}</h3>
    </>
  )
}

export default Products


/*
! useLocation() returns an object
! useLocation() gives you a location object like this:

{
  pathname: "/products",
  search: "?id=10&category=mobile",
  hash: "#top",
  state: { ... },
  key: "xyz123"
}

🔥 2. Destructuring the search property
! When you write:
let { search } = useLocation();

! It means:
➡️ Call useLocation()
➡️ From the returned object, extract only the search property
➡️ Store it in a variable named search

Same as writing:
const location = useLocation();
let search = location.search;

!🔑 What is search?
? search contains the query parameters — the part of the URL after “?”

! Example URL:
/products?category=mobile&page=2

! Then:
! search = "?category=mobile&page=2"
*/

/*
!! new URLSearchParams() is a built-in JavaScript class used to read, create, and work with query parameters in a URL.
It is used to handle everything after the ? in the URL.

!! What is URLSearchParams?
URLSearchParams is a built-in JavaScript class that helps you work with query parameters easily.
Query parameters = the part of the URL after ?

Example URL:
/products?category=mobile&page=2

Here the query string is:

?category=mobile&page=2


! search from useLocation() contains exactly this string.

!🔥 What does the line do?
? let query = new URLSearchParams(search);

! It means:
Take the query string from URL
Pass it into URLSearchParams constructor
? Create an object (query) that can extract values easily

🎯 Example
Assume:
! search = "?category=mobile&page=2"

! Then:
! const query = new URLSearchParams(search);

!! Now you can extract values:
query.get("category");  // "mobile"
query.get("page");      // "2"

! 📦 Why do we need it?
Without URLSearchParams, you would have to manually split the string:
"?category=mobile&page=2"

That's messy.
But with URLSearchParams, it's simple and clean.

!🧠 How it works internally
URLSearchParams converts:
?category=mobile&page=2

Into a map-like structure:
category → "mobile"
page → "2"

! ✔ Final Summary
let query = new URLSearchParams(search);
Takes the search/query string from URL
Converts it into an easy-to-use object
! Allows you to call:
query.get("key")
query.has("key")
query.entries()
*/

/*
!❌ Without URLSearchParams → Manual string splitting → Very messy

Suppose your URL query string is:
"?category=mobile&page=2"

You would have to do everything manually 😩
Step 1: Remove "?"
let queryString = search.substring(1);  
/ "category=mobile&page=2"

Step 2: Split by "&" to get key-value pairs
let pairs = queryString.split("&");
/ ["category=mobile", "page=2"]

Step 3: For each pair, split again by "="
let params = {};
pairs.forEach(pair => {
  let [key, value] = pair.split("=");
  params[key] = value;
});
/ params = { category: "mobile", page: "2" }

Step 4: Finally access values
params["category"]; // "mobile"
params["page"]; // "2"

🥵 Total manual steps you wrote:
Remove ?
Split by &
Split by =
Store in an object
Handle missing values
Handle duplicate keys
Handle encoded values (like %20 for space)
This becomes more messy when query strings contain:
spaces
special characters
repeated parameters
empty values
complex objects
arrays

!✅ With URLSearchParams → Only ONE line
const query = new URLSearchParams(search);

! And now:
! query.get("category"); // "mobile"
! query.get("page");     // "2"

No splitting, no looping, no handling edge cases.

!| Problem             | Explanation                                      |
| ------------------- | ------------------------------------------------ |
| More Code           | You write 7–10 lines instead of 1 line           |
| Hard to Maintain    | You must handle all edge cases                   |
| No built-in methods | You lose `.get()`, `.set()`, `.has()`, `.keys()` |
| Error-prone         | Easily breaks with special characters            |
| Not readable        | Code becomes confusing to others                 |

*/