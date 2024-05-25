"use strict";exports.id=633,exports.ids=[633],exports.modules={233:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(19510),i=n(15675),o=n(71289),a=n(55761),s=n(57441);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var u=["a"],h=["autoOrient","size","format","brightness","saturation","removeAlpha"],d=["width","height"],f=function e(t,n){return t.length>n?[t.slice(0,n)].concat(e(t.slice(n),n)):[t]},m=function(e){var t=e.r,n=e.g,r=e.b,i=e.a;return"undefined"===typeof i?"rgb("+[t,n,r].join(",")+")":"rgba("+[t,n,r,i].join(",")+")"},g=function(e,t){var n=void 0===t?{}:t,r=n.autoOrient,i=void 0!==r&&r,o=n.size,a=void 0===o?4:o,g=n.format,p=void 0===g?["png"]:g,v=n.brightness,x=void 0===v?1:v,b=n.saturation,j=void 0===b?1.2:b,w=n.removeAlpha,y=void 0!==w&&w,O=c(n,h);try{return Promise.resolve(s(e).metadata().then((function(e){var t=e.width,n=e.height,r=c(e,d);if(!t||!n)throw Error("Could not get required image metadata");return l({width:t,height:n},r)}))).then((function(t){var n,r=4,o=64;!(r<=a&&a<=o)&&console.error(["Please enter a `size` value between",r,"and",o].join(" "));var h=(n=s(e).resize(a,a,{fit:"inside"})).toFormat.apply(n,p).modulate(l({brightness:x,saturation:j},null!=O&&O.hue?{hue:null==O?void 0:O.hue}:{},null!=O&&O.lightness?{lightness:null==O?void 0:O.lightness}:{})),d=!1===y?h:h.removeAlpha(),g=!1===i?d:d.rotate();return Promise.resolve(g.clone().stats().then((function(e){var t=e.dominant,n=t.r,r=t.g,i=t.b;return{r:n,g:r,b:i,hex:"#"+[n,r,i].map((function(e){return e.toString(16).padStart(2,"0")})).join("")}}))).then((function(e){return Promise.resolve(g.clone().normalise().toBuffer({resolveWithObject:!0}).then((function(e){var t=e.data;return"data:image/"+e.info.format+";base64,"+t.toString("base64")})).catch((function(e){throw console.error("base64 generation failed",e),e}))).then((function(n){return Promise.resolve(g.clone().raw().toBuffer({resolveWithObject:!0}).then((function(e){var t=e.data,n=e.info,r=function(e){var t,n=e.data,r=e.info,i=r.channels,o=r.width,a=(t=[]).concat.apply(t,n),s=f(a,i);return f(s,o).map((function(e){return e.map((function(e){var t=e[0],n=e[1],r=e[2],i=e[3];return l({r:t,g:n,b:r},"undefined"===typeof i?{}:{a:Math.round(i/255*1e3)/1e3})}))}))}({data:t,info:n}),i=function(e){var t=e.pixels,n=e.info,r=t.map((function(e){var t=e.map((function(e){return m(e)}));return"linear-gradient(90deg, "+t.map((function(e,n){return e+(0===n?"":" "+n/t.length*100+"%")+(n===t.length?"":" "+(n+1)/t.length*100+"%")})).join(",")+")"}));r.length!==n.height&&console.error("Woops! Something went wrong here and caused the color height to differ from the source height.");var i=r.map((function(e,t){return 0===t?"0 0 ":"0 "+t/(r.length-1)*100+"%"})).join(","),o="100% "+100/r.length+"%";return{backgroundImage:r.join(","),backgroundPosition:i,backgroundSize:o,backgroundRepeat:"no-repeat"}}({pixels:r,info:n}),o=function(e){var t,n=e.pixels,r=e.info,i=n.map((function(e,t){return e.map((function(e,n){var r=e.a,i=c(e,u);return["rect",l({},"undefined"!==typeof r?{fill:m(i),"fill-opacity":r}:{fill:m(i),"fill-opacity":1},{width:1,height:1,x:n,y:t})]}))}));i.length!==r.height&&console.error("Woops! Something went wrong here and caused the color height to differ from the source height.");var o=(t=[]).concat.apply(t,i);return["svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",shapeRendering:"crispEdges",preserveAspectRatio:"none",viewBox:"0 0 "+r.width+" "+r.height,style:{position:"absolute",top:"50%",left:"50%",transformOrigin:"top left",transform:"translate(-50%, -50%)",right:0,bottom:0}},o]}({pixels:r,info:n});return{pixels:r,css:i,svg:o}})).catch((function(e){throw console.error("pixel generation failed",e),e}))).then((function(r){var i=r.pixels,o=r.css,a=r.svg;return{color:e,css:o,base64:n,metadata:t,pixels:i,svg:a}}))}))}))}))}catch(N){return Promise.reject(N)}};async function p({field:e,className:t}){if(!i.BH(e))return r.jsx("div",{});const{base64:n}=await g(Buffer.from(await(await fetch(e.url)).arrayBuffer()));return r.jsx(o.Z,{field:e,placeholder:"blur",blurDataURL:n,className:(0,a.Z)("w-screen object-cover",t)})}},10633:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(19510),i=n(2281),o=n(88429),a=n(233),s=n(58023);const l=(0,n(55782).default)((()=>n.e(861).then(n.bind(n,30861))),{loadableGenerated:{modules:["slices\\Testimonials\\index.tsx -> @/components/ScrollTo"]},ssr:!1}),c=({slice:e})=>(0,r.jsxs)(o.Z,{"data-slice-type":e.slice_type,"data-slice-variation":e.variation,children:[r.jsx("div",{className:"flex justify-center",children:r.jsx("h3",{className:"mb-20 text-2xl font-medium",children:"What Our Clients Say?"})}),r.jsx("div",{className:"no-scrollbar flex overflow-x-scroll",children:e.items.map(((e,t)=>(0,r.jsxs)("div",{id:"testimonial_"+t,className:(0,i.cn)("no-scrollbar min-w-full border-l border-r border-black/10 px-8 md:min-w-[33.3%]"),children:[r.jsx(s.K,{field:e.testimonial}),(0,r.jsxs)("div",{className:"mt-7 flex gap-2",children:[r.jsx(a.Z,{field:e.author_image,className:"size-10 max-w-10 rounded-full"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[r.jsx("p",{children:r.jsx("strong",{children:e.author_name})}),r.jsx("span",{className:"text-xs",children:e.author_tagline})]})]})]},e.author_name)))}),r.jsx("div",{className:"mt-16 flex items-center justify-center gap-1",children:e.items.map(((t,n)=>r.jsx(l,{skip:3,count:e.items.length,id:"testimonial_"+n},"testimonial_"+n)))})]})}};