/*!
 * reveal.js 4.4.0
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2022 Hakim El Hattab, https://hakim.se
 */
const e = (e, t) => {
    for (let i in t) e[i] = t[i];
    return e;
  },
  t = (e, t) => Array.from(e.querySelectorAll(t)),
  i = (e, t, i) => {
    i ? e.classList.add(t) : e.classList.remove(t);
  },
  a = (e) => {
    if ("string" == typeof e) {
      if ("null" === e) return null;
      if ("true" === e) return !0;
      if ("false" === e) return !1;
      if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
    }
    return e;
  },
  s = (e, t) => {
    e.style.transform = t;
  },
  n = (e, t) => {
    let i = e.matches || e.matchesSelector || e.msMatchesSelector;
    return !(!i || !i.call(e, t));
  },
  r = (e, t) => {
    if ("function" == typeof e.closest) return e.closest(t);
    for (; e; ) {
      if (n(e, t)) return e;
      e = e.parentNode;
    }
    return null;
  },
  o = (e, t, i, a = "") => {
    let s = e.querySelectorAll("." + i);
    for (let t = 0; t < s.length; t++) {
      let i = s[t];
      if (i.parentNode === e) return i;
    }
    let n = document.createElement(t);
    return (n.className = i), (n.innerHTML = a), e.appendChild(n), n;
  },
  l = (e) => {
    let t = document.createElement("style");
    return (
      (t.type = "text/css"),
      e &&
        e.length > 0 &&
        (t.styleSheet
          ? (t.styleSheet.cssText = e)
          : t.appendChild(document.createTextNode(e))),
      document.head.appendChild(t),
      t
    );
  },
  d = () => {
    let e = {};
    location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (t) => {
      e[t.split("=").shift()] = t.split("=").pop();
    });
    for (let t in e) {
      let i = e[t];
      e[t] = a(unescape(i));
    }
    return void 0 !== e.dependencies && delete e.dependencies, e;
  },
  c = (e, t = 0) => {
    if (e) {
      let i,
        a = e.style.height;
      return (
        (e.style.height = "0px"),
        (e.parentNode.style.height = "auto"),
        (i = t - e.parentNode.offsetHeight),
        (e.style.height = a + "px"),
        e.parentNode.style.removeProperty("height"),
        i
      );
    }
    return t;
  },
  h = {
    mp4: "video/mp4",
    m4a: "video/mp4",
    ogv: "video/ogg",
    mpeg: "video/mpeg",
    webm: "video/webm",
  },
  u = navigator.userAgent,
  g =
    /(iphone|ipod|ipad|android)/gi.test(u) ||
    ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1);
/chrome/i.test(u) && /edge/i.test(u);
const v = /android/gi.test(u);
var p = {};
Object.defineProperty(p, "__esModule", { value: !0 });
var m =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var a in i)
          Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
      }
      return e;
    },
  f = (p.default = (function (e) {
    if (e) {
      var t = function (e) {
          return [].slice.call(e);
        },
        i = 0,
        a = 1,
        s = 2,
        n = 3,
        r = [],
        o = null,
        l =
          "requestAnimationFrame" in e
            ? function () {
                e.cancelAnimationFrame(o),
                  (o = e.requestAnimationFrame(function () {
                    return c(
                      r.filter(function (e) {
                        return e.dirty && e.active;
                      }),
                    );
                  }));
              }
            : function () {},
        d = function (e) {
          return function () {
            r.forEach(function (t) {
              return (t.dirty = e);
            }),
              l();
          };
        },
        c = function (e) {
          e
            .filter(function (e) {
              return !e.styleComputed;
            })
            .forEach(function (e) {
              e.styleComputed = v(e);
            }),
            e.filter(p).forEach(f);
          var t = e.filter(g);
          t.forEach(u),
            t.forEach(function (e) {
              f(e), h(e);
            }),
            t.forEach(b);
        },
        h = function (e) {
          return (e.dirty = i);
        },
        u = function (e) {
          (e.availableWidth = e.element.parentNode.clientWidth),
            (e.currentWidth = e.element.scrollWidth),
            (e.previousFontSize = e.currentFontSize),
            (e.currentFontSize = Math.min(
              Math.max(
                e.minSize,
                (e.availableWidth / e.currentWidth) * e.previousFontSize,
              ),
              e.maxSize,
            )),
            (e.whiteSpace =
              e.multiLine && e.currentFontSize === e.minSize
                ? "normal"
                : "nowrap");
        },
        g = function (e) {
          return (
            e.dirty !== s ||
            (e.dirty === s &&
              e.element.parentNode.clientWidth !== e.availableWidth)
          );
        },
        v = function (t) {
          var i = e.getComputedStyle(t.element, null);
          (t.currentFontSize = parseFloat(i.getPropertyValue("font-size"))),
            (t.display = i.getPropertyValue("display")),
            (t.whiteSpace = i.getPropertyValue("white-space"));
        },
        p = function (e) {
          var t = !1;
          return (
            !e.preStyleTestCompleted &&
            (/inline-/.test(e.display) ||
              ((t = !0), (e.display = "inline-block")),
            "nowrap" !== e.whiteSpace && ((t = !0), (e.whiteSpace = "nowrap")),
            (e.preStyleTestCompleted = !0),
            t)
          );
        },
        f = function (e) {
          (e.element.style.whiteSpace = e.whiteSpace),
            (e.element.style.display = e.display),
            (e.element.style.fontSize = e.currentFontSize + "px");
        },
        b = function (e) {
          e.element.dispatchEvent(
            new CustomEvent("fit", {
              detail: {
                oldValue: e.previousFontSize,
                newValue: e.currentFontSize,
                scaleFactor: e.currentFontSize / e.previousFontSize,
              },
            }),
          );
        },
        y = function (e, t) {
          return function () {
            (e.dirty = t), e.active && l();
          };
        },
        w = function (e) {
          return function () {
            (r = r.filter(function (t) {
              return t.element !== e.element;
            })),
              e.observeMutations && e.observer.disconnect(),
              (e.element.style.whiteSpace = e.originalStyle.whiteSpace),
              (e.element.style.display = e.originalStyle.display),
              (e.element.style.fontSize = e.originalStyle.fontSize);
          };
        },
        E = function (e) {
          return function () {
            e.active || ((e.active = !0), l());
          };
        },
        R = function (e) {
          return function () {
            return (e.active = !1);
          };
        },
        S = function (e) {
          e.observeMutations &&
            ((e.observer = new MutationObserver(y(e, a))),
            e.observer.observe(e.element, e.observeMutations));
        },
        A = {
          minSize: 16,
          maxSize: 512,
          multiLine: !0,
          observeMutations: "MutationObserver" in e && {
            subtree: !0,
            childList: !0,
            characterData: !0,
          },
        },
        k = null,
        L = function () {
          e.clearTimeout(k), (k = e.setTimeout(d(s), P.observeWindowDelay));
        },
        C = ["resize", "orientationchange"];
      return (
        Object.defineProperty(P, "observeWindow", {
          set: function (t) {
            var i = (t ? "add" : "remove") + "EventListener";
            C.forEach(function (t) {
              e[i](t, L);
            });
          },
        }),
        (P.observeWindow = !0),
        (P.observeWindowDelay = 100),
        (P.fitAll = d(n)),
        P
      );
    }
    function x(e, t) {
      var i = m({}, A, t),
        a = e.map(function (e) {
          var t = m({}, i, { element: e, active: !0 });
          return (
            (function (e) {
              (e.originalStyle = {
                whiteSpace: e.element.style.whiteSpace,
                display: e.element.style.display,
                fontSize: e.element.style.fontSize,
              }),
                S(e),
                (e.newbie = !0),
                (e.dirty = !0),
                r.push(e);
            })(t),
            {
              element: e,
              fit: y(t, n),
              unfreeze: E(t),
              freeze: R(t),
              unsubscribe: w(t),
            }
          );
        });
      return l(), a;
    }
    function P(e) {
      var i =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return "string" == typeof e
        ? x(t(document.querySelectorAll(e)), i)
        : x([e], i)[0];
    }
  })("undefined" == typeof window ? null : window));
class b {
  constructor(e) {
    (this.Reveal = e),
      (this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this));
  }
  shouldPreload(e) {
    let t = this.Reveal.getConfig().preloadIframes;
    return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t;
  }
  load(e, i = {}) {
    (e.style.display = this.Reveal.getConfig().display),
      t(
        e,
        "img[data-src], video[data-src], audio[data-src], iframe[data-src]",
      ).forEach((e) => {
        ("IFRAME" !== e.tagName || this.shouldPreload(e)) &&
          (e.setAttribute("src", e.getAttribute("data-src")),
          e.setAttribute("data-lazy-loaded", ""),
          e.removeAttribute("data-src"));
      }),
      t(e, "video, audio").forEach((e) => {
        let i = 0;
        t(e, "source[data-src]").forEach((e) => {
          e.setAttribute("src", e.getAttribute("data-src")),
            e.removeAttribute("data-src"),
            e.setAttribute("data-lazy-loaded", ""),
            (i += 1);
        }),
          g && "VIDEO" === e.tagName && e.setAttribute("playsinline", ""),
          i > 0 && e.load();
      });
    let a = e.slideBackgroundElement;
    if (a) {
      a.style.display = "block";
      let t = e.slideBackgroundContentElement,
        s = e.getAttribute("data-background-iframe");
      if (!1 === a.hasAttribute("data-loaded")) {
        a.setAttribute("data-loaded", "true");
        let n = e.getAttribute("data-background-image"),
          r = e.getAttribute("data-background-video"),
          o = e.hasAttribute("data-background-video-loop"),
          l = e.hasAttribute("data-background-video-muted");
        if (n)
          /^data:/.test(n.trim())
            ? (t.style.backgroundImage = `url(${n.trim()})`)
            : (t.style.backgroundImage = n
                .split(",")
                .map((e) => `url(${encodeURI(e.trim())})`)
                .join(","));
        else if (r && !this.Reveal.isSpeakerNotes()) {
          let e = document.createElement("video");
          o && e.setAttribute("loop", ""),
            l && (e.muted = !0),
            g && ((e.muted = !0), e.setAttribute("playsinline", "")),
            r.split(",").forEach((t) => {
              let i = ((e = "") => h[e.split(".").pop()])(t);
              e.innerHTML += i
                ? `<source src="${t}" type="${i}">`
                : `<source src="${t}">`;
            }),
            t.appendChild(e);
        } else if (s && !0 !== i.excludeIframes) {
          let e = document.createElement("iframe");
          e.setAttribute("allowfullscreen", ""),
            e.setAttribute("mozallowfullscreen", ""),
            e.setAttribute("webkitallowfullscreen", ""),
            e.setAttribute("allow", "autoplay"),
            e.setAttribute("data-src", s),
            (e.style.width = "100%"),
            (e.style.height = "100%"),
            (e.style.maxHeight = "100%"),
            (e.style.maxWidth = "100%"),
            t.appendChild(e);
        }
      }
      let n = t.querySelector("iframe[data-src]");
      n &&
        this.shouldPreload(a) &&
        !/autoplay=(1|true|yes)/gi.test(s) &&
        n.getAttribute("src") !== s &&
        n.setAttribute("src", s);
    }
    this.layout(e);
  }
  layout(e) {
    Array.from(e.querySelectorAll(".r-fit-text")).forEach((e) => {
      f(e, {
        minSize: 24,
        maxSize: 0.8 * this.Reveal.getConfig().height,
        observeMutations: !1,
        observeWindow: !1,
      });
    });
  }
  unload(e) {
    e.style.display = "none";
    let i = this.Reveal.getSlideBackground(e);
    i &&
      ((i.style.display = "none"),
      t(i, "iframe[src]").forEach((e) => {
        e.removeAttribute("src");
      })),
      t(
        e,
        "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]",
      ).forEach((e) => {
        e.setAttribute("data-src", e.getAttribute("src")),
          e.removeAttribute("src");
      }),
      t(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach(
        (e) => {
          e.setAttribute("data-src", e.getAttribute("src")),
            e.removeAttribute("src");
        },
      );
  }
  formatEmbeddedContent() {
    let e = (e, i, a) => {
      t(
        this.Reveal.getSlidesElement(),
        "iframe[" + e + '*="' + i + '"]',
      ).forEach((t) => {
        let i = t.getAttribute(e);
        i &&
          -1 === i.indexOf(a) &&
          t.setAttribute(e, i + (/\?/.test(i) ? "&" : "?") + a);
      });
    };
    e("src", "youtube.com/embed/", "enablejsapi=1"),
      e("data-src", "youtube.com/embed/", "enablejsapi=1"),
      e("src", "player.vimeo.com/", "api=1"),
      e("data-src", "player.vimeo.com/", "api=1");
  }
  startEmbeddedContent(e) {
    e &&
      !this.Reveal.isSpeakerNotes() &&
      (t(e, 'img[src$=".gif"]').forEach((e) => {
        e.setAttribute("src", e.getAttribute("src"));
      }),
      t(e, "video, audio").forEach((e) => {
        if (r(e, ".fragment") && !r(e, ".fragment.visible")) return;
        let t = this.Reveal.getConfig().autoPlayMedia;
        if (
          ("boolean" != typeof t &&
            (t =
              e.hasAttribute("data-autoplay") || !!r(e, ".slide-background")),
          t && "function" == typeof e.play)
        )
          if (e.readyState > 1) this.startEmbeddedMedia({ target: e });
          else if (g) {
            let t = e.play();
            t &&
              "function" == typeof t.catch &&
              !1 === e.controls &&
              t.catch(() => {
                (e.controls = !0),
                  e.addEventListener("play", () => {
                    e.controls = !1;
                  });
              });
          } else
            e.removeEventListener("loadeddata", this.startEmbeddedMedia),
              e.addEventListener("loadeddata", this.startEmbeddedMedia);
      }),
      t(e, "iframe[src]").forEach((e) => {
        (r(e, ".fragment") && !r(e, ".fragment.visible")) ||
          this.startEmbeddedIframe({ target: e });
      }),
      t(e, "iframe[data-src]").forEach((e) => {
        (r(e, ".fragment") && !r(e, ".fragment.visible")) ||
          (e.getAttribute("src") !== e.getAttribute("data-src") &&
            (e.removeEventListener("load", this.startEmbeddedIframe),
            e.addEventListener("load", this.startEmbeddedIframe),
            e.setAttribute("src", e.getAttribute("data-src"))));
      }));
  }
  startEmbeddedMedia(e) {
    let t = !!r(e.target, "html"),
      i = !!r(e.target, ".present");
    t && i && ((e.target.currentTime = 0), e.target.play()),
      e.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
  }
  startEmbeddedIframe(e) {
    let t = e.target;
    if (t && t.contentWindow) {
      let i = !!r(e.target, "html"),
        a = !!r(e.target, ".present");
      if (i && a) {
        let e = this.Reveal.getConfig().autoPlayMedia;
        "boolean" != typeof e &&
          (e = t.hasAttribute("data-autoplay") || !!r(t, ".slide-background")),
          /youtube\.com\/embed\//.test(t.getAttribute("src")) && e
            ? t.contentWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*",
              )
            : /player\.vimeo\.com\//.test(t.getAttribute("src")) && e
              ? t.contentWindow.postMessage('{"method":"play"}', "*")
              : t.contentWindow.postMessage("slide:start", "*");
      }
    }
  }
  stopEmbeddedContent(i, a = {}) {
    (a = e({ unloadIframes: !0 }, a)),
      i &&
        i.parentNode &&
        (t(i, "video, audio").forEach((e) => {
          e.hasAttribute("data-ignore") ||
            "function" != typeof e.pause ||
            (e.setAttribute("data-paused-by-reveal", ""), e.pause());
        }),
        t(i, "iframe").forEach((e) => {
          e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"),
            e.removeEventListener("load", this.startEmbeddedIframe);
        }),
        t(i, 'iframe[src*="youtube.com/embed/"]').forEach((e) => {
          !e.hasAttribute("data-ignore") &&
            e.contentWindow &&
            "function" == typeof e.contentWindow.postMessage &&
            e.contentWindow.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              "*",
            );
        }),
        t(i, 'iframe[src*="player.vimeo.com/"]').forEach((e) => {
          !e.hasAttribute("data-ignore") &&
            e.contentWindow &&
            "function" == typeof e.contentWindow.postMessage &&
            e.contentWindow.postMessage('{"method":"pause"}', "*");
        }),
        !0 === a.unloadIframes &&
          t(i, "iframe[data-src]").forEach((e) => {
            e.setAttribute("src", "about:blank"), e.removeAttribute("src");
          }));
  }
}
class y {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "slide-number"),
      this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e, t) {
    let i = "none";
    e.slideNumber &&
      !this.Reveal.isPrintingPDF() &&
      ("all" === e.showSlideNumber ||
        ("speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes())) &&
      (i = "block"),
      (this.element.style.display = i);
  }
  update() {
    this.Reveal.getConfig().slideNumber &&
      this.element &&
      (this.element.innerHTML = this.getSlideNumber());
  }
  getSlideNumber(e = this.Reveal.getCurrentSlide()) {
    let t,
      i = this.Reveal.getConfig(),
      a = "h.v";
    if ("function" == typeof i.slideNumber) t = i.slideNumber(e);
    else {
      "string" == typeof i.slideNumber && (a = i.slideNumber),
        /c/.test(a) ||
          1 !== this.Reveal.getHorizontalSlides().length ||
          (a = "c");
      let s = e && "uncounted" === e.dataset.visibility ? 0 : 1;
      switch (((t = []), a)) {
        case "c":
          t.push(this.Reveal.getSlidePastCount(e) + s);
          break;
        case "c/t":
          t.push(
            this.Reveal.getSlidePastCount(e) + s,
            "/",
            this.Reveal.getTotalSlides(),
          );
          break;
        default:
          let i = this.Reveal.getIndices(e);
          t.push(i.h + s);
          let n = "h/v" === a ? "/" : ".";
          this.Reveal.isVerticalSlide(e) && t.push(n, i.v + 1);
      }
    }
    let s = "#" + this.Reveal.location.getHash(e);
    return this.formatNumber(t[0], t[1], t[2], s);
  }
  formatNumber(e, t, i, a = "#" + this.Reveal.location.getHash()) {
    return "number" != typeof i || isNaN(i)
      ? `<a href="${a}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t</a>`
      : `<a href="${a}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t<span class="slide-number-delimiter">${t}</span>\n\t\t\t\t\t<span class="slide-number-b">${i}</span>\n\t\t\t\t\t</a>`;
  }
  destroy() {
    this.element.remove();
  }
}
const w = (e) => {
  let t = e.match(/^#([0-9a-f]{3})$/i);
  if (t && t[1])
    return (
      (t = t[1]),
      {
        r: 17 * parseInt(t.charAt(0), 16),
        g: 17 * parseInt(t.charAt(1), 16),
        b: 17 * parseInt(t.charAt(2), 16),
      }
    );
  let i = e.match(/^#([0-9a-f]{6})$/i);
  if (i && i[1])
    return (
      (i = i[1]),
      {
        r: parseInt(i.slice(0, 2), 16),
        g: parseInt(i.slice(2, 4), 16),
        b: parseInt(i.slice(4, 6), 16),
      }
    );
  let a = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (a)
    return {
      r: parseInt(a[1], 10),
      g: parseInt(a[2], 10),
      b: parseInt(a[3], 10),
    };
  let s = e.match(
    /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i,
  );
  return s
    ? {
        r: parseInt(s[1], 10),
        g: parseInt(s[2], 10),
        b: parseInt(s[3], 10),
        a: parseFloat(s[4]),
      }
    : null;
};
class E {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "backgrounds"),
      this.Reveal.getRevealElement().appendChild(this.element);
  }
  create() {
    (this.element.innerHTML = ""),
      this.element.classList.add("no-transition"),
      this.Reveal.getHorizontalSlides().forEach((e) => {
        let i = this.createBackground(e, this.element);
        t(e, "section").forEach((e) => {
          this.createBackground(e, i), i.classList.add("stack");
        });
      }),
      this.Reveal.getConfig().parallaxBackgroundImage
        ? ((this.element.style.backgroundImage =
            'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")'),
          (this.element.style.backgroundSize =
            this.Reveal.getConfig().parallaxBackgroundSize),
          (this.element.style.backgroundRepeat =
            this.Reveal.getConfig().parallaxBackgroundRepeat),
          (this.element.style.backgroundPosition =
            this.Reveal.getConfig().parallaxBackgroundPosition),
          setTimeout(() => {
            this.Reveal.getRevealElement().classList.add(
              "has-parallax-background",
            );
          }, 1))
        : ((this.element.style.backgroundImage = ""),
          this.Reveal.getRevealElement().classList.remove(
            "has-parallax-background",
          ));
  }
  createBackground(e, t) {
    let i = document.createElement("div");
    i.className =
      "slide-background " + e.className.replace(/present|past|future/, "");
    let a = document.createElement("div");
    return (
      (a.className = "slide-background-content"),
      i.appendChild(a),
      t.appendChild(i),
      (e.slideBackgroundElement = i),
      (e.slideBackgroundContentElement = a),
      this.sync(e),
      i
    );
  }
  sync(e) {
    const t = e.slideBackgroundElement,
      i = e.slideBackgroundContentElement,
      a = {
        background: e.getAttribute("data-background"),
        backgroundSize: e.getAttribute("data-background-size"),
        backgroundImage: e.getAttribute("data-background-image"),
        backgroundVideo: e.getAttribute("data-background-video"),
        backgroundIframe: e.getAttribute("data-background-iframe"),
        backgroundColor: e.getAttribute("data-background-color"),
        backgroundGradient: e.getAttribute("data-background-gradient"),
        backgroundRepeat: e.getAttribute("data-background-repeat"),
        backgroundPosition: e.getAttribute("data-background-position"),
        backgroundTransition: e.getAttribute("data-background-transition"),
        backgroundOpacity: e.getAttribute("data-background-opacity"),
      },
      s = e.hasAttribute("data-preload");
    e.classList.remove("has-dark-background"),
      e.classList.remove("has-light-background"),
      t.removeAttribute("data-loaded"),
      t.removeAttribute("data-background-hash"),
      t.removeAttribute("data-background-size"),
      t.removeAttribute("data-background-transition"),
      (t.style.backgroundColor = ""),
      (i.style.backgroundSize = ""),
      (i.style.backgroundRepeat = ""),
      (i.style.backgroundPosition = ""),
      (i.style.backgroundImage = ""),
      (i.style.opacity = ""),
      (i.innerHTML = ""),
      a.background &&
        (/^(http|file|\/\/)/gi.test(a.background) ||
        /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(a.background)
          ? e.setAttribute("data-background-image", a.background)
          : (t.style.background = a.background)),
      (a.background ||
        a.backgroundColor ||
        a.backgroundGradient ||
        a.backgroundImage ||
        a.backgroundVideo ||
        a.backgroundIframe) &&
        t.setAttribute(
          "data-background-hash",
          a.background +
            a.backgroundSize +
            a.backgroundImage +
            a.backgroundVideo +
            a.backgroundIframe +
            a.backgroundColor +
            a.backgroundGradient +
            a.backgroundRepeat +
            a.backgroundPosition +
            a.backgroundTransition +
            a.backgroundOpacity,
        ),
      a.backgroundSize &&
        t.setAttribute("data-background-size", a.backgroundSize),
      a.backgroundColor && (t.style.backgroundColor = a.backgroundColor),
      a.backgroundGradient && (t.style.backgroundImage = a.backgroundGradient),
      a.backgroundTransition &&
        t.setAttribute("data-background-transition", a.backgroundTransition),
      s && t.setAttribute("data-preload", ""),
      a.backgroundSize && (i.style.backgroundSize = a.backgroundSize),
      a.backgroundRepeat && (i.style.backgroundRepeat = a.backgroundRepeat),
      a.backgroundPosition &&
        (i.style.backgroundPosition = a.backgroundPosition),
      a.backgroundOpacity && (i.style.opacity = a.backgroundOpacity);
    let n = a.backgroundColor;
    if (!n || !w(n)) {
      let e = window.getComputedStyle(t);
      e && e.backgroundColor && (n = e.backgroundColor);
    }
    if (n) {
      const t = w(n);
      t &&
        0 !== t.a &&
        ("string" == typeof (r = n) && (r = w(r)),
        (r ? (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 : null) < 128
          ? e.classList.add("has-dark-background")
          : e.classList.add("has-light-background"));
    }
    var r;
  }
  update(e = !1) {
    let i = this.Reveal.getCurrentSlide(),
      a = this.Reveal.getIndices(),
      s = null,
      n = this.Reveal.getConfig().rtl ? "future" : "past",
      r = this.Reveal.getConfig().rtl ? "past" : "future";
    if (
      (Array.from(this.element.childNodes).forEach((i, o) => {
        i.classList.remove("past", "present", "future"),
          o < a.h
            ? i.classList.add(n)
            : o > a.h
              ? i.classList.add(r)
              : (i.classList.add("present"), (s = i)),
          (e || o === a.h) &&
            t(i, ".slide-background").forEach((e, t) => {
              e.classList.remove("past", "present", "future"),
                t < a.v
                  ? e.classList.add("past")
                  : t > a.v
                    ? e.classList.add("future")
                    : (e.classList.add("present"), o === a.h && (s = e));
            });
      }),
      this.previousBackground &&
        this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
          unloadIframes: !this.Reveal.slideContent.shouldPreload(
            this.previousBackground,
          ),
        }),
      s)
    ) {
      this.Reveal.slideContent.startEmbeddedContent(s);
      let e = s.querySelector(".slide-background-content");
      if (e) {
        let t = e.style.backgroundImage || "";
        /\.gif/i.test(t) &&
          ((e.style.backgroundImage = ""),
          window.getComputedStyle(e).opacity,
          (e.style.backgroundImage = t));
      }
      let t = this.previousBackground
          ? this.previousBackground.getAttribute("data-background-hash")
          : null,
        i = s.getAttribute("data-background-hash");
      i &&
        i === t &&
        s !== this.previousBackground &&
        this.element.classList.add("no-transition"),
        (this.previousBackground = s);
    }
    i &&
      ["has-light-background", "has-dark-background"].forEach((e) => {
        i.classList.contains(e)
          ? this.Reveal.getRevealElement().classList.add(e)
          : this.Reveal.getRevealElement().classList.remove(e);
      }, this),
      setTimeout(() => {
        this.element.classList.remove("no-transition");
      }, 1);
  }
  updateParallax() {
    let e = this.Reveal.getIndices();
    if (this.Reveal.getConfig().parallaxBackgroundImage) {
      let t,
        i,
        a = this.Reveal.getHorizontalSlides(),
        s = this.Reveal.getVerticalSlides(),
        n = this.element.style.backgroundSize.split(" ");
      1 === n.length
        ? (t = i = parseInt(n[0], 10))
        : ((t = parseInt(n[0], 10)), (i = parseInt(n[1], 10)));
      let r,
        o,
        l = this.element.offsetWidth,
        d = a.length;
      (r =
        "number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal
          ? this.Reveal.getConfig().parallaxBackgroundHorizontal
          : d > 1
            ? (t - l) / (d - 1)
            : 0),
        (o = r * e.h * -1);
      let c,
        h,
        u = this.element.offsetHeight,
        g = s.length;
      (c =
        "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical
          ? this.Reveal.getConfig().parallaxBackgroundVertical
          : (i - u) / (g - 1)),
        (h = g > 0 ? c * e.v : 0),
        (this.element.style.backgroundPosition = o + "px " + -h + "px");
    }
  }
  destroy() {
    this.element.remove();
  }
}
const R =
    /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,
  S =
    /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;
let A = 0;
class k {
  constructor(e) {
    this.Reveal = e;
  }
  run(e, t) {
    this.reset();
    let i = this.Reveal.getSlides(),
      a = i.indexOf(t),
      s = i.indexOf(e);
    if (
      e.hasAttribute("data-auto-animate") &&
      t.hasAttribute("data-auto-animate") &&
      e.getAttribute("data-auto-animate-id") ===
        t.getAttribute("data-auto-animate-id") &&
      !(a > s ? t : e).hasAttribute("data-auto-animate-restart")
    ) {
      this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || l();
      let i = this.getAutoAnimateOptions(t);
      (e.dataset.autoAnimate = "pending"),
        (t.dataset.autoAnimate = "pending"),
        (i.slideDirection = a > s ? "forward" : "backward");
      let n = "none" === e.style.display;
      n && (e.style.display = this.Reveal.getConfig().display);
      let r = this.getAutoAnimatableElements(e, t).map((e) =>
        this.autoAnimateElements(e.from, e.to, e.options || {}, i, A++),
      );
      if (
        (n && (e.style.display = "none"),
        "false" !== t.dataset.autoAnimateUnmatched &&
          !0 === this.Reveal.getConfig().autoAnimateUnmatched)
      ) {
        let e = 0.8 * i.duration,
          a = 0.2 * i.duration;
        this.getUnmatchedAutoAnimateElements(t).forEach((e) => {
          let t = this.getAutoAnimateOptions(e, i),
            a = "unmatched";
          (t.duration === i.duration && t.delay === i.delay) ||
            ((a = "unmatched-" + A++),
            r.push(
              `[data-auto-animate="running"] [data-auto-animate-target="${a}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`,
            )),
            (e.dataset.autoAnimateTarget = a);
        }, this),
          r.push(
            `[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e}s ease ${a}s; }`,
          );
      }
      (this.autoAnimateStyleSheet.innerHTML = r.join("")),
        requestAnimationFrame(() => {
          this.autoAnimateStyleSheet &&
            (getComputedStyle(this.autoAnimateStyleSheet).fontWeight,
            (t.dataset.autoAnimate = "running"));
        }),
        this.Reveal.dispatchEvent({
          type: "autoanimate",
          data: { fromSlide: e, toSlide: t, sheet: this.autoAnimateStyleSheet },
        });
    }
  }
  reset() {
    t(
      this.Reveal.getRevealElement(),
      '[data-auto-animate]:not([data-auto-animate=""])',
    ).forEach((e) => {
      e.dataset.autoAnimate = "";
    }),
      t(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach(
        (e) => {
          delete e.dataset.autoAnimateTarget;
        },
      ),
      this.autoAnimateStyleSheet &&
        this.autoAnimateStyleSheet.parentNode &&
        (this.autoAnimateStyleSheet.parentNode.removeChild(
          this.autoAnimateStyleSheet,
        ),
        (this.autoAnimateStyleSheet = null));
  }
  autoAnimateElements(e, t, i, a, s) {
    (e.dataset.autoAnimateTarget = ""), (t.dataset.autoAnimateTarget = s);
    let n = this.getAutoAnimateOptions(t, a);
    void 0 !== i.delay && (n.delay = i.delay),
      void 0 !== i.duration && (n.duration = i.duration),
      void 0 !== i.easing && (n.easing = i.easing);
    let r = this.getAutoAnimatableProperties("from", e, i),
      o = this.getAutoAnimatableProperties("to", t, i);
    if (
      t.classList.contains("fragment") &&
      (delete o.styles.opacity, e.classList.contains("fragment"))
    ) {
      (e.className.match(S) || [""])[0] === (t.className.match(S) || [""])[0] &&
        "forward" === a.slideDirection &&
        t.classList.add("visible", "disabled");
    }
    if (!1 !== i.translate || !1 !== i.scale) {
      let e = this.Reveal.getScale(),
        t = {
          x: (r.x - o.x) / e,
          y: (r.y - o.y) / e,
          scaleX: r.width / o.width,
          scaleY: r.height / o.height,
        };
      (t.x = Math.round(1e3 * t.x) / 1e3),
        (t.y = Math.round(1e3 * t.y) / 1e3),
        (t.scaleX = Math.round(1e3 * t.scaleX) / 1e3),
        (t.scaleX = Math.round(1e3 * t.scaleX) / 1e3);
      let a = !1 !== i.translate && (0 !== t.x || 0 !== t.y),
        s = !1 !== i.scale && (0 !== t.scaleX || 0 !== t.scaleY);
      if (a || s) {
        let e = [];
        a && e.push(`translate(${t.x}px, ${t.y}px)`),
          s && e.push(`scale(${t.scaleX}, ${t.scaleY})`),
          (r.styles.transform = e.join(" ")),
          (r.styles["transform-origin"] = "top left"),
          (o.styles.transform = "none");
      }
    }
    for (let e in o.styles) {
      const t = o.styles[e],
        i = r.styles[e];
      t === i
        ? delete o.styles[e]
        : (!0 === t.explicitValue && (o.styles[e] = t.value),
          !0 === i.explicitValue && (r.styles[e] = i.value));
    }
    let l = "",
      d = Object.keys(o.styles);
    if (d.length > 0) {
      (r.styles.transition = "none"),
        (o.styles.transition = `all ${n.duration}s ${n.easing} ${n.delay}s`),
        (o.styles["transition-property"] = d.join(", ")),
        (o.styles["will-change"] = d.join(", ")),
        (l =
          '[data-auto-animate-target="' +
          s +
          '"] {' +
          Object.keys(r.styles)
            .map((e) => e + ": " + r.styles[e] + " !important;")
            .join("") +
          '}[data-auto-animate="running"] [data-auto-animate-target="' +
          s +
          '"] {' +
          Object.keys(o.styles)
            .map((e) => e + ": " + o.styles[e] + " !important;")
            .join("") +
          "}");
    }
    return l;
  }
  getAutoAnimateOptions(t, i) {
    let a = {
      easing: this.Reveal.getConfig().autoAnimateEasing,
      duration: this.Reveal.getConfig().autoAnimateDuration,
      delay: 0,
    };
    if (((a = e(a, i)), t.parentNode)) {
      let e = r(t.parentNode, "[data-auto-animate-target]");
      e && (a = this.getAutoAnimateOptions(e, a));
    }
    return (
      t.dataset.autoAnimateEasing && (a.easing = t.dataset.autoAnimateEasing),
      t.dataset.autoAnimateDuration &&
        (a.duration = parseFloat(t.dataset.autoAnimateDuration)),
      t.dataset.autoAnimateDelay &&
        (a.delay = parseFloat(t.dataset.autoAnimateDelay)),
      a
    );
  }
  getAutoAnimatableProperties(e, t, i) {
    let a = this.Reveal.getConfig(),
      s = { styles: [] };
    if (!1 !== i.translate || !1 !== i.scale) {
      let e;
      if ("function" == typeof i.measure) e = i.measure(t);
      else if (a.center) e = t.getBoundingClientRect();
      else {
        let i = this.Reveal.getScale();
        e = {
          x: t.offsetLeft * i,
          y: t.offsetTop * i,
          width: t.offsetWidth * i,
          height: t.offsetHeight * i,
        };
      }
      (s.x = e.x), (s.y = e.y), (s.width = e.width), (s.height = e.height);
    }
    const n = getComputedStyle(t);
    return (
      (i.styles || a.autoAnimateStyles).forEach((t) => {
        let i;
        "string" == typeof t && (t = { property: t }),
          void 0 !== t.from && "from" === e
            ? (i = { value: t.from, explicitValue: !0 })
            : void 0 !== t.to && "to" === e
              ? (i = { value: t.to, explicitValue: !0 })
              : ("line-height" === t.property &&
                  (i =
                    parseFloat(n["line-height"]) / parseFloat(n["font-size"])),
                isNaN(i) && (i = n[t.property])),
          "" !== i && (s.styles[t.property] = i);
      }),
      s
    );
  }
  getAutoAnimatableElements(e, t) {
    let i = (
        "function" == typeof this.Reveal.getConfig().autoAnimateMatcher
          ? this.Reveal.getConfig().autoAnimateMatcher
          : this.getAutoAnimatePairs
      ).call(this, e, t),
      a = [];
    return i.filter((e, t) => {
      if (-1 === a.indexOf(e.to)) return a.push(e.to), !0;
    });
  }
  getAutoAnimatePairs(e, t) {
    let i = [];
    const a = "h1, h2, h3, h4, h5, h6, p, li";
    return (
      this.findAutoAnimateMatches(
        i,
        e,
        t,
        "[data-id]",
        (e) => e.nodeName + ":::" + e.getAttribute("data-id"),
      ),
      this.findAutoAnimateMatches(
        i,
        e,
        t,
        a,
        (e) => e.nodeName + ":::" + e.innerText,
      ),
      this.findAutoAnimateMatches(
        i,
        e,
        t,
        "img, video, iframe",
        (e) =>
          e.nodeName +
          ":::" +
          (e.getAttribute("src") || e.getAttribute("data-src")),
      ),
      this.findAutoAnimateMatches(
        i,
        e,
        t,
        "pre",
        (e) => e.nodeName + ":::" + e.innerText,
      ),
      i.forEach((e) => {
        n(e.from, a)
          ? (e.options = { scale: !1 })
          : n(e.from, "pre") &&
            ((e.options = { scale: !1, styles: ["width", "height"] }),
            this.findAutoAnimateMatches(
              i,
              e.from,
              e.to,
              ".hljs .hljs-ln-code",
              (e) => e.textContent,
              {
                scale: !1,
                styles: [],
                measure: this.getLocalBoundingBox.bind(this),
              },
            ),
            this.findAutoAnimateMatches(
              i,
              e.from,
              e.to,
              ".hljs .hljs-ln-line[data-line-number]",
              (e) => e.getAttribute("data-line-number"),
              {
                scale: !1,
                styles: ["width"],
                measure: this.getLocalBoundingBox.bind(this),
              },
            ));
      }, this),
      i
    );
  }
  getLocalBoundingBox(e) {
    const t = this.Reveal.getScale();
    return {
      x: Math.round(e.offsetLeft * t * 100) / 100,
      y: Math.round(e.offsetTop * t * 100) / 100,
      width: Math.round(e.offsetWidth * t * 100) / 100,
      height: Math.round(e.offsetHeight * t * 100) / 100,
    };
  }
  findAutoAnimateMatches(e, t, i, a, s, n) {
    let r = {},
      o = {};
    [].slice.call(t.querySelectorAll(a)).forEach((e, t) => {
      const i = s(e);
      "string" == typeof i && i.length && ((r[i] = r[i] || []), r[i].push(e));
    }),
      [].slice.call(i.querySelectorAll(a)).forEach((t, i) => {
        const a = s(t);
        let l;
        if (((o[a] = o[a] || []), o[a].push(t), r[a])) {
          const e = o[a].length - 1,
            t = r[a].length - 1;
          r[a][e]
            ? ((l = r[a][e]), (r[a][e] = null))
            : r[a][t] && ((l = r[a][t]), (r[a][t] = null));
        }
        l && e.push({ from: l, to: t, options: n });
      });
  }
  getUnmatchedAutoAnimateElements(e) {
    return [].slice.call(e.children).reduce((e, t) => {
      const i = t.querySelector("[data-auto-animate-target]");
      return (
        t.hasAttribute("data-auto-animate-target") || i || e.push(t),
        t.querySelector("[data-auto-animate-target]") &&
          (e = e.concat(this.getUnmatchedAutoAnimateElements(t))),
        e
      );
    }, []);
  }
}
class L {
  constructor(e) {
    this.Reveal = e;
  }
  configure(e, t) {
    !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable();
  }
  disable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach((e) => {
      e.classList.add("visible"), e.classList.remove("current-fragment");
    });
  }
  enable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach((e) => {
      e.classList.remove("visible"), e.classList.remove("current-fragment");
    });
  }
  availableRoutes() {
    let e = this.Reveal.getCurrentSlide();
    if (e && this.Reveal.getConfig().fragments) {
      let t = e.querySelectorAll(".fragment:not(.disabled)"),
        i = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
      return { prev: t.length - i.length > 0, next: !!i.length };
    }
    return { prev: !1, next: !1 };
  }
  sort(e, t = !1) {
    e = Array.from(e);
    let i = [],
      a = [],
      s = [];
    e.forEach((e) => {
      if (e.hasAttribute("data-fragment-index")) {
        let t = parseInt(e.getAttribute("data-fragment-index"), 10);
        i[t] || (i[t] = []), i[t].push(e);
      } else a.push([e]);
    }),
      (i = i.concat(a));
    let n = 0;
    return (
      i.forEach((e) => {
        e.forEach((e) => {
          s.push(e), e.setAttribute("data-fragment-index", n);
        }),
          n++;
      }),
      !0 === t ? i : s
    );
  }
  sortAll() {
    this.Reveal.getHorizontalSlides().forEach((e) => {
      let i = t(e, "section");
      i.forEach((e, t) => {
        this.sort(e.querySelectorAll(".fragment"));
      }, this),
        0 === i.length && this.sort(e.querySelectorAll(".fragment"));
    });
  }
  update(e, t) {
    let i = { shown: [], hidden: [] },
      a = this.Reveal.getCurrentSlide();
    if (
      a &&
      this.Reveal.getConfig().fragments &&
      (t = t || this.sort(a.querySelectorAll(".fragment"))).length
    ) {
      let s = 0;
      if ("number" != typeof e) {
        let t = this.sort(a.querySelectorAll(".fragment.visible")).pop();
        t && (e = parseInt(t.getAttribute("data-fragment-index") || 0, 10));
      }
      Array.from(t).forEach((t, a) => {
        if (
          (t.hasAttribute("data-fragment-index") &&
            (a = parseInt(t.getAttribute("data-fragment-index"), 10)),
          (s = Math.max(s, a)),
          a <= e)
        ) {
          let s = t.classList.contains("visible");
          t.classList.add("visible"),
            t.classList.remove("current-fragment"),
            a === e &&
              (this.Reveal.announceStatus(this.Reveal.getStatusText(t)),
              t.classList.add("current-fragment"),
              this.Reveal.slideContent.startEmbeddedContent(t)),
            s ||
              (i.shown.push(t),
              this.Reveal.dispatchEvent({
                target: t,
                type: "visible",
                bubbles: !1,
              }));
        } else {
          let e = t.classList.contains("visible");
          t.classList.remove("visible"),
            t.classList.remove("current-fragment"),
            e &&
              (this.Reveal.slideContent.stopEmbeddedContent(t),
              i.hidden.push(t),
              this.Reveal.dispatchEvent({
                target: t,
                type: "hidden",
                bubbles: !1,
              }));
        }
      }),
        (e = "number" == typeof e ? e : -1),
        (e = Math.max(Math.min(e, s), -1)),
        a.setAttribute("data-fragment", e);
    }
    return i;
  }
  sync(e = this.Reveal.getCurrentSlide()) {
    return this.sort(e.querySelectorAll(".fragment"));
  }
  goto(e, t = 0) {
    let i = this.Reveal.getCurrentSlide();
    if (i && this.Reveal.getConfig().fragments) {
      let a = this.sort(i.querySelectorAll(".fragment:not(.disabled)"));
      if (a.length) {
        if ("number" != typeof e) {
          let t = this.sort(
            i.querySelectorAll(".fragment:not(.disabled).visible"),
          ).pop();
          e = t ? parseInt(t.getAttribute("data-fragment-index") || 0, 10) : -1;
        }
        e += t;
        let s = this.update(e, a);
        return (
          s.hidden.length &&
            this.Reveal.dispatchEvent({
              type: "fragmenthidden",
              data: { fragment: s.hidden[0], fragments: s.hidden },
            }),
          s.shown.length &&
            this.Reveal.dispatchEvent({
              type: "fragmentshown",
              data: { fragment: s.shown[0], fragments: s.shown },
            }),
          this.Reveal.controls.update(),
          this.Reveal.progress.update(),
          this.Reveal.getConfig().fragmentInURL &&
            this.Reveal.location.writeURL(),
          !(!s.shown.length && !s.hidden.length)
        );
      }
    }
    return !1;
  }
  next() {
    return this.goto(null, 1);
  }
  prev() {
    return this.goto(null, -1);
  }
}
class C {
  constructor(e) {
    (this.Reveal = e),
      (this.active = !1),
      (this.onSlideClicked = this.onSlideClicked.bind(this));
  }
  activate() {
    if (this.Reveal.getConfig().overview && !this.isActive()) {
      (this.active = !0),
        this.Reveal.getRevealElement().classList.add("overview"),
        this.Reveal.cancelAutoSlide(),
        this.Reveal.getSlidesElement().appendChild(
          this.Reveal.getBackgroundsElement(),
        ),
        t(this.Reveal.getRevealElement(), ".slides section").forEach((e) => {
          e.classList.contains("stack") ||
            e.addEventListener("click", this.onSlideClicked, !0);
        });
      const e = 70,
        i = this.Reveal.getComputedSlideSize();
      (this.overviewSlideWidth = i.width + e),
        (this.overviewSlideHeight = i.height + e),
        this.Reveal.getConfig().rtl &&
          (this.overviewSlideWidth = -this.overviewSlideWidth),
        this.Reveal.updateSlidesVisibility(),
        this.layout(),
        this.update(),
        this.Reveal.layout();
      const a = this.Reveal.getIndices();
      this.Reveal.dispatchEvent({
        type: "overviewshown",
        data: {
          indexh: a.h,
          indexv: a.v,
          currentSlide: this.Reveal.getCurrentSlide(),
        },
      });
    }
  }
  layout() {
    this.Reveal.getHorizontalSlides().forEach((e, i) => {
      e.setAttribute("data-index-h", i),
        s(e, "translate3d(" + i * this.overviewSlideWidth + "px, 0, 0)"),
        e.classList.contains("stack") &&
          t(e, "section").forEach((e, t) => {
            e.setAttribute("data-index-h", i),
              e.setAttribute("data-index-v", t),
              s(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)");
          });
    }),
      Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(
        (e, i) => {
          s(e, "translate3d(" + i * this.overviewSlideWidth + "px, 0, 0)"),
            t(e, ".slide-background").forEach((e, t) => {
              s(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)");
            });
        },
      );
  }
  update() {
    const e = Math.min(window.innerWidth, window.innerHeight),
      t = Math.max(e / 5, 150) / e,
      i = this.Reveal.getIndices();
    this.Reveal.transformSlides({
      overview: [
        "scale(" + t + ")",
        "translateX(" + -i.h * this.overviewSlideWidth + "px)",
        "translateY(" + -i.v * this.overviewSlideHeight + "px)",
      ].join(" "),
    });
  }
  deactivate() {
    if (this.Reveal.getConfig().overview) {
      (this.active = !1),
        this.Reveal.getRevealElement().classList.remove("overview"),
        this.Reveal.getRevealElement().classList.add("overview-deactivating"),
        setTimeout(() => {
          this.Reveal.getRevealElement().classList.remove(
            "overview-deactivating",
          );
        }, 1),
        this.Reveal.getRevealElement().appendChild(
          this.Reveal.getBackgroundsElement(),
        ),
        t(this.Reveal.getRevealElement(), ".slides section").forEach((e) => {
          s(e, ""), e.removeEventListener("click", this.onSlideClicked, !0);
        }),
        t(this.Reveal.getBackgroundsElement(), ".slide-background").forEach(
          (e) => {
            s(e, "");
          },
        ),
        this.Reveal.transformSlides({ overview: "" });
      const e = this.Reveal.getIndices();
      this.Reveal.slide(e.h, e.v),
        this.Reveal.layout(),
        this.Reveal.cueAutoSlide(),
        this.Reveal.dispatchEvent({
          type: "overviewhidden",
          data: {
            indexh: e.h,
            indexv: e.v,
            currentSlide: this.Reveal.getCurrentSlide(),
          },
        });
    }
  }
  toggle(e) {
    "boolean" == typeof e
      ? e
        ? this.activate()
        : this.deactivate()
      : this.isActive()
        ? this.deactivate()
        : this.activate();
  }
  isActive() {
    return this.active;
  }
  onSlideClicked(e) {
    if (this.isActive()) {
      e.preventDefault();
      let t = e.target;
      for (; t && !t.nodeName.match(/section/gi); ) t = t.parentNode;
      if (
        t &&
        !t.classList.contains("disabled") &&
        (this.deactivate(), t.nodeName.match(/section/gi))
      ) {
        let e = parseInt(t.getAttribute("data-index-h"), 10),
          i = parseInt(t.getAttribute("data-index-v"), 10);
        this.Reveal.slide(e, i);
      }
    }
  }
}
class x {
  constructor(e) {
    (this.Reveal = e),
      (this.shortcuts = {}),
      (this.bindings = {}),
      (this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this)),
      (this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this));
  }
  configure(e, t) {
    "linear" === e.navigationMode
      ? ((this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] =
          "Next slide"),
        (this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] =
          "Previous slide"))
      : ((this.shortcuts["N  ,  SPACE"] = "Next slide"),
        (this.shortcuts["P  ,  Shift SPACE"] = "Previous slide"),
        (this.shortcuts["&#8592;  ,  H"] = "Navigate left"),
        (this.shortcuts["&#8594;  ,  L"] = "Navigate right"),
        (this.shortcuts["&#8593;  ,  K"] = "Navigate up"),
        (this.shortcuts["&#8595;  ,  J"] = "Navigate down")),
      (this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] =
        "Navigate without fragments"),
      (this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] =
        "Jump to first/last slide"),
      (this.shortcuts["B  ,  ."] = "Pause"),
      (this.shortcuts.F = "Fullscreen"),
      (this.shortcuts["ESC, O"] = "Slide overview");
  }
  bind() {
    document.addEventListener("keydown", this.onDocumentKeyDown, !1),
      document.addEventListener("keypress", this.onDocumentKeyPress, !1);
  }
  unbind() {
    document.removeEventListener("keydown", this.onDocumentKeyDown, !1),
      document.removeEventListener("keypress", this.onDocumentKeyPress, !1);
  }
  addKeyBinding(e, t) {
    "object" == typeof e && e.keyCode
      ? (this.bindings[e.keyCode] = {
          callback: t,
          key: e.key,
          description: e.description,
        })
      : (this.bindings[e] = { callback: t, key: null, description: null });
  }
  removeKeyBinding(e) {
    delete this.bindings[e];
  }
  triggerKey(e) {
    this.onDocumentKeyDown({ keyCode: e });
  }
  registerKeyboardShortcut(e, t) {
    this.shortcuts[e] = t;
  }
  getShortcuts() {
    return this.shortcuts;
  }
  getBindings() {
    return this.bindings;
  }
  onDocumentKeyPress(e) {
    e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp();
  }
  onDocumentKeyDown(e) {
    let t = this.Reveal.getConfig();
    if (
      "function" == typeof t.keyboardCondition &&
      !1 === t.keyboardCondition(e)
    )
      return !0;
    if ("focused" === t.keyboardCondition && !this.Reveal.isFocused())
      return !0;
    let i = e.keyCode,
      a = !this.Reveal.isAutoSliding();
    this.Reveal.onUserInput(e);
    let s =
        document.activeElement &&
        !0 === document.activeElement.isContentEditable,
      n =
        document.activeElement &&
        document.activeElement.tagName &&
        /input|textarea/i.test(document.activeElement.tagName),
      r =
        document.activeElement &&
        document.activeElement.className &&
        /speaker-notes/i.test(document.activeElement.className),
      o =
        !(
          (-1 !== [32, 37, 38, 39, 40, 78, 80].indexOf(e.keyCode) &&
            e.shiftKey) ||
          e.altKey
        ) &&
        (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
    if (s || n || r || o) return;
    let l,
      d = [66, 86, 190, 191];
    if ("object" == typeof t.keyboard)
      for (l in t.keyboard)
        "togglePause" === t.keyboard[l] && d.push(parseInt(l, 10));
    if (this.Reveal.isPaused() && -1 === d.indexOf(i)) return !1;
    let c =
        "linear" === t.navigationMode ||
        !this.Reveal.hasHorizontalSlides() ||
        !this.Reveal.hasVerticalSlides(),
      h = !1;
    if ("object" == typeof t.keyboard)
      for (l in t.keyboard)
        if (parseInt(l, 10) === i) {
          let i = t.keyboard[l];
          "function" == typeof i
            ? i.apply(null, [e])
            : "string" == typeof i &&
              "function" == typeof this.Reveal[i] &&
              this.Reveal[i].call(),
            (h = !0);
        }
    if (!1 === h)
      for (l in this.bindings)
        if (parseInt(l, 10) === i) {
          let t = this.bindings[l].callback;
          "function" == typeof t
            ? t.apply(null, [e])
            : "string" == typeof t &&
              "function" == typeof this.Reveal[t] &&
              this.Reveal[t].call(),
            (h = !0);
        }
    !1 === h &&
      ((h = !0),
      80 === i || 33 === i
        ? this.Reveal.prev({ skipFragments: e.altKey })
        : 78 === i || 34 === i
          ? this.Reveal.next({ skipFragments: e.altKey })
          : 72 === i || 37 === i
            ? e.shiftKey
              ? this.Reveal.slide(0)
              : !this.Reveal.overview.isActive() && c
                ? this.Reveal.prev({ skipFragments: e.altKey })
                : this.Reveal.left({ skipFragments: e.altKey })
            : 76 === i || 39 === i
              ? e.shiftKey
                ? this.Reveal.slide(
                    this.Reveal.getHorizontalSlides().length - 1,
                  )
                : !this.Reveal.overview.isActive() && c
                  ? this.Reveal.next({ skipFragments: e.altKey })
                  : this.Reveal.right({ skipFragments: e.altKey })
              : 75 === i || 38 === i
                ? e.shiftKey
                  ? this.Reveal.slide(void 0, 0)
                  : !this.Reveal.overview.isActive() && c
                    ? this.Reveal.prev({ skipFragments: e.altKey })
                    : this.Reveal.up({ skipFragments: e.altKey })
                : 74 === i || 40 === i
                  ? e.shiftKey
                    ? this.Reveal.slide(void 0, Number.MAX_VALUE)
                    : !this.Reveal.overview.isActive() && c
                      ? this.Reveal.next({ skipFragments: e.altKey })
                      : this.Reveal.down({ skipFragments: e.altKey })
                  : 36 === i
                    ? this.Reveal.slide(0)
                    : 35 === i
                      ? this.Reveal.slide(
                          this.Reveal.getHorizontalSlides().length - 1,
                        )
                      : 32 === i
                        ? (this.Reveal.overview.isActive() &&
                            this.Reveal.overview.deactivate(),
                          e.shiftKey
                            ? this.Reveal.prev({ skipFragments: e.altKey })
                            : this.Reveal.next({ skipFragments: e.altKey }))
                        : 58 === i ||
                            59 === i ||
                            66 === i ||
                            86 === i ||
                            190 === i ||
                            191 === i
                          ? this.Reveal.togglePause()
                          : 70 === i
                            ? ((e) => {
                                let t =
                                  (e = e || document.documentElement)
                                    .requestFullscreen ||
                                  e.webkitRequestFullscreen ||
                                  e.webkitRequestFullScreen ||
                                  e.mozRequestFullScreen ||
                                  e.msRequestFullscreen;
                                t && t.apply(e);
                              })(
                                t.embedded
                                  ? this.Reveal.getViewportElement()
                                  : document.documentElement,
                              )
                            : 65 === i
                              ? t.autoSlideStoppable &&
                                this.Reveal.toggleAutoSlide(a)
                              : (h = !1)),
      h
        ? e.preventDefault && e.preventDefault()
        : (27 !== i && 79 !== i) ||
          (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(),
          e.preventDefault && e.preventDefault()),
      this.Reveal.cueAutoSlide();
  }
}
class P {
  constructor(e) {
    var t, i, a;
    (a = 1e3),
      (i = "MAX_REPLACE_STATE_FREQUENCY") in (t = this)
        ? Object.defineProperty(t, i, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[i] = a),
      (this.Reveal = e),
      (this.writeURLTimeout = 0),
      (this.replaceStateTimestamp = 0),
      (this.onWindowHashChange = this.onWindowHashChange.bind(this));
  }
  bind() {
    window.addEventListener("hashchange", this.onWindowHashChange, !1);
  }
  unbind() {
    window.removeEventListener("hashchange", this.onWindowHashChange, !1);
  }
  getIndicesFromHash(e = window.location.hash) {
    let t = e.replace(/^#\/?/, ""),
      i = t.split("/");
    if (/^[0-9]*$/.test(i[0]) || !t.length) {
      const e = this.Reveal.getConfig();
      let t,
        a = e.hashOneBasedIndex ? 1 : 0,
        s = parseInt(i[0], 10) - a || 0,
        n = parseInt(i[1], 10) - a || 0;
      return (
        e.fragmentInURL && ((t = parseInt(i[2], 10)), isNaN(t) && (t = void 0)),
        { h: s, v: n, f: t }
      );
    }
    {
      let e, i;
      /\/[-\d]+$/g.test(t) &&
        ((i = parseInt(t.split("/").pop(), 10)),
        (i = isNaN(i) ? void 0 : i),
        (t = t.split("/").shift()));
      try {
        e = document.getElementById(decodeURIComponent(t));
      } catch (e) {}
      if (e) return { ...this.Reveal.getIndices(e), f: i };
    }
    return null;
  }
  readURL() {
    const e = this.Reveal.getIndices(),
      t = this.getIndicesFromHash();
    t
      ? (t.h === e.h && t.v === e.v && void 0 === t.f) ||
        this.Reveal.slide(t.h, t.v, t.f)
      : this.Reveal.slide(e.h || 0, e.v || 0);
  }
  writeURL(e) {
    let t = this.Reveal.getConfig(),
      i = this.Reveal.getCurrentSlide();
    if ((clearTimeout(this.writeURLTimeout), "number" == typeof e))
      this.writeURLTimeout = setTimeout(this.writeURL, e);
    else if (i) {
      let e = this.getHash();
      t.history
        ? (window.location.hash = e)
        : t.hash &&
          ("/" === e
            ? this.debouncedReplaceState(
                window.location.pathname + window.location.search,
              )
            : this.debouncedReplaceState("#" + e));
    }
  }
  replaceState(e) {
    window.history.replaceState(null, null, e),
      (this.replaceStateTimestamp = Date.now());
  }
  debouncedReplaceState(e) {
    clearTimeout(this.replaceStateTimeout),
      Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY
        ? this.replaceState(e)
        : (this.replaceStateTimeout = setTimeout(
            () => this.replaceState(e),
            this.MAX_REPLACE_STATE_FREQUENCY,
          ));
  }
  getHash(e) {
    let t = "/",
      i = e || this.Reveal.getCurrentSlide(),
      a = i ? i.getAttribute("id") : null;
    a && (a = encodeURIComponent(a));
    let s = this.Reveal.getIndices(e);
    if (
      (this.Reveal.getConfig().fragmentInURL || (s.f = void 0),
      "string" == typeof a && a.length)
    )
      (t = "/" + a), s.f >= 0 && (t += "/" + s.f);
    else {
      let e = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
      (s.h > 0 || s.v > 0 || s.f >= 0) && (t += s.h + e),
        (s.v > 0 || s.f >= 0) && (t += "/" + (s.v + e)),
        s.f >= 0 && (t += "/" + s.f);
    }
    return t;
  }
  onWindowHashChange(e) {
    this.readURL();
  }
}
class N {
  constructor(e) {
    (this.Reveal = e),
      (this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this)),
      (this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this)),
      (this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this)),
      (this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this)),
      (this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this)),
      (this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this));
  }
  render() {
    const e = this.Reveal.getConfig().rtl,
      i = this.Reveal.getRevealElement();
    (this.element = document.createElement("aside")),
      (this.element.className = "controls"),
      (this.element.innerHTML = `<button class="navigate-left" aria-label="${e ? "next slide" : "previous slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="${e ? "previous slide" : "next slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`),
      this.Reveal.getRevealElement().appendChild(this.element),
      (this.controlsLeft = t(i, ".navigate-left")),
      (this.controlsRight = t(i, ".navigate-right")),
      (this.controlsUp = t(i, ".navigate-up")),
      (this.controlsDown = t(i, ".navigate-down")),
      (this.controlsPrev = t(i, ".navigate-prev")),
      (this.controlsNext = t(i, ".navigate-next")),
      (this.controlsRightArrow = this.element.querySelector(".navigate-right")),
      (this.controlsLeftArrow = this.element.querySelector(".navigate-left")),
      (this.controlsDownArrow = this.element.querySelector(".navigate-down"));
  }
  configure(e, t) {
    (this.element.style.display = e.controls ? "block" : "none"),
      this.element.setAttribute("data-controls-layout", e.controlsLayout),
      this.element.setAttribute(
        "data-controls-back-arrows",
        e.controlsBackArrows,
      );
  }
  bind() {
    let e = ["touchstart", "click"];
    v && (e = ["touchstart"]),
      e.forEach((e) => {
        this.controlsLeft.forEach((t) =>
          t.addEventListener(e, this.onNavigateLeftClicked, !1),
        ),
          this.controlsRight.forEach((t) =>
            t.addEventListener(e, this.onNavigateRightClicked, !1),
          ),
          this.controlsUp.forEach((t) =>
            t.addEventListener(e, this.onNavigateUpClicked, !1),
          ),
          this.controlsDown.forEach((t) =>
            t.addEventListener(e, this.onNavigateDownClicked, !1),
          ),
          this.controlsPrev.forEach((t) =>
            t.addEventListener(e, this.onNavigatePrevClicked, !1),
          ),
          this.controlsNext.forEach((t) =>
            t.addEventListener(e, this.onNavigateNextClicked, !1),
          );
      });
  }
  unbind() {
    ["touchstart", "click"].forEach((e) => {
      this.controlsLeft.forEach((t) =>
        t.removeEventListener(e, this.onNavigateLeftClicked, !1),
      ),
        this.controlsRight.forEach((t) =>
          t.removeEventListener(e, this.onNavigateRightClicked, !1),
        ),
        this.controlsUp.forEach((t) =>
          t.removeEventListener(e, this.onNavigateUpClicked, !1),
        ),
        this.controlsDown.forEach((t) =>
          t.removeEventListener(e, this.onNavigateDownClicked, !1),
        ),
        this.controlsPrev.forEach((t) =>
          t.removeEventListener(e, this.onNavigatePrevClicked, !1),
        ),
        this.controlsNext.forEach((t) =>
          t.removeEventListener(e, this.onNavigateNextClicked, !1),
        );
    });
  }
  update() {
    let e = this.Reveal.availableRoutes();
    [
      ...this.controlsLeft,
      ...this.controlsRight,
      ...this.controlsUp,
      ...this.controlsDown,
      ...this.controlsPrev,
      ...this.controlsNext,
    ].forEach((e) => {
      e.classList.remove("enabled", "fragmented"),
        e.setAttribute("disabled", "disabled");
    }),
      e.left &&
        this.controlsLeft.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      e.right &&
        this.controlsRight.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      e.up &&
        this.controlsUp.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      e.down &&
        this.controlsDown.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      (e.left || e.up) &&
        this.controlsPrev.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        }),
      (e.right || e.down) &&
        this.controlsNext.forEach((e) => {
          e.classList.add("enabled"), e.removeAttribute("disabled");
        });
    let t = this.Reveal.getCurrentSlide();
    if (t) {
      let e = this.Reveal.fragments.availableRoutes();
      e.prev &&
        this.controlsPrev.forEach((e) => {
          e.classList.add("fragmented", "enabled"),
            e.removeAttribute("disabled");
        }),
        e.next &&
          this.controlsNext.forEach((e) => {
            e.classList.add("fragmented", "enabled"),
              e.removeAttribute("disabled");
          }),
        this.Reveal.isVerticalSlide(t)
          ? (e.prev &&
              this.controlsUp.forEach((e) => {
                e.classList.add("fragmented", "enabled"),
                  e.removeAttribute("disabled");
              }),
            e.next &&
              this.controlsDown.forEach((e) => {
                e.classList.add("fragmented", "enabled"),
                  e.removeAttribute("disabled");
              }))
          : (e.prev &&
              this.controlsLeft.forEach((e) => {
                e.classList.add("fragmented", "enabled"),
                  e.removeAttribute("disabled");
              }),
            e.next &&
              this.controlsRight.forEach((e) => {
                e.classList.add("fragmented", "enabled"),
                  e.removeAttribute("disabled");
              }));
    }
    if (this.Reveal.getConfig().controlsTutorial) {
      let t = this.Reveal.getIndices();
      !this.Reveal.hasNavigatedVertically() && e.down
        ? this.controlsDownArrow.classList.add("highlight")
        : (this.controlsDownArrow.classList.remove("highlight"),
          this.Reveal.getConfig().rtl
            ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === t.v
              ? this.controlsLeftArrow.classList.add("highlight")
              : this.controlsLeftArrow.classList.remove("highlight")
            : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === t.v
              ? this.controlsRightArrow.classList.add("highlight")
              : this.controlsRightArrow.classList.remove("highlight"));
    }
  }
  destroy() {
    this.unbind(), this.element.remove();
  }
  onNavigateLeftClicked(e) {
    e.preventDefault(),
      this.Reveal.onUserInput(),
      "linear" === this.Reveal.getConfig().navigationMode
        ? this.Reveal.prev()
        : this.Reveal.left();
  }
  onNavigateRightClicked(e) {
    e.preventDefault(),
      this.Reveal.onUserInput(),
      "linear" === this.Reveal.getConfig().navigationMode
        ? this.Reveal.next()
        : this.Reveal.right();
  }
  onNavigateUpClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
  }
  onNavigateDownClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
  }
  onNavigatePrevClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
  }
  onNavigateNextClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
  }
}
class M {
  constructor(e) {
    (this.Reveal = e),
      (this.onProgressClicked = this.onProgressClicked.bind(this));
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "progress"),
      this.Reveal.getRevealElement().appendChild(this.element),
      (this.bar = document.createElement("span")),
      this.element.appendChild(this.bar);
  }
  configure(e, t) {
    this.element.style.display = e.progress ? "block" : "none";
  }
  bind() {
    this.Reveal.getConfig().progress &&
      this.element &&
      this.element.addEventListener("click", this.onProgressClicked, !1);
  }
  unbind() {
    this.Reveal.getConfig().progress &&
      this.element &&
      this.element.removeEventListener("click", this.onProgressClicked, !1);
  }
  update() {
    if (this.Reveal.getConfig().progress && this.bar) {
      let e = this.Reveal.getProgress();
      this.Reveal.getTotalSlides() < 2 && (e = 0),
        (this.bar.style.transform = "scaleX(" + e + ")");
    }
  }
  getMaxWidth() {
    return this.Reveal.getRevealElement().offsetWidth;
  }
  onProgressClicked(e) {
    this.Reveal.onUserInput(e), e.preventDefault();
    let t = this.Reveal.getSlides(),
      i = t.length,
      a = Math.floor((e.clientX / this.getMaxWidth()) * i);
    this.Reveal.getConfig().rtl && (a = i - a);
    let s = this.Reveal.getIndices(t[a]);
    this.Reveal.slide(s.h, s.v);
  }
  destroy() {
    this.element.remove();
  }
}
class D {
  constructor(e) {
    (this.Reveal = e),
      (this.lastMouseWheelStep = 0),
      (this.cursorHidden = !1),
      (this.cursorInactiveTimeout = 0),
      (this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this)),
      (this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this));
  }
  configure(e, t) {
    e.mouseWheel
      ? (document.addEventListener(
          "DOMMouseScroll",
          this.onDocumentMouseScroll,
          !1,
        ),
        document.addEventListener("mousewheel", this.onDocumentMouseScroll, !1))
      : (document.removeEventListener(
          "DOMMouseScroll",
          this.onDocumentMouseScroll,
          !1,
        ),
        document.removeEventListener(
          "mousewheel",
          this.onDocumentMouseScroll,
          !1,
        )),
      e.hideInactiveCursor
        ? (document.addEventListener(
            "mousemove",
            this.onDocumentCursorActive,
            !1,
          ),
          document.addEventListener(
            "mousedown",
            this.onDocumentCursorActive,
            !1,
          ))
        : (this.showCursor(),
          document.removeEventListener(
            "mousemove",
            this.onDocumentCursorActive,
            !1,
          ),
          document.removeEventListener(
            "mousedown",
            this.onDocumentCursorActive,
            !1,
          ));
  }
  showCursor() {
    this.cursorHidden &&
      ((this.cursorHidden = !1),
      (this.Reveal.getRevealElement().style.cursor = ""));
  }
  hideCursor() {
    !1 === this.cursorHidden &&
      ((this.cursorHidden = !0),
      (this.Reveal.getRevealElement().style.cursor = "none"));
  }
  destroy() {
    this.showCursor(),
      document.removeEventListener(
        "DOMMouseScroll",
        this.onDocumentMouseScroll,
        !1,
      ),
      document.removeEventListener(
        "mousewheel",
        this.onDocumentMouseScroll,
        !1,
      ),
      document.removeEventListener(
        "mousemove",
        this.onDocumentCursorActive,
        !1,
      ),
      document.removeEventListener(
        "mousedown",
        this.onDocumentCursorActive,
        !1,
      );
  }
  onDocumentCursorActive(e) {
    this.showCursor(),
      clearTimeout(this.cursorInactiveTimeout),
      (this.cursorInactiveTimeout = setTimeout(
        this.hideCursor.bind(this),
        this.Reveal.getConfig().hideCursorTime,
      ));
  }
  onDocumentMouseScroll(e) {
    if (Date.now() - this.lastMouseWheelStep > 1e3) {
      this.lastMouseWheelStep = Date.now();
      let t = e.detail || -e.wheelDelta;
      t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev();
    }
  }
}
const I = (e, t) => {
  const i = document.createElement("script");
  (i.type = "text/javascript"),
    (i.async = !1),
    (i.defer = !1),
    (i.src = e),
    "function" == typeof t &&
      ((i.onload = i.onreadystatechange =
        (e) => {
          ("load" === e.type || /loaded|complete/.test(i.readyState)) &&
            ((i.onload = i.onreadystatechange = i.onerror = null), t());
        }),
      (i.onerror = (e) => {
        (i.onload = i.onreadystatechange = i.onerror = null),
          t(new Error("Failed loading script: " + i.src + "\n" + e));
      }));
  const a = document.querySelector("head");
  a.insertBefore(i, a.lastChild);
};
class T {
  constructor(e) {
    (this.Reveal = e),
      (this.state = "idle"),
      (this.registeredPlugins = {}),
      (this.asyncDependencies = []);
  }
  load(e, t) {
    return (
      (this.state = "loading"),
      e.forEach(this.registerPlugin.bind(this)),
      new Promise((e) => {
        let i = [],
          a = 0;
        if (
          (t.forEach((e) => {
            (e.condition && !e.condition()) ||
              (e.async ? this.asyncDependencies.push(e) : i.push(e));
          }),
          i.length)
        ) {
          a = i.length;
          const t = (t) => {
            t && "function" == typeof t.callback && t.callback(),
              0 == --a && this.initPlugins().then(e);
          };
          i.forEach((e) => {
            "string" == typeof e.id
              ? (this.registerPlugin(e), t(e))
              : "string" == typeof e.src
                ? I(e.src, () => t(e))
                : (console.warn("Unrecognized plugin format", e), t());
          });
        } else this.initPlugins().then(e);
      })
    );
  }
  initPlugins() {
    return new Promise((e) => {
      let t = Object.values(this.registeredPlugins),
        i = t.length;
      if (0 === i) this.loadAsync().then(e);
      else {
        let a,
          s = () => {
            0 == --i ? this.loadAsync().then(e) : a();
          },
          n = 0;
        (a = () => {
          let e = t[n++];
          if ("function" == typeof e.init) {
            let t = e.init(this.Reveal);
            t && "function" == typeof t.then ? t.then(s) : s();
          } else s();
        }),
          a();
      }
    });
  }
  loadAsync() {
    return (
      (this.state = "loaded"),
      this.asyncDependencies.length &&
        this.asyncDependencies.forEach((e) => {
          I(e.src, e.callback);
        }),
      Promise.resolve()
    );
  }
  registerPlugin(e) {
    2 === arguments.length && "string" == typeof arguments[0]
      ? ((e = arguments[1]).id = arguments[0])
      : "function" == typeof e && (e = e());
    let t = e.id;
    "string" != typeof t
      ? console.warn("Unrecognized plugin format; can't find plugin.id", e)
      : void 0 === this.registeredPlugins[t]
        ? ((this.registeredPlugins[t] = e),
          "loaded" === this.state &&
            "function" == typeof e.init &&
            e.init(this.Reveal))
        : console.warn(
            'reveal.js: "' + t + '" plugin has already been registered',
          );
  }
  hasPlugin(e) {
    return !!this.registeredPlugins[e];
  }
  getPlugin(e) {
    return this.registeredPlugins[e];
  }
  getRegisteredPlugins() {
    return this.registeredPlugins;
  }
  destroy() {
    Object.values(this.registeredPlugins).forEach((e) => {
      "function" == typeof e.destroy && e.destroy();
    }),
      (this.registeredPlugins = {}),
      (this.asyncDependencies = []);
  }
}
class F {
  constructor(e) {
    this.Reveal = e;
  }
  async setupPDF() {
    const e = this.Reveal.getConfig(),
      i = t(this.Reveal.getRevealElement(), ".slides section"),
      a = e.slideNumber && /all|print/i.test(e.showSlideNumber),
      s = this.Reveal.getComputedSlideSize(
        window.innerWidth,
        window.innerHeight,
      ),
      n = Math.floor(s.width * (1 + e.margin)),
      r = Math.floor(s.height * (1 + e.margin)),
      o = s.width,
      d = s.height;
    await new Promise(requestAnimationFrame),
      l("@page{size:" + n + "px " + r + "px; margin: 0px;}"),
      l(
        ".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " +
          o +
          "px; max-height:" +
          d +
          "px}",
      ),
      document.documentElement.classList.add("print-pdf"),
      (document.body.style.width = n + "px"),
      (document.body.style.height = r + "px");
    const c = document.querySelector(".reveal-viewport");
    let h;
    if (c) {
      const e = window.getComputedStyle(c);
      e && e.background && (h = e.background);
    }
    await new Promise(requestAnimationFrame),
      this.Reveal.layoutSlideContents(o, d),
      await new Promise(requestAnimationFrame);
    const u = i.map((e) => e.scrollHeight),
      g = [],
      v = i[0].parentNode;
    let p = 1;
    i.forEach(function (i, s) {
      if (!1 === i.classList.contains("stack")) {
        let l = (n - o) / 2,
          c = (r - d) / 2;
        const v = u[s];
        let m = Math.max(Math.ceil(v / r), 1);
        (m = Math.min(m, e.pdfMaxPagesPerSlide)),
          ((1 === m && e.center) || i.classList.contains("center")) &&
            (c = Math.max((r - v) / 2, 0));
        const f = document.createElement("div");
        if (
          (g.push(f),
          (f.className = "pdf-page"),
          (f.style.height = (r + e.pdfPageHeightOffset) * m + "px"),
          h && (f.style.background = h),
          f.appendChild(i),
          (i.style.left = l + "px"),
          (i.style.top = c + "px"),
          (i.style.width = o + "px"),
          this.Reveal.slideContent.layout(i),
          i.slideBackgroundElement &&
            f.insertBefore(i.slideBackgroundElement, i),
          e.showNotes)
        ) {
          const t = this.Reveal.getSlideNotes(i);
          if (t) {
            const i = 8,
              a = "string" == typeof e.showNotes ? e.showNotes : "inline",
              s = document.createElement("div");
            s.classList.add("speaker-notes"),
              s.classList.add("speaker-notes-pdf"),
              s.setAttribute("data-layout", a),
              (s.innerHTML = t),
              "separate-page" === a
                ? g.push(s)
                : ((s.style.left = i + "px"),
                  (s.style.bottom = i + "px"),
                  (s.style.width = n - 2 * i + "px"),
                  f.appendChild(s));
          }
        }
        if (a) {
          const e = document.createElement("div");
          e.classList.add("slide-number"),
            e.classList.add("slide-number-pdf"),
            (e.innerHTML = p++),
            f.appendChild(e);
        }
        if (e.pdfSeparateFragments) {
          const e = this.Reveal.fragments.sort(
            f.querySelectorAll(".fragment"),
            !0,
          );
          let t;
          e.forEach(function (e, i) {
            t &&
              t.forEach(function (e) {
                e.classList.remove("current-fragment");
              }),
              e.forEach(function (e) {
                e.classList.add("visible", "current-fragment");
              }, this);
            const s = f.cloneNode(!0);
            if (a) {
              const e = i + 1;
              s.querySelector(".slide-number-pdf").innerHTML += "." + e;
            }
            g.push(s), (t = e);
          }, this),
            e.forEach(function (e) {
              e.forEach(function (e) {
                e.classList.remove("visible", "current-fragment");
              });
            });
        } else
          t(f, ".fragment:not(.fade-out)").forEach(function (e) {
            e.classList.add("visible");
          });
      }
    }, this),
      await new Promise(requestAnimationFrame),
      g.forEach((e) => v.appendChild(e)),
      this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),
      this.Reveal.dispatchEvent({ type: "pdf-ready" });
  }
  isPrintingPDF() {
    return /print-pdf/gi.test(window.location.search);
  }
}
class z {
  constructor(e) {
    (this.Reveal = e),
      (this.touchStartX = 0),
      (this.touchStartY = 0),
      (this.touchStartCount = 0),
      (this.touchCaptured = !1),
      (this.onPointerDown = this.onPointerDown.bind(this)),
      (this.onPointerMove = this.onPointerMove.bind(this)),
      (this.onPointerUp = this.onPointerUp.bind(this)),
      (this.onTouchStart = this.onTouchStart.bind(this)),
      (this.onTouchMove = this.onTouchMove.bind(this)),
      (this.onTouchEnd = this.onTouchEnd.bind(this));
  }
  bind() {
    let e = this.Reveal.getRevealElement();
    "onpointerdown" in window
      ? (e.addEventListener("pointerdown", this.onPointerDown, !1),
        e.addEventListener("pointermove", this.onPointerMove, !1),
        e.addEventListener("pointerup", this.onPointerUp, !1))
      : window.navigator.msPointerEnabled
        ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1),
          e.addEventListener("MSPointerMove", this.onPointerMove, !1),
          e.addEventListener("MSPointerUp", this.onPointerUp, !1))
        : (e.addEventListener("touchstart", this.onTouchStart, !1),
          e.addEventListener("touchmove", this.onTouchMove, !1),
          e.addEventListener("touchend", this.onTouchEnd, !1));
  }
  unbind() {
    let e = this.Reveal.getRevealElement();
    e.removeEventListener("pointerdown", this.onPointerDown, !1),
      e.removeEventListener("pointermove", this.onPointerMove, !1),
      e.removeEventListener("pointerup", this.onPointerUp, !1),
      e.removeEventListener("MSPointerDown", this.onPointerDown, !1),
      e.removeEventListener("MSPointerMove", this.onPointerMove, !1),
      e.removeEventListener("MSPointerUp", this.onPointerUp, !1),
      e.removeEventListener("touchstart", this.onTouchStart, !1),
      e.removeEventListener("touchmove", this.onTouchMove, !1),
      e.removeEventListener("touchend", this.onTouchEnd, !1);
  }
  isSwipePrevented(e) {
    if (n(e, "video, audio")) return !0;
    for (; e && "function" == typeof e.hasAttribute; ) {
      if (e.hasAttribute("data-prevent-swipe")) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  onTouchStart(e) {
    if (this.isSwipePrevented(e.target)) return !0;
    (this.touchStartX = e.touches[0].clientX),
      (this.touchStartY = e.touches[0].clientY),
      (this.touchStartCount = e.touches.length);
  }
  onTouchMove(e) {
    if (this.isSwipePrevented(e.target)) return !0;
    let t = this.Reveal.getConfig();
    if (this.touchCaptured) v && e.preventDefault();
    else {
      this.Reveal.onUserInput(e);
      let i = e.touches[0].clientX,
        a = e.touches[0].clientY;
      if (1 === e.touches.length && 2 !== this.touchStartCount) {
        let s = this.Reveal.availableRoutes({ includeFragments: !0 }),
          n = i - this.touchStartX,
          r = a - this.touchStartY;
        n > 40 && Math.abs(n) > Math.abs(r)
          ? ((this.touchCaptured = !0),
            "linear" === t.navigationMode
              ? t.rtl
                ? this.Reveal.next()
                : this.Reveal.prev()
              : this.Reveal.left())
          : n < -40 && Math.abs(n) > Math.abs(r)
            ? ((this.touchCaptured = !0),
              "linear" === t.navigationMode
                ? t.rtl
                  ? this.Reveal.prev()
                  : this.Reveal.next()
                : this.Reveal.right())
            : r > 40 && s.up
              ? ((this.touchCaptured = !0),
                "linear" === t.navigationMode
                  ? this.Reveal.prev()
                  : this.Reveal.up())
              : r < -40 &&
                s.down &&
                ((this.touchCaptured = !0),
                "linear" === t.navigationMode
                  ? this.Reveal.next()
                  : this.Reveal.down()),
          t.embedded
            ? (this.touchCaptured || this.Reveal.isVerticalSlide()) &&
              e.preventDefault()
            : e.preventDefault();
      }
    }
  }
  onTouchEnd(e) {
    this.touchCaptured = !1;
  }
  onPointerDown(e) {
    (e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType) ||
      ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]),
      this.onTouchStart(e));
  }
  onPointerMove(e) {
    (e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType) ||
      ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]),
      this.onTouchMove(e));
  }
  onPointerUp(e) {
    (e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType) ||
      ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]),
      this.onTouchEnd(e));
  }
}
class H {
  constructor(e) {
    (this.Reveal = e),
      (this.onRevealPointerDown = this.onRevealPointerDown.bind(this)),
      (this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this));
  }
  configure(e, t) {
    e.embedded ? this.blur() : (this.focus(), this.unbind());
  }
  bind() {
    this.Reveal.getConfig().embedded &&
      this.Reveal.getRevealElement().addEventListener(
        "pointerdown",
        this.onRevealPointerDown,
        !1,
      );
  }
  unbind() {
    this.Reveal.getRevealElement().removeEventListener(
      "pointerdown",
      this.onRevealPointerDown,
      !1,
    ),
      document.removeEventListener(
        "pointerdown",
        this.onDocumentPointerDown,
        !1,
      );
  }
  focus() {
    "focus" !== this.state &&
      (this.Reveal.getRevealElement().classList.add("focused"),
      document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)),
      (this.state = "focus");
  }
  blur() {
    "blur" !== this.state &&
      (this.Reveal.getRevealElement().classList.remove("focused"),
      document.removeEventListener(
        "pointerdown",
        this.onDocumentPointerDown,
        !1,
      )),
      (this.state = "blur");
  }
  isFocused() {
    return "focus" === this.state;
  }
  destroy() {
    this.Reveal.getRevealElement().classList.remove("focused");
  }
  onRevealPointerDown(e) {
    this.focus();
  }
  onDocumentPointerDown(e) {
    let t = r(e.target, ".reveal");
    (t && t === this.Reveal.getRevealElement()) || this.blur();
  }
}
class q {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    (this.element = document.createElement("div")),
      (this.element.className = "speaker-notes"),
      this.element.setAttribute("data-prevent-swipe", ""),
      this.element.setAttribute("tabindex", "0"),
      this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e, t) {
    e.showNotes &&
      this.element.setAttribute(
        "data-layout",
        "string" == typeof e.showNotes ? e.showNotes : "inline",
      );
  }
  update() {
    this.Reveal.getConfig().showNotes &&
      this.element &&
      this.Reveal.getCurrentSlide() &&
      !this.Reveal.print.isPrintingPDF() &&
      (this.element.innerHTML =
        this.getSlideNotes() ||
        '<span class="notes-placeholder">No notes on this slide.</span>');
  }
  updateVisibility() {
    this.Reveal.getConfig().showNotes &&
    this.hasNotes() &&
    !this.Reveal.print.isPrintingPDF()
      ? this.Reveal.getRevealElement().classList.add("show-notes")
      : this.Reveal.getRevealElement().classList.remove("show-notes");
  }
  hasNotes() {
    return (
      this.Reveal.getSlidesElement().querySelectorAll(
        "[data-notes], aside.notes",
      ).length > 0
    );
  }
  isSpeakerNotesWindow() {
    return !!window.location.search.match(/receiver/gi);
  }
  getSlideNotes(e = this.Reveal.getCurrentSlide()) {
    if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
    let t = e.querySelectorAll("aside.notes");
    return t
      ? Array.from(t)
          .map((e) => e.innerHTML)
          .join("\n")
      : null;
  }
  destroy() {
    this.element.remove();
  }
}
class B {
  constructor(e, t) {
    (this.diameter = 100),
      (this.diameter2 = this.diameter / 2),
      (this.thickness = 6),
      (this.playing = !1),
      (this.progress = 0),
      (this.progressOffset = 1),
      (this.container = e),
      (this.progressCheck = t),
      (this.canvas = document.createElement("canvas")),
      (this.canvas.className = "playback"),
      (this.canvas.width = this.diameter),
      (this.canvas.height = this.diameter),
      (this.canvas.style.width = this.diameter2 + "px"),
      (this.canvas.style.height = this.diameter2 + "px"),
      (this.context = this.canvas.getContext("2d")),
      this.container.appendChild(this.canvas),
      this.render();
  }
  setPlaying(e) {
    const t = this.playing;
    (this.playing = e), !t && this.playing ? this.animate() : this.render();
  }
  animate() {
    const e = this.progress;
    (this.progress = this.progressCheck()),
      e > 0.8 && this.progress < 0.2 && (this.progressOffset = this.progress),
      this.render(),
      this.playing && requestAnimationFrame(this.animate.bind(this));
  }
  render() {
    let e = this.playing ? this.progress : 0,
      t = this.diameter2 - this.thickness,
      i = this.diameter2,
      a = this.diameter2,
      s = 28;
    this.progressOffset += 0.1 * (1 - this.progressOffset);
    const n = -Math.PI / 2 + e * (2 * Math.PI),
      r = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
    this.context.save(),
      this.context.clearRect(0, 0, this.diameter, this.diameter),
      this.context.beginPath(),
      this.context.arc(i, a, t + 4, 0, 2 * Math.PI, !1),
      (this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )"),
      this.context.fill(),
      this.context.beginPath(),
      this.context.arc(i, a, t, 0, 2 * Math.PI, !1),
      (this.context.lineWidth = this.thickness),
      (this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )"),
      this.context.stroke(),
      this.playing &&
        (this.context.beginPath(),
        this.context.arc(i, a, t, r, n, !1),
        (this.context.lineWidth = this.thickness),
        (this.context.strokeStyle = "#fff"),
        this.context.stroke()),
      this.context.translate(i - 14, a - 14),
      this.playing
        ? ((this.context.fillStyle = "#fff"),
          this.context.fillRect(0, 0, 10, s),
          this.context.fillRect(18, 0, 10, s))
        : (this.context.beginPath(),
          this.context.translate(4, 0),
          this.context.moveTo(0, 0),
          this.context.lineTo(24, 14),
          this.context.lineTo(0, s),
          (this.context.fillStyle = "#fff"),
          this.context.fill()),
      this.context.restore();
  }
  on(e, t) {
    this.canvas.addEventListener(e, t, !1);
  }
  off(e, t) {
    this.canvas.removeEventListener(e, t, !1);
  }
  destroy() {
    (this.playing = !1),
      this.canvas.parentNode && this.container.removeChild(this.canvas);
  }
}
var O = {
  width: 960,
  height: 700,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2,
  controls: !0,
  controlsTutorial: !0,
  controlsLayout: "bottom-right",
  controlsBackArrows: "faded",
  progress: !0,
  slideNumber: !1,
  showSlideNumber: "all",
  hashOneBasedIndex: !1,
  hash: !1,
  respondToHashChanges: !0,
  history: !1,
  keyboard: !0,
  keyboardCondition: null,
  disableLayout: !1,
  overview: !0,
  center: !0,
  touch: !0,
  loop: !1,
  rtl: !1,
  navigationMode: "default",
  shuffle: !1,
  fragments: !0,
  fragmentInURL: !0,
  embedded: !1,
  help: !0,
  pause: !0,
  showNotes: !1,
  showHiddenSlides: !1,
  autoPlayMedia: null,
  preloadIframes: null,
  autoAnimate: !0,
  autoAnimateMatcher: null,
  autoAnimateEasing: "ease",
  autoAnimateDuration: 1,
  autoAnimateUnmatched: !0,
  autoAnimateStyles: [
    "opacity",
    "color",
    "background-color",
    "padding",
    "font-size",
    "line-height",
    "letter-spacing",
    "border-width",
    "border-color",
    "border-radius",
    "outline",
    "outline-offset",
  ],
  autoSlide: 0,
  autoSlideStoppable: !0,
  autoSlideMethod: null,
  defaultTiming: null,
  mouseWheel: !1,
  previewLinks: !1,
  postMessage: !0,
  postMessageEvents: !1,
  focusBodyOnPageVisibilityChange: !0,
  transition: "slide",
  transitionSpeed: "default",
  backgroundTransition: "fade",
  parallaxBackgroundImage: "",
  parallaxBackgroundSize: "",
  parallaxBackgroundRepeat: "",
  parallaxBackgroundPosition: "",
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
  pdfSeparateFragments: !0,
  pdfPageHeightOffset: -1,
  viewDistance: 3,
  mobileViewDistance: 2,
  display: "block",
  hideInactiveCursor: !0,
  hideCursorTime: 5e3,
  dependencies: [],
  plugins: [],
};
function U(n, l) {
  arguments.length < 2 &&
    ((l = arguments[0]), (n = document.querySelector(".reveal")));
  const h = {};
  let u,
    v,
    p,
    m,
    f,
    w = {},
    S = !1,
    A = { hasNavigatedHorizontally: !1, hasNavigatedVertically: !1 },
    I = [],
    U = 1,
    W = { layout: "", overview: "" },
    K = {},
    V = "idle",
    $ = 0,
    j = 0,
    X = -1,
    Y = !1,
    _ = new b(h),
    G = new y(h),
    J = new k(h),
    Q = new E(h),
    Z = new L(h),
    ee = new C(h),
    te = new x(h),
    ie = new P(h),
    ae = new N(h),
    se = new M(h),
    ne = new D(h),
    re = new T(h),
    oe = new F(h),
    le = new H(h),
    de = new z(h),
    ce = new q(h);
  function he(e) {
    if (!n) throw 'Unable to find presentation root (<div class="reveal">).';
    if (((K.wrapper = n), (K.slides = n.querySelector(".slides")), !K.slides))
      throw 'Unable to find slides container (<div class="slides">).';
    return (
      (w = { ...O, ...w, ...l, ...e, ...d() }),
      ue(),
      window.addEventListener("load", He, !1),
      re.load(w.plugins, w.dependencies).then(ge),
      new Promise((e) => h.on("ready", e))
    );
  }
  function ue() {
    !0 === w.embedded
      ? (K.viewport = r(n, ".reveal-viewport") || n)
      : ((K.viewport = document.body),
        document.documentElement.classList.add("reveal-full-page")),
      K.viewport.classList.add("reveal-viewport");
  }
  function ge() {
    (S = !0),
      ve(),
      pe(),
      Ee(),
      ye(),
      we(),
      tt(),
      Re(),
      ie.readURL(),
      Q.update(!0),
      setTimeout(() => {
        K.slides.classList.remove("no-transition"),
          K.wrapper.classList.add("ready"),
          Pe({
            type: "ready",
            data: { indexh: u, indexv: v, currentSlide: m },
          });
      }, 1),
      oe.isPrintingPDF() &&
        (Ae(),
        "complete" === document.readyState
          ? oe.setupPDF()
          : window.addEventListener("load", () => {
              oe.setupPDF();
            }));
  }
  function ve() {
    w.showHiddenSlides ||
      t(K.wrapper, 'section[data-visibility="hidden"]').forEach((e) => {
        e.parentNode.removeChild(e);
      });
  }
  function pe() {
    K.slides.classList.add("no-transition"),
      g
        ? K.wrapper.classList.add("no-hover")
        : K.wrapper.classList.remove("no-hover"),
      Q.render(),
      G.render(),
      ae.render(),
      se.render(),
      ce.render(),
      (K.pauseOverlay = o(
        K.wrapper,
        "div",
        "pause-overlay",
        w.controls
          ? '<button class="resume-button">Resume presentation</button>'
          : null,
      )),
      (K.statusElement = me()),
      K.wrapper.setAttribute("role", "application");
  }
  function me() {
    let e = K.wrapper.querySelector(".aria-status");
    return (
      e ||
        ((e = document.createElement("div")),
        (e.style.position = "absolute"),
        (e.style.height = "1px"),
        (e.style.width = "1px"),
        (e.style.overflow = "hidden"),
        (e.style.clip = "rect( 1px, 1px, 1px, 1px )"),
        e.classList.add("aria-status"),
        e.setAttribute("aria-live", "polite"),
        e.setAttribute("aria-atomic", "true"),
        K.wrapper.appendChild(e)),
      e
    );
  }
  function fe(e) {
    K.statusElement.textContent = e;
  }
  function be(e) {
    let t = "";
    if (3 === e.nodeType) t += e.textContent;
    else if (1 === e.nodeType) {
      let i = e.getAttribute("aria-hidden"),
        a = "none" === window.getComputedStyle(e).display;
      "true" === i ||
        a ||
        Array.from(e.childNodes).forEach((e) => {
          t += be(e);
        });
    }
    return (t = t.trim()), "" === t ? "" : t + " ";
  }
  function ye() {
    setInterval(() => {
      (0 === K.wrapper.scrollTop && 0 === K.wrapper.scrollLeft) ||
        ((K.wrapper.scrollTop = 0), (K.wrapper.scrollLeft = 0));
    }, 1e3);
  }
  function we() {
    document.addEventListener("fullscreenchange", Bt),
      document.addEventListener("webkitfullscreenchange", Bt);
  }
  function Ee() {
    w.postMessage && window.addEventListener("message", Tt, !1);
  }
  function Re(t) {
    const a = { ...w };
    if (("object" == typeof t && e(w, t), !1 === h.isReady())) return;
    const s = K.wrapper.querySelectorAll(".slides section").length;
    K.wrapper.classList.remove(a.transition),
      K.wrapper.classList.add(w.transition),
      K.wrapper.setAttribute("data-transition-speed", w.transitionSpeed),
      K.wrapper.setAttribute(
        "data-background-transition",
        w.backgroundTransition,
      ),
      K.viewport.style.setProperty("--slide-width", w.width + "px"),
      K.viewport.style.setProperty("--slide-height", w.height + "px"),
      w.shuffle && it(),
      i(K.wrapper, "embedded", w.embedded),
      i(K.wrapper, "rtl", w.rtl),
      i(K.wrapper, "center", w.center),
      !1 === w.pause && Xe(),
      w.previewLinks
        ? (Me(), De("[data-preview-link=false]"))
        : (De(), Me("[data-preview-link]:not([data-preview-link=false])")),
      J.reset(),
      f && (f.destroy(), (f = null)),
      s > 1 &&
        w.autoSlide &&
        w.autoSlideStoppable &&
        ((f = new B(K.wrapper, () =>
          Math.min(Math.max((Date.now() - X) / $, 0), 1),
        )),
        f.on("click", Ut),
        (Y = !1)),
      "default" !== w.navigationMode
        ? K.wrapper.setAttribute("data-navigation-mode", w.navigationMode)
        : K.wrapper.removeAttribute("data-navigation-mode"),
      ce.configure(w, a),
      le.configure(w, a),
      ne.configure(w, a),
      ae.configure(w, a),
      se.configure(w, a),
      te.configure(w, a),
      Z.configure(w, a),
      G.configure(w, a),
      Ze();
  }
  function Se() {
    window.addEventListener("resize", Ht, !1),
      w.touch && de.bind(),
      w.keyboard && te.bind(),
      w.progress && se.bind(),
      w.respondToHashChanges && ie.bind(),
      ae.bind(),
      le.bind(),
      K.slides.addEventListener("click", zt, !1),
      K.slides.addEventListener("transitionend", Ft, !1),
      K.pauseOverlay.addEventListener("click", Xe, !1),
      w.focusBodyOnPageVisibilityChange &&
        document.addEventListener("visibilitychange", qt, !1);
  }
  function Ae() {
    de.unbind(),
      le.unbind(),
      te.unbind(),
      ae.unbind(),
      se.unbind(),
      ie.unbind(),
      window.removeEventListener("resize", Ht, !1),
      K.slides.removeEventListener("click", zt, !1),
      K.slides.removeEventListener("transitionend", Ft, !1),
      K.pauseOverlay.removeEventListener("click", Xe, !1);
  }
  function ke() {
    Ae(),
      At(),
      De(),
      ce.destroy(),
      le.destroy(),
      re.destroy(),
      ne.destroy(),
      ae.destroy(),
      se.destroy(),
      Q.destroy(),
      G.destroy(),
      document.removeEventListener("fullscreenchange", Bt),
      document.removeEventListener("webkitfullscreenchange", Bt),
      document.removeEventListener("visibilitychange", qt, !1),
      window.removeEventListener("message", Tt, !1),
      window.removeEventListener("load", He, !1),
      K.pauseOverlay && K.pauseOverlay.remove(),
      K.statusElement && K.statusElement.remove(),
      document.documentElement.classList.remove("reveal-full-page"),
      K.wrapper.classList.remove(
        "ready",
        "center",
        "has-horizontal-slides",
        "has-vertical-slides",
      ),
      K.wrapper.removeAttribute("data-transition-speed"),
      K.wrapper.removeAttribute("data-background-transition"),
      K.viewport.classList.remove("reveal-viewport"),
      K.viewport.style.removeProperty("--slide-width"),
      K.viewport.style.removeProperty("--slide-height"),
      K.slides.style.removeProperty("width"),
      K.slides.style.removeProperty("height"),
      K.slides.style.removeProperty("zoom"),
      K.slides.style.removeProperty("left"),
      K.slides.style.removeProperty("top"),
      K.slides.style.removeProperty("bottom"),
      K.slides.style.removeProperty("right"),
      K.slides.style.removeProperty("transform"),
      Array.from(K.wrapper.querySelectorAll(".slides section")).forEach((e) => {
        e.style.removeProperty("display"),
          e.style.removeProperty("top"),
          e.removeAttribute("hidden"),
          e.removeAttribute("aria-hidden");
      });
  }
  function Le(e, t, i) {
    n.addEventListener(e, t, i);
  }
  function Ce(e, t, i) {
    n.removeEventListener(e, t, i);
  }
  function xe(e) {
    "string" == typeof e.layout && (W.layout = e.layout),
      "string" == typeof e.overview && (W.overview = e.overview),
      W.layout
        ? s(K.slides, W.layout + " " + W.overview)
        : s(K.slides, W.overview);
  }
  function Pe({ target: t = K.wrapper, type: i, data: a, bubbles: s = !0 }) {
    let n = document.createEvent("HTMLEvents", 1, 2);
    return (
      n.initEvent(i, s, !0),
      e(n, a),
      t.dispatchEvent(n),
      t === K.wrapper && Ne(i),
      n
    );
  }
  function Ne(t, i) {
    if (w.postMessageEvents && window.parent !== window.self) {
      let a = { namespace: "reveal", eventName: t, state: Et() };
      e(a, i), window.parent.postMessage(JSON.stringify(a), "*");
    }
  }
  function Me(e = "a") {
    Array.from(K.wrapper.querySelectorAll(e)).forEach((e) => {
      /^(http|www)/gi.test(e.getAttribute("href")) &&
        e.addEventListener("click", Ot, !1);
    });
  }
  function De(e = "a") {
    Array.from(K.wrapper.querySelectorAll(e)).forEach((e) => {
      /^(http|www)/gi.test(e.getAttribute("href")) &&
        e.removeEventListener("click", Ot, !1);
    });
  }
  function Ie(e) {
    ze(),
      (K.overlay = document.createElement("div")),
      K.overlay.classList.add("overlay"),
      K.overlay.classList.add("overlay-preview"),
      K.wrapper.appendChild(K.overlay),
      (K.overlay.innerHTML = `<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="${e}" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="${e}"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>`),
      K.overlay.querySelector("iframe").addEventListener(
        "load",
        (e) => {
          K.overlay.classList.add("loaded");
        },
        !1,
      ),
      K.overlay.querySelector(".close").addEventListener(
        "click",
        (e) => {
          ze(), e.preventDefault();
        },
        !1,
      ),
      K.overlay.querySelector(".external").addEventListener(
        "click",
        (e) => {
          ze();
        },
        !1,
      );
  }
  function Te(e) {
    "boolean" == typeof e ? (e ? Fe() : ze()) : K.overlay ? ze() : Fe();
  }
  function Fe() {
    if (w.help) {
      ze(),
        (K.overlay = document.createElement("div")),
        K.overlay.classList.add("overlay"),
        K.overlay.classList.add("overlay-help"),
        K.wrapper.appendChild(K.overlay);
      let e = '<p class="title">Keyboard Shortcuts</p><br/>',
        t = te.getShortcuts(),
        i = te.getBindings();
      e += "<table><th>KEY</th><th>ACTION</th>";
      for (let i in t) e += `<tr><td>${i}</td><td>${t[i]}</td></tr>`;
      for (let t in i)
        i[t].key &&
          i[t].description &&
          (e += `<tr><td>${i[t].key}</td><td>${i[t].description}</td></tr>`);
      (e += "</table>"),
        (K.overlay.innerHTML = `\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">${e}</div>\n\t\t\t\t</div>\n\t\t\t`),
        K.overlay.querySelector(".close").addEventListener(
          "click",
          (e) => {
            ze(), e.preventDefault();
          },
          !1,
        );
    }
  }
  function ze() {
    return (
      !!K.overlay &&
      (K.overlay.parentNode.removeChild(K.overlay), (K.overlay = null), !0)
    );
  }
  function He() {
    if (K.wrapper && !oe.isPrintingPDF()) {
      if (!w.disableLayout) {
        g &&
          !w.embedded &&
          document.documentElement.style.setProperty(
            "--vh",
            0.01 * window.innerHeight + "px",
          );
        const e = Be(),
          t = U;
        qe(w.width, w.height),
          (K.slides.style.width = e.width + "px"),
          (K.slides.style.height = e.height + "px"),
          (U = Math.min(
            e.presentationWidth / e.width,
            e.presentationHeight / e.height,
          )),
          (U = Math.max(U, w.minScale)),
          (U = Math.min(U, w.maxScale)),
          1 === U
            ? ((K.slides.style.zoom = ""),
              (K.slides.style.left = ""),
              (K.slides.style.top = ""),
              (K.slides.style.bottom = ""),
              (K.slides.style.right = ""),
              xe({ layout: "" }))
            : ((K.slides.style.zoom = ""),
              (K.slides.style.left = "50%"),
              (K.slides.style.top = "50%"),
              (K.slides.style.bottom = "auto"),
              (K.slides.style.right = "auto"),
              xe({ layout: "translate(-50%, -50%) scale(" + U + ")" }));
        const i = Array.from(K.wrapper.querySelectorAll(".slides section"));
        for (let t = 0, a = i.length; t < a; t++) {
          const a = i[t];
          "none" !== a.style.display &&
            (w.center || a.classList.contains("center")
              ? a.classList.contains("stack")
                ? (a.style.top = 0)
                : (a.style.top =
                    Math.max((e.height - a.scrollHeight) / 2, 0) + "px")
              : (a.style.top = ""));
        }
        t !== U &&
          Pe({ type: "resize", data: { oldScale: t, scale: U, size: e } });
      }
      K.viewport.style.setProperty("--slide-scale", U),
        se.update(),
        Q.updateParallax(),
        ee.isActive() && ee.update();
    }
  }
  function qe(e, i) {
    t(K.slides, "section > .stretch, section > .r-stretch").forEach((t) => {
      let a = c(t, i);
      if (/(img|video)/gi.test(t.nodeName)) {
        const i = t.naturalWidth || t.videoWidth,
          s = t.naturalHeight || t.videoHeight,
          n = Math.min(e / i, a / s);
        (t.style.width = i * n + "px"), (t.style.height = s * n + "px");
      } else (t.style.width = e + "px"), (t.style.height = a + "px");
    });
  }
  function Be(e, t) {
    const i = {
      width: w.width,
      height: w.height,
      presentationWidth: e || K.wrapper.offsetWidth,
      presentationHeight: t || K.wrapper.offsetHeight,
    };
    return (
      (i.presentationWidth -= i.presentationWidth * w.margin),
      (i.presentationHeight -= i.presentationHeight * w.margin),
      "string" == typeof i.width &&
        /%$/.test(i.width) &&
        (i.width = (parseInt(i.width, 10) / 100) * i.presentationWidth),
      "string" == typeof i.height &&
        /%$/.test(i.height) &&
        (i.height = (parseInt(i.height, 10) / 100) * i.presentationHeight),
      i
    );
  }
  function Oe(e, t) {
    "object" == typeof e &&
      "function" == typeof e.setAttribute &&
      e.setAttribute("data-previous-indexv", t || 0);
  }
  function Ue(e) {
    if (
      "object" == typeof e &&
      "function" == typeof e.setAttribute &&
      e.classList.contains("stack")
    ) {
      const t = e.hasAttribute("data-start-indexv")
        ? "data-start-indexv"
        : "data-previous-indexv";
      return parseInt(e.getAttribute(t) || 0, 10);
    }
    return 0;
  }
  function We(e = m) {
    return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i);
  }
  function Ke() {
    return !(!m || !We(m)) && !m.nextElementSibling;
  }
  function Ve() {
    return 0 === u && 0 === v;
  }
  function $e() {
    return (
      !!m &&
      !m.nextElementSibling &&
      (!We(m) || !m.parentNode.nextElementSibling)
    );
  }
  function je() {
    if (w.pause) {
      const e = K.wrapper.classList.contains("paused");
      At(),
        K.wrapper.classList.add("paused"),
        !1 === e && Pe({ type: "paused" });
    }
  }
  function Xe() {
    const e = K.wrapper.classList.contains("paused");
    K.wrapper.classList.remove("paused"), St(), e && Pe({ type: "resumed" });
  }
  function Ye(e) {
    "boolean" == typeof e ? (e ? je() : Xe()) : _e() ? Xe() : je();
  }
  function _e() {
    return K.wrapper.classList.contains("paused");
  }
  function Ge(e) {
    "boolean" == typeof e ? (e ? Lt() : kt()) : Y ? Lt() : kt();
  }
  function Je() {
    return !(!$ || Y);
  }
  function Qe(e, t, i, a) {
    if (
      Pe({
        type: "beforeslidechange",
        data: {
          indexh: void 0 === e ? u : e,
          indexv: void 0 === t ? v : t,
          origin: a,
        },
      }).defaultPrevented
    )
      return;
    p = m;
    const s = K.wrapper.querySelectorAll(".slides>section");
    if (0 === s.length) return;
    void 0 !== t || ee.isActive() || (t = Ue(s[e])),
      p &&
        p.parentNode &&
        p.parentNode.classList.contains("stack") &&
        Oe(p.parentNode, v);
    const n = I.concat();
    I.length = 0;
    let r = u || 0,
      o = v || 0;
    (u = at(".slides>section", void 0 === e ? u : e)),
      (v = at(".slides>section.present>section", void 0 === t ? v : t));
    let l = u !== r || v !== o;
    l || (p = null);
    let d = s[u],
      c = d.querySelectorAll("section");
    m = c[v] || d;
    let h = !1;
    l &&
      p &&
      m &&
      !ee.isActive() &&
      (p.hasAttribute("data-auto-animate") &&
        m.hasAttribute("data-auto-animate") &&
        p.getAttribute("data-auto-animate-id") ===
          m.getAttribute("data-auto-animate-id") &&
        !(u > r || v > o ? m : p).hasAttribute("data-auto-animate-restart") &&
        ((h = !0), K.slides.classList.add("disable-slide-transitions")),
      (V = "running")),
      rt(),
      He(),
      ee.isActive() && ee.update(),
      void 0 !== i && Z.goto(i),
      p &&
        p !== m &&
        (p.classList.remove("present"),
        p.setAttribute("aria-hidden", "true"),
        Ve() &&
          setTimeout(() => {
            vt().forEach((e) => {
              Oe(e, 0);
            });
          }, 0));
    e: for (let e = 0, t = I.length; e < t; e++) {
      for (let t = 0; t < n.length; t++)
        if (n[t] === I[e]) {
          n.splice(t, 1);
          continue e;
        }
      K.viewport.classList.add(I[e]), Pe({ type: I[e] });
    }
    for (; n.length; ) K.viewport.classList.remove(n.pop());
    l &&
      Pe({
        type: "slidechanged",
        data: {
          indexh: u,
          indexv: v,
          previousSlide: p,
          currentSlide: m,
          origin: a,
        },
      }),
      (!l && p) || (_.stopEmbeddedContent(p), _.startEmbeddedContent(m)),
      requestAnimationFrame(() => {
        fe(be(m));
      }),
      se.update(),
      ae.update(),
      ce.update(),
      Q.update(),
      Q.updateParallax(),
      G.update(),
      Z.update(),
      ie.writeURL(),
      St(),
      h &&
        (setTimeout(() => {
          K.slides.classList.remove("disable-slide-transitions");
        }, 0),
        w.autoAnimate && J.run(p, m));
  }
  function Ze() {
    Ae(),
      Se(),
      He(),
      ($ = w.autoSlide),
      St(),
      Q.create(),
      ie.writeURL(),
      Z.sortAll(),
      ae.update(),
      se.update(),
      rt(),
      ce.update(),
      ce.updateVisibility(),
      Q.update(!0),
      G.update(),
      _.formatEmbeddedContent(),
      !1 === w.autoPlayMedia
        ? _.stopEmbeddedContent(m, { unloadIframes: !1 })
        : _.startEmbeddedContent(m),
      ee.isActive() && ee.layout();
  }
  function et(e = m) {
    Q.sync(e), Z.sync(e), _.load(e), Q.update(), ce.update();
  }
  function tt() {
    ut().forEach((e) => {
      t(e, "section").forEach((e, t) => {
        t > 0 &&
          (e.classList.remove("present"),
          e.classList.remove("past"),
          e.classList.add("future"),
          e.setAttribute("aria-hidden", "true"));
      });
    });
  }
  function it(e = ut()) {
    e.forEach((t, i) => {
      let a = e[Math.floor(Math.random() * e.length)];
      a.parentNode === t.parentNode && t.parentNode.insertBefore(t, a);
      let s = t.querySelectorAll("section");
      s.length && it(s);
    });
  }
  function at(e, i) {
    let a = t(K.wrapper, e),
      s = a.length,
      n = oe.isPrintingPDF(),
      r = !1,
      o = !1;
    if (s) {
      w.loop && (i >= s && (r = !0), (i %= s) < 0 && ((i = s + i), (o = !0))),
        (i = Math.max(Math.min(i, s - 1), 0));
      for (let e = 0; e < s; e++) {
        let t = a[e],
          s = w.rtl && !We(t);
        t.classList.remove("past"),
          t.classList.remove("present"),
          t.classList.remove("future"),
          t.setAttribute("hidden", ""),
          t.setAttribute("aria-hidden", "true"),
          t.querySelector("section") && t.classList.add("stack"),
          n
            ? t.classList.add("present")
            : e < i
              ? (t.classList.add(s ? "future" : "past"), w.fragments && st(t))
              : e > i
                ? (t.classList.add(s ? "past" : "future"), w.fragments && nt(t))
                : e === i && w.fragments && (r ? nt(t) : o && st(t));
      }
      let e = a[i],
        t = e.classList.contains("present");
      e.classList.add("present"),
        e.removeAttribute("hidden"),
        e.removeAttribute("aria-hidden"),
        t || Pe({ target: e, type: "visible", bubbles: !1 });
      let l = e.getAttribute("data-state");
      l && (I = I.concat(l.split(" ")));
    } else i = 0;
    return i;
  }
  function st(e) {
    t(e, ".fragment").forEach((e) => {
      e.classList.add("visible"), e.classList.remove("current-fragment");
    });
  }
  function nt(e) {
    t(e, ".fragment.visible").forEach((e) => {
      e.classList.remove("visible", "current-fragment");
    });
  }
  function rt() {
    let e,
      i,
      a = ut(),
      s = a.length;
    if (s && void 0 !== u) {
      let n = ee.isActive() ? 10 : w.viewDistance;
      g && (n = ee.isActive() ? 6 : w.mobileViewDistance),
        oe.isPrintingPDF() && (n = Number.MAX_VALUE);
      for (let r = 0; r < s; r++) {
        let o = a[r],
          l = t(o, "section"),
          d = l.length;
        if (
          ((e = Math.abs((u || 0) - r) || 0),
          w.loop && (e = Math.abs(((u || 0) - r) % (s - n)) || 0),
          e < n ? _.load(o) : _.unload(o),
          d)
        ) {
          let t = Ue(o);
          for (let a = 0; a < d; a++) {
            let s = l[a];
            (i = r === (u || 0) ? Math.abs((v || 0) - a) : Math.abs(a - t)),
              e + i < n ? _.load(s) : _.unload(s);
          }
        }
      }
      mt()
        ? K.wrapper.classList.add("has-vertical-slides")
        : K.wrapper.classList.remove("has-vertical-slides"),
        pt()
          ? K.wrapper.classList.add("has-horizontal-slides")
          : K.wrapper.classList.remove("has-horizontal-slides");
    }
  }
  function ot({ includeFragments: e = !1 } = {}) {
    let t = K.wrapper.querySelectorAll(".slides>section"),
      i = K.wrapper.querySelectorAll(".slides>section.present>section"),
      a = {
        left: u > 0,
        right: u < t.length - 1,
        up: v > 0,
        down: v < i.length - 1,
      };
    if (
      (w.loop &&
        (t.length > 1 && ((a.left = !0), (a.right = !0)),
        i.length > 1 && ((a.up = !0), (a.down = !0))),
      t.length > 1 &&
        "linear" === w.navigationMode &&
        ((a.right = a.right || a.down), (a.left = a.left || a.up)),
      !0 === e)
    ) {
      let e = Z.availableRoutes();
      (a.left = a.left || e.prev),
        (a.up = a.up || e.prev),
        (a.down = a.down || e.next),
        (a.right = a.right || e.next);
    }
    if (w.rtl) {
      let e = a.left;
      (a.left = a.right), (a.right = e);
    }
    return a;
  }
  function lt(e = m) {
    let t = ut(),
      i = 0;
    e: for (let a = 0; a < t.length; a++) {
      let s = t[a],
        n = s.querySelectorAll("section");
      for (let t = 0; t < n.length; t++) {
        if (n[t] === e) break e;
        "uncounted" !== n[t].dataset.visibility && i++;
      }
      if (s === e) break;
      !1 === s.classList.contains("stack") &&
        "uncounted" !== s.dataset.visibility &&
        i++;
    }
    return i;
  }
  function dt() {
    let e = bt(),
      t = lt();
    if (m) {
      let e = m.querySelectorAll(".fragment");
      if (e.length > 0) {
        let i = 0.9;
        t += (m.querySelectorAll(".fragment.visible").length / e.length) * i;
      }
    }
    return Math.min(t / (e - 1), 1);
  }
  function ct(e) {
    let i,
      a = u,
      s = v;
    if (e) {
      let i = We(e),
        n = i ? e.parentNode : e,
        r = ut();
      (a = Math.max(r.indexOf(n), 0)),
        (s = void 0),
        i && (s = Math.max(t(e.parentNode, "section").indexOf(e), 0));
    }
    if (!e && m) {
      if (m.querySelectorAll(".fragment").length > 0) {
        let e = m.querySelector(".current-fragment");
        i =
          e && e.hasAttribute("data-fragment-index")
            ? parseInt(e.getAttribute("data-fragment-index"), 10)
            : m.querySelectorAll(".fragment.visible").length - 1;
      }
    }
    return { h: a, v: s, f: i };
  }
  function ht() {
    return t(
      K.wrapper,
      '.slides section:not(.stack):not([data-visibility="uncounted"])',
    );
  }
  function ut() {
    return t(K.wrapper, ".slides>section");
  }
  function gt() {
    return t(K.wrapper, ".slides>section>section");
  }
  function vt() {
    return t(K.wrapper, ".slides>section.stack");
  }
  function pt() {
    return ut().length > 1;
  }
  function mt() {
    return gt().length > 1;
  }
  function ft() {
    return ht().map((e) => {
      let t = {};
      for (let i = 0; i < e.attributes.length; i++) {
        let a = e.attributes[i];
        t[a.name] = a.value;
      }
      return t;
    });
  }
  function bt() {
    return ht().length;
  }
  function yt(e, t) {
    let i = ut()[e],
      a = i && i.querySelectorAll("section");
    return a && a.length && "number" == typeof t ? (a ? a[t] : void 0) : i;
  }
  function wt(e, t) {
    let i = "number" == typeof e ? yt(e, t) : e;
    if (i) return i.slideBackgroundElement;
  }
  function Et() {
    let e = ct();
    return {
      indexh: e.h,
      indexv: e.v,
      indexf: e.f,
      paused: _e(),
      overview: ee.isActive(),
    };
  }
  function Rt(e) {
    if ("object" == typeof e) {
      Qe(a(e.indexh), a(e.indexv), a(e.indexf));
      let t = a(e.paused),
        i = a(e.overview);
      "boolean" == typeof t && t !== _e() && Ye(t),
        "boolean" == typeof i && i !== ee.isActive() && ee.toggle(i);
    }
  }
  function St() {
    if ((At(), m && !1 !== w.autoSlide)) {
      let e = m.querySelector(".current-fragment");
      e || (e = m.querySelector(".fragment"));
      let i = e ? e.getAttribute("data-autoslide") : null,
        a = m.parentNode ? m.parentNode.getAttribute("data-autoslide") : null,
        s = m.getAttribute("data-autoslide");
      i
        ? ($ = parseInt(i, 10))
        : s
          ? ($ = parseInt(s, 10))
          : a
            ? ($ = parseInt(a, 10))
            : (($ = w.autoSlide),
              0 === m.querySelectorAll(".fragment").length &&
                t(m, "video, audio").forEach((e) => {
                  e.hasAttribute("data-autoplay") &&
                    $ &&
                    (1e3 * e.duration) / e.playbackRate > $ &&
                    ($ = (1e3 * e.duration) / e.playbackRate + 1e3);
                })),
        !$ ||
          Y ||
          _e() ||
          ee.isActive() ||
          ($e() && !Z.availableRoutes().next && !0 !== w.loop) ||
          ((j = setTimeout(() => {
            "function" == typeof w.autoSlideMethod ? w.autoSlideMethod() : Dt(),
              St();
          }, $)),
          (X = Date.now())),
        f && f.setPlaying(-1 !== j);
    }
  }
  function At() {
    clearTimeout(j), (j = -1);
  }
  function kt() {
    $ &&
      !Y &&
      ((Y = !0),
      Pe({ type: "autoslidepaused" }),
      clearTimeout(j),
      f && f.setPlaying(!1));
  }
  function Lt() {
    $ && Y && ((Y = !1), Pe({ type: "autoslideresumed" }), St());
  }
  function Ct({ skipFragments: e = !1 } = {}) {
    (A.hasNavigatedHorizontally = !0),
      w.rtl
        ? (ee.isActive() || e || !1 === Z.next()) &&
          ot().left &&
          Qe(u + 1, "grid" === w.navigationMode ? v : void 0)
        : (ee.isActive() || e || !1 === Z.prev()) &&
          ot().left &&
          Qe(u - 1, "grid" === w.navigationMode ? v : void 0);
  }
  function xt({ skipFragments: e = !1 } = {}) {
    (A.hasNavigatedHorizontally = !0),
      w.rtl
        ? (ee.isActive() || e || !1 === Z.prev()) &&
          ot().right &&
          Qe(u - 1, "grid" === w.navigationMode ? v : void 0)
        : (ee.isActive() || e || !1 === Z.next()) &&
          ot().right &&
          Qe(u + 1, "grid" === w.navigationMode ? v : void 0);
  }
  function Pt({ skipFragments: e = !1 } = {}) {
    (ee.isActive() || e || !1 === Z.prev()) && ot().up && Qe(u, v - 1);
  }
  function Nt({ skipFragments: e = !1 } = {}) {
    (A.hasNavigatedVertically = !0),
      (ee.isActive() || e || !1 === Z.next()) && ot().down && Qe(u, v + 1);
  }
  function Mt({ skipFragments: e = !1 } = {}) {
    if (e || !1 === Z.prev())
      if (ot().up) Pt({ skipFragments: e });
      else {
        let i;
        if (
          ((i = w.rtl
            ? t(K.wrapper, ".slides>section.future").pop()
            : t(K.wrapper, ".slides>section.past").pop()),
          i && i.classList.contains("stack"))
        ) {
          let e = i.querySelectorAll("section").length - 1 || void 0;
          Qe(u - 1, e);
        } else Ct({ skipFragments: e });
      }
  }
  function Dt({ skipFragments: e = !1 } = {}) {
    if (
      ((A.hasNavigatedHorizontally = !0),
      (A.hasNavigatedVertically = !0),
      e || !1 === Z.next())
    ) {
      let t = ot();
      t.down && t.right && w.loop && Ke() && (t.down = !1),
        t.down
          ? Nt({ skipFragments: e })
          : w.rtl
            ? Ct({ skipFragments: e })
            : xt({ skipFragments: e });
    }
  }
  function It(e) {
    w.autoSlideStoppable && kt();
  }
  function Tt(e) {
    let t = e.data;
    if (
      "string" == typeof t &&
      "{" === t.charAt(0) &&
      "}" === t.charAt(t.length - 1) &&
      ((t = JSON.parse(t)), t.method && "function" == typeof h[t.method])
    )
      if (!1 === R.test(t.method)) {
        const e = h[t.method].apply(h, t.args);
        Ne("callback", { method: t.method, result: e });
      } else
        console.warn(
          'reveal.js: "' +
            t.method +
            '" is is blacklisted from the postMessage API',
        );
  }
  function Ft(e) {
    "running" === V &&
      /section/gi.test(e.target.nodeName) &&
      ((V = "idle"),
      Pe({
        type: "slidetransitionend",
        data: { indexh: u, indexv: v, previousSlide: p, currentSlide: m },
      }));
  }
  function zt(e) {
    const t = r(e.target, 'a[href^="#"]');
    if (t) {
      const i = t.getAttribute("href"),
        a = ie.getIndicesFromHash(i);
      a && (h.slide(a.h, a.v, a.f), e.preventDefault());
    }
  }
  function Ht(e) {
    He();
  }
  function qt(e) {
    !1 === document.hidden &&
      document.activeElement !== document.body &&
      ("function" == typeof document.activeElement.blur &&
        document.activeElement.blur(),
      document.body.focus());
  }
  function Bt(e) {
    (document.fullscreenElement || document.webkitFullscreenElement) ===
      K.wrapper &&
      (e.stopImmediatePropagation(),
      setTimeout(() => {
        h.layout(), h.focus.focus();
      }, 1));
  }
  function Ot(e) {
    if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
      let t = e.currentTarget.getAttribute("href");
      t && (Ie(t), e.preventDefault());
    }
  }
  function Ut(e) {
    $e() && !1 === w.loop ? (Qe(0, 0), Lt()) : Y ? Lt() : kt();
  }
  const Wt = {
    VERSION: "4.4.0",
    initialize: he,
    configure: Re,
    destroy: ke,
    sync: Ze,
    syncSlide: et,
    syncFragments: Z.sync.bind(Z),
    slide: Qe,
    left: Ct,
    right: xt,
    up: Pt,
    down: Nt,
    prev: Mt,
    next: Dt,
    navigateLeft: Ct,
    navigateRight: xt,
    navigateUp: Pt,
    navigateDown: Nt,
    navigatePrev: Mt,
    navigateNext: Dt,
    navigateFragment: Z.goto.bind(Z),
    prevFragment: Z.prev.bind(Z),
    nextFragment: Z.next.bind(Z),
    on: Le,
    off: Ce,
    addEventListener: Le,
    removeEventListener: Ce,
    layout: He,
    shuffle: it,
    availableRoutes: ot,
    availableFragments: Z.availableRoutes.bind(Z),
    toggleHelp: Te,
    toggleOverview: ee.toggle.bind(ee),
    togglePause: Ye,
    toggleAutoSlide: Ge,
    isFirstSlide: Ve,
    isLastSlide: $e,
    isLastVerticalSlide: Ke,
    isVerticalSlide: We,
    isPaused: _e,
    isAutoSliding: Je,
    isSpeakerNotes: ce.isSpeakerNotesWindow.bind(ce),
    isOverview: ee.isActive.bind(ee),
    isFocused: le.isFocused.bind(le),
    isPrintingPDF: oe.isPrintingPDF.bind(oe),
    isReady: () => S,
    loadSlide: _.load.bind(_),
    unloadSlide: _.unload.bind(_),
    showPreview: Ie,
    hidePreview: ze,
    addEventListeners: Se,
    removeEventListeners: Ae,
    dispatchEvent: Pe,
    getState: Et,
    setState: Rt,
    getProgress: dt,
    getIndices: ct,
    getSlidesAttributes: ft,
    getSlidePastCount: lt,
    getTotalSlides: bt,
    getSlide: yt,
    getPreviousSlide: () => p,
    getCurrentSlide: () => m,
    getSlideBackground: wt,
    getSlideNotes: ce.getSlideNotes.bind(ce),
    getSlides: ht,
    getHorizontalSlides: ut,
    getVerticalSlides: gt,
    hasHorizontalSlides: pt,
    hasVerticalSlides: mt,
    hasNavigatedHorizontally: () => A.hasNavigatedHorizontally,
    hasNavigatedVertically: () => A.hasNavigatedVertically,
    addKeyBinding: te.addKeyBinding.bind(te),
    removeKeyBinding: te.removeKeyBinding.bind(te),
    triggerKey: te.triggerKey.bind(te),
    registerKeyboardShortcut: te.registerKeyboardShortcut.bind(te),
    getComputedSlideSize: Be,
    getScale: () => U,
    getConfig: () => w,
    getQueryHash: d,
    getSlidePath: ie.getHash.bind(ie),
    getRevealElement: () => n,
    getSlidesElement: () => K.slides,
    getViewportElement: () => K.viewport,
    getBackgroundsElement: () => Q.element,
    registerPlugin: re.registerPlugin.bind(re),
    hasPlugin: re.hasPlugin.bind(re),
    getPlugin: re.getPlugin.bind(re),
    getPlugins: re.getRegisteredPlugins.bind(re),
  };
  return (
    e(h, {
      ...Wt,
      announceStatus: fe,
      getStatusText: be,
      print: oe,
      focus: le,
      progress: se,
      controls: ae,
      location: ie,
      overview: ee,
      fragments: Z,
      slideContent: _,
      slideNumber: G,
      onUserInput: It,
      closeOverlay: ze,
      updateSlidesVisibility: rt,
      layoutSlideContents: qe,
      transformSlides: xe,
      cueAutoSlide: St,
      cancelAutoSlide: At,
    }),
    Wt
  );
}
let W = U,
  K = [];
(W.initialize = (e) => (
  Object.assign(W, new U(document.querySelector(".reveal"), e)),
  K.map((e) => e(W)),
  W.initialize()
)),
  [
    "configure",
    "on",
    "off",
    "addEventListener",
    "removeEventListener",
    "registerPlugin",
  ].forEach((e) => {
    W[e] = (...t) => {
      K.push((i) => i[e].call(null, ...t));
    };
  }),
  (W.isReady = () => !1),
  (W.VERSION = "4.4.0");
export default W;
//# sourceMappingURL=reveal.esm.js.map
