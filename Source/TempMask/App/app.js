var Stamp;
(function (Stamp) {
    var App = (function () {
        function App() {
            this.appName = 'angularApp';
            this.services = angular.module("angularServices", []);
            this.app = angular.module(this.appName, [
                'ngAnimate',
                'ngRoute',
                'angularServices'
            ]).config([
                '$compileProvider', '$locationProvider', function ($compileProvider, $locationProvider) {
                    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sip):/);
                    $locationProvider.html5Mode(true);
                }]);

            //this.defaultRoute('/');
            this.app.run(function () {
            });
        }
        App.prototype.registerController = function (controllerConstructor) {
            this.app.controller(this.getControllerName(controllerConstructor), controllerConstructor);
        };

        App.prototype.registerService = function (serviceConstructor, name) {
            name = name || this.getControllerName(serviceConstructor);

            this.services.service(name, serviceConstructor);
        };

        App.prototype.getControllerName = function (controllerConstructor) {
            var funcNameRegex = /function (.{1,})\(/;
            var results = (funcNameRegex).exec(controllerConstructor.toString());
            return (results && results.length > 1) ? results[1] : "";
        };

        App.prototype.registerRoute = function (path, controllerConstructor, template) {
            var _this = this;
            this.app.config(function ($routeProvider) {
                $routeProvider.when(path, {
                    controller: _this.getControllerName(controllerConstructor),
                    templateUrl: template
                });
            });
        };

        App.prototype.registerDirective = function (name, directiveFactory) {
            this.app.directive(name, directiveFactory);
        };

        App.prototype.registerConstant = function (name, value) {
            this.app.constant(name, value);
        };

        App.prototype.defaultRoute = function (path) {
            this.app.config(function ($routeProvider) {
                $routeProvider.otherwise({ redirectTo: path });
            });
        };

        App.prototype.run = function (document) {
            angular.bootstrap(document, [this.appName]);
        };
        return App;
    })();
    Stamp.App = App;
})(Stamp || (Stamp = {}));

// used by rest of app to register controllers and services
var app = new Stamp.App();
//# sourceMappingURL=app.js.map
