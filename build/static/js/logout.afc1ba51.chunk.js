(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{436:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return u});t(10);var o=t(437),r=t.n(o),i=function(e){return function(n){return new Promise(function(t){n({type:"auth/SET_CURRENT_USER",user:e}),r.a.set("mywebsite",e),n({type:"auth/AUTHENTICATE",authenticated:!0}),t(e)})}},c=function(e,n){return function(t){return new Promise(function(o,r){var c={email:e,password:n,name:"Awesome User"};t(i(c)),o(c)})}},u=function(){return function(e){return new Promise(function(n){e({type:"auth/AUTHENTICATE",authenticated:!1}),e({type:"auth/SET_CURRENT_USER",user:{}}),r.a.remove("mywebsite"),n({})})}}},437:function(e,n,t){var o,r;!function(i){if(void 0===(r="function"===typeof(o=i)?o.call(n,t,n,e):o)||(e.exports=r),!0,e.exports=i(),!!0){var c=window.Cookies,u=window.Cookies=i();u.noConflict=function(){return window.Cookies=c,u}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}return function n(t){function o(n,r,i){var c;if("undefined"!==typeof document){if(arguments.length>1){if("number"===typeof(i=e({path:"/"},o.defaults,i)).expires){var u=new Date;u.setMilliseconds(u.getMilliseconds()+864e5*i.expires),i.expires=u}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(w){}r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var a in i)i[a]&&(s+="; "+a,!0!==i[a]&&(s+="="+i[a]));return document.cookie=n+"="+r+s}n||(c={});for(var f=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,l=0;l<f.length;l++){var d=f[l].split("="),h=d.slice(1).join("=");this.json||'"'!==h.charAt(0)||(h=h.slice(1,-1));try{var m=d[0].replace(p,decodeURIComponent);if(h=t.read?t.read(h,m):t(h,m)||h.replace(p,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(w){}if(n===m){c=h;break}n||(c[m]=h)}catch(w){}}return c}}return o.set=o,o.get=function(e){return o.call(o,e)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}(function(){})})},818:function(e,n,t){"use strict";t.r(n);var o=t(21),r=t(22),i=t(24),c=t(23),u=t(25),s=t(0),a=t(35),f=t(32),p=t(436),l=function(e){function n(){return Object(o.a)(this,n),Object(i.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(r.a)(n,[{key:"componentWillMount",value:function(){this.props.logoutUser(),this.props.history.push("/")}},{key:"render",value:function(){return null}}]),n}(s.Component);n.default=Object(f.connect)(null,function(e){return Object(a.b)({logoutUser:p.b},e)})(l)}}]);
//# sourceMappingURL=logout.afc1ba51.chunk.js.map