function somar(array)
{
    let soma = 0
    let a = array.length
    for( let i = 0; i < a; i++)
    {
        soma += array[i]
    }
    console.log(`a soma é ${soma}`)
}
somar([10,10,15])