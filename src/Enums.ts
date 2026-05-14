enum CardinalDirection {
    North,
    East,
    South,
    West
}

let currentDirection = CardinalDirection.South;

console.log(currentDirection);


enum role {
    Admin = 'Admin',
    User = 'User',
    Guest = 'Guest'
}

const userRole: role = role.Admin;

console.log("User Role:", userRole);