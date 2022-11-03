"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[96],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"LSP14Ownable2Step",sidebar_position:11},l="LSP14Ownable2Step",s={unversionedId:"standards/smart-contracts/lsp14-ownable-2-step",id:"standards/smart-contracts/lsp14-ownable-2-step",title:"LSP14Ownable2Step",description:"LSP14Ownable2Step.sol",source:"@site/docs/standards/smart-contracts/lsp14-ownable-2-step.md",sourceDirName:"standards/smart-contracts",slug:"/standards/smart-contracts/lsp14-ownable-2-step",permalink:"/standards/smart-contracts/lsp14-ownable-2-step",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/smart-contracts/lsp14-ownable-2-step.md",tags:[],version:"current",lastUpdatedAt:1664527106,formattedLastUpdatedAt:"Sep 30, 2022",sidebarPosition:11,frontMatter:{title:"LSP14Ownable2Step",sidebar_position:11},sidebar:"standardsSidebar",previous:{title:"LSP1UniversalReceiverDelegateVault",permalink:"/standards/smart-contracts/lsp1-universal-receiver-delegate-vault"},next:{title:"\ud83d\udcec Relayer API",permalink:"/standards/relayer-api"}},o={},p=[{value:"Functions",id:"functions",level:2},{value:"owner",id:"owner",level:3},{value:"Return Values:",id:"return-values",level:4},{value:"pendingOwner",id:"pendingowner",level:3},{value:"Return Values:",id:"return-values-1",level:4},{value:"transferOwnership",id:"transferownership",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"acceptOwnership",id:"acceptownership",level:3},{value:"renounceOwnership",id:"renounceownership",level:3},{value:"Events",id:"events",level:2},{value:"OwnershipTransferStarted",id:"ownershiptransferstarted",level:3},{value:"Values:",id:"values",level:4},{value:"OwnershipTransferred",id:"ownershiptransferred",level:3},{value:"Values:",id:"values-1",level:4},{value:"RenounceOwnershipStarted",id:"renounceownershipstarted",level:3},{value:"OwnershipRenounced",id:"ownershiprenounced",level:3},{value:"References",id:"references",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lsp14ownable2step"},"LSP14Ownable2Step"),(0,a.kt)("admonition",{title:"Solidity contract",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts/blob/main/contracts/LSP14Ownable2Step/LSP14Ownable2Step.sol"},(0,a.kt)("inlineCode",{parentName:"a"},"LSP14Ownable2Step.sol")))),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"LSP14Ownable2Step")," contract is an implementation of the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#"},"LSP14-Ownable-2-Step Standard")),"."),(0,a.kt)("p",null,"This contract can be ",(0,a.kt)("strong",{parentName:"p"},"inherited")," whenever one wants to make his contract ",(0,a.kt)("strong",{parentName:"p"},"owned")," by an EOA or by another contract. This contract contains all the necessary methods for ",(0,a.kt)("strong",{parentName:"p"},"managing the ownership")," of a contract, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"tranferOwnership(...)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"acceptOwnership(...)"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"renounceOwnership(...)")),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"owner"},"owner"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function owner() public view returns (address owner)\n")),(0,a.kt)("p",null,"Returns the address of the current contract owner."),(0,a.kt)("h4",{id:"return-values"},"Return Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"owner")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current owner of the contract.")))),(0,a.kt)("h3",{id:"pendingowner"},"pendingOwner"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function pendingOwner() public view returns (address)\n")),(0,a.kt)("p",null,"Return the address of the pending owner that was initiated by ",(0,a.kt)("a",{parentName:"p",href:"#transferownership"},(0,a.kt)("inlineCode",{parentName:"a"},"transferOwnership(address)")),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NB:")," if no ownership transfer is in progress, the ",(0,a.kt)("inlineCode",{parentName:"p"},"pendingOwner")," MUST be ",(0,a.kt)("inlineCode",{parentName:"p"},"address(0)"),".")),(0,a.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pendingOwner")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The address of the pending owner")))),(0,a.kt)("h3",{id:"transferownership"},"transferOwnership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function transferOwnership(address newOwner) public\n")),(0,a.kt)("p",null,"Initiate an ownership transfer by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"newOwner")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"pendingOwner"),"."),(0,a.kt)("p",null,"Requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Can only be called by the current owner."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"newOwner")," to be set as the ",(0,a.kt)("inlineCode",{parentName:"li"},"pendingOwner")," cannot be ",(0,a.kt)("inlineCode",{parentName:"li"},"address(this)"),".")),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"newOwner")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The address to set as ",(0,a.kt)("inlineCode",{parentName:"td"},"pendingOwner"),".")))),(0,a.kt)("h3",{id:"acceptownership"},"acceptOwnership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function acceptOwnership() public\n")),(0,a.kt)("p",null,"Transfers ownership of the contract to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pendingOwner")," address. Can only be called by the ",(0,a.kt)("inlineCode",{parentName:"p"},"pendingOwner"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Triggers the ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("a",{parentName:"strong",href:"#ownershiptransferred"},"OwnershipTransferred"))," event once the new owner has claimed ownership.")),(0,a.kt)("h3",{id:"renounceownership"},"renounceOwnership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function renounceOwnership() public\n")),(0,a.kt)("p",null,"Since renouncing ownership is a sensitive operation, it is done as a two step process by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"renounceOwnership(..)")," twice. First to initiate the process, second as a confirmation."),(0,a.kt)("p",null,"The current block number is saved as a part of initiation because the following behaviour is wanted:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first 100 blocks after the saved block is the pending period, if you call ",(0,a.kt)("inlineCode",{parentName:"li"},"renounceOwnership(..)")," during this period, the transaction will be reverted."),(0,a.kt)("li",{parentName:"ul"},"the following 100 blocks is the period when you can confirm the renouncement of the contract by calling ",(0,a.kt)("inlineCode",{parentName:"li"},"renounceOwnership(..)")," the second time.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Triggers the ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("a",{parentName:"strong",href:"#RenounceOwnershipStarted"},"RenounceOwnershipStarted"))," event in the first call.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Triggers the ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("a",{parentName:"strong",href:"#ownershiptransferred"},"OwnershipTransferred"))," and ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("a",{parentName:"strong",href:"#ownershiprenounced"},"OwnershipRenounced"))," events after successfully renouncing ownership.")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Leaves the contract without an owner. Once ownership of the contract is renounced, it won't be possible to call the functions restricted to the owner only.")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"ownershiptransferstarted"},"OwnershipTransferStarted"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event OwnershipTransferred(\n    address indexed currentOwner,\n    address indexed newOwner,\n)\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"MUST")," be fired when the ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("a",{parentName:"strong",href:"#transferownership"},(0,a.kt)("inlineCode",{parentName:"a"},"transferOwnership(...)")))," function is successfully initiated.")),(0,a.kt)("h4",{id:"values"},"Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"currentOwner")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current owner of the contract.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"newOwner")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The potential new owner of the contract.")))),(0,a.kt)("h3",{id:"ownershiptransferred"},"OwnershipTransferred"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event OwnershipTransferred(\n    address indexed previousOwner,\n    address indexed newOwner,\n)\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"MUST")," be fired when the ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("a",{parentName:"strong",href:"#transferownership"},(0,a.kt)("inlineCode",{parentName:"a"},"transferOwnership(...)")))," function is successfully executed.")),(0,a.kt)("h4",{id:"values-1"},"Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"previousOwner")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The previous owner of the contract.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"newOwner")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The new owner of the contract.")))),(0,a.kt)("h3",{id:"renounceownershipstarted"},"RenounceOwnershipStarted"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event RenounceOwnershipStarted()\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"MUST")," be fired when the ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("a",{parentName:"strong",href:"#renounceownership"},(0,a.kt)("inlineCode",{parentName:"a"},"renounceOwnership()")))," process is initiated.")),(0,a.kt)("h3",{id:"ownershiprenounced"},"OwnershipRenounced"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event OwnershipRenounced()\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"MUST")," be fired when the ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("a",{parentName:"strong",href:"#renounceownership"},(0,a.kt)("inlineCode",{parentName:"a"},"renounceOwnership()")))," process is confirmed.")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts"},"Solidity implementations (GitHub)"))))}c.isMDXComponent=!0}}]);