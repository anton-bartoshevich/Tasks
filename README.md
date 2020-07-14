const simpleNumber = () => {
    back:
    for(let i = 2; i <= 10; i++) {
        console.log("i", i );
        for(let a = 2; a < i; a++) {
            console.log("a", a);
            if (i%a == 0) continue back;
        }
        console.log("Простое число", i);
    }
}

simpleNumber();

