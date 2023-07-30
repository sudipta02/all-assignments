Generics: 
Generics refer to a programming concept that allows the creation of classes, interfaces, or
methods that can work with different data types while maintaining type safety. In other
words, generics provide a way to write reusable code that can operate on various data types I
without sacrificing type checking at compile time.

Examples:
1. <br/>
function swap<T>(a: T, b: T):[T,T] {
<br/>
return [b,a]
<br/>
}
2. <br/>
const swap2 = <T>(a: T, b: T):[T,T] => return [b, a];
3. <br/>
function swap<T, U>(a: T, b: U):[U,T] {
<br/>
return [b, a]
<br/>
}

