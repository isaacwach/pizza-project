(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[154],{"6ohZ":function(e,t,a){"use strict"
a.d(t,"a",(function(){return m}))
var n=a("An8g")
var i=a("Ff2n")
var s=a("q1tI")
var r=a.n(s)
a("17x9")
var o=a("Mmr1")
var l=a("msMH")
var c=a("HGxv")
var d=a("8WeW")
Object(d["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"ca":{"close_d634289d":"Tanca"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-AU-x-unimelb":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"en-GB-x-lbs":{"close_d634289d":"Close"},"en-GB-x-ukhe":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"es-ES":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"th":{"close_d634289d":"ปิด"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
a("jQeR")
a("0sPK")
var h=c["default"].scoped("modal")
var f=a("Dibh")
const p=["label","closeButtonLabel","onDismiss","children"]
function u(){return document.getElementById("flash_screenreader_holder")}function m(e){let t=e.label,a=e.closeButtonLabel,s=e.onDismiss,c=e.children,d=Object(i["a"])(e,p)
return r.a.createElement(f["a"],Object.assign({liveRegion:u},d,{label:t,onDismiss:s}),Object(n["a"])(f["a"].Header,{},void 0,Object(n["a"])(o["a"],{"data-testid":"instui-modal-close",placement:"end",offset:"medium",onClick:s},void 0,a||h.t("Close")),Object(n["a"])(l["a"],{},void 0,t)),c)}["Header","Body","Footer"].forEach(e=>m[e]=f["a"][e])
m.defaultProps={closeButtonLabel:void 0}},Ce78J:function(e,t,a){"use strict"
var n=a("VTBJ")
var i=a("ouhR")
var s=a.n(i)
var r=a("Y/W1")
var o=a.n(r)
var l=a("JiFB")
var c=a("ik22")
function d(e,t,a){const i=Object(n["a"])({},a)
e.forEach(e=>{const n=t[e]
const s=a[e]
Array.isArray(n)&&Array.isArray(s)&&(i[e]=[...new Set(n.concat(s))])})
return i}function h(e,t,a,i,s){const r=new l["a"](s,c["a"],e,t)
const o=Object(n["a"])({},r.defaultConfig())
return Object(n["a"])(Object(n["a"])({},o),d(a.optionsToMerge||[],o,a.tinyOptions))}var f=h
var p=a("FNQM")
const u={call(e,...t){if("exists?"===e)return true
return this[e](...t)},focus(){if(void 0!==tinymce){const e=tinymce.get(this.getTextarea().id)
e&&e.focus(true)}}}
const m={show(){$("#editor_tabs").show()},hide(){$("#editor_tabs").hide()}}
const g={wrapEditor(e){const t=Object(n["a"])(Object(n["a"])({},u),e)
return Object.assign(e,t)},wrapSidebar(e){const t=Object(n["a"])(Object(n["a"])({},m),e)
return Object.assign(e,t)}}
var v=g
var b=a("eVns")
var _=a("stQK")
const x={loadingPromise:null,preload(e){(window.requestIdleCallback||window.setTimeout)(()=>this.loadRCE(e))},loadOnTarget(e,t,a){const n=this.getTargetTextarea(e)
const i=this.getRenderingTarget(n,t.getRenderingTarget)
const s=this.createRCEProps(n,t)
this.loadRCE(e=>{e.renderIntoDiv(i,s,e=>{e.tinymceOn("init",()=>a(n,v.wrapEditor(e)))})})},loadingCallbacks:[],RCE:null,loadRCE(e=(()=>{})){return Promise.all([a.e(2),a.e(3),a.e(5),a.e(6),a.e(8),a.e(10),a.e(11),a.e(13),a.e(14),a.e(20),a.e(23),a.e(24),a.e(30),a.e(3695)]).then(a.bind(null,"j/Fk")).then(e=>{this.RCE=e
Object(p["a"])()
return e}).then(()=>{this.loadingCallbacks.forEach(e=>e(this.RCE))
this.loadingCallbacks=[]
e(this.RCE)})},getTargetTextarea:e=>"textarea"===s()(e).get(0).type?s()(e).get(0):s()(e).find("textarea").get(0),getRenderingTarget(e,t){let a
a="undefined"===typeof t?s()(e).parent().get(0):t(e)
s()(a).addClass("ic-RichContentEditor")
return a},_attrsToMirror(e){const t=["name"]
const a=o.a.reduce(e.attributes,(e,t)=>{e[t.name]=t.value
return e},{})
return o.a.pick(a,t)},createRCEProps(e,t){var a,i,s,r,o
const l=e.offsetWidth
const c=e.offsetHeight||400
c&&(t.tinyOptions=Object(n["a"])({height:c},t.tinyOptions||{}))
const d=ENV.LOCALE
const h=Object.keys(_["a"]).map(e=>({id:e,label:_["a"][e]})).sort((e,t)=>e.id===d?-1:t.id===d?1:e.label.localeCompare(t.label,d))
const p={enabled:true,maxAge:Number.isNaN(ENV.rce_auto_save_max_age_ms)?36e5:ENV.rce_auto_save_max_age_ms}
return{defaultContent:e.value||t.defaultContent,editorOptions:f.bind(null,l,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:Object(b["a"])(),languages:h,liveRegion:()=>document.getElementById("flash_screenreader_holder"),ltiTools:null===(a=window.INST)||void 0===a?void 0:a.editorButtons,autosave:t.autosave||p,instRecordDisabled:ENV.RICH_CONTENT_INST_RECORD_TAB_DISABLED,maxInitRenderedRCEs:t.maxInitRenderedRCEs,highContrastCSS:null===(i=window.ENV)||void 0===i?void 0:i.url_for_high_contrast_tinymce_editor_css,use_rce_buttons_and_icons:!!(null!==(s=window.ENV)&&void 0!==s&&null!==(r=s.FEATURES)&&void 0!==r&&r.rce_buttons_and_icons),use_rce_a11y_checker_notifications:!!(null!==(o=window.ENV)&&void 0!==o&&o.use_rce_a11y_checker_notifications)}}}
var C=x
var k=a("eodz")
function w(e,t,a){e.css("display","none")
const n=t.onFocus
t.onFocus=(...e)=>{n instanceof Function&&n(...e)}
C.loadOnTarget(e,t,(t,n)=>{const i=D(e)
const r=I(s()(t))
r.data("remoteEditor",n)
i.trigger(k["a"],n)
a&&a(n)})}function y(e){const t=D(e)
const a=t.attr("id")
const n="tinymce-parent-of-"+a
if(t.parent().attr("id")!==n)return t.wrap(`<div id='${n}' style='visibility: hidden'></div>`)}function T(){s()(".mce-resizehandle").attr("aria-hidden",true)}let E=0
function N(){return"random_editor_id_"+E++}function O(e){const t=s()(e)
const a="attr"in t?t.attr("id"):t.id
a&&""!=a||t.attr("id",N())}function I(e){const t=D(e)
const a=t.attr("id")
if(!a||""==a)return t
const n=s()("#"+a)
if(n.length<=0)return t
return n}const S={preloadRemoteModule:(e=(()=>{}))=>C.preload(e),loadNewEditor(e,t={},a){let n=D(e)
if(n.length<=0)return
O(n)
t=s.a.extend({},t)
const i=e=>{t.focus&&this.activateRCE(n)
a&&a(e)}
n=this.freshNode(n)
if(t.manageParent){delete t.manageParent
y(n)}w(n,t,i)
T()},callOnRCE(e,t,...a){let n=D(e)
n=this.freshNode(n)
return Object(k["d"])(n,t,...a)},destroyRCE(e){let t=D(e)
t=this.freshNode(t)
Object(k["b"])(t)},closeRCE(e){this.callOnRCE(e,"RCEClosed")},activateRCE(e){let t=D(e)
t=this.freshNode(t)
Object(k["c"])(t)},freshNode:I,ensureID:O,node2jquery:D}
function D(e){return e&&e.length?e:s()(e)}t["a"]=S},E7jo:function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
a("MIhX")
a("dJId")
a("dGUw")
a("oa+I")
i.a.widget("ui.droppable",{version:"@VERSION",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var e=this.options,t=e.accept
this.isover=0
this.isout=1
this.accept=i.a.isFunction(t)?t:function(e){return e.is(t)}
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
i.a.ui.ddmanager.droppables[e.scope]=i.a.ui.ddmanager.droppables[e.scope]||[]
i.a.ui.ddmanager.droppables[e.scope].push(this)
e.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var e=i.a.ui.ddmanager.droppables[this.options.scope]
for(var t=0;t<e.length;t++)e[t]==this&&e.splice(t,1)
this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,t){"accept"==e&&(this.accept=i.a.isFunction(t)?t:function(e){return e.is(t)})
i.a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var t=i.a.ui.ddmanager.current
this.options.activeClass&&this.element.addClass(this.options.activeClass)
t&&this._trigger("activate",e,this.ui(t))},_deactivate:function(e){var t=i.a.ui.ddmanager.current
this.options.activeClass&&this.element.removeClass(this.options.activeClass)
t&&this._trigger("deactivate",e,this.ui(t))},_over:function(e){var t=i.a.ui.ddmanager.current
if(!t||(t.currentItem||t.element)[0]==this.element[0])return
if(this.accept.call(this.element[0],t.currentItem||t.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass)
this._trigger("over",e,this.ui(t))}},_out:function(e){var t=i.a.ui.ddmanager.current
if(!t||(t.currentItem||t.element)[0]==this.element[0])return
if(this.accept.call(this.element[0],t.currentItem||t.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
this._trigger("out",e,this.ui(t))}},_drop:function(e,t){var a=t||i.a.ui.ddmanager.current
if(!a||(a.currentItem||a.element)[0]==this.element[0])return false
var n=false
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each((function(){var e=i.a.data(this,"droppable")
if(e.options.greedy&&!e.options.disabled&&e.options.scope==a.options.scope&&e.accept.call(e.element[0],a.currentItem||a.element)&&i.a.ui.intersect(a,i.a.extend(e,{offset:e.element.offset()}),e.options.tolerance)){n=true
return false}}))
if(n)return false
if(this.accept.call(this.element[0],a.currentItem||a.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass)
this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
this._trigger("drop",e,this.ui(a))
return this.element}return false},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}})
i.a.ui.intersect=function(e,t,a){if(!t.offset)return false
var n=(e.positionAbs||e.position.absolute).left,s=n+e.helperProportions.width,r=(e.positionAbs||e.position.absolute).top,o=r+e.helperProportions.height
var l=t.offset.left,c=l+t.proportions.width,d=t.offset.top,h=d+t.proportions.height
switch(a){case"fit":return l<=n&&s<=c&&d<=r&&o<=h
case"intersect":return l<n+e.helperProportions.width/2&&s-e.helperProportions.width/2<c&&d<r+e.helperProportions.height/2&&o-e.helperProportions.height/2<h
case"pointer":var f=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,p=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,u=i.a.ui.isOver(p,f,d,l,t.proportions.height,t.proportions.width)
return u
case"touch":return(r>=d&&r<=h||o>=d&&o<=h||r<d&&o>h)&&(n>=l&&n<=c||s>=l&&s<=c||n<l&&s>c)
default:return false}}
i.a.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,t){var a=i.a.ui.ddmanager.droppables[e.options.scope]||[]
var n=t?t.type:null
var s=(e.currentItem||e.element).find(":data(droppable)").andSelf()
e:for(var r=0;r<a.length;r++){if(a[r].options.disabled||e&&!a[r].accept.call(a[r].element[0],e.currentItem||e.element))continue
for(var o=0;o<s.length;o++)if(s[o]==a[r].element[0]){a[r].proportions.height=0
continue e}a[r].visible="none"!=a[r].element.css("display")
if(!a[r].visible)continue
"mousedown"==n&&a[r]._activate.call(a[r],t)
a[r].offset=a[r].element.offset()
a[r].proportions={width:a[r].element[0].offsetWidth,height:a[r].element[0].offsetHeight}}},drop:function(e,t){var a=false
i.a.each(i.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(!this.options)return
!this.options.disabled&&this.visible&&i.a.ui.intersect(e,this,this.options.tolerance)&&(a=this._drop.call(this,t)||a)
if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)){this.isout=1
this.isover=0
this._deactivate.call(this,t)}}))
return a},dragStart:function(e,t){e.element.parentsUntil("body").bind("scroll.droppable",(function(){e.options.refreshPositions||i.a.ui.ddmanager.prepareOffsets(e,t)}))},drag:function(e,t){e.options.refreshPositions&&i.a.ui.ddmanager.prepareOffsets(e,t)
i.a.each(i.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(this.options.disabled||this.greedyChild||!this.visible)return
var a=i.a.ui.intersect(e,this,this.options.tolerance)
var n=a||1!=this.isover?a&&0==this.isover?"isover":null:"isout"
if(!n)return
var s
if(this.options.greedy){var r=this.element.parents(":data(droppable):eq(0)")
if(r.length){s=i.a.data(r[0],"droppable")
s.greedyChild="isover"==n?1:0}}if(s&&"isover"==n){s["isover"]=0
s["isout"]=1
s._out.call(s,t)}this[n]=1
this["isout"==n?"isover":"isout"]=0
this["isover"==n?"_over":"_out"].call(this,t)
if(s&&"isout"==n){s["isout"]=0
s["isover"]=1
s._over.call(s,t)}}))},dragStop:function(e,t){e.element.parentsUntil("body").unbind("scroll.droppable")
e.options.refreshPositions||i.a.ui.ddmanager.prepareOffsets(e,t)}}},ErZx:function(e,t,a){"use strict"
const n={auto_focus:false,block_formats:void 0,body_class:"default-theme",content_css:[],directionality:"ltr",height:void 0,language:"en",menubar:void 0,menu:void 0,toolbar:void 0,plugins:void 0,branding:false,browser_spellcheck:true,content_style:void 0,convert_urls:false,font_formats:"Lato=lato,Helvetica Neue,Helvetica,Arial,sans-serif; Balsamiq Sans=Balsamiq Sans,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Architect's Daughter=Architects Daughter,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",language_load:false,language_url:"none",toolbar_mode:"floating",toolbar_ticky:true,mobile:{theme:"silver"},preview_styles:"font-family font-size font-weight font-style text-decoration text-transform border border-radius outline text-shadow",remove_script_host:true,resize:true,skin:false,statusbar:false,valid_elements:"@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|role],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class],strong/b,em/i,strike,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt|title|hspace|vspace|width|height|align|role],-sub,-sup,-blockquote[cite],-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,kbd,label[for],legend,q[cite],samp,small,tt,var,big,figure,figcaption,source[media|sizes|src|srcset|type],track,mark,article,aside,details,footer,header,nav,section,summary,time",extended_valid_elements:"@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[id|data-media-type|title|src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],picture,ruby,rp,rt,svg[*],g[*],circle[*]",non_empty_elements:"td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track ruby",target_list:false,link_title:false,default_link_target:"_blank"}
t["a"]=n},QLaP:function(e,t,a){"use strict"
var n=function(e,t,a,n,i,s,r,o){false
if(!e){var l
if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var c=[a,n,i,s,r,o]
var d=0
l=new Error(t.replace(/%s/g,(function(){return c[d++]})))
l.name="Invariant Violation"}l.framesToPop=1
throw l}}
e.exports=n},TvTI:function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
var s=a("gI0r")
a("8JEM")
i.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=i()(this)
i.a.each(["name","id","class"],(a,n)=>{t.attr(n)&&t.attr(n,t.attr(n).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let n=false
if(e.data)for(var t in e.data){if(e.except&&-1!=i.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=i.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const r=this.find("."+t)
var a=e.avoid||""
r.each((function(){const r=i()(this)
if(r.length>0&&0===r.closest(a).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=i.a.inArray(t,e.htmlValues)){r.html(i.a.raw(e.data[t].toString()))
if(r.hasClass("user_content")){n=true
r.removeClass("enhanced")
r.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==r[0].tagName.toUpperCase())r.val(e.data[t])
else try{const a=e.data[t].toString()
r.html(Object(s["a"])(a))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,a,n,s=i()(this)
for(const r in e.hrefValues){if(!e.hrefValues.hasOwnProperty(r))continue
const o=e.hrefValues[r]
if(t=s.attr("href")){const a=i.a.replaceTags(t,o,encodeURIComponent(e.data[o]))
const n=s.text()===s.html()?s.text():null
if(t!==a){s.attr("href",a)
n&&s.text(n)}}(a=s.attr("rel"))&&s.attr("rel",i.a.replaceTags(a,o,e.data[o]));(n=s.attr("name"))&&s.attr("name",i.a.replaceTags(n,o,e.data[o]))}}))
n&&i()(document).triggerHandler("user_content_change")}return this}
i.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
i.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,a={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const s=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
n=i.a.trim(s.text())
"&nbsp;"===s.html()&&(n="")
1===n.length&&160===n.charCodeAt(0)&&(n="")
a[e]=n})}if(e.dataValues)for(t in e.dataValues){var n=this.data(e.dataValues[t])
n&&(a[e.dataValues[t]]=n)}if(e.htmlValues)for(t in e.htmlValues){const s=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
n=null
n=s.hasClass("user_content")&&s.data("unenhanced_content_html")?s.data("unenhanced_content_html"):i.a.trim(s.html())
a[e.htmlValues[t]]=n}return a}
i.a.fn.getTemplateValue=function(e,t){const a=i.a.extend({},t,{textValues:[e]})
return this.getTemplateData(a)[e]}},aoKV:function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
a("Y/W1")
var s=a("gI0r")
a("oa+I")
a("E7jo")
i.a.fn.instTree=function(e){return i()(this).each((function(){let t=false
let a=i()(this)
const n=this
let r=null
n.options={autoclose:true,overrideEvents:false,multi:true,dragdrop:true,onClick:false,onDblClick:false,onExpand:false,onCollapse:false,onAddNode:false,onEditNode:false,onDeleteNode:false,onDrag:false,onDrop:false}
n.opts=i.a.extend({},n.options,e)
i.a.fn.instTree.InitInstTree=function(e){a=i()(e)
const s='<li class="separator"></li>'
a.find("li:not(.separator)").filter((function(){return!(i()(this).prev("li.separator").get(0)||i()(this).parents("ul.non-instTree").get(0))})).each((function(){i()(this).before(s)}))
a.find("li > span").not(".sign").not(".clr").addClass("text").attr("unselectable","on")
a.find("li:not(.separator)").filter((function(){return!i()(this).parents("ul.non-instTree").get(0)})).filter(":has(ul)").addClass("node").end().filter(":not(.node)").addClass("leaf")
n.IeSetStyles()
n.Clean()
n.AddSigns()
t||n.BindEvents(e)
if(n.opts.dragdrop){n.CancelDragDrop(e)
n.InitDragDrop(e)}}
n.InitDragDrop=function(e){a=i()(e)
a.find("span.text").draggable({cursor:i.a.browser.msie?"default":"move",distance:3,helper(){return i()('<div id="instTree-drag"><span>'+i()(this).html()+"</span></div>")},appendTo:a})
a.find("li.separator").droppable({accept:"span.text",hoverClass:"dd-hover"})
a.find("span.text").bind("dragstart",(function(e,t){a=i()(this).parents("ul.instTree:first")
const s=i()(this).parent("li")
const r=i()("div#instTree-drag")
i.a.browser.msie&&a.find("li.separator").removeClass("dd-hover")
i.a.browser.opera&&r.css("margin-top","10px")
if(s.is(".leaf")){r.addClass("leaf")
i.a.browser.msie&&r.css("background","#C3E1FF url("+n.opts.imgFolder+"leaf-drag.gif) left 3px no-repeat")}else s.is(".node")&&r.addClass("node")
s.prev("li.separator").addClass("alt").end().addClass("alt")
"function"===typeof n.opts.onDrag&&n.opts.onDrag(e,s)}))
a.find("li.separator").bind("dropover",(function(e,t){r=i()(this)}))
a.find("li.separator").bind("dropout",(e,t)=>{r=null})
a.find("span.text").bind("dragstop",(t,s)=>{let o=true
if(r){var l=a.find("li.alt:not(.separator):eq(0)")
const e=r.parents("li.node:eq(0)")
l.is(".node")&&e.is(".fixedLevel")&&(o=false)}if(r&&o){r.before(a.find("li.alt").remove().removeClass("alt"))
r=null
"function"===typeof n.opts.onDrop&&n.opts.onDrop(t,l)
i.a.fn.instTree.InitInstTree(e)}else a.find("li.alt").removeClass("alt")})}
n.CancelDragDrop=function(e){a=i()(e)
a.find("span.text").draggable("destroy")
a.find("li.separator").droppable("destroy")
a.find("li.separator").unbind()
a.find("span.text").unbind()}
i.a.fn.instTree.AddNode=function(e,t){a=i()(e)
const s=a.find("span.active").get(0)
if(s){const a=i()(s).parents("li:first")
const r=i()(s).parents("li.node:first")
if(!r.is(".fixedLevel")||"node"!=t){const r="leaf"==t?"":' class="node"'
const o='<li class="separator"></li>'
const l="<li"+r+'><span class="text">&nbsp;</span><input type="text" value="New item" /></li>'
const c=o+l
let d=false
let h,f,p
if(a.is(".leaf")){a.after(c)
h=a.nextAll("li:not(.separator):first")
p=a.parent()
d=true}else if(a.is(".node")){f=a.children("ul").get(0)
if(f){i()(f).append(c)
h=i()(f).children("li:not(.separator):last")}else{a.append("<ul>"+c+"</ul>")
f=a.children("ul").get(0)
h=i()(f).children("li:not(.separator):last")}n.ExpandNode(e,a)
p=a
d=true}if(d){i()(s).removeClass("active")
p.find("input:text").focus().select().blur((function(){n.SaveInput(e,i()(this))}))}i.a.fn.instTree.InitInstTree(e)
"function"===typeof n.opts.onAddNode&&n.opts.onAddNode(h)}}}
i.a.fn.instTree.EditNode=function(e){a=i()(e)
const t=a.find("span.active").get(0)
if(t){const a=i()(t).parents("li:first")
i()(t).replaceWith('<span class="text">&nbsp;</span><input type="text" value="'+Object(s["a"])(i()(t).text())+'" />')
a.find("input:text").focus().select().blur((function(){n.SaveInput(e,i()(this))}))
"function"===typeof n.opts.onEditNode&&n.opts.onEditNode(a)}}
i.a.fn.instTree.DeleteNode=function(e){a=i()(e)
const t=a.find("span.active").get(0)
if(t){const a=i()(t).parents("li:first")
const s=a.parents("li.node:first")
a.prev("li.separator").remove().end().remove()
i.a.fn.instTree.InitInstTree(e)
"function"===typeof n.opts.onDeleteNode&&n.opts.onDeleteNode(a,s)}}
n.SaveInput=function(e,t){t.prev("span.text").remove()
const a=""!==i.a.trim(t.get(0).value)?t.get(0).value:"_____"
t.replaceWith('<span class="active text">'+Object(s["a"])(a)+"</span>")
i.a.fn.instTree.InitInstTree(e)}
n.IeSetStyles=function(){if(i.a.browser.msie){a.find("li.node:not(.open) > ul").hide()
a.find("li.node.open > ul").css("margin-bottom","1px")}}
n.Clean=function(){a.find("li:not(.separator)").each((function(){i()(this).removeClass("last")
i()(this).next("li").length&&!i()(this).find("ul").length||i()(this).addClass("last")}))}
n.AddSigns=function(){a.find("li.node").each((function(){i()(this).hasClass("open")?i()(this).find("span.sign").remove().end().append('<span class="sign minus"></span>'):i()(this).find("span.sign").remove().end().append('<span class="sign plus"></span>')}))}
n.BindEvents=function(e){a.on("keydown",(function(t){const s=a.find('[aria-selected="true"]')
const r=i()("#file_list_container")
switch(t.which){case 38:t.preventDefault()
t.stopPropagation()
var o=n.FindNode(s,"up")
n.SelectNode(o)
r.scrollTop(n.FileScrollOffset(o,r))
break
case 40:t.preventDefault()
t.stopPropagation()
var l=n.FindNode(s,"down")
n.SelectNode(l)
r.scrollTop(n.FileScrollOffset(l,r))
break
case 37:t.preventDefault()
t.stopPropagation()
var c=s.attr("aria-expanded")
if(s.hasClass("node")&&"true"===c)n.CollapseNode(s)
else if("undefined"===typeof c||false===c||"false"===c){const e=s.parents(".node").eq(0)
n.SelectNode(e)
r.scrollTop(n.FileScrollOffset(e,r))}break
case 39:t.preventDefault()
t.stopPropagation()
c=s.attr("aria-expanded")
if(s.hasClass("node")&&"true"!==c)n.ExpandNode(e,s)
else if("true"===c){l=n.FindNode(s,"down")
n.SelectNode(l)
r.scrollTop(n.FileScrollOffset(l,r))}break
case 13:t.preventDefault()
t.stopPropagation()
var d=s
"function"===typeof n.opts.onEnter&&n.opts.onEnter.call(this,t,d)
break
case 35:t.preventDefault()
t.stopPropagation()
var h=i()('[role="treeitem"]:visible')
var f=h.last()
n.SelectNode(f)
r.scrollTop(n.FileScrollOffset(f,r))
break
case 36:t.preventDefault()
t.stopPropagation()
h=i()('[role="treeitem"]:visible')
var p=h.first()
n.SelectNode(p)
r.scrollTop(n.FileScrollOffset(p,r))}}))
a.click((function(t){const a=i()(this).closest(".instTree")
const s=i()(t.target)
let r
if(s.is("span.sign")){r=s.parents("li:eq(0)")
n.ToggleNode(e,r)}else if(s.is("span.text")){r=s.closest("li")
if("function"===typeof n.opts.onClick){if(!n.opts.overrideEvents){n.opts.multi&&t.ctrlKey||a.find(".active").removeClass("active").end().find(".active-leaf").removeClass("active-leaf").end().find(".active-node").removeClass("active-node")
s.addClass("active")
r.hasClass("leaf")?r.addClass("active-leaf"):r.addClass("active-node")}n.opts.onClick.call(r,t,r)}else{n.opts.multi&&t.ctrlKey||a.find(".active").removeClass("active").end().find(".active-leaf").removeClass("active-leaf").end().find(".active-node").removeClass("active-node")
s.addClass("active")
r.hasClass("leaf")?r.addClass("active-leaf"):r.addClass("active-node")}}}))
a.dblclick(t=>{const a=i()(t.target)
if(a.is("span.text")){const i=a.parents("li:eq(0)")
if("function"===typeof n.opts.onDblClick){!n.opts.overrideEvents&&i.is(".node")&&n.ToggleNode(e,i)
n.opts.onDblClick.call(i,t,i)}else i.is(".node")&&n.ToggleNode(e,i)}})
t=true}
n.ToggleNode=function(e,t){t.hasClass("open")?n.CollapseNode(t):n.ExpandNode(e,t)
n.Clean()}
n.ExpandNode=function(e,t){t.addClass("open")
t.attr("aria-expanded",true)
n.opts.autoclose&&t.siblings(".open").each((function(){n.CollapseNode(i()(this))}))
if(i.a.browser.msie){t.children("ul").show().css({"margin-bottom":"1px",visibility:"visible"})
t.children("ul").find("li.node:not(.open) > ul").each((function(){i()(this).css("visibility","hidden")}))}const a=t.find("span.sign:last")
a.removeClass("plus").addClass("minus")
n.opts.multi&&i.a.fn.instTree.InitInstTree(e)
"function"===typeof n.opts.onExpand&&n.opts.onExpand(t)}
n.CollapseNode=function(e){e.removeClass("open")
e.attr("aria-expanded",false)
i.a.browser.msie&&e.children("ul").hide()
const t=e.find("span.sign:last")
t.removeClass("minus").addClass("plus")
"function"===typeof n.opts.onCollapse&&n.opts.onCollapse(e)}
n.SelectNode=function(e){if(e.length){a.attr("aria-activedescendant",e.attr("id"))
a.find('[aria-selected="true"]').attr("aria-selected","false")
e.attr("aria-selected","true")}}
n.FindNode=function(e,t){const a=i()('[role="treeitem"]:visible')
const n=a.index(e)
let s=n
"up"==t?s--:s++
const r=s>=0?a.get(s):a.get(n)
const o=i()(r).data("indexPosition",s)
return o}
n.FileScrollOffset=function(e,t){const a=e.data("indexPosition")
const n=t.find(".leaf").first().height()||20
const i=e.siblings(".separator").first().height()||2
const s=i*a
const r=n*a
const o=t.height()/2
return r+s-o}
if(i()(this).is("ul")){a=i()(this)
a.addClass("instTree")
i.a.fn.instTree.InitInstTree(n)}}))}}}])

//# sourceMappingURL=154-c-6a2ac5ece6.js.map