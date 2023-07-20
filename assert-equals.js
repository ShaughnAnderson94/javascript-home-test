function assertEquals(expect, actual) {
   try { if(typeof expect !== typeof actual){
        throw new Error(`Expected type ${typeof expect} but found type ${typeof actual}`);
    }
    else{
        if(Array.isArray(expect) === true && expect.length !== actual.length){
        throw new Error(`Expected array length ${expect.length} but found ${actual.length}`);
        }
        else{
            if(Array.isArray(expect)){
                actual.forEach((element, index) => {
              if(element !== expect[index]){

                throw new Error(`Expected ${expect[index]} but found ${element}`);
              }       
                });
            }
if(expect !== actual){
    throw new Error(`Expected ${expect} but found ${actual}`);
}
    }
}
   }
    catch (error) {
        // Handle the error
        console.error("error:", error.message);
      }
}
// test for detecting unequal type 
// assertEquals(1, '1');

// test for detecting unequal strings or numbers
// assertEquals(1,2);
// assertEquals('USA', 'UK');

// test for array length difference
// assertEquals([1,1,1],[1,1,1,1,1])

// test for arrays with different values
// assertEquals(['a','d'], ['a','b']);




module.exports = assertEquals