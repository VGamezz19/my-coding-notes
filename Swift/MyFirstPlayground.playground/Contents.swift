import UIKit


// swfit ingers the type.
var str = "Hello, playground" // swfti know that this is a string
var age: Int = 20


print(str)
print("adios")


let a = 5
let b = 2

var myResult = a + b

type(of: myResult)

myResult = a / b
type(of: myResult)

var foo = "asd2"

var soo = Int(foo) // nil = null

foo = "12"

soo = Int(foo) // 12


// Optioanls, and unwrapped variables


//1
var optionalString: Int?

optionalString = 100

if optionalString != nil {
    var unwraped = optionalString!
    unwraped += 10
    print(unwraped)
}

//2
optionalString = 100

// This is "optional binding"
if var unwrappedOptional = optionalString {
    unwrappedOptional += 100
    print(unwrappedOptional)
} else {
    // Do something
}
