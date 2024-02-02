"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23840],{92372:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=i(24246),s=i(71670);const t={sidebar_position:4,title:"Creating a Kind cluster",description:"Creating a local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},o="Creating a local Kind-powered Kubernetes cluster",d={id:"kind/creating-a-kind-cluster",title:"Creating a Kind cluster",description:"Creating a local Kind-powered Kubernetes cluster.",source:"@site/docs/kind/creating-a-kind-cluster.md",sourceDirName:"kind",slug:"/kind/creating-a-kind-cluster",permalink:"/docs/kind/creating-a-kind-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kind/creating-a-kind-cluster.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"kind",permalink:"/docs/tags/kind"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Creating a Kind cluster",description:"Creating a local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},sidebar:"mySidebar",previous:{title:"Configuring Podman for Kind",permalink:"/docs/kind/configuring-podman-for-kind-on-windows"},next:{title:"Restarting your Kind cluster",permalink:"/docs/kind/restarting-your-kind-cluster"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Icon:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"creating-a-local-kind-powered-kubernetes-cluster",children:"Creating a local Kind-powered Kubernetes cluster"}),"\n",(0,r.jsx)(n.p,{children:"You can create multiple local Kind-powered Kubernetes clusters."}),"\n",(0,r.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/kind/installing",children:"You installed Kind"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/kind/configuring-podman-for-kind-on-windows",children:"On Windows, you configured Podman"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(i,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the Kind tile, click on the ",(0,r.jsx)(n.strong,{children:"Create new ..."})," button."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Choose your options, and click the ",(0,r.jsx)(n.strong,{children:"Create"})," button."]}),"\n",(0,r.jsx)(n.p,{children:"The defaults are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": ",(0,r.jsx)(n.code,{children:"kind-cluster"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Provider Type"}),": ",(0,r.jsx)(n.code,{children:"podman"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HTTP Port"}),": ",(0,r.jsx)(n.code,{children:"9090"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HTTPS Port"}),": ",(0,r.jsx)(n.code,{children:"9443"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["Setup an ingress controller (Contour ",(0,r.jsx)(n.a,{href:"https://projectcontour.io",children:"https://projectcontour.io"}),")"]}),": Enabled"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["Node\u2019s container image (Available image tags on ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/kind/releases",children:"kind/releases"}),")"]}),": Left empty to use latest."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(Optionally) Click the ",(0,r.jsx)(n.strong,{children:"Show logs"})," button to display the logs."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After successful creation, click on the ",(0,r.jsx)(n.strong,{children:"Go back to resources"})," button"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(i,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]}),", in the ",(0,r.jsx)(n.strong,{children:"Kind"})," tile, your ",(0,r.jsx)(n.code,{children:"<kind-cluster>"})," instance is running."]}),"\n",(0,r.jsxs)(n.li,{children:["In the Podman Desktop tray, open the ",(0,r.jsx)(n.strong,{children:"Kubernetes"})," menu, you can set the context to your Kind cluster: ",(0,r.jsx)(n.code,{children:"kind-<kind-cluster>"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var r=i(27378);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);