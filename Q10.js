function simboloMais(valor)
{
    let i
    let string = ""
    for(i = 0; i < valor; i++)
    {
        string = "".concat(string).concat("+")
    }
    console.log(string)
}
simboloMais(2)
simboloMais(5)