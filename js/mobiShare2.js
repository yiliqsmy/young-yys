var MobileShare=function(){function e(){var e=location.search.replace(/^[\?|\&]/gi,"");e=""==e?"":"&"+e,f(e,"mbshare")?nie.config.stats.url.add(location.host+location.pathname+"?click=2ndvisite"+e,"\u4e8c\u6b21\u4f20\u64ad\u8bbf\u95ee"):nie.config.stats.url.add(location.host+location.pathname+"?click=1stvisite"+e,"\u76f4\u63a5\u8bbf\u95ee")}function n(e){_=$.extend({title:"",desc:"",url:window.location.href,imgurl:"",circleTitle:"",guideText:"",qrcodeIcon:"",shareCallback:function(){},wxSdkApiSetting:{isDebug:!1,apiList:[],callback:function(){}}},e||{}),y.title=_.title,y.desc=_.desc,y.url=_.url,y.imgurl=_.imgurl,y.circleTitle=_.circleTitle,y.weiboTitle=_.weiboTitle,y.qrcodeIcon=_.qrcodeIcon,y.callback=_.shareCallback;var n=document.createElement("link");n.href="https://nie.res.netease.com/comm/js/nie/util/mobishare2/css/mobile-share.css",n.rel="stylesheet",document.head.appendChild(n),r(),p(),i()}function i(){C?o():q?a():l()}function t(){var e=window.YixinJSBridge;e&&(e.call("showOptionMenu"),e.on("menu:share:appmessage",function(){e.invoke("sendAppMessage",{img_url:y.imgurl,img_width:"640",img_height:"640",link:u("yx_2"),desc:y.desc,title:y.title},function(e){m({channel:"yx",type:2}),y.callback({type:2,res:e})})}),e.on("menu:share:timeline",function(){e.invoke("shareTimeline",{img_url:y.imgurl,img_width:"640",img_height:"640",link:u("yx_1"),desc:y.desc,title:y.title},function(e){m({channel:"yx",type:1}),y.callback({type:1,res:e})})}),E=!0)}function a(){E?t():document.addEventListener("YixinJSBridgeReady",t,!1)}function c(){var e=["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"].concat(_.wxSdkApiSetting.apiList);S===!0&&"undefined"==typeof wx_conf&&(wx_conf=I),wx.config({debug:_.wxSdkApiSetting.isDebug,appId:wx_conf.appId,timestamp:wx_conf.timestamp,nonceStr:wx_conf.nonceStr,signature:wx_conf.signature,jsApiList:e}),wx.ready(function(){E=!0,"function"==typeof _.wxSdkApiSetting.callback&&_.wxSdkApiSetting.callback(),s()})}function s(){var e={imgUrl:y.imgurl,cancel:function(e){y.callback({type:0,res:e})},fail:function(e){y.callback({type:-1,res:e})}};wx.onMenuShareAppMessage($.extend({title:y.title,desc:y.desc,link:u("wx_2"),success:function(e){m({channel:"wx",type:2}),y.callback({type:2,res:e})}},e)),wx.onMenuShareTimeline($.extend({title:""!=y.circleTitle?y.circleTitle:y.title,desc:y.Desc,link:u("wx_1"),success:function(e){m({channel:"wx",type:1}),y.callback({type:1,res:e})}},e)),wx.onMenuShareQQ($.extend({title:y.title,desc:y.desc,link:u("wx_3"),success:function(e){m({channel:"wx",type:3}),y.callback({type:3,res:e})}},e)),wx.onMenuShareWeibo($.extend({title:y.title,desc:y.desc,link:u("wx_4"),success:function(e){m({channel:"wx",type:4}),y.callback({type:4,res:e})}},e))}function o(){if(E)s();else{var e=!1,n=!1,i=document.createElement("script");i.type="text/javascript",document.body.appendChild(i);var t=document.createElement("script");t.type="text/javascript",document.body.appendChild(t),i.addEventListener("load",function(){e=!0,e&&n&&c()},!1),t.addEventListener("load",function(){n=!0,e&&n&&c()},!1),i.src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js",/(qnm|xqn|n)\.163\.com/.test(location.host)===!0?$.ajax({url:"https://ssl.hi.163.com/file_mg/public/share/api/getWxJsTicketConfig/leihuo",dataType:"jsonp",success:function(e){1==e.code?(S=!0,I=e.data,I.jsApiList=["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"],c()):t.src="https://wxsign.nie.netease.com/sharecom/wxjs.php?url="+encodeURIComponent(location.href)}}):t.src="https://wxsign.nie.netease.com/sharecom/wxjs.php?url="+encodeURIComponent(location.href)}}function r(){var e=document.createElement("div");if(e.id="NIE-share-m",e.className="NIE-share-m",document.body.appendChild(e),N){var n='<div class="NIE-share-guide"><div class="arrow_line"><em></em><i></i><span></span></div><p>$shareGuide$</p></div>';e.innerHTML=n.replace(/\$shareGuide\$/gi,_.guideText)}else{var n='<div class="NIE-share_ctrl" ><div class="NIE-share_buttons" ><a class="NIE-share-btn_cp" href="javascript:void(0)"><i class="sharefont">&#xa0004;</i><em>\u590d\u5236\u94fe\u63a5</em></a><a class="NIE-share-btn_wx" href="javascript:void(0)"><i class="sharefont">&#xa0005;</i><em>\u5fae\u4fe1</em></a><a class="NIE-share-btn_yx" href="javascript:void(0)"><i class="sharefont">&#xa0002;</i><em>\u6613\u4fe1</em></a><a class="NIE-share-btn_wb" href="javascript:void(0)"><i class="sharefont">&#xa0003;</i><em>\u5fae\u535a</em></a><a class="NIE-share-btn_qq" href="javascript:void(0)"><i class="sharefont">&#xa0006;</i><em>QQ\u7a7a\u95f4</em></a></div><div class="NIE-share_qrcode" ><div ><a class="NIE-btn-close "><i class="sharefont ">&#xa0001;</i></a><p>'+T.qnCoder+'</p><span></span></div></div><div class="NIE-share_link" ><div ><a class="NIE-btn-close "><i class="sharefont ">&#xa0001;</i></a><p>'+T.copyLink+"</p><span></span></div></div></div>";e.innerHTML=n}k=$(e)}function l(){g="http://open.yixin.im/share?appkey=yx3ae08a776bf04178a583cb745fb6aa0c&type=webpage&url="+encodeURIComponent(u("yx_1"))+"&title="+encodeURIComponent(y.title)+"&desc="+encodeURIComponent(y.desc)+"&pic="+encodeURIComponent(y.imgurl),b="http://service.weibo.com/share/share.php?c=nie&content=gb2312&source=nie&title="+encodeURIComponent(y.weiboTitle?y.weiboTitle:y.circleTitle?y.circleTitle:y.title)+"&url="+encodeURIComponent(u("weibo"))+"&pic="+encodeURIComponent(y.imgurl),x="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+encodeURIComponent(u("qqzone"))+"&title="+encodeURIComponent(y.title)+"&desc="+encodeURIComponent(y.desc)+"&pics="+encodeURIComponent(y.imgurl),k.find(".NIE-share_link div span")[0].innerHTML=u("cplink")}function d(){var e=k.find(".NIE-share_ctrl");e.removeClass(e.hasClass("show_qrcode")?"show_qrcode":"show_link")}function p(){k[0].addEventListener("click",function(e){var n=e.target;if($(n).hasClass("NIE-btn-close")||$(n).parent().hasClass("NIE-btn-close"))d(),e.stopPropagation();else if($(n).hasClass("NIE-share_buttons")||$(n).hasClass("NIE-share_qrcode")||$(n).hasClass("NIE-share_link")||$(n).hasClass("NIE-share-m")){k.removeClass("show");{setTimeout(function(){k.hide(),d()},300)}}},!1),k[0].addEventListener("touchmove",function(e){e.preventDefault()},!1),N||(k.find(".NIE-share-btn_cp")[0].addEventListener("click",function(e){k.find(".NIE-share_ctrl").addClass("show_link"),e.stopPropagation()},!1),k.find(".NIE-share-btn_wx")[0].addEventListener("click",function(e){h(),k.find(".NIE-share_ctrl").addClass("show_qrcode"),e.stopPropagation()},!1),k.find(".NIE-share-btn_yx")[0].addEventListener("click",function(){location.href=g},!1),k.find(".NIE-share-btn_wb")[0].addEventListener("click",function(){location.href=b},!1),k.find(".NIE-share-btn_qq")[0].addEventListener("click",function(){location.href=x},!1))}function h(){var e=k.find(".NIE-share_qrcode span");if(0==e.find("img").length){var n=document.createElement("img");n.src="https://qrcode2.webapp.163.com/l?d="+encodeURIComponent(u("qrcode"))+"&l="+encodeURIComponent(y.qrcodeIcon?y.qrcodeIcon:v),e.append(n)}else L&&(e.find("img")[0].src="https://qrcode2.webapp.163.com/l?d="+encodeURIComponent(u("qrcode"))+"&l="+encodeURIComponent(y.qrcodeIcon?y.qrcodeIcon:v),L=!1)}function u(e){var n=window.location.href,i=f(n,"mbshare"),t=parseInt(f(n,"spreadtimes")?f(n,"spreadtimes"):0),a=y.url;return n.indexOf(a)>-1&&(a=n,window.location.hash&&(a=a.replace(window.location.hash,encodeURI(window.location.hash)))),f(a,"mbshare")?a=a.replace("mbshare="+i,"mbshare="+e).replace("spreadtimes="+t,"spreadtimes="+(t+1)):(a+=-1==a.indexOf("?")?"?":"&",a+="mbshare="+e+"&spreadtimes="+(t+1)),a}function m(e){var n=$.extend({channel:"",type:""},e||{});nie.config.stats.url.add(location.host+location.pathname+"?click=share&channel="+n.channel+"&type="+n.type,"\u5206\u4eab\u7edf\u8ba1")}function f(e,n){var i=e,t=new RegExp("[?&]*"+n+"=([^&]+)"),a=i.match(t);return a?a[1].replace('"',""):null}function w(){k.show();setTimeout(function(){k.addClass("show")},50)}var v="https://nie.res.netease.com/comm/js/nie/util/mobishare2/logo_min.png";e();var g,b,x,I,_,k,E=!1,y={title:"",desc:"",url:"",imgurl:"",circleTitle:"",weiboTitle:"",qrcodeIcon:"",shareCallback:function(){}},C=/micromessenger/i.test(navigator.userAgent.toLowerCase()),q=/yixin/i.test(navigator.userAgent.toLowerCase()),N=C||q,S=!1,T={qnCoder:"\u957f\u6309\u4fdd\u5b58\u4e8c\u7ef4\u7801\u5230\u672c\u5730<br />\u4f7f\u7528\u5fae\u4fe1\u8bc6\u522b\u8fdb\u884c\u5206\u4eab",copyLink:"\u957f\u6309\u94fe\u63a5\u590d\u5236\u540e\u5206\u4eab\u7ed9\u597d\u53cb"},L=!1;return{init:function(e){n(e)},updateShare:function(e){y=$.extend(y,e||{}),i(),L=!0},showShare:w}}();