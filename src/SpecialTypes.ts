//Type: ANY
//không có any
let u = true;
// u = "String";//lỗi vì string không phải là boolean
// Math.round(u);//lỗi vì Math.round chỉ nhận number, không nhận boolean
//có any
let v: any = true;
v = "String";//không lỗi vì any có thể nhận bất kỳ kiểu dữ liệu nào
Math.round(v);//vẫn không lỗi vì any có thể nhận bất kỳ kiểu dữ liệu nào


//Type: UNKNOWN

let w: unknown = 1;
w = "string"; // Không lỗi vì unknown có thể nhận bất kỳ kiểu dữ liệu nào

w = {
    runANonExistentMethod: () => {
        console.log("This method does not exist on type 'unknown'");
    }
    
} as { runANonExistentMethod: () => void } // Cần ép kiểu để gọi phương thức

if (typeof w === "object" && w !== null){
    (w as { runANonExistentMethod: () => void }).runANonExistentMethod(); // Cần ép kiểu để gọi phương thức
}

//Type: NEVER
//never là kiểu dữ liệu đại diện cho những giá trị không bao giờ xảy ra. Nó thường được sử dụng trong các tình huống như hàm ném lỗi hoặc vòng lặp vô hạn.
//Hàm có kiểu trả về là never sẽ không bao giờ trả về giá trị nào, vì nó sẽ luôn ném lỗi hoặc kết thúc chương trình.
function throwError(message: string): never {
    throw new Error(message);
}

//Type: undefined và null

let x: undefined = undefined; // Kiểu undefined
let y: null = null; // Kiểu null

function greet(name ?: string) {
    return `Hello, ${name || "Guest"}!`;
}

interface User {
    name: string;
    age ?: number; // age là optional

}

console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!

console.log({ name: "Bob" } as User); // Output: { name: 'Bob' }
console.log({ name: "Charlie", age: 25 } as User); // Output: { name: 'Charlie', age: 25 }