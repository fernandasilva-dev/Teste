export function multiplicar(a){
    for(let i = 1; i < 10; i++){
        let result = a * i
        //texto = '${a} x ${i} = ${result}'
        console.log(a + "x" + i + "=" + result)
    }
    return 0
}

export default multiplicar