var n=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var s=Object.prototype.hasOwnProperty;var c=e=>n(e,"__esModule",{value:!0});var d=(e,t)=>{for(var i in t)n(e,i,{get:t[i],enumerable:!0})},h=(e,t,i,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of m(t))!s.call(e,a)&&(i||a!=="default")&&n(e,a,{get:()=>t[a],enumerable:!(o=f(t,a))||o.enumerable});return e};var u=(e=>(t,i)=>e&&e.get(t)||(i=h(c({}),t,1),e&&e.set(t,i),i))(typeof WeakMap!="undefined"?new WeakMap:0);var w={};d(w,{default:()=>p});var r=require("@raycast/api");async function p(){await(0,r.open)("https://readwise.io/everything")}module.exports=u(w);0&&(module.exports={});
