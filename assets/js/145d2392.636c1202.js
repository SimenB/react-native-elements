"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[97878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,o=e.lazy,c=e.block,m=e.defaultValue,v=e.values,f=e.groupId,k=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,s.U)(),A=h.tabGroupChoices,C=h.setTabGroupChoices,w=(0,r.useState)(N),D=w[0],O=w[1],E=[],B=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=A[f];null!=x&&x!==D&&b.some((function(e){return e.value===x}))&&O(x)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==D&&(B(t),O(a),null!=f&&C(f,String(a)))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var l,o=E.indexOf(e.currentTarget)-1;n=null!=(l=E[o])?l:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return E.push(e)},onKeyDown:T,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(y.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function m(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>s});var a=n(67294),r=n(35742),l=n(14330),o=n(98576),i=n(61720),s=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},98992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(37047),i=(n(65488),n(85162),["components"]),s={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Web-platform specific note"),":"),(0,l.kt)("p",{parentName:"blockquote"},"You ",(0,l.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,l.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,l.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,l.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Overlay ModalComponent={Modal} ... />\n...\n")),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Overlay","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Overlay%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20OverlayComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20OverlayComponent%3A%20React.FunctionComponent%3COverlayComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bvisible%2C%20setVisible%5D%20%3D%20useState(false)%3B%0A%0Aconst%20toggleOverlay%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible(!visible)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20title%3D%22Open%20Overlay%22%0A%20%20%20%20%20%20onPress%3D%7BtoggleOverlay%7D%0A%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3COverlay%20isVisible%3D%7Bvisible%7D%20onBackdropPress%3D%7BtoggleOverlay%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textPrimary%7D%3EHello!%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textSecondary%7D%3E%0A%20%20%20%20%20%20%20%20Welcome%20to%20React%20Native%20Elements%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22wrench%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22white%22%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20title%3D%22Start%20Building%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleOverlay%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FOverlay%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0AtextPrimary%3A%20%7B%0A%20%20marginVertical%3A%2020%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2020%2C%0A%7D%2C%0AtextSecondary%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2017%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20OverlayComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0;var u=["components"],d={id:"overlay",title:"Overlay"},c=void 0,m={unversionedId:"components/overlay",id:"version-4.0.0-rc.6/components/overlay",title:"Overlay",description:"The Overlay is a view that floats above an app\u2019s content.",source:"@site/versioned_docs/version-4.0.0-rc.6/components/Overlay.mdx",sourceDirName:"components",slug:"/components/overlay",permalink:"/docs/4.0.0-rc.6/components/overlay",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/Overlay.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"overlay",title:"Overlay"},sidebar:"docs",previous:{title:"ListItem.Title",permalink:"/docs/4.0.0-rc.6/components/listitem_title"},next:{title:"PricingCard",permalink:"/docs/4.0.0-rc.6/components/pricingcard"}},v={},f=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],k={toc:f};function y(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"The Overlay is a view that floats above an app\u2019s content.\nOverlays are an easy way to inform or request information from the user."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Overlay } from "@rneui/themed";\n')),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(p,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ModalComponent")),(0,l.kt)("td",{parentName:"tr",align:null},"typeof Component"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Override React Native ",(0,l.kt)("inlineCode",{parentName:"td"},"Modal")," component (usable for web-platform).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"backdropStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of the backdrop container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fullScreen")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"If set to true, the modal will take up the entire screen width and height.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isVisible")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"If true, the overlay is visible.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onBackdropPress")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function")),(0,l.kt)("td",{parentName:"tr",align:null},"Handler for backdrop press (only works when ",(0,l.kt)("inlineCode",{parentName:"td"},"fullscreen")," is false).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"overlayStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of the actual overlay.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null}))))))}y.isMDXComponent=!0},61720:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"}}]);