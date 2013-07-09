var qs = require("./qs").qs,
    assert = require("assert");

describe("qs", function() {

  describe("parse()", function() {

    it("should parse a single parameter", function() {
      assert.deepEqual(
        qs.parse("foo=bar"),
        {foo: "bar"}
      );
    });

    it("should parse different types of values", function() {
      assert.deepEqual(
        qs.parse("foo=1"),
        {foo: 1}
      );

      assert.deepEqual(
        qs.parse("foo=true"),
        {foo: true}
      );
    });

    it("should parse two parameters", function() {
      assert.deepEqual(
        qs.parse("foo=a&bar=b"),
        {foo: "a", bar: "b"}
      );
    });

  });

  describe("format()", function() {

    it("should format a single parameter", function() {
      assert.equal(
        qs.format({foo: "a"}),
        "foo=a"
      );
    });

    it("should format multiple parameters", function() {
      assert.equal(
        qs.format({foo: "a", bar: "b"}),
        "foo=a&bar=b"
      );
    });

  });

});
