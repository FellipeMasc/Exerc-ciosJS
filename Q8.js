function multiplicar(a, b)
{
    let result = 0  
    let i
    for(i = 0; i < b; i++)
    {
        result += a
    }
    return result
}
console.log(multiplicar(5,5))
console.log(multiplicar(5,0))
console.log(multiplicar(7,5))