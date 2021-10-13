findTag = (string) => {
    return string.slice(string.indexOf('<') !== -1 ? string.indexOf('<')+1 : -1, string.indexOf('>'))
}

console.log(findTag("<br>hello</br>"))
console.log(findTag("hallo Test1<etwas> Test2 <oder>"))
console.log(findTag("hello"))
console.log(findTag("was geht ab </hello>"))