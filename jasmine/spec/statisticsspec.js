describe("Statistics Library", function(){

    it("throws an error when passed a NaN", function () {
        var testFn = function () {
            Statlab.fix("b");
        };
        expect(testFn).toThrow(new Error("numberToFix is NaN"));
    });


});