function parseArguments() {
  const source = [];

  for (let i = 0; i < arguments.length; i++) {
    source.push(Number(arguments[i]));
  }
  return source;
}

function calcSumOfSquares(source, mean) {
  return source
    .map((x) => x - mean)
    .map((x) => x * x)
    .reduce((p, c) => p + c, 0);
}

function calcMean(source) {
  return source.reduce((p, c) => p + c, 0) / source.length;
}

function getVariance() {
  const source = parseArguments(...arguments);
  let mean = calcMean(source);
  let sumOfSquares = calcSumOfSquares(source, mean);
  let variance = sumOfSquares / (arguments.length - 1);
  return `분산: ${variance}`;
}

function variance() {
  switch (arguments.length) {
    case 0:
      return "입력된 데이터가 없습니다.";
    case 1:
      return "데이터가 부족해 분산을 계산할 수 없습니다. 2개 이상의 데이터를 입력해 주세요.";
    default:
      return getVariance(...arguments);
  }
}

module.exports = variance;
