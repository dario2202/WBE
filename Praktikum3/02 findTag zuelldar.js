function findTag(str) {
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
  
  console.log(findTag("<header>Text</header"));
  console.log(findTag("blabla <br> blabla"));
  console.log(findTag(""));
  console.log(findTag("Test ohne Tag"));
  console.log(findTag("<html><bod><h1>Title</h1></bod></html>"));
  console.log(findTag("Tag <<tag></tag>"));
  console.log(findTag("Non ending Tag <tags"));