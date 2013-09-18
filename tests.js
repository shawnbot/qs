var qs = require("./qs"),
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

    it("should parse + as space", function() {
      assert.deepEqual(
        qs.parse("foo=bar+baz"),
        {foo: "bar baz"}
      );
      assert.deepEqual(
        qs.parse("foo+bar=baz"),
        {"foo bar": "baz"}
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

    it("should encode spaces as +", function() {
      assert.equal(
        qs.format({foo: "bar baz"}),
        "foo=bar+baz"
      );
      assert.equal(
        qs.format({"foo bar": "baz"}),
        "foo+bar=baz"
      );
    });

    it("shouldn't touch commas", function() {
      assert.equal(
        qs.format({foo: "bar, baz"}),
        "foo=bar,+baz"
      );
      assert.equal(
        qs.format({foo: [1, 2, 3]}),
        "foo=1,2,3"
      );
    });

  });

});
