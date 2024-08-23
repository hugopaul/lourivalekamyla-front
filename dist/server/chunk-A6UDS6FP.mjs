import './polyfills.server.mjs';
import{A as w,E,H as F,a as l,b as f,c as C,d as y,e as i,f as n,g as s,h as u,i as g,j as h,k as v,l as a,m as x,n as c,u as b,w as U,x as M}from"./chunk-QZKHOOSX.mjs";var S=(()=>{let e=class e{constructor(){this.showHeader=!1}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-header"]],standalone:!0,features:[c],decls:19,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-light","custom-bg"],["href","#",1,"navbar-brand","display-1"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item"],["href","/#app-banner",1,"nav-link"],["href","/#app-introduction",1,"nav-link"],["href","/#app-donation",1,"nav-link"],["href","/#app-lista-presen\xE7a",1,"nav-link"]],template:function(t,d){t&1&&(i(0,"nav",0)(1,"a",1),a(2,"Kamyla & Lourival"),n(),i(3,"button",2),s(4,"span",3),n(),i(5,"div",4)(6,"ul",5)(7,"li",6)(8,"a",7),a(9,"NOSSA DATA"),n()(),i(10,"li",6)(11,"a",8),a(12,"WEDDING MESSAGE"),n()(),i(13,"li",6)(14,"a",9),a(15,"LISTA DE PRESENTE"),n()(),i(16,"li",6)(17,"a",10),a(18,"CONFIRMA\xC7\xC3O DE PRESEN\xC7A"),n()()()()())},styles:['@charset "UTF-8";.navbar-light.custom-bg[_ngcontent-%COMP%]{background-color:#faefea}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:14px;font-weight:700;color:#965947}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.display-1[_ngcontent-%COMP%]{font-family:Hurricane,cursive!important;font-size:2.5vw}@media (max-width: 768px){.navbar-collapse[_ngcontent-%COMP%]{text-align:right}.display-1[_ngcontent-%COMP%]{font-family:Tangerine,cursive;font-size:7vw}}']});let o=e;return o})();var j=["days"],R=["hours"],Q=["minutes"],Y=["seconds"],O=(()=>{let e=class e{constructor(r){this.ngZone=r,this.targetDate=new Date("2024-12-20T00:00:00"),this.targetTime=this.targetDate.getTime(),this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.currentTime=`${this.months[this.targetDate.getMonth()]} ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`}ngOnInit(){this.initializeElements(),this.initTimer()}initializeElements(){this.days.nativeElement.innerText="0",this.hours.nativeElement.innerText="0",this.minutes.nativeElement.innerText="0",this.seconds.nativeElement.innerText="0"}initTimer(){this.ngZone.runOutsideAngular(()=>{setInterval(()=>{this.tickTock(),this.difference=this.targetTime-this.now,this.difference=this.difference/(1e3*60*60*24),isNaN(this.days.nativeElement.innerText)?this.days.nativeElement.innerHTML="...":this.days.nativeElement.innerText=Math.floor(this.difference)},1e3)})}tickTock(){this.date=new Date,this.now=this.date.getTime(),this.days.nativeElement.innerText=Math.floor(this.difference),this.hours.nativeElement.innerText=23-this.date.getHours(),this.minutes.nativeElement.innerText=60-this.date.getMinutes(),this.seconds.nativeElement.innerText=60-this.date.getSeconds()}};e.\u0275fac=function(t){return new(t||e)(C(y))},e.\u0275cmp=l({type:e,selectors:[["app-countdown-timer"]],viewQuery:function(t,d){if(t&1&&(u(j,7),u(R,7),u(Q,7),u(Y,7)),t&2){let m;g(m=h())&&(d.days=m.first),g(m=h())&&(d.hours=m.first),g(m=h())&&(d.minutes=m.first),g(m=h())&&(d.seconds=m.first)}},standalone:!0,features:[c],decls:30,vars:4,consts:[["days",""],["hours",""],["minutes",""],["seconds",""],[1,"countdown-div"],[1,"countdown-container"],[1,"countdown-column"],[1,"countdown-ul-desktop"]],template:function(t,d){if(t&1&&(i(0,"div",4)(1,"div",5)(2,"div",6)(3,"ul",7)(4,"li"),a(5,"Dias"),n(),i(6,"li",null,0),a(8),n()()(),i(9,"div",6)(10,"ul",7)(11,"li"),a(12,"Horas"),n(),i(13,"li",null,1),a(15),n()()(),i(16,"div",6)(17,"ul",7)(18,"li"),a(19,"Minutos"),n(),i(20,"li",null,2),a(22),n()()(),i(23,"div",6)(24,"ul",7)(25,"li"),a(26,"Segundos"),n(),i(27,"li",null,3),a(29),n()()()()()),t&2){let m=v(7),B=v(14),I=v(21),N=v(28);f(8),x(m),f(7),x(B),f(7),x(I),f(7),x(N)}},styles:['@charset "UTF-8";.countdown-div[_ngcontent-%COMP%]{display:flex;justify-content:center;box-shadow:0 2px 5px #0000001a;margin:auto;padding:20px}.countdown-container[_ngcontent-%COMP%]{display:flex;width:100%}.countdown-column[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center}.countdown-ul-desktop[_ngcontent-%COMP%]{list-style:none;padding:0;margin:10px 0;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:18px;color:#fff;text-align:center}.countdown-ul-desktop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px;margin:2px 0;color:#fff;font-weight:700;font-size:16px;width:100%;box-shadow:0 2px 5px #0000001a}@media (max-width: 768px){.countdown-ul-desktop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px}}']});let o=e;return o})();var T=(()=>{let e=class e{constructor(){this.myTargetDate="2024-12-20T00:00:00",this.basePath="../../../../../assets"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-banner"]],standalone:!0,features:[c],decls:15,vars:0,consts:[[1,"banner","position-relative","text-center","text-white"],[1,"banner-content","position-absolute","top-50","start-50","translate-middle","text-center"],[1,"banner-title","mb-3"],[1,"display-1"],[1,"banner-timer-h5","mb-4"],[1,"mb-1"]],template:function(t,d){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),a(4,"Kamyla "),s(5,"br"),a(6,"&"),s(7,"br"),a(8," Lourival"),n(),s(9,"br"),i(10,"h2",4),a(11,"20 de Dezembro de 2024"),n(),i(12,"p",5),a(13,"DISTRITO FEDERAL"),n()(),s(14,"app-countdown-timer"),n()())},dependencies:[O],styles:['@charset "UTF-8";@font-face{font-family:Tangerine;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOxCZZM.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Tangerine;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/Iurd6Y5j_oScZZow4VO5srNZi5FN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.banner[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background-image:url("./media/foto3-MM6SWQRZ.jpg");background-size:cover;background-position-x:50%;background-position-y:40%}.banner[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:#00000080;z-index:1}.banner-content[_ngcontent-%COMP%]{z-index:2;color:#fff}.banner-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Hurricane,cursive!important;font-size:8vw!important}.banner-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .banner-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Arial,sans-serif;font-size:1.4rem}.banner-timer-h5[_ngcontent-%COMP%]{font-family:Tangerine,cursive;font-size:2.5rem}.countdown-div[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px;background-color:#00000080;padding:10px;border-radius:10px}.countdown-container[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-around}.countdown-column[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center}.countdown-ul-desktop[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:18px;color:#fff;text-align:center}.countdown-ul-desktop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:2px 0;font-weight:700;font-size:16px;width:100%;box-shadow:0 2px 5px #0000001a}@media (max-width: 768px){.banner[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;margin-bottom:26px;background-image:url("./media/foto1-CEVFSTDP.jpg");background-size:cover;background-position:center}.banner-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18vw!important}.countdown-ul-desktop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px}}']});let o=e;return o})();var P=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-introduction"]],standalone:!0,features:[c],decls:7,vars:0,consts:[[1,"container"],[1,"div-introduction"],[1,"introduction-h1"],[1,"introduction-p"],["src","../../../../../assets/img/introduction-img.png","alt","",1,"introduction-img"]],template:function(t,d){t&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"WEDDING MESSAGE"),n(),i(4,"p",3),a(5," O grande dia est\xE1 chegando e n\xE3o poder\xEDamos estar mais animados para compartilhar com a nossa fam\xEDlia e amigos um dos dias mais especiais das nossas vidas! Queremos muito sua presen\xE7a neste dia t\xE3o importante com muita festa, amor e carinho em uma comemora\xE7\xE3o que ir\xE1 nos marcar para sempre! "),n(),s(6,"img",4),n()())},styles:['@charset "UTF-8";@font-face{font-family:Tangerine;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOxCZZM.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Tangerine;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/Iurd6Y5j_oScZZow4VO5srNZi5FN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background:#faefea;padding:0;border:none;margin:0;max-width:100%}.div-introduction[_ngcontent-%COMP%]{background:#faefea;display:flex;flex-direction:column;align-items:center;text-align:center;max-width:900px;position:relative;border-top:1px solid #965947}.introduction-h1[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:25px;color:#965947;margin:20px}.introduction-p[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:20px;color:#965947;margin:20px}.introduction-img[_ngcontent-%COMP%]{width:100%;max-width:600px;height:auto;border-radius:35%;box-shadow:0 0 0 10px #faefea;margin-top:20px;margin-bottom:20px}']});let o=e;return o})();var _=(()=>{let e=class e{constructor(){this.items=[{description:"teste",value:"400"},{description:"teste",value:"400"},{description:"teste",value:"400"},{description:"teste",value:"400"}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-donation"]],standalone:!0,features:[c],decls:9,vars:0,consts:[[1,"donation"],[1,"donation-h1"],[1,"donation-p"],["href","https://kamylaelourival.com.br/weddingshop"],[1,"donation-button"]],template:function(t,d){t&1&&(i(0,"div",0)(1,"h1",1),a(2,"LISTA DE PRESENTES"),n(),i(3,"p",2),a(4,"Nossa jornada juntos est\xE1 apenas come\xE7ando, e enquanto planejamos o dia em que uniremos nossas vidas, ficar\xEDamos honrados em ter voc\xEAs ao nosso lado, celebrando cada momento. Sabemos que a presen\xE7a de cada um de voc\xEAs j\xE1 \xE9 um presente inestim\xE1vel. Agradecemos de cora\xE7\xE3o por fazerem parte da nossa hist\xF3ria."),n(),i(5,"a",3)(6,"button",4),a(7," Envie um presentes! "),n()(),s(8,"br"),n())},styles:['@charset "UTF-8";.donation[_ngcontent-%COMP%]{border-bottom:1px solid #965947;border-top:1px solid #965947;display:flex;flex-direction:column;align-items:center;text-align:center;max-width:900px;position:relative;width:100%;box-sizing:border-box;margin:auto}.donation-h1[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:25px;color:#965947;margin:20px}.donation-itens[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;gap:20px;padding:20px;justify-content:flex-start;margin:10px auto;list-style:none}.donation-item[_ngcontent-%COMP%]:hover{transform:scale(1.05);background-color:#f5f5f5}.donation-button[_ngcontent-%COMP%]{transition:background-color .3s;outline:none;border-width:1px;border-style:solid;border-color:#965947;background:none;width:218px;padding:12px 0;color:#965947;cursor:pointer;text-transform:uppercase;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:16px}.donation-button[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.donation-p[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:20px;color:#965947;margin:20px}']});let o=e;return o})();var D=(()=>{let e=class e{constructor(){this.email="email@email.com"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-footer"]],standalone:!0,features:[c],decls:3,vars:0,consts:[[1,"custom-footer","text-center","text-lg-start"],[1,"text-center","p-3","custom-footer-inner"]],template:function(t,d){t&1&&(i(0,"footer",0)(1,"div",1),a(2," \xA9 2024 Kamyla e Lourival. Todos os direitos reservados. "),n()())},styles:['@charset "UTF-8";@font-face{font-family:Tangerine;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOxCZZM.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Tangerine;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/tangerine/v17/Iurd6Y5j_oScZZow4VO5srNZi5FN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.custom-footer[_ngcontent-%COMP%]{background-color:#faefea;color:#fff;text-align:center;border-top:1px solid #e7e7e7;box-sizing:border-box;bottom:0}.custom-footer-inner[_ngcontent-%COMP%]{color:#965947;margin:10px 0}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;font-size:14px;font-weight:700;color:#965947}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.display-1[_ngcontent-%COMP%]{font-family:Tangerine,cursive;font-size:2.5vw}@media (max-width: 768px){.navbar-collapse[_ngcontent-%COMP%]{text-align:right}.display-1[_ngcontent-%COMP%]{font-family:Tangerine,cursive;font-size:7vw}}']});let o=e;return o})();var k=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-body"]],standalone:!0,features:[c],decls:6,vars:0,consts:[[1,"div-body"],["id","app-banner",1,"app-banner"],["id","app-introduction",1,"app-introduction"],["id","app-donation",1,"app-donation"]],template:function(t,d){t&1&&(s(0,"app-header"),i(1,"div",0),s(2,"app-banner",1)(3,"app-introduction",2)(4,"app-donation",3),n(),s(5,"app-footer"))},dependencies:[T,P,_,S,D],styles:['@charset "UTF-8";.div-body[_ngcontent-%COMP%]   .app-banner[_ngcontent-%COMP%]   .app-introduction[_ngcontent-%COMP%]   .app-donation[_ngcontent-%COMP%]{opacity:0;transform:translateY(20px);transition:all .5s ease-out}']});let o=e;return o})();var A=(()=>{let e=class e{constructor(){this.title="lourivalekamyla"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[c],decls:1,vars:0,template:function(t,d){t&1&&s(0,"router-outlet")},dependencies:[E]});let o=e;return o})();var z=[{path:"",component:k}];var Z={providers:[F(z),M()]};var H={providers:[w()]},G=b(Z,H);var q=()=>U(A,G),Se=q;export{Se as a};