(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[104],{"6g58":function(n,e,t){"use strict"
var o=t("Y/W1")
var r=t.n(o)
var i=t("mX+G")
var a=t("2gWY")
var c=function(n,e){for(var t in e)l.call(e,t)&&(n[t]=e[t])
function o(){this.constructor=n}o.prototype=e.prototype
n.prototype=new o
n.__super__=e.prototype
return n},l={}.hasOwnProperty
e["a"]=function(n){c(e,n)
function e(){return e.__super__.constructor.apply(this,arguments)}e.mixin(a["a"])
e.prototype.initialize=function(){e.__super__.initialize.apply(this,arguments)
if(r.a.has(this,"url"))return delete this.url}
e.prototype.resourceName="external_tools"
e.prototype.computedAttributes=[{name:"custom_fields_string",deps:["custom_fields"]}]
e.prototype.urlRoot=function(){return"/api/v1/"+this._contextPath()+"/create_tool_with_verification"}
e.prototype.custom_fields_string=function(){var n,e
return function(){var t,o
t=this.get("custom_fields")
o=[]
for(n in t){e=t[n]
o.push(n+"="+e)}return o}.call(this).join("\n")}
e.prototype.launchUrl=function(n,e){var t,o,r,i
null==e&&(e={})
o=function(){var n
n=[]
for(t in e){i=e[t]
n.push(t+"="+i)}return n}()
r="/"+this._contextPath()+"/external_tools/"+this.id+"/resource_selection?launch_type="+n
o.length>0&&(r=r+"&"+o.join("&"))
return r}
e.prototype.assetString=function(){return"context_external_tool_"+this.id}
return e}(i["Model"])},BrAc:function(n,e,t){"use strict"
var o=t("vDqi")
var r=t.n(o)
r.a.defaults.xsrfCookieName="_csrf_token"
r.a.defaults.xsrfHeaderName="X-CSRF-Token"
const i=r.a.defaults.headers.common.Accept
r.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+i
r.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
e["a"]=r.a},ZbPE:function(n,e,t){"use strict"
t.d(e,"a",(function(){return w}))
var o=t("rePB")
var r=t("1OyB")
var i=t("vuIU")
var a=t("Ji7U")
var c=t("LK+K")
var l=t("q1tI")
var g=t.n(l)
var s=t("17x9")
var p=t.n(s)
var h=t("TSYQ")
var b=t.n(h)
var d=t("J2CL")
var u=t("KgFQ")
var _=t("jtGx")
var f=t("nAyT")
var m=t("VTBJ")
function R(n){var e=n.typography,t=n.colors,o=n.spacing
return Object(m["a"])({},e,{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,dangerColor:t.textDanger,successColor:t.textSuccess,alertColor:t.textAlert,paragraphMargin:"".concat(o.medium," 0")})}R.canvas=function(n){return{primaryColor:n["ic-brand-font-color-dark"],brandColor:n["ic-brand-primary"]}}
var y,v,k,B
var G={componentId:"enRcg",template:function(n){return"\n\n.enRcg_bGBk{font-family:".concat(n.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(n.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(n.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(n.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(n.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(n.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(n.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(n.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(n.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(n.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(n.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(n.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(n.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(n.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(n.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(n.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(n.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(n.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(n.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(n.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(n.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(n.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(n.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(n.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(n.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(n.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(n.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(n.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(n.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(n.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var w=(y=Object(d["l"])(R,G),y(v=(B=k=function(n){Object(a["a"])(t,n)
var e=Object(c["a"])(t)
function t(){Object(r["a"])(this,t)
return e.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){var n
var e=this.props,r=e.wrap,i=e.weight,a=e.fontStyle,c=e.size,l=e.lineHeight,s=e.letterSpacing,p=e.transform,h=e.color,d=e.children
var f=Object(u["a"])(t,this.props)
return g.a.createElement(f,Object.assign({},Object(_["b"])(this.props),{className:b()((n={},Object(o["a"])(n,G.root,true),Object(o["a"])(n,G[c],c),Object(o["a"])(n,G["wrap-".concat(r)],r),Object(o["a"])(n,G["weight-".concat(i)],i),Object(o["a"])(n,G["style-".concat(a)],a),Object(o["a"])(n,G["transform-".concat(p)],p),Object(o["a"])(n,G["lineHeight-".concat(l)],l),Object(o["a"])(n,G["letterSpacing-".concat(s)],s),Object(o["a"])(n,G["color-".concat(h)],h),n)),ref:this.props.elementRef}),d)}}])
t.displayName="Text"
return t}(l["Component"]),k.propTypes={as:p.a.elementType,children:p.a.node,color:f["a"].deprecatePropValues(p.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:p.a.func,fontStyle:p.a.oneOf(["italic","normal"]),letterSpacing:p.a.oneOf(["normal","condensed","expanded"]),lineHeight:p.a.oneOf(["default","fit","condensed","double"]),size:p.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:p.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:p.a.oneOf(["normal","light","bold"]),wrap:p.a.oneOf(["normal","break-word"])},k.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},B))||v)},cClk:function(n,e,t){"use strict"
t.d(e,"a",(function(){return o}))
function o(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(o,r,i){var a=n.apply(null,arguments)
if(a)return a
if(o[r]&&"function"!==typeof o[e])return new Error(["You provided a '".concat(r,"' prop without an '").concat(e,"' handler on '").concat(i,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(t,"'. Otherwise, set '").concat(e,"'.")].join(""))}}},dDTa:function(n,e,t){"use strict"
const o=()=>{const n=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return n.join("; ")}
e["a"]=o},msMH:function(n,e,t){"use strict"
t.d(e,"a",(function(){return O}))
var o=t("rePB")
var r=t("Ff2n")
var i=t("1OyB")
var a=t("vuIU")
var c=t("Ji7U")
var l=t("LK+K")
var g=t("q1tI")
var s=t.n(g)
var p=t("17x9")
var h=t.n(p)
var b=t("TSYQ")
var d=t.n(b)
var u=t("n12J")
var _=t("J2CL")
function f(n,e,t){if("input"===n.as){if("children"===e&&n.children||void 0==n.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(t,' as="input"`'))}else{if("value"===e&&void 0!=n.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(t,' as="input"`'))
if(!n.children)return new Error("Prop `children` should be supplied unless `".concat(t,' as="input"`.'))}return}var m=t("nAyT")
var R=t("KgFQ")
var y=t("jtGx")
var v=t("oXx0")
function k(n){var e=n.borders,t=n.colors,o=n.spacing,r=n.typography
return{lineHeight:r.lineHeightFit,h1FontSize:r.fontSizeXXLarge,h1FontWeight:r.fontWeightLight,h1FontFamily:r.fontFamily,h2FontSize:r.fontSizeXLarge,h2FontWeight:r.fontWeightNormal,h2FontFamily:r.fontFamily,h3FontSize:r.fontSizeLarge,h3FontWeight:r.fontWeightBold,h3FontFamily:r.fontFamily,h4FontSize:r.fontSizeMedium,h4FontWeight:r.fontWeightBold,h4FontFamily:r.fontFamily,h5FontSize:r.fontSizeSmall,h5FontWeight:r.fontWeightNormal,h5FontFamily:r.fontFamily,primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,borderPadding:o.xxxSmall,borderColor:t.borderMedium,borderWidth:e.widthSmall,borderStyle:e.style}}k.canvas=function(n){return{primaryColor:n["ic-brand-font-color-dark"]}}
k["instructure"]=function(n){var e=n.typography
return{h1FontFamily:e.fontFamilyHeading,h2FontFamily:e.fontFamilyHeading,h3FontWeight:e.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:e.fontWeightBold,h4FontSize:e.fontSizeLarge,h5FontWeight:e.fontWeightBold,h5FontSize:e.fontSizeMedium}}
var B={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var G=Object(_["e"])({map:B,version:"8.0.0"})
var w,F,x,C,S,z
var A={componentId:"blnAQ",template:function(n){return"\n\n.blnAQ_bGBk{line-height:".concat(n.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(n.h1FontFamily||"inherit",";font-size:").concat(n.h1FontSize||"inherit",";font-weight:").concat(n.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(n.h2FontFamily||"inherit",";font-size:").concat(n.h2FontSize||"inherit",";font-weight:").concat(n.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(n.h3FontFamily||"inherit",";font-size:").concat(n.h3FontSize||"inherit",";font-weight:").concat(n.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(n.h4FontFamily||"inherit",";font-size:").concat(n.h4FontSize||"inherit",";font-weight:").concat(n.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(n.h5FontFamily||"inherit",";font-size:").concat(n.h5FontSize||"inherit",";font-weight:").concat(n.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(n.borderWidth||"inherit"," ").concat(n.borderStyle||"inherit"," ").concat(n.borderColor||"inherit",";padding-top:").concat(n.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(n.borderWidth||"inherit"," ").concat(n.borderStyle||"inherit"," ").concat(n.borderColor||"inherit",";padding-bottom:").concat(n.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(n.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(n.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(n.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(n.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var O=(w=Object(m["a"])("8.0.0",{ellipsis:"<TruncateText />"}),F=Object(v["a"])(),x=Object(_["l"])(k,A,G),w(C=F(C=x(C=(z=S=function(n){Object(c["a"])(t,n)
var e=Object(l["a"])(t)
function t(){Object(i["a"])(this,t)
return e.apply(this,arguments)}Object(a["a"])(t,[{key:"render",value:function(){var n
var e=this.props,i=e.border,a=e.children,c=e.color,l=e.level,g=e.margin,p=e.elementRef,h=e.ellipsis,b=Object(r["a"])(e,["border","children","color","level","margin","elementRef","ellipsis"])
var _=Object(R["a"])(t,this.props,(function(){return"reset"===l?"span":l}))
return s.a.createElement(u["a"],Object.assign({},Object(y["b"])(b),{className:d()((n={},Object(o["a"])(n,A.root,true),Object(o["a"])(n,A["level--".concat(l)],true),Object(o["a"])(n,A["color--".concat(c)],c),Object(o["a"])(n,A["border--".concat(i)],"none"!==i),Object(o["a"])(n,A.ellipsis,h),n)),as:_,margin:g,elementRef:p}),a)}}])
t.displayName="Heading"
return t}(g["Component"]),S.propTypes={border:h.a.oneOf(["none","top","bottom"]),children:f,color:h.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:h.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:h.a.elementType,margin:_["c"].spacing,elementRef:h.a.func,ellipsis:h.a.bool},S.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},z))||C)||C)||C)}}])

//# sourceMappingURL=104-c-998cd876f6.js.map