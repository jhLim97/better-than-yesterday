// - [x] counter의 초기값은 0이다.
// - [x] + 버튼을 클릭 시 count가 1증가한다.
// - [x] - 버튼을 클릭 시 count가 1감소한다.
// - [x] + 버튼을 클릭 시 count가 10이 넘는 경우 더이상 증가하지 못한다. (Max 값이 10)
// - [x] - 버튼을 클릭 시 count가 0보다 작아지는 경우 감소하지 못한다. (Min 값이 0)
// - [x] reset 버튼을 클릭 시 counter가 0으로 초기화된다.

describe("example counter app", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/js-counter-test/index.html");
  });

  it("최초에 카운터 값을 0으로 보여준다.", () => {
    cy.get("#value").invoke("text").should("eq", "0");
  });
});
