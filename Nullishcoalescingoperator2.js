let city;
let state = null;
let country = "India";

let location = city ?? state ?? country ?? "Unknown";
console.log(location); // Output: "India"
