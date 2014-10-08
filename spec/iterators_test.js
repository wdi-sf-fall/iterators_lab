var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });

  describe('#min', function () {
    it('should return the minimum in an array', function () {
      expect(Iterators.min([1,2,3,4,5])).to.equal(1);
      expect(Iterators.min([-1,0,3,4,5])).to.equal(-1);
      expect(Iterators.min([0,3,4,5])).to.equal(0);
    });
    it('should return Infinity for an empty array', function () {
      expect(Iterators.min([])).to.equal(Infinity);
    });
  });

  describe('#each', function () {
    it('should run a function for each element', function () {
      var total = 0;
      Iterators.each([1,2,3], function (num) {
        total += num;
      });
      expect(total).to.equal(6);

      var product = 1;
      Iterators.each([2,3,4], function (num) {
        product = product * num;
      });
      expect(product).to.equal(24);
    });
  });

  describe('#map', function () {
    it('should return an array of results', function () {
      var timesTwo = function (num) {
        return num * 2;
      };
      var plusThree = function (num) {
        return num + 3;
      };

      expect(Iterators.map([1,2,3], timesTwo)).to.deep.equal([2,4,6]);
      expect(Iterators.map([2,3,4], plusThree)).to.deep.equal([5,6,7]);
    });
  });

  describe('#filter', function () {
    it('should filter an array to items that pass test', function () {
      var even = function (num) {
        return num % 2 === 0;
      }
      var odd = function (num) {
        return num % 2 !== 0;
      };
      expect(Iterators.filter([1,2,3,4,5,6], even)).to.deep.equal([2,4,6]);
      expect(Iterators.filter([1,2,3,4,5,6], odd)).to.deep.equal([1,3,5]);
    });
  });

  describe('#reduce', function () {
    it('should accumulate over an array', function () {
      var add = function (a, b) {
        return a + b
      };
      expect(Iterators.reduce([1,2,3,4], add)).to.equal(10);
      expect(Iterators.reduce([1,2,3,4], add, 0)).to.equal(10);
      expect(Iterators.reduce([1,2,3,4], add, 1)).to.equal(11);
    });
  });

  describe('#reject', function () {
    it('should reject elements that fail test', function () {
      var even = function (num) {
        return num % 2 === 0;
      }
      var odd = function (num) {
        return num % 2 !== 0;
      };
      expect(Iterators.reject([1,2,3,4], even)).to.deep.equal([1,3]);
      expect(Iterators.reject([1,2,3,4], odd)).to.deep.equal([2,4]);
    });
  });
});
