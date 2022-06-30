"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9283],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(c,o(o({ref:e},m),{},{components:a})):n.createElement(c,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1405:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"Network parameters",sidebar_position:1},o="L16 Public Testnet",i={unversionedId:"networks/l16-testnet/parameters",id:"networks/l16-testnet/parameters",title:"Network parameters",description:"Values and configuration parameters for this network, as well as suggested hardware specs, DO NOT represent the final values for the LUKSO mainnet. Those will be announced shortly before mainnet launch.",source:"@site/docs/networks/l16-testnet/parameters.md",sourceDirName:"networks/l16-testnet",slug:"/networks/l16-testnet/parameters",permalink:"/networks/l16-testnet/parameters",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l16-testnet/parameters.md",tags:[],version:"current",lastUpdatedAt:1656582111,formattedLastUpdatedAt:"6/30/2022",sidebarPosition:1,frontMatter:{title:"Network parameters",sidebar_position:1},sidebar:"networksSidebar",previous:{title:"Network parameters",permalink:"/networks/l16-testnet/"},next:{title:"Install your L16 node",permalink:"/networks/l16-testnet/start-node"}},s={},p=[{value:"Network Parameters",id:"network-parameters",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Ports",id:"ports",level:2},{value:"MetaMask Setup",id:"metamask-setup",level:2},{value:"LINUX System Setup",id:"linux-system-setup",level:2},{value:"Configure Firewall",id:"configure-firewall",level:3},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Install curl",id:"install-curl",level:3},{value:"Install Docker",id:"install-docker",level:2},{value:"Install Docker Compose",id:"install-docker-compose",level:3},{value:"Mac System Setup",id:"mac-system-setup",level:2},{value:"Configure Firewall",id:"configure-firewall-1",level:3},{value:"Installing Dependencies",id:"installing-dependencies",level:3},{value:"Install Homebrew",id:"install-homebrew",level:3},{value:"Install Curl",id:"install-curl-1",level:2},{value:"Install Docker Desktop for Mac",id:"install-docker-desktop-for-mac",level:2}],m={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"l16-public-testnet"},"L16 Public Testnet"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Network values DO NOT represent the final mainnet values")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Values and configuration parameters for this network, as well as suggested hardware specs, DO NOT represent the final values for the LUKSO mainnet. Those will be announced shortly before mainnet launch."))),(0,r.kt)("p",null,"The L16 Public Testnet will be the last stable test network before the mainnet launch and will likely stay online in parallel for experimental purposes."),(0,r.kt)("h2",{id:"network-parameters"},"Network Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,r.kt)("td",{parentName:"tr",align:null},"L16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://rpc.l16.lukso.network"},"https://rpc.l16.lukso.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chain ID  / Network ID"),(0,r.kt)("td",{parentName:"tr",align:null},"2828 (0xB0C)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"LYXt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Execution Block Explorer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://explorer.execution.l16.lukso.network"},"https://explorer.execution.l16.lukso.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Execution Node list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://stats.execution.l16.lukso.network"},"https://stats.execution.l16.lukso.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Consensus Block Explorer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://explorer.consensus.l16.lukso.network"},"https://explorer.consensus.l16.lukso.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Consensus Node list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://stats.consensus.l16.lukso.network"},"https://stats.consensus.l16.lukso.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://faucet.l16.lukso.network"},"https://faucet.l16.lukso.network"))))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can find a community guide about how to setup your Grafana dashboard on Linux ",(0,r.kt)("a",{parentName:"p",href:"https://luksoverse.io/2022/06/system-and-monitor-setup-guide-by-volodymyr-lykhonis/"},"here")))),(0,r.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Settings"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux or MacOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of CPU cores"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAM"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSD"),(0,r.kt)("td",{parentName:"tr",align:null},"100 GB")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Apple's new M1 chips are not supported natively by our node client. However, you can follow ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@luki3k5/running-lukso-node-on-m1-mac-acf92d433a38"},"this guide")," to run it by using Rosetta, Apple's built-in emulation software."))),(0,r.kt)("h2",{id:"ports"},"Ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,r.kt)("th",{parentName:"tr",align:null},"Client"),(0,r.kt)("th",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30303"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"geth syncing"),(0,r.kt)("td",{parentName:"tr",align:null},"port must be open"),(0,r.kt)("td",{parentName:"tr",align:null},"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30303"),(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"geth discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"port must be open"),(0,r.kt)("td",{parentName:"tr",align:null},"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13000"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"beacon syncing"),(0,r.kt)("td",{parentName:"tr",align:null},"port must be open"),(0,r.kt)("td",{parentName:"tr",align:null},"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12000"),(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"beacon discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"port must be open"),(0,r.kt)("td",{parentName:"tr",align:null},"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8545"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"geth api"),(0,r.kt)("td",{parentName:"tr",align:null},"port should be closed"),(0,r.kt)("td",{parentName:"tr",align:null},"valuable information are provided but for a validator it is recommended to not open the port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8080"),(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"beacon metrics"),(0,r.kt)("td",{parentName:"tr",align:null},"port should be closed"),(0,r.kt)("td",{parentName:"tr",align:null},"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3500"),(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"beacon api"),(0,r.kt)("td",{parentName:"tr",align:null},"port should be closed"),(0,r.kt)("td",{parentName:"tr",align:null},"valuable information are provided but for a validator it is recommended to not open the port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4000"),(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"beacon rpc"),(0,r.kt)("td",{parentName:"tr",align:null},"port should be closed"),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("h2",{id:"metamask-setup"},"MetaMask Setup"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,r.kt)("td",{parentName:"tr",align:null},"L16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://rpc.l16.lukso.network"},"https://rpc.l16.lukso.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("td",{parentName:"tr",align:null},"2828 (0xB0C)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"LYXt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Execution Block Explorer URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://explorer.execution.l16.lukso.network"},"https://explorer.execution.l16.lukso.network"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC"},"here is a tutorial on how to add a network to MetaMask."))),(0,r.kt)("h2",{id:"linux-system-setup"},"LINUX System Setup"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For instructions on setting up a Mac, proceed to the ",(0,r.kt)("a",{parentName:"em",href:"#mac-system-setup"},"Mac System Setup")," section.")),(0,r.kt)("h3",{id:"configure-firewall"},"Configure Firewall"),(0,r.kt)("p",null,"Deny all incoming traffic by default"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo ufw default deny incoming\nsudo ufw default allow outgoing \n")),(0,r.kt)("p",null,"Allow traffic for the ports listed above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo ufw allow 30303/tcp\nsudo ufw allow 30303/udp\nsudo ufw allow 13000/tcp\nsudo ufw allow 12000/udp\n")),(0,r.kt)("p",null,"Enable firewall"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo ufw enable\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"NOTE: Make sure also to configure your router to forward these ports."))),(0,r.kt)("p",null,"You may follow this community-authored ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KEEZ-RobG/node-guide/blob/main/PortForward.md"},"Port Forwarding")," guide."),(0,r.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://curl.se/"},"curl")," "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose"))),(0,r.kt)("h3",{id:"install-curl"},"Install curl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt-get -y update\nsudo apt-get -y install curl\n")),(0,r.kt)("h2",{id:"install-docker"},"Install Docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh get-docker.sh\n")),(0,r.kt)("h3",{id:"install-docker-compose"},"Install Docker Compose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\nsudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\ndocker-compose --version\n')),(0,r.kt)("h2",{id:"mac-system-setup"},"Mac System Setup"),(0,r.kt)("h3",{id:"configure-firewall-1"},"Configure Firewall"),(0,r.kt)("p",null,"This section is in the works"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"NOTE: Make sure also to configure your router to forward these ports.  "))),(0,r.kt)("p",null,"You may follow this community-authored ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KEEZ-RobG/node-guide/blob/main/PortForward.md"},"Port Forwarding")," guide."),(0,r.kt)("h3",{id:"installing-dependencies"},"Installing Dependencies"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://brew.sh"},"Homebrew package manager")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://macappstore.org/curl/"},"curl")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"Docker Desktop for Mac"))),(0,r.kt)("h3",{id:"install-homebrew"},"Install Homebrew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("h2",{id:"install-curl-1"},"Install Curl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo brew install curl\n")),(0,r.kt)("h2",{id:"install-docker-desktop-for-mac"},"Install Docker Desktop for Mac"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/mac/install/"},"https://docs.docker.com/desktop/mac/install/")," and install the application.\nYou do not have to install Docker Compose separately."))}d.isMDXComponent=!0}}]);