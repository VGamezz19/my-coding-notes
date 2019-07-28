# Swift

Use REPL (Read Eval Print Loop) equals to NodeJs

![img](./swifteCompilation.png)

`var` fro variables
`let` fro constants

you can define a constant, whenever you want, but only can ve fefined ones

## Optionals

in swift, as a muchs of other languages, we can define an optional values. by puting de question mark at the end of the Type.

`var optionalString: String?`

this will enable the posibiliti to convert `optionalStrin` variable into a `nil`.

`nil` is the key word to refeer to a null value, no false, not empty string nor cero. is nil.

then, if we want to use this variable, for making sure that there is a value, we need to unwrapp de variable, the value. There is two ways for make it possible.

1

```swift
var optionalString: String?

optionalString = 100

if optionalString != nil {
    var unwrappedOptional = optionalString!

    unwrappedOptional += 10
    print(unwrappedOptional)
}
```

2

```swift
var optionalString: String?

optionalString = 100

if let unwrappedOptional = optionalString {
    unwrappedOptional += 10
    print(unwrappedOptional)
}
```

## Collections

![img](./swift-collections.png)

## Switch

```Swift

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

```

## Strides

```Swift
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

```

## String interpolation

```Swift
let trackName = "Amber"
let artistName = "Stick to Your Guns"
let duration = 200

let message = "Now playing \(trackName) by \(artistName) wich is \(duration) long"

print(message)


```

## Func

```Swift
// Func
newChapter(title: "Functions")

func showMessage(number: Int, name: String) { // Are inmutable values
    //You can't modify the parameters
    print("The function call worked \(number) and the string: \(name)")
}

showMessage(number: 24, name: "Douglas")

func basicFunction() -> String {
    let str = "This is a simple function."
    return str
}

let result = basicFunction()

// For ignore what the funcion is returning
_ = basicFunction()

// Avoid namin the parameter of a function, adding _
func printUserName(_ name: String, _ lastName: String) -> Void {
    print(name, lastName)
}

printUserName("Victor", "Gamez")

// Changing the name of parameters.
// (Int, Int) -> Int
func difference(between firstAmount: Int, and secondAmount: Int) -> Int {
    if firstAmount > secondAmount {
        return firstAmount - secondAmount
    } else {
        return secondAmount - firstAmount
    }
}

var res = difference(between: 2000, and: 1500)

print("The difference is: \(res)")
```
