//?  1.Class: Buffer The Buffer class is an inbuilt globally accessible class that means it can be used without importing any module. The Buffer class is used to deal with binary data. Buffer class objects are used to represent binary data as a sequence of bytes.

const buffer = new Buffer.alloc(5, "abcde");
console.log(buffer);

//! 2.) TextEncoder and TextDecoder
const encoder = new TextEncoder();
let encodedString = encoder.encode("1234qwer");
console.log(encodedString);

const decoder = new TextDecoder();
console.log("decoded string ", decoder.decode(encodedString));

//********************************************************************* */

//& 3.) URL class
const url = new URL("https://www.happycodin.com/?name=vishal");
console.log(url);

// 5.URLSearchParams: URLSearchParams API is used to perform read and write operations on the query of a URL.

console.log(url.searchParams.get("name"));

url.searchParams.append("name", "thomas");

console.log(url.href);

//* __filename And __dirname
