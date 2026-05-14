"use strict";
// Template Literal Types Example
// This demonstrates how template literal types work in TypeScript 4.1+
Object.defineProperty(exports, "__esModule", { value: true });
// In TypeScript, we would define these with template literal types:
// type Direction = "north" | "south" | "east" | "west";
// type Distance = "1km" | "5km" | "10km";
// type DirectionAndDistance = `${Direction}-${Distance}`;
// Define the allowed values for our simulation
const directions = ["north", "south", "east", "west"];
const distances = ["1km", "5km", "10km"];
// Validate a direction-distance combination
function isValidRoute(route) {
    const [direction, distance] = route.split("-");
    if (!direction || !distance)
        return false;
    return directions.includes(direction) && distances.includes(distance);
}
// Handler function for routes
function navigateRoute(route) {
    if (!isValidRoute(route)) {
        throw new Error(`Invalid route: ${route}. Must be a valid direction-distance combination.`);
    }
    const [direction, distance] = route.split("-");
    console.log(`Navigating ${distance} to the ${direction}`);
}
// Example with valid routes
console.log("Valid routes examples:");
try {
    navigateRoute("north-5km");
    navigateRoute("west-10km");
    navigateRoute("south-1km");
}
catch (error) {
    console.log(error.message);
}
// Examples with invalid routes
console.log("\nInvalid routes examples (would cause TypeScript compile errors):");
try {
    navigateRoute("north-2km"); // Distance not in allowed list
    console.log("This would not execute in TypeScript due to compiler error");
}
catch (error) {
    console.log(error.message);
}
try {
    navigateRoute("5km-north"); // Wrong order
    console.log("This would not execute in TypeScript due to compiler error");
}
catch (error) {
    console.log(error.message);
}
// More complex example with HTTP API routes
// In TypeScript:
// type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
// type Endpoint = "users" | "posts" | "comments";
// type ApiRoute = `/${Endpoint}` | `/${Endpoint}/:id`;
// type ApiRequest = `${HttpMethod} ${ApiRoute}`;
const httpMethods = ["GET", "POST", "PUT", "DELETE"];
const endpoints = ["users", "posts", "comments"];
function isValidApiRequest(request) {
    const [method = "", route = ""] = request.split(" ");
    // Check if method is valid
    if (!httpMethods.includes(method))
        return false;
    // Check if route is valid
    if (route.startsWith("/")) {
        const [endpoint = "", id = ""] = route.substring(1).split("/");
        if (!endpoint)
            return false;
        if (id === "") {
            // /endpoint format
            return endpoints.includes(endpoint);
        }
        else {
            // /endpoint/:id format
            return endpoints.includes(endpoint) && id.startsWith(":");
        }
    }
    return false;
}
function handleRequest(request) {
    if (!isValidApiRequest(request)) {
        throw new Error(`Invalid API request: ${request}`);
    }
    console.log(`Handling: ${request}`);
}
// Example valid API requests
console.log("\nValid API requests examples:");
try {
    handleRequest("GET /users");
    handleRequest("POST /comments");
    handleRequest("PUT /users/:id");
}
catch (error) {
    console.log(error.message);
}
// Example invalid API request
console.log("\nInvalid API request example (would cause TypeScript compile error):");
try {
    handleRequest("PATCH /users"); // PATCH is not in our allowed methods
    console.log("This would not execute in TypeScript due to compiler error");
}
catch (error) {
    console.log(error.message);
}
// In TypeScript, template literals are evaluated at compile time
console.log("\nIn TypeScript, template literal types are evaluated at compile time:");
console.log("type DirectionAndDistance = `${Direction}-${Distance}`;");
console.log("// This creates a type with all combinations: 'north-1km' | 'north-5km' | ... | 'west-10km'");
