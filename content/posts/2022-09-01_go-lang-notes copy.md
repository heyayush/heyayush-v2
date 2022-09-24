## Introduction

### Shortcuts

```
x int, y int
x, y int
```

### Packages

- Every Go program is made up of packages.
- Programs start running in package **main**.
- Convention is that package name is same as the last element of the import path.
- A name is exported if it begins with a capital letter.
- When importing a package, you can only refer to its exported names. Unexported names are not accessible from outside the package.

### Functions

- Function can return any number of results.
- A return statement without arguments returns the names return values. AKA naked return. Should only be used in short functions as it may harm readability in longer functions.

```
func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
```

### Variables

- **var** statement declares a list of variables. the type is last.
- **var** declaration can include initializers, one per variable.
- If initializer is present, the type can be omitted.
- Inside a function, the _:=_ short assignment can be used in place of a _var_ declaration with implicit type.
- Constants cannot be declared using the := syntax.

### Basic Types

bool, string, int and uint with 8,16,32,64, also uintptr.
byte //alias for uint8
rune // alias for int32 (represents a Unicode code point)
float32 float64
complex64 and complex128

int, uint types are automatically 32 bits or 64 bits as per the system on which it is running.

### Zero values

- Variables declared without an explicit initial value are given their zero value.
- Zero value is:
  - 0 for numeric types
  - false for boolean
  - "" (empty string) for strings

### Type conversions

```
i := 42
f := float64(i)
```

### For Loop

The basic for loop has three components separated by semicolons:

1. The init statement: executed before the first iteration
2. The condition expression: evaluated before every iteration
3. The post statement: executed at the end of every iteration

```
	for i := 0; i < 10; i++ {
		sum += i
	}
```

### If Condition

```
	if x < 0 {
		return "Less than 0"
	}
```

- Variables declared inside an _if_ short statement are also available inside any of the _else_ blocks.

### Switch

- A _switch_ statements is a shorter way to write a sequence of _if - else_ statements.
- No need of _break_ statement that is inbuilt and only the selected case is executed not the others that follow.
- Switch without a condition is the same as switch true.

```
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.\n", os)
	}

  switch {
	case t.Hour() < 12:
		fmt.Println("Good morning!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon.")
	default:
		fmt.Println("Good evening.")
	}
```

### Pointers

- A pointer holds the memory address of a value.
- The type **\*T** is a pointer to a T value. Its zero value is \*nil\*.
- The **&** operand generates a pointer to its operand.

### Struct

- A _struct_ is a collection of fields
- Just like _Object_

### Arrays

- The type [n]T is an array of n values of type T.
- An array's length is part of its type, so arrays cannot be resized.

```
var a [10]int // declares a variable a as an array of ten integers
```

### Slices

- An array has a fixed size. A slice, on the other hand, is a dynamically-sized, flexible view into the elements of an array.
- The type []T is a slice with elements of type T.
- A slice is formed by specifying two indices, a low and high bound, separated by a colon:
- The default is zero for the low bound and the length of the slice for the high bound.
-

```
a[low : high]
```

- Slices are like reference to arrays.
- A slice does not store any data, it just describes a section of an underlying array.
- Changing the elements of a slice modifies the corresponding elements of its underlying array.
- Other slices that share the same underlying array will see those changes.
- Creating a slice under the hood creates a array and then builds a slice to reference it.

#### Slice length and capacity

- A slice has both a _length_ and a _capacity_
- _length_ is number of elements it contains. **len(s)**
- _capacity_ is number of elements in the underlying array. **cap(s)**

#### Nil Slices

- The zero value of a slice is nil.
- A nil slice has a length and capacity of 0 and has no underlying array.

#### make function

- Built-in _make_ function is how you create dynamically-sized arrays.
- _make_ function allocates a zeroed array and returns a slice that refers to that array.

```
a := make([]int, 0, 5)  // len(a)=0, cap(a)=5
```

#### append function

- Built-in _append_ function to append new elements to a slice.
- The first parameter s of append is a slice of type T, and the rest are T values to append to the slice.

```
var s []int
s = append(s, 0) // s=[0]
s = append(s, 5) // s=[0,5]

```

#### Range

- The _range_ form of the for loop iterates over a slice or map.
- When ranging over a slice, two values are returned for each iteration. The first is the index, and the second is a copy of the element at that index.

```
var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}
for i, v := range pow {
	fmt.Printf("2**%d = %d\n", i, v)
}

```

### Maps

- A map maps keys to values.
- The zero value of a map is nil. A nil map has no keys, nor can keys be added.
- The make function returns a map of the given type, initialized and ready for use.
- Map literals are like struct literals, but the keys are required.

#### Mutating Maps

Insert or update an element in map m:

```
m[key] = elem
```

Retrieve an element:

```
elem = m[key]
```

Delete an element:

```
delete(m, key)
```

### Function closures

- Go functions may be closures.
- A closure is a function value that references variables from outside its body. The function may access and assign to the referenced variables.

```
func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos, neg := adder(), adder()
	for i := 0; i < 10; i++ {
		fmt.Println(
			pos(i),
			neg(-2*i),
		)
	}
}
```

### Methods

- Go does not have classes.
- A method is a function with a special receiver argument.

- Simple difference between function and method is

```
 foo(a) is a function
 a.foo() is a method
```

```
type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
}
```

#### Pointer receivers

- Methods with pointer receivers can modify the value to which the receiver points. Since methods often need to modify their receiver, pointer receivers are more common than value receivers.
- When you want to modify the original value that the receiver points to then use pointer receiver else value receiver.
-

```
type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	v.Scale(10)
	fmt.Println(v.Abs()) // 50
}
```

### Interfaces

- An interface type is defined as a set of method signatures.
- Under the hood, interface values can be thought of as a tuple of a value and a concrete type:

```
(value, type)
```

- A nil interface value holds neither value nor concrete type.
- The interface type that specifies zero methods is known as the empty interface:

```
interface{}
```

- An empty interface may hold values of any type. (Every type implements at least zero methods)

### Type assertions

- A type assertion provides access to an interface value's underlying concrete value.

```
t := i.(T)
```

```
var i interface{} = "hello"

s := i.(string)
fmt.Println(s) // hello

s, ok := i.(string)
fmt.Println(s, ok) // hello true

f, ok := i.(float64)
fmt.Println(f, ok) // 0 false

```

#### Type switches

- A type switch is a construct that permits several type assertions in series.
- A type switch is like a regular switch statement, but the cases in a type switch specify types (not values), and those values are compared against the type of the value held by the given interface value.

```
// If type is int then do this else if type is string then do this and so on...
switch v := i.(type) {
case T:
    // here v has type T
case S:
    // here v has type S
default:
    // no match; here v has the same type as i
}
```

#### Generic types

```
// List represents a singly-linked list that holds
// values of any type.
type List[T any] struct {
	next *List[T]
	val  T
}
```

## Developing RESTful API with Go and Gin

- Gin to route requests, retrieve request details, and marshal JSON for responses.

1. Create a project folder let's say `gin-web-service`
2. cd into it and run command `go mod init gin-web-service`
   This will create a go.mod file to manage dependencies.

3. Create `main.go` and setup the data structure with dummy data

```
package main

// album represents data about a record album.
type album struct {
    ID     string  `json:"id"`
    Title  string  `json:"title"`
    Artist string  `json:"artist"`
    Price  float64 `json:"price"`
}

// albums slice to seed record album data.
var albums = []album{
    {ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
    {ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
    {ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
}
```

4. `getAlbums` function

```
// getAlbums responds with the list of all albums as JSON.
func getAlbums(c *gin.Context) {
    c.IndentedJSON(http.StatusOK, albums)
}
```

- gin.Context is the most important part of Gin. It carries request details, validates and serializes JSON, and more. (Despite the similar name, this is different from Go’s built-in context package.)
- Call Context.IndentedJSON to serialize the struct into JSON and add it to the response.
- In production use `Context.JSON` instead of `Context.IndentedJSON` for more compact JSON. IndentedJSON is easier to debug and read.

5. `main` handler function

```
func main() {
    router := gin.Default()
    router.GET("/albums", getAlbums)

    router.Run("localhost:9000")
}
```

- Initialize a Gin router using Default.
- Use the GET function to associate the GET HTTP method and /albums path with a handler function.
- Use the Run function to attach the router to an http.Server and start the server.

6. Import the required packages

```
import (
    "net/http"

    "github.com/gin-gonic/gin"
)
```

7. Run `go get .` to download all the packages.
8. Run `go run .` to run the code in current directory.
9. Hit the endpoint using curl `curl http://localhost:8080/albums` and check the response.
10. Complete code with post and get specific requests as well.

```
package main

import (
    "net/http"

    "github.com/gin-gonic/gin"
)

// album represents data about a record album.
type album struct {
    ID     string  `json:"id"`
    Title  string  `json:"title"`
    Artist string  `json:"artist"`
    Price  float64 `json:"price"`
}

// albums slice to seed record album data.
var albums = []album{
    {ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
    {ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
    {ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
}

func main() {
    router := gin.Default()
    router.GET("/albums", getAlbums)
    router.GET("/albums/:id", getAlbumByID)
    router.POST("/albums", postAlbums)

    router.Run("localhost:8080")
}

// getAlbums responds with the list of all albums as JSON.
func getAlbums(c *gin.Context) {
    c.IndentedJSON(http.StatusOK, albums)
}

// postAlbums adds an album from JSON received in the request body.
func postAlbums(c *gin.Context) {
    var newAlbum album

    // Call BindJSON to bind the received JSON to
    // newAlbum.
    if err := c.BindJSON(&newAlbum); err != nil {
        return
    }

    // Add the new album to the slice.
    albums = append(albums, newAlbum)
    c.IndentedJSON(http.StatusCreated, newAlbum)
}

// getAlbumByID locates the album whose ID value matches the id
// parameter sent by the client, then returns that album as a response.
func getAlbumByID(c *gin.Context) {
    id := c.Param("id")

    // Loop through the list of albums, looking for
    // an album whose ID value matches the parameter.
    for _, a := range albums {
        if a.ID == id {
            c.IndentedJSON(http.StatusOK, a)
            return
        }
    }
    c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
}
```

## Handling Sessions

This example will show how to store data in session cookies using the popular gorilla/sessions package in Go.

```
// sessions.go
package main

import (
    "fmt"
    "net/http"

    "github.com/gorilla/sessions"
)

var (
    // key must be 16, 24 or 32 bytes long (AES-128, AES-192 or AES-256)
    key = []byte("super-secret-key")
    store = sessions.NewCookieStore(key)
)

func secret(w http.ResponseWriter, r *http.Request) {
    session, _ := store.Get(r, "cookie-name")

    // Check if user is authenticated
    if auth, ok := session.Values["authenticated"].(bool); !ok || !auth {
        http.Error(w, "Forbidden", http.StatusForbidden)
        return
    }

    // Print secret message
    fmt.Fprintln(w, "The cake is a lie!")
}

func login(w http.ResponseWriter, r *http.Request) {
    session, _ := store.Get(r, "cookie-name")

    // Authentication goes here
    // ...

    // Set user as authenticated
    session.Values["authenticated"] = true
    session.Save(r, w)
}

func logout(w http.ResponseWriter, r *http.Request) {
    session, _ := store.Get(r, "cookie-name")

    // Revoke users authentication
    session.Values["authenticated"] = false
    session.Save(r, w)
}

func main() {
    http.HandleFunc("/secret", secret)
    http.HandleFunc("/login", login)
    http.HandleFunc("/logout", logout)

    http.ListenAndServe(":8080", nil)
}
```
