const findTag = (str) => {
    const tagStartElement = '<';
    const tagEndElement = '>'
    let isStartTagFound = undefined;
    let tag = "";
  
    for (let i = 0; i < str.length && isStartTagFound !== false; i++) {
      if (!isStartTagFound && tagStartElement === str[i]) isStartTagFound = true;
      else if (tagEndElement == str[i]) isStartTagFound = false;
      else if (isStartTagFound) tag += str[i];
    }
  
    if (tag === "" || isStartTagFound !== false) tag = undefined
  
    return tag
  }
  
  let fibonacci = (n) => {
    if (n < 2) return n
    else return fibonacci(n-1) + fibonacci(n-2)
  }
  
  const equal = (n, m) => {
    return n === m
  }