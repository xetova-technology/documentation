(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(8),r=(t(0),t(173)),l={title:"Mails",category:"Optional Components",order:36},o={unversionedId:"optional-components/mails",id:"optional-components/mails",isDocsHomePage:!1,title:"Mails",description:"* Definition",source:"@site/docs/optional-components/mails.md",slug:"/optional-components/mails",permalink:"/documentation/docs/optional-components/mails",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/optional-components/mails.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Events",permalink:"/documentation/docs/optional-components/events"},next:{title:"Notifications",permalink:"/documentation/docs/optional-components/notifications"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]}]}],p={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Templates"},"Email Templates")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#config"},"Configure Emails")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Queueing"},"Queueing"))),Object(r.b)("a",{name:"definition"}),Object(r.b)("h3",{id:"definition"},"Definition"),Object(r.b)("p",null,"The Mail component allows you to describe an email and send it whenever needed. "),Object(r.b)("p",null,"For more details refer to this ",Object(r.b)("a",{parentName:"p",href:"https://laravel.com/docs/mail"},"link"),"."),Object(r.b)("a",{name:"principles"}),Object(r.b)("h2",{id:"principles"},"Principles"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Mail.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ship may contain general Mails."))),Object(r.b)("a",{name:"rules"}),Object(r.b)("h3",{id:"rules"},"Rules"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All Notifications MUST extend from ",Object(r.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Mails\\Mail"),"."),Object(r.b)("li",{parentName:"ul"},"Email Templates must be placed inside the Mail directory in a Templates directory ",Object(r.b)("inlineCode",{parentName:"li"},"app/Containers/{container}/Mails/Templates"),".")),Object(r.b)("a",{name:"folder-structure"}),Object(r.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Mails\n                - UserRegisteredMail.php\n                - ...\n                - Templates\n                    - user-registered.blade.php\n                    - ...\n    - Ship\n        - Mails\n            - SomeMail.php\n            - ...\n            - Templates\n                - some-template.blade.php\n                - ...\n")),Object(r.b)("a",{name:"code-samples"}),Object(r.b)("h3",{id:"code-samples"},"Code Samples"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example: a simple Mail")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Mails;\n\nuse App\\Containers\\User\\Models\\User;\nuse Illuminate\\Bus\\Queueable;\nuse App\\Ship\\Parents\\Mails\\Mail;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\n\nclass UserRegisteredMail extends Mail implements ShouldQueue\n{\n    use Queueable;\n\n    protected $user;\n\n    public function __construct(User $user)\n    {\n        $this->user = $user;\n    }\n\n    public function build()\n    {\n        return $this->view('user::user-registered')\n            ->to($this->user->email, $this->user->name)\n            ->with([\n                'name' => $this->user->name,\n            ]);\n    }\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage from an Action:")),Object(r.b)("p",null,"Notifications can be sent from Actions or Tasks using the ",Object(r.b)("inlineCode",{parentName:"p"},"Mail")," Facade."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"Mail::send(new UserRegisteredMail($user));\n")),Object(r.b)("a",{name:"Templates"}),"## Email Templates",Object(r.b)("p",null,"Templates should be placed inside a folder ",Object(r.b)("inlineCode",{parentName:"p"},"Templates")," inside the ",Object(r.b)("inlineCode",{parentName:"p"},"Mail")," folder."),Object(r.b)("p",null,"To access a Mail template ",Object(r.b)("em",{parentName:"p"},"(same like accessing a web view)")," you must call the container name then the view name.   "),Object(r.b)("p",null,"In the example below we're using the ",Object(r.b)("inlineCode",{parentName:"p"},"user-registered.blade.php")," template in the ",Object(r.b)("strong",{parentName:"p"},"User")," Container."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$this->view('user::user-registered')\n")),Object(r.b)("a",{name:"config"}),"## Configure Emails",Object(r.b)("p",null,"Open the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file and set the From mail and address, this will be used globally whenever the ",Object(r.b)("inlineCode",{parentName:"p"},"from")," function is not called in the Mail. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-markdown"},'MAIL_FROM_ADDRESS=test@test.test\nMAIL_FROM_NAME="apiato"\n')),Object(r.b)("p",null,"To use different email address in some classes add ",Object(r.b)("inlineCode",{parentName:"p"},"->to($this->email, $this->name)")," to the ",Object(r.b)("inlineCode",{parentName:"p"},"build")," function in your Mail class. "),Object(r.b)("p",null,"By default Apiato is configured to use Log Driver ",Object(r.b)("inlineCode",{parentName:"p"},"MAIL_DRIVER=log"),", you can change that from the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file."),Object(r.b)("a",{name:"Queueing"}),"## Queueing A Notification",Object(r.b)("p",null,"To queue a notification you should use ",Object(r.b)("inlineCode",{parentName:"p"},"Illuminate\\Bus\\Queueable")," and implement ",Object(r.b)("inlineCode",{parentName:"p"},"Illuminate\\Contracts\\Queue\\ShouldQueue"),"."))}s.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||r;return t?i.a.createElement(d,o(o({ref:n},p),{},{components:t})):i.a.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);