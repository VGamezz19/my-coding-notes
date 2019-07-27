import UIKit


func newChapter(title: String) -> Void{
    let breakLine = "----------------------------------"
    print(breakLine)
    print(title)
    print(breakLine)
}

// swfit ingers the type.
newChapter(title: "Swift Types")
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


newChapter(title: "Optioanls, and unwrapped variables")

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

newChapter(title: "Arrays")

var arr: [String?]

arr = ["victor", "Gamez", "pepito"]

arr.append("jose")

var firstElDeleted = arr.removeFirst()

for item in arr {
    if let el = item {
      print(el)
    }
}

// Switch
newChapter(title: "Switch")

let volcanoExplosivityIndex: Int // Could be 0 to 8
let rangeDangerVolcanoExplosivity: ClosedRange<Int> = 4 ... 8

let eee: [Int] = Array(4 ... 8) //ClosedRanged.

volcanoExplosivityIndex = 6

switch volcanoExplosivityIndex {
case 0:
    print("Effusive")
case 1:
    print("explosive")
case 2:
    print("anal")
case 3:
    print("rape")
case rangeDangerVolcanoExplosivity: //Range of values
    print("exaust the rest 4, 5, 6, 7, 8")
default:
    print("Not a recognized index.")
}


// Loops
newChapter(title: "Loops")

let bunchOfWords: [String?] = ["Hola", "que tal", "todoBoen", "pues",
                    "vete a", "la", "mierda", "c", "p", "u","y","o"]

for word in bunchOfWords {
    if let word = word {
       print(word)
    }
}


for foo in 0...10 {
    print(foo) // 1, 2, 3, ... 10
}


for foo in 0..<10 {
    print(foo) // 1, 2, 3 ... 9
}


newChapter(title: "Strides Loops")

for number in stride(from: 0, through: 256, by: 16) {
    // This will print, by 16 from 0 to 256
    print(number)
}

for number in stride(from: 0, to: 256, by: 16) {
    // This will print, by 16 from 0 to 240, avoiding the lasts 16 numbers
    print(number)
}

for number in stride(from: 256, through: 0, by: -16) {
    // Descendent
    print(number)
}

// String interpolation
newChapter(title: "String interpolation")

let trackName = "Amber"
let artistName = "Stick to Your Guns"
let duration: Int = 200

let message = "Now playing \(trackName) by \(artistName) wich is \(duration) long"

print(message)

