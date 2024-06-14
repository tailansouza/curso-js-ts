//funsoes que se chamao de vouta **tem limite de execusoes

function recursiva(max) {
    if (max >= 10) return
    max++;
    console.log(max)
    recursiva(max)
}
recursiva(0);