"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["North"] = 0] = "North";
    CardinalDirection[CardinalDirection["East"] = 1] = "East";
    CardinalDirection[CardinalDirection["South"] = 2] = "South";
    CardinalDirection[CardinalDirection["West"] = 3] = "West";
})(CardinalDirection || (CardinalDirection = {}));
let currentDirection = CardinalDirection.South;
console.log(currentDirection);
var role;
(function (role) {
    role["Admin"] = "Admin";
    role["User"] = "User";
    role["Guest"] = "Guest";
})(role || (role = {}));
const userRole = role.Admin;
console.log("User Role:", userRole);
