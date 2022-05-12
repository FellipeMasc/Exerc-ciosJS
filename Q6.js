function inverso(valor){
    if(typeof(valor) === "boolean"){
        return !valor
    }else if(typeof(valor) === "number"){
        return -1 * valor
    }else return `booleano ou número esperado, mas o parâmetro "${valor}" é do tipo string`
    
}
console.log(inverso(2))
console.log(inverso(true))
console.log(inverso("palavra"))

