module Stamp {
    export class App {
        private app: ng.IModule;
        private services: ng.IModule;
        public appName: string = 'angularApp';

        constructor() {
            this.services = angular.module("angularServices", []);
            this.app = angular.module(this.appName, [
                'ngAnimate',        // animations
                'ngRoute',          // routing
                'angularServices'
            ])
                .config([
                    '$compileProvider', '$locationProvider', ($compileProvider, $locationProvider) => {
                        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sip):/);
                        $locationProvider.html5Mode(true);
                    }]);

            //this.defaultRoute('/');
            this.app.run(() => {});
        }

        registerController(controllerConstructor: Function) {
            this.app.controller(this.getControllerName(controllerConstructor), controllerConstructor);
        }

        registerService(serviceConstructor: Function, name?: string) {
            name = name || this.getControllerName(serviceConstructor);

            this.services.service(name, serviceConstructor);
        }

        private getControllerName(controllerConstructor: Function): string {

            var funcNameRegex = /function (.{1,})\(/;
            var results = (funcNameRegex).exec(controllerConstructor.toString());
            return (results && results.length > 1) ? results[1] : "";

        }

        registerRoute(path: string, controllerConstructor: Function, template: string) {
            this.app.config(($routeProvider: ng.route.IRouteProvider) => {
                $routeProvider.when(path, {
                    controller: this.getControllerName(controllerConstructor),
                    templateUrl: template
                });
            });
        }

        registerDirective(name: string, directiveFactory: ($timeout) => any) {
            this.app.directive(name, directiveFactory);
        }

        registerConstant(name: string, value: any) {
            this.app.constant(name, value);
        }

        defaultRoute(path: string) {
            this.app.config(($routeProvider: ng.route.IRouteProvider) => {
                $routeProvider.otherwise({ redirectTo: path });
            });
        }

        run(document: Document) {
            angular.bootstrap(document, [this.appName]);

        }

    }
}

// used by rest of app to register controllers and services
var app: Stamp.App = new Stamp.App();

