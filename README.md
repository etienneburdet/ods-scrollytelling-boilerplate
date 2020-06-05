[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
# ODS Scrollytelling boilerplate
This boilerpalte will help you use [Scrollama](https://github.com/russellgoldenberg/scrollama) with data from [the Opendatasoft data network](https://data.opendatasoft.com/pages/home/)

Be sure to read both the site and the code! Demo right here 👉 http://etienneburdet.github.ioc/ods-scrollytelling-boilerplate/

To install and run :

```
mkdir my-project
git clone git@github.com:etienneburdet/ods-minimal-boilerplate.git my-project
cd my-project
yarn
yarn dev
```
or
```
[…]
npm install
npm run dev
```
Pages will be server on http://localhost:9000

To deploy on gh-pages
```
yarn build // npm run build
git subtree push --prefix dist origin gh-pages
```

You will notice that this app contains a mix of CDN injections and node modules : 
* The CDN injections are for the Opendatasoft widget. If that's all you need, just copy the file in `public/index.html`
* If you only need custom npm modules, just remove those lines in `public/index.html` :
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://opendatasoft.github.io/ods-widgets/dist/ods-widgets.css">

…

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-sanitize.min.js"></script>
<script type="text/javascript" src="https://opendatasoft.github.io/ods-widgets/dist/ods-widgets.js"></script>
```

Have fun scrolling 🔥
