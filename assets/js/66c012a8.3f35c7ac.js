(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),r=(n(0),n(173)),i={title:"Contribution Guide"},l={unversionedId:"general/contribution-guide",id:"general/contribution-guide",isDocsHomePage:!1,title:"Contribution Guide",description:"Thank you for your consideration to contribute. This project is powered and driven by its users, and contributions",source:"@site/docs/general/contribution-guide.md",slug:"/general/contribution-guide",permalink:"/documentation/docs/general/contribution-guide",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/general/contribution-guide.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617626615,formattedLastUpdatedAt:"4/5/2021",sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/documentation/docs/general/faq"},next:{title:"Upgrade Guide",permalink:"/documentation/docs/general/upgrade-guide"}},b=[{value:"SETUP",id:"setup",children:[]},{value:"USAGE (Contribution Steps)",id:"usage-contribution-steps",children:[]},{value:"Documentation Tips:",id:"documentation-tips",children:[]},{value:"Run the docs locally:",id:"run-the-docs-locally",children:[]},{value:"Add new component generator.",id:"add-new-component-generator",children:[]},{value:"Minor Release",id:"minor-release",children:[]},{value:"Major Release",id:"major-release",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Thank you for your consideration to contribute. This project is powered and driven by its users, and contributions\nare ",Object(r.b)("strong",{parentName:"p"},"welcome")," and will be fully ",Object(r.b)("strong",{parentName:"p"},"credited"),".")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Code-of-Conduct"},"Code of Conduct")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Versioning"},"Versioning")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Coding-Standards"},"Coding Standards")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Git-Branches"},"Git Branching Strategy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Adding-New-Features"},"Adding New Features")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Security-Vulnerabilities"},"Security Vulnerabilities")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Contributing-Apiato"},"Contribution Guides"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Contribution-Guidelines"},"Contribution General Guidelines")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Contributing-Project"},"Contributing to the Apiato Project")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Contributing-Documentation"},"Contributing to the Documentation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Contributing-Generator"},"Contributing to the Code Generator")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#New-Release"},"Making a new Release"))))),Object(r.b)("a",{name:"Code-of-Conduct"}),"# Code of Conduct",Object(r.b)("p",null,"Apiato follows the ",Object(r.b)("a",{parentName:"p",href:"https://www.contributor-covenant.org/version/1/4/code-of-conduct"},"Contributor Covenant")," Code of Conduct."),Object(r.b)("a",{name:"Versioning"}),"# Versioning",Object(r.b)("p",null,"The project is versioned under the ",Object(r.b)("a",{parentName:"p",href:"http://semver.org/"},"Semantic Versioning")," guidelines."),Object(r.b)("a",{name:"Coding-Standards"}),"# Coding Standards",Object(r.b)("p",null,"The project is compliant with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md"},"PSR-1")," Coding Standard,\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md"},"PSR-2")," Coding Style and some of the\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/proposed/extended-coding-style-guide.md"},"PSR-12")," Styles."),Object(r.b)("p",null,"As well as it is compliant with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md"},"PSR-4")," Autoloader.\n",Object(r.b)("em",{parentName:"p"},"If you notice any compliance oversights, you can send a pull request to address this issue.")),Object(r.b)("a",{name:"Git-Branches"}),"# Git Branching Strategy",Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch contains the upcoming Apiato release.\nWhile the other branches are for all the stable releases (",Object(r.b)("inlineCode",{parentName:"p"},"7.0"),", ",Object(r.b)("inlineCode",{parentName:"p"},"7.1"),", ",Object(r.b)("inlineCode",{parentName:"p"},"8.0"),"...)."),Object(r.b)("p",null,"Bug fixes should be sent to both (the latest stable branch) and to ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch, unless they fix features that exist only in the upcoming release, then they should only be sent to ",Object(r.b)("inlineCode",{parentName:"p"},"master"),"."),Object(r.b)("p",null,"Major new features (and big changes) should always be sent to the ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch, which contains the upcoming release."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("p",null,"Assuming that the current stable version is ",Object(r.b)("inlineCode",{parentName:"p"},"8.0"),". The repository would have at least the following two branches ",Object(r.b)("inlineCode",{parentName:"p"},"master")," and ",Object(r.b)("inlineCode",{parentName:"p"},"8.0"),"."),Object(r.b)("p",null,"If your PR contains a major change or a braking change, or new Container than it must be sent to the ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch.\nAnd if your PR fixes a bug in the existing stable release, then it should be sent to the latest release branch ",Object(r.b)("inlineCode",{parentName:"p"},"8.0"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you always contribute to Apiato, it's better to use the master branch instead of the latest release\nbranch, to always have the latest features and updates. And would be good to merge the latest stable branch into your master from time to time, in case it has some bug fixes.")),Object(r.b)("a",{name:"Adding-New-Features"}),"# Adding New Features",Object(r.b)("p",null,"If you have an idea for a new feature, it's a good idea to check out our ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/issues"},"issues"),"\nor active ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/pulls"},"pull requests")," first to see if the feature is already being worked on.\nIf not, feel free to submit an issue first (proposing the new feature), asking whether the feature is beneficial to the project. Then go ahead and submit your PR to the master branch."),Object(r.b)("a",{name:"Security-Vulnerabilities"}),"# Security Vulnerabilities",Object(r.b)("p",null,"If you discover a security vulnerability, please send an email to ",Object(r.b)("inlineCode",{parentName:"p"},"support@apiato.io"),"."),Object(r.b)("hr",null),Object(r.b)("a",{name:"Contribution-Guidelines"}),"# Contribution General Guidelines Important things to remember when contributing:",Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Run tests first")," before writing any line of code, run the tests ",Object(r.b)("inlineCode",{parentName:"li"},"vendor/bin/phpunit"),", and make sure all the tests are passing in your machine."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Keep your commits atomic")," Each commit should represent a single unit of change. (Also, remember to write helpful commit messages.)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Write as many tests")," Your changes must be covered with Tests (Functional or Unit). (Code without tests could be accepted in some cases)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Ensure updating the documentation")," the doc repo is there ",Object(r.b)("inlineCode",{parentName:"li"},"https://github.com/apiato/documentation"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Submit one feature/change per pull request.")," If you have multiple features/changes you wish to submit, please break them up into separate pull requests.")),Object(r.b)("a",{name:"Contributing-Project"}),"# Contributing to the Apiato Project",Object(r.b)("p",null,"This guide will help you contribute to the Apiato project, while working on your personal project."),Object(r.b)("p",null,"If you added a feature/function to your local project or created a useful container or fixed a bug. This guide will\nshow you how to submit that change to Apiato."),Object(r.b)("h3",{id:"setup"},"SETUP"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"One time setup")),Object(r.b)("p",null,"In this scenario let's assume we have the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Apiato"),"     # is the starter/framework project"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Project-A"),"  # your personal project your building on top of apiato")),Object(r.b)("p",null,"1) Create Project A from Apiato"),Object(r.b)("p",null,"If you want to fix a bug on the latest stable release your PR should be sent to the latest stable branch, thus you need\nto pull the latest stable release of Apiato."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"composer create-project apiato/apiato project-a")),Object(r.b)("p",null,"If you want to add new features or do anything else, that should be added to the next stable release, you need to pull\nthe master branch and submit your PR there."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"composer create-project apiato/apiato project-a dev-master")),Object(r.b)("p",null,"2) Initialize git in Project A"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git init")),Object(r.b)("p",null,"3.a) Setup your origin remote (to point to your project private repository url)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git remote add origin git@bitbucket.org:username/repo.git")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"if you already have origin remote then update it with")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git remote set-url origin git@bitbucket.org:username/project-a.git")),Object(r.b)("p",null,"3.b) Setup an upstream remote (to point to your fork of the apiato repository)"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"assuming you already forked the repository")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git remote add upstream git@github.com:username/apiato.git")),Object(r.b)("p",null,"Now you should have the following remotes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\u276f git remote -vv\norigin      git@bitbucket.org:username/project-a.git (fetch)\norigin      git@bitbucket.org:username/project-a.git (push)\nupstream    git@github.com:username/apiato.git (fetch)\nupstream    git@github.com:username/apiato.git (push)\n")),Object(r.b)("p",null,"4) Do your first commit"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git add . && git commit -m 'first commit'")),Object(r.b)("p",null,"5.a) Create apiato branch"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git checkout -b apiato")),Object(r.b)("p",null,"5.b) Let the apiato branch track the upstream master branch"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git checkout apiato")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git branch --set-upstream-to upstream/master")),Object(r.b)("p",null,"Now you should have the following branches:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\u276f git branch -vv\n apiato           77b4d945 [upstream/master] ...\n master           77d302aa [origin/master] ...\n")),Object(r.b)("h3",{id:"usage-contribution-steps"},"USAGE (Contribution Steps)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Must do every time before you contribute")),Object(r.b)("p",null,"1) Update remotes (fetch)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git fetch --all")),Object(r.b)("p",null,"2) Go to the apiato branch"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git checkout apiato")),Object(r.b)("p",null,"3) Sync apiato branch with upstream/master"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git reset --hard upstream/master")),Object(r.b)("p",null,"4) Now you can cherry pick the commits you'd like to contribute"),Object(r.b)("p",null,"4.a) First go to the apiato branch"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git checkout apiato")),Object(r.b)("p",null,"4.b) Create custom branch for your PR"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git checkout -b feature-awesome"),"  (must be created from apiato)"),Object(r.b)("p",null,"4.c) Do the cherry-picking"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git log master"),"      (copy the commit ID)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git cherry-pick {commit-ID}")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"(repeat for all commits you want to submit)")),Object(r.b)("p",null,"5) Push apiato branch to the upstream"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git push upstream feature-awesome"),"   (replace feature-awesome with your custom branch name)"),Object(r.b)("p",null,"6) Create a Pull Request (PR) from your forked repository to the apiato official repository."),Object(r.b)("p",null,"Make sure you create a PR from your custom branch ",Object(r.b)("inlineCode",{parentName:"p"},"feature-awesome")," to ",Object(r.b)("inlineCode",{parentName:"p"},"master")," (or the latest stable release)."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"W'll do our best to merge your PR in the shortest time possible. Thanks in advanced :)")),Object(r.b)("p",null,"Checkout ","[How to upgrade apiato]","({{ site.baseurl }}{% link _docs/miscellaneous/faq.md %})."),Object(r.b)("br",null),Object(r.b)("a",{name:"Contributing-Documentation"}),"# Contributing to the Documentation",Object(r.b)("p",null,"The documentation is generated using ",Object(r.b)("a",{parentName:"p",href:"https://jekyllrb.com/"},"Jekyll")," and its content lives in its own repository\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/apiato/documentation"},"(apiato/documentation)"),", in the ",Object(r.b)("inlineCode",{parentName:"p"},"_docs/")," folder."),Object(r.b)("p",null,"All you have to do is navigate to ",Object(r.b)("inlineCode",{parentName:"p"},"_docs/")," folder, find the markdown ",Object(r.b)("inlineCode",{parentName:"p"},".md")," file that you want to update ",Object(r.b)("em",{parentName:"p"},"(all files\nare named as they are in the site menu)"),", update or add the text, the commit."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You do not need to build the site locally. Just edit the markdown files and submit your PR. GitHub will build the site for us.")),Object(r.b)("h3",{id:"documentation-tips"},"Documentation Tips:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The styles are in ",Object(r.b)("inlineCode",{parentName:"li"},"main.scss")," and ",Object(r.b)("inlineCode",{parentName:"li"},"_sass/*"),"."),Object(r.b)("li",{parentName:"ul"},"The Layout ",Object(r.b)("inlineCode",{parentName:"li"},"_layouts/default.html"),"."),Object(r.b)("li",{parentName:"ul"},"The docs folders ",Object(r.b)("inlineCode",{parentName:"li"},"_docs/*")," do not represent the categories displayed in the site."),Object(r.b)("li",{parentName:"ul"},"To add new category for a file ",Object(r.b)("inlineCode",{parentName:"li"},'category: "New Category"')," (usually defined in each documentation readme), you must\nadd the category name to ",Object(r.b)("inlineCode",{parentName:"li"},"_config.yml")," under ",Object(r.b)("inlineCode",{parentName:"li"},"categories-order")," in order to appear in the site."),Object(r.b)("li",{parentName:"ul"},"To set a link, use the internal links as follow: ",Object(r.b)("inlineCode",{parentName:"li"},"[your-text]( { { site.baseurl } } { % link _docs/path/file.md % } )"),".\nNOTE: remove the spaces between the tags.")),Object(r.b)("h3",{id:"run-the-docs-locally"},"Run the docs locally:"),Object(r.b)("h4",{id:"in-docker"},"In Docker:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"git clone https://github.com/apiato/documentation .")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"docker run -v $PWD:/srv/jekyll -p 4000:4000 -it jekyll/jekyll bash")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"bundle install")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"jekyll serve")),Object(r.b)("li",{parentName:"ol"},"Browse ",Object(r.b)("inlineCode",{parentName:"li"},"http://localhost:4000"))),Object(r.b)("h4",{id:"natively"},"Natively:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install (Jekyll)","[https://jekyllrb.com/]"," and its dependencies."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"git clone https://github.com/apiato/documentation .")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"bundle install")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"bundle exec jekyll serve")),Object(r.b)("li",{parentName:"ol"},"Browse ",Object(r.b)("inlineCode",{parentName:"li"},"http://localhost:4000")),Object(r.b)("li",{parentName:"ol"},"Finally ",Object(r.b)("inlineCode",{parentName:"li"},"jekyll build"))),Object(r.b)("a",{name:"Contributing-Generator"}),"# Contributing to the Code Generator",Object(r.b)("p",null,"The Code generator is in ",Object(r.b)("inlineCode",{parentName:"p"},"app/Ship/core/Generator"),"."),Object(r.b)("p",null,'Each component command, "Except the Containers Generator" must extend from the ',Object(r.b)("inlineCode",{parentName:"p"},"Apiato\\Core\\Generator\\GeneratorCommand.php"),".\nThis abstract class does all the work for you."),Object(r.b)("h3",{id:"add-new-component-generator"},"Add new component generator."),Object(r.b)("p",null,"General Info: the only function that gets called whenever a command is executed is the ",Object(r.b)("inlineCode",{parentName:"p"},"handle()")," function. This\nfunction exist on the abstract class ",Object(r.b)("inlineCode",{parentName:"p"},"Apiato\\Core\\Generator\\GeneratorCommand")," which does all the common job for all\nthe generator commands. For better understanding of how things work. Make sure you read that function."),Object(r.b)("p",null,"1 - Add create new command by copy pasting any of the existing components commands already supported. The\n",Object(r.b)("inlineCode",{parentName:"p"},"Generator/Commands/RouteGenerator.php")," is a great example."),Object(r.b)("p",null,"For each generator you need to implement exactly one method (as it is defined in the respective interface)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"getUserInputs:"),"\nThis method reads all parameters from the command line or provides a wizard to get information from the user.\nThe available options for this generator are specified using the ",Object(r.b)("inlineCode",{parentName:"p"},"public $inputs = []")," variable in respective generator.\nNote that you do not need to specify the options for ",Object(r.b)("inlineCode",{parentName:"p"},"--container")," or ",Object(r.b)("inlineCode",{parentName:"p"},"--file"),", as both are handled directly by the\nGenerator itself. Simply add the options that are specifically needed for this generator."),Object(r.b)("p",{parentName:"li"},"  Be sure to read input with the ",Object(r.b)("inlineCode",{parentName:"p"},"checkParameterOrXYZ()")," methods, as they automatically check if an option is available.\nOtherwise, they will ask the user for additional input."),Object(r.b)("p",{parentName:"li"},"  The method must return an array of 3 keys:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"path-parameters")," are used to replace variables within the path where the generator creates the file."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"file-parameters")," are used to replace variables within the name of the file to be created."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stub-parameters")," are used to replace variables within the stub.")))),Object(r.b)("p",null,"2 - Create the stub to be loaded in ",Object(r.b)("inlineCode",{parentName:"p"},"Generator/Stubs"),", copy any real component code and build the stub out of it."),Object(r.b)("p",null,"3 - Finally register the command in ",Object(r.b)("inlineCode",{parentName:"p"},"Generator/GeneratorsServiceProvider.php")," using ",Object(r.b)("inlineCode",{parentName:"p"},"registerGenerators"),", example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"        $this->registerGenerators([\n            ActionGenerator::class,\n            RouteGenerator::class,\n            TaskGenerator::class,\n            // ...\n        ]);\n")),Object(r.b)("p",null,"4 - Default FileName & FileExtension(optional)"),Object(r.b)("p",null,"You may provide another default filename or extension by overriding the ",Object(r.b)("inlineCode",{parentName:"p"},"getDefaultFileName()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"getDefaultFileExtension()"),"\nmethod, which simply returns a ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"."),Object(r.b)("a",{name:"New-Release"}),"# Making a new Release (for admins)",Object(r.b)("p",null,"1 - Merge the last ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/branches"},"stable branch")," in the master branch. (To get any new bug fixes.)"),Object(r.b)("br",null),"2 - Decide on the next version number for the new release. By checking the current [releases](https://github.com/apiato/apiato/releases).",Object(r.b)("br",null),"3 - Update the version VERSION value in `app/Ship/core/Foundation/Apiato.php` (example: `const VERSION = '8.1.0';`).",Object(r.b)("h3",{id:"minor-release"},"Minor Release"),Object(r.b)("p",null,"Your PR with that minor changes should be submitted and merged into master."),Object(r.b)("p",null,"1 - Go to ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/releases"},"releases")," and create a new one from the master branch."),Object(r.b)("br",null),"2 - Make sure you write a complete Changelog, in the release description.",Object(r.b)("br",null),"3 - If you updated the documentation and you should! then visit the [documentation](https://github.com/apiato/documentation) repository and merge the PR into master.",Object(r.b)("h3",{id:"major-release"},"Major Release"),Object(r.b)("p",null,"Master is the branch that contains all the new changes.\nSo we need to create a new branch from master then make a release from that new branch."),Object(r.b)("p",null,"1 - From master, checkout a new branch named as the version number you want to release. (Example ",Object(r.b)("inlineCode",{parentName:"p"},"8.1"),")."),Object(r.b)("br",null),"2 - Go to [releases](https://github.com/apiato/apiato/releases) and create a new one from the branch created in the step above. (Example `8.1`).",Object(r.b)("br",null),"3 - Make sure you write a complete Changelog, in the release description.",Object(r.b)("br",null),"4 - Change the [default branch](https://github.com/apiato/apiato/settings/branches) on github to that new branch.",Object(r.b)("br",null),"5 - If you updated the documentation and you should! then visit the [documentation](https://github.com/apiato/documentation) repository and merge the PR into master.")}p.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||r;return n?o.a.createElement(d,l(l({ref:t},c),{},{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);