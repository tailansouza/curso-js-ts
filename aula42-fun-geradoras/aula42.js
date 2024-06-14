function* geradora1() {
    yield 'valor 1';
    yield 'valor 2';
}
let g1 = geradora1();
//console.log(g1.next().value)

for (let valor of g1) {
    console.log(valor)
}

function* geradora2() {
    let i = 0;
    while (true) {
        yield i;
        i++
    }
}

let g2 = geradora2()
console.log(g2.next().value)
console.log(g2.next().value)

function* geradora3() {
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}
let g4 = geradora4()
for (let valor of geradora4()) {
    console.log(valor)
}

function* geradora5() {
    yield function() {
        console.log('vim y1')
    };

    yield function() {
        console.log('vim y2')
    };
}
let g5 = geradora5();
let func1 = g5.next().value;
let func2 = g5.next().value;

func1()
func2()