function counter(){
    let count = 0;
    function innerFn(){
        count++;
        console.log(count);

    }
    return innerFn;

}
const nestedFn = counter();
console.dir(nestedFn);
nestedFn()
nestedFn()
nestedFn()
nestedFn()
