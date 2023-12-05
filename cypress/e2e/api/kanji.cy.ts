describe("Kanji API Test", () => {
  it("should be able to search in English", () => {
    cy.request({
      method: "GET",
      url: "/api/kanji",
      qs: {
        lang: "en",
        search: "raccoon",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.characters).length.to.be.greaterThan(0);
    });
  });

  it("should be able to search in Japanese by Kanji", () => {
    cy.request({
      method: "GET",
      url: "/api/kanji",
      qs: {
        lang: "jp",
        search: "狸",
        by: "kanji",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.characters).length.to.be.greaterThan(0);
    });
  });

  it("should be able to search in Japanese by Kana", () => {
    cy.request({
      method: "GET",
      url: "/api/kanji",
      qs: {
        lang: "jp",
        search: "たぬき",
        by: "kana",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.characters).length.to.be.greaterThan(0);
    });
  });
});
