var iterators = {
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },
    min: function (numList) {
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
          min = numList[i];
        }
      }
      return min;
    },
    each: function (list, callback) {
      for (var i = 0; i < list.length; i++) {
        callback(list[i]);
      }
    },
    map: function (list, callback) {
      var output = [];
      for (var i = 0; i < list.length; i++) {
        output.push(callback(list[i]));
      }
      return output;
    },
    filter: function (list, callback) {
      var output = [];
      for (var i = 0; i < list.length; i++) {
        if (callback(list[i])) {
          output.push(list[i]);
        }
      }
      return output;
    },
    reduce: function (list, callback, accumulator) {
      if (typeof accumulator === "undefined") {
        var copy = list.concat();
        var first = copy.shift();
        return iterators.reduce(copy, callback, first);
      } else {
        for (var i = 0; i < list.length; i++) {
          accumulator = callback(list[i], accumulator);
        }
        return accumulator;
      }
    },
    reject: function (list, callback) {
      return iterators.filter(list, function (item) {
        return !callback(item);
      });
    }
  };

module.exports = iterators;
