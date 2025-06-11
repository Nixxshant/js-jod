//stack:call by value mtlb reference edit nhi hoga / edit temporary hoga

let a="apple"
let b=a
console.log(b);
b="mango"
console.log(a);
console.log(b);

//Heap: call by reference mtlb reference edit hota rahega/ edit permanently hoga

let c={
    name:"inge",
    class:"4cse09"
}

let d=c

d.name="barou"

console.log(c.name)
console.log(d.name);

