window.onload = function() {

    function f(n) {
        console.log(n);
        if (n<2) {
            return n;
        }
        else return f(n-1) + f(n-2);
    }
    
    console.log(f(5));
    
}