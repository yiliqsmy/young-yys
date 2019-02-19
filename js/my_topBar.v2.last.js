; /*!src/js/v2/topBar.last.source.js*/
var TopBarConfig = {
	isAutoShow: !1,
	isAutoShowBan: {
		"nc.163.com": 1,
		"my.163.com": 1,
		"em.163.com": 1,
		"xyf.163.com": 1,
		"zlj.163.com": 1,
		"dpsg.163.com": 1,
		"tfmz.163.com": 1,
		"ssqq.163.com": 1,
		"sq.163.com": 1,
		"ltzs.163.com": 1,
		"yhl.163.com": 1,
		"mxxc.163.com": 1,
		"xsd.163.com": 1,
		"mtj.163.com": 1,
		"zzz.163.com": 1,
		"yj.163.com": 1,
		"f1racestars.163.com": 1
	},
	isAutoShowTime: 5e3,
	isAllHide: !1,
	pvList: [{
		name: "\u5b89\u5353\u5145\u503c9.8\u6298",
		link: "http://rd.da.netease.com/redirect?t=zPJ3p1rAsE&p=MmVZMh&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F11835.shtml%3Ftag%3D7cc46fc8c91a33ec9aa62298347b4ede"
	}, {
		name: "\u9886\u53d6\u7f51\u6613\u4e25\u9009\u5b9d\u7bb1",
		link: "http://u.163.com/gamerkwzl"
	}],
	payWordList: {
		"xyq.163.com": 1,
		"tx3.163.com": 1,
		"xy2.163.com": 1,
		"ty.163.com": 1,
		"tianyu.163.com": 1,
		"dh2.163.com": 1,
		"bw.163.com": 1,
		"xy3.163.com": 1,
		"qn2.163.com": 1,
		"x3.163.com": 1,
		"zmq.163.com": 1,
		"xdw.163.com": 1,
		"dtws2.163.com": 1,
		"dtws.163.com": 1,
		"lj.163.com": 1,
		"wh.163.com": 1,
		"wh2.163.com": 1,
		"jl.163.com": 1,
		"zh.163.com": 1,
		"ff.163.com": 1,
		"www.warcraftchina.com": 1,
		"www.diablo3.com.cn": 1,
		"tuji.163.com": 1,
		"db.163.com": 1,
		"www.battlenet.com.cn": 1,
		"www.heroesofthestorm.com.cn": 1,
		"www.starcraft2.com.cn": 1,
		"y3.163.com": 1,
		"wf.163.com": 1,
		"www.hearthstone.com.cn": 1,
		"xc.163.com": 1,
		"xqn.163.com": 1,
		"mjdj.163.com": 1
	},
	piaoLeftList: {
		"xyq.163.com": 1,
		"dh2.163.com": 1,
		"dtws.163.com": 1,
		"lj.163.com": 1,
		"ff.163.com": 1,
		"jl.163.com": 1,
		"zh.163.com": 1,
		"em.163.com": 1,
		"sm.163.com": 1,
		"zlj.163.com": 1,
		"ssqq.163.com": 1,
		"xy3.163.com": 1,
		"xy2.163.com": 1,
		"mhws.163.com": 1,
		"gfxm.163.com": 1,
		"bjx.163.com": 1,
		"hxjt.163.com": 1,
		"dhrx.163.com": 1,
		"mgzz.163.com": 1,
		"jlhx.163.com": 1,
		"pkzj.163.com": 1,
		"qnm.163.com": 1,
		"xqn.163.com": 1,
		"tx3.163.com": 1,
		"tx.163.com": 1,
		"tianyu.163.com": 1,
		"dhxy.163.com": 1,
		"y3.163.com": 1
	}
};
! function() {
	var t = function(t) {
			return document.getElementById(t)
		},
		o = function(o, e) {
			var a = t(o),
				n = e,
				r = !1,
				i = 180,
				p = 350,
				m = null;
			a.onmouseover = function() {
				r = !0, clearTimeout(m), m = setTimeout(function() {
					r && (a.className = n)
				}, i)
			}, a.onmouseout = function() {
				r = !1, clearTimeout(m), m = setTimeout(function() {
					r || (a.className = ""), t("NIE-table").className.indexOf("moreAni") > -1 && t("NIE-topBar-more-mobi").click(), t("NIE-topBar-more-pc").className.indexOf("open") > -1 && t("NIE-topBar-more-pc").click()
				}, p)
			}
		},
		e = function(t) {
			return t.replace(/(^\s*)|(\s*$)/g, "")
		},
		a = function(t, o, a) {
			if("undefined" == typeof o) {
				var n = null;
				if(document.cookie && "" != document.cookie)
					for(var r = document.cookie.split(";"), i = 0; i < r.length; i++) {
						var p = e(r[i]);
						if(p.substring(0, t.length + 1) == t + "=") {
							n = decodeURIComponent(p.substring(t.length + 1));
							break
						}
					}
				return n
			}
			a = a || {}, null === o && (o = "", a.expires = -1);
			var m = "";
			if(a.expires && ("number" == typeof a.expires || a.expires.toUTCString)) {
				var l;
				"number" == typeof a.expires ? (l = new Date, l.setTime(l.getTime() + 24 * a.expires * 60 * 60 * 1e3)) : l = a.expires, m = "; expires=" + l.toUTCString()
			}
			var s = a.path ? "; path=" + a.path : "",
				h = a.domain ? "; domain=" + a.domain : "",
				c = a.secure ? "; secure" : "";
			document.cookie = [t, "=", encodeURIComponent(o), m, s, h, c].join("")
		},
		n = function(o, e, n) {
			var r = t(o),
				i = t(n),
				p = e,
				m = !1,
				l = 180,
				s = 1,
				h = null;
			! function() {
				function o(t) {
					"undefined" == typeof ADBase ? window.onload = function() {
						e(t)
					} : e(t)
				}

				function e(t) {
					if(t) {
						var o = {
							domain: window.location.hostname
						};
						jQuery.ajax({
							url: "https://sixhorse.game.163.com/news/interfacepub/_fileexisted.do",
							data: o,
							dataType: "jsonp",
							success: function(t) {
								return t.succ ? void(0 == t.result.code ? n() : (i.push(d), m[window.location.hostname] && i.push(m[window.location.hostname]), n())) : n()
							}
						})
					} else n()
				}

				function n() {
					return i.length && ADBase ? void ADBase.config({
						pos: i.join(","),
						noCache: !0,
						callback: function(o, e) {
							if(!o) return !1;
							var n = e[c],
								i = e[d],
								l = e[m[s]];
							if(n && n[0] ? (n = n[0], t("NIE-topBar-news-link").href = n.url, t("NIE-topBar-abc-b").src = n.src, t("NIE-topBar-abc-s").src = n.thumbsrc, 1 != a("topbarnewsshow") && TopBarConfig.isAutoShow && !TopBarConfig.isAutoShowBan[window.location.host] && (r.className = p, h = setTimeout(function() {
									r.className = ""
								}, TopBarConfig.isAutoShowTime)), document.getElementById("NIE-topBar-news").style.display = "block", a("topbarnewsshow", "1", {
									expires: 1
								})) : document.getElementById("NIE-topBar-news").style.display = "none", i && i[0]) {
								i = i[0];
								var f = '<div id="js_piaochuang_left" style="position:fixed;_position:absolute;' + (TopBarConfig.piaoLeftList[s] ? "left" : "right") + ':0;bottom:0;z-index:9999;"><a href="' + i.url + '" title="' + i.title + '" target="_blank" style="display:block;line-height:0;"><img src="' + i.src + '" /></a>                    <a href="javascript:void(0)" title="\u5173\u95ed" onclick="this.parentNode.style.display=\'none\';" style="position: absolute;right: 0;top: 0;color: white;font-weight: bolder;font-size: 14px;text-decoration: none;display: block;width: 20px;height: 20px;text-align: center;line-height: 20px;background: #444;">&times;</a></div>';
								jQuery(document.body).append(f)
							}
							if(l && l[0]) {
								l = l[0];
								var f = '<div id="js_piaochuang_right" style="position:fixed;_position:absolute;right:0;bottom:0;z-index:9999;"><a href="' + l.url + '" title="' + l.title + '" target="_blank" style="display:block;line-height:0;"><img src="' + l.src + '" /></a>                    <a href="javascript:void(0)" title="\u5173\u95ed" onclick="this.parentNode.style.display=\'none\';" style="position: absolute;right: 0;top: 0;color: white;font-weight: bolder;font-size: 14px;text-decoration: none;display: block;width: 20px;height: 20px;text-align: center;line-height: 20px;background: #444;">&times;</a></div>';
								jQuery(document.body).append(f)
							}
						}
					}) : !1
				}
				var i = [],
					m = {
						"xy2.163.com": "xindahuaxiyou2-piaochuang-3987",
						"dh2.163.com": "dahuaxiyou2_mianfeiban-changgui-4587"
					},
					l = {
						"my.163.com": {
							dingtiaoPos: "menghuanxiyoushouyou(g18)-changgui-434751",
							piaochuangPos: "menghuanxiyoushouyou(g18)-piaochuang-290966"
						},
						"yys.163.com": {
							dingtiaoPos: "yinyangshi(g37)-dingtiao-214014",
							piaochuangPos: "yinyangshi(g37)-piaochuang-678551"
						},
						"xyq.163.com": {
							dingtiaoPos: "tongyong-dingtiao-8379",
							piaochuangPos: "menghuanxiyou-piaochuang-602057"
						},
						"tianyu.163.com": {
							dingtiaoPos: "tianyu-dingtiao-448602",
							piaochuangPos: "tianyu-piaochuang-476128"
						},
						"xqn.163.com": {
							dingtiaoPos: "qiannvyouhun2-dingtiao-766725",
							piaochuangPos: "qiannvyouhun2-piaochuang-884554"
						},
						"qnm.163.com": {
							dingtiaoPos: "qiannvyouhuntongmingshouyouL10-dingtiao-540969",
							piaochuangPos: "qiannvyouhuntongmingshouyouL10-piaochuang-444835"
						},
						"bw.163.com": {
							dingtiaoPos: "xichubawang-changgui-447800",
							piaochuangPos: "xichubawang-piaochuang-774673"
						}
					},
					s = window.location.hostname,
					c = "tongyong-dingtiao-8379",
					d = "tongyong-piaochuang-9781";
				l[s] && (c = l[s].dingtiaoPos, d = l[s].piaochuangPos), TopBarConfig.isAllHide ? document.getElementById("NIE-topBar-news").style.display = "none" : i.push(c);
				var f = window.location.pathname,
					g = (document.documentElement || document.body).clientWidth;
				"/" == f || "/index.html" == f ? 1200 > g ? o() : "/index.html" == f ? (i.push(d), m[s] && i.push(m[s]), o()) : o(!0) : o()
			}();
			var c = "\u5b89\u5353\u5145\u503c";
			TopBarConfig.payWordList[window.location.host] && (c = "\u8d2d\u5361\u5145\u503c", TopBarConfig.pvList[0].name = "\u6e38\u620f\u5145\u503c9.8\u6298"), document.getElementById("global_gp_card").innerHTML = c, a("topbarnewsshow", "1", {
				expires: 1
			}), r.onmouseover = function() {
				m = !0, clearTimeout(h), h = setTimeout(function() {
					m && (r.className = p)
				}, l)
			}, r.onmouseout = function() {
				m = !1, clearTimeout(h), h = setTimeout(function() {
					m || (r.className = "")
				}, s)
			}, i.onclick = function() {
				m = !1, clearTimeout(h), r.className = ""
			}
		},
		r = {
			xyq: "http://xyq.163.com/download/index.html",
			tx2: "http://tx2.163.com/reg/finish.html",
			pet: "http://pet.163.com/download/",
			csxy: "http://csxy.163.com/reg/client/",
			dt: "http://dt.163.com/download/",
			dt2: "http://dt2.163.com/download/",
			dtw: "http://dtw.163.com/download.html",
			xy2: "http://xy2.163.com/download/",
			xy3: "http://xy3.163.com/download/download.html",
			xdw: "http://xdw.163.com/download/",
			ff: "http://ff.163.com/download/",
			qn: "http://qn2.163.com/reg/client/",
			qn2: "http://qn2.163.com/reg/client/",
			jl: "http://jl.163.com/download/",
			fj: "http://fj.163.com/download.html",
			st: "http://st.163.com/yxxz/yxxz01.html",
			ball: "http://ball.163.com/",
			xyc: "http://xyc.netease.com/viewthread.php?tid=7666",
			rich: "http://rich.163.com/",
			ysg: "http://ysg.163.com/download/",
			zg: "http://server.zg.163.com/serverlist.php?from=niebar",
			sg: "http://client.sg.163.com/server_list.html",
			xjc: "http://game.xjc.163.com/",
			wh: "http://wh.163.com/download/",
			zh: "http://zh.163.com/download/"
		},
		i = {
			pet: "cwwg",
			jl: "jlmc",
			dt2: "dtws",
			sg: "sgtx_web",
			zg: "ch",
			ff: "newff",
			pk: "xyw",
			tx3: "tx2",
			mkey: "mtoken",
			dtws2: "dtws",
			qn2: "qn",
			xqn: "qn",
			tianyu: "ty",
			xdw: "xyw",
			y3: "dota",
			wf: "x9"
		},
		p = function() {
			for(var t = arguments, o = 0, e = t.length; e > o; o++)
				if("undefined" == typeof t[o]) return !1;
			return !0
		},
		m = function() {
			var t = document.body.offsetWidth,
				o = document.getElementById("NIE-topBar-main"),
				e = o.getElementsByTagName("li")[7],
				a = o.getElementsByTagName("li")[1];
			t > 1680 ? (o.className = "NIE-topBar-main w1680", e.style.cssText = "width:668px;", a.style.cssText = "width:828px;") : (o.className = "NIE-topBar-main", e.style.cssText = "width:408px;", a.style.cssText = "width:568px;")
		},
		l = "undefined" != typeof nie && p(nie.config, nie.config.site) ? nie.config.site : window.location.href.replace(/^http:\/\/(.*)\.163\.com.*$/, "$1"),
		s = {
			xy2: "20100105dh2",
			tx3: "20110329tx2",
			qn: 1,
			zg: "canghai",
			dt: 1,
			xy3: 1,
			fkmm: 1,
			xyq: 1,
			zh: 1,
			lj: "ds",
			dota: "yxsg"
		},
		h = {
			xy2: "http://xy2.163.com/reg/",
			tx3: "http://tx3.163.com/reg/",
			xdw: "http://xdw.163.com/reg/",
			dtws2: "http://dtws2.163.com/reg/",
			wh: "http://wh.163.com/reg/",
			xyq: "http://xyq.163.com/reg/",
			y3: "http://y3.163.com/reg/",
			lj: "http://lj.163.com/reg/",
			x3: "http://x3.163.com/reg/",
			zd: "http://zd.163.com/reg/",
			zdcq: "http://zdcq.163.com/reg/",
			xy3: "http://xy3.163.com/reg/",
			zh: "http://zh.163.com/reg/",
			xc: "http://xc.163.com/reg/",
			jl: "http://jl.163.com/reg/",
			ff: "http://ff.163.com/reg/",
			zmq: "http://zmq.163.com/reg/",
			wf: "http://wf.163.com/reg/"
		},
		c = {
			xy2: "http://zs.163.com/xy2/"
		},
		d = {
			xy2: "\u65b0\u5927\u8bdd2\u52a9\u624b"
		};
	ecardLink = "http://ecard.163.com/script/index" + (p(s[l]) ? "?platform=" + (1 == s[l] ? l : s[l]) : ""), regProductID = p(i[l]) ? i[l] : l, regUrl = encodeURIComponent(p(r[l]) ? r[l] : "http://" + l + ".163.com"), regPage = h[l] ? h[l] : "http://reg.163.com/reg/reg.jsp?product=" + regProductID + "&url=" + regUrl + "&loginurl=" + regUrl, zsLink = c[l] ? c[l] : "http://zs.163.com/app/index.html", zsName = d[l] ? d[l] : "\u6e38\u620f\u4e91\u52a9\u624b", new function(t) {
		var o;
		document.all ? (o = document.createStyleSheet(), o.cssText = t) : (o = document.createElement("style"), o.type = "text/css", o.textContent = t);
		try {
			document.getElementsByTagName("head")[0].appendChild(o)
		} catch(e) {}
		o = null
	}('#NIE-topBar .hide,#NIE-topBar-include .hide{display:none!important}.NIE-topBar-logo,.NIE-topBar-arrIcon i,#NIE-topBar-menu span,.NIE-topBar-hot,.NIE-topBar-1st,.NIE-topBar-new,.NIE-topBar-btn{background:url(img/sprite-w_7fc7459.png) no-repeat}.NIE-topBar-arrIcon{position:relative;top:4px;width:16px;height:16px;display:inline-block;background-color:#fff;overflow:hidden}.NIE-topBar-arrIcon i{width:9px;height:4px;float:left;margin:6px 0 0 4px;background-position:-103px -101px;display:inline-block;-webkit-transition:all .2s ease 0s;transition:all .2s ease 0s}#NIE-topBar,#NIE-topBar-include{position:relative;z-index:9999;min-width:1000px;height:40px;background:#333;line-height:24px;font-family:"Microsoft YaHei",simSun,"Lucida Grande","Lucida Sans Unicode",Arial}#NIE-topBar *,#NIE-topBar-include *{font-size:12px;font-style:normal}#NIE-topBar a,#NIE-topBar-include a{color:#999;text-decoration:none}#NIE-topBar a:hover,#NIE-topBar-include a:hover{color:#fff}#NIE-topBar ul,#NIE-topBar li,#NIE-topBar-include ul,#NIE-topBar-include li{margin:0;padding:0;float:left}.NIE-topBar-main{position:relative;z-index:9999;width:1000px;margin:auto}.NIE-topBar-logo{width:133px;height:44px;display:block;float:left;margin-top:6px;background:url(img/logo_b5525b7.png) no-repeat}#NIE-topBar-news{position:absolute;z-index:13;width:420px;height:54px;left:125px;padding-left:18px;padding-top:0;overflow:hidden;display:block}#NIE-topBar-news.NIE-topBar-news-hover{height:250px;overflow:visible;border-color:#1f1f1f}#NIE-topBar-news a{width:960px;display:block;height:0;overflow:hidden;z-index:1;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);-o-box-shadow:0 2px 4px rgba(0,0,0,.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2)}#NIE-topBar-news-close{position:absolute;top:63px;right:-380px;display:block;width:32px;height:32px;overflow:hidden;background:url(img/sprite-w_7fc7459.png) no-repeat -9999px -9999px;text-indent:-9999px;z-index:2}#NIE-topBar-news.NIE-topBar-news-hover .NIE-topBar-abc-s{visibility:hidden}#NIE-topBar-news.NIE-topBar-news-hover a{position:absolute;z-index:2;left:-132px;top:55px;height:auto}#NIE-topBar-news.NIE-topBar-news-hover a img{display:block}.NIE-topBar-mid{position:absolute;z-index:2;right:230px;width:385px;text-align:right}#NIE-topBar .NIE-topBar-mid a,#NIE-topBar-include .NIE-topBar-mid a{line-height:40px;padding:0 12px;color:#fff;display:inline-block}#NIE-topBar .NIE-topBar-mid a:hover,#NIE-topBar-include .NIE-topBar-mid a:hover{color:#ca0b0b}#NIE-topBar-menu{position:absolute;z-index:1;top:0;right:0;color:#999;width:1000px;height:40px;overflow:hidden;-webkit-transition:height .3s ease 0s;-o-transition:height .3s ease 0s;-moz-transition:height .3s ease 0s;transition:height .3s ease 0s}#NIE-topBar-menu span{position:absolute;width:108px;padding:8px 0 12px;height:20px;line-height:14px;right:106px;background-position:0 -28px;background-repeat:repeat-x;padding-left:15px;color:#fff;display:inline-block;overflow:hidden}#NIE-topBar-menu .NIE-table{position:absolute;top:40px;left:0;background:#262626;border-collapse:collapse;overflow:hidden;width:100%}#NIE-topBar-menu .NIE-table a{width:115px;margin-left:6px;line-height:24px;display:inline-block;font-weight:400}#NIE-topBar-menu .NIE-table a.long{width:125px}#NIE-topBar-menu .NIE-table ul{list-style:none}#NIE-topBar-menu .NIE-table .NIE-nav{width:100%;position:relative}#NIE-topBar-menu .NIE-table .NIE-nav li{width:110px;float:left;border-right:1px solid #eee;vertical-align:top}#NIE-topBar-menu .NIE-table .NIE-nav .mobi{position:absolute;left:300px;-webkit-transition:all .3s ease-out}#NIE-topBar-menu .NIE-table b{line-height:39px;color:#bc2e2e;display:block;width:100%;height:39px;font-size:14px;text-indent:20px;background:#f7f7f8;overflow:hidden;clear:both}#NIE-topBar-menu b i{margin-left:5px;padding:2px 4px;color:#9b9b9b;font-style:normal;background:#111;display:inline}#NIE-topBar-menu .NIE-list{float:left;overflow:hidden;width:100%;height:435px}.w1680 #NIE-topBar-menu .NIE-list{height:450px}#NIE-topBar-menu .NIE-list li{border-right:1px solid #eee;height:415px;float:left;padding:10px 0 0 14px;overflow:hidden}#NIE-topBar-menu .NIE-list .news{position:absolute;background:#fdfefe;left:446px;-webkit-transition:all .3s ease-out;top:39px}#NIE-topBar-menu .NIE-list .hot{position:absolute;background:#fdfefe;left:300px;-webkit-transition:all .3s ease-out;top:39px;z-index:3}#NIE-topBar-menu .NIE-list .hot a{width:121px}#NIE-topBar-menu .NIE-list .short{-webkit-transition:all .3s ease-out}#NIE-topBar-menu .NIE-list .short a{width:105px}.w1680 #NIE-topBar-menu .NIE-list .news div div{margin-right:8px}#NIE-topBar-menu .NIE-list .news .long-news{width:133px;float:left}#NIE-topBar-menu .NIE-list .news .long-news a{width:125px}#NIE-topBar-menu .NIE-list .news .short-news{float:left;width:106px}#NIE-topBar-menu .NIE-list .news .mini-news{width:90px;margin-right:0;float:left}#NIE-topBar-menu .NIE-list .news .mini-news a{width:82px}#NIE-topBar-menu .moreAni .NIE-list .news{left:179px;width:730px!important;-webkit-transition:all .3s ease-out;z-index:3}.w1680 #NIE-topBar-menu .moreAni .NIE-list .news{left:334px;width:780px!important;-webkit-transition:all .3s ease-out;z-index:3}#NIE-topBar-menu .moreAni .NIE-list .hot{left:30px;border-left:1px solid #eee;box-shadow:-1px 0 1px #eee;-webkit-transition:all .3s ease-out}.w1680 #NIE-topBar-menu .moreAni .NIE-list .hot{left:185px;border-left:1px solid #eee;box-shadow:-1px 0 1px #eee;-webkit-transition:all .3s ease-out}#NIE-topBar-menu .moreAni .NIE-nav .mobi{left:30px;width:892px!important;border-left:1px solid #eee;box-shadow:-1px 0 1px #eee;-webkit-transition:all .3s ease-out}.w1680 #NIE-topBar-menu .moreAni .NIE-nav .mobi{left:185px;width:942px!important;border-left:1px solid #eee;box-shadow:-1px 0 1px #eee;-webkit-transition:all .3s ease-out}#NIE-topBar-menu .NIE-list .NIE-topBar-more{width:20px!important;height:95px;height:92px\\9;display:block;position:absolute;right:0;top:124px;font-size:12px;color:#fff;background:#bc2e2e;padding-left:10px;line-height:14px;padding-top:7px;border-top-left-radius:2px;border-bottom-left-radius:2px}#NIE-topBar-menu .NIE-list .NIE-topBar-more:hover{opacity:.8}#NIE-topBar-menu .moreAni .NIE-topBar-more,#NIE-topBar-menu .NIE-topBar-more.open{width:21px;height:23px;border-radius:2px;right:9px;top:163px;padding-left:4px;padding-top:2px;height:20px;height:18px\\9}.w1680 #NIE-topBar-menu .NIE-list .NIE-topBar-more{}#NIE-topBar-menu .NIE-table a em{font-weight:400;display:block;line-height:24px}.NIE-topBar-1st{background-position:right -267px}.NIE-topBar-hot{background-position:right -144px}.NIE-topBar-new{background-position:right -206px}#NIE-topBar-menu.NIE-topBar-menu-hover .NIE-table{display:block}#NIE-topBar-menu.NIE-topBar-menu-hover{height:530px;opacity:.9;-webkit-transition:height .4s ease 0s;-o-transition:height .4s ease 0s;-moz-transition:height .4s ease 0s;transition:height .4s ease 0s}a.NIE-topBar-btn{width:105px!important;height:18px;line-height:18px!important;margin:5px 0;display:inline-block;padding-left:0!important;background-position:0 -338px;text-indent:25px;color:#bc3030!important}a.NIE-topBar-btn:hover{}.NIE-topBar-ad{height:40px;left:50%}.NIE-topBar-main.w1680{width:1260px}.NIE-topBar-main.w1680 #NIE-topBar-menu{width:1260px}#NIE-topBar-news{height:54px}#NIE-topBar .NIE-topBar-menu-hover,#NIE-topBar-include .NIE-topBar-menu-hover{z-index:8}.NIE-topBar-ad-big{position:absolute;top:0;left:0;z-index:10;height:0;overflow:hidden;text-align:center}#NIE-topBar-menu{z-index:7;height:55px}.NIE-topBar-mid{z-index:12;width:250px;right:230px;width:536px}.NIE-topBar-logo{position:relative;z-index:13!important}#NIE-topBar,#NIE-topBar-include{height:55px;background:#fbfbfb}.NIE-topBar-logo{margin-top:5px}#NIE-topBar-menu .NIE-table{top:55px;background:#fdfefe;border-top:1px solid #ececec;margin:0}#NIE-topBar-menu span{background:0 0;color:#bc2e2e}#NIE-topBar-menu .NIE-table{display:none}#NIE-topBar-menu .NIE-table .last_td,#NIE-topBar-menu .NIE-table .last_th{border-right:0}#NIE-topBar a,#NIE-topBar-include a{color:#626262}#NIE-topBar-menu b i{background-color:#fbfbfb;color:#bc2e2e}#NIE-topBar-menu p{padding:0;margin:0;margin-left:6px;line-height:24px;margin-bottom:4px;font-weight:700;color:#626262}#NIE-topBar a:hover,#NIE-topBar-include a:hover{color:#bc2e2e}#NIE-topBar-menu.NIE-topBar-menu-hover{opacity:.95}#NIE-topBar-menu .NIE-table *{font-size:12px}#NIE-topBar-menu.NIE-topBar-menu-hover span{border-bottom:3px solid #bc2e2e;background-color:#F3F3F3;background-image:-webkit-linear-gradient(top,#F3F3F3 0,#FEFEFE 52px);background-image:linear-gradient(top,#F3F3F3 0,#FEFEFE 52px)}#NIE-topBar-menu span{height:25px;height:26px\\0;width:108px;padding-top:15px;padding-top:14px\\0;transition:background ease-in-out .33s;z-index:20}#NIE-topBar .NIE-topBar-mid a,#NIE-topBar-include .NIE-topBar-mid a{color:#333;line-height:52px;transition:background ease-in-out .33s;*line-height:55px}#NIE-topBar .NIE-topBar-mid a:hover,#NIE-topBar-include .NIE-topBar-mid a:hover{color:#bc2e2e!important;border-bottom:3px solid #bc2e2e;background-color:#F3F3F3;background-image:-webkit-linear-gradient(top,#F3F3F3 0,#FEFEFE 52px);background-image:linear-gradient(top,#F3F3F3 0,#FEFEFE 52px);*border-bottom:0}.NIE-topBar-right{position:absolute;right:0;top:0;display:block;width:100px;height:55px;overflow:hidden;z-index:9}.NIE-topBar-right a{color:#333!important;width:100%;text-align:center;display:inline-block;float:left;line-height:52px;transition:background ease-in-out .33s;-webkit-transition:background ease-in-out .33s}.NIE-topBar-right a:hover{color:#bc2e2e!important;border-bottom:3px solid #bc2e2e;background-color:#F3F3F3;background-image:-webkit-linear-gradient(top,#F3F3F3 0,#FEFEFE 52px);background-image:linear-gradient(top,#F3F3F3 0,#FEFEFE 52px);*border-bottom:0}.NIE-topBar-right a.fadeUp{opacity:0;-webkit-transform:translate3d(0,-70%,0);-webkit-transition:all ease-in-out .5s;transform:translate3d(0,-70%,0);transition:all ease-in-out .5s}.NIE-topBar-right a.none{opacity:0;-webkit-transform:translate3d(0,70%,0);transform:translate3d(0,70%,0)}.NIE-topBar-right a.fadeUp2{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-transition:all ease-in-out .5s;transform:translate3d(0,0,0);transition:all ease-in-out .5s}'), new function() {
		var o = '<div class="NIE-topBar-main" id="NIE-topBar-main">\n<a class="NIE-topBar-logo" href="http://game.163.com/" target="_blank"></a>\n    <div id="NIE-topBar-news">\n        <span>\n            <img class="NIE-topBar-abc-s" id="NIE-topBar-abc-s" />\n            <a href="#" target="_blank" id="NIE-topBar-news-link"><img id="NIE-topBar-abc-b" /></a>\n            <span id="NIE-topBar-news-close">\u5173\u95ed</span>\n        </span>\n    </div>\n    <div class="NIE-topBar-mid" id="global_gp_mid" style="display:none;">\n        <a id="global_gp_reg" href="$regPage$" target="_blank">\u6ce8\u518c\u5e10\u53f7</a>\n        <a id="global_gp_card" href="$ecardLink$" target="_blank">\u8d2d\u5361\u5145\u503c</a>\n        <a href="$zsLink$" target="_blank" id="global_gp_zs" style="display:none;">$zsName$</a>\n    </div>\n    <div class="NIE-topBar-right" id="NIE-topBar-right"><a target="_blank">&nbsp;</a></div>\n    <div id="NIE-topBar-menu">\n        <span>\u7f51\u6613\u6e38\u620f\u5168\u76ee\u5f55 <em class="NIE-topBar-arrIcon"><i></i></em></span>\n        <div class="NIE-table" id="NIE-table">\n            <ul class="NIE-nav">\n                <li style="width:299px;"><b>\u5ba2\u6237\u7aef\u6e38\u620f</b></li>\n                <li class="mobi" style="width:568px;"><b>\u624b\u673a\u6e38\u620f</b></li>\n                <li style="width:131px;float:right;" class="last_th"><b>\u6e38\u620f\u8f85\u52a9</b></li>\n            </ul>\n\n            <ul class="NIE-list">\n                <li style="width:121px;border-right:0;">\n                    <p>\u89d2\u8272\u626e\u6f14</p>\n                    <a href="http://xyq.163.com?from=nietop" target="_blank"><em class="NIE-topBar-1st">\u68a6\u5e7b\u897f\u6e38\u7535\u8111\u7248</em></a>\n                    <a href="http://xy2.163.com?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u5927\u8bdd2\u7ecf\u5178\u7248</em></a>\n                    <a href="http://tx3.163.com?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u5929\u4e0b3</em></a>\n                    <a href="http://xqn.163.com?from=nietop" target="_blank"><em class="NIE-topBar-new">\u65b0\u5029\u5973\u5e7d\u9b42</em></a>\n                    <a href="http://n.163.com?from=nietop" target="_blank"><em class="NIE-topBar-new">\u9006\u6c34\u5bd2</em></a>\n                    <a href="http://ty.163.com?from=nietop" target="_blank"><em class="NIE-topBar-new">\u5929\u8c15</em></a>\n                    <a href="http://bw.163.com?from=nietop" target="_blank"><em class="NIE-topBar-new">\u897f\u695a\u9738\u738b</em></a>\n                    <a href="http://long.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u9f99\u9b42\u65f6\u523b</em></a>\n                    <a href="http://tia.163.com?from=nietop" target="_blank"><em class="NIE-topBar-new">\u6cf0\u4e9a\u53f2\u8bd7</em></a>\n                    <a href="http://dh2.163.com/?from=nietop" target="_blank">\u5927\u8bdd2\u514d\u8d39\u7248</a>\n                    <a href="http://xy3.163.com?from=nietop" target="_blank">\u65b0\u5927\u8bdd3\u7ecf\u5178\u7248</a>\n                    <a href="http://x3.163.com?from=nietop" target="_blank">\u65b0\u5927\u8bdd3\u514d\u8d39\u7248</a>\n                    <a href="http://zmq.163.com?from=nietop" target="_blank">\u9547\u9b54\u66f2</a>\n                    <a href="http://dtws2.163.com?from=nietop" target="_blank">\u5927\u5510\u65e0\u53cc</a>\n                    <a href="http://wh2.163.com?from=nietop" target="_blank">\u6b66\u9b422</a>\n                    <a href="http://www.warcraftchina.com?from=nietop" target="_blank">\u9b54\u517d\u4e16\u754c</a>\n                    \n                </li>\n                <li style="width: 121px;border-right:0;margin-left:20px;">\n                    <p>&nbsp;</p>\n                    <a href="http://www.diablo3.com.cn/?from=nietop" target="_blank">\u6697\u9ed1\u7834\u574f\u795e3</a>\n                    <a href="http://ff.163.com?from=nietop" target="_blank">\u65b0\u98de\u98de</a>\n                    <a href="http://jl.163.com?from=nietop" target="_blank">\u7cbe\u7075\u4f20\u8bf4</a>\n                    <a href="http://zh.163.com?from=nietop" target="_blank">\u65a9\u9b42</a>\n                    \n                </li>\n                <li class="short" id="js_NIE_topbar_xiu" style="width:150px;position: absolute;left: 135px;background-color: #fdfefe;z-index:3;">\n                    <p>\u7ade\u6280/\u4f11\u95f2</p>\n                    <a href="http://mc.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u6211\u7684\u4e16\u754c</em></a>\n                    <a href="http://ow.blizzard.cn/home?from=nietop" target="_blank"><em class="NIE-topBar-new">\u5b88\u671b\u5148\u950b</em></a>\n                    <a href="http://tuji.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u7a81\u51fb\u82f1\u96c4</em></a>\n                    <a href="http://wf.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u65e0\u5c3d\u6218\u533a</em></a>\n                    <a href="http://z.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u6218\u610f</em></a>\n                    <a href="http://mjdj.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u79d8\u5883\u5bf9\u51b3</em></a>\n                    <a href="http://www.heroesofthestorm.com.cn/landing/?from=nietop" target="_blank">\u98ce\u66b4\u82f1\u96c4</a>\n                    <a href="http://sc2.163.com/home?from=nietop" target="_blank">\u661f\u9645\u4e89\u9738\u2161</a>\n                    <a href="http://y3.163.com?from=nietop" target="_blank">\u82f1\u96c4\u4e09\u56fd</a>\n                    <a href="http://www.hearthstone.com.cn/?from=nietop" target="_blank">\u7089\u77f3\u4f20\u8bf4</a>\n\n                    <a href="javascript:void(0)" hidefocus="true" class="NIE-topBar-more" id="NIE-topBar-more-pc">\u66f4\u591a\u70ed\u95e8\u7aef\u6e38</a>\n                </li>\n\n                <li class="hot" style="width:133px;">\n                    <p>\u70ed\u95e8\u63a8\u8350</p>\n                    <a href="http://my.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u68a6\u5e7b\u897f\u6e38\u624b\u6e38</em></a>\n                    <a href="http://dhxy.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u5927\u8bdd\u897f\u6e38\u624b\u6e38</em></a>\n                    <a href="http://qnm.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u5029\u5973\u5e7d\u9b42\u624b\u6e38</em></a>\n                    <a href="http://yys.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u9634\u9633\u5e08</em></a>\n                    <a href="http://stzb.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u7387\u571f\u4e4b\u6ee8</em></a>\n                    <a href="http://tx.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u5929\u4e0b\u624b\u6e38</em></a>\n                    <a href="http://zm.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u9547\u9b54\u66f2\u624b\u6e38</em></a>\n                    <a href="http://hit.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u6211\u5b88\u62a4\u7684\u4e00\u5207</em></a>\n                    <a href="http://dt.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u5927\u5510\u65e0\u53cc\u552f\u7f8e\u7bc7</em></a>\n                    <a href="http://ldxy.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u4e71\u6597\u897f\u6e382</em></a>\n                    <a href="http://mhws.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u68a6\u5e7b\u897f\u6e38\u65e0\u53cc2</em></a> \n                    <a href="http://land.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u5149\u660e\u5927\u9646</em></a>\n                    \n                    <a href="http://kf.163.com/?from=nietop" target="_blank">\u529f\u592b\u718a\u732b3\u624b\u6e38</a>\n                    <a href="http://ma.163.com/?from=nietop"  target="_blank">\u4e56\u79bb\u6027\u767e\u4e07\u4e9a\u745f\u738b</a>\n                    \n                    \n                    \n                </li>\n                <li class="news" style="width:408px;">\n                    <p>\u65b0\u54c1\u63a8\u8350</p>\n                    <div id="NIE-list-news">\n                        <div class="long-news">\n                            \n                            <a href="http://mc.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u6211\u7684\u4e16\u754cMinecraft</em></a>\n                            <a href="http://sky.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">Sky\u5149\u9047</em></a>\n                            <a href="http://langrensha.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u72fc\u4eba\u6740\u5b98\u65b9</em></a> \n                            <a href="http://t2.163.com/?from=nietop"  target="_blank"><em class="NIE-topBar-new">\u7ec8\u7ed3\u80052\u5b98\u65b9\u624b\u6e38</em></a>\n                            <a href="http://hy.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u8352\u91ce\u884c\u52a8</em></a>\n                            <a href="http://wotb.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u5766\u514b\u4e16\u754c\u95ea\u51fb\u6218</em></a>\n                            \n                            <a href="http://room.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u8ff7\u5ba4The Room</em></a>\n                            <a href="http://hzgj.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u9b42\u4e4b\u8f68\u8ff9</em></a>\n                            <a href="http://tqlm.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u5929\u542f\u8054\u76df</em></a>\n                            <a href="http://ma3.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u53db\u9006\u6027\u767e\u4e07\u4e9a\u745f\u738b</em></a>\n                            <a href="http://dot.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u6cf0\u5766\u9ece\u660e</em></a>\n                            <a href="http://zgz.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u6218\u56fd\u5fd7</em></a>\n                            <a href="http://myj.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u4e5d\u5dde\u6d77\u4e0a\u7267\u4e91\u8bb0</em></a>\n                            <a href="http://mytrip.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u8fb9\u5883\u4e4b\u65c5</em></a>\n                            <a href="http://sword.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u8f69\u8f95\u5251\u9f99\u821e\u4e91\u5c71</em></a>\n                            <a href="http://sv.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u5f71\u4e4b\u8bd7</em></a> \n                            <a href="http://xfj.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u66b4\u8d70\u5c0f\u98de\u673a</em></a>\n                            \n                            \n                        </div>\n                        <div class="long-news">\n                            <a href="https://moba.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u51b3\u6218\uff01\u5e73\u5b89\u4eac</em></a> \n                            <a href="http://mjdj.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u79d8\u5883\u5bf9\u51b3</em></a>\n                            <a href="http://bilibili.163.com/?from=nietop"  target="_blank"><em class="NIE-topBar-new">\u9b54\u6cd5\u7981\u4e66\u76ee\u5f55</em></a>\n                            <a href="http://qwq.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u975e\u4eba\u5b66\u56ed</em></a>\n                            <a href="http://sg.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u4e09\u56fd\u5982\u9f99\u4f20</em></a>\n                            <a href="http://yume.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u60a0\u68a6YuME</em></a> \n                            <a href="http://spp.163.com/?from=nietop"  target="_blank"><em class="NIE-topBar-new">\u8d85\u7269\u7406\u57fa\u6597</em></a>\n                            <a href="http://fz.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u6c49\u738b\u7eb7\u4e89</em></a>\n                            <a href="http://id5.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u7b2c\u4e94\u4eba\u683c</em></a>\n                            <a href="http://fc.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u6c38\u8fdc\u76847\u65e5\u4e4b\u90fd</em></a>\n                            <a href="http://clx.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u695a\u7559\u9999</em></a>\n                            <a href="http://lx.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u6d41\u661f\u8774\u8776\u5251</em></a>\n                            <a href="http://rts.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u589f\u571f\u4e4b\u4e89</em></a>\n                            <a href="http://hunter.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u72e9\u730e\u7eaa\u5143</em></a>\n                            \n                            <a href="http://toy.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u73a9\u5177\u5927\u4e71\u6597</em></a>\n                            \n                            <a href="https://qp.163.com/?from=nietop" target="_blank">\u7f51\u6613\u6210\u90fd\u68cb\u724c</a>  \n                            \n                            \n                        </div>\n                        <div class="short-news">\n                            <a href="http://wpls.163.com/?from=nietop" target="_blank">\u79d8\u5b9d\u730e\u4eba:\u738b\u724c\u730e\u624b</a>\n                            <a href="http://mwqs.163.com/?from=nietop" target="_blank">\u8ff7\u96fe\u6c42\u751f</a>\n                            <a href="http://sgblade.163.com/?from=nietop" target="_blank">\u4e09\u56fd\u8bdb\u5c06\u5f55</a>\n                            <a href="http://tj.163.com/?from=nietop"  target="_blank">\u5929\u9a84\u94c1\u9a91</a>\n                            <a href="http://zztj.163.com/?from=nietop" target="_blank">\u91cd\u88c5\u7a81\u51fb</a>\n                            \n                            <a href="http://ms.163.com/?from=nietop" target="_blank">\u5143\u6c14\u6218\u59ec\u5b66\u9662</a>\n                            \n                            <a href="http://miku.163.com/?from=nietop" target="_blank">\u521d\u97f3\u901f</a>\n                            <a href="http://jx.163.com/?from=nietop" target="_blank">\u65e0\u5c3d\u6218\u533a\xb7\u89c9\u9192</a>\n                            <a href="http://glory.163.com/?from=nietop" target="_blank">\u683c\u7f57\u4e9a\u4f20\u5947</a>\n                            \n                            \n                            <a href="http://dance.163.com/?from=nietop" target="_blank">\u52b2\u821e\u56e2</a>\n                            <a href="http://tank.163.com/?from=nietop"  target="_blank">\u5766\u514b\u8fde</a>\n                            <a href="http://dhrx.163.com/?from=nietop" target="_blank">\u5927\u8bdd\u897f\u6e38\u70ed\u8840\u7248</a>\n                            \n                            <a href="http://lh.163.com/?from=nietop" target="_blank">\u730e\u9b42\u89c9\u9192</a> \n                            <a href="http://dhh.163.com/?from=nietop" target="_blank">\u5927\u822a\u6d77\u4e4b\u8def</a>\n                            <a href="http://yxl.163.com/?from=nietop" target="_blank">\u795e\u90fd\u591c\u884c\u5f55</a>\n                            <a href="http://ssydj.163.com/?from=nietop" target="_blank">\u4e09\u5c11\u7237\u7684\u5251</a>\n                            \n                            \n                            \n                        </div>\n                        <div class="short-news">\n                            <a href="http://mwsj.163.com/?from=nietop" target="_blank">\u8ff7\u96fe\u4e16\u754c</a>\n                            <a href="http://moe.163.com/?from=nietop" target="_blank">\u840c\u738bEX</a>\n                            <a href="http://dao.163.com/?from=nietop" target="_blank">\u98de\u5200\u53c8\u89c1\u98de\u5200</a> \n                            <a href="http://mblr.163.com/?from=nietop" target="_blank">\u79d8\u5b9d\u730e\u4eba</a>\n                            <a href="http://fmz.163.com/?from=nietop" target="_blank">\u4f0f\u9b54\u5492</a>\n                            \n                            <a href="http://txx.163.com/?from=nietop" target="_blank">\u5929\u4e0bX\u5929\u4e0b</a>\n                            <a href="http://zj.163.com/?from=nietop" target="_blank">\u5f02\u6b21\u5143\u6218\u59ec</a>\n                            <a href="http://yhbj.163.com/?from=nietop" target="_blank">\u6c38\u6052\u8fb9\u5883</a>\n                            <a href="http://wjsy.163.com/?from=nietop" target="_blank">\u65e0\u5c3d\u795e\u57df</a>\n                            \n                            <a href="http://zh.163.com/boot.html?from=nietop" target="_blank">\u65a9\u9b42\u624b\u6e38\u7248</a>\n                            <a href="http://xjzdy.163.com/?from=nietop" target="_blank">\u661f\u9645\u603b\u52a8\u5458</a>\n                            <a href="http://mtj.163.com/?from=nietop" target="_blank">\u9b54\u5929\u8bb0</a>\n                            <a href="http://yzr.163.com/?from=nietop" target="_blank">\u96e8\u8840\uff1a\u5f71\u4e4b\u5203</a>\n                            <a href="http://hyy.163.com/?from=nietop" target="_blank">\u82b1\u8bed\u6708</a>\n                            <a href="http://sl.163.com/?from=nietop" target="_blank">\u5723\u7075\u89c9\u9192</a>    \n                            <a href="http://jm.163.com/?from=nietop" target="_blank">\u60ca\u68a6</a>\n                            \n                        </div>\n                        <div class="short-news">\n                            \n                            <a href="http://cake.163.com/index.html?from=nietop" target="_blank">\u86cb\u7cd5\u7269\u8bed</a>\n                            <a href="http://rz.163.com/?from=nietop" target="_blank">\u5fcd\u8005\u5fc5\u987b\u6b7b2</a>\n                            <a href="http://smj.163.com/?from=nietop" target="_blank">\u795e\u9b54\u52ab</a>\n                            <a href="http://mmx.163.com/?from=nietop" target="_blank">\u706b\u62fc\u840c\u840c\u6d88</a>\n                            <a href="http://dwlm.163.com/?from=nietop" target="_blank">\u8d85\u80fd\u52a8\u7269\u8054\u76df</a>\n                            <a href="http://zlj.163.com/?from=nietop" target="_blank">\u53e3\u888b\u4f8f\u7f57\u7eaa</a> \n                            <a href="http://wxhd.163.com/?from=nietop" target="_blank">\u65e0\u9650\u5e7b\u6597</a>\n                            <a href="http://slg.163.com/?from=nietop" target="_blank">\u70fd\u706b\u738b\u5e08</a>\n                            <a href="http://xym.163.com/?from=nietop" target="_blank">\u8ff7\u4f60\u897f\u6e38</a>\n                            <a href="http://lzxxdn.163.com/?from=nietop" target="_blank">\u6765\u81ea\u661f\u661f\u7684\u4f60</a>\n                            <a href="http://zgmh.163.com/?from=nietop" target="_blank">\u4e3b\u516c\u83ab\u614c</a>\n                            <a href="http://wscs.163.com/?from=nietop" target="_blank">\u5b9e\u51b5\u4ff1\u4e50\u90e8</a> \n                            <a href="http://dfw9.163.com/?from=nietop" target="_blank">\u5927\u5bcc\u7fc19</a>\n                            <a href="http://yhl.163.com/?from=nietop" target="_blank">\u5029\u5973\u5e7d\u9b42\u5f55</a>\n                            <a href="http://hzhy.163.com/?from=nietop" target="_blank">\u9b42\u4e4b\u5e7b\u5f71</a>  \n                            <a href="http://dtyxj.163.com/?from=nietop" target="_blank">\u5927\u5510\u6e38\u4ed9\u8bb0</a>\n                            \n                        </div>\n                        <div class="short-news">\n                            <a href="http://txhd.163.com/?from=nietop" target="_blank">\u5929\u4e0bHD</a>\n                            <a href="http://yongshi.163.com/?from=nietop" target="_blank">\u52c7\u58ebx\u52c7\u58eb</a>\n                            <a href="http://chao.163.com/?from=nietop" target="_blank">\u6f6e\u4eba\u7bee\u7403</a>\n                            <a href="http://jjwz.163.com/?from=nietop" target="_blank">\u8346\u68d8\u738b\u5ea7</a>\n                            <a href="http://sm.163.com/?from=nietop" target="_blank">\u897f\u6e38\u795e\u9b54\u51b3</a>\n                            <a href="http://sq.163.com/?from=nietop" target="_blank">\u6709\u6740\u6c14\u7ae5\u8bdd</a>\n                            <a href="http://mxxc.163.com/?from=nietop" target="_blank">\u68a6\u60f3\u661f\u57ce</a>\n                            <a href="http://puppy.163.com/?from=nietop" target="_blank">\u5c0f\u6c6a\u6c6a</a>\n                            <a href="http://xsd.163.com/?from=nietop"  target="_blank">\u5c0f\u65f6\u4ee3\u5b98\u65b9\u6e38\u620f</a>\n                            <a href="http://ywl.163.com/?from=nietop" target="_blank">\u5996\u5200\u5c11\u5973\u5f02\u95fb\u5f55</a>\n                            <a href="http://tnj.163.com/?from=nietop" target="_blank">\u732b\u548c\u8001\u9f20\u5b98\u65b9\u624b\u6e38</a>\n                            <a href="http://gfxm.163.com/?from=nietop" target="_blank">\u529f\u592b\u718a\u732b\u5b98\u65b9\u624b\u6e38</a>\n                        </div>\n                    </div>\n\n                    <a href="javascript:void(0)" hidefocus="true" class="NIE-topBar-more" id="NIE-topBar-more-mobi">\u66f4\u591a\u70ed\u95e8\u624b\u6e38</a>\n                </li>\n                <li class="short" style="width:117px;border-right:0;float:right;">\n                    \n                    <a href="http://ypw.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u6e38\u54c1\u4f4d</em></a>\n                    <a href="http://mumu.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u7f51\u6613MuMu</em></a>\n                    <a href="http://qiyu.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-hot">\u5947\u9047\u4ff1\u4e50\u90e8</em></a>\n                    <a href="https://buff.163.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u7f51\u6613BUFF</em></a> \n                    <a href="http://gift.163.com/?from=nietop" target="_blank">\u7f51\u6613\u6e38\u620f\u5370\u8c61</a>\n                    <a href="http://pt.163.com/?from=nietop" target="_blank">\u7f51\u6613\u6e38\u620f\u5e73\u53f0</a>\n                    <a href="http://app.netease.com/?from=nietop" target="_blank"><em class="NIE-topBar-new">\u6e38\u620f\u8bba\u575bapp</em></a> \n                    <a href="http://mkey.163.com?from=nietop" target="_blank">\u624b\u673a\u5c06\u519b\u4ee4</a>\n                    <a href="http://ekey.163.com?from=nietop" target="_blank">\u5c06\u519b\u4ee4</a>\n                    <a href="http://zhidao.163.com?from=nietop" target="_blank">\u6e38\u620f\u77e5\u9053</a>\n                    <a href="http://cbg.163.com?from=nietop" target="_blank">\u85cf\u5b9d\u9601</a>\n                    <a href="http://cc.163.com?from=nietop" target="_blank">\u7f51\u6613CC</a>\n                    <a href="http://gm.163.com?from=nietop" target="_blank">\u5ba2\u670d\u4e2d\u5fc3</a>\n                    <a href="http://box.gm.163.com/?fromnietop" target="_blank">\u81ea\u52a9\u767e\u5b9d\u7bb1</a>\n                    <a href="http://uu.163.com?from=nietop" target="_blank">\u7f51\u6613UU\u52a0\u901f\u5668</a>\n                    <a class="NIE-topBar-btn" href="http://game.163.com/?from=nietop" target="_blank">\u7f51\u6613\u6e38\u620f</a>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</div>';
		t("NIE-topBar").innerHTML = o.replace(/\$regPage\$/gi, regPage).replace(/\$ecardLink\$/gi, ecardLink).replace(/\$zsLink\$/gi, zsLink).replace(/\$zsName\$/gi, zsName), t("global_gp_mid").style.display = "block";
		var e = Math.floor(Math.random() * TopBarConfig.pvList.length),
			a = t("NIE-topBar-right").getElementsByTagName("a")[0];
		a.href = TopBarConfig.pvList[e].link, a.innerHTML = TopBarConfig.pvList[e].name, setInterval(function() {
			a.className = "fadeUp", e = (e + 1) % TopBarConfig.pvList.length, setTimeout(function() {
				a.className = "none", a.href = TopBarConfig.pvList[e].link, a.innerHTML = TopBarConfig.pvList[e].name, setTimeout(function() {
					a.className = "fadeUp2"
				}, 50)
			}, 400)
		}, 5e3), m(), window.addEventListener ? window.addEventListener("resize", m, !1) : window.attachEvent("onresize", m), t("NIE-topBar-more-mobi").onclick = function() {
			t("NIE-table").className.indexOf("moreAni") < 0 ? (t("NIE-table").className += " moreAni", t("NIE-topBar-more-mobi").innerHTML = "<<") : (t("NIE-table").className = "NIE-table", t("NIE-topBar-more-mobi").innerHTML = "\u66f4\u591a\u70ed\u95e8\u624b\u6e38")
		}, t("NIE-topBar-more-pc").onclick = function() {
			t("NIE-topBar-more-pc").className.indexOf("open") < 0 ? (t("js_NIE_topbar_xiu").style.left = "276px", t("js_NIE_topbar_xiu").style.zIndex = "4", t("NIE-topBar-more-pc").innerHTML = "<<", t("NIE-topBar-more-pc").className += " open") : (t("js_NIE_topbar_xiu").style.left = "135px", t("NIE-topBar-more-pc").innerHTML = "\u66f4\u591a\u70ed\u95e8\u7aef\u6e38", t("NIE-topBar-more-pc").className = "NIE-topBar-more", setTimeout(function() {
				t("js_NIE_topbar_xiu").style.zIndex = "3"
			}, 300))
		}
	}, new o("NIE-topBar-menu", "NIE-topBar-menu-hover"), new n("NIE-topBar-news", "NIE-topBar-news-hover", "NIE-topBar-news-close"), r = h = i = s = regPage = regUrl = regProductID = null
}();