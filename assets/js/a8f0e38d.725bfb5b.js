(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{136:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return s}));var i=t(3),n=t(8),a=(t(0),t(173)),o={title:"Providers",category:"Optional Components",order:13},c={unversionedId:"optional-components/providers",id:"optional-components/providers",isDocsHomePage:!1,title:"Providers",description:"* Definition",source:"@site/docs/optional-components/providers.md",slug:"/optional-components/providers",permalink:"/documentation/docs/optional-components/providers",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/optional-components/providers.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Sub Actions",permalink:"/documentation/docs/main-components/subactions"},next:{title:"Repositories",permalink:"/documentation/docs/optional-components/repositories"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Register Service Providers:",id:"register-service-providers",children:[]},{value:"Laravel 5.5 Auto Discovery feature.",id:"laravel-55-auto-discovery-feature",children:[]},{value:"Information about Laravel Service Providers",id:"information-about-laravel-service-providers",children:[]}],l={toc:p};function s(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#register-service-providers"},"Register Service Providers:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#container-s-main-service-provider"},"Container's Main Service Provider")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#container-s-additional-service-providers"},"Container's Additional Service Providers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#third-party-packages-service-providers"},"Third party packages Service Providers"))))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#laravel-55-auto-discovery-feature"},"Laravel 5.5 Auto Discovery feature."))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#information-about-laravel-service-providers"},"Information about Laravel Service Providers"))),Object(a.b)("a",{name:"definition"}),Object(a.b)("h3",{id:"definition"},"Definition"),Object(a.b)("p",null,"Providers (are short names for Service Providers)."),Object(a.b)("p",null,"Providers are the central place of configuring and bootstrapping a Container."),Object(a.b)("p",null,"They are the place where you register things like container bindings, event listeners, middleware, routes, other providers, aliases... to the framework service container."),Object(a.b)("a",{name:"principles"}),Object(a.b)("h3",{id:"principles"},"Principles"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"There are 2 types of Providers in a Container, the ",Object(a.b)("strong",{parentName:"p"},"Main Provider")," and the ",Object(a.b)("strong",{parentName:"p"},"Additional (Job Specific) Providers")," (EventsProvider, BroadcastsProvider, AuthProvider, MiddlewareProvider, RoutesProvider).")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"A Container MAY have one or many Providers and MAY have no Provider at all.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"A Container CAN have only a single Main Provider.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The Main Provider is where all the Job Specific Providers get registered.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Third party packages Providers MUST be registered inside the Container Main service provider.  (Same applies to Aliases).")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Providers CAN be registered on the Ship Main Provider, if they are general or are intended to be used by many containers. (Same applies to Aliases)."))),Object(a.b)("a",{name:"rules"}),Object(a.b)("h3",{id:"rules"},"Rules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The Main Provider will be auto registered by the Ship Engine, so no need to register it manually anywhere.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"All Main Providers MUST extend from ",Object(a.b)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Providers\\MainProvider"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"All other types of Providers (EventsProvider, BroadcastsProvider, AuthProvider, MiddlewareProvider, RoutesProvider) must extend from their parent providers ",Object(a.b)("inlineCode",{parentName:"p"},"Ship/Parents/Providers/*"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The Main Provider MUST be named ",Object(a.b)("inlineCode",{parentName:"p"},"MainServiceProvider")," in every container.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You should not register any Provider in the framework (",Object(a.b)("inlineCode",{parentName:"p"},"config/app.php"),"), only the ",Object(a.b)("inlineCode",{parentName:"p"},"ApiatoProvider")," should be registered there."))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Important Information"),": Laravel 5.5 introduces an ",Object(a.b)("inlineCode",{parentName:"p"},"auto-discovery")," feature that lets you automatically register ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceProviders"),".\nDue to the nature and structure of Apiato applications, this features ",Object(a.b)("strong",{parentName:"p"},"is turned off"),", because it messes up how ",Object(a.b)("inlineCode",{parentName:"p"},"config")," files are loaded\nin apiato. This means, that you still need to ",Object(a.b)("strong",{parentName:"p"},"manually")," register 3rd-party ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceProviders")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceProvider")," of a ",Object(a.b)("inlineCode",{parentName:"p"},"Container"),".")),Object(a.b)("a",{name:"folder-structure"}),Object(a.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example: User Container ",Object(a.b)("inlineCode",{parentName:"strong"},"Service Providers"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - User\n            - Providers\n                - UserServiceProvider.php\n                - EventsServiceProvider.php\n                - ...\n")),Object(a.b)("p",null,"In this example above only the ",Object(a.b)("inlineCode",{parentName:"p"},"AuthServiceProvider")," and ",Object(a.b)("inlineCode",{parentName:"p"},"EventsServiceProvider")," needs to be registered in ",Object(a.b)("inlineCode",{parentName:"p"},"UserServiceProvider"),". While the ",Object(a.b)("inlineCode",{parentName:"p"},"UserServiceProvider")," will get automatically registered (since it's named based on his Container name)."),Object(a.b)("a",{name:"code-samples"}),Object(a.b)("h3",{id:"code-samples"},"Code Samples"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Main Service Provider Example:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Excel\\Providers;\n\nuse App\\Ship\\Parents\\Providers\\MainProvider;\nuse Maatwebsite\\Excel\\ExcelServiceProvider;\nuse Maatwebsite\\Excel\\Facades\\Excel;\n\nclass MainServiceProvider extends MainProvider\n{\n\n    /**\n     * Container Service Providers.\n     *\n     * @var array\n     */\n    public $serviceProviders = [\n        // ...          \n    ];\n\n    /**\n     * Container Aliases\n     *\n     * @var  array\n     */\n    public $aliases = [\n        // ...\n    ];\n\n    /**\n     * Register anything in the container.\n     */\n    public function register()\n    {\n        parent::register();\n\n        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);\n    }\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": when defining ",Object(a.b)("inlineCode",{parentName:"p"},"register()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"boot()"),' function in your Main provider "only" you must call the parent functions (',Object(a.b)("inlineCode",{parentName:"p"},"parent::register()"),", ",Object(a.b)("inlineCode",{parentName:"p"},"parent::boot()"),") from your extended function."),Object(a.b)("a",{name:"register-service-providers"}),Object(a.b)("h3",{id:"register-service-providers"},"Register Service Providers:"),Object(a.b)("a",{name:"container-s-main-service-provider"}),Object(a.b)("h4",{id:"containers-main-service-provider"},"Container's Main Service Provider"),Object(a.b)("p",null,"No need to register the Main ",Object(a.b)("inlineCode",{parentName:"p"},"Service Provider")," anywhere, it will be automatically registered, and it is responsible for registering all the Container Additional (Job Specific) Providers."),Object(a.b)("a",{name:"container-s-additional-service-providers"}),Object(a.b)("h4",{id:"containers-additional-service-providers"},"Container's Additional Service Providers"),Object(a.b)("p",null,"You MAY add as many Additional ",Object(a.b)("inlineCode",{parentName:"p"},"Service Providers")," as you want in a ",Object(a.b)("inlineCode",{parentName:"p"},"Container"),". However, in order to get them loaded in the framework you MUST register them all in the Main ",Object(a.b)("inlineCode",{parentName:"p"},"Service Provider")," as follow:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nprivate $containerServiceProviders = [\n    AuthServiceProvider::class,\n    EventsServiceProvider::class,\n    // ...\n];\n],\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Same rule applies to ",Object(a.b)("strong",{parentName:"p"},"Aliases"),".")),Object(a.b)("a",{name:"third-party-packages-service-providers"}),Object(a.b)("h4",{id:"third-party-packages-service-providers"},"Third party packages Service Providers"),Object(a.b)("p",null,"If a package requires registering its service provider in the ",Object(a.b)("inlineCode",{parentName:"p"},"config/app.php"),", you SHOULD register its service provider in the Main container where you are using it.\nHowever, if it's a generic package used by the entire framework and not a specific Container or feature. Then you can register that service provider in the ",Object(a.b)("inlineCode",{parentName:"p"},"app/Ship/Providers/ShipProvider.php"),", but never in the ",Object(a.b)("inlineCode",{parentName:"p"},"config/app.php"),"."),Object(a.b)("a",{name:"laravel-55-auto-discovery-feature"}),Object(a.b)("h3",{id:"laravel-55-auto-discovery-feature"},"Laravel 5.5 Auto Discovery feature."),Object(a.b)("p",null,"This feature is disabled in Apiato so far.\nMore details ","[here]","({{ site.baseurl }}{% link _docs/miscellaneous/faq.md %})."),Object(a.b)("a",{name:"information-about-laravel-service-providers"}),Object(a.b)("h3",{id:"information-about-laravel-service-providers"},"Information about Laravel Service Providers"),Object(a.b)("p",null,"By default Laravel provides some service providers in its ",Object(a.b)("inlineCode",{parentName:"p"},"app/providers")," directory.\nIn apiato those providers have been renamed and moved to the Ship Layer ",Object(a.b)("inlineCode",{parentName:"p"},"app/Ship/Parents/Providers/*"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"AppServiceProvider"),Object(a.b)("li",{parentName:"ul"},"RouteServiceProvider"),Object(a.b)("li",{parentName:"ul"},"AuthServiceProvider"),Object(a.b)("li",{parentName:"ul"},"BroadcastServiceProvider"),Object(a.b)("li",{parentName:"ul"},"EventsServiceProvider")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"VIP Note:")," you should not touch those providers, instead you have to extend them from a containers providers in order to modify them.\nExample: the ",Object(a.b)("inlineCode",{parentName:"p"},"app/Containers/Authentication/Providers/AuthProvider.php")," is extending the ",Object(a.b)("inlineCode",{parentName:"p"},"AuthServiceProvider")," to modify it."),Object(a.b)("p",null,"Those providers are not auto registered by default, thus writing any code there will not be available, unless you extend them.\nOnce extended the child Provider should be registered in its Container Main Provider, which makes it's parent available."),Object(a.b)("p",null,"This rule does not apply to the ",Object(a.b)("inlineCode",{parentName:"p"},"RouteServiceProvider")," since it's required by Apiato, this this Provider is registered by the ",Object(a.b)("inlineCode",{parentName:"p"},"ApiatoProvider"),"."),Object(a.b)("p",null,"Check ","[How Service Providers are auto-loaded]","({{ site.baseurl }}{% link _docs/miscellaneous/faq.md %})."))}s.isMDXComponent=!0},173:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return u}));var i=t(0),n=t.n(i);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),s=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=s(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},v=n.a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),v=i,u=d["".concat(o,".").concat(v)]||d[v]||b[v]||a;return t?n.a.createElement(u,c(c({ref:r},l),{},{components:t})):n.a.createElement(u,c({ref:r},l))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=v;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"}}]);