function repetir(palavra, vezes)
{
    const array = [""]
    let i
    for(i = 0; i < vezes; i++)
    {
        array[i] = palavra
    }
    console.log(array)
}
repetir("codigo", 2)
repetir("codigo", 3)
repetir("codigo", 5)