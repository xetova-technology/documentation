(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(8),r=(a(0),a(218)),i={title:"Installation"},l={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"* Apiato Installation",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/next/getting-started/installation",editUrl:"https://github.com/apiato/documentation/tree/master/docs/getting-started/installation.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618737361,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/next/"},next:{title:"Architecture",permalink:"/docs/next/getting-started/software-architectural-patterns"}},p=[{value:"Apiato Application Installation",id:"App",children:[{value:"Code Setup",id:"Code-Setup",children:[]},{value:"Database Setup",id:"Setup-Database",children:[]},{value:"OAuth 2.0 Setup",id:"Prepare-OAuth",children:[]},{value:"Documentation Setup",id:"Documentation",children:[]},{value:"Testing Setup",id:"Testing",children:[]}]},{value:"Development Environment Setup",id:"Development-Environment",children:[{value:"Using Docker (with Laradock)",id:"Using-Docker-With-Laradock",children:[]},{value:"Using Vagrant (with Laravel Homestead)",id:"Using-Vagrant-Using-Homestead",children:[]},{value:"Using anything else",id:"Using-anything-else",children:[]}]},{value:"Let&#39;s Play",id:"Play",children:[]}],c={toc:p};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#App"},"Apiato Installation"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Code-Setup"},"Code Setup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Setup-Database"},"Database Setup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Prepare-OAuth"},"OAuth Setup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Documentation"},"Documentation Setup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Testing"},"Testing Setup")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Development-Environment"},"Environment Setup"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Using-Docker-With-Laradock"},"Using Docker and Laradock")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Using-Vagrant-Using-Homestead"},"Using Vagrant and Homestead")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Using-anything-else"},"Using MAMP/WAMP or something else")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Play"},"Play"))),Object(r.b)("h2",{id:"App"},"Apiato Application Installation"),Object(r.b)("h3",{id:"Code-Setup"},"Code Setup"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"composer create-project apiato/apiato my-api\n")),Object(r.b)("h3",{id:"Setup-Database"},"Database Setup"),Object(r.b)("p",null,"1) Migrate the Database:"),Object(r.b)("p",null,"Run the migration artisan command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"php artisan migrate\n")),Object(r.b)("p",null,"2) Seed the database with the artisan command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"php artisan db:seed\n")),Object(r.b)("p",null,'3) Optional. By default, Apiato seeds a "Super User", given the default ',Object(r.b)("inlineCode",{parentName:"p"},"admin")," role (the role has no Permissions set\nto it)."),Object(r.b)("p",null,"To give the ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," role, access to all the seeded permissions in the system, run the following command, at any time."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"php artisan apiato:permissions:toRole admin\n")),Object(r.b)("h3",{id:"Prepare-OAuth"},"OAuth 2.0 Setup"),Object(r.b)("p",null,'1) Create encryption keys to generate secure access tokens and create "personal access" and "password grant" clients\nwhich will be used to generate access tokens:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"php artisan passport:install\n")),Object(r.b)("h3",{id:"Documentation"},"Documentation Setup"),Object(r.b)("p",null,"1) Install ",Object(r.b)("a",{parentName:"p",href:"http://apidocjs.com/"},"ApiDocJs")," using NPM or your favorite dependencies manager:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),Object(r.b)("p",null,"2) Run ",Object(r.b)("inlineCode",{parentName:"p"},"php artisan apiato:apidoc")),Object(r.b)("h5",{id:"visit-api-docs-generator-for-more-details"},"Visit ",Object(r.b)("a",{parentName:"h5",href:"../additional-features/apiato-containers/documentation"},"API Docs Generator")," for more details."),Object(r.b)("h3",{id:"Testing"},"Testing Setup"),Object(r.b)("p",null,"1) Open ",Object(r.b)("inlineCode",{parentName:"p"},"phpunit.xml")," and make sure the environments are correct for your domain."),Object(r.b)("p",null,"2) run the tests"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"vendor/bin/phpunit\n")),Object(r.b)("h2",{id:"Development-Environment"},"Development Environment Setup"),Object(r.b)("p",null,"You can run ",Object(r.b)("strong",{parentName:"p"},"Apiato")," on your favorite environment. Below you'll see how you can run it on top of\n",Object(r.b)("a",{parentName:"p",href:"https://www.vagrantup.com/"},"Vagrant")," (using ",Object(r.b)("a",{parentName:"p",href:"https://laravel.com/docs/homestead"},"Laravel Homestead"),") or\n",Object(r.b)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," (using ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Laradock/laradock"},"Laradock"),")."),Object(r.b)("p",null,"We'll see how to use both tools, and you can pick one, or you can use other options like\n",Object(r.b)("a",{parentName:"p",href:"https://laravel.com/docs/valet"},"Laravel Valet"),", ",Object(r.b)("a",{parentName:"p",href:"https://laragon.org/"},"Laragon")," or even run it directly on your machine."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Heads up!")," ",Object(r.b)("br",null),"\nThe ICANN has now officially approved ",Object(r.b)("inlineCode",{parentName:"p"},".dev")," as a generic top level domain (gTLD). Therefore, it is ",Object(r.b)("strong",{parentName:"p"},"not")," recommended\nto use ",Object(r.b)("inlineCode",{parentName:"p"},".dev")," domains anymore in your local development setup! We use ",Object(r.b)("inlineCode",{parentName:"p"},".test"),", however, you may change it to ",Object(r.b)("inlineCode",{parentName:"p"},".example"),", or ",Object(r.b)("inlineCode",{parentName:"p"},".localhost")," or whatever suits your needs. ",Object(r.b)("a",{parentName:"p",href:"http://www.faqs.org/rfcs/rfc2606.html"},"Read more"),".")),Object(r.b)("h3",{id:"Using-Docker-With-Laradock"},"Using Docker (with Laradock)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Laradock")," is a Docker PHP development environment. It facilitates running PHP Apps on Docker."),Object(r.b)("p",null,"Install ",Object(r.b)("a",{parentName:"p",href:"https://github.com/LaraDock/laradock#installation"},"Laradock"),"."),Object(r.b)("p",null,"Navigate into the ",Object(r.b)("inlineCode",{parentName:"p"},"laradock")," directory:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cd laradock\n")),Object(r.b)("p",null,"This directory contains a ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. (From the LaraDock project)."),Object(r.b)("p",null,"If you haven't done so, rename ",Object(r.b)("inlineCode",{parentName:"p"},"env-example")," to ",Object(r.b)("inlineCode",{parentName:"p"},".env"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cp env-example .env\n")),Object(r.b)("p",null,"Run the Docker containers:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d nginx mysql redis beanstalkd\n")),Object(r.b)("p",null,"Make sure you are setting the ",Object(r.b)("inlineCode",{parentName:"p"},"Docker IP")," as ",Object(r.b)("inlineCode",{parentName:"p"},"Host")," for the ",Object(r.b)("inlineCode",{parentName:"p"},"DB")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Redis"),"  in your ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file."),Object(r.b)("p",null,"Add the domain to the Hosts file: ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/hosts"),". We'll be using ",Object(r.b)("inlineCode",{parentName:"p"},"apiato.test")," as local domain (you can change it if you want)."),Object(r.b)("p",null,"Map the domain and its subdomains to 127.0.0.1:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"127.0.0.1  apiato.test\n127.0.0.1  api.apiato.test\n127.0.0.1  admin.apiato.test\n")),Object(r.b)("p",null,"If you're using NGINX or Apache, make sure the ",Object(r.b)("strong",{parentName:"p"},"server_name")," (in case of NGINX) or ",Object(r.b)("strong",{parentName:"p"},"ServerName")," (in case of Apache)\nin your server config file, is set to the following ",Object(r.b)("inlineCode",{parentName:"p"},"apiato.test api.apiato.test admin.apiato.test"),".\n",Object(r.b)("em",{parentName:"p"},"(Also don't forget to point the ",Object(r.b)("strong",{parentName:"em"},"Root")," or ",Object(r.b)("strong",{parentName:"em"},"DocumentRoot")," to the public directory inside apiato ",Object(r.b)("inlineCode",{parentName:"em"},"apiato/public"),")"),"."),Object(r.b)("h3",{id:"Using-Vagrant-Using-Homestead"},"Using Vagrant (with Laravel Homestead)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Laravel Homestead")," is installed by default. If you have removed homestead you can install it using  "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"composer require laravel/homestead --dev\n")),Object(r.b)("h4",{id:"configure-homestead"},"Configure Homestead:"),Object(r.b)("p",null,"Create the Homestead config file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"vendor/bin/homestead make\n")),Object(r.b)("p",null,"Map the ",Object(r.b)("inlineCode",{parentName:"p"},"api.apiato.test")," domain to the project public directory - Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"sites:\n    - map: api.apiato.test\n      to: /{full-path-to}/apiato/public\n")),Object(r.b)("p",null,"You can also map other domains like ",Object(r.b)("inlineCode",{parentName:"p"},"apiato.test")," and ",Object(r.b)("inlineCode",{parentName:"p"},"admin.apiato.test")," to other web apps:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"    - map: apiato.test\n      to: /{full-path-to}/clients/web/user\n    - map: admin.apiato.test\n      to: /{full-path-to}/clients/web/admin\n")),Object(r.b)("p",null,"Note: in the example above the ",Object(r.b)("inlineCode",{parentName:"p"},"/{full-path-to}/clients/web/***")," are separate apps, who live on their own repositories\nand in different folder then the Apiato one. If your Admins, Users or other type of Apps are within Apiato, then you\nmust point them all to the Apiato project folder ",Object(r.b)("inlineCode",{parentName:"p"},"/{full-path-to}/apiato/public"),". So in that case you would have\nsomething like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"    - map: api.apiato.test\n      to: /{full-path-to}/apiato/public\n    - map: apiato.test\n      to: /{full-path-to}/apiato/public\n    - map: admin.apiato.test\n      to: /{full-path-to}/apiato/public\n")),Object(r.b)("h4",{id:"configure-hosts"},"Configure Hosts:"),Object(r.b)("p",null,"Open the hosts file on your local machine ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/hosts"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"We'll be using ",Object(r.b)("inlineCode",{parentName:"em"},"apiato.test")," as local domain (you can change it if you want).")),Object(r.b)("p",null,"Map the domain and its subdomains to the Vagrant IP Address:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"192.168.10.10   apiato.test\n192.168.10.10   api.apiato.test\n192.168.10.10   admin.apiato.test\n")),Object(r.b)("p",null,"If you're using NGINX or Apache, make sure the ",Object(r.b)("strong",{parentName:"p"},"server_name")," (in case of NGINX) or ",Object(r.b)("strong",{parentName:"p"},"ServerName")," (in case of Apache)\nin your server config file, is set to the following ",Object(r.b)("inlineCode",{parentName:"p"},"apiato.test api.apiato.test admin.apiato.test"),".\n",Object(r.b)("em",{parentName:"p"},"(Also don't forget to set your ",Object(r.b)("strong",{parentName:"em"},"root")," or ",Object(r.b)("strong",{parentName:"em"},"DocumentRoot")," to the public directory inside apiato ",Object(r.b)("inlineCode",{parentName:"em"},"apiato/public"),")"),"."),Object(r.b)("p",null,"Run the Virtual Machine:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"homestead up --provision\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"If you see ",Object(r.b)("inlineCode",{parentName:"em"},"No input file specified")," on the sub-domains!\ntry running this command ",Object(r.b)("inlineCode",{parentName:"em"},"homestead halt && homestead up --provision"),".")),Object(r.b)("h3",{id:"Using-anything-else"},"Using anything else"),Object(r.b)("p",null,"If you're not into virtualization solutions, you can set up your environment directly on your machine. Check the\n",Object(r.b)("a",{parentName:"p",href:"../"},"software's requirements list"),"."),Object(r.b)("h2",{id:"Play"},"Let's Play"),Object(r.b)("p",null,"Now let's see it in action"),Object(r.b)("p",null,"Open your web browser and visit:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"http://apiato.test")," You should see an HTML page, with ",Object(r.b)("inlineCode",{parentName:"li"},"Apiato")," in the middle."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"http://api.apiato.test")," You should see a response like this:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'[\n"Welcome to Apiato"\n]\n')),Object(r.b)("p",null,"Open your HTTP client and call:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"http://api.apiato.test/")," You should see a JSON response with message: ",Object(r.b)("inlineCode",{parentName:"li"},'"Welcome to apiato."'),","),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"http://api.apiato.test/v1")," You should see a JSON response with message: ",Object(r.b)("inlineCode",{parentName:"li"},'"Welcome to apiato (API V1)."'),",")),Object(r.b)("p",null,"Make some HTTP calls to the API:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"To make the calls you can use ",Object(r.b)("a",{parentName:"em",href:"https://www.getpostman.com/"},"Postman"),", ",Object(r.b)("a",{parentName:"em",href:"https://github.com/jkbrzt/httpie"},"HTTPIE")," or\nany other tool you prefer.")),Object(r.b)("p",null,"Let's test the (user registration) endpoint ",Object(r.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/register")," with ",Object(r.b)("strong",{parentName:"p"},"cURL"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Accept: application/json" -H "Cache-Control: no-cache" -F "email=John@Doe.me" -F "password=so-secret" -F "name=John Doe" "http://api.apiato.test/v1/register"\n')),Object(r.b)("p",null,"You should get a response like this:"),Object(r.b)("p",null,"Header:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"Access-Control-Allow-Origin \u2192 ...\nCache-Control \u2192 ...\nConnection \u2192 keep-alive\nContent-Language \u2192 en\nContent-Type \u2192 application/json\nDate \u2192 Wed, 11 Apr 2000 22:55:88 GMT\nServer \u2192 nginx\nTransfer-Encoding \u2192 chunked\nVary \u2192 Origin\nX-Powered-By \u2192 PHP/7.7.7\nX-RateLimit-Limit \u2192 30\nX-RateLimit-Remaining \u2192 29\n")),Object(r.b)("p",null,"Body:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "object": "User",\n    "id": "7VgmkMw7rR2pWO5j",\n    "name": "John Doe",\n    "email": "John@Doe.me",\n    "email_verified_at": null,\n    "gender": null,\n    "birth": null,\n    "created_at": "2021-04-12T13:33:24.000000Z",\n    "updated_at": "2021-04-12T13:33:24.000000Z",\n    "readable_created_at": "1 second ago",\n    "readable_updated_at": "1 second ago"\n  },\n  "meta": {\n    "include": [\n      "roles"\n    ],\n    "custom": []\n  }\n}\n')))}b.isMDXComponent=!0},218:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||r;return a?o.a.createElement(d,l(l({ref:t},c),{},{components:a})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);