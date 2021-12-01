function equal(v1, v2) {
    if (typeof v1 !== typeof v2) return false;
    if (v1 === v2) return true;
    if (v1 === v2) return true;
    if (v1 != null && typeof v1 === 'object') {
      const keys1 = Object.keys(v1);
      const keys2 = Object.keys(v2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (const key of keys1) {
        const val1 = v1[key];
        const val2 = v2[key];
        if (val1 !== val2) {
          return false;
        }
      }
      return true;
    }
  
    return false;
  }
  
  console.log(equal("hi", "hi"));
  console.log(equal({}, {}));
  console.log(equal({a:1, b:2}, {b:2, a:1}));
  console.log(equal({a:1, b:2}, {c:3, b:2, a:1}));
  console.log(equal({a:{}}, {a:{}}));
  let emptyObj = {};
  console.log(equal({a:emptyObj}, {a:emptyObj}));
  // b)
  console.log(equal([], []));
  console.log(equal([1, 5], [1, 5]));
  console.log(equal([1, 5], [1, 9]));