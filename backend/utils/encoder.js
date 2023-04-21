module.exports = {
  encoder: function (input) {
    let result = '';
    let count = 1;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === input[i + 1]) {
        count++;
      } else {
        result += input[i] + count;
        count = 1;
      }
    }

    return result;
  }
};