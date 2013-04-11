function createLib(){
    // Make the library object
    var Statlab = Statlab || {};

    Statlab.fix = function(numberToFix){
        if(isNaN(numberToFix)) {
            throw new Error("numberToFix is NaN");
        }
        return parseFloat(numberToFix.toFixed(2));
    };
    return Statlab;
}
var Statlab = createLib();