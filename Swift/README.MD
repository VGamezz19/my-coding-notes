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
