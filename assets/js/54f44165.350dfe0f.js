(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(8),i=(a(0),a(173)),r={title:"Installation"},l={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"* A) Apiato Installation",source:"@site/docs/getting-started/installation.md",slug:"/getting-started/installation",permalink:"/documentation/docs/getting-started/installation",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/getting-started/installation.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Requirements",permalink:"/documentation/docs/"},next:{title:"Overview",permalink:"/documentation/docs/getting-started/overview"}},p=[{value:"A) Apiato Application Installation",id:"App",children:[{value:"1) Code Setup",id:"Code-setup",children:[]},{value:"2) Database Setup",id:"Setup-Detabase",children:[]},{value:"3) OAuth 2.0 Setup",id:"Prepare-OAuth",children:[]},{value:"4) Documentation Setup",id:"Documentation",children:[]},{value:"5) Testing Setup",id:"Testing",children:[]}]},{value:"B) Development Environment Setup",id:"Development-Environment",children:[{value:"A.1) Using Docker (with Laradock)",id:"Using-Docker-With-Laradock",children:[]},{value:"A.2) Using Vagrant (with Laravel Homestead)",id:"Using-Vagrant-Using-Homestead",children:[]},{value:"A.3) Using anything else",id:"Using-anything-else",children:[]}]},{value:"C) Let&#39;s Play",id:"Play",children:[]}],c={toc:p};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#App"},"A) Apiato Installation"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Code-Setup"},"1) Code Setup"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#App-Composer"},"Option 1: Automatically via Composer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#App-Git"},"Option 2: Manually")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Setup-Database"},"2) Database Setup")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Prepare-OAuth"},"3) OAuth Setup")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Documentation"},"4) Documentation Setup")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Testing"},"5) Testing Setup")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Development-Environment"},"B) Environment Setup"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Using-Docker-With-Laradock"},"Option 1: Using Docker and Laradock")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Using-Vagrant-Using-Homestead"},"Option 2: Using Vagrant and Homestead")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Using-anything-else"},"Option 3: Using MAMP/WAMP or something else")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Play"},"C) Play"))),Object(i.b)("h2",{id:"App"},"A) Apiato Application Installation"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Apiato")," can be installed automatically with Composer (recommended) or manually (with Git or direct download):"),Object(i.b)("h3",{id:"Code-setup"},"1) Code Setup"),Object(i.b)("h4",{id:"App-Composer"},"1.A) Automatically via Composer"),Object(i.b)("p",null,"1) Clone the repo, install dependencies and setup the project:"),Object(i.b)("p",null,"Option 1: Latest ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/releases/latest"},"stable"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"composer create-project apiato/apiato my-api\n")),Object(i.b)("p",null,"Option 2: On going ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/commits/master"},"development"),' branch "dev master" ',Object(i.b)("em",{parentName:"p"},"(unstable)"),":\n",Object(i.b)("em",{parentName:"p"},"This gives you features from the upcoming releases. But you need to keep syncing your project with the upstream master\nbranch and running ",Object(i.b)("inlineCode",{parentName:"em"},"composer install")," when changes occurs.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"composer create-project apiato/apiato my-api dev-master\n")),Object(i.b)("p",null,"2) Edit your ",Object(i.b)("inlineCode",{parentName:"p"},".env")," variables to match with your environment (Set Database credentials, App URL, ...)."),Object(i.b)("p",null,"3) Continue from ",Object(i.b)("a",{parentName:"p",href:"#Setup-Database"},"2) Database Setup")," below."),Object(i.b)("h4",{id:"App-Git"},"1.B) Manually"),Object(i.b)("p",null,"You can download the Code directly from the repository as ",Object(i.b)("inlineCode",{parentName:"p"},".ZIP")," file or clone the repository using ",Object(i.b)("inlineCode",{parentName:"p"},"Git")," (recommended):"),Object(i.b)("p",null,"1) Clone the repository using ",Object(i.b)("inlineCode",{parentName:"p"},"Git"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apiato/apiato.git\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Hint")," ",Object(i.b)("br",null),"\nIf using ",Object(i.b)("a",{parentName:"p",href:"http://laradock.io/"},"Laradock"),", you can run all the commands below from the ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," Container. ",Object(i.b)("br",null),"\nFirst you need to run the required tools by running ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose up -d nginx mysql php-fpm workspace redis")," from the Laradock folder ",Object(i.b)("em",{parentName:"p"},"(of course you can add any other tools you need)"),". ",Object(i.b)("br",null),"\nThen enter the  ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," Container by running ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose exec workspace bash"),". ",Object(i.b)("br",null),"\nFor more details see the section ",Object(i.b)("strong",{parentName:"p"},"Using Docker (with Laradock)")," below.")),Object(i.b)("p",null,"2) Install all dependency packages (including Containers dependencies):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"composer install\n")),Object(i.b)("p",null,"3) Create ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file and copy the content of ",Object(i.b)("inlineCode",{parentName:"p"},".env.example")," inside it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cp .env.example .env\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Check all the variables and edit whatever you want.")),Object(i.b)("p",null,"4) Generate a random key ",Object(i.b)("inlineCode",{parentName:"p"},"APP_KEY")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"php artisan key:generate\n")),Object(i.b)("p",null,"5) delete the ",Object(i.b)("inlineCode",{parentName:"p"},".git")," folder from the root directory and initialize your own with ",Object(i.b)("inlineCode",{parentName:"p"},"git init"),"."),Object(i.b)("h3",{id:"Setup-Detabase"},"2) Database Setup"),Object(i.b)("p",null,"1) Migrate the Database:"),Object(i.b)("p",null,"Run the migration artisan command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"php artisan migrate\n")),Object(i.b)("p",null,"2) Seed the database with the artisan command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"php artisan db:seed\n")),Object(i.b)("p",null,'3) Optional. By default Apiato seeds a "Super User", given the default ',Object(i.b)("inlineCode",{parentName:"p"},"admin")," role (the role has no Permissions set\nto it)."),Object(i.b)("p",null,"To give the ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," role, access to all the seeded permissions in the system, run the following command, at any time."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"php artisan apiato:permissions:toRole admin\n")),Object(i.b)("h3",{id:"Prepare-OAuth"},"3) OAuth 2.0 Setup"),Object(i.b)("p",null,'1) Create encryption keys to generate secure access tokens and create "personal access" and "password grant" clients\nwhich will be used to generate access tokens:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"php artisan passport:install\n")),Object(i.b)("h3",{id:"Documentation"},"4) Documentation Setup"),Object(i.b)("p",null,"If you are planning to use ApiDoc JS then proceed with this setup, else skip this and use whatever you prefer:"),Object(i.b)("p",null,"1) Install ",Object(i.b)("a",{parentName:"p",href:"http://apidocjs.com/"},"ApiDocJs")," using NPM or your favorite dependencies manager:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),Object(i.b)("p",null,"Or install it alone by just running ",Object(i.b)("inlineCode",{parentName:"p"},"npm install apidoc")," on the root of the project, after checking the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file on the root."),Object(i.b)("p",null,"2) Run ",Object(i.b)("inlineCode",{parentName:"p"},"php artisan apiato:apidoc")),Object(i.b)("p",null,"Behind the scene ",Object(i.b)("inlineCode",{parentName:"p"},"apiato:apidoc")," is executing a command like this"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"apidoc -c app/Containers/Documentation/ApiDocJs/public -f public.php -i app -o public/api/documentation\n")),Object(i.b)("p",null,"Alternatively you can generate a swagger doc from the apidoc comments, to do so run ",Object(i.b)("inlineCode",{parentName:"p"},"php artisan apiato:swagger"),"."),Object(i.b)("h5",{id:"visit-api-docs-generator-sitebaseurl--link-_docsfeaturesapi-docs-generatormd--for-more-details"},"Visit ","[API Docs Generator]","({{ site.baseurl }}{% link _docs/features/api-docs-generator.md %}) for more details."),Object(i.b)("h3",{id:"Testing"},"5) Testing Setup"),Object(i.b)("p",null,"1) Open ",Object(i.b)("inlineCode",{parentName:"p"},"phpunit.xml")," and make sure the environments are correct for your domain."),Object(i.b)("p",null,"2) run the tests"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"vendor/bin/phpunit\n")),Object(i.b)("h2",{id:"Development-Environment"},"B) Development Environment Setup"),Object(i.b)("p",null,"You can run ",Object(i.b)("strong",{parentName:"p"},"Apiato")," on your favorite environment. Below you'll see how you can run it on top of\n",Object(i.b)("a",{parentName:"p",href:"https://www.vagrantup.com/"},"Vagrant")," (using ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/homestead"},"Laravel Homestead"),") or\n",Object(i.b)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," (using ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Laradock/laradock"},"Laradock"),")."),Object(i.b)("p",null,"We'll see how to use both tools and you can pick one, or you can use other options like\n",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/valet"},"Larvel Valet"),", ",Object(i.b)("a",{parentName:"p",href:"https://laragon.org/"},"Laragon")," or even run it directly on your machine."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Heads up!")," ",Object(i.b)("br",null),"\nThe ICANN has now officially approved ",Object(i.b)("inlineCode",{parentName:"p"},".dev")," as a generic top level domain (gTLD). Therefore, it is ",Object(i.b)("strong",{parentName:"p"},"not")," recommended\nto use ",Object(i.b)("inlineCode",{parentName:"p"},".dev")," domains any more in your local development setup! Our docs has been changed to use ",Object(i.b)("inlineCode",{parentName:"p"},".test"),"\ninstead of ",Object(i.b)("inlineCode",{parentName:"p"},".dev"),", however, you may change it to ",Object(i.b)("inlineCode",{parentName:"p"},".example"),", or ",Object(i.b)("inlineCode",{parentName:"p"},".localhost")," or whatever suits your needs. ",Object(i.b)("a",{parentName:"p",href:"http://www.faqs.org/rfcs/rfc2606.html"},"Read more"),".")),Object(i.b)("h3",{id:"Using-Docker-With-Laradock"},"A.1) Using Docker (with Laradock)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Laradock")," is a Docker PHP development environment. It facilitate running PHP Apps on Docker."),Object(i.b)("p",null,"1) Install ",Object(i.b)("a",{parentName:"p",href:"https://github.com/LaraDock/laradock#installation"},"Laradock"),"."),Object(i.b)("p",null,"2) Navigate into the ",Object(i.b)("inlineCode",{parentName:"p"},"laradock")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cd laradock\n")),Object(i.b)("p",null,"This directory contains a ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. (From the LaraDock project)."),Object(i.b)("p",null,"2.1) If you haven't done so, rename ",Object(i.b)("inlineCode",{parentName:"p"},"env-example")," to ",Object(i.b)("inlineCode",{parentName:"p"},".env"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cp env-example .env\n")),Object(i.b)("p",null,"3) Run the Docker containers:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d nginx mysql redis beanstalkd\n")),Object(i.b)("p",null,"4) Make sure you are setting the ",Object(i.b)("inlineCode",{parentName:"p"},"Docker IP")," as ",Object(i.b)("inlineCode",{parentName:"p"},"Host")," for the ",Object(i.b)("inlineCode",{parentName:"p"},"DB")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Redis"),"  in your ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file."),Object(i.b)("p",null,"5) Add the domain to the Hosts file:"),Object(i.b)("p",null,"5.1) Open the hosts file on your local machine ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/hosts"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"We'll be using ",Object(i.b)("inlineCode",{parentName:"em"},"apiato.test")," as local domain (you can change it if you want).")),Object(i.b)("p",null,"5.2) Map the domain and its subdomains to 127.0.0.1:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"127.0.0.1  apiato.test\n127.0.0.1  api.apiato.test\n127.0.0.1  admin.apiato.test\n")),Object(i.b)("p",null,"If you're using NGINX or Apache, make sure the ",Object(i.b)("strong",{parentName:"p"},"server_name")," (in case of NGINX) or ",Object(i.b)("strong",{parentName:"p"},"ServerName")," (in case of Apache)\nin your the server config file, is set to the following ",Object(i.b)("inlineCode",{parentName:"p"},"apiato.test api.apiato.test admin.apiato.test"),".\n",Object(i.b)("em",{parentName:"p"},"(Also don't forget to point the ",Object(i.b)("strong",{parentName:"em"},"Root")," or ",Object(i.b)("strong",{parentName:"em"},"DocumentRoot")," to the public directory inside apiato ",Object(i.b)("inlineCode",{parentName:"em"},"apiato/public"),")"),"."),Object(i.b)("h3",{id:"Using-Vagrant-Using-Homestead"},"A.2) Using Vagrant (with Laravel Homestead)"),Object(i.b)("p",null,"1) Configure Homestead:"),Object(i.b)("p",null,"1.1) Open the Homestead config file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"homestead edit\n")),Object(i.b)("p",null,"1.2) Map the ",Object(i.b)("inlineCode",{parentName:"p"},"api.apiato.test")," domain to the project public directory - Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"sites:\n    - map: api.apiato.test\n      to: /{full-path-to}/apiato/public\n")),Object(i.b)("p",null,"1.3) You can also map other domains like ",Object(i.b)("inlineCode",{parentName:"p"},"apiato.test")," and ",Object(i.b)("inlineCode",{parentName:"p"},"admin.apiato.test")," to other web apps:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"    - map: apiato.test\n      to: /{full-path-to}/clients/web/user\n    - map: admin.apiato.test\n      to: /{full-path-to}/clients/web/admin\n")),Object(i.b)("p",null,"Note: in the example above the ",Object(i.b)("inlineCode",{parentName:"p"},"/{full-path-to}/clients/web/***")," are separate apps, who live on their own repositories\nand in different folder then the Apiato one. If your Admins, Users or other type of Apps are within Apiato, then you\nmust point them all to the Apiato project folder ",Object(i.b)("inlineCode",{parentName:"p"},"/{full-path-to}/apiato/public"),". So in that case you would have\nsomething like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"    - map: api.apiato.test\n      to: /{full-path-to}/apiato/public\n    - map: apiato.test\n      to: /{full-path-to}/apiato/public\n    - map: admin.apiato.test\n      to: /{full-path-to}/apiato/public\n")),Object(i.b)("p",null,"2) Add the domain to the Hosts file:"),Object(i.b)("p",null,"2.1) Open the hosts file on your local machine ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/hosts"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"We'll be using ",Object(i.b)("inlineCode",{parentName:"em"},"apiato.test")," as local domain (you can change it if you want).")),Object(i.b)("p",null,"2.2) Map the domain and its subdomains to the Vagrant IP Address:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"192.168.10.10   apiato.test\n192.168.10.10   api.apiato.test\n192.168.10.10   admin.apiato.test\n")),Object(i.b)("p",null,"If you're using NGINX or Apache, make sure the ",Object(i.b)("strong",{parentName:"p"},"server_name")," (in case of NGINX) or ",Object(i.b)("strong",{parentName:"p"},"ServerName")," (in case of Apache)\nin your the server config file, is set to the following ",Object(i.b)("inlineCode",{parentName:"p"},"apiato.test api.apiato.test admin.apiato.test"),".\n",Object(i.b)("em",{parentName:"p"},"(Also don't forget to set your ",Object(i.b)("strong",{parentName:"em"},"root")," or ",Object(i.b)("strong",{parentName:"em"},"DocumentRoot")," to the public directory inside apiato ",Object(i.b)("inlineCode",{parentName:"em"},"apiato/public"),")"),"."),Object(i.b)("p",null,"2.3) Run the Virtual Machine:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"homestead up --provision\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"If you see ",Object(i.b)("inlineCode",{parentName:"em"},"No input file specified")," on the sub-domains!\ntry running this command ",Object(i.b)("inlineCode",{parentName:"em"},"homestead halt && homestead up --provision"),".")),Object(i.b)("h3",{id:"Using-anything-else"},"A.3) Using anything else"),Object(i.b)("p",null,"If you're not into virtualization solutions, you can setup your environment directly on your machine. Check the\n","[software's requirements list]","({{ site.baseurl }}{% link _docs/getting-started/requirements.md %})."),Object(i.b)("h2",{id:"Play"},"C) Let's Play"),Object(i.b)("p",null,"Now let's see it in action"),Object(i.b)("p",null,"1.a. Open your web browser and visit:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"http://apiato.test")," You should see an HTML page, with ",Object(i.b)("inlineCode",{parentName:"li"},"Apiato")," in the middle."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"http://admin.apiato.test")," You should see an HTML Login page.")),Object(i.b)("p",null,"1.b. Open your HTTP client and call:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"http://api.apiato.test/")," You should see a JSON response with message: ",Object(i.b)("inlineCode",{parentName:"li"},'"Welcome to apiato."'),","),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"http://api.apiato.test/v1")," You should see a JSON response with message: ",Object(i.b)("inlineCode",{parentName:"li"},'"Welcome to apiato (API V1)."'),",")),Object(i.b)("p",null,"2) Make some HTTP calls to the API:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"To make the calls you can use ",Object(i.b)("a",{parentName:"em",href:"https://www.getpostman.com/"},"Postman"),", ",Object(i.b)("a",{parentName:"em",href:"https://github.com/jkbrzt/httpie"},"HTTPIE")," or\nany other tool you prefer.")),Object(i.b)("p",null,"Let's test the (user registration) endpoint ",Object(i.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/register ")," with ",Object(i.b)("strong",{parentName:"p"},"cURL"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Accept: application/json" -H "Cache-Control: no-cache" -F "email=mahmoud@zalt.me" -F "password=so-secret" -F "name=Mahmoud Zalt" "http://api.apiato.test/v1/register"\n')),Object(i.b)("p",null,"You should get response like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'Access-Control-Allow-Origin \u2192 ...\nCache-Control \u2192 ...\nConnection \u2192 keep-alive\nContent-Language \u2192 en\nContent-Type \u2192 application/json\nDate \u2192 Wed, 11 Apr 2000 22:55:88 GMT\nServer \u2192 nginx\nTransfer-Encoding \u2192 chunked\nVary \u2192 Origin\nX-Powered-By \u2192 PHP/7.7.7\nX-RateLimit-Limit \u2192 30\nX-RateLimit-Remaining \u2192 29\n\n{\n  "data": {\n    "object": "User",\n    "id": 77,\n    "name": "Mahmoud Zalt",\n    "email": "apiato@mail.com",\n    "confirmed": null,\n    "nickname": "Mega",\n    "gender": "male",\n    "birth": null,\n    "social_auth_provider": null,\n    "social_id": null,\n    "social_avatar": {\n      "avatar": null,\n      "original": null\n    },\n    "created_at": {\n      "date": "2017-04-05 16:17:26.000000",\n      "timezone_type": 3,\n      "timezone": "UTC"\n    },\n    "updated_at": {\n      "date": "2017-04-05 16:17:26.000000",\n      "timezone_type": 3,\n      "timezone": "UTC"\n    },\n    "roles": {\n      "data": []\n    }\n  }\n}\n')))}b.isMDXComponent=!0},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,d=s["".concat(r,".").concat(u)]||s[u]||m[u]||i;return a?o.a.createElement(d,l(l({ref:t},c),{},{components:a})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);