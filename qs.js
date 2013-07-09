(function(exports) {

  /**
   * Query string parse and format
   */
  exports.qs = {
    version: "0.0.1",

    // querystring.parse("?foo=a&baz=1") -> {foo: "a", baz: 1}
    parse: function(str) {
      if (str.charAt(0) === "?") {
        str = str.substr(1);
      }

      var query = {};
      str.split("&").forEach(function(bit) {
        var parts = bit.split("=", 2),
            key = decodeURIComponent(parts[0]),
            value = parts.length > 1
              ? decodeURIComponent(parts[1])
              : true;
        switch (value) {
          case "true":
            value = true;
            break;
          case "false":
            value = false;
            break;
          case "":
            break;
          default:
            var num = +value;
            if (!isNaN(num)) value = num;
        }
        query[key] = value;
      });

      return query;
    },

    // querystring.format({foo: "a", baz: 1}) -> "?foo=a&baz=1"
    format: function(obj, sortKeys) {
      var entries = [];
      for (var key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] !== "function" && typeof obj[key] !== "undefined") {
          entries.push({key: key, value: obj[key]});
        }
      }
      if (sortKeys) {
        entries.sort(function(a, b) {
          return a.key > b.key ? 1 : a.key < b.key ? -1 : 0;
        });
      }
      return entries.length
        ? entries.map(function(e) {
            return [encodeURIComponent(e.key), encodeURIComponent(e.value)].join("=");
          }).join("&")
        : "";
    }
  };

})(this);
