define(["angular"], function (angular) {"use strict"; var templates = angular.module("templates", []); templates.run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('modules/about/about.html',
    "<div class=row>\n" +
    "\t<div class=col-xs-12>\n" +
    "\t\t<h1 translate=\"About Page\"></h1>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=row>\n" +
    "\t<div class=col-xs-12>\n" +
    "\t\t<p>{{ about }}</p>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('modules/contact/contact.html',
    "<div class=row>\n" +
    "\t<div class=col-xs-12>\n" +
    "\t\t<h1>\n" +
    "\t\t\t<translate>Contact Page</translate>\n" +
    "\t\t</h1>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=row ng-show=sent>\n" +
    "\t<div class=col-xs-12>\n" +
    "\t\t<a class=close data-dismiss=alert ng-click=\"sent = false\">×</a>\n" +
    "\t\t<strong>\n" +
    "\t\t\t<translate>Message sent</translate>\n" +
    "\t\t</strong>\n" +
    "\t\t<translate>Not really sent</translate>\n" +
    "\t\t{{ message.text }}\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<div class=row>\n" +
    "\t<div class=col-xs-4>\n" +
    "\t\t<h2 translate=Author></h2>\n" +
    "\t\t<p>{{ author }}</p>\n" +
    "\n" +
    "\t\t<p><a href=\"mailto: {{ email }}\">{{ email}}</a></p>\n" +
    "\n" +
    "\t\t<p><a href=\"{{ homepage }}\">{{ homepage }}</a></p>\n" +
    "\n" +
    "\t\t<p>Configuration used for building: \"{{ system }}\" </p>\n" +
    "\t</div>\n" +
    "\t<div class=col-xs-8>\n" +
    "\t\t<h2 translate=\"Contact form\"></h2>\n" +
    "\n" +
    "\t\t<form ng-submit=sendMessage()>\n" +
    "\t\t\t<fieldset>\n" +
    "\t\t\t\t<div class=form-group>\n" +
    "\t\t\t\t\t<label for=text translate=Message></label>\n" +
    "\t\t\t\t\t<textarea id=text class=form-control ng-model=message.text rows=10 ng-change=messageChanged()></textarea>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<button class=\"btn btn-primary\" ng-disabled=!message.text translate=Send></button>\n" +
    "\t\t\t</fieldset>\n" +
    "\t\t</form>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('modules/ngstart/ngstart.html',
    "<div class=\"row dashboard row-dark\">\n" +
    "\t<div class=\"col-sm-4 text-center\">\n" +
    "\t\t<div class=product>\n" +
    "\t\t\t<span class=logo-helper></span>\n" +
    "\t\t\t<img src=images/build/angularjs.png>\n" +
    "\n" +
    "\t\t\t<h1>angularJS project</h1>\n" +
    "\n" +
    "\t\t\t<p>Test</p>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"col-sm-4 text-center\">\n" +
    "\t\t<div class=product>\n" +
    "\t\t\t<span class=logo-helper></span>\n" +
    "\t\t\t<img src=images/build/less.png>\n" +
    "\n" +
    "\t\t\t<h1>Less compiler</h1>\n" +
    "\n" +
    "\t\t\t<p>Test</p>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"col-sm-4 text-center\">\n" +
    "\t\t<div class=product>\n" +
    "\t\t\t<span class=logo-helper></span>\n" +
    "\t\t\t<img src=images/build/requirejs.png>\n" +
    "\n" +
    "\t\t\t<h1>requireJS</h1>\n" +
    "\n" +
    "\t\t\t<p>Test</p>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"row dashboard row-dark\">\n" +
    "\t<div class=\"col-sm-4 text-center\">\n" +
    "\t\t<div class=product>\n" +
    "\t\t\t<span class=logo-helper></span>\n" +
    "\t\t\t<img src=images/build/bootstrap.png>\n" +
    "\n" +
    "\t\t\t<p>Twitter Bootstrap</p>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"col-sm-4 text-center\">\n" +
    "\t\t<div class=product>\n" +
    "\t\t\t<span class=logo-helper></span>\n" +
    "\t\t\t<i class=\"fa fa-flag\"></i>\n" +
    "\n" +
    "\t\t\t<p>Font Awesome</p>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"col-sm-4 text-center\">\n" +
    "\t\t<div class=product>\n" +
    "\t\t\t<span class=logo-helper></span>\n" +
    "\t\t\t<img src=images/build/angularui.png>\n" +
    "\n" +
    "\t\t\t<p>angular-ui-bootstrap</p>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row dashboard row-dark\">\n" +
    "\t<div class=\"col-sm-4 text-center\">\n" +
    "\t\t<div class=product>\n" +
    "\t\t\t<span class=logo-helper></span>\n" +
    "\t\t\t<i class=\"fa fa-cloud-upload\"></i>\n" +
    "\n" +
    "\t\t\t<p>Automatic Build System</p>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"col-sm-4 text-center\">\n" +
    "\t\t<div class=product>\n" +
    "\t\t\t<span class=logo-helper></span>\n" +
    "\t\t\t<i class=\"fa fa-android\"></i>\n" +
    "\n" +
    "\t\t\t<p>Automatic JS and CSS optimizations</p>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"col-sm-4 text-center\">\n" +
    "\t\t<div class=product>\n" +
    "\t\t\t<span class=logo-helper></span>\n" +
    "\t\t\t<i class=\"fa fa-anchor\"></i>\n" +
    "\n" +
    "\t\t\t<p>some cool stuff here</p>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row row-light\">\n" +
    "\t<div class=col-xs-12>\n" +
    "\t\t<h2>angularJS project template</h2>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row row-dark\">\n" +
    "\t<div class=col-xs-12>\n" +
    "\t\t<h2>angularJS project template</h2>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row row-light\">\n" +
    "\t<div class=col-xs-12>\n" +
    "\t\t<h2>angularJS project template</h2>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row row-dark\">\n" +
    "\t<div class=col-xs-12>\n" +
    "\t\t<h2>angularJS project template</h2>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row row-light\">\n" +
    "\t<div class=col-xs-12>\n" +
    "\t\t<h2>angularJS project template</h2>\n" +
    "\t</div>\n" +
    "</div>"
  );
}]); return templates; });