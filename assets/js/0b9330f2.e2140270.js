"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[147],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3971:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"Requests"},l=void 0,p={unversionedId:"main-components/requests",id:"main-components/requests",isDocsHomePage:!1,title:"Requests",description:"* Definition & Principles",source:"@site/docs/main-components/requests.md",sourceDirName:"main-components",slug:"/main-components/requests",permalink:"/docs/next/main-components/requests",editUrl:"https://github.com/apiato/documentation/tree/master/docs/main-components/requests.md",tags:[],version:"current",lastUpdatedBy:"agnonym",lastUpdatedAt:1644918975,formattedLastUpdatedAt:"2/15/2022",frontMatter:{title:"Requests"},sidebar:"docs",previous:{title:"Controllers",permalink:"/docs/next/main-components/controllers"},next:{title:"Actions",permalink:"/docs/next/main-components/actions"}},u=[{value:"Definition &amp; Principles",id:"definition-principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Request Properties",id:"request-properties",children:[{value:"<strong>decode</strong>",id:"decode",children:[]},{value:"<strong>urlParameters</strong>",id:"urlparameters",children:[]},{value:"<strong>access</strong>",id:"access",children:[]}]},{value:"How the authorize function work",id:"how-the-authorize-function-work",children:[{value:"Add Custom Authorize Functions",id:"custom-authorize-functions",children:[]}]},{value:"Allow a Role to access every endpoint",id:"allow-a-role-to-access-every-endpoint",children:[]},{value:"Request Helper Functions",id:"request-helper-functions",children:[{value:"<strong>hasAccess</strong>",id:"hasaccess",children:[]},{value:"<strong>getInputByKey</strong>",id:"getinputbykey",children:[]},{value:"<strong>sanitizeInput</strong>",id:"sanitizeinput",children:[]},{value:"<strong>mapInput</strong>",id:"mapinput",children:[]}]},{value:"Storing Data on the Request",id:"storing-data-on-the-request",children:[]},{value:"Unit Testing for Actions (Request)",id:"unit-testing-for-actions-request",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#request-properties"},"Request Properties"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#decode"},"decode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#urlparameters"},"urlParameters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#access"},"access")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-the-authorize-function-work"},"How the authorize function work"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#custom-authorize-functions"},"Add Custom Authorize Functions")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#allow-a-role-to-access-every-endpoint"},"Allow a Role to access every endpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#request-helper-functions"},"Request Helper Functions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#hasaccess"},"hasAccess")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#getinputbykey"},"getInputByKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sanitizeinput"},"sanitizeInput")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#mapinput"},"mapInput")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#storing-data-on-the-request"},"Storing Data on the Request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#unit-testing-for-actions-request"},"Unit Testing for Actions (Request)"))),(0,i.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,i.kt)("p",null,"Read ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Requests"},(0,i.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Requests)")),"."),(0,i.kt)("h3",{id:"rules"},"Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All Requests MUST extend from ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Requests\\Request"),"."),(0,i.kt)("li",{parentName:"ul"},"A Request MUST have a ",(0,i.kt)("inlineCode",{parentName:"li"},"rules()")," function, returning an array and ",(0,i.kt)("inlineCode",{parentName:"li"},"authorize()")," function to check for authorization (can return true when no authorization required).")),(0,i.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - UI\n                    - API\n                        - Requests\n                            - UpdateUserRequest.php\n                            - DeleteUserRequest.php\n                            - ...\n                    - WEB\n                        - Requests\n                            - UpdateUserRequest.php\n                            - DeleteUserRequest.php\n                            - ...\n")),(0,i.kt)("h3",{id:"code-samples"},"Code Samples"),(0,i.kt)("h4",{id:"request"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class UpdateUserRequest extends Request\n{\n    protected array $access = [\n        'permission' => '',\n        'roles'      => 'admin',\n    ];\n\n    protected array $decode = [\n\n    ];\n\n    protected array $urlParameters = [\n\n    ];\n\n    public function rules(): array\n    {\n        return [\n            'email'    => 'email|unique:users,email',\n            'password' => 'min:100|max:200',\n            'name'     => 'min:300|max:400',\n        ];\n    }\n\n    public function authorize(): bool\n    {\n        return $this->check([\n            'hasAccess',\n        ]);\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you are wondering what are those properties doing on the request! keep reading")),(0,i.kt)("h4",{id:"controller"},"Controller"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"public function updateUser(UpdateUserRequest $updateUserRequest)\n{\n    ...\n}\n")),(0,i.kt)("p",null,"By just injecting the request class you already applied the validation and authorization rules."),(0,i.kt)("p",null,"When you need to pass data to the Action, you should pass the request Object as it is to the Action's ",(0,i.kt)("inlineCode",{parentName:"p"},"run()")," method parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"public function createAdmin(CreateAdminRequest $request)\n{\n    $admin = app(CreateAdminAction::class)->run($request);\n    ...\n}\n")),(0,i.kt)("p",null,"You can also retrieve inputs from request like you do in Laravel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"public function run(CreateAdminRequest $request)\n{\n    $data = $updateUserRequest->all();\n    $name = $updateUserRequest->name;\n    $name = $updateUserRequest->input('name');\n    // etc...\n}\n")),(0,i.kt)("h2",{id:"request-properties"},"Request Properties"),(0,i.kt)("p",null,"Apiato adds some new properties to the Request Class. Each of these properties are very useful for some situations, and let you achieve your goals faster and cleaner. Below we'll see a description for each property:"),(0,i.kt)("h3",{id:"decode"},(0,i.kt)("strong",{parentName:"h3"},"decode")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"$decode")," property is used for decoding Hashed ID's from any Request on the fly."),(0,i.kt)("p",null,"If you have enabled the HashID feature, most probably you are passing or allowing your users to pass Hashed (encoded) ID's into your application.\nThese IDs need to be Decoded somewhere and Apiato has a property on its Requests Components where you can specify those Hashed ID's in order to decode them before applying the validation rules."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class AssignUserToRoleRequest extends Request\n{\n    protected array $decode = [\n        'user_id',\n        'item_id',\n    ];\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," validations rules that relies on your ID like (",(0,i.kt)("inlineCode",{parentName:"p"},"exists:users,id"),") will not work unless you decode your ID before passing it to the validation."),(0,i.kt)("h3",{id:"urlparameters"},(0,i.kt)("strong",{parentName:"h3"},"urlParameters")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"$urlParameters")," property is used for applying validation rules on the URL parameters:"),(0,i.kt)("p",null,"Laravel by default does not allow validating the URL parameters (",(0,i.kt)("inlineCode",{parentName:"p"},"/stores/999/items"),"). In order to be able to apply validation rules on URL parameters you can simply define your URL parameters in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$urlParameters")," property. This will also allow you to access those parameters form the Controller in the same way you access the Request data."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class ConfirmUserEmailRequest extends Request\n{\n    protected array $urlParameters = [\n        'id',\n        'code',\n    ];\n\n    public function rules(): array\n    {\n        return [\n            'id'   => 'required|integer', // url parameter\n            'code' => 'required|min:35|max:45', // url parameter\n        ];\n    }\n}\n")),(0,i.kt)("h3",{id:"access"},(0,i.kt)("strong",{parentName:"h3"},"access")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"$access")," property allows the user to define a set of Roles and Permissions that can access this endpoint."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"$access")," property is used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"hasAccess")," function defined below in the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," function, to check if the user has the necessary Roles & Permissions to call this endpoint (basically access the controller function where this request object is injected)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class DeleteUserRequest extends Request\n{\n    protected array $access = [\n        'permission' => 'delete-users|another-permissions',\n        'roles' => 'manager'\n    ];\n\n    public function authorize(): bool\n    {\n        return $this->check([\n            'hasAccess|isOwner',\n            'isKing',\n        ]);\n    }\n}\n")),(0,i.kt)("p",null,"If you do not like the ",(0,i.kt)("inlineCode",{parentName:"p"},"laravelish")," style with ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," in order to separate the different ",(0,i.kt)("inlineCode",{parentName:"p"},"roles")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"permissions")," (e.g., see the example above),\nyou can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"array notation"),". The example from above would look like this (only part that changes):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    protected $access = [\n            'permission' => ['delete-users', 'another-permissions'],\n            'roles' => ['manager'],\n    ];\n")),(0,i.kt)("h2",{id:"how-the-authorize-function-work"},"How the authorize function work"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," function is calling a ",(0,i.kt)("inlineCode",{parentName:"p"},"check")," function which accepts an array of function names. Each of those functions returns boolean."),(0,i.kt)("p",null,"In the example above we are calling three functions ",(0,i.kt)("inlineCode",{parentName:"p"},"hasAccess"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isOwner")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isKing"),"."),(0,i.kt)("p",null,"The separator ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," between the functions indicates an ",(0,i.kt)("inlineCode",{parentName:"p"},"OR")," operation, so if any of the functions ",(0,i.kt)("inlineCode",{parentName:"p"},"hasAccess")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"isOwner")," returns true the user will gain access and only when both return false the user will be prevented from accessing this endpoint."),(0,i.kt)("p",null,"On the other side if ",(0,i.kt)("inlineCode",{parentName:"p"},"isKing")," ",(0,i.kt)("em",{parentName:"p"},"(a custom function could be written by you anywhere)")," returned false no matter what all other functions returns, the user will be prevented from accessing this endpoint, because the default operation between all functions in the array is ",(0,i.kt)("inlineCode",{parentName:"p"},"AND"),"."),(0,i.kt)("p",null,"Checkout the ",(0,i.kt)("a",{parentName:"p",href:"https://apiato.readme.io/docs/requests#section-hasaccess"},"hasAccess")," below."),(0,i.kt)("h3",{id:"custom-authorize-functions"},"Add Custom Authorize Functions"),(0,i.kt)("p",null,"The best way to add a custom authorize function is through a Trait, which can be added to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Request")," classes. In the example below we create a Trait named ",(0,i.kt)("inlineCode",{parentName:"p"},"IsAuthorPermissionTrait")," with a single method called ",(0,i.kt)("inlineCode",{parentName:"p"},"isAuthor"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"isAuthor()")," method, in turn, calls a Task to verify that the current user is an author (e.g., if the user has the proper ",(0,i.kt)("inlineCode",{parentName:"p"},"Role")," assigned)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"trait IsAuthorPermissionTrait\n{\n    public function isAuthor()\n    {\n        // The task needs to be implemented properly!\n        return app(CheckIfUserHasProperRoleTask::class)->run($this->user(), ['author']);\n    }\n}\n")),(0,i.kt)("p",null,"Now, add the newly created Trait to the Request to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"isAuthor")," function in the authorization check."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class FindUserByIdRequest extends Request\n{\n    use IsAuthorPermissionTrait;\n\n    // ...\n\n    public function authorize(): bool\n    {\n        return $this->check([\n            'isAuthor',\n        ]);\n    }\n}\n")),(0,i.kt)("p",null,"Now, the Request uses the newly created ",(0,i.kt)("inlineCode",{parentName:"p"},"isAuthor")," method to check the proper access rights."),(0,i.kt)("h2",{id:"allow-a-role-to-access-every-endpoint"},"Allow a Role to access every endpoint"),(0,i.kt)("p",null,"You can allow some Roles to access every endpoint in the system without having to define that role in each Request object."),(0,i.kt)("p",null,"This is useful when you want to let users with ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin")," role access everything."),(0,i.kt)("p",null,"To do this, define those roles in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"'requests' => [\n    'allow-roles-to-access-all-routes' => ['admin',],\n],\n")),(0,i.kt)("p",null,"This will append the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," role to all roles access in every request object. Example: this ",(0,i.kt)("inlineCode",{parentName:"p"},"'roles' => 'manager'")," becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"'roles' => 'manager|admin'"),' (if the user is manager or admin "has any of the roles", will be allowed to access the endpoint function).'),(0,i.kt)("h2",{id:"request-helper-functions"},"Request Helper Functions"),(0,i.kt)("p",null,"Apiato also provides some helpful functions by default, so you can use them whenever you need them."),(0,i.kt)("h3",{id:"hasaccess"},(0,i.kt)("strong",{parentName:"h3"},"hasAccess")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hasAccess")," function, decides if user has Access or not based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"$access")," property."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the user has any roles or permissions he will be given access.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you need more or less roles/permissions just add ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," between each permission.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you do not need to set a roles/permissions just set ",(0,i.kt)("inlineCode",{parentName:"p"},"'permission' => ''")," or  ",(0,i.kt)("inlineCode",{parentName:"p"},"'permission' => null"),"."))),(0,i.kt)("h3",{id:"getinputbykey"},(0,i.kt)("strong",{parentName:"h3"},"getInputByKey")),(0,i.kt)("p",null,"Get the data from within the ",(0,i.kt)("inlineCode",{parentName:"p"},"$request")," by entering the name of the field. This function behaves like ",(0,i.kt)("inlineCode",{parentName:"p"},"$request->input('key.here')"),",\nhowever, it works on the ",(0,i.kt)("strong",{parentName:"p"},"decoded")," values instead of the original data."),(0,i.kt)("p",null,"Consider the following Request data in case you are passing ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")," data instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data" : {\n    "name"  : "foo",\n    "description" : "bar"\n  },\n  "id" : "a2423nadabada0"\n}\n')),(0,i.kt)("p",null,"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"$request->input('id')")," would return ",(0,i.kt)("inlineCode",{parentName:"p"},'"a2423nadabada0"'),", however ",(0,i.kt)("inlineCode",{parentName:"p"},"$request->getInputByKey('id')")," would return the\ndecoded value (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),")."),(0,i.kt)("p",null,"Furthermore, one can define a ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," value to be returned, if the key is not present (or not set), like so:\n",(0,i.kt)("inlineCode",{parentName:"p"},"$request->getInputByKey('data.name', 'Undefined')")),(0,i.kt)("h3",{id:"sanitizeinput"},(0,i.kt)("strong",{parentName:"h3"},"sanitizeInput")),(0,i.kt)("p",null,"Especially for ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," requests, if you like to submit only the fields, to be changed to the API in order to:"),(0,i.kt)("p",null,"a) minimize the traffic",(0,i.kt)("br",{parentName:"p"}),"\n","b) partially update the respective resource"),(0,i.kt)("p",null,"Checking for the presence (or absence) of specific keys in the request typically results in huge ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," blocks, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"if($request->has('data.name')) {\n   $data['name'] = $request->input('data.name'); // or use getInputByKey()\n}\n\nif($request->has('data.description')) {\n   $data['description'] = $request->input('data.description'); // or use getInputByKey()\n}\n")),(0,i.kt)("p",null,"So to avoid those ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," blocks, you might use ",(0,i.kt)("inlineCode",{parentName:"p"},"array_filter($data)")," in order to remove ",(0,i.kt)("inlineCode",{parentName:"p"},"empty")," fields from the request."),(0,i.kt)("p",null,"However, in PHP ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"''")," ",(0,i.kt)("em",{parentName:"p"},"(empty string)")," are also considered ",(0,i.kt)("inlineCode",{parentName:"p"},"empty")," (which is not what you want clearly)."),(0,i.kt)("p",null,"You can read more about this problem ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/issues/186"},"here"),"."),(0,i.kt)("p",null,"In order to simplify sanitizing ",(0,i.kt)("inlineCode",{parentName:"p"},"Request Data")," when using ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded"),",\napiato offers a convenient ",(0,i.kt)("inlineCode",{parentName:"p"},"sanitizeInput(array $fields)")," method."),(0,i.kt)("p",null,"Consider the following Request data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data" : {\n        "is_private" : false,\n        "description" : "this is a rather long description text",\n        "a" : null,\n        "b" : 3453,\n        "foo" : {\n            "a" : "a",\n            "b" : "b",\n            "c" : 1234\n        },\n        "bar" : [\n            "a", "b", "c"\n        ]\n    }\n}\n')),(0,i.kt)("p",null,"This method lets you specify a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"$fields")," to be accessed and extracted from the ",(0,i.kt)("inlineCode",{parentName:"p"},"$request"),". This is done using the\nDOT notation. Finally, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"sanitizeInput()")," method on the ",(0,i.kt)("inlineCode",{parentName:"p"},"$request"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$fields = [\n    'data.name',\n    'data.description',\n    'data.is_private',\n    'data.blabla',\n    'data.foo.c'\n];\n$data = $request->sanitizeInput($fields);\n")),(0,i.kt)("p",null,"The extracted ",(0,i.kt)("inlineCode",{parentName:"p"},"$data")," looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'[\n  "data" => [\n    "is_private" => false\n    "description" => "this is a rather long description text"\n    "foo" => [\n      "c" => 1234\n    ]\n  ]\n]\n')),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"data.blabla")," is not within the ",(0,i.kt)("inlineCode",{parentName:"p"},"$data")," array, as it was not present within the ",(0,i.kt)("inlineCode",{parentName:"p"},"$request"),". Furthermore, all\nother fields from the ",(0,i.kt)("inlineCode",{parentName:"p"},"$request")," are omitted as they are not specified. So basically, the method creates some kind of\n",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"$request"),", only passing the defined values. Furthermore, the DOT Notation allows you to easily specify\nthe fields to would like to pass through. This makes partially updating a resource quite easy!"),(0,i.kt)("p",null,"You can also set default values while sanitizing data from the request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$sanitizedData = $request->sanitizeInput([\n    'name' => 'John', // if name is not provided then default value will be set\n    'product.company.address' => 'Somewhere in the world', // dot notation is also supported\n    'email',\n    'password'\n]);\n")),(0,i.kt)("h3",{id:"mapinput"},(0,i.kt)("strong",{parentName:"h3"},"mapInput")),(0,i.kt)("p",null,"Sometimes you might want to map input from the request to other fields in order to automatically pass it to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Action"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"Task"),". Of course, you can manually map those fields, but you can also rely on the ",(0,i.kt)("inlineCode",{parentName:"p"},"mapInput(array $fields)")," helper\nfunction."),(0,i.kt)("p",null,'This helper, in turn, allows to "redefine" keys in the request for subsequent processing. Consider the following\nexample request:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data" : {\n        "name" : "John Doe"\n    }\n}\n')),(0,i.kt)("p",null,"Your Task to process this data, however, requests the field ",(0,i.kt)("inlineCode",{parentName:"p"},"data.name")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"data.username"),". You can call the helper\nlike this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$request->mapInput([\n    'data.name' => 'data.username',\n]);\n")),(0,i.kt)("p",null,"The resulting structure would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data" : {\n        "username" : "John Doe"\n    }\n}\n')),(0,i.kt)("h2",{id:"storing-data-on-the-request"},"Storing Data on the Request"),(0,i.kt)("p",null,"During the Request life-cycle you may want to store some data on the request object and pass it to other SubActions (or Tasks)."),(0,i.kt)("p",null,"To store some data on the request use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$request->keep(['someKey' => $someValue]);\n")),(0,i.kt)("p",null,"To retrieve the data back at any time during the request life-cycle use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$someValue = $request->retrieve('someKey');\n")),(0,i.kt)("h2",{id:"unit-testing-for-actions-request"},"Unit Testing for Actions (Request)"),(0,i.kt)("p",null,"Since we're passing Request objects to Actions. When writing unit tests we need to create fake Request just to pass it to the Action with some fake data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// creating\n$request = RegisterUserRequest::injectData($data);\n")),(0,i.kt)("p",null,"Example One:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$data = [\n    'email'    => 'john@doe.test',\n    'name'     => 'John Doe',\n    'password' => 'so-secret',\n];\n\n// create request object with some data\n$request = RegisterUserRequest::injectData($data);\n\n// create instance of the Action\n$action = app(RegisterUserAction::class)->run($request);\n\n// do any kind of assertions..\n$this->assertInstanceOf(User::class, $user);\n")),(0,i.kt)("p",null,"Example Two (With Authenticated User):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$data = [\n   'store_id'  => $this->encode($store->id),\n   'items'     => $orderItems,\n   'recipient' => $receipient,\n];\n\n$user = User::factory()->create();\n\n$request = MakeOrderRequest::injectData($data, $user);\n\n$order = app(MakeOrderAction::class)->run($request);\n")))}c.isMDXComponent=!0}}]);