(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{376:function(e,n,t){"use strict";var a=t(7),r=t(0),o=t.n(r),i=t(524),c=t.n(i),l=t(107),s=t(6),u=t(381),p=t.n(u),m=t(521),h=t.n(m),d=t(21),g=t(22),b=t(24),f=t(23),v=t(25),x=t(367),k=t.n(x),E=t(512),y=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(b.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={displayColorPicker:!1,hex:"#FFFFFF",color:{r:"255",g:"255",b:"255",a:"1"}},t.handleClick=function(){t.setState({displayColorPicker:!t.state.displayColorPicker})},t.handleClose=function(){t.setState({displayColorPicker:!1})},t.handleChange=function(e){if(t.setState({color:e.rgb,hex:e.hex}),t.props.changeColour){var n=t.props.pageId,a=t.props.parentId||null,r={target:{name:t.props.name,value:e.hex}};t.props.changeColour(r,n,a)}},t}return Object(v.a)(n,e),Object(g.a)(n,[{key:"componentDidMount",value:function(){if(this.props.value){var e=this.props.value.replace("#",""),n={r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:1};this.setState({color:n})}}},{key:"render",value:function(){console.log("hex",this.state.hex);var e=k()({default:{color:{width:"12vw",height:"17px",borderRadius:"2px",background:"rgba(".concat(this.state.color.r,", ").concat(this.state.color.g,", ").concat(this.state.color.b,", ").concat(this.state.color.a,")")},swatch:{padding:"5px",marginTop:"6px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return o.a.createElement("div",null,o.a.createElement("div",{style:e.swatch,onClick:this.handleClick},o.a.createElement("div",{style:e.color})),this.state.displayColorPicker?o.a.createElement("div",{style:e.popover},o.a.createElement("div",{style:e.cover,onClick:this.handleClose}),o.a.createElement(E.SketchPicker,{color:this.state.color,onChange:this.handleChange,disableAlpha:!0})):null)}}]),n}(o.a.Component);function C(){var e=Object(a.a)(["\n  margin: 0 10px 15px 0;\n\n  > label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n  }\n\n  > div textarea {\n    height: 230px;\n  }\n\n  > div input,\n  div textarea,\n  div select {\n    width: 100%;\n    box-sizing: border-box;\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: white;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    box-sizing: border-box;\n    border-radius: 5px;\n\n    :focus {\n      outline: none;\n      border-color: #9ecaed;\n      box-shadow: 0 0 10px #9ecaed;\n    }\n  }\n\n  > div button {\n    opacity: 0.7;\n  }\n"]);return C=function(){return e},e}var w=s.c.div(C());n.a=function(e){var n=null,t=null;switch(e.inputtype){case"input":n=o.a.createElement("input",{name:e.name,value:e.value,onChange:e.onChange,disabled:e.disabled||!1,placeholder:e.placeholder,type:e.type||"text"});break;case"inputSelector":n=o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{name:e.name,value:e.value,onClick:e.onClick,onChange:e.onChange,readOnly:!0}),e.value&&o.a.createElement(p.a,{"aria-label":"Add",onClick:function(){return e.clearInput(e.name)}},o.a.createElement(h.a,{fontSize:"small"})));break;case"inputColourPicker":n=o.a.createElement(y,{name:e.name,value:e.value,changeColour:e.changeColour,pageId:e.pageId,parentId:e.parentId});break;case"textarea":n=o.a.createElement("textarea",{name:e.name,value:e.value,onChange:e.onChange});break;case"select":t="object"===typeof e.items?Object.keys(e.items).map(function(n,t){var a=e.items[n];return o.a.createElement("option",{key:t,value:a.title||a.value},a.title||a.value)}):e.items.map(function(e,n){return o.a.createElement("option",{key:n,value:e.title||e.value},e.title||e.value)}),n=o.a.createElement("select",{value:e.value||e.items[0],onChange:e.onSelectChange,name:e.name},t);break;case"checkbox":n=o.a.createElement(l.a,{margin:"initial"},o.a.createElement(c.a,{name:e.name,checked:e.checked,onChange:e.handleChange("checked",e.parentObj),color:"primary",value:"checked",parent:e.parent}),o.a.createElement("label",null,e.sideLabel));break;default:n=o.a.createElement("input",null)}return o.a.createElement(w,null,o.a.createElement("label",null,e.label),o.a.createElement(l.a,null,n))}},378:function(e,n,t){"use strict";var a=t(7),r=t(0),o=t.n(r),i=t(6),c=t(525),l=t.n(c);function s(){var e=Object(a.a)(['\n  > div {\n    height: 20px !important;\n    width: 20px !important;\n    margin: "theme.spacing.unit * 2";\n    color: ',";\n  }\n"]);return s=function(){return e},e}var u=i.c.div(s(),function(e){return e.theme.primaryBackGroundColour});n.a=function(e){return o.a.createElement(u,null,o.a.createElement(l.a,null))}},433:function(e,n,t){"use strict";var a=t(7),r=t(0),o=t.n(r);function i(){var e=Object(a.a)(["\n  display: grid;\n  margin: ",";\n  grid-template-columns: ",";\n  grid-column-gap: ",";\n  align-items: center;\n  height: ",";\n  grid-row-gap: ",";\n\n  @media (max-width: 1024px) {\n    grid-template-columns: ",";\n  }\n\n  @media (max-width: 768px) {\n    grid-template-columns: ",";\n    margin: ",";\n  }\n"]);return i=function(){return e},e}var c=t(6).c.div(i(),function(e){return e.margin||"20px"},function(e){return e.cols},function(e){return e.colGap||"20px"},function(e){return e.height?e.height:"auto"},function(e){return e.rowGap?e.rowGap:"initial"},function(e){return e.colsLarge||e.cols},function(e){return e.colsMed||e.cols},function(e){return e.marginMed||e.margin});n.a=function(e){var n=e.cols||"50% 50%";return o.a.createElement(c,{cols:n,colsMed:e.colsMed,colsLarge:e.colsLarge,margin:e.margin,marginMed:e.marginMed,marginLarge:e.marginLarge,colGap:e.colGap,rowGap:e.rowGap,height:e.height},e.children)}},458:function(e,n,t){"use strict";var a=t(7),r=t(21),o=t(22),i=t(24),c=t(23),l=t(25),s=t(0),u=t.n(s),p=t(762),m=t.n(p),h=t(381),d=t.n(h),g=t(770),b=t.n(g),f=t(6);function v(){var e=Object(a.a)(["\n  > div div {\n    background-color: ",";\n    font-weight: ",";\n  }\n"]);return v=function(){return e},e}var x=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(o)))).state={open:!1},t.handleClick=function(){t.setState({open:!0})},t.handleClose=function(e,n){"clickaway"!==n&&t.setState({open:!1})},t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({open:!0})}},{key:"render",value:function(){var e="rgb(49, 49, 49)";return this.props.error&&(e="rgb(220, 52, 54)"),this.props.success&&(e="rgb(70,154,16)"),u.a.createElement(k,{toastColour:e},u.a.createElement(m.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:u.a.createElement("span",{id:"message-id"},this.props.message),action:[u.a.createElement(d.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleClose},u.a.createElement(b.a,null))]}))}}]),n}(s.Component),k=f.c.div(v(),function(e){return e.toastColour},function(e){return e.error?"bold":"initial"});n.a=x},475:function(e,n,t){"use strict";var a=t(7),r=t(21),o=t(22),i=t(24),c=t(23),l=t(25),s=t(0),u=t.n(s),p=t(113),m=t(32),h=t(6),d=t(50),g=t(54);function b(){var e=Object(a.a)(["\n  height: 460px;\n  margin-top: ",";\n\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n\n  > div {\n    padding: 80px 10vw 0 10vw;\n    text-align: ",";\n    color: ",";\n\n    .banner-content {\n      margin: 0 20px;\n      animation: ",";\n    }\n  }\n"]);return b=function(){return e},e}function f(){var e=Object(a.a)(["\n  animation: ",";\n"]);return f=function(){return e},e}function v(){var e=Object(a.a)(["\n    1s "," ease-out\n  "]);return v=function(){return e},e}function x(){var e=Object(a.a)(["\n  0% {\n    opacity: 0;\n    transform: translateY(40%);\n  }\n  50% {\n    opacity: 1;\n    transform: translateY(-20%);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]);return x=function(){return e},e}var k=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(o)))).state={loading:!0,showLogo:!1,showBannerContent:!1},t.handleLogoLoaded=function(){t.setState({loading:!1})},t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.bannerData.isLogo?(setTimeout(function(){e.setState({showLogo:!0})},500),setTimeout(function(){e.setState({showBannerContent:!0})},700)):this.setState({showBannerContent:!0})}},{key:"componentDidUpdate",value:function(e){this.props.bannerData&&this.props.bannerData.isLogo!==e.bannerData.isLogo&&this.setState({showLogo:this.props.bannerData.isLogo})}},{key:"render",value:function(){var e=this.props.bannerData,n=e.img,t=e.fadeContent,a=e.title,r=e.subTitle,o=e.description,i=e.btnText,c=e.btnLink,l=n,s=this.props,p=s.history,m=s.template.siteLogo;return console.log("full_bannerProps",this.props),u.a.createElement(w,Object.assign({style:{backgroundImage:"url(".concat(l,")")}},this.props),u.a.createElement("div",null,this.state.showLogo&&u.a.createElement(C,{fadeContent:t},u.a.createElement(d.a,{siteLogo:m,onLoad:this.handleLogoLoaded,width:"50%"})),this.state.showBannerContent&&u.a.createElement("div",{className:"banner-content"},u.a.createElement("h1",null,a),u.a.createElement("h3",null,r),u.a.createElement("p",null,o),i&&u.a.createElement(g.a,{onClick:function(){p.push(c)}},i))))}}]),n}(s.Component),E=Object(h.d)(x()),y=function(e){return Object(h.b)(v(),E)},C=h.c.div(f(),function(e){return e.fadeContent?y:"none"}),w=h.c.div(b(),function(e){return e.template.transparentHeader&&"top"===e.position?"-56px":0},function(e){return e.bannerData.textRightSide?"right":"left"},function(e){return e.bannerData.lightTheme?e.theme.bannerTextLight:e.theme.bannerTextDark},function(e){return e.bannerData.fadeContent?y:"none"}),O=k,j=t(433);function B(){var e=Object(a.a)(["\n  background-color: ",";\n  height: ",";\n\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n\n  @media (max-width: 768px) {\n    height: 610px;\n  }\n"]);return B=function(){return e},e}function T(){var e=Object(a.a)(["\n    /* margin-top: ","; */\n    text-align: center;\n\n    > img{\n        width: auto;\n        max-width:100%;\n\n        @media (max-width: 768px) {\n            max-width:90%;\n        }\n    }\n"]);return T=function(){return e},e}function L(){var e=Object(a.a)(["\n    /* text-align: ","; */\n    color: ",";\n    margin: 0 50px;\n    animation: ",";\n    position: relative;\n    /* top: ","; */\n\n"]);return L=function(){return e},e}function S(){var e=Object(a.a)(["\n  animation: ",";\n"]);return S=function(){return e},e}function D(){var e=Object(a.a)(["\n    1s "," ease-out\n  "]);return D=function(){return e},e}function I(){var e=Object(a.a)(["\n  0% {\n    opacity: 0;\n    transform: translateY(40%);\n  }\n  50% {\n    opacity: 1;\n    transform: translateY(-20%);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]);return I=function(){return e},e}var H=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(o)))).state={loading:!0,showLogo:!1,showBannerContent:!1},t.handleLogoLoaded=function(){t.setState({loading:!1})},t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.bannerData.isLogo?(setTimeout(function(){e.setState({showLogo:!0})},500),setTimeout(function(){e.setState({showBannerContent:!0})},700)):this.setState({showBannerContent:!0})}},{key:"componentDidUpdate",value:function(e){this.props.bannerData&&this.props.bannerData.isLogo!==e.bannerData.isLogo&&this.setState({showLogo:this.props.bannerData.isLogo})}},{key:"render",value:function(){var e=this.props.bannerData,n=e.img,t=e.position,a=e.hwBannerBackGroundImg,r=e.backGroundColour,o=e.textRightSide,i=e.fadeContent,c=e.title,l=e.subTitle,s=e.description,p=e.btnText,m=e.btnLink,h=n,b=a,f=this.props,v=f.history,x=f.template.siteLogo,k=u.a.createElement("div",null,this.state.showLogo&&u.a.createElement(F,{fadeContent:i},u.a.createElement(d.a,{siteLogo:x,onLoad:this.handleLogoLoaded,width:"50%"})),u.a.createElement(G,this.props,u.a.createElement("h1",null,c),u.a.createElement("h3",null,l),u.a.createElement("p",null,s),p&&u.a.createElement(g.a,{onClick:function(){v.push(m)}},p)));return console.log("half_bannerProps",this.props),u.a.createElement(M,{style:{backgroundImage:"url(".concat(b,")")},background:r,transparentHeader:this.props.template.transparentHeader,position:this.props.position},u.a.createElement(j.a,{colGap:"0",margin:"0 5% 0 0",marginMed:"0",cols:"1fr 40% 40% 1fr",height:"100%",colsLarge:"0% 50% 50% 0%",colsMed:"100%"},u.a.createElement("div",null),this.state.showBannerContent&&!o&&k,u.a.createElement(z,this.props,u.a.createElement("img",{src:h,alt:"".concat(t,"-banner")})),this.state.showBannerContent&&o&&k,u.a.createElement("div",null)))}}]),n}(s.Component),A=Object(h.d)(I()),P=function(e){return Object(h.b)(D(),A)},F=h.c.div(S(),function(e){return e.fadeContent?P:"none"}),G=h.c.div(L(),function(e){return e.bannerData.textRightSide?"right":"left"},function(e){return e.bannerData.lightTheme?e.theme.bannerTextLight:e.theme.bannerTextDark},function(e){return e.bannerData.fadeContent?P:"none"},function(e){return e.bannerData.isLogo?0:"-65px"}),z=h.c.div(T(),function(e){return e.template.transparentHeader&&"top"===e.position?"-56px":0}),M=h.c.div(B(),function(e){return e.background||"initial"},function(e){return e.transparentHeader&&"top"===e.position?"475px":"400px"}),R=H,U=t(559),W=t.n(U);function Y(){var e=Object(a.a)(["\n  padding: 8% 10%;\n  background-color: ",";\n\n  .mainText {\n    text-align: ",";\n\n    > img {\n      height: ",";\n      width: ",";\n      float: ",";\n      padding: 15px;\n    }\n\n    > h1,\n    h2,\n    h3 {\n      text-align: ",";\n      margin: 0;\n    }\n  }\n"]);return Y=function(){return e},e}var N=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(o)))).convertToHtml=function(e,n){if(!e)return null;var a=e;return n&&(a=e.replace("{image}","<img src=".concat(n,' ALIGN="left" alt={').concat(t.props.position,"-maintext-image}>"))),W()(a)},t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){if(!this.props.bannerData)return u.a.createElement("div",null);console.log("main text banner props",this.props);var e=this.props.bannerData,n=e.mainText,t=e.centerTitle,a=(e.position,e.alignTextRight),r=e.backgroundColour,o=e.img,i=e.imgAlign,c=e.imgWidth,l=e.imgHeight,s=a?"right":"left",p=o,m=c?"".concat(c,"px"):null,h=l?"".concat(l,"px"):null,d=this.convertToHtml(n,p);return u.a.createElement(J,{centerTitle:t,textAlignment:s,backgroundColour:r,imgAlign:i,imgWidth:m,imgHeight:h},u.a.createElement("div",{className:"mainText"},d))}}]),n}(s.Component),J=h.c.div(Y(),function(e){return e.backgroundColour||"#FFFFFF"},function(e){return e.textAlignment},function(e){return e.imgHeight||"135px"},function(e){return e.imgWidth||"200px"},function(e){return e.imgAlign||"left"},function(e){return e.centerTitle?"center":e.textAlignment}),_=N,q=t(437),K=t.n(q),Q=t(440),V=t(14),X=t(119),Z=t.n(X),$=t(376),ee=t(458),ne=t(378),te=t(107);function ae(){var e=Object(a.a)(["\n  padding: 40px 10%;\n"]);return ae=function(){return e},e}var re=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(o)))).state={name:"",email:"",message:"",successEmail:"",errorEmail:"",disableButton:!1,spinner:!1},t.handlechange=function(e){var n;t.setState((n={},Object(V.a)(n,e.target.name,e.target.value),Object(V.a)(n,"disableButton",!1),n))},t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"handleSubmit",value:function(){var e=Object(Q.a)(K.a.mark(function e(n){var t,a,r,o,i;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t=this.state,a=t.name,r=t.email,o=t.message,(i=this.props.pluginOptions).contactUsEmail){e.next=5;break}return e.abrupt("return",alert("problem with website email configuration"));case 5:return this.setState({spinner:!0}),e.prev=6,e.next=9,Z.a.post("/api/mailer",{name:a,email:r,message:o,emailTo:i.contactUsEmail});case 9:200===e.sent.status?this.setState({successEmail:"Your message was sent successfully",disableButton:!0,spinner:!1}):this.setState({errorEmail:"There was an issue sending your email try again later",disableButton:!1,spinner:!1}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(6),console.log(e.t0),this.setState({errorEmail:"There was an issue sending your email",disableButton:!1,spinner:!1});case 17:case"end":return e.stop()}},e,this,[[6,13]])}));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.successEmail,t=e.errorEmail,a=e.spinner,r=e.disableButton;return u.a.createElement(oe,null,u.a.createElement("h1",null,"Contact Us"),u.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},u.a.createElement($.a,{inputtype:"input",label:"Name",name:"name",onChange:this.handlechange}),u.a.createElement($.a,{inputtype:"input",type:"email",label:"Email",name:"email",onChange:this.handlechange}),u.a.createElement($.a,{inputtype:"textarea",label:"Message",name:"message",onChange:this.handlechange}),u.a.createElement(te.a,null,u.a.createElement(g.a,{type:"submit",disabled:r},"Send"),a&&u.a.createElement(ne.a,null))),n&&u.a.createElement(ee.a,{message:n,success:!0}),t&&u.a.createElement(ee.a,{message:t,error:!0}))}}]),n}(s.Component),oe=h.c.div(ae()),ie=re,ce=t(772),le=t.n(ce),se=t(848),ue=t.n(se);function pe(){var e=Object(a.a)(["\n    padding: 3% 10%;\n"]);return pe=function(){return e},e}t(849);var me=le.a.momentLocalizer(ue.a),he=h.c.div(pe()),de=function(e){return u.a.createElement(he,null,u.a.createElement(le.a,{style:{height:"420px"},localizer:me,events:[],startAccessor:"start",endAccessor:"end"}))};function ge(){var e=Object(a.a)(["\n  position: absolute;\n  width: 30%;\n  height: 55%;\n  z-index: 10;\n  background-color: transparent;\n"]);return ge=function(){return e},e}function be(){var e=Object(a.a)(["\n  margin-top: ",";\n  padding-top: ",";\n"]);return be=function(){return e},e}var fe=function(e){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){console.log("dashboard props",this.props);var e=this.props,n=e.pageInfo,t=e.plugins,a=e.overlayBlocker;if(!n)return u.a.createElement("div",null," loading...");if(!n.content)return u.a.createElement("div",null,"No page content available");var r=this.props.pageInfo.content,o=r.topBanner,i=r.topBannerHalfwidth,c=r.topBannerImgSize,l=r.topBannerHWbackImg,s=r.topBannerHWBackColour,p=r.topBannerTxtRightSide,m=r.topBannerTxtLightTheme,h=r.topBannerLogo,d=r.topBannerfade,g=r.topBannerTitle,b=r.topBannerSubtitle,f=r.topBannerDescription,v=r.topBannerBtnText,x=r.topBannerLink,k=r.midBanner,E=r.midBannerHalfwidth,y=r.midBannerImgSize,C=r.midBannerHWbackImg,w=r.midBannerHWBackColour,j=r.midBannerTxtRightSide,B=r.midBannerTxtLightTheme,T=r.midBannerLogo,L=r.midBannerfade,S=r.midBannerTitle,D=r.midBannerSubtitle,I=r.midBannerDescription,H=r.midBannerBtnText,A=r.midBannerLink,P=r.mainText,F=r.mainTextPosition,G={img:o,halfwidth:i,hwBannerImgSize:c,hwBannerBackGroundImg:l,backGroundColour:s,textRightSide:p,lightTheme:m,isLogo:h,fadeContent:d,title:g,subTitle:b,description:f,btnText:v,btnLink:x},z={img:k,halfwidth:E,hwBannerImgSize:y,hwBannerBackGroundImg:C,backGroundColour:w,textRightSide:j,lightTheme:B,isLogo:T,fadeContent:L,title:S,subTitle:D,description:I,btnText:H,btnLink:A},M={mainText:P,position:F,centerTitle:r.mainTextCenterTitle,alignTextRight:r.mainTextRightSide,backgroundColour:r.mainTextBackColour,img:r.mainTextImg,imgAlign:r.mainTextImgAlign,imgWidth:r.mainTextImgWidth,imgHeight:r.mainTextImgHeight},U=void 0===F?"Top":F,W=null,Y=null;return t&&t.contactUs&&t.contactUs.contactUsPages&&(W=t.contactUs.contactUsPages.find(function(e){if("All Pages"===e)return!0;var t="home"===e?"/":e;return n.route===t})),t&&t.booking&&t.booking.bookingPages&&(Y=t.booking.bookingPages.find(function(e){if("All Pages"===e)return!0;var t="home"===e?"/":e;return n.route===t})),u.a.createElement(u.a.Fragment,null,a&&u.a.createElement(xe,null),u.a.createElement(ve,{transparentHeader:this.props.template.transparentHeader,topBanner:!!o},o&&u.a.createElement(u.a.Fragment,null,i?u.a.createElement(R,{bannerData:G,history:this.props.history,template:this.props.template,position:"top"}):u.a.createElement(O,{bannerData:G,history:this.props.history,template:this.props.template,position:"top"})),"Top"===U&&u.a.createElement(_,{bannerData:M}),Y&&u.a.createElement(de,{pluginOptions:t.booking}),W&&u.a.createElement(ie,{pluginOptions:t.contactUs}),k&&u.a.createElement(u.a.Fragment,null,!0===E?u.a.createElement(R,{bannerData:z,history:this.props.history,template:this.props.template,position:"mid"}):u.a.createElement(O,{bannerData:z,history:this.props.history,template:this.props.template,position:"mid"})),"Middle"===U&&u.a.createElement(_,{bannerData:M})))}}]),n}(s.Component),ve=h.c.div(be(),function(e){return e.transparentHeader?"-75px":0},function(e){return e.topBanner?0:"150px"}),xe=h.c.div(ge());n.a=Object(p.a)(Object(m.connect)(function(e){return{template:e.mainState.template,plugins:e.mainState.plugins}},null)(fe))},568:function(e,n){}}]);
//# sourceMappingURL=2.29fa4018.chunk.js.map