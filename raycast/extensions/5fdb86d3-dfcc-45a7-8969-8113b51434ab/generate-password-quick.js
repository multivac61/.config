"use strict";var wn=Object.create;var D=Object.defineProperty;var yn=Object.getOwnPropertyDescriptor;var xn=Object.getOwnPropertyNames;var En=Object.getPrototypeOf,bn=Object.prototype.hasOwnProperty;var p=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Pn=(e,t)=>{for(var n in t)D(e,n,{get:t[n],enumerable:!0})},Ae=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of xn(t))!bn.call(e,o)&&o!==n&&D(e,o,{get:()=>t[o],enumerable:!(r=yn(t,o))||r.enumerable});return e};var E=(e,t,n)=>(n=e!=null?wn(En(e)):{},Ae(t||!e||!e.__esModule?D(n,"default",{value:e,enumerable:!0}):n,e)),Tn=e=>Ae(D({},"__esModule",{value:!0}),e);var ke=p((Hr,Ne)=>{Ne.exports=_e;_e.sync=vn;var Re=require("fs");function In(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var o=n[r].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Ce(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:In(t,n)}function _e(e,t,n){Re.stat(e,function(r,o){n(r,r?!1:Ce(o,e,t))})}function vn(e,t){return Ce(Re.statSync(e),e,t)}});var Fe=p((Vr,Ue)=>{Ue.exports=Ge;Ge.sync=On;var Le=require("fs");function Ge(e,t,n){Le.stat(e,function(r,o){n(r,r?!1:Me(o,t))})}function On(e,t){return Me(Le.statSync(e),t)}function Me(e,t){return e.isFile()&&An(e,t)}function An(e,t){var n=e.mode,r=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),c=parseInt("010",8),l=parseInt("001",8),d=a|c,S=n&l||n&c&&o===i||n&a&&r===s||n&d&&s===0;return S}});var De=p((Wr,Be)=>{var qr=require("fs"),$;process.platform==="win32"||global.TESTING_WINDOWS?$=ke():$=Fe();Be.exports=ee;ee.sync=Rn;function ee(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,o){ee(e,t||{},function(s,i){s?o(s):r(i)})})}$(e,t||{},function(r,o){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,o=!1),n(r,o)})}function Rn(e,t){try{return $.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var Ke=p((Kr,We)=>{var O=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",$e=require("path"),Cn=O?";":":",je=De(),He=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Ve=(e,t)=>{let n=t.colon||Cn,r=e.match(/\//)||O&&e.match(/\\/)?[""]:[...O?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],o=O?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=O?o.split(n):[""];return O&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:r,pathExt:s,pathExtExe:o}},qe=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:o,pathExtExe:s}=Ve(e,t),i=[],a=l=>new Promise((d,S)=>{if(l===r.length)return t.all&&i.length?d(i):S(He(e));let g=r[l],w=/^".*"$/.test(g)?g.slice(1,-1):g,y=$e.join(w,e),x=!w&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;d(c(x,l,0))}),c=(l,d,S)=>new Promise((g,w)=>{if(S===o.length)return g(a(d+1));let y=o[S];je(l+y,{pathExt:s},(x,v)=>{if(!x&&v)if(t.all)i.push(l+y);else return g(l+y);return g(c(l,d,S+1))})});return n?a(0).then(l=>n(null,l),n):a(0)},_n=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:o}=Ve(e,t),s=[];for(let i=0;i<n.length;i++){let a=n[i],c=/^".*"$/.test(a)?a.slice(1,-1):a,l=$e.join(c,e),d=!c&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let S=0;S<r.length;S++){let g=d+r[S];try{if(je.sync(g,{pathExt:o}))if(t.all)s.push(g);else return g}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw He(e)};We.exports=qe;qe.sync=_n});var Xe=p((zr,te)=>{"use strict";var ze=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};te.exports=ze;te.exports.default=ze});var Ze=p((Xr,Je)=>{"use strict";var Ye=require("path"),Nn=Ke(),kn=Xe();function Qe(e,t){let n=e.options.env||process.env,r=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Nn.sync(e.command,{path:n[kn({env:n})],pathExt:t?Ye.delimiter:void 0})}catch{}finally{s&&process.chdir(r)}return i&&(i=Ye.resolve(o?e.options.cwd:"",i)),i}function Ln(e){return Qe(e)||Qe(e,!0)}Je.exports=Ln});var et=p((Yr,re)=>{"use strict";var ne=/([()\][%!^"`<>&|;, *?])/g;function Gn(e){return e=e.replace(ne,"^$1"),e}function Mn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ne,"^$1"),t&&(e=e.replace(ne,"^$1")),e}re.exports.command=Gn;re.exports.argument=Mn});var nt=p((Qr,tt)=>{"use strict";tt.exports=/^#!(.*)/});var ot=p((Jr,rt)=>{"use strict";var Un=nt();rt.exports=(e="")=>{let t=e.match(Un);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),o=n.split("/").pop();return o==="env"?r:r?`${o} ${r}`:o}});var it=p((Zr,st)=>{"use strict";var oe=require("fs"),Fn=ot();function Bn(e){let n=Buffer.alloc(150),r;try{r=oe.openSync(e,"r"),oe.readSync(r,n,0,150,0),oe.closeSync(r)}catch{}return Fn(n.toString())}st.exports=Bn});var lt=p((eo,ut)=>{"use strict";var Dn=require("path"),at=Ze(),ct=et(),$n=it(),jn=process.platform==="win32",Hn=/\.(?:com|exe)$/i,Vn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function qn(e){e.file=at(e);let t=e.file&&$n(e.file);return t?(e.args.unshift(e.file),e.command=t,at(e)):e.file}function Wn(e){if(!jn)return e;let t=qn(e),n=!Hn.test(t);if(e.options.forceShell||n){let r=Vn.test(t);e.command=Dn.normalize(e.command),e.command=ct.command(e.command),e.args=e.args.map(s=>ct.argument(s,r));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Kn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Wn(r)}ut.exports=Kn});var ft=p((to,pt)=>{"use strict";var se=process.platform==="win32";function ie(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function zn(e,t){if(!se)return;let n=e.emit;e.emit=function(r,o){if(r==="exit"){let s=dt(o,t,"spawn");if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function dt(e,t){return se&&e===1&&!t.file?ie(t.original,"spawn"):null}function Xn(e,t){return se&&e===1&&!t.file?ie(t.original,"spawnSync"):null}pt.exports={hookChildProcess:zn,verifyENOENT:dt,verifyENOENTSync:Xn,notFoundError:ie}});var gt=p((no,A)=>{"use strict";var mt=require("child_process"),ae=lt(),ce=ft();function ht(e,t,n){let r=ae(e,t,n),o=mt.spawn(r.command,r.args,r.options);return ce.hookChildProcess(o,r),o}function Yn(e,t,n){let r=ae(e,t,n),o=mt.spawnSync(r.command,r.args,r.options);return o.error=o.error||ce.verifyENOENTSync(o.status,r),o}A.exports=ht;A.exports.spawn=ht;A.exports.sync=Yn;A.exports._parse=ae;A.exports._enoent=ce});var Rt=p((bo,q)=>{q.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&q.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&q.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Lt=p((Po,N)=>{var u=global.process,T=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};T(u)?(Ct=require("assert"),C=Rt(),_t=/^win/i.test(u.platform),L=require("events"),typeof L!="function"&&(L=L.EventEmitter),u.__signal_exit_emitter__?f=u.__signal_exit_emitter__:(f=u.__signal_exit_emitter__=new L,f.count=0,f.emitted={}),f.infinite||(f.setMaxListeners(1/0),f.infinite=!0),N.exports=function(e,t){if(!T(global.process))return function(){};Ct.equal(typeof e,"function","a callback must be provided for exit handler"),_===!1&&fe();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){f.removeListener(n,e),f.listeners("exit").length===0&&f.listeners("afterexit").length===0&&W()};return f.on(n,e),r},W=function(){!_||!T(global.process)||(_=!1,C.forEach(function(t){try{u.removeListener(t,K[t])}catch{}}),u.emit=z,u.reallyExit=me,f.count-=1)},N.exports.unload=W,I=function(t,n,r){f.emitted[t]||(f.emitted[t]=!0,f.emit(t,n,r))},K={},C.forEach(function(e){K[e]=function(){if(!!T(global.process)){var n=u.listeners(e);n.length===f.count&&(W(),I("exit",null,e),I("afterexit",null,e),_t&&e==="SIGHUP"&&(e="SIGINT"),u.kill(u.pid,e))}}}),N.exports.signals=function(){return C},_=!1,fe=function(){_||!T(global.process)||(_=!0,f.count+=1,C=C.filter(function(t){try{return u.on(t,K[t]),!0}catch{return!1}}),u.emit=kt,u.reallyExit=Nt)},N.exports.load=fe,me=u.reallyExit,Nt=function(t){!T(global.process)||(u.exitCode=t||0,I("exit",u.exitCode,null),I("afterexit",u.exitCode,null),me.call(u,u.exitCode))},z=u.emit,kt=function(t,n){if(t==="exit"&&T(global.process)){n!==void 0&&(u.exitCode=n);var r=z.apply(this,arguments);return I("exit",u.exitCode,null),I("afterexit",u.exitCode,null),r}else return z.apply(this,arguments)}):N.exports=function(){return function(){}};var Ct,C,_t,L,f,W,I,K,_,fe,me,Nt,z,kt});var Vt=p((vo,Ht)=>{"use strict";var{PassThrough:xr}=require("stream");Ht.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",o=!1;t?o=!(n||r):n=n||"utf8",r&&(n=null);let s=new xr({objectMode:o});n&&s.setEncoding(n);let i=0,a=[];return s.on("data",c=>{a.push(c),o?i=a.length:i+=c.length}),s.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var qt=p((Oo,G)=>{"use strict";var{constants:Er}=require("buffer"),br=require("stream"),{promisify:Pr}=require("util"),Tr=Vt(),Ir=Pr(br.pipeline),X=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function he(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=Tr(t);return await new Promise((o,s)=>{let i=a=>{a&&r.getBufferedLength()<=Er.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),s(a)};(async()=>{try{await Ir(e,r),o()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new X)})}),r.getBufferedValue()}G.exports=he;G.exports.buffer=(e,t)=>he(e,{...t,encoding:"buffer"});G.exports.array=(e,t)=>he(e,{...t,array:!0});G.exports.MaxBufferError=X});var Kt=p((Ao,Wt)=>{"use strict";var{PassThrough:vr}=require("stream");Wt.exports=function(){var e=[],t=new vr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function r(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var $r={};Pn($r,{default:()=>Dr});module.exports=Tn($r);var h=require("@raycast/api");var m=require("@raycast/api");var nn=require("node:buffer"),rn=E(require("node:path"),1),Ee=E(require("node:child_process"),1),M=E(require("node:process"),1),on=E(gt(),1);function ue(e){let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===n&&(e=e.slice(0,-1)),e}var k=E(require("node:process"),1),R=E(require("node:path"),1),St=E(require("node:url"),1);function j(e={}){let{env:t=process.env,platform:n=process.platform}=e;return n!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"}function Qn(e={}){let{cwd:t=k.default.cwd(),path:n=k.default.env[j()],execPath:r=k.default.execPath}=e,o,s=t instanceof URL?St.default.fileURLToPath(t):t,i=R.default.resolve(s),a=[];for(;o!==i;)a.push(R.default.join(i,"node_modules/.bin")),o=i,i=R.default.resolve(i,"..");return a.push(R.default.resolve(s,r,"..")),[...a,n].join(R.default.delimiter)}function wt({env:e=k.default.env,...t}={}){e={...e};let n=j({env:e});return t.path=e[n],e[n]=Qn(t),e}var Jn=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;let o=Object.getOwnPropertyDescriptor(e,n),s=Object.getOwnPropertyDescriptor(t,n);!Zn(o,s)&&r||Object.defineProperty(e,n,s)},Zn=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},er=(e,t)=>{let n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},tr=(e,t)=>`/* Wrapped ${e}*/
${t}`,nr=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),rr=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),or=(e,t,n)=>{let r=n===""?"":`with ${n.trim()}() `,o=tr.bind(null,r,t.toString());Object.defineProperty(o,"name",rr),Object.defineProperty(e,"toString",{...nr,value:o})};function le(e,t,{ignoreNonConfigurable:n=!1}={}){let{name:r}=e;for(let o of Reflect.ownKeys(t))Jn(e,t,o,n);return er(e,t),or(e,t,r),e}var H=new WeakMap,yt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(H.set(s,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return n};return le(s,e),H.set(s,r),s};yt.callCount=e=>{if(!H.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return H.get(e)};var xt=yt;var vt=require("node:os");var Et=function(){let e=Pt-bt+1;return Array.from({length:e},sr)},sr=function(e,t){return{name:`SIGRT${t+1}`,number:bt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},bt=34,Pt=64;var It=require("node:os");var Tt=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];var de=function(){let e=Et();return[...Tt,...e].map(ir)},ir=function({name:e,number:t,description:n,action:r,forced:o=!1,standard:s}){let{signals:{[e]:i}}=It.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:o,standard:s}};var ar=function(){let e=de();return Object.fromEntries(e.map(cr))},cr=function({name:e,number:t,description:n,supported:r,action:o,forced:s,standard:i}){return[e,{name:e,number:t,description:n,supported:r,action:o,forced:s,standard:i}]},Ot=ar(),ur=function(){let e=de(),t=64+1,n=Array.from({length:t},(r,o)=>lr(o,e));return Object.assign({},...n)},lr=function(e,t){let n=dr(e,t);if(n===void 0)return{};let{name:r,description:o,supported:s,action:i,forced:a,standard:c}=n;return{[e]:{name:r,number:e,description:o,supported:s,action:i,forced:a,standard:c}}},dr=function(e,t){let n=t.find(({name:r})=>vt.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},So=ur();var pr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",pe=({stdout:e,stderr:t,all:n,error:r,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:c,isCanceled:l,killed:d,parsed:{options:{timeout:S}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let g=o===void 0?void 0:Ot[o].description,w=r&&r.code,x=`Command ${pr({timedOut:c,timeout:S,errorCode:w,signal:o,signalDescription:g,exitCode:s,isCanceled:l})}: ${i}`,v=Object.prototype.toString.call(r)==="[object Error]",F=v?`${x}
${r.message}`:x,B=[F,t,e].filter(Boolean).join(`
`);return v?(r.originalMessage=r.message,r.message=B):r=new Error(B),r.shortMessage=F,r.command=i,r.escapedCommand=a,r.exitCode=s,r.signal=o,r.signalDescription=g,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(c),r.isCanceled=l,r.killed=d&&!c,r};var V=["stdin","stdout","stderr"],fr=e=>V.some(t=>e[t]!==void 0),At=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return V.map(r=>e[r]);if(fr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${V.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,V.length);return Array.from({length:n},(r,o)=>t[o])};var Gt=E(require("node:os"),1),Mt=E(Lt(),1),mr=1e3*5,Ut=(e,t="SIGTERM",n={})=>{let r=e(t);return hr(e,t,n,r),r},hr=(e,t,n,r)=>{if(!gr(t,n,r))return;let o=wr(n),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},gr=(e,{forceKillAfterTimeout:t},n)=>Sr(e)&&t!==!1&&n,Sr=e=>e===Gt.default.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",wr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return mr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Ft=(e,t)=>{e.kill()&&(t.isCanceled=!0)},yr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Bt=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let o,s=new Promise((a,c)=>{o=setTimeout(()=>{yr(e,n,c)},t)}),i=r.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Dt=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},$t=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let o=(0,Mt.default)(()=>{e.kill()});return r.finally(()=>{o()})};function jt(e){return e!==null&&typeof e=="object"&&typeof e.pipe=="function"}var we=E(qt(),1),zt=E(Kt(),1),Xt=(e,t)=>{t!==void 0&&(jt(t)?t.pipe(e.stdin):e.stdin.end(t))},Yt=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=(0,zt.default)();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},ge=async(e,t)=>{if(!(!e||t===void 0)){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Se=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?(0,we.default)(e,{encoding:t,maxBuffer:r}):we.default.buffer(e,{maxBuffer:r})},Qt=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:o,maxBuffer:s},i)=>{let a=Se(e,{encoding:r,buffer:o,maxBuffer:s}),c=Se(t,{encoding:r,buffer:o,maxBuffer:s}),l=Se(n,{encoding:r,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,c,l])}catch(d){return Promise.all([{error:d,signal:d.signal,timedOut:d.timedOut},ge(e,a),ge(t,c),ge(n,l)])}};var Or=(async()=>{})().constructor.prototype,Ar=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Or,e)]),ye=(e,t)=>{for(let[n,r]of Ar){let o=typeof t=="function"?(...s)=>Reflect.apply(r.value,t(),s):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:o})}return e},Jt=e=>new Promise((t,n)=>{e.on("exit",(r,o)=>{t({exitCode:r,signal:o})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});var Zt=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Rr=/^[\w.-]+$/,Cr=/"/g,_r=e=>typeof e!="string"||Rr.test(e)?e:`"${e.replace(Cr,'\\"')}"`,en=(e,t)=>Zt(e,t).join(" "),tn=(e,t)=>Zt(e,t).map(n=>_r(n)).join(" ");var Nr=1e3*1e3*100,kr=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:o})=>{let s=t?{...M.default.env,...e}:e;return n?wt({env:s,cwd:r,execPath:o}):s},Lr=(e,t,n={})=>{let r=on.default._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:Nr,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||M.default.cwd(),execPath:M.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=kr(n),n.stdio=At(n),M.default.platform==="win32"&&rn.default.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},xe=(e,t,n)=>typeof t!="string"&&!nn.Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?ue(t):t;function sn(e,t,n){let r=Lr(e,t,n),o=en(e,t),s=tn(e,t);Dt(r.options);let i;try{i=Ee.default.spawn(r.file,r.args,r.options)}catch(w){let y=new Ee.default.ChildProcess,x=Promise.reject(pe({error:w,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return ye(y,x)}let a=Jt(i),c=Bt(i,r.options,a),l=$t(i,r.options,c),d={isCanceled:!1};i.kill=Ut.bind(null,i.kill.bind(i)),i.cancel=Ft.bind(null,i,d);let g=xt(async()=>{let[{error:w,exitCode:y,signal:x,timedOut:v},F,B,Sn]=await Qt(i,r.options,l),Te=xe(r.options,F),Ie=xe(r.options,B),ve=xe(r.options,Sn);if(w||y!==0||x!==null){let Oe=pe({error:w,exitCode:y,signal:x,stdout:Te,stderr:Ie,all:ve,command:o,escapedCommand:s,parsed:r,timedOut:v,isCanceled:d.isCanceled||(r.options.signal?r.options.signal.aborted:!1),killed:i.killed});if(!r.options.reject)return Oe;throw Oe}return{command:o,escapedCommand:s,exitCode:0,stdout:Te,stderr:Ie,all:ve,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Xt(i,r.options.input),i.all=Yt(i,r.options),ye(i,g)}var fn=require("fs"),mn=require("path/posix");var an="https://bitwarden.com";var b={PASSWORD_OPTIONS:"bw-generate-password-options",PASSWORD_ONE_TIME_WARNING:"bw-generate-password-warning-accepted",SESSION_TOKEN:"sessionToken",REPROMPT_HASH:"sessionRepromptHash",SERVER_URL:"cliServer",LAST_ACTIVITY_TIME:"lastActivityTime",VAULT_LOCK_REASON:"vaultLockReason"};var un=require("@raycast/api");var cn={lowercase:!0,uppercase:!0,number:!1,special:!1,passphrase:!1,length:14,words:3,separator:"-",capitalize:!1,includeNumber:!1};function ln(e){return Object.entries(e).flatMap(([t,n])=>n?[`--${t}`,n]:[])}async function dn(){let e=await un.LocalStorage.getItem(b.PASSWORD_OPTIONS);return{...cn,...e?JSON.parse(e):{}}}var U=require("@raycast/api");var P={IMMEDIATELY:0,ONE_MINUTE:6e4,FIVE_MINUTES:3e5,FIFTEEN_MINUTES:9e5,THIRTY_MINUTES:18e5,ONE_HOUR:36e5,FOUR_HOURS:144e5,EIGHT_HOURS:288e5,ONE_DAY:864e5,NEVER:-1},Gr={[P.IMMEDIATELY]:"Immediately",[P.ONE_MINUTE]:"1 Minute",[P.FIVE_MINUTES]:"5 Minutes",[P.FIFTEEN_MINUTES]:"15 Minutes",[P.THIRTY_MINUTES]:"30 Minutes",[P.ONE_HOUR]:"1 Hour",[P.FOUR_HOURS]:"4 Hours",[P.EIGHT_HOURS]:"8 Hours",[P.ONE_DAY]:"1 Day"};function pn(){let{serverUrl:e}=(0,U.getPreferenceValues)();return e===""||e==="bitwarden.com"||e==="https://bitwarden.com"?"":e}var Mr={search:"transientCopySearch","generate-password":"transientCopyGeneratePassword","generate-password-quick":"transientCopyGeneratePasswordQuick"};function be(e){let t=Mr[U.environment.commandName],n=(0,U.getPreferenceValues)()[t];return n==="never"?!1:n==="always"?!0:n==="passwords"?e==="password":!0}var Pe=class extends Error{constructor(t){super(t)}},Y=class extends Pe{constructor(t){super(t)}},Q=class extends Y{constructor(t){super(t??"Bitwarden CLI not found"),this.name="CLINotFoundError"}};var J=class extends Y{constructor(t){super(t??"Vault is locked"),this.name="VaultIsLockedError"}};var Z=class{constructor(){this.callbacks={};let{cliPath:t,clientId:n,clientSecret:r,serverCertsPath:o}=(0,m.getPreferenceValues)(),s=pn();if(this.cliPath=t||(process.arch=="arm64"?"/opt/homebrew/bin/bw":"/usr/local/bin/bw"),!(0,fn.existsSync)(this.cliPath))throw new Q(`Bitwarden CLI not found at ${this.cliPath}`);this.env={BITWARDENCLI_APPDATA_DIR:m.environment.supportPath,BW_CLIENTSECRET:r.trim(),BW_CLIENTID:n.trim(),PATH:(0,mn.dirname)(process.execPath),...s&&o?{NODE_EXTRA_CA_CERTS:o}:{}},this.initPromise=(async()=>{await this.checkServerUrl(s),this.lockReason=await m.LocalStorage.getItem(b.VAULT_LOCK_REASON)})()}setActionCallback(t,n){return this.callbacks[t]=n,this}setSessionToken(t){this.env={...this.env,BW_SESSION:t}}clearSessionToken(){delete this.env.BW_SESSION}withSession(t){return this.tempSessionToken=t,this}async initialize(){return await this.initPromise,this}async checkServerUrl(t){if((await m.LocalStorage.getItem(b.SERVER_URL)||"")===t)return;let r=await(0,m.showToast)({style:m.Toast.Style.Animated,title:"Switching server...",message:"Bitwarden server preference changed"});try{try{await this.logout()}catch{}await this.exec(["config","server",t||an]),await m.LocalStorage.setItem(b.SERVER_URL,t),r.style=m.Toast.Style.Success,r.title="Success",r.message="Bitwarden server changed"}catch(o){r.style=m.Toast.Style.Failure,r.title="Failed to switch server",o instanceof Error?r.message=o.message:r.message="Unknown error occurred"}}async setLockReason(t){this.lockReason=t,await m.LocalStorage.setItem(b.VAULT_LOCK_REASON,t)}async clearLockReason(){this.lockReason&&(await m.LocalStorage.removeItem(b.VAULT_LOCK_REASON),this.lockReason=void 0)}async exec(t,n){let{abortController:r,input:o="",skipLastActivityUpdate:s=!1}=n??{},i=this.env;this.tempSessionToken&&(i={...i,BW_SESSION:this.tempSessionToken});let a=await sn(this.cliPath,t,{env:i,input:o,signal:r?.signal});if(s||await m.LocalStorage.setItem(b.LAST_ACTIVITY_TIME,new Date().toISOString()),this.tempSessionToken&&(this.tempSessionToken=void 0),this.isPromptWaitingForMasterPassword(a))throw await this.lock(),new J;return a}async sync(){await this.exec(["sync"])}async login(){await this.exec(["login","--apikey"]),await this.clearLockReason(),await this.callbacks.login?.()}async logout(){await this.exec(["logout"]),this.clearSessionToken(),await this.callbacks.logout?.()}async lock(t,n){n&&!((await this.status()).status!=="unauthenticated")||(t&&await this.setLockReason(t),await this.exec(["lock"]),await this.callbacks.lock?.(t))}async unlock(t){let{stdout:n}=await this.exec(["unlock",t,"--raw"]);return this.setSessionToken(n),await this.clearLockReason(),await this.callbacks.unlock?.(t,n),n}async listItems(){let{stdout:t}=await this.exec(["list","items"]);return JSON.parse(t).filter(r=>!!r.name)}async listFolders(){let{stdout:t}=await this.exec(["list","folders"]);return JSON.parse(t)}async getTotp(t){let{stdout:n}=await this.exec(["get","totp",t]);return n}async status(){let{stdout:t}=await this.exec(["status"]);return JSON.parse(t)}async checkLockStatus(){try{return await this.exec(["unlock","--check"]),"unlocked"}catch(t){return t.stderr==="Vault is locked."?"locked":"unauthenticated"}}async generatePassword(t,n){let r=t?ln(t):[],{stdout:o}=await this.exec(["generate",...r],{abortController:n});return o}isPromptWaitingForMasterPassword(t){return!!(t.stderr&&t.stderr.includes("Master password"))}};var hn=require("@raycast/api"),gn=(e,t)=>{!hn.environment.isDevelopment||console.error(e,t)};var{generatePasswordQuickAction:Ur}=(0,h.getPreferenceValues)(),Fr={copy:async e=>{await h.Clipboard.copy(e,{transient:be("password")}),await(0,h.closeMainWindow)(),await(0,h.showHUD)("Copied password to clipboard")},paste:async e=>{await h.Clipboard.paste(e)},copyAndPaste:async e=>{await h.Clipboard.paste(e),await h.Clipboard.copy(e,{transient:be("password")}),await(0,h.showHUD)("Copied password to clipboard")}};async function Br(){let e=await(0,h.showToast)(h.Toast.Style.Animated,"Generating password\u2026");try{let t=await new Z().initialize(),n=await dn(),r=await t.generatePassword(n);await Fr[Ur](r)}catch(t){e.style=h.Toast.Style.Failure,e.message="Failed to generate",gn("Failed to generate password",t)}}var Dr=Br;0&&(module.exports={});
