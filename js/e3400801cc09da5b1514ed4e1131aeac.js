!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  ,
  function (e, t, n) {
    "use strict";
    n(2), window.glbDebug.logTick("onBaseDefault");
  },
  function (e, t, n) {},
]);
/*! For license information please see web.js.LICENSE.txt */
(() => {
  var e = {
      723: () => {
        globalThis.cdaaas.helpers.urlCanonical = (e) => {
          var t = e || window,
            i = t.document.querySelector("link[rel=canonical]");
          return i ? i.getAttribute("href") : t.location.href;
        };
      },
      295: () => {
        var e = (e) => {
          window.trackerBuilder &&
            window
              .trackerBuilder()
              .addGA4()
              .addUA({ sender: "push" })
              .build()
              .push(e);
        };
        document.addEventListener(
          "DOMContentLoaded",
          function () {
            var t, i;
            (t = function () {
              !(function (t, i) {
                "use strict";
                var n = i(t);
                (t._gaq = t._gaq || []),
                  (t.glb = t.glb || {}),
                  (t.glb.ElementTracker =
                    t.glb.ElementTracker ||
                    (function () {
                      var o = !0,
                        r = {
                          scrollTrackItems: [],
                          scrollbarTrackingBreakpoints: null,
                          scrollbarTrackingContext: null,
                        },
                        l = { value: 0, noninteraction: !1 };
                      function s() {
                        i("body").on(
                          "click.event-tracker",
                          "[data-track-click]",
                          function () {
                            return h(i(this)), !0;
                          }
                        );
                      }
                      function a() {
                        !(function () {
                          var e,
                            t,
                            n = i("[data-track-scroll]");
                          for (e = 0; e < n.length; e++)
                            (t = n.eq(e)), r.scrollTrackItems.push(t);
                        })(),
                          n.on("scroll.event-tracker", function () {
                            o &&
                              ((o = !1),
                              setTimeout(function () {
                                var t = m();
                                u(t),
                                  r.scrollbarTrackingBreakpoints &&
                                    (function (t) {
                                      var i,
                                        n,
                                        o,
                                        l,
                                        s,
                                        a,
                                        c = r.scrollbarTrackingContext.height(),
                                        u = r.scrollbarTrackingBreakpoints,
                                        h = [];
                                      for (var d in u)
                                        (i = u[d][0]),
                                          (o = u[d][1]),
                                          (l = u[d][2]),
                                          (s = u[d][3]),
                                          (a = u[d][4]),
                                          (n = i.toString()),
                                          t < (i * c) / 100
                                            ? h.push(u[d])
                                            : (e(["_setCustomVar", o, l, n, s]),
                                              e(["_trackEvent", l, n, a, !0]));
                                      r.scrollbarTrackingBreakpoints = h;
                                    })(t),
                                  (o = !0);
                              }, 150));
                          }),
                          u(m());
                      }
                      function c() {
                        i("body").on(
                          "click.event-tracker",
                          "[data-track-links]",
                          function (e) {
                            "A" === e.target.tagName && v(i(e.target));
                          }
                        );
                      }
                      function u(e) {
                        var t,
                          i,
                          n = [];
                        for (i = 0; i < r.scrollTrackItems.length; i++)
                          e > (t = r.scrollTrackItems[i]).offset().top + 30
                            ? d(t)
                            : n.push(t);
                        r.scrollTrackItems = n;
                      }
                      function h(e) {
                        var t = e.data("track-click");
                        k(e, { label: t });
                      }
                      function d(e) {
                        var t = e.data("track-scroll");
                        k(e, { label: t });
                      }
                      function v(e) {
                        var t = { action: e.text(), label: e.attr("href") };
                        k(e, t);
                      }
                      function k(t, n) {
                        (function (e) {
                          return (
                            0 === e.closest("[data-track-disabled]").length
                          );
                        })(t) &&
                          ((n = n || {}),
                          i.each(
                            ["category", "action", "value", "noninteraction"],
                            function (e, i) {
                              var o;
                              n[i] ||
                                ((o = (function (e, t) {
                                  return e
                                    .closest("[data-track-" + t + "]")
                                    .data("track-" + t);
                                })(t, i)),
                                (n[i] = o || l[i]));
                            }
                          ),
                          e([
                            "_trackEvent",
                            n.category,
                            n.action,
                            n.label,
                            n.value,
                            n.noninteraction,
                          ]));
                      }
                      function m() {
                        return (
                          (function () {
                            return n.scrollTop.apply(n, arguments);
                          })() + n.height()
                        );
                      }
                      return {
                        init: function () {
                          return s(), a(), c(), this;
                        },
                        destroy: function () {
                          i("body").off(".event-tracker"),
                            i(t).off(".event-tracker");
                        },
                        initClicks: s,
                        initScroll: a,
                        initLinks: c,
                        push: k,
                        pushClick: h,
                        pushScroll: d,
                        pushLink: v,
                        getInfo: function () {
                          return r;
                        },
                        removeElementsVisualized: u,
                        enableScrollbarTrackingByBreakpoint: function (e, t) {
                          (r.scrollbarTrackingContext = e),
                            (r.scrollbarTrackingBreakpoints = t);
                        },
                      };
                    })()),
                  t.glb.ElementTracker.init();
              })(window, jQuery);
            }),
              (i = function () {
                window.jQuery ? t() : window.setTimeout(i, 20);
              }),
              window.setTimeout(i, 20);
          },
          !1
        );
      },
    },
    t = {};
  function i(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var r = (t[n] = { exports: {} });
    return e[n](r, r.exports, i), r.exports;
  }
  (() => {
    "use strict";
    i(723), i(295);
    function e(e, t) {
      var i = e.getBoundingClientRect(),
        n = t.getBoundingClientRect();
      return (
        n.bottom <= i.top ||
        n.right <= i.left ||
        n.left >= i.right ||
        n.top >= i.bottom
      );
    }
    function t(e) {
      var t = document.defaultView.getComputedStyle(e),
        i = t.getPropertyValue("overflow-x"),
        n = t.getPropertyValue("overflow-y");
      return "visible" !== i || "visible" !== n;
    }
    function n(i, n) {
      if (n) return e(i, n);
      for (var o = i.parentElement; o && o !== document.body; ) {
        if (t(o)) return e(i, o);
        o = o.parentElement;
      }
      return !1;
    }
    function o(e) {
      if (!e) return !1;
      var t = e.getBoundingClientRect(),
        i = document.documentElement;
      return (
        !n(e) &&
        t.top >= 0 - t.height / 2 &&
        t.left >= 0 &&
        t.bottom <= (window.innerHeight || i.clientHeight) + t.height / 2 &&
        t.right <= (window.innerWidth || i.clientWidth)
      );
    }
    function r(e, t) {
      if (!e || !e.element) return !1;
      var i = e.element.getBoundingClientRect(),
        o = document.documentElement.clientHeight / 2,
        r = (o / 2) * 3;
      return t
        ? !n(e.element) &&
            ((i.top <= o && i.bottom >= o) ||
              (i.top >= 0 && i.bottom <= i.height && i.bottom >= o))
        : !n(e.element) && i.top >= 0 && i.top <= r;
    }
    var l = document.querySelector(".mc-body"),
      s = document.querySelector(".feed"),
      { HZ_TRACKER_ENABLED: a } = window.cdaaas.SETTINGS,
      { buildedTime: c } = window.glbMc;
    class u {
      constructor() {
        (this.horizon = window.HorizonClient),
          (this.chunks = window.glbMc.chunksData),
          (this.sendMcView = this.debounce(this.sendMulticontentView, 200)),
          (this.multicontent = {
            element: l,
            timeVisible: 0,
            timeUntilLastVisible: 0,
            views: [{ type: "visible", time: Math.floor(c) }],
          }),
          (this.feed = { element: s, viewed: !1 }),
          window.addEventListener(
            "scroll",
            this.debounce(() => {
              this.checkFeed(), this.check();
            }, 250)
          ),
          document.body.addEventListener(
            "click",
            this.checkChunkClick.bind(this),
            !0
          ),
          window.setTimeout(() => {
            this.check(), this.flushEvents();
          }, 50),
          this.setupIntervalFlush(3e3, 5, () => {
            this.setupIntervalFlush(1e4);
          }),
          this.configUnload();
      }
      setupIntervalFlush(e, t, i) {
        var n = 0,
          o = window.setInterval(() => {
            this.flushEvents(), t && i && ++n >= t && (clearInterval(o), i());
          }, e);
      }
      findRealTarget(e) {
        return e
          ? null !== e.getAttribute("data-block-type")
            ? e
            : e === document.body
            ? null
            : this.findRealTarget(e.parentNode)
          : null;
      }
      check() {
        this.checkChunks(), this.checkLayer();
      }
      checkChunkClick(e) {
        var t = e.target,
          i = this.findRealTarget(t);
        if (i) {
          var n = i.getAttribute("data-block-id");
          if (n) {
            var o = this.chunks[n];
            if (this.hasChunkInteraction(o)) {
              o.clickCount += 1;
              var r;
              (r =
                "Shape" === t.id
                  ? "Pause"
                  : "Triangle" === t.id
                  ? "Play"
                  : t.innerText || t.textContent || "Player"),
                this.sendHorizonEvent("multicontent-element-click", "3.0", {
                  chunkType: o.chunkType,
                  chunkPosition: o.position + 1,
                  clickCount: o.clickCount,
                  clickLabel: r,
                  clickedTimestamp: Date.now(),
                });
            }
          }
        }
      }
      checkFeed() {
        r(this.feed, !1) && (this.feed.viewed = !0);
      }
      checkChunks() {
        for (var { chunks: e } = this, t = 0; t < e.length; t++)
          this.addTimestampToChunk(e[t]);
      }
      checkLayer() {
        var e = Math.floor(Date.now()),
          t = this.multicontent,
          i = this.checkChunkViewStatus(t);
        if (r(t, !0))
          (0 !== t.views.length && "visible" === i) ||
            (t.views.push({ type: "visible", time: e }),
            t.views.length > 1 && this.sendMcView());
        else {
          if (0 === t.views.length || "invisible" !== i) {
            var n = t.views[t.views.length - 1];
            (t.timeUntilLastVisible += e - n.time),
              t.views.push({ type: "invisible", time: e }),
              t.views.length > 1 && this.sendMcView();
          }
          this.updateTimeVisible(t);
        }
      }
      checkChunkViewStatus(e) {
        return e.views.length > 0
          ? e.views[e.views.length - 1].type
          : "invisible";
      }
      sendMulticontentView(e) {
        void 0 === e && (e = !1),
          this.sendHorizonEvent(
            "multicontent-view",
            "4.0",
            {
              feedSeen: this.feed.viewed,
              timeOnMulticontent: this.multicontent.timeVisible,
            },
            e
          );
      }
      sendChunkView(e, t) {
        void 0 === t && (t = !1),
          this.sendHorizonEvent(
            "multicontent-chunk-view",
            "3.0",
            {
              chunkType: e.chunkType,
              chunkPosition: e.position + 1,
              chunkInteraction: this.hasChunkInteraction(e),
              viewedTimeMs: e.timeVisible,
              wordCount: this.getWordCount(e),
              height: e.offsetHeight,
              width: e.offsetWidth,
            },
            t
          );
      }
      addTimestampToChunk(e) {
        var t = Math.floor(Date.now());
        if (e.views.length <= 0)
          o(e.chunk) &&
            (e.views.push({ type: "visible", time: t }), this.sendChunkView(e));
        else {
          var i = e.views[e.views.length - 1];
          o(e.chunk)
            ? "invisible" === i.type &&
              e.views.push({ type: "visible", time: t })
            : "visible" === i.type &&
              (e.views.push({ type: "invisible", time: t }),
              (e.timeUntilLastVisible += t - i.time),
              this.updateTimeVisible(e),
              this.sendHorizonEvent("multicontent-chunk-view", "3.0", {
                chunkType: e.chunkType,
                chunkPosition: e.position + 1,
                chunkInteraction: this.hasChunkInteraction(e),
                viewedTimeMs: e.timeUntilLastVisible,
                wordCount: this.getWordCount(e),
                height: e.offsetHeight,
                width: e.offsetWidth,
              }));
        }
      }
      sendHorizonEvent(e, t, i, n) {
        void 0 === n && (n = !1);
        try {
          (!n && document.hidden) ||
            this.horizon.then((n) => {
              n &&
                n.send({
                  id: e,
                  version: t,
                  contentType: "multicontent",
                  properties: i,
                });
            });
        } catch (e) {
          console.error("HORIZON TRACKING: ", e);
        }
      }
      hasChunkInteraction(e) {
        var { chunk: t, chunkType: i } = e;
        return "paragraph" !== i || t.getElementsByTagName("a").length > 0;
      }
      updateTimeVisible(e) {
        if (e.views.length > 0) {
          var t = e.views[e.views.length - 1];
          "visible" === t.type
            ? (e.timeVisible = Math.floor(
                Date.now() - t.time + e.timeUntilLastVisible
              ))
            : (e.timeVisible = e.timeUntilLastVisible);
        }
      }
      getWordCount(e) {
        var { chunkType: t } = e;
        return "paragraph" === t ? e.chunk.innerText.split(" ").length : 0;
      }
      sendOcurrence(e, t, i) {
        void 0 === i && (i = !1);
        var n = e.views[e.views.length - 1],
          o = Math.floor(Date.now());
        n &&
          "visible" === n.type &&
          ((e.timeVisible = o - n.time + e.timeUntilLastVisible),
          "chunk" === t
            ? this.sendChunkView(e, i)
            : i
            ? this.sendMulticontentView(i)
            : this.sendMcView());
      }
      flushEvents(e) {
        void 0 === e && (e = !1),
          this.chunks.forEach((t) => {
            this.sendOcurrence(t, "chunk", e);
          }),
          this.sendOcurrence(this.multicontent, "content", e);
      }
      configUnload() {
        window.HorizonHelpers
          ? (window.HorizonHelpers.unloadCallbacks.push(() => this.check()),
            window.HorizonHelpers.unloadCallbacks.push(() =>
              this.flushEvents(!0)
            ))
          : document.addEventListener("visibilitychange", () => {
              "hidden" === document.visibilityState &&
                (this.check(),
                this.flushEvents(!0),
                this.horizon.then((e) => {
                  e.unload();
                }));
            });
      }
      debounce(e, t, i) {
        void 0 === i && (i = this);
        var n = null,
          o = null,
          r = () => e.apply(i, o);
        return function () {
          (o = arguments), clearTimeout(n), (n = setTimeout(r, t));
        };
      }
    }
    var h, d;
    (d = globalThis.cdaaas.helpers.urlCanonical()),
      (globalThis.glb_realtime_map = {
        site: globalThis.cdaaas.SETTINGS.SITE_NAME.toLowerCase(),
        categories: globalThis.cdaaas.SETTINGS.CATEGORIAS,
        url: d.replace("https", "http"),
      }),
      globalThis.cdaaas.helpers.loadScript(
        globalThis.cdaaas.SETTINGS.REALTIME_PAGEVIEW
      ),
      (() => {
        var e;
        a && (e = new u());
      })(),
      document.querySelectorAll("amp-social-share").forEach((e) => {
        e.addEventListener("click", (e) => {
          var t,
            i,
            n =
              null == (t = e.target) ||
              null == (t = t.attributes) ||
              null == (t = t.type)
                ? void 0
                : t.value;
          if (null == (i = e.target) || null == (i = i.attributes) || !i.type) {
            var o,
              r = e.target.closest("amp-social-share");
            r &&
              (n =
                null == (o = r.attributes) || null == (o = o.type)
                  ? void 0
                  : o.value);
          }
          window.trackerBuilder &&
            window
              .trackerBuilder()
              .addGA4()
              .addUA({ sender: "push" })
              .build()
              .push([
                "_trackEvent",
                "multicontent",
                "multicontent",
                "share",
                n,
                !1,
              ]);
        });
      }),
      (h = document.querySelector("p#biography")) &&
        h.addEventListener("click", () => {
          document.querySelector("a.see-more") &&
            globalThis.ga &&
            globalThis.ga(
              globalThis.cdaaas.SETTINGS.SITE_ID + "_portal.send",
              "event",
              "multicontent",
              "ver mais",
              "expandir"
            );
        }),
      (() => {
        var e = document.querySelectorAll(".multi_signatures");
        e &&
          e.forEach((e) => {
            e.addEventListener("click", () => {
              globalThis.ga &&
                globalThis.ga(
                  globalThis.cdaaas.SETTINGS.SITE_ID + "_portal.send",
                  "event",
                  "multicontent",
                  "click-link-author",
                  e.textContent
                ),
                window.HorizonClient.then((t) => {
                  t.send({
                    id: "common-event",
                    version: "0.1",
                    contentType: "common",
                    properties: {
                      eventCategory: "multicontent",
                      eventAction: "click-link-author",
                      eventLabel: e.textContent,
                    },
                  });
                });
            });
          });
      })();
  })();
})();
/*! For license information please see web.js.LICENSE */
!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 16));
})([
  function (t, e, n) {
    t.exports = n(11);
  },
  function (t, e, n) {
    (function (e, n) {
      t.exports = (function () {
        "use strict";
        function t(t) {
          return "function" == typeof t;
        }
        var r = Array.isArray
            ? Array.isArray
            : function (t) {
                return "[object Array]" === Object.prototype.toString.call(t);
              },
          o = 0,
          i = void 0,
          a = void 0,
          u = function (t, e) {
            (d[o] = t), (d[o + 1] = e), 2 === (o += 2) && (a ? a(v) : y());
          },
          c = "undefined" != typeof window ? window : void 0,
          s = c || {},
          f = s.MutationObserver || s.WebKitMutationObserver,
          l =
            "undefined" == typeof self &&
            void 0 !== e &&
            "[object process]" === {}.toString.call(e),
          h =
            "undefined" != typeof Uint8ClampedArray &&
            "undefined" != typeof importScripts &&
            "undefined" != typeof MessageChannel;
        function p() {
          var t = setTimeout;
          return function () {
            return t(v, 1);
          };
        }
        var d = new Array(1e3);
        function v() {
          for (var t = 0; t < o; t += 2) {
            (0, d[t])(d[t + 1]), (d[t] = void 0), (d[t + 1] = void 0);
          }
          o = 0;
        }
        var y = void 0;
        function w(t, e) {
          var n = this,
            r = new this.constructor(g);
          void 0 === r[b] && C(r);
          var o = n._state;
          if (o) {
            var i = arguments[o - 1];
            u(function () {
              return G(o, r, i, n._result);
            });
          } else L(n, r, t, e);
          return r;
        }
        function m(t) {
          if (t && "object" == typeof t && t.constructor === this) return t;
          var e = new this(g);
          return E(e, t), e;
        }
        y = l
          ? function () {
              return e.nextTick(v);
            }
          : f
          ? (function () {
              var t = 0,
                e = new f(v),
                n = document.createTextNode("");
              return (
                e.observe(n, { characterData: !0 }),
                function () {
                  n.data = t = ++t % 2;
                }
              );
            })()
          : h
          ? (function () {
              var t = new MessageChannel();
              return (
                (t.port1.onmessage = v),
                function () {
                  return t.port2.postMessage(0);
                }
              );
            })()
          : void 0 === c
          ? (function () {
              try {
                var t = Function("return this")().require("vertx");
                return void 0 === (i = t.runOnLoop || t.runOnContext)
                  ? p()
                  : function () {
                      i(v);
                    };
              } catch (t) {
                return p();
              }
            })()
          : p();
        var b = Math.random().toString(36).substring(2);
        function g() {}
        var _ = void 0,
          O = 1,
          x = 2;
        function S(e, n, r) {
          n.constructor === e.constructor &&
          r === w &&
          n.constructor.resolve === m
            ? (function (t, e) {
                e._state === O
                  ? T(t, e._result)
                  : e._state === x
                  ? P(t, e._result)
                  : L(
                      e,
                      void 0,
                      function (e) {
                        return E(t, e);
                      },
                      function (e) {
                        return P(t, e);
                      }
                    );
              })(e, n)
            : void 0 === r
            ? T(e, n)
            : t(r)
            ? (function (t, e, n) {
                u(function (t) {
                  var r = !1,
                    o = (function (t, e, n, r) {
                      try {
                        t.call(e, n, r);
                      } catch (t) {
                        return t;
                      }
                    })(
                      n,
                      e,
                      function (n) {
                        r || ((r = !0), e !== n ? E(t, n) : T(t, n));
                      },
                      function (e) {
                        r || ((r = !0), P(t, e));
                      },
                      t._label
                    );
                  !r && o && ((r = !0), P(t, o));
                }, t);
              })(e, n, r)
            : T(e, n);
        }
        function E(t, e) {
          if (t === e)
            P(t, new TypeError("You cannot resolve a promise with itself"));
          else if (
            (function (t) {
              var e = typeof t;
              return null !== t && ("object" == e || "function" == e);
            })(e)
          ) {
            var n = void 0;
            try {
              n = e.then;
            } catch (e) {
              return void P(t, e);
            }
            S(t, e, n);
          } else T(t, e);
        }
        function j(t) {
          t._onerror && t._onerror(t._result), A(t);
        }
        function T(t, e) {
          t._state === _ &&
            ((t._result = e),
            (t._state = O),
            0 !== t._subscribers.length && u(A, t));
        }
        function P(t, e) {
          t._state === _ && ((t._state = x), (t._result = e), u(j, t));
        }
        function L(t, e, n, r) {
          var o = t._subscribers,
            i = o.length;
          (t._onerror = null),
            (o[i] = e),
            (o[i + O] = n),
            (o[i + x] = r),
            0 === i && t._state && u(A, t);
        }
        function A(t) {
          var e = t._subscribers,
            n = t._state;
          if (0 !== e.length) {
            for (
              var r = void 0, o = void 0, i = t._result, a = 0;
              a < e.length;
              a += 3
            )
              (r = e[a]), (o = e[a + n]), r ? G(n, r, o, i) : o(i);
            t._subscribers.length = 0;
          }
        }
        function G(e, n, r, o) {
          var i = t(r),
            a = void 0,
            u = void 0,
            c = !0;
          if (i) {
            try {
              a = r(o);
            } catch (e) {
              (c = !1), (u = e);
            }
            if (n === a)
              return void P(
                n,
                new TypeError(
                  "A promises callback cannot return that same promise."
                )
              );
          } else a = o;
          n._state !== _ ||
            (i && c
              ? E(n, a)
              : !1 === c
              ? P(n, u)
              : e === O
              ? T(n, a)
              : e === x && P(n, a));
        }
        var I = 0;
        function C(t) {
          (t[b] = I++),
            (t._state = void 0),
            (t._result = void 0),
            (t._subscribers = []);
        }
        var N = (function () {
            function t(t, e) {
              (this._instanceConstructor = t),
                (this.promise = new t(g)),
                this.promise[b] || C(this.promise),
                r(e)
                  ? ((this.length = e.length),
                    (this._remaining = e.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? T(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(e),
                        0 === this._remaining && T(this.promise, this._result)))
                  : P(
                      this.promise,
                      new Error("Array Methods must be provided an Array")
                    );
            }
            return (
              (t.prototype._enumerate = function (t) {
                for (var e = 0; this._state === _ && e < t.length; e++)
                  this._eachEntry(t[e], e);
              }),
              (t.prototype._eachEntry = function (t, e) {
                var n = this._instanceConstructor,
                  r = n.resolve;
                if (r === m) {
                  var o = void 0,
                    i = void 0,
                    a = !1;
                  try {
                    o = t.then;
                  } catch (e) {
                    (a = !0), (i = e);
                  }
                  if (o === w && t._state !== _)
                    this._settledAt(t._state, e, t._result);
                  else if ("function" != typeof o)
                    this._remaining--, (this._result[e] = t);
                  else if (n === k) {
                    var u = new n(g);
                    a ? P(u, i) : S(u, t, o), this._willSettleAt(u, e);
                  } else
                    this._willSettleAt(
                      new n(function (e) {
                        return e(t);
                      }),
                      e
                    );
                } else this._willSettleAt(r(t), e);
              }),
              (t.prototype._settledAt = function (t, e, n) {
                var r = this.promise;
                r._state === _ &&
                  (this._remaining--,
                  t === x ? P(r, n) : (this._result[e] = n)),
                  0 === this._remaining && T(r, this._result);
              }),
              (t.prototype._willSettleAt = function (t, e) {
                var n = this;
                L(
                  t,
                  void 0,
                  function (t) {
                    return n._settledAt(O, e, t);
                  },
                  function (t) {
                    return n._settledAt(x, e, t);
                  }
                );
              }),
              t
            );
          })(),
          k = (function () {
            function e(t) {
              (this[b] = I++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                g !== t &&
                  ("function" != typeof t &&
                    (function () {
                      throw new TypeError(
                        "You must pass a resolver function as the first argument to the promise constructor"
                      );
                    })(),
                  this instanceof e
                    ? (function (t, e) {
                        try {
                          e(
                            function (e) {
                              E(t, e);
                            },
                            function (e) {
                              P(t, e);
                            }
                          );
                        } catch (e) {
                          P(t, e);
                        }
                      })(this, t)
                    : (function () {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })());
            }
            return (
              (e.prototype.catch = function (t) {
                return this.then(null, t);
              }),
              (e.prototype.finally = function (e) {
                var n = this.constructor;
                return t(e)
                  ? this.then(
                      function (t) {
                        return n.resolve(e()).then(function () {
                          return t;
                        });
                      },
                      function (t) {
                        return n.resolve(e()).then(function () {
                          throw t;
                        });
                      }
                    )
                  : this.then(e, e);
              }),
              e
            );
          })();
        return (
          (k.prototype.then = w),
          (k.all = function (t) {
            return new N(this, t).promise;
          }),
          (k.race = function (t) {
            var e = this;
            return r(t)
              ? new e(function (n, r) {
                  for (var o = t.length, i = 0; i < o; i++)
                    e.resolve(t[i]).then(n, r);
                })
              : new e(function (t, e) {
                  return e(new TypeError("You must pass an array to race."));
                });
          }),
          (k.resolve = m),
          (k.reject = function (t) {
            var e = new this(g);
            return P(e, t), e;
          }),
          (k._setScheduler = function (t) {
            a = t;
          }),
          (k._setAsap = function (t) {
            u = t;
          }),
          (k._asap = u),
          (k.polyfill = function () {
            var t = void 0;
            if (void 0 !== n) t = n;
            else if ("undefined" != typeof self) t = self;
            else
              try {
                t = Function("return this")();
              } catch (t) {
                throw new Error(
                  "polyfill failed because global object is unavailable in this environment"
                );
              }
            var e = t.Promise;
            if (e) {
              var r = null;
              try {
                r = Object.prototype.toString.call(e.resolve());
              } catch (t) {}
              if ("[object Promise]" === r && !e.cast) return;
            }
            t.Promise = k;
          }),
          (k.Promise = k)
        );
      })();
    }).call(this, n(10), n(6));
  },
  function (t, e, n) {
    "use strict";
    (function (t, r) {
      n.d(e, "a", function () {
        return p;
      }),
        n.d(e, "b", function () {
          return d;
        });
      var o = n(0),
        i = n.n(o),
        a = n(4),
        u = n.n(a);
      function c(e, n, r, o, i, a, u) {
        try {
          var c = e[a](u),
            s = c.value;
        } catch (e) {
          return void r(e);
        }
        c.done ? n(s) : t.resolve(s).then(o, i);
      }
      function s(e) {
        return function () {
          var n = this,
            r = arguments;
          return new t(function (t, o) {
            var i = e.apply(n, r);
            function a(e) {
              c(i, t, o, a, u, "next", e);
            }
            function u(e) {
              c(i, t, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function f() {
        return u()(function () {
          var t = r.glb;
          return t && t.globoIdClientMap
            ? { done: !0, value: t.globoIdClientMap }
            : null;
        });
      }
      var l = (function () {
          var t = s(
            i.a.mark(function t() {
              var e, n, r;
              return i.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        u()(function () {
                          var t = window.glb.barra;
                          if (t && t.defaults) {
                            var e = t.defaults.oidcSettings;
                            if (e && e.clientId.length)
                              return { done: !0, value: e.clientId };
                          }
                          return null;
                        })
                      );
                    case 2:
                      return (e = t.sent), (t.next = 5), f();
                    case 5:
                      return (
                        (n = t.sent),
                        ((r =
                          n.getGloboIdClient(
                            e
                          )).stageQueueMap.applicationUsageStageQueue =
                          r.stageQueueMap.applicationUsageStageQueue || []),
                        t.abrupt("return", r)
                      );
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        h = (function () {
          var e = s(
            i.a.mark(function e() {
              var n, r;
              return i.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (n = !1), (e.next = 3), l();
                    case 3:
                      if ((r = e.sent)) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return", n);
                    case 7:
                      return (
                        (e.next = 9),
                        new t(function (t) {
                          r.stageQueueMap.applicationUsageStageQueue.push(
                            (function () {
                              var e = s(
                                i.a.mark(function e(r) {
                                  return i.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (e.next = 2), r.isLogged();
                                        case 2:
                                          (n = e.sent), t(n);
                                        case 4:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          );
                        })
                      );
                    case 9:
                      return (n = e.sent), e.abrupt("return", n);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        p = (function () {
          var t = s(
            i.a.mark(function t() {
              var e, n;
              return i.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), f();
                      case 2:
                        return (
                          (e = t.sent),
                          (t.prev = 3),
                          (t.next = 6),
                          e.getPreviewUser()
                        );
                      case 6:
                        return (n = t.sent), t.abrupt("return", n.globoId);
                      case 10:
                        return (
                          (t.prev = 10),
                          (t.t0 = t.catch(3)),
                          t.abrupt("return", void 0)
                        );
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[3, 10]]
              );
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        d = (function () {
          var t = s(
            i.a.mark(function t() {
              var e;
              return i.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          h().then(function (t) {
                            return t;
                          })
                        );
                      case 3:
                        return (
                          (e = t.sent),
                          t.abrupt("return", e ? "logado" : "anonimo")
                        );
                      case 7:
                        return (
                          (t.prev = 7),
                          (t.t0 = t.catch(0)),
                          t.abrupt("return", "anonimo")
                        );
                      case 11:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 7]]
              );
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })();
    }).call(this, n(1), n(6));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var r = n(0),
        o = n.n(r),
        i = n(8),
        a = n(9),
        u = n(5),
        c = n(2);
      function s(e, n, r, o, i, a, u) {
        try {
          var c = e[a](u),
            s = c.value;
        } catch (e) {
          return void r(e);
        }
        c.done ? n(s) : t.resolve(s).then(o, i);
      }
      function f(t) {
        return window.libAnalyticsReady
          ? window.libAnalytics.tools.gtm.getProperty(t)
          : (function (t) {
              if (window.dataLayer) {
                var e = (function (t) {
                  return (
                    (function (t) {
                      if (Array.isArray(t)) {
                        for (
                          var e = 0, n = new Array(t.length);
                          e < t.length;
                          e++
                        )
                          n[e] = t[e];
                        return n;
                      }
                    })(t) ||
                    (function (t) {
                      if (
                        Symbol.iterator in Object(t) ||
                        "[object Arguments]" ===
                          Object.prototype.toString.call(t)
                      )
                        return Array.from(t);
                    })(t) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance"
                      );
                    })()
                  );
                })(window.dataLayer)
                  .reverse()
                  .find(function (e) {
                    return Object.keys(e).includes(t);
                  });
                return void 0 !== e ? e[t] : void 0;
              }
            })(t);
      }
      function l() {
        return {
          dimension21: f("bd_suser_provider"),
          dimension22: f("bd_suser_code"),
          dimension98: f("bd_suser_provider"),
          dimension99: f("bd_suser_code"),
        };
      }
      var h = (function () {
        var e = (function (e) {
          return function () {
            var n = this,
              r = arguments;
            return new t(function (t, o) {
              var i = e.apply(n, r);
              function a(e) {
                s(i, t, o, a, u, "next", e);
              }
              function u(e) {
                s(i, t, o, a, u, "throw", e);
              }
              a(void 0);
            });
          };
        })(
          o.a.mark(function t() {
            return o.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.t0 = {
                        productUA: window.cdaaas.SETTINGS.PRODUCT_UA,
                        extras: l(),
                      }),
                      (t.next = 3),
                      Object(c.a)()
                    );
                  case 3:
                    return (
                      (t.t1 = t.sent),
                      (t.t2 = {
                        measurementId:
                          ((n = u.b),
                          (r = u.c),
                          "prod" === n ? Object(a.a)(r) : Object(i.a)(r)),
                        clientId:
                          ((e = void 0),
                          (e = document.cookie.split("; ").find(function (t) {
                            return t.startsWith("_ga=");
                          })),
                          (e && e.match(/(\d+\.\d\.+)(.*$)/)[2]) || ""),
                      }),
                      (t.t3 = l()),
                      (t.t4 = {
                        consumption_environment: "web",
                        platform: "desktop" === u.a ? "desktop" : "mobile",
                      }),
                      (t.t5 = {
                        user_id: t.t1,
                        endpoint_keys: t.t2,
                        event_params: t.t3,
                        user_properties: t.t4,
                      }),
                      t.abrupt("return", { ga: t.t0, ga4: t.t5 })
                    );
                  case 9:
                  case "end":
                    return t.stop();
                }
              var e, n, r;
            }, t);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
      e.a = h;
    }).call(this, n(1));
  },
  function (t, e, n) {
    "use strict";
    (function (e) {
      t.exports = function (t, n) {
        var r = 1 < arguments.length && void 0 !== n ? n : {},
          o = r.initialInterval,
          i = void 0 === o ? 100 : o,
          a = r.attemptsBeforeSlowing,
          u = void 0 === a ? 20 : a,
          c = r.timeout,
          s = void 0 === c ? 6e4 : c,
          f = Date.now(),
          l = 0,
          h = i,
          p = void 0,
          d = void 0;
        try {
          d = t();
        } catch (n) {
          return e.reject(
            new Error("[waitCondition] error on condition:\n " + t)
          );
        }
        return d && d.done
          ? e.resolve(d.value)
          : new e(function (e, n) {
              p = (function r(o) {
                return setInterval(function () {
                  try {
                    d = t();
                  } catch (e) {
                    return (
                      clearInterval(p),
                      void n(
                        new Error("[waitCondition] error on condition:\n " + t)
                      )
                    );
                  }
                  return d && d.done
                    ? (clearInterval(p), void e(d.value))
                    : (function (t, e) {
                        return t + e < Date.now();
                      })(f, s)
                    ? (clearInterval(p),
                      void n(
                        new Error(
                          "[waitCondition] timeout on condition:\n " + t
                        )
                      ))
                    : u < l
                    ? ((l = 0), (h *= 2), clearInterval(p), void (p = r(h)))
                    : void (l += 1);
                }, o);
              })(h);
            });
      };
    }).call(this, n(1));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return r;
    }),
      n.d(e, "a", function () {
        return o;
      }),
      n.d(e, "c", function () {
        return i;
      });
    var r = window.cdaaas.SETTINGS.ENV,
      o = window.cdaaas.SETTINGS.CHANNEL,
      i = window.cdaaas.SETTINGS.SITE_ID;
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "b", function () {
        return y;
      });
      var r = n(0),
        o = n.n(r),
        i = n(2),
        a = n(3);
      function u(t) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(n, !0).forEach(function (e) {
                f(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(n).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function f(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function l(e, n, r, o, i, a, u) {
        try {
          var c = e[a](u),
            s = c.value;
        } catch (e) {
          return void r(e);
        }
        c.done ? n(s) : t.resolve(s).then(o, i);
      }
      function h(e) {
        return function () {
          var n = this,
            r = arguments;
          return new t(function (t, o) {
            var i = e.apply(n, r);
            function a(e) {
              l(i, t, o, a, u, "next", e);
            }
            function u(e) {
              l(i, t, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function p() {
        return (
          window.cdaaas &&
          window.cdaaas.SETTINGS &&
          window.cdaaas.SETTINGS.PLAYER
        );
      }
      n.d(e, "a", function () {
        return a.a;
      });
      var d = (function () {
          var t = h(
            o.a.mark(function t(e) {
              var n, r, u, c, f, l, h, d, v;
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (p()) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (n = window),
                        (r = n.cdaaas),
                        (u = r.SETTINGS.PLAYER),
                        (t.next = 6),
                        Object(i.a)()
                      );
                    case 6:
                      return (c = t.sent), (t.next = 9), Object(i.b)();
                    case 9:
                      return (
                        (f = t.sent),
                        (l = []),
                        u.OPTIONS.adCustomData &&
                          l.push(u.OPTIONS.adCustomData),
                        c && l.push("glb_id=".concat(c)),
                        l.push("glb_tipo=".concat(f)),
                        (h = l.join("&") || void 0),
                        (d = new URLSearchParams(h) || void 0),
                        (t.next = 18),
                        Object(a.a)()
                      );
                    case 18:
                      (v = t.sent),
                        (u.ASYNC_OPTIONS = s(
                          {
                            adCustomData: h,
                            daiCustomData: Object.fromEntries(d),
                          },
                          v
                        )),
                        e(u.ASYNC_OPTIONS);
                    case 21:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        v = (function () {
          var t = h(
            o.a.mark(function t() {
              var e, n;
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = window.cdaaas.SETTINGS.PLAYER),
                        (t.next = 3),
                        Object(a.a)()
                      );
                    case 3:
                      (n = t.sent), (e.OPTIONS = s({}, e.OPTIONS, {}, n));
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })();
      document.addEventListener("readystatechange", function () {
        "complete" === document.readyState && v();
      });
      var y = (function () {
        var e = h(
          o.a.mark(function e() {
            var n, r, i, c, f, l, h, v, y;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (p()) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (
                      (n = window.cdaaas.SETTINGS.PLAYER),
                      (r = {}),
                      (i = []),
                      n.OPTIONS.adCustomData && i.push(n.OPTIONS.adCustomData),
                      "boolean" == typeof window.FORCE_VIDEO_AD &&
                        window.FORCE_VIDEO_AD &&
                        ((r = {
                          adUnit: void 0,
                          adCmsId: void 0,
                          adAccountId: void 0,
                        }),
                        (i = [])),
                      (c = window.utag_data || {}),
                      (f = function (t) {
                        try {
                          var e = c[t];
                          if (e) {
                            var n = function (t, e) {
                                return String(e)
                                  ? "".concat(t, "=").concat(String(e))
                                  : "";
                              },
                              r =
                                "object" !== u(e) || Array.isArray(e)
                                  ? n(t, e)
                                  : ((o = e),
                                    Object.keys(o)
                                      .map(function (t) {
                                        return (
                                          Array.isArray(o[t])
                                            ? function (t, e) {
                                                return n(
                                                  t,
                                                  (1 < arguments.length &&
                                                  void 0 !== e
                                                    ? e
                                                    : []
                                                  ).join(",")
                                                );
                                              }
                                            : n
                                        )(t, o[t]);
                                      })
                                      .filter(Boolean)
                                      .join("&"));
                            r && i.push(r);
                          }
                        } catch (t) {}
                        var o;
                      })("tipo_pagina"),
                      f("ext-bsafety"),
                      f("ext-advertiser"),
                      (l = i.join("&") || void 0),
                      (h = new URLSearchParams(l) || void 0),
                      (e.next = 16),
                      Object(a.a)()
                    );
                  case 16:
                    (v = e.sent),
                      (n.OPTIONS = s({}, n.OPTIONS, {}, r, {}, v, {
                        adCustomData: l,
                        daiCustomData: Object.fromEntries(h),
                      })),
                      (y = new t(d)),
                      (n.getAsyncData = function () {
                        return y;
                      });
                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    }).call(this, n(1));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    });
    var r = new Map([
      ["g1", "G-ZM1NZHBFQR"],
      ["ge", "G-VYLR0R5N70"],
      ["gshow", "G-LDFM1H46KW"],
      ["receitas", "G-EMT1R6P28S"],
      ["globoplay", "G-N6CD657Q6B"],
      ["premiere", ""],
      ["combate", ""],
      ["cartola", "G-C64J09RWJM"],
      ["somos", "G-RV6555BLK7"],
      ["memoriaglobo", "G-5JGS5RZZSS"],
      ["historiaglobo", "G-J1X2XV174H"],
      ["redeglobo", "G-DN4CBXYCMR"],
      ["globofilmes", "G-2GWC5ME8ZJ"],
      ["dev-beta", ""],
    ]);
    function o(t) {
      return r.get(t);
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    });
    var r = new Map([
      ["g1", "G-4DF8YFDHV7"],
      ["ge", "G-K8B6Y0T4CS"],
      ["gshow", "G-W1G9LMC88G"],
      ["receitas", "G-GYCLBK1JRG"],
      ["globoplay", "G-WLHSK1RZ32"],
      ["premiere", "G-TH6ECKBNLK"],
      ["combate", "G-62M5LFRF1R"],
      ["cartola", "G-92SLBZ88H9"],
      ["somos", "G-2PG30S3LLT"],
      ["memoriaglobo", "G-QPECB9XXDY"],
      ["historiaglobo", "G-P03LXCRJMJ"],
      ["redeglobo", "G-7D6HZKQYC8"],
      ["globofilmes", "G-EMM9KQCDE9"],
      ["dev-beta", ""],
    ]);
    function o(t) {
      return r.get(t);
    }
  },
  function (t, e) {
    var n,
      r,
      o = (t.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function u(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (t) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        r = a;
      }
    })();
    var c,
      s = [],
      f = !1,
      l = -1;
    function h() {
      f &&
        c &&
        ((f = !1), c.length ? (s = c.concat(s)) : (l = -1), s.length && p());
    }
    function p() {
      if (!f) {
        var t = u(h);
        f = !0;
        for (var e = s.length; e; ) {
          for (c = s, s = []; ++l < e; ) c && c[l].run();
          (l = -1), (e = s.length);
        }
        (c = null),
          (f = !1),
          (function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(t);
            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          })(t);
      }
    }
    function d(t, e) {
      (this.fun = t), (this.array = e);
    }
    function v() {}
    (o.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (1 < arguments.length)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      s.push(new d(t, e)), 1 !== s.length || f || u(p);
    }),
      (d.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = v),
      (o.addListener = v),
      (o.once = v),
      (o.off = v),
      (o.removeListener = v),
      (o.removeAllListeners = v),
      (o.emit = v),
      (o.prependListener = v),
      (o.prependOnceListener = v),
      (o.listeners = function (t) {
        return [];
      }),
      (o.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (t, e, n) {
    (function (e) {
      var n = (function (t) {
        "use strict";
        var n,
          r = Object.prototype,
          o = r.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          u = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function s(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            i = Object.create(o.prototype),
            a = new P(r || []);
          return (
            (i._invoke = (function (t, e, n) {
              var r = l;
              return function (o, i) {
                if (r === p) throw new Error("Generator is already running");
                if (r === d) {
                  if ("throw" === o) throw i;
                  return A();
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var u = E(a, n);
                    if (u) {
                      if (u === v) continue;
                      return u;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if (r === l) throw ((r = d), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = p;
                  var c = f(t, e, n);
                  if ("normal" === c.type) {
                    if (((r = n.done ? d : h), c.arg === v)) continue;
                    return { value: c.arg, done: n.done };
                  }
                  "throw" === c.type &&
                    ((r = d), (n.method = "throw"), (n.arg = c.arg));
                }
              };
            })(t, n, a)),
            i
          );
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = s;
        var l = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          d = "completed",
          v = {};
        function y() {}
        function w() {}
        function m() {}
        var b = {};
        b[a] = function () {
          return this;
        };
        var g = Object.getPrototypeOf,
          _ = g && g(g(L([])));
        _ && _ !== r && o.call(_, a) && (b = _);
        var O = (m.prototype = y.prototype = Object.create(b));
        function x(t) {
          ["next", "throw", "return"].forEach(function (e) {
            t[e] = function (t) {
              return this._invoke(e, t);
            };
          });
        }
        function S(t) {
          var n;
          this._invoke = function (r, i) {
            function a() {
              return new e(function (n, a) {
                !(function n(r, i, a, u) {
                  var c = f(t[r], t, i);
                  if ("throw" !== c.type) {
                    var s = c.arg,
                      l = s.value;
                    return l && "object" == typeof l && o.call(l, "__await")
                      ? e.resolve(l.__await).then(
                          function (t) {
                            n("next", t, a, u);
                          },
                          function (t) {
                            n("throw", t, a, u);
                          }
                        )
                      : e.resolve(l).then(
                          function (t) {
                            (s.value = t), a(s);
                          },
                          function (t) {
                            return n("throw", t, a, u);
                          }
                        );
                  }
                  u(c.arg);
                })(r, i, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function E(t, e) {
          var r = t.iterator[e.method];
          if (r === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = n),
                E(t, e),
                "throw" === e.method)
              )
                return v;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return v;
          }
          var o = f(r, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), v
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = n)),
                (e.delegate = null),
                v)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              v);
        }
        function j(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function T(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0);
        }
        function L(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                i = function e() {
                  for (; ++r < t.length; )
                    if (o.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = n), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: n, done: !0 };
        }
        return (
          (w.prototype = O.constructor = m),
          (m.constructor = w),
          (m[c] = w.displayName = "GeneratorFunction"),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), c in t || (t[c] = "GeneratorFunction")),
              (t.prototype = Object.create(O)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          x(S.prototype),
          (S.prototype[u] = function () {
            return this;
          }),
          (t.AsyncIterator = S),
          (t.async = function (e, n, r, o) {
            var i = new S(s(e, n, r, o));
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          x(O),
          (O[c] = "Generator"),
          (O[a] = function () {
            return this;
          }),
          (O.toString = function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = L),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = n),
                this.tryEntries.forEach(T),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    o.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = n);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(r, o) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (e.next = r),
                  o && ((e.method = "next"), (e.arg = n)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                var a = this.tryEntries[i],
                  u = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var c = o.call(a, "catchLoc"),
                    s = o.call(a, "finallyLoc");
                  if (c && s) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  o.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), T(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    T(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: L(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = n),
                v
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = n;
      } catch (t) {
        Function("r", "regeneratorRuntime = r")(n);
      }
    }).call(this, n(1));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var r,
        o,
        i = n(0),
        a = n.n(i),
        u = n(13),
        c = n(14),
        s = n(7),
        f = n(2);
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(n, !0).forEach(function (e) {
                p(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(n).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function p(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function d(e, n, r, o, i, a, u) {
        try {
          var c = e[a](u),
            s = c.value;
        } catch (e) {
          return void r(e);
        }
        c.done ? n(s) : t.resolve(s).then(o, i);
      }
      function v(e) {
        return function () {
          var n = this,
            r = arguments;
          return new t(function (t, o) {
            var i = e.apply(n, r);
            function a(e) {
              d(i, t, o, a, u, "next", e);
            }
            function u(e) {
              d(i, t, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var y = { subtree: !1, childList: !0 },
        w = (function () {
          var e = v(
            a.a.mark(function e(n) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        new t(function (t) {
                          Object(c.a)(n).then(function (e) {
                            t(e);
                          });
                        })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        m = (function () {
          var t = v(
            a.a.mark(function t(e) {
              var n;
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(s.a)();
                    case 2:
                      (n = t.sent),
                        Object(u.a)(function (t) {
                          t.configure(h({ adPublisherProvidedID: e }, n));
                        });
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        b = new MutationObserver(function (t) {
          t.forEach(function (t) {
            Array.from(t.addedNodes).some(function (t) {
              return "bs-player" === t.localName;
            }) &&
              r &&
              0 < o.length &&
              m(o);
          });
        });
      document.querySelectorAll(".content-video__video").forEach(function (t) {
        b.observe(t, y);
      }),
        (e.a = function () {
          document.addEventListener(
            "readystatechange",
            v(
              a.a.mark(function t() {
                return a.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ("complete" === document.readyState)
                          return (t.next = 3), Object(f.a)();
                        t.next = 9;
                        break;
                      case 3:
                        if ((r = t.sent)) return (t.next = 7), w(r);
                        t.next = 9;
                        break;
                      case 7:
                        0 < (o = t.sent).length && m(o);
                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )
          );
        });
    }).call(this, n(1));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var r,
        o = n(4),
        i = n.n(o);
      e.a = function (e) {
        return i()(function () {
          var e = t.WM;
          return e &&
            e.Player &&
            e.PlayerManager &&
            e.PlayerManager.length !== r
            ? ((r = e.PlayerManager.length), { done: !0, value: e })
            : null;
        }).then(function (t) {
          return t.PlayerManager.forEach(e);
        });
      };
    }).call(this, n(6));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var r = n(0),
        o = n.n(r);
      function i(e, n, r, o, i, a, u) {
        try {
          var c = e[a](u),
            s = c.value;
        } catch (e) {
          return void r(e);
        }
        c.done ? n(s) : t.resolve(s).then(o, i);
      }
      e.a = (function () {
        var e,
          n =
            ((e = o.a.mark(function t(e) {
              var n, r, i, a;
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = new TextEncoder().encode(e)),
                        (t.next = 3),
                        crypto.subtle.digest("SHA-256", n)
                      );
                    case 3:
                      return (
                        (r = t.sent),
                        (i = Array.from(new Uint8Array(r))),
                        (a = i
                          .map(function (t) {
                            return t.toString(16).padStart(2, "0");
                          })
                          .join("")),
                        t.abrupt("return", a)
                      );
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })),
            function () {
              var n = this,
                r = arguments;
              return new t(function (t, o) {
                var a = e.apply(n, r);
                function u(e) {
                  i(a, t, o, u, c, "next", e);
                }
                function c(e) {
                  i(a, t, o, u, c, "throw", e);
                }
                u(void 0);
              });
            });
        return function (t) {
          return n.apply(this, arguments);
        };
      })();
    }).call(this, n(1));
  },
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(12);
    Object(r.a)();
  },
]);
(() => {
  if (
    globalThis.cdaaas &&
    globalThis.cdaaas.helpers.loadScript &&
    globalThis.glbFeatFlagConfig
  ) {
    var a = globalThis.glbFeatFlagConfig.clientInitUrl;
    globalThis.cdaaas.helpers.loadScript(a);
  }
})();
(function (g) {
  if (g.navigator && g.navigator.serviceWorker) {
    const SERVICE_WORKER =
      (g.cdaaas && g.cdaaas.SETTINGS && g.cdaaas.SETTINGS.SERVICE_WORKER) || {};

    if (SERVICE_WORKER.active) {
      g.addEventListener("load", () => {
        g.navigator
          .register(SERVICE_WORKER.url)
          .then((r) => console.log("SW registered: ", r))
          .catch((e) => console.error(e));
      });
    } else {
      g.navigator.serviceWorker
        .getRegistration()
        .then((r) => r && r.unregister());
    }
  }
})(window);

(() => {
  "use strict";
  var e,
    n,
    t,
    i = function () {
      var n =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "measureFired";
      clearTimeout(t), e && e.disconnect && e.disconnect();
      var i = new CustomEvent("glb_custom_measure", { detail: n });
      globalThis.dispatchEvent(i);
    };
  var r,
    o,
    a,
    u,
    c,
    s = -1,
    f = function (e) {
      addEventListener(
        "pageshow",
        function (n) {
          n.persisted && ((s = n.timeStamp), e(n));
        },
        !0
      );
    },
    l = function () {
      return (
        window.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType("navigation")[0]
      );
    },
    d = function () {
      var e = l();
      return (e && e.activationStart) || 0;
    },
    v = function (e, n) {
      var t = l(),
        i = "navigate";
      return (
        s >= 0
          ? (i = "back-forward-cache")
          : t &&
            (document.prerendering || d() > 0
              ? (i = "prerender")
              : document.wasDiscarded
              ? (i = "restore")
              : t.type && (i = t.type.replace(/_/g, "-"))),
        {
          name: e,
          value: void 0 === n ? -1 : n,
          rating: "good",
          delta: 0,
          entries: [],
          id: "v3-"
            .concat(Date.now(), "-")
            .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
          navigationType: i,
        }
      );
    },
    p = function (e, n, t) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          var i = new PerformanceObserver(function (e) {
            Promise.resolve().then(function () {
              n(e.getEntries());
            });
          });
          return (
            i.observe(Object.assign({ type: e, buffered: !0 }, t || {})), i
          );
        }
      } catch (e) {}
    },
    m = function (e, n, t, i) {
      var r, o;
      return function (a) {
        n.value >= 0 &&
          (a || i) &&
          ((o = n.value - (r || 0)) || void 0 === r) &&
          ((r = n.value),
          (n.delta = o),
          (n.rating = (function (e, n) {
            return e > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good";
          })(n.value, t)),
          e(n));
      };
    },
    h = function (e) {
      requestAnimationFrame(function () {
        return requestAnimationFrame(function () {
          return e();
        });
      });
    },
    g = function (e) {
      var n = function (n) {
        ("pagehide" !== n.type && "hidden" !== document.visibilityState) ||
          e(n);
      };
      addEventListener("visibilitychange", n, !0),
        addEventListener("pagehide", n, !0);
    },
    y = function (e) {
      var n = !1;
      return function (t) {
        n || (e(t), (n = !0));
      };
    },
    T = -1,
    E = function () {
      return "hidden" !== document.visibilityState || document.prerendering
        ? 1 / 0
        : 0;
    },
    C = function (e) {
      "hidden" === document.visibilityState &&
        T > -1 &&
        ((T = "visibilitychange" === e.type ? e.timeStamp : 0), L());
    },
    b = function () {
      addEventListener("visibilitychange", C, !0),
        addEventListener("prerenderingchange", C, !0);
    },
    L = function () {
      removeEventListener("visibilitychange", C, !0),
        removeEventListener("prerenderingchange", C, !0);
    },
    w = function () {
      return (
        T < 0 &&
          ((T = E()),
          b(),
          f(function () {
            setTimeout(function () {
              (T = E()), b();
            }, 0);
          })),
        {
          get firstHiddenTime() {
            return T;
          },
        }
      );
    },
    P = function (e) {
      document.prerendering
        ? addEventListener(
            "prerenderingchange",
            function () {
              return e();
            },
            !0
          )
        : e();
    },
    S = [1800, 3e3],
    A = function (e, n) {
      (n = n || {}),
        P(function () {
          var t,
            i = w(),
            r = v("FCP"),
            o = p("paint", function (e) {
              e.forEach(function (e) {
                "first-contentful-paint" === e.name &&
                  (o.disconnect(),
                  e.startTime < i.firstHiddenTime &&
                    ((r.value = Math.max(e.startTime - d(), 0)),
                    r.entries.push(e),
                    t(!0)));
              });
            });
          o &&
            ((t = m(e, r, S, n.reportAllChanges)),
            f(function (i) {
              (r = v("FCP")),
                (t = m(e, r, S, n.reportAllChanges)),
                h(function () {
                  (r.value = performance.now() - i.timeStamp), t(!0);
                });
            }));
        });
    },
    I = [0.1, 0.25],
    F = { passive: !0, capture: !0 },
    D = new Date(),
    M = function (e, n) {
      r || ((r = n), (o = e), (a = new Date()), B(removeEventListener), k());
    },
    k = function () {
      if (o >= 0 && o < a - D) {
        var e = {
          entryType: "first-input",
          name: r.type,
          target: r.target,
          cancelable: r.cancelable,
          startTime: r.timeStamp,
          processingStart: r.timeStamp + o,
        };
        u.forEach(function (n) {
          n(e);
        }),
          (u = []);
      }
    },
    x = function (e) {
      if (e.cancelable) {
        var n =
          (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
        "pointerdown" == e.type
          ? (function (e, n) {
              var t = function () {
                  M(e, n), r();
                },
                i = function () {
                  r();
                },
                r = function () {
                  removeEventListener("pointerup", t, F),
                    removeEventListener("pointercancel", i, F);
                };
              addEventListener("pointerup", t, F),
                addEventListener("pointercancel", i, F);
            })(n, e)
          : M(n, e);
      }
    },
    B = function (e) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (
        n
      ) {
        return e(n, x, F);
      });
    },
    N = [100, 300],
    H = 0,
    O = 1 / 0,
    R = 0,
    _ = function (e) {
      e.forEach(function (e) {
        e.interactionId &&
          ((O = Math.min(O, e.interactionId)),
          (R = Math.max(R, e.interactionId)),
          (H = R ? (R - O) / 7 + 1 : 0));
      });
    },
    q = function () {
      return c ? H : performance.interactionCount || 0;
    },
    j = function () {
      "interactionCount" in performance ||
        c ||
        (c = p("event", _, {
          type: "event",
          buffered: !0,
          durationThreshold: 0,
        }));
    },
    z = [200, 500],
    G = 0,
    J = function () {
      return q() - G;
    },
    K = [],
    Q = {},
    U = function (e) {
      var n = K[K.length - 1],
        t = Q[e.interactionId];
      if (t || K.length < 10 || e.duration > n.latency) {
        if (t) t.entries.push(e), (t.latency = Math.max(t.latency, e.duration));
        else {
          var i = { id: e.interactionId, latency: e.duration, entries: [e] };
          (Q[i.id] = i), K.push(i);
        }
        K.sort(function (e, n) {
          return n.latency - e.latency;
        }),
          K.splice(10).forEach(function (e) {
            delete Q[e.id];
          });
      }
    },
    V = [2500, 4e3],
    W = {},
    X = [800, 1800],
    Y = function e(n) {
      document.prerendering
        ? P(function () {
            return e(n);
          })
        : "complete" !== document.readyState
        ? addEventListener(
            "load",
            function () {
              return e(n);
            },
            !0
          )
        : setTimeout(n, 0);
    },
    Z = function (e, n) {
      n = n || {};
      var t = v("TTFB"),
        i = m(e, t, X, n.reportAllChanges);
      Y(function () {
        var r = l();
        if (r) {
          var o = r.responseStart;
          if (o <= 0 || o > performance.now()) return;
          (t.value = Math.max(o - d(), 0)),
            (t.entries = [r]),
            i(!0),
            f(function () {
              (t = v("TTFB", 0)), (i = m(e, t, X, n.reportAllChanges))(!0);
            });
        }
      });
    },
    $ = window.HorizonClient,
    ee = function (e, n, t) {
      return (function (e, n) {
        return (
          ("timeToFirstByte" === e && "TTFB" === n) ||
          ("cumulativeLayoutShift" === e && "CLS" === n) ||
          ("firstContentfulPaint" === e && "FCP" === n) ||
          ("largestContentfulPaint" === e && "LCP" === n) ||
          ("firstInputDelay" === e && "FID" === n) ||
          ("interactionToNextPaint" === e && "INP" === n)
        );
      })(e, n)
        ? String(t)
        : null;
    };
  $.then(function (e) {
    var n = (function (e) {
      return function (n) {
        var t = n.name,
          i = n.value,
          r = {
            id: "performance-web-vitals",
            version: "1.2",
            contentType: "performance",
            properties: {
              timeToFirstByte: ee("timeToFirstByte", t, i),
              cumulativeLayoutShift: ee("cumulativeLayoutShift", t, i),
              firstContentfulPaint: ee("firstContentfulPaint", t, i),
              fcpAsset: ee("fcpAsset", t, i),
              firstInputDelay: ee("firstInputDelay", t, i),
              largestContentfulPaint: ee("largestContentfulPaint", t, i),
              lcpAsset: ee("lcpAsset", t, i),
              interactionToNextPaint: ee("interactionToNextPaint", t, i),
            },
          };
        e.send(r);
      };
    })(e);
    A(n),
      (function (e, n) {
        (n = n || {}),
          P(function () {
            var t,
              i = w(),
              r = v("LCP"),
              o = function (e) {
                var n = e[e.length - 1];
                n &&
                  n.startTime < i.firstHiddenTime &&
                  ((r.value = Math.max(n.startTime - d(), 0)),
                  (r.entries = [n]),
                  t());
              },
              a = p("largest-contentful-paint", o);
            if (a) {
              t = m(e, r, V, n.reportAllChanges);
              var u = y(function () {
                W[r.id] ||
                  (o(a.takeRecords()), a.disconnect(), (W[r.id] = !0), t(!0));
              });
              ["keydown", "click"].forEach(function (e) {
                addEventListener(
                  e,
                  function () {
                    return setTimeout(u, 0);
                  },
                  !0
                );
              }),
                g(u),
                f(function (i) {
                  (r = v("LCP")),
                    (t = m(e, r, V, n.reportAllChanges)),
                    h(function () {
                      (r.value = performance.now() - i.timeStamp),
                        (W[r.id] = !0),
                        t(!0);
                    });
                });
            }
          });
      })(n),
      (function (e, n) {
        (n = n || {}),
          P(function () {
            var t,
              i = w(),
              a = v("FID"),
              c = function (e) {
                e.startTime < i.firstHiddenTime &&
                  ((a.value = e.processingStart - e.startTime),
                  a.entries.push(e),
                  t(!0));
              },
              s = function (e) {
                e.forEach(c);
              },
              l = p("first-input", s);
            (t = m(e, a, N, n.reportAllChanges)),
              l &&
                g(
                  y(function () {
                    s(l.takeRecords()), l.disconnect();
                  })
                ),
              l &&
                f(function () {
                  var i;
                  (a = v("FID")),
                    (t = m(e, a, N, n.reportAllChanges)),
                    (u = []),
                    (o = -1),
                    (r = null),
                    B(addEventListener),
                    (i = c),
                    u.push(i),
                    k();
                });
          });
      })(n),
      Z(n),
      (function (e, n) {
        (n = n || {}),
          A(
            y(function () {
              var t,
                i = v("CLS", 0),
                r = 0,
                o = [],
                a = function (e) {
                  e.forEach(function (e) {
                    if (!e.hadRecentInput) {
                      var n = o[0],
                        t = o[o.length - 1];
                      r &&
                      e.startTime - t.startTime < 1e3 &&
                      e.startTime - n.startTime < 5e3
                        ? ((r += e.value), o.push(e))
                        : ((r = e.value), (o = [e]));
                    }
                  }),
                    r > i.value && ((i.value = r), (i.entries = o), t());
                },
                u = p("layout-shift", a);
              u &&
                ((t = m(e, i, I, n.reportAllChanges)),
                g(function () {
                  a(u.takeRecords()), t(!0);
                }),
                f(function () {
                  (r = 0),
                    (i = v("CLS", 0)),
                    (t = m(e, i, I, n.reportAllChanges)),
                    h(function () {
                      return t();
                    });
                }),
                setTimeout(t, 0));
            })
          );
      })(n),
      (function (e, n) {
        (n = n || {}),
          P(function () {
            var t;
            j();
            var i,
              r = v("INP"),
              o = function (e) {
                e.forEach(function (e) {
                  e.interactionId && U(e),
                    "first-input" === e.entryType &&
                      !K.some(function (n) {
                        return n.entries.some(function (n) {
                          return (
                            e.duration === n.duration &&
                            e.startTime === n.startTime
                          );
                        });
                      }) &&
                      U(e);
                });
                var n,
                  t =
                    ((n = Math.min(K.length - 1, Math.floor(J() / 50))), K[n]);
                t &&
                  t.latency !== r.value &&
                  ((r.value = t.latency), (r.entries = t.entries), i());
              },
              a = p("event", o, {
                durationThreshold:
                  null !== (t = n.durationThreshold) && void 0 !== t ? t : 40,
              });
            (i = m(e, r, z, n.reportAllChanges)),
              a &&
                ("interactionId" in PerformanceEventTiming.prototype &&
                  a.observe({ type: "first-input", buffered: !0 }),
                g(function () {
                  o(a.takeRecords()),
                    r.value < 0 && J() > 0 && ((r.value = 0), (r.entries = [])),
                    i(!0);
                }),
                f(function () {
                  (K = []),
                    (G = q()),
                    (r = v("INP")),
                    (i = m(e, r, z, n.reportAllChanges));
                }));
          });
      })(n);
  }),
    (e = void 0),
    globalThis.PerformanceObserver &&
      (e = new PerformanceObserver(function () {
        clearTimeout(n), (n = setTimeout(i, 2500));
      })),
    globalThis.addEventListener("load", function () {
      e
        ? ((t = setTimeout(function () {
            return i("timeout");
          }, 6e4)),
          e.observe({ entryTypes: ["longtask"] }))
        : i("no_support");
    });
})();
!(function () {
  var n = {
      420: function () {
        var n, e;
        (n = globalThis.glb.fnMetadata.clientUrl),
          ((e = document.createElement("script")).async = !0),
          (e.src = n),
          (e.id = "fn-cdn-client"),
          document.body.appendChild(e);
        var t = function () {
          var n = globalThis.glb.fnMetadata || {},
            e = n.envName,
            t = n.headerProductColor,
            o = n.hasMenuCdn,
            a = globalThis.cdaaas.SETTINGS || {},
            l = a.CHANNEL || a.MOBILE_GROUP,
            r = {
              tenantInfo: {
                tenantId: a.SITE_ID,
                label: a.SITE_NAME,
                color: a.COR,
                home: globalThis.location.host,
              },
              headerProductColor: t,
              device: "desktop" === l ? "desktop" : "mobile",
              env: e,
              buscaUrl: globalThis.glb.fnBuscaUrl,
              config: globalThis.glb.cdnConfig,
            },
            i = ["header", "search"];
          o && i.push("menu"), globalThis.glbNavCdnClient.init(i, r);
        };
        globalThis.glbNavCdnClient && globalThis.glbNavCdnClient.isReady
          ? t()
          : document.addEventListener("glb.fn.navClientReady", t, !1);
      },
    },
    e = {};
  function t(o) {
    var a = e[o];
    if (void 0 !== a) return a.exports;
    var l = (e[o] = { exports: {} });
    return n[o](l, l.exports, t), l.exports;
  }
  (t.n = function (n) {
    var e =
      n && n.__esModule
        ? function () {
            return n.default;
          }
        : function () {
            return n;
          };
    return t.d(e, { a: e }), e;
  }),
    (t.d = function (n, e) {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (function () {
      "use strict";
      t(420);
    })();
})();
("use strict");
document.addEventListener("DOMContentLoaded", () => {
  function a() {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      const a = new IntersectionObserver(
        (a, b) => {
          a.filter((a) => a.isIntersecting).forEach((a) => {
            c(a.target), b.unobserve(a.target);
          });
        },
        { rootMargin: "0% 0% -20% 0%", threshold: 0 }
      );
      d.forEach((b) => a.observe(b));
    } else d.forEach(c);
  }
  const b = (a, b) =>
      "function" == typeof requestIdleCallback
        ? requestIdleCallback(a, { timeout: b })
        : setTimeout(a, b),
    c = (a) =>
      b(() => requestAnimationFrame(() => a.classList.add("highlighted")), 200),
    d = Array.from(document.getElementsByClassName("highlight"));
  b(a, 1e3);
});
!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 6));
})([
  function (t, e, n) {
    t.exports = n(5);
  },
  function (t, e) {
    function n(t, e, n, r, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void n(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    (t.exports = function (t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, r);
          function c(t) {
            n(a, o, i, c, u, "next", t);
          }
          function u(t) {
            n(a, o, i, c, u, "throw", t);
          }
          c(void 0);
        });
      };
    }),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
  },
  function (t, e) {
    (t.exports = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
  },
  function (t, e) {
    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    (t.exports = function (t, e, r) {
      return e && n(t.prototype, e), r && n(t, r), t;
    }),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
  },
  function (t, e, n) {},
  function (t, e, n) {
    var r = (function (t) {
      "use strict";
      var e = Object.prototype,
        n = e.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        o = r.iterator || "@@iterator",
        i = r.asyncIterator || "@@asyncIterator",
        a = r.toStringTag || "@@toStringTag";
      function c(t, e, n) {
        return (
          Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, n) {
          return (t[e] = n);
        };
      }
      function u(t, e, n, r) {
        var o = e && e.prototype instanceof f ? e : f,
          i = Object.create(o.prototype),
          a = new _(r || []);
        return (
          (i._invoke = (function (t, e, n) {
            var r = "suspendedStart";
            return function (o, i) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === o) throw i;
                return O();
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var c = b(a, n);
                  if (c) {
                    if (c === l) continue;
                    return c;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var u = s(t, e, n);
                if ("normal" === u.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), u.arg === l)
                  )
                    continue;
                  return { value: u.arg, done: n.done };
                }
                "throw" === u.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
              }
            };
          })(t, n, a)),
          i
        );
      }
      function s(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var l = {};
      function f() {}
      function h() {}
      function d() {}
      var p = {};
      p[o] = function () {
        return this;
      };
      var v = Object.getPrototypeOf,
        y = v && v(v(E([])));
      y && y !== e && n.call(y, o) && (p = y);
      var m = (d.prototype = f.prototype = Object.create(p));
      function g(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function w(t, e) {
        var r;
        this._invoke = function (o, i) {
          function a() {
            return new e(function (r, a) {
              !(function r(o, i, a, c) {
                var u = s(t[o], t, i);
                if ("throw" !== u.type) {
                  var l = u.arg,
                    f = l.value;
                  return f && "object" == typeof f && n.call(f, "__await")
                    ? e.resolve(f.__await).then(
                        function (t) {
                          r("next", t, a, c);
                        },
                        function (t) {
                          r("throw", t, a, c);
                        }
                      )
                    : e.resolve(f).then(
                        function (t) {
                          (l.value = t), a(l);
                        },
                        function (t) {
                          return r("throw", t, a, c);
                        }
                      );
                }
                c(u.arg);
              })(o, i, r, a);
            });
          }
          return (r = r ? r.then(a, a) : a());
        };
      }
      function b(t, e) {
        var n = t.iterator[e.method];
        if (void 0 === n) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              b(t, e),
              "throw" === e.method)
            )
              return l;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var r = s(n, t.iterator, e.arg);
        if ("throw" === r.type)
          return (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l;
        var o = r.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              l)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            l);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function L(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function _(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function E(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              i = function e() {
                for (; ++r < t.length; )
                  if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: O };
      }
      function O() {
        return { value: void 0, done: !0 };
      }
      return (
        (h.prototype = m.constructor = d),
        (d.constructor = h),
        (h.displayName = c(d, a, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === h || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, d)
              : ((t.__proto__ = d), c(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(m)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        g(w.prototype),
        (w.prototype[i] = function () {
          return this;
        }),
        (t.AsyncIterator = w),
        (t.async = function (e, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new w(u(e, n, r, o), i);
          return t.isGeneratorFunction(n)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        g(m),
        c(m, a, "Generator"),
        (m[o] = function () {
          return this;
        }),
        (m.toString = function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var n in t) e.push(n);
          return (
            e.reverse(),
            function n() {
              for (; e.length; ) {
                var r = e.pop();
                if (r in t) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (t.values = E),
        (_.prototype = {
          constructor: _,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(L),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  n.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function r(n, r) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = n),
                r && ((e.method = "next"), (e.arg = void 0)),
                !!r
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (
                o.tryLoc <= this.prev &&
                n.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              l
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), L(n), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  L(n);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, n) {
            return (
              (this.delegate = { iterator: E(t), resultName: e, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = r;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    n(4);
    var r = n(1),
      o = n.n(r),
      i = n(0),
      a = n.n(i),
      c = function () {
        var t = "banner_touch_point_subcontent",
          e = function () {
            window.googletag.cmd.push(function () {
              var e, n;
              window.bannerLazyLoading(t, {
                adUnit: "touchPoint/subcontent/".concat(
                  null === globalThis ||
                    void 0 === globalThis ||
                    null === (e = globalThis.cdaaas) ||
                    void 0 === e ||
                    null === (n = e.SETTINGS) ||
                    void 0 === n
                    ? void 0
                    : n.SITE_ID
                ),
              });
              var r = document.addEventListener(
                "adserver-ad-loaded",
                function (e) {
                  if (e.divId === t) {
                    document.removeEventListener("adserver-ad-loaded", r, !1);
                    var n = document.getElementById(t);
                    n.classList.remove("banner_touch_point_subcontent--hide"),
                      (n.style.marginBottom = "45px");
                  }
                }
              );
              window.disableLazyLoad(googletag);
            });
          };
        window.libPubReady ? e() : document.addEventListener("libPubReady", e);
      };
    (function () {
      var t = o()(
        a.a.mark(function t() {
          return a.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  c();
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
      return function () {
        return t.apply(this, arguments);
      };
    })()();
    var u = n(2),
      s = n.n(u),
      l = n(3),
      f = n.n(l),
      h = (function () {
        function t() {
          s()(this, t), (this.client = null);
        }
        var e, n;
        return (
          f()(t, [
            {
              key: "setHorizonClient",
              value:
                ((n = o()(
                  a.a.mark(function t() {
                    return a.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (window.HorizonClient) {
                                t.next = 5;
                                break;
                              }
                              return (t.next = 3), this.wait(100);
                            case 3:
                              t.next = 0;
                              break;
                            case 5:
                              return (t.next = 7), window.HorizonClient;
                            case 7:
                              this.client = t.sent;
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "send",
              value: function (t) {
                this.client
                  ? this.client.send(Object.assign(t))
                  : console.error("Horizon client does not exist yet");
              },
            },
            {
              key: "commonEvent",
              value: function (t) {
                var e = t.eventCategory,
                  n = t.eventAction,
                  r = t.eventLabel,
                  o = t.eventValue,
                  i = t.eventProperty;
                this.send({
                  id: "common-event",
                  version: "0.1",
                  contentType: "common",
                  properties: {
                    eventCategory: e,
                    eventAction: n,
                    eventLabel: r,
                    eventValue: o,
                    eventProperty: i,
                  },
                });
              },
            },
            {
              key: "wait",
              value:
                ((e = o()(
                  a.a.mark(function t(e) {
                    return a.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt(
                              "return",
                              new Promise(function (t) {
                                setTimeout(t, e);
                              })
                            );
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            },
          ]),
          t
        );
      })(),
      d = function (t, e) {
        p(t) && (v(), document.removeEventListener("scroll", e));
      },
      p = function (t) {
        return (
          e.top >= 0 &&
          e.left >= 0 &&
          e.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          e.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      },
      v = (function () {
        var t = o()(
          a.a.mark(function t() {
            var e;
            return a.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (e = new h()), (t.next = 3), e.setHorizonClient();
                  case 3:
                    e.commonEvent({
                      eventCategory: "tp-intracontent",
                      eventAction: "view",
                      eventLabel: "CTA",
                      eventValue: null,
                      eventProperty: null,
                    });
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })();
    setTimeout(function () {
      var t, e;
      "none" !==
        (p(e)
          ? v()
          : document.addEventListener(
              "scroll",
              (t = function () {
                return d(e, t);
              })
            ));
    }, 1500);
  },
]);
/*! For license information please see web.js.LICENSE.txt */
(() => {
  var t = {
      2991: (t, n, e) => {
        "use strict";
        e.d(n, { R: () => i, Y: () => a });
        var r = e(2176),
          o = {};
        function i() {
          return (0, r.KV)()
            ? e.g
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : o;
        }
        function a(t, n, e) {
          var r = e || i(),
            o = (r.__SENTRY__ = r.__SENTRY__ || {});
          return o[t] || (o[t] = n());
        }
      },
      2176: (t, n, e) => {
        "use strict";
        function r() {
          return (
            !(
              "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ &&
              __SENTRY_BROWSER_BUNDLE__
            ) &&
            "[object process]" ===
              Object.prototype.toString.call(
                "undefined" != typeof process ? process : 0
              )
          );
        }
        function o(t, n) {
          return t.require(n);
        }
        e.d(n, { l$: () => o, KV: () => r }), (t = e.hmd(t));
      },
      1170: (t, n, e) => {
        "use strict";
        e.d(n, { ph: () => c, yW: () => s });
        var r = e(2991),
          o = e(2176);
        t = e.hmd(t);
        var i = {
            nowSeconds: function () {
              return Date.now() / 1e3;
            },
          },
          a = (0, o.KV)()
            ? (function () {
                try {
                  return (0, o.l$)(t, "perf_hooks").performance;
                } catch (t) {
                  return;
                }
              })()
            : (function () {
                var t = (0, r.R)().performance;
                if (t && t.now)
                  return {
                    now: function () {
                      return t.now();
                    },
                    timeOrigin: Date.now() - t.now(),
                  };
              })(),
          u =
            void 0 === a
              ? i
              : {
                  nowSeconds: function () {
                    return (a.timeOrigin + a.now()) / 1e3;
                  },
                },
          s = i.nowSeconds.bind(i),
          c = u.nowSeconds.bind(u);
        !(function () {
          var t = (0, r.R)().performance;
          if (t && t.now) {
            var n = 36e5,
              e = t.now(),
              o = Date.now(),
              i = t.timeOrigin ? Math.abs(t.timeOrigin + e - o) : n,
              a = i < n,
              u = t.timing && t.timing.navigationStart,
              s = "number" == typeof u ? Math.abs(u + e - o) : n;
            (a || s < n) && i <= s && t.timeOrigin;
          }
        })();
      },
      8552: (t, n, e) => {
        var r = e(852)(e(5639), "DataView");
        t.exports = r;
      },
      1989: (t, n, e) => {
        var r = e(1789),
          o = e(401),
          i = e(7667),
          a = e(1327),
          u = e(1866);
        function s(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (s.prototype.clear = r),
          (s.prototype.delete = o),
          (s.prototype.get = i),
          (s.prototype.has = a),
          (s.prototype.set = u),
          (t.exports = s);
      },
      8407: (t, n, e) => {
        var r = e(7040),
          o = e(4125),
          i = e(2117),
          a = e(7518),
          u = e(4705);
        function s(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (s.prototype.clear = r),
          (s.prototype.delete = o),
          (s.prototype.get = i),
          (s.prototype.has = a),
          (s.prototype.set = u),
          (t.exports = s);
      },
      7071: (t, n, e) => {
        var r = e(852)(e(5639), "Map");
        t.exports = r;
      },
      3369: (t, n, e) => {
        var r = e(4785),
          o = e(1285),
          i = e(6e3),
          a = e(9916),
          u = e(5265);
        function s(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (s.prototype.clear = r),
          (s.prototype.delete = o),
          (s.prototype.get = i),
          (s.prototype.has = a),
          (s.prototype.set = u),
          (t.exports = s);
      },
      3818: (t, n, e) => {
        var r = e(852)(e(5639), "Promise");
        t.exports = r;
      },
      8525: (t, n, e) => {
        var r = e(852)(e(5639), "Set");
        t.exports = r;
      },
      8668: (t, n, e) => {
        var r = e(3369),
          o = e(619),
          i = e(2385);
        function a(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.__data__ = new r(); ++n < e; ) this.add(t[n]);
        }
        (a.prototype.add = a.prototype.push = o),
          (a.prototype.has = i),
          (t.exports = a);
      },
      6384: (t, n, e) => {
        var r = e(8407),
          o = e(7465),
          i = e(3779),
          a = e(7599),
          u = e(4758),
          s = e(4309);
        function c(t) {
          var n = (this.__data__ = new r(t));
          this.size = n.size;
        }
        (c.prototype.clear = o),
          (c.prototype.delete = i),
          (c.prototype.get = a),
          (c.prototype.has = u),
          (c.prototype.set = s),
          (t.exports = c);
      },
      2705: (t, n, e) => {
        var r = e(5639).Symbol;
        t.exports = r;
      },
      1149: (t, n, e) => {
        var r = e(5639).Uint8Array;
        t.exports = r;
      },
      577: (t, n, e) => {
        var r = e(852)(e(5639), "WeakMap");
        t.exports = r;
      },
      4963: (t) => {
        t.exports = function (t, n) {
          for (
            var e = -1, r = null == t ? 0 : t.length, o = 0, i = [];
            ++e < r;

          ) {
            var a = t[e];
            n(a, e, t) && (i[o++] = a);
          }
          return i;
        };
      },
      4636: (t, n, e) => {
        var r = e(2545),
          o = e(5694),
          i = e(1469),
          a = e(4144),
          u = e(5776),
          s = e(6719),
          c = Object.prototype.hasOwnProperty;
        t.exports = function (t, n) {
          var e = i(t),
            f = !e && o(t),
            l = !e && !f && a(t),
            p = !e && !f && !l && s(t),
            h = e || f || l || p,
            d = h ? r(t.length, String) : [],
            v = d.length;
          for (var _ in t)
            (!n && !c.call(t, _)) ||
              (h &&
                ("length" == _ ||
                  (l && ("offset" == _ || "parent" == _)) ||
                  (p &&
                    ("buffer" == _ ||
                      "byteLength" == _ ||
                      "byteOffset" == _)) ||
                  u(_, v))) ||
              d.push(_);
          return d;
        };
      },
      9932: (t) => {
        t.exports = function (t, n) {
          for (
            var e = -1, r = null == t ? 0 : t.length, o = Array(r);
            ++e < r;

          )
            o[e] = n(t[e], e, t);
          return o;
        };
      },
      2488: (t) => {
        t.exports = function (t, n) {
          for (var e = -1, r = n.length, o = t.length; ++e < r; )
            t[o + e] = n[e];
          return t;
        };
      },
      2908: (t) => {
        t.exports = function (t, n) {
          for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
            if (n(t[e], e, t)) return !0;
          return !1;
        };
      },
      8470: (t, n, e) => {
        var r = e(7813);
        t.exports = function (t, n) {
          for (var e = t.length; e--; ) if (r(t[e][0], n)) return e;
          return -1;
        };
      },
      9881: (t, n, e) => {
        var r = e(7816),
          o = e(9291)(r);
        t.exports = o;
      },
      8483: (t, n, e) => {
        var r = e(5063)();
        t.exports = r;
      },
      7816: (t, n, e) => {
        var r = e(8483),
          o = e(3674);
        t.exports = function (t, n) {
          return t && r(t, n, o);
        };
      },
      7786: (t, n, e) => {
        var r = e(1811),
          o = e(327);
        t.exports = function (t, n) {
          for (var e = 0, i = (n = r(n, t)).length; null != t && e < i; )
            t = t[o(n[e++])];
          return e && e == i ? t : void 0;
        };
      },
      8866: (t, n, e) => {
        var r = e(2488),
          o = e(1469);
        t.exports = function (t, n, e) {
          var i = n(t);
          return o(t) ? i : r(i, e(t));
        };
      },
      4239: (t, n, e) => {
        var r = e(2705),
          o = e(9607),
          i = e(2333),
          a = r ? r.toStringTag : void 0;
        t.exports = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : a && a in Object(t)
            ? o(t)
            : i(t);
        };
      },
      13: (t) => {
        t.exports = function (t, n) {
          return null != t && n in Object(t);
        };
      },
      9454: (t, n, e) => {
        var r = e(4239),
          o = e(7005);
        t.exports = function (t) {
          return o(t) && "[object Arguments]" == r(t);
        };
      },
      939: (t, n, e) => {
        var r = e(2492),
          o = e(7005);
        t.exports = function t(n, e, i, a, u) {
          return (
            n === e ||
            (null == n || null == e || (!o(n) && !o(e))
              ? n != n && e != e
              : r(n, e, i, a, t, u))
          );
        };
      },
      2492: (t, n, e) => {
        var r = e(6384),
          o = e(7114),
          i = e(8351),
          a = e(6096),
          u = e(4160),
          s = e(1469),
          c = e(4144),
          f = e(6719),
          l = "[object Arguments]",
          p = "[object Array]",
          h = "[object Object]",
          d = Object.prototype.hasOwnProperty;
        t.exports = function (t, n, e, v, _, y) {
          var g = s(t),
            m = s(n),
            b = g ? p : u(t),
            w = m ? p : u(n),
            x = (b = b == l ? h : b) == h,
            S = (w = w == l ? h : w) == h,
            E = b == w;
          if (E && c(t)) {
            if (!c(n)) return !1;
            (g = !0), (x = !1);
          }
          if (E && !x)
            return (
              y || (y = new r()),
              g || f(t) ? o(t, n, e, v, _, y) : i(t, n, b, e, v, _, y)
            );
          if (!(1 & e)) {
            var k = x && d.call(t, "__wrapped__"),
              j = S && d.call(n, "__wrapped__");
            if (k || j) {
              var O = k ? t.value() : t,
                T = j ? n.value() : n;
              return y || (y = new r()), _(O, T, e, v, y);
            }
          }
          return !!E && (y || (y = new r()), a(t, n, e, v, _, y));
        };
      },
      2958: (t, n, e) => {
        var r = e(6384),
          o = e(939);
        t.exports = function (t, n, e, i) {
          var a = e.length,
            u = a,
            s = !i;
          if (null == t) return !u;
          for (t = Object(t); a--; ) {
            var c = e[a];
            if (s && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
          }
          for (; ++a < u; ) {
            var f = (c = e[a])[0],
              l = t[f],
              p = c[1];
            if (s && c[2]) {
              if (void 0 === l && !(f in t)) return !1;
            } else {
              var h = new r();
              if (i) var d = i(l, p, f, t, n, h);
              if (!(void 0 === d ? o(p, l, 3, i, h) : d)) return !1;
            }
          }
          return !0;
        };
      },
      8458: (t, n, e) => {
        var r = e(3560),
          o = e(5346),
          i = e(3218),
          a = e(346),
          u = /^\[object .+?Constructor\]$/,
          s = Function.prototype,
          c = Object.prototype,
          f = s.toString,
          l = c.hasOwnProperty,
          p = RegExp(
            "^" +
              f
                .call(l)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        t.exports = function (t) {
          return !(!i(t) || o(t)) && (r(t) ? p : u).test(a(t));
        };
      },
      8749: (t, n, e) => {
        var r = e(4239),
          o = e(1780),
          i = e(7005),
          a = {};
        (a["[object Float32Array]"] =
          a["[object Float64Array]"] =
          a["[object Int8Array]"] =
          a["[object Int16Array]"] =
          a["[object Int32Array]"] =
          a["[object Uint8Array]"] =
          a["[object Uint8ClampedArray]"] =
          a["[object Uint16Array]"] =
          a["[object Uint32Array]"] =
            !0),
          (a["[object Arguments]"] =
            a["[object Array]"] =
            a["[object ArrayBuffer]"] =
            a["[object Boolean]"] =
            a["[object DataView]"] =
            a["[object Date]"] =
            a["[object Error]"] =
            a["[object Function]"] =
            a["[object Map]"] =
            a["[object Number]"] =
            a["[object Object]"] =
            a["[object RegExp]"] =
            a["[object Set]"] =
            a["[object String]"] =
            a["[object WeakMap]"] =
              !1),
          (t.exports = function (t) {
            return i(t) && o(t.length) && !!a[r(t)];
          });
      },
      7206: (t, n, e) => {
        var r = e(1573),
          o = e(6432),
          i = e(6557),
          a = e(1469),
          u = e(9601);
        t.exports = function (t) {
          return "function" == typeof t
            ? t
            : null == t
            ? i
            : "object" == typeof t
            ? a(t)
              ? o(t[0], t[1])
              : r(t)
            : u(t);
        };
      },
      280: (t, n, e) => {
        var r = e(5726),
          o = e(6916),
          i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          if (!r(t)) return o(t);
          var n = [];
          for (var e in Object(t))
            i.call(t, e) && "constructor" != e && n.push(e);
          return n;
        };
      },
      9199: (t, n, e) => {
        var r = e(9881),
          o = e(8612);
        t.exports = function (t, n) {
          var e = -1,
            i = o(t) ? Array(t.length) : [];
          return (
            r(t, function (t, r, o) {
              i[++e] = n(t, r, o);
            }),
            i
          );
        };
      },
      1573: (t, n, e) => {
        var r = e(2958),
          o = e(1499),
          i = e(2634);
        t.exports = function (t) {
          var n = o(t);
          return 1 == n.length && n[0][2]
            ? i(n[0][0], n[0][1])
            : function (e) {
                return e === t || r(e, t, n);
              };
        };
      },
      6432: (t, n, e) => {
        var r = e(939),
          o = e(7361),
          i = e(9095),
          a = e(5403),
          u = e(9162),
          s = e(2634),
          c = e(327);
        t.exports = function (t, n) {
          return a(t) && u(n)
            ? s(c(t), n)
            : function (e) {
                var a = o(e, t);
                return void 0 === a && a === n ? i(e, t) : r(n, a, 3);
              };
        };
      },
      371: (t) => {
        t.exports = function (t) {
          return function (n) {
            return null == n ? void 0 : n[t];
          };
        };
      },
      9152: (t, n, e) => {
        var r = e(7786);
        t.exports = function (t) {
          return function (n) {
            return r(n, t);
          };
        };
      },
      2545: (t) => {
        t.exports = function (t, n) {
          for (var e = -1, r = Array(t); ++e < t; ) r[e] = n(e);
          return r;
        };
      },
      531: (t, n, e) => {
        var r = e(2705),
          o = e(9932),
          i = e(1469),
          a = e(3448),
          u = r ? r.prototype : void 0,
          s = u ? u.toString : void 0;
        t.exports = function t(n) {
          if ("string" == typeof n) return n;
          if (i(n)) return o(n, t) + "";
          if (a(n)) return s ? s.call(n) : "";
          var e = n + "";
          return "0" == e && 1 / n == -1 / 0 ? "-0" : e;
        };
      },
      1717: (t) => {
        t.exports = function (t) {
          return function (n) {
            return t(n);
          };
        };
      },
      4757: (t) => {
        t.exports = function (t, n) {
          return t.has(n);
        };
      },
      1811: (t, n, e) => {
        var r = e(1469),
          o = e(5403),
          i = e(5514),
          a = e(9833);
        t.exports = function (t, n) {
          return r(t) ? t : o(t, n) ? [t] : i(a(t));
        };
      },
      4429: (t, n, e) => {
        var r = e(5639)["__core-js_shared__"];
        t.exports = r;
      },
      9291: (t, n, e) => {
        var r = e(8612);
        t.exports = function (t, n) {
          return function (e, o) {
            if (null == e) return e;
            if (!r(e)) return t(e, o);
            for (
              var i = e.length, a = n ? i : -1, u = Object(e);
              (n ? a-- : ++a < i) && !1 !== o(u[a], a, u);

            );
            return e;
          };
        };
      },
      5063: (t) => {
        t.exports = function (t) {
          return function (n, e, r) {
            for (var o = -1, i = Object(n), a = r(n), u = a.length; u--; ) {
              var s = a[t ? u : ++o];
              if (!1 === e(i[s], s, i)) break;
            }
            return n;
          };
        };
      },
      7114: (t, n, e) => {
        var r = e(8668),
          o = e(2908),
          i = e(4757);
        t.exports = function (t, n, e, a, u, s) {
          var c = 1 & e,
            f = t.length,
            l = n.length;
          if (f != l && !(c && l > f)) return !1;
          var p = s.get(t),
            h = s.get(n);
          if (p && h) return p == n && h == t;
          var d = -1,
            v = !0,
            _ = 2 & e ? new r() : void 0;
          for (s.set(t, n), s.set(n, t); ++d < f; ) {
            var y = t[d],
              g = n[d];
            if (a) var m = c ? a(g, y, d, n, t, s) : a(y, g, d, t, n, s);
            if (void 0 !== m) {
              if (m) continue;
              v = !1;
              break;
            }
            if (_) {
              if (
                !o(n, function (t, n) {
                  if (!i(_, n) && (y === t || u(y, t, e, a, s)))
                    return _.push(n);
                })
              ) {
                v = !1;
                break;
              }
            } else if (y !== g && !u(y, g, e, a, s)) {
              v = !1;
              break;
            }
          }
          return s.delete(t), s.delete(n), v;
        };
      },
      8351: (t, n, e) => {
        var r = e(2705),
          o = e(1149),
          i = e(7813),
          a = e(7114),
          u = e(8776),
          s = e(1814),
          c = r ? r.prototype : void 0,
          f = c ? c.valueOf : void 0;
        t.exports = function (t, n, e, r, c, l, p) {
          switch (e) {
            case "[object DataView]":
              if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
                return !1;
              (t = t.buffer), (n = n.buffer);
            case "[object ArrayBuffer]":
              return !(t.byteLength != n.byteLength || !l(new o(t), new o(n)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return i(+t, +n);
            case "[object Error]":
              return t.name == n.name && t.message == n.message;
            case "[object RegExp]":
            case "[object String]":
              return t == n + "";
            case "[object Map]":
              var h = u;
            case "[object Set]":
              var d = 1 & r;
              if ((h || (h = s), t.size != n.size && !d)) return !1;
              var v = p.get(t);
              if (v) return v == n;
              (r |= 2), p.set(t, n);
              var _ = a(h(t), h(n), r, c, l, p);
              return p.delete(t), _;
            case "[object Symbol]":
              if (f) return f.call(t) == f.call(n);
          }
          return !1;
        };
      },
      6096: (t, n, e) => {
        var r = e(8234),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t, n, e, i, a, u) {
          var s = 1 & e,
            c = r(t),
            f = c.length;
          if (f != r(n).length && !s) return !1;
          for (var l = f; l--; ) {
            var p = c[l];
            if (!(s ? p in n : o.call(n, p))) return !1;
          }
          var h = u.get(t),
            d = u.get(n);
          if (h && d) return h == n && d == t;
          var v = !0;
          u.set(t, n), u.set(n, t);
          for (var _ = s; ++l < f; ) {
            var y = t[(p = c[l])],
              g = n[p];
            if (i) var m = s ? i(g, y, p, n, t, u) : i(y, g, p, t, n, u);
            if (!(void 0 === m ? y === g || a(y, g, e, i, u) : m)) {
              v = !1;
              break;
            }
            _ || (_ = "constructor" == p);
          }
          if (v && !_) {
            var b = t.constructor,
              w = n.constructor;
            b == w ||
              !("constructor" in t) ||
              !("constructor" in n) ||
              ("function" == typeof b &&
                b instanceof b &&
                "function" == typeof w &&
                w instanceof w) ||
              (v = !1);
          }
          return u.delete(t), u.delete(n), v;
        };
      },
      1957: (t, n, e) => {
        var r = "object" == typeof e.g && e.g && e.g.Object === Object && e.g;
        t.exports = r;
      },
      8234: (t, n, e) => {
        var r = e(8866),
          o = e(9551),
          i = e(3674);
        t.exports = function (t) {
          return r(t, i, o);
        };
      },
      5050: (t, n, e) => {
        var r = e(7019);
        t.exports = function (t, n) {
          var e = t.__data__;
          return r(n) ? e["string" == typeof n ? "string" : "hash"] : e.map;
        };
      },
      1499: (t, n, e) => {
        var r = e(9162),
          o = e(3674);
        t.exports = function (t) {
          for (var n = o(t), e = n.length; e--; ) {
            var i = n[e],
              a = t[i];
            n[e] = [i, a, r(a)];
          }
          return n;
        };
      },
      852: (t, n, e) => {
        var r = e(8458),
          o = e(7801);
        t.exports = function (t, n) {
          var e = o(t, n);
          return r(e) ? e : void 0;
        };
      },
      9607: (t, n, e) => {
        var r = e(2705),
          o = Object.prototype,
          i = o.hasOwnProperty,
          a = o.toString,
          u = r ? r.toStringTag : void 0;
        t.exports = function (t) {
          var n = i.call(t, u),
            e = t[u];
          try {
            t[u] = void 0;
            var r = !0;
          } catch (t) {}
          var o = a.call(t);
          return r && (n ? (t[u] = e) : delete t[u]), o;
        };
      },
      9551: (t, n, e) => {
        var r = e(4963),
          o = e(479),
          i = Object.prototype.propertyIsEnumerable,
          a = Object.getOwnPropertySymbols,
          u = a
            ? function (t) {
                return null == t
                  ? []
                  : ((t = Object(t)),
                    r(a(t), function (n) {
                      return i.call(t, n);
                    }));
              }
            : o;
        t.exports = u;
      },
      4160: (t, n, e) => {
        var r = e(8552),
          o = e(7071),
          i = e(3818),
          a = e(8525),
          u = e(577),
          s = e(4239),
          c = e(346),
          f = "[object Map]",
          l = "[object Promise]",
          p = "[object Set]",
          h = "[object WeakMap]",
          d = "[object DataView]",
          v = c(r),
          _ = c(o),
          y = c(i),
          g = c(a),
          m = c(u),
          b = s;
        ((r && b(new r(new ArrayBuffer(1))) != d) ||
          (o && b(new o()) != f) ||
          (i && b(i.resolve()) != l) ||
          (a && b(new a()) != p) ||
          (u && b(new u()) != h)) &&
          (b = function (t) {
            var n = s(t),
              e = "[object Object]" == n ? t.constructor : void 0,
              r = e ? c(e) : "";
            if (r)
              switch (r) {
                case v:
                  return d;
                case _:
                  return f;
                case y:
                  return l;
                case g:
                  return p;
                case m:
                  return h;
              }
            return n;
          }),
          (t.exports = b);
      },
      7801: (t) => {
        t.exports = function (t, n) {
          return null == t ? void 0 : t[n];
        };
      },
      222: (t, n, e) => {
        var r = e(1811),
          o = e(5694),
          i = e(1469),
          a = e(5776),
          u = e(1780),
          s = e(327);
        t.exports = function (t, n, e) {
          for (var c = -1, f = (n = r(n, t)).length, l = !1; ++c < f; ) {
            var p = s(n[c]);
            if (!(l = null != t && e(t, p))) break;
            t = t[p];
          }
          return l || ++c != f
            ? l
            : !!(f = null == t ? 0 : t.length) &&
                u(f) &&
                a(p, f) &&
                (i(t) || o(t));
        };
      },
      1789: (t, n, e) => {
        var r = e(4536);
        t.exports = function () {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
      },
      401: (t) => {
        t.exports = function (t) {
          var n = this.has(t) && delete this.__data__[t];
          return (this.size -= n ? 1 : 0), n;
        };
      },
      7667: (t, n, e) => {
        var r = e(4536),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var n = this.__data__;
          if (r) {
            var e = n[t];
            return "__lodash_hash_undefined__" === e ? void 0 : e;
          }
          return o.call(n, t) ? n[t] : void 0;
        };
      },
      1327: (t, n, e) => {
        var r = e(4536),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var n = this.__data__;
          return r ? void 0 !== n[t] : o.call(n, t);
        };
      },
      1866: (t, n, e) => {
        var r = e(4536);
        t.exports = function (t, n) {
          var e = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (e[t] = r && void 0 === n ? "__lodash_hash_undefined__" : n),
            this
          );
        };
      },
      5776: (t) => {
        var n = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, e) {
          var r = typeof t;
          return (
            !!(e = null == e ? 9007199254740991 : e) &&
            ("number" == r || ("symbol" != r && n.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        };
      },
      5403: (t, n, e) => {
        var r = e(1469),
          o = e(3448),
          i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        t.exports = function (t, n) {
          if (r(t)) return !1;
          var e = typeof t;
          return (
            !(
              "number" != e &&
              "symbol" != e &&
              "boolean" != e &&
              null != t &&
              !o(t)
            ) ||
            a.test(t) ||
            !i.test(t) ||
            (null != n && t in Object(n))
          );
        };
      },
      7019: (t) => {
        t.exports = function (t) {
          var n = typeof t;
          return "string" == n ||
            "number" == n ||
            "symbol" == n ||
            "boolean" == n
            ? "__proto__" !== t
            : null === t;
        };
      },
      5346: (t, n, e) => {
        var r,
          o = e(4429),
          i = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + r
            : "";
        t.exports = function (t) {
          return !!i && i in t;
        };
      },
      5726: (t) => {
        var n = Object.prototype;
        t.exports = function (t) {
          var e = t && t.constructor;
          return t === (("function" == typeof e && e.prototype) || n);
        };
      },
      9162: (t, n, e) => {
        var r = e(3218);
        t.exports = function (t) {
          return t == t && !r(t);
        };
      },
      7040: (t) => {
        t.exports = function () {
          (this.__data__ = []), (this.size = 0);
        };
      },
      4125: (t, n, e) => {
        var r = e(8470),
          o = Array.prototype.splice;
        t.exports = function (t) {
          var n = this.__data__,
            e = r(n, t);
          return !(
            e < 0 ||
            (e == n.length - 1 ? n.pop() : o.call(n, e, 1), --this.size, 0)
          );
        };
      },
      2117: (t, n, e) => {
        var r = e(8470);
        t.exports = function (t) {
          var n = this.__data__,
            e = r(n, t);
          return e < 0 ? void 0 : n[e][1];
        };
      },
      7518: (t, n, e) => {
        var r = e(8470);
        t.exports = function (t) {
          return r(this.__data__, t) > -1;
        };
      },
      4705: (t, n, e) => {
        var r = e(8470);
        t.exports = function (t, n) {
          var e = this.__data__,
            o = r(e, t);
          return o < 0 ? (++this.size, e.push([t, n])) : (e[o][1] = n), this;
        };
      },
      4785: (t, n, e) => {
        var r = e(1989),
          o = e(8407),
          i = e(7071);
        t.exports = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (i || o)(),
              string: new r(),
            });
        };
      },
      1285: (t, n, e) => {
        var r = e(5050);
        t.exports = function (t) {
          var n = r(this, t).delete(t);
          return (this.size -= n ? 1 : 0), n;
        };
      },
      6e3: (t, n, e) => {
        var r = e(5050);
        t.exports = function (t) {
          return r(this, t).get(t);
        };
      },
      9916: (t, n, e) => {
        var r = e(5050);
        t.exports = function (t) {
          return r(this, t).has(t);
        };
      },
      5265: (t, n, e) => {
        var r = e(5050);
        t.exports = function (t, n) {
          var e = r(this, t),
            o = e.size;
          return e.set(t, n), (this.size += e.size == o ? 0 : 1), this;
        };
      },
      8776: (t) => {
        t.exports = function (t) {
          var n = -1,
            e = Array(t.size);
          return (
            t.forEach(function (t, r) {
              e[++n] = [r, t];
            }),
            e
          );
        };
      },
      2634: (t) => {
        t.exports = function (t, n) {
          return function (e) {
            return null != e && e[t] === n && (void 0 !== n || t in Object(e));
          };
        };
      },
      4523: (t, n, e) => {
        var r = e(8306);
        t.exports = function (t) {
          var n = r(t, function (t) {
              return 500 === e.size && e.clear(), t;
            }),
            e = n.cache;
          return n;
        };
      },
      4536: (t, n, e) => {
        var r = e(852)(Object, "create");
        t.exports = r;
      },
      6916: (t, n, e) => {
        var r = e(5569)(Object.keys, Object);
        t.exports = r;
      },
      1167: (t, n, e) => {
        t = e.nmd(t);
        var r = e(1957),
          o = n && !n.nodeType && n,
          i = o && t && !t.nodeType && t,
          a = i && i.exports === o && r.process,
          u = (function () {
            try {
              return (
                (i && i.require && i.require("util").types) ||
                (a && a.binding && a.binding("util"))
              );
            } catch (t) {}
          })();
        t.exports = u;
      },
      2333: (t) => {
        var n = Object.prototype.toString;
        t.exports = function (t) {
          return n.call(t);
        };
      },
      5569: (t) => {
        t.exports = function (t, n) {
          return function (e) {
            return t(n(e));
          };
        };
      },
      5639: (t, n, e) => {
        var r = e(1957),
          o = "object" == typeof self && self && self.Object === Object && self,
          i = r || o || Function("return this")();
        t.exports = i;
      },
      619: (t) => {
        t.exports = function (t) {
          return this.__data__.set(t, "__lodash_hash_undefined__"), this;
        };
      },
      2385: (t) => {
        t.exports = function (t) {
          return this.__data__.has(t);
        };
      },
      1814: (t) => {
        t.exports = function (t) {
          var n = -1,
            e = Array(t.size);
          return (
            t.forEach(function (t) {
              e[++n] = t;
            }),
            e
          );
        };
      },
      7465: (t, n, e) => {
        var r = e(8407);
        t.exports = function () {
          (this.__data__ = new r()), (this.size = 0);
        };
      },
      3779: (t) => {
        t.exports = function (t) {
          var n = this.__data__,
            e = n.delete(t);
          return (this.size = n.size), e;
        };
      },
      7599: (t) => {
        t.exports = function (t) {
          return this.__data__.get(t);
        };
      },
      4758: (t) => {
        t.exports = function (t) {
          return this.__data__.has(t);
        };
      },
      4309: (t, n, e) => {
        var r = e(8407),
          o = e(7071),
          i = e(3369);
        t.exports = function (t, n) {
          var e = this.__data__;
          if (e instanceof r) {
            var a = e.__data__;
            if (!o || a.length < 199)
              return a.push([t, n]), (this.size = ++e.size), this;
            e = this.__data__ = new i(a);
          }
          return e.set(t, n), (this.size = e.size), this;
        };
      },
      5514: (t, n, e) => {
        var r = e(4523),
          o =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          i = /\\(\\)?/g,
          a = r(function (t) {
            var n = [];
            return (
              46 === t.charCodeAt(0) && n.push(""),
              t.replace(o, function (t, e, r, o) {
                n.push(r ? o.replace(i, "$1") : e || t);
              }),
              n
            );
          });
        t.exports = a;
      },
      327: (t, n, e) => {
        var r = e(3448);
        t.exports = function (t) {
          if ("string" == typeof t || r(t)) return t;
          var n = t + "";
          return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
        };
      },
      346: (t) => {
        var n = Function.prototype.toString;
        t.exports = function (t) {
          if (null != t) {
            try {
              return n.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        };
      },
      7813: (t) => {
        t.exports = function (t, n) {
          return t === n || (t != t && n != n);
        };
      },
      7361: (t, n, e) => {
        var r = e(7786);
        t.exports = function (t, n, e) {
          var o = null == t ? void 0 : r(t, n);
          return void 0 === o ? e : o;
        };
      },
      9095: (t, n, e) => {
        var r = e(13),
          o = e(222);
        t.exports = function (t, n) {
          return null != t && o(t, n, r);
        };
      },
      6557: (t) => {
        t.exports = function (t) {
          return t;
        };
      },
      5694: (t, n, e) => {
        var r = e(9454),
          o = e(7005),
          i = Object.prototype,
          a = i.hasOwnProperty,
          u = i.propertyIsEnumerable,
          s = r(
            (function () {
              return arguments;
            })()
          )
            ? r
            : function (t) {
                return o(t) && a.call(t, "callee") && !u.call(t, "callee");
              };
        t.exports = s;
      },
      1469: (t) => {
        var n = Array.isArray;
        t.exports = n;
      },
      8612: (t, n, e) => {
        var r = e(3560),
          o = e(1780);
        t.exports = function (t) {
          return null != t && o(t.length) && !r(t);
        };
      },
      4144: (t, n, e) => {
        t = e.nmd(t);
        var r = e(5639),
          o = e(5062),
          i = n && !n.nodeType && n,
          a = i && t && !t.nodeType && t,
          u = a && a.exports === i ? r.Buffer : void 0,
          s = (u ? u.isBuffer : void 0) || o;
        t.exports = s;
      },
      3560: (t, n, e) => {
        var r = e(4239),
          o = e(3218);
        t.exports = function (t) {
          if (!o(t)) return !1;
          var n = r(t);
          return (
            "[object Function]" == n ||
            "[object GeneratorFunction]" == n ||
            "[object AsyncFunction]" == n ||
            "[object Proxy]" == n
          );
        };
      },
      1780: (t) => {
        t.exports = function (t) {
          return (
            "number" == typeof t &&
            t > -1 &&
            t % 1 == 0 &&
            t <= 9007199254740991
          );
        };
      },
      3218: (t) => {
        t.exports = function (t) {
          var n = typeof t;
          return null != t && ("object" == n || "function" == n);
        };
      },
      7005: (t) => {
        t.exports = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      3448: (t, n, e) => {
        var r = e(4239),
          o = e(7005);
        t.exports = function (t) {
          return "symbol" == typeof t || (o(t) && "[object Symbol]" == r(t));
        };
      },
      6719: (t, n, e) => {
        var r = e(8749),
          o = e(1717),
          i = e(1167),
          a = i && i.isTypedArray,
          u = a ? o(a) : r;
        t.exports = u;
      },
      3674: (t, n, e) => {
        var r = e(4636),
          o = e(280),
          i = e(8612);
        t.exports = function (t) {
          return i(t) ? r(t) : o(t);
        };
      },
      6486: function (t, n, e) {
        var r;
        (t = e.nmd(t)),
          function () {
            var o,
              i = "Expected a function",
              a = "__lodash_hash_undefined__",
              u = "__lodash_placeholder__",
              s = 32,
              c = 128,
              f = 1 / 0,
              l = 9007199254740991,
              p = NaN,
              h = 4294967295,
              d = [
                ["ary", c],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", 16],
                ["flip", 512],
                ["partial", s],
                ["partialRight", 64],
                ["rearg", 256],
              ],
              v = "[object Arguments]",
              _ = "[object Array]",
              y = "[object Boolean]",
              g = "[object Date]",
              m = "[object Error]",
              b = "[object Function]",
              w = "[object GeneratorFunction]",
              x = "[object Map]",
              S = "[object Number]",
              E = "[object Object]",
              k = "[object Promise]",
              j = "[object RegExp]",
              O = "[object Set]",
              T = "[object String]",
              R = "[object Symbol]",
              A = "[object WeakMap]",
              C = "[object ArrayBuffer]",
              I = "[object DataView]",
              L = "[object Float32Array]",
              N = "[object Float64Array]",
              P = "[object Int8Array]",
              M = "[object Int16Array]",
              D = "[object Int32Array]",
              U = "[object Uint8Array]",
              z = "[object Uint8ClampedArray]",
              q = "[object Uint16Array]",
              B = "[object Uint32Array]",
              W = /\b__p \+= '';/g,
              F = /\b(__p \+=) '' \+/g,
              $ = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              H = /&(?:amp|lt|gt|quot|#39);/g,
              G = /[&<>"']/g,
              Y = RegExp(H.source),
              K = RegExp(G.source),
              V = /<%-([\s\S]+?)%>/g,
              J = /<%([\s\S]+?)%>/g,
              X = /<%=([\s\S]+?)%>/g,
              Z = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              Q = /^\w*$/,
              tt =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              nt = /[\\^$.*+?()[\]{}|]/g,
              et = RegExp(nt.source),
              rt = /^\s+/,
              ot = /\s/,
              it = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
              at = /\{\n\/\* \[wrapped with (.+)\] \*/,
              ut = /,? & /,
              st = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              ct = /[()=,{}\[\]\/\s]/,
              ft = /\\(\\)?/g,
              lt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              pt = /\w*$/,
              ht = /^[-+]0x[0-9a-f]+$/i,
              dt = /^0b[01]+$/i,
              vt = /^\[object .+?Constructor\]$/,
              _t = /^0o[0-7]+$/i,
              yt = /^(?:0|[1-9]\d*)$/,
              gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              mt = /($^)/,
              bt = /['\n\r\u2028\u2029\\]/g,
              wt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
              xt = "a-z\\xdf-\\xf6\\xf8-\\xff",
              St = "A-Z\\xc0-\\xd6\\xd8-\\xde",
              Et =
                "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
              kt = "[" + Et + "]",
              jt = "[" + wt + "]",
              Ot = "\\d+",
              Tt = "[" + xt + "]",
              Rt =
                "[^\\ud800-\\udfff" +
                Et +
                Ot +
                "\\u2700-\\u27bf" +
                xt +
                St +
                "]",
              At = "\\ud83c[\\udffb-\\udfff]",
              Ct = "[^\\ud800-\\udfff]",
              It = "(?:\\ud83c[\\udde6-\\uddff]){2}",
              Lt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
              Nt = "[" + St + "]",
              Pt = "(?:" + Tt + "|" + Rt + ")",
              Mt = "(?:" + Nt + "|" + Rt + ")",
              Dt = "(?:['’](?:d|ll|m|re|s|t|ve))?",
              Ut = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
              zt = "(?:" + jt + "|" + At + ")?",
              qt = "[\\ufe0e\\ufe0f]?",
              Bt =
                qt +
                zt +
                "(?:\\u200d(?:" +
                [Ct, It, Lt].join("|") +
                ")" +
                qt +
                zt +
                ")*",
              Wt = "(?:" + ["[\\u2700-\\u27bf]", It, Lt].join("|") + ")" + Bt,
              Ft =
                "(?:" +
                [Ct + jt + "?", jt, It, Lt, "[\\ud800-\\udfff]"].join("|") +
                ")",
              $t = RegExp("['’]", "g"),
              Ht = RegExp(jt, "g"),
              Gt = RegExp(At + "(?=" + At + ")|" + Ft + Bt, "g"),
              Yt = RegExp(
                [
                  Nt +
                    "?" +
                    Tt +
                    "+" +
                    Dt +
                    "(?=" +
                    [kt, Nt, "$"].join("|") +
                    ")",
                  Mt + "+" + Ut + "(?=" + [kt, Nt + Pt, "$"].join("|") + ")",
                  Nt + "?" + Pt + "+" + Dt,
                  Nt + "+" + Ut,
                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                  Ot,
                  Wt,
                ].join("|"),
                "g"
              ),
              Kt = RegExp("[\\u200d\\ud800-\\udfff" + wt + "\\ufe0e\\ufe0f]"),
              Vt =
                /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              Jt = [
                "Array",
                "Buffer",
                "DataView",
                "Date",
                "Error",
                "Float32Array",
                "Float64Array",
                "Function",
                "Int8Array",
                "Int16Array",
                "Int32Array",
                "Map",
                "Math",
                "Object",
                "Promise",
                "RegExp",
                "Set",
                "String",
                "Symbol",
                "TypeError",
                "Uint8Array",
                "Uint8ClampedArray",
                "Uint16Array",
                "Uint32Array",
                "WeakMap",
                "_",
                "clearTimeout",
                "isFinite",
                "parseInt",
                "setTimeout",
              ],
              Xt = -1,
              Zt = {};
            (Zt[L] =
              Zt[N] =
              Zt[P] =
              Zt[M] =
              Zt[D] =
              Zt[U] =
              Zt[z] =
              Zt[q] =
              Zt[B] =
                !0),
              (Zt[v] =
                Zt[_] =
                Zt[C] =
                Zt[y] =
                Zt[I] =
                Zt[g] =
                Zt[m] =
                Zt[b] =
                Zt[x] =
                Zt[S] =
                Zt[E] =
                Zt[j] =
                Zt[O] =
                Zt[T] =
                Zt[A] =
                  !1);
            var Qt = {};
            (Qt[v] =
              Qt[_] =
              Qt[C] =
              Qt[I] =
              Qt[y] =
              Qt[g] =
              Qt[L] =
              Qt[N] =
              Qt[P] =
              Qt[M] =
              Qt[D] =
              Qt[x] =
              Qt[S] =
              Qt[E] =
              Qt[j] =
              Qt[O] =
              Qt[T] =
              Qt[R] =
              Qt[U] =
              Qt[z] =
              Qt[q] =
              Qt[B] =
                !0),
              (Qt[m] = Qt[b] = Qt[A] = !1);
            var tn = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029",
              },
              nn = parseFloat,
              en = parseInt,
              rn =
                "object" == typeof e.g && e.g && e.g.Object === Object && e.g,
              on =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              an = rn || on || Function("return this")(),
              un = n && !n.nodeType && n,
              sn = un && t && !t.nodeType && t,
              cn = sn && sn.exports === un,
              fn = cn && rn.process,
              ln = (function () {
                try {
                  return (
                    (sn && sn.require && sn.require("util").types) ||
                    (fn && fn.binding && fn.binding("util"))
                  );
                } catch (t) {}
              })(),
              pn = ln && ln.isArrayBuffer,
              hn = ln && ln.isDate,
              dn = ln && ln.isMap,
              vn = ln && ln.isRegExp,
              _n = ln && ln.isSet,
              yn = ln && ln.isTypedArray;
            function gn(t, n, e) {
              switch (e.length) {
                case 0:
                  return t.call(n);
                case 1:
                  return t.call(n, e[0]);
                case 2:
                  return t.call(n, e[0], e[1]);
                case 3:
                  return t.call(n, e[0], e[1], e[2]);
              }
              return t.apply(n, e);
            }
            function mn(t, n, e, r) {
              for (var o = -1, i = null == t ? 0 : t.length; ++o < i; ) {
                var a = t[o];
                n(r, a, e(a), t);
              }
              return r;
            }
            function bn(t, n) {
              for (
                var e = -1, r = null == t ? 0 : t.length;
                ++e < r && !1 !== n(t[e], e, t);

              );
              return t;
            }
            function wn(t, n) {
              for (
                var e = null == t ? 0 : t.length;
                e-- && !1 !== n(t[e], e, t);

              );
              return t;
            }
            function xn(t, n) {
              for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
                if (!n(t[e], e, t)) return !1;
              return !0;
            }
            function Sn(t, n) {
              for (
                var e = -1, r = null == t ? 0 : t.length, o = 0, i = [];
                ++e < r;

              ) {
                var a = t[e];
                n(a, e, t) && (i[o++] = a);
              }
              return i;
            }
            function En(t, n) {
              return !(null == t || !t.length) && Nn(t, n, 0) > -1;
            }
            function kn(t, n, e) {
              for (var r = -1, o = null == t ? 0 : t.length; ++r < o; )
                if (e(n, t[r])) return !0;
              return !1;
            }
            function jn(t, n) {
              for (
                var e = -1, r = null == t ? 0 : t.length, o = Array(r);
                ++e < r;

              )
                o[e] = n(t[e], e, t);
              return o;
            }
            function On(t, n) {
              for (var e = -1, r = n.length, o = t.length; ++e < r; )
                t[o + e] = n[e];
              return t;
            }
            function Tn(t, n, e, r) {
              var o = -1,
                i = null == t ? 0 : t.length;
              for (r && i && (e = t[++o]); ++o < i; ) e = n(e, t[o], o, t);
              return e;
            }
            function Rn(t, n, e, r) {
              var o = null == t ? 0 : t.length;
              for (r && o && (e = t[--o]); o--; ) e = n(e, t[o], o, t);
              return e;
            }
            function An(t, n) {
              for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
                if (n(t[e], e, t)) return !0;
              return !1;
            }
            var Cn = Un("length");
            function In(t, n, e) {
              var r;
              return (
                e(t, function (t, e, o) {
                  if (n(t, e, o)) return (r = e), !1;
                }),
                r
              );
            }
            function Ln(t, n, e, r) {
              for (var o = t.length, i = e + (r ? 1 : -1); r ? i-- : ++i < o; )
                if (n(t[i], i, t)) return i;
              return -1;
            }
            function Nn(t, n, e) {
              return n == n
                ? (function (t, n, e) {
                    for (var r = e - 1, o = t.length; ++r < o; )
                      if (t[r] === n) return r;
                    return -1;
                  })(t, n, e)
                : Ln(t, Mn, e);
            }
            function Pn(t, n, e, r) {
              for (var o = e - 1, i = t.length; ++o < i; )
                if (r(t[o], n)) return o;
              return -1;
            }
            function Mn(t) {
              return t != t;
            }
            function Dn(t, n) {
              var e = null == t ? 0 : t.length;
              return e ? Bn(t, n) / e : p;
            }
            function Un(t) {
              return function (n) {
                return null == n ? o : n[t];
              };
            }
            function zn(t) {
              return function (n) {
                return null == t ? o : t[n];
              };
            }
            function qn(t, n, e, r, o) {
              return (
                o(t, function (t, o, i) {
                  e = r ? ((r = !1), t) : n(e, t, o, i);
                }),
                e
              );
            }
            function Bn(t, n) {
              for (var e, r = -1, i = t.length; ++r < i; ) {
                var a = n(t[r]);
                a !== o && (e = e === o ? a : e + a);
              }
              return e;
            }
            function Wn(t, n) {
              for (var e = -1, r = Array(t); ++e < t; ) r[e] = n(e);
              return r;
            }
            function Fn(t) {
              return t ? t.slice(0, ue(t) + 1).replace(rt, "") : t;
            }
            function $n(t) {
              return function (n) {
                return t(n);
              };
            }
            function Hn(t, n) {
              return jn(n, function (n) {
                return t[n];
              });
            }
            function Gn(t, n) {
              return t.has(n);
            }
            function Yn(t, n) {
              for (var e = -1, r = t.length; ++e < r && Nn(n, t[e], 0) > -1; );
              return e;
            }
            function Kn(t, n) {
              for (var e = t.length; e-- && Nn(n, t[e], 0) > -1; );
              return e;
            }
            function Vn(t, n) {
              for (var e = t.length, r = 0; e--; ) t[e] === n && ++r;
              return r;
            }
            var Jn = zn({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s",
              }),
              Xn = zn({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              });
            function Zn(t) {
              return "\\" + tn[t];
            }
            function Qn(t) {
              return Kt.test(t);
            }
            function te(t) {
              var n = -1,
                e = Array(t.size);
              return (
                t.forEach(function (t, r) {
                  e[++n] = [r, t];
                }),
                e
              );
            }
            function ne(t, n) {
              return function (e) {
                return t(n(e));
              };
            }
            function ee(t, n) {
              for (var e = -1, r = t.length, o = 0, i = []; ++e < r; ) {
                var a = t[e];
                (a !== n && a !== u) || ((t[e] = u), (i[o++] = e));
              }
              return i;
            }
            function re(t) {
              var n = -1,
                e = Array(t.size);
              return (
                t.forEach(function (t) {
                  e[++n] = t;
                }),
                e
              );
            }
            function oe(t) {
              var n = -1,
                e = Array(t.size);
              return (
                t.forEach(function (t) {
                  e[++n] = [t, t];
                }),
                e
              );
            }
            function ie(t) {
              return Qn(t)
                ? (function (t) {
                    for (var n = (Gt.lastIndex = 0); Gt.test(t); ) ++n;
                    return n;
                  })(t)
                : Cn(t);
            }
            function ae(t) {
              return Qn(t)
                ? (function (t) {
                    return t.match(Gt) || [];
                  })(t)
                : (function (t) {
                    return t.split("");
                  })(t);
            }
            function ue(t) {
              for (var n = t.length; n-- && ot.test(t.charAt(n)); );
              return n;
            }
            var se = zn({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'",
              }),
              ce = (function t(n) {
                var e,
                  r = (n =
                    null == n
                      ? an
                      : ce.defaults(an.Object(), n, ce.pick(an, Jt))).Array,
                  ot = n.Date,
                  wt = n.Error,
                  xt = n.Function,
                  St = n.Math,
                  Et = n.Object,
                  kt = n.RegExp,
                  jt = n.String,
                  Ot = n.TypeError,
                  Tt = r.prototype,
                  Rt = xt.prototype,
                  At = Et.prototype,
                  Ct = n["__core-js_shared__"],
                  It = Rt.toString,
                  Lt = At.hasOwnProperty,
                  Nt = 0,
                  Pt = (e = /[^.]+$/.exec(
                    (Ct && Ct.keys && Ct.keys.IE_PROTO) || ""
                  ))
                    ? "Symbol(src)_1." + e
                    : "",
                  Mt = At.toString,
                  Dt = It.call(Et),
                  Ut = an._,
                  zt = kt(
                    "^" +
                      It.call(Lt)
                        .replace(nt, "\\$&")
                        .replace(
                          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                          "$1.*?"
                        ) +
                      "$"
                  ),
                  qt = cn ? n.Buffer : o,
                  Bt = n.Symbol,
                  Wt = n.Uint8Array,
                  Ft = qt ? qt.allocUnsafe : o,
                  Gt = ne(Et.getPrototypeOf, Et),
                  Kt = Et.create,
                  tn = At.propertyIsEnumerable,
                  rn = Tt.splice,
                  on = Bt ? Bt.isConcatSpreadable : o,
                  un = Bt ? Bt.iterator : o,
                  sn = Bt ? Bt.toStringTag : o,
                  fn = (function () {
                    try {
                      var t = fi(Et, "defineProperty");
                      return t({}, "", {}), t;
                    } catch (t) {}
                  })(),
                  ln = n.clearTimeout !== an.clearTimeout && n.clearTimeout,
                  Cn = ot && ot.now !== an.Date.now && ot.now,
                  zn = n.setTimeout !== an.setTimeout && n.setTimeout,
                  fe = St.ceil,
                  le = St.floor,
                  pe = Et.getOwnPropertySymbols,
                  he = qt ? qt.isBuffer : o,
                  de = n.isFinite,
                  ve = Tt.join,
                  _e = ne(Et.keys, Et),
                  ye = St.max,
                  ge = St.min,
                  me = ot.now,
                  be = n.parseInt,
                  we = St.random,
                  xe = Tt.reverse,
                  Se = fi(n, "DataView"),
                  Ee = fi(n, "Map"),
                  ke = fi(n, "Promise"),
                  je = fi(n, "Set"),
                  Oe = fi(n, "WeakMap"),
                  Te = fi(Et, "create"),
                  Re = Oe && new Oe(),
                  Ae = {},
                  Ce = zi(Se),
                  Ie = zi(Ee),
                  Le = zi(ke),
                  Ne = zi(je),
                  Pe = zi(Oe),
                  Me = Bt ? Bt.prototype : o,
                  De = Me ? Me.valueOf : o,
                  Ue = Me ? Me.toString : o;
                function ze(t) {
                  if (eu(t) && !Ha(t) && !(t instanceof Fe)) {
                    if (t instanceof We) return t;
                    if (Lt.call(t, "__wrapped__")) return qi(t);
                  }
                  return new We(t);
                }
                var qe = (function () {
                  function t() {}
                  return function (n) {
                    if (!nu(n)) return {};
                    if (Kt) return Kt(n);
                    t.prototype = n;
                    var e = new t();
                    return (t.prototype = o), e;
                  };
                })();
                function Be() {}
                function We(t, n) {
                  (this.__wrapped__ = t),
                    (this.__actions__ = []),
                    (this.__chain__ = !!n),
                    (this.__index__ = 0),
                    (this.__values__ = o);
                }
                function Fe(t) {
                  (this.__wrapped__ = t),
                    (this.__actions__ = []),
                    (this.__dir__ = 1),
                    (this.__filtered__ = !1),
                    (this.__iteratees__ = []),
                    (this.__takeCount__ = h),
                    (this.__views__ = []);
                }
                function $e(t) {
                  var n = -1,
                    e = null == t ? 0 : t.length;
                  for (this.clear(); ++n < e; ) {
                    var r = t[n];
                    this.set(r[0], r[1]);
                  }
                }
                function He(t) {
                  var n = -1,
                    e = null == t ? 0 : t.length;
                  for (this.clear(); ++n < e; ) {
                    var r = t[n];
                    this.set(r[0], r[1]);
                  }
                }
                function Ge(t) {
                  var n = -1,
                    e = null == t ? 0 : t.length;
                  for (this.clear(); ++n < e; ) {
                    var r = t[n];
                    this.set(r[0], r[1]);
                  }
                }
                function Ye(t) {
                  var n = -1,
                    e = null == t ? 0 : t.length;
                  for (this.__data__ = new Ge(); ++n < e; ) this.add(t[n]);
                }
                function Ke(t) {
                  var n = (this.__data__ = new He(t));
                  this.size = n.size;
                }
                function Ve(t, n) {
                  var e = Ha(t),
                    r = !e && $a(t),
                    o = !e && !r && Va(t),
                    i = !e && !r && !o && fu(t),
                    a = e || r || o || i,
                    u = a ? Wn(t.length, jt) : [],
                    s = u.length;
                  for (var c in t)
                    (!n && !Lt.call(t, c)) ||
                      (a &&
                        ("length" == c ||
                          (o && ("offset" == c || "parent" == c)) ||
                          (i &&
                            ("buffer" == c ||
                              "byteLength" == c ||
                              "byteOffset" == c)) ||
                          yi(c, s))) ||
                      u.push(c);
                  return u;
                }
                function Je(t) {
                  var n = t.length;
                  return n ? t[Gr(0, n - 1)] : o;
                }
                function Xe(t, n) {
                  return Ni(To(t), ar(n, 0, t.length));
                }
                function Ze(t) {
                  return Ni(To(t));
                }
                function Qe(t, n, e) {
                  ((e !== o && !Ba(t[n], e)) || (e === o && !(n in t))) &&
                    or(t, n, e);
                }
                function tr(t, n, e) {
                  var r = t[n];
                  (Lt.call(t, n) && Ba(r, e) && (e !== o || n in t)) ||
                    or(t, n, e);
                }
                function nr(t, n) {
                  for (var e = t.length; e--; ) if (Ba(t[e][0], n)) return e;
                  return -1;
                }
                function er(t, n, e, r) {
                  return (
                    lr(t, function (t, o, i) {
                      n(r, t, e(t), i);
                    }),
                    r
                  );
                }
                function rr(t, n) {
                  return t && Ro(n, Iu(n), t);
                }
                function or(t, n, e) {
                  "__proto__" == n && fn
                    ? fn(t, n, {
                        configurable: !0,
                        enumerable: !0,
                        value: e,
                        writable: !0,
                      })
                    : (t[n] = e);
                }
                function ir(t, n) {
                  for (
                    var e = -1, i = n.length, a = r(i), u = null == t;
                    ++e < i;

                  )
                    a[e] = u ? o : Ou(t, n[e]);
                  return a;
                }
                function ar(t, n, e) {
                  return (
                    t == t &&
                      (e !== o && (t = t <= e ? t : e),
                      n !== o && (t = t >= n ? t : n)),
                    t
                  );
                }
                function ur(t, n, e, r, i, a) {
                  var u,
                    s = 1 & n,
                    c = 2 & n,
                    f = 4 & n;
                  if ((e && (u = i ? e(t, r, i, a) : e(t)), u !== o)) return u;
                  if (!nu(t)) return t;
                  var l = Ha(t);
                  if (l) {
                    if (
                      ((u = (function (t) {
                        var n = t.length,
                          e = new t.constructor(n);
                        return (
                          n &&
                            "string" == typeof t[0] &&
                            Lt.call(t, "index") &&
                            ((e.index = t.index), (e.input = t.input)),
                          e
                        );
                      })(t)),
                      !s)
                    )
                      return To(t, u);
                  } else {
                    var p = hi(t),
                      h = p == b || p == w;
                    if (Va(t)) return xo(t, s);
                    if (p == E || p == v || (h && !i)) {
                      if (((u = c || h ? {} : vi(t)), !s))
                        return c
                          ? (function (t, n) {
                              return Ro(t, pi(t), n);
                            })(
                              t,
                              (function (t, n) {
                                return t && Ro(n, Lu(n), t);
                              })(u, t)
                            )
                          : (function (t, n) {
                              return Ro(t, li(t), n);
                            })(t, rr(u, t));
                    } else {
                      if (!Qt[p]) return i ? t : {};
                      u = (function (t, n, e) {
                        var r,
                          o = t.constructor;
                        switch (n) {
                          case C:
                            return So(t);
                          case y:
                          case g:
                            return new o(+t);
                          case I:
                            return (function (t, n) {
                              var e = n ? So(t.buffer) : t.buffer;
                              return new t.constructor(
                                e,
                                t.byteOffset,
                                t.byteLength
                              );
                            })(t, e);
                          case L:
                          case N:
                          case P:
                          case M:
                          case D:
                          case U:
                          case z:
                          case q:
                          case B:
                            return Eo(t, e);
                          case x:
                            return new o();
                          case S:
                          case T:
                            return new o(t);
                          case j:
                            return (function (t) {
                              var n = new t.constructor(t.source, pt.exec(t));
                              return (n.lastIndex = t.lastIndex), n;
                            })(t);
                          case O:
                            return new o();
                          case R:
                            return (r = t), De ? Et(De.call(r)) : {};
                        }
                      })(t, p, s);
                    }
                  }
                  a || (a = new Ke());
                  var d = a.get(t);
                  if (d) return d;
                  a.set(t, u),
                    uu(t)
                      ? t.forEach(function (r) {
                          u.add(ur(r, n, e, r, t, a));
                        })
                      : ru(t) &&
                        t.forEach(function (r, o) {
                          u.set(o, ur(r, n, e, o, t, a));
                        });
                  var _ = l ? o : (f ? (c ? ri : ei) : c ? Lu : Iu)(t);
                  return (
                    bn(_ || t, function (r, o) {
                      _ && (r = t[(o = r)]), tr(u, o, ur(r, n, e, o, t, a));
                    }),
                    u
                  );
                }
                function sr(t, n, e) {
                  var r = e.length;
                  if (null == t) return !r;
                  for (t = Et(t); r--; ) {
                    var i = e[r],
                      a = n[i],
                      u = t[i];
                    if ((u === o && !(i in t)) || !a(u)) return !1;
                  }
                  return !0;
                }
                function cr(t, n, e) {
                  if ("function" != typeof t) throw new Ot(i);
                  return Ai(function () {
                    t.apply(o, e);
                  }, n);
                }
                function fr(t, n, e, r) {
                  var o = -1,
                    i = En,
                    a = !0,
                    u = t.length,
                    s = [],
                    c = n.length;
                  if (!u) return s;
                  e && (n = jn(n, $n(e))),
                    r
                      ? ((i = kn), (a = !1))
                      : n.length >= 200 &&
                        ((i = Gn), (a = !1), (n = new Ye(n)));
                  t: for (; ++o < u; ) {
                    var f = t[o],
                      l = null == e ? f : e(f);
                    if (((f = r || 0 !== f ? f : 0), a && l == l)) {
                      for (var p = c; p--; ) if (n[p] === l) continue t;
                      s.push(f);
                    } else i(n, l, r) || s.push(f);
                  }
                  return s;
                }
                (ze.templateSettings = {
                  escape: V,
                  evaluate: J,
                  interpolate: X,
                  variable: "",
                  imports: { _: ze },
                }),
                  (ze.prototype = Be.prototype),
                  (ze.prototype.constructor = ze),
                  (We.prototype = qe(Be.prototype)),
                  (We.prototype.constructor = We),
                  (Fe.prototype = qe(Be.prototype)),
                  (Fe.prototype.constructor = Fe),
                  ($e.prototype.clear = function () {
                    (this.__data__ = Te ? Te(null) : {}), (this.size = 0);
                  }),
                  ($e.prototype.delete = function (t) {
                    var n = this.has(t) && delete this.__data__[t];
                    return (this.size -= n ? 1 : 0), n;
                  }),
                  ($e.prototype.get = function (t) {
                    var n = this.__data__;
                    if (Te) {
                      var e = n[t];
                      return e === a ? o : e;
                    }
                    return Lt.call(n, t) ? n[t] : o;
                  }),
                  ($e.prototype.has = function (t) {
                    var n = this.__data__;
                    return Te ? n[t] !== o : Lt.call(n, t);
                  }),
                  ($e.prototype.set = function (t, n) {
                    var e = this.__data__;
                    return (
                      (this.size += this.has(t) ? 0 : 1),
                      (e[t] = Te && n === o ? a : n),
                      this
                    );
                  }),
                  (He.prototype.clear = function () {
                    (this.__data__ = []), (this.size = 0);
                  }),
                  (He.prototype.delete = function (t) {
                    var n = this.__data__,
                      e = nr(n, t);
                    return !(
                      e < 0 ||
                      (e == n.length - 1 ? n.pop() : rn.call(n, e, 1),
                      --this.size,
                      0)
                    );
                  }),
                  (He.prototype.get = function (t) {
                    var n = this.__data__,
                      e = nr(n, t);
                    return e < 0 ? o : n[e][1];
                  }),
                  (He.prototype.has = function (t) {
                    return nr(this.__data__, t) > -1;
                  }),
                  (He.prototype.set = function (t, n) {
                    var e = this.__data__,
                      r = nr(e, t);
                    return (
                      r < 0 ? (++this.size, e.push([t, n])) : (e[r][1] = n),
                      this
                    );
                  }),
                  (Ge.prototype.clear = function () {
                    (this.size = 0),
                      (this.__data__ = {
                        hash: new $e(),
                        map: new (Ee || He)(),
                        string: new $e(),
                      });
                  }),
                  (Ge.prototype.delete = function (t) {
                    var n = si(this, t).delete(t);
                    return (this.size -= n ? 1 : 0), n;
                  }),
                  (Ge.prototype.get = function (t) {
                    return si(this, t).get(t);
                  }),
                  (Ge.prototype.has = function (t) {
                    return si(this, t).has(t);
                  }),
                  (Ge.prototype.set = function (t, n) {
                    var e = si(this, t),
                      r = e.size;
                    return (
                      e.set(t, n), (this.size += e.size == r ? 0 : 1), this
                    );
                  }),
                  (Ye.prototype.add = Ye.prototype.push =
                    function (t) {
                      return this.__data__.set(t, a), this;
                    }),
                  (Ye.prototype.has = function (t) {
                    return this.__data__.has(t);
                  }),
                  (Ke.prototype.clear = function () {
                    (this.__data__ = new He()), (this.size = 0);
                  }),
                  (Ke.prototype.delete = function (t) {
                    var n = this.__data__,
                      e = n.delete(t);
                    return (this.size = n.size), e;
                  }),
                  (Ke.prototype.get = function (t) {
                    return this.__data__.get(t);
                  }),
                  (Ke.prototype.has = function (t) {
                    return this.__data__.has(t);
                  }),
                  (Ke.prototype.set = function (t, n) {
                    var e = this.__data__;
                    if (e instanceof He) {
                      var r = e.__data__;
                      if (!Ee || r.length < 199)
                        return r.push([t, n]), (this.size = ++e.size), this;
                      e = this.__data__ = new Ge(r);
                    }
                    return e.set(t, n), (this.size = e.size), this;
                  });
                var lr = Io(mr),
                  pr = Io(br, !0);
                function hr(t, n) {
                  var e = !0;
                  return (
                    lr(t, function (t, r, o) {
                      return (e = !!n(t, r, o));
                    }),
                    e
                  );
                }
                function dr(t, n, e) {
                  for (var r = -1, i = t.length; ++r < i; ) {
                    var a = t[r],
                      u = n(a);
                    if (null != u && (s === o ? u == u && !cu(u) : e(u, s)))
                      var s = u,
                        c = a;
                  }
                  return c;
                }
                function vr(t, n) {
                  var e = [];
                  return (
                    lr(t, function (t, r, o) {
                      n(t, r, o) && e.push(t);
                    }),
                    e
                  );
                }
                function _r(t, n, e, r, o) {
                  var i = -1,
                    a = t.length;
                  for (e || (e = _i), o || (o = []); ++i < a; ) {
                    var u = t[i];
                    n > 0 && e(u)
                      ? n > 1
                        ? _r(u, n - 1, e, r, o)
                        : On(o, u)
                      : r || (o[o.length] = u);
                  }
                  return o;
                }
                var yr = Lo(),
                  gr = Lo(!0);
                function mr(t, n) {
                  return t && yr(t, n, Iu);
                }
                function br(t, n) {
                  return t && gr(t, n, Iu);
                }
                function wr(t, n) {
                  return Sn(n, function (n) {
                    return Za(t[n]);
                  });
                }
                function xr(t, n) {
                  for (
                    var e = 0, r = (n = go(n, t)).length;
                    null != t && e < r;

                  )
                    t = t[Ui(n[e++])];
                  return e && e == r ? t : o;
                }
                function Sr(t, n, e) {
                  var r = n(t);
                  return Ha(t) ? r : On(r, e(t));
                }
                function Er(t) {
                  return null == t
                    ? t === o
                      ? "[object Undefined]"
                      : "[object Null]"
                    : sn && sn in Et(t)
                    ? (function (t) {
                        var n = Lt.call(t, sn),
                          e = t[sn];
                        try {
                          t[sn] = o;
                          var r = !0;
                        } catch (t) {}
                        var i = Mt.call(t);
                        return r && (n ? (t[sn] = e) : delete t[sn]), i;
                      })(t)
                    : (function (t) {
                        return Mt.call(t);
                      })(t);
                }
                function kr(t, n) {
                  return t > n;
                }
                function jr(t, n) {
                  return null != t && Lt.call(t, n);
                }
                function Or(t, n) {
                  return null != t && n in Et(t);
                }
                function Tr(t, n, e) {
                  for (
                    var i = e ? kn : En,
                      a = t[0].length,
                      u = t.length,
                      s = u,
                      c = r(u),
                      f = 1 / 0,
                      l = [];
                    s--;

                  ) {
                    var p = t[s];
                    s && n && (p = jn(p, $n(n))),
                      (f = ge(p.length, f)),
                      (c[s] =
                        !e && (n || (a >= 120 && p.length >= 120))
                          ? new Ye(s && p)
                          : o);
                  }
                  p = t[0];
                  var h = -1,
                    d = c[0];
                  t: for (; ++h < a && l.length < f; ) {
                    var v = p[h],
                      _ = n ? n(v) : v;
                    if (
                      ((v = e || 0 !== v ? v : 0), !(d ? Gn(d, _) : i(l, _, e)))
                    ) {
                      for (s = u; --s; ) {
                        var y = c[s];
                        if (!(y ? Gn(y, _) : i(t[s], _, e))) continue t;
                      }
                      d && d.push(_), l.push(v);
                    }
                  }
                  return l;
                }
                function Rr(t, n, e) {
                  var r =
                    null == (t = ji(t, (n = go(n, t)))) ? t : t[Ui(Xi(n))];
                  return null == r ? o : gn(r, t, e);
                }
                function Ar(t) {
                  return eu(t) && Er(t) == v;
                }
                function Cr(t, n, e, r, i) {
                  return (
                    t === n ||
                    (null == t || null == n || (!eu(t) && !eu(n))
                      ? t != t && n != n
                      : (function (t, n, e, r, i, a) {
                          var u = Ha(t),
                            s = Ha(n),
                            c = u ? _ : hi(t),
                            f = s ? _ : hi(n),
                            l = (c = c == v ? E : c) == E,
                            p = (f = f == v ? E : f) == E,
                            h = c == f;
                          if (h && Va(t)) {
                            if (!Va(n)) return !1;
                            (u = !0), (l = !1);
                          }
                          if (h && !l)
                            return (
                              a || (a = new Ke()),
                              u || fu(t)
                                ? ti(t, n, e, r, i, a)
                                : (function (t, n, e, r, o, i, a) {
                                    switch (e) {
                                      case I:
                                        if (
                                          t.byteLength != n.byteLength ||
                                          t.byteOffset != n.byteOffset
                                        )
                                          return !1;
                                        (t = t.buffer), (n = n.buffer);
                                      case C:
                                        return !(
                                          t.byteLength != n.byteLength ||
                                          !i(new Wt(t), new Wt(n))
                                        );
                                      case y:
                                      case g:
                                      case S:
                                        return Ba(+t, +n);
                                      case m:
                                        return (
                                          t.name == n.name &&
                                          t.message == n.message
                                        );
                                      case j:
                                      case T:
                                        return t == n + "";
                                      case x:
                                        var u = te;
                                      case O:
                                        var s = 1 & r;
                                        if (
                                          (u || (u = re),
                                          t.size != n.size && !s)
                                        )
                                          return !1;
                                        var c = a.get(t);
                                        if (c) return c == n;
                                        (r |= 2), a.set(t, n);
                                        var f = ti(u(t), u(n), r, o, i, a);
                                        return a.delete(t), f;
                                      case R:
                                        if (De) return De.call(t) == De.call(n);
                                    }
                                    return !1;
                                  })(t, n, c, e, r, i, a)
                            );
                          if (!(1 & e)) {
                            var d = l && Lt.call(t, "__wrapped__"),
                              b = p && Lt.call(n, "__wrapped__");
                            if (d || b) {
                              var w = d ? t.value() : t,
                                k = b ? n.value() : n;
                              return a || (a = new Ke()), i(w, k, e, r, a);
                            }
                          }
                          return (
                            !!h &&
                            (a || (a = new Ke()),
                            (function (t, n, e, r, i, a) {
                              var u = 1 & e,
                                s = ei(t),
                                c = s.length;
                              if (c != ei(n).length && !u) return !1;
                              for (var f = c; f--; ) {
                                var l = s[f];
                                if (!(u ? l in n : Lt.call(n, l))) return !1;
                              }
                              var p = a.get(t),
                                h = a.get(n);
                              if (p && h) return p == n && h == t;
                              var d = !0;
                              a.set(t, n), a.set(n, t);
                              for (var v = u; ++f < c; ) {
                                var _ = t[(l = s[f])],
                                  y = n[l];
                                if (r)
                                  var g = u
                                    ? r(y, _, l, n, t, a)
                                    : r(_, y, l, t, n, a);
                                if (
                                  !(g === o ? _ === y || i(_, y, e, r, a) : g)
                                ) {
                                  d = !1;
                                  break;
                                }
                                v || (v = "constructor" == l);
                              }
                              if (d && !v) {
                                var m = t.constructor,
                                  b = n.constructor;
                                m == b ||
                                  !("constructor" in t) ||
                                  !("constructor" in n) ||
                                  ("function" == typeof m &&
                                    m instanceof m &&
                                    "function" == typeof b &&
                                    b instanceof b) ||
                                  (d = !1);
                              }
                              return a.delete(t), a.delete(n), d;
                            })(t, n, e, r, i, a))
                          );
                        })(t, n, e, r, Cr, i))
                  );
                }
                function Ir(t, n, e, r) {
                  var i = e.length,
                    a = i,
                    u = !r;
                  if (null == t) return !a;
                  for (t = Et(t); i--; ) {
                    var s = e[i];
                    if (u && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
                  }
                  for (; ++i < a; ) {
                    var c = (s = e[i])[0],
                      f = t[c],
                      l = s[1];
                    if (u && s[2]) {
                      if (f === o && !(c in t)) return !1;
                    } else {
                      var p = new Ke();
                      if (r) var h = r(f, l, c, t, n, p);
                      if (!(h === o ? Cr(l, f, 3, r, p) : h)) return !1;
                    }
                  }
                  return !0;
                }
                function Lr(t) {
                  return (
                    !(!nu(t) || ((n = t), Pt && Pt in n)) &&
                    (Za(t) ? zt : vt).test(zi(t))
                  );
                  var n;
                }
                function Nr(t) {
                  return "function" == typeof t
                    ? t
                    : null == t
                    ? os
                    : "object" == typeof t
                    ? Ha(t)
                      ? zr(t[0], t[1])
                      : Ur(t)
                    : hs(t);
                }
                function Pr(t) {
                  if (!xi(t)) return _e(t);
                  var n = [];
                  for (var e in Et(t))
                    Lt.call(t, e) && "constructor" != e && n.push(e);
                  return n;
                }
                function Mr(t, n) {
                  return t < n;
                }
                function Dr(t, n) {
                  var e = -1,
                    o = Ya(t) ? r(t.length) : [];
                  return (
                    lr(t, function (t, r, i) {
                      o[++e] = n(t, r, i);
                    }),
                    o
                  );
                }
                function Ur(t) {
                  var n = ci(t);
                  return 1 == n.length && n[0][2]
                    ? Ei(n[0][0], n[0][1])
                    : function (e) {
                        return e === t || Ir(e, t, n);
                      };
                }
                function zr(t, n) {
                  return mi(t) && Si(n)
                    ? Ei(Ui(t), n)
                    : function (e) {
                        var r = Ou(e, t);
                        return r === o && r === n ? Tu(e, t) : Cr(n, r, 3);
                      };
                }
                function qr(t, n, e, r, i) {
                  t !== n &&
                    yr(
                      n,
                      function (a, u) {
                        if ((i || (i = new Ke()), nu(a)))
                          !(function (t, n, e, r, i, a, u) {
                            var s = Ti(t, e),
                              c = Ti(n, e),
                              f = u.get(c);
                            if (f) Qe(t, e, f);
                            else {
                              var l = a ? a(s, c, e + "", t, n, u) : o,
                                p = l === o;
                              if (p) {
                                var h = Ha(c),
                                  d = !h && Va(c),
                                  v = !h && !d && fu(c);
                                (l = c),
                                  h || d || v
                                    ? Ha(s)
                                      ? (l = s)
                                      : Ka(s)
                                      ? (l = To(s))
                                      : d
                                      ? ((p = !1), (l = xo(c, !0)))
                                      : v
                                      ? ((p = !1), (l = Eo(c, !0)))
                                      : (l = [])
                                    : iu(c) || $a(c)
                                    ? ((l = s),
                                      $a(s)
                                        ? (l = gu(s))
                                        : (nu(s) && !Za(s)) || (l = vi(c)))
                                    : (p = !1);
                              }
                              p && (u.set(c, l), i(l, c, r, a, u), u.delete(c)),
                                Qe(t, e, l);
                            }
                          })(t, n, u, e, qr, r, i);
                        else {
                          var s = r ? r(Ti(t, u), a, u + "", t, n, i) : o;
                          s === o && (s = a), Qe(t, u, s);
                        }
                      },
                      Lu
                    );
                }
                function Br(t, n) {
                  var e = t.length;
                  if (e) return yi((n += n < 0 ? e : 0), e) ? t[n] : o;
                }
                function Wr(t, n, e) {
                  n = n.length
                    ? jn(n, function (t) {
                        return Ha(t)
                          ? function (n) {
                              return xr(n, 1 === t.length ? t[0] : t);
                            }
                          : t;
                      })
                    : [os];
                  var r = -1;
                  n = jn(n, $n(ui()));
                  var o = Dr(t, function (t, e, o) {
                    var i = jn(n, function (n) {
                      return n(t);
                    });
                    return { criteria: i, index: ++r, value: t };
                  });
                  return (function (t, n) {
                    var r = t.length;
                    for (
                      t.sort(function (t, n) {
                        return (function (t, n, e) {
                          for (
                            var r = -1,
                              o = t.criteria,
                              i = n.criteria,
                              a = o.length,
                              u = e.length;
                            ++r < a;

                          ) {
                            var s = ko(o[r], i[r]);
                            if (s)
                              return r >= u ? s : s * ("desc" == e[r] ? -1 : 1);
                          }
                          return t.index - n.index;
                        })(t, n, e);
                      });
                      r--;

                    )
                      t[r] = t[r].value;
                    return t;
                  })(o);
                }
                function Fr(t, n, e) {
                  for (var r = -1, o = n.length, i = {}; ++r < o; ) {
                    var a = n[r],
                      u = xr(t, a);
                    e(u, a) && Xr(i, go(a, t), u);
                  }
                  return i;
                }
                function $r(t, n, e, r) {
                  var o = r ? Pn : Nn,
                    i = -1,
                    a = n.length,
                    u = t;
                  for (
                    t === n && (n = To(n)), e && (u = jn(t, $n(e)));
                    ++i < a;

                  )
                    for (
                      var s = 0, c = n[i], f = e ? e(c) : c;
                      (s = o(u, f, s, r)) > -1;

                    )
                      u !== t && rn.call(u, s, 1), rn.call(t, s, 1);
                  return t;
                }
                function Hr(t, n) {
                  for (var e = t ? n.length : 0, r = e - 1; e--; ) {
                    var o = n[e];
                    if (e == r || o !== i) {
                      var i = o;
                      yi(o) ? rn.call(t, o, 1) : co(t, o);
                    }
                  }
                  return t;
                }
                function Gr(t, n) {
                  return t + le(we() * (n - t + 1));
                }
                function Yr(t, n) {
                  var e = "";
                  if (!t || n < 1 || n > l) return e;
                  do {
                    n % 2 && (e += t), (n = le(n / 2)) && (t += t);
                  } while (n);
                  return e;
                }
                function Kr(t, n) {
                  return Ci(ki(t, n, os), t + "");
                }
                function Vr(t) {
                  return Je(Bu(t));
                }
                function Jr(t, n) {
                  var e = Bu(t);
                  return Ni(e, ar(n, 0, e.length));
                }
                function Xr(t, n, e, r) {
                  if (!nu(t)) return t;
                  for (
                    var i = -1, a = (n = go(n, t)).length, u = a - 1, s = t;
                    null != s && ++i < a;

                  ) {
                    var c = Ui(n[i]),
                      f = e;
                    if (
                      "__proto__" === c ||
                      "constructor" === c ||
                      "prototype" === c
                    )
                      return t;
                    if (i != u) {
                      var l = s[c];
                      (f = r ? r(l, c, s) : o) === o &&
                        (f = nu(l) ? l : yi(n[i + 1]) ? [] : {});
                    }
                    tr(s, c, f), (s = s[c]);
                  }
                  return t;
                }
                var Zr = Re
                    ? function (t, n) {
                        return Re.set(t, n), t;
                      }
                    : os,
                  Qr = fn
                    ? function (t, n) {
                        return fn(t, "toString", {
                          configurable: !0,
                          enumerable: !1,
                          value: ns(n),
                          writable: !0,
                        });
                      }
                    : os;
                function to(t) {
                  return Ni(Bu(t));
                }
                function no(t, n, e) {
                  var o = -1,
                    i = t.length;
                  n < 0 && (n = -n > i ? 0 : i + n),
                    (e = e > i ? i : e) < 0 && (e += i),
                    (i = n > e ? 0 : (e - n) >>> 0),
                    (n >>>= 0);
                  for (var a = r(i); ++o < i; ) a[o] = t[o + n];
                  return a;
                }
                function eo(t, n) {
                  var e;
                  return (
                    lr(t, function (t, r, o) {
                      return !(e = n(t, r, o));
                    }),
                    !!e
                  );
                }
                function ro(t, n, e) {
                  var r = 0,
                    o = null == t ? r : t.length;
                  if ("number" == typeof n && n == n && o <= 2147483647) {
                    for (; r < o; ) {
                      var i = (r + o) >>> 1,
                        a = t[i];
                      null !== a && !cu(a) && (e ? a <= n : a < n)
                        ? (r = i + 1)
                        : (o = i);
                    }
                    return o;
                  }
                  return oo(t, n, os, e);
                }
                function oo(t, n, e, r) {
                  var i = 0,
                    a = null == t ? 0 : t.length;
                  if (0 === a) return 0;
                  for (
                    var u = (n = e(n)) != n,
                      s = null === n,
                      c = cu(n),
                      f = n === o;
                    i < a;

                  ) {
                    var l = le((i + a) / 2),
                      p = e(t[l]),
                      h = p !== o,
                      d = null === p,
                      v = p == p,
                      _ = cu(p);
                    if (u) var y = r || v;
                    else
                      y = f
                        ? v && (r || h)
                        : s
                        ? v && h && (r || !d)
                        : c
                        ? v && h && !d && (r || !_)
                        : !d && !_ && (r ? p <= n : p < n);
                    y ? (i = l + 1) : (a = l);
                  }
                  return ge(a, 4294967294);
                }
                function io(t, n) {
                  for (var e = -1, r = t.length, o = 0, i = []; ++e < r; ) {
                    var a = t[e],
                      u = n ? n(a) : a;
                    if (!e || !Ba(u, s)) {
                      var s = u;
                      i[o++] = 0 === a ? 0 : a;
                    }
                  }
                  return i;
                }
                function ao(t) {
                  return "number" == typeof t ? t : cu(t) ? p : +t;
                }
                function uo(t) {
                  if ("string" == typeof t) return t;
                  if (Ha(t)) return jn(t, uo) + "";
                  if (cu(t)) return Ue ? Ue.call(t) : "";
                  var n = t + "";
                  return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
                }
                function so(t, n, e) {
                  var r = -1,
                    o = En,
                    i = t.length,
                    a = !0,
                    u = [],
                    s = u;
                  if (e) (a = !1), (o = kn);
                  else if (i >= 200) {
                    var c = n ? null : Ko(t);
                    if (c) return re(c);
                    (a = !1), (o = Gn), (s = new Ye());
                  } else s = n ? [] : u;
                  t: for (; ++r < i; ) {
                    var f = t[r],
                      l = n ? n(f) : f;
                    if (((f = e || 0 !== f ? f : 0), a && l == l)) {
                      for (var p = s.length; p--; ) if (s[p] === l) continue t;
                      n && s.push(l), u.push(f);
                    } else o(s, l, e) || (s !== u && s.push(l), u.push(f));
                  }
                  return u;
                }
                function co(t, n) {
                  return (
                    null == (t = ji(t, (n = go(n, t)))) || delete t[Ui(Xi(n))]
                  );
                }
                function fo(t, n, e, r) {
                  return Xr(t, n, e(xr(t, n)), r);
                }
                function lo(t, n, e, r) {
                  for (
                    var o = t.length, i = r ? o : -1;
                    (r ? i-- : ++i < o) && n(t[i], i, t);

                  );
                  return e
                    ? no(t, r ? 0 : i, r ? i + 1 : o)
                    : no(t, r ? i + 1 : 0, r ? o : i);
                }
                function po(t, n) {
                  var e = t;
                  return (
                    e instanceof Fe && (e = e.value()),
                    Tn(
                      n,
                      function (t, n) {
                        return n.func.apply(n.thisArg, On([t], n.args));
                      },
                      e
                    )
                  );
                }
                function ho(t, n, e) {
                  var o = t.length;
                  if (o < 2) return o ? so(t[0]) : [];
                  for (var i = -1, a = r(o); ++i < o; )
                    for (var u = t[i], s = -1; ++s < o; )
                      s != i && (a[i] = fr(a[i] || u, t[s], n, e));
                  return so(_r(a, 1), n, e);
                }
                function vo(t, n, e) {
                  for (
                    var r = -1, i = t.length, a = n.length, u = {};
                    ++r < i;

                  ) {
                    var s = r < a ? n[r] : o;
                    e(u, t[r], s);
                  }
                  return u;
                }
                function _o(t) {
                  return Ka(t) ? t : [];
                }
                function yo(t) {
                  return "function" == typeof t ? t : os;
                }
                function go(t, n) {
                  return Ha(t) ? t : mi(t, n) ? [t] : Di(mu(t));
                }
                var mo = Kr;
                function bo(t, n, e) {
                  var r = t.length;
                  return (e = e === o ? r : e), !n && e >= r ? t : no(t, n, e);
                }
                var wo =
                  ln ||
                  function (t) {
                    return an.clearTimeout(t);
                  };
                function xo(t, n) {
                  if (n) return t.slice();
                  var e = t.length,
                    r = Ft ? Ft(e) : new t.constructor(e);
                  return t.copy(r), r;
                }
                function So(t) {
                  var n = new t.constructor(t.byteLength);
                  return new Wt(n).set(new Wt(t)), n;
                }
                function Eo(t, n) {
                  var e = n ? So(t.buffer) : t.buffer;
                  return new t.constructor(e, t.byteOffset, t.length);
                }
                function ko(t, n) {
                  if (t !== n) {
                    var e = t !== o,
                      r = null === t,
                      i = t == t,
                      a = cu(t),
                      u = n !== o,
                      s = null === n,
                      c = n == n,
                      f = cu(n);
                    if (
                      (!s && !f && !a && t > n) ||
                      (a && u && c && !s && !f) ||
                      (r && u && c) ||
                      (!e && c) ||
                      !i
                    )
                      return 1;
                    if (
                      (!r && !a && !f && t < n) ||
                      (f && e && i && !r && !a) ||
                      (s && e && i) ||
                      (!u && i) ||
                      !c
                    )
                      return -1;
                  }
                  return 0;
                }
                function jo(t, n, e, o) {
                  for (
                    var i = -1,
                      a = t.length,
                      u = e.length,
                      s = -1,
                      c = n.length,
                      f = ye(a - u, 0),
                      l = r(c + f),
                      p = !o;
                    ++s < c;

                  )
                    l[s] = n[s];
                  for (; ++i < u; ) (p || i < a) && (l[e[i]] = t[i]);
                  for (; f--; ) l[s++] = t[i++];
                  return l;
                }
                function Oo(t, n, e, o) {
                  for (
                    var i = -1,
                      a = t.length,
                      u = -1,
                      s = e.length,
                      c = -1,
                      f = n.length,
                      l = ye(a - s, 0),
                      p = r(l + f),
                      h = !o;
                    ++i < l;

                  )
                    p[i] = t[i];
                  for (var d = i; ++c < f; ) p[d + c] = n[c];
                  for (; ++u < s; ) (h || i < a) && (p[d + e[u]] = t[i++]);
                  return p;
                }
                function To(t, n) {
                  var e = -1,
                    o = t.length;
                  for (n || (n = r(o)); ++e < o; ) n[e] = t[e];
                  return n;
                }
                function Ro(t, n, e, r) {
                  var i = !e;
                  e || (e = {});
                  for (var a = -1, u = n.length; ++a < u; ) {
                    var s = n[a],
                      c = r ? r(e[s], t[s], s, e, t) : o;
                    c === o && (c = t[s]), i ? or(e, s, c) : tr(e, s, c);
                  }
                  return e;
                }
                function Ao(t, n) {
                  return function (e, r) {
                    var o = Ha(e) ? mn : er,
                      i = n ? n() : {};
                    return o(e, t, ui(r, 2), i);
                  };
                }
                function Co(t) {
                  return Kr(function (n, e) {
                    var r = -1,
                      i = e.length,
                      a = i > 1 ? e[i - 1] : o,
                      u = i > 2 ? e[2] : o;
                    for (
                      a = t.length > 3 && "function" == typeof a ? (i--, a) : o,
                        u &&
                          gi(e[0], e[1], u) &&
                          ((a = i < 3 ? o : a), (i = 1)),
                        n = Et(n);
                      ++r < i;

                    ) {
                      var s = e[r];
                      s && t(n, s, r, a);
                    }
                    return n;
                  });
                }
                function Io(t, n) {
                  return function (e, r) {
                    if (null == e) return e;
                    if (!Ya(e)) return t(e, r);
                    for (
                      var o = e.length, i = n ? o : -1, a = Et(e);
                      (n ? i-- : ++i < o) && !1 !== r(a[i], i, a);

                    );
                    return e;
                  };
                }
                function Lo(t) {
                  return function (n, e, r) {
                    for (var o = -1, i = Et(n), a = r(n), u = a.length; u--; ) {
                      var s = a[t ? u : ++o];
                      if (!1 === e(i[s], s, i)) break;
                    }
                    return n;
                  };
                }
                function No(t) {
                  return function (n) {
                    var e = Qn((n = mu(n))) ? ae(n) : o,
                      r = e ? e[0] : n.charAt(0),
                      i = e ? bo(e, 1).join("") : n.slice(1);
                    return r[t]() + i;
                  };
                }
                function Po(t) {
                  return function (n) {
                    return Tn(Zu($u(n).replace($t, "")), t, "");
                  };
                }
                function Mo(t) {
                  return function () {
                    var n = arguments;
                    switch (n.length) {
                      case 0:
                        return new t();
                      case 1:
                        return new t(n[0]);
                      case 2:
                        return new t(n[0], n[1]);
                      case 3:
                        return new t(n[0], n[1], n[2]);
                      case 4:
                        return new t(n[0], n[1], n[2], n[3]);
                      case 5:
                        return new t(n[0], n[1], n[2], n[3], n[4]);
                      case 6:
                        return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
                      case 7:
                        return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
                    }
                    var e = qe(t.prototype),
                      r = t.apply(e, n);
                    return nu(r) ? r : e;
                  };
                }
                function Do(t) {
                  return function (n, e, r) {
                    var i = Et(n);
                    if (!Ya(n)) {
                      var a = ui(e, 3);
                      (n = Iu(n)),
                        (e = function (t) {
                          return a(i[t], t, i);
                        });
                    }
                    var u = t(n, e, r);
                    return u > -1 ? i[a ? n[u] : u] : o;
                  };
                }
                function Uo(t) {
                  return ni(function (n) {
                    var e = n.length,
                      r = e,
                      a = We.prototype.thru;
                    for (t && n.reverse(); r--; ) {
                      var u = n[r];
                      if ("function" != typeof u) throw new Ot(i);
                      if (a && !s && "wrapper" == ii(u)) var s = new We([], !0);
                    }
                    for (r = s ? r : e; ++r < e; ) {
                      var c = ii((u = n[r])),
                        f = "wrapper" == c ? oi(u) : o;
                      s =
                        f &&
                        bi(f[0]) &&
                        424 == f[1] &&
                        !f[4].length &&
                        1 == f[9]
                          ? s[ii(f[0])].apply(s, f[3])
                          : 1 == u.length && bi(u)
                          ? s[c]()
                          : s.thru(u);
                    }
                    return function () {
                      var t = arguments,
                        r = t[0];
                      if (s && 1 == t.length && Ha(r))
                        return s.plant(r).value();
                      for (
                        var o = 0, i = e ? n[o].apply(this, t) : r;
                        ++o < e;

                      )
                        i = n[o].call(this, i);
                      return i;
                    };
                  });
                }
                function zo(t, n, e, i, a, u, s, f, l, p) {
                  var h = n & c,
                    d = 1 & n,
                    v = 2 & n,
                    _ = 24 & n,
                    y = 512 & n,
                    g = v ? o : Mo(t);
                  return function o() {
                    for (var c = arguments.length, m = r(c), b = c; b--; )
                      m[b] = arguments[b];
                    if (_)
                      var w = ai(o),
                        x = Vn(m, w);
                    if (
                      (i && (m = jo(m, i, a, _)),
                      u && (m = Oo(m, u, s, _)),
                      (c -= x),
                      _ && c < p)
                    ) {
                      var S = ee(m, w);
                      return Go(t, n, zo, o.placeholder, e, m, S, f, l, p - c);
                    }
                    var E = d ? e : this,
                      k = v ? E[t] : t;
                    return (
                      (c = m.length),
                      f ? (m = Oi(m, f)) : y && c > 1 && m.reverse(),
                      h && l < c && (m.length = l),
                      this &&
                        this !== an &&
                        this instanceof o &&
                        (k = g || Mo(k)),
                      k.apply(E, m)
                    );
                  };
                }
                function qo(t, n) {
                  return function (e, r) {
                    return (function (t, n, e, r) {
                      return (
                        mr(t, function (t, o, i) {
                          n(r, e(t), o, i);
                        }),
                        r
                      );
                    })(e, t, n(r), {});
                  };
                }
                function Bo(t, n) {
                  return function (e, r) {
                    var i;
                    if (e === o && r === o) return n;
                    if ((e !== o && (i = e), r !== o)) {
                      if (i === o) return r;
                      "string" == typeof e || "string" == typeof r
                        ? ((e = uo(e)), (r = uo(r)))
                        : ((e = ao(e)), (r = ao(r))),
                        (i = t(e, r));
                    }
                    return i;
                  };
                }
                function Wo(t) {
                  return ni(function (n) {
                    return (
                      (n = jn(n, $n(ui()))),
                      Kr(function (e) {
                        var r = this;
                        return t(n, function (t) {
                          return gn(t, r, e);
                        });
                      })
                    );
                  });
                }
                function Fo(t, n) {
                  var e = (n = n === o ? " " : uo(n)).length;
                  if (e < 2) return e ? Yr(n, t) : n;
                  var r = Yr(n, fe(t / ie(n)));
                  return Qn(n) ? bo(ae(r), 0, t).join("") : r.slice(0, t);
                }
                function $o(t) {
                  return function (n, e, i) {
                    return (
                      i && "number" != typeof i && gi(n, e, i) && (e = i = o),
                      (n = du(n)),
                      e === o ? ((e = n), (n = 0)) : (e = du(e)),
                      (function (t, n, e, o) {
                        for (
                          var i = -1,
                            a = ye(fe((n - t) / (e || 1)), 0),
                            u = r(a);
                          a--;

                        )
                          (u[o ? a : ++i] = t), (t += e);
                        return u;
                      })(n, e, (i = i === o ? (n < e ? 1 : -1) : du(i)), t)
                    );
                  };
                }
                function Ho(t) {
                  return function (n, e) {
                    return (
                      ("string" == typeof n && "string" == typeof e) ||
                        ((n = yu(n)), (e = yu(e))),
                      t(n, e)
                    );
                  };
                }
                function Go(t, n, e, r, i, a, u, c, f, l) {
                  var p = 8 & n;
                  (n |= p ? s : 64), 4 & (n &= ~(p ? 64 : s)) || (n &= -4);
                  var h = [
                      t,
                      n,
                      i,
                      p ? a : o,
                      p ? u : o,
                      p ? o : a,
                      p ? o : u,
                      c,
                      f,
                      l,
                    ],
                    d = e.apply(o, h);
                  return bi(t) && Ri(d, h), (d.placeholder = r), Ii(d, t, n);
                }
                function Yo(t) {
                  var n = St[t];
                  return function (t, e) {
                    if (
                      ((t = yu(t)),
                      (e = null == e ? 0 : ge(vu(e), 292)) && de(t))
                    ) {
                      var r = (mu(t) + "e").split("e");
                      return +(
                        (r = (mu(n(r[0] + "e" + (+r[1] + e))) + "e").split(
                          "e"
                        ))[0] +
                        "e" +
                        (+r[1] - e)
                      );
                    }
                    return n(t);
                  };
                }
                var Ko =
                  je && 1 / re(new je([, -0]))[1] == f
                    ? function (t) {
                        return new je(t);
                      }
                    : cs;
                function Vo(t) {
                  return function (n) {
                    var e = hi(n);
                    return e == x
                      ? te(n)
                      : e == O
                      ? oe(n)
                      : (function (t, n) {
                          return jn(n, function (n) {
                            return [n, t[n]];
                          });
                        })(n, t(n));
                  };
                }
                function Jo(t, n, e, a, f, l, p, h) {
                  var d = 2 & n;
                  if (!d && "function" != typeof t) throw new Ot(i);
                  var v = a ? a.length : 0;
                  if (
                    (v || ((n &= -97), (a = f = o)),
                    (p = p === o ? p : ye(vu(p), 0)),
                    (h = h === o ? h : vu(h)),
                    (v -= f ? f.length : 0),
                    64 & n)
                  ) {
                    var _ = a,
                      y = f;
                    a = f = o;
                  }
                  var g = d ? o : oi(t),
                    m = [t, n, e, a, f, _, y, l, p, h];
                  if (
                    (g &&
                      (function (t, n) {
                        var e = t[1],
                          r = n[1],
                          o = e | r,
                          i = o < 131,
                          a =
                            (r == c && 8 == e) ||
                            (r == c && 256 == e && t[7].length <= n[8]) ||
                            (384 == r && n[7].length <= n[8] && 8 == e);
                        if (!i && !a) return t;
                        1 & r && ((t[2] = n[2]), (o |= 1 & e ? 0 : 4));
                        var s = n[3];
                        if (s) {
                          var f = t[3];
                          (t[3] = f ? jo(f, s, n[4]) : s),
                            (t[4] = f ? ee(t[3], u) : n[4]);
                        }
                        (s = n[5]) &&
                          ((f = t[5]),
                          (t[5] = f ? Oo(f, s, n[6]) : s),
                          (t[6] = f ? ee(t[5], u) : n[6])),
                          (s = n[7]) && (t[7] = s),
                          r & c &&
                            (t[8] = null == t[8] ? n[8] : ge(t[8], n[8])),
                          null == t[9] && (t[9] = n[9]),
                          (t[0] = n[0]),
                          (t[1] = o);
                      })(m, g),
                    (t = m[0]),
                    (n = m[1]),
                    (e = m[2]),
                    (a = m[3]),
                    (f = m[4]),
                    !(h = m[9] =
                      m[9] === o ? (d ? 0 : t.length) : ye(m[9] - v, 0)) &&
                      24 & n &&
                      (n &= -25),
                    n && 1 != n)
                  )
                    b =
                      8 == n || 16 == n
                        ? (function (t, n, e) {
                            var i = Mo(t);
                            return function a() {
                              for (
                                var u = arguments.length,
                                  s = r(u),
                                  c = u,
                                  f = ai(a);
                                c--;

                              )
                                s[c] = arguments[c];
                              var l =
                                u < 3 && s[0] !== f && s[u - 1] !== f
                                  ? []
                                  : ee(s, f);
                              return (u -= l.length) < e
                                ? Go(
                                    t,
                                    n,
                                    zo,
                                    a.placeholder,
                                    o,
                                    s,
                                    l,
                                    o,
                                    o,
                                    e - u
                                  )
                                : gn(
                                    this && this !== an && this instanceof a
                                      ? i
                                      : t,
                                    this,
                                    s
                                  );
                            };
                          })(t, n, h)
                        : (n != s && 33 != n) || f.length
                        ? zo.apply(o, m)
                        : (function (t, n, e, o) {
                            var i = 1 & n,
                              a = Mo(t);
                            return function n() {
                              for (
                                var u = -1,
                                  s = arguments.length,
                                  c = -1,
                                  f = o.length,
                                  l = r(f + s),
                                  p =
                                    this && this !== an && this instanceof n
                                      ? a
                                      : t;
                                ++c < f;

                              )
                                l[c] = o[c];
                              for (; s--; ) l[c++] = arguments[++u];
                              return gn(p, i ? e : this, l);
                            };
                          })(t, n, e, a);
                  else
                    var b = (function (t, n, e) {
                      var r = 1 & n,
                        o = Mo(t);
                      return function n() {
                        return (
                          this && this !== an && this instanceof n ? o : t
                        ).apply(r ? e : this, arguments);
                      };
                    })(t, n, e);
                  return Ii((g ? Zr : Ri)(b, m), t, n);
                }
                function Xo(t, n, e, r) {
                  return t === o || (Ba(t, At[e]) && !Lt.call(r, e)) ? n : t;
                }
                function Zo(t, n, e, r, i, a) {
                  return (
                    nu(t) &&
                      nu(n) &&
                      (a.set(n, t), qr(t, n, o, Zo, a), a.delete(n)),
                    t
                  );
                }
                function Qo(t) {
                  return iu(t) ? o : t;
                }
                function ti(t, n, e, r, i, a) {
                  var u = 1 & e,
                    s = t.length,
                    c = n.length;
                  if (s != c && !(u && c > s)) return !1;
                  var f = a.get(t),
                    l = a.get(n);
                  if (f && l) return f == n && l == t;
                  var p = -1,
                    h = !0,
                    d = 2 & e ? new Ye() : o;
                  for (a.set(t, n), a.set(n, t); ++p < s; ) {
                    var v = t[p],
                      _ = n[p];
                    if (r)
                      var y = u ? r(_, v, p, n, t, a) : r(v, _, p, t, n, a);
                    if (y !== o) {
                      if (y) continue;
                      h = !1;
                      break;
                    }
                    if (d) {
                      if (
                        !An(n, function (t, n) {
                          if (!Gn(d, n) && (v === t || i(v, t, e, r, a)))
                            return d.push(n);
                        })
                      ) {
                        h = !1;
                        break;
                      }
                    } else if (v !== _ && !i(v, _, e, r, a)) {
                      h = !1;
                      break;
                    }
                  }
                  return a.delete(t), a.delete(n), h;
                }
                function ni(t) {
                  return Ci(ki(t, o, Gi), t + "");
                }
                function ei(t) {
                  return Sr(t, Iu, li);
                }
                function ri(t) {
                  return Sr(t, Lu, pi);
                }
                var oi = Re
                  ? function (t) {
                      return Re.get(t);
                    }
                  : cs;
                function ii(t) {
                  for (
                    var n = t.name + "",
                      e = Ae[n],
                      r = Lt.call(Ae, n) ? e.length : 0;
                    r--;

                  ) {
                    var o = e[r],
                      i = o.func;
                    if (null == i || i == t) return o.name;
                  }
                  return n;
                }
                function ai(t) {
                  return (Lt.call(ze, "placeholder") ? ze : t).placeholder;
                }
                function ui() {
                  var t = ze.iteratee || is;
                  return (
                    (t = t === is ? Nr : t),
                    arguments.length ? t(arguments[0], arguments[1]) : t
                  );
                }
                function si(t, n) {
                  var e,
                    r,
                    o = t.__data__;
                  return (
                    "string" == (r = typeof (e = n)) ||
                    "number" == r ||
                    "symbol" == r ||
                    "boolean" == r
                      ? "__proto__" !== e
                      : null === e
                  )
                    ? o["string" == typeof n ? "string" : "hash"]
                    : o.map;
                }
                function ci(t) {
                  for (var n = Iu(t), e = n.length; e--; ) {
                    var r = n[e],
                      o = t[r];
                    n[e] = [r, o, Si(o)];
                  }
                  return n;
                }
                function fi(t, n) {
                  var e = (function (t, n) {
                    return null == t ? o : t[n];
                  })(t, n);
                  return Lr(e) ? e : o;
                }
                var li = pe
                    ? function (t) {
                        return null == t
                          ? []
                          : ((t = Et(t)),
                            Sn(pe(t), function (n) {
                              return tn.call(t, n);
                            }));
                      }
                    : _s,
                  pi = pe
                    ? function (t) {
                        for (var n = []; t; ) On(n, li(t)), (t = Gt(t));
                        return n;
                      }
                    : _s,
                  hi = Er;
                function di(t, n, e) {
                  for (
                    var r = -1, o = (n = go(n, t)).length, i = !1;
                    ++r < o;

                  ) {
                    var a = Ui(n[r]);
                    if (!(i = null != t && e(t, a))) break;
                    t = t[a];
                  }
                  return i || ++r != o
                    ? i
                    : !!(o = null == t ? 0 : t.length) &&
                        tu(o) &&
                        yi(a, o) &&
                        (Ha(t) || $a(t));
                }
                function vi(t) {
                  return "function" != typeof t.constructor || xi(t)
                    ? {}
                    : qe(Gt(t));
                }
                function _i(t) {
                  return Ha(t) || $a(t) || !!(on && t && t[on]);
                }
                function yi(t, n) {
                  var e = typeof t;
                  return (
                    !!(n = null == n ? l : n) &&
                    ("number" == e || ("symbol" != e && yt.test(t))) &&
                    t > -1 &&
                    t % 1 == 0 &&
                    t < n
                  );
                }
                function gi(t, n, e) {
                  if (!nu(e)) return !1;
                  var r = typeof n;
                  return (
                    !!("number" == r
                      ? Ya(e) && yi(n, e.length)
                      : "string" == r && n in e) && Ba(e[n], t)
                  );
                }
                function mi(t, n) {
                  if (Ha(t)) return !1;
                  var e = typeof t;
                  return (
                    !(
                      "number" != e &&
                      "symbol" != e &&
                      "boolean" != e &&
                      null != t &&
                      !cu(t)
                    ) ||
                    Q.test(t) ||
                    !Z.test(t) ||
                    (null != n && t in Et(n))
                  );
                }
                function bi(t) {
                  var n = ii(t),
                    e = ze[n];
                  if ("function" != typeof e || !(n in Fe.prototype)) return !1;
                  if (t === e) return !0;
                  var r = oi(e);
                  return !!r && t === r[0];
                }
                ((Se && hi(new Se(new ArrayBuffer(1))) != I) ||
                  (Ee && hi(new Ee()) != x) ||
                  (ke && hi(ke.resolve()) != k) ||
                  (je && hi(new je()) != O) ||
                  (Oe && hi(new Oe()) != A)) &&
                  (hi = function (t) {
                    var n = Er(t),
                      e = n == E ? t.constructor : o,
                      r = e ? zi(e) : "";
                    if (r)
                      switch (r) {
                        case Ce:
                          return I;
                        case Ie:
                          return x;
                        case Le:
                          return k;
                        case Ne:
                          return O;
                        case Pe:
                          return A;
                      }
                    return n;
                  });
                var wi = Ct ? Za : ys;
                function xi(t) {
                  var n = t && t.constructor;
                  return t === (("function" == typeof n && n.prototype) || At);
                }
                function Si(t) {
                  return t == t && !nu(t);
                }
                function Ei(t, n) {
                  return function (e) {
                    return null != e && e[t] === n && (n !== o || t in Et(e));
                  };
                }
                function ki(t, n, e) {
                  return (
                    (n = ye(n === o ? t.length - 1 : n, 0)),
                    function () {
                      for (
                        var o = arguments,
                          i = -1,
                          a = ye(o.length - n, 0),
                          u = r(a);
                        ++i < a;

                      )
                        u[i] = o[n + i];
                      i = -1;
                      for (var s = r(n + 1); ++i < n; ) s[i] = o[i];
                      return (s[n] = e(u)), gn(t, this, s);
                    }
                  );
                }
                function ji(t, n) {
                  return n.length < 2 ? t : xr(t, no(n, 0, -1));
                }
                function Oi(t, n) {
                  for (
                    var e = t.length, r = ge(n.length, e), i = To(t);
                    r--;

                  ) {
                    var a = n[r];
                    t[r] = yi(a, e) ? i[a] : o;
                  }
                  return t;
                }
                function Ti(t, n) {
                  if (
                    ("constructor" !== n || "function" != typeof t[n]) &&
                    "__proto__" != n
                  )
                    return t[n];
                }
                var Ri = Li(Zr),
                  Ai =
                    zn ||
                    function (t, n) {
                      return an.setTimeout(t, n);
                    },
                  Ci = Li(Qr);
                function Ii(t, n, e) {
                  var r = n + "";
                  return Ci(
                    t,
                    (function (t, n) {
                      var e = n.length;
                      if (!e) return t;
                      var r = e - 1;
                      return (
                        (n[r] = (e > 1 ? "& " : "") + n[r]),
                        (n = n.join(e > 2 ? ", " : " ")),
                        t.replace(it, "{\n/* [wrapped with " + n + "] */\n")
                      );
                    })(
                      r,
                      (function (t, n) {
                        return (
                          bn(d, function (e) {
                            var r = "_." + e[0];
                            n & e[1] && !En(t, r) && t.push(r);
                          }),
                          t.sort()
                        );
                      })(
                        (function (t) {
                          var n = t.match(at);
                          return n ? n[1].split(ut) : [];
                        })(r),
                        e
                      )
                    )
                  );
                }
                function Li(t) {
                  var n = 0,
                    e = 0;
                  return function () {
                    var r = me(),
                      i = 16 - (r - e);
                    if (((e = r), i > 0)) {
                      if (++n >= 800) return arguments[0];
                    } else n = 0;
                    return t.apply(o, arguments);
                  };
                }
                function Ni(t, n) {
                  var e = -1,
                    r = t.length,
                    i = r - 1;
                  for (n = n === o ? r : n; ++e < n; ) {
                    var a = Gr(e, i),
                      u = t[a];
                    (t[a] = t[e]), (t[e] = u);
                  }
                  return (t.length = n), t;
                }
                var Pi,
                  Mi,
                  Di =
                    ((Pi = Pa(
                      function (t) {
                        var n = [];
                        return (
                          46 === t.charCodeAt(0) && n.push(""),
                          t.replace(tt, function (t, e, r, o) {
                            n.push(r ? o.replace(ft, "$1") : e || t);
                          }),
                          n
                        );
                      },
                      function (t) {
                        return 500 === Mi.size && Mi.clear(), t;
                      }
                    )),
                    (Mi = Pi.cache),
                    Pi);
                function Ui(t) {
                  if ("string" == typeof t || cu(t)) return t;
                  var n = t + "";
                  return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
                }
                function zi(t) {
                  if (null != t) {
                    try {
                      return It.call(t);
                    } catch (t) {}
                    try {
                      return t + "";
                    } catch (t) {}
                  }
                  return "";
                }
                function qi(t) {
                  if (t instanceof Fe) return t.clone();
                  var n = new We(t.__wrapped__, t.__chain__);
                  return (
                    (n.__actions__ = To(t.__actions__)),
                    (n.__index__ = t.__index__),
                    (n.__values__ = t.__values__),
                    n
                  );
                }
                var Bi = Kr(function (t, n) {
                    return Ka(t) ? fr(t, _r(n, 1, Ka, !0)) : [];
                  }),
                  Wi = Kr(function (t, n) {
                    var e = Xi(n);
                    return (
                      Ka(e) && (e = o),
                      Ka(t) ? fr(t, _r(n, 1, Ka, !0), ui(e, 2)) : []
                    );
                  }),
                  Fi = Kr(function (t, n) {
                    var e = Xi(n);
                    return (
                      Ka(e) && (e = o),
                      Ka(t) ? fr(t, _r(n, 1, Ka, !0), o, e) : []
                    );
                  });
                function $i(t, n, e) {
                  var r = null == t ? 0 : t.length;
                  if (!r) return -1;
                  var o = null == e ? 0 : vu(e);
                  return o < 0 && (o = ye(r + o, 0)), Ln(t, ui(n, 3), o);
                }
                function Hi(t, n, e) {
                  var r = null == t ? 0 : t.length;
                  if (!r) return -1;
                  var i = r - 1;
                  return (
                    e !== o &&
                      ((i = vu(e)), (i = e < 0 ? ye(r + i, 0) : ge(i, r - 1))),
                    Ln(t, ui(n, 3), i, !0)
                  );
                }
                function Gi(t) {
                  return null != t && t.length ? _r(t, 1) : [];
                }
                function Yi(t) {
                  return t && t.length ? t[0] : o;
                }
                var Ki = Kr(function (t) {
                    var n = jn(t, _o);
                    return n.length && n[0] === t[0] ? Tr(n) : [];
                  }),
                  Vi = Kr(function (t) {
                    var n = Xi(t),
                      e = jn(t, _o);
                    return (
                      n === Xi(e) ? (n = o) : e.pop(),
                      e.length && e[0] === t[0] ? Tr(e, ui(n, 2)) : []
                    );
                  }),
                  Ji = Kr(function (t) {
                    var n = Xi(t),
                      e = jn(t, _o);
                    return (
                      (n = "function" == typeof n ? n : o) && e.pop(),
                      e.length && e[0] === t[0] ? Tr(e, o, n) : []
                    );
                  });
                function Xi(t) {
                  var n = null == t ? 0 : t.length;
                  return n ? t[n - 1] : o;
                }
                var Zi = Kr(Qi);
                function Qi(t, n) {
                  return t && t.length && n && n.length ? $r(t, n) : t;
                }
                var ta = ni(function (t, n) {
                  var e = null == t ? 0 : t.length,
                    r = ir(t, n);
                  return (
                    Hr(
                      t,
                      jn(n, function (t) {
                        return yi(t, e) ? +t : t;
                      }).sort(ko)
                    ),
                    r
                  );
                });
                function na(t) {
                  return null == t ? t : xe.call(t);
                }
                var ea = Kr(function (t) {
                    return so(_r(t, 1, Ka, !0));
                  }),
                  ra = Kr(function (t) {
                    var n = Xi(t);
                    return Ka(n) && (n = o), so(_r(t, 1, Ka, !0), ui(n, 2));
                  }),
                  oa = Kr(function (t) {
                    var n = Xi(t);
                    return (
                      (n = "function" == typeof n ? n : o),
                      so(_r(t, 1, Ka, !0), o, n)
                    );
                  });
                function ia(t) {
                  if (!t || !t.length) return [];
                  var n = 0;
                  return (
                    (t = Sn(t, function (t) {
                      if (Ka(t)) return (n = ye(t.length, n)), !0;
                    })),
                    Wn(n, function (n) {
                      return jn(t, Un(n));
                    })
                  );
                }
                function aa(t, n) {
                  if (!t || !t.length) return [];
                  var e = ia(t);
                  return null == n
                    ? e
                    : jn(e, function (t) {
                        return gn(n, o, t);
                      });
                }
                var ua = Kr(function (t, n) {
                    return Ka(t) ? fr(t, n) : [];
                  }),
                  sa = Kr(function (t) {
                    return ho(Sn(t, Ka));
                  }),
                  ca = Kr(function (t) {
                    var n = Xi(t);
                    return Ka(n) && (n = o), ho(Sn(t, Ka), ui(n, 2));
                  }),
                  fa = Kr(function (t) {
                    var n = Xi(t);
                    return (
                      (n = "function" == typeof n ? n : o), ho(Sn(t, Ka), o, n)
                    );
                  }),
                  la = Kr(ia),
                  pa = Kr(function (t) {
                    var n = t.length,
                      e = n > 1 ? t[n - 1] : o;
                    return (
                      (e = "function" == typeof e ? (t.pop(), e) : o), aa(t, e)
                    );
                  });
                function ha(t) {
                  var n = ze(t);
                  return (n.__chain__ = !0), n;
                }
                function da(t, n) {
                  return n(t);
                }
                var va = ni(function (t) {
                    var n = t.length,
                      e = n ? t[0] : 0,
                      r = this.__wrapped__,
                      i = function (n) {
                        return ir(n, t);
                      };
                    return !(n > 1 || this.__actions__.length) &&
                      r instanceof Fe &&
                      yi(e)
                      ? ((r = r.slice(e, +e + (n ? 1 : 0))).__actions__.push({
                          func: da,
                          args: [i],
                          thisArg: o,
                        }),
                        new We(r, this.__chain__).thru(function (t) {
                          return n && !t.length && t.push(o), t;
                        }))
                      : this.thru(i);
                  }),
                  _a = Ao(function (t, n, e) {
                    Lt.call(t, e) ? ++t[e] : or(t, e, 1);
                  }),
                  ya = Do($i),
                  ga = Do(Hi);
                function ma(t, n) {
                  return (Ha(t) ? bn : lr)(t, ui(n, 3));
                }
                function ba(t, n) {
                  return (Ha(t) ? wn : pr)(t, ui(n, 3));
                }
                var wa = Ao(function (t, n, e) {
                    Lt.call(t, e) ? t[e].push(n) : or(t, e, [n]);
                  }),
                  xa = Kr(function (t, n, e) {
                    var o = -1,
                      i = "function" == typeof n,
                      a = Ya(t) ? r(t.length) : [];
                    return (
                      lr(t, function (t) {
                        a[++o] = i ? gn(n, t, e) : Rr(t, n, e);
                      }),
                      a
                    );
                  }),
                  Sa = Ao(function (t, n, e) {
                    or(t, e, n);
                  });
                function Ea(t, n) {
                  return (Ha(t) ? jn : Dr)(t, ui(n, 3));
                }
                var ka = Ao(
                    function (t, n, e) {
                      t[e ? 0 : 1].push(n);
                    },
                    function () {
                      return [[], []];
                    }
                  ),
                  ja = Kr(function (t, n) {
                    if (null == t) return [];
                    var e = n.length;
                    return (
                      e > 1 && gi(t, n[0], n[1])
                        ? (n = [])
                        : e > 2 && gi(n[0], n[1], n[2]) && (n = [n[0]]),
                      Wr(t, _r(n, 1), [])
                    );
                  }),
                  Oa =
                    Cn ||
                    function () {
                      return an.Date.now();
                    };
                function Ta(t, n, e) {
                  return (
                    (n = e ? o : n),
                    (n = t && null == n ? t.length : n),
                    Jo(t, c, o, o, o, o, n)
                  );
                }
                function Ra(t, n) {
                  var e;
                  if ("function" != typeof n) throw new Ot(i);
                  return (
                    (t = vu(t)),
                    function () {
                      return (
                        --t > 0 && (e = n.apply(this, arguments)),
                        t <= 1 && (n = o),
                        e
                      );
                    }
                  );
                }
                var Aa = Kr(function (t, n, e) {
                    var r = 1;
                    if (e.length) {
                      var o = ee(e, ai(Aa));
                      r |= s;
                    }
                    return Jo(t, r, n, e, o);
                  }),
                  Ca = Kr(function (t, n, e) {
                    var r = 3;
                    if (e.length) {
                      var o = ee(e, ai(Ca));
                      r |= s;
                    }
                    return Jo(n, r, t, e, o);
                  });
                function Ia(t, n, e) {
                  var r,
                    a,
                    u,
                    s,
                    c,
                    f,
                    l = 0,
                    p = !1,
                    h = !1,
                    d = !0;
                  if ("function" != typeof t) throw new Ot(i);
                  function v(n) {
                    var e = r,
                      i = a;
                    return (r = a = o), (l = n), (s = t.apply(i, e));
                  }
                  function _(t) {
                    return (l = t), (c = Ai(g, n)), p ? v(t) : s;
                  }
                  function y(t) {
                    var e = t - f;
                    return f === o || e >= n || e < 0 || (h && t - l >= u);
                  }
                  function g() {
                    var t = Oa();
                    if (y(t)) return m(t);
                    c = Ai(
                      g,
                      (function (t) {
                        var e = n - (t - f);
                        return h ? ge(e, u - (t - l)) : e;
                      })(t)
                    );
                  }
                  function m(t) {
                    return (c = o), d && r ? v(t) : ((r = a = o), s);
                  }
                  function b() {
                    var t = Oa(),
                      e = y(t);
                    if (((r = arguments), (a = this), (f = t), e)) {
                      if (c === o) return _(f);
                      if (h) return wo(c), (c = Ai(g, n)), v(f);
                    }
                    return c === o && (c = Ai(g, n)), s;
                  }
                  return (
                    (n = yu(n) || 0),
                    nu(e) &&
                      ((p = !!e.leading),
                      (u = (h = "maxWait" in e)
                        ? ye(yu(e.maxWait) || 0, n)
                        : u),
                      (d = "trailing" in e ? !!e.trailing : d)),
                    (b.cancel = function () {
                      c !== o && wo(c), (l = 0), (r = f = a = c = o);
                    }),
                    (b.flush = function () {
                      return c === o ? s : m(Oa());
                    }),
                    b
                  );
                }
                var La = Kr(function (t, n) {
                    return cr(t, 1, n);
                  }),
                  Na = Kr(function (t, n, e) {
                    return cr(t, yu(n) || 0, e);
                  });
                function Pa(t, n) {
                  if (
                    "function" != typeof t ||
                    (null != n && "function" != typeof n)
                  )
                    throw new Ot(i);
                  var e = function () {
                    var r = arguments,
                      o = n ? n.apply(this, r) : r[0],
                      i = e.cache;
                    if (i.has(o)) return i.get(o);
                    var a = t.apply(this, r);
                    return (e.cache = i.set(o, a) || i), a;
                  };
                  return (e.cache = new (Pa.Cache || Ge)()), e;
                }
                function Ma(t) {
                  if ("function" != typeof t) throw new Ot(i);
                  return function () {
                    var n = arguments;
                    switch (n.length) {
                      case 0:
                        return !t.call(this);
                      case 1:
                        return !t.call(this, n[0]);
                      case 2:
                        return !t.call(this, n[0], n[1]);
                      case 3:
                        return !t.call(this, n[0], n[1], n[2]);
                    }
                    return !t.apply(this, n);
                  };
                }
                Pa.Cache = Ge;
                var Da = mo(function (t, n) {
                    var e = (n =
                      1 == n.length && Ha(n[0])
                        ? jn(n[0], $n(ui()))
                        : jn(_r(n, 1), $n(ui()))).length;
                    return Kr(function (r) {
                      for (var o = -1, i = ge(r.length, e); ++o < i; )
                        r[o] = n[o].call(this, r[o]);
                      return gn(t, this, r);
                    });
                  }),
                  Ua = Kr(function (t, n) {
                    var e = ee(n, ai(Ua));
                    return Jo(t, s, o, n, e);
                  }),
                  za = Kr(function (t, n) {
                    var e = ee(n, ai(za));
                    return Jo(t, 64, o, n, e);
                  }),
                  qa = ni(function (t, n) {
                    return Jo(t, 256, o, o, o, n);
                  });
                function Ba(t, n) {
                  return t === n || (t != t && n != n);
                }
                var Wa = Ho(kr),
                  Fa = Ho(function (t, n) {
                    return t >= n;
                  }),
                  $a = Ar(
                    (function () {
                      return arguments;
                    })()
                  )
                    ? Ar
                    : function (t) {
                        return (
                          eu(t) && Lt.call(t, "callee") && !tn.call(t, "callee")
                        );
                      },
                  Ha = r.isArray,
                  Ga = pn
                    ? $n(pn)
                    : function (t) {
                        return eu(t) && Er(t) == C;
                      };
                function Ya(t) {
                  return null != t && tu(t.length) && !Za(t);
                }
                function Ka(t) {
                  return eu(t) && Ya(t);
                }
                var Va = he || ys,
                  Ja = hn
                    ? $n(hn)
                    : function (t) {
                        return eu(t) && Er(t) == g;
                      };
                function Xa(t) {
                  if (!eu(t)) return !1;
                  var n = Er(t);
                  return (
                    n == m ||
                    "[object DOMException]" == n ||
                    ("string" == typeof t.message &&
                      "string" == typeof t.name &&
                      !iu(t))
                  );
                }
                function Za(t) {
                  if (!nu(t)) return !1;
                  var n = Er(t);
                  return (
                    n == b ||
                    n == w ||
                    "[object AsyncFunction]" == n ||
                    "[object Proxy]" == n
                  );
                }
                function Qa(t) {
                  return "number" == typeof t && t == vu(t);
                }
                function tu(t) {
                  return "number" == typeof t && t > -1 && t % 1 == 0 && t <= l;
                }
                function nu(t) {
                  var n = typeof t;
                  return null != t && ("object" == n || "function" == n);
                }
                function eu(t) {
                  return null != t && "object" == typeof t;
                }
                var ru = dn
                  ? $n(dn)
                  : function (t) {
                      return eu(t) && hi(t) == x;
                    };
                function ou(t) {
                  return "number" == typeof t || (eu(t) && Er(t) == S);
                }
                function iu(t) {
                  if (!eu(t) || Er(t) != E) return !1;
                  var n = Gt(t);
                  if (null === n) return !0;
                  var e = Lt.call(n, "constructor") && n.constructor;
                  return (
                    "function" == typeof e && e instanceof e && It.call(e) == Dt
                  );
                }
                var au = vn
                    ? $n(vn)
                    : function (t) {
                        return eu(t) && Er(t) == j;
                      },
                  uu = _n
                    ? $n(_n)
                    : function (t) {
                        return eu(t) && hi(t) == O;
                      };
                function su(t) {
                  return (
                    "string" == typeof t || (!Ha(t) && eu(t) && Er(t) == T)
                  );
                }
                function cu(t) {
                  return "symbol" == typeof t || (eu(t) && Er(t) == R);
                }
                var fu = yn
                    ? $n(yn)
                    : function (t) {
                        return eu(t) && tu(t.length) && !!Zt[Er(t)];
                      },
                  lu = Ho(Mr),
                  pu = Ho(function (t, n) {
                    return t <= n;
                  });
                function hu(t) {
                  if (!t) return [];
                  if (Ya(t)) return su(t) ? ae(t) : To(t);
                  if (un && t[un])
                    return (function (t) {
                      for (var n, e = []; !(n = t.next()).done; )
                        e.push(n.value);
                      return e;
                    })(t[un]());
                  var n = hi(t);
                  return (n == x ? te : n == O ? re : Bu)(t);
                }
                function du(t) {
                  return t
                    ? (t = yu(t)) === f || t === -1 / 0
                      ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                      : t == t
                      ? t
                      : 0
                    : 0 === t
                    ? t
                    : 0;
                }
                function vu(t) {
                  var n = du(t),
                    e = n % 1;
                  return n == n ? (e ? n - e : n) : 0;
                }
                function _u(t) {
                  return t ? ar(vu(t), 0, h) : 0;
                }
                function yu(t) {
                  if ("number" == typeof t) return t;
                  if (cu(t)) return p;
                  if (nu(t)) {
                    var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = nu(n) ? n + "" : n;
                  }
                  if ("string" != typeof t) return 0 === t ? t : +t;
                  t = Fn(t);
                  var e = dt.test(t);
                  return e || _t.test(t)
                    ? en(t.slice(2), e ? 2 : 8)
                    : ht.test(t)
                    ? p
                    : +t;
                }
                function gu(t) {
                  return Ro(t, Lu(t));
                }
                function mu(t) {
                  return null == t ? "" : uo(t);
                }
                var bu = Co(function (t, n) {
                    if (xi(n) || Ya(n)) Ro(n, Iu(n), t);
                    else for (var e in n) Lt.call(n, e) && tr(t, e, n[e]);
                  }),
                  wu = Co(function (t, n) {
                    Ro(n, Lu(n), t);
                  }),
                  xu = Co(function (t, n, e, r) {
                    Ro(n, Lu(n), t, r);
                  }),
                  Su = Co(function (t, n, e, r) {
                    Ro(n, Iu(n), t, r);
                  }),
                  Eu = ni(ir),
                  ku = Kr(function (t, n) {
                    t = Et(t);
                    var e = -1,
                      r = n.length,
                      i = r > 2 ? n[2] : o;
                    for (i && gi(n[0], n[1], i) && (r = 1); ++e < r; )
                      for (
                        var a = n[e], u = Lu(a), s = -1, c = u.length;
                        ++s < c;

                      ) {
                        var f = u[s],
                          l = t[f];
                        (l === o || (Ba(l, At[f]) && !Lt.call(t, f))) &&
                          (t[f] = a[f]);
                      }
                    return t;
                  }),
                  ju = Kr(function (t) {
                    return t.push(o, Zo), gn(Pu, o, t);
                  });
                function Ou(t, n, e) {
                  var r = null == t ? o : xr(t, n);
                  return r === o ? e : r;
                }
                function Tu(t, n) {
                  return null != t && di(t, n, Or);
                }
                var Ru = qo(function (t, n, e) {
                    null != n &&
                      "function" != typeof n.toString &&
                      (n = Mt.call(n)),
                      (t[n] = e);
                  }, ns(os)),
                  Au = qo(function (t, n, e) {
                    null != n &&
                      "function" != typeof n.toString &&
                      (n = Mt.call(n)),
                      Lt.call(t, n) ? t[n].push(e) : (t[n] = [e]);
                  }, ui),
                  Cu = Kr(Rr);
                function Iu(t) {
                  return Ya(t) ? Ve(t) : Pr(t);
                }
                function Lu(t) {
                  return Ya(t)
                    ? Ve(t, !0)
                    : (function (t) {
                        if (!nu(t))
                          return (function (t) {
                            var n = [];
                            if (null != t) for (var e in Et(t)) n.push(e);
                            return n;
                          })(t);
                        var n = xi(t),
                          e = [];
                        for (var r in t)
                          ("constructor" != r || (!n && Lt.call(t, r))) &&
                            e.push(r);
                        return e;
                      })(t);
                }
                var Nu = Co(function (t, n, e) {
                    qr(t, n, e);
                  }),
                  Pu = Co(function (t, n, e, r) {
                    qr(t, n, e, r);
                  }),
                  Mu = ni(function (t, n) {
                    var e = {};
                    if (null == t) return e;
                    var r = !1;
                    (n = jn(n, function (n) {
                      return (n = go(n, t)), r || (r = n.length > 1), n;
                    })),
                      Ro(t, ri(t), e),
                      r && (e = ur(e, 7, Qo));
                    for (var o = n.length; o--; ) co(e, n[o]);
                    return e;
                  }),
                  Du = ni(function (t, n) {
                    return null == t
                      ? {}
                      : (function (t, n) {
                          return Fr(t, n, function (n, e) {
                            return Tu(t, e);
                          });
                        })(t, n);
                  });
                function Uu(t, n) {
                  if (null == t) return {};
                  var e = jn(ri(t), function (t) {
                    return [t];
                  });
                  return (
                    (n = ui(n)),
                    Fr(t, e, function (t, e) {
                      return n(t, e[0]);
                    })
                  );
                }
                var zu = Vo(Iu),
                  qu = Vo(Lu);
                function Bu(t) {
                  return null == t ? [] : Hn(t, Iu(t));
                }
                var Wu = Po(function (t, n, e) {
                  return (n = n.toLowerCase()), t + (e ? Fu(n) : n);
                });
                function Fu(t) {
                  return Xu(mu(t).toLowerCase());
                }
                function $u(t) {
                  return (t = mu(t)) && t.replace(gt, Jn).replace(Ht, "");
                }
                var Hu = Po(function (t, n, e) {
                    return t + (e ? "-" : "") + n.toLowerCase();
                  }),
                  Gu = Po(function (t, n, e) {
                    return t + (e ? " " : "") + n.toLowerCase();
                  }),
                  Yu = No("toLowerCase"),
                  Ku = Po(function (t, n, e) {
                    return t + (e ? "_" : "") + n.toLowerCase();
                  }),
                  Vu = Po(function (t, n, e) {
                    return t + (e ? " " : "") + Xu(n);
                  }),
                  Ju = Po(function (t, n, e) {
                    return t + (e ? " " : "") + n.toUpperCase();
                  }),
                  Xu = No("toUpperCase");
                function Zu(t, n, e) {
                  return (
                    (t = mu(t)),
                    (n = e ? o : n) === o
                      ? (function (t) {
                          return Vt.test(t);
                        })(t)
                        ? (function (t) {
                            return t.match(Yt) || [];
                          })(t)
                        : (function (t) {
                            return t.match(st) || [];
                          })(t)
                      : t.match(n) || []
                  );
                }
                var Qu = Kr(function (t, n) {
                    try {
                      return gn(t, o, n);
                    } catch (t) {
                      return Xa(t) ? t : new wt(t);
                    }
                  }),
                  ts = ni(function (t, n) {
                    return (
                      bn(n, function (n) {
                        (n = Ui(n)), or(t, n, Aa(t[n], t));
                      }),
                      t
                    );
                  });
                function ns(t) {
                  return function () {
                    return t;
                  };
                }
                var es = Uo(),
                  rs = Uo(!0);
                function os(t) {
                  return t;
                }
                function is(t) {
                  return Nr("function" == typeof t ? t : ur(t, 1));
                }
                var as = Kr(function (t, n) {
                    return function (e) {
                      return Rr(e, t, n);
                    };
                  }),
                  us = Kr(function (t, n) {
                    return function (e) {
                      return Rr(t, e, n);
                    };
                  });
                function ss(t, n, e) {
                  var r = Iu(n),
                    o = wr(n, r);
                  null != e ||
                    (nu(n) && (o.length || !r.length)) ||
                    ((e = n), (n = t), (t = this), (o = wr(n, Iu(n))));
                  var i = !(nu(e) && "chain" in e && !e.chain),
                    a = Za(t);
                  return (
                    bn(o, function (e) {
                      var r = n[e];
                      (t[e] = r),
                        a &&
                          (t.prototype[e] = function () {
                            var n = this.__chain__;
                            if (i || n) {
                              var e = t(this.__wrapped__),
                                o = (e.__actions__ = To(this.__actions__));
                              return (
                                o.push({
                                  func: r,
                                  args: arguments,
                                  thisArg: t,
                                }),
                                (e.__chain__ = n),
                                e
                              );
                            }
                            return r.apply(t, On([this.value()], arguments));
                          });
                    }),
                    t
                  );
                }
                function cs() {}
                var fs = Wo(jn),
                  ls = Wo(xn),
                  ps = Wo(An);
                function hs(t) {
                  return mi(t)
                    ? Un(Ui(t))
                    : (function (t) {
                        return function (n) {
                          return xr(n, t);
                        };
                      })(t);
                }
                var ds = $o(),
                  vs = $o(!0);
                function _s() {
                  return [];
                }
                function ys() {
                  return !1;
                }
                var gs,
                  ms = Bo(function (t, n) {
                    return t + n;
                  }, 0),
                  bs = Yo("ceil"),
                  ws = Bo(function (t, n) {
                    return t / n;
                  }, 1),
                  xs = Yo("floor"),
                  Ss = Bo(function (t, n) {
                    return t * n;
                  }, 1),
                  Es = Yo("round"),
                  ks = Bo(function (t, n) {
                    return t - n;
                  }, 0);
                return (
                  (ze.after = function (t, n) {
                    if ("function" != typeof n) throw new Ot(i);
                    return (
                      (t = vu(t)),
                      function () {
                        if (--t < 1) return n.apply(this, arguments);
                      }
                    );
                  }),
                  (ze.ary = Ta),
                  (ze.assign = bu),
                  (ze.assignIn = wu),
                  (ze.assignInWith = xu),
                  (ze.assignWith = Su),
                  (ze.at = Eu),
                  (ze.before = Ra),
                  (ze.bind = Aa),
                  (ze.bindAll = ts),
                  (ze.bindKey = Ca),
                  (ze.castArray = function () {
                    if (!arguments.length) return [];
                    var t = arguments[0];
                    return Ha(t) ? t : [t];
                  }),
                  (ze.chain = ha),
                  (ze.chunk = function (t, n, e) {
                    n = (e ? gi(t, n, e) : n === o) ? 1 : ye(vu(n), 0);
                    var i = null == t ? 0 : t.length;
                    if (!i || n < 1) return [];
                    for (var a = 0, u = 0, s = r(fe(i / n)); a < i; )
                      s[u++] = no(t, a, (a += n));
                    return s;
                  }),
                  (ze.compact = function (t) {
                    for (
                      var n = -1, e = null == t ? 0 : t.length, r = 0, o = [];
                      ++n < e;

                    ) {
                      var i = t[n];
                      i && (o[r++] = i);
                    }
                    return o;
                  }),
                  (ze.concat = function () {
                    var t = arguments.length;
                    if (!t) return [];
                    for (var n = r(t - 1), e = arguments[0], o = t; o--; )
                      n[o - 1] = arguments[o];
                    return On(Ha(e) ? To(e) : [e], _r(n, 1));
                  }),
                  (ze.cond = function (t) {
                    var n = null == t ? 0 : t.length,
                      e = ui();
                    return (
                      (t = n
                        ? jn(t, function (t) {
                            if ("function" != typeof t[1]) throw new Ot(i);
                            return [e(t[0]), t[1]];
                          })
                        : []),
                      Kr(function (e) {
                        for (var r = -1; ++r < n; ) {
                          var o = t[r];
                          if (gn(o[0], this, e)) return gn(o[1], this, e);
                        }
                      })
                    );
                  }),
                  (ze.conforms = function (t) {
                    return (function (t) {
                      var n = Iu(t);
                      return function (e) {
                        return sr(e, t, n);
                      };
                    })(ur(t, 1));
                  }),
                  (ze.constant = ns),
                  (ze.countBy = _a),
                  (ze.create = function (t, n) {
                    var e = qe(t);
                    return null == n ? e : rr(e, n);
                  }),
                  (ze.curry = function t(n, e, r) {
                    var i = Jo(n, 8, o, o, o, o, o, (e = r ? o : e));
                    return (i.placeholder = t.placeholder), i;
                  }),
                  (ze.curryRight = function t(n, e, r) {
                    var i = Jo(n, 16, o, o, o, o, o, (e = r ? o : e));
                    return (i.placeholder = t.placeholder), i;
                  }),
                  (ze.debounce = Ia),
                  (ze.defaults = ku),
                  (ze.defaultsDeep = ju),
                  (ze.defer = La),
                  (ze.delay = Na),
                  (ze.difference = Bi),
                  (ze.differenceBy = Wi),
                  (ze.differenceWith = Fi),
                  (ze.drop = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? no(t, (n = e || n === o ? 1 : vu(n)) < 0 ? 0 : n, r)
                      : [];
                  }),
                  (ze.dropRight = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? no(
                          t,
                          0,
                          (n = r - (n = e || n === o ? 1 : vu(n))) < 0 ? 0 : n
                        )
                      : [];
                  }),
                  (ze.dropRightWhile = function (t, n) {
                    return t && t.length ? lo(t, ui(n, 3), !0, !0) : [];
                  }),
                  (ze.dropWhile = function (t, n) {
                    return t && t.length ? lo(t, ui(n, 3), !0) : [];
                  }),
                  (ze.fill = function (t, n, e, r) {
                    var i = null == t ? 0 : t.length;
                    return i
                      ? (e &&
                          "number" != typeof e &&
                          gi(t, n, e) &&
                          ((e = 0), (r = i)),
                        (function (t, n, e, r) {
                          var i = t.length;
                          for (
                            (e = vu(e)) < 0 && (e = -e > i ? 0 : i + e),
                              (r = r === o || r > i ? i : vu(r)) < 0 &&
                                (r += i),
                              r = e > r ? 0 : _u(r);
                            e < r;

                          )
                            t[e++] = n;
                          return t;
                        })(t, n, e, r))
                      : [];
                  }),
                  (ze.filter = function (t, n) {
                    return (Ha(t) ? Sn : vr)(t, ui(n, 3));
                  }),
                  (ze.flatMap = function (t, n) {
                    return _r(Ea(t, n), 1);
                  }),
                  (ze.flatMapDeep = function (t, n) {
                    return _r(Ea(t, n), f);
                  }),
                  (ze.flatMapDepth = function (t, n, e) {
                    return (e = e === o ? 1 : vu(e)), _r(Ea(t, n), e);
                  }),
                  (ze.flatten = Gi),
                  (ze.flattenDeep = function (t) {
                    return null != t && t.length ? _r(t, f) : [];
                  }),
                  (ze.flattenDepth = function (t, n) {
                    return null != t && t.length
                      ? _r(t, (n = n === o ? 1 : vu(n)))
                      : [];
                  }),
                  (ze.flip = function (t) {
                    return Jo(t, 512);
                  }),
                  (ze.flow = es),
                  (ze.flowRight = rs),
                  (ze.fromPairs = function (t) {
                    for (
                      var n = -1, e = null == t ? 0 : t.length, r = {};
                      ++n < e;

                    ) {
                      var o = t[n];
                      r[o[0]] = o[1];
                    }
                    return r;
                  }),
                  (ze.functions = function (t) {
                    return null == t ? [] : wr(t, Iu(t));
                  }),
                  (ze.functionsIn = function (t) {
                    return null == t ? [] : wr(t, Lu(t));
                  }),
                  (ze.groupBy = wa),
                  (ze.initial = function (t) {
                    return null != t && t.length ? no(t, 0, -1) : [];
                  }),
                  (ze.intersection = Ki),
                  (ze.intersectionBy = Vi),
                  (ze.intersectionWith = Ji),
                  (ze.invert = Ru),
                  (ze.invertBy = Au),
                  (ze.invokeMap = xa),
                  (ze.iteratee = is),
                  (ze.keyBy = Sa),
                  (ze.keys = Iu),
                  (ze.keysIn = Lu),
                  (ze.map = Ea),
                  (ze.mapKeys = function (t, n) {
                    var e = {};
                    return (
                      (n = ui(n, 3)),
                      mr(t, function (t, r, o) {
                        or(e, n(t, r, o), t);
                      }),
                      e
                    );
                  }),
                  (ze.mapValues = function (t, n) {
                    var e = {};
                    return (
                      (n = ui(n, 3)),
                      mr(t, function (t, r, o) {
                        or(e, r, n(t, r, o));
                      }),
                      e
                    );
                  }),
                  (ze.matches = function (t) {
                    return Ur(ur(t, 1));
                  }),
                  (ze.matchesProperty = function (t, n) {
                    return zr(t, ur(n, 1));
                  }),
                  (ze.memoize = Pa),
                  (ze.merge = Nu),
                  (ze.mergeWith = Pu),
                  (ze.method = as),
                  (ze.methodOf = us),
                  (ze.mixin = ss),
                  (ze.negate = Ma),
                  (ze.nthArg = function (t) {
                    return (
                      (t = vu(t)),
                      Kr(function (n) {
                        return Br(n, t);
                      })
                    );
                  }),
                  (ze.omit = Mu),
                  (ze.omitBy = function (t, n) {
                    return Uu(t, Ma(ui(n)));
                  }),
                  (ze.once = function (t) {
                    return Ra(2, t);
                  }),
                  (ze.orderBy = function (t, n, e, r) {
                    return null == t
                      ? []
                      : (Ha(n) || (n = null == n ? [] : [n]),
                        Ha((e = r ? o : e)) || (e = null == e ? [] : [e]),
                        Wr(t, n, e));
                  }),
                  (ze.over = fs),
                  (ze.overArgs = Da),
                  (ze.overEvery = ls),
                  (ze.overSome = ps),
                  (ze.partial = Ua),
                  (ze.partialRight = za),
                  (ze.partition = ka),
                  (ze.pick = Du),
                  (ze.pickBy = Uu),
                  (ze.property = hs),
                  (ze.propertyOf = function (t) {
                    return function (n) {
                      return null == t ? o : xr(t, n);
                    };
                  }),
                  (ze.pull = Zi),
                  (ze.pullAll = Qi),
                  (ze.pullAllBy = function (t, n, e) {
                    return t && t.length && n && n.length
                      ? $r(t, n, ui(e, 2))
                      : t;
                  }),
                  (ze.pullAllWith = function (t, n, e) {
                    return t && t.length && n && n.length ? $r(t, n, o, e) : t;
                  }),
                  (ze.pullAt = ta),
                  (ze.range = ds),
                  (ze.rangeRight = vs),
                  (ze.rearg = qa),
                  (ze.reject = function (t, n) {
                    return (Ha(t) ? Sn : vr)(t, Ma(ui(n, 3)));
                  }),
                  (ze.remove = function (t, n) {
                    var e = [];
                    if (!t || !t.length) return e;
                    var r = -1,
                      o = [],
                      i = t.length;
                    for (n = ui(n, 3); ++r < i; ) {
                      var a = t[r];
                      n(a, r, t) && (e.push(a), o.push(r));
                    }
                    return Hr(t, o), e;
                  }),
                  (ze.rest = function (t, n) {
                    if ("function" != typeof t) throw new Ot(i);
                    return Kr(t, (n = n === o ? n : vu(n)));
                  }),
                  (ze.reverse = na),
                  (ze.sampleSize = function (t, n, e) {
                    return (
                      (n = (e ? gi(t, n, e) : n === o) ? 1 : vu(n)),
                      (Ha(t) ? Xe : Jr)(t, n)
                    );
                  }),
                  (ze.set = function (t, n, e) {
                    return null == t ? t : Xr(t, n, e);
                  }),
                  (ze.setWith = function (t, n, e, r) {
                    return (
                      (r = "function" == typeof r ? r : o),
                      null == t ? t : Xr(t, n, e, r)
                    );
                  }),
                  (ze.shuffle = function (t) {
                    return (Ha(t) ? Ze : to)(t);
                  }),
                  (ze.slice = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? (e && "number" != typeof e && gi(t, n, e)
                          ? ((n = 0), (e = r))
                          : ((n = null == n ? 0 : vu(n)),
                            (e = e === o ? r : vu(e))),
                        no(t, n, e))
                      : [];
                  }),
                  (ze.sortBy = ja),
                  (ze.sortedUniq = function (t) {
                    return t && t.length ? io(t) : [];
                  }),
                  (ze.sortedUniqBy = function (t, n) {
                    return t && t.length ? io(t, ui(n, 2)) : [];
                  }),
                  (ze.split = function (t, n, e) {
                    return (
                      e && "number" != typeof e && gi(t, n, e) && (n = e = o),
                      (e = e === o ? h : e >>> 0)
                        ? (t = mu(t)) &&
                          ("string" == typeof n || (null != n && !au(n))) &&
                          !(n = uo(n)) &&
                          Qn(t)
                          ? bo(ae(t), 0, e)
                          : t.split(n, e)
                        : []
                    );
                  }),
                  (ze.spread = function (t, n) {
                    if ("function" != typeof t) throw new Ot(i);
                    return (
                      (n = null == n ? 0 : ye(vu(n), 0)),
                      Kr(function (e) {
                        var r = e[n],
                          o = bo(e, 0, n);
                        return r && On(o, r), gn(t, this, o);
                      })
                    );
                  }),
                  (ze.tail = function (t) {
                    var n = null == t ? 0 : t.length;
                    return n ? no(t, 1, n) : [];
                  }),
                  (ze.take = function (t, n, e) {
                    return t && t.length
                      ? no(t, 0, (n = e || n === o ? 1 : vu(n)) < 0 ? 0 : n)
                      : [];
                  }),
                  (ze.takeRight = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? no(
                          t,
                          (n = r - (n = e || n === o ? 1 : vu(n))) < 0 ? 0 : n,
                          r
                        )
                      : [];
                  }),
                  (ze.takeRightWhile = function (t, n) {
                    return t && t.length ? lo(t, ui(n, 3), !1, !0) : [];
                  }),
                  (ze.takeWhile = function (t, n) {
                    return t && t.length ? lo(t, ui(n, 3)) : [];
                  }),
                  (ze.tap = function (t, n) {
                    return n(t), t;
                  }),
                  (ze.throttle = function (t, n, e) {
                    var r = !0,
                      o = !0;
                    if ("function" != typeof t) throw new Ot(i);
                    return (
                      nu(e) &&
                        ((r = "leading" in e ? !!e.leading : r),
                        (o = "trailing" in e ? !!e.trailing : o)),
                      Ia(t, n, { leading: r, maxWait: n, trailing: o })
                    );
                  }),
                  (ze.thru = da),
                  (ze.toArray = hu),
                  (ze.toPairs = zu),
                  (ze.toPairsIn = qu),
                  (ze.toPath = function (t) {
                    return Ha(t) ? jn(t, Ui) : cu(t) ? [t] : To(Di(mu(t)));
                  }),
                  (ze.toPlainObject = gu),
                  (ze.transform = function (t, n, e) {
                    var r = Ha(t),
                      o = r || Va(t) || fu(t);
                    if (((n = ui(n, 4)), null == e)) {
                      var i = t && t.constructor;
                      e = o
                        ? r
                          ? new i()
                          : []
                        : nu(t) && Za(i)
                        ? qe(Gt(t))
                        : {};
                    }
                    return (
                      (o ? bn : mr)(t, function (t, r, o) {
                        return n(e, t, r, o);
                      }),
                      e
                    );
                  }),
                  (ze.unary = function (t) {
                    return Ta(t, 1);
                  }),
                  (ze.union = ea),
                  (ze.unionBy = ra),
                  (ze.unionWith = oa),
                  (ze.uniq = function (t) {
                    return t && t.length ? so(t) : [];
                  }),
                  (ze.uniqBy = function (t, n) {
                    return t && t.length ? so(t, ui(n, 2)) : [];
                  }),
                  (ze.uniqWith = function (t, n) {
                    return (
                      (n = "function" == typeof n ? n : o),
                      t && t.length ? so(t, o, n) : []
                    );
                  }),
                  (ze.unset = function (t, n) {
                    return null == t || co(t, n);
                  }),
                  (ze.unzip = ia),
                  (ze.unzipWith = aa),
                  (ze.update = function (t, n, e) {
                    return null == t ? t : fo(t, n, yo(e));
                  }),
                  (ze.updateWith = function (t, n, e, r) {
                    return (
                      (r = "function" == typeof r ? r : o),
                      null == t ? t : fo(t, n, yo(e), r)
                    );
                  }),
                  (ze.values = Bu),
                  (ze.valuesIn = function (t) {
                    return null == t ? [] : Hn(t, Lu(t));
                  }),
                  (ze.without = ua),
                  (ze.words = Zu),
                  (ze.wrap = function (t, n) {
                    return Ua(yo(n), t);
                  }),
                  (ze.xor = sa),
                  (ze.xorBy = ca),
                  (ze.xorWith = fa),
                  (ze.zip = la),
                  (ze.zipObject = function (t, n) {
                    return vo(t || [], n || [], tr);
                  }),
                  (ze.zipObjectDeep = function (t, n) {
                    return vo(t || [], n || [], Xr);
                  }),
                  (ze.zipWith = pa),
                  (ze.entries = zu),
                  (ze.entriesIn = qu),
                  (ze.extend = wu),
                  (ze.extendWith = xu),
                  ss(ze, ze),
                  (ze.add = ms),
                  (ze.attempt = Qu),
                  (ze.camelCase = Wu),
                  (ze.capitalize = Fu),
                  (ze.ceil = bs),
                  (ze.clamp = function (t, n, e) {
                    return (
                      e === o && ((e = n), (n = o)),
                      e !== o && (e = (e = yu(e)) == e ? e : 0),
                      n !== o && (n = (n = yu(n)) == n ? n : 0),
                      ar(yu(t), n, e)
                    );
                  }),
                  (ze.clone = function (t) {
                    return ur(t, 4);
                  }),
                  (ze.cloneDeep = function (t) {
                    return ur(t, 5);
                  }),
                  (ze.cloneDeepWith = function (t, n) {
                    return ur(t, 5, (n = "function" == typeof n ? n : o));
                  }),
                  (ze.cloneWith = function (t, n) {
                    return ur(t, 4, (n = "function" == typeof n ? n : o));
                  }),
                  (ze.conformsTo = function (t, n) {
                    return null == n || sr(t, n, Iu(n));
                  }),
                  (ze.deburr = $u),
                  (ze.defaultTo = function (t, n) {
                    return null == t || t != t ? n : t;
                  }),
                  (ze.divide = ws),
                  (ze.endsWith = function (t, n, e) {
                    (t = mu(t)), (n = uo(n));
                    var r = t.length,
                      i = (e = e === o ? r : ar(vu(e), 0, r));
                    return (e -= n.length) >= 0 && t.slice(e, i) == n;
                  }),
                  (ze.eq = Ba),
                  (ze.escape = function (t) {
                    return (t = mu(t)) && K.test(t) ? t.replace(G, Xn) : t;
                  }),
                  (ze.escapeRegExp = function (t) {
                    return (t = mu(t)) && et.test(t)
                      ? t.replace(nt, "\\$&")
                      : t;
                  }),
                  (ze.every = function (t, n, e) {
                    var r = Ha(t) ? xn : hr;
                    return e && gi(t, n, e) && (n = o), r(t, ui(n, 3));
                  }),
                  (ze.find = ya),
                  (ze.findIndex = $i),
                  (ze.findKey = function (t, n) {
                    return In(t, ui(n, 3), mr);
                  }),
                  (ze.findLast = ga),
                  (ze.findLastIndex = Hi),
                  (ze.findLastKey = function (t, n) {
                    return In(t, ui(n, 3), br);
                  }),
                  (ze.floor = xs),
                  (ze.forEach = ma),
                  (ze.forEachRight = ba),
                  (ze.forIn = function (t, n) {
                    return null == t ? t : yr(t, ui(n, 3), Lu);
                  }),
                  (ze.forInRight = function (t, n) {
                    return null == t ? t : gr(t, ui(n, 3), Lu);
                  }),
                  (ze.forOwn = function (t, n) {
                    return t && mr(t, ui(n, 3));
                  }),
                  (ze.forOwnRight = function (t, n) {
                    return t && br(t, ui(n, 3));
                  }),
                  (ze.get = Ou),
                  (ze.gt = Wa),
                  (ze.gte = Fa),
                  (ze.has = function (t, n) {
                    return null != t && di(t, n, jr);
                  }),
                  (ze.hasIn = Tu),
                  (ze.head = Yi),
                  (ze.identity = os),
                  (ze.includes = function (t, n, e, r) {
                    (t = Ya(t) ? t : Bu(t)), (e = e && !r ? vu(e) : 0);
                    var o = t.length;
                    return (
                      e < 0 && (e = ye(o + e, 0)),
                      su(t)
                        ? e <= o && t.indexOf(n, e) > -1
                        : !!o && Nn(t, n, e) > -1
                    );
                  }),
                  (ze.indexOf = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var o = null == e ? 0 : vu(e);
                    return o < 0 && (o = ye(r + o, 0)), Nn(t, n, o);
                  }),
                  (ze.inRange = function (t, n, e) {
                    return (
                      (n = du(n)),
                      e === o ? ((e = n), (n = 0)) : (e = du(e)),
                      (function (t, n, e) {
                        return t >= ge(n, e) && t < ye(n, e);
                      })((t = yu(t)), n, e)
                    );
                  }),
                  (ze.invoke = Cu),
                  (ze.isArguments = $a),
                  (ze.isArray = Ha),
                  (ze.isArrayBuffer = Ga),
                  (ze.isArrayLike = Ya),
                  (ze.isArrayLikeObject = Ka),
                  (ze.isBoolean = function (t) {
                    return !0 === t || !1 === t || (eu(t) && Er(t) == y);
                  }),
                  (ze.isBuffer = Va),
                  (ze.isDate = Ja),
                  (ze.isElement = function (t) {
                    return eu(t) && 1 === t.nodeType && !iu(t);
                  }),
                  (ze.isEmpty = function (t) {
                    if (null == t) return !0;
                    if (
                      Ya(t) &&
                      (Ha(t) ||
                        "string" == typeof t ||
                        "function" == typeof t.splice ||
                        Va(t) ||
                        fu(t) ||
                        $a(t))
                    )
                      return !t.length;
                    var n = hi(t);
                    if (n == x || n == O) return !t.size;
                    if (xi(t)) return !Pr(t).length;
                    for (var e in t) if (Lt.call(t, e)) return !1;
                    return !0;
                  }),
                  (ze.isEqual = function (t, n) {
                    return Cr(t, n);
                  }),
                  (ze.isEqualWith = function (t, n, e) {
                    var r = (e = "function" == typeof e ? e : o) ? e(t, n) : o;
                    return r === o ? Cr(t, n, o, e) : !!r;
                  }),
                  (ze.isError = Xa),
                  (ze.isFinite = function (t) {
                    return "number" == typeof t && de(t);
                  }),
                  (ze.isFunction = Za),
                  (ze.isInteger = Qa),
                  (ze.isLength = tu),
                  (ze.isMap = ru),
                  (ze.isMatch = function (t, n) {
                    return t === n || Ir(t, n, ci(n));
                  }),
                  (ze.isMatchWith = function (t, n, e) {
                    return (
                      (e = "function" == typeof e ? e : o), Ir(t, n, ci(n), e)
                    );
                  }),
                  (ze.isNaN = function (t) {
                    return ou(t) && t != +t;
                  }),
                  (ze.isNative = function (t) {
                    if (wi(t))
                      throw new wt(
                        "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                      );
                    return Lr(t);
                  }),
                  (ze.isNil = function (t) {
                    return null == t;
                  }),
                  (ze.isNull = function (t) {
                    return null === t;
                  }),
                  (ze.isNumber = ou),
                  (ze.isObject = nu),
                  (ze.isObjectLike = eu),
                  (ze.isPlainObject = iu),
                  (ze.isRegExp = au),
                  (ze.isSafeInteger = function (t) {
                    return Qa(t) && t >= -9007199254740991 && t <= l;
                  }),
                  (ze.isSet = uu),
                  (ze.isString = su),
                  (ze.isSymbol = cu),
                  (ze.isTypedArray = fu),
                  (ze.isUndefined = function (t) {
                    return t === o;
                  }),
                  (ze.isWeakMap = function (t) {
                    return eu(t) && hi(t) == A;
                  }),
                  (ze.isWeakSet = function (t) {
                    return eu(t) && "[object WeakSet]" == Er(t);
                  }),
                  (ze.join = function (t, n) {
                    return null == t ? "" : ve.call(t, n);
                  }),
                  (ze.kebabCase = Hu),
                  (ze.last = Xi),
                  (ze.lastIndexOf = function (t, n, e) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = r;
                    return (
                      e !== o &&
                        (i = (i = vu(e)) < 0 ? ye(r + i, 0) : ge(i, r - 1)),
                      n == n
                        ? (function (t, n, e) {
                            for (var r = e + 1; r--; ) if (t[r] === n) return r;
                            return r;
                          })(t, n, i)
                        : Ln(t, Mn, i, !0)
                    );
                  }),
                  (ze.lowerCase = Gu),
                  (ze.lowerFirst = Yu),
                  (ze.lt = lu),
                  (ze.lte = pu),
                  (ze.max = function (t) {
                    return t && t.length ? dr(t, os, kr) : o;
                  }),
                  (ze.maxBy = function (t, n) {
                    return t && t.length ? dr(t, ui(n, 2), kr) : o;
                  }),
                  (ze.mean = function (t) {
                    return Dn(t, os);
                  }),
                  (ze.meanBy = function (t, n) {
                    return Dn(t, ui(n, 2));
                  }),
                  (ze.min = function (t) {
                    return t && t.length ? dr(t, os, Mr) : o;
                  }),
                  (ze.minBy = function (t, n) {
                    return t && t.length ? dr(t, ui(n, 2), Mr) : o;
                  }),
                  (ze.stubArray = _s),
                  (ze.stubFalse = ys),
                  (ze.stubObject = function () {
                    return {};
                  }),
                  (ze.stubString = function () {
                    return "";
                  }),
                  (ze.stubTrue = function () {
                    return !0;
                  }),
                  (ze.multiply = Ss),
                  (ze.nth = function (t, n) {
                    return t && t.length ? Br(t, vu(n)) : o;
                  }),
                  (ze.noConflict = function () {
                    return an._ === this && (an._ = Ut), this;
                  }),
                  (ze.noop = cs),
                  (ze.now = Oa),
                  (ze.pad = function (t, n, e) {
                    t = mu(t);
                    var r = (n = vu(n)) ? ie(t) : 0;
                    if (!n || r >= n) return t;
                    var o = (n - r) / 2;
                    return Fo(le(o), e) + t + Fo(fe(o), e);
                  }),
                  (ze.padEnd = function (t, n, e) {
                    t = mu(t);
                    var r = (n = vu(n)) ? ie(t) : 0;
                    return n && r < n ? t + Fo(n - r, e) : t;
                  }),
                  (ze.padStart = function (t, n, e) {
                    t = mu(t);
                    var r = (n = vu(n)) ? ie(t) : 0;
                    return n && r < n ? Fo(n - r, e) + t : t;
                  }),
                  (ze.parseInt = function (t, n, e) {
                    return (
                      e || null == n ? (n = 0) : n && (n = +n),
                      be(mu(t).replace(rt, ""), n || 0)
                    );
                  }),
                  (ze.random = function (t, n, e) {
                    if (
                      (e && "boolean" != typeof e && gi(t, n, e) && (n = e = o),
                      e === o &&
                        ("boolean" == typeof n
                          ? ((e = n), (n = o))
                          : "boolean" == typeof t && ((e = t), (t = o))),
                      t === o && n === o
                        ? ((t = 0), (n = 1))
                        : ((t = du(t)),
                          n === o ? ((n = t), (t = 0)) : (n = du(n))),
                      t > n)
                    ) {
                      var r = t;
                      (t = n), (n = r);
                    }
                    if (e || t % 1 || n % 1) {
                      var i = we();
                      return ge(
                        t + i * (n - t + nn("1e-" + ((i + "").length - 1))),
                        n
                      );
                    }
                    return Gr(t, n);
                  }),
                  (ze.reduce = function (t, n, e) {
                    var r = Ha(t) ? Tn : qn,
                      o = arguments.length < 3;
                    return r(t, ui(n, 4), e, o, lr);
                  }),
                  (ze.reduceRight = function (t, n, e) {
                    var r = Ha(t) ? Rn : qn,
                      o = arguments.length < 3;
                    return r(t, ui(n, 4), e, o, pr);
                  }),
                  (ze.repeat = function (t, n, e) {
                    return (
                      (n = (e ? gi(t, n, e) : n === o) ? 1 : vu(n)),
                      Yr(mu(t), n)
                    );
                  }),
                  (ze.replace = function () {
                    var t = arguments,
                      n = mu(t[0]);
                    return t.length < 3 ? n : n.replace(t[1], t[2]);
                  }),
                  (ze.result = function (t, n, e) {
                    var r = -1,
                      i = (n = go(n, t)).length;
                    for (i || ((i = 1), (t = o)); ++r < i; ) {
                      var a = null == t ? o : t[Ui(n[r])];
                      a === o && ((r = i), (a = e)),
                        (t = Za(a) ? a.call(t) : a);
                    }
                    return t;
                  }),
                  (ze.round = Es),
                  (ze.runInContext = t),
                  (ze.sample = function (t) {
                    return (Ha(t) ? Je : Vr)(t);
                  }),
                  (ze.size = function (t) {
                    if (null == t) return 0;
                    if (Ya(t)) return su(t) ? ie(t) : t.length;
                    var n = hi(t);
                    return n == x || n == O ? t.size : Pr(t).length;
                  }),
                  (ze.snakeCase = Ku),
                  (ze.some = function (t, n, e) {
                    var r = Ha(t) ? An : eo;
                    return e && gi(t, n, e) && (n = o), r(t, ui(n, 3));
                  }),
                  (ze.sortedIndex = function (t, n) {
                    return ro(t, n);
                  }),
                  (ze.sortedIndexBy = function (t, n, e) {
                    return oo(t, n, ui(e, 2));
                  }),
                  (ze.sortedIndexOf = function (t, n) {
                    var e = null == t ? 0 : t.length;
                    if (e) {
                      var r = ro(t, n);
                      if (r < e && Ba(t[r], n)) return r;
                    }
                    return -1;
                  }),
                  (ze.sortedLastIndex = function (t, n) {
                    return ro(t, n, !0);
                  }),
                  (ze.sortedLastIndexBy = function (t, n, e) {
                    return oo(t, n, ui(e, 2), !0);
                  }),
                  (ze.sortedLastIndexOf = function (t, n) {
                    if (null != t && t.length) {
                      var e = ro(t, n, !0) - 1;
                      if (Ba(t[e], n)) return e;
                    }
                    return -1;
                  }),
                  (ze.startCase = Vu),
                  (ze.startsWith = function (t, n, e) {
                    return (
                      (t = mu(t)),
                      (e = null == e ? 0 : ar(vu(e), 0, t.length)),
                      (n = uo(n)),
                      t.slice(e, e + n.length) == n
                    );
                  }),
                  (ze.subtract = ks),
                  (ze.sum = function (t) {
                    return t && t.length ? Bn(t, os) : 0;
                  }),
                  (ze.sumBy = function (t, n) {
                    return t && t.length ? Bn(t, ui(n, 2)) : 0;
                  }),
                  (ze.template = function (t, n, e) {
                    var r = ze.templateSettings;
                    e && gi(t, n, e) && (n = o),
                      (t = mu(t)),
                      (n = xu({}, n, r, Xo));
                    var i,
                      a,
                      u = xu({}, n.imports, r.imports, Xo),
                      s = Iu(u),
                      c = Hn(u, s),
                      f = 0,
                      l = n.interpolate || mt,
                      p = "__p += '",
                      h = kt(
                        (n.escape || mt).source +
                          "|" +
                          l.source +
                          "|" +
                          (l === X ? lt : mt).source +
                          "|" +
                          (n.evaluate || mt).source +
                          "|$",
                        "g"
                      ),
                      d =
                        "//# sourceURL=" +
                        (Lt.call(n, "sourceURL")
                          ? (n.sourceURL + "").replace(/\s/g, " ")
                          : "lodash.templateSources[" + ++Xt + "]") +
                        "\n";
                    t.replace(h, function (n, e, r, o, u, s) {
                      return (
                        r || (r = o),
                        (p += t.slice(f, s).replace(bt, Zn)),
                        e && ((i = !0), (p += "' +\n__e(" + e + ") +\n'")),
                        u && ((a = !0), (p += "';\n" + u + ";\n__p += '")),
                        r &&
                          (p +=
                            "' +\n((__t = (" +
                            r +
                            ")) == null ? '' : __t) +\n'"),
                        (f = s + n.length),
                        n
                      );
                    }),
                      (p += "';\n");
                    var v = Lt.call(n, "variable") && n.variable;
                    if (v) {
                      if (ct.test(v))
                        throw new wt(
                          "Invalid `variable` option passed into `_.template`"
                        );
                    } else p = "with (obj) {\n" + p + "\n}\n";
                    (p = (a ? p.replace(W, "") : p)
                      .replace(F, "$1")
                      .replace($, "$1;")),
                      (p =
                        "function(" +
                        (v || "obj") +
                        ") {\n" +
                        (v ? "" : "obj || (obj = {});\n") +
                        "var __t, __p = ''" +
                        (i ? ", __e = _.escape" : "") +
                        (a
                          ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                          : ";\n") +
                        p +
                        "return __p\n}");
                    var _ = Qu(function () {
                      return xt(s, d + "return " + p).apply(o, c);
                    });
                    if (((_.source = p), Xa(_))) throw _;
                    return _;
                  }),
                  (ze.times = function (t, n) {
                    if ((t = vu(t)) < 1 || t > l) return [];
                    var e = h,
                      r = ge(t, h);
                    (n = ui(n)), (t -= h);
                    for (var o = Wn(r, n); ++e < t; ) n(e);
                    return o;
                  }),
                  (ze.toFinite = du),
                  (ze.toInteger = vu),
                  (ze.toLength = _u),
                  (ze.toLower = function (t) {
                    return mu(t).toLowerCase();
                  }),
                  (ze.toNumber = yu),
                  (ze.toSafeInteger = function (t) {
                    return t
                      ? ar(vu(t), -9007199254740991, l)
                      : 0 === t
                      ? t
                      : 0;
                  }),
                  (ze.toString = mu),
                  (ze.toUpper = function (t) {
                    return mu(t).toUpperCase();
                  }),
                  (ze.trim = function (t, n, e) {
                    if ((t = mu(t)) && (e || n === o)) return Fn(t);
                    if (!t || !(n = uo(n))) return t;
                    var r = ae(t),
                      i = ae(n);
                    return bo(r, Yn(r, i), Kn(r, i) + 1).join("");
                  }),
                  (ze.trimEnd = function (t, n, e) {
                    if ((t = mu(t)) && (e || n === o))
                      return t.slice(0, ue(t) + 1);
                    if (!t || !(n = uo(n))) return t;
                    var r = ae(t);
                    return bo(r, 0, Kn(r, ae(n)) + 1).join("");
                  }),
                  (ze.trimStart = function (t, n, e) {
                    if ((t = mu(t)) && (e || n === o)) return t.replace(rt, "");
                    if (!t || !(n = uo(n))) return t;
                    var r = ae(t);
                    return bo(r, Yn(r, ae(n))).join("");
                  }),
                  (ze.truncate = function (t, n) {
                    var e = 30,
                      r = "...";
                    if (nu(n)) {
                      var i = "separator" in n ? n.separator : i;
                      (e = "length" in n ? vu(n.length) : e),
                        (r = "omission" in n ? uo(n.omission) : r);
                    }
                    var a = (t = mu(t)).length;
                    if (Qn(t)) {
                      var u = ae(t);
                      a = u.length;
                    }
                    if (e >= a) return t;
                    var s = e - ie(r);
                    if (s < 1) return r;
                    var c = u ? bo(u, 0, s).join("") : t.slice(0, s);
                    if (i === o) return c + r;
                    if ((u && (s += c.length - s), au(i))) {
                      if (t.slice(s).search(i)) {
                        var f,
                          l = c;
                        for (
                          i.global || (i = kt(i.source, mu(pt.exec(i)) + "g")),
                            i.lastIndex = 0;
                          (f = i.exec(l));

                        )
                          var p = f.index;
                        c = c.slice(0, p === o ? s : p);
                      }
                    } else if (t.indexOf(uo(i), s) != s) {
                      var h = c.lastIndexOf(i);
                      h > -1 && (c = c.slice(0, h));
                    }
                    return c + r;
                  }),
                  (ze.unescape = function (t) {
                    return (t = mu(t)) && Y.test(t) ? t.replace(H, se) : t;
                  }),
                  (ze.uniqueId = function (t) {
                    var n = ++Nt;
                    return mu(t) + n;
                  }),
                  (ze.upperCase = Ju),
                  (ze.upperFirst = Xu),
                  (ze.each = ma),
                  (ze.eachRight = ba),
                  (ze.first = Yi),
                  ss(
                    ze,
                    ((gs = {}),
                    mr(ze, function (t, n) {
                      Lt.call(ze.prototype, n) || (gs[n] = t);
                    }),
                    gs),
                    { chain: !1 }
                  ),
                  (ze.VERSION = "4.17.21"),
                  bn(
                    [
                      "bind",
                      "bindKey",
                      "curry",
                      "curryRight",
                      "partial",
                      "partialRight",
                    ],
                    function (t) {
                      ze[t].placeholder = ze;
                    }
                  ),
                  bn(["drop", "take"], function (t, n) {
                    (Fe.prototype[t] = function (e) {
                      e = e === o ? 1 : ye(vu(e), 0);
                      var r =
                        this.__filtered__ && !n ? new Fe(this) : this.clone();
                      return (
                        r.__filtered__
                          ? (r.__takeCount__ = ge(e, r.__takeCount__))
                          : r.__views__.push({
                              size: ge(e, h),
                              type: t + (r.__dir__ < 0 ? "Right" : ""),
                            }),
                        r
                      );
                    }),
                      (Fe.prototype[t + "Right"] = function (n) {
                        return this.reverse()[t](n).reverse();
                      });
                  }),
                  bn(["filter", "map", "takeWhile"], function (t, n) {
                    var e = n + 1,
                      r = 1 == e || 3 == e;
                    Fe.prototype[t] = function (t) {
                      var n = this.clone();
                      return (
                        n.__iteratees__.push({ iteratee: ui(t, 3), type: e }),
                        (n.__filtered__ = n.__filtered__ || r),
                        n
                      );
                    };
                  }),
                  bn(["head", "last"], function (t, n) {
                    var e = "take" + (n ? "Right" : "");
                    Fe.prototype[t] = function () {
                      return this[e](1).value()[0];
                    };
                  }),
                  bn(["initial", "tail"], function (t, n) {
                    var e = "drop" + (n ? "" : "Right");
                    Fe.prototype[t] = function () {
                      return this.__filtered__ ? new Fe(this) : this[e](1);
                    };
                  }),
                  (Fe.prototype.compact = function () {
                    return this.filter(os);
                  }),
                  (Fe.prototype.find = function (t) {
                    return this.filter(t).head();
                  }),
                  (Fe.prototype.findLast = function (t) {
                    return this.reverse().find(t);
                  }),
                  (Fe.prototype.invokeMap = Kr(function (t, n) {
                    return "function" == typeof t
                      ? new Fe(this)
                      : this.map(function (e) {
                          return Rr(e, t, n);
                        });
                  })),
                  (Fe.prototype.reject = function (t) {
                    return this.filter(Ma(ui(t)));
                  }),
                  (Fe.prototype.slice = function (t, n) {
                    t = vu(t);
                    var e = this;
                    return e.__filtered__ && (t > 0 || n < 0)
                      ? new Fe(e)
                      : (t < 0 ? (e = e.takeRight(-t)) : t && (e = e.drop(t)),
                        n !== o &&
                          (e =
                            (n = vu(n)) < 0 ? e.dropRight(-n) : e.take(n - t)),
                        e);
                  }),
                  (Fe.prototype.takeRightWhile = function (t) {
                    return this.reverse().takeWhile(t).reverse();
                  }),
                  (Fe.prototype.toArray = function () {
                    return this.take(h);
                  }),
                  mr(Fe.prototype, function (t, n) {
                    var e = /^(?:filter|find|map|reject)|While$/.test(n),
                      r = /^(?:head|last)$/.test(n),
                      i = ze[r ? "take" + ("last" == n ? "Right" : "") : n],
                      a = r || /^find/.test(n);
                    i &&
                      (ze.prototype[n] = function () {
                        var n = this.__wrapped__,
                          u = r ? [1] : arguments,
                          s = n instanceof Fe,
                          c = u[0],
                          f = s || Ha(n),
                          l = function (t) {
                            var n = i.apply(ze, On([t], u));
                            return r && p ? n[0] : n;
                          };
                        f &&
                          e &&
                          "function" == typeof c &&
                          1 != c.length &&
                          (s = f = !1);
                        var p = this.__chain__,
                          h = !!this.__actions__.length,
                          d = a && !p,
                          v = s && !h;
                        if (!a && f) {
                          n = v ? n : new Fe(this);
                          var _ = t.apply(n, u);
                          return (
                            _.__actions__.push({
                              func: da,
                              args: [l],
                              thisArg: o,
                            }),
                            new We(_, p)
                          );
                        }
                        return d && v
                          ? t.apply(this, u)
                          : ((_ = this.thru(l)),
                            d ? (r ? _.value()[0] : _.value()) : _);
                      });
                  }),
                  bn(
                    ["pop", "push", "shift", "sort", "splice", "unshift"],
                    function (t) {
                      var n = Tt[t],
                        e = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                        r = /^(?:pop|shift)$/.test(t);
                      ze.prototype[t] = function () {
                        var t = arguments;
                        if (r && !this.__chain__) {
                          var o = this.value();
                          return n.apply(Ha(o) ? o : [], t);
                        }
                        return this[e](function (e) {
                          return n.apply(Ha(e) ? e : [], t);
                        });
                      };
                    }
                  ),
                  mr(Fe.prototype, function (t, n) {
                    var e = ze[n];
                    if (e) {
                      var r = e.name + "";
                      Lt.call(Ae, r) || (Ae[r] = []),
                        Ae[r].push({ name: n, func: e });
                    }
                  }),
                  (Ae[zo(o, 2).name] = [{ name: "wrapper", func: o }]),
                  (Fe.prototype.clone = function () {
                    var t = new Fe(this.__wrapped__);
                    return (
                      (t.__actions__ = To(this.__actions__)),
                      (t.__dir__ = this.__dir__),
                      (t.__filtered__ = this.__filtered__),
                      (t.__iteratees__ = To(this.__iteratees__)),
                      (t.__takeCount__ = this.__takeCount__),
                      (t.__views__ = To(this.__views__)),
                      t
                    );
                  }),
                  (Fe.prototype.reverse = function () {
                    if (this.__filtered__) {
                      var t = new Fe(this);
                      (t.__dir__ = -1), (t.__filtered__ = !0);
                    } else (t = this.clone()).__dir__ *= -1;
                    return t;
                  }),
                  (Fe.prototype.value = function () {
                    var t = this.__wrapped__.value(),
                      n = this.__dir__,
                      e = Ha(t),
                      r = n < 0,
                      o = e ? t.length : 0,
                      i = (function (t, n, e) {
                        for (var r = -1, o = e.length; ++r < o; ) {
                          var i = e[r],
                            a = i.size;
                          switch (i.type) {
                            case "drop":
                              t += a;
                              break;
                            case "dropRight":
                              n -= a;
                              break;
                            case "take":
                              n = ge(n, t + a);
                              break;
                            case "takeRight":
                              t = ye(t, n - a);
                          }
                        }
                        return { start: t, end: n };
                      })(0, o, this.__views__),
                      a = i.start,
                      u = i.end,
                      s = u - a,
                      c = r ? u : a - 1,
                      f = this.__iteratees__,
                      l = f.length,
                      p = 0,
                      h = ge(s, this.__takeCount__);
                    if (!e || (!r && o == s && h == s))
                      return po(t, this.__actions__);
                    var d = [];
                    t: for (; s-- && p < h; ) {
                      for (var v = -1, _ = t[(c += n)]; ++v < l; ) {
                        var y = f[v],
                          g = y.iteratee,
                          m = y.type,
                          b = g(_);
                        if (2 == m) _ = b;
                        else if (!b) {
                          if (1 == m) continue t;
                          break t;
                        }
                      }
                      d[p++] = _;
                    }
                    return d;
                  }),
                  (ze.prototype.at = va),
                  (ze.prototype.chain = function () {
                    return ha(this);
                  }),
                  (ze.prototype.commit = function () {
                    return new We(this.value(), this.__chain__);
                  }),
                  (ze.prototype.next = function () {
                    this.__values__ === o &&
                      (this.__values__ = hu(this.value()));
                    var t = this.__index__ >= this.__values__.length;
                    return {
                      done: t,
                      value: t ? o : this.__values__[this.__index__++],
                    };
                  }),
                  (ze.prototype.plant = function (t) {
                    for (var n, e = this; e instanceof Be; ) {
                      var r = qi(e);
                      (r.__index__ = 0),
                        (r.__values__ = o),
                        n ? (i.__wrapped__ = r) : (n = r);
                      var i = r;
                      e = e.__wrapped__;
                    }
                    return (i.__wrapped__ = t), n;
                  }),
                  (ze.prototype.reverse = function () {
                    var t = this.__wrapped__;
                    if (t instanceof Fe) {
                      var n = t;
                      return (
                        this.__actions__.length && (n = new Fe(this)),
                        (n = n.reverse()).__actions__.push({
                          func: da,
                          args: [na],
                          thisArg: o,
                        }),
                        new We(n, this.__chain__)
                      );
                    }
                    return this.thru(na);
                  }),
                  (ze.prototype.toJSON =
                    ze.prototype.valueOf =
                    ze.prototype.value =
                      function () {
                        return po(this.__wrapped__, this.__actions__);
                      }),
                  (ze.prototype.first = ze.prototype.head),
                  un &&
                    (ze.prototype[un] = function () {
                      return this;
                    }),
                  ze
                );
              })();
            (an._ = ce),
              (r = function () {
                return ce;
              }.call(n, e, n, t)) === o || (t.exports = r);
          }.call(this);
      },
      5161: (t, n, e) => {
        var r = e(9932),
          o = e(7206),
          i = e(9199),
          a = e(1469);
        t.exports = function (t, n) {
          return (a(t) ? r : i)(t, o(n, 3));
        };
      },
      8306: (t, n, e) => {
        var r = e(3369);
        function o(t, n) {
          if ("function" != typeof t || (null != n && "function" != typeof n))
            throw new TypeError("Expected a function");
          var e = function () {
            var r = arguments,
              o = n ? n.apply(this, r) : r[0],
              i = e.cache;
            if (i.has(o)) return i.get(o);
            var a = t.apply(this, r);
            return (e.cache = i.set(o, a) || i), a;
          };
          return (e.cache = new (o.Cache || r)()), e;
        }
        (o.Cache = r), (t.exports = o);
      },
      9601: (t, n, e) => {
        var r = e(371),
          o = e(9152),
          i = e(5403),
          a = e(327);
        t.exports = function (t) {
          return i(t) ? r(a(t)) : o(t);
        };
      },
      479: (t) => {
        t.exports = function () {
          return [];
        };
      },
      5062: (t) => {
        t.exports = function () {
          return !1;
        };
      },
      9833: (t, n, e) => {
        var r = e(531);
        t.exports = function (t) {
          return null == t ? "" : r(t);
        };
      },
    },
    n = {};
  function e(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { id: r, loaded: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports;
  }
  (e.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (t, n) => {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.hmd = (t) => (
      (t = Object.create(t)).children || (t.children = []),
      Object.defineProperty(t, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              t.id
          );
        },
      }),
      t
    )),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (e.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (() => {
      "use strict";
      const t = "boxComentarios__body",
        n = "boxComentarios__header",
        r = "RATINGS_AND_REVIEWS",
        o = "Comentários Interatividade";
      var i = e(7361),
        a = e.n(i);
      const u = () => a()(window, "cdaaas.SETTINGS.COMMENTS_CONFIG.config", {}),
        s = () => a()(window, "cdaaas.SETTINGS.CANONICAL_URL", void 0),
        c = () => {
          let t = f("WALL_METRICS_USL");
          return void 0 === t
            ? Boolean(
                a()(window, "cdaaas.SETTINGS.COMMENTS_ALLOW_INTERACTION", !1)
              )
            : Boolean(2 === Number.parseInt(t));
        },
        f = (t) => {
          let n = document.cookie.split(";"),
            e = n && n.find((n) => n.includes(t));
          return e && e.split("=")[1];
        };
      function l(t, n) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var r,
          o,
          i = e.call(t),
          a = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            r && !r.done && (e = i.return) && e.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function p() {
        for (var t = [], n = 0; n < arguments.length; n++)
          t = t.concat(l(arguments[n]));
        return t;
      }
      var h = function () {
        return (
          (h =
            Object.assign ||
            function (t) {
              for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in (n = arguments[e]))
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              return t;
            }),
          h.apply(this, arguments)
        );
      };
      function d(t, n) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var r,
          o,
          i = e.call(t),
          a = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            r && !r.done && (e = i.return) && e.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function v() {
        for (var t = [], n = 0; n < arguments.length; n++)
          t = t.concat(d(arguments[n]));
        return t;
      }
      var _ = function (t, n) {
          return (
            (_ =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, n) {
                  t.__proto__ = n;
                }) ||
              function (t, n) {
                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
              }),
            _(t, n)
          );
        },
        y = function () {
          return (
            (y =
              Object.assign ||
              function (t) {
                for (var n, e = 1, r = arguments.length; e < r; e++)
                  for (var o in (n = arguments[e]))
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                return t;
              }),
            y.apply(this, arguments)
          );
        };
      function g(t) {
        var n = "function" == typeof Symbol && Symbol.iterator,
          e = n && t[n],
          r = 0;
        if (e) return e.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          n ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function m(t, n) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var r,
          o,
          i = e.call(t),
          a = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            r && !r.done && (e = i.return) && e.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function b() {
        for (var t = [], n = 0; n < arguments.length; n++)
          t = t.concat(m(arguments[n]));
        return t;
      }
      var w = e(2991),
        x = Object.prototype.toString;
      function S(t) {
        switch (x.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return I(t, Error);
        }
      }
      function E(t, n) {
        return x.call(t) === "[object " + n + "]";
      }
      function k(t) {
        return E(t, "ErrorEvent");
      }
      function j(t) {
        return E(t, "DOMError");
      }
      function O(t) {
        return E(t, "String");
      }
      function T(t) {
        return null === t || ("object" != typeof t && "function" != typeof t);
      }
      function R(t) {
        return E(t, "Object");
      }
      function A(t) {
        return "undefined" != typeof Event && I(t, Event);
      }
      function C(t) {
        return Boolean(t && t.then && "function" == typeof t.then);
      }
      function I(t, n) {
        try {
          return t instanceof n;
        } catch (t) {
          return !1;
        }
      }
      function L(t, n) {
        try {
          for (
            var e = t, r = [], o = 0, i = 0, a = " > ".length, u = void 0;
            e &&
            o++ < 5 &&
            !(
              "html" === (u = N(e, n)) ||
              (o > 1 && i + r.length * a + u.length >= 80)
            );

          )
            r.push(u), (i += u.length), (e = e.parentNode);
          return r.reverse().join(" > ");
        } catch (t) {
          return "<unknown>";
        }
      }
      function N(t, n) {
        var e,
          r,
          o,
          i,
          a,
          u = t,
          s = [];
        if (!u || !u.tagName) return "";
        s.push(u.tagName.toLowerCase());
        var c =
          n && n.length
            ? n
                .filter(function (t) {
                  return u.getAttribute(t);
                })
                .map(function (t) {
                  return [t, u.getAttribute(t)];
                })
            : null;
        if (c && c.length)
          c.forEach(function (t) {
            s.push("[" + t[0] + '="' + t[1] + '"]');
          });
        else if ((u.id && s.push("#" + u.id), (e = u.className) && O(e)))
          for (r = e.split(/\s+/), a = 0; a < r.length; a++) s.push("." + r[a]);
        var f = ["type", "name", "title", "alt"];
        for (a = 0; a < f.length; a++)
          (o = f[a]),
            (i = u.getAttribute(o)) && s.push("[" + o + '="' + i + '"]');
        return s.join("");
      }
      function P(t, n) {
        return (
          void 0 === n && (n = 0),
          "string" != typeof t || 0 === n || t.length <= n
            ? t
            : t.substr(0, n) + "..."
        );
      }
      function M(t, n) {
        if (!Array.isArray(t)) return "";
        for (var e = [], r = 0; r < t.length; r++) {
          var o = t[r];
          try {
            e.push(String(o));
          } catch (t) {
            e.push("[value cannot be serialized]");
          }
        }
        return e.join(n);
      }
      function D(t, n) {
        return (
          !!O(t) &&
          (E(n, "RegExp")
            ? n.test(t)
            : "string" == typeof n && -1 !== t.indexOf(n))
        );
      }
      function U(t, n, e) {
        if (n in t) {
          var r = t[n],
            o = e(r);
          if ("function" == typeof o)
            try {
              q(o, r);
            } catch (t) {}
          t[n] = o;
        }
      }
      function z(t, n, e) {
        Object.defineProperty(t, n, {
          value: e,
          writable: !0,
          configurable: !0,
        });
      }
      function q(t, n) {
        var e = n.prototype || {};
        (t.prototype = n.prototype = e), z(t, "__sentry_original__", n);
      }
      function B(t) {
        return t.__sentry_original__;
      }
      function W(t) {
        var n = t;
        if (S(t))
          n = y({ message: t.message, name: t.name, stack: t.stack }, $(t));
        else if (A(t)) {
          var e = t;
          (n = y(
            {
              type: e.type,
              target: F(e.target),
              currentTarget: F(e.currentTarget),
            },
            $(e)
          )),
            "undefined" != typeof CustomEvent &&
              I(t, CustomEvent) &&
              (n.detail = e.detail);
        }
        return n;
      }
      function F(t) {
        try {
          return "undefined" != typeof Element && I(t, Element)
            ? L(t)
            : Object.prototype.toString.call(t);
        } catch (t) {
          return "<unknown>";
        }
      }
      function $(t) {
        var n = {};
        for (var e in t)
          Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n;
      }
      function H(t, n) {
        void 0 === n && (n = 40);
        var e = Object.keys(W(t));
        if ((e.sort(), !e.length)) return "[object has no keys]";
        if (e[0].length >= n) return P(e[0], n);
        for (var r = e.length; r > 0; r--) {
          var o = e.slice(0, r).join(", ");
          if (!(o.length > n)) return r === e.length ? o : P(o, n);
        }
        return "";
      }
      function G(t) {
        var n, e;
        if (R(t)) {
          var r = {};
          try {
            for (
              var o = g(Object.keys(t)), i = o.next();
              !i.done;
              i = o.next()
            ) {
              var a = i.value;
              void 0 !== t[a] && (r[a] = G(t[a]));
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              i && !i.done && (e = o.return) && e.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return r;
        }
        return Array.isArray(t) ? t.map(G) : t;
      }
      function Y() {
        var t = (0, w.R)(),
          n = t.crypto || t.msCrypto;
        if (void 0 !== n && n.getRandomValues) {
          var e = new Uint16Array(8);
          n.getRandomValues(e),
            (e[3] = (4095 & e[3]) | 16384),
            (e[4] = (16383 & e[4]) | 32768);
          var r = function (t) {
            for (var n = t.toString(16); n.length < 4; ) n = "0" + n;
            return n;
          };
          return (
            r(e[0]) +
            r(e[1]) +
            r(e[2]) +
            r(e[3]) +
            r(e[4]) +
            r(e[5]) +
            r(e[6]) +
            r(e[7])
          );
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
          /[xy]/g,
          function (t) {
            var n = (16 * Math.random()) | 0;
            return ("x" === t ? n : (3 & n) | 8).toString(16);
          }
        );
      }
      function K(t) {
        if (!t) return {};
        var n = t.match(
          /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
        );
        if (!n) return {};
        var e = n[6] || "",
          r = n[8] || "";
        return {
          host: n[4],
          path: n[5],
          protocol: n[2],
          relative: n[5] + e + r,
        };
      }
      function V(t) {
        return t.exception && t.exception.values
          ? t.exception.values[0]
          : void 0;
      }
      function J(t) {
        var n = t.message,
          e = t.event_id;
        if (n) return n;
        var r = V(t);
        return r
          ? r.type && r.value
            ? r.type + ": " + r.value
            : r.type || r.value || e || "<unknown>"
          : e || "<unknown>";
      }
      function X(t, n, e) {
        var r = (t.exception = t.exception || {}),
          o = (r.values = r.values || []),
          i = (o[0] = o[0] || {});
        i.value || (i.value = n || ""), i.type || (i.type = e || "Error");
      }
      function Z(t, n) {
        var e = V(t);
        if (e) {
          var r = e.mechanism;
          if (
            ((e.mechanism = y(
              y(y({}, { type: "generic", handled: !0 }), r),
              n
            )),
            n && "data" in n)
          ) {
            var o = y(y({}, r && r.data), n.data);
            e.mechanism.data = o;
          }
        }
      }
      function Q(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
          z(t, "__sentry_captured__", !0);
        } catch (t) {}
        return !1;
      }
      var tt,
        nt = e(1170),
        et = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        rt = (0, w.R)(),
        ot = "Sentry Logger ",
        it = ["debug", "info", "warn", "error", "log", "assert"];
      function at(t) {
        var n = (0, w.R)();
        if (!("console" in n)) return t();
        var e = n.console,
          r = {};
        it.forEach(function (t) {
          var o = e[t] && e[t].__sentry_original__;
          t in n.console && o && ((r[t] = e[t]), (e[t] = o));
        });
        try {
          return t();
        } finally {
          Object.keys(r).forEach(function (t) {
            e[t] = r[t];
          });
        }
      }
      function ut() {
        var t = !1,
          n = {
            enable: function () {
              t = !0;
            },
            disable: function () {
              t = !1;
            },
          };
        return (
          et
            ? it.forEach(function (e) {
                n[e] = function () {
                  for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                  t &&
                    at(function () {
                      var t;
                      (t = rt.console)[e].apply(t, b([ot + "[" + e + "]:"], n));
                    });
                };
              })
            : it.forEach(function (t) {
                n[t] = function () {};
              }),
          n
        );
      }
      tt = et ? (0, w.Y)("logger", ut) : ut();
      var st = e(2176),
        ct = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function ft(t) {
        return new pt(function (n) {
          n(t);
        });
      }
      function lt(t) {
        return new pt(function (n, e) {
          e(t);
        });
      }
      var pt = (function () {
          function t(t) {
            var n = this;
            (this._state = 0),
              (this._handlers = []),
              (this._resolve = function (t) {
                n._setResult(1, t);
              }),
              (this._reject = function (t) {
                n._setResult(2, t);
              }),
              (this._setResult = function (t, e) {
                0 === n._state &&
                  (C(e)
                    ? e.then(n._resolve, n._reject)
                    : ((n._state = t), (n._value = e), n._executeHandlers()));
              }),
              (this._executeHandlers = function () {
                if (0 !== n._state) {
                  var t = n._handlers.slice();
                  (n._handlers = []),
                    t.forEach(function (t) {
                      t[0] ||
                        (1 === n._state && t[1](n._value),
                        2 === n._state && t[2](n._value),
                        (t[0] = !0));
                    });
                }
              });
            try {
              t(this._resolve, this._reject);
            } catch (t) {
              this._reject(t);
            }
          }
          return (
            (t.prototype.then = function (n, e) {
              var r = this;
              return new t(function (t, o) {
                r._handlers.push([
                  !1,
                  function (e) {
                    if (n)
                      try {
                        t(n(e));
                      } catch (t) {
                        o(t);
                      }
                    else t(e);
                  },
                  function (n) {
                    if (e)
                      try {
                        t(e(n));
                      } catch (t) {
                        o(t);
                      }
                    else o(n);
                  },
                ]),
                  r._executeHandlers();
              });
            }),
            (t.prototype.catch = function (t) {
              return this.then(function (t) {
                return t;
              }, t);
            }),
            (t.prototype.finally = function (n) {
              var e = this;
              return new t(function (t, r) {
                var o, i;
                return e
                  .then(
                    function (t) {
                      (i = !1), (o = t), n && n();
                    },
                    function (t) {
                      (i = !0), (o = t), n && n();
                    }
                  )
                  .then(function () {
                    i ? r(o) : t(o);
                  });
              });
            }),
            t
          );
        })(),
        ht = (function () {
          function t() {
            (this._notifyingListeners = !1),
              (this._scopeListeners = []),
              (this._eventProcessors = []),
              (this._breadcrumbs = []),
              (this._user = {}),
              (this._tags = {}),
              (this._extra = {}),
              (this._contexts = {}),
              (this._sdkProcessingMetadata = {});
          }
          return (
            (t.clone = function (n) {
              var e = new t();
              return (
                n &&
                  ((e._breadcrumbs = v(n._breadcrumbs)),
                  (e._tags = h({}, n._tags)),
                  (e._extra = h({}, n._extra)),
                  (e._contexts = h({}, n._contexts)),
                  (e._user = n._user),
                  (e._level = n._level),
                  (e._span = n._span),
                  (e._session = n._session),
                  (e._transactionName = n._transactionName),
                  (e._fingerprint = n._fingerprint),
                  (e._eventProcessors = v(n._eventProcessors)),
                  (e._requestSession = n._requestSession)),
                e
              );
            }),
            (t.prototype.addScopeListener = function (t) {
              this._scopeListeners.push(t);
            }),
            (t.prototype.addEventProcessor = function (t) {
              return this._eventProcessors.push(t), this;
            }),
            (t.prototype.setUser = function (t) {
              return (
                (this._user = t || {}),
                this._session && this._session.update({ user: t }),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.getUser = function () {
              return this._user;
            }),
            (t.prototype.getRequestSession = function () {
              return this._requestSession;
            }),
            (t.prototype.setRequestSession = function (t) {
              return (this._requestSession = t), this;
            }),
            (t.prototype.setTags = function (t) {
              return (
                (this._tags = h(h({}, this._tags), t)),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setTag = function (t, n) {
              var e;
              return (
                (this._tags = h(h({}, this._tags), (((e = {})[t] = n), e))),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setExtras = function (t) {
              return (
                (this._extra = h(h({}, this._extra), t)),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setExtra = function (t, n) {
              var e;
              return (
                (this._extra = h(h({}, this._extra), (((e = {})[t] = n), e))),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setFingerprint = function (t) {
              return (
                (this._fingerprint = t), this._notifyScopeListeners(), this
              );
            }),
            (t.prototype.setLevel = function (t) {
              return (this._level = t), this._notifyScopeListeners(), this;
            }),
            (t.prototype.setTransactionName = function (t) {
              return (
                (this._transactionName = t), this._notifyScopeListeners(), this
              );
            }),
            (t.prototype.setTransaction = function (t) {
              return this.setTransactionName(t);
            }),
            (t.prototype.setContext = function (t, n) {
              var e;
              return (
                null === n
                  ? delete this._contexts[t]
                  : (this._contexts = h(
                      h({}, this._contexts),
                      (((e = {})[t] = n), e)
                    )),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.setSpan = function (t) {
              return (this._span = t), this._notifyScopeListeners(), this;
            }),
            (t.prototype.getSpan = function () {
              return this._span;
            }),
            (t.prototype.getTransaction = function () {
              var t = this.getSpan();
              return t && t.transaction;
            }),
            (t.prototype.setSession = function (t) {
              return (
                t ? (this._session = t) : delete this._session,
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.getSession = function () {
              return this._session;
            }),
            (t.prototype.update = function (n) {
              if (!n) return this;
              if ("function" == typeof n) {
                var e = n(this);
                return e instanceof t ? e : this;
              }
              return (
                n instanceof t
                  ? ((this._tags = h(h({}, this._tags), n._tags)),
                    (this._extra = h(h({}, this._extra), n._extra)),
                    (this._contexts = h(h({}, this._contexts), n._contexts)),
                    n._user &&
                      Object.keys(n._user).length &&
                      (this._user = n._user),
                    n._level && (this._level = n._level),
                    n._fingerprint && (this._fingerprint = n._fingerprint),
                    n._requestSession &&
                      (this._requestSession = n._requestSession))
                  : R(n) &&
                    ((this._tags = h(h({}, this._tags), n.tags)),
                    (this._extra = h(h({}, this._extra), n.extra)),
                    (this._contexts = h(h({}, this._contexts), n.contexts)),
                    n.user && (this._user = n.user),
                    n.level && (this._level = n.level),
                    n.fingerprint && (this._fingerprint = n.fingerprint),
                    n.requestSession &&
                      (this._requestSession = n.requestSession)),
                this
              );
            }),
            (t.prototype.clear = function () {
              return (
                (this._breadcrumbs = []),
                (this._tags = {}),
                (this._extra = {}),
                (this._user = {}),
                (this._contexts = {}),
                (this._level = void 0),
                (this._transactionName = void 0),
                (this._fingerprint = void 0),
                (this._requestSession = void 0),
                (this._span = void 0),
                (this._session = void 0),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.addBreadcrumb = function (t, n) {
              var e = "number" == typeof n ? Math.min(n, 100) : 100;
              if (e <= 0) return this;
              var r = h({ timestamp: (0, nt.yW)() }, t);
              return (
                (this._breadcrumbs = v(this._breadcrumbs, [r]).slice(-e)),
                this._notifyScopeListeners(),
                this
              );
            }),
            (t.prototype.clearBreadcrumbs = function () {
              return (
                (this._breadcrumbs = []), this._notifyScopeListeners(), this
              );
            }),
            (t.prototype.applyToEvent = function (t, n) {
              if (
                (this._extra &&
                  Object.keys(this._extra).length &&
                  (t.extra = h(h({}, this._extra), t.extra)),
                this._tags &&
                  Object.keys(this._tags).length &&
                  (t.tags = h(h({}, this._tags), t.tags)),
                this._user &&
                  Object.keys(this._user).length &&
                  (t.user = h(h({}, this._user), t.user)),
                this._contexts &&
                  Object.keys(this._contexts).length &&
                  (t.contexts = h(h({}, this._contexts), t.contexts)),
                this._level && (t.level = this._level),
                this._transactionName &&
                  (t.transaction = this._transactionName),
                this._span)
              ) {
                t.contexts = h(
                  { trace: this._span.getTraceContext() },
                  t.contexts
                );
                var e = this._span.transaction && this._span.transaction.name;
                e && (t.tags = h({ transaction: e }, t.tags));
              }
              return (
                this._applyFingerprint(t),
                (t.breadcrumbs = v(t.breadcrumbs || [], this._breadcrumbs)),
                (t.breadcrumbs =
                  t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
                (t.sdkProcessingMetadata = this._sdkProcessingMetadata),
                this._notifyEventProcessors(
                  v(dt(), this._eventProcessors),
                  t,
                  n
                )
              );
            }),
            (t.prototype.setSDKProcessingMetadata = function (t) {
              return (
                (this._sdkProcessingMetadata = h(
                  h({}, this._sdkProcessingMetadata),
                  t
                )),
                this
              );
            }),
            (t.prototype._notifyEventProcessors = function (t, n, e, r) {
              var o = this;
              return (
                void 0 === r && (r = 0),
                new pt(function (i, a) {
                  var u = t[r];
                  if (null === n || "function" != typeof u) i(n);
                  else {
                    var s = u(h({}, n), e);
                    C(s)
                      ? s
                          .then(function (n) {
                            return o
                              ._notifyEventProcessors(t, n, e, r + 1)
                              .then(i);
                          })
                          .then(null, a)
                      : o
                          ._notifyEventProcessors(t, s, e, r + 1)
                          .then(i)
                          .then(null, a);
                  }
                })
              );
            }),
            (t.prototype._notifyScopeListeners = function () {
              var t = this;
              this._notifyingListeners ||
                ((this._notifyingListeners = !0),
                this._scopeListeners.forEach(function (n) {
                  n(t);
                }),
                (this._notifyingListeners = !1));
            }),
            (t.prototype._applyFingerprint = function (t) {
              (t.fingerprint = t.fingerprint
                ? Array.isArray(t.fingerprint)
                  ? t.fingerprint
                  : [t.fingerprint]
                : []),
                this._fingerprint &&
                  (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
            }),
            t
          );
        })();
      function dt() {
        return (0, w.Y)("globalEventProcessors", function () {
          return [];
        });
      }
      function vt(t) {
        dt().push(t);
      }
      var _t = (function () {
          function t(t) {
            (this.errors = 0),
              (this.sid = Y()),
              (this.duration = 0),
              (this.status = "ok"),
              (this.init = !0),
              (this.ignoreDuration = !1);
            var n = (0, nt.ph)();
            (this.timestamp = n), (this.started = n), t && this.update(t);
          }
          return (
            (t.prototype.update = function (t) {
              if (
                (void 0 === t && (t = {}),
                t.user &&
                  (!this.ipAddress &&
                    t.user.ip_address &&
                    (this.ipAddress = t.user.ip_address),
                  this.did ||
                    t.did ||
                    (this.did = t.user.id || t.user.email || t.user.username)),
                (this.timestamp = t.timestamp || (0, nt.ph)()),
                t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
                t.sid && (this.sid = 32 === t.sid.length ? t.sid : Y()),
                void 0 !== t.init && (this.init = t.init),
                !this.did && t.did && (this.did = "" + t.did),
                "number" == typeof t.started && (this.started = t.started),
                this.ignoreDuration)
              )
                this.duration = void 0;
              else if ("number" == typeof t.duration)
                this.duration = t.duration;
              else {
                var n = this.timestamp - this.started;
                this.duration = n >= 0 ? n : 0;
              }
              t.release && (this.release = t.release),
                t.environment && (this.environment = t.environment),
                !this.ipAddress &&
                  t.ipAddress &&
                  (this.ipAddress = t.ipAddress),
                !this.userAgent &&
                  t.userAgent &&
                  (this.userAgent = t.userAgent),
                "number" == typeof t.errors && (this.errors = t.errors),
                t.status && (this.status = t.status);
            }),
            (t.prototype.close = function (t) {
              t
                ? this.update({ status: t })
                : "ok" === this.status
                ? this.update({ status: "exited" })
                : this.update();
            }),
            (t.prototype.toJSON = function () {
              return G({
                sid: "" + this.sid,
                init: this.init,
                started: new Date(1e3 * this.started).toISOString(),
                timestamp: new Date(1e3 * this.timestamp).toISOString(),
                status: this.status,
                errors: this.errors,
                did:
                  "number" == typeof this.did || "string" == typeof this.did
                    ? "" + this.did
                    : void 0,
                duration: this.duration,
                attrs: {
                  release: this.release,
                  environment: this.environment,
                  ip_address: this.ipAddress,
                  user_agent: this.userAgent,
                },
              });
            }),
            t
          );
        })(),
        yt = (function () {
          function t(t, n, e) {
            void 0 === n && (n = new ht()),
              void 0 === e && (e = 4),
              (this._version = e),
              (this._stack = [{}]),
              (this.getStackTop().scope = n),
              t && this.bindClient(t);
          }
          return (
            (t.prototype.isOlderThan = function (t) {
              return this._version < t;
            }),
            (t.prototype.bindClient = function (t) {
              (this.getStackTop().client = t),
                t && t.setupIntegrations && t.setupIntegrations();
            }),
            (t.prototype.pushScope = function () {
              var t = ht.clone(this.getScope());
              return (
                this.getStack().push({ client: this.getClient(), scope: t }), t
              );
            }),
            (t.prototype.popScope = function () {
              return !(this.getStack().length <= 1 || !this.getStack().pop());
            }),
            (t.prototype.withScope = function (t) {
              var n = this.pushScope();
              try {
                t(n);
              } finally {
                this.popScope();
              }
            }),
            (t.prototype.getClient = function () {
              return this.getStackTop().client;
            }),
            (t.prototype.getScope = function () {
              return this.getStackTop().scope;
            }),
            (t.prototype.getStack = function () {
              return this._stack;
            }),
            (t.prototype.getStackTop = function () {
              return this._stack[this._stack.length - 1];
            }),
            (t.prototype.captureException = function (t, n) {
              var e = (this._lastEventId = n && n.event_id ? n.event_id : Y()),
                r = n;
              if (!n) {
                var o = void 0;
                try {
                  throw new Error("Sentry syntheticException");
                } catch (t) {
                  o = t;
                }
                r = { originalException: t, syntheticException: o };
              }
              return (
                this._invokeClient(
                  "captureException",
                  t,
                  h(h({}, r), { event_id: e })
                ),
                e
              );
            }),
            (t.prototype.captureMessage = function (t, n, e) {
              var r = (this._lastEventId = e && e.event_id ? e.event_id : Y()),
                o = e;
              if (!e) {
                var i = void 0;
                try {
                  throw new Error(t);
                } catch (t) {
                  i = t;
                }
                o = { originalException: t, syntheticException: i };
              }
              return (
                this._invokeClient(
                  "captureMessage",
                  t,
                  n,
                  h(h({}, o), { event_id: r })
                ),
                r
              );
            }),
            (t.prototype.captureEvent = function (t, n) {
              var e = n && n.event_id ? n.event_id : Y();
              return (
                "transaction" !== t.type && (this._lastEventId = e),
                this._invokeClient(
                  "captureEvent",
                  t,
                  h(h({}, n), { event_id: e })
                ),
                e
              );
            }),
            (t.prototype.lastEventId = function () {
              return this._lastEventId;
            }),
            (t.prototype.addBreadcrumb = function (t, n) {
              var e = this.getStackTop(),
                r = e.scope,
                o = e.client;
              if (r && o) {
                var i = (o.getOptions && o.getOptions()) || {},
                  a = i.beforeBreadcrumb,
                  u = void 0 === a ? null : a,
                  s = i.maxBreadcrumbs,
                  c = void 0 === s ? 100 : s;
                if (!(c <= 0)) {
                  var f = (0, nt.yW)(),
                    l = h({ timestamp: f }, t),
                    p = u
                      ? at(function () {
                          return u(l, n);
                        })
                      : l;
                  null !== p && r.addBreadcrumb(p, c);
                }
              }
            }),
            (t.prototype.setUser = function (t) {
              var n = this.getScope();
              n && n.setUser(t);
            }),
            (t.prototype.setTags = function (t) {
              var n = this.getScope();
              n && n.setTags(t);
            }),
            (t.prototype.setExtras = function (t) {
              var n = this.getScope();
              n && n.setExtras(t);
            }),
            (t.prototype.setTag = function (t, n) {
              var e = this.getScope();
              e && e.setTag(t, n);
            }),
            (t.prototype.setExtra = function (t, n) {
              var e = this.getScope();
              e && e.setExtra(t, n);
            }),
            (t.prototype.setContext = function (t, n) {
              var e = this.getScope();
              e && e.setContext(t, n);
            }),
            (t.prototype.configureScope = function (t) {
              var n = this.getStackTop(),
                e = n.scope,
                r = n.client;
              e && r && t(e);
            }),
            (t.prototype.run = function (t) {
              var n = mt(this);
              try {
                t(this);
              } finally {
                mt(n);
              }
            }),
            (t.prototype.getIntegration = function (t) {
              var n = this.getClient();
              if (!n) return null;
              try {
                return n.getIntegration(t);
              } catch (n) {
                return (
                  ct &&
                    tt.warn(
                      "Cannot retrieve integration " +
                        t.id +
                        " from the current Hub"
                    ),
                  null
                );
              }
            }),
            (t.prototype.startSpan = function (t) {
              return this._callExtensionMethod("startSpan", t);
            }),
            (t.prototype.startTransaction = function (t, n) {
              return this._callExtensionMethod("startTransaction", t, n);
            }),
            (t.prototype.traceHeaders = function () {
              return this._callExtensionMethod("traceHeaders");
            }),
            (t.prototype.captureSession = function (t) {
              if ((void 0 === t && (t = !1), t)) return this.endSession();
              this._sendSessionUpdate();
            }),
            (t.prototype.endSession = function () {
              var t = this.getStackTop(),
                n = t && t.scope,
                e = n && n.getSession();
              e && e.close(), this._sendSessionUpdate(), n && n.setSession();
            }),
            (t.prototype.startSession = function (t) {
              var n = this.getStackTop(),
                e = n.scope,
                r = n.client,
                o = (r && r.getOptions()) || {},
                i = o.release,
                a = o.environment,
                u = ((0, w.R)().navigator || {}).userAgent,
                s = new _t(
                  h(
                    h(
                      h(
                        { release: i, environment: a },
                        e && { user: e.getUser() }
                      ),
                      u && { userAgent: u }
                    ),
                    t
                  )
                );
              if (e) {
                var c = e.getSession && e.getSession();
                c && "ok" === c.status && c.update({ status: "exited" }),
                  this.endSession(),
                  e.setSession(s);
              }
              return s;
            }),
            (t.prototype._sendSessionUpdate = function () {
              var t = this.getStackTop(),
                n = t.scope,
                e = t.client;
              if (n) {
                var r = n.getSession && n.getSession();
                r && e && e.captureSession && e.captureSession(r);
              }
            }),
            (t.prototype._invokeClient = function (t) {
              for (var n, e = [], r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
              var o = this.getStackTop(),
                i = o.scope,
                a = o.client;
              a && a[t] && (n = a)[t].apply(n, v(e, [i]));
            }),
            (t.prototype._callExtensionMethod = function (t) {
              for (var n = [], e = 1; e < arguments.length; e++)
                n[e - 1] = arguments[e];
              var r = gt(),
                o = r.__SENTRY__;
              if (o && o.extensions && "function" == typeof o.extensions[t])
                return o.extensions[t].apply(this, n);
              ct &&
                tt.warn(
                  "Extension method " + t + " couldn't be found, doing nothing."
                );
            }),
            t
          );
        })();
      function gt() {
        var t = (0, w.R)();
        return (
          (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }), t
        );
      }
      function mt(t) {
        var n = gt(),
          e = xt(n);
        return St(n, t), e;
      }
      function bt() {
        var t = gt();
        return (
          (wt(t) && !xt(t).isOlderThan(4)) || St(t, new yt()),
          (0, st.KV)()
            ? (function (t) {
                try {
                  var n = gt().__SENTRY__,
                    e =
                      n &&
                      n.extensions &&
                      n.extensions.domain &&
                      n.extensions.domain.active;
                  if (!e) return xt(t);
                  if (!wt(e) || xt(e).isOlderThan(4)) {
                    var r = xt(t).getStackTop();
                    St(e, new yt(r.client, ht.clone(r.scope)));
                  }
                  return xt(e);
                } catch (n) {
                  return xt(t);
                }
              })(t)
            : xt(t)
        );
      }
      function wt(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
      }
      function xt(t) {
        return (0, w.Y)(
          "hub",
          function () {
            return new yt();
          },
          t
        );
      }
      function St(t, n) {
        return !!t && (((t.__SENTRY__ = t.__SENTRY__ || {}).hub = n), !0);
      }
      function Et(t) {
        for (var n = [], e = 1; e < arguments.length; e++)
          n[e - 1] = arguments[e];
        var r = bt();
        if (r && r[t]) return r[t].apply(r, p(n));
        throw new Error(
          "No hub defined or " +
            t +
            " was not found on the hub, please open a bug report."
        );
      }
      function kt(t, n) {
        return Et("captureException", t, {
          captureContext: n,
          originalException: t,
          syntheticException: new Error("Sentry syntheticException"),
        });
      }
      function jt(t) {
        Et("withScope", t);
      }
      var Ot = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        Tt = function () {
          return (
            (Tt =
              Object.assign ||
              function (t) {
                for (var n, e = 1, r = arguments.length; e < r; e++)
                  for (var o in (n = arguments[e]))
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                return t;
              }),
            Tt.apply(this, arguments)
          );
        };
      function Rt(t, n) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var r,
          o,
          i = e.call(t),
          a = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            r && !r.done && (e = i.return) && e.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function At() {
        for (var t = [], n = 0; n < arguments.length; n++)
          t = t.concat(Rt(arguments[n]));
        return t;
      }
      var Ct,
        It = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/,
        ],
        Lt = (function () {
          function t(n) {
            void 0 === n && (n = {}), (this._options = n), (this.name = t.id);
          }
          return (
            (t.prototype.setupOnce = function (n, e) {
              n(function (n) {
                var r = e();
                if (r) {
                  var o = r.getIntegration(t);
                  if (o) {
                    var i = r.getClient(),
                      a = i ? i.getOptions() : {},
                      u = (function (t, n) {
                        return (
                          void 0 === t && (t = {}),
                          void 0 === n && (n = {}),
                          {
                            allowUrls: At(
                              t.whitelistUrls || [],
                              t.allowUrls || [],
                              n.whitelistUrls || [],
                              n.allowUrls || []
                            ),
                            denyUrls: At(
                              t.blacklistUrls || [],
                              t.denyUrls || [],
                              n.blacklistUrls || [],
                              n.denyUrls || []
                            ),
                            ignoreErrors: At(
                              t.ignoreErrors || [],
                              n.ignoreErrors || [],
                              It
                            ),
                            ignoreInternal:
                              void 0 === t.ignoreInternal || t.ignoreInternal,
                          }
                        );
                      })(o._options, a);
                    return (function (t, n) {
                      return n.ignoreInternal &&
                        (function (t) {
                          try {
                            return "SentryError" === t.exception.values[0].type;
                          } catch (t) {}
                          return !1;
                        })(t)
                        ? (Ot &&
                            tt.warn(
                              "Event dropped due to being internal Sentry Error.\nEvent: " +
                                J(t)
                            ),
                          !0)
                        : (function (t, n) {
                            return (
                              !(!n || !n.length) &&
                              (function (t) {
                                if (t.message) return [t.message];
                                if (t.exception)
                                  try {
                                    var n =
                                        (t.exception.values &&
                                          t.exception.values[0]) ||
                                        {},
                                      e = n.type,
                                      r = void 0 === e ? "" : e,
                                      o = n.value,
                                      i = void 0 === o ? "" : o;
                                    return ["" + i, r + ": " + i];
                                  } catch (n) {
                                    return (
                                      Ot &&
                                        tt.error(
                                          "Cannot extract message for event " +
                                            J(t)
                                        ),
                                      []
                                    );
                                  }
                                return [];
                              })(t).some(function (t) {
                                return n.some(function (n) {
                                  return D(t, n);
                                });
                              })
                            );
                          })(t, n.ignoreErrors)
                        ? (Ot &&
                            tt.warn(
                              "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " +
                                J(t)
                            ),
                          !0)
                        : (function (t, n) {
                            if (!n || !n.length) return !1;
                            var e = Pt(t);
                            return (
                              !!e &&
                              n.some(function (t) {
                                return D(e, t);
                              })
                            );
                          })(t, n.denyUrls)
                        ? (Ot &&
                            tt.warn(
                              "Event dropped due to being matched by `denyUrls` option.\nEvent: " +
                                J(t) +
                                ".\nUrl: " +
                                Pt(t)
                            ),
                          !0)
                        : !(function (t, n) {
                            if (!n || !n.length) return !0;
                            var e = Pt(t);
                            return (
                              !e ||
                              n.some(function (t) {
                                return D(e, t);
                              })
                            );
                          })(t, n.allowUrls) &&
                          (Ot &&
                            tt.warn(
                              "Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
                                J(t) +
                                ".\nUrl: " +
                                Pt(t)
                            ),
                          !0);
                    })(n, u)
                      ? null
                      : n;
                  }
                }
                return n;
              });
            }),
            (t.id = "InboundFilters"),
            t
          );
        })();
      function Nt(t) {
        void 0 === t && (t = []);
        for (var n = t.length - 1; n >= 0; n--) {
          var e = t[n];
          if (
            e &&
            "<anonymous>" !== e.filename &&
            "[native code]" !== e.filename
          )
            return e.filename || null;
        }
        return null;
      }
      function Pt(t) {
        try {
          if (t.stacktrace) return Nt(t.stacktrace.frames);
          var n;
          try {
            n = t.exception.values[0].stacktrace.frames;
          } catch (t) {}
          return n ? Nt(n) : null;
        } catch (n) {
          return Ot && tt.error("Cannot extract url for event " + J(t)), null;
        }
      }
      var Mt = (function () {
        function t() {
          this.name = t.id;
        }
        return (
          (t.prototype.setupOnce = function () {
            (Ct = Function.prototype.toString),
              (Function.prototype.toString = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                var e = B(this) || this;
                return Ct.apply(e, t);
              });
          }),
          (t.id = "FunctionToString"),
          t
        );
      })();
      function Dt(t) {
        if (!t.length) return [];
        var n = t,
          e = n[0].function || "",
          r = n[n.length - 1].function || "";
        return (
          (-1 === e.indexOf("captureMessage") &&
            -1 === e.indexOf("captureException")) ||
            (n = n.slice(1)),
          -1 !== r.indexOf("sentryWrapped") && (n = n.slice(0, -1)),
          n
            .slice(0, 50)
            .map(function (t) {
              return y(y({}, t), {
                filename: t.filename || n[0].filename,
                function: t.function || "?",
              });
            })
            .reverse()
        );
      }
      var Ut = "<anonymous>";
      function zt(t) {
        try {
          return (t && "function" == typeof t && t.name) || Ut;
        } catch (t) {
          return Ut;
        }
      }
      function qt() {
        if (!("fetch" in (0, w.R)())) return !1;
        try {
          return new Headers(), new Request(""), new Response(), !0;
        } catch (t) {
          return !1;
        }
      }
      function Bt(t) {
        return (
          t &&
          /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        );
      }
      function Wt() {
        if (!qt()) return !1;
        try {
          return new Request("_", { referrerPolicy: "origin" }), !0;
        } catch (t) {
          return !1;
        }
      }
      var Ft,
        $t,
        Ht,
        Gt = (0, w.R)(),
        Yt = {},
        Kt = {};
      function Vt(t, n) {
        (Yt[t] = Yt[t] || []),
          Yt[t].push(n),
          (function (t) {
            if (!Kt[t])
              switch (((Kt[t] = !0), t)) {
                case "console":
                  "console" in Gt &&
                    it.forEach(function (t) {
                      t in Gt.console &&
                        U(Gt.console, t, function (n) {
                          return function () {
                            for (var e = [], r = 0; r < arguments.length; r++)
                              e[r] = arguments[r];
                            Jt("console", { args: e, level: t }),
                              n && n.apply(Gt.console, e);
                          };
                        });
                    });
                  break;
                case "dom":
                  !(function () {
                    if ("document" in Gt) {
                      var t = Jt.bind(null, "dom"),
                        n = Qt(t, !0);
                      Gt.document.addEventListener("click", n, !1),
                        Gt.document.addEventListener("keypress", n, !1),
                        ["EventTarget", "Node"].forEach(function (n) {
                          var e = Gt[n] && Gt[n].prototype;
                          e &&
                            e.hasOwnProperty &&
                            e.hasOwnProperty("addEventListener") &&
                            (U(e, "addEventListener", function (n) {
                              return function (e, r, o) {
                                if ("click" === e || "keypress" == e)
                                  try {
                                    var i =
                                        (this.__sentry_instrumentation_handlers__ =
                                          this
                                            .__sentry_instrumentation_handlers__ ||
                                          {}),
                                      a = (i[e] = i[e] || { refCount: 0 });
                                    if (!a.handler) {
                                      var u = Qt(t);
                                      (a.handler = u), n.call(this, e, u, o);
                                    }
                                    a.refCount += 1;
                                  } catch (t) {}
                                return n.call(this, e, r, o);
                              };
                            }),
                            U(e, "removeEventListener", function (t) {
                              return function (n, e, r) {
                                if ("click" === n || "keypress" == n)
                                  try {
                                    var o =
                                        this
                                          .__sentry_instrumentation_handlers__ ||
                                        {},
                                      i = o[n];
                                    i &&
                                      ((i.refCount -= 1),
                                      i.refCount <= 0 &&
                                        (t.call(this, n, i.handler, r),
                                        (i.handler = void 0),
                                        delete o[n]),
                                      0 === Object.keys(o).length &&
                                        delete this
                                          .__sentry_instrumentation_handlers__);
                                  } catch (t) {}
                                return t.call(this, n, e, r);
                              };
                            }));
                        });
                    }
                  })();
                  break;
                case "xhr":
                  !(function () {
                    if ("XMLHttpRequest" in Gt) {
                      var t = XMLHttpRequest.prototype;
                      U(t, "open", function (t) {
                        return function () {
                          for (var n = [], e = 0; e < arguments.length; e++)
                            n[e] = arguments[e];
                          var r = this,
                            o = n[1],
                            i = (r.__sentry_xhr__ = {
                              method: O(n[0]) ? n[0].toUpperCase() : n[0],
                              url: n[1],
                            });
                          O(o) &&
                            "POST" === i.method &&
                            o.match(/sentry_key/) &&
                            (r.__sentry_own_request__ = !0);
                          var a = function () {
                            if (4 === r.readyState) {
                              try {
                                i.status_code = r.status;
                              } catch (t) {}
                              Jt("xhr", {
                                args: n,
                                endTimestamp: Date.now(),
                                startTimestamp: Date.now(),
                                xhr: r,
                              });
                            }
                          };
                          return (
                            "onreadystatechange" in r &&
                            "function" == typeof r.onreadystatechange
                              ? U(r, "onreadystatechange", function (t) {
                                  return function () {
                                    for (
                                      var n = [], e = 0;
                                      e < arguments.length;
                                      e++
                                    )
                                      n[e] = arguments[e];
                                    return a(), t.apply(r, n);
                                  };
                                })
                              : r.addEventListener("readystatechange", a),
                            t.apply(r, n)
                          );
                        };
                      }),
                        U(t, "send", function (t) {
                          return function () {
                            for (var n = [], e = 0; e < arguments.length; e++)
                              n[e] = arguments[e];
                            return (
                              this.__sentry_xhr__ &&
                                void 0 !== n[0] &&
                                (this.__sentry_xhr__.body = n[0]),
                              Jt("xhr", {
                                args: n,
                                startTimestamp: Date.now(),
                                xhr: this,
                              }),
                              t.apply(this, n)
                            );
                          };
                        });
                    }
                  })();
                  break;
                case "fetch":
                  (function () {
                    if (!qt()) return !1;
                    var t = (0, w.R)();
                    if (Bt(t.fetch)) return !0;
                    var n = !1,
                      e = t.document;
                    if (e && "function" == typeof e.createElement)
                      try {
                        var r = e.createElement("iframe");
                        (r.hidden = !0),
                          e.head.appendChild(r),
                          r.contentWindow &&
                            r.contentWindow.fetch &&
                            (n = Bt(r.contentWindow.fetch)),
                          e.head.removeChild(r);
                      } catch (t) {
                        et &&
                          tt.warn(
                            "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                            t
                          );
                      }
                    return n;
                  })() &&
                    U(Gt, "fetch", function (t) {
                      return function () {
                        for (var n = [], e = 0; e < arguments.length; e++)
                          n[e] = arguments[e];
                        var r = {
                          args: n,
                          fetchData: { method: Xt(n), url: Zt(n) },
                          startTimestamp: Date.now(),
                        };
                        return (
                          Jt("fetch", y({}, r)),
                          t.apply(Gt, n).then(
                            function (t) {
                              return (
                                Jt(
                                  "fetch",
                                  y(y({}, r), {
                                    endTimestamp: Date.now(),
                                    response: t,
                                  })
                                ),
                                t
                              );
                            },
                            function (t) {
                              throw (
                                (Jt(
                                  "fetch",
                                  y(y({}, r), {
                                    endTimestamp: Date.now(),
                                    error: t,
                                  })
                                ),
                                t)
                              );
                            }
                          )
                        );
                      };
                    });
                  break;
                case "history":
                  !(function () {
                    if (
                      (function () {
                        var t = (0, w.R)(),
                          n = t.chrome,
                          e = n && n.app && n.app.runtime,
                          r =
                            "history" in t &&
                            !!t.history.pushState &&
                            !!t.history.replaceState;
                        return !e && r;
                      })()
                    ) {
                      var t = Gt.onpopstate;
                      (Gt.onpopstate = function () {
                        for (var n = [], e = 0; e < arguments.length; e++)
                          n[e] = arguments[e];
                        var r = Gt.location.href,
                          o = Ft;
                        if (((Ft = r), Jt("history", { from: o, to: r }), t))
                          try {
                            return t.apply(this, n);
                          } catch (t) {}
                      }),
                        U(Gt.history, "pushState", n),
                        U(Gt.history, "replaceState", n);
                    }
                    function n(t) {
                      return function () {
                        for (var n = [], e = 0; e < arguments.length; e++)
                          n[e] = arguments[e];
                        var r = n.length > 2 ? n[2] : void 0;
                        if (r) {
                          var o = Ft,
                            i = String(r);
                          (Ft = i), Jt("history", { from: o, to: i });
                        }
                        return t.apply(this, n);
                      };
                    }
                  })();
                  break;
                case "error":
                  (tn = Gt.onerror),
                    (Gt.onerror = function (t, n, e, r, o) {
                      return (
                        Jt("error", {
                          column: r,
                          error: o,
                          line: e,
                          msg: t,
                          url: n,
                        }),
                        !!tn && tn.apply(this, arguments)
                      );
                    });
                  break;
                case "unhandledrejection":
                  (nn = Gt.onunhandledrejection),
                    (Gt.onunhandledrejection = function (t) {
                      return (
                        Jt("unhandledrejection", t),
                        !nn || nn.apply(this, arguments)
                      );
                    });
                  break;
                default:
                  et && tt.warn("unknown instrumentation type:", t);
              }
          })(t);
      }
      function Jt(t, n) {
        var e, r;
        if (t && Yt[t])
          try {
            for (var o = g(Yt[t] || []), i = o.next(); !i.done; i = o.next()) {
              var a = i.value;
              try {
                a(n);
              } catch (n) {
                et &&
                  tt.error(
                    "Error while triggering instrumentation handler.\nType: " +
                      t +
                      "\nName: " +
                      zt(a) +
                      "\nError:",
                    n
                  );
              }
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              i && !i.done && (r = o.return) && r.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
      }
      function Xt(t) {
        return (
          void 0 === t && (t = []),
          "Request" in Gt && I(t[0], Request) && t[0].method
            ? String(t[0].method).toUpperCase()
            : t[1] && t[1].method
            ? String(t[1].method).toUpperCase()
            : "GET"
        );
      }
      function Zt(t) {
        return (
          void 0 === t && (t = []),
          "string" == typeof t[0]
            ? t[0]
            : "Request" in Gt && I(t[0], Request)
            ? t[0].url
            : String(t[0])
        );
      }
      function Qt(t, n) {
        return (
          void 0 === n && (n = !1),
          function (e) {
            if (
              e &&
              Ht !== e &&
              !(function (t) {
                if ("keypress" !== t.type) return !1;
                try {
                  var n = t.target;
                  if (!n || !n.tagName) return !0;
                  if (
                    "INPUT" === n.tagName ||
                    "TEXTAREA" === n.tagName ||
                    n.isContentEditable
                  )
                    return !1;
                } catch (t) {}
                return !0;
              })(e)
            ) {
              var r = "keypress" === e.type ? "input" : e.type;
              (void 0 === $t ||
                (function (t, n) {
                  if (!t) return !0;
                  if (t.type !== n.type) return !0;
                  try {
                    if (t.target !== n.target) return !0;
                  } catch (t) {}
                  return !1;
                })(Ht, e)) &&
                (t({ event: e, name: r, global: n }), (Ht = e)),
                clearTimeout($t),
                ($t = Gt.setTimeout(function () {
                  $t = void 0;
                }, 1e3));
            }
          }
        );
      }
      var tn = null,
        nn = null,
        en = function (t, n) {
          return (
            (en =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, n) {
                  t.__proto__ = n;
                }) ||
              function (t, n) {
                for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
              }),
            en(t, n)
          );
        };
      function rn(t, n) {
        function e() {
          this.constructor = t;
        }
        en(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((e.prototype = n.prototype), new e()));
      }
      var on = function () {
        return (
          (on =
            Object.assign ||
            function (t) {
              for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in (n = arguments[e]))
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              return t;
            }),
          on.apply(this, arguments)
        );
      };
      function an(t, n) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var r,
          o,
          i = e.call(t),
          a = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            r && !r.done && (e = i.return) && e.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function un() {
        for (var t = [], n = 0; n < arguments.length; n++)
          t = t.concat(an(arguments[n]));
        return t;
      }
      var sn = "6.19.7",
        cn =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array
            ? function (t, n) {
                return (t.__proto__ = n), t;
              }
            : function (t, n) {
                for (var e in n)
                  Object.prototype.hasOwnProperty.call(t, e) || (t[e] = n[e]);
                return t;
              }),
        fn = (function (t) {
          function n(n) {
            var e = this.constructor,
              r = t.call(this, n) || this;
            return (
              (r.message = n),
              (r.name = e.prototype.constructor.name),
              cn(r, e.prototype),
              r
            );
          }
          return (
            (function (t, n) {
              function e() {
                this.constructor = t;
              }
              _(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((e.prototype = n.prototype), new e()));
            })(n, t),
            n
          );
        })(Error),
        ln = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function pn(t, n) {
        void 0 === n && (n = !1);
        var e = t.host,
          r = t.path,
          o = t.pass,
          i = t.port,
          a = t.projectId;
        return (
          t.protocol +
          "://" +
          t.publicKey +
          (n && o ? ":" + o : "") +
          "@" +
          e +
          (i ? ":" + i : "") +
          "/" +
          (r ? r + "/" : r) +
          a
        );
      }
      function hn(t) {
        return (
          "user" in t && !("publicKey" in t) && (t.publicKey = t.user),
          {
            user: t.publicKey || "",
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId,
          }
        );
      }
      function dn(t) {
        var n =
          "string" == typeof t
            ? (function (t) {
                var n = ln.exec(t);
                if (!n) throw new fn("Invalid Sentry Dsn: " + t);
                var e = m(n.slice(1), 6),
                  r = e[0],
                  o = e[1],
                  i = e[2],
                  a = void 0 === i ? "" : i,
                  u = e[3],
                  s = e[4],
                  c = void 0 === s ? "" : s,
                  f = "",
                  l = e[5],
                  p = l.split("/");
                if (
                  (p.length > 1 &&
                    ((f = p.slice(0, -1).join("/")), (l = p.pop())),
                  l)
                ) {
                  var h = l.match(/^\d+/);
                  h && (l = h[0]);
                }
                return hn({
                  host: u,
                  pass: a,
                  path: f,
                  projectId: l,
                  port: c,
                  protocol: r,
                  publicKey: o,
                });
              })(t)
            : hn(t);
        return (
          (function (t) {
            if (et) {
              var n = t.port,
                e = t.projectId,
                r = t.protocol;
              if (
                (["protocol", "publicKey", "host", "projectId"].forEach(
                  function (n) {
                    if (!t[n])
                      throw new fn("Invalid Sentry Dsn: " + n + " missing");
                  }
                ),
                !e.match(/^\d+$/))
              )
                throw new fn("Invalid Sentry Dsn: Invalid projectId " + e);
              if (
                !(function (t) {
                  return "http" === t || "https" === t;
                })(r)
              )
                throw new fn("Invalid Sentry Dsn: Invalid protocol " + r);
              if (n && isNaN(parseInt(n, 10)))
                throw new fn("Invalid Sentry Dsn: Invalid port " + n);
            }
          })(n),
          n
        );
      }
      function vn(t, n, e) {
        void 0 === n && (n = 1 / 0), void 0 === e && (e = 1 / 0);
        try {
          return yn("", t, n, e);
        } catch (t) {
          return { ERROR: "**non-serializable** (" + t + ")" };
        }
      }
      function _n(t, n, e) {
        void 0 === n && (n = 3), void 0 === e && (e = 102400);
        var r,
          o = vn(t, n);
        return (
          (r = o),
          (function (t) {
            return ~-encodeURI(t).split(/%..|./).length;
          })(JSON.stringify(r)) > e
            ? _n(t, n - 1, e)
            : o
        );
      }
      function yn(t, n, r, o, i) {
        var a, u;
        void 0 === r && (r = 1 / 0),
          void 0 === o && (o = 1 / 0),
          void 0 === i &&
            ((a = "function" == typeof WeakSet),
            (u = a ? new WeakSet() : []),
            (i = [
              function (t) {
                if (a) return !!u.has(t) || (u.add(t), !1);
                for (var n = 0; n < u.length; n++) if (u[n] === t) return !0;
                return u.push(t), !1;
              },
              function (t) {
                if (a) u.delete(t);
                else
                  for (var n = 0; n < u.length; n++)
                    if (u[n] === t) {
                      u.splice(n, 1);
                      break;
                    }
              },
            ]));
        var s,
          c = m(i, 2),
          f = c[0],
          l = c[1],
          p = n;
        if (p && "function" == typeof p.toJSON)
          try {
            return p.toJSON();
          } catch (t) {}
        if (
          null === n ||
          (["number", "boolean", "string"].includes(typeof n) &&
            ("number" != typeof (s = n) || s == s))
        )
          return n;
        var h = (function (t, n) {
          try {
            return "domain" === t && n && "object" == typeof n && n._events
              ? "[Domain]"
              : "domainEmitter" === t
              ? "[DomainEmitter]"
              : void 0 !== e.g && n === e.g
              ? "[Global]"
              : "undefined" != typeof window && n === window
              ? "[Window]"
              : "undefined" != typeof document && n === document
              ? "[Document]"
              : (function (t) {
                  return (
                    R(t) &&
                    "nativeEvent" in t &&
                    "preventDefault" in t &&
                    "stopPropagation" in t
                  );
                })(n)
              ? "[SyntheticEvent]"
              : "number" == typeof n && n != n
              ? "[NaN]"
              : void 0 === n
              ? "[undefined]"
              : "function" == typeof n
              ? "[Function: " + zt(n) + "]"
              : "symbol" == typeof n
              ? "[" + String(n) + "]"
              : "bigint" == typeof n
              ? "[BigInt: " + String(n) + "]"
              : "[object " + Object.getPrototypeOf(n).constructor.name + "]";
          } catch (t) {
            return "**non-serializable** (" + t + ")";
          }
        })(t, n);
        if (!h.startsWith("[object ")) return h;
        if (0 === r) return h.replace("object ", "");
        if (f(n)) return "[Circular ~]";
        var d = Array.isArray(n) ? [] : {},
          v = 0,
          _ = S(n) || A(n) ? W(n) : n;
        for (var y in _)
          if (Object.prototype.hasOwnProperty.call(_, y)) {
            if (v >= o) {
              d[y] = "[MaxProperties ~]";
              break;
            }
            var g = _[y];
            (d[y] = yn(y, g, r - 1, o, i)), (v += 1);
          }
        return l(n), d;
      }
      var gn = [];
      function mn(t) {
        return t.reduce(function (t, n) {
          return (
            t.every(function (t) {
              return n.name !== t.name;
            }) && t.push(n),
            t
          );
        }, []);
      }
      var bn = "Not capturing exception because it's already been captured.",
        wn = (function () {
          function t(t, n) {
            (this._integrations = {}),
              (this._numProcessing = 0),
              (this._backend = new t(n)),
              (this._options = n),
              n.dsn && (this._dsn = dn(n.dsn));
          }
          return (
            (t.prototype.captureException = function (t, n, e) {
              var r = this;
              if (!Q(t)) {
                var o = n && n.event_id;
                return (
                  this._process(
                    this._getBackend()
                      .eventFromException(t, n)
                      .then(function (t) {
                        return r._captureEvent(t, n, e);
                      })
                      .then(function (t) {
                        o = t;
                      })
                  ),
                  o
                );
              }
              Ot && tt.log(bn);
            }),
            (t.prototype.captureMessage = function (t, n, e, r) {
              var o = this,
                i = e && e.event_id,
                a = T(t)
                  ? this._getBackend().eventFromMessage(String(t), n, e)
                  : this._getBackend().eventFromException(t, e);
              return (
                this._process(
                  a
                    .then(function (t) {
                      return o._captureEvent(t, e, r);
                    })
                    .then(function (t) {
                      i = t;
                    })
                ),
                i
              );
            }),
            (t.prototype.captureEvent = function (t, n, e) {
              if (!(n && n.originalException && Q(n.originalException))) {
                var r = n && n.event_id;
                return (
                  this._process(
                    this._captureEvent(t, n, e).then(function (t) {
                      r = t;
                    })
                  ),
                  r
                );
              }
              Ot && tt.log(bn);
            }),
            (t.prototype.captureSession = function (t) {
              this._isEnabled()
                ? "string" != typeof t.release
                  ? Ot &&
                    tt.warn(
                      "Discarded session because of missing or non-string release"
                    )
                  : (this._sendSession(t), t.update({ init: !1 }))
                : Ot && tt.warn("SDK not enabled, will not capture session.");
            }),
            (t.prototype.getDsn = function () {
              return this._dsn;
            }),
            (t.prototype.getOptions = function () {
              return this._options;
            }),
            (t.prototype.getTransport = function () {
              return this._getBackend().getTransport();
            }),
            (t.prototype.flush = function (t) {
              var n = this;
              return this._isClientDoneProcessing(t).then(function (e) {
                return n
                  .getTransport()
                  .close(t)
                  .then(function (t) {
                    return e && t;
                  });
              });
            }),
            (t.prototype.close = function (t) {
              var n = this;
              return this.flush(t).then(function (t) {
                return (n.getOptions().enabled = !1), t;
              });
            }),
            (t.prototype.setupIntegrations = function () {
              var t, n;
              this._isEnabled() &&
                !this._integrations.initialized &&
                (this._integrations =
                  ((t = this._options),
                  (n = {}),
                  (function (t) {
                    var n =
                        (t.defaultIntegrations && At(t.defaultIntegrations)) ||
                        [],
                      e = t.integrations,
                      r = At(mn(n));
                    Array.isArray(e)
                      ? (r = At(
                          r.filter(function (t) {
                            return e.every(function (n) {
                              return n.name !== t.name;
                            });
                          }),
                          mn(e)
                        ))
                      : "function" == typeof e &&
                        ((r = e(r)), (r = Array.isArray(r) ? r : [r]));
                    var o = r.map(function (t) {
                        return t.name;
                      }),
                      i = "Debug";
                    return (
                      -1 !== o.indexOf(i) &&
                        r.push.apply(r, At(r.splice(o.indexOf(i), 1))),
                      r
                    );
                  })(t).forEach(function (t) {
                    (n[t.name] = t),
                      (function (t) {
                        -1 === gn.indexOf(t.name) &&
                          (t.setupOnce(vt, bt),
                          gn.push(t.name),
                          Ot && tt.log("Integration installed: " + t.name));
                      })(t);
                  }),
                  z(n, "initialized", !0),
                  n));
            }),
            (t.prototype.getIntegration = function (t) {
              try {
                return this._integrations[t.id] || null;
              } catch (n) {
                return (
                  Ot &&
                    tt.warn(
                      "Cannot retrieve integration " +
                        t.id +
                        " from the current Client"
                    ),
                  null
                );
              }
            }),
            (t.prototype._updateSessionFromEvent = function (t, n) {
              var e,
                r,
                o = !1,
                i = !1,
                a = n.exception && n.exception.values;
              if (a) {
                i = !0;
                try {
                  for (
                    var u = (function (t) {
                        var n = "function" == typeof Symbol && Symbol.iterator,
                          e = n && t[n],
                          r = 0;
                        if (e) return e.call(t);
                        if (t && "number" == typeof t.length)
                          return {
                            next: function () {
                              return (
                                t && r >= t.length && (t = void 0),
                                { value: t && t[r++], done: !t }
                              );
                            },
                          };
                        throw new TypeError(
                          n
                            ? "Object is not iterable."
                            : "Symbol.iterator is not defined."
                        );
                      })(a),
                      s = u.next();
                    !s.done;
                    s = u.next()
                  ) {
                    var c = s.value.mechanism;
                    if (c && !1 === c.handled) {
                      o = !0;
                      break;
                    }
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    s && !s.done && (r = u.return) && r.call(u);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              }
              var f = "ok" === t.status;
              ((f && 0 === t.errors) || (f && o)) &&
                (t.update(
                  Tt(Tt({}, o && { status: "crashed" }), {
                    errors: t.errors || Number(i || o),
                  })
                ),
                this.captureSession(t));
            }),
            (t.prototype._sendSession = function (t) {
              this._getBackend().sendSession(t);
            }),
            (t.prototype._isClientDoneProcessing = function (t) {
              var n = this;
              return new pt(function (e) {
                var r = 0,
                  o = setInterval(function () {
                    0 == n._numProcessing
                      ? (clearInterval(o), e(!0))
                      : ((r += 1), t && r >= t && (clearInterval(o), e(!1)));
                  }, 1);
              });
            }),
            (t.prototype._getBackend = function () {
              return this._backend;
            }),
            (t.prototype._isEnabled = function () {
              return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
            }),
            (t.prototype._prepareEvent = function (t, n, e) {
              var r = this,
                o = this.getOptions(),
                i = o.normalizeDepth,
                a = void 0 === i ? 3 : i,
                u = o.normalizeMaxBreadth,
                s = void 0 === u ? 1e3 : u,
                c = Tt(Tt({}, t), {
                  event_id: t.event_id || (e && e.event_id ? e.event_id : Y()),
                  timestamp: t.timestamp || (0, nt.yW)(),
                });
              this._applyClientOptions(c), this._applyIntegrationsMetadata(c);
              var f = n;
              e &&
                e.captureContext &&
                (f = ht.clone(f).update(e.captureContext));
              var l = ft(c);
              return (
                f && (l = f.applyToEvent(c, e)),
                l.then(function (t) {
                  return (
                    t &&
                      (t.sdkProcessingMetadata = Tt(
                        Tt({}, t.sdkProcessingMetadata),
                        { normalizeDepth: vn(a) + " (" + typeof a + ")" }
                      )),
                    "number" == typeof a && a > 0
                      ? r._normalizeEvent(t, a, s)
                      : t
                  );
                })
              );
            }),
            (t.prototype._normalizeEvent = function (t, n, e) {
              if (!t) return null;
              var r = Tt(
                Tt(
                  Tt(
                    Tt(
                      Tt({}, t),
                      t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map(function (t) {
                          return Tt(
                            Tt({}, t),
                            t.data && { data: vn(t.data, n, e) }
                          );
                        }),
                      }
                    ),
                    t.user && { user: vn(t.user, n, e) }
                  ),
                  t.contexts && { contexts: vn(t.contexts, n, e) }
                ),
                t.extra && { extra: vn(t.extra, n, e) }
              );
              return (
                t.contexts &&
                  t.contexts.trace &&
                  (r.contexts.trace = t.contexts.trace),
                (r.sdkProcessingMetadata = Tt(Tt({}, r.sdkProcessingMetadata), {
                  baseClientNormalized: !0,
                })),
                r
              );
            }),
            (t.prototype._applyClientOptions = function (t) {
              var n = this.getOptions(),
                e = n.environment,
                r = n.release,
                o = n.dist,
                i = n.maxValueLength,
                a = void 0 === i ? 250 : i;
              "environment" in t ||
                (t.environment = "environment" in n ? e : "production"),
                void 0 === t.release && void 0 !== r && (t.release = r),
                void 0 === t.dist && void 0 !== o && (t.dist = o),
                t.message && (t.message = P(t.message, a));
              var u =
                t.exception && t.exception.values && t.exception.values[0];
              u && u.value && (u.value = P(u.value, a));
              var s = t.request;
              s && s.url && (s.url = P(s.url, a));
            }),
            (t.prototype._applyIntegrationsMetadata = function (t) {
              var n = Object.keys(this._integrations);
              n.length > 0 &&
                ((t.sdk = t.sdk || {}),
                (t.sdk.integrations = At(t.sdk.integrations || [], n)));
            }),
            (t.prototype._sendEvent = function (t) {
              this._getBackend().sendEvent(t);
            }),
            (t.prototype._captureEvent = function (t, n, e) {
              return this._processEvent(t, n, e).then(
                function (t) {
                  return t.event_id;
                },
                function (t) {
                  Ot && tt.error(t);
                }
              );
            }),
            (t.prototype._processEvent = function (t, n, e) {
              var r = this,
                o = this.getOptions(),
                i = o.beforeSend,
                a = o.sampleRate,
                u = this.getTransport();
              function s(t, n) {
                u.recordLostEvent && u.recordLostEvent(t, n);
              }
              if (!this._isEnabled())
                return lt(new fn("SDK not enabled, will not capture event."));
              var c = "transaction" === t.type;
              return !c && "number" == typeof a && Math.random() > a
                ? (s("sample_rate", "event"),
                  lt(
                    new fn(
                      "Discarding event because it's not included in the random sample (sampling rate = " +
                        a +
                        ")"
                    )
                  ))
                : this._prepareEvent(t, e, n)
                    .then(function (e) {
                      if (null === e)
                        throw (
                          (s("event_processor", t.type || "event"),
                          new fn(
                            "An event processor returned null, will not send event."
                          ))
                        );
                      return (n && n.data && !0 === n.data.__sentry__) ||
                        c ||
                        !i
                        ? e
                        : (function (t) {
                            var n =
                              "`beforeSend` method has to return `null` or a valid event.";
                            if (C(t))
                              return t.then(
                                function (t) {
                                  if (!R(t) && null !== t) throw new fn(n);
                                  return t;
                                },
                                function (t) {
                                  throw new fn("beforeSend rejected with " + t);
                                }
                              );
                            if (!R(t) && null !== t) throw new fn(n);
                            return t;
                          })(i(e, n));
                    })
                    .then(function (n) {
                      if (null === n)
                        throw (
                          (s("before_send", t.type || "event"),
                          new fn(
                            "`beforeSend` returned `null`, will not send event."
                          ))
                        );
                      var o = e && e.getSession && e.getSession();
                      return (
                        !c && o && r._updateSessionFromEvent(o, n),
                        r._sendEvent(n),
                        n
                      );
                    })
                    .then(null, function (t) {
                      if (t instanceof fn) throw t;
                      throw (
                        (r.captureException(t, {
                          data: { __sentry__: !0 },
                          originalException: t,
                        }),
                        new fn(
                          "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                            t
                        ))
                      );
                    });
            }),
            (t.prototype._process = function (t) {
              var n = this;
              (this._numProcessing += 1),
                t.then(
                  function (t) {
                    return (n._numProcessing -= 1), t;
                  },
                  function (t) {
                    return (n._numProcessing -= 1), t;
                  }
                );
            }),
            t
          );
        })();
      function xn(t, n, e) {
        return { initDsn: t, metadata: n || {}, dsn: dn(t), tunnel: e };
      }
      function Sn(t) {
        var n = t.protocol ? t.protocol + ":" : "",
          e = t.port ? ":" + t.port : "";
        return n + "//" + t.host + e + (t.path ? "/" + t.path : "") + "/api/";
      }
      function En(t, n) {
        return "" + Sn(t) + t.projectId + "/" + n + "/";
      }
      function kn(t) {
        return (
          (n = { sentry_key: t.publicKey, sentry_version: "7" }),
          Object.keys(n)
            .map(function (t) {
              return encodeURIComponent(t) + "=" + encodeURIComponent(n[t]);
            })
            .join("&")
        );
        var n;
      }
      function jn(t) {
        return En(t, "store");
      }
      function On(t) {
        return jn(t) + "?" + kn(t);
      }
      function Tn(t, n) {
        return (
          n ||
          (function (t) {
            return En(t, "envelope");
          })(t) +
            "?" +
            kn(t)
        );
      }
      function Rn(t, n) {
        return void 0 === n && (n = []), [t, n];
      }
      function An(t) {
        var n = m(t, 2),
          e = n[0],
          r = n[1],
          o = JSON.stringify(e);
        return r.reduce(function (t, n) {
          var e = m(n, 2),
            r = e[0],
            o = e[1],
            i = T(o) ? String(o) : JSON.stringify(o);
          return t + "\n" + JSON.stringify(r) + "\n" + i;
        }, o);
      }
      function Cn(t) {
        if (t.metadata && t.metadata.sdk) {
          var n = t.metadata.sdk;
          return { name: n.name, version: n.version };
        }
      }
      function In(t, n) {
        return n
          ? ((t.sdk = t.sdk || {}),
            (t.sdk.name = t.sdk.name || n.name),
            (t.sdk.version = t.sdk.version || n.version),
            (t.sdk.integrations = At(
              t.sdk.integrations || [],
              n.integrations || []
            )),
            (t.sdk.packages = At(t.sdk.packages || [], n.packages || [])),
            t)
          : t;
      }
      function Ln(t, n) {
        var e = Cn(n),
          r = "aggregates" in t ? "sessions" : "session";
        return [
          Rn(
            Tt(
              Tt({ sent_at: new Date().toISOString() }, e && { sdk: e }),
              !!n.tunnel && { dsn: pn(n.dsn) }
            ),
            [[{ type: r }, t]]
          ),
          r,
        ];
      }
      !(function () {
        function t(t, n, e) {
          void 0 === n && (n = {}),
            (this.dsn = t),
            (this._dsnObject = dn(t)),
            (this.metadata = n),
            (this._tunnel = e);
        }
        (t.prototype.getDsn = function () {
          return this._dsnObject;
        }),
          (t.prototype.forceEnvelope = function () {
            return !!this._tunnel;
          }),
          (t.prototype.getBaseApiEndpoint = function () {
            return Sn(this._dsnObject);
          }),
          (t.prototype.getStoreEndpoint = function () {
            return jn(this._dsnObject);
          }),
          (t.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
            return On(this._dsnObject);
          }),
          (t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
            return Tn(this._dsnObject, this._tunnel);
          });
      })();
      var Nn,
        Pn = (function () {
          function t() {}
          return (
            (t.prototype.sendEvent = function (t) {
              return ft({
                reason:
                  "NoopTransport: Event has been skipped because no Dsn is configured.",
                status: "skipped",
              });
            }),
            (t.prototype.close = function (t) {
              return ft(!0);
            }),
            t
          );
        })(),
        Mn = (function () {
          function t(t) {
            (this._options = t),
              this._options.dsn ||
                (Ot &&
                  tt.warn("No DSN provided, backend will not do anything.")),
              (this._transport = this._setupTransport());
          }
          return (
            (t.prototype.eventFromException = function (t, n) {
              throw new fn(
                "Backend has to implement `eventFromException` method"
              );
            }),
            (t.prototype.eventFromMessage = function (t, n, e) {
              throw new fn(
                "Backend has to implement `eventFromMessage` method"
              );
            }),
            (t.prototype.sendEvent = function (t) {
              if (
                this._newTransport &&
                this._options.dsn &&
                this._options._experiments &&
                this._options._experiments.newTransport
              ) {
                var n = (function (t, n) {
                  var e = Cn(n),
                    r = t.type || "event",
                    o =
                      (t.sdkProcessingMetadata || {}).transactionSampling || {},
                    i = o.method,
                    a = o.rate;
                  return (
                    In(t, n.metadata.sdk),
                    (t.tags = t.tags || {}),
                    (t.extra = t.extra || {}),
                    (t.sdkProcessingMetadata &&
                      t.sdkProcessingMetadata.baseClientNormalized) ||
                      ((t.tags.skippedNormalization = !0),
                      (t.extra.normalizeDepth = t.sdkProcessingMetadata
                        ? t.sdkProcessingMetadata.normalizeDepth
                        : "unset")),
                    delete t.sdkProcessingMetadata,
                    Rn(
                      Tt(
                        Tt(
                          {
                            event_id: t.event_id,
                            sent_at: new Date().toISOString(),
                          },
                          e && { sdk: e }
                        ),
                        !!n.tunnel && { dsn: pn(n.dsn) }
                      ),
                      [[{ type: r, sample_rates: [{ id: i, rate: a }] }, t]]
                    )
                  );
                })(
                  t,
                  xn(
                    this._options.dsn,
                    this._options._metadata,
                    this._options.tunnel
                  )
                );
                this._newTransport.send(n).then(null, function (t) {
                  Ot && tt.error("Error while sending event:", t);
                });
              } else
                this._transport.sendEvent(t).then(null, function (t) {
                  Ot && tt.error("Error while sending event:", t);
                });
            }),
            (t.prototype.sendSession = function (t) {
              if (this._transport.sendSession)
                if (
                  this._newTransport &&
                  this._options.dsn &&
                  this._options._experiments &&
                  this._options._experiments.newTransport
                ) {
                  var n = Rt(
                    Ln(
                      t,
                      xn(
                        this._options.dsn,
                        this._options._metadata,
                        this._options.tunnel
                      )
                    ),
                    1
                  )[0];
                  this._newTransport.send(n).then(null, function (t) {
                    Ot && tt.error("Error while sending session:", t);
                  });
                } else
                  this._transport.sendSession(t).then(null, function (t) {
                    Ot && tt.error("Error while sending session:", t);
                  });
              else
                Ot &&
                  tt.warn(
                    "Dropping session because custom transport doesn't implement sendSession"
                  );
            }),
            (t.prototype.getTransport = function () {
              return this._transport;
            }),
            (t.prototype._setupTransport = function () {
              return new Pn();
            }),
            t
          );
        })();
      !(function (t) {
        (t.Fatal = "fatal"),
          (t.Error = "error"),
          (t.Warning = "warning"),
          (t.Log = "log"),
          (t.Info = "info"),
          (t.Debug = "debug"),
          (t.Critical = "critical");
      })(Nn || (Nn = {}));
      var Dn = "?";
      function Un(t, n, e, r) {
        var o = { filename: t, function: n, in_app: !0 };
        return void 0 !== e && (o.lineno = e), void 0 !== r && (o.colno = r), o;
      }
      var zn =
          /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        qn = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        Bn = [
          30,
          function (t) {
            var n = zn.exec(t);
            if (n) {
              if (n[2] && 0 === n[2].indexOf("eval")) {
                var e = qn.exec(n[2]);
                e && ((n[2] = e[1]), (n[3] = e[2]), (n[4] = e[3]));
              }
              var r = an(Xn(n[1] || Dn, n[2]), 2),
                o = r[0];
              return Un(r[1], o, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
            }
          },
        ],
        Wn =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        Fn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        $n = [
          50,
          function (t) {
            var n,
              e = Wn.exec(t);
            if (e) {
              if (e[3] && e[3].indexOf(" > eval") > -1) {
                var r = Fn.exec(e[3]);
                r &&
                  ((e[1] = e[1] || "eval"),
                  (e[3] = r[1]),
                  (e[4] = r[2]),
                  (e[5] = ""));
              }
              var o = e[3],
                i = e[1] || Dn;
              return (
                (i = (n = an(Xn(i, o), 2))[0]),
                Un((o = n[1]), i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
              );
            }
          },
        ],
        Hn =
          /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        Gn = [
          40,
          function (t) {
            var n = Hn.exec(t);
            return n
              ? Un(n[2], n[1] || Dn, +n[3], n[4] ? +n[4] : void 0)
              : void 0;
          },
        ],
        Yn = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        Kn = [
          10,
          function (t) {
            var n = Yn.exec(t);
            return n ? Un(n[2], n[3] || Dn, +n[1]) : void 0;
          },
        ],
        Vn =
          / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        Jn = [
          20,
          function (t) {
            var n = Vn.exec(t);
            return n ? Un(n[5], n[3] || n[4] || Dn, +n[1], +n[2]) : void 0;
          },
        ],
        Xn = function (t, n) {
          var e = -1 !== t.indexOf("safari-extension"),
            r = -1 !== t.indexOf("safari-web-extension");
          return e || r
            ? [
                -1 !== t.indexOf("@") ? t.split("@")[0] : Dn,
                e ? "safari-extension:" + n : "safari-web-extension:" + n,
              ]
            : [t, n];
        };
      function Zn(t) {
        var n = te(t),
          e = { type: t && t.name, value: ee(t) };
        return (
          n.length && (e.stacktrace = { frames: n }),
          void 0 === e.type &&
            "" === e.value &&
            (e.value = "Unrecoverable error caught"),
          e
        );
      }
      function Qn(t) {
        return { exception: { values: [Zn(t)] } };
      }
      function te(t) {
        var n = t.stacktrace || t.stack || "",
          e = (function (t) {
            if (t) {
              if ("number" == typeof t.framesToPop) return t.framesToPop;
              if (ne.test(t.message)) return 1;
            }
            return 0;
          })(t);
        try {
          return (function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var e = t
              .sort(function (t, n) {
                return t[0] - n[0];
              })
              .map(function (t) {
                return t[1];
              });
            return function (t, n) {
              var r, o, i, a;
              void 0 === n && (n = 0);
              var u = [];
              try {
                for (
                  var s = g(t.split("\n").slice(n)), c = s.next();
                  !c.done;
                  c = s.next()
                ) {
                  var f = c.value;
                  try {
                    for (
                      var l = ((i = void 0), g(e)), p = l.next();
                      !p.done;
                      p = l.next()
                    ) {
                      var h = (0, p.value)(f);
                      if (h) {
                        u.push(h);
                        break;
                      }
                    }
                  } catch (t) {
                    i = { error: t };
                  } finally {
                    try {
                      p && !p.done && (a = l.return) && a.call(l);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                }
              } catch (t) {
                r = { error: t };
              } finally {
                try {
                  c && !c.done && (o = s.return) && o.call(s);
                } finally {
                  if (r) throw r.error;
                }
              }
              return Dt(u);
            };
          })(
            Kn,
            Jn,
            Bn,
            Gn,
            $n
          )(n, e);
        } catch (t) {}
        return [];
      }
      var ne = /Minified React error #\d+;/i;
      function ee(t) {
        var n = t && t.message;
        return n
          ? n.error && "string" == typeof n.error.message
            ? n.error.message
            : n
          : "No error message";
      }
      function re(t, n, e, r) {
        var o;
        if (k(t) && t.error) return Qn(t.error);
        if (j(t) || E(t, "DOMException")) {
          var i = t;
          if ("stack" in t) o = Qn(t);
          else {
            var a = i.name || (j(i) ? "DOMError" : "DOMException"),
              u = i.message ? a + ": " + i.message : a;
            X((o = oe(u, n, e)), u);
          }
          return (
            "code" in i &&
              (o.tags = on(on({}, o.tags), {
                "DOMException.code": "" + i.code,
              })),
            o
          );
        }
        return S(t)
          ? Qn(t)
          : R(t) || A(t)
          ? ((o = (function (t, n, e) {
              var r = {
                exception: {
                  values: [
                    {
                      type: A(t)
                        ? t.constructor.name
                        : e
                        ? "UnhandledRejection"
                        : "Error",
                      value:
                        "Non-Error " +
                        (e ? "promise rejection" : "exception") +
                        " captured with keys: " +
                        H(t),
                    },
                  ],
                },
                extra: { __serialized__: _n(t) },
              };
              if (n) {
                var o = te(n);
                o.length && (r.stacktrace = { frames: o });
              }
              return r;
            })(t, n, r)),
            Z(o, { synthetic: !0 }),
            o)
          : (X((o = oe(t, n, e)), "" + t, void 0), Z(o, { synthetic: !0 }), o);
      }
      function oe(t, n, e) {
        var r = { message: t };
        if (e && n) {
          var o = te(n);
          o.length && (r.stacktrace = { frames: o });
        }
        return r;
      }
      function ie(t) {
        var n = [];
        function e(t) {
          return n.splice(n.indexOf(t), 1)[0];
        }
        return {
          $: n,
          add: function (r) {
            if (!(void 0 === t || n.length < t))
              return lt(
                new fn("Not adding Promise due to buffer limit reached.")
              );
            var o = r();
            return (
              -1 === n.indexOf(o) && n.push(o),
              o
                .then(function () {
                  return e(o);
                })
                .then(null, function () {
                  return e(o).then(null, function () {});
                }),
              o
            );
          },
          drain: function (t) {
            return new pt(function (e, r) {
              var o = n.length;
              if (!o) return e(!0);
              var i = setTimeout(function () {
                t && t > 0 && e(!1);
              }, t);
              n.forEach(function (t) {
                ft(t).then(function () {
                  --o || (clearTimeout(i), e(!0));
                }, r);
              });
            });
          },
        };
      }
      function ae(t, n) {
        return t[n] || t.all || 0;
      }
      function ue(t, n, e) {
        return void 0 === e && (e = Date.now()), ae(t, n) > e;
      }
      function se(t, n, e) {
        var r, o, i, a;
        void 0 === e && (e = Date.now());
        var u = y({}, t),
          s = n["x-sentry-rate-limits"],
          c = n["retry-after"];
        if (s)
          try {
            for (
              var f = g(s.trim().split(",")), l = f.next();
              !l.done;
              l = f.next()
            ) {
              var p = l.value.split(":", 2),
                h = parseInt(p[0], 10),
                d = 1e3 * (isNaN(h) ? 60 : h);
              if (p[1])
                try {
                  for (
                    var v = ((i = void 0), g(p[1].split(";"))), _ = v.next();
                    !_.done;
                    _ = v.next()
                  )
                    u[_.value] = e + d;
                } catch (t) {
                  i = { error: t };
                } finally {
                  try {
                    _ && !_.done && (a = v.return) && a.call(v);
                  } finally {
                    if (i) throw i.error;
                  }
                }
              else u.all = e + d;
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              l && !l.done && (o = f.return) && o.call(f);
            } finally {
              if (r) throw r.error;
            }
          }
        else
          c &&
            (u.all =
              e +
              (function (t, n) {
                void 0 === n && (n = Date.now());
                var e = parseInt("" + t, 10);
                if (!isNaN(e)) return 1e3 * e;
                var r = Date.parse("" + t);
                return isNaN(r) ? 6e4 : r - n;
              })(c, e));
        return u;
      }
      function ce(t) {
        return t >= 200 && t < 300
          ? "success"
          : 429 === t
          ? "rate_limit"
          : t >= 400 && t < 500
          ? "invalid"
          : t >= 500
          ? "failed"
          : "unknown";
      }
      function fe(t, n, e) {
        void 0 === e && (e = ie(t.bufferSize || 30));
        var r = {};
        return {
          send: function (t) {
            var o = (function (t) {
                var n = m(t, 2),
                  e = m(n[1], 1);
                return m(e[0], 1)[0].type;
              })(t),
              i = "event" === o ? "error" : o,
              a = { category: i, body: An(t) };
            return ue(r, i)
              ? lt({ status: "rate_limit", reason: le(r, i) })
              : e.add(function () {
                  return n(a).then(function (t) {
                    var n = t.body,
                      e = t.headers,
                      o = t.reason,
                      a = ce(t.statusCode);
                    return (
                      e && (r = se(r, e)),
                      "success" === a
                        ? ft({ status: a, reason: o })
                        : lt({
                            status: a,
                            reason:
                              o ||
                              n ||
                              ("rate_limit" === a
                                ? le(r, i)
                                : "Unknown transport error"),
                          })
                    );
                  });
                });
          },
          flush: function (t) {
            return e.drain(t);
          },
        };
      }
      function le(t, n) {
        return (
          "Too many " +
          n +
          " requests, backing off until: " +
          new Date(ae(t, n)).toISOString()
        );
      }
      var pe,
        he = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        de = (0, w.R)();
      function ve() {
        if (pe) return pe;
        if (Bt(de.fetch)) return (pe = de.fetch.bind(de));
        var t = de.document,
          n = de.fetch;
        if (t && "function" == typeof t.createElement)
          try {
            var e = t.createElement("iframe");
            (e.hidden = !0), t.head.appendChild(e);
            var r = e.contentWindow;
            r && r.fetch && (n = r.fetch), t.head.removeChild(e);
          } catch (t) {
            he &&
              tt.warn(
                "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                t
              );
          }
        return (pe = n.bind(de));
      }
      function _e(t) {
        return "event" === t ? "error" : t;
      }
      var ye = (0, w.R)(),
        ge = (function () {
          function t(t) {
            var n = this;
            (this.options = t),
              (this._buffer = ie(30)),
              (this._rateLimits = {}),
              (this._outcomes = {}),
              (this._api = xn(t.dsn, t._metadata, t.tunnel)),
              (this.url = On(this._api.dsn)),
              this.options.sendClientReports &&
                ye.document &&
                ye.document.addEventListener("visibilitychange", function () {
                  "hidden" === ye.document.visibilityState &&
                    n._flushOutcomes();
                });
          }
          return (
            (t.prototype.sendEvent = function (t) {
              return this._sendRequest(
                (function (t, n) {
                  var e,
                    r = Cn(n),
                    o = t.type || "event",
                    i = "transaction" === o || !!n.tunnel,
                    a =
                      (t.sdkProcessingMetadata || {}).transactionSampling || {},
                    u = a.method,
                    s = a.rate;
                  In(t, n.metadata.sdk),
                    (t.tags = t.tags || {}),
                    (t.extra = t.extra || {}),
                    (t.sdkProcessingMetadata &&
                      t.sdkProcessingMetadata.baseClientNormalized) ||
                      ((t.tags.skippedNormalization = !0),
                      (t.extra.normalizeDepth = t.sdkProcessingMetadata
                        ? t.sdkProcessingMetadata.normalizeDepth
                        : "unset")),
                    delete t.sdkProcessingMetadata;
                  try {
                    e = JSON.stringify(t);
                  } catch (n) {
                    (t.tags.JSONStringifyError = !0),
                      (t.extra.JSONStringifyError = n);
                    try {
                      e = JSON.stringify(vn(t));
                    } catch (t) {
                      var c = t;
                      e = JSON.stringify({
                        message: "JSON.stringify error after renormalization",
                        extra: { message: c.message, stack: c.stack },
                      });
                    }
                  }
                  var f = {
                    body: e,
                    type: o,
                    url: i ? Tn(n.dsn, n.tunnel) : On(n.dsn),
                  };
                  if (i) {
                    var l = Rn(
                      Tt(
                        Tt(
                          {
                            event_id: t.event_id,
                            sent_at: new Date().toISOString(),
                          },
                          r && { sdk: r }
                        ),
                        !!n.tunnel && { dsn: pn(n.dsn) }
                      ),
                      [
                        [
                          { type: o, sample_rates: [{ id: u, rate: s }] },
                          f.body,
                        ],
                      ]
                    );
                    f.body = An(l);
                  }
                  return f;
                })(t, this._api),
                t
              );
            }),
            (t.prototype.sendSession = function (t) {
              return this._sendRequest(
                (function (t, n) {
                  var e = Rt(Ln(t, n), 2),
                    r = e[0],
                    o = e[1];
                  return { body: An(r), type: o, url: Tn(n.dsn, n.tunnel) };
                })(t, this._api),
                t
              );
            }),
            (t.prototype.close = function (t) {
              return this._buffer.drain(t);
            }),
            (t.prototype.recordLostEvent = function (t, n) {
              var e;
              if (this.options.sendClientReports) {
                var r = _e(n) + ":" + t;
                he && tt.log("Adding outcome: " + r),
                  (this._outcomes[r] =
                    (null != (e = this._outcomes[r]) ? e : 0) + 1);
              }
            }),
            (t.prototype._flushOutcomes = function () {
              if (this.options.sendClientReports) {
                var t = this._outcomes;
                if (((this._outcomes = {}), Object.keys(t).length)) {
                  he &&
                    tt.log("Flushing outcomes:\n" + JSON.stringify(t, null, 2));
                  var n = Tn(this._api.dsn, this._api.tunnel),
                    e =
                      ((r = Object.keys(t).map(function (n) {
                        var e = an(n.split(":"), 2),
                          r = e[0];
                        return { reason: e[1], category: r, quantity: t[n] };
                      })),
                      Rn(
                        (o = this._api.tunnel && pn(this._api.dsn))
                          ? { dsn: o }
                          : {},
                        [
                          [
                            { type: "client_report" },
                            { timestamp: (0, nt.yW)(), discarded_events: r },
                          ],
                        ]
                      ));
                  try {
                    !(function (t, n) {
                      if (
                        "[object Navigator]" ===
                          Object.prototype.toString.call(de && de.navigator) &&
                        "function" == typeof de.navigator.sendBeacon
                      )
                        return de.navigator.sendBeacon.bind(de.navigator)(t, n);
                      qt() &&
                        ve()(t, {
                          body: n,
                          method: "POST",
                          credentials: "omit",
                          keepalive: !0,
                        }).then(null, function (t) {
                          console.error(t);
                        });
                    })(n, An(e));
                  } catch (t) {
                    he && tt.error(t);
                  }
                } else he && tt.log("No outcomes to flush");
              }
              var r, o;
            }),
            (t.prototype._handleResponse = function (t) {
              var n = t.requestType,
                e = t.response,
                r = t.headers,
                o = t.resolve,
                i = t.reject,
                a = ce(e.status);
              (this._rateLimits = se(this._rateLimits, r)),
                this._isRateLimited(n) &&
                  he &&
                  tt.warn(
                    "Too many " +
                      n +
                      " requests, backing off until: " +
                      this._disabledUntil(n)
                  ),
                "success" !== a ? i(e) : o({ status: a });
            }),
            (t.prototype._disabledUntil = function (t) {
              var n = _e(t);
              return new Date(ae(this._rateLimits, n));
            }),
            (t.prototype._isRateLimited = function (t) {
              var n = _e(t);
              return ue(this._rateLimits, n);
            }),
            t
          );
        })(),
        me = (function (t) {
          function n(n, e) {
            void 0 === e && (e = ve());
            var r = t.call(this, n) || this;
            return (r._fetch = e), r;
          }
          return (
            rn(n, t),
            (n.prototype._sendRequest = function (t, n) {
              var e = this;
              if (this._isRateLimited(t.type))
                return (
                  this.recordLostEvent("ratelimit_backoff", t.type),
                  Promise.reject({
                    event: n,
                    type: t.type,
                    reason:
                      "Transport for " +
                      t.type +
                      " requests locked till " +
                      this._disabledUntil(t.type) +
                      " due to too many requests.",
                    status: 429,
                  })
                );
              var r = {
                body: t.body,
                method: "POST",
                referrerPolicy: Wt() ? "origin" : "",
              };
              return (
                void 0 !== this.options.fetchParameters &&
                  Object.assign(r, this.options.fetchParameters),
                void 0 !== this.options.headers &&
                  (r.headers = this.options.headers),
                this._buffer
                  .add(function () {
                    return new pt(function (n, o) {
                      e._fetch(t.url, r)
                        .then(function (r) {
                          var i = {
                            "x-sentry-rate-limits": r.headers.get(
                              "X-Sentry-Rate-Limits"
                            ),
                            "retry-after": r.headers.get("Retry-After"),
                          };
                          e._handleResponse({
                            requestType: t.type,
                            response: r,
                            headers: i,
                            resolve: n,
                            reject: o,
                          });
                        })
                        .catch(o);
                    });
                  })
                  .then(void 0, function (n) {
                    throw (
                      (n instanceof fn
                        ? e.recordLostEvent("queue_overflow", t.type)
                        : e.recordLostEvent("network_error", t.type),
                      n)
                    );
                  })
              );
            }),
            n
          );
        })(ge),
        be = (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            rn(n, t),
            (n.prototype._sendRequest = function (t, n) {
              var e = this;
              return this._isRateLimited(t.type)
                ? (this.recordLostEvent("ratelimit_backoff", t.type),
                  Promise.reject({
                    event: n,
                    type: t.type,
                    reason:
                      "Transport for " +
                      t.type +
                      " requests locked till " +
                      this._disabledUntil(t.type) +
                      " due to too many requests.",
                    status: 429,
                  }))
                : this._buffer
                    .add(function () {
                      return new pt(function (n, r) {
                        var o = new XMLHttpRequest();
                        for (var i in ((o.onreadystatechange = function () {
                          if (4 === o.readyState) {
                            var i = {
                              "x-sentry-rate-limits": o.getResponseHeader(
                                "X-Sentry-Rate-Limits"
                              ),
                              "retry-after": o.getResponseHeader("Retry-After"),
                            };
                            e._handleResponse({
                              requestType: t.type,
                              response: o,
                              headers: i,
                              resolve: n,
                              reject: r,
                            });
                          }
                        }),
                        o.open("POST", t.url),
                        e.options.headers))
                          Object.prototype.hasOwnProperty.call(
                            e.options.headers,
                            i
                          ) && o.setRequestHeader(i, e.options.headers[i]);
                        o.send(t.body);
                      });
                    })
                    .then(void 0, function (n) {
                      throw (
                        (n instanceof fn
                          ? e.recordLostEvent("queue_overflow", t.type)
                          : e.recordLostEvent("network_error", t.type),
                        n)
                      );
                    });
            }),
            n
          );
        })(ge),
        we = (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            rn(n, t),
            (n.prototype.eventFromException = function (t, n) {
              return (function (t, n, e) {
                var r = re(t, (n && n.syntheticException) || void 0, e);
                return (
                  Z(r),
                  (r.level = Nn.Error),
                  n && n.event_id && (r.event_id = n.event_id),
                  ft(r)
                );
              })(t, n, this._options.attachStacktrace);
            }),
            (n.prototype.eventFromMessage = function (t, n, e) {
              return (
                void 0 === n && (n = Nn.Info),
                (function (t, n, e, r) {
                  void 0 === n && (n = Nn.Info);
                  var o = oe(t, (e && e.syntheticException) || void 0, r);
                  return (
                    (o.level = n),
                    e && e.event_id && (o.event_id = e.event_id),
                    ft(o)
                  );
                })(t, n, e, this._options.attachStacktrace)
              );
            }),
            (n.prototype._setupTransport = function () {
              if (!this._options.dsn)
                return t.prototype._setupTransport.call(this);
              var n,
                e,
                r = on(on({}, this._options.transportOptions), {
                  dsn: this._options.dsn,
                  tunnel: this._options.tunnel,
                  sendClientReports: this._options.sendClientReports,
                  _metadata: this._options._metadata,
                }),
                o = xn(r.dsn, r._metadata, r.tunnel),
                i = Tn(o.dsn, o.tunnel);
              if (this._options.transport)
                return new this._options.transport(r);
              if (qt()) {
                var a = on({}, r.fetchParameters);
                return (
                  (this._newTransport =
                    ((n = { requestOptions: a, url: i }),
                    void 0 === e && (e = ve()),
                    fe({ bufferSize: n.bufferSize }, function (t) {
                      var r = on(
                        {
                          body: t.body,
                          method: "POST",
                          referrerPolicy: "origin",
                        },
                        n.requestOptions
                      );
                      return e(n.url, r).then(function (t) {
                        return t.text().then(function (n) {
                          return {
                            body: n,
                            headers: {
                              "x-sentry-rate-limits": t.headers.get(
                                "X-Sentry-Rate-Limits"
                              ),
                              "retry-after": t.headers.get("Retry-After"),
                            },
                            reason: t.statusText,
                            statusCode: t.status,
                          };
                        });
                      });
                    }))),
                  new me(r)
                );
              }
              return (
                (this._newTransport = (function (t) {
                  return fe({ bufferSize: t.bufferSize }, function (n) {
                    return new pt(function (e, r) {
                      var o = new XMLHttpRequest();
                      for (var i in ((o.onreadystatechange = function () {
                        if (4 === o.readyState) {
                          var t = {
                            body: o.response,
                            headers: {
                              "x-sentry-rate-limits": o.getResponseHeader(
                                "X-Sentry-Rate-Limits"
                              ),
                              "retry-after": o.getResponseHeader("Retry-After"),
                            },
                            reason: o.statusText,
                            statusCode: o.status,
                          };
                          e(t);
                        }
                      }),
                      o.open("POST", t.url),
                      t.headers))
                        Object.prototype.hasOwnProperty.call(t.headers, i) &&
                          o.setRequestHeader(i, t.headers[i]);
                      o.send(n.body);
                    });
                  });
                })({ url: i, headers: r.headers })),
                new be(r)
              );
            }),
            n
          );
        })(Mn),
        xe = (0, w.R)(),
        Se = 0;
      function Ee() {
        return Se > 0;
      }
      function ke() {
        (Se += 1),
          setTimeout(function () {
            Se -= 1;
          });
      }
      function je(t, n, e) {
        if ((void 0 === n && (n = {}), "function" != typeof t)) return t;
        try {
          var r = t.__sentry_wrapped__;
          if (r) return r;
          if (B(t)) return t;
        } catch (n) {
          return t;
        }
        var o = function () {
          var r = Array.prototype.slice.call(arguments);
          try {
            e && "function" == typeof e && e.apply(this, arguments);
            var o = r.map(function (t) {
              return je(t, n);
            });
            return t.apply(this, o);
          } catch (t) {
            throw (
              (ke(),
              jt(function (e) {
                e.addEventProcessor(function (t) {
                  return (
                    n.mechanism && (X(t, void 0, void 0), Z(t, n.mechanism)),
                    (t.extra = on(on({}, t.extra), { arguments: r })),
                    t
                  );
                }),
                  kt(t);
              }),
              t)
            );
          }
        };
        try {
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i]);
        } catch (t) {}
        q(o, t), z(t, "__sentry_wrapped__", o);
        try {
          Object.getOwnPropertyDescriptor(o, "name").configurable &&
            Object.defineProperty(o, "name", {
              get: function () {
                return t.name;
              },
            });
        } catch (t) {}
        return o;
      }
      var Oe = [
        "fatal",
        "error",
        "warning",
        "log",
        "info",
        "debug",
        "critical",
      ];
      var Te = (function () {
        function t(n) {
          (this.name = t.id),
            (this._options = on(
              {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
              },
              n
            ));
        }
        return (
          (t.prototype.addSentryBreadcrumb = function (t) {
            this._options.sentry &&
              bt().addBreadcrumb(
                {
                  category:
                    "sentry." +
                    ("transaction" === t.type ? "transaction" : "event"),
                  event_id: t.event_id,
                  level: t.level,
                  message: J(t),
                },
                { event: t }
              );
          }),
          (t.prototype.setupOnce = function () {
            var t;
            this._options.console && Vt("console", Re),
              this._options.dom &&
                Vt(
                  "dom",
                  ((t = this._options.dom),
                  function (n) {
                    var e,
                      r = "object" == typeof t ? t.serializeAttribute : void 0;
                    "string" == typeof r && (r = [r]);
                    try {
                      e = n.event.target ? L(n.event.target, r) : L(n.event, r);
                    } catch (t) {
                      e = "<unknown>";
                    }
                    0 !== e.length &&
                      bt().addBreadcrumb(
                        { category: "ui." + n.name, message: e },
                        { event: n.event, name: n.name, global: n.global }
                      );
                  })
                ),
              this._options.xhr && Vt("xhr", Ae),
              this._options.fetch && Vt("fetch", Ce),
              this._options.history && Vt("history", Ie);
          }),
          (t.id = "Breadcrumbs"),
          t
        );
      })();
      function Re(t) {
        var n,
          e = {
            category: "console",
            data: { arguments: t.args, logger: "console" },
            level:
              ((n = t.level),
              "warn" === n
                ? Nn.Warning
                : (function (t) {
                    return -1 !== Oe.indexOf(t);
                  })(n)
                ? n
                : Nn.Log),
            message: M(t.args, " "),
          };
        if ("assert" === t.level) {
          if (!1 !== t.args[0]) return;
          (e.message =
            "Assertion failed: " +
            (M(t.args.slice(1), " ") || "console.assert")),
            (e.data.arguments = t.args.slice(1));
        }
        bt().addBreadcrumb(e, { input: t.args, level: t.level });
      }
      function Ae(t) {
        if (t.endTimestamp) {
          if (t.xhr.__sentry_own_request__) return;
          var n = t.xhr.__sentry_xhr__ || {},
            e = n.method,
            r = n.url,
            o = n.status_code,
            i = n.body;
          bt().addBreadcrumb(
            {
              category: "xhr",
              data: { method: e, url: r, status_code: o },
              type: "http",
            },
            { xhr: t.xhr, input: i }
          );
        }
      }
      function Ce(t) {
        t.endTimestamp &&
          ((t.fetchData.url.match(/sentry_key/) &&
            "POST" === t.fetchData.method) ||
            (t.error
              ? bt().addBreadcrumb(
                  {
                    category: "fetch",
                    data: t.fetchData,
                    level: Nn.Error,
                    type: "http",
                  },
                  { data: t.error, input: t.args }
                )
              : bt().addBreadcrumb(
                  {
                    category: "fetch",
                    data: on(on({}, t.fetchData), {
                      status_code: t.response.status,
                    }),
                    type: "http",
                  },
                  { input: t.args, response: t.response }
                )));
      }
      function Ie(t) {
        var n = (0, w.R)(),
          e = t.from,
          r = t.to,
          o = K(n.location.href),
          i = K(e),
          a = K(r);
        i.path || (i = o),
          o.protocol === a.protocol && o.host === a.host && (r = a.relative),
          o.protocol === i.protocol && o.host === i.host && (e = i.relative),
          bt().addBreadcrumb({
            category: "navigation",
            data: { from: e, to: r },
          });
      }
      var Le = (function (t) {
          function n(n) {
            return (
              void 0 === n && (n = {}),
              (n._metadata = n._metadata || {}),
              (n._metadata.sdk = n._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{ name: "npm:@sentry/browser", version: sn }],
                version: sn,
              }),
              t.call(this, we, n) || this
            );
          }
          return (
            rn(n, t),
            (n.prototype.showReportDialog = function (t) {
              void 0 === t && (t = {}),
                (0, w.R)().document &&
                  (this._isEnabled()
                    ? (function (t) {
                        if ((void 0 === t && (t = {}), xe.document))
                          if (t.eventId)
                            if (t.dsn) {
                              var n = xe.document.createElement("script");
                              (n.async = !0),
                                (n.src = (function (t, n) {
                                  var e = dn(t),
                                    r = Sn(e) + "embed/error-page/",
                                    o = "dsn=" + pn(e);
                                  for (var i in n)
                                    if ("dsn" !== i)
                                      if ("user" === i) {
                                        if (!n.user) continue;
                                        n.user.name &&
                                          (o +=
                                            "&name=" +
                                            encodeURIComponent(n.user.name)),
                                          n.user.email &&
                                            (o +=
                                              "&email=" +
                                              encodeURIComponent(n.user.email));
                                      } else
                                        o +=
                                          "&" +
                                          encodeURIComponent(i) +
                                          "=" +
                                          encodeURIComponent(n[i]);
                                  return r + "?" + o;
                                })(t.dsn, t)),
                                t.onLoad && (n.onload = t.onLoad);
                              var e = xe.document.head || xe.document.body;
                              e && e.appendChild(n);
                            } else
                              he &&
                                tt.error(
                                  "Missing dsn option in showReportDialog call"
                                );
                          else
                            he &&
                              tt.error(
                                "Missing eventId option in showReportDialog call"
                              );
                      })(on(on({}, t), { dsn: t.dsn || this.getDsn() }))
                    : he &&
                      tt.error(
                        "Trying to call showReportDialog with Sentry Client disabled"
                      ));
            }),
            (n.prototype._prepareEvent = function (n, e, r) {
              return (
                (n.platform = n.platform || "javascript"),
                t.prototype._prepareEvent.call(this, n, e, r)
              );
            }),
            (n.prototype._sendEvent = function (n) {
              var e = this.getIntegration(Te);
              e && e.addSentryBreadcrumb(n),
                t.prototype._sendEvent.call(this, n);
            }),
            n
          );
        })(wn),
        Ne = [
          "EventTarget",
          "Window",
          "Node",
          "ApplicationCache",
          "AudioTrackList",
          "ChannelMergerNode",
          "CryptoOperation",
          "EventSource",
          "FileReader",
          "HTMLUnknownElement",
          "IDBDatabase",
          "IDBRequest",
          "IDBTransaction",
          "KeyOperation",
          "MediaController",
          "MessagePort",
          "ModalWindow",
          "Notification",
          "SVGElementInstance",
          "Screen",
          "TextTrack",
          "TextTrackCue",
          "TextTrackList",
          "WebSocket",
          "WebSocketWorker",
          "Worker",
          "XMLHttpRequest",
          "XMLHttpRequestEventTarget",
          "XMLHttpRequestUpload",
        ],
        Pe = (function () {
          function t(n) {
            (this.name = t.id),
              (this._options = on(
                {
                  XMLHttpRequest: !0,
                  eventTarget: !0,
                  requestAnimationFrame: !0,
                  setInterval: !0,
                  setTimeout: !0,
                },
                n
              ));
          }
          return (
            (t.prototype.setupOnce = function () {
              var t = (0, w.R)();
              this._options.setTimeout && U(t, "setTimeout", Me),
                this._options.setInterval && U(t, "setInterval", Me),
                this._options.requestAnimationFrame &&
                  U(t, "requestAnimationFrame", De),
                this._options.XMLHttpRequest &&
                  "XMLHttpRequest" in t &&
                  U(XMLHttpRequest.prototype, "send", Ue);
              var n = this._options.eventTarget;
              n && (Array.isArray(n) ? n : Ne).forEach(ze);
            }),
            (t.id = "TryCatch"),
            t
          );
        })();
      function Me(t) {
        return function () {
          for (var n = [], e = 0; e < arguments.length; e++)
            n[e] = arguments[e];
          var r = n[0];
          return (
            (n[0] = je(r, {
              mechanism: {
                data: { function: zt(t) },
                handled: !0,
                type: "instrument",
              },
            })),
            t.apply(this, n)
          );
        };
      }
      function De(t) {
        return function (n) {
          return t.apply(this, [
            je(n, {
              mechanism: {
                data: { function: "requestAnimationFrame", handler: zt(t) },
                handled: !0,
                type: "instrument",
              },
            }),
          ]);
        };
      }
      function Ue(t) {
        return function () {
          for (var n = [], e = 0; e < arguments.length; e++)
            n[e] = arguments[e];
          var r = this,
            o = ["onload", "onerror", "onprogress", "onreadystatechange"];
          return (
            o.forEach(function (t) {
              t in r &&
                "function" == typeof r[t] &&
                U(r, t, function (n) {
                  var e = {
                      mechanism: {
                        data: { function: t, handler: zt(n) },
                        handled: !0,
                        type: "instrument",
                      },
                    },
                    r = B(n);
                  return r && (e.mechanism.data.handler = zt(r)), je(n, e);
                });
            }),
            t.apply(this, n)
          );
        };
      }
      function ze(t) {
        var n = (0, w.R)(),
          e = n[t] && n[t].prototype;
        e &&
          e.hasOwnProperty &&
          e.hasOwnProperty("addEventListener") &&
          (U(e, "addEventListener", function (n) {
            return function (e, r, o) {
              try {
                "function" == typeof r.handleEvent &&
                  (r.handleEvent = je(r.handleEvent.bind(r), {
                    mechanism: {
                      data: {
                        function: "handleEvent",
                        handler: zt(r),
                        target: t,
                      },
                      handled: !0,
                      type: "instrument",
                    },
                  }));
              } catch (t) {}
              return n.apply(this, [
                e,
                je(r, {
                  mechanism: {
                    data: {
                      function: "addEventListener",
                      handler: zt(r),
                      target: t,
                    },
                    handled: !0,
                    type: "instrument",
                  },
                }),
                o,
              ]);
            };
          }),
          U(e, "removeEventListener", function (t) {
            return function (n, e, r) {
              var o = e;
              try {
                var i = o && o.__sentry_wrapped__;
                i && t.call(this, n, i, r);
              } catch (t) {}
              return t.call(this, n, o, r);
            };
          }));
      }
      var qe = (function () {
        function t(n) {
          (this.name = t.id),
            (this._installFunc = { onerror: Be, onunhandledrejection: We }),
            (this._options = on({ onerror: !0, onunhandledrejection: !0 }, n));
        }
        return (
          (t.prototype.setupOnce = function () {
            Error.stackTraceLimit = 50;
            var t,
              n = this._options;
            for (var e in n) {
              var r = this._installFunc[e];
              r &&
                n[e] &&
                ((t = e),
                he && tt.log("Global Handler attached: " + t),
                r(),
                (this._installFunc[e] = void 0));
            }
          }),
          (t.id = "GlobalHandlers"),
          t
        );
      })();
      function Be() {
        Vt("error", function (t) {
          var n = an(He(), 2),
            e = n[0],
            r = n[1];
          if (e.getIntegration(qe)) {
            var o = t.msg,
              i = t.url,
              a = t.line,
              u = t.column,
              s = t.error;
            if (!(Ee() || (s && s.__sentry_own_request__))) {
              var c =
                void 0 === s && O(o)
                  ? (function (t, n, e, r) {
                      var o = k(t) ? t.message : t,
                        i = "Error",
                        a = o.match(
                          /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                        );
                      return (
                        a && ((i = a[1]), (o = a[2])),
                        Fe(
                          { exception: { values: [{ type: i, value: o }] } },
                          n,
                          e,
                          r
                        )
                      );
                    })(o, i, a, u)
                  : Fe(re(s || o, void 0, r, !1), i, a, u);
              (c.level = Nn.Error), $e(e, s, c, "onerror");
            }
          }
        });
      }
      function We() {
        Vt("unhandledrejection", function (t) {
          var n = an(He(), 2),
            e = n[0],
            r = n[1];
          if (e.getIntegration(qe)) {
            var o = t;
            try {
              "reason" in t
                ? (o = t.reason)
                : "detail" in t &&
                  "reason" in t.detail &&
                  (o = t.detail.reason);
            } catch (t) {}
            if (Ee() || (o && o.__sentry_own_request__)) return !0;
            var i = T(o)
              ? {
                  exception: {
                    values: [
                      {
                        type: "UnhandledRejection",
                        value:
                          "Non-Error promise rejection captured with value: " +
                          String(o),
                      },
                    ],
                  },
                }
              : re(o, void 0, r, !0);
            (i.level = Nn.Error), $e(e, o, i, "onunhandledrejection");
          }
        });
      }
      function Fe(t, n, e, r) {
        var o = (t.exception = t.exception || {}),
          i = (o.values = o.values || []),
          a = (i[0] = i[0] || {}),
          u = (a.stacktrace = a.stacktrace || {}),
          s = (u.frames = u.frames || []),
          c = isNaN(parseInt(r, 10)) ? void 0 : r,
          f = isNaN(parseInt(e, 10)) ? void 0 : e,
          l =
            O(n) && n.length > 0
              ? n
              : (function () {
                  var t = (0, w.R)();
                  try {
                    return t.document.location.href;
                  } catch (t) {
                    return "";
                  }
                })();
        return (
          0 === s.length &&
            s.push({
              colno: c,
              filename: l,
              function: "?",
              in_app: !0,
              lineno: f,
            }),
          t
        );
      }
      function $e(t, n, e, r) {
        Z(e, { handled: !1, type: r }),
          t.captureEvent(e, { originalException: n });
      }
      function He() {
        var t = bt(),
          n = t.getClient();
        return [t, n && n.getOptions().attachStacktrace];
      }
      var Ge = (function () {
        function t(n) {
          void 0 === n && (n = {}),
            (this.name = t.id),
            (this._key = n.key || "cause"),
            (this._limit = n.limit || 5);
        }
        return (
          (t.prototype.setupOnce = function () {
            vt(function (n, e) {
              var r = bt().getIntegration(t);
              return r
                ? (function (t, n, e, r) {
                    if (
                      !(
                        e.exception &&
                        e.exception.values &&
                        r &&
                        I(r.originalException, Error)
                      )
                    )
                      return e;
                    var o = Ye(n, r.originalException, t);
                    return (e.exception.values = un(o, e.exception.values)), e;
                  })(r._key, r._limit, n, e)
                : n;
            });
          }),
          (t.id = "LinkedErrors"),
          t
        );
      })();
      function Ye(t, n, e, r) {
        if ((void 0 === r && (r = []), !I(n[e], Error) || r.length + 1 >= t))
          return r;
        var o = Zn(n[e]);
        return Ye(t, n[e], e, un([o], r));
      }
      var Ke = (function () {
        function t() {
          this.name = t.id;
        }
        return (
          (t.prototype.setupOnce = function (n, e) {
            n(function (n) {
              var r = e().getIntegration(t);
              if (r) {
                try {
                  if (
                    (function (t, n) {
                      return (
                        !!n &&
                        (!!(function (t, n) {
                          var e = t.message,
                            r = n.message;
                          return (
                            !(!e && !r) &&
                            !((e && !r) || (!e && r)) &&
                            e === r &&
                            !!Je(t, n) &&
                            !!Ve(t, n)
                          );
                        })(t, n) ||
                          !!(function (t, n) {
                            var e = Xe(n),
                              r = Xe(t);
                            return (
                              !(!e || !r) &&
                              e.type === r.type &&
                              e.value === r.value &&
                              !!Je(t, n) &&
                              !!Ve(t, n)
                            );
                          })(t, n))
                      );
                    })(n, r._previousEvent)
                  )
                    return (
                      he &&
                        tt.warn(
                          "Event dropped due to being a duplicate of previously captured event."
                        ),
                      null
                    );
                } catch (t) {
                  return (r._previousEvent = n);
                }
                return (r._previousEvent = n);
              }
              return n;
            });
          }),
          (t.id = "Dedupe"),
          t
        );
      })();
      function Ve(t, n) {
        var e = Ze(t),
          r = Ze(n);
        if (!e && !r) return !0;
        if ((e && !r) || (!e && r)) return !1;
        if (r.length !== e.length) return !1;
        for (var o = 0; o < r.length; o++) {
          var i = r[o],
            a = e[o];
          if (
            i.filename !== a.filename ||
            i.lineno !== a.lineno ||
            i.colno !== a.colno ||
            i.function !== a.function
          )
            return !1;
        }
        return !0;
      }
      function Je(t, n) {
        var e = t.fingerprint,
          r = n.fingerprint;
        if (!e && !r) return !0;
        if ((e && !r) || (!e && r)) return !1;
        try {
          return !(e.join("") !== r.join(""));
        } catch (t) {
          return !1;
        }
      }
      function Xe(t) {
        return t.exception && t.exception.values && t.exception.values[0];
      }
      function Ze(t) {
        var n = t.exception;
        if (n)
          try {
            return n.values[0].stacktrace.frames;
          } catch (t) {
            return;
          }
        else if (t.stacktrace) return t.stacktrace.frames;
      }
      var Qe = (0, w.R)(),
        tr = (function () {
          function t() {
            this.name = t.id;
          }
          return (
            (t.prototype.setupOnce = function () {
              vt(function (n) {
                if (bt().getIntegration(t)) {
                  if (!Qe.navigator && !Qe.location && !Qe.document) return n;
                  var e =
                      (n.request && n.request.url) ||
                      (Qe.location && Qe.location.href),
                    r = (Qe.document || {}).referrer,
                    o = (Qe.navigator || {}).userAgent,
                    i = on(
                      on(
                        on({}, n.request && n.request.headers),
                        r && { Referer: r }
                      ),
                      o && { "User-Agent": o }
                    ),
                    a = on(on({}, e && { url: e }), { headers: i });
                  return on(on({}, n), { request: a });
                }
                return n;
              });
            }),
            (t.id = "UserAgent"),
            t
          );
        })(),
        nr = [
          new Lt(),
          new Mt(),
          new Pe(),
          new Te(),
          new qe(),
          new Ge(),
          new Ke(),
          new tr(),
        ];
      function er(t) {
        t.startSession({ ignoreDuration: !0 }), t.captureSession();
      }
      class rr extends Error {
        constructor(t) {
          super(t), (this.name = "ShowCommentsSectionError");
        }
      }
      const or = (t) =>
          class extends rr {
            constructor(n) {
              super(n), (this.name = t);
            }
          },
        ir = or("CoralTalkEventError"),
        ar = or("CoralTalkRenderError"),
        ur = or("CoralTalkCountError"),
        sr = (t, n) => (n && n.originalException instanceof rr ? t : null),
        cr = (t, n) => kt(t, n),
        fr = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          const n = document.createElement("span");
          return n.classList.add("commentCount"), (n.innerHTML = `(${t})`), n;
        },
        lr = async (t) => {
          const n = u().root_url,
            e = await fetch(`${n}/api/story/count?url=${t}`);
          if (!e.ok)
            throw new Error(
              `Error fetching story ${t}. Status Code: ${e.status}`
            );
          const { count: r } = await e.json();
          return r;
        },
        pr = async (t, n) => {
          const e = document.createElement("span");
          e.classList.add("glbComentarios-loginRequired__header__title"),
            e.append("Comentários ");
          const r = [e];
          return (
            "COMMENTS" === n &&
              ((window.CoralCommentCount = {
                count: 0,
                update: async function () {
                  let n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    r = 0;
                  try {
                    r = await lr(t);
                  } catch (t) {
                    cr(new ur(`Fail on request count: ${t}`));
                  }
                  this.count = Math.max(this.count + n, r);
                  const o = fr(this.count);
                  (e.innerHTML = "Comentários "),
                    0 !== this.count && e.appendChild(o);
                },
              }),
              await window.CoralCommentCount.update(),
              0 === window.CoralCommentCount.count && r.push(dr())),
            r
          );
        },
        hr = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          window.CoralCommentCount && window.CoralCommentCount.update(t);
        },
        dr = () => {
          const t = document.createElement("span");
          return (
            t.classList.add("glbComentarios-loginRequired__header__subtitle"),
            (t.innerHTML = c() ? "Seja o primeiro a comentar!" : ""),
            t
          );
        },
        vr = (t) => {
          const e = document.getElementById(n) || document.createElement("div");
          return (
            e.setAttribute("id", n),
            e.classList.add("glbComentarios-loginRequired__header"),
            (e.innerHTML = ""),
            e.append(...t),
            e
          );
        },
        _r = (n) => {
          const e = document.getElementById(t) || document.createElement("div");
          return e.setAttribute("id", t), (e.innerHTML = ""), e.append(...n), e;
        };
      var yr = e(5161),
        gr = e.n(yr);
      function mr(t) {
        return new Promise((n) => {
          const e = br(t);
          if (e) return n(e);
          let r = document.createElement("script"),
            o = document.getElementsByTagName("script")[0];
          (r.type = "text/javascript"),
            (r.async = !0),
            (r.charset = "utf-8"),
            (r.onload = r.onreadystatechange =
              function () {
                (r.readyState && !/loaded|complete/.test(r.readyState)) ||
                  ((r = r.onload = r.onreadystatechange = null), n(br(t)));
              }),
            (r.onerror = (t) => {
              const n = a()(t, "target.src");
              cr(new rr(`Fail on load script: ${n}`));
            }),
            (r.src = t),
            o.parentNode.insertBefore(r, o);
        });
      }
      function br(t) {
        return document.querySelector(`script[src="${t}"]`);
      }
      let wr = null;
      const xr = (t) => {
          let { eventAction: n, eventLabel: e, eventValue: r } = t;
          !(function (t, i) {
            const u = () => {
              a()(window, "commonTracker")
                ? (() => {
                    if (!wr) {
                      const t = a()("window.cdaaas.SETTINGS.PRODUCT_UA");
                      wr = new window.commonTracker({
                        enableGA: !1,
                        trackingIds: t ? [t] : void 0,
                      });
                    }
                    return wr;
                  })().sendEvent(o, n, e, r)
                : window.setTimeout(u, 100);
            };
            window.setTimeout(u, 100);
          })(),
            (window.dataLayer = window.dataLayer || []),
            window.dataLayer.push({
              event: "bs_interatividade_votacao",
              event_category: o,
              event_action: n,
              event_label: e,
              event_value: r,
            });
        },
        Sr = "Login",
        Er = () => xr({ eventAction: Sr, eventLabel: "Sucesso Login" }),
        kr = () => xr({ eventAction: Sr, eventLabel: "Popup Login Fechado" });
      var jr = e(6486);
      const Or = (t, n, e) => {
          const r =
              window.screen.availLeft + window.screen.availWidth / 2 - n / 2,
            o = window.screen.availTop + window.screen.availHeight / 2 - e / 2;
          return {
            url: `${t}?callbackUri=${location.origin}`,
            name: "auth_comment_popup",
            opt: `menubar=0, resizable=0, width=${n}, height=${e}, left=${r}, top=${o}`,
          };
        },
        Tr = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : jr.noop;
          const n = u(),
            { url: e, name: r, opt: o } = Or(n.cacique_url, 340, 600),
            i = window.open(e, r, o);
          let a = !1;
          const s = (e) => {
            let { data: r, origin: o } = e;
            o === new URL(n.cacique_url).origin &&
              r &&
              ((a = !0),
              window.TalkEmbed.login(r.token),
              t(r.token),
              window.removeEventListener("message", s));
          };
          window.addEventListener("message", s);
          const c = setInterval(function () {
            i.closed && (clearInterval(c), kr(), a && Er());
          }, 100);
        },
        Rr = () =>
          a()(
            window,
            "cdaaas.SETTINGS.COMMENTS_CONFIG.config.requireUserAuthentication",
            !1
          ),
        Ar = () => {
          const t = document.createElement("div");
          return (
            t.classList.add("glbComentarios-loginRequiredWrapper"),
            (t.innerHTML =
              '\n    <div class="glbComentarios-loginRequired">\n        <div class="glbComentarios-loginRequired__title">\n            Acesse sua Conta Globo e participe da conversa\n        </div>\n        <button class="glbComentarios-loginRequired__btn">\n            Clique aqui para fazer login\n        </button>\n    </div>\n  '),
            t
              .querySelector(".glbComentarios-loginRequired__btn")
              .addEventListener("click", () =>
                Tr((t) => {
                  Cr.login(t), Cr.render();
                })
              ),
            t
          );
        },
        Cr = {
          prepare: async (n) => {
            await (function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return Promise.all(gr()(t, (t) => mr(t)));
            })(n.scripts);
            const e = ((n) => {
              const e = n.manage_user_interaction && !c(),
                o = s(),
                i = a()(
                  window,
                  "cdaaas.SETTINGS.COMENTARIOS_IDEXTERNO",
                  void 0
                ),
                u = [];
              return (
                e && u.push("hideInteraction"),
                n.story_mode === r && u.push("review-ratings"),
                {
                  id: t,
                  rootURL: n.root_url,
                  storyID: i,
                  storyURL: o,
                  storyMode: n.story_mode,
                  bodyClassName: u.join(" "),
                  customCSSURL: a()(
                    window,
                    "cdaaas.SETTINGS.COMMENTS_CUSTOM_CSS_URL",
                    void 0
                  ),
                }
              );
            })(n);
            (window.TalkEmbed = window.Coral.createStreamEmbed({
              ...e,
              events: (t) => {
                t.onAny((t) => {
                  switch (t) {
                    case "ready":
                      xr({
                        eventAction: "Stream de comentarios",
                        eventLabel: "Fluxo de comentários acessado",
                      });
                      break;
                    case "createCommentReaction.success":
                      xr({
                        eventAction: "Curtida",
                        eventLabel: "Usuário curtiu um comentário",
                      });
                      break;
                    case "createCommentReply.success":
                      xr({
                        eventAction: "Resposta a um comentário",
                        eventLabel:
                          "Resposta a um comentário criada com sucesso",
                      }),
                        hr(1);
                      break;
                    case "createComment.success":
                      xr({
                        eventAction: "Criação de comentario",
                        eventLabel: "Comentário criado com sucesso",
                      }),
                        hr(1);
                      break;
                    case "loginPrompt":
                      xr({ eventAction: Sr, eventLabel: "Popup Login Aberto" }),
                        Tr((t) => Cr.login(t));
                      break;
                    case "signOut.success":
                      Rr() && (Cr.stop(), Nr.render());
                      break;
                    default:
                      if (new RegExp(".*.error", "g").test(t)) {
                        const n = { tags: { coralTalkEvent: t } };
                        cr(
                          new ir(`Fail on CoralTalk component event: ${t}`),
                          n
                        );
                      }
                  }
                });
              },
            })),
              (window.TalkStarted = !0);
          },
          render: () => {
            window.TalkStarted &&
              (window.TalkEmbed.render(),
              setTimeout(() => {
                window.TalkEmbed.ready ||
                  cr(new ar("Fail on render CoralTalk component."));
              }, 1e4));
          },
          stop: () => {
            window.TalkStarted = !1;
          },
          login: (t) => window.TalkEmbed.login(t),
        },
        Ir = (t) => {
          const n = document.createElement("button");
          return (
            (n.textContent =
              t.story_mode === r
                ? "Ver avaliações & reviews"
                : "Ver comentários"),
            n.setAttribute("class", "glbComentarios-initCommentButton"),
            n.addEventListener("click", () => {
              Nr.render({ renderHeader: !0 });
            }),
            n
          );
        },
        Lr = (t) => {
          let { collapsed: n } = t;
          return n || matchMedia("(max-width:1024px)").matches;
        },
        Nr = {
          beforeRender: async function (t) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              e = [],
              r = [];
            switch (!0) {
              case n:
                r = await pr(s(), t.story_mode);
                break;
              case Rr():
                e.push(Ar()), (r = await pr(s(), t.story_mode));
                break;
              case Lr(t):
                e.push(Ir(t));
                break;
              default:
                r = await pr(s(), t.story_mode);
            }
            return { bodyElements: e, headerElements: r };
          },
          render: async function () {
            let { renderHeader: t } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const n = u(),
              { bodyElements: e, headerElements: r } = await Nr.beforeRender(
                n,
                t
              ),
              o = window.commentsEl;
            o.prepend(vr(r)), o.appendChild(_r(e)), await Cr.prepare(n);
            const i = 0 === e.length;
            i && Cr.render();
          },
        },
        Pr = () => -1 !== location.search.indexOf("force-talk"),
        Mr = () => {
          !a()(window, "cdaaas.SETTINGS.IS_PREVIEW", !1) || Pr()
            ? Pr() ||
              a()(
                window,
                "cdaaas.SETTINGS.COMMENTS_CONFIG.rolloutSection.allowed",
                !1
              ) ||
              a()(window, "utag_data.content_type", []).includes("cobertura")
              ? Nr.render()
              : (() => {
                  console.log("[Comment] Comment box will be hidden");
                  const t = document.querySelector("#boxComentarios");
                  t && (t.style.display = "none");
                })()
            : window.commentsEl.append(
                (() => {
                  const t = document.createElement("div");
                  return (
                    (t.title =
                      "A visualização de comentários não está disponível em modo preview."),
                    (t.innerHTML =
                      "<span>Após a publicação da página, a caixa de comentários aparecerá aqui.</span>"),
                    t.setAttribute("class", "glbComentarios-placeholder"),
                    t
                  );
                })()
              );
        },
        Dr = a()(window, "cdaaas.SETTINGS.VIEW_COMMENTS");
      (window.commentsEl = document.getElementById("boxComentarios")),
        (function (t) {
          if (
            (void 0 === t && (t = {}),
            void 0 === t.defaultIntegrations && (t.defaultIntegrations = nr),
            void 0 === t.release)
          ) {
            var n = (0, w.R)();
            n.SENTRY_RELEASE &&
              n.SENTRY_RELEASE.id &&
              (t.release = n.SENTRY_RELEASE.id);
          }
          void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
            void 0 === t.sendClientReports && (t.sendClientReports = !0),
            (function (t, n) {
              !0 === n.debug &&
                (Ot
                  ? tt.enable()
                  : console.warn(
                      "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
                    ));
              var e = bt(),
                r = e.getScope();
              r && r.update(n.initialScope);
              var o = new t(n);
              e.bindClient(o);
            })(Le, t),
            t.autoSessionTracking &&
              (function () {
                if (void 0 !== (0, w.R)().document) {
                  var t = bt();
                  t.captureSession &&
                    (er(t),
                    Vt("history", function (t) {
                      var n = t.from,
                        e = t.to;
                      void 0 !== n && n !== e && er(bt());
                    }));
                } else
                  he &&
                    tt.warn(
                      "Session tracking in non-browser environment with @sentry/browser is not supported."
                    );
              })();
        })({
          dsn: a()(window, "cdaaas.SETTINGS.COMMENTS_CONFIG.SENTRY_DSN"),
          beforeSend: sr,
        }),
        window.commentsEl &&
          Dr &&
          (window.ScrollSpy
            ? ScrollSpy.add({
                el: window.commentsEl,
                offset: 850,
                callback: function () {
                  Mr();
                },
              })
            : Mr());
    })();
})();
(() => {
  "use strict";
  var e =
      (window.glb && window.glb.getCurrentEnv && window.glb.getCurrentEnv()) ||
      "qa",
    t = (window.cdaaas && window.cdaaas.SETTINGS) || {},
    n = t.SITE_ID,
    r = {
      g1: "https://recomendacao.globo.com/v3/globocom/ab/G1-NEXT-ARTICLE-item",
      ge: "https://recomendacao.globo.com/v3/globocom/ab/GE-NEXT-ARTICLE-item",
      "dev-beta":
        "https://recomendacao.globo.com/v3/globocom/ab/G1-NEXT-ARTICLE-item",
    }[n],
    i = {
      g1: "https://s3.glbimg.com/v1/AUTH_f75bb4776e3c4683acd769d47144995f/img/thumbs/thumb-auto-next.jpg",
      ge: "https://s3.glbimg.com/v1/AUTH_378ee63fe83141e69caddd838034e850/static/noticia/thumbs/Ge_thumb_svg.svg",
      "dev-beta":
        "https://s3.glbimg.com/v1/AUTH_f75bb4776e3c4683acd769d47144995f/img/thumbs/thumb-auto-next.jpg",
    }[n],
    o = window.location.origin.replace(window.location.protocol, ""),
    a = { credentials: "include" },
    s = document.getElementsByClassName("next-article")[0],
    l = s
      ? s.getElementsByClassName("next-article__wrapper-header-title")[0]
      : null,
    c = s
      ? s.getElementsByClassName("next-article__wrapper-header-icon")[0]
      : null,
    u = s ? s.getElementsByClassName("next-article-desktop-link")[0] : null,
    d = s ? s.getElementsByClassName("next-article-smart-link")[0] : null,
    m = s ? s.getElementsByClassName("next-article-image-desktop")[0] : null,
    h = s ? s.getElementsByClassName("next-article-image")[0] : null,
    v =
      (s &&
        s.getElementsByClassName(
          "next-article__wrapper-header-button-close"
        )[0],
      s ? document.getElementsByClassName("next-article-sticky")[0] : null),
    g = document.getElementById("header-produto"),
    p =
      ("local" === e ||
        "qa" === e ||
        t.IS_PREVIEW ||
        window.location.hash.substr(1),
      ".next-article-sticky");
  function y(e, t) {
    return (
      void 0 === t && (t = window.location.href), new URL(t).searchParams.has(e)
    );
  }
  var f = "[LogHelper] | [Next-Article] ",
    w = "displayLogs";
  const b = class {
    static debug() {
      if (y(w)) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        console.debug(f, ...t);
      }
    }
    static error() {
      if (y(w)) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        console.error(f, ...t);
      }
    }
    static info() {
      if (y(w)) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        console.info(f, ...t);
      }
    }
    static log() {
      if (y(w)) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        console.log(f, ...t);
      }
    }
    static warn() {
      if (y(w)) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        console.warn(f, ...t);
      }
    }
  };
  function x(e, t, n, r, i, o, a) {
    try {
      var s = e[o](a),
        l = s.value;
    } catch (e) {
      return void n(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(r, i);
  }
  function _(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var o = e.apply(t, n);
        function a(e) {
          x(o, r, i, a, s, "next", e);
        }
        function s(e) {
          x(o, r, i, a, s, "throw", e);
        }
        a(void 0);
      });
    };
  }
  function C(e, t, n, r, i, o, a) {
    try {
      var s = e[o](a),
        l = s.value;
    } catch (e) {
      return void n(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(r, i);
  }
  function E(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var o = e.apply(t, n);
        function a(e) {
          C(o, r, i, a, s, "next", e);
        }
        function s(e) {
          C(o, r, i, a, s, "throw", e);
        }
        a(void 0);
      });
    };
  }
  function I(e, t, n, r, i, o, a) {
    try {
      var s = e[o](a),
        l = s.value;
    } catch (e) {
      return void n(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(r, i);
  }
  function A(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var o = e.apply(t, n);
        function a(e) {
          I(o, r, i, a, s, "next", e);
        }
        function s(e) {
          I(o, r, i, a, s, "throw", e);
        }
        a(void 0);
      });
    };
  }
  var T = new (class {
      constructor() {
        (this.horizonv3Client = null), (this._initPromise = null);
      }
      _lazyInit() {
        var e = this;
        return E(function* () {
          return (
            e._initPromise ||
              (e._initPromise = E(function* () {
                try {
                  yield window.globalWebdeps("horizon-v3"),
                    (e.horizonv3Client = window.horizonv3);
                } catch (t) {
                  throw (
                    (b.error(
                      "The following error ocurred while creating an instance of the Horizon:" +
                        t
                    ),
                    (e._initPromise = null),
                    t)
                  );
                }
              })()),
            e._initPromise
          );
        })();
      }
      _ensureClientInitialized() {
        var e = this;
        return E(function* () {
          e.horizonv3Client || (yield e._lazyInit());
        })();
      }
      getHsid() {
        var e = this;
        return E(function* () {
          return (
            yield e._ensureClientInitialized(),
            e.horizonv3Client.IDManager.getHsid()
              .then((e) => e)
              .catch((e) => (b.error("Error:", e), null))
          );
        })();
      }
      getAnonymousUser() {
        var e = this;
        return E(function* () {
          return (
            yield e._ensureClientInitialized(),
            e.horizonv3Client.IDManager.getAnonymousUser()
              .then((e) => e)
              .catch((e) => (b.error("Error:", e), null))
          );
        })();
      }
    })(),
    L = new (class {
      constructor() {
        (this.experimentName = "G1-NEXT-ARTICLE-item"),
          (this.globoABClient = null),
          (this._interactionsSent = []),
          (this._initPromise = null);
      }
      _lazyInit() {
        var t = this;
        return _(function* () {
          return (
            t._initPromise ||
              (t._initPromise = _(function* () {
                try {
                  yield window.globalWebdeps("globo-ab-sdk");
                  var n =
                    "qa" === e || "sandbox_qa" === e
                      ? "qa-https"
                      : "prod-https";
                  (t.globoABClient = new window.GloboAbSdk().ab(n)),
                    t.globoABClient.setTimeout(3e3);
                } catch (e) {
                  throw (
                    (b.error(
                      "The following error ocurred while creating an instance of the AB SDK:" +
                        e
                    ),
                    (t._initPromise = null),
                    e)
                  );
                }
              })()),
            t._initPromise
          );
        })();
      }
      _sendCustom(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        var [i, o, a, s, l, c] = n,
          u = [{ "x-canonical-uri": window.cdaaas.SETTINGS.CANONICAL_URL }];
        b.info(
          "send " +
            e +
            " to experiment " +
            this.experimentName +
            " for alternative " +
            i +
            ", with testId " +
            o
        ),
          "impression" === e
            ? this.globoABClient.impression(
                {
                  experiment: this.experimentName,
                  alternative: i,
                  testId: o,
                  context: [],
                },
                a,
                l,
                s,
                u,
                c
              )
            : "conversion" === e &&
              this.globoABClient.conversion(
                {
                  experiment: this.experimentName,
                  alternative: i,
                  testId: o,
                  context: [],
                },
                a,
                l,
                s,
                u,
                c
              );
      }
      send(e) {
        var t = arguments,
          n = this;
        return _(function* () {
          if ((yield n._lazyInit(), !n._interactionsSent.includes(e))) {
            for (
              var r = t.length, i = new Array(r > 1 ? r - 1 : 0), o = 1;
              o < r;
              o++
            )
              i[o - 1] = t[o];
            n._sendCustom(e, ...i), n._interactionsSent.push(e);
          }
        })();
      }
      sendImpression() {
        var e = arguments,
          t = this;
        return _(function* () {
          for (var n = e.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = e[i];
          yield t.send("impression", ...r);
        })();
      }
      sendConversion() {
        var e = arguments,
          t = this;
        return _(function* () {
          for (var n = e.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = e[i];
          yield t.send("conversion", ...r);
        })();
      }
    })(),
    N = {};
  function S() {
    return (S = A(function* () {
      var e = yield T.getHsid(),
        t = yield T.getAnonymousUser(),
        n = (null == t ? void 0 : t.glb_uid) || "",
        i = e ? "&hsid=" + e : "",
        s = "" + o + (globalThis.location.pathname || ""),
        l = yield fetch(
          r +
            "?perPage=1&responseFormat=legacyPublishing&glb_uid=" +
            n +
            "&anchors.item=" +
            s +
            i,
          a
        )
          .then((e) => e.json())
          .catch((e) =>
            b.error("[Show] - [Next-Article] - [requestData] - [Error]': " + e)
          );
      if (Array.isArray(l) && l.length > 0) {
        var c = l[0],
          {
            alternative: u,
            userId: d,
            hsid: m,
            glbExpIdToken: h,
            trackId: v,
            userIdType: g,
          } = l[0]._experiment_properties;
        return (
          (N = {
            alternative: u,
            userId: d,
            hsIdToken: m,
            glbExpIdToken: h,
            testId: v,
            userIdType: g,
          }),
          L.sendImpression(u, v, d, m, h, g),
          c
        );
      }
      return null;
    })).apply(this, arguments);
  }
  function k() {
    return (
      (k = A(function* () {
        var e = yield (function () {
          return S.apply(this, arguments);
        })();
        e
          ? ((l.innerText = "Sugerida para você"),
            (c.style.backgroundImage =
              "url('https://s3.glbimg.com/v1/AUTH_378ee63fe83141e69caddd838034e850/static/noticia/icons/icon-star.svg')"),
            (u.innerText = e.content.title),
            u.setAttribute("href", e.content.url),
            (d.innerText = e.content.title),
            d.setAttribute("href", e.content.url),
            (m.src = e.content.image ? e.content.image.sizes.XS.url : i),
            m.setAttribute("alt", e.content.title),
            (h.src = e.content.image ? e.content.image.sizes.XS.url : i),
            m.setAttribute("alt", e.content.title),
            h.setAttribute("alt", e.content.title))
          : !e && s && s.remove();
      })),
      k.apply(this, arguments)
    );
  }
  function P() {
    var {
      alternative: e,
      userId: t,
      hsIdToken: n,
      glbExpIdToken: r,
      testId: i,
      userIdType: o,
    } = N;
    L.sendConversion(e, i, t, n, r, o);
  }
  function B(e, t, n, r, i, o, a) {
    try {
      var s = e[o](a),
        l = s.value;
    } catch (e) {
      return void n(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(r, i);
  }
  function z(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var o = e.apply(t, n);
        function a(e) {
          B(o, r, i, a, s, "next", e);
        }
        function s(e) {
          B(o, r, i, a, s, "throw", e);
        }
        a(void 0);
      });
    };
  }
  null == u || u.addEventListener("click", P),
    null == d || d.addEventListener("click", P);
  var q = () => {
      var e;
      (e = () =>
        (() => {
          var e,
            t,
            n = document.createElement("button");
          (n.className = "next-article__wrapper-header-button-close"),
            n.appendChild(
              ((e = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              )),
              (t = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              )),
              e.setAttribute("fill", "none"),
              e.setAttribute("viewBox", "0 0 12 12"),
              e.setAttribute("width", 13),
              e.setAttribute("height", 13),
              e.setAttribute("aria-label", "Fechar"),
              e.classList.add("next-article__wrapper-header-button-close-icon"),
              t.setAttribute(
                "d",
                "M11.2496 0.758431C10.9246 0.433431 10.3996 0.433431 10.0746 0.758431L5.99961 4.8251L1.92461 0.750098C1.59961 0.425098 1.07461 0.425098 0.749609 0.750098C0.424609 1.0751 0.424609 1.6001 0.749609 1.9251L4.82461 6.0001L0.749609 10.0751C0.424609 10.4001 0.424609 10.9251 0.749609 11.2501C1.07461 11.5751 1.59961 11.5751 1.92461 11.2501L5.99961 7.1751L10.0746 11.2501C10.3996 11.5751 10.9246 11.5751 11.2496 11.2501C11.5746 10.9251 11.5746 10.4001 11.2496 10.0751L7.17461 6.0001L11.2496 1.9251C11.5663 1.60843 11.5663 1.0751 11.2496 0.758431Z"
              ),
              e.appendChild(t),
              e)
            );
          var r = document.querySelector(".next-article__wrapper-header");
          r && r.appendChild(n),
            document
              .getElementsByClassName(
                "next-article__wrapper-header-button-close"
              )[0]
              .addEventListener(
                "click",
                z(function* () {
                  v.remove(), s.remove();
                })
              );
        })()),
        "complete" === document.readyState ||
        "loaded" === document.readyState ||
        "interactive" === document.readyState
          ? e()
          : document.addEventListener("DOMContentLoaded", () => e());
    },
    H = 270;
  function U() {
    var e = window.innerWidth <= 480,
      t = g.classList.contains("sticky");
    H = e ? 170 : t ? 235 : 190;
  }
  var G,
    R = () => {
      var e, t, n;
      q(),
        (function () {
          k.apply(this, arguments);
        })(),
        new MutationObserver(() => {
          var e = document.querySelector("#next-article"),
            t = e.classList.contains("sticky-element"),
            n = g.classList.contains("sticky") && t,
            r = g.classList.contains("header-personalized");
          U(),
            r && (e.style.transition = "top 300ms linear"),
            (e.style.top = n ? "53px" : "0px");
        }).observe(g, { attributes: !0, attributeFilter: ["class"] }),
        (n = document.createElement("div")).classList.add("nextElement"),
        (e = n),
        (t = document.querySelector("#next-article")).parentNode.insertBefore(
          e,
          t
        ),
        U(),
        new IntersectionObserver(
          (e) => {
            var t = document.querySelector("#next-article");
            document.querySelector(".nextElement").getBoundingClientRect()
              .top <= H
              ? (t.classList.add("sticky-element"), (t.style.top = "53px"))
              : ((t.style.top = "0px"), t.classList.remove("sticky-element")),
              e[0].isIntersecting && t.classList.remove("sticky-element");
          },
          { rootMargin: -H + "px 0px 0px 0px", threshold: [0, 1] }
        ).observe(document.querySelector(".nextElement"));
    };
  (G = document.querySelector(p)) &&
    new IntersectionObserver(
      (e, t) => {
        var n = !1;
        e.forEach((e) => {
          var r = e.target;
          e.isIntersecting && (n || R(), (n = !0), t.unobserve(r));
        });
      },
      { root: null, rootMargin: "800px", threshold: 0.05 }
    ).observe(G);
})();
(() => {
  var e = {
      517: (e, t, n) => {
        "use strict";
        const i = n(290),
          o = ["__proto__", "prototype", "constructor"];
        function r(e) {
          const t = e.split("."),
            n = [];
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            for (; "\\" === i[i.length - 1] && void 0 !== t[e + 1]; )
              (i = i.slice(0, -1) + "."), (i += t[++e]);
            n.push(i);
          }
          return n.some((e) => o.includes(e)) ? [] : n;
        }
        e.exports = {
          get(e, t, n) {
            if (!i(e) || "string" != typeof t) return void 0 === n ? e : n;
            const o = r(t);
            if (0 !== o.length) {
              for (let t = 0; t < o.length; t++) {
                if (!Object.prototype.propertyIsEnumerable.call(e, o[t]))
                  return n;
                if (null == (e = e[o[t]])) {
                  if (t !== o.length - 1) return n;
                  break;
                }
              }
              return e;
            }
          },
          set(e, t, n) {
            if (!i(e) || "string" != typeof t) return e;
            const o = e,
              a = r(t);
            for (let t = 0; t < a.length; t++) {
              const o = a[t];
              i(e[o]) || (e[o] = {}),
                t === a.length - 1 && (e[o] = n),
                (e = e[o]);
            }
            return o;
          },
          delete(e, t) {
            if (!i(e) || "string" != typeof t) return !1;
            const n = r(t);
            for (let t = 0; t < n.length; t++) {
              const o = n[t];
              if (t === n.length - 1) return delete e[o], !0;
              if (((e = e[o]), !i(e))) return !1;
            }
          },
          has(e, t) {
            if (!i(e) || "string" != typeof t) return !1;
            const n = r(t);
            if (0 === n.length) return !1;
            for (let t = 0; t < n.length; t++) {
              if (!i(e)) return !1;
              if (!(n[t] in e)) return !1;
              e = e[n[t]];
            }
            return !0;
          },
        };
      },
      0: (e) => {
        !(function () {
          "use strict";
          var t = Array.prototype.indexOf,
            n = window.getComputedStyle,
            i = "ellipsis-overflowing-child",
            o = "ellipsis-set",
            r = (function () {
              var e = document.createElement("test"),
                t = {},
                n = {
                  Webkit: ["WebkitColumnCount", "WebkitColumnGap"],
                  Moz: ["MozColumnCount", "MozColumnGap"],
                  ms: ["msColumnCount", "msColumnGap"],
                  "": ["columnCount", "columnGap"],
                };
              for (var i in n)
                n[i][0] in e.style &&
                  ((t.columnCount = n[i][0]),
                  (t.columnGap = n[i][1]),
                  (t[i.toLowerCase()] = !0));
              return t;
            })();
          function a(e, t) {
            e &&
              ((this.el = e),
              (this.container = t && t.container),
              (this.reRender = t && t.reRender));
          }
          function s(e) {
            (e.style.display = "none"),
              (a.r = e.offsetTop),
              (e.style.display = "");
          }
          function l(e, n) {
            if (e)
              for (
                var i = n && n.display,
                  o = e.parentNode.children,
                  r = t.call(o, e) + 1,
                  a = o.length;
                r < a;
                r++
              )
                o[r].style.display = i;
          }
          function d(e, t) {
            return Math.floor(e / t);
          }
          function c(e, t) {
            for (var n = 0, i = e.length; n < i && !t(e[n]); n++);
          }
          function u(e) {
            var t = e.tagName;
            return (
              e.id && (t += "#" + e.id),
              e.className && (t += (" " + e.className).replace(/\s+/g, ".")),
              t
            );
          }
          (a.prototype.calc = function () {
            if (!this.el) return this;
            var e,
              t = n(this.el),
              i = [(e = this.el).offsetWidth, e.offsetHeight];
            return (
              (this.columnHeight = i[1]),
              (this.columnCount = (function (e) {
                return parseInt(e[r.columnCount], 10) || 1;
              })(t)),
              (this.columnGap = (function (e) {
                return parseInt(e[r.columnGap], 10) || 0;
              })(t)),
              (this.columnWidth = i[0] / this.columnCount),
              (this.lineHeight = (function (e, t) {
                var n = t.lineHeight;
                if (n) {
                  if (n.indexOf("px") < 0)
                    throw Error(
                      "The ellipsis container " +
                        u(e) +
                        " must have line-height set using px unit, found: " +
                        n
                    );
                  var i = parseInt(n, 10);
                  if (i) return i;
                }
                throw Error(
                  "The ellipsis container " +
                    u(e) +
                    " must have line-height set on it, found: " +
                    n
                );
              })(this.el, t)),
              (this.deltaHeight = i[1] % this.lineHeight),
              (this.linesPerColumn = Math.floor(
                this.columnHeight / this.lineHeight
              )),
              (this.totalLines = this.linesPerColumn * this.columnCount),
              !this.deltaHeight &&
                this.columnCount > 1 &&
                (this.el.style.height = this.columnHeight + "px"),
              (this.child = this.getOverflowingChild()),
              this
            );
          }),
            (a.prototype.set = function () {
              return this.el && this.child
                ? (this.clampChild(),
                  l(this.child.el, { display: "none" }),
                  this.markContainer(),
                  this)
                : this;
            }),
            (a.prototype.unset = function () {
              return this.el && this.child
                ? ((this.el.style.height = ""),
                  this.unclampChild(this.child),
                  l(this.child.el, { display: "" }),
                  this.unmarkContainer(),
                  (this.child = null),
                  this)
                : this;
            }),
            (a.prototype.destroy = function () {
              return (this.el = this.child = this.container = null), this;
            }),
            (a.prototype.getOverflowingChild = function () {
              var e = this,
                t = {},
                n = 0;
              return (
                c(this.el.children, function (i) {
                  var o,
                    a,
                    s = Math.floor(n / e.linesPerColumn) || 0;
                  if ((n += o = e.getLineCount(i)) >= e.totalLines)
                    return (
                      (a = o - (n - e.totalLines)),
                      (t.el = i),
                      (t.clampedLines = a),
                      (t.clampedHeight = t.clampedLines * e.lineHeight),
                      (t.visibleColumnSpan = e.columnCount - s),
                      (t.gutterSpan = t.visibleColumnSpan - 1),
                      (t.applyTopMargin = e.shouldApplyTopMargin(t)),
                      r.webkit &&
                        t.clampedLines > 1 &&
                        (t.clampedHeight += t.gutterSpan * e.deltaHeight),
                      t
                    );
                }),
                t
              );
            }),
            (a.prototype.getLineCount = function (e) {
              return e.offsetWidth > this.columnWidth
                ? (function (e, t) {
                    var n = e.getClientRects(),
                      i = 0;
                    return (
                      c(n, function (e) {
                        i += d(e.height, t);
                      }),
                      i
                    );
                  })(e, this.lineHeight)
                : d(e.clientHeight, this.lineHeight);
            }),
            (a.prototype.markContainer = function () {
              this.container &&
                (this.container.classList.add(o),
                this.reRender && s(this.container));
            }),
            (a.prototype.unmarkContainer = function () {
              this.container &&
                (this.container.classList.remove(o),
                this.reRender && s(this.container));
            }),
            (a.prototype.shouldApplyTopMargin = function (e) {
              var t = e.el;
              if (
                r.webkit &&
                1 !== this.columnCount &&
                !(this.deltaHeight <= 3) &&
                t.previousElementSibling
              )
                return 0 === t.offsetTop || t.offsetTop === this.columnHeight;
            }),
            (a.prototype.clampChild = function () {
              var e = this.child;
              e &&
                e.el &&
                ((e.el.style.height = e.clampedHeight + "px"),
                r.webkit &&
                  ((e.el.style.webkitLineClamp = e.clampedLines),
                  (e.el.style.display = "-webkit-box"),
                  (e.el.style.webkitBoxOrient = "vertical")),
                this.shouldHideOverflow() && (e.el.style.overflow = "hidden"),
                e.applyTopMargin && (e.el.style.marginTop = "2em"),
                e.el.classList.add(i),
                r.webkit ||
                  ((e.el.style.position = "relative"),
                  (e.helper = e.el.appendChild(this.helperElement()))));
            }),
            (a.prototype.unclampChild = function (e) {
              e &&
                e.el &&
                ((e.el.style.display = ""),
                (e.el.style.height = ""),
                (e.el.style.webkitLineClamp = ""),
                (e.el.style.webkitBoxOrient = ""),
                (e.el.style.marginTop = ""),
                (e.el.style.overflow = ""),
                e.el.classList.remove(i),
                e.helper && e.helper.parentNode.removeChild(e.helper));
            }),
            (a.prototype.helperElement = function () {
              var e,
                t,
                n = document.createElement("span"),
                i = this.child.visibleColumnSpan - 1;
              return (
                (n.className = "ellipsis-helper"),
                (n.style.display = "block"),
                (n.style.height = this.lineHeight + "px"),
                (n.style.width = "5em"),
                (n.style.position = "absolute"),
                (n.style.bottom = 0),
                (n.style.right = 0),
                r.moz &&
                  i &&
                  ((e = -100 * i),
                  (t = -i * this.columnGap),
                  (n.style.right = e + "%"),
                  (n.style.marginRight = t + "px"),
                  (n.style.marginBottom = this.deltaHeight + "px")),
                n
              );
            }),
            (a.prototype.shouldHideOverflow = function () {
              var e = this.columnCount > 1;
              return this.columnHeight < this.lineHeight || !e;
            }),
            (e.exports = function (e, t) {
              return new a(e, t);
            }),
            (e.exports.Ellipsis = a);
        })();
      },
      290: (e) => {
        "use strict";
        e.exports = (e) => {
          const t = typeof e;
          return null !== e && ("object" === t || "function" === t);
        };
      },
      705: (e, t, n) => {
        var i = n(639).Symbol;
        e.exports = i;
      },
      239: (e, t, n) => {
        var i = n(705),
          o = n(607),
          r = n(333),
          a = i ? i.toStringTag : void 0;
        e.exports = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : a && a in Object(e)
            ? o(e)
            : r(e);
        };
      },
      561: (e, t, n) => {
        var i = n(990),
          o = /^\s+/;
        e.exports = function (e) {
          return e ? e.slice(0, i(e) + 1).replace(o, "") : e;
        };
      },
      957: (e, t, n) => {
        var i = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        e.exports = i;
      },
      607: (e, t, n) => {
        var i = n(705),
          o = Object.prototype,
          r = o.hasOwnProperty,
          a = o.toString,
          s = i ? i.toStringTag : void 0;
        e.exports = function (e) {
          var t = r.call(e, s),
            n = e[s];
          try {
            e[s] = void 0;
            var i = !0;
          } catch (e) {}
          var o = a.call(e);
          return i && (t ? (e[s] = n) : delete e[s]), o;
        };
      },
      333: (e) => {
        var t = Object.prototype.toString;
        e.exports = function (e) {
          return t.call(e);
        };
      },
      639: (e, t, n) => {
        var i = n(957),
          o = "object" == typeof self && self && self.Object === Object && self,
          r = i || o || Function("return this")();
        e.exports = r;
      },
      990: (e) => {
        var t = /\s/;
        e.exports = function (e) {
          for (var n = e.length; n-- && t.test(e.charAt(n)); );
          return n;
        };
      },
      567: (e, t, n) => {
        var i = n(554);
        e.exports = function (e, t) {
          var n;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          return (
            (e = i(e)),
            function () {
              return (
                --e > 0 && (n = t.apply(this, arguments)),
                e <= 1 && (t = void 0),
                n
              );
            }
          );
        };
      },
      279: (e, t, n) => {
        var i = n(218),
          o = n(771),
          r = n(841),
          a = Math.max,
          s = Math.min;
        e.exports = function (e, t, n) {
          var l,
            d,
            c,
            u,
            h,
            p,
            v = 0,
            m = !1,
            g = !1,
            f = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function y(t) {
            var n = l,
              i = d;
            return (l = d = void 0), (v = t), (u = e.apply(i, n));
          }
          function _(e) {
            var n = e - p;
            return void 0 === p || n >= t || n < 0 || (g && e - v >= c);
          }
          function w() {
            var e = o();
            if (_(e)) return b(e);
            h = setTimeout(
              w,
              (function (e) {
                var n = t - (e - p);
                return g ? s(n, c - (e - v)) : n;
              })(e)
            );
          }
          function b(e) {
            return (h = void 0), f && l ? y(e) : ((l = d = void 0), u);
          }
          function I() {
            var e = o(),
              n = _(e);
            if (((l = arguments), (d = this), (p = e), n)) {
              if (void 0 === h)
                return (function (e) {
                  return (v = e), (h = setTimeout(w, t)), m ? y(e) : u;
                })(p);
              if (g) return clearTimeout(h), (h = setTimeout(w, t)), y(p);
            }
            return void 0 === h && (h = setTimeout(w, t)), u;
          }
          return (
            (t = r(t) || 0),
            i(n) &&
              ((m = !!n.leading),
              (c = (g = "maxWait" in n) ? a(r(n.maxWait) || 0, t) : c),
              (f = "trailing" in n ? !!n.trailing : f)),
            (I.cancel = function () {
              void 0 !== h && clearTimeout(h),
                (v = 0),
                (l = p = d = h = void 0);
            }),
            (I.flush = function () {
              return void 0 === h ? u : b(o());
            }),
            I
          );
        };
      },
      218: (e) => {
        e.exports = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        };
      },
      5: (e) => {
        e.exports = function (e) {
          return null != e && "object" == typeof e;
        };
      },
      448: (e, t, n) => {
        var i = n(239),
          o = n(5);
        e.exports = function (e) {
          return "symbol" == typeof e || (o(e) && "[object Symbol]" == i(e));
        };
      },
      771: (e, t, n) => {
        var i = n(639);
        e.exports = function () {
          return i.Date.now();
        };
      },
      463: (e, t, n) => {
        var i = n(567);
        e.exports = function (e) {
          return i(2, e);
        };
      },
      493: (e, t, n) => {
        var i = n(279),
          o = n(218);
        e.exports = function (e, t, n) {
          var r = !0,
            a = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          return (
            o(n) &&
              ((r = "leading" in n ? !!n.leading : r),
              (a = "trailing" in n ? !!n.trailing : a)),
            i(e, t, { leading: r, maxWait: t, trailing: a })
          );
        };
      },
      601: (e, t, n) => {
        var i = n(841);
        e.exports = function (e) {
          return e
            ? Infinity === (e = i(e)) || e === -1 / 0
              ? 17976931348623157e292 * (e < 0 ? -1 : 1)
              : e == e
              ? e
              : 0
            : 0 === e
            ? e
            : 0;
        };
      },
      554: (e, t, n) => {
        var i = n(601);
        e.exports = function (e) {
          var t = i(e),
            n = t % 1;
          return t == t ? (n ? t - n : t) : 0;
        };
      },
      841: (e, t, n) => {
        var i = n(561),
          o = n(218),
          r = n(448),
          a = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          d = parseInt;
        e.exports = function (e) {
          if ("number" == typeof e) return e;
          if (r(e)) return NaN;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = i(e);
          var n = s.test(e);
          return n || l.test(e)
            ? d(e.slice(2), n ? 2 : 8)
            : a.test(e)
            ? NaN
            : +e;
        };
      },
    },
    t = {};
  function n(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var r = (t[i] = { exports: {} });
    return e[i](r, r.exports, n), r.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = {
        NAVIGATION_NEXT: "NAVIGATION_NEXT",
        NAVIGATION_PREVIOUS: "NAVIGATION_PREVIOUS",
        VIDEO_PLAY: "VIDEO_PLAY",
        VIDEO_END: "VIDEO_END",
        VIDEO_ON_VIEWPORT: "VIDEO_ON_VIEWPORT",
      };
      var t,
        i = n(0),
        o = n.n(i),
        r = (null == (t = window.cdaaas) ? void 0 : t.SETTINGS) || {},
        a = "shadow-video-flow",
        s = r.SITE_ID,
        l =
          (r.MOBILE_GROUP,
          "sandbox_qa" !== window.SHADOW_VIDEO_FLOW_ENV
            ? window.SHADOW_VIDEO_FLOW_ENV
            : "local"),
        d =
          "local" === l ||
          "qa" === l ||
          r.IS_PREVIEW ||
          window.location.hash.substr(1) === a + "-debug"
            ? "debug"
            : "warn",
        c = a,
        u = "." + c,
        h = "prod" === l ? l : "qa",
        p =
          (r.IS_PREVIEW,
          "https://recomendacao.globo.com/v3/globocom/ab/" +
            s.toUpperCase() +
            "-VIDEOS-MC-SHADOW-item?perPage=10"),
        v = {
          METHOD: {
            g1: "g1_portal.send",
            gshow: "gshow_portal.send",
            ge: "ge_portal.send",
          }[s],
          CATEGORY: a,
          METRIC_ID: { g1: "G-4DF8YFDHV7", ge: "G-K8B6Y0T4CS" }[s],
        },
        m = Boolean(window.Element.prototype.animate),
        g = {
          0: "jan",
          1: "fev",
          2: "mar",
          3: "abr",
          4: "mai",
          5: "jun",
          6: "jul",
          7: "ago",
          8: "set",
          9: "out",
          10: "nov",
          11: "dez",
        };
      function f(e) {
        var t = console[e] ? e : "log";
        if ("log" !== t || "debug" === d) {
          for (
            var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            i[o - 1] = arguments[o];
          console[t]("[ShadowVideoFlowComponent]", ...i);
        }
      }
      function y(e) {
        return ("0" + e).slice(-2);
      }
      function _(e, t) {
        return "function" == typeof e[t]
          ? e[t].bind(e)
          : Object.getPrototypeOf(e).constructor[t];
      }
      function w(e) {
        return c + e;
      }
      var b = (e) => {
        var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
        return t ? t[2].replace(/(^"|"$)/g, "") : "";
      };
      class I {
        constructor() {
          this._promise = new Promise((e) => {
            this._resolve = e;
          });
        }
        then(e) {
          this._promise.then(e);
        }
        resolve() {
          this._resolve();
        }
      }
      function T(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function x(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              T(r, i, o, a, s, "next", e);
            }
            function s(e) {
              T(r, i, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var E = {};
      class A {
        static getListeners(e) {
          return (E[e] = E[e] || []), E[e];
        }
        static register(e, t) {
          A.getListeners(e).push(t);
        }
        static send(e, t) {
          return x(function* () {
            void 0 === t && (t = {});
            var n = A.getListeners(e);
            f(
              "log",
              "Interação " +
                e +
                " enviada, os seguintes listeners serão executados:",
              n,
              "context:",
              t
            ),
              yield Promise.all(
                n.map(
                  (function () {
                    var e = x(function* (e) {
                      return e(t);
                    });
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                )
              );
          })();
        }
      }
      const C = A,
        N = class {
          constructor(e, t) {
            void 0 === t && (t = {}),
              (this.itemList = e),
              (this.options = t),
              (this.currentItemIndex = 0),
              (this.navigateToPrevious = this.navigateToPrevious.bind(this)),
              (this.navigateToNext = this.navigateToNext.bind(this)),
              (this.userNavigateToPrevious =
                this.userNavigateToPrevious.bind(this)),
              (this.userNavigateToNext = this.userNavigateToNext.bind(this));
          }
          getItem(e) {
            return (
              void 0 === e && (e = this.currentItemIndex), this.itemList[e]
            );
          }
          get nextItem() {
            return this.getItem(this.currentItemIndex + 1);
          }
          get previousItem() {
            return this.getItem(this.currentItemIndex - 1);
          }
          get currentItem() {
            return this.getItem();
          }
          get context() {
            return {
              previousItem: this.previousItem,
              currentItem: this.currentItem,
              nextItem: this.nextItem,
              currentIndex: this.currentItemIndex,
            };
          }
          _navigateTo(e) {
            (this.currentItemIndex = e),
              this.options.onNavigate && this.options.onNavigate();
          }
          _sendInteraction(e) {
            var t = this.context.nextItem
              ? this.context.nextItem.content.video.id
              : this.context.currentItem.content.video.id;
            C.send(e, {
              position: this.currentItemIndex + 1,
              videoId: t,
              videoTitle: this.context.currentItem.content.title,
              videoURL: this.context.currentItem.content.url,
              componentItem: e,
              componentLabel: "NAVIGATION_NEXT" === e ? "Próximo" : "Anterior",
              componentPosition:
                "NAVIGATION_NEXT" === e
                  ? document
                      .getElementsByClassName(
                        "shadow-video-flow-navigation__button-next"
                      )[0]
                      .getBoundingClientRect().top + window.scrollY
                  : document
                      .getElementsByClassName(
                        "shadow-video-flow-navigation__button-prev"
                      )[0]
                      .getBoundingClientRect().top + window.scrollY,
            });
          }
          navigateToPrevious() {
            this._navigateTo(this.currentItemIndex - 1);
          }
          navigateToNext() {
            this._navigateTo(this.currentItemIndex + 1);
          }
          userNavigateToPrevious() {
            this.currentItemIndex > 0 &&
              (this.navigateToPrevious(),
              this._sendInteraction(e.NAVIGATION_PREVIOUS));
          }
          userNavigateToNext() {
            this.currentItemIndex < this.itemList.length &&
              (this.navigateToNext(), this._sendInteraction(e.NAVIGATION_NEXT));
          }
        };
      var P = n(463),
        O = n.n(P);
      function S(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function R(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              S(r, i, o, a, s, "next", e);
            }
            function s(e) {
              S(r, i, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      const D = class {
        constructor(e) {
          (this.experimentName = e),
            (this.globoABClient = null),
            (this._interactionsSent = []);
        }
        init() {
          var e = this;
          return R(function* () {
            try {
              yield window.globalWebdeps("globo-ab-sdk"),
                yield (function (e, t) {
                  if ("object" != typeof t)
                    throw new Error(
                      "options must be an object with timeout and/or interval."
                    );
                  var { interval: n = 10, timeout: i } = t;
                  return new Promise((t, o) => {
                    var r = new Date().getTime();
                    !(function a() {
                      var s = !!e;
                      if (s) return t(s);
                      var l = new Date().getTime();
                      if (i && l - r >= i)
                        return o(
                          new Error(
                            "variable " + e + " access attempt time exceeded"
                          )
                        );
                      window.setTimeout(a, n);
                    })();
                  });
                })(window.GloboAbSdk, { timout: 200 });
              var t =
                "qa" === h || "sandbox_qa" === h ? "qa-http" : "prod-https";
              (e.globoABClient = new window.GloboAbSdk().ab(t)),
                e.globoABClient.setTimeout(3e3);
            } catch (e) {
              f(
                "error",
                "[show-shadow-video-flow-section] not possible create instance SDK AB",
                e
              );
            }
          })();
        }
        _send(e) {
          return (
            f(
              "log",
              "Enviando " + e + " para o experimento " + this.experimentName,
              this.experimentInstance
            ),
            this.experimentInstance[e]()
          );
        }
        _sendCustom(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            n[i - 1] = arguments[i];
          var [o, r, a, s, l, d] = n;
          f(
            "log",
            "Enviando " +
              e +
              " para o experimento " +
              this.experimentName +
              " para alternativa " +
              o,
            "com testId " + r + " e originURL " + d
          ),
            "impression" === e
              ? this.globoABClient.impression(
                  {
                    experiment: this.experimentName,
                    alternative: o,
                    testId: r,
                    context: [],
                  },
                  a,
                  l,
                  s
                )
              : this.globoABClient.conversion(
                  {
                    experiment: this.experimentName,
                    alternative: o,
                    testId: r,
                    context: [],
                  },
                  a,
                  l,
                  s
                );
        }
        send(e) {
          var t = arguments,
            n = this;
          return R(function* () {
            if (!n._interactionsSent.includes(e))
              try {
                if (n.experimentInstance) n._send(e);
                else {
                  for (
                    var i = t.length, o = new Array(i > 1 ? i - 1 : 0), r = 1;
                    r < i;
                    r++
                  )
                    o[r - 1] = t[r];
                  n._sendCustom(e, ...o);
                }
                n._interactionsSent.push(e);
              } catch (t) {
                f(
                  "error",
                  "Falha ao enviar " +
                    e +
                    " para teste AB: " +
                    n.experimentName +
                    "."
                ),
                  f("error", t);
              }
          })();
        }
        choose() {
          var e = this;
          return R(function* () {
            try {
              e.experimentInstance = yield e.globoABClient.choose([
                e.experimentName,
              ]);
            } catch (t) {
              throw (
                (f(
                  "error",
                  "Falha ao escolher uma alternativa para teste AB: " +
                    e.experimentName +
                    "."
                ),
                f("error", t),
                t)
              );
            }
            return e.experimentInstance;
          })();
        }
        sendImpression() {
          var e = arguments,
            t = this;
          return R(function* () {
            for (var n = e.length, i = new Array(n), o = 0; o < n; o++)
              i[o] = e[o];
            yield t.send("impression", ...i);
          })();
        }
        sendConversion() {
          var e = arguments,
            t = this;
          return R(function* () {
            for (var n = e.length, i = new Array(n), o = 0; o < n; o++)
              i[o] = e[o];
            yield t.send("conversion", ...i);
          })();
        }
      };
      function V(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function k(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              V(r, i, o, a, s, "next", e);
            }
            function s(e) {
              V(r, i, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var L = {},
        M = { credentials: "include" };
      class U {
        constructor() {
          (this.videos = null),
            C.register(
              e.VIDEO_PLAY,
              this.buildAndSendVideoConversion.bind(this)
            ),
            C.register(
              e.NAVIGATION_NEXT,
              this.buildAndSendVideoImpression.bind(this)
            ),
            C.register(
              e.VIDEO_ON_CAROUSEL,
              this.buildAndSendVideoImpression.bind(this)
            ),
            C.register(
              e.VIDEO_ON_VIEWPORT,
              O()(this.buildAndSendFirstVideoImpression.bind(this))
            );
        }
        static _getEndpoint(e) {
          var t = e;
          return (
            (t += "&responseFormat=legacyPublishing") +
            "&anchors.item=" +
            globalThis.location.origin.substring(6) +
            globalThis.location.pathname
          );
        }
        static _requestData(e) {
          return k(function* () {
            var t = U._getEndpoint(e);
            try {
              return (yield fetch(t, M)).json();
            } catch (e) {
              throw new Error(
                "Fail to get recommendated videos from URL " + t,
                e
              );
            }
          })();
        }
        getVideos(e) {
          var t = this;
          return k(function* () {
            return (
              null === t.videos && (t.videos = yield U._requestData(e)),
              t.videos
            );
          })();
        }
        getVideoById(e) {
          return this.videos.find(
            (t) => t.content.video.id === parseInt(e, 10)
          );
        }
        static getVideoAlternativeData(e, t) {
          return k(function* () {
            var {
                experiment: n,
                alternative: i,
                trackId: o,
                userId: r,
                hsid: a,
                glbExpIdToken: s,
              } = e._experiment_properties,
              l = L[t];
            return (
              l || ((l = new D(n)), yield l.init(), (L[t] = l)),
              {
                abClient: l,
                alternative: i,
                testId: o,
                userId: r,
                hsIdToken: a,
                glbExpIdToken: s,
              }
            );
          })();
        }
        buildAndSendVideoConversion(e) {
          var t = this;
          return k(function* () {
            var { videoId: n } = e,
              i = t.getVideoById(n);
            if (i) {
              var {
                  abClient: o,
                  alternative: r,
                  testId: a,
                  userId: s,
                  hsIdToken: l,
                  glbExpIdToken: d,
                } = yield U.getVideoAlternativeData(i, n),
                c = i.content.video.url;
              o.sendConversion(r, a, s, l, d, c);
            }
          })();
        }
        buildAndSendVideoImpression(e) {
          var t = this;
          return k(function* () {
            var { videoId: n, position: i } = e,
              o = t.getVideoById(n);
            if (o) {
              var {
                  abClient: r,
                  alternative: a,
                  testId: s,
                  userId: l,
                  hsIdToken: d,
                  glbExpIdToken: c,
                } = yield U.getVideoAlternativeData(o, n),
                u = o.content.video.url;
              i
                ? r.sendImpression(a, s, l, d, c, u, i)
                : r.sendImpression(a, s, l, d, c, u, "null");
            }
          })();
        }
        buildAndSendFirstVideoImpression() {
          var e = this;
          return k(function* () {
            e.buildAndSendVideoImpression({
              videoId: e.videos[0].content.video.id,
            });
          })();
        }
      }
      const F = U;
      var G = n(517),
        H = w("__pre-rendered");
      function j(e, t, n) {
        return e.classList && e.classList[t](n);
      }
      const q = class {
        constructor(e) {
          (this.documentFragment = e),
            (this.nodeArray = Array.from(this.documentFragment.childNodes)),
            (this.inserted = !1);
        }
        querySelectorAll(e) {
          return this.nodeArray.reduce(
            (t, n) => (
              n.matches &&
                n.querySelectorAll &&
                (n.matches(e)
                  ? t.push(n)
                  : (t = t.concat(Array.from(n.querySelectorAll(e))))),
              t
            ),
            []
          );
        }
        querySelector(e) {
          return this.querySelectorAll(e)[0];
        }
        insertInto(e) {
          this.inserted
            ? f(
                "warn",
                "Elements",
                this.nodeArray,
                "already inserted to the DOM."
              )
            : (this.nodeArray.forEach((e) => j(e, "add", H)),
              e.appendChild(this.documentFragment),
              (this.inserted = !0));
        }
        show() {
          this.nodeArray.forEach((e) => j(e, "remove", H));
        }
      };
      class W {
        constructor(e) {
          this.templateNode = e;
        }
        static _fillContent(e, t) {
          e.querySelectorAll("[data-property-name]").forEach((e) => {
            e.textContent = (0, G.get)(t, e.dataset.propertyName) || "";
          });
        }
        createElement() {
          return this.templateNode.cloneNode(!0);
        }
        render(e) {
          void 0 === e && (e = {});
          var t = this.createElement();
          return W._fillContent(t, e), new q(t);
        }
      }
      const B = W,
        Y = {
          FADE_IN: [{ opacity: 0 }, { opacity: 1 }],
          FADE_OUT: [{ opacity: 1 }, { opacity: 0 }],
          FADE_IN_FROM_RIGHT: [
            { left: "40px", opacity: 0 },
            { left: "0", opacity: 0.5 },
            { left: "0", opacity: 1 },
          ],
          FADE_OUT_TO_LEFT: [
            { left: 0, opacity: 1 },
            { left: "-40px", opacity: 0.5 },
            { left: "-40px", opacity: 0 },
          ],
          FADE_IN_FROM_LEFT: [
            { left: "-40px", opacity: 0 },
            { left: "0", opacity: 0.5 },
            { left: "0", opacity: 1 },
          ],
          FADE_OUT_TO_RIGHT: [
            { left: 0, opacity: 1 },
            { left: "40px", opacity: 0.5 },
            { left: "40px", opacity: 0 },
          ],
        };
      function Q(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      var z = { duration: 400, fill: "forwards", easing: "ease-in-out" };
      const X = class {
        constructor(e, t) {
          (this.options = t),
            (this.elementArray = Array.from(e).filter((e) => e.animate)),
            (this._promiseToFinish = null);
        }
        playElement(e) {
          var t = e.animate(this.options.keyframes, z);
          return new Promise((e) => {
            t.onfinish = e;
          });
        }
        play() {
          var e = this;
          return (
            null === this._promiseToFinish &&
              (this._promiseToFinish = Promise.all(
                this.elementArray.map(
                  (function () {
                    var t,
                      n =
                        ((t = function* (t) {
                          return e.playElement(t);
                        }),
                        function () {
                          var e = this,
                            n = arguments;
                          return new Promise(function (i, o) {
                            var r = t.apply(e, n);
                            function a(e) {
                              Q(r, i, o, a, s, "next", e);
                            }
                            function s(e) {
                              Q(r, i, o, a, s, "throw", e);
                            }
                            a(void 0);
                          });
                        });
                    return function (e) {
                      return n.apply(this, arguments);
                    };
                  })()
                )
              )),
            this._promiseToFinish
          );
        }
      };
      function $(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function K(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              $(r, i, o, a, s, "next", e);
            }
            function s(e) {
              $(r, i, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      const J = class {
          constructor(e, t) {
            void 0 === t && (t = {}),
              (this.containerEl = e),
              (this.events = t),
              (this.template = new B(e.querySelector("template").content)),
              (this._animationPromise = null),
              (this._animationPromiseResolve = null);
          }
          static beforeUpdate() {}
          static afterUpdate() {}
          hasUpdateAnimation() {
            return m && this.updateAnimation;
          }
          animatedHide(e) {
            var t = this;
            return K(function* () {
              if (t.hasUpdateAnimation()) {
                var n = new X(e, { keyframes: t.updateAnimation.hide });
                yield n.play();
              }
              !(function (e, t) {
                t.forEach((t) => t.parentElement && e.removeChild(t));
              })(t.containerEl, e);
            })();
          }
          animatedShow(e) {
            var t = this;
            return K(function* () {
              if (t.hasUpdateAnimation()) {
                var n = new X(e.nodeArray, {
                  keyframes: t.updateAnimation.show,
                });
                yield n.play();
              }
              e.show();
            })();
          }
          animatedReplace(e, t) {
            var n = this;
            return K(function* () {
              yield Promise.all([n.animatedShow(t), n.animatedHide(e)]),
                n._animationPromiseResolve();
            })();
          }
          prepareAnimatedReaplce() {
            this._animationPromise = new Promise((e) => {
              this._animationPromiseResolve = e;
            });
          }
          animationEnds() {
            return this._animationPromise;
          }
          render(e) {
            void 0 === e && (e = {});
            var t = this.template.render(e),
              n = Array.from(this.containerEl.children);
            return (
              this.prepareAnimatedReaplce(),
              _(this, "beforeUpdate")(t, e),
              t.insertInto(this.containerEl),
              _(this, "afterUpdate")(t, e),
              this.animatedReplace(n, t),
              t
            );
          }
          update(e) {
            return void 0 === e && (e = {}), this.render(e);
          }
        },
        Z = class extends J {
          constructor() {
            super(...arguments),
              (this.updateAnimation = { hide: Y.FADE_OUT, show: Y.FADE_IN });
          }
          static afterUpdate(e) {
            !(function (e) {
              if (null !== e) {
                var t = o()(e);
                t.calc(), t.set();
              }
            })(e.querySelector(u + "-video-info__description"));
          }
          update(e) {
            this.render(e.currentItem.content);
          }
        };
      var ee = {
        g1:
          "prod" ===
          ((window.glb &&
            window.glb.getCurrentEnv &&
            window.glb.getCurrentEnv()) ||
            "qa")
            ? "barra@apps.globoid"
            : "barra-qa@apps.globoid",
      }[((window.cdaaas && window.cdaaas.SETTINGS) || {}).SITE_ID];
      function te(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function ne(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              te(r, i, o, a, s, "next", e);
            }
            function s(e) {
              te(r, i, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      class ie {
        static hash(e, t) {
          var n,
            i = Object.assign({ msgFormat: "string", outFormat: "hex" }, t);
          switch (i.msgFormat) {
            default:
            case "string":
              e = (function (e) {
                try {
                  return new TextEncoder()
                    .encode(e, "utf-8")
                    .reduce((e, t) => e + String.fromCharCode(t), "");
                } catch (t) {
                  return unescape(encodeURIComponent(e));
                }
              })(e);
              break;
            case "hex-bytes":
              e =
                "" == (n = e.replace(" ", ""))
                  ? ""
                  : n
                      .match(/.{2}/g)
                      .map((e) => String.fromCharCode(parseInt(e, 16)))
                      .join("");
          }
          for (
            var o = [
                1116352408, 1899447441, 3049323471, 3921009573, 961987163,
                1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                607225278, 1426881987, 1925078388, 2162078206, 2614888103,
                3248222580, 3835390401, 4022224774, 264347078, 604807628,
                770255983, 1249150122, 1555081692, 1996064986, 2554220882,
                2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
                113926993, 338241895, 666307205, 773529912, 1294757372,
                1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
                3600352804, 4094571909, 275423344, 430227734, 506948616,
                659060556, 883997877, 958139571, 1322822218, 1537002063,
                1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
                2428436474, 2756734187, 3204031479, 3329325298,
              ],
              r = [
                1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
                2600822924, 528734635, 1541459225,
              ],
              a = (e += String.fromCharCode(128)).length / 4 + 2,
              s = Math.ceil(a / 16),
              l = new Array(s),
              d = 0;
            d < s;
            d++
          ) {
            l[d] = new Array(16);
            for (var c = 0; c < 16; c++)
              l[d][c] =
                (e.charCodeAt(64 * d + 4 * c + 0) << 24) |
                (e.charCodeAt(64 * d + 4 * c + 1) << 16) |
                (e.charCodeAt(64 * d + 4 * c + 2) << 8) |
                (e.charCodeAt(64 * d + 4 * c + 3) << 0);
          }
          var u = (8 * (e.length - 1)) / Math.pow(2, 32),
            h = (8 * (e.length - 1)) >>> 0;
          (l[s - 1][14] = Math.floor(u)), (l[s - 1][15] = h);
          for (var p = 0; p < s; p++) {
            for (var v = new Array(64), m = 0; m < 16; m++) v[m] = l[p][m];
            for (var g = 16; g < 64; g++)
              v[g] =
                (ie.σ1(v[g - 2]) + v[g - 7] + ie.σ0(v[g - 15]) + v[g - 16]) >>>
                0;
            for (
              var f = r[0],
                y = r[1],
                _ = r[2],
                w = r[3],
                b = r[4],
                I = r[5],
                T = r[6],
                x = r[7],
                E = 0;
              E < 64;
              E++
            ) {
              var A = x + ie.Σ1(b) + ie.Ch(b, I, T) + o[E] + v[E],
                C = ie.Σ0(f) + ie.Maj(f, y, _);
              (x = T),
                (T = I),
                (I = b),
                (b = (w + A) >>> 0),
                (w = _),
                (_ = y),
                (y = f),
                (f = (A + C) >>> 0);
            }
            (r[0] = (r[0] + f) >>> 0),
              (r[1] = (r[1] + y) >>> 0),
              (r[2] = (r[2] + _) >>> 0),
              (r[3] = (r[3] + w) >>> 0),
              (r[4] = (r[4] + b) >>> 0),
              (r[5] = (r[5] + I) >>> 0),
              (r[6] = (r[6] + T) >>> 0),
              (r[7] = (r[7] + x) >>> 0);
          }
          for (var N = 0; N < r.length; N++)
            r[N] = ("00000000" + r[N].toString(16)).slice(-8);
          var P = "hex-w" == i.outFormat ? " " : "";
          return r.join(P).toUpperCase();
        }
        static ROTR(e, t) {
          return (t >>> e) | (t << (32 - e));
        }
        static Σ0(e) {
          return ie.ROTR(2, e) ^ ie.ROTR(13, e) ^ ie.ROTR(22, e);
        }
        static Σ1(e) {
          return ie.ROTR(6, e) ^ ie.ROTR(11, e) ^ ie.ROTR(25, e);
        }
        static σ0(e) {
          return ie.ROTR(7, e) ^ ie.ROTR(18, e) ^ (e >>> 3);
        }
        static σ1(e) {
          return ie.ROTR(17, e) ^ ie.ROTR(19, e) ^ (e >>> 10);
        }
        static Ch(e, t, n) {
          return (e & t) ^ (~e & n);
        }
        static Maj(e, t, n) {
          return (e & t) ^ (e & n) ^ (t & n);
        }
      }
      const oe = ie;
      function re() {
        return (
          (re = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          re.apply(this, arguments)
        );
      }
      function ae(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function se(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              ae(r, i, o, a, s, "next", e);
            }
            function s(e) {
              ae(r, i, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var le = (e, t) => (e ? e + "&" : "") + new URLSearchParams(t).toString(),
        de = () => {
          var e, t, n;
          return {
            productUA:
              window.gaId ||
              (null == (e = window.cdaaas) ? void 0 : e.SETTINGS.PRODUCT_UA) ||
              "",
            extras: {
              dimension1: "web",
              dimension98:
                (null == (t = window.dataLayer) ||
                null == (t = t.find((e) => "bd_suser_provider" in e))
                  ? void 0
                  : t.bd_suser_provider) || "",
              dimension99:
                (null == (n = window.dataLayer) ||
                null == (n = n.find((e) => "bd_suser_code" in e))
                  ? void 0
                  : n.bd_suser_code) || "",
            },
          };
        },
        ce = () => {
          return {
            ga: de(),
            ga4:
              ((i = {
                ga4MetricId: "G-4DF8YFDHV7",
                user_code: "",
                user_code_provider: "",
              }),
              null != (e = window.libAnalytics) && e.status.dataAvailable
                ? ((i.user_code =
                    window.libAnalytics.data.get("user_code").user_code),
                  (i.user_code_provider =
                    window.libAnalytics.data.get(
                      "user_code_provider"
                    ).user_code_provider))
                : ((i.user_code =
                    (null == (t = window.dataLayer) ||
                    null == (t = t.find((e) => "bd_suser_code" in e))
                      ? void 0
                      : t.bd_suser_code) || ""),
                  (i.user_code_provider =
                    (null == (n = window.dataLayer) ||
                    null == (n = n.find((e) => "bd_suser_provider" in e))
                      ? void 0
                      : n.bd_suser_provider) || "")),
              {
                user_id: i.user_code,
                endpoint_keys: { measurementId: i.ga4MetricId },
                user_properties: {
                  user_code_provider: i.user_code_provider,
                  user_code: i.user_code,
                },
              }),
          };
          var e, t, n, i;
        };
      function ue() {
        return (
          (ue = se(function* () {
            var e = (window.cdaaas || {}).SETTINGS || {},
              t = {
                hostWebmedia: e.HOST_WEBMEDIA,
                adUnit: e.TAG_MANAGER_AD_UNIT,
                adCustomData: e.TAG_MANAGER_AD_CUSTOM_DATA,
                extras: e.TAG_MANAGER_AD_EXTRAS,
                gaProductUA: e.PRODUCT_UA,
              };
            try {
              var n = yield new Promise((e) => {
                var t = window.glb.globoIdClientMap.getGloboIdClient(ee);
                (t.stageQueueMap.applicationUsageStageQueue =
                  t.stageQueueMap.applicationUsageStageQueue || []),
                  t.stageQueueMap.applicationUsageStageQueue.push(
                    (function () {
                      var t = ne(function* (t) {
                        try {
                          var n = yield t.loadUserInfo();
                          e(n);
                        } catch (t) {
                          e(void 0);
                        }
                      });
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
              });
              if (n && Object.keys(n).length > 0) {
                var i = yield new Promise((e) => {
                    var t = window.glb.globoIdClientMap.getGloboIdClient(ee);
                    (t.stageQueueMap.applicationUsageStageQueue =
                      t.stageQueueMap.applicationUsageStageQueue || []),
                      t.stageQueueMap.applicationUsageStageQueue.push(
                        (function () {
                          var t = ne(function* (t) {
                            var n = yield t.authorize([6870]);
                            e(n);
                          });
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()
                      );
                  }),
                  o = "authorized" === i[0].status;
                (t.adCustomData = le(t.adCustomData, {
                  "ext-bsafety": window.utag_data["ext-bsafety"] || "",
                  glb_id: (o && n.globo_id) || b("glb_uid"),
                  glb_tipo: o ? "logado" : "anonimo",
                  ambient: "web",
                  tipo_pagina: window.utag_data.tipo_pagina,
                  tvg_pgName: window.cdaaas.SETTINGS.TITLE,
                })),
                  (t.adPublisherProvidedID = o ? oe.hash(n.globo_id) : "");
              } else (t.adCustomData = le(t.adCustomData, { "ext-bsafety": window.utag_data["ext-bsafety"] || "", glb_id: b("glb_uid"), glb_tipo: "anonimo", ambient: "web", tipo_pagina: window.utag_data.tipo_pagina, tvg_pgName: window.cdaaas.SETTINGS.TITLE })), (t.adPublisherProvidedID = "");
            } catch (e) {
              f("warn", e);
            }
            return re(
              {
                width: "100%",
                height: "100%",
                webmedia_url: t.hostWebmedia,
                adUnit: t.adUnit,
                adCustomData: t.adCustomData,
                adPublisherProvidedID: t.adPublisherProvidedID,
                events: {},
                extras: t.extras,
                plugins: { container: [] },
              },
              ce()
            );
          })),
          ue.apply(this, arguments)
        );
      }
      function he() {
        return (
          (he = se(function* (e, t, n) {
            void 0 === n && (n = {});
            var i,
              o = yield (function () {
                return ue.apply(this, arguments);
              })();
            return (
              t &&
                ((o.videosIDs = parseInt(e, 10)),
                (o.events = n),
                !WM &&
                  globalThis.getPlayerAssetsManager &&
                  (yield globalThis.getPlayerAssetsManager(),
                  yield globalThis.playerAssetsManager.getAsset(
                    globalThis.playerAssetsManager.config.WM
                  )),
                yield WM.playerAvailable,
                (i = new WM.Player(o)).attachTo(t)),
              i
            );
          })),
          he.apply(this, arguments)
        );
      }
      function pe(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      var ve = w("__player-container--loaded"),
        me = {
          next: { hide: Y.FADE_OUT_TO_LEFT, show: Y.FADE_IN_FROM_RIGHT },
          previous: { hide: Y.FADE_OUT_TO_RIGHT, show: Y.FADE_IN_FROM_LEFT },
        };
      class ge extends J {
        constructor(e, t) {
          super(e.querySelector(u + "-player__placeholder-container"), t),
            (this._animationDirection = "next"),
            (this._currentIndex = 0),
            (this._autoPlay = !1),
            (this._videoReadyPromise = null),
            (this.rootContainerEl = e),
            (this.playerContainerEl = this.rootContainerEl.querySelector(
              u + "-player__video"
            )),
            (this.playVideo = this.playVideo.bind(this)),
            (this.handleVideoEnded = this.handleVideoEnded.bind(this)),
            (this.handleVideoReady = this.handleVideoReady.bind(this));
        }
        get updateAnimation() {
          return me[this._animationDirection];
        }
        static beforeUpdate(e, t) {
          ge.updateThumb(e, t.currentItem.content);
        }
        static updateThumb(e, t) {
          var n = e.querySelector(u + "-player__placeholder-thumb"),
            i = t.title,
            o = t.image.sizes.M.url;
          (n.src = o), (n.title = i), (n.caption = i);
        }
        afterUpdate(e, t) {
          this._videoReadyPromise = new I();
          try {
            this.initPlayer(t),
              this.bindPlayVideo(e, t),
              this._autoPlay && this.playVideo();
          } catch (e) {
            f(
              "error",
              "[PlayerComponent::afterUpdate] Failed initPlayer: " + e
            );
          }
        }
        initPlayer(e) {
          var t,
            n = this;
          return ((t = function* () {
            var t = e.currentItem.content.video.id;
            if ((yield n.animationEnds(), n.player)) n.player.load(t);
            else {
              var i = {
                onEnded: n.handleVideoEnded,
                onCanPlay: n.handleVideoReady,
              };
              n.player = yield (function (e, t, n) {
                return he.apply(this, arguments);
              })(t, n.playerContainerEl, i, { position: e.currentIndex + 1 });
            }
          }),
          function () {
            var e = this,
              n = arguments;
            return new Promise(function (i, o) {
              var r = t.apply(e, n);
              function a(e) {
                pe(r, i, o, a, s, "next", e);
              }
              function s(e) {
                pe(r, i, o, a, s, "throw", e);
              }
              a(void 0);
            });
          })();
        }
        handleVideoEnded() {
          (this._autoPlay = !0), this.events.navigateToNext();
        }
        handleVideoReady() {
          this._videoReadyPromise && this._videoReadyPromise.resolve();
        }
        bindPlayVideo(t, n) {
          var i = t.querySelector(u + "-player__placeholder");
          i.addEventListener("click", this.playVideo),
            i.addEventListener(
              "click",
              () => {
                C.send(e.VIDEO_PLAY, {
                  position: n.currentIndex + 1,
                  videoId: n.currentItem.content.video.id,
                  videoTitle: n.currentItem.content.title,
                  videoURL: n.currentItem.content.url,
                  componentItem: "shadow-video-flow-player__placeholder",
                  componentLabel: "play_video",
                  componentPosition:
                    i.getBoundingClientRect().top + window.scrollY,
                });
              },
              { once: !0 }
            );
        }
        playVideo() {
          (this._autoPlay = !1),
            this._videoReadyPromise.then(() => {
              this.player.play(), this.rootContainerEl.classList.add(ve);
            });
        }
        updateAnimationDirection(e) {
          (this._animationDirection =
            e < this._currentIndex ? "previous" : "next"),
            (this._currentIndex = e);
        }
        update(e) {
          this.rootContainerEl.classList.remove(ve),
            this.updateAnimationDirection(e.currentIndex),
            this.render(e);
        }
      }
      const fe = ge,
        ye = class extends J {
          constructor() {
            super(...arguments),
              (this.updateAnimation = { hide: Y.FADE_OUT, show: Y.FADE_IN });
          }
          update(e) {
            var t, n;
            (e = {
              publicationDate:
                ((t = e.currentItem.publication),
                (n = new Date(Date.parse(t))),
                n.getDate() +
                  " de " +
                  g[n.getMonth()] +
                  " de " +
                  n.getFullYear() +
                  " às " +
                  y(n.getHours()) +
                  ":" +
                  y(n.getMinutes())),
            }),
              this.render(e);
          }
        };
      var _e = n(493),
        we = n.n(_e);
      const be = class extends J {
        constructor() {
          super(...arguments),
            (this.handleNextClick = we()(this.handleNextClick.bind(this), 600)),
            (this.handlePreviousClick = we()(
              this.handlePreviousClick.bind(this),
              600
            ));
        }
        handleNextClick() {
          this.events.onNext();
        }
        handlePreviousClick() {
          this.events.onPrevious();
        }
        bindNavigation(e, t) {
          var n = e.querySelector(u + "-navigation__button-prev"),
            i = e.querySelector(u + "-navigation__button-next");
          t.previousItem
            ? n.addEventListener("click", this.handlePreviousClick)
            : (n.style.visibility = "hidden"),
            t.nextItem
              ? i.addEventListener("click", this.handleNextClick)
              : (i.style.visibility = "hidden");
        }
        beforeUpdate(e, t) {
          this.bindNavigation(e, t);
        }
        update(e) {
          super.update(e);
        }
      };
      function Ie(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function Te(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              Ie(r, i, o, a, s, "next", e);
            }
            function s(e) {
              Ie(r, i, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      const xe = class {
          constructor(e, t) {
            (this.containerEl = e),
              (this.infoContainerEl = this.containerEl.querySelector(
                u + "__info-container"
              )),
              (this.playerContainerEl = this.containerEl.querySelector(
                u + "__player-container"
              )),
              (this.navigationContainerEl = this.containerEl.querySelector(
                u + "-navigation"
              )),
              (this.issuedContainerEl = this.containerEl.querySelector(
                u + "__issued"
              )),
              (this.recommendationEndpoint = t),
              (this.recommendation = new F()),
              (this.navigation = null),
              (this.components = []),
              (this.render = this.render.bind(this));
          }
          init() {
            var t = this;
            return Te(function* () {
              var n,
                i,
                o,
                r,
                a = [];
              try {
                a = yield t.recommendation.getVideos(t.recommendationEndpoint);
              } catch (e) {
                (a = []), f("error", "[init] Failed to getVideos: " + e);
              }
              a.length
                ? ((t.navigation = new N(a, { onNavigate: t.render })),
                  (t.components = [
                    new Z(t.infoContainerEl),
                    new ye(t.issuedContainerEl),
                    new fe(t.playerContainerEl, {
                      navigateToNext: t.navigation.navigateToNext,
                    }),
                    new be(t.navigationContainerEl, {
                      onPrevious: t.navigation.userNavigateToPrevious,
                      onNext: t.navigation.userNavigateToNext,
                    }),
                  ]),
                  (n = t.containerEl.querySelectorAll(".glb-skeleton-box")) &&
                    n.forEach((e) => e.remove()),
                  (i = t.containerEl),
                  (o = -100),
                  (r = t.navigation.context.currentItem),
                  void 0 === o && (o = 0),
                  void 0 === r && (r = null),
                  window.ScrollSpy
                    ? window.ScrollSpy.add({
                        el: i,
                        callback: () =>
                          C.send(e.VIDEO_ON_VIEWPORT, {
                            videoId: r.content.video.id,
                            videoTitle: r.content.title,
                            videoURL: r.content.url,
                            componentItem: null,
                            componentLabel: null,
                            componentPosition: null,
                          }),
                        offset: o,
                      })
                    : f(
                        "warn",
                        "ScrollSpy não esta disponível na página. Alguns eventos não serão disparados."
                      ),
                  t.render())
                : t.containerEl && (t.containerEl.style.display = "none");
            })();
          }
          render() {
            var e = this;
            this.components.forEach(
              (function () {
                var t = Te(function* (t) {
                  return t.update(e.navigation.context);
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }
        },
        Ee = (e) => {
          var {
            eventCategory: t,
            eventAction: n,
            eventLabel: i,
            eventValue: o,
            eventProperty: r,
          } = e;
          globalThis.HorizonClient.then((e) => {
            e &&
              e.send({
                id: "common-event",
                version: "0.1",
                contentType: "common",
                properties: {
                  eventCategory: t,
                  eventAction: n,
                  eventLabel: i,
                  eventValue: o,
                  eventProperty: r,
                },
              });
          });
        };
      function Ae(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
        f(e, "[Analytics]", ...n);
      }
      function Ce() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        window.ga
          ? window.ga(...t)
          : (Ae(
              "log",
              "Script do Analytics `ga` não encontrado. Tentando novamente em 1000ms."
            ),
            setTimeout(() => Ce(...t), 1e3));
      }
      var Ne = (e, t) => {
        Ee({
          eventCategory: "shadow-video-flow",
          eventAction: "view",
          eventLabel: "posicao-" + e,
          eventValue: null,
          eventProperty: t.toString(),
        });
      };
      function Pe() {
        for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
          n[i] = arguments[i];
        var o =
          document
            .getElementsByClassName("shadow-video-flow")[0]
            .getBoundingClientRect().top + window.scrollY;
        if (
          null != (e = window.libAnalytics) &&
          null != (e = e.status) &&
          e.available
        ) {
          var r,
            a = {
              data: [
                { key: "component_name", value: "shadow", persist: !1 },
                { key: "component_type", value: "touchpoint", persist: !1 },
                { key: "component_label", value: n[5].videoTitle, persist: !1 },
                { key: "component_position", value: o, persist: !1 },
                {
                  key: "component_item",
                  value: "view-component" !== n[3] ? n[5].componentItem : null,
                  persist: !1,
                },
                {
                  key: "component_item_label",
                  value: "view-component" !== n[3] ? n[5].componentLabel : null,
                  persist: !1,
                },
                {
                  key: "component_item_position",
                  value:
                    "view-component" !== n[3] ? n[5].componentPosition : null,
                  persist: !1,
                },
                {
                  key: "component_item_link",
                  value: n[5].videoURL,
                  persist: !1,
                },
                { key: "video_id", value: n[5].videoId, persist: !1 },
                { key: "page_type", value: "multicontent", persist: !1 },
                {
                  key: "connection_type",
                  value:
                    null == (r = window.navigator) || null == (r = r.connection)
                      ? void 0
                      : r.effectiveType,
                  persist: !1,
                },
              ],
              events: [
                {
                  type: "ga4",
                  method: "gtm",
                  metricId: v.METRIC_ID,
                  eventName: n[3],
                  eventParams: [
                    "component_name",
                    "component_type",
                    "component_label",
                    "component_position",
                    "component_item",
                    "component_item_label",
                    "component_item_position",
                    "component_item_link",
                    "video_id",
                    { param: "consumption_environment", source: "ambient" },
                    { param: "adblock", source: "isAdBlockerDetected" },
                    "page_type",
                    "editoria_path",
                    "connection_type",
                    { param: "provider", source: "bd_suser_provider" },
                    { param: "globoId", source: "bd_suser_code" },
                    { param: "content_type_internal", source: "content_type" },
                  ],
                  userProperties: [
                    {
                      param: "user_code_provider",
                      source: "bd_suser_provider",
                    },
                    { param: "user_code", source: "bd_suser_code" },
                  ],
                },
              ],
            };
          window.libAnalytics.send.event(a);
        } else
          window.addEventListener("libAnalyticsAvailable", () => {
            Ae(
              "log",
              "Script do Analytics `ga4` não encontrado. Tentando novamente em 1000ms."
            ),
              setTimeout(() => Pe(...n), 1e3);
          });
      }
      class Oe {
        constructor(e, t, n) {
          void 0 === n && (n = "event"),
            (this.category = e),
            (this.methodName = t),
            (this.hitType = n),
            (this.sendImpression = this.sendImpression.bind(this)),
            (this.sendVideoPlay = this.sendVideoPlay.bind(this)),
            (this.sendNavigationPrevious =
              this.sendNavigationPrevious.bind(this)),
            (this.sendNavigationNext = this.sendNavigationNext.bind(this));
        }
        send(e, t, n) {
          Ae(
            "log",
            "Enviando interação [ " + e + " ] com descrição [ " + t + " ]."
          ),
            Ce(this.methodName, this.hitType, this.category, e, t),
            Pe(this.methodName, this.hitType, this.category, e, t, n);
        }
        sendImpression(e) {
          this.send("view-component", "visualização | component shadow", e),
            Ne(1, e.videoId);
        }
        sendVideoPlay(e) {
          this.send("play-video", "interação | play video | " + e.position, e),
            Ee({
              eventCategory: "shadow-video-flow",
              eventAction: "click to play",
              eventLabel: "posicao-" + e.position,
              eventValue: null,
              eventProperty: e.videoId.toString(),
            });
        }
        sendNavigationPrevious(e) {
          this.send(
            "navigation-previous",
            "interação | navegação anterior | " + e.position,
            e
          ),
            Ne(e.position, e.videoId);
        }
        sendNavigationNext(e) {
          this.send(
            "navigation-next",
            "interação | navegação próximo | " + e.position,
            e
          ),
            Ne(e.position, e.videoId);
        }
      }
      (() => {
        var t = document.querySelector(u);
        if (t) {
          var n = new IntersectionObserver(
            (n, i) => {
              var o = !1;
              n.forEach((n) => {
                var r = n.target;
                n.isIntersecting &&
                  (o ||
                    ((t) => {
                      var n;
                      v.METHOD
                        ? ((n = new Oe(v.CATEGORY, v.METHOD)),
                          C.register(e.VIDEO_ON_VIEWPORT, n.sendImpression),
                          C.register(e.VIDEO_PLAY, n.sendVideoPlay),
                          C.register(
                            e.NAVIGATION_PREVIOUS,
                            n.sendNavigationPrevious
                          ),
                          C.register(e.NAVIGATION_NEXT, n.sendNavigationNext))
                        : f(
                            "warn",
                            "Tracking Analytics desabilitado. Configure um `method` para este Tenant."
                          ),
                        t &&
                          new xe(t, p)
                            .init()
                            .catch((e) =>
                              f("error", "Failed to init player: " + e)
                            );
                    })(t),
                  (o = !0),
                  i.unobserve(r));
              });
            },
            { root: null, rootMargin: "800px", threshold: 0.05 }
          );
          n.observe(t);
        }
      })();
    })();
})();
(() => {
  "use strict";
  var n =
      (window.glb && window.glb.getCurrentEnv && window.glb.getCurrentEnv()) ||
      "qa",
    a = (window.cdaaas && window.cdaaas.SETTINGS) || {},
    r = a.SITE_ID,
    e = { credentials: "include" },
    t = {
      g1: "https://recomendacao.globo.com/v3/globocom/rec/g1-maislidas-1h?responseFormat=legacyPublishing&perPage=6",
    }[r],
    i = document.querySelector(".mais-lidas"),
    o = document.querySelector(".mais-lidas__cards-list");
  function s(n, a) {
    return (
      void 0 === a && (a = window.location.href), new URL(a).searchParams.has(n)
    );
  }
  "local" === n || "qa" === n || a.IS_PREVIEW || window.location.hash.substr(1);
  var c = "[LogHelper] | [Mais-lidas] ",
    l = "displayLogs";
  const d = class {
    static debug() {
      if (s(l)) {
        for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
          a[r] = arguments[r];
        console.debug(c, ...a);
      }
    }
    static error() {
      if (s(l)) {
        for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
          a[r] = arguments[r];
        console.error(c, ...a);
      }
    }
    static info() {
      if (s(l)) {
        for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
          a[r] = arguments[r];
        console.info(c, ...a);
      }
    }
    static log() {
      if (s(l)) {
        for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
          a[r] = arguments[r];
        console.log(c, ...a);
      }
    }
    static warn() {
      if (s(l)) {
        for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
          a[r] = arguments[r];
        console.warn(c, ...a);
      }
    }
  };
  function u(n, a, r, e, t, i, o) {
    try {
      var s = n[i](o),
        c = s.value;
    } catch (n) {
      return void r(n);
    }
    s.done ? a(c) : Promise.resolve(c).then(e, t);
  }
  function m(n) {
    return function () {
      var a = this,
        r = arguments;
      return new Promise(function (e, t) {
        var i = n.apply(a, r);
        function o(n) {
          u(i, e, t, o, s, "next", n);
        }
        function s(n) {
          u(i, e, t, o, s, "throw", n);
        }
        o(void 0);
      });
    };
  }
  var f = (n) =>
    n.filter((n) => !n.content.url.includes(window.location.pathname));
  function h() {
    return (h = m(function* () {
      var n = yield fetch(t, e)
          .then((n) => n.json())
          .catch((n) =>
            d.error("[Show] - [Most-Read] - [requestData] - [Error]': " + n)
          ),
        a = Array.isArray(n) ? f(n) : n;
      return Array.isArray(a) && a.length > 2 ? a.slice(0, 5) : null;
    })).apply(this, arguments);
  }
  function v() {
    return (
      (v = m(function* () {
        var n = yield (function () {
          return h.apply(this, arguments);
        })();
        if (n) {
          var a = n
            .map((n, a) => {
              var r,
                e =
                  null != (r = n.content.image) && r.sizes
                    ? n.content.image.sizes.S.url
                    : "https://s3.glbimg.com/v1/AUTH_f75bb4776e3c4683acd769d47144995f/img/thumbs/thumb-auto-next.jpg";
              return (
                '\n    <li class="mais-lidas__card-content" key=' +
                a +
                ">\n      <a href=" +
                n.content.url +
                ' class=" mais-lidas__card-url">\n        <span class="mais-lidas__card-index">' +
                (a + 1) +
                '</span>\n        <h5 class="mais-lidas__card-title">\n          ' +
                n.content.title +
                '\n        </h5>\n        <div class="mais-lidas__card-img-content">\n            <img class="mais-lidas__card-img" src=' +
                e +
                " alt=" +
                n.content.title +
                ' loading="lazy" />\n            <div class="mais-lidas__card-img-overlay"></div>\n        </div>\n      </a>\n    </li>\n    '
              );
            })
            .join(" ");
        } else document.querySelector(".mc-column.mc-column-mais-lidas").remove(), d.error("[Show] - [Most-Read] - [showMaisLidas] - [Error] - [Data is empty]");
      })),
      v.apply(this, arguments)
    );
  }
  var g = {
    "mais-lidas": [
      function (n) {
        var a = document.querySelector(".mc-bottom");
        a
          ? a.insertAdjacentElement("beforebegin", n)
          : d.error(
              "Element .mc-bottom not found, container on the same position."
            );
      },
      function (n) {
        var a = n.parentNode,
          r = document.createElement("div");
        a.insertBefore(r, n),
          r.classList.add("mc-column"),
          r.classList.add("mc-column-mais-lidas"),
          r.appendChild(n);
      },
    ],
  };
  (function (n, a) {
    void 0 === a && (a = "default");
    var r = g["mais-lidas"];
    r
      ? r.forEach((a) => a(n))
      : d.error("warn", "Initializers for alternative " + a + " not found");
  })(i),
    (function () {
      v.apply(this, arguments);
    })();
})();
/* web(desktop) critical javascript */
(function (window) {
  window.googletag = window.googletag || {};
  window.googletag.cmd = window.googletag.cmd || [];

  var EVENT = "libPubReady";
  var DIV_ID = "banner_vitrine";
  var URL = window.bannerVitrine.wishlistTokenApi;
  var TOKEN_KEY = "GLOBO_ID";
  var GLB_VALIDATOR_WISHLIST = "GLB_VALIDATOR_WISHLIST";
  var TOKEN_WISHLIST = "WISHLIST_TOKEN";
  var ON_RENDER_EVENT = "adserver-ad-rendered";
  var showcase;

  function fetchWishlistToken() {
    var glbToken = getCookie(TOKEN_KEY);

    return fetch(URL, requestData(glbToken))
      .then(function (response) {
        return response.json();
      })
      .catch(function (err) {
        utagdb.log(err);
        return;
      });
  }

  function isUserLogged() {
    return getCookie(TOKEN_KEY) !== null;
  }

  function requestData(glbToken) {
    return {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + glbToken,
      }),
    };
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp(name + "=([^;]+)"));
    return match ? match[1] : null;
  }

  function setOnRenderListener() {
    var listener = document.addEventListener(ON_RENDER_EVENT, function () {
      document.removeEventListener(ON_RENDER_EVENT, listener);

      showcase = document.getElementById(DIV_ID).querySelector("iframe");
    });
  }

  function sendToken(token) {
    showcase.contentWindow.postMessage(
      { type: "page_token_response", token: token },
      "*"
    );
  }

  function validToken(token) {
    if (!token) return false;

    var parseJwtWishlist = parseJwt(token);

    if (parseJwtWishlist === null) return false;

    return new Date() >= new Date(parseJwtWishlist.exp * 1000);
  }

  function validGLB() {
    var gbl = getCookie(TOKEN_KEY);
    var validator = getCookie(GLB_VALIDATOR_WISHLIST);
    return gbl === validator;
  }

  function getWishlistToken() {
    return localStorage.getItem(TOKEN_WISHLIST);
  }

  function parseJwt(token) {
    try {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var payload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(payload);
    } catch (e) {
      return null;
    }
  }

  function renderBanner() {
    var adOptions = {
      lazyLoad: {
        enabled: true,
        fetchMarginPercent: 100,
        renderMarginPercent: 50,
      },
    };

    window.bannerLazyLoading(DIV_ID, adOptions);
  }

  if (window.libPubReady) {
    renderBanner();
  } else {
    document.addEventListener(EVENT, renderBanner);
  }

  function setWishlistToken(token) {
    localStorage.setItem(TOKEN_WISHLIST, token);
    document.cookie = GLB_VALIDATOR_WISHLIST + "=" + getCookie(TOKEN_KEY);
  }

  function tokenRequest() {
    var tokenWishlist = getWishlistToken();

    if (validGLB() && validToken(tokenWishlist)) {
      sendToken(tokenWishlist, DIV_ID);
      return;
    }

    fetchWishlistToken().then(function (data) {
      sendToken(data.token, DIV_ID);
      setWishlistToken(data.token);
    });
  }

  function setupListeners() {
    window.addEventListener("message", function (event) {
      if (!showcase || event.source !== showcase.contentWindow) return;
      if (!event.data.type) return;

      tokenRequest();
    });
  }

  if (isUserLogged()) {
    setupListeners();
    setOnRenderListener();
  }
})(window);

!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e, t, n) {
    "undefined" != typeof self && self,
      (e.exports = (function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var o = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, r) {
            n.o(e, t) ||
              Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r,
              });
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 3))
        );
      })([
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = o(n(7));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var i = {
              EVENTS_BUFFER_SIZE: 100,
              EVENTS_SENDER_INTERVAL: 1e4,
              EVENTS_SENDER_MIN_INTERVAL: 5e3,
              EVENTS_SENDER_MAX_INTERVAL: 2e4,
              EVENTS_DISCARD_AFTER_MSECS: 36e5,
              EVENTS_BULK_SIZE: 10,
              HORIZON_TRACK_HOST: "https://horizon-track.globo.com",
              HORIZON_SCHEMAS_HOST: "https://horizon-schemas.globo.com",
              HORIZON_CALLBACK_STACK_LIMIT: 1e3,
              HORIZON_REQUEST_ENCODING: "base64",
              HORIZON_CLIENT_UUID: o(n(2)).default.getResource(
                "clientInstanceUUID",
                (0, r.default)()
              ),
              SCHEMA_VALIDATOR_SCRIPT_URL:
                "https://s3.glbimg.com/cdn/libs/tv4/1.3.0/tv4.min.js",
              SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES: 2,
              SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS: 1e4,
              PACKAGE_VERSION: "1.0.3",
            },
            a = {
              useQAConfiguration: function () {
                (i.HORIZON_TRACK_HOST = "https://horizon-track.qa.globoi.com"),
                  (i.HORIZON_SCHEMAS_HOST =
                    "https://horizon-schemas.qa.globoi.com"),
                  (i.HORIZON_REQUEST_ENCODING = "json");
              },
            };
          t.default = Object.assign(i, a);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = {
              DUPLICATED_SCHEMA: "[Horizon] Duplicated schema.",
              INVALID_DATA: "[Horizon] Invalid data.",
              INVALID_DATE: "[Horizon] Invalid date-time RFC 3339 format.",
              INVALID_FORMAT: "[Horizon] Invalid event format.",
              INVALID_REQUEST: "[Horizon] Invalid request.",
              INVALID_TIMESTAMP: "[Horizon] Invalid timestamp.",
              INVALID_VERSION_FORMAT: "[Horizon] Invalid version format.",
              UNSUPPORTED_TYPE: "[Horizon] Unsupported type.",
              UNSUPPORTED_TENANT: "[Horizon] Unsupported tenant.",
              UNSUPPORTED_ENCODER: "[Horizon] Unsupported encoder.",
              MUST_BE_DEFINED:
                "[Horizon] Parameter or argument must be defined",
              ERROR_LOADING_RESOURCE: "[Horizon] Failed to load resouce.",
              COMPONENT_NOT_READY: "[Horizon] Component is not ready.",
              COMPONENT_UNAVAILABLE: "[Horizon] Class or function is required.",
              SCHEMA_VALIDATOR_ERROR_LOADING:
                "[Horizon] Could not load SchemaValidator.",
              LIMIT_EXCEEDED: "[Horizon] Resource limit exceeded.",
            },
            o = {
              mustBeDefined: function (e) {
                throw new Error(r.MUST_BE_DEFINED + ": " + e + ".");
              },
            };
          t.default = Object.assign(r, o);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = function () {
            return (
              (window.horizonResources = window.horizonResources || {}),
              window.horizonResources
            );
          };
          t.default = {
            getContext: r,
            getResource: function (e, t) {
              var n = r();
              return (n[e] = n[e] || t), n[e];
            },
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Settings = t.HorizonClient = void 0),
            n(4);
          var r = i(n(6)),
            o = i(n(0));
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          (t.HorizonClient = r.default), (t.Settings = o.default);
        },
        function (e, t, n) {
          "use strict";
          n(5).polyfill();
        },
        function (e, t, n) {
          "use strict";
          function r(e, t) {
            if (null == e)
              throw new TypeError("Cannot convert first argument to object");
            for (var n = Object(e), r = 1; r < arguments.length; r++) {
              var o = arguments[r];
              if (null != o)
                for (
                  var i = Object.keys(Object(o)), a = 0, u = i.length;
                  a < u;
                  a++
                ) {
                  var s = i[a],
                    c = Object.getOwnPropertyDescriptor(o, s);
                  void 0 !== c && c.enumerable && (n[s] = o[s]);
                }
            }
            return n;
          }
          e.exports = {
            assign: r,
            polyfill: function () {
              Object.assign ||
                Object.defineProperty(Object, "assign", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: r,
                });
            },
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o = c(n(0)),
            i = c(n(10)),
            a = c(n(1)),
            u = c(n(12)),
            s = c(n(22));
          function c(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var l = {
              READY: "stateReady",
              UNLOADED: "stateNotReady",
              LOADING: "stateLoading",
            },
            f = (function () {
              function e(t, n) {
                var r = this,
                  c =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.tenant = t || a.default.mustBeDefined("tenant")),
                  (this.deviceGroup =
                    n || a.default.mustBeDefined("deviceGroup")),
                  (this.defaultContentType = c),
                  (this.validator = i.default),
                  (this.clientVersion = o.default.PACKAGE_VERSION),
                  (this.state = l.UNLOADED),
                  (this.referer = document.referrer);
                var f = null,
                  d = null;
                (this.setSchemasProvider = function (e) {
                  return (f = e);
                }),
                  (this.getSchemasProvider = function () {
                    if (!f) {
                      var e = s.default.getInstance();
                      r.setSchemasProvider(e);
                    }
                    return f;
                  }),
                  (this.setEventBus = function (e) {
                    return (d = e);
                  }),
                  (this.getEventBus = function () {
                    if (!d) {
                      var e = u.default.getInstance(r.tenant, r.deviceGroup);
                      r.setEventBus(e);
                    }
                    return d;
                  }),
                  (this.isReady = function () {
                    return !!f && r.validator.isReady() && f.isReady();
                  });
              }
              return (
                r(e, [
                  {
                    key: "useDefaultContentType",
                    value: function (e) {
                      this.defaultContentType = e;
                    },
                  },
                  {
                    key: "setValidator",
                    value: function (e) {
                      this.validator = e;
                    },
                  },
                  {
                    key: "setReferer",
                    value: function (e) {
                      this.referer = e || document.referrer;
                    },
                  },
                  {
                    key: "unload",
                    value: function () {
                      this.flush();
                    },
                  },
                  {
                    key: "getScopeInfo",
                    value: function () {
                      return {
                        url: document.location.href,
                        actionTs: +Date.now(),
                        horizonClientVersion: this.clientVersion,
                        horizonClientReferer: this.referer,
                      };
                    },
                  },
                  {
                    key: "validateBeforeEnqueue",
                    value: function (e) {
                      var t = this.getSchemasProvider().get(e.id, e.version);
                      this.validator.validateFor(e, t);
                    },
                  },
                  {
                    key: "onReady",
                    value: function (e) {
                      this.validator.isReady()
                        ? this.getSchemasProvider().isReady()
                          ? ((this.state = l.READY), e())
                          : ((this.state = l.LOADING),
                            this.getSchemasProvider().onReady(e),
                            this.getSchemasProvider().load())
                        : ((this.state = l.LOADING),
                          this.validator.onReady(e),
                          this.validator.load());
                    },
                  },
                  {
                    key: "flush",
                    value: function () {
                      var e = this;
                      this.isReady()
                        ? this.getEventBus().flush()
                        : this.onReady(function () {
                            return e.flush();
                          });
                    },
                  },
                  {
                    key: "send",
                    value: function (e) {
                      var t = this;
                      if ((this.validator.validateArgs(e), !this.isReady()))
                        return (
                          this.state === l.UNLOADED && this.flush(),
                          void this.onReady(function () {
                            return t.send(e);
                          })
                        );
                      this.validateBeforeEnqueue(e);
                      var n = this.getScopeInfo(),
                        r = Object.assign({}, e, n);
                      r.contentType ||
                        (this.defaultContentType ||
                          a.default.mustBeDefined("contentType"),
                        (r.contentType = this.defaultContentType)),
                        this.getEventBus().enqueue(r);
                    },
                  },
                ]),
                e
              );
            })();
          t.default = f;
        },
        function (e, t, n) {
          var r = n(8),
            o = n(9);
          e.exports = function (e, t, n) {
            var i = (t && n) || 0;
            "string" == typeof e &&
              ((t = "binary" === e ? new Array(16) : null), (e = null));
            var a = (e = e || {}).random || (e.rng || r)();
            if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t))
              for (var u = 0; u < 16; ++u) t[i + u] = a[u];
            return t || o(a);
          };
        },
        function (e, t) {
          var n =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              msCrypto.getRandomValues.bind(msCrypto));
          if (n) {
            var r = new Uint8Array(16);
            e.exports = function () {
              return n(r), r;
            };
          } else {
            var o = new Array(16);
            e.exports = function () {
              for (var e, t = 0; t < 16; t++)
                0 == (3 & t) && (e = 4294967296 * Math.random()),
                  (o[t] = (e >>> ((3 & t) << 3)) & 255);
              return o;
            };
          }
        },
        function (e, t) {
          for (var n = [], r = 0; r < 256; ++r)
            n[r] = (r + 256).toString(16).substr(1);
          e.exports = function (e, t) {
            var r = t || 0,
              o = n;
            return (
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]] +
              "-" +
              o[e[r++]] +
              o[e[r++]] +
              "-" +
              o[e[r++]] +
              o[e[r++]] +
              "-" +
              o[e[r++]] +
              o[e[r++]] +
              "-" +
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]] +
              o[e[r++]]
            );
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            o = u(n(11)),
            i = u(n(1)),
            a = u(n(0));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var s = { ready: [] },
            c = function () {
              return !!window.tv4;
            },
            l = function (e) {
              return null === e
                ? null
                : isNaN(e) && !isNaN(Date.parse(e))
                ? null
                : i.default.INVALID_DATE;
            };
          t.default = {
            validateFor: function (e, t) {
              if (!c())
                throw new Error(
                  i.default.ERROR_LOADING_RESOURCE + " Validator is not ready."
                );
              if (!t)
                throw new Error(i.default.INVALID_DATA + " Argument: schema.");
              if (!/\d+\.\d+/.test(e.version))
                throw new Error(i.default.INVALID_VERSION_FORMAT);
              if (!tv4.validate(e.properties, t))
                throw new Error(
                  i.default.INVALID_DATA +
                    " " +
                    e.id +
                    " " +
                    e.version +
                    ". " +
                    tv4.error
                );
            },
            validateArgs: function (e) {
              var t = Object.prototype.hasOwnProperty;
              if (
                !(
                  e &&
                  t.call(e, "id") &&
                  t.call(e, "version") &&
                  t.call(e, "properties")
                )
              )
                throw new Error(
                  i.default.INVALID_FORMAT +
                    " Missing properties: " +
                    JSON.stringify(e)
                );
              if (
                "string" != typeof e.id ||
                "string" != typeof e.version ||
                "object" !== r(e.properties)
              )
                throw new Error(
                  i.default.INVALID_FORMAT +
                    " Wrong object type: " +
                    JSON.stringify(e)
                );
              if (e.id.length < 2 || e.version.length < 3)
                throw new Error(
                  i.default.INVALID_FORMAT +
                    " Invalid property size: " +
                    JSON.stringify(e)
                );
              var n = Object.assign({}, e);
              if (
                (delete n.id,
                delete n.version,
                delete n.properties,
                delete n.contentType,
                Object.keys(n).length > 0)
              )
                throw new Error(
                  i.default.INVALID_FORMAT +
                    " Extra keys aren't allowed: " +
                    JSON.stringify(n)
                );
            },
            tv4IsValidData: l,
            isReady: c,
            onReady: function (e) {
              if (c()) return e();
              if (s.ready.length > a.default.HORIZON_CALLBACK_STACK_LIMIT)
                throw new Error(
                  i.default.LIMIT_EXCEEDED + " Validator callback stack."
                );
              return s.ready.unshift(e);
            },
            load: function () {
              o.default.isDefined("tv4") ||
                (0, o.default)([a.default.SCHEMA_VALIDATOR_SCRIPT_URL], "tv4", {
                  async: !0,
                  numRetries: a.default.SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES,
                  success: function () {
                    tv4.addFormat("date-time", l),
                      s.ready.forEach(function (e) {
                        return e();
                      });
                  },
                  error: function (e) {
                    throw new Error(
                      i.default.SCHEMA_VALIDATOR_ERROR_LOADING + " " + e
                    );
                  },
                });
            },
          };
        },
        function (e, t, n) {
          var r, o;
          void 0 ===
            (o =
              "function" ==
              typeof (r = function () {
                var e = function () {},
                  t = {},
                  n = {},
                  r = {};
                function o(e, t) {
                  if (e) {
                    var o = r[e];
                    if (((n[e] = t), o))
                      for (; o.length; ) o[0](e, t), o.splice(0, 1);
                  }
                }
                function i(t, n) {
                  t.call && (t = { success: t }),
                    n.length ? (t.error || e)(n) : (t.success || e)(t);
                }
                function a(t, n, r, o) {
                  var i,
                    u,
                    s = document,
                    c = r.async,
                    l = (r.numRetries || 0) + 1,
                    f = r.before || e,
                    d = t.replace(/^(css|img)!/, "");
                  (o = o || 0),
                    /(^css!|\.css$)/.test(t)
                      ? ((i = !0),
                        ((u = s.createElement("link")).rel = "stylesheet"),
                        (u.href = d))
                      : /(^img!|\.(png|gif|jpg|svg)$)/.test(t)
                      ? ((u = s.createElement("img")).src = d)
                      : (((u = s.createElement("script")).src = t),
                        (u.async = void 0 === c || c)),
                    (u.onload =
                      u.onerror =
                      u.onbeforeload =
                        function (e) {
                          var s = e.type[0];
                          if (i && "hideFocus" in u)
                            try {
                              u.sheet.cssText.length || (s = "e");
                            } catch (e) {
                              s = "e";
                            }
                          if ("e" == s && (o += 1) < l) return a(t, n, r, o);
                          n(t, s, e.defaultPrevented);
                        }),
                    !1 !== f(t, u) && s.head.appendChild(u);
                }
                function u(e, n, r) {
                  var u, s;
                  if ((n && n.trim && (u = n), (s = (u ? r : n) || {}), u)) {
                    if (u in t) throw "LoadJS";
                    t[u] = !0;
                  }
                  !(function (e, t, n) {
                    var r,
                      o,
                      i = (e = e.push ? e : [e]).length,
                      u = i,
                      s = [];
                    for (
                      r = function (e, n, r) {
                        if (("e" == n && s.push(e), "b" == n)) {
                          if (!r) return;
                          s.push(e);
                        }
                        --i || t(s);
                      },
                        o = 0;
                      o < u;
                      o++
                    )
                      a(e[o], r, n);
                  })(
                    e,
                    function (e) {
                      i(s, e), o(u, e);
                    },
                    s
                  );
                }
                return (
                  (u.ready = function (e, t) {
                    return (
                      (function (e, t) {
                        var o,
                          i,
                          a,
                          u = [],
                          s = (e = e.push ? e : [e]).length,
                          c = s;
                        for (
                          o = function (e, n) {
                            n.length && u.push(e), --c || t(u);
                          };
                          s--;

                        )
                          (i = e[s]),
                            (a = n[i]) ? o(i, a) : (r[i] = r[i] || []).push(o);
                      })(e, function (e) {
                        i(t, e);
                      }),
                      u
                    );
                  }),
                  (u.done = function (e) {
                    o(e, []);
                  }),
                  (u.reset = function () {
                    (t = {}), (n = {}), (r = {});
                  }),
                  (u.isDefined = function (e) {
                    return e in t;
                  }),
                  u
                );
              })
                ? r.apply(t, [])
                : r) || (e.exports = o);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o = d(n(13)),
            i = d(n(2)),
            a = d(n(14)),
            u = d(n(0)),
            s = d(n(1)),
            c = d(n(18)),
            l = d(n(19)),
            f = d(n(20));
          function d(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var h = function () {
              return i.default.getResource("bus", {});
            },
            p = (function () {
              function e(t, n, r) {
                var o = this;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.currentTenant = t || s.default.mustBeDefined("tenant")),
                  (this.instanceID =
                    n || s.default.mustBeDefined("instanceID")),
                  (this.deviceGroup =
                    r || s.default.mustBeDefined("deviceGroup")),
                  (this.queue = new c.default(u.default.EVENTS_BUFFER_SIZE)),
                  new l.default()
                    .every(u.default.EVENTS_SENDER_INTERVAL)
                    .call(function () {
                      o.queue = o.filterQueue();
                      var e = o.prepareRequest();
                      o.dispatch(e, u.default.HORIZON_REQUEST_ENCODING) ||
                        e.actions.forEach(function (e) {
                          return o.enqueue(e);
                        });
                    })
                    .call(f.default)
                    .start();
              }
              return (
                r(e, [
                  {
                    key: "setMaxQueueSize",
                    value: function (e) {
                      this.queue = c.default.fromArray(this.queue.items, e);
                    },
                  },
                  {
                    key: "filterQueue",
                    value: function () {
                      var e =
                        +Date.now() - u.default.EVENTS_DISCARD_AFTER_MSECS;
                      return this.queue.filter(function (t) {
                        return t.actionTs > e;
                      });
                    },
                  },
                  {
                    key: "prepareRequest",
                    value: function () {
                      return {
                        horizonClientUUID: this.instanceID,
                        horizonClientTenant: this.currentTenant,
                        horizonClientTs: Date.now(),
                        horizonClientType: "js",
                        horizonClientDeviceGroup: this.deviceGroup,
                        actions: this.queue.splice(
                          0,
                          u.default.EVENTS_BULK_SIZE
                        ),
                      };
                    },
                  },
                  {
                    key: "isValidRequest",
                    value: function (e) {
                      if (!e || (e && !e.actions))
                        throw new Error(s.default.INVALID_REQUEST);
                      return e.actions.length > 0;
                    },
                  },
                  {
                    key: "dispatch",
                    value: function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "json",
                        n =
                          u.default.HORIZON_TRACK_HOST +
                          "/event/" +
                          this.currentTenant,
                        r = a.default.get(t);
                      if (!this.isValidRequest(e)) return !1;
                      var i = r(e);
                      return (0, o.default)(n, i);
                    },
                  },
                  {
                    key: "enqueue",
                    value: function (e) {
                      if (!e.actionTs)
                        throw new Error(s.default.INVALID_TIMESTAMP);
                      this.queue.push(e);
                    },
                  },
                  {
                    key: "flush",
                    value: function () {
                      for (; this.queue.length > 0; ) {
                        this.queue = this.filterQueue();
                        var e = this.prepareRequest();
                        this.dispatch(e, u.default.HORIZON_REQUEST_ENCODING);
                      }
                    },
                  },
                  {
                    key: "length",
                    get: function () {
                      return this.queue.length;
                    },
                  },
                ]),
                e
              );
            })();
          t.default = {
            getInstance: function (e, t) {
              var n = h(),
                r = e + "-" + t;
              return (
                n[r] || (n[r] = new p(e, u.default.HORIZON_CLIENT_UUID, t)),
                n[r]
              );
            },
            reset: function (e, t) {
              (e && 0 !== e.length) || s.default.mustBeDefined("tenant"),
                (t && 0 !== t.length) || s.default.mustBeDefined("deviceGroup");
              var n = e + "-" + t;
              delete h()[n];
            },
            getContextBus: h,
          };
        },
        function (e, t, n) {
          !(function (n) {
            "use strict";
            var r = function (e, t) {
              var n =
                "XMLHttpRequest" in window
                  ? new XMLHttpRequest()
                  : new ActiveXObject("Microsoft.XMLHTTP");
              n.open("POST", e, !1),
                (n.withCredentials = !0),
                n.setRequestHeader("Accept", "*/*"),
                "string" == typeof t
                  ? (n.setRequestHeader(
                      "Content-Type",
                      "text/plain;charset=UTF-8"
                    ),
                    (n.responseType = "text/plain"))
                  : "[object Blob]" === {}.toString.call(t) &&
                    t.type &&
                    n.setRequestHeader("Content-Type", t.type);
              try {
                n.send(t);
              } catch (e) {}
              return !0;
            };
            "navigator" in n &&
              "sendBeacon" in n.navigator &&
              (r = navigator.sendBeacon.bind(navigator)),
              void 0 !== e && e.exports && (t = e.exports = r),
              (t.sendBeacon = r);
          })("object" == typeof window ? window : this);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = i(n(15)),
            o = i(n(1));
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var a = {
            base64: function (e) {
              var t = new FormData();
              return (
                t.append("data", r.default.encode(JSON.stringify(e))),
                t.append("encoding", "base64"),
                t
              );
            },
            json: function (e) {
              return JSON.stringify(e);
            },
          };
          t.default = {
            get: function (e) {
              if (!(e in a))
                throw new Error(
                  o.default.UNSUPPORTED_ENCODER + " Invalid " + e + " encoder."
                );
              return a[e];
            },
          };
        },
        function (e, t, n) {
          (function (e, r) {
            var o;
            !(function (i) {
              var a =
                ("object" == typeof e && e && e.exports,
                "object" == typeof r && r);
              a.global !== a && a.window;
              var u = function (e) {
                this.message = e;
              };
              (u.prototype = new Error()).name = "InvalidCharacterError";
              var s = function (e) {
                  throw new u(e);
                },
                c =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                l = /[\t\n\f\r ]/g,
                f = {
                  encode: function (e) {
                    (e = String(e)),
                      /[^\0-\xFF]/.test(e) &&
                        s(
                          "The string to be encoded contains characters outside of the Latin1 range."
                        );
                    for (
                      var t,
                        n,
                        r,
                        o,
                        i = e.length % 3,
                        a = "",
                        u = -1,
                        l = e.length - i;
                      ++u < l;

                    )
                      (t = e.charCodeAt(u) << 16),
                        (n = e.charCodeAt(++u) << 8),
                        (r = e.charCodeAt(++u)),
                        (a +=
                          c.charAt(((o = t + n + r) >> 18) & 63) +
                          c.charAt((o >> 12) & 63) +
                          c.charAt((o >> 6) & 63) +
                          c.charAt(63 & o));
                    return (
                      2 == i
                        ? ((t = e.charCodeAt(u) << 8),
                          (n = e.charCodeAt(++u)),
                          (a +=
                            c.charAt((o = t + n) >> 10) +
                            c.charAt((o >> 4) & 63) +
                            c.charAt((o << 2) & 63) +
                            "="))
                        : 1 == i &&
                          ((o = e.charCodeAt(u)),
                          (a +=
                            c.charAt(o >> 2) + c.charAt((o << 4) & 63) + "==")),
                      a
                    );
                  },
                  decode: function (e) {
                    var t = (e = String(e).replace(l, "")).length;
                    t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
                      (t % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e)) &&
                        s(
                          "Invalid character: the string to be decoded is not correctly encoded."
                        );
                    for (var n, r, o = 0, i = "", a = -1; ++a < t; )
                      (r = c.indexOf(e.charAt(a))),
                        (n = o % 4 ? 64 * n + r : r),
                        o++ % 4 &&
                          (i += String.fromCharCode(
                            255 & (n >> ((-2 * o) & 6))
                          ));
                    return i;
                  },
                  version: "0.1.0",
                };
              void 0 ===
                (o = function () {
                  return f;
                }.call(t, n, t, e)) || (e.exports = o);
            })();
          }).call(t, n(16)(e), n(17));
        },
        function (e, t) {
          e.exports = function (e) {
            return (
              e.webpackPolyfill ||
                ((e.deprecate = function () {}),
                (e.paths = []),
                e.children || (e.children = []),
                Object.defineProperty(e, "loaded", {
                  enumerable: !0,
                  get: function () {
                    return e.l;
                  },
                }),
                Object.defineProperty(e, "id", {
                  enumerable: !0,
                  get: function () {
                    return e.i;
                  },
                }),
                (e.webpackPolyfill = 1)),
              e
            );
          };
        },
        function (e, t) {
          var n;
          n = (function () {
            return this;
          })();
          try {
            n = n || Function("return this")() || (0, eval)("this");
          } catch (e) {
            "object" == typeof window && (n = window);
          }
          e.exports = n;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o = (function () {
              function e() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 100;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this._queue = []),
                  (this.maxSize = t);
              }
              return (
                r(
                  e,
                  [
                    {
                      key: "push",
                      value: function (e) {
                        this._queue = [e].concat(
                          (function (e) {
                            if (Array.isArray(e)) {
                              for (
                                var t = 0, n = Array(e.length);
                                t < e.length;
                                t++
                              )
                                n[t] = e[t];
                              return n;
                            }
                            return Array.from(e);
                          })(this.slice(0, this.maxSize - 1))
                        );
                      },
                    },
                    {
                      key: "forEach",
                      value: function (e) {
                        return this._queue.forEach(e);
                      },
                    },
                    {
                      key: "slice",
                      value: function (e, t) {
                        return this._queue.slice(e, t);
                      },
                    },
                    {
                      key: "splice",
                      value: function (e, t) {
                        return this._queue.splice(e, t);
                      },
                    },
                    {
                      key: "clear",
                      value: function () {
                        this._queue = [];
                      },
                    },
                    {
                      key: "filter",
                      value: function (t) {
                        return e.fromArray(this._queue.filter(t), this.maxSize);
                      },
                    },
                    {
                      key: "length",
                      get: function () {
                        return this._queue.length;
                      },
                    },
                    {
                      key: "items",
                      get: function () {
                        return JSON.parse(JSON.stringify(this._queue));
                      },
                    },
                  ],
                  [
                    {
                      key: "fromArray",
                      value: function (t, n) {
                        var r = new e(n);
                        return (
                          t.forEach(function (e) {
                            return r.push(e);
                          }),
                          r
                        );
                      },
                    },
                  ]
                ),
                e
              );
            })();
          t.default = o;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.interval = 0),
                  (this.tickIntervalId = 0),
                  (this.callbacks = []);
              }
              return (
                r(e, [
                  {
                    key: "tick",
                    value: function () {
                      var e = this;
                      this.callbacks.forEach(function (t) {
                        return t(e);
                      });
                    },
                  },
                  {
                    key: "start",
                    value: function () {
                      return (
                        (this.tickIntervalId = setInterval(
                          this.tick.bind(this),
                          this.interval
                        )),
                        this
                      );
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      return (
                        clearInterval(this.tickIntervalId),
                        (this.tickIntervalId = 0),
                        this
                      );
                    },
                  },
                  {
                    key: "reschedule",
                    value: function (e) {
                      return this.stop().every(e).start();
                    },
                  },
                  {
                    key: "every",
                    value: function (e) {
                      return (this.interval = e), this;
                    },
                  },
                  {
                    key: "call",
                    value: function (e) {
                      return this.callbacks.push(e), this;
                    },
                  },
                  {
                    key: "isRunning",
                    get: function () {
                      return !!this.tickIntervalId;
                    },
                  },
                ]),
                e
              );
            })();
          t.default = o;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = i(n(21)),
            o = i(n(0));
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          t.default = function (e) {
            var t = o.default.EVENTS_SENDER_MIN_INTERVAL,
              n = o.default.EVENTS_SENDER_MAX_INTERVAL,
              i =
                Number(r.default.get("_hzt.interval")) ||
                o.default.EVENTS_SENDER_INTERVAL;
            i <= n && i >= t && e.interval !== i && e.reschedule(i);
          };
        },
        function (e, t, n) {
          var r, o, i;
          (i = function () {
            function e() {
              for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r];
              }
              return t;
            }
            return (function t(n) {
              function r(t, o, i) {
                var a;
                if ("undefined" != typeof document) {
                  if (arguments.length > 1) {
                    if (
                      "number" ==
                      typeof (i = e({ path: "/" }, r.defaults, i)).expires
                    ) {
                      var u = new Date();
                      u.setMilliseconds(
                        u.getMilliseconds() + 864e5 * i.expires
                      ),
                        (i.expires = u);
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                      (a = JSON.stringify(o)), /^[\{\[]/.test(a) && (o = a);
                    } catch (e) {}
                    (o = n.write
                      ? n.write(o, t)
                      : encodeURIComponent(String(o)).replace(
                          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                          decodeURIComponent
                        )),
                      (t = (t = (t = encodeURIComponent(String(t))).replace(
                        /%(23|24|26|2B|5E|60|7C)/g,
                        decodeURIComponent
                      )).replace(/[\(\)]/g, escape));
                    var s = "";
                    for (var c in i)
                      i[c] &&
                        ((s += "; " + c), !0 !== i[c] && (s += "=" + i[c]));
                    return (document.cookie = t + "=" + o + s);
                  }
                  t || (a = {});
                  for (
                    var l = document.cookie ? document.cookie.split("; ") : [],
                      f = /(%[0-9A-Z]{2})+/g,
                      d = 0;
                    d < l.length;
                    d++
                  ) {
                    var h = l[d].split("="),
                      p = h.slice(1).join("=");
                    this.json || '"' !== p.charAt(0) || (p = p.slice(1, -1));
                    try {
                      var v = h[0].replace(f, decodeURIComponent);
                      if (
                        ((p = n.read
                          ? n.read(p, v)
                          : n(p, v) || p.replace(f, decodeURIComponent)),
                        this.json)
                      )
                        try {
                          p = JSON.parse(p);
                        } catch (e) {}
                      if (t === v) {
                        a = p;
                        break;
                      }
                      t || (a[v] = p);
                    } catch (e) {}
                  }
                  return a;
                }
              }
              return (
                (r.set = r),
                (r.get = function (e) {
                  return r.call(r, e);
                }),
                (r.getJSON = function () {
                  return r.apply({ json: !0 }, [].slice.call(arguments));
                }),
                (r.defaults = {}),
                (r.remove = function (t, n) {
                  r(t, "", e(n, { expires: -1 }));
                }),
                (r.withConverter = t),
                r
              );
            })(function () {});
          }),
            void 0 ===
              (o = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) ||
              (e.exports = o),
            (e.exports = i());
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o = s(n(2)),
            i = s(n(1)),
            a = s(n(0)),
            u = s(n(23));
          function s(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var c = {
              READY: "statusReady",
              STATE_NOT_READY: "statusNotReady",
              STATE_LOADING: "statusLoading",
              STATE_SCHEDULED: "statusScheduled",
              STATE_ERROR: "statusError",
            },
            l = function () {
              return o.default.getResource("schemas", { data: {} });
            },
            f = (function () {
              function e(t) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.url = t),
                  (this.state = c.STATE_NOT_READY),
                  (this.callbacks = {
                    onReady: [],
                    onError: [],
                    onRetry: [],
                    onLoad: [],
                  });
              }
              return (
                r(e, [
                  {
                    key: "get",
                    value: function (e, t) {
                      var n = e + "-" + t;
                      if (!this.isReady())
                        throw new Error("" + i.default.COMPONENT_NOT_READY);
                      var r = l().data[n];
                      if (!r)
                        throw new Error(i.default.UNSUPPORTED_TYPE + ": " + n);
                      return r;
                    },
                  },
                  {
                    key: "isReady",
                    value: function () {
                      return this.state === c.STATE_READY;
                    },
                  },
                  {
                    key: "retry",
                    value: function () {
                      var e = this;
                      (this.state = c.STATE_SCHEDULED),
                        this.callbacks.onRetry.forEach(function (e) {
                          return e();
                        }),
                        setTimeout(function () {
                          (e.state = c.STATE_NOT_READY), e.load();
                        }, a.default.SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS);
                    },
                  },
                  {
                    key: "onLoad",
                    value: function (e) {
                      this.callbacks.onLoad.push(e);
                    },
                  },
                  {
                    key: "onRetry",
                    value: function (e) {
                      this.callbacks.onRetry.push(e);
                    },
                  },
                  {
                    key: "onReady",
                    value: function (e) {
                      if (this.state === c.STATE_READY) return e(l().data);
                      if (
                        this.callbacks.onReady.length >
                        a.default.HORIZON_CALLBACK_STACK_LIMIT
                      )
                        throw new Error(
                          i.default.LIMIT_EXCEEDED + " Schemas callback stack."
                        );
                      return this.callbacks.onReady.push(e);
                    },
                  },
                  {
                    key: "onError",
                    value: function (e) {
                      this.state === c.STATE_ERROR
                        ? e()
                        : this.callbacks.onError.push(e);
                    },
                  },
                  {
                    key: "execAsync",
                    value: function (e, t) {
                      setTimeout(function () {
                        return e(t);
                      }, 1);
                    },
                  },
                  {
                    key: "load",
                    value: function () {
                      var e = this,
                        t = l();
                      this.state === c.STATE_NOT_READY &&
                        ((this.state = c.STATE_LOADING),
                        this.callbacks.onLoad.forEach(function (e) {
                          return e();
                        }),
                        u.default.request(
                          "GET",
                          this.url,
                          function (n) {
                            (t.data = Object.assign(t.data || {}, n)),
                              (e.state = c.STATE_READY),
                              e.callbacks.onReady.forEach(function (n) {
                                return e.execAsync(n, t.data);
                              });
                          },
                          function (t) {
                            (e.state = c.STATE_ERROR),
                              e.callbacks.onError.forEach(function (n) {
                                return e.execAsync(n, t);
                              }),
                              e.retry();
                          }
                        ));
                    },
                  },
                ]),
                e
              );
            })();
          t.default = {
            getInstance: function (e) {
              var t = l();
              return (
                t.provider ||
                  (t.provider = new f(
                    e || a.default.HORIZON_SCHEMAS_HOST + "/schemas"
                  )),
                t.provider
              );
            },
            getContextSchemas: l,
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = {
              request: function (e, t, n, r) {
                var o = new XMLHttpRequest();
                o.open(e, t, !0),
                  (o.onload = function () {
                    return o.status < 400
                      ? n(JSON.parse(o.response))
                      : r(o.response);
                  }),
                  (o.onerror = r),
                  o.send();
              },
            });
        },
      ]));
  },
  function (e, t, n) {
    e.exports = n(2);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    const r = 5e4,
      o = 18e5,
      i = window.location.hash.includes("user-location-tracking-debug"),
      a = window.location.hash.includes("geo-tracking"),
      u = function () {
        if (i) {
          var e = Array.from(arguments);
          e.splice(0, 0, "[User location tracking]"),
            console.log.apply(console, e);
        }
      },
      s = ["g1"];
    var c = n(0);
    class l {
      constructor(e, t, n) {
        e.coords
          ? ((this.geoData = {
              accuracy: e.coords.accuracy,
              altitude: e.coords.altitude,
              altitudeAccuracy: e.coords.altitudeAccuracy,
              heading: e.coords.heading,
              latitude: e.coords.latitude,
              longitude: e.coords.longitude,
              speed: e.coords.speed,
            }),
            (this.geoData.geoTimestamp = e.timestamp),
            (this.geoData.cached = 0 | t),
            (this.geoData.timeSpent = n))
          : (this.geoData = e);
      }
      get coordinates() {
        return {
          latitude: this.geoData.latitude,
          longitude: this.geoData.longitude,
        };
      }
      get timestamp() {
        return this.geoData.geoTimestamp;
      }
      static save(e) {
        window.localStorage.setItem("geo-tracking", JSON.stringify(e));
      }
      static getLatest() {
        const e = window.localStorage.getItem("geo-tracking");
        return null === e ? e : new l(JSON.parse(e));
      }
      toJSON() {
        return this.geoData;
      }
      toString() {
        return JSON.stringify(this.geoData);
      }
    }
    class f {
      start() {
        this.startTime = Date.now();
      }
      stop() {
        this.endTime = Date.now();
      }
      toMilliseconds() {
        return this.endTime - this.startTime;
      }
    }
    const d = 1,
      h = {},
      p = "denied",
      v = "granted",
      y = "prompt";
    (h[d] = { name: "Permissão Negada", status: "Denied" }),
      (h[2] = { name: "Posição não disponível", status: "Unavailable" }),
      (h[3] = {
        name: `Tempo de espera de ${r}ms finalizou.`,
        status: "Timeout",
      });
    class g {
      constructor(e, t, n) {
        (this.client = new c.HorizonClient(e, t, n)),
          window.addEventListener("beforeunload", () => {
            this.client.unload();
          });
      }
      latestPositionHasExpired() {
        return !0;
      }
      getGeolocationPermissions() {
        return new Promise(function (e, t) {
          return Promise.resolve(
            new Promise(function (e, t) {
              return navigator.permissions
                ? Promise.resolve(
                    navigator.permissions.query({ name: "geolocation" })
                  ).then(e, t)
                : e(null);
            })
          ).then(e, t);
        });
      }
      trackLocation() {
        return new Promise(
          function (e, t) {
            let n;
            return Promise.resolve(this.getGeolocationPermissions()).then(
              function (r) {
                try {
                  return (
                    null !== (n = r) && n.state === p
                      ? this.trackDenied()
                      : (function () {
                          const e = window.chrome,
                            t = window.navigator,
                            n = t.vendor,
                            r = t.userAgent.indexOf("OPR") > -1,
                            o = t.userAgent.indexOf("Edge") > -1;
                          return (
                            !!t.userAgent.match("CriOS") ||
                            (null != e &&
                              "Google Inc." === n &&
                              !1 === r &&
                              !1 === o)
                          );
                        })() && n.state === y
                      ? this.syncTrackStartWithPoupup(n)
                      : this.track(),
                    e()
                  );
                } catch (e) {
                  return t(e);
                }
              }.bind(this),
              t
            );
          }.bind(this)
        );
      }
      syncTrackStartWithPoupup(e) {
        let t = !1;
        u("usando mudança de permissionamento."),
          (e.onchange = (e) => {
            if (!t) {
              switch (e.currentTarget.state) {
                case y:
                  u("permissao feita por cada chamada"), this.track();
                  break;
                case v:
                  u("acesso permitido pelo usuário"), this.track();
                  break;
                case p:
                  u("acesso negado pelo usuário"), this.trackDenied();
              }
              t = !0;
            }
          }),
          navigator.geolocation.getCurrentPosition(
            () => {},
            () => {},
            { timeout: 1, maximumAge: 1 }
          );
      }
      track() {
        return new Promise(
          function (e, t) {
            let n;
            u("trackeando o usuário.");
            var r = function () {
                try {
                  return e();
                } catch (e) {
                  return t(e);
                }
              },
              o = function (e) {
                try {
                  if (e.code === e.TIMEOUT) {
                    u("Obtendo dados do cache");
                    var o = function () {
                        try {
                          return a.call(this);
                        } catch (e) {
                          return t(e);
                        }
                      }.bind(this),
                      i = function (n) {
                        try {
                          return (
                            u(
                              "Erro no cache de geolocalização. Enviando erro da localização com alta precisão."
                            ),
                            this.trackError(e),
                            o()
                          );
                        } catch (e) {
                          return t(e);
                        }
                      }.bind(this);
                    try {
                      let t;
                      return Promise.resolve(this.getRecentPosition()).then(
                        function (e) {
                          try {
                            return (
                              (n = (t = e).toJSON()),
                              this.sendGeolocation(n),
                              o()
                            );
                          } catch (e) {
                            return i(e);
                          }
                        }.bind(this),
                        i
                      );
                    } catch (e) {
                      i(e);
                    }
                  }
                  function a() {
                    return (
                      u(
                        "Erro na geolocalização de alta precisão. Enviando erro."
                      ),
                      this.trackError(e),
                      r()
                    );
                  }
                  return a.call(this);
                } catch (e) {
                  return t(e);
                }
              }.bind(this);
            try {
              let t;
              return Promise.resolve(this.getCurrentPosition()).then(
                function (r) {
                  try {
                    return (
                      (n = (t = r).toJSON()), this.sendGeolocation(t), e(t)
                    );
                  } catch (e) {
                    return o(e);
                  }
                }.bind(this),
                o
              );
            } catch (e) {
              o(e);
            }
          }.bind(this)
        );
      }
      trackDenied() {
        u("permissão negada"),
          this.trackError({ code: d, message: "Permission Denied" });
      }
      trackError(e) {
        return new Promise(
          function (t, n) {
            const r = h[e.code];
            return (
              u("Logando erro", e.message),
              this.client.send({
                id: "generic-geolocation-authorization",
                version: "1.0",
                properties: r,
              }),
              t()
            );
          }.bind(this)
        );
      }
      sendGeolocation(e) {
        u("Enviado para o Horizon", e),
          this.client.send({
            id: "generic-geolocation-load",
            version: "1.1",
            properties: e.toJSON(),
          });
      }
      getCurrentPosition() {
        return new Promise(function (e, t) {
          const n = { enableHighAccuracy: !0, timeout: r, maximumAge: 0 };
          return e(
            new Promise((e, t) => {
              const r = new f();
              r.start(),
                navigator.geolocation.getCurrentPosition(
                  (t) => {
                    r.stop(), u("Usuário localizado com alta precisão.");
                    const n = new l(t, !1, r.toMilliseconds());
                    u(n), e(n);
                  },
                  (e) => {
                    u("Erro durante a geolocalização com alta precisão."),
                      u(e.message),
                      t(e);
                  },
                  n
                );
            })
          );
        });
      }
      getRecentPosition() {
        return new Promise(function (e, t) {
          const n = { maximumAge: o, timeout: 0 };
          return e(
            new Promise((e, t) => {
              u("Buscando por posição cacheada", n);
              const r = new f();
              r.start(),
                navigator.geolocation.getCurrentPosition(
                  (t) => {
                    r.stop();
                    const n = new l(t, !0, r.toMilliseconds());
                    u("localização cacheada encontrada."), u(n), e(n);
                  },
                  (e) => {
                    u("Erro durante a geolocalização cacheada."),
                      u(e.message),
                      t(e);
                  },
                  n
                );
            })
          );
        });
      }
    }
    class E {
      constructor(e, t, n) {
        (globoAB.v2.server = e), (this.productName = t), (this.contentType = n);
      }
      selectTrackingEnabledAlternative() {
        return new Promise(
          function (e, t) {
            const n = [this.productName, this.contentType, "ult"].join("-"),
              r = {};
            return e(
              new Promise((e, t) => {
                globoAB.v2.get(n, r, (n) =>
                  "tracking-enabled" === n.alternative
                    ? (u("capturado no experimento."), e(n))
                    : (u("não capturado no experimento."), t(n))
                );
              })
            );
          }.bind(this)
        );
      }
    }
    window.buildGeoTrackingLoadUp = function (e, t, n, r, o, i) {
      return new Promise(function (l, f) {
        let d;
        if (
          (function () {
            var e = window.safari,
              t = window.navigator,
              n = t.userAgent,
              r = t.vendor,
              o = n.toLowerCase().indexOf("safari") > -1,
              i = r.toLowerCase().indexOf("apple") > -1;
            return e || (o && i);
          })()
        )
          return u("Safari detected! Location Tracker = Off"), l();
        if (o) return u("Preview mode detected! Location Tracker = Off"), l();
        if ((t && c.Settings.useQAConfiguration(), (d = new g(n, r, i)), a)) {
          u("Forcing location tracking enabled");
          var h = function () {
              try {
                return m.call(this);
              } catch (e) {
                return f(e);
              }
            }.bind(this),
            p = function (e) {
              try {
                return u(e.message), h();
              } catch (e) {
                return f(e);
              }
            };
          try {
            return Promise.resolve(d.trackLocation()).then(function (e) {
              try {
                return h();
              } catch (e) {
                return p(e);
              }
            }, p);
          } catch (e) {
            p(e);
          }
        } else {
          let t;
          (t = !s.includes(n)),
            u("Starting location tracking with experiment: ", t ? "ON" : "OFF");
          var v = function () {
              try {
                return m.call(this);
              } catch (e) {
                return f(e);
              }
            }.bind(this),
            y = function (e) {
              try {
                return u(e), v();
              } catch (e) {
                return f(e);
              }
            };
          try {
            if (t) {
              let t;
              return (
                (t = new E(e, n, i)),
                Promise.resolve(t.selectTrackingEnabledAlternative()).then(
                  function (e) {
                    try {
                      return _.call(this);
                    } catch (e) {
                      return y(e);
                    }
                  }.bind(this),
                  y
                )
              );
            }
            function _() {
              return Promise.resolve(d.trackLocation()).then(function (e) {
                try {
                  return v();
                } catch (e) {
                  return y(e);
                }
              }, y);
            }
            return _.call(this);
          } catch (e) {
            y(e);
          }
        }
        function m() {
          return l();
        }
      });
    };
  },
]);
/*! For license information please see web.js.LICENSE.txt */
!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e, t, n) {
    "undefined" != typeof self && self,
      (e.exports = (function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var o = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, r) {
            n.o(e, t) ||
              Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r,
              });
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 7))
        );
      })([
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = o(n(3));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var i = {
              AVOID_COOKIE_USAGE: !1,
              EVENTS_BUFFER_SIZE: 100,
              EVENTS_SENDER_INTERVAL: 1e4,
              EVENTS_SENDER_MIN_INTERVAL: 5e3,
              EVENTS_SENDER_MAX_INTERVAL: 2e4,
              EVENTS_DISCARD_AFTER_MSECS: 36e5,
              EVENTS_BULK_SIZE: 10,
              HORIZON_CALLBACK_STACK_LIMIT: 1e3,
              HORIZON_TRACK_IDENTIFICATION_RESOURCE: "id",
              HORIZON_TRACK_HOST: "horizon-track.globo.com",
              HORIZON_CLIENT_UUID: o(n(2)).default.getResource(
                "clientInstanceUUID",
                (0, r.default)()
              ),
              HORIZON_REQUEST_ENCODING: "base64",
              HORIZON_SCHEMAS_HOST: "horizon-schemas.globo.com",
              IDENTIFICATION_LOAD_RETRY_AFTER_MSECS: 5e3,
              PACKAGE_VERSION: "1.8.0",
              SCHEMA_VALIDATOR_SCRIPT_URL:
                "s3.glbimg.com/cdn/libs/tv4/1.3.0/tv4.min.js",
              SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES: 2,
              SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS: 1e4,
              USE_HTTPS: !0,
            },
            a = {
              avoidCookieUsage: function () {
                i.AVOID_COOKIE_USAGE = !0;
              },
              useHTTPOnly: function () {
                i.USE_HTTPS = !1;
              },
              useQAConfiguration: function () {
                (i.HORIZON_TRACK_HOST = "horizon-track.qa.globoi.com"),
                  (i.HORIZON_SCHEMAS_HOST = "horizon-schemas.qa.globoi.com"),
                  (i.HORIZON_REQUEST_ENCODING = "json");
              },
            };
          t.default = Object.assign(i, a);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = {
              COMPONENT_NOT_READY: "[Horizon] Component is not ready.",
              COMPONENT_UNAVAILABLE: "[Horizon] Class or function is required.",
              DUPLICATED_SCHEMA: "[Horizon] Duplicated schema.",
              ERROR_LOADING_RESOURCE: "[Horizon] Failed to load resource.",
              INVALID_AUTH_TOKEN: "[Horizon] Invalid authorization token.",
              INVALID_DATA: "[Horizon] Invalid data.",
              INVALID_DATE: "[Horizon] Invalid date-time RFC 3339 format.",
              INVALID_ENVIRONMENT: "[Horizon] Invalid environment value.",
              INVALID_FORMAT: "[Horizon] Invalid event format.",
              INVALID_REQUEST: "[Horizon] Invalid request.",
              INVALID_TIMESTAMP: "[Horizon] Invalid timestamp.",
              INVALID_VERSION_FORMAT: "[Horizon] Invalid version format.",
              INVALID_RELATION_ID: "[Horizon] Invalid relation identification.",
              LIMIT_EXCEEDED: "[Horizon] Resource limit exceeded.",
              MUST_BE_DEFINED:
                "[Horizon] Parameter or argument must be defined",
              SCHEMA_VALIDATOR_ERROR_LOADING:
                "[Horizon] Could not load SchemaValidator.",
              UNSUPPORTED_TYPE: "[Horizon] Unsupported type.",
              UNSUPPORTED_TENANT: "[Horizon] Unsupported tenant.",
              UNSUPPORTED_ENCODER: "[Horizon] Unsupported encoder.",
              USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE:
                "[Horizon] Can not set or remove a logged user when AVOID_COOKIE_USAGE is not enabled.",
            },
            o = {
              mustBeDefined: function (e) {
                throw new Error(r.MUST_BE_DEFINED + ": " + e + ".");
              },
            };
          t.default = Object.assign(r, o);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = function () {
            return (
              (window.horizonResources = window.horizonResources || {}),
              window.horizonResources
            );
          };
          t.default = {
            getContext: r,
            getResource: function (e, t) {
              var n = r();
              return (n[e] = n[e] || t), n[e];
            },
          };
        },
        function (e, t, n) {
          var r = n(11),
            o = n(12);
          e.exports = function (e, t, n) {
            var i = (t && n) || 0;
            "string" == typeof e &&
              ((t = "binary" === e ? new Array(16) : null), (e = null));
            var a = (e = e || {}).random || (e.rng || r)();
            if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t))
              for (var u = 0; u < 16; ++u) t[i + u] = a[u];
            return t || o(a);
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = {
              execAsync: function (e, t) {
                setTimeout(function () {
                  return e(t);
                }, 1);
              },
            });
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = {
              request: function (e, t, n, r) {
                var o = new XMLHttpRequest();
                o.open(e, t, !0),
                  (o.onload = function () {
                    return o.status < 400
                      ? n(JSON.parse(o.response))
                      : r(o.response);
                  }),
                  (o.onerror = r),
                  o.send();
              },
            });
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o = c(n(4)),
            i = c(n(2)),
            a = c(n(1)),
            u = c(n(5)),
            s = c(n(0));
          function c(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var l = function () {
              return i.default.getResource("idManager", {
                loggedIDs: null,
                anonymousIDs: null,
                sessionIDs: null,
              });
            },
            f = ["GLBID", "GST"],
            d = {
              STATE_READY: "statusReady",
              STATE_NOT_READY: "statusNotReady",
              STATE_LOADING: "statusLoading",
              STATE_SCHEDULED: "statusScheduled",
              STATE_ERROR: "statusError",
            },
            h = (function () {
              function e(t, n) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.state = n ? d.STATE_READY : d.STATE_NOT_READY),
                  (this.url = t),
                  (this.bypass = n),
                  (this.callbacks = {
                    onReady: [],
                    onError: [],
                    onRetry: [],
                    onLoad: [],
                  });
              }
              return (
                r(e, [
                  {
                    key: "onLoad",
                    value: function (e) {
                      this.callbacks.onLoad.push(e);
                    },
                  },
                  {
                    key: "onRetry",
                    value: function (e) {
                      this.callbacks.onRetry.push(e);
                    },
                  },
                  {
                    key: "onReady",
                    value: function (e) {
                      if (this.state === d.STATE_READY)
                        return e(this.getClientIDs());
                      if (
                        this.callbacks.onReady.length >
                        s.default.HORIZON_CALLBACK_STACK_LIMIT
                      )
                        throw new Error(
                          a.default.LIMIT_EXCEEDED +
                            " IDManager callback stack."
                        );
                      return this.callbacks.onReady.push(e);
                    },
                  },
                  {
                    key: "onError",
                    value: function (e) {
                      this.state === d.STATE_ERROR
                        ? e()
                        : this.callbacks.onError.push(e);
                    },
                  },
                  {
                    key: "getAsKeyValue",
                    value: function () {
                      if (!this.isReady())
                        throw new Error("" + a.default.COMPONENT_NOT_READY);
                      if (this.bypass) return "";
                      var e = this.getClientIDs();
                      return Object.keys(e)
                        .map(function (t) {
                          return (
                            encodeURIComponent(t) +
                            "=" +
                            encodeURIComponent(e[t])
                          );
                        })
                        .join("&");
                    },
                  },
                  {
                    key: "getClientIDs",
                    value: function () {
                      var e = l();
                      return Object.assign(
                        e.loggedIDs || {},
                        e.anonymousIDs || {},
                        e.sessionIDs || {}
                      );
                    },
                  },
                  {
                    key: "isReady",
                    value: function () {
                      return this.state === d.STATE_READY;
                    },
                  },
                  {
                    key: "retry",
                    value: function () {
                      var e = this;
                      (this.state = d.STATE_SCHEDULED),
                        this.callbacks.onRetry.forEach(function (e) {
                          return e();
                        }),
                        setTimeout(function () {
                          (e.state = d.STATE_NOT_READY), e.load();
                        }, s.default.IDENTIFICATION_LOAD_RETRY_AFTER_MSECS);
                    },
                  },
                  {
                    key: "setLoggedUser",
                    value: function (e, t) {
                      if (-1 === f.indexOf(e))
                        throw Error(a.default.INVALID_AUTH_TOKEN);
                      var n = l();
                      n.loggedIDs = Object.assign(
                        n.loggedIDs || {},
                        (function (e, t, n) {
                          return (
                            t in e
                              ? Object.defineProperty(e, t, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (e[t] = n),
                            e
                          );
                        })({}, e, t)
                      );
                    },
                  },
                  {
                    key: "setAnonymousUser",
                    value: function (e) {
                      var t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        n = l();
                      if (null == n.anonymousIDs || t) {
                        if (!("glb_uid" in e) || !("glb_uid_public" in e))
                          throw a.default.mustBeDefined(
                            "glb_uid and glb_uid_public"
                          );
                        var r = {
                          glb_uid: e.glb_uid,
                          glb_uid_public: e.glb_uid_public,
                        };
                        n.anonymousIDs = Object.assign(n.anonymousIDs || {}, r);
                      }
                    },
                  },
                  {
                    key: "getAnonymousUser",
                    value: function () {
                      return l().anonymousIDs;
                    },
                  },
                  {
                    key: "setSessionID",
                    value: function (e) {
                      e.hsid &&
                        (l().sessionIDs = Object.assign({}, { hsid: e.hsid }));
                    },
                  },
                  {
                    key: "removeLoggedUser",
                    value: function () {
                      var e = l();
                      f.forEach(function (t) {
                        e.loggedIDs[t] && delete e.loggedIDs[t];
                      });
                    },
                  },
                  {
                    key: "load",
                    value: function () {
                      var e = this;
                      if (this.state === d.STATE_NOT_READY) {
                        (this.state = d.STATE_LOADING),
                          this.callbacks.onLoad.forEach(function (e) {
                            return e();
                          });
                        var t = s.default.USE_HTTPS ? "https://" : "http://";
                        u.default.request(
                          "GET",
                          "" + t + this.url,
                          function (t) {
                            e.setSessionID(t),
                              e.setAnonymousUser(t, !1),
                              (e.state = d.STATE_READY),
                              e.callbacks.onReady.forEach(function (t) {
                                return o.default.execAsync(t, e.getClientIDs());
                              });
                          },
                          function (t) {
                            (e.state = d.STATE_ERROR),
                              e.callbacks.onError.forEach(function (e) {
                                return o.default.execAsync(e, t);
                              }),
                              e.retry();
                          }
                        );
                      }
                    },
                  },
                ]),
                e
              );
            })(),
            v = function (e) {
              var t = l();
              if (!t.instance) {
                var n =
                    e ||
                    s.default.HORIZON_TRACK_HOST +
                      "/" +
                      s.default.HORIZON_TRACK_IDENTIFICATION_RESOURCE,
                  r = !1 === s.default.AVOID_COOKIE_USAGE;
                t.instance = new h(n, r);
              }
              return t.instance;
            };
          t.default = {
            getInstance: v,
            getContextManager: l,
            setLoggedUser: function (e, t) {
              if (!s.default.AVOID_COOKIE_USAGE)
                throw Error(a.default.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE);
              (e && 0 !== e.length) || a.default.mustBeDefined("tokenName"),
                (t && 0 !== t.length) || a.default.mustBeDefined("tokenValue"),
                v().setLoggedUser(e, t);
            },
            removeLoggedUser: function () {
              if (!s.default.AVOID_COOKIE_USAGE)
                throw Error(a.default.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE);
              v().removeLoggedUser();
            },
            setAnonymousUser: function (e) {
              v().setAnonymousUser(e);
            },
            getAnonymousUser: function () {
              return v().getAnonymousUser();
            },
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.IDManager = t.Settings = t.HorizonClient = void 0),
            n(8);
          var r = a(n(10)),
            o = a(n(0)),
            i = a(n(6));
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var u = {
            setLoggedUser: i.default.setLoggedUser,
            removeLoggedUser: i.default.removeLoggedUser,
            setAnonymousUser: i.default.setAnonymousUser,
            getAnonymousUser: i.default.getAnonymousUser,
          };
          (t.HorizonClient = r.default),
            (t.Settings = o.default),
            (t.IDManager = u);
        },
        function (e, t, n) {
          "use strict";
          n(9).polyfill();
        },
        function (e, t, n) {
          "use strict";
          function r(e, t) {
            if (null == e)
              throw new TypeError("Cannot convert first argument to object");
            for (var n = Object(e), r = 1; r < arguments.length; r++) {
              var o = arguments[r];
              if (null != o)
                for (
                  var i = Object.keys(Object(o)), a = 0, u = i.length;
                  a < u;
                  a++
                ) {
                  var s = i[a],
                    c = Object.getOwnPropertyDescriptor(o, s);
                  void 0 !== c && c.enumerable && (n[s] = o[s]);
                }
            }
            return n;
          }
          e.exports = {
            assign: r,
            polyfill: function () {
              Object.assign ||
                Object.defineProperty(Object, "assign", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: r,
                });
            },
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            o = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            i = h(n(3)),
            a = h(n(0)),
            u = h(n(13)),
            s = h(n(1)),
            c = h(n(15)),
            l = h(n(26)),
            f = h(n(27)),
            d = h(n(6));
          function h(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var v = {
              READY: "stateReady",
              UNLOADED: "stateNotReady",
              LOADING: "stateLoading",
            },
            E = ["web", "instant-article", "app"],
            p = (function () {
              function e() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null,
                  r = this,
                  o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "web";
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                  (this.tenant =
                    t ||
                    f.default.getTenant() ||
                    s.default.mustBeDefined("tenant")),
                  (this.deviceGroup =
                    n ||
                    f.default.getDeviceGroup() ||
                    s.default.mustBeDefined("deviceGroup")),
                  (this.defaultContentType = o),
                  -1 === E.indexOf(i))
                )
                  throw Error(s.default.INVALID_ENVIRONMENT);
                (this.environment = i),
                  (this.validator = u.default),
                  (this.clientVersion = a.default.PACKAGE_VERSION),
                  (this.state = v.UNLOADED),
                  (this.referer = document.referrer);
                var h = null,
                  p = null,
                  y = null;
                (this.setSchemasProvider = function (e) {
                  h = e;
                }),
                  (this.getSchemasProvider = function () {
                    if (!h) {
                      var e = l.default.getInstance();
                      r.setSchemasProvider(e);
                    }
                    return h;
                  }),
                  (this.setEventBus = function (e) {
                    p = e;
                  }),
                  (this.getEventBus = function () {
                    if (!p) {
                      var e = c.default.getInstance(
                        r.tenant,
                        r.deviceGroup,
                        r.environment,
                        r.getIdManager()
                      );
                      r.setEventBus(e);
                    }
                    return p;
                  }),
                  (this.setIdManager = function (e) {
                    y = e;
                  }),
                  (this.getIdManager = function () {
                    if (!y) {
                      var e = d.default.getInstance();
                      r.setIdManager(e);
                    }
                    return y;
                  }),
                  (this.isReady = function () {
                    return (
                      !!h &&
                      !!y &&
                      r.validator.isReady() &&
                      h.isReady() &&
                      y.isReady()
                    );
                  }),
                  window.addEventListener("beforeunload", function () {
                    r.unload();
                  });
              }
              return (
                o(e, [
                  {
                    key: "useDefaultContentType",
                    value: function (e) {
                      this.defaultContentType = e;
                    },
                  },
                  {
                    key: "setValidator",
                    value: function (e) {
                      this.validator = e;
                    },
                  },
                  {
                    key: "setReferer",
                    value: function (e) {
                      this.referer = e || document.referrer;
                    },
                  },
                  {
                    key: "unload",
                    value: function () {
                      this.flush();
                    },
                  },
                  {
                    key: "getScopeInfo",
                    value: function (e) {
                      return {
                        url: document.location.href,
                        actionTs: +Date.now(),
                        horizonClientVersion: this.clientVersion,
                        horizonClientReferer: this.referer,
                        horizonRelationId: e,
                      };
                    },
                  },
                  {
                    key: "validateBeforeEnqueue",
                    value: function (e) {
                      var t = this.getSchemasProvider().get(e.id, e.version);
                      this.validator.validateFor(e, t);
                    },
                  },
                  {
                    key: "onReady",
                    value: function (e) {
                      this.validator.isReady()
                        ? this.getSchemasProvider().isReady()
                          ? this.getIdManager().isReady()
                            ? ((this.state = v.READY), e())
                            : ((this.state = v.LOADING),
                              this.getIdManager().onReady(e),
                              this.getIdManager().load())
                          : ((this.state = v.LOADING),
                            this.getSchemasProvider().onReady(e),
                            this.getSchemasProvider().load())
                        : ((this.state = v.LOADING),
                          this.validator.onReady(e),
                          this.validator.load());
                    },
                  },
                  {
                    key: "flush",
                    value: function () {
                      var e = this;
                      this.isReady()
                        ? this.getEventBus().flush()
                        : this.onReady(function () {
                            return e.flush();
                          });
                    },
                  },
                  {
                    key: "send",
                    value: function (e) {
                      var t = this,
                        n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : (0, i.default)();
                      if ("string" != typeof n)
                        throw new Error(
                          s.default.INVALID_RELATION_ID +
                            " Wrong relationId type: " +
                            (void 0 === n ? "undefined" : r(n))
                        );
                      return (
                        [].concat(e).forEach(function (e) {
                          t.validator.validateArgs(e),
                            t.sendWithInfo(e, t.getScopeInfo(n));
                        }),
                        n
                      );
                    },
                  },
                  {
                    key: "sendWithInfo",
                    value: function (e, t) {
                      var n = this;
                      if (!this.isReady())
                        return (
                          this.state === v.UNLOADED && this.flush(),
                          void this.onReady(function () {
                            return n.sendWithInfo(e, t);
                          })
                        );
                      this.validateBeforeEnqueue(e);
                      var r = Object.assign({}, t, e);
                      r.contentType ||
                        (this.defaultContentType ||
                          s.default.mustBeDefined("contentType"),
                        (r.contentType = this.defaultContentType)),
                        this.getEventBus().enqueue(r);
                    },
                  },
                ]),
                e
              );
            })();
          t.default = p;
        },
        function (e, t) {
          var n =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof window.msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto));
          if (n) {
            var r = new Uint8Array(16);
            e.exports = function () {
              return n(r), r;
            };
          } else {
            var o = new Array(16);
            e.exports = function () {
              for (var e, t = 0; t < 16; t++)
                0 == (3 & t) && (e = 4294967296 * Math.random()),
                  (o[t] = (e >>> ((3 & t) << 3)) & 255);
              return o;
            };
          }
        },
        function (e, t) {
          for (var n = [], r = 0; r < 256; ++r)
            n[r] = (r + 256).toString(16).substr(1);
          e.exports = function (e, t) {
            var r = t || 0,
              o = n;
            return [
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              "-",
              o[e[r++]],
              o[e[r++]],
              "-",
              o[e[r++]],
              o[e[r++]],
              "-",
              o[e[r++]],
              o[e[r++]],
              "-",
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
              o[e[r++]],
            ].join("");
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            o = u(n(14)),
            i = u(n(1)),
            a = u(n(0));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var s = { ready: [] },
            c = ["url"],
            l = function () {
              return !!window.tv4;
            },
            f = function (e) {
              return null === e || (isNaN(e) && !isNaN(Date.parse(e)))
                ? null
                : i.default.INVALID_DATE;
            };
          t.default = {
            validateFor: function (e, t) {
              if (!l())
                throw new Error(
                  i.default.ERROR_LOADING_RESOURCE + " Validator is not ready."
                );
              if (!t)
                throw new Error(i.default.INVALID_DATA + " Argument: schema.");
              if (!/\d+\.\d+/.test(e.version))
                throw new Error(i.default.INVALID_VERSION_FORMAT);
              if (!tv4.validate(e.properties, t))
                throw new Error(
                  i.default.INVALID_DATA +
                    " " +
                    e.id +
                    " " +
                    e.version +
                    ". " +
                    tv4.error
                );
            },
            validateArgs: function (e) {
              var t = Object.prototype.hasOwnProperty;
              if (
                !(
                  e &&
                  t.call(e, "id") &&
                  t.call(e, "version") &&
                  t.call(e, "properties")
                )
              )
                throw new Error(
                  i.default.INVALID_FORMAT +
                    " Missing properties: " +
                    JSON.stringify(e)
                );
              if (
                "string" != typeof e.id ||
                "string" != typeof e.version ||
                "object" !== r(e.properties)
              )
                throw new Error(
                  i.default.INVALID_FORMAT +
                    " Wrong object type: " +
                    JSON.stringify(e)
                );
              if (
                c.filter(function (t) {
                  return e[t] && "string" != typeof e[t];
                }).length > 0
              )
                throw new Error(
                  i.default.INVALID_FORMAT +
                    " Wrong object type: " +
                    JSON.stringify(e)
                );
              if (e.id.length < 2 || e.version.length < 3)
                throw new Error(
                  i.default.INVALID_FORMAT +
                    " Invalid property size: " +
                    JSON.stringify(e)
                );
              var n = Object.assign({}, e);
              delete n.id,
                delete n.version,
                delete n.properties,
                delete n.contentType;
              var o = Object.keys(n);
              if (
                o.length > 0 &&
                !o.every(function (e) {
                  return -1 !== c.indexOf(e);
                })
              )
                throw new Error(
                  i.default.INVALID_FORMAT +
                    " Extra keys aren't allowed: " +
                    JSON.stringify(n)
                );
            },
            tv4IsValidData: f,
            isReady: l,
            onReady: function (e) {
              if (l()) return e();
              if (s.ready.length > a.default.HORIZON_CALLBACK_STACK_LIMIT)
                throw new Error(
                  i.default.LIMIT_EXCEEDED + " Validator callback stack."
                );
              return s.ready.unshift(e);
            },
            load: function () {
              if (!o.default.isDefined("tv4")) {
                var e =
                  (a.default.USE_HTTPS ? "https://" : "http://") +
                  a.default.SCHEMA_VALIDATOR_SCRIPT_URL;
                (0, o.default)([e], "tv4", {
                  async: !0,
                  numRetries: a.default.SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES,
                  success: function () {
                    tv4.addFormat("date-time", f),
                      s.ready.forEach(function (e) {
                        return e();
                      });
                  },
                  error: function (e) {
                    throw new Error(
                      i.default.SCHEMA_VALIDATOR_ERROR_LOADING + " " + e
                    );
                  },
                });
              }
            },
          };
        },
        function (e, t, n) {
          var r, o, i, a;
          (a = function () {
            var e = function () {},
              t = {},
              n = {},
              r = {};
            function o(e, t) {
              if (e) {
                var o = r[e];
                if (((n[e] = t), o))
                  for (; o.length; ) o[0](e, t), o.splice(0, 1);
              }
            }
            function i(t, n) {
              t.call && (t = { success: t }),
                n.length ? (t.error || e)(n) : (t.success || e)(t);
            }
            function a(t, n, r, o) {
              var i,
                u,
                s = document,
                c = r.async,
                l = (r.numRetries || 0) + 1,
                f = r.before || e,
                d = t.replace(/^(css|img)!/, "");
              (o = o || 0),
                /(^css!|\.css$)/.test(t)
                  ? (((u = s.createElement("link")).rel = "stylesheet"),
                    (u.href = d),
                    (i = "hideFocus" in u) &&
                      u.relList &&
                      ((i = 0), (u.rel = "preload"), (u.as = "style")))
                  : /(^img!|\.(png|gif|jpg|svg)$)/.test(t)
                  ? ((u = s.createElement("img")).src = d)
                  : (((u = s.createElement("script")).src = t),
                    (u.async = void 0 === c || c)),
                (u.onload =
                  u.onerror =
                  u.onbeforeload =
                    function (e) {
                      var s = e.type[0];
                      if (i)
                        try {
                          u.sheet.cssText.length || (s = "e");
                        } catch (e) {
                          18 != e.code && (s = "e");
                        }
                      if ("e" == s) {
                        if ((o += 1) < l) return a(t, n, r, o);
                      } else if ("preload" == u.rel && "style" == u.as)
                        return (u.rel = "stylesheet");
                      n(t, s, e.defaultPrevented);
                    }),
                !1 !== f(t, u) && s.head.appendChild(u);
            }
            function u(e, n, r) {
              var u, s;
              if ((n && n.trim && (u = n), (s = (u ? r : n) || {}), u)) {
                if (u in t) throw "LoadJS";
                t[u] = !0;
              }
              function c(t, n) {
                !(function (e, t, n) {
                  var r,
                    o,
                    i = (e = e.push ? e : [e]).length,
                    u = i,
                    s = [];
                  for (
                    r = function (e, n, r) {
                      if (("e" == n && s.push(e), "b" == n)) {
                        if (!r) return;
                        s.push(e);
                      }
                      --i || t(s);
                    },
                      o = 0;
                    o < u;
                    o++
                  )
                    a(e[o], r, n);
                })(
                  e,
                  function (e) {
                    i(s, e), t && i({ success: t, error: n }, e), o(u, e);
                  },
                  s
                );
              }
              if (s.returnPromise) return new Promise(c);
              c();
            }
            return (
              (u.ready = function (e, t) {
                return (
                  (function (e, t) {
                    var o,
                      i,
                      a,
                      u = [],
                      s = (e = e.push ? e : [e]).length,
                      c = s;
                    for (
                      o = function (e, n) {
                        n.length && u.push(e), --c || t(u);
                      };
                      s--;

                    )
                      (i = e[s]),
                        (a = n[i]) ? o(i, a) : (r[i] = r[i] || []).push(o);
                  })(e, function (e) {
                    i(t, e);
                  }),
                  u
                );
              }),
              (u.done = function (e) {
                o(e, []);
              }),
              (u.reset = function () {
                (t = {}), (n = {}), (r = {});
              }),
              (u.isDefined = function (e) {
                return e in t;
              }),
              u
            );
          }),
            (o = []),
            void 0 === (i = "function" == typeof (r = a) ? r.apply(t, o) : r) ||
              (e.exports = i);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          n(16);
          var o = f(n(2)),
            i = f(n(17)),
            a = f(n(0)),
            u = f(n(1)),
            s = f(n(22)),
            c = f(n(24)),
            l = f(n(25));
          function f(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var d = function () {
              return o.default.getResource("bus", {});
            },
            h = (function () {
              function e(t, n, r, o, i) {
                var f = this;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.currentTenant = t || u.default.mustBeDefined("tenant")),
                  (this.instanceID =
                    n || u.default.mustBeDefined("instanceID")),
                  (this.deviceGroup =
                    r || u.default.mustBeDefined("deviceGroup")),
                  (this.environment =
                    o || u.default.mustBeDefined("environment")),
                  (this.queue = new c.default(a.default.EVENTS_BUFFER_SIZE)),
                  (this.idManager = i),
                  (this.dispatchNumber = 1),
                  (this.actionCounter = 0),
                  new l.default()
                    .every(a.default.EVENTS_SENDER_INTERVAL)
                    .call(function () {
                      f.queue = f.filterQueue();
                      var e = f.prepareRequest();
                      f.dispatch(e, a.default.HORIZON_REQUEST_ENCODING) ||
                        e.actions.forEach(function (e) {
                          return f.enqueue(e);
                        });
                    })
                    .call(s.default.applyThrottlingPolicy)
                    .start();
              }
              return (
                r(e, [
                  {
                    key: "setMaxQueueSize",
                    value: function (e) {
                      this.queue = c.default.fromArray(this.queue.items, e);
                    },
                  },
                  {
                    key: "filterQueue",
                    value: function () {
                      var e =
                        +Date.now() - a.default.EVENTS_DISCARD_AFTER_MSECS;
                      return this.queue.filter(function (t) {
                        return t.actionTs > e;
                      });
                    },
                  },
                  {
                    key: "prepareRequest",
                    value: function () {
                      var e = this.queue.splice(0, a.default.EVENTS_BULK_SIZE);
                      return (
                        (this.actionCounter += e.length),
                        {
                          horizonClientUUID: this.instanceID,
                          horizonClientTenant: this.currentTenant,
                          horizonClientTs: Date.now(),
                          horizonClientType: "js",
                          horizonClientDeviceGroup: this.deviceGroup,
                          horizonDispatchNumber: this.dispatchNumber,
                          horizonActionCounter: this.actionCounter,
                          horizonEnvironment: this.environment,
                          actions: e,
                        }
                      );
                    },
                  },
                  {
                    key: "isValidRequest",
                    value: function (e) {
                      if (!e || (e && !e.actions))
                        throw new Error(u.default.INVALID_REQUEST);
                      return e.actions.length > 0;
                    },
                  },
                  {
                    key: "dispatch",
                    value: function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "json",
                        n = a.default.USE_HTTPS ? "https://" : "http://",
                        r = this.idManager.getAsKeyValue(),
                        o = r ? "?" + r : "",
                        u =
                          "" +
                          n +
                          s.default.applyDestinationPolicy() +
                          "/event/" +
                          this.currentTenant +
                          o,
                        c = i.default.get(t);
                      if (!this.isValidRequest(e)) return !1;
                      this.dispatchNumber += 1;
                      var l = c(e);
                      return navigator.sendBeacon(u, l);
                    },
                  },
                  {
                    key: "enqueue",
                    value: function (e) {
                      if (!e.actionTs)
                        throw new Error(u.default.INVALID_TIMESTAMP);
                      this.queue.push(e);
                    },
                  },
                  {
                    key: "flush",
                    value: function () {
                      for (; this.queue.length > 0; ) {
                        this.queue = this.filterQueue();
                        var e = this.prepareRequest();
                        this.dispatch(e, a.default.HORIZON_REQUEST_ENCODING);
                      }
                    },
                  },
                  {
                    key: "length",
                    get: function () {
                      return this.queue.length;
                    },
                  },
                ]),
                e
              );
            })();
          t.default = {
            getInstance: function (e, t, n, r) {
              var o = d(),
                i = e + "-" + t;
              return (
                o[i] ||
                  (o[i] = new h(e, a.default.HORIZON_CLIENT_UUID, t, n, r)),
                o[i]
              );
            },
            reset: function (e, t) {
              (e && 0 !== e.length) || u.default.mustBeDefined("tenant"),
                (t && 0 !== t.length) || u.default.mustBeDefined("deviceGroup");
              var n = e + "-" + t;
              delete d()[n];
            },
            getContextBus: d,
          };
        },
        function (e, t) {
          function n(e) {
            return (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          var r = function (e) {
              return "string" == typeof e;
            },
            o = function (e) {
              return e instanceof Blob;
            };
          (function () {
            (function () {
              return "navigator" in this && "sendBeacon" in this.navigator;
            }).call(this) ||
              ("navigator" in this || (this.navigator = {}),
              (this.navigator.sendBeacon = function (e, t) {
                var n = this.event && this.event.type,
                  i = "unload" === n || "beforeunload" === n,
                  a =
                    "XMLHttpRequest" in this
                      ? new XMLHttpRequest()
                      : new ActiveXObject("Microsoft.XMLHTTP");
                a.open("POST", e, !i),
                  (a.withCredentials = !0),
                  a.setRequestHeader("Accept", "*/*"),
                  r(t)
                    ? (a.setRequestHeader(
                        "Content-Type",
                        "text/plain;charset=UTF-8"
                      ),
                      (a.responseType = "text/plain"))
                    : o(t) &&
                      t.type &&
                      a.setRequestHeader("Content-Type", t.type);
                try {
                  a.send(t);
                } catch (e) {
                  return !1;
                }
                return !0;
              }.bind(this)));
          }).call(
            "object" ===
              ("undefined" == typeof window ? "undefined" : n(window))
              ? window
              : {}
          );
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = a(n(18)),
            o = a(n(21)),
            i = a(n(1));
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var u = {
            base64: function (e) {
              var t = new FormData();
              return (
                t.append(
                  "data",
                  r.default.encode(o.default.encode(JSON.stringify(e)))
                ),
                t.append("encoding", "base64"),
                t
              );
            },
            json: function (e) {
              return JSON.stringify(e);
            },
          };
          t.default = {
            get: function (e) {
              if (!(e in u))
                throw new Error(
                  i.default.UNSUPPORTED_ENCODER + " Invalid " + e + " encoder."
                );
              return u[e];
            },
          };
        },
        function (e, t, n) {
          (function (e, r) {
            var o;
            !(function (i) {
              var a =
                ("object" == typeof e && e && e.exports,
                "object" == typeof r && r);
              a.global !== a && a.window;
              var u = function (e) {
                this.message = e;
              };
              (u.prototype = new Error()).name = "InvalidCharacterError";
              var s = function (e) {
                  throw new u(e);
                },
                c =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                l = /[\t\n\f\r ]/g,
                f = {
                  encode: function (e) {
                    (e = String(e)),
                      /[^\0-\xFF]/.test(e) &&
                        s(
                          "The string to be encoded contains characters outside of the Latin1 range."
                        );
                    for (
                      var t,
                        n,
                        r,
                        o,
                        i = e.length % 3,
                        a = "",
                        u = -1,
                        l = e.length - i;
                      ++u < l;

                    )
                      (t = e.charCodeAt(u) << 16),
                        (n = e.charCodeAt(++u) << 8),
                        (r = e.charCodeAt(++u)),
                        (a +=
                          c.charAt(((o = t + n + r) >> 18) & 63) +
                          c.charAt((o >> 12) & 63) +
                          c.charAt((o >> 6) & 63) +
                          c.charAt(63 & o));
                    return (
                      2 == i
                        ? ((t = e.charCodeAt(u) << 8),
                          (n = e.charCodeAt(++u)),
                          (a +=
                            c.charAt((o = t + n) >> 10) +
                            c.charAt((o >> 4) & 63) +
                            c.charAt((o << 2) & 63) +
                            "="))
                        : 1 == i &&
                          ((o = e.charCodeAt(u)),
                          (a +=
                            c.charAt(o >> 2) + c.charAt((o << 4) & 63) + "==")),
                      a
                    );
                  },
                  decode: function (e) {
                    var t = (e = String(e).replace(l, "")).length;
                    t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
                      (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) &&
                        s(
                          "Invalid character: the string to be decoded is not correctly encoded."
                        );
                    for (var n, r, o = 0, i = "", a = -1; ++a < t; )
                      (r = c.indexOf(e.charAt(a))),
                        (n = o % 4 ? 64 * n + r : r),
                        o++ % 4 &&
                          (i += String.fromCharCode(
                            255 & (n >> ((-2 * o) & 6))
                          ));
                    return i;
                  },
                  version: "0.1.0",
                };
              void 0 ===
                (o = function () {
                  return f;
                }.call(t, n, t, e)) || (e.exports = o);
            })();
          }).call(t, n(19)(e), n(20));
        },
        function (e, t) {
          e.exports = function (e) {
            return (
              e.webpackPolyfill ||
                ((e.deprecate = function () {}),
                (e.paths = []),
                e.children || (e.children = []),
                Object.defineProperty(e, "loaded", {
                  enumerable: !0,
                  get: function () {
                    return e.l;
                  },
                }),
                Object.defineProperty(e, "id", {
                  enumerable: !0,
                  get: function () {
                    return e.i;
                  },
                }),
                (e.webpackPolyfill = 1)),
              e
            );
          };
        },
        function (e, t) {
          var n;
          n = (function () {
            return this;
          })();
          try {
            n = n || Function("return this")() || (0, eval)("this");
          } catch (e) {
            "object" == typeof window && (n = window);
          }
          e.exports = n;
        },
        function (e, t, n) {
          !(function (e) {
            var t,
              n,
              r,
              o = String.fromCharCode;
            function i(e) {
              for (var t, n, r = [], o = 0, i = e.length; o < i; )
                (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i
                  ? 56320 == (64512 & (n = e.charCodeAt(o++)))
                    ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                    : (r.push(t), o--)
                  : r.push(t);
              return r;
            }
            function a(e) {
              if (e >= 55296 && e <= 57343)
                throw Error(
                  "Lone surrogate U+" +
                    e.toString(16).toUpperCase() +
                    " is not a scalar value"
                );
            }
            function u(e, t) {
              return o(((e >> t) & 63) | 128);
            }
            function s(e) {
              if (0 == (4294967168 & e)) return o(e);
              var t = "";
              return (
                0 == (4294965248 & e)
                  ? (t = o(((e >> 6) & 31) | 192))
                  : 0 == (4294901760 & e)
                  ? (a(e), (t = o(((e >> 12) & 15) | 224)), (t += u(e, 6)))
                  : 0 == (4292870144 & e) &&
                    ((t = o(((e >> 18) & 7) | 240)),
                    (t += u(e, 12)),
                    (t += u(e, 6))),
                t + o((63 & e) | 128)
              );
            }
            function c() {
              if (r >= n) throw Error("Invalid byte index");
              var e = 255 & t[r];
              if ((r++, 128 == (192 & e))) return 63 & e;
              throw Error("Invalid continuation byte");
            }
            function l() {
              var e, o;
              if (r > n) throw Error("Invalid byte index");
              if (r == n) return !1;
              if (((e = 255 & t[r]), r++, 0 == (128 & e))) return e;
              if (192 == (224 & e)) {
                if ((o = ((31 & e) << 6) | c()) >= 128) return o;
                throw Error("Invalid continuation byte");
              }
              if (224 == (240 & e)) {
                if ((o = ((15 & e) << 12) | (c() << 6) | c()) >= 2048)
                  return a(o), o;
                throw Error("Invalid continuation byte");
              }
              if (
                240 == (248 & e) &&
                (o = ((7 & e) << 18) | (c() << 12) | (c() << 6) | c()) >=
                  65536 &&
                o <= 1114111
              )
                return o;
              throw Error("Invalid UTF-8 detected");
            }
            (e.version = "3.0.0"),
              (e.encode = function (e) {
                for (var t = i(e), n = t.length, r = -1, o = ""; ++r < n; )
                  o += s(t[r]);
                return o;
              }),
              (e.decode = function (e) {
                (t = i(e)), (n = t.length), (r = 0);
                for (var a, u = []; !1 !== (a = l()); ) u.push(a);
                return (function (e) {
                  for (var t, n = e.length, r = -1, i = ""; ++r < n; )
                    (t = e[r]) > 65535 &&
                      ((i += o((((t -= 65536) >>> 10) & 1023) | 55296)),
                      (t = 56320 | (1023 & t))),
                      (i += o(t));
                  return i;
                })(u);
              });
          })(t);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = i(n(23)),
            o = i(n(0));
          function i(e) {
            return e && e.__esModule ? e : { default: e };
          }
          t.default = {
            applyThrottlingPolicy: function (e) {
              var t = o.default.EVENTS_SENDER_MIN_INTERVAL,
                n = o.default.EVENTS_SENDER_MAX_INTERVAL,
                i =
                  Number(r.default.get("_hzt.interval")) ||
                  o.default.EVENTS_SENDER_INTERVAL;
              i <= n && i >= t && e.interval !== i && e.reschedule(i);
            },
            applyDestinationPolicy: function () {
              return r.default.get("_hzt.host") || o.default.HORIZON_TRACK_HOST;
            },
          };
        },
        function (e, t, n) {
          var r, o, i;
          (i = function () {
            function e() {
              for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r];
              }
              return t;
            }
            return (function t(n) {
              function r(t, o, i) {
                var a;
                if ("undefined" != typeof document) {
                  if (arguments.length > 1) {
                    if (
                      "number" ==
                      typeof (i = e({ path: "/" }, r.defaults, i)).expires
                    ) {
                      var u = new Date();
                      u.setMilliseconds(
                        u.getMilliseconds() + 864e5 * i.expires
                      ),
                        (i.expires = u);
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                      (a = JSON.stringify(o)), /^[\{\[]/.test(a) && (o = a);
                    } catch (e) {}
                    (o = n.write
                      ? n.write(o, t)
                      : encodeURIComponent(String(o)).replace(
                          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                          decodeURIComponent
                        )),
                      (t = (t = (t = encodeURIComponent(String(t))).replace(
                        /%(23|24|26|2B|5E|60|7C)/g,
                        decodeURIComponent
                      )).replace(/[\(\)]/g, escape));
                    var s = "";
                    for (var c in i)
                      i[c] &&
                        ((s += "; " + c), !0 !== i[c] && (s += "=" + i[c]));
                    return (document.cookie = t + "=" + o + s);
                  }
                  t || (a = {});
                  for (
                    var l = document.cookie ? document.cookie.split("; ") : [],
                      f = /(%[0-9A-Z]{2})+/g,
                      d = 0;
                    d < l.length;
                    d++
                  ) {
                    var h = l[d].split("="),
                      v = h.slice(1).join("=");
                    this.json || '"' !== v.charAt(0) || (v = v.slice(1, -1));
                    try {
                      var E = h[0].replace(f, decodeURIComponent);
                      if (
                        ((v = n.read
                          ? n.read(v, E)
                          : n(v, E) || v.replace(f, decodeURIComponent)),
                        this.json)
                      )
                        try {
                          v = JSON.parse(v);
                        } catch (e) {}
                      if (t === E) {
                        a = v;
                        break;
                      }
                      t || (a[E] = v);
                    } catch (e) {}
                  }
                  return a;
                }
              }
              return (
                (r.set = r),
                (r.get = function (e) {
                  return r.call(r, e);
                }),
                (r.getJSON = function () {
                  return r.apply({ json: !0 }, [].slice.call(arguments));
                }),
                (r.defaults = {}),
                (r.remove = function (t, n) {
                  r(t, "", e(n, { expires: -1 }));
                }),
                (r.withConverter = t),
                r
              );
            })(function () {});
          }),
            void 0 ===
              (o = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) ||
              (e.exports = o),
            (e.exports = i());
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o = (function () {
              function e() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 100;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this._queue = []),
                  (this.maxSize = t);
              }
              return (
                r(
                  e,
                  [
                    {
                      key: "push",
                      value: function (e) {
                        this._queue = [e].concat(
                          (function (e) {
                            if (Array.isArray(e)) {
                              for (
                                var t = 0, n = Array(e.length);
                                t < e.length;
                                t++
                              )
                                n[t] = e[t];
                              return n;
                            }
                            return Array.from(e);
                          })(this.slice(0, this.maxSize - 1))
                        );
                      },
                    },
                    {
                      key: "forEach",
                      value: function (e) {
                        return this._queue.forEach(e);
                      },
                    },
                    {
                      key: "slice",
                      value: function (e, t) {
                        return this._queue.slice(e, t);
                      },
                    },
                    {
                      key: "splice",
                      value: function (e, t) {
                        return this._queue.splice(e, t);
                      },
                    },
                    {
                      key: "clear",
                      value: function () {
                        this._queue = [];
                      },
                    },
                    {
                      key: "filter",
                      value: function (t) {
                        return e.fromArray(this._queue.filter(t), this.maxSize);
                      },
                    },
                    {
                      key: "length",
                      get: function () {
                        return this._queue.length;
                      },
                    },
                    {
                      key: "items",
                      get: function () {
                        return JSON.parse(JSON.stringify(this._queue));
                      },
                    },
                  ],
                  [
                    {
                      key: "fromArray",
                      value: function (t, n) {
                        var r = new e(n);
                        return (
                          t.forEach(function (e) {
                            return r.push(e);
                          }),
                          r
                        );
                      },
                    },
                  ]
                ),
                e
              );
            })();
          t.default = o;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.interval = 0),
                  (this.tickIntervalId = 0),
                  (this.callbacks = []);
              }
              return (
                r(e, [
                  {
                    key: "tick",
                    value: function () {
                      var e = this;
                      this.callbacks.forEach(function (t) {
                        return t(e);
                      });
                    },
                  },
                  {
                    key: "start",
                    value: function () {
                      return (
                        (this.tickIntervalId = setInterval(
                          this.tick.bind(this),
                          this.interval
                        )),
                        this
                      );
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      return (
                        clearInterval(this.tickIntervalId),
                        (this.tickIntervalId = 0),
                        this
                      );
                    },
                  },
                  {
                    key: "reschedule",
                    value: function (e) {
                      return this.stop().every(e).start();
                    },
                  },
                  {
                    key: "every",
                    value: function (e) {
                      return (this.interval = e), this;
                    },
                  },
                  {
                    key: "call",
                    value: function (e) {
                      return this.callbacks.push(e), this;
                    },
                  },
                  {
                    key: "isRunning",
                    get: function () {
                      return !!this.tickIntervalId;
                    },
                  },
                ]),
                e
              );
            })();
          t.default = o;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o = c(n(4)),
            i = c(n(2)),
            a = c(n(1)),
            u = c(n(0)),
            s = c(n(5));
          function c(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var l = {
              STATE_READY: "statusReady",
              STATE_NOT_READY: "statusNotReady",
              STATE_LOADING: "statusLoading",
              STATE_SCHEDULED: "statusScheduled",
              STATE_ERROR: "statusError",
            },
            f = function () {
              return i.default.getResource("schemas", { data: {} });
            },
            d = (function () {
              function e(t) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.url = t),
                  (this.state = l.STATE_NOT_READY),
                  (this.callbacks = {
                    onReady: [],
                    onError: [],
                    onRetry: [],
                    onLoad: [],
                  });
              }
              return (
                r(e, [
                  {
                    key: "get",
                    value: function (e, t) {
                      var n = e + "-" + t;
                      if (!this.isReady())
                        throw new Error("" + a.default.COMPONENT_NOT_READY);
                      var r = f().data[n];
                      if (!r)
                        throw new Error(a.default.UNSUPPORTED_TYPE + ": " + n);
                      return r;
                    },
                  },
                  {
                    key: "isReady",
                    value: function () {
                      return this.state === l.STATE_READY;
                    },
                  },
                  {
                    key: "retry",
                    value: function () {
                      var e = this;
                      (this.state = l.STATE_SCHEDULED),
                        this.callbacks.onRetry.forEach(function (e) {
                          return e();
                        }),
                        setTimeout(function () {
                          (e.state = l.STATE_NOT_READY), e.load();
                        }, u.default.SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS);
                    },
                  },
                  {
                    key: "onLoad",
                    value: function (e) {
                      this.callbacks.onLoad.push(e);
                    },
                  },
                  {
                    key: "onRetry",
                    value: function (e) {
                      this.callbacks.onRetry.push(e);
                    },
                  },
                  {
                    key: "onReady",
                    value: function (e) {
                      if (this.state === l.STATE_READY) return e(f().data);
                      if (
                        this.callbacks.onReady.length >
                        u.default.HORIZON_CALLBACK_STACK_LIMIT
                      )
                        throw new Error(
                          a.default.LIMIT_EXCEEDED + " Schemas callback stack."
                        );
                      return this.callbacks.onReady.push(e);
                    },
                  },
                  {
                    key: "onError",
                    value: function (e) {
                      this.state === l.STATE_ERROR
                        ? e()
                        : this.callbacks.onError.push(e);
                    },
                  },
                  {
                    key: "load",
                    value: function () {
                      var e = this,
                        t = f();
                      if (this.state === l.STATE_NOT_READY) {
                        (this.state = l.STATE_LOADING),
                          this.callbacks.onLoad.forEach(function (e) {
                            return e();
                          });
                        var n = u.default.USE_HTTPS ? "https://" : "http://";
                        s.default.request(
                          "GET",
                          "" + n + this.url,
                          function (n) {
                            (t.data = Object.assign(t.data || {}, n)),
                              (e.state = l.STATE_READY),
                              e.callbacks.onReady.forEach(function (e) {
                                return o.default.execAsync(e, t.data);
                              });
                          },
                          function (t) {
                            (e.state = l.STATE_ERROR),
                              e.callbacks.onError.forEach(function (e) {
                                return o.default.execAsync(e, t);
                              }),
                              e.retry();
                          }
                        );
                      }
                    },
                  },
                ]),
                e
              );
            })();
          t.default = {
            getInstance: function (e) {
              var t = f();
              return (
                t.provider ||
                  (t.provider = new d(
                    e || u.default.HORIZON_SCHEMAS_HOST + "/schemas"
                  )),
                t.provider
              );
            },
            getContextSchemas: f,
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = function (e) {
              return window.cdaaas && window.cdaaas.SETTINGS
                ? window.cdaaas.SETTINGS[e]
                : null;
            },
            o = function (e) {
              return window.utag_data ? window.utag_data[e] : null;
            };
          t.default = {
            getTenant: function () {
              return r("SITE_ID") || o("ut.profile") || "unknown";
            },
            getDeviceGroup: function () {
              return r("MOBILE_GROUP") || o("platform") || "unknown";
            },
          };
        },
      ]));
  },
  function (e, t, n) {
    n(6), (e.exports = n(2));
  },
  function (e, t, n) {},
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t);
    const r = (window.cdaaas && window.cdaaas.SETTINGS) || {},
      o = r.SITE_ID,
      i = "pushweb-debug" === window.location.hash.substr(1),
      a = "pushweb-show",
      u = "pushweb-accept",
      s = "pushweb-reject",
      c = "pushweb-reoffer",
      l = "browser-accept",
      f = "browser-denied",
      d = window.PUSH_WEB_ENV,
      h = r.MULTICONTENT ? "multicontent" : "feed",
      v = "webpush-" + h,
      E = { METHOD: { g1: "g1_portal.send" }[o] };
    var p = function (e) {
      let t = "[PushWeb]";
      const n = i;
      e && (t = `${t}[${e}]`);
      const r = {
        log: (...e) => {
          n && console.log(t, ...e);
        },
        info: (...e) => {
          n && console.info(t, ...e);
        },
        debug: (...e) => {
          n && console.debug(t, ...e);
        },
        warn: (...e) => {
          console.warn(t, ...e);
        },
        error: (...e) => {
          console.error(t, ...e);
        },
      };
      return { ...console, ...r };
    };
    function y(e) {
      const t = e + "=",
        n = decodeURIComponent(document.cookie).split(";");
      for (let e = 0; e < n.length; e++) {
        let r = n[e];
        for (; " " === r.charAt(0); ) r = r.substring(1);
        if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
      }
      return "";
    }
    function _(e, t, n = {}) {
      const { expire: r } = n,
        o = r ? r.toUTCString() : "Fri, 31 Dec 2199 23:59:59 GMT";
      document.cookie = `${e}=${t};path=/;expires=${o};SameSite=None;Secure`;
    }
    const g = p();
    function I() {
      let e = "desktop";
      if (window.cdaaas.SETTINGS.MOBILE_GROUP)
        e = window.cdaaas.SETTINGS.MOBILE_GROUP;
      else {
        e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
          navigator.userAgent
        )
          ? "smart"
          : e;
      }
      return e;
    }
    function T(...e) {
      window.ga
        ? window.ga(...e)
        : (g.info(
            "log",
            "Script do Analytics `ga` não encontrado. Tentando novamente em 1000ms."
          ),
          setTimeout(() => T(...e), 1e3));
    }
    const A = p();
    class b {
      constructor(e = 1) {
        (this.pushModal = document.querySelector("#push-web-notification")),
          (this.disableClass = "push-web-notification--disabled"),
          (this.colorizedClass = "push-web-notification--colorized"),
          (this.acceptButtonClass = "push-web-notification__button--accept"),
          (this.rejectButtonClass = "push-web-notification__button--reject"),
          (this.cookieName = "pushweb-accepted"),
          (this.transitionDelay = 1e3),
          (this.debounceDelay = 500),
          (this.uaClient = {}),
          (this.showEvent = new Event(a)),
          (this.acceptEvent = new Event(u)),
          (this.rejectEvent = new Event(s)),
          (this.reofferEvent = new Event(c)),
          (this.grantedBrowserEvent = new Event(l)),
          (this.deniedBrowserEvent = new Event(f)),
          (this.defaultBrowserEvent = new Event("browser-default")),
          (this.scrollDepth = !!e && window.innerHeight / e),
          (this.showHandler = (function (e, t) {
            let n;
            return function (...r) {
              const o = this;
              clearTimeout(n),
                (n = setTimeout(() => {
                  e.apply(o, ...r);
                }, t || 100));
            };
          })(this.show.bind(this), this.debounceDelay));
      }
      init() {
        A.info("Init push web"),
          UA.then((e) => {
            (this.uaClient = e),
              this.shouldOpenPushModal() &&
                (this.scrollDepth
                  ? document.addEventListener("scroll", this.showHandler)
                  : this.showHandler());
          }).catch((e) => {
            A.error(e);
          });
      }
      show() {
        (window.scrollY > this.scrollDepth || !1 === this.scrollDepth) &&
          (document.removeEventListener("scroll", this.showHandler),
          A.info("Show push modal"),
          this.pushModal &&
            (document.dispatchEvent(this.showEvent),
            this.pushModal.classList.remove(this.disableClass),
            this.handleAcceptButton(),
            this.handleRejectButton(),
            setTimeout(() => {
              this.pushModal.classList.remove(this.colorizedClass);
            }, this.transitionDelay)));
      }
      remove() {
        (this.pushModal.style.opacity = 0),
          setTimeout(() => {
            this.pushModal.remove();
          }, 3e3);
      }
      async register() {
        try {
          await this.uaClient.register();
        } catch (e) {
          if ("denied" !== Notification.permission)
            return void A.error("Error while registering user: ", e);
          _(this.cookieName, Date.now());
        } finally {
          switch (Notification.permission) {
            case "denied":
              document.dispatchEvent(this.deniedBrowserEvent);
              break;
            case "granted":
              document.dispatchEvent(this.grantedBrowserEvent);
              break;
            case "default":
              document.dispatchEvent(this.defaultBrowserEvent);
          }
        }
      }
      handleAcceptButton() {
        this.pushModal
          .querySelector("." + this.acceptButtonClass)
          .addEventListener("click", (e) => {
            e.preventDefault(),
              document.dispatchEvent(this.acceptEvent),
              A.info("Accept push notifications"),
              this.register(),
              this.remove();
          });
      }
      handleRejectButton() {
        this.pushModal
          .querySelector("." + this.rejectButtonClass)
          .addEventListener("click", (e) => {
            e.preventDefault(),
              document.dispatchEvent(this.rejectEvent),
              A.info("Reject push notifications");
            const t = new Date();
            t.setDate(t.getDate() + 7),
              _(this.cookieName, Date.now(), { expire: t }),
              this.remove();
          });
      }
      shouldOpenPushModal() {
        return (
          A.info("CheckCookie", this.checkPushCookie()),
          A.info("uaClient.canRegister", this.uaClient.canRegister),
          A.info("uaClient.isSupported", this.uaClient.isSupported),
          this.uaClient.isSupported &&
            this.uaClient.canRegister &&
            !this.checkIfIsAccepted() &&
            !this.checkPushCookie() &&
            !!y("cookie-banner-accepted-version") &&
            ("smart" !== I() ||
              "feed" === h ||
              !!window.localStorage.getItem("smartAppBanner"))
        );
      }
      checkIfIsAccepted() {
        return (
          A.info("uaClient.permission", this.uaClient.permission),
          "granted" === this.uaClient.permission
        );
      }
      checkPushCookie() {
        const e = y(this.cookieName);
        if (e) {
          const t = new Date(Number(e)),
            n = new Date();
          return (
            t.setDate(t.getDate() + 7),
            !(n > t) || (document.dispatchEvent(this.reofferEvent), !1)
          );
        }
        return !1;
      }
    }
    var O = n(0);
    const m = p();
    "prod" !== d &&
      (O.Settings.useQAConfiguration(), m.info("using QA configuration"));
    var R = class {
      constructor(e) {
        this.client = new O.HorizonClient(e, I(), null, "web");
      }
      sendEvent(e) {
        const [t, n, r] = e;
        this.client.send({
          id: "common-event",
          version: "0.1",
          contentType: "common",
          properties: { eventCategory: t, eventLabel: n, eventAction: r },
        }),
          m.info(
            `[Horizon] Sending Horizon event... (Label: ${n}, Category: ${t}, Action: ${r})`
          );
      }
    };
    const S = p();
    const w = new Promise((e) => {
      window.hasLoginWall
        ? window.loginWallClosed
          ? e()
          : document.addEventListener("loginWallClosed", (t) => {
              !0 === t.detail.skipped && e();
            })
        : e();
    });
    (async () => {
      await w,
        class {
          static analytics() {
            const e = new R(o);
            S.info("category " + v),
              document.addEventListener(a, () => {
                e.sendEvent([v, "offer-modal", "view"]),
                  T(E.METHOD, "event", v, "offer-modal", "view");
              }),
              document.addEventListener(u, () => {
                e.sendEvent([v, "offer-modal", "subscribed"]),
                  T(E.METHOD, "event", v, "offer-modal", "subscribed");
              }),
              document.addEventListener(s, () => {
                e.sendEvent([v, "offer-modal", "later"]),
                  T(E.METHOD, "event", v, "offer-modal", "later");
              }),
              document.addEventListener(c, () => {
                e.sendEvent([v, "offer-modal", "reoffer"]);
              }),
              document.addEventListener(l, () => {
                e.sendEvent([v, "offer-browser", "subscribed"]),
                  T(E.METHOD, "event", v, "offer-browser", "subscribed");
              }),
              document.addEventListener(f, () => {
                e.sendEvent([v, "offer-browser", "denied"]),
                  T(E.METHOD, "event", v, "offer-browser", "denied");
              });
          }
          static async start() {
            const e = document.querySelector(".push-web-container");
            if (
              (document
                .querySelector("#glb-topo")
                .insertAdjacentElement("afterbegin", e),
              "smart" === I())
            ) {
              const t = document.querySelector("#header-produto"),
                n = e.querySelector("#push-web-notification");
              new IntersectionObserver((e) => {
                e.forEach((e) => {
                  e.intersectionRatio > 0
                    ? n.classList.remove("no-header")
                    : n.classList.add("no-header");
                });
              }).observe(t);
            }
            this.analytics(), new b(!1).init();
          }
        }.start();
    })();
  },
]);
!(function () {
  "use strict";
  (window.glb = window.glb || {}),
    (window.glb.menuReady = !0),
    document.dispatchEvent(new CustomEvent("glb.fn.menuReady"));
})();
!(function (t) {
  function i(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { exports: {}, id: n, loaded: !1 });
    return t[n].call(o.exports, o, o.exports, i), (o.loaded = !0), o.exports;
  }
  var e = {};
  (i.m = t), (i.c = e), (i.p = ""), i(0);
})([
  function (t, i, e) {
    t.exports = e(1);
  },
  function (t, i) {
    "use strict";
    function e() {
      (this.init = function () {
        this.iniatializeGifs(), this.loopGifs();
      }),
        (this.iniatializeGifs = function () {
          for (
            var t = document.getElementsByClassName(
                "content-media__gif-container"
              ),
              i = 0;
            i < t.length;
            i++
          )
            t[i].addEventListener("click", this.toggleGifState, !1);
        }),
        (this.toggleGifState = function () {
          var t = this.querySelectorAll(
            ".content-media__gif-container__gif-player"
          )[0];
          this.querySelectorAll(
            ".content-media__gif-container__gif-icon"
          )[0].classList.toggle(
            "content-media__gif-container__gif-icon--hidden"
          ),
            t.paused ? t.play() : t.pause();
        }),
        (this.loopGifs = function () {
          for (
            var t = document.getElementsByClassName(
                "content-media__gif-container__gif-player"
              ),
              i = 0;
            i < t.length;
            i++
          )
            t[i].addEventListener("ended", this.replayGif, !1);
        }),
        (this.replayGif = function (t) {
          setTimeout(function () {
            t.target.play();
          }, 200);
        }),
        this.init();
    }
    new e();
  },
]);
/* web(desktop) javascript */
