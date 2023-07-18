function assertEquals(expect, actual) {
   try { if(typeof expect !== typeof actual){
        throw new Error(`Expected type ${typeof expect} but found type ${typeof actual}`);
    }
    else{
if(expect !== actual){
    throw new Error(`Expected ${expect} but found ${actual}`);
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



module.exports = assertEquals