function variance() {
  const n = arguments.length;

  if (n == 0) {
    return "입력된 데이터가 없습니다.";
  }

  if (n == 1) {
    return "데이터가 부족해 분산을 계산할 수 없습니다. 2개 이상의 데이터를 입력해 주세요.";
  }

  const source = [];

  for (let i = 0; i < n; i++) {
    source.push(Number(arguments[i]));
  }

  let sum = 0.0;

  for (let i = 0; i < n; i++) {
    sum += source[i];
  }

  let mean = sum / n;

  let sumOfSquares = 0.0;

  for (let i = 0; i < n; i++) {
    sumOfSquares += (source[i] - mean) * (source[i] - mean);
  }

  let variance = sumOfSquares / (n - 1);

  return `분산: ${variance}`;
}

module.exports = variance