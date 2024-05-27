"use strict";exports.id=86,exports.ids=[86],exports.modules={77836:(e,a,s)=>{s.d(a,{default:()=>c});var t=s(10326),i=s(97857),l=s(17577),r=s(5602),d=s(90434);function n({meta_image:e,last_publication_date:a,meta_title:s,meta_description:l,uid:n,className:c}){return t.jsx(d.default,{href:`/blog/${n}`,className:"flex gap-1",children:(0,t.jsxs)("div",{className:(0,i.cn)("bg-white",c),children:[t.jsx(r.PrismicNextImage,{field:e}),(0,t.jsxs)("div",{className:"flex flex-col gap-4 p-5",children:[t.jsx("span",{className:"text-sm font-medium text-[#279DD7]",children:new Date(a).toDateString().replace(/(\w+) (\w+) (\w+) (\w+)/gm,"$3 $2 $4")}),t.jsx("h2",{className:"line-clamp-2 text-2xl",children:s}),t.jsx("p",{className:"line-clamp-4 text-sm md:text-base",children:l}),(0,t.jsxs)("div",{className:"flex gap-2",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),t.jsx("span",{children:"Explore"})]})]})]})})}function c(e){const[a,s]=(0,l.useState)(!0),[r,d]=(0,l.useState)(!1),[c,o]=(0,l.useState)([]);return(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:(0,i.cn)("grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"),children:c.map((e=>t.jsx(n,{last_publication_date:e.last_publication_date,meta_description:e.data.meta_description,meta_image:e.data.meta_image,meta_title:e.data.meta_title,uid:e.uid},e.id)))}),a&&"Loading...",t.jsx("div",{className:"flex w-full items-center justify-center py-16",children:r?t.jsx("span",{children:"You have reached the end!"}):t.jsx("button",{onClick:()=>async function(e){s(!0);const a=await fetch("/api/posts",{method:"POST",cache:"force-cache",body:JSON.stringify({postCount:e}),next:{tags:["prismic"]}});try{const t=await a.json();e>t.length&&d(!0),o(t),s(!1)}catch(t){console.log(t)}}(e.initialCount+c.length+3),className:"border-2 border-current bg-transparent p-4 text-[#279DD7]",children:"LOAD MORE"})})]})}},83520:(e,a,s)=>{s.r(a),s.d(a,{default:()=>r});var t=s(10326),i=s(97857),l=s(17577);function r({id:e,count:a,skip:s}){const[r,d]=(0,l.useState)(0),n=()=>{const s=e.substring(0,e.length-1),t=Array.from({length:a},((e,a)=>"trigger_"+s+a)).map((e=>document.getElementById(e))).filter((e=>e));t.forEach((a=>{a.classList.remove("trigger-active"),a.classList.remove("trigger-outline"),a.getAttribute("id")===`trigger_${e}`?a.classList.add("trigger-active"):a.classList.add("trigger-outline")}))};return t.jsx("div",{id:"trigger_"+e,className:(0,i.cn)("trigger-outline size-4 cursor-pointer rounded-full"),onClick:()=>{const a=document.getElementById(e);a&&a.scrollIntoView({inline:"end",block:"nearest",behavior:"smooth"}),n()}})}},44740:(e,a,s)=>{s.d(a,{default:()=>d});var t=s(10326),i=s(40405),l=s(94043),r=s(17577);function d({slice:e}){const a=(0,r.useRef)(null),s=(0,r.useRef)(null),d=(0,r.useRef)(null);return(0,t.jsxs)(t.Fragment,{children:[t.jsx("video",{loop:!0,ref:a,src:e.primary.videourl,className:"hidden h-auto w-auto md:block"}),t.jsx("video",{loop:!0,ref:s,src:e.primary.mobile_videourl,className:"absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover md:hidden"}),t.jsx("div",{className:"relative overflow-hidden bg-black/60 md:absolute md:bottom-0 md:left-0 md:right-0 md:top-0",children:(0,t.jsxs)("div",{className:"ml-[8%] max-w-96 py-16 text-white md:translate-y-1/2 md:py-0",children:[i.qO(e.primary.heading)&&t.jsx("h2",{className:"text-6xl",children:t.jsx(l.K,{field:e.primary.heading})}),i.qO(e.primary.body)&&t.jsx("p",{className:"mt-3",children:t.jsx(l.K,{field:e.primary.body})})]})}),t.jsx("div",{className:"absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",children:t.jsx("button",{onClick:()=>{a.current&&a.current.play(),s.current&&s.current.play(),d.current.classList.add("hidden")},ref:d,children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"92",height:"92",fill:"none",viewBox:"0 0 92 92",children:[t.jsx("circle",{cx:"46",cy:"46",r:"46",fill:"#fff"}),t.jsx("g",{clipPath:"url(#clip0_2152_22)",children:t.jsx("path",{fill:"#279DD7",d:"M35.688 25.944a1.27 1.27 0 00-.562.322.7.7 0 00-.211.483v38.5c0 .173.073.342.21.485.138.144.333.256.563.323.23.067.482.086.727.054.245-.032.47-.113.65-.233L65.7 46.628a.946.946 0 00.284-.287.65.65 0 00.1-.34.65.65 0 00-.1-.34.947.947 0 00-.284-.288l-28.638-19.25a1.52 1.52 0 00-.649-.232 1.794 1.794 0 00-.726.054v-.001z"})}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_2152_22",children:t.jsx("path",{fill:"#fff",d:"M0 0H56V81H0z",transform:"rotate(-90 42 32)"})})})]})})})]})}},91664:(e,a,s)=>{s.d(a,{z:()=>c});var t=s(10326),i=s(17577),l=s(34214),r=s(28671),d=s(51223);const n=(0,r.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-secondary/90 hover:text-secondary-foreground",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef((({className:e,variant:a,size:s,asChild:i=!1,...r},c)=>{const o=i?l.g7:"button";return t.jsx(o,{className:(0,d.cn)(n({variant:a,size:s,className:e})),ref:c,...r})}));c.displayName="Button"},51223:(e,a,s)=>{s.d(a,{cn:()=>l});var t=s(41135),i=s(31009);function l(...e){return(0,i.m6)((0,t.W)(e))}},83060:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});var t=s(10326),i=s(96445),l=s(76012),r=s(5602),d=s(22342),n=s(54876);const c=({slice:e})=>t.jsx("section",{"data-slice-type":e.slice_type,"data-slice-variation":e.variation,className:"rc-container",children:(0,t.jsxs)(i.Z,{children:[t.jsx("h2",{className:"mb-10 text-center text-4xl font-extrabold tracking-tight text-gray-900",children:(0,l.S)(e?.primary?.title)}),t.jsx("div",{className:"grid grid-cols-2 gap-1 text-center md:grid-cols-3 ",children:e?.items.map(((e,a)=>(0,t.jsxs)(n.E.div,{className:"p-5",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0,transition:{type:"spring",bounce:.4,duration:2,delay:.5*(a+1)}},viewport:{once:!0,amount:.2},children:[t.jsx(r.PrismicNextImage,{field:e.service_image,fallbackAlt:"",className:"m-auto"}),t.jsx("p",{className:"pt-5 font-bold ",children:e.service_name}),t.jsx(d.v,{field:e.service_description})]},a)))})]})})},15808:(e,a,s)=>{s.r(a),s.d(a,{default:()=>o});var t=s(10326),i=s(96445),l=s(40405),r=s(5602),d=s(94043),n=s(41135),c=s(54876);const o=({slice:e})=>t.jsx(i.Z,{"data-slice-type":e.slice_type,"data-slice-variation":e.variation,children:(0,t.jsxs)("div",{className:"grid grid-cols-1 grid-rows-2 place-items-center gap-6 md:grid-cols-2 md:grid-rows-1 overflow-hidden",children:[(0,t.jsxs)(c.E.div,{initial:{opacity:0,x:-100},whileInView:{opacity:1,x:0,transition:{type:"spring",bounce:.4,duration:2}},viewport:{amount:.5,once:!0},className:"md:prose",children:[l.qO(e.primary.heading)&&t.jsx("h3",{className:"text-2xl font-medium md:text-4xl 2xl:text-5xl",children:t.jsx(d.K,{field:e.primary.heading})}),l.qO(e.primary.body)&&t.jsx("p",{className:"line-clamp-4 text-balance md:line-clamp-none",children:t.jsx(d.K,{field:e.primary.body})})]}),(0,t.jsxs)(c.E.div,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0,transition:{type:"spring",bounce:.4,duration:2}},viewport:{amount:.5,once:!0},className:(0,n.Z)("-order-1","reverse"===e.variation?"":"md:order-1"),children:[l.BH(e.primary.image)&&t.jsx(r.PrismicNextImage,{className:(0,n.Z)(l.BH(e.primary.mobile_image)&&"hidden md:inline-block"),field:e.primary.image}),l.BH(e.primary.mobile_image)&&t.jsx(r.PrismicNextImage,{className:"rounded md:hidden",field:e.primary.mobile_image})]})]})})},92346:(e,a,s)=>{s.r(a),s.d(a,{default:()=>d});var t=s(10326),i=s(96445),l=s(76012),r=s(5602);const d=({slice:e})=>t.jsx("section",{"data-slice-type":e.slice_type,"data-slice-variation":e.variation,className:"rc-container",children:(0,t.jsxs)(i.Z,{className:"bg-white shadow-xl pt-5",children:[t.jsx("h2",{className:"mb-10 text-center text-4xl font-extrabold tracking-tight text-gray-900",children:(0,l.S)(e?.primary?.title)}),t.jsx(r.PrismicNextImage,{field:e?.primary?.gallery_image,fallbackAlt:"",className:"m-auto"})]})})},31808:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});var t=s(10326),i=(s(6998),s(33265));const l=(0,i.default)((async()=>{}),{loadableGenerated:{modules:["slices\\Map\\index.tsx -> react-leaflet"]},ssr:!1}),r=(0,i.default)((async()=>{}),{loadableGenerated:{modules:["slices\\Map\\index.tsx -> react-leaflet"]},ssr:!1}),d=(0,i.default)((async()=>{}),{loadableGenerated:{modules:["slices\\Map\\index.tsx -> react-leaflet"]},ssr:!1}),n=(0,i.default)((async()=>{}),{loadableGenerated:{modules:["slices\\Map\\index.tsx -> react-leaflet"]},ssr:!1}),c=({slice:e})=>t.jsx("section",{suppressHydrationWarning:!0,"data-slice-type":e.slice_type,"data-slice-variation":e.variation,className:"mt-16 md:mt-36",children:(0,t.jsxs)(l,{style:{height:"50vh"},zoom:13,dragging:!0,scrollWheelZoom:!1,center:[e.primary.coordinates.latitude,e.primary.coordinates.longitude],children:[t.jsx(r,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(d,{position:[e.primary.coordinates.latitude,e.primary.coordinates.longitude],children:t.jsx(n,{children:e.primary.marker_label})})]})})},67362:(e,a,s)=>{s.r(a),s.d(a,{default:()=>n});var t=s(10326),i=s(76012),l=s(96445),r=s(5602),d=s(54876);const n=({slice:e})=>t.jsx("section",{"data-slice-type":e.slice_type,"data-slice-variation":e.variation,className:"rc-container",children:(0,t.jsxs)(l.Z,{children:[t.jsx("h2",{className:"mb-10 text-center text-4xl font-extrabold tracking-tight text-gray-900",children:(0,i.S)(e?.primary?.title)}),t.jsx("div",{className:"grid grid-cols-2 gap-4 text-center md:grid-cols-4 ",children:e?.items.map(((e,a)=>(0,t.jsxs)(d.E.div,{className:"p-5",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0,transition:{type:"spring",bounce:.4,duration:2,delay:.5*(a+1)}},viewport:{once:!0,amount:.2},children:[t.jsx(r.PrismicNextImage,{field:e.service_image,fallbackAlt:"",className:"m-auto"}),t.jsx("p",{className:"pt-5 font-bold ",children:e.service_name})]},a)))})]})})},32413:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});var t=s(10326),i=s(91664),l=s(76012),r=s(88217),d=s(90434),n=s(54876);const c=({slice:e})=>t.jsx("section",{"data-slice-type":e.slice_type,"data-slice-variation":e.variation,children:t.jsx("section",{children:(0,t.jsxs)("div",{className:"rc-container flex flex-col gap-10 duration-300 md:flex-row",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-5 md:w-1/2",children:[t.jsx("h6",{className:"font-bold text-[#279DD7]",children:"OUR TEAM"}),t.jsx("h2",{className:"text-5xl font-bold",children:(0,l.S)(e.primary.heading)}),t.jsx("p",{className:"",children:(0,l.S)(e.primary.tagline)}),t.jsx(d.default,{href:(0,r.s)(e.primary.button_navigates_to)||"#",children:t.jsx(i.z,{className:"w-fit rounded-none bg-[#279DD7]",children:"DISCOVER MORE"})})]}),t.jsx("div",{className:"flex flex-col gap-5 overflow-hidden",children:e.items.map(((e,a)=>(0,t.jsxs)(n.E.div,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0,transition:{type:"spring",bounce:.4,duration:2,delay:.2*a}},viewport:{amount:.5,once:!0},className:"relative ml-7 bg-[#14193C] p-5",children:[t.jsx("div",{className:"absolute -left-7 top-1/2 h-14 w-14 -translate-y-1/2 bg-[#279DD7]",children:e.icon.url&&t.jsx("img",{src:e.icon.url})}),(0,t.jsxs)("div",{className:"ml-7",children:[t.jsx("h6",{className:"text-md font-bold text-[#279DD7]",children:(0,l.S)(e.heading)}),t.jsx("p",{className:"text-white",children:(0,l.S)(e.content)})]})]},a)))})]})})})},66280:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var t=s(10326),i=s(17577),l=s(88694),r=s(51223);const d=l.fC,n=i.forwardRef((({className:e,...a},s)=>t.jsx(l.ck,{ref:s,className:(0,r.cn)("border-b border-white/20",e),...a})));n.displayName="AccordionItem";const c=i.forwardRef((({className:e,children:a,...s},i)=>t.jsx(l.h4,{className:"flex",children:(0,t.jsxs)(l.xz,{ref:i,className:(0,r.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...s,children:[a,t.jsx("span",{children:"+"})]})})));c.displayName=l.xz.displayName;const o=i.forwardRef((({className:e,children:a,...s},i)=>t.jsx(l.VY,{ref:i,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...s,children:t.jsx("div",{className:(0,r.cn)("pb-4 pt-0",e),children:a})})));o.displayName=l.VY.displayName;var x=s(76012),m=s(69170);const h=({slice:e})=>t.jsx("section",{"data-slice-type":e.slice_type,"data-slice-variation":e.variation,className:"mb-12",children:(0,t.jsxs)("section",{children:[t.jsx("div",{className:"bg-[url('https://kit.creativemox.com/stockytow/wp-content/uploads/sites/6/2023/10/white-arrow-on-asphalt-road-traffic-sign-e1697705634143.jpg')] bg-cover bg-no-repeat",children:t.jsx("div",{className:"bg-[blue-950/70]",children:t.jsx("div",{className:"rc-container flex w-full justify-center",children:(0,t.jsxs)("div",{className:"mb-10 flex max-w-xl flex-col items-center justify-center gap-4 text-center",children:[t.jsx("h6",{className:"font-bold text-[#279DD7]",children:"OUR VALUE"}),t.jsx("h3",{className:"text-4xl font-bold text-[#14193C]",children:(0,x.S)(e.primary.heading)}),t.jsx("p",{className:"font-bold text-[#14193C]",children:(0,x.S)(e.primary.tagline)})]})})})}),t.jsx("div",{className:"rc-container -mt-20 !py-0 overflow-hidden",children:(0,t.jsxs)("div",{className:"flex flex-col items-center bg-[#14193C] text-white/90 duration-300 md:flex-row",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-4 p-10",children:[t.jsx("h4",{className:"text-3xl",children:(0,x.S)(e.primary.featured_heading)}),t.jsx("p",{className:"text-white/70",children:(0,x.S)(e.primary.featured_tagline)}),t.jsx(d,{type:"single",collapsible:!0,children:e.items.map(((e,a)=>(0,t.jsxs)(n,{value:`item-${a}`,children:[t.jsx(c,{className:"text-[#279DD7]",children:e.heading}),t.jsx(o,{children:(0,x.S)(e.content)})]},a)))})]}),t.jsx("div",{className:"w-full duration-300 md:w-1/2",children:t.jsx(m.P,{field:e.primary.featured_image})})]})})]})})},39473:(e,a,s)=>{s.r(a),s.d(a,{default:()=>o});var t=s(10326),i=s(77626),l=s.n(i),r=s(69170),d=s(61006),n=(s(63754),s(12119),s(40155));s(17577);function c({content:e}){return(0,t.jsxs)("div",{className:"jsx-eec06ed92dc87d74",children:[t.jsx("div",{className:"jsx-eec06ed92dc87d74 flex flex-row gap-1",children:new Array(5).fill(null).map(((e,a)=>t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"jsx-eec06ed92dc87d74",children:t.jsx("path",{d:"M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z",fill:"#279DD7",className:"jsx-eec06ed92dc87d74"})},a)))}),(0,t.jsxs)("p",{className:"jsx-eec06ed92dc87d74 my-4 h-[4.8rem] overflow-auto text-left",children:["\u201c",e,"\u201d"]}),t.jsx(l(),{id:"eec06ed92dc87d74",children:".jsx-eec06ed92dc87d74::-webkit-scrollbar{width:8px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px grey;-moz-box-shadow:inset 0 0 5px grey;box-shadow:inset 0 0 5px grey;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-thumb{background:#ccc;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-thumb::hover{background:#bbb}@media screen and (max-width:600px){.jsx-eec06ed92dc87d74::-webkit-scrollbar{width:2px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px white;-moz-box-shadow:inset 0 0 5px white;box-shadow:inset 0 0 5px white;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-thumb{background:#ccc;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.jsx-eec06ed92dc87d74::-webkit-scrollbar-thumb::hover{background:#bbb}}"})]})}const o=({slice:e})=>(0,t.jsxs)("section",{"data-slice-type":e.slice_type,"data-slice-variation":e.variation,className:"jsx-756593689130641c bg-white",children:[(0,t.jsxs)("div",{className:"jsx-756593689130641c mx-auto max-w-screen-2xl px-4 py-8 text-center lg:px-6 lg:py-16",children:[(0,t.jsxs)("div",{className:"jsx-756593689130641c mx-auto max-w-screen-sm",children:[t.jsx("h2",{className:"jsx-756593689130641c mb-4 text-4xl font-extrabold tracking-tight text-gray-900",children:"Testimonials"}),t.jsx("p",{className:"jsx-756593689130641c mb-8 font-light text-gray-500 sm:text-xl lg:mb-16",children:e.primary.tagline})]}),t.jsx(d.tq,{navigation:!0,modules:[n.W_],className:"mySwiper",breakpoints:{640:{slidesPerView:1},768:{slidesPerView:1},1024:{slidesPerView:3}},children:e.items.map(((e,a)=>t.jsx(d.o5,{children:(0,t.jsxs)("div",{className:"jsx-756593689130641c relative w-full py-1 ",children:[(0,t.jsxs)("figure",{className:"jsx-756593689130641c flex max-w-[98%] flex-col items-start justify-center overflow-hidden border-b border-gray-200 bg-gray-50 p-8 text-center md:p-12 lg:border-r",children:[(0,t.jsxs)("blockquote",{className:"jsx-756593689130641c mx-auto mb-8 max-w-[96%] text-gray-500",children:[t.jsx("h3",{className:"jsx-756593689130641c line-clamp-[1] max-w-[96%] truncate text-wrap text-left text-lg font-semibold text-gray-900 ",children:e.heading}),t.jsx(c,{content:e.content})]}),(0,t.jsxs)("figcaption",{className:"jsx-756593689130641c flex max-w-[96%] items-center justify-center space-x-3",children:[t.jsx(r.P,{className:"size-12 rounded-full object-cover",field:e.author_image}),(0,t.jsxs)("div",{className:"jsx-756593689130641c  z-10 space-y-0.5 overflow-hidden text-left font-medium ",children:[t.jsx("div",{className:"jsx-756593689130641c truncate",children:e.author_name}),t.jsx("div",{className:"jsx-756593689130641c truncate text-sm font-light text-gray-500",children:e.author_tagline})]})]})]}),t.jsx("div",{className:"jsx-756593689130641c absolute bottom-10 right-12 ",children:t.jsx("svg",{width:"70",height:"70",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"jsx-756593689130641c",children:t.jsx("path",{d:"M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z",fill:"#E2EDFC",fillRule:"evenodd",clipRule:"evenodd",className:"jsx-756593689130641c"})})})]})},a)))})]}),t.jsx(l(),{id:"756593689130641c",children:"body{--swiper-navigation-color:#279DD7}"})]})},1845:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var t=s(10326),i=s(17577),l=s(90220),r=s(51223);const d=i.forwardRef((({className:e,orientation:a="horizontal",decorative:s=!0,...i},d)=>t.jsx(l.f,{ref:d,decorative:s,orientation:a,className:(0,r.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",e),...i})));d.displayName=l.f.displayName;var n=s(76012),c=s(69170),o=s(46226),x=s(54876);const m=({slice:e})=>t.jsx("section",{"data-slice-type":e.slice_type,"data-slice-variation":e.variation,children:t.jsx("section",{children:(0,t.jsxs)("div",{className:"rc-container flex flex-col gap-10 overflow-hidden duration-300 md:flex-row",children:[(0,t.jsxs)(x.E.div,{initial:{opacity:0,x:-100},whileInView:{opacity:1,x:0,transition:{type:"spring",bounce:.4,duration:2}},viewport:{amount:.5,once:!0},className:"flex flex-col gap-5 md:w-1/2",children:[t.jsx("h6",{className:"font-bold text-[#279DD7]",children:"WHO WE ARE"}),t.jsx("h2",{className:"text-5xl font-bold",children:(0,n.S)(e.primary.heading)}),t.jsx("p",{className:"",children:(0,n.S)(e.primary.tagline)}),t.jsx("div",{className:"grid grid-cols-2",children:e.items.map(((e,a)=>(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"h-4 w-4 rounded-full bg-[#279DD7]"}),t.jsx("span",{children:e.item})]},a)))}),t.jsx(d,{}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"grid h-14 w-14 place-items-center bg-[#279DD7]",children:t.jsx(o.default,{src:"/contact-icon.png",alt:"Contact Icon",width:70,height:70})}),(0,t.jsxs)("div",{children:[t.jsx("p",{className:"font-semibold text-black/50",children:"24/7 Emergency Towing"}),t.jsx("h3",{className:"text-2xl text-[#14193C]",children:e.primary.contact_phone_number})]})]})]}),(0,t.jsxs)(x.E.div,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0,transition:{type:"spring",bounce:.4,duration:2}},viewport:{amount:.5,once:!0},className:"relative ml-4 mt-4 w-full duration-300 md:w-1/2",children:[t.jsx("div",{className:"absolute -left-5 -top-5 bg-white p-1",children:(0,t.jsxs)("div",{className:"w-fit bg-[#14193C] p-5 text-center",children:[t.jsx("h2",{className:"text-3xl font-bold text-[#279DD7]",children:e.primary.featured_image_lable}),t.jsx("p",{className:"text-white",children:"YEARS OF EXPERIENCE"})]})}),t.jsx(c.P,{field:e.primary.featured_image})]})]})})})},29572:(e,a,s)=>{s.r(a),s.d(a,{default:()=>x});var t=s(10326),i=s(91664),l=s(51223),r=s(76012),d=s(88217),n=s(69170),c=s(90434),o=s(54876);const x=({slice:e})=>t.jsx("section",{"data-slice-type":e.slice_type,"data-slice-variation":e.variation,children:t.jsx("section",{className:(0,l.cn)("h-full bg-cover bg-no-repeat"),style:{minHeight:e.primary.background_image.dimensions?.height,backgroundImage:`url("${e.primary.background_image.url||void 0}")`},children:t.jsx("div",{className:"h-full bg-blue-950/70",style:{minHeight:e.primary.background_image.dimensions?.height},children:(0,t.jsxs)("div",{className:"rc-container flex flex-col gap-10 duration-300 xl:flex-row xl:items-center xl:justify-between",children:[(0,t.jsxs)("div",{className:"flex flex-1 flex-col gap-5",children:[t.jsx("h6",{className:"font-bold text-[#279DD7]",children:"WHY CHOOSE US"}),t.jsx("h2",{className:"text-5xl font-bold text-white",children:(0,r.S)(e.primary.heading)}),t.jsx("p",{className:"text-white",children:(0,r.S)(e.primary.tagline)}),t.jsx(c.default,{href:(0,d.s)(e.primary.button_navigates_to)||"#",children:t.jsx(i.z,{className:"w-fit rounded-none bg-[#279DD7]",children:e.primary.button_label})})]}),t.jsx("div",{className:"grid grid-cols-2 gap-8 overflow-hidden",children:e.items.map(((e,a)=>(0,t.jsxs)(o.E.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0,transition:{type:"spring",bounce:.4,duration:2,delay:.5*(a+1)}},viewport:{once:!0,amount:.2},className:"group flex w-full flex-col items-center gap-2 bg-[#14193C] px-4 py-10 duration-300 hover:bg-[#279DD7] xl:max-w-xs",children:[t.jsx("div",{className:"grid h-14 w-14 place-items-center overflow-hidden bg-primary duration-300 group-hover:bg-white",children:t.jsx(n.P,{field:e.icon,className:"h-full w-full object-cover"})}),t.jsx("h4",{className:"font-bold text-[#279DD7] duration-300 group-hover:text-white",children:(0,r.S)(e.heading)}),t.jsx("p",{className:"text-center text-white",children:(0,r.S)(e.tagline)})]},a)))})]})})})})},28050:(e,a,s)=>{s.d(a,{w:()=>i});var t=s(55782);const i={banner:(0,t.default)((()=>s.e(9).then(s.bind(s,60009))),{loadableGenerated:{modules:["slices\\index.ts -> ./Banner"]}}),blog_grid:(0,t.default)((()=>s.e(9502).then(s.bind(s,9502))),{loadableGenerated:{modules:["slices\\index.ts -> ./BlogGrid"]}}),blog_preview:(0,t.default)((()=>s.e(8235).then(s.bind(s,88235))),{loadableGenerated:{modules:["slices\\index.ts -> ./BlogPreview"]}}),body:(0,t.default)((()=>s.e(2562).then(s.bind(s,52562))),{loadableGenerated:{modules:["slices\\index.ts -> ./Body"]}}),call_to_action:(0,t.default)((()=>s.e(1721).then(s.bind(s,61721))),{loadableGenerated:{modules:["slices\\index.ts -> ./CallToAction"]}}),commercial_services:(0,t.default)((()=>s.e(2623).then(s.bind(s,62623))),{loadableGenerated:{modules:["slices\\index.ts -> ./CommercialServices"]}}),content_grid:(0,t.default)((()=>s.e(3038).then(s.bind(s,73038))),{loadableGenerated:{modules:["slices\\index.ts -> ./ContentGrid"]}}),faq_section:(0,t.default)((()=>s.e(2111).then(s.bind(s,32111))),{loadableGenerated:{modules:["slices\\index.ts -> ./FaqSection"]}}),get_in_touch_block:(0,t.default)((()=>s.e(1363).then(s.bind(s,31363))),{loadableGenerated:{modules:["slices\\index.ts -> ./GetInTouchBlock"]}}),hero:(0,t.default)((()=>s.e(7738).then(s.bind(s,27738))),{loadableGenerated:{modules:["slices\\index.ts -> ./Hero"]}}),highlight:(0,t.default)((()=>s.e(1857).then(s.bind(s,21857))),{loadableGenerated:{modules:["slices\\index.ts -> ./Highlight"]}}),keys_gallery:(0,t.default)((()=>s.e(4274).then(s.bind(s,54274))),{loadableGenerated:{modules:["slices\\index.ts -> ./KeysGallery"]}}),locations:(0,t.default)((()=>s.e(8413).then(s.bind(s,48413))),{loadableGenerated:{modules:["slices\\index.ts -> ./Locations"]}}),map:(0,t.default)((()=>s.e(1299).then(s.bind(s,61299))),{loadableGenerated:{modules:["slices\\index.ts -> ./Map"]}}),our_services:(0,t.default)((()=>s.e(4462).then(s.bind(s,64462))),{loadableGenerated:{modules:["slices\\index.ts -> ./OurServices"]}}),our_team:(0,t.default)((()=>s.e(4440).then(s.bind(s,34440))),{loadableGenerated:{modules:["slices\\index.ts -> ./OurTeam"]}}),our_value:(0,t.default)((()=>s.e(3382).then(s.bind(s,83382))),{loadableGenerated:{modules:["slices\\index.ts -> ./OurValue"]}}),post:(0,t.default)((()=>s.e(7911).then(s.bind(s,57911))),{loadableGenerated:{modules:["slices\\index.ts -> ./Post"]}}),reviews:(0,t.default)((()=>s.e(1695).then(s.bind(s,81695))),{loadableGenerated:{modules:["slices\\index.ts -> ./Reviews"]}}),testimonials:(0,t.default)((()=>s.e(633).then(s.bind(s,10633))),{loadableGenerated:{modules:["slices\\index.ts -> ./Testimonials"]}}),video_banner:(0,t.default)((()=>s.e(9516).then(s.bind(s,29516))),{loadableGenerated:{modules:["slices\\index.ts -> ./VideoBanner"]}}),who_we_are:(0,t.default)((()=>s.e(5100).then(s.bind(s,85100))),{loadableGenerated:{modules:["slices\\index.ts -> ./WhoWeAre"]}}),why_choose_us:(0,t.default)((()=>s.e(2932).then(s.bind(s,32932))),{loadableGenerated:{modules:["slices\\index.ts -> ./WhyChooseUs"]}})}}};