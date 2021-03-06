nie.config.copyRight.setWhite(), nie.define(function() {
	var e = nie.require("nie.util.shareV5"),
		i = nie.require("nie.util.niedownload"),
		n = nie.require("nie.util.videoV2"),
		t = {
			share: function() {
				e({
					fat: "#NIE-share",
					type: 6,
					title: $("#share_title").text(),
					content: $("#share_desc").text(),
					url: $("#share_url").attr("href"),
					img: $("#share_pic").attr("data-src")
				})
			},
			download: function() {
				i.create({
					wrapper: $("#NIE-download"),
					enableAndroid: !0,
					enableIos: !0,
					useSSL: !0
				}), $(".side-qrcode").html($(".download-qrcode").html())
			},
			video: function() {
				$(".btn-video").on("click", function() {
					n({
						fat: "#video",
						width: 800,
						height: 450,
						movieUrl: $(this).attr("data-src"),
						autoPlay: !0
					}), $("#pop-video").show()
				}), $("#pop-video .pop-close").on("click", function() {
					$("#video").html(""), $("#pop-video").hide()
				})
			},
			resize: function() {
				function e() {
					var e = document.documentElement.clientHeight,
						i = e / 1080;
					n.css("transform", "scale(" + i + ")")
				}
				var i = $(window),
					n = $(".wrap");
				e(), i.on("resize", e)
			},
			main: function() {
				function e(e) {
					$(".nav span").removeClass("on").eq(e).addClass("on"), i.slideTo(e)
				}
				var i = new Swiper(".main .swiper-container", {
					preloadImages: !1,
					onlyExternal: !0,
					mousewheelControl: !0,
					parallax: !0,
					speed: 1e3,
					spaceBetween: 440,
					onSlideChangeStart: function(i) {
						i.isBeginning ? $(".side").removeClass("on") : $(".side").addClass("on"), e(i.activeIndex)
					}
				});
				e(0), $(".nav span").on("click", function() {
					var i = $(this).index();
					e(i)
				});
				var n = !1;
				$(".btn-copyright").on("click", function() {
					var e = 0;
					n || (e = $(".nie").height()), n = !n, $(".footer").css("height", e)
				})
			},
			pop: function() {
				var e = new Swiper("#pop-activity .swiper-container", {
					onlyExternal: !0,
					prevButton: "#pop-activity .swiper-button-prev",
					nextButton: "#pop-activity .swiper-button-next"
				});
				$(".activity span").on("click", function() {
					var i = $(this).index();
					$("#pop-activity").show(), e.onResize(), e.slideTo(i, 0)
				}), $("#pop-activity .pop-close").on("click", function() {
					$("#pop-activity").hide()
				})
			}
		};
	t.share(), t.download(), t.video(), t.resize(), t.main(), t.pop()
});