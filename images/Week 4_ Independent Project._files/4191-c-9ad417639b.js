(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4191],{bh89:function(e,t,a){"use strict"
a.r(t)
var i=a("ouhR")
var n=a.n(i)
var d=a("qqwe")
a("Dh7j")
a("oa+I")
a("aq8L")
n()(document).ready((function(){n()("#floating_reminders").draggable()
n()(".show_reminders_link").click((function(e){e.preventDefault()
n()(this).blur()
const t=n()("#floating_reminders")
const a=t.clone()
a.children().css("visibility","hidden")
const i=n()("#reminders_icon").offset()
const d=n()("#floating_reminders").offset().top
t.after(a)
a.css({width:20,height:20,left:i.left,top:i.top-d,opacity:0})
t.css("visibility","hidden").css("left","")
a.animate({top:t.css("top"),left:t.css("left"),width:t.width(),height:t.height(),opacity:1},"slow",(function(){n()(this).remove()
t.css("visibility","visible")
t.find("a:not(.hide_reminders_link):visible:first").focus()
n()("#reminders_icon").hide()}))
t.find(".update_session_url").attr("href")}))
n()(".hide_reminders_link").click((function(e){e.preventDefault()
const t=n()(this).parents("#floating_reminders")
const a=t.clone()
t.after(a).css("left",-2e3)
a.children().css("visibility","hidden")
const i=n()("#reminders_icon").show().offset()
const d=a.offset().top
a.animate({width:20,height:20,left:i.left,top:i.top-d,opacity:0},"slow",(function(){n()(this).remove()}))
t.find(".update_session_url").attr("href")}))
n()(".drop_held_context_link").click((function(e){e.preventDefault()
const t=n()(this).parents(".reminder")
t.confirmDelete({url:n()(this).attr("href"),message:"Are you sure you want to drop this "+t.find(".item_type").text()+"?",success(e){n()(this).fadeOut("fast",(function(){n()(this).remove()
0===n()("#floating_reminders .reminder").length&&n()("#floating_reminders").fadeOut("fast",(function(){n()(this).remove()
n()("#reminders_icon").remove()}))}))}})}))}))
a("cFkJ")
var r=a("gI0r")
function l(e){e.data("handled",true)
const t=e.data("url")||e.attr("href")
const a=e.data("method")
const i=e.attr("target")
const d=n()(`<form method="post" action="${Object(r["a"])(t)}"></form>`)
const l=`\n    <input name="_method" value="${Object(r["a"])(a)}" type="hidden" />\n    <input name="authenticity_token" type="hidden" />\n  `
i&&d.attr("target",i)
d.hide().append(l).appendTo("body").submit()}function s(e){const t=e.data("confirm")
if(!t)return true
return confirm(t)}n()(document).delegate("a[data-confirm], a[data-method], a[data-remove]","click",(function(e){const t=n()(this)
if(t.data("handled")||!s(t))return false
if(t.data("remove")){o(t)
return false}if(t.data("method")){l(t)
return false}}))
function o(e){const t=e.data("remove")
let a=e
const i=e.data("url")
const d=e.closest(":ui-popup").popup("option","trigger").data("KyleMenu")
d&&d.opts.appendMenuTo&&(a=d.$placeholder)
const r=a.closest(t)
r.bind({beforeremove(){r.hide()},remove(){r.remove()}})
r.trigger("beforeremove")
const l=()=>r.trigger("remove")
const s=()=>r.show()
i?n.a.ajaxJSON(i,"DELETE",{},l,s):l()}var m=a("Nx6n")
n()(document).on("mousedown click keydown",".al-trigger",(function(e){const t=n()(this)
if(t.data("kyleMenu"))return
let a=n.a.extend({noButton:true},t.data("kyleMenuOptions"))
t.data("append-to-body")&&(a.appendMenuTo="body")
a=n.a.extend(a,{popupOpts:{position:{my:t.data("popup-my"),at:t.data("popup-at"),within:t.data("popup-within")}}})
new m["a"](t,a)
t.trigger(e)}))
a("897F")
function c(e){return function(){let t
const a=n()(this)
if(!(t=a.data("textWhileTarget"+e)))return
const i="textWhileTarget"+("Hidden"===e?"Shown":"Hidden")
const d=a.data(i)
d||a.data(i,a.text())
a.text(t)}}function _(e,t,a){let i
null==t&&(t=e.is(":ui-dialog:hidden")||"true"!==e.attr("aria-expanded"))
const d=n()(`[aria-controls*=${e.attr("id")}]`)
d.filter((function(){return n()(this).data("hideWhileTargetShown")})).toggle(!t)
if(a&&void 0!==a.attr("aria-expanded")){a.attr("aria-expanded",!("true"===a.attr("aria-expanded")))
e.toggle("true"===a.attr("aria-expanded"))}else e.attr("aria-expanded",""+t).toggle(t)
if(e.is(":ui-dialog")||(i=e.data("turnIntoDialog"))){if(i&&t){i=n.a.extend({autoOpen:false,close(){_(e,false)}},i)
e.dialog(i).fixDialogButtons()}if(t){var r,l
if(!!(null!==(r=window.ENV)&&void 0!==r&&null!==(l=r.FEATURES)&&void 0!==l&&l.responsive_misc)&&e.dialog("option").responsive){const t=e.dialog("option").width
if(t&&t>320&&!window.matchMedia(`(min-width: ${t}px)`).matches){e.dialog("option","width",320)
e.removeClass("form-horizontal")}}e.dialog("open")
e.data("read-on-open")&&e.dialog("widget").attr("aria-live","assertive").attr("aria-atomic","true")}else e.dialog("isOpen")&&e.dialog("close")}d.each(c(t?"Shown":"Hidden"))}const u={bind(){n()(document).on("click change keyclick",".element_toggler[aria-controls]",(function(e){let t
const a=n()(this)
if(a.is('input[type="checkbox"]')){if("click"===e.type)return
t=a.prop("checked")}"click"===e.type&&e.preventDefault()
let i=a.closest(".user_content")
i.length||(i=n()(document.body))
const d=i.find("#"+a.attr("aria-controls").replace(/\s/g,", #"))
d.length&&_(d,t,a)
const r=a.find('i[class*="icon-mini-arrow"].auto_rotate')
if(r.length){r.toggleClass("icon-mini-arrow-down")
r.toggleClass("icon-mini-arrow-right")}}))}}
u.bind()
const k=13
n()(document).on("keydown",".ic-Super-toggle__input",e=>{e.which===k&&n()(e.target).click()})
var f=a("HGxv")
var b=a("8WeW")
Object(b["a"])(JSON.parse('{"ar":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"تم تعطيل Kaltura لموقع Canvas هذا"},"links":{"minimize_embedded_kaltura_content":"تصغير المحتوى المضمَّن"}}},"ca":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"El Kaltura s\'ha inhabilitat per a aquest lloc del Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimitza el contingut incrustat"}}},"cy":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Mae Kaltura wedi’i analluogi ar gyfer y safle hwn ar Canvas"},"links":{"minimize_embedded_kaltura_content":"Lleihau cynnwys wedi\'i blannu"}}},"da":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er blevet deaktiveret for denne Canvas-side"},"links":{"minimize_embedded_kaltura_content":"Minimer integreret indhold"}}},"da-x-k12":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er blevet deaktiveret for denne Canvas-side"},"links":{"minimize_embedded_kaltura_content":"Minimer integreret indhold"}}},"de":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura wurde für diese Canvas-Website deaktiviert"},"links":{"minimize_embedded_kaltura_content":"Eingebettete Inhalte minimieren"}}},"el":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Το Kaltura είναι απενεργοποιημένο για αυτή την ιστοσελίδα Canvas"},"links":{"minimize_embedded_kaltura_content":"Ελαχιστοποίηση ενσωματωμένου περιεχομένου"}}},"en-AU":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura has been disabled for this Canvas site"},"links":{"minimize_embedded_kaltura_content":"Minimise embedded content"}}},"en-AU-x-unimelb":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura has been disabled for this Canvas site"},"links":{"minimize_embedded_kaltura_content":"Minimise embedded content"}}},"en-CA":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura has been disabled for this Canvas site"},"links":{"minimize_embedded_kaltura_content":"Minimize embedded content"}}},"en-GB":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura has been disabled for this Canvas site"},"links":{"minimize_embedded_kaltura_content":"Minimise embedded content"}}},"en-GB-x-ukhe":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura has been disabled for this Canvas site"},"links":{"minimize_embedded_kaltura_content":"Minimise embedded content"}}},"es":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ha sido desactivado para este sitio de Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimizar contenido incrustado"}}},"es-ES":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ha sido deshabilitado para este sitio de Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimizar contenido incrustado"}}},"fa":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura برای این تارنمای کانواس غیر فعال شده است"},"links":{"minimize_embedded_kaltura_content":"به حداقل رساندن محتوای درج شده"}}},"fi":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura on poistettu käytöstä tällä Canvas-sivustolla"},"links":{"minimize_embedded_kaltura_content":"Minimoi upotettu sisältö"}}},"fr":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura a été désactivé pour ce site Canvas."},"links":{"minimize_embedded_kaltura_content":"Réduire le contenu incorporé"}}},"fr-CA":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura a été désactivé pour ce site Canvas."},"links":{"minimize_embedded_kaltura_content":"Réduire le contenu incorporé"}}},"he":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura אינה מופעלת באתר קנבס זה."},"links":{"minimize_embedded_kaltura_content":"מיזעור תוכן משולב"}}},"ht":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Yo dezaktive Kaltura pou sit Canvas sa a"},"links":{"minimize_embedded_kaltura_content":"Minimize kontni anbake"}}},"hu":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"A Kaltura le lett tiltva ezen a Canvas-oldalon"},"links":{"minimize_embedded_kaltura_content":"Beágyazott tartalom méretének csökkentése"}}},"hy":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura-ն անջատված է Canvas-ի այս կայքի համար"},"links":{"minimize_embedded_kaltura_content":"Փոքրացնել ներսի բովանդակությունը"}}},"is":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er óvirk á þessari Canvas-síðu"},"links":{"minimize_embedded_kaltura_content":"Lágmarka innfellt efni"}}},"it":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura è stato disattivato per questo sito Canvas"},"links":{"minimize_embedded_kaltura_content":"Riduci a icona contenuto incorporato"}}},"ja":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"この Canvas サイトは、Kaltura が無効になっています"},"links":{"minimize_embedded_kaltura_content":"埋め込みコンテンツを最小化する"}}},"ko":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"이 Canvas 사이트에는 Kaltura 사용 안 함"},"links":{"minimize_embedded_kaltura_content":"포함된 내용 최소화"}}},"mi":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kua monokia Kaltura mō tēnei pae Canvas"},"links":{"minimize_embedded_kaltura_content":"Whakamōkito ihirangi tāmau"}}},"nb":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er slått av på denne Canvas-siden"},"links":{"minimize_embedded_kaltura_content":"Minimer inkludert innhold"}}},"nb-x-k12":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er slått av for denne Canvas-siden"},"links":{"minimize_embedded_kaltura_content":"Minimer inkludert innhold"}}},"nl":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura is voor deze Canvas-site niet ingeschakeld"},"links":{"minimize_embedded_kaltura_content":"Ingesloten inhoud minimaliseren"}}},"nn":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er deaktivert for denne Canvas-sida"},"links":{"minimize_embedded_kaltura_content":"Minimer innebygd innhald"}}},"pl":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Platforma Kaltura została wyłączona dla tej witryny Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimalizuj zawartość osadzoną"}}},"pt":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"O Kaltura foi desativado para este site Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimizar conteúdo incorporado"}}},"pt-BR":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"O Kaltura foi desativado para este site Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimizar conteúdo incorporado"}}},"ru":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura отключено для этого сайта Canvas"},"links":{"minimize_embedded_kaltura_content":"Свернуть встроенное содержимое"}}},"sl":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Platforma Kaltura za to mesto sistema Canvas je onemogočena."},"links":{"minimize_embedded_kaltura_content":"Minimiziraj vdelano vsebino"}}},"sv":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura har inaktiverats för den här Canvaswebbplatsen"},"links":{"minimize_embedded_kaltura_content":"Minimera det inbäddade innehållet"}}},"sv-x-k12":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura har inaktiverats för den här Canvaswebbplatsen"},"links":{"minimize_embedded_kaltura_content":"Minimera det inbäddade innehållet"}}},"th":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ถูกปิดใช้งานสำหรับไซต์ Canvas นี้"},"links":{"minimize_embedded_kaltura_content":"ย่อเนื้อหาผนวก"}}},"tr":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Bu Canvas sitesi için Kaltura etkinleştirilmemiş"},"links":{"minimize_embedded_kaltura_content":"Bölümü içeriği küçült"}}},"uk":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura була відключена для цього сайту Canvas"},"links":{"minimize_embedded_kaltura_content":"Мінімізувати вбудований контент"}}},"zh-Hans":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"此 Canvas 网站已禁用 Kaltura"},"links":{"minimize_embedded_kaltura_content":"最小化嵌入的内容"}}},"zh-Hant":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"已為此 Canvas 網站停用 Kaltura。"},"links":{"minimize_embedded_kaltura_content":"最小化嵌入內容"}}}}'))
a("jQeR")
a("0sPK")
var h=f["default"].scoped("instructure_inline_media_comment")
var g=a("M+ds")
a("4fRt")
const p={buildMinimizerLink:()=>n()(`<a href="#" style="font-size: 0.8em;">\n      ${Object(r["a"])(h.t("links.minimize_embedded_kaltura_content","Minimize embedded content"))}\n    </a>`),buildCommentHolder:e=>n()('<div><div class="innerholder" tabindex="-1" style="margin-bottom: 15px;"></div></div>'),getMediaCommentId(e){let t
let a=e.data("media_comment_id")||e.find(".media_comment_id:first").text()
a||(t=e.attr("id"))
t&&t.match(/^media_comment_/)&&(a=t.substring(14))
return a},collapseComment(e){x(e.find("video,audio").data("mediaelementplayer"),e=>e.pause())
e.remove()
Object(g["a"])("hide_embedded_content","hide_media")}}
const v=e=>{n()(e.target).find("div.mejs-audio").focus()}
const z=300
const w=e=>{const t=e.closest("td")
return t.length>0}
const y=e=>{const t=e.closest("td").css("width").replace("px","")
return t<z}
const C=e=>w(e)&&y(e)
const K=e=>{const t=e.closest("td")
const a=t.css("width")
t.data("orig-width",a)
t.css("width",z+"px")}
n()(document).on("click","a.instructure_inline_media_comment",Object(d["a"])((function(){if(!INST.kalturaSettings){alert(h.t("alerts.kaltura_disabled","Kaltura has been disabled for this Canvas site"))
return}const e=n()(this)
let t="video"
const a=p.getMediaCommentId(e)
const i=p.buildCommentHolder(e)
C(e)&&K(e)
e.after(i)
e.hide();("audio"===e.data("media_comment_type")||e.is(".audio_playback, .audio_comment, .instructure_audio_link"))&&(t="audio")
i.children("div").mediaComment("show_inline",a,t,e.data("download")||e.attr("href"))
const r=p.buildMinimizerLink()
r.appendTo(i).click(Object(d["a"])(()=>{const t=e.closest("td")
e.show().focus()
t.css("width",t.data("orig-width"))
p.collapseComment(i)}))
Object(g["a"])("show_embedded_content","show_media")
i.find(".innerholder").css("outline","none")
i.find(".innerholder").on("focus",v)})))
function x(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}if(ENV.ping_url){const e=setInterval(()=>{document.hidden||n.a.post(ENV.ping_url).fail(t=>{401===t.status&&clearInterval(e)})},18e4)}Object(b["a"])(JSON.parse('{"ar":{"locked_image_24f37a16":"صورة مؤمّنة"},"ca":{"locked_image_24f37a16":"Imatge bloquejada"},"cy":{"locked_image_24f37a16":"Delwedd wedi’i chloi"},"da":{"locked_image_24f37a16":"Låst billede"},"da-x-k12":{"locked_image_24f37a16":"Låst billede"},"de":{"locked_image_24f37a16":"Gesperrtes Bild"},"en-AU":{"locked_image_24f37a16":"Locked image"},"en-AU-x-unimelb":{"locked_image_24f37a16":"Locked image"},"en-CA":{"locked_image_24f37a16":"Locked image"},"en-GB":{"locked_image_24f37a16":"Locked image"},"en-GB-x-lbs":{"locked_image_24f37a16":"Locked image"},"en-GB-x-ukhe":{"locked_image_24f37a16":"Locked image"},"es":{"locked_image_24f37a16":"Imagen bloqueada"},"es-ES":{"locked_image_24f37a16":"Imagen bloqueada"},"fa":{"locked_image_24f37a16":"تصویر قفل شده"},"fi":{"locked_image_24f37a16":"Lukittu kuva"},"fr":{"locked_image_24f37a16":"Image verrouillée"},"fr-CA":{"locked_image_24f37a16":"Image verrouillée"},"ht":{"locked_image_24f37a16":"Imaj Bloke"},"is":{"locked_image_24f37a16":"Læst mynd"},"it":{"locked_image_24f37a16":"Immagine bloccata"},"ja":{"locked_image_24f37a16":"ロックされた画像"},"mi":{"locked_image_24f37a16":"Āhua kua rakaina"},"nb":{"locked_image_24f37a16":"Låst bilde"},"nb-x-k12":{"locked_image_24f37a16":"Låst bilde"},"nl":{"locked_image_24f37a16":"Vergrendelde afbeelding"},"nn":{"locked_image_24f37a16":"Låst bilde"},"pl":{"locked_image_24f37a16":"Zablokowany obraz"},"pt":{"locked_image_24f37a16":"Imagem bloqueada"},"pt-BR":{"locked_image_24f37a16":"Imagem bloqueada"},"ru":{"locked_image_24f37a16":"Заблокированное изображение"},"sl":{"locked_image_24f37a16":"Zaklenjena slika"},"sv":{"locked_image_24f37a16":"Låst bild"},"sv-x-k12":{"locked_image_24f37a16":"Låst bild"},"th":{"locked_image_24f37a16":"ภาพที่ล็อคไว้"},"zh-Hans":{"locked_image_24f37a16":"锁定图片"},"zh-Hant":{"locked_image_24f37a16":"鎖定圖像"}}'))
var M=f["default"].scoped("broken_images")
var L=a("3lLS")
var j=a.n(L)
function O(e){e.addEventListener("error",e=>{const t=e.currentTarget
const a=()=>t.classList.add("broken-image")
t.src?fetch(t.src).then(e=>{if(403===e.status){t.src="/images/svg-icons/icon_lock.svg"
t.alt=M.t("Locked image")
t.width=100
t.height=100}else a()},a):a()})}function I(){Array.from(document.querySelectorAll('img:not([src=""])')).forEach(O)}j()(I)
const E=".lti-thumbnail-launch"
function S(e){e.preventDefault()
A.launch(n()(e.target).closest(E))}class B{constructor(){n()(document.body).delegate(E,"click",S)}launch(e){const t=JSON.parse(e.attr("target"))
const a=n()("<iframe/>",{src:e.attr("href"),allowfullscreen:"",width:t.displayWidth||500,height:t.displayHeight||500})
e.replaceWith(a)}}const A=new B(E)
function q(){document.querySelectorAll(".user_content").forEach(e=>e.querySelectorAll("*").forEach(e=>{const t=getComputedStyle(e)
"fixed"===t.position&&(e.style.position="relative")}))}const H=new MutationObserver((function(e){e.find(e=>e.addedNodes.length>0)&&q()}))
const N=document.getElementById("content")
N&&H.observe(N,{childList:true,subtree:true})
const T=document.getElementById("right-side")
T&&H.observe(T,{childList:true,subtree:true})
j()(()=>{q()})
var D=a("TMMl")
Object(D["a"])()
ENV.page_view_update_url&&a.e(4194).then(a.bind(null,"4HNs"))
n()("#skip_navigation_link").on("click",Object(d["a"])((function(){n()(n()(this).attr("href")).attr("tabindex",-1).focus()})))}}])

//# sourceMappingURL=4191-c-9ad417639b.js.map