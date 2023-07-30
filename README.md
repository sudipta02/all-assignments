Generics: 
Generics refer to a programming concept that allows the creation of classes, interfaces, or
methods that can work with different data types while maintaining type safety. In other
words, generics provide a way to write reusable code that can operate on various data types I
without sacrificing type checking at compile time.

Example:
function swap<T>(a: T, b: T):[T,T]{
return [b,a]
}
const swap2 = <T>(a: T, b: T):[T,T] => return [b, a];


