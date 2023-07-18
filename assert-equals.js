function assertEquals(expect, actual) {
    if(typeof expect !== typeof actual){
        console.log(`Expected type ${typeof expect} but found type ${typeof actual}`);
    }
}
assertEquals(1, '1');

module.exports = assertEquals