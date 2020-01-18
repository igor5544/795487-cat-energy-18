var objectFitImages = function () { "use strict"; var s = "fregante:object-fit-images", c = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g, t = "undefined" == typeof Image ? { style: { "object-position": 1 } } : new Image, o = "object-fit" in t.style, n = "object-position" in t.style, a = "background-size" in t.style, l = "string" == typeof t.currentSrc, u = t.getAttribute, g = t.setAttribute, f = !1; function d(t, e, i) { var r = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (e || 1) + "' height='" + (i || 0) + "'%3E%3C/svg%3E"; u.call(t, "src") !== r && g.call(t, "src", r) } function m(t, e) { t.naturalWidth ? e(t) : setTimeout(m, 100, t, e) } function b(e) { var i, r, t = function (t) { for (var e, i = t.getAttribute("data-object-fit"), r = {}; null !== (e = c.exec(i));)r[e[1]] = e[2]; return r }(e), n = e[s]; if (t["object-fit"] = t["object-fit"] || "fill", !n.img) { if ("fill" === t["object-fit"]) return; if (!n.skipTest && o && !t["object-position"]) return } if (!n.img) { n.img = new Image(e.width, e.height), n.img.srcset = u.call(e, "data-ofi-srcset") || e.srcset, n.img.src = u.call(e, "data-ofi-src") || e.src, g.call(e, "data-ofi-src", e.src), e.srcset && g.call(e, "data-ofi-srcset", e.srcset), d(e, e.naturalWidth || e.width, e.naturalHeight || e.height), e.srcset && (e.srcset = ""); try { i = e, r = { get: function (t) { return i[s].img[t || "src"] }, set: function (t, e) { return i[s].img[e || "src"] = t, g.call(i, "data-ofi-" + e, t), b(i), t } }, Object.defineProperty(i, "src", r), Object.defineProperty(i, "currentSrc", { get: function () { return r.get("currentSrc") } }), Object.defineProperty(i, "srcset", { get: function () { return r.get("srcset") }, set: function (t) { return r.set(t, "srcset") } }) } catch (t) { window.console && console.warn("https://bit.ly/ofi-old-browser") } } !function (t) { if (t.srcset && !l && window.picturefill) { var e = window.picturefill._; t[e.ns] && t[e.ns].evaled || e.fillImg(t, { reselect: !0 }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, { reselect: !0 })), t.currentSrc = t[e.ns].curSrc || t.src } }(n.img), e.style.backgroundPosition = t["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundOrigin = "content-box", /scale-down/.test(t["object-fit"]) ? m(n.img, function () { n.img.naturalWidth > e.width || n.img.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto" }) : e.style.backgroundSize = t["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), m(n.img, function (t) { d(e, t.naturalWidth, t.naturalHeight) }) } function p(t, e) { var i = !f && !t; if (e = e || {}, t = t || "img", n && !e.skipTest || !a) return !1; "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]); for (var r = 0; r < t.length; r++)t[r][s] = t[r][s] || { skipTest: e.skipTest }, b(t[r]); i && (document.body.addEventListener("load", function (t) { "IMG" === t.target.tagName && p(t.target, { skipTest: e.skipTest }) }, !0), f = !0, t = "img"), e.watchMQ && window.addEventListener("resize", p.bind(null, t, { skipTest: e.skipTest })) } function i(t, e) { return t[s] && t[s].img && ("src" === e || "srcset" === e) ? t[s].img : t } return p.supportsObjectFit = o, (p.supportsObjectPosition = n) || (HTMLImageElement.prototype.getAttribute = function (t) { return u.call(i(this, t), t) }, HTMLImageElement.prototype.setAttribute = function (t, e) { return g.call(i(this, t), t, String(e)) }), p }();