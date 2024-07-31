const Name = "Virender Prasad";

let power = (a,e) => {
    return Math.pow(a,e)
};

let fibonacci = (n) => {
    if(n<=1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}


export default {Name, power, fibonacci}
