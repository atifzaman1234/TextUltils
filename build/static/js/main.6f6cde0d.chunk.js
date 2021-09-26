(this["webpackJsonptodos-list"] = this["webpackJsonptodos-list"] || []).push([
  [0],
  {
    22: function (e, t, a) {},
    29: function (e, t, a) {
      "use strict";
      a.r(t);
      var c = a(1),
        n = a.n(c),
        s = a(15),
        r = a.n(s),
        l = a(10),
        i = (a(22), a(8)),
        b = a(0),
        o = function (e) {
          var t = e.title,
            a = e.mode,
            c = e.btnMode,
            n = e.toggleMode;
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsx)("nav", {
              className: "navbar navbar-expand-lg navbar-"
                .concat(a, " bg-")
                .concat(a),
              style: { postion: "sticky" },
              children: Object(b.jsxs)("div", {
                className: "container-fluid",
                children: [
                  Object(b.jsx)(i.b, {
                    className: "navbar-brand",
                    to: "/",
                    children: t,
                  }),
                  Object(b.jsx)("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: Object(b.jsx)("span", {
                      className: "navbar-toggler-icon",
                    }),
                  }),
                  Object(b.jsxs)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: [
                      Object(b.jsxs)("ul", {
                        className: "navbar-nav me-auto mb-2 mb-lg-0",
                        children: [
                          Object(b.jsx)("li", {
                            className: "nav-item",
                            children: Object(b.jsx)(i.b, {
                              className: "nav-link",
                              "aria-current": "page",
                              to: "/",
                              children: "Home",
                            }),
                          }),
                          Object(b.jsx)("li", {
                            className: "nav-item",
                            children: Object(b.jsx)(i.b, {
                              className: "nav-link",
                              to: "/about",
                              children: "About",
                            }),
                          }),
                        ],
                      }),
                      Object(b.jsxs)("form", {
                        className: "d-flex",
                        children: [
                          Object(b.jsx)("input", {
                            className: "form-control me-2",
                            type: "search",
                            placeholder: "Search",
                            "aria-label": "Search",
                          }),
                          Object(b.jsx)("button", {
                            className: "btn btn-outline-".concat(c),
                            type: "submit",
                            children: "Search",
                          }),
                        ],
                      }),
                      Object(b.jsxs)("div", {
                        className: "form-check form-switch mx-3",
                        children: [
                          Object(b.jsx)("input", {
                            className: "form-check-input",
                            type: "checkbox",
                            id: "mode",
                            onClick: n,
                          }),
                          Object(b.jsx)("label", {
                            className: "form-check-label text-".concat(c),
                            htmlFor: "mode",
                            children: "Dark",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      function j() {
        var e = Object(c.useState)(),
          t = Object(l.a)(e, 2),
          a = t[0],
          n = t[1];
        return Object(b.jsx)(b.Fragment, {
          children: Object(b.jsxs)("div", {
            className: "container my-3",
            children: [
              Object(b.jsx)("h2", {
                className: "header my-3",
                children: "Enter text to analyze below:",
              }),
              Object(b.jsx)("div", {
                className: "mb-3",
                children: Object(b.jsx)("textarea", {
                  className: "form-control",
                  id: "textArea",
                  value: a,
                  rows: "8",
                  onChange: function (e) {
                    n(e.target.value);
                  },
                }),
              }),
              Object(b.jsx)("button", {
                type: "submit",
                onClick: function () {
                  var e = a.toUpperCase();
                  n(e);
                },
                className: "btn btn-sm btn-primary",
                children: "CONVERT TO UPPERCASE",
              }),
              Object(b.jsx)("button", {
                type: "submit",
                onClick: function () {
                  var e = a.toLowerCase();
                  n(e);
                },
                className: "btn btn-sm btn-outline-primary m-3 my-sm-2",
                children: "convert to lowercase",
              }),
              Object(b.jsx)("br", {}),
              Object(b.jsx)("button", {
                className: "btn btn-primary btn-sm mx-1",
                onClick: function () {
                  navigator.clipboard.writeText(a);
                },
                children: "Copy",
              }),
              Object(b.jsx)("button", {
                type: "submit",
                onClick: function () {
                  n("");
                },
                className: "btn btn-sm btn-primary m-3 my-sm-2",
                children: "Clear",
              }),
              Object(b.jsx)("br", {}),
              Object(b.jsx)("h3", {
                className: "my-4",
                children: "Your Text Summary",
              }),
              void 0 === a
                ? Object(b.jsxs)("div", {
                    children: [
                      Object(b.jsx)("p", { children: "Number of words: 0" }),
                      Object(b.jsx)("p", { children: "Number of letters: 0" }),
                    ],
                  })
                : Object(b.jsxs)("div", {
                    children: [
                      0 === a.length
                        ? Object(b.jsx)("p", { children: "Number of words: 0" })
                        : Object(b.jsxs)("p", {
                            children: [
                              "Number of words: ",
                              a.split(" ").length,
                            ],
                          }),
                      Object(b.jsxs)("p", {
                        children: ["Number of letters: ", a.length],
                      }),
                      0 === a.length
                        ? Object(b.jsx)("p", {
                            children:
                              "Time needed to read this paragraph: 0sec",
                          })
                        : Object(b.jsxs)("p", {
                            children: [
                              "Time needed to read this paragraph: ",
                              0.005 * a.split(" ").length,
                              "min",
                            ],
                          }),
                    ],
                  }),
              Object(b.jsxs)("div", {
                children: [
                  Object(b.jsx)("h4", { children: "Preview" }),
                  Object(b.jsx)("span", { children: a }),
                ],
              }),
            ],
          }),
        });
      }
      function d() {
        return Object(b.jsx)(b.Fragment, {
          children: Object(b.jsxs)("div", {
            className:
              "container bg-light border-1 border border-dark text-center",
            children: [
              "TextUtils is a free to use web app for analyzing text. This is an beginner project ",
              Object(b.jsx)("br", {}),
              "for learning React.",
            ],
          }),
        });
      }
      o.defaultProps = { title: "Forgot to set title" };
      var m = a(2);
      var h = function () {
        var e = Object(c.useState)("light"),
          t = Object(l.a)(e, 2),
          a = t[0],
          n = t[1],
          s = Object(c.useState)("dark"),
          r = Object(l.a)(s, 2),
          h = r[0],
          x = r[1];
        return Object(b.jsx)(b.Fragment, {
          children: Object(b.jsxs)(i.a, {
            children: [
              Object(b.jsx)(o, {
                title: "TextUtils",
                mode: a,
                btnMode: h,
                toggleMode: function () {
                  "dark" === a
                    ? (x("light"), n("dark"))
                    : (x("dark"), n("light"));
                },
              }),
              "\\",
              Object(b.jsxs)(m.c, {
                children: [
                  Object(b.jsx)(m.a, {
                    exact: !0,
                    path: "/about",
                    children: Object(b.jsx)(d, {}),
                  }),
                  Object(b.jsx)(m.a, {
                    exact: !0,
                    path: "/",
                    children: Object(b.jsx)(j, {}),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      r.a.render(
        Object(b.jsx)(n.a.StrictMode, { children: Object(b.jsx)(h, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[29, 1, 2]],
]);
//# sourceMappingURL=main.6f6cde0d.chunk.js.map
