"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/alpinejs@2.8.2/dist/alpine.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Alpine = t();
}(void 0, function () {
  "use strict";

  function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  function t(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function n(n) {
    for (var i = 1; i < arguments.length; i++) {
      var r = null != arguments[i] ? arguments[i] : {};
      i % 2 ? t(Object(r), !0).forEach(function (t) {
        e(n, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function (e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
      });
    }

    return n;
  }

  function i(e) {
    return Array.from(new Set(e));
  }

  function r() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }

  function s(e, t) {
    return e == t;
  }

  function o(e, t) {
    "template" !== e.tagName.toLowerCase() ? console.warn("Alpine: [".concat(t, "] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#").concat(t)) : 1 !== e.content.childElementCount && console.warn("Alpine: <template> tag with [".concat(t, "] encountered with an unexpected number of root elements. Make sure <template> has a single root element. "));
  }

  function a(e) {
    return e.toLowerCase().replace(/-(\w)/g, function (e, t) {
      return t.toUpperCase();
    });
  }

  function l(e, t) {
    if (!1 === t(e)) return;
    var n = e.firstElementChild;

    for (; n;) {
      l(n, t), n = n.nextElementSibling;
    }
  }

  function c(e, t) {
    var n;
    return function () {
      var i = this,
          r = arguments,
          s = function s() {
        n = null, e.apply(i, r);
      };

      clearTimeout(n), n = setTimeout(s, t);
    };
  }

  var u = function u(e, t, n) {
    if (console.warn("Alpine Error: \"".concat(n, "\"\n\nExpression: \"").concat(t, "\"\nElement:"), e), !r()) throw Object.assign(n, {
      el: e,
      expression: t
    }), n;
  };

  function d(e, _ref) {
    var t = _ref.el,
        n = _ref.expression;

    try {
      var _i = e();

      return _i instanceof Promise ? _i["catch"](function (e) {
        return u(t, n, e);
      }) : _i;
    } catch (e) {
      u(t, n, e);
    }
  }

  function f(e, t, n) {
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return d(function () {
      return "function" == typeof t ? t.call(n) : new Function(["$data"].concat(_toConsumableArray(Object.keys(i))), "var __alpine_result; with($data) { __alpine_result = ".concat(t, " }; return __alpine_result")).apply(void 0, [n].concat(_toConsumableArray(Object.values(i))));
    }, {
      el: e,
      expression: t
    });
  }

  var m = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;

  function p(e) {
    var t = y(e.name);
    return m.test(t);
  }

  function h(e, t, n) {
    var i = Array.from(e.attributes).filter(p).map(v),
        r = i.filter(function (e) {
      return "spread" === e.type;
    })[0];

    if (r) {
      var _n = f(e, r.expression, t.$data);

      i = i.concat(Object.entries(_n).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            e = _ref3[0],
            t = _ref3[1];

        return v({
          name: e,
          value: t
        });
      }));
    }

    return n ? i.filter(function (e) {
      return e.type === n;
    }) : function (e) {
      var t = ["bind", "model", "show", "catch-all"];
      return e.sort(function (e, n) {
        var i = -1 === t.indexOf(e.type) ? "catch-all" : e.type,
            r = -1 === t.indexOf(n.type) ? "catch-all" : n.type;
        return t.indexOf(i) - t.indexOf(r);
      });
    }(i);
  }

  function v(_ref4) {
    var e = _ref4.name,
        t = _ref4.value;
    var n = y(e),
        i = n.match(m),
        r = n.match(/:([a-zA-Z0-9\-:]+)/),
        s = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: i ? i[1] : null,
      value: r ? r[1] : null,
      modifiers: s.map(function (e) {
        return e.replace(".", "");
      }),
      expression: t
    };
  }

  function y(e) {
    return e.startsWith("@") ? e.replace("@", "x-on:") : e.startsWith(":") ? e.replace(":", "x-bind:") : e;
  }

  function b(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;
    return e.split(" ").filter(t);
  }

  var g = "in",
      x = "out",
      _ = "cancelled";

  function w(e, t, n, i) {
    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
    if (r) return t();
    if (e.__x_transition && e.__x_transition.type === g) return;
    var s = h(e, i, "transition"),
        o = h(e, i, "show")[0];

    if (o && o.modifiers.includes("transition")) {
      var _i2 = o.modifiers;
      if (_i2.includes("out") && !_i2.includes("in")) return t();

      var _r = _i2.includes("in") && _i2.includes("out");

      _i2 = _r ? _i2.filter(function (e, t) {
        return t < _i2.indexOf("out");
      }) : _i2, function (e, t, n, i) {
        var r = {
          duration: O(t, "duration", 150),
          origin: O(t, "origin", "center"),
          first: {
            opacity: 0,
            scale: O(t, "scale", 95)
          },
          second: {
            opacity: 1,
            scale: 100
          }
        };
        k(e, t, n, function () {}, i, r, g);
      }(e, _i2, t, n);
    } else s.some(function (e) {
      return ["enter", "enter-start", "enter-end"].includes(e.value);
    }) ? function (e, t, n, i, r) {
      var s = b(A((n.find(function (e) {
        return "enter" === e.value;
      }) || {
        expression: ""
      }).expression, e, t)),
          o = b(A((n.find(function (e) {
        return "enter-start" === e.value;
      }) || {
        expression: ""
      }).expression, e, t)),
          a = b(A((n.find(function (e) {
        return "enter-end" === e.value;
      }) || {
        expression: ""
      }).expression, e, t));
      S(e, s, o, a, i, function () {}, g, r);
    }(e, i, s, t, n) : t();
  }

  function E(e, t, n, i) {
    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
    if (r) return t();
    if (e.__x_transition && e.__x_transition.type === x) return;
    var s = h(e, i, "transition"),
        o = h(e, i, "show")[0];

    if (o && o.modifiers.includes("transition")) {
      var _i3 = o.modifiers;
      if (_i3.includes("in") && !_i3.includes("out")) return t();

      var _r2 = _i3.includes("in") && _i3.includes("out");

      _i3 = _r2 ? _i3.filter(function (e, t) {
        return t > _i3.indexOf("out");
      }) : _i3, function (e, t, n, i, r) {
        var s = {
          duration: n ? O(t, "duration", 150) : O(t, "duration", 150) / 2,
          origin: O(t, "origin", "center"),
          first: {
            opacity: 1,
            scale: 100
          },
          second: {
            opacity: 0,
            scale: O(t, "scale", 95)
          }
        };
        k(e, t, function () {}, i, r, s, x);
      }(e, _i3, _r2, t, n);
    } else s.some(function (e) {
      return ["leave", "leave-start", "leave-end"].includes(e.value);
    }) ? function (e, t, n, i, r) {
      var s = b(A((n.find(function (e) {
        return "leave" === e.value;
      }) || {
        expression: ""
      }).expression, e, t)),
          o = b(A((n.find(function (e) {
        return "leave-start" === e.value;
      }) || {
        expression: ""
      }).expression, e, t)),
          a = b(A((n.find(function (e) {
        return "leave-end" === e.value;
      }) || {
        expression: ""
      }).expression, e, t));
      S(e, s, o, a, function () {}, i, x, r);
    }(e, i, s, t, n) : t();
  }

  function O(e, t, n) {
    if (-1 === e.indexOf(t)) return n;
    var i = e[e.indexOf(t) + 1];
    if (!i) return n;
    if ("scale" === t && !P(i)) return n;

    if ("duration" === t) {
      var _e2 = i.match(/([0-9]+)ms/);

      if (_e2) return _e2[1];
    }

    return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [i, e[e.indexOf(t) + 2]].join(" ") : i;
  }

  function k(e, t, n, i, r, s, o) {
    e.__x_transition && e.__x_transition.cancel && e.__x_transition.cancel();
    var a = e.style.opacity,
        l = e.style.transform,
        c = e.style.transformOrigin,
        u = !t.includes("opacity") && !t.includes("scale"),
        d = u || t.includes("opacity"),
        f = u || t.includes("scale"),
        m = {
      start: function start() {
        d && (e.style.opacity = s.first.opacity), f && (e.style.transform = "scale(".concat(s.first.scale / 100, ")"));
      },
      during: function during() {
        f && (e.style.transformOrigin = s.origin), e.style.transitionProperty = [d ? "opacity" : "", f ? "transform" : ""].join(" ").trim(), e.style.transitionDuration = s.duration / 1e3 + "s", e.style.transitionTimingFunction = "cubic-bezier(0.4, 0.0, 0.2, 1)";
      },
      show: function show() {
        n();
      },
      end: function end() {
        d && (e.style.opacity = s.second.opacity), f && (e.style.transform = "scale(".concat(s.second.scale / 100, ")"));
      },
      hide: function hide() {
        i();
      },
      cleanup: function cleanup() {
        d && (e.style.opacity = a), f && (e.style.transform = l), f && (e.style.transformOrigin = c), e.style.transitionProperty = null, e.style.transitionDuration = null, e.style.transitionTimingFunction = null;
      }
    };
    $(e, m, o, r);
  }

  var A = function A(e, t, n) {
    return "function" == typeof e ? n.evaluateReturnExpression(t, e) : e;
  };

  function S(e, t, n, i, r, s, o, a) {
    e.__x_transition && e.__x_transition.cancel && e.__x_transition.cancel();
    var l = e.__x_original_classes || [],
        c = {
      start: function start() {
        var _e$classList;

        (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(n));
      },
      during: function during() {
        var _e$classList2;

        (_e$classList2 = e.classList).add.apply(_e$classList2, _toConsumableArray(t));
      },
      show: function show() {
        r();
      },
      end: function end() {
        var _e$classList3, _e$classList4;

        (_e$classList3 = e.classList).remove.apply(_e$classList3, _toConsumableArray(n.filter(function (e) {
          return !l.includes(e);
        }))), (_e$classList4 = e.classList).add.apply(_e$classList4, _toConsumableArray(i));
      },
      hide: function hide() {
        s();
      },
      cleanup: function cleanup() {
        var _e$classList5, _e$classList6;

        (_e$classList5 = e.classList).remove.apply(_e$classList5, _toConsumableArray(t.filter(function (e) {
          return !l.includes(e);
        }))), (_e$classList6 = e.classList).remove.apply(_e$classList6, _toConsumableArray(i.filter(function (e) {
          return !l.includes(e);
        })));
      }
    };
    $(e, c, o, a);
  }

  function $(e, t, n, i) {
    var r = C(function () {
      t.hide(), e.isConnected && t.cleanup(), delete e.__x_transition;
    });
    e.__x_transition = {
      type: n,
      cancel: C(function () {
        i(_), r();
      }),
      finish: r,
      nextFrame: null
    }, t.start(), t.during(), e.__x_transition.nextFrame = requestAnimationFrame(function () {
      var n = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", ""));
      0 === n && (n = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))), t.show(), e.__x_transition.nextFrame = requestAnimationFrame(function () {
        t.end(), setTimeout(e.__x_transition.finish, n);
      });
    });
  }

  function P(e) {
    return !Array.isArray(e) && !isNaN(e);
  }

  function C(e) {
    var t = !1;
    return function () {
      t || (t = !0, e.apply(this, arguments));
    };
  }

  function j(e, t, i, r, s) {
    o(t, "x-for");

    var a = D("function" == typeof i ? e.evaluateReturnExpression(t, i) : i),
        l = function (e, t, n, i) {
      var r = h(t, e, "if")[0];
      if (r && !e.evaluateReturnExpression(t, r.expression)) return [];
      var s = e.evaluateReturnExpression(t, n.items, i);
      P(s) && s >= 0 && (s = Array.from(Array(s).keys(), function (e) {
        return e + 1;
      }));
      return s;
    }(e, t, a, s),
        c = t;

    l.forEach(function (i, o) {
      var u = function (e, t, i, r, s) {
        var o = s ? n({}, s) : {};
        o[e.item] = t, e.index && (o[e.index] = i);
        e.collection && (o[e.collection] = r);
        return o;
      }(a, i, o, l, s()),
          d = function (e, t, n, i) {
        var r = h(t, e, "bind").filter(function (e) {
          return "key" === e.value;
        })[0];
        return r ? e.evaluateReturnExpression(t, r.expression, function () {
          return i;
        }) : n;
      }(e, t, o, u),
          f = function (e, t) {
        if (!e) return;
        if (void 0 === e.__x_for_key) return;
        if (e.__x_for_key === t) return e;
        var n = e;

        for (; n;) {
          if (n.__x_for_key === t) return n.parentElement.insertBefore(n, e);
          n = !(!n.nextElementSibling || void 0 === n.nextElementSibling.__x_for_key) && n.nextElementSibling;
        }
      }(c.nextElementSibling, d);

      f ? (delete f.__x_for_key, f.__x_for = u, e.updateElements(f, function () {
        return f.__x_for;
      })) : (f = function (e, t) {
        var n = document.importNode(e.content, !0);
        return t.parentElement.insertBefore(n, t.nextElementSibling), t.nextElementSibling;
      }(t, c), w(f, function () {}, function () {}, e, r), f.__x_for = u, e.initializeElements(f, function () {
        return f.__x_for;
      })), c = f, c.__x_for_key = d;
    }), function (e, t) {
      var n = !(!e.nextElementSibling || void 0 === e.nextElementSibling.__x_for_key) && e.nextElementSibling;

      var _loop = function _loop() {
        var e = n,
            i = n.nextElementSibling;
        E(n, function () {
          e.remove();
        }, function () {}, t), n = !(!i || void 0 === i.__x_for_key) && i;
      };

      for (; n;) {
        _loop();
      }
    }(c, e);
  }

  function D(e) {
    var t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        n = String(e).match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);
    if (!n) return;
    var i = {};
    i.items = n[2].trim();
    var r = n[1].trim().replace(/^\(|\)$/g, ""),
        s = r.match(t);
    return s ? (i.item = r.replace(t, "").trim(), i.index = s[1].trim(), s[2] && (i.collection = s[2].trim())) : i.item = r, i;
  }

  function T(e, t, n, r, o, l, c) {
    var u = e.evaluateReturnExpression(t, r, o);

    if ("value" === n) {
      if (ge.ignoreFocusedForValueBinding && document.activeElement.isSameNode(t)) return;
      if (void 0 === u && String(r).match(/\./) && (u = ""), "radio" === t.type) void 0 === t.attributes.value && "bind" === l ? t.value = u : "bind" !== l && (t.checked = s(t.value, u));else if ("checkbox" === t.type) "boolean" == typeof u || [null, void 0].includes(u) || "bind" !== l ? "bind" !== l && (Array.isArray(u) ? t.checked = u.some(function (e) {
        return s(e, t.value);
      }) : t.checked = !!u) : t.value = String(u);else if ("SELECT" === t.tagName) !function (e, t) {
        var n = [].concat(t).map(function (e) {
          return e + "";
        });
        Array.from(e.options).forEach(function (e) {
          e.selected = n.includes(e.value || e.text);
        });
      }(t, u);else {
        if (t.value === u) return;
        t.value = u;
      }
    } else if ("class" === n) {
      if (Array.isArray(u)) {
        var _e3 = t.__x_original_classes || [];

        t.setAttribute("class", i(_e3.concat(u)).join(" "));
      } else if ("object" == _typeof(u)) {
        Object.keys(u).sort(function (e, t) {
          return u[e] - u[t];
        }).forEach(function (e) {
          u[e] ? b(e).forEach(function (e) {
            return t.classList.add(e);
          }) : b(e).forEach(function (e) {
            return t.classList.remove(e);
          });
        });
      } else {
        var _e4 = t.__x_original_classes || [],
            _n2 = u ? b(u) : [];

        t.setAttribute("class", i(_e4.concat(_n2)).join(" "));
      }
    } else n = c.includes("camel") ? a(n) : n, [null, void 0, !1].includes(u) ? t.removeAttribute(n) : !function (e) {
      return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e);
    }(n) ? L(t, n, u) : L(t, n, n);
  }

  function L(e, t, n) {
    e.getAttribute(t) != n && e.setAttribute(t, n);
  }

  function N(e, t, n, i, r) {
    var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var o = {
      passive: i.includes("passive")
    };

    var _l2, u;

    if (i.includes("camel") && (n = a(n)), i.includes("away") ? (u = document, _l2 = function l(a) {
      t.contains(a.target) || t.offsetWidth < 1 && t.offsetHeight < 1 || (z(e, r, a, s), i.includes("once") && document.removeEventListener(n, _l2, o));
    }) : (u = i.includes("window") ? window : i.includes("document") ? document : t, _l2 = function _l(a) {
      if (u !== window && u !== document || document.body.contains(t)) {
        if (!(function (e) {
          return ["keydown", "keyup"].includes(e);
        }(n) && function (e, t) {
          var n = t.filter(function (e) {
            return !["window", "document", "prevent", "stop"].includes(e);
          });

          if (n.includes("debounce")) {
            var _e5 = n.indexOf("debounce");

            n.splice(_e5, P((n[_e5 + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
          }

          if (0 === n.length) return !1;
          if (1 === n.length && n[0] === R(e.key)) return !1;
          var i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(function (e) {
            return n.includes(e);
          });

          if (n = n.filter(function (e) {
            return !i.includes(e);
          }), i.length > 0) {
            if (i.filter(function (t) {
              return "cmd" !== t && "super" !== t || (t = "meta"), e[t + "Key"];
            }).length === i.length && n[0] === R(e.key)) return !1;
          }

          return !0;
        }(a, i) || (i.includes("prevent") && a.preventDefault(), i.includes("stop") && a.stopPropagation(), i.includes("self") && a.target !== t))) {
          z(e, r, a, s).then(function (e) {
            !1 === e ? a.preventDefault() : i.includes("once") && u.removeEventListener(n, _l2, o);
          });
        }
      } else u.removeEventListener(n, _l2, o);
    }), i.includes("debounce")) {
      var _e6 = i[i.indexOf("debounce") + 1] || "invalid-wait",
          _t = P(_e6.split("ms")[0]) ? Number(_e6.split("ms")[0]) : 250;

      _l2 = c(_l2, _t);
    }

    u.addEventListener(n, _l2, o);
  }

  function z(e, t, i, r) {
    return e.evaluateCommandExpression(i.target, t, function () {
      return n(n({}, r()), {}, {
        $event: i
      });
    });
  }

  function R(e) {
    switch (e) {
      case "/":
        return "slash";

      case " ":
      case "Spacebar":
        return "space";

      default:
        return e && e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
    }
  }

  function F(e, t, n) {
    return "radio" === e.type && (e.hasAttribute("name") || e.setAttribute("name", n)), function (n, i) {
      if (n instanceof CustomEvent && n.detail) return n.detail;

      if ("checkbox" === e.type) {
        if (Array.isArray(i)) {
          var _e7 = t.includes("number") ? I(n.target.value) : n.target.value;

          return n.target.checked ? i.concat([_e7]) : i.filter(function (t) {
            return !s(t, _e7);
          });
        }

        return n.target.checked;
      }

      if ("select" === e.tagName.toLowerCase() && e.multiple) return t.includes("number") ? Array.from(n.target.selectedOptions).map(function (e) {
        return I(e.value || e.text);
      }) : Array.from(n.target.selectedOptions).map(function (e) {
        return e.value || e.text;
      });
      {
        var _e8 = n.target.value;
        return t.includes("number") ? I(_e8) : t.includes("trim") ? _e8.trim() : _e8;
      }
    };
  }

  function I(e) {
    var t = e ? parseFloat(e) : null;
    return P(t) ? t : e;
  }

  var M = Array.isArray,
      B = Object.getPrototypeOf,
      q = Object.create,
      U = Object.defineProperty,
      W = Object.defineProperties,
      K = Object.isExtensible,
      G = Object.getOwnPropertyDescriptor,
      H = Object.getOwnPropertyNames,
      V = Object.getOwnPropertySymbols,
      Z = Object.preventExtensions,
      J = Object.hasOwnProperty,
      _Array$prototype = Array.prototype,
      Q = _Array$prototype.push,
      X = _Array$prototype.concat,
      Y = _Array$prototype.map;

  function ee(e) {
    return void 0 === e;
  }

  function te(e) {
    return "function" == typeof e;
  }

  var ne = new WeakMap();

  function ie(e, t) {
    ne.set(e, t);
  }

  var re = function re(e) {
    return ne.get(e) || e;
  };

  function se(e, t) {
    return e.valueIsObservable(t) ? e.getProxy(t) : t;
  }

  function oe(e, t, n) {
    X.call(H(n), V(n)).forEach(function (i) {
      var r = G(n, i);
      r.configurable || (r = ve(e, r, se)), U(t, i, r);
    }), Z(t);
  }

  var ae =
  /*#__PURE__*/
  function () {
    function ae(e, t) {
      _classCallCheck(this, ae);

      this.originalTarget = t, this.membrane = e;
    }

    _createClass(ae, [{
      key: "get",
      value: function get(e, t) {
        var n = this.originalTarget,
            i = this.membrane,
            r = n[t],
            s = i.valueObserved;
        return s(n, t), i.getProxy(r);
      }
    }, {
      key: "set",
      value: function set(e, t, n) {
        var i = this.originalTarget,
            r = this.membrane.valueMutated;
        return i[t] !== n ? (i[t] = n, r(i, t)) : "length" === t && M(i) && r(i, t), !0;
      }
    }, {
      key: "deleteProperty",
      value: function deleteProperty(e, t) {
        var n = this.originalTarget,
            i = this.membrane.valueMutated;
        return delete n[t], i(n, t), !0;
      }
    }, {
      key: "apply",
      value: function apply(e, t, n) {}
    }, {
      key: "construct",
      value: function construct(e, t, n) {}
    }, {
      key: "has",
      value: function has(e, t) {
        var n = this.originalTarget,
            i = this.membrane.valueObserved;
        return i(n, t), t in n;
      }
    }, {
      key: "ownKeys",
      value: function ownKeys(e) {
        var t = this.originalTarget;
        return X.call(H(t), V(t));
      }
    }, {
      key: "isExtensible",
      value: function isExtensible(e) {
        var t = K(e);
        if (!t) return t;
        var n = this.originalTarget,
            i = this.membrane,
            r = K(n);
        return r || oe(i, e, n), r;
      }
    }, {
      key: "setPrototypeOf",
      value: function setPrototypeOf(e, t) {}
    }, {
      key: "getPrototypeOf",
      value: function getPrototypeOf(e) {
        var t = this.originalTarget;
        return B(t);
      }
    }, {
      key: "getOwnPropertyDescriptor",
      value: function getOwnPropertyDescriptor(e, t) {
        var n = this.originalTarget,
            i = this.membrane,
            r = this.membrane.valueObserved;
        r(n, t);
        var s = G(n, t);
        if (ee(s)) return s;
        var o = G(e, t);
        return ee(o) ? (s = ve(i, s, se), s.configurable || U(e, t, s), s) : o;
      }
    }, {
      key: "preventExtensions",
      value: function preventExtensions(e) {
        var t = this.originalTarget,
            n = this.membrane;
        return oe(n, e, t), Z(t), !0;
      }
    }, {
      key: "defineProperty",
      value: function defineProperty(e, t, n) {
        var i = this.originalTarget,
            r = this.membrane,
            s = r.valueMutated,
            o = n.configurable;

        if (J.call(n, "writable") && !J.call(n, "value")) {
          var _e9 = G(i, t);

          n.value = _e9.value;
        }

        return U(i, t, function (e) {
          return J.call(e, "value") && (e.value = re(e.value)), e;
        }(n)), !1 === o && U(e, t, ve(r, n, se)), s(i, t), !0;
      }
    }]);

    return ae;
  }();

  function le(e, t) {
    return e.valueIsObservable(t) ? e.getReadOnlyProxy(t) : t;
  }

  var ce =
  /*#__PURE__*/
  function () {
    function ce(e, t) {
      _classCallCheck(this, ce);

      this.originalTarget = t, this.membrane = e;
    }

    _createClass(ce, [{
      key: "get",
      value: function get(e, t) {
        var n = this.membrane,
            i = this.originalTarget,
            r = i[t],
            s = n.valueObserved;
        return s(i, t), n.getReadOnlyProxy(r);
      }
    }, {
      key: "set",
      value: function set(e, t, n) {
        return !1;
      }
    }, {
      key: "deleteProperty",
      value: function deleteProperty(e, t) {
        return !1;
      }
    }, {
      key: "apply",
      value: function apply(e, t, n) {}
    }, {
      key: "construct",
      value: function construct(e, t, n) {}
    }, {
      key: "has",
      value: function has(e, t) {
        var n = this.originalTarget,
            i = this.membrane.valueObserved;
        return i(n, t), t in n;
      }
    }, {
      key: "ownKeys",
      value: function ownKeys(e) {
        var t = this.originalTarget;
        return X.call(H(t), V(t));
      }
    }, {
      key: "setPrototypeOf",
      value: function setPrototypeOf(e, t) {}
    }, {
      key: "getOwnPropertyDescriptor",
      value: function getOwnPropertyDescriptor(e, t) {
        var n = this.originalTarget,
            i = this.membrane,
            r = i.valueObserved;
        r(n, t);
        var s = G(n, t);
        if (ee(s)) return s;
        var o = G(e, t);
        return ee(o) ? (s = ve(i, s, le), J.call(s, "set") && (s.set = void 0), s.configurable || U(e, t, s), s) : o;
      }
    }, {
      key: "preventExtensions",
      value: function preventExtensions(e) {
        return !1;
      }
    }, {
      key: "defineProperty",
      value: function defineProperty(e, t, n) {
        return !1;
      }
    }]);

    return ce;
  }();

  function ue(e) {
    var t = void 0;
    return M(e) ? t = [] : "object" == _typeof(e) && (t = {}), t;
  }

  var de = Object.prototype;

  function fe(e) {
    if (null === e) return !1;
    if ("object" != _typeof(e)) return !1;
    if (M(e)) return !0;
    var t = B(e);
    return t === de || null === t || null === B(t);
  }

  var me = function me(e, t) {},
      pe = function pe(e, t) {},
      he = function he(e) {
    return e;
  };

  function ve(e, t, n) {
    var i = t.set,
        r = t.get;
    return J.call(t, "value") ? t.value = n(e, t.value) : (ee(r) || (t.get = function () {
      return n(e, r.call(re(this)));
    }), ee(i) || (t.set = function (t) {
      i.call(re(this), e.unwrapProxy(t));
    })), t;
  }

  var ye =
  /*#__PURE__*/
  function () {
    function ye(e) {
      _classCallCheck(this, ye);

      if (this.valueDistortion = he, this.valueMutated = pe, this.valueObserved = me, this.valueIsObservable = fe, this.objectGraph = new WeakMap(), !ee(e)) {
        var _t2 = e.valueDistortion,
            _n3 = e.valueMutated,
            _i4 = e.valueObserved,
            _r3 = e.valueIsObservable;
        this.valueDistortion = te(_t2) ? _t2 : he, this.valueMutated = te(_n3) ? _n3 : pe, this.valueObserved = te(_i4) ? _i4 : me, this.valueIsObservable = te(_r3) ? _r3 : fe;
      }
    }

    _createClass(ye, [{
      key: "getProxy",
      value: function getProxy(e) {
        var t = re(e),
            n = this.valueDistortion(t);

        if (this.valueIsObservable(n)) {
          var _i5 = this.getReactiveState(t, n);

          return _i5.readOnly === e ? e : _i5.reactive;
        }

        return n;
      }
    }, {
      key: "getReadOnlyProxy",
      value: function getReadOnlyProxy(e) {
        e = re(e);
        var t = this.valueDistortion(e);
        return this.valueIsObservable(t) ? this.getReactiveState(e, t).readOnly : t;
      }
    }, {
      key: "unwrapProxy",
      value: function unwrapProxy(e) {
        return re(e);
      }
    }, {
      key: "getReactiveState",
      value: function getReactiveState(e, t) {
        var n = this.objectGraph;
        var i = n.get(t);
        if (i) return i;
        var r = this;
        return i = {
          get reactive() {
            var n = new ae(r, t),
                i = new Proxy(ue(t), n);
            return ie(i, e), U(this, "reactive", {
              value: i
            }), i;
          },

          get readOnly() {
            var n = new ce(r, t),
                i = new Proxy(ue(t), n);
            return ie(i, e), U(this, "readOnly", {
              value: i
            }), i;
          }

        }, n.set(t, i), i;
      }
    }]);

    return ye;
  }();

  var be =
  /*#__PURE__*/
  function () {
    function be(e) {
      var _this = this;

      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, be);

      this.$el = e;
      var n = this.$el.getAttribute("x-data"),
          i = "" === n ? "{}" : n,
          r = this.$el.getAttribute("x-init");
      var s = {
        $el: this.$el
      },
          o = t ? t.$el : this.$el;
      Object.entries(ge.magicProperties).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            e = _ref6[0],
            t = _ref6[1];

        Object.defineProperty(s, "$" + e, {
          get: function get() {
            return t(o);
          }
        });
      }), this.unobservedData = t ? t.getUnobservedData() : f(e, i, s);

      var _this$wrapDataInObser = this.wrapDataInObservable(this.unobservedData),
          a = _this$wrapDataInObser.membrane,
          l = _this$wrapDataInObser.data;

      var c;
      this.$data = l, this.membrane = a, this.unobservedData.$el = this.$el, this.unobservedData.$refs = this.getRefsProxy(), this.nextTickStack = [], this.unobservedData.$nextTick = function (e) {
        _this.nextTickStack.push(e);
      }, this.watchers = {}, this.unobservedData.$watch = function (e, t) {
        _this.watchers[e] || (_this.watchers[e] = []), _this.watchers[e].push(t);
      }, Object.entries(ge.magicProperties).forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            e = _ref8[0],
            t = _ref8[1];

        Object.defineProperty(_this.unobservedData, "$" + e, {
          get: function get() {
            return t(o, this.$el);
          }
        });
      }), this.showDirectiveStack = [], this.showDirectiveLastElement, t || ge.onBeforeComponentInitializeds.forEach(function (e) {
        return e(_this);
      }), r && !t && (this.pauseReactivity = !0, c = this.evaluateReturnExpression(this.$el, r), this.pauseReactivity = !1), this.initializeElements(this.$el, function () {}, t), this.listenForNewElementsToInitialize(), "function" == typeof c && c.call(this.$data), t || setTimeout(function () {
        ge.onComponentInitializeds.forEach(function (e) {
          return e(_this);
        });
      }, 0);
    }

    _createClass(be, [{
      key: "getUnobservedData",
      value: function getUnobservedData() {
        return function (e, t) {
          var n = e.unwrapProxy(t),
              i = {};
          return Object.keys(n).forEach(function (e) {
            ["$el", "$refs", "$nextTick", "$watch"].includes(e) || (i[e] = n[e]);
          }), i;
        }(this.membrane, this.$data);
      }
    }, {
      key: "wrapDataInObservable",
      value: function wrapDataInObservable(e) {
        var t = this;
        var n = c(function () {
          t.updateElements(t.$el);
        }, 0);
        return function (e, t) {
          var n = new ye({
            valueMutated: function valueMutated(e, n) {
              t(e, n);
            }
          });
          return {
            data: n.getProxy(e),
            membrane: n
          };
        }(e, function (e, i) {
          t.watchers[i] ? t.watchers[i].forEach(function (t) {
            return t(e[i]);
          }) : Array.isArray(e) ? Object.keys(t.watchers).forEach(function (n) {
            var r = n.split(".");
            "length" !== i && r.reduce(function (i, r) {
              return Object.is(e, i[r]) && t.watchers[n].forEach(function (t) {
                return t(e);
              }), i[r];
            }, t.unobservedData);
          }) : Object.keys(t.watchers).filter(function (e) {
            return e.includes(".");
          }).forEach(function (n) {
            var r = n.split(".");
            i === r[r.length - 1] && r.reduce(function (r, s) {
              return Object.is(e, r) && t.watchers[n].forEach(function (t) {
                return t(e[i]);
              }), r[s];
            }, t.unobservedData);
          }), t.pauseReactivity || n();
        });
      }
    }, {
      key: "walkAndSkipNestedComponents",
      value: function walkAndSkipNestedComponents(e, t) {
        var _this2 = this;

        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        l(e, function (e) {
          return e.hasAttribute("x-data") && !e.isSameNode(_this2.$el) ? (e.__x || n(e), !1) : t(e);
        });
      }
    }, {
      key: "initializeElements",
      value: function initializeElements(e) {
        var _this3 = this;

        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        this.walkAndSkipNestedComponents(e, function (e) {
          return void 0 === e.__x_for_key && void 0 === e.__x_inserted_me && void _this3.initializeElement(e, t, !n);
        }, function (e) {
          n || (e.__x = new be(e));
        }), this.executeAndClearRemainingShowDirectiveStack(), this.executeAndClearNextTickStack(e);
      }
    }, {
      key: "initializeElement",
      value: function initializeElement(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        e.hasAttribute("class") && h(e, this).length > 0 && (e.__x_original_classes = b(e.getAttribute("class"))), n && this.registerListeners(e, t), this.resolveBoundAttributes(e, !0, t);
      }
    }, {
      key: "updateElements",
      value: function updateElements(e) {
        var _this4 = this;

        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        this.walkAndSkipNestedComponents(e, function (e) {
          if (void 0 !== e.__x_for_key && !e.isSameNode(_this4.$el)) return !1;

          _this4.updateElement(e, t);
        }, function (e) {
          e.__x = new be(e);
        }), this.executeAndClearRemainingShowDirectiveStack(), this.executeAndClearNextTickStack(e);
      }
    }, {
      key: "executeAndClearNextTickStack",
      value: function executeAndClearNextTickStack(e) {
        var _this5 = this;

        e === this.$el && this.nextTickStack.length > 0 && requestAnimationFrame(function () {
          for (; _this5.nextTickStack.length > 0;) {
            _this5.nextTickStack.shift()();
          }
        });
      }
    }, {
      key: "executeAndClearRemainingShowDirectiveStack",
      value: function executeAndClearRemainingShowDirectiveStack() {
        this.showDirectiveStack.reverse().map(function (e) {
          return new Promise(function (t, n) {
            e(t, n);
          });
        }).reduce(function (e, t) {
          return e.then(function () {
            return t.then(function (e) {
              e();
            });
          });
        }, Promise.resolve(function () {}))["catch"](function (e) {
          if (e !== _) throw e;
        }), this.showDirectiveStack = [], this.showDirectiveLastElement = void 0;
      }
    }, {
      key: "updateElement",
      value: function updateElement(e, t) {
        this.resolveBoundAttributes(e, !1, t);
      }
    }, {
      key: "registerListeners",
      value: function registerListeners(e, t) {
        var _this6 = this;

        h(e, this).forEach(function (_ref9) {
          var i = _ref9.type,
              r = _ref9.value,
              s = _ref9.modifiers,
              o = _ref9.expression;

          switch (i) {
            case "on":
              N(_this6, e, r, s, o, t);
              break;

            case "model":
              !function (e, t, i, r, s) {
                var o = "select" === t.tagName.toLowerCase() || ["checkbox", "radio"].includes(t.type) || i.includes("lazy") ? "change" : "input";
                N(e, t, o, i, "".concat(r, " = rightSideOfExpression($event, ").concat(r, ")"), function () {
                  return n(n({}, s()), {}, {
                    rightSideOfExpression: F(t, i, r)
                  });
                });
              }(_this6, e, s, o, t);
          }
        });
      }
    }, {
      key: "resolveBoundAttributes",
      value: function resolveBoundAttributes(e) {
        var _this7 = this;

        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var n = arguments.length > 2 ? arguments[2] : undefined;
        var i = h(e, this);
        i.forEach(function (_ref10) {
          var r = _ref10.type,
              s = _ref10.value,
              a = _ref10.modifiers,
              l = _ref10.expression;

          switch (r) {
            case "model":
              T(_this7, e, "value", l, n, r, a);
              break;

            case "bind":
              if ("template" === e.tagName.toLowerCase() && "key" === s) return;
              T(_this7, e, s, l, n, r, a);
              break;

            case "text":
              var c = _this7.evaluateReturnExpression(e, l, n);

              !function (e, t, n) {
                void 0 === t && String(n).match(/\./) && (t = ""), e.textContent = t;
              }(e, c, l);
              break;

            case "html":
              !function (e, t, n, i) {
                t.innerHTML = e.evaluateReturnExpression(t, n, i);
              }(_this7, e, l, n);
              break;

            case "show":
              c = _this7.evaluateReturnExpression(e, l, n);
              !function (e, t, n, i) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;

                var s = function s() {
                  t.style.display = "none", t.__x_is_shown = !1;
                },
                    o = function o() {
                  1 === t.style.length && "none" === t.style.display ? t.removeAttribute("style") : t.style.removeProperty("display"), t.__x_is_shown = !0;
                };

                if (!0 === r) return void (n ? o() : s());

                var a = function a(i, r) {
                  n ? (("none" === t.style.display || t.__x_transition) && w(t, function () {
                    o();
                  }, r, e), i(function () {})) : "none" !== t.style.display ? E(t, function () {
                    i(function () {
                      s();
                    });
                  }, r, e) : i(function () {});
                };

                i.includes("immediate") ? a(function (e) {
                  return e();
                }, function () {}) : (e.showDirectiveLastElement && !e.showDirectiveLastElement.contains(t) && e.executeAndClearRemainingShowDirectiveStack(), e.showDirectiveStack.push(a), e.showDirectiveLastElement = t);
              }(_this7, e, c, a, t);
              break;

            case "if":
              if (i.some(function (e) {
                return "for" === e.type;
              })) return;
              c = _this7.evaluateReturnExpression(e, l, n);
              !function (e, t, n, i, r) {
                o(t, "x-if");
                var s = t.nextElementSibling && !0 === t.nextElementSibling.__x_inserted_me;
                if (!n || s && !t.__x_transition) !n && s && E(t.nextElementSibling, function () {
                  t.nextElementSibling.remove();
                }, function () {}, e, i);else {
                  var _n4 = document.importNode(t.content, !0);

                  t.parentElement.insertBefore(_n4, t.nextElementSibling), w(t.nextElementSibling, function () {}, function () {}, e, i), e.initializeElements(t.nextElementSibling, r), t.nextElementSibling.__x_inserted_me = !0;
                }
              }(_this7, e, c, t, n);
              break;

            case "for":
              j(_this7, e, l, t, n);
              break;

            case "cloak":
              e.removeAttribute("x-cloak");
          }
        });
      }
    }, {
      key: "evaluateReturnExpression",
      value: function evaluateReturnExpression(e, t) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        return f(e, t, this.$data, n(n({}, i()), {}, {
          $dispatch: this.getDispatchFunction(e)
        }));
      }
    }, {
      key: "evaluateCommandExpression",
      value: function evaluateCommandExpression(e, t) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        return function (e, t, n) {
          var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          return d(function () {
            if ("function" == typeof t) return Promise.resolve(t.call(n, i.$event));
            var e = Function;

            if (e = Object.getPrototypeOf(function _callee() {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            }).constructor, Object.keys(n).includes(t)) {
              var _e10 = new Function(["dataContext"].concat(_toConsumableArray(Object.keys(i))), "with(dataContext) { return ".concat(t, " }")).apply(void 0, [n].concat(_toConsumableArray(Object.values(i))));

              return "function" == typeof _e10 ? Promise.resolve(_e10.call(n, i.$event)) : Promise.resolve();
            }

            return Promise.resolve(new e(["dataContext"].concat(_toConsumableArray(Object.keys(i))), "with(dataContext) { ".concat(t, " }")).apply(void 0, [n].concat(_toConsumableArray(Object.values(i)))));
          }, {
            el: e,
            expression: t
          });
        }(e, t, this.$data, n(n({}, i()), {}, {
          $dispatch: this.getDispatchFunction(e)
        }));
      }
    }, {
      key: "getDispatchFunction",
      value: function getDispatchFunction(e) {
        return function (t) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          e.dispatchEvent(new CustomEvent(t, {
            detail: n,
            bubbles: !0
          }));
        };
      }
    }, {
      key: "listenForNewElementsToInitialize",
      value: function listenForNewElementsToInitialize() {
        var _this8 = this;

        var e = this.$el;
        new MutationObserver(function (e) {
          for (var _t3 = 0; _t3 < e.length; _t3++) {
            var _n5 = e[_t3].target.closest("[x-data]");

            if (_n5 && _n5.isSameNode(_this8.$el)) {
              if ("attributes" === e[_t3].type && "x-data" === e[_t3].attributeName) {
                (function () {
                  var n = e[_t3].target.getAttribute("x-data") || "{}",
                      i = f(_this8.$el, n, {
                    $el: _this8.$el
                  });
                  Object.keys(i).forEach(function (e) {
                    _this8.$data[e] !== i[e] && (_this8.$data[e] = i[e]);
                  });
                })();
              }

              e[_t3].addedNodes.length > 0 && e[_t3].addedNodes.forEach(function (e) {
                1 !== e.nodeType || e.__x_inserted_me || (!e.matches("[x-data]") || e.__x ? _this8.initializeElements(e) : e.__x = new be(e));
              });
            }
          }
        }).observe(e, {
          childList: !0,
          attributes: !0,
          subtree: !0
        });
      }
    }, {
      key: "getRefsProxy",
      value: function getRefsProxy() {
        var e = this;
        return new Proxy({}, {
          get: function get(t, n) {
            return "$isAlpineProxy" === n || (e.walkAndSkipNestedComponents(e.$el, function (e) {
              e.hasAttribute("x-ref") && e.getAttribute("x-ref") === n && (i = e);
            }), i);
            var i;
          }
        });
      }
    }]);

    return be;
  }();

  var ge = {
    version: "2.8.2",
    pauseMutationObserver: !1,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: !1,
    start: function start() {
      var _this9 = this;

      return regeneratorRuntime.async(function start$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = r();

              if (_context2.t0) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return regeneratorRuntime.awrap(new Promise(function (e) {
                "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", e) : e();
              }));

            case 4:
              this.discoverComponents(function (e) {
                _this9.initializeComponent(e);
              });
              document.addEventListener("turbolinks:load", function () {
                _this9.discoverUninitializedComponents(function (e) {
                  _this9.initializeComponent(e);
                });
              });
              this.listenForNewUninitializedComponentsAtRunTime();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    discoverComponents: function discoverComponents(e) {
      document.querySelectorAll("[x-data]").forEach(function (t) {
        e(t);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var n = (t || document).querySelectorAll("[x-data]");
      Array.from(n).filter(function (e) {
        return void 0 === e.__x;
      }).forEach(function (t) {
        e(t);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime() {
      var _this10 = this;

      var e = document.querySelector("body");
      new MutationObserver(function (e) {
        if (!_this10.pauseMutationObserver) for (var _t4 = 0; _t4 < e.length; _t4++) {
          e[_t4].addedNodes.length > 0 && e[_t4].addedNodes.forEach(function (e) {
            1 === e.nodeType && (e.parentElement && e.parentElement.closest("[x-data]") || _this10.discoverUninitializedComponents(function (e) {
              _this10.initializeComponent(e);
            }, e.parentElement));
          });
        }
      }).observe(e, {
        childList: !0,
        attributes: !0,
        subtree: !0
      });
    },
    initializeComponent: function initializeComponent(e) {
      if (!e.__x) try {
        e.__x = new be(e);
      } catch (e) {
        setTimeout(function () {
          throw e;
        }, 0);
      }
    },
    clone: function clone(e, t) {
      t.__x || (t.__x = new be(t, e));
    },
    addMagicProperty: function addMagicProperty(e, t) {
      this.magicProperties[e] = t;
    },
    onComponentInitialized: function onComponentInitialized(e) {
      this.onComponentInitializeds.push(e);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(e) {
      this.onBeforeComponentInitializeds.push(e);
    }
  };
  return r() || (window.Alpine = ge, window.deferLoadingAlpine ? window.deferLoadingAlpine(function () {
    window.Alpine.start();
  }) : window.Alpine.start()), ge;
});