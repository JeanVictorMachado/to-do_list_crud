# ToDo_List_CRUD
Aplicativo que permite o usuário criar, ler, atualizar e apagar uma tarefa, utilizando React Js / Node Js / Mongo Db / Styled Components. 

<h2><a id="user-content-tech" class="anchor" aria-hidden="true" href="#tech"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Tech</h2>

<p>THis application was developed mainly using:</p>

<ul>
<li>React JS</li>
<li>Node JS</li>
<li>Docker running a Postgres database.</li>
<li>Typescript</li>
</ul>

<p>With the main technologies on each being:</p>

<ol>
<li>React JS</li>
</ol>

<ul>
<li>React, obviously.</li>
<li>Styled Components for styling</li>
<li>React-Router-Dom for navigating (Routing)</li>
<li>Yup for form validation</li>
<li>Unform for form control</li>
<li>ESLint to enforce and correct code style</li>
</ul>

<ol start="2">
<li>NodeJS</li>
</ol>

<ul>
<li>NodeJS, obviously</li>
<li>Express for routing</li>
<li>Jsonwebtoken for auth signing</li>
<li>Multer, csv-parse and csvtojson for CSV uploading</li>
<li>Postgres for database</li>
<li>TypeORM as a ORM</li>
<li>bcryptjs as a password encrypt dependency</li>
<li>uuid as a unique id generator</li>
<li>ts-node-dev to set up the typescript server</li>
<li>ESLint to enforce and correct code style</li>
</ul>

<h3><a id="user-content-constraints-rules" class="anchor" aria-hidden="true" href="#constraints-rules"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Constraints (Rules)</h3>

<ul>
<li>The outcome transaction will only register if the user has enough balance for it;</li>
<li>The application will redirect the user to the login page if he tries to access any private route while being logged out;</li>
<li>The application will redirect the user to the dashboard page he tries to access the login/register page while being logged in;</li>
<li>Only logged in users can create/list/delete transactions</li>
<li>User's password is encrypted before it's saved onto the database</li>
<li>User's log token is saved onto the browser's local storage</li>
</ul>

<h2><a id="user-content-preview" class="anchor" aria-hidden="true" href="#preview"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Preview</h2>

<p>Check out 2 gifs of the application:</p>

<p><a target="_blank" rel="noopener noreferrer" href="/fabiosenracorrea/goFinance/blob/master/project-login.gif"><img src="/fabiosenracorrea/goFinance/raw/master/project-login.gif" alt="goFinance login-register pages" style="max-width:100%;"></a></p>
