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


func show(message: String) -> Void {
    print(message)
}

func show(number: Int) -> Void {
    print(number)
}

func show(message: String, number: Int) -> Void {
    print("\(message) \(number)")
}

show(message: "Hola que tal, show message")
show(number: 200)
show(message: "showing", number: 200)


//Enumeration
newChapter(title: "enumeration")

enum MediaType {
    case book
    case movie
    case music
    case game
}

var itemType: MediaType

itemType = MediaType.book

//later
itemType = MediaType.movie

// you can do that.
itemType = .music

// Raw Values
// Especifict default value for each enum
enum DefaultValue: String {
    case hola = "Hola"
    case que = "Que"
    case tal = "Tal"
}

var defaultValueQuetal: DefaultValue = .hola

switch defaultValueQuetal {
case .hola, .que, .tal:
    print("Default Vale in type \(defaultValueQuetal) there is as a default \(defaultValueQuetal.rawValue)")
}

// Associated Values in enumerables
enum Object {
    case movie(String)
    case music(Int)
    case book(String)
}

var items: [Object] = [.movie("Comedy"), .music(120), .book("Hobbit")]

for item in items {
    switch item {
    case .movie(let genre):
        print("The movie is of genre \(genre)")
    case .music(let bpm):
        print("the track is long \(bpm)s")
    case .book(let title):
        print("The best book ever is \(title)")
    }
}

newChapter(title: "Structs")
// Structs
// Defining types, that contais other types.
// IMPORTANT: You cannnot extend erencia

struct Movie {
    var title: String
    var director: String
    var releaseYear: Int
    var genre: String
    
    func showInfo() -> String {
        return "The movie \(title) released in \(releaseYear) by \(director)"
    }
}

// But you need to inicialice
var first = Movie(title: "AnalRape", director: "mi pene", releaseYear: 2019, genre: "Sex")
var second = Movie(title: "Cicuta", director: "TioCicu", releaseYear: 2018, genre: "Muerte")

first.releaseYear = 1889

print(first.showInfo())
print(second.showInfo())

// dictonaries
newChapter(title: "Dictonaries")

//Key | Values
var airlines = ["SWA": "Southwest Airlines",
                "XUM": "North Blums",
                "PGB": "German Paralx",
                "BAW": "British Airways"]
// var airlines:[String: String]

print(airlines)
if let air = airlines["SWA"] {
    print(air)
}

// All the values in a dictionari are optional, because, could be that the key dosen't exist in the dictionary...

if let a = airlines["SWA"] {
    print(a)
}

// Add new
airlines["CIC"] = "CICUTA"

print(airlines)

// Remove
airlines["SWA"] = nil
print(airlines)

// loops
// (key, value)
for (code, airline) in airlines {
    print(airline, code)
}

// Tuples
newChapter(title: "Tuples")

// The tuples are values wrapeds between parentesis.

func randomAlbum() -> (albumTitle: String, albumDuration: Int) {
    let title = "Lord of the rings"
    let duration = 2546
    
    return (title, duration)
}

let rAlbum = randomAlbum()
print(rAlbum)

print(rAlbum.albumTitle)
print(rAlbum.albumDuration)

// like spread operator
let (titAlbum, dudAlbum) = randomAlbum()

print("\(titAlbum) \(dudAlbum)")


newChapter(title: "Clousures")

struct Book {
    var title: String;
    var authorName: String;
    var readingAge: Int;
    var pageCount: Int;
}

var book1 = Book.init(title: "foo", authorName: "Victor", readingAge: 16, pageCount: 200)
var book2 = Book.init(title: "baar", authorName: "And", readingAge: 8, pageCount: 234)
var book3 = Book.init(title: "ble", authorName: "Ju", readingAge: 5, pageCount: 433)

var allBooks = [book1, book2, book3];

//func orderName(book1: Book, book2: Book) -> Bool {
//    return book1.authorName >= book2.authorName;
//}
//
//print(allBooks.sorted(by: orderName)); // Vic, Ju, And

var nameSortedBooks = allBooks.sorted(by: {
    (firstBook: Book, secondBook: Book) -> Bool
    in
    return firstBook.authorName >= secondBook.authorName
})

print(nameSortedBooks) // Vic, Ju, And


var nameSortedBookWell = allBooks.sorted { $0.authorName >= $1.authorName }// Vic, Ju, And

print(nameSortedBookWell)


newChapter(title: "Class")

class Appliance {
    var manufacture: String;
    var model: String;
    var voltage: Int;
    var capacity: Int?;
    
    init(initVoltage: Int) {
        self.voltage = initVoltage;
        self.manufacture = "Default value"
        self.model = "Default value"
    }
    
    deinit {
        // Deinisialazion of the class...
        // On for classe, not alow for structs
        /*
         It's not required that you implement that method,
         but you can use it if you need to do some action
         or cleanup before deallocating the object.
         */
    }
    
    func getDetails() -> String {
        var message = "This is hte \(self.model) from \(self.manufacture)"
        if (self.voltage >= 200) {
            message += " This model is for Europeans usage"
        }
        
        return message
    }
}

var kettle = Appliance(initVoltage: 230)

print(kettle.getDetails())

newChapter(title: "Differents between class and struct")

// STRUCT ------
struct MessageStruct{
    var text = "Initial Message"
}

var instOfMessageStruct1 = MessageStruct()
instOfMessageStruct1.text = "Clossing Message Struct" // Works

let instOfMessageStruct2 = MessageStruct()
//instOfMessageStruct2.text = "Closing Message Struct" // Fails

// Because, we instanciate de struct as a constant (let)
// and you are not able to modify it

// CLASS -----
class MessageClass{
    var text = "Initial Message Class"
}

var instOfMessageClass1 = MessageClass()
instOfMessageClass1.text = "Clossing Message Class" // Works

let instOfMessageClass2 = MessageClass()
instOfMessageClass2.text = "Classing Message Class" // Works
// Because, we define ms as a VAR and not as a Const (let)

// STRUCTS ----

struct InMutableStruct {
    var mutable = "Could be Mutable?"
}

var inMutableStruct1 = InMutableStruct()
var inMutableStruct2 = inMutableStruct1

inMutableStruct2.mutable = "I don't think so"

print(inMutableStruct1.mutable) // Could be Mutable?
print(inMutableStruct2.mutable) // I don't think so

// CLASS ----
print("")

class MutableCalss {
    var mutable = "Could be Mutable?"
}

var mutableClass1 = MutableCalss()
var mutableClass2 = mutableClass1

mutableClass1.mutable = "yes! sure"

print(mutableClass1.mutable) // yes! sure
print(mutableClass2.mutable) // yes! sure


newChapter(title: "inheritance")

enum AnimalType {
    case mamifero
    case oviparo
    case alien
}

// SUPER CLASS
class Animal {
    var type: AnimalType;
    var name: String;
    var limbs: Int?;
    
    init(type: AnimalType, name: String) {
        self.type = type
        self.name = name
    }
    
    // This COULD NOT be overritend
    final func getDetails() -> String {
        return "This animal is type of \(self.type) and specimen \(self.name)"
    }
}

// SUB CLASS
class Cat: Animal {
    var sound: String;
    
    init() {
        self.sound = "MEEEWW"
        super.init(type: AnimalType.mamifero, name: "Cat")
    }
    
    func soundAction() -> String{
        return "The \(super.name) sounds like: \(self.sound)"
    }
}

var myCat = Cat()

print(myCat.soundAction()) // he Cat sounds like: MEEEWW
print(myCat.getDetails()) //  This animal is type of mamifero and specimen Cat
