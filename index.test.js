const sut = require("./index");

test.each`
  source                            | expected
  ${["1", "2", "3", "4", "5", "6"]} | ${"분산: 3.5"}
  ${[]}                             | ${"입력된 데이터가 없습니다."}
  ${["1"]}                          | ${"데이터가 부족해 분산을 계산할 수 없습니다. 2개 이상의 데이터를 입력해 주세요."}
`('calc variance "$source" result is "$expected"', ({ source, expected }) => {
  const actual = sut(...source);
  expect(actual).toBe(expected);
});
