(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{404:function(e,t,n){"use strict";var a=n(9),r=n(0),i=n.n(r),o=n(548),l=n.n(o),s=n(116),c=n(7),u=n(409),p=n.n(u),m=n(545),d=n.n(m),h=n(26),g=n(27),b=n(29),f=n(28),v=n(30),k=n(395),x=n.n(k),y=n(536),E=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={displayColorPicker:!1,hex:"#FFFFFF",color:{r:"255",g:"255",b:"255",a:"1"}},n.handleClick=function(){n.setState({displayColorPicker:!n.state.displayColorPicker})},n.handleClose=function(){n.setState({displayColorPicker:!1})},n.handleChange=function(e){if(n.setState({color:e.rgb,hex:e.hex}),n.props.changeColour){var t=n.props.pageId,a=n.props.parentId||null,r={target:{name:n.props.name,value:e.hex}};n.props.changeColour(r,t,a)}},n}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){if(this.props.value){var e=this.props.value.replace("#",""),t={r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:1};this.setState({color:t})}}},{key:"render",value:function(){console.log("hex",this.state.hex);var e=x()({default:{color:{width:"12vw",height:"17px",borderRadius:"2px",background:"rgba(".concat(this.state.color.r,", ").concat(this.state.color.g,", ").concat(this.state.color.b,", ").concat(this.state.color.a,")")},swatch:{padding:"5px",marginTop:"6px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return i.a.createElement("div",null,i.a.createElement("div",{style:e.swatch,onClick:this.handleClick},i.a.createElement("div",{style:e.color})),this.state.displayColorPicker?i.a.createElement("div",{style:e.popover},i.a.createElement("div",{style:e.cover,onClick:this.handleClose}),i.a.createElement(y.SketchPicker,{color:this.state.color,onChange:this.handleChange,disableAlpha:!0})):null)}}]),t}(i.a.Component);function O(){var e=Object(a.a)(["\n  margin: 0 10px 15px 0;\n\n  > label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n  }\n\n  > div textarea {\n    height: 230px;\n  }\n\n  > div input,\n  div textarea,\n  div select {\n    width: 100%;\n    box-sizing: border-box;\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: white;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    box-sizing: border-box;\n    border-radius: 5px;\n    box-shadow: ",";\n\n    :focus {\n      outline: none;\n      border-color: #9ecaed;\n      box-shadow: 0 0 10px #9ecaed;\n    }\n  }\n\n  > div button {\n    opacity: 0.7;\n  }\n"]);return O=function(){return e},e}var C=c.c.div(O(),function(e){return e.errorGlow?"0 0 10px #b71c1c":"none"});t.a=function(e){var t=null,n=null;switch(e.inputtype){case"input":t=i.a.createElement("input",{name:e.name,value:e.value,onChange:e.onChange,disabled:e.disabled||!1,placeholder:e.placeholder,type:e.type||"text",readOnly:e.readOnly,ref:e.refProp,onFocus:e.onFocus});break;case"inputSelector":t=i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{name:e.name,value:e.value,onClick:e.onClick,onChange:e.onChange,readOnly:!0}),e.value&&i.a.createElement(p.a,{"aria-label":"Add",onClick:function(){return e.clearInput(e.name)}},i.a.createElement(d.a,{fontSize:"small"})));break;case"inputColourPicker":t=i.a.createElement(E,{name:e.name,value:e.value,changeColour:e.changeColour,pageId:e.pageId,parentId:e.parentId});break;case"textarea":t=i.a.createElement("textarea",{name:e.name,value:e.value,onChange:e.onChange});break;case"select":n="object"===typeof e.items?Object.keys(e.items).map(function(t,n){var a=e.items[t];return i.a.createElement("option",{key:n,value:a.title||a.value},a.title||a.value)}):e.items.map(function(e,t){return i.a.createElement("option",{key:t,value:e.title||e.value},e.title||e.value)}),t=i.a.createElement("select",{value:e.value||e.items[0],onChange:e.onSelectChange,name:e.name},n);break;case"checkbox":t=i.a.createElement(s.a,{margin:"initial"},i.a.createElement(l.a,{name:e.name,checked:e.checked,onChange:e.handleChange("checked",e.parentObj),color:"primary",value:"checked",parent:e.parent}),i.a.createElement("label",null,e.sideLabel));break;default:t=i.a.createElement("input",null)}return i.a.createElement(C,{errorGlow:e.validation},i.a.createElement("label",null,e.label),i.a.createElement(s.a,null,t))}},406:function(e,t,n){"use strict";var a=n(9),r=n(0),i=n.n(r),o=n(7),l=n(549),s=n.n(l);function c(){var e=Object(a.a)(['\n  > div {\n    height: 20px !important;\n    width: 20px !important;\n    margin: "theme.spacing.unit * 2";\n    color: ',";\n  }\n"]);return c=function(){return e},e}var u=o.c.div(c(),function(e){return e.theme.primaryBackGroundColour});t.a=function(e){return i.a.createElement(u,null,i.a.createElement(s.a,null))}},454:function(e,t,n){"use strict";var a=n(9),r=n(0),i=n.n(r);function o(){var e=Object(a.a)(["\n  margin: ",";\n  opacity: ",";\n  position:","\n"]);return o=function(){return e},e}var l=n(7).c.div(o(),function(e){return e.margin||"20px"},function(e){return e.opacity},function(e){return e.position||"initial"});t.a=function(e){var t=e.opacity||!1;return i.a.createElement(l,{margin:e.margin,opacity:t?"0.5":"1",position:e.position},e.children)}},459:function(e,t,n){"use strict";var a=n(9),r=n(0),i=n.n(r);function o(){var e=Object(a.a)(["\n  display: grid;\n  margin: ",";\n  grid-template-columns: ",";\n  grid-column-gap: ",";\n  align-items: center;\n  height: ",";\n  grid-row-gap: ",";\n\n  @media (max-width: 1024px) {\n    grid-template-columns: ",";\n  }\n\n  @media (max-width: 768px) {\n    grid-template-columns: ",";\n    margin: ",";\n  }\n"]);return o=function(){return e},e}var l=n(7).c.div(o(),function(e){return e.margin||"20px"},function(e){return e.cols},function(e){return e.colGap||"20px"},function(e){return e.height?e.height:"auto"},function(e){return e.rowGap?e.rowGap:"initial"},function(e){return e.colsLarge||e.cols},function(e){return e.colsMed||e.cols},function(e){return e.marginMed||e.margin});t.a=function(e){var t=e.cols||"50% 50%";return i.a.createElement(l,{cols:t,colsMed:e.colsMed,colsLarge:e.colsLarge,margin:e.margin,marginMed:e.marginMed,marginLarge:e.marginLarge,colGap:e.colGap,rowGap:e.rowGap,height:e.height},e.children)}},499:function(e,t,n){"use strict";var a=n(9),r=n(26),i=n(27),o=n(29),l=n(28),s=n(30),c=n(0),u=n.n(c),p=n(458),m=n(34),d=n(7),h=n(50),g=n(54);function b(){var e=Object(a.a)(["\n  height: 460px;\n  margin-top: ",";\n\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n\n  > div {\n    padding: 80px 10vw 0 10vw;\n    text-align: ",";\n    color: ",";\n\n    .banner-content {\n      margin: 0 20px;\n      animation: ",";\n    }\n  }\n"]);return b=function(){return e},e}function f(){var e=Object(a.a)(["\n  animation: ",";\n"]);return f=function(){return e},e}function v(){var e=Object(a.a)(["\n    1s "," ease-out\n  "]);return v=function(){return e},e}function k(){var e=Object(a.a)(["\n  0% {\n    opacity: 0;\n    transform: translateY(40%);\n  }\n  50% {\n    opacity: 1;\n    transform: translateY(-20%);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]);return k=function(){return e},e}var x=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!0,showLogo:!1,showBannerContent:!1},n.handleLogoLoaded=function(){n.setState({loading:!1})},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.bannerData.isLogo?(setTimeout(function(){e.setState({showLogo:!0})},500),setTimeout(function(){e.setState({showBannerContent:!0})},700)):this.setState({showBannerContent:!0})}},{key:"componentDidUpdate",value:function(e){this.props.bannerData&&this.props.bannerData.isLogo!==e.bannerData.isLogo&&this.setState({showLogo:this.props.bannerData.isLogo})}},{key:"render",value:function(){var e=this.props.bannerData,t=e.img,n=e.fadeContent,a=e.title,r=e.subTitle,i=e.description,o=e.btnText,l=e.btnLink,s=t,c=this.props,p=c.history,m=c.template.siteLogo;return console.log("full_bannerProps",this.props),u.a.createElement(C,Object.assign({style:{backgroundImage:"url(".concat(s,")")}},this.props),u.a.createElement("div",null,this.state.showLogo&&u.a.createElement(O,{fadeContent:n},u.a.createElement(h.a,{siteLogo:m,onLoad:this.handleLogoLoaded,width:"50%"})),this.state.showBannerContent&&u.a.createElement("div",{className:"banner-content"},u.a.createElement("h1",null,a),u.a.createElement("h3",null,r),u.a.createElement("p",null,i),o&&u.a.createElement(g.a,{onClick:function(){p.push(l)}},o))))}}]),t}(c.Component),y=Object(d.d)(k()),E=function(e){return Object(d.b)(v(),y)},O=d.c.div(f(),function(e){return e.fadeContent?E:"none"}),C=d.c.div(b(),function(e){return e.template.transparentHeader&&"top"===e.position?"-56px":0},function(e){return e.bannerData.textRightSide?"right":"left"},function(e){return e.bannerData.lightTheme?e.theme.bannerTextLight:e.theme.bannerTextDark},function(e){return e.bannerData.fadeContent?E:"none"}),S=x,j=n(459);function w(){var e=Object(a.a)(["\n  background-color: ",";\n  height: ",";\n\n  /* Position and center the image to scale nicely on all screens */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n\n  @media (max-width: 768px) {\n    height: 610px;\n  }\n"]);return w=function(){return e},e}function T(){var e=Object(a.a)(["\n    /* margin-top: ","; */\n    text-align: center;\n\n    > img{\n        width: auto;\n        max-width:100%;\n\n        @media (max-width: 768px) {\n            max-width:90%;\n        }\n    }\n"]);return T=function(){return e},e}function B(){var e=Object(a.a)(["\n    /* text-align: ","; */\n    color: ",";\n    margin: 0 50px;\n    animation: ",";\n    position: relative;\n    /* top: ","; */\n\n"]);return B=function(){return e},e}function L(){var e=Object(a.a)(["\n  animation: ",";\n"]);return L=function(){return e},e}function D(){var e=Object(a.a)(["\n    1s "," ease-out\n  "]);return D=function(){return e},e}function I(){var e=Object(a.a)(["\n  0% {\n    opacity: 0;\n    transform: translateY(40%);\n  }\n  50% {\n    opacity: 1;\n    transform: translateY(-20%);\n    \n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]);return I=function(){return e},e}var A=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!0,showLogo:!1,showBannerContent:!1},n.handleLogoLoaded=function(){n.setState({loading:!1})},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.bannerData.isLogo?(setTimeout(function(){e.setState({showLogo:!0})},500),setTimeout(function(){e.setState({showBannerContent:!0})},700)):this.setState({showBannerContent:!0})}},{key:"componentDidUpdate",value:function(e){this.props.bannerData&&this.props.bannerData.isLogo!==e.bannerData.isLogo&&this.setState({showLogo:this.props.bannerData.isLogo})}},{key:"render",value:function(){var e=this.props.bannerData,t=e.img,n=e.position,a=e.hwBannerBackGroundImg,r=e.backGroundColour,i=e.textRightSide,o=e.fadeContent,l=e.title,s=e.subTitle,c=e.description,p=e.btnText,m=e.btnLink,d=t,b=a,f=this.props,v=f.history,k=f.template.siteLogo,x=u.a.createElement("div",null,this.state.showLogo&&u.a.createElement(F,{fadeContent:o},u.a.createElement(h.a,{siteLogo:k,onLoad:this.handleLogoLoaded,width:"50%"})),u.a.createElement(R,this.props,u.a.createElement("h1",null,l),u.a.createElement("h3",null,s),u.a.createElement("p",null,c),p&&u.a.createElement(g.a,{onClick:function(){v.push(m)}},p)));return console.log("half_bannerProps",this.props),u.a.createElement(G,{style:{backgroundImage:"url(".concat(b,")")},background:r,transparentHeader:this.props.template.transparentHeader,position:this.props.position},u.a.createElement(j.a,{colGap:"0",margin:"0 5% 0 0",marginMed:"0",cols:"1fr 40% 40% 1fr",height:"100%",colsLarge:"0% 50% 50% 0%",colsMed:"100%"},u.a.createElement("div",null),this.state.showBannerContent&&!i&&x,u.a.createElement(M,this.props,u.a.createElement("img",{src:d,alt:"".concat(n,"-banner")})),this.state.showBannerContent&&i&&x,u.a.createElement("div",null)))}}]),t}(c.Component),P=Object(d.d)(I()),H=function(e){return Object(d.b)(D(),P)},F=d.c.div(L(),function(e){return e.fadeContent?H:"none"}),R=d.c.div(B(),function(e){return e.bannerData.textRightSide?"right":"left"},function(e){return e.bannerData.lightTheme?e.theme.bannerTextLight:e.theme.bannerTextDark},function(e){return e.bannerData.fadeContent?H:"none"},function(e){return e.bannerData.isLogo?0:"-65px"}),M=d.c.div(T(),function(e){return e.template.transparentHeader&&"top"===e.position?"-56px":0}),G=d.c.div(w(),function(e){return e.background||"initial"},function(e){return e.transparentHeader&&"top"===e.position?"475px":"400px"}),U=A,Y=n(584),q=n.n(Y);function N(){var e=Object(a.a)(["\n  padding: 8% 10%;\n  background-color: ",";\n\n  .mainText {\n    text-align: ",";\n\n    > img {\n      height: ",";\n      width: ",";\n      float: ",";\n      padding: 15px;\n    }\n\n    > h1,\n    h2,\n    h3 {\n      text-align: ",";\n      margin: 0;\n    }\n  }\n"]);return N=function(){return e},e}var _=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).convertToHtml=function(e,t){if(!e)return null;var a=e;return t&&(a=e.replace("{image}","<img src=".concat(t,' ALIGN="left" alt={').concat(n.props.position,"-maintext-image}>"))),q()(a)},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(!this.props.bannerData)return u.a.createElement("div",null);console.log("main text banner props",this.props);var e=this.props.bannerData,t=e.mainText,n=e.centerTitle,a=(e.position,e.alignTextRight),r=e.backgroundColour,i=e.img,o=e.imgAlign,l=e.imgWidth,s=e.imgHeight,c=a?"right":"left",p=i,m=l?"".concat(l,"px"):null,d=s?"".concat(s,"px"):null,h=this.convertToHtml(t,p);return u.a.createElement(z,{centerTitle:n,textAlignment:c,backgroundColour:r,imgAlign:o,imgWidth:m,imgHeight:d},u.a.createElement("div",{className:"mainText"},h))}}]),t}(c.Component),z=d.c.div(N(),function(e){return e.backgroundColour||"#FFFFFF"},function(e){return e.textAlignment},function(e){return e.imgHeight||"135px"},function(e){return e.imgWidth||"200px"},function(e){return e.imgAlign||"left"},function(e){return e.centerTitle?"center":e.textAlignment}),W=_,K=n(463),J=n.n(K),V=n(466),Q=n(11),X=n(21),Z=n(125),$=n.n(Z),ee=n(124),te=n(404),ne=n(406),ae=n(116),re=n(454);function ie(){var e=Object(a.a)(["\n  padding: 40px 10%;\n"]);return ie=function(){return e},e}var oe=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",email:"",phone:"",message:"",successEmail:"",errorEmail:"",disableButton:!1,spinner:!1,validationErrors:!1,requiredErrors:{}},n.handlechange=function(e){var t;n.setState((t={},Object(X.a)(t,e.target.name,e.target.value),Object(X.a)(t,"disableButton",!1),t))},n.validateInputs=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.email,i=t.phone,o=n.props.booking,l={name:a,email:r,phone:i};o&&(l=Object(Q.a)({},l,{date:o.date}));var s={};Object.keys(l).map(function(e){""===l[e]&&(s=Object(Q.a)({},s,Object(X.a)({},e,!0)))}),0!==Object.keys(s).length&&s.constructor===Object?n.setState({requiredErrors:s,validationErrors:"Required fields are empty, please fill in the required highlighted fields"},function(){n.props.enqueueSnackbar(n.state.validationErrors,{variant:"error"})}):n.handleSubmit()},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.booking&&this.props.booking.date!==e.booking.date){var t=this.state.requiredErrors;this.setState({requiredErrors:Object(Q.a)({},t,{date:!1})})}}},{key:"handleSubmit",value:function(){var e=Object(V.a)(J.a.mark(function e(){var t,n,a,r,i,o,l,s,c,u,p,m=this;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,n=t.name,a=t.email,r=t.phone,i=t.message,o=this.props,l=o.pluginOptions,s=o.booking,c=o.enqueueSnackbar,u=s?"/api/requestbooking":"/api/mailer",p={name:n,email:a,phone:r,message:i,emailTo:s?l.bookingEmail:l.contactUsEmail},s&&(p=Object(Q.a)({},p,{date:s.date,time:s.time,am_Pm:s.am_Pm,timeSlot:s.timeSlot,start:s.start,end:s.end,dailySessionsRemaining:s.dailySessionsRemaining})),(s||l.contactUsEmail)&&(!s||l.bookingEmail)){e.next=7;break}return e.abrupt("return",alert("problem with website email configuration"));case 7:return this.setState({spinner:!0}),e.prev=8,e.next=11,$.a.post(u,p);case 11:200===e.sent.status?this.setState({successEmail:"Your message was sent successfully",disableButton:!0,spinner:!1},function(){return c(m.state.successEmail)},{variant:"success"}):this.setState({errorEmail:"There was an issue sending your email try again later",disableButton:!1,spinner:!1},function(){return c(m.state.errorEmail)},{variant:"error"}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(8),console.log(e.t0),this.setState({errorEmail:"There was an issue sending your email",disableButton:!1,spinner:!1},function(){return c(m.state.errorEmail)},{variant:"error"});case 19:case"end":return e.stop()}},e,this,[[8,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.spinner,a=t.disableButton,r=t.requiredErrors,i=this.props,o=i.booking,l=i.refProp,s=i.pluginOptions,c=i.handlechange;return u.a.createElement(le,null,u.a.createElement("h1",null,o?"Booking Form":"Contact Us"),u.a.createElement("form",{onSubmit:this.validateInputs},o&&u.a.createElement(te.a,{inputtype:"input",refProp:l,readOnly:!0,label:"Booking date",name:"date",value:o.date,placeholder:"Select and available date on the booking calendar",validation:r.date}),o&&!s.bookingTimeSlotsAvailable&&u.a.createElement(ae.a,null,u.a.createElement(te.a,{inputtype:"input",label:"Start time request",name:"time",type:"time",value:o.time,onChange:c}),u.a.createElement(re.a,{margin:"6px 6px 6px 70px",position:"absolute"},o.am_Pm)),o&&s.bookingTimeSlotsAvailable&&u.a.createElement(te.a,{inputtype:"select",label:"Time request",name:"timeSlot",onChange:c}),u.a.createElement(te.a,{inputtype:"input",label:"Name",name:"name",onChange:this.handlechange,validation:r.name,onFocus:function(t){return e.setState({requiredErrors:Object(Q.a)({},r,Object(X.a)({},t.target.name,!1))})}}),u.a.createElement(te.a,{inputtype:"input",type:"email",label:"Email",name:"email",onChange:this.handlechange,validation:r.email,onFocus:function(t){return e.setState({requiredErrors:Object(Q.a)({},r,Object(X.a)({},t.target.name,!1))})}}),u.a.createElement(te.a,{inputtype:"input",type:"tel",label:"Contact phone number",name:"phone",onChange:this.handlechange,validation:r.phone,onFocus:function(t){return e.setState({requiredErrors:Object(Q.a)({},r,Object(X.a)({},t.target.name,!1))})}}),u.a.createElement(te.a,{inputtype:"textarea",label:"Message",name:"message",onChange:this.handlechange}),u.a.createElement(ae.a,null,u.a.createElement(g.a,{type:"submit",disabled:a},"Send"),n&&u.a.createElement(ne.a,null))))}}]),t}(c.Component),le=d.c.div(ie()),se=Object(ee.withSnackbar)(oe),ce=n(787),ue=n.n(ce),pe=n(863),me=n.n(pe);function de(){var e=Object(a.a)(["\n    padding: 3% 10%;\n"]);return de=function(){return e},e}n(864);var he=ue.a.momentLocalizer(me.a),ge=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={setupIncomplete:!1,events:[],date:"",time:"",am_Pm:"",timeSlot:"",start:"",end:"",dailySessionsRemaining:""},n.bookings=[],n.handleEvents=function(e){var t=n.props.pluginOptions,a=t.bookingTimeSlotsAvailable,r=(t.bookingTimeSlots,t.bookingSessions),i=[];e.items.map(function(e){console.log(e);var t=e.start.date||me()(e.start.dateTime).format("YYYY-MM-DD"),o=(e.start.dateTime&&me()(e.start.dateTime).format("HH:mm:ss"),e.end.date||me()(e.end.dateTime).format("YYYY-MM-DD")),l=(e.end.dateTime&&me()(e.end.dateTime).format("HH:mm:ss"),0),s=e.summary.toUpperCase().includes("BOOKING AVAILABLE"),c=e.summary.toUpperCase().includes("BOOKED OUT"),u=0,p=0,m=r;if(s?m=e.summary.toUpperCase().includes("SLOTS=")?Number(e.summary.toUpperCase().split("SLOTS=").pop()):m:(u=e.summary.toUpperCase().includes("REDUCE_SLOTS=")?Number(e.summary.toUpperCase().split("REDUCE_SLOTS=").pop()):1,p=e.summary.toUpperCase().includes("ADD_SLOTS=")?Number(e.summary.split("ADD_SLOTS=").pop()):0),a)console.log("timeslots are available");else if(i.find(function(e,n){return l=n,e.start===t})){var d=i[l].sessionCount-u+p;c&&(d=0),s&&(d=m-d,i[l]={initialSessions:Number(m)});var h=n.setEventBubble(d,Number(m));i[l]=Object(Q.a)({},i[l],{start:t,end:o,title:h[0],sessionCount:d,rgbaColor:h[1]}),console.log("bookings",i)}else{var g=Number(m)-u+p;c&&(g=0);var b=n.setEventBubble(g,Number(m));i.push({start:t,end:o,title:b[0],initialSessions:Number(m),sessionCount:g,rgbaColor:b[1]}),console.log("bookings",i)}}),n.setState({events:i})},n.setEventBubble=function(e,t){return e===t?["Available","rgba(72, 133, 237, 1)"]:e<=0?["Fully Booked","rgba(0, 0, 0, 0.3)"]:1===e?["One Remaining","rgba(219, 50, 54, 1)"]:e<=t/2?["Filling Fast","rgba(244, 194, 13, 1)"]:["Available","rgba(72, 133, 237, 1)"]},n.onEventClick=function(e){if(console.log(e),"Fully Booked"===e.title)return n.props.enqueueSnackbar("Oh no! Sorry cannot select this date, it has already been booked out",{variant:"info"});n.myRef.current.scrollIntoView({behavior:"smooth"});var t=me()(e.start).format("dddd DD-MM-YYYY");n.setState({date:t,start:e.start,end:e.end,dailySessionsRemaining:e.sessionCount})},n.handlechange=function(e){var t,a=n.state.am_Pm,r=e.target,i=r.value;if("time"===r.name)if(""===i)a="";else{var o=i.split(":");a=Number(o[0])>=0&&Number(o[0])<=11?"AM":"PM"}n.setState((t={},Object(X.a)(t,e.target.name,e.target.value),Object(X.a)(t,"disableButton",!1),Object(X.a)(t,"am_Pm",a),t))},n.onHeaderSelect=function(e){console.log(e)},n.myRef=u.a.createRef(),n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.pluginOptions,n=t.bookingApiKey,a=t.bookingCalendarID,r=t.bookingGetCalandarAdvance,i=r?Number(r.split(" ")[0]):1,o=new Date;o.setHours(0,0,0,0);var l=o.toISOString(),s=me()(o).add(i,"M").toISOString();if(!n||!a)return this.setState({setupIncomplete:!0});var c="https://www.googleapis.com/calendar/v3/calendars/".concat(a,"/events?key=").concat(n,"&timeMin=").concat(l,"&timeMax=").concat(s,"&singleEvents=true&orderBy=startTime");$.a.get(c).then(function(t){console.log("request data success",t),e.handleEvents(t.data)}).catch(function(e){console.log(e)})}},{key:"eventStyleGetter",value:function(e,t,n,a){return{style:{textAlign:"center",height:"25px",backgroundColor:e.rgbaColor,borderRadius:"5px",color:"black",border:"0px",display:"block"}}}},{key:"render",value:function(){var e=this,t=this.state,n=t.date,a=t.time,r=t.am_Pm,i=t.timeSlot,o=t.start,l=t.end,s=t.dailySessionsRemaining,c=this.props.pluginOptions;return u.a.createElement(u.a.Fragment,null,u.a.createElement(be,null,u.a.createElement(ue.a,{selectable:!0,onDrillDown:function(t){return e.onHeaderSelect(t)},onSelectEvent:function(t){return e.onEventClick(t)},style:{height:"420px"},localizer:he,events:this.state.events,views:{month:!0},eventPropGetter:this.eventStyleGetter})),u.a.createElement(se,{booking:{date:n,time:a,am_Pm:r,timeSlot:i,start:o,end:l,dailySessionsRemaining:s},handlechange:this.handlechange,refProp:this.myRef,pluginOptions:c}))}}]),t}(c.Component),be=d.c.div(de()),fe=Object(ee.withSnackbar)(ge);function ve(){var e=Object(a.a)(["\n  position: absolute;\n  width: 30%;\n  height: 55%;\n  z-index: 10;\n  background-color: transparent;\n"]);return ve=function(){return e},e}function ke(){var e=Object(a.a)(["\n  margin-top: ",";\n  padding-top: ",";\n"]);return ke=function(){return e},e}var xe=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("dashboard props",this.props);var e=this.props,t=e.pageInfo,n=e.plugins,a=e.overlayBlocker;if(!t)return u.a.createElement("div",null," loading...");if(!t.content)return u.a.createElement("div",null,"No page content available");var r=this.props.pageInfo.content,i=r.topBanner,o=r.topBannerHalfwidth,l=r.topBannerImgSize,s=r.topBannerHWbackImg,c=r.topBannerHWBackColour,p=r.topBannerTxtRightSide,m=r.topBannerTxtLightTheme,d=r.topBannerLogo,h=r.topBannerfade,g=r.topBannerTitle,b=r.topBannerSubtitle,f=r.topBannerDescription,v=r.topBannerBtnText,k=r.topBannerLink,x=r.midBanner,y=r.midBannerHalfwidth,E=r.midBannerImgSize,O=r.midBannerHWbackImg,C=r.midBannerHWBackColour,j=r.midBannerTxtRightSide,w=r.midBannerTxtLightTheme,T=r.midBannerLogo,B=r.midBannerfade,L=r.midBannerTitle,D=r.midBannerSubtitle,I=r.midBannerDescription,A=r.midBannerBtnText,P=r.midBannerLink,H=r.mainText,F=r.mainTextPosition,R={img:i,halfwidth:o,hwBannerImgSize:l,hwBannerBackGroundImg:s,backGroundColour:c,textRightSide:p,lightTheme:m,isLogo:d,fadeContent:h,title:g,subTitle:b,description:f,btnText:v,btnLink:k},M={img:x,halfwidth:y,hwBannerImgSize:E,hwBannerBackGroundImg:O,backGroundColour:C,textRightSide:j,lightTheme:w,isLogo:T,fadeContent:B,title:L,subTitle:D,description:I,btnText:A,btnLink:P},G={mainText:H,position:F,centerTitle:r.mainTextCenterTitle,alignTextRight:r.mainTextRightSide,backgroundColour:r.mainTextBackColour,img:r.mainTextImg,imgAlign:r.mainTextImgAlign,imgWidth:r.mainTextImgWidth,imgHeight:r.mainTextImgHeight},Y=void 0===F?"Top":F,q=null,N=null;return n&&n.contactUs&&n.contactUs.contactUsPages&&(q=n.contactUs.contactUsPages.find(function(e){if("All Pages"===e)return!0;var n="home"===e?"/":e;return t.route===n})),n&&n.booking&&n.booking.bookingPages&&(N=n.booking.bookingPages.find(function(e){if("All Pages"===e)return!0;var n="home"===e?"/":e;return t.route===n})),u.a.createElement(u.a.Fragment,null,a&&u.a.createElement(Ee,null),u.a.createElement(ye,{transparentHeader:this.props.template.transparentHeader,topBanner:!!i},i&&u.a.createElement(u.a.Fragment,null,o?u.a.createElement(U,{bannerData:R,history:this.props.history,template:this.props.template,position:"top"}):u.a.createElement(S,{bannerData:R,history:this.props.history,template:this.props.template,position:"top"})),"Top"===Y&&u.a.createElement(W,{bannerData:G}),N&&u.a.createElement(fe,{pluginOptions:n.booking}),q&&u.a.createElement(se,{pluginOptions:n.contactUs}),x&&u.a.createElement(u.a.Fragment,null,!0===y?u.a.createElement(U,{bannerData:M,history:this.props.history,template:this.props.template,position:"mid"}):u.a.createElement(S,{bannerData:M,history:this.props.history,template:this.props.template,position:"mid"})),"Middle"===Y&&u.a.createElement(W,{bannerData:G})))}}]),t}(c.Component),ye=d.c.div(ke(),function(e){return e.transparentHeader?"-75px":0},function(e){return e.topBanner?0:"150px"}),Ee=d.c.div(ve());t.a=Object(p.a)(Object(m.connect)(function(e){return{template:e.mainState.template,plugins:e.mainState.plugins}},null)(xe))},593:function(e,t){}}]);
//# sourceMappingURL=2.e6a96a3e.chunk.js.map