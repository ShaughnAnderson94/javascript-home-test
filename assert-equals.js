
function assertEquals(expect, actual) {
  if(typeof expect !== typeof actual){
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
            else{
if(expect !== actual){
    throw new Error(`Expected ${expect} but found ${actual}`);
}
            }
    }
}
   
  
}


function testAssertEqual(expectedError, var1, var2){
try {
    assertEquals(var1, var2);
    if(expectedError === 'no error'){
        console.log('Assert Equal Works');
    }
    else{
        console.log('unexpected result no error');
    }
} 

catch (error) {
 if( error.message === expectedError) {
console.log('Assert Equal Works');

 }  
 else{
    console.log(`Unexpected results ${error.message}`);
 }
}

};
testAssertEqual('no error', 'abc', 'abc');
testAssertEqual('Expected abcef but found abc', 'abcef', 'abc');
testAssertEqual('no error', 1, 1);
testAssertEqual('Expected 1 but found 2', 1, 2);
testAssertEqual('no error', ['a', 'b', 'c'], ['a', 'b', 'c']);
testAssertEqual('Expected array length 2 but found 3', ['a', 'b'], ['a', 'b', 'c']);
testAssertEqual('Expected b but found d', ['a', 'b'], ['a', 'd']);



module.exports = assertEquals