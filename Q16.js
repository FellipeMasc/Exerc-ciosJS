function checar(ano)
{
    if((ano % 4 == 0 && ano % 100 != 0)||(ano % 400 == 0) )
    {
        return true
    }
    else
    {
        return false
    }
}
console.log(checar(1600))
console.log(checar(2020))
console.log(checar(2100))
