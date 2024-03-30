import './polyfills.server.mjs';
import{B as O,D as P,E as _,H as k,L as A,O as I,a as l,b,c,d as w,e as M,f as F,g as E,h as S,i as T,j as i,k as n,l as s,m as D,n as u,o as g,p as h,q as x,r,s as v,t as U,u as d}from"./chunk-TPQFQJPV.mjs";var y=(()=>{let e=class e{constructor(){this.showHeader=!1}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-header"]],standalone:!0,features:[d],decls:20,vars:0,consts:[[1,"header-div-desktop"],[1,"header-ul-desktop"],["href","/lourivalekamyla/#app-banner"],["href","/lourivalekamyla/#app-introduction"],["href","/lourivalekamyla/#app-donation"],["href","/lourivalekamyla/#app-lista-presen\xE7a"]],template:function(t,m){t&1&&(i(0,"div",0)(1,"ul",1)(2,"li")(3,"a",2),r(4,"NOSSA DATA"),n()(),i(5,"li"),r(6,"|"),n(),i(7,"li")(8,"a",3),r(9,"WEDDING MESSAGE"),n()(),i(10,"li"),r(11,"|"),n(),i(12,"li")(13,"a",4),r(14,"LISTA DE PRESENTE"),n()(),i(15,"li"),r(16,"|"),n(),i(17,"li")(18,"a",5),r(19,"CONFIRMA\xC7\xC3O DE PRESEN\xC7A"),n()()()())},styles:['@charset "UTF-8";.header-div-desktop[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;margin:auto;max-width:700px;position:relative}.header-ul-desktop[_ngcontent-%COMP%]{display:flex;list-style:none;padding:0;justify-content:center}.header-ul-desktop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:10px;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:14px;font-weight:700;color:#965947}.header-ul-desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}.header-ul-desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}']});let o=e;return o})();var K=["days"],W=["hours"],X=["minutes"],ee=["seconds"],Z=(()=>{let e=class e{constructor(a){this.ngZone=a,this.targetDate=new Date("2024-12-31T23:59:59"),this.targetTime=this.targetDate.getTime(),this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.currentTime=`${this.months[this.targetDate.getMonth()]} ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`}ngOnInit(){this.initTimer()}initTimer(){this.ngZone.runOutsideAngular(()=>{setInterval(()=>{this.tickTock(),this.difference=this.targetTime-this.now,this.difference=this.difference/(1e3*60*60*24),isNaN(this.days.nativeElement.innerText)?this.days.nativeElement.innerHTML="...":this.days.nativeElement.innerText=Math.floor(this.difference)},1e3)})}tickTock(){this.date=new Date,this.now=this.date.getTime(),this.days.nativeElement.innerText=Math.floor(this.difference),this.hours.nativeElement.innerText=23-this.date.getHours(),this.minutes.nativeElement.innerText=60-this.date.getMinutes(),this.seconds.nativeElement.innerText=60-this.date.getSeconds()}};e.\u0275fac=function(t){return new(t||e)(w(M))},e.\u0275cmp=l({type:e,selectors:[["app-countdown-timer"]],viewQuery:function(t,m){if(t&1&&(u(K,7),u(W,7),u(X,7),u(ee,7)),t&2){let p;g(p=h())&&(m.days=p.first),g(p=h())&&(m.hours=p.first),g(p=h())&&(m.minutes=p.first),g(p=h())&&(m.seconds=p.first)}},standalone:!0,features:[d],decls:30,vars:4,consts:[["days",""],["hours",""],["minutes",""],["seconds",""],[1,"countdown-div"],[1,"countdown-container"],[1,"countdown-column"],[1,"countdown-ul-desktop"]],template:function(t,m){if(t&1&&(i(0,"div",4)(1,"div",5)(2,"div",6)(3,"ul",7)(4,"li"),r(5,"Dias"),n(),i(6,"li",null,0),r(8),n()()(),i(9,"div",6)(10,"ul",7)(11,"li"),r(12,"Horas"),n(),i(13,"li",null,1),r(15),n()()(),i(16,"div",6)(17,"ul",7)(18,"li"),r(19,"Minutos"),n(),i(20,"li",null,2),r(22),n()()(),i(23,"div",6)(24,"ul",7)(25,"li"),r(26,"Segundos"),n(),i(27,"li",null,3),r(29),n()()()()()),t&2){let p=x(7),L=x(14),$=x(21),J=x(28);c(8),v(p),c(7),v(L),c(7),v($),c(7),v(J)}},styles:['@charset "UTF-8";.countdown-div[_ngcontent-%COMP%]{display:flex;justify-content:center;box-shadow:0 2px 5px #0000001a;margin:auto;padding:20px}.countdown-container[_ngcontent-%COMP%]{display:flex;width:100%}.countdown-column[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center}.countdown-ul-desktop[_ngcontent-%COMP%]{list-style:none;padding:0;margin:10px 0;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:18px;color:#fff;text-align:center}.countdown-ul-desktop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px;margin:2px 0;color:#fff;font-weight:700;font-size:16px;width:100%;box-shadow:0 2px 5px #0000001a}@media (max-width: 768px){.countdown-ul-desktop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px}}']});let o=e;return o})();var z=(()=>{let e=class e{constructor(){this.myTargetDate="2023-12-31T23:59:59",this.basePath="../../../../../assets/img/"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-banner"]],standalone:!0,features:[d],decls:15,vars:2,consts:[[1,"banner"],[1,"banner-img",3,"src"],[1,"banner-title"],[1,"banner-timer"],[1,"banner-timer-h5"]],template:function(t,m){t&1&&(i(0,"div",0),s(1,"img",1),i(2,"div",2)(3,"h1"),r(4,"Lourival "),s(5,"br"),r(6,"&"),s(7,"br"),r(8," Kamyla"),n()(),i(9,"div",3)(10,"p"),r(11,"Save The Date"),n(),i(12,"h1",4),r(13,"20 de Dezembro de 2024"),n(),s(14,"app-countdown-timer"),n()()),t&2&&(c(),D("src","",m.basePath,"banner-img.jpg",b))},dependencies:[Z],styles:['@charset "UTF-8";@font-face{font-family:Tangerine;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOxCZZM.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Tangerine;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/Iurd6Y5j_oScZZow4VO5srNZi5FN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.banner[_ngcontent-%COMP%]{position:relative;width:100%;max-width:100%;display:block;overflow:hidden;margin-bottom:26px}.banner-img[_ngcontent-%COMP%]{width:100%;height:auto;display:block}.banner[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:#00000080;z-index:1}.banner-title[_ngcontent-%COMP%]{position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);margin:0;color:#fff;font-family:Tangerine,cursive;font-size:4vw;text-align:center;z-index:2}.banner-timer[_ngcontent-%COMP%]{position:absolute;top:70%;left:50%;transform:translate(-50%,-10%);margin:0;color:#fff;font-family:Arial,sans-serif;font-size:2vw;text-align:center;z-index:2}.banner-timer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin:0}.banner-timer-h5[_ngcontent-%COMP%]{font-family:Tangerine,cursive;margin:5px}']});let o=e;return o})();var B=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-introduction"]],standalone:!0,features:[d],decls:6,vars:0,consts:[[1,"div-introduction"],[1,"introduction-h1"],[1,"introduction-p"],["src","../../../../../assets/img/introduction-img.png","alt","",1,"introduction-img"]],template:function(t,m){t&1&&(i(0,"div",0)(1,"h1",1),r(2,"WEDDING MESSAGE"),n(),i(3,"p",2),r(4," O grande dia est\xE1 chegando e n\xE3o poder\xEDamos estar mais animados para compartilhar com a nossa fam\xEDlia e amigos um dos dias mais especiais das nossas vidas! Queremos muito sua presen\xE7a neste dia t\xE3o importante com muita festa, amor e carinho em uma comemora\xE7\xE3o que ir\xE1 nos marcar para sempre! "),n(),s(5,"img",3),n())},styles:['@charset "UTF-8";@font-face{font-family:Tangerine;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOxCZZM.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Tangerine;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/Iurd6Y5j_oScZZow4VO5srNZi5FN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.div-introduction[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;margin:auto;max-width:900px;position:relative;border-top:1px solid #965947}.introduction-h1[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:25px;color:#965947;margin:20px}.introduction-p[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:20px;color:#965947;margin:20px}.introduction-img[_ngcontent-%COMP%]{width:100%;max-width:600px;height:auto;border-radius:35%;box-shadow:0 0 0 30px #faefea;margin-top:20px;margin-bottom:20px}']});let o=e;return o})();var G=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-donation-item"]],inputs:{item:"item"},standalone:!0,features:[d],decls:11,vars:2,consts:[[1,"donation-item"],[1,"donation-img"],["src","https://gift-media.lejour.com.br/kit-de-roupas-de-cama-para-dormir-na-sala-quando-brigarem.png","alt","Kit de roupas de cama para dormir na sala quando brigarem "],[1,"donation-description"],[1,"donation-description-group"],[1,"donation-description-p"],[1,"donation-description-button"]],template:function(t,m){t&1&&(i(0,"div",0)(1,"div",1),s(2,"img",2),n(),i(3,"div",3)(4,"div",4)(5,"p",5),r(6),n(),i(7,"p",5),r(8),n()(),i(9,"button",6),r(10," Presentear "),n()()()),t&2&&(c(6),U(" ",m.item.description," "),c(2),U(" R$ \xA0",m.item.value," "))},styles:['@charset "UTF-8";.donation-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;max-width:300px;margin:20px auto;box-shadow:0 4px 8px #0000001a;border-radius:25px;overflow:hidden;background-color:#fff}.donation-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover}.donation-description[_ngcontent-%COMP%]{padding:15px;display:flex;flex-direction:column}.donation-description-group[_ngcontent-%COMP%]{margin-bottom:15px}.donation-description-p[_ngcontent-%COMP%]{margin:5px 0;color:#333;font-size:16px}.donation-description-button[_ngcontent-%COMP%]{background-color:#965947;color:#fff;padding:10px 20px;border:none;border-radius:20px;cursor:pointer;font-weight:700;transition:background-color .3s}.donation-description-button[_ngcontent-%COMP%]:hover{background-color:#b76e79}']});let o=e;return o})();function te(o,e){if(o&1&&s(0,"app-donation-item",7),o&2){let V=e.$implicit;F("item",V)}}var N=(()=>{let e=class e{constructor(){this.items=[{description:"teste",value:"400"},{description:"teste",value:"400"},{description:"teste",value:"400"},{description:"teste",value:"400"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-donation"]],standalone:!0,features:[d],decls:12,vars:0,consts:[[1,"donation"],[1,"donation-h1"],[1,"donation-p"],[1,"donation-itens"],[1,"item-donation"],["href","lourivalekamyla/ecommerce"],[1,"donation-button"],[1,"item-donation",3,"item"]],template:function(t,m){t&1&&(i(0,"div",0)(1,"h1",1),r(2,"LISTA DE PRESENTES"),n(),i(3,"p",2),r(4,"Nossa jornada juntos est\xE1 apenas come\xE7ando, e enquanto planejamos o dia em que uniremos nossas vidas, ficar\xEDamos honrados em ter voc\xEAs ao nosso lado, celebrando cada momento. Sabemos que a presen\xE7a de cada um de voc\xEAs j\xE1 \xE9 um presente inestim\xE1vel. Agradecemos de cora\xE7\xE3o por fazerem parte da nossa hist\xF3ria."),n(),i(5,"div",3),S(6,te,1,1,"app-donation-item",4,E),n(),i(8,"a",5)(9,"button",6),r(10," Ver Mais! "),n()(),s(11,"br"),n()),t&2&&(c(6),T(m.items))},dependencies:[G],styles:['@charset "UTF-8";.donation[_ngcontent-%COMP%]{border-bottom:1px solid #965947;border-top:1px solid #965947;display:flex;flex-direction:column;align-items:center;text-align:center;max-width:900px;position:relative;width:100%;box-sizing:border-box;margin:auto}.donation-h1[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:25px;color:#965947;margin:20px}.donation-itens[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;gap:20px;padding:20px;justify-content:flex-start;margin:10px auto;list-style:none}.donation-item[_ngcontent-%COMP%]:hover{transform:scale(1.05);background-color:#f5f5f5}.donation-button[_ngcontent-%COMP%]{transition:background-color .3s;outline:none;border-width:1px;border-style:solid;border-color:#965947;background:none;width:218px;padding:12px 0;color:#965947;cursor:pointer;text-transform:uppercase;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:16px}.donation-button[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.donation-p[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:20px;color:#965947;margin:20px}']});let o=e;return o})();var C=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-footer"]],standalone:!0,features:[d],decls:3,vars:0,consts:[[1,"site-footer"]],template:function(t,m){t&1&&(i(0,"footer",0)(1,"p"),r(2,"Lourival e Kamyla - Todos os direitos reservados"),n()())},styles:['@charset "UTF-8";@font-face{font-family:Tangerine;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOxCZZM.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Tangerine;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/Iurd6Y5j_oScZZow4VO5srNZi5FN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.site-footer[_ngcontent-%COMP%]{background-color:#965947;color:#fff;text-align:center;border-top:1px solid #e7e7e7;box-sizing:border-box;bottom:0}.site-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:24px;margin:10px 0;font-family:Tangerine,cursive}']});let o=e;return o})();var j=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-body"]],standalone:!0,features:[d],decls:6,vars:0,consts:[[1,"div-body"],["id","app-banner",1,"app-banner"],["id","app-introduction",1,"app-introduction"],["id","app-donation",1,"app-donation"]],template:function(t,m){t&1&&(s(0,"app-header"),i(1,"div",0),s(2,"app-banner",1)(3,"app-introduction",2)(4,"app-donation",3),n(),s(5,"app-footer"))},dependencies:[z,B,N,y,C],styles:['@charset "UTF-8";.div-body[_ngcontent-%COMP%]   .app-banner[_ngcontent-%COMP%]   .app-introduction[_ngcontent-%COMP%]   .app-donation[_ngcontent-%COMP%]{opacity:0;transform:translateY(20px);transition:all .5s ease-out}']});let o=e;return o})();var R=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-ecommerce"]],standalone:!0,features:[d],decls:5,vars:0,consts:[[1,"ecommerce-body"]],template:function(t,m){t&1&&(s(0,"app-header"),i(1,"div",0)(2,"h1"),r(3,"teste"),n()(),s(4,"app-footer"))},dependencies:[y,C],styles:[".ecommerce-body[_ngcontent-%COMP%]{position:relative;width:100%;max-width:100%;display:block;overflow:hidden;margin-bottom:26px;flex-direction:column;align-items:center;text-align:center}"]});let o=e;return o})();var Q=(()=>{let e=class e{constructor(){this.title="lourivalekamyla"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:1,vars:0,template:function(t,m){t&1&&s(0,"router-outlet")},dependencies:[A]});let o=e;return o})();var Y=[{path:"lourivalekamyla/ecommerce",component:R},{path:"lourivalekamyla",component:j}];var q={providers:[I(Y),_()]};var ne={providers:[k()]},H=O(q,ne);var oe=()=>P(Q,H),He=oe;export{He as a};
