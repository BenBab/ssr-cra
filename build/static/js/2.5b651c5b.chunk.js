(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{400:function(e,t,n){"use strict";var a=n(9),r=n(0),i=n.n(r),o=n(586),l=n.n(o),c=n(116),s=n(7),u=n(407),m=n.n(u),p=n(585),d=n.n(p),h=n(26),g=n(27),b=n(30),f=n(28),v=n(29),k=n(395),E=n.n(k),x=n(557),y=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={displayColorPicker:!1,hex:"#FFFFFF",color:{r:"255",g:"255",b:"255",a:"1"}},n.handleClick=function(){n.setState({displayColorPicker:!n.state.displayColorPicker})},n.handleClose=function(){n.setState({displayColorPicker:!1})},n.handleChange=function(e){if(n.setState({color:e.rgb,hex:e.hex}),n.props.changeColour){var t=n.props.pageId,a=n.props.parentId||null,r={target:{name:n.props.name,value:e.rgb}};n.props.changeColour(r,t,a)}},n}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){if(this.props.value){var e=this.props.value,t={r:e.r,g:e.g,b:e.b,a:e.a};this.setState({color:t})}}},{key:"render",value:function(){console.log("hex",this.state.color);var e=E()({default:{color:{width:"12vw",height:"17px",borderRadius:"2px",background:"rgba(".concat(this.state.color.r,", ").concat(this.state.color.g,", ").concat(this.state.color.b,", ").concat(this.state.color.a,")")},swatch:{padding:"5px",marginTop:"6px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return i.a.createElement("div",null,i.a.createElement("div",{style:e.swatch,onClick:this.handleClick},i.a.createElement("div",{style:e.color})),this.state.displayColorPicker?i.a.createElement("div",{style:e.popover},i.a.createElement("div",{style:e.cover,onClick:this.handleClose}),i.a.createElement(x.SketchPicker,{color:this.state.color,onChange:this.handleChange})):null)}}]),t}(i.a.Component),w=n(575),O=n.n(w),S=n(495),j=n.n(S),B=n(436),C=n(578),T=n.n(C),D=n(584),I=n.n(D),L=n(582),F=n.n(L),A=n(580),P=n.n(A),H=n(581),M=n.n(H),N=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={modalOpen:!1},n.helpModal=function(){n.setState({modalOpen:!n.state.modalOpen})},n}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.helpKey,t={bookingCalendarID_Help:{tooltip:"Click the help button to learn more about how to get the calandar ID in your google calandar",modalTitle:"Google calendar ID help",modalDescription:"Documentation on how to find your google calandar ID",content:i.a.createElement(R,null)},bookingCalendarAPI_Help:{tooltip:"Click the help button to learn more about how to create the calandar API key in your google account",modalTitle:"Google calendar API key help",modalDescription:"Documentation on how to create your google calandar Api key",content:i.a.createElement(U,null)},mainText_help:{tooltip:"Click the help button to learn more about how to customise the Main Body Text",modalTitle:"Customise Main Body Text",modalDescription:"Add html tags to the text to customise the way it looks",content:i.a.createElement(q,null)}};return i.a.createElement("div",null,i.a.createElement(j.a,{title:t[e].tooltip},i.a.createElement(m.a,{"aria-label":"Help",onClick:this.helpModal},i.a.createElement(O.a,null))),i.a.createElement(B.a,{open:this.state.modalOpen,title:t[e].modalTitle,description:t[e].modalDescription,handleClose:this.helpModal},t[e].content))}}]),t}(r.Component),R=function(){return i.a.createElement("div",{className:"fullwidth"},i.a.createElement("iframe",{src:"https://docs.simplecalendar.io/make-google-calendar-public/",style:{width:"100%",height:"700px"}}))},U=function(){return i.a.createElement("div",{className:"fullwidth"},i.a.createElement("iframe",{src:"https://docs.simplecalendar.io/google-api-key/",style:{width:"100%",height:"700px"}}))},q=function(){return i.a.createElement("div",{className:"fullwidth"},i.a.createElement(T.a,null,i.a.createElement(P.a,null,i.a.createElement(M.a,null,i.a.createElement(F.a,null,"Functionality"),i.a.createElement(F.a,null,"Example"),i.a.createElement(F.a,null,"Result"))),i.a.createElement(I.a,null,i.a.createElement(M.a,null,i.a.createElement(F.a,null,i.a.createElement("b",null,"Bold Text")),i.a.createElement(F.a,null,"<b>The b tags</b> will make the text bold"),i.a.createElement(F.a,null,i.a.createElement("b",null,"The b tags")," make the text bold")),i.a.createElement(M.a,null,i.a.createElement(F.a,null,i.a.createElement("b",null,"Italics Text")),i.a.createElement(F.a,null,"<i>The b tags</i> will look italics. <b><i>You can also combine the tags</i></b>"),i.a.createElement(F.a,null,i.a.createElement("i",null,"The b tags")," will look italics. ",i.a.createElement("b",null,i.a.createElement("i",null,"You can also combine the tags")))))))},_=N;function z(){var e=Object(a.a)(["\n  margin: 0 10px 15px 0;\n\n  .label {\n    font-weight: bold;\n    display: block;\n    margin: 8px 0;\n  }\n\n  > div textarea {\n    height: 230px;\n  }\n\n  > div input,\n  div textarea,\n  div select {\n    width: 100%;\n    box-sizing: border-box;\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: white;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    box-sizing: border-box;\n    border-radius: 5px;\n    box-shadow: ",";\n    margin: ",";\n\n    :focus {\n      outline: none;\n      border-color: #9ecaed;\n      box-shadow: 0 0 10px #9ecaed;\n    }\n\n    @media(max-width: 500px){\n      margin: auto;\n    }\n  }\n\n  > div button {\n    opacity: 0.7;\n  }\n\n"]);return z=function(){return e},e}var G=s.b.div(z(),function(e){return e.errorGlow?"0 0 10px #b71c1c":"none"},function(e){return e.margin||"auto"});t.a=function(e){var t=null,n=null;switch(e.inputtype){case"input":t=i.a.createElement("input",{name:e.name,value:e.value,onChange:e.onChange,disabled:e.disabled||!1,placeholder:e.placeholder,type:e.type||"text",readOnly:e.readOnly,ref:e.refProp,onFocus:e.onFocus,min:e.min,max:e.max,margin:e.margin});break;case"inputSelector":t=i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{name:e.name,value:e.value,onClick:e.onClick,onChange:e.onChange,readOnly:!0}),e.value&&i.a.createElement(m.a,{"aria-label":"Add",onClick:function(){return e.clearInput(e.name)}},i.a.createElement(d.a,{fontSize:"small"})));break;case"inputColourPicker":t=i.a.createElement(y,{name:e.name,value:e.value,changeColour:e.changeColour,pageId:e.pageId,parentId:e.parentId});break;case"textarea":t=i.a.createElement("textarea",{name:e.name,value:e.value,onChange:e.onChange});break;case"select":n="object"===typeof e.items?Object.keys(e.items).map(function(t,n){var a=e.items[t];return i.a.createElement("option",{key:n,value:a.title||a.value},a.title||a.value)}):e.items.map(function(e,t){return i.a.createElement("option",{key:t,value:e.title||e.value},e.title||e.value)}),t=i.a.createElement("select",{value:e.value||e.items[0],onChange:e.onChange,name:e.name},n);break;case"checkbox":t=i.a.createElement(c.a,{margin:"initial"},i.a.createElement(l.a,{name:e.name,checked:e.checked,onChange:e.handleChange("checked",e.parentObj),color:"primary",value:"checked",parent:e.parent}),i.a.createElement("label",null,e.sideLabel));break;default:t=i.a.createElement("input",null)}return i.a.createElement(G,{errorGlow:e.validation,margin:e.margin},i.a.createElement(c.a,null,i.a.createElement("label",{className:"label"},e.label),e.helpKey&&i.a.createElement(_,{helpKey:e.helpKey})),i.a.createElement(c.a,null,t))}},403:function(e,t,n){"use strict";var a=n(9),r=n(0),i=n.n(r),o=n(7),l=n(587),c=n.n(l);function s(){var e=Object(a.a)(["\n  > div {\n    padding: ",";\n    height: ",";  \n    width: ",';  \n    margin: "theme.spacing.unit * 2";\n    color: ',";\n  }\n"]);return s=function(){return e},e}var u=o.b.div(s(),function(e){return e.large?"400px 50%":"auto"},function(e){return e.large?"100px !important":"20px !important"},function(e){return e.large?"100px !important":"20px !important"},function(e){return e.theme.primaryBackGroundColour});t.a=function(e){return i.a.createElement(u,{large:e.large},i.a.createElement(c.a,null))}},423:function(e,t,n){"use strict";var a=n(9),r=n(0),i=n.n(r);function o(){var e=Object(a.a)(["\n  margin: ",";\n  opacity: ",";\n  position:","\n"]);return o=function(){return e},e}var l=n(7).b.div(o(),function(e){return e.margin||"20px"},function(e){return e.opacity},function(e){return e.position||"initial"});t.a=function(e){var t=e.opacity||!1;return i.a.createElement(l,{margin:e.margin,opacity:t?"0.5":"1",position:e.position},e.children)}},425:function(e,t,n){"use strict";var a=n(9),r=n(0),i=n.n(r);function o(){var e=Object(a.a)(["\n  display: grid;\n  width: ",";\n  margin: ",";\n  grid-template-columns: ",";\n  grid-column-gap: ",";\n  align-items: center;\n  height: ",";\n  grid-row-gap: ",";\n\n  @media (max-width: 1024px) {\n    grid-template-columns: ",";\n  }\n\n  @media (max-width: 768px) {\n    grid-template-columns: ",";\n    margin: ",";\n  }\n\n  @media (max-width: 500px) {\n    grid-template-columns: ",";\n    margin: ",";\n  }\n"]);return o=function(){return e},e}var l=n(7).b.div(o(),function(e){return e.width||"auto"},function(e){return e.margin||"20px"},function(e){return e.cols},function(e){return e.colGap||"20px"},function(e){return e.height?e.height:"auto"},function(e){return e.rowGap?e.rowGap:"initial"},function(e){return e.colsLarge||e.cols},function(e){return e.colsMed||e.cols},function(e){return e.marginMed||e.margin},function(e){return e.colsSmall||e.cols},function(e){return e.marginSmall||e.margin});t.a=function(e){var t=e.cols||"50% 50%",n=e.colsSmall||e.colsMed,a=e.marginSmall||e.marginMed;return i.a.createElement(l,{cols:t,colsSmall:n,colsMed:e.colsMed,colsLarge:e.colsLarge,margin:e.margin,marginSmall:a,marginMed:e.marginMed,marginLarge:e.marginLarge,colGap:e.colGap,rowGap:e.rowGap,height:e.height,width:e.width},e.children)}},436:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(566),o=n.n(i),l=n(573),c=n.n(l),s=n(574),u=n.n(s),m=n(572),p=n.n(m);t.a=function(e){var t=!e.fullWidth||e.fullWidth,n=e.maxWidth?e.maxWidth:"lg";return r.a.createElement("div",null,r.a.createElement(o.a,{open:e.open,onClose:e.handleClose,"aria-labelledby":"form-dialog-title",fullWidth:t,maxWidth:n},r.a.createElement(p.a,{id:"form-dialog-title"},e.title),r.a.createElement(c.a,null,r.a.createElement(u.a,null,e.description),r.a.createElement("br",null),r.a.createElement("br",null),e.children)))}},511:function(e,t,n){"use strict";var a=n(9),r=n(13),i=n(11),o=n(26),l=n(27),c=n(30),s=n(28),u=n(29),m=n(0),p=n.n(m),d=n(123),h=n(34),g=n(7),b=n(620),f=n(52),v=n(40);function k(){var e=Object(a.a)(["\n  height: 460px;\n  box-shadow: ",";\n  margin-top: ",";\n\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n\n  > div {\n    padding: 80px 10vw 0 10vw;\n    \n    color: ",";\n\n\n    .banner-content {\n      margin: 0 20px;\n    }\n  }\n"]);return k=function(){return e},e}function E(){var e=Object(a.a)(["\n  ","\n  padding: 0 30px;\n"]);return E=function(){return e},e}function x(){var e=Object(a.a)(["\n  transform: ",";\n"]);return x=function(){return e},e}function y(){var e=Object(a.a)(["\n  padding: 20px;\n  width: 50%;\n  position: relative;\n  \n  ","\n\n  @media (max-width: 768px) {\n      width: 68%;\n  }\n\n  @media (max-width: 500px) {\n      width: 85%;\n  }\n"]);return y=function(){return e},e}var w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={showBannerContent:!0,isVisible:!1},n.adminShowFadeEffect=function(){setTimeout(function(){n.setState({isVisible:!0})},300)},n.handleLogoLoaded=function(){},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({isVisible:!0})}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.bannerData&&this.props.bannerData.Bannerfade!==e.bannerData.Bannerfade&&this.setState({isVisible:!1},function(){return t.adminShowFadeEffect()})}},{key:"render",value:function(){var e=this.props.bannerData,t=e.Banner,n=e.Banner3D,a=e.Bannerfade,r=e.BannerTxtRightSide,i=e.BannerTitle,o=e.BannerSubtitle,l=e.BannerDescription,c=e.BannerBtnText,s=e.BannerLink,u=e.BannerTextBkgrnd,m=e.BannerTextBkgrndRounded,d=e.BannerTextBkgrndAngled,h=e.BannerTextBkgrndColor,g=e.BannerLogo,b=t,k=this.props,E=k.history,x=k.template.siteLogo,y="rgba(255,255,255,1)";if(h){var w=h.r,C=h.g,T=h.b,D=h.a;y="rgba(".concat(w,", ").concat(C,", ").concat(T,", ").concat(D,")")}var I=u?y:"transparent",L=0;d&&(L=Number(d)>=0?"-"+d:d.replace("-",""));var F=d?"skewX(".concat(d,"deg)"):"skewX(0deg)",A=d?"skewX(".concat(L,"deg)"):"skewX(0deg)",P=m?"".concat(m,"%"):"0",H=a?50:0,M=a?0:1;return console.log("full_bannerProps",this.props),p.a.createElement(B,Object.assign({style:{backgroundImage:"url(".concat(b,")")}},this.props,{Banner3D:n}),p.a.createElement("div",null,p.a.createElement(S,{skewFwd:F},p.a.createElement(O,{isTextBackground:I,roundedEdges:P,pose:this.state.isVisible?"enter":"exit",BannerTxtRightSide:r,yLocation:H,opacity:M},p.a.createElement(j,{skewBack:A},g&&p.a.createElement(f.a,{siteLogo:x,onLoad:this.handleLogoLoaded,width:"50%"}),p.a.createElement("div",{className:"banner-content"},p.a.createElement("h1",null,i),p.a.createElement("h3",null,o),p.a.createElement("p",null,l),c&&p.a.createElement(v.a,{onClick:function(){E.push(s)}},c)))))))}}]),t}(m.Component),O=Object(g.b)(b.a.div({enter:{y:0,opacity:1,delay:1e3,transition:{y:{type:"spring",stiffness:100},default:{duration:500}}},exit:{y:function(e){return e.yLocation},opacity:function(e){return e.opacity},transition:{duration:150}}}))(y(),function(e){return"\n    background-color: ".concat(e.isTextBackground,";\n    border-radius: ").concat(e.roundedEdges,";\n    float: ").concat(e.BannerTxtRightSide?"right":"left",";\n    text-align: ").concat(e.BannerTxtRightSide?"right":"left",";\n  ")}),S=g.b.div(x(),function(e){return e.skewFwd}),j=g.b.div(E(),function(e){return"\n    transform: ".concat(e.skewBack,";\n  ")}),B=g.b.div(k(),function(e){return e.Banner3D?"5px 5px 15px #424242":"none"},function(e){return e.template.transparentHeader&&"top"===e.position?"-56px":0},function(e){return e.bannerData.BannerTxtLightTheme?e.theme.bannerTextLight:e.theme.bannerTextDark}),C=w,T=n(425);function D(){var e=Object(a.a)(["\n  background-color: ",";\n  box-shadow: ",";\n  height: ",";\n\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n\n  @media (max-width: 768px) {\n    height: 610px;\n    text-align: center;\n  }\n"]);return D=function(){return e},e}function I(){var e=Object(a.a)(["\n  text-align: center;\n\n  > img {\n    width: ",";\n    border-radius: ",";\n    box-shadow: ",";\n    /* max-width:100%; */\n\n    @media (max-width: 1024px) {\n      max-width: 80%;\n    }\n\n    @media (max-width: 768px) {\n      max-width: 90%;\n    }\n  }\n"]);return I=function(){return e},e}function L(){var e=Object(a.a)(["\n  color: ",";\n\n  padding: 30px;\n  position: relative;\n"]);return L=function(){return e},e}function F(){var e=Object(a.a)(["\n  "," \n  \n"]);return F=function(){return e},e}function A(){var e=Object(a.a)(["\n  transform: ",";\n"]);return A=function(){return e},e}function P(){var e=Object(a.a)(["\n  \n\n  ","\n"]);return P=function(){return e},e}var H=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,showLogo:!1,showBannerContent:!1,isVisible:!1},n.adminShowFadeEffect=function(){setTimeout(function(){n.setState({isVisible:!0})},300)},n.handleLogoLoaded=function(){},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({isVisible:!0})}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.bannerData&&this.props.bannerData.Bannerfade!==e.bannerData.Bannerfade&&this.setState({isVisible:!1},function(){return t.adminShowFadeEffect()})}},{key:"render",value:function(){var e=this.props.bannerData,t=e.Banner,n=e.Banner3D,a=e.position,r=e.BannerHWbackImg,i=e.BannerHWBackColour,o=e.BannerImgSize,l=e.BannerImgRoundHW,c=e.BannerImg3dHW,s=e.BannerTxtRightSide,u=e.Bannerfade,m=e.BannerTitle,d=e.BannerSubtitle,h=e.BannerDescription,g=e.BannerBtnText,b=e.BannerLink,k=e.BannerTextBkgrnd,E=e.BannerTextBkgrndRounded,x=e.BannerTextBkgrndAngled,y=e.BannerTextBkgrndColor,w=e.BannerLogo,O=t,S=r,j=this.props,B=j.history,C=j.template.siteLogo,D="#FFFFFF";if(i){var I=i.r,L=i.g,F=i.b,A=i.a;D="rgba(".concat(I,", ").concat(L,", ").concat(F,", ").concat(A,")")}var P="rgba(255,255,255,1)";if(y){var H=y.r,z=y.g,G=y.b,W=y.a;P="rgba(".concat(H,", ").concat(z,", ").concat(G,", ").concat(W,")")}var Y=k?P:"transparent",V=0;x&&(V=Number(x)>=0?"-"+x:x.replace("-",""));var X=x?"skewX(".concat(x,"deg)"):"skewX(0deg)",K=x?"skewX(".concat(V,"deg)"):"skewX(0deg)",J=E?"".concat(E,"%"):"0",Q=u?50:0,Z=u?0:1,$=o?390+Number(o)+"px":"390px",ee=l?l+"%":"0",te=p.a.createElement("div",null,p.a.createElement(N,{skewFwd:X},p.a.createElement(M,{isTextBackground:Y,roundedEdges:J,pose:this.state.isVisible?"enter":"exit",yLocation:Q,opacity:Z},p.a.createElement(R,{skewBack:K},w&&p.a.createElement("div",{fadeContent:u},p.a.createElement(f.a,{siteLogo:C,onLoad:this.handleLogoLoaded,width:"50%"})),p.a.createElement(U,this.props,p.a.createElement("h1",null,m),p.a.createElement("h3",null,d),p.a.createElement("p",null,h),g&&p.a.createElement(v.a,{onClick:function(){B.push(b)}},g))))));return console.log("half_bannerProps",this.props),p.a.createElement(_,{style:{backgroundImage:"url(".concat(S,")")},background:D,transparentHeader:this.props.template.transparentHeader,position:this.props.position,Banner3D:n},p.a.createElement(T.a,{colGap:"10px",margin:"0 5% 0 0",marginMed:"0",cols:"1fr 40% 40% 1fr",height:"100%",colsLarge:"0% 50% 50% 0%",colsMed:"100%",width:"100%"},p.a.createElement("div",null),!s&&te,p.a.createElement(q,{imgWidth:$,imgRounded:ee,BannerImg3dHW:c},p.a.createElement("img",{src:O,alt:"".concat(a,"-banner")})),s&&te,p.a.createElement("div",null)))}}]),t}(m.Component),M=Object(g.b)(b.a.div({enter:{y:0,opacity:1,delay:1e3,transition:{y:{type:"spring",stiffness:100},default:{duration:500}}},exit:{y:function(e){return e.yLocation},opacity:function(e){return e.opacity},transition:{duration:150}}}))(P(),function(e){return"\n    background-color: ".concat(e.isTextBackground,";\n    border-radius: ").concat(e.roundedEdges,";\n  ")}),N=g.b.div(A(),function(e){return e.skewFwd}),R=g.b.div(F(),function(e){return"\n    transform: ".concat(e.skewBack,";\n  ")}),U=g.b.div(L(),function(e){return e.bannerData.BannerTxtLightTheme?e.theme.bannerTextLight:e.theme.bannerTextDark}),q=g.b.div(I(),function(e){return e.imgWidth},function(e){return e.imgRounded},function(e){return e.BannerImg3dHW?"5px 5px 10px black":"none"}),_=g.b.div(D(),function(e){return e.background},function(e){return e.Banner3D?"5px 5px 15px #424242":"none"},function(e){return e.transparentHeader&&"top"===e.position?"475px":"400px"}),z=H,G=n(621),W=n.n(G),Y=n(660),V=n.n(Y);function X(){var e=Object(a.a)(["\n  padding: 8% 10%;\n  background-color: ",";\n\n  .mainText {\n    text-align: ",";\n\n    > img {\n      height: ",";\n      width: ",";\n      float: ",";\n      padding: 15px;\n    }\n\n    > h1,\n    h2,\n    h3 {\n      text-align: ",";\n      margin: 0;\n    }\n  }\n"]);return X=function(){return e},e}var K=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).convertToHtml=function(e,t){if(!e)return null;var a=e,r=V()(a,{allowedTags:["h1","h2","h3","h4","h5","h6","img","blockquote","p","a","ul","ol","nl","li","b","i","strong","em","strike","code","hr","br","div","table","thead","caption","tbody","tr","th","td","pre"],allowedAttributes:{a:["href","name","target"],img:["src"]},selfClosing:["img","br","hr","area","base","basefont","input","link","meta"],allowedSchemes:["http","https","ftp","mailto"],allowedSchemesByTag:{}});return t&&(r=r.replace("{image}","<img src=".concat(t,' ALIGN="left" alt={').concat(n.props.position,"-maintext-image}>"))),W()(r)},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(!this.props.bannerData)return p.a.createElement("div",null);console.log("main text banner props",this.props);var e=this.props.bannerData,t=e.mainText,n=e.mainTextCenterTitle,a=(e.position,e.mainTextRightSide),r=e.mainTextBackColour,i=e.mainTextImg,o=e.mainTextImgAlign,l=e.mainTextImgWidth,c=e.mainTextImgHeight,s=a?"right":"left",u=i,m=l?"".concat(l,"px"):null,d=c?"".concat(c,"px"):null,h=this.convertToHtml(t,u),g="#FFFFFF";if(r){var b=r.r,f=r.g,v=r.b,k=r.a;g="rgba(".concat(b,", ").concat(f,", ").concat(v,", ").concat(k,")")}return p.a.createElement(J,{centerTitle:n,textAlignment:s,backgroundColour:g,imgAlign:o,imgWidth:m,imgHeight:d},p.a.createElement("div",{className:"mainText"},h))}}]),t}(m.Component),J=g.b.div(X(),function(e){return e.backgroundColour},function(e){return e.textAlignment},function(e){return e.imgHeight||"135px"},function(e){return e.imgWidth||"200px"},function(e){return e.imgAlign||"left"},function(e){return e.centerTitle?"center":e.textAlignment}),Q=K,Z=n(474),$=n.n(Z),ee=n(477),te=n(126),ne=n.n(te),ae=n(125),re=n(400),ie=n(403),oe=n(116),le=n(423);function ce(){var e=Object(a.a)(["\n  padding: 40px 10%;\n"]);return ce=function(){return e},e}var se=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={subject:"",name:"",email:"",phone:"",message:"",successEmail:"",errorEmail:"",disableButton:!1,spinner:!1,validationErrors:!1,requiredErrors:{}},n.handlechange=function(e){var t;n.setState((t={},Object(r.a)(t,e.target.name,e.target.value),Object(r.a)(t,"disableButton",!1),t))},n.validateInputs=function(e){e.preventDefault();var t=n.state,a=t.subject,o=t.name,l=t.email,c=t.phone,s=n.props.booking,u={subject:a,name:o,email:l,phone:c};s&&(u=Object(i.a)({},u,{date:s.date,time:s.time}));var m={};Object.keys(u).map(function(e){""===u[e]&&(m=Object(i.a)({},m,Object(r.a)({},e,!0)))}),0!==Object.keys(m).length&&m.constructor===Object?n.setState({requiredErrors:m,validationErrors:"Required fields are empty, please fill in the required highlighted fields"},function(){n.props.enqueueSnackbar(n.state.validationErrors,{variant:"error"})}):n.handleSubmit()},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.booking&&this.props.booking.date!==e.booking.date){var t=this.state.requiredErrors;this.setState({requiredErrors:Object(i.a)({},t,{date:!1})})}}},{key:"handleSubmit",value:function(){var e=Object(ee.a)($.a.mark(function e(){var t,n,a,r,o,l,c,s,u,m,p,d,h=this;return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,n=t.subject,a=t.name,r=t.email,o=t.phone,l=t.message,c=this.props,s=c.pluginOptions,u=c.booking,m=c.enqueueSnackbar,p=u?"/api/requestbooking":"/api/mailer",d={subject:n,name:a,email:r,phone:o,message:l,emailTo:u?s.bookingEmail:s.contactUsEmail},u&&(d=Object(i.a)({},d,{date:u.date,time:u.time,am_Pm:u.am_Pm,timeSlot:u.timeSlot,start:u.start,end:u.end,dailySessionsRemaining:u.dailySessionsRemaining,initialSessions:u.initialSessions})),(u||s.contactUsEmail)&&(!u||s.bookingEmail)){e.next=7;break}return e.abrupt("return",alert("problem with website email configuration"));case 7:return this.setState({spinner:!0}),e.prev=8,e.next=11,ne.a.post(p,d);case 11:200===e.sent.status?this.setState({successEmail:"Your message was sent successfully",disableButton:!0,spinner:!1},function(){return m(h.state.successEmail)},{variant:"success"}):this.setState({errorEmail:"There was an issue sending your email try again later",disableButton:!1,spinner:!1},function(){return m(h.state.errorEmail)},{variant:"error"}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(8),console.log(e.t0),this.setState({errorEmail:"There was an issue sending your email",disableButton:!1,spinner:!1},function(){return m(h.state.errorEmail)},{variant:"error"});case 19:case"end":return e.stop()}},e,this,[[8,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.spinner,a=t.disableButton,o=t.requiredErrors,l=(t.subject,this.props),c=l.booking,s=l.refProp,u=l.pluginOptions,m=l.handlechange,d=[];function h(e){(d=e.split(",").map(function(e){return{value:e.trim()}})).unshift({value:""})}return c&&u.bookingSubjectStrict&&h(u.bookingSubjectSelections),!c&&u.contactUsSubjectStrict&&h(u.contactUsSubjectSelections),p.a.createElement(ue,null,p.a.createElement("h1",null,c?"Booking Form":"Contact Us"),p.a.createElement("form",{onSubmit:this.validateInputs},c&&p.a.createElement(re.a,{inputtype:"input",refProp:s,readOnly:!0,label:"Booking date",name:"date",value:c.date,placeholder:"Select and available date on the booking calendar",validation:o.date}),c&&!u.bookingTimeSlotsAvailable&&p.a.createElement(oe.a,null,p.a.createElement(re.a,{inputtype:"input",label:"Start time request",name:"time",type:"time",value:c.time,onChange:m,validation:o.time,onFocus:function(t){return e.setState({requiredErrors:Object(i.a)({},o,Object(r.a)({},t.target.name,!1))})}}),p.a.createElement(le.a,{margin:"6px 6px 6px 70px",position:"absolute"},c.am_Pm)),c&&u.bookingTimeSlotsAvailable&&p.a.createElement(re.a,{inputtype:"select",label:"Time request",name:"timeSlot",onChange:m}),p.a.createElement(re.a,{inputtype:c&&u.bookingSubjectStrict||!c&&u.contactUsSubjectStrict?"select":"input",label:"Subject",name:"subject",value:this.state.subject,items:d,onChange:this.handlechange,validation:o.subject,onFocus:function(t){return e.setState({requiredErrors:Object(i.a)({},o,Object(r.a)({},t.target.subject,!1))})}}),p.a.createElement(re.a,{inputtype:"input",label:"Name",name:"name",onChange:this.handlechange,validation:o.name,onFocus:function(t){return e.setState({requiredErrors:Object(i.a)({},o,Object(r.a)({},t.target.name,!1))})}}),p.a.createElement(re.a,{inputtype:"input",type:"email",label:"Email",name:"email",onChange:this.handlechange,validation:o.email,onFocus:function(t){return e.setState({requiredErrors:Object(i.a)({},o,Object(r.a)({},t.target.name,!1))})}}),p.a.createElement(re.a,{inputtype:"input",type:"tel",label:"Contact phone number",name:"phone",onChange:this.handlechange,validation:o.phone,onFocus:function(t){return e.setState({requiredErrors:Object(i.a)({},o,Object(r.a)({},t.target.name,!1))})}}),p.a.createElement(re.a,{inputtype:"textarea",label:"Message",name:"message",onChange:this.handlechange}),p.a.createElement(oe.a,null,p.a.createElement(v.a,{type:"submit",disabled:a},"Send"),n&&p.a.createElement(ie.a,null))))}}]),t}(m.Component),ue=g.b.div(ce()),me=Object(ae.withSnackbar)(se),pe=n(882),de=n.n(pe),he=n(951),ge=n.n(he);function be(){var e=Object(a.a)(["\n    padding: 3% 10%;\n"]);return be=function(){return e},e}n(954);var fe=de.a.momentLocalizer(ge.a),ve=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={setupIncomplete:!1,events:[],date:"",time:"",am_Pm:"",timeSlot:"",start:"",end:"",dailySessionsRemaining:"",initialSessions:""},n.bookings=[],n.handleEvents=function(e){var t=n.props.pluginOptions,a=t.bookingTimeSlotsAvailable,r=(t.bookingTimeSlots,t.bookingSessions),o=[];e.items.map(function(e){console.log(e);var t=e.start.date||ge()(e.start.dateTime).tz("Pacific/Auckland").format("YYYY-MM-DD"),l=(e.start.dateTime&&ge()(e.start.dateTime).tz("Pacific/Auckland").format("HH:mm:ss"),e.end.date||ge()(e.end.dateTime).tz("Pacific/Auckland").format("YYYY-MM-DD")),c=(e.end.dateTime&&ge()(e.end.dateTime).tz("Pacific/Auckland").format("HH:mm:ss"),0),s=e.summary.toUpperCase().includes("BOOKING AVAILABLE"),u=e.summary.toUpperCase().includes("BOOKED OUT"),m=0,p=0,d=r,h=!1;if(s?d=(h=e.summary.toUpperCase().includes("SLOTS="))?Number(e.summary.toUpperCase().split("SLOTS=").pop()):d:(m=e.summary.toUpperCase().includes("REDUCE_SLOTS=")?Number(e.summary.toUpperCase().split("REDUCE_SLOTS=").pop()):1,p=e.summary.toUpperCase().includes("ADD_SLOTS=")?Number(e.summary.split("ADD_SLOTS=").pop()):0),a)console.log("timeslots are available");else if(o.find(function(e,n){return c=n,e.start===t})){var g=o[c].sessionCount-m+p;s&&(h&&(g=Number(d)-Number(r)+Number(g)),o[c]={initialSessions:Number(d)}),u&&(g=0);var b=n.setEventBubble(g,Number(d));console.log("eventBubble",b),o[c]=Object(i.a)({},o[c],{start:t,end:l,title:b[0],sessionCount:g,rgbaColor:b[1]}),console.log("bookings",o)}else{var f=Number(d)-m+p;u&&(f=0);var v=n.setEventBubble(f,Number(d));o.push({start:t,end:l,title:v[0],initialSessions:Number(d),sessionCount:f,rgbaColor:v[1]}),console.log("bookings",o)}}),n.setState({events:o})},n.setEventBubble=function(e,t){var n=Number(t);return e===n?["Available","rgba(72, 133, 237, 1)"]:e<=0?["Fully Booked","rgba(0, 0, 0, 0.3)"]:1===e?["One Remaining","rgba(219, 50, 54, 1)"]:e<=n/2?["Filling Fast","rgba(244, 194, 13, 1)"]:["Available","rgba(72, 133, 237, 1)"]},n.onEventClick=function(e){if(console.log(e),"Fully Booked"===e.title)return n.props.enqueueSnackbar("Oh no! Sorry cannot select this date, it has already been booked out",{variant:"info"});n.myRef.current.scrollIntoView({behavior:"smooth"});var t=ge()(e.start).format("dddd DD-MM-YYYY");n.setState({date:t,start:e.start,end:e.end,dailySessionsRemaining:e.sessionCount,initialSessions:e.initialSessions})},n.handlechange=function(e){var t,a=n.state.am_Pm,i=e.target,o=i.value;if("time"===i.name)if(""===o)a="";else{var l=o.split(":");a=Number(l[0])>=0&&Number(l[0])<=11?"AM":"PM"}n.setState((t={},Object(r.a)(t,e.target.name,e.target.value),Object(r.a)(t,"disableButton",!1),Object(r.a)(t,"am_Pm",a),t))},n.onHeaderSelect=function(e){console.log(e)},n.myRef=p.a.createRef(),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.pluginOptions,n=t.bookingApiKey,a=t.bookingCalendarID,r=t.bookingGetCalandarAdvance,i=r?Number(r.split(" ")[0]):1,o=new Date;o.setHours(0,0,0,0);var l=o.toISOString(),c=ge()(o).add(i,"M").toISOString();if(!n||!a)return this.setState({setupIncomplete:!0});var s="https://www.googleapis.com/calendar/v3/calendars/".concat(a,"/events?key=").concat(n,"&timeMin=").concat(l,"&timeMax=").concat(c,"&singleEvents=true&orderBy=startTime");ne.a.get(s).then(function(t){console.log("request data success",t),e.handleEvents(t.data)}).catch(function(e){console.log(e)})}},{key:"eventStyleGetter",value:function(e,t,n,a){return{style:{textAlign:"center",height:"25px",backgroundColor:e.rgbaColor,borderRadius:"5px",color:"black",border:"0px",display:"block"}}}},{key:"render",value:function(){var e=this,t=this.state,n=t.date,a=t.time,r=t.am_Pm,i=t.timeSlot,o=t.start,l=t.end,c=t.dailySessionsRemaining,s=t.initialSessions,u=this.props.pluginOptions;return p.a.createElement(p.a.Fragment,null,p.a.createElement(ke,null,p.a.createElement(de.a,{selectable:!0,onDrillDown:function(t){return e.onHeaderSelect(t)},onSelectEvent:function(t){return e.onEventClick(t)},style:{height:"420px"},localizer:fe,events:this.state.events,views:{month:!0},eventPropGetter:this.eventStyleGetter})),p.a.createElement(me,{booking:{date:n,time:a,am_Pm:r,timeSlot:i,start:o,end:l,dailySessionsRemaining:c,initialSessions:s},handlechange:this.handlechange,refProp:this.myRef,pluginOptions:u}))}}]),t}(m.Component),ke=g.b.div(be()),Ee=Object(ae.withSnackbar)(ve),xe=n(956);n(961);function ye(){var e=Object(a.a)(["\n  color: white;\n  height: 160px;\n  \n"]);return ye=function(){return e},e}function we(){var e=Object(a.a)(["\n  .slide {\n    background-image: radial-gradient(#212121, #000) !important;\n    \n    .testimonial-container{\n      display: inline-flex;\n      align-items: center;\n      height: 100px;\n\n      .vert_Line {\n        font-size: 85px;\n        font-family: fantasy;\n       \n      }\n      .quote {\n        font-size: 85px;\n      }\n\n      p {\n        margin-left: 25px;\n        font-family: cursive;\n        font-size: 20px;\n      }\n    }\n  }\n"]);return we=function(){return e},e}var Oe=g.b.div(we()),Se=g.b.div(ye()),je=function(e){if(0===Object.keys(e.testimonials).length)return p.a.createElement("div",null);var t;return t=Object.keys(e.testimonials).filter(function(e){return e.includes("_")}).map(function(t){var n=e.testimonials[t];return p.a.createElement(Se,{key:t},p.a.createElement("blockquote",{className:"testimonial-container"},p.a.createElement("h1",{className:"vert_Line"},"|"),p.a.createElement("h1",{className:"quote"},"\u201c"),p.a.createElement("p",null,n)))}),p.a.createElement(Oe,null,p.a.createElement(xe.Carousel,{autoPlay:!0,infiniteLoop:!0,showThumbs:!1,showStatus:!1,interval:4e3},t))};function Be(){var e=Object(a.a)(["\n  position: absolute;\n  width: 30%;\n  height: ",";\n  z-index: 10;\n  background-color: transparent;\n\n  @media (max-width: 500px) {\n    width: 80%;\n  }\n"]);return Be=function(){return e},e}function Ce(){var e=Object(a.a)(["\n  margin-top: ",";\n  padding-top: ",";\n"]);return Ce=function(){return e},e}var Te=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={previewHeight:0},n.updateBlockerDimensions=function(){var e=document.getElementById(n.props.name).clientHeight;e!==n.state.previewHeight&&n.setState({previewHeight:e+"px"})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.overlayBlocker,n=e.name;t&&(this.updateBlockerDimensions(),document.getElementById(n).addEventListener("resize",this.updateBlockerDimensions))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.overlayBlocker,n=e.name;t&&document.getElementById(n).removeEventListener("resize",this.updateBlockerDimensions)}},{key:"componentDidUpdate",value:function(e){this.props.pageInfo!==e.pageInfo&&this.updateBlockerDimensions(),this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"createContentObject",value:function(e,t,n){var a={};return Object.keys(n).filter(function(e){return e.includes(t)}).map(function(t){var o=t.replace(e,"");return a=Object(i.a)({},a,Object(r.a)({},o,n[t]))}),a}},{key:"render",value:function(){console.log("dashboard props",this.props);var e=this.props,t=e.pageInfo,n=e.plugins,a=e.overlayBlocker,r=e.name;if(!t)return p.a.createElement(ie.a,{large:!0});if(!t.content)return p.a.createElement("div",null,"No page content available");var i=this.createContentObject("top","topBanner",this.props.pageInfo.content),o=this.createContentObject("mid","midBanner",this.props.pageInfo.content),l=this.createContentObject("bottom","bottomBanner",this.props.pageInfo.content),c=this.createContentObject(null,"mainText",this.props.pageInfo.content),s=this.createContentObject(null,"testimonials",this.props.pageInfo.content),u=this.props.pageInfo.content,m=u.topBanner,d=u.topBannerHalfwidth,h=u.midBanner,g=u.midBannerHalfwidth,b=u.bottomBanner,f=u.bottomBannerHalfwidth,v=u.mainTextPosition,k=u.testimonialsPosition,E=void 0===v?"Top":v,x=void 0===k?"Top":k,y=null,w=null,O=null;return n&&n.contactUs&&n.contactUs.contactUsPages&&(y=n.contactUs.contactUsPages.find(function(e){if("All Pages"===e)return!0;var n="home"===e?"/":e;return t.route===n})),n&&n.booking&&n.booking.bookingPages&&(w=n.booking.bookingPages.find(function(e){if("All Pages"===e)return!0;var n="home"===e?"/":e;return t.route===n})),n&&n.testimonials&&n.testimonials.testimonialsPages&&(O=n.testimonials.testimonialsPages.find(function(e){if("All Pages"===e)return!0;var n="home"===e?"/":e;return t.route===n})),p.a.createElement(p.a.Fragment,null,a&&p.a.createElement(Ie,{previewHeight:this.state.previewHeight}),p.a.createElement(De,{transparentHeader:this.props.template.transparentHeader,topBanner:!!m,id:r},m&&p.a.createElement(p.a.Fragment,null,d?p.a.createElement(z,{bannerData:i,history:this.props.history,template:this.props.template,position:"top"}):p.a.createElement(C,{bannerData:i,history:this.props.history,template:this.props.template,position:"top"})),"Top"===E&&p.a.createElement(Q,{bannerData:c}),w&&p.a.createElement(Ee,{pluginOptions:n.booking}),y&&p.a.createElement(me,{pluginOptions:n.contactUs}),O&&"Top"===x&&p.a.createElement(je,{testimonials:s}),h&&p.a.createElement(p.a.Fragment,null,!0===g?p.a.createElement(z,{bannerData:o,history:this.props.history,template:this.props.template,position:"mid"}):p.a.createElement(C,{bannerData:o,history:this.props.history,template:this.props.template,position:"mid"})),"Middle"===E&&p.a.createElement(Q,{bannerData:c}),O&&"Middle"===x&&p.a.createElement(je,{testimonials:s}),b&&p.a.createElement(p.a.Fragment,null,!0===f?p.a.createElement(z,{bannerData:l,history:this.props.history,template:this.props.template,position:"bottom"}):p.a.createElement(C,{bannerData:l,history:this.props.history,template:this.props.template,position:"bottom"})),"Bottom"===E&&p.a.createElement(Q,{bannerData:c}),O&&"Bottom"===x&&p.a.createElement(je,{testimonials:s})))}}]),t}(m.Component),De=g.b.div(Ce(),function(e){return e.transparentHeader?"-75px":0},function(e){return e.topBanner?0:"150px"}),Ie=g.b.div(Be(),function(e){return e.previewHeight});t.a=Object(d.a)(Object(h.connect)(function(e){return{template:e.mainState.template,plugins:e.mainState.plugins}},null)(Te))},630:function(e,t){},671:function(e,t){},672:function(e,t){},673:function(e,t){},688:function(e,t){}}]);
//# sourceMappingURL=2.5b651c5b.chunk.js.map