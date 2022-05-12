function par(valor)
{
    return (valor % 2 == 0)
}
function receber(array)
{
    const novoarray = []
    for(let i = 0; i < array.length; i++)
    {
        if(i%2 == 0)
            novoarray[i] = array[i]
    }
    console.log(novoarray.filter(par))
}
receber([1,2,3,4])
receber([10,70,22,43])