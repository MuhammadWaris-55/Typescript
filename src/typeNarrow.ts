function carModel(model: string | number){
    if(typeof model === 'string'){
        return `Model of this BMW is ${model}`
    }
    return `Model Year ${model}`
}