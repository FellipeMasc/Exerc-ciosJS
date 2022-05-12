function numero(valor)
{
    return typeof(valor) == "number"
}
function filtrar(array)
{
    let novoarray = array.filter(numero)
    console.log(novoarray)
}
filtrar([1, "e", 2, "a", 3])