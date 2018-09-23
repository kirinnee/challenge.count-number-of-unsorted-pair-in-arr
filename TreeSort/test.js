f = require('./functions');

require('chai').should();

describe("inverse", () => {

    it("should inverse a given pair stucture", () => {
        f.inverse(
            [4, [3, [2, [1, []]]]]
        )
            .should.deep.equal(
                [1, [2, [3, [4, []]]]]
            );
    });

});


describe("split", () => {

    it("should split array seperately", () => {
        f.split(
            [5, [4, [3, [2, [1, []]]]]], 2
        )
            .should.deep.equal(
                [
                    [5, [4, []]],
                    [3, [2, [1, []]]]
                ]
            );

        f.split(
            [5, [4, [3, [2, [1, []]]]]], 3
        )
            .should.deep.equal(
                [
                    [5, [4, [3, []]]],
                    [2, [1, []]]
                ]
            );
        f.split(
            [4, [2, [3, [1, []]]]], 2
        ).should.deep.equal(
            [
                [4, [2, []]],
                [3, [1, []]]
            ]
        );
    });

});

describe("count", () => {
    it("should count depth of pair structure", () => {
        let testSubj1 = [5, [4, [3, [2, [1, []]]]]];
        let testSubj2 = [6, [5, [4, [3, [2, [1, []]]]]]];

        f.count(testSubj1).should.equal(5);
        f.count(testSubj2).should.equal(6);

    });

});

describe("merge", () => {
    it("should merge 2 arrays while sorting them, and counting number of swaps", () => {
        let p1 = [2, [5, [7, []]]];
        let p2 = [3, [4, [6, []]]];
        let sorted = [2, [3, [4, [5, [6, [7, []]]]]]];
        let expected = [5, sorted];

        f.merge(p1, p2, [], 0).should.deep.equal(expected);
    });

});

describe("sort", () => {

    it("should return count of 3 and the array in order", () => {
        let testSubj = [5, [2, [1, [3, [6, [4, []]]]]]];
        let expected = [6, [1, [2, [3, [4, [5, [6, []]]]]]]];

        f.sort(testSubj).should.deep.equal(expected);

    });

    it("should return count of 3 and the array in order", () => {


        f.sort([1, [2, [3, [4, []]]]]).should.deep.equal([0, [1, [2, [3, [4, []]]]]]);
        f.sort([1, [2, [4, [3, []]]]]).should.deep.equal([1, [1, [2, [3, [4, []]]]]]);
        f.sort([1, [4, [2, [3, []]]]]).should.deep.equal([2, [1, [2, [3, [4, []]]]]]);
        f.sort([4, [1, [2, [3, []]]]]).should.deep.equal([3, [1, [2, [3, [4, []]]]]]);

    });

    it("Should match sort correctly", () => {
        let testSub = [4, [7, [9, [2, [5, [6, [1, [3, [8, []]]]]]]]]];
        let ch = f.check(f.convertFromPairStructure(testSub));
        let sorted = f.sort(testSub)[0];
        ch.should.equal(sorted);
    });

});

describe("check", () => {

    it("should count the numebr of inccorect order", () => {

        f.check([5, 6, 3, 4, 1, 2]).should.equal(12);
        f.check([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).should.equal(0);
        f.check([7, 6, 8, 9, 4, 5, 2, 1]).should.equal(22);
    });

});

describe("convertFromPairStructure", () => {
    it("should convert pair structure to array", () => {
        let test1 = [7, [6, [8, [2, [1, []]]]]];
        let test2 = [1, [2, [3, [4, []]]]];
        let test3 = [9, [-1, [8, [3, [0, [5, []]]]]]];

        f.convertFromPairStructure(test1).should.deep.equal([7, 6, 8, 2, 1]);
        f.convertFromPairStructure(test2).should.deep.equal([1, 2, 3, 4]);
        f.convertFromPairStructure(test3).should.deep.equal([9, -1, 8, 3, 0, 5]);

    });
});