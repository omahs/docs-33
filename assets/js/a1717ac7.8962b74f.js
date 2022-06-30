"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),k=o,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},l="Install your L16 node",i={unversionedId:"networks/l16-testnet/start-node",id:"networks/l16-testnet/start-node",title:"Install your L16 node",description:"Create a directory",source:"@site/docs/networks/l16-testnet/start-node.md",sourceDirName:"networks/l16-testnet",slug:"/networks/l16-testnet/start-node",permalink:"/networks/l16-testnet/start-node",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l16-testnet/start-node.md",tags:[],version:"current",lastUpdatedAt:1656587873,formattedLastUpdatedAt:"6/30/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"networksSidebar",previous:{title:"Network parameters",permalink:"/networks/l16-testnet/parameters"},next:{title:"Become a validator",permalink:"/networks/l16-testnet/validator"}},s={},c=[{value:"Create a directory",id:"create-a-directory",level:2},{value:"navigate to it in your terminal by using the <code>cd</code> command",id:"navigate-to-it-in-your-terminal-by-using-the-cd-command",level:3},{value:"Install the LUKSO Command Line Interface (CLI)",id:"install-the-lukso-command-line-interface-cli",level:2},{value:"Check your LUKSO CLI version",id:"check-your-lukso-cli-version",level:3},{value:"Initialize the network",id:"initialize-the-network",level:2},{value:"Change your node name",id:"change-your-node-name",level:3},{value:"Start your node",id:"start-your-node",level:2},{value:"Check your node",id:"check-your-node",level:3},{value:"Need help?",id:"need-help",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-your-l16-node"},"Install your L16 node"),(0,o.kt)("h2",{id:"create-a-directory"},"Create a directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir lukso-l16-testnet \n")),(0,o.kt)("h3",{id:"navigate-to-it-in-your-terminal-by-using-the-cd-command"},"navigate to it in your terminal by using the ",(0,o.kt)("inlineCode",{parentName:"h3"},"cd")," command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd lukso-l16-testnet\n")),(0,o.kt)("h2",{id:"install-the-lukso-command-line-interface-cli"},"Install the LUKSO Command Line Interface (CLI)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo curl https://raw.githubusercontent.com/lukso-network/lukso-cli/main/install.sh | sudo bash\n")),(0,o.kt)("p",null,"The script will download the LUKSO CLI into the directory."),(0,o.kt)("h3",{id:"check-your-lukso-cli-version"},"Check your LUKSO CLI version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"lukso -v\n")),(0,o.kt)("p",null,"The output has to be v.0.4.0 or higher."),(0,o.kt)("h2",{id:"initialize-the-network"},"Initialize the network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"lukso network init --chain l16\n")),(0,o.kt)("p",null,"The CLI will ask you to setup your node name."),(0,o.kt)("h3",{id:"change-your-node-name"},"Change your node name"),(0,o.kt)("p",null,"If you want to change your node name you can do this in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"node_config.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano node_config.yaml\n")),(0,o.kt)("p",null,"Change your node name close it with ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+X")," and save it."),(0,o.kt)("h2",{id:"start-your-node"},"Start your node"),(0,o.kt)("p",null,"You can start your node with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"lukso network start\n")),(0,o.kt)("h3",{id:"check-your-node"},"Check your node"),(0,o.kt)("p",null,"Wait 10 minutes and check if your node is syncing on this stats page:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stats.execution.l16.lukso.network"},"https://stats.execution.l16.lukso.network"))),(0,o.kt)("p",null,"You can also check your ",(0,o.kt)("a",{parentName:"p",href:"/networks/l16-testnet/l16-logs"},"logs"),"."),(0,o.kt)("h2",{id:"need-help"},"Need help?"),(0,o.kt)("p",null,"Ask your question in the validators channel on the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/u7cmyUyw8F"},"official LUKSO Discord server"),"."))}d.isMDXComponent=!0}}]);