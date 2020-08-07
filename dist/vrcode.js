var vrcode=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e){t.exports={L:1,M:0,Q:3,H:2}},function(t,e,r){"use strict";var n=r(5),o=r.n(n),i=r(0),a=r.n(i);var s={name:"VrCode",components:{"qrcode-vue":{props:{value:{type:String,required:!0,default:""},classname:{type:String,default:""},size:{type:[Number,String],default:100,validator:t=>!0!==isNaN(Number(t))},level:{type:String,default:"L",validator:t=>["L","Q","M","H"].indexOf(t)>-1},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},renderas:{type:String,required:!1,default:"canvas",validator:t=>["canvas","svg"].indexOf(t)>-1},padding:{type:Number,default:10},transparent:{type:Boolean,default:!1}},data:()=>({numCells:0,fgPath:""}),updated(){this.render()},mounted(){this.render()},methods:{render(){const{value:t,size:e,level:r,background:n,foreground:i,renderas:s,padding:u,transparent:l}=this,h=e>>>0,d=new o.a(-1,a.a[r]);d.addData(function(t){let e="";for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);n<128?e+=String.fromCharCode(n):n<2048?(e+=String.fromCharCode(192|n>>6),e+=String.fromCharCode(128|63&n)):n<55296||n>=57344?(e+=String.fromCharCode(224|n>>12),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n)):(r++,n=65536+((1023&n)<<10|1023&t.charCodeAt(r)),e+=String.fromCharCode(240|n>>18),e+=String.fromCharCode(128|n>>12&63),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n))}return e}(t)),d.make();const f=d.modules,c=(h-2*u)/f.length,g=(h-2*u)/f.length,v=window.devicePixelRatio||1;if("svg"===s)this.numCells=f.length,this.fgPath=function(t,e=0){const r=[];return t.forEach((function(t,n){let o=null;t.forEach((function(i,a){if(!i&&null!==o)return r.push(`M${o+e} ${n+e}h${a-o}v1H${o+e}z`),void(o=null);if(a!==t.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?r.push(`M${a+e},${n+e} h1v1H${a+e}z`):r.push(`M${o+e},${n+e} h${a+1-o}v1H${o+e}z`)}}))})),r.join("")}(f);else{const t=this.$refs.vrcode,e=t.getContext("2d");t.height=t.width=h*v,e.scale(v,v),e.fillStyle=n,l?e.clearRect(0,0,t.width,t.height):e.fillRect(0,0,t.width,t.height),f.forEach((function(t,r){t.forEach((function(t,o){const a=Math.ceil((o+1)*c)-Math.floor(o*c),s=Math.ceil((r+1)*g)-Math.floor(r*g);t?e.fillStyle=i:l||(e.fillStyle=n),!t&&l?e.clearRect(Math.round(o*c)+u,Math.round(r*g)+u,a,s):e.fillRect(Math.round(o*c)+u,Math.round(r*g)+u,a,s)}))}))}}},render(t){const{classname:e,value:r,level:n,background:o,foreground:i,size:a,renderas:s,numCells:u,fgPath:l}=this;return t("div",{class:this.class||e},["svg"===s?t("svg",{attrs:{height:a,width:a,shapeRendering:"crispEdges",viewBox:`0 0 ${u} ${u}`},style:{width:a+"px",height:a+"px"}},[t("path",{attrs:{fill:o,d:`M0,0 h${u}v${u}H0z`}}),t("path",{attrs:{fill:i,d:l}})]):t("canvas",{attrs:{height:a,width:a},style:{width:a+"px",height:a+"px"},ref:"vrcode"},[])])}}},props:{value:{type:[String,Object],default:null},download:{type:Object,default:function(){return{visible:!1}}},options:{type:Object,default:function(){return{size:100,background:"#ffffff",foreground:"#000000",className:"",level:"L",padding:10}}},type:{type:String,default:"canvas"},helpers:{type:String,default:"text"},transparent:{type:Boolean,default:!1}},data:()=>({randId:"",textToQR:""}),watch:{value(t){this.setTextToQr()}},created(){this.randId=Math.floor(1e3*Math.random()+1),this.setTextToQr()},methods:{setTextToQr(){switch(this.helpers){case"email":this.textToQR=`MATMSG:TO:${this.value.address||null}${this.value.subject?";SUB:"+this.value.subject:""}${this.value.body?";BODY:"+this.value.body:""};`;break;case"call":this.textToQR="tel:"+(this.value||0);break;case"sms":this.textToQR=`sms:${this.value.number||0}${this.value.message?":"+this.value.message:""}`;break;case"geo":this.textToQR=`geo:${this.value.lng||0},${this.value.lat||0}${this.value.name?"?q="+this.value.name:""}`;break;case"wifi":this.textToQR=`WIFI:T:${this.value.encrypt||"nopass"};S:${this.value.ssid};P:${this.value.password};H:${this.value.hidden||""};`;break;case"coin":this.textToQR=`${this.value.coin||"bitcoin"}:${this.value.address}?amount=${this.value.amount||0}${this.value.message?"&message="+this.value.message:""}`;break;case"event":this.textToQR=`BEGIN:VEVENT\nSUMMARY:${this.value.name||""}\nDTSTART${this.value.allDay?";VALUE=DATE:"+this.value.start:":"+this.value.start}\nDTEND${this.value.allDay?";VALUE=DATE:"+this.value.end:":"+this.value.end}\nLOCATION:${this.value.location}\nDESCRIPTION:${this.value.description}\nEND:VEVENT`;break;case"mecard":this.textToQR=`MECARD:N:${this.value.name||"Your name"};ORG:${this.value.company||"Your company"};TEL:${this.value.phone||""};URL:${this.value.url||""};EMAIL:${this.value.email||""};ADR: ${this.value.address||""};NOTE:${this.value.title||""} ${this.value.note||""};;`;break;case"vcard":this.textToQR=`BEGIN:VCARD\nVERSION:3.0\nN:${this.value.name||"Your name"}\nORG:${this.value.company||"Your company"}\nTEL:${this.value.phone||""}\nURL:${this.value.url||""}\nEMAIL:${this.value.email||""}\nTITLE:${this.value.title||""}\nADR: ${this.value.address||""}\nNOTE:${this.value.note||""}\nEND:VCARD`;break;default:this.textToQR=this.value.toString()}},clickDownload(t){const{type:e="image/png",filename:r="download.png"}=this.download,n=document.getElementById("qrcode-"+this.randId).children[0];t.target.href=n.toDataURL(e),t.target.download=r}}},u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("qrcode-vue",{attrs:{id:"qrcode-"+t.randId,renderas:t.options.type,value:t.textToQR,padding:t.options.padding,classname:t.options.className,size:t.options.size,level:t.options.level,background:t.options.background,foreground:t.options.foreground,transparent:t.transparent}}),t._v(" "),"canvas"===t.type&&t.download.visible?r("a",{class:t.download.class||"",style:t.download.style,attrs:{role:"anchor",href:"javascript:void(0);"},on:{click:t.clickDownload}},[t._v(t._s(t.download.text))]):t._e()],1)};u._withStripped=!0;var l=function(t,e,r,n,o,i,a,s){var u=typeof(t=t||{}).default;"object"!==u&&"function"!==u||(t=t.default);var l,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=r,h._compiled=!0),n&&(h.functional=!0),i&&(h._scopeId=i),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},h._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(h.functional){h._injectStyles=l;var d=h.render;h.render=function(t,e){return l.call(e),d(t,e)}}else{var f=h.beforeCreate;h.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:h}}(s,u,[],!1,null,null,null);l.options.__file="src/pm-qrcode.vue";e.a=l.exports},function(t,e){t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},function(t,e,r){var n=r(4);function o(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}o.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=n.gexp(n.glog(this.get(r))+n.glog(t.get(i)));return new o(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=n.glog(this.get(0))-n.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=n.gexp(n.glog(t.get(i))+e);return new o(r,0).mod(t)}},t.exports=o},function(t,e){for(var r={glog:function(t){if(t<1)throw new Error("glog("+t+")");return r.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},n=0;n<8;n++)r.EXP_TABLE[n]=1<<n;for(n=8;n<256;n++)r.EXP_TABLE[n]=r.EXP_TABLE[n-4]^r.EXP_TABLE[n-5]^r.EXP_TABLE[n-6]^r.EXP_TABLE[n-8];for(n=0;n<255;n++)r.LOG_TABLE[r.EXP_TABLE[n]]=n;t.exports=r},function(t,e,r){var n=r(8),o=r(9),i=r(10),a=r(11),s=r(3);function u(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var l=u.prototype;l.addData=function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},l.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},l.getModuleCount=function(){return this.moduleCount},l.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=o.getRSBlocks(t,this.errorCorrectLevel),r=new i,n=0,s=0;s<e.length;s++)n+=e[s].dataCount;for(s=0;s<this.dataList.length;s++){var u=this.dataList[s];r.put(u.mode,4),r.put(u.getLength(),a.getLengthInBits(u.mode,t)),u.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},l.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=u.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},l.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},l.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=a.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},l.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,a=0;a<this.modules[o].length;a++){var s=1*a;this.modules[o][a]&&(n.beginFill(0,100),n.moveTo(s,i),n.lineTo(s+1,i),n.lineTo(s+1,i+1),n.lineTo(s,i+1),n.endFill())}return n},l.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},l.setupPositionAdjustPattern=function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[n+i][o+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},l.setupTypeNumber=function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},l.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=a.getBCHTypeInfo(r),o=0;o<15;o++){var i=!t&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},l.mapData=function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,i=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var u=0;u<2;u++)if(null==this.modules[n][s-u]){var l=!1;i<t.length&&(l=1==(t[i]>>>o&1)),a.getMask(e,n,s-u)&&(l=!l),this.modules[n][s-u]=l,-1==--o&&(i++,o=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},u.PAD0=236,u.PAD1=17,u.createData=function(t,e,r){for(var n=o.getRSBlocks(t,e),s=new i,l=0;l<r.length;l++){var h=r[l];s.put(h.mode,4),s.put(h.getLength(),a.getLengthInBits(h.mode,t)),h.write(s)}var d=0;for(l=0;l<n.length;l++)d+=n[l].dataCount;if(s.getLengthInBits()>8*d)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*d+")");for(s.getLengthInBits()+4<=8*d&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*d||(s.put(u.PAD0,8),s.getLengthInBits()>=8*d));)s.put(u.PAD1,8);return u.createBytes(s,n)},u.createBytes=function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),u=new Array(e.length),l=0;l<e.length;l++){var h=e[l].dataCount,d=e[l].totalCount-h;n=Math.max(n,h),o=Math.max(o,d),i[l]=new Array(h);for(var f=0;f<i[l].length;f++)i[l][f]=255&t.buffer[f+r];r+=h;var c=a.getErrorCorrectPolynomial(d),g=new s(i[l],c.getLength()-1).mod(c);u[l]=new Array(c.getLength()-1);for(f=0;f<u[l].length;f++){var v=f+g.getLength()-u[l].length;u[l][f]=v>=0?g.get(v):0}}var p=0;for(f=0;f<e.length;f++)p+=e[f].totalCount;var m=new Array(p),C=0;for(f=0;f<n;f++)for(l=0;l<e.length;l++)f<i[l].length&&(m[C++]=i[l][f]);for(f=0;f<o;f++)for(l=0;l<e.length;l++)f<u[l].length&&(m[C++]=u[l][f]);return m},t.exports=u},function(t,e,r){"use strict";r.r(e),function(t){r.d(e,"install",(function(){return o}));var n=r(1);function o(t){o.installed||(o.installed=!0,t.component("vrcode",n.a))}const i={install:o};let a=null;"undefined"!=typeof window?a=window.Vue:void 0!==t&&(a=t.Vue),a&&a.use(i),e.default=n.a}.call(this,r(7))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(2);function o(t){this.mode=n.MODE_8BIT_BYTE,this.data=t}o.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},t.exports=o},function(t,e,r){var n=r(0);function o(t,e){this.totalCount=t,this.dataCount=e}o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(t,e){var r=o.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,i=new Array,a=0;a<n;a++)for(var s=r[3*a+0],u=r[3*a+1],l=r[3*a+2],h=0;h<s;h++)i.push(new o(u,l));return i},o.getRsBlockTable=function(t,e){switch(e){case n.L:return o.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return o.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return o.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return o.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},t.exports=o},function(t,e){function r(){this.buffer=new Array,this.length=0}r.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r},function(t,e,r){var n=r(2),o=r(3),i=r(4),a=0,s=1,u=2,l=3,h=4,d=5,f=6,c=7,g={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;g.getBCHDigit(e)-g.getBCHDigit(g.G15)>=0;)e^=g.G15<<g.getBCHDigit(e)-g.getBCHDigit(g.G15);return(t<<10|e)^g.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;g.getBCHDigit(e)-g.getBCHDigit(g.G18)>=0;)e^=g.G18<<g.getBCHDigit(e)-g.getBCHDigit(g.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return g.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a:return(e+r)%2==0;case s:return e%2==0;case u:return r%3==0;case l:return(e+r)%3==0;case h:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case d:return e*r%2+e*r%3==0;case f:return(e*r%2+e*r%3)%2==0;case c:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new o([1],0),r=0;r<t;r++)e=e.multiply(new o([1,i.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var u=-1;u<=1;u++)o+u<0||e<=o+u||0==s&&0==u||a==t.isDark(n+s,o+u)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var l=0;t.isDark(n,o)&&l++,t.isDark(n+1,o)&&l++,t.isDark(n,o+1)&&l++,t.isDark(n+1,o+1)&&l++,0!=l&&4!=l||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var h=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&h++;return r+=10*(Math.abs(100*h/e/e-50)/5)}};t.exports=g}]);