/// <reference path="_all.ts" />
module budgetApp {
	export class Routes {
		static $inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
		static configureRoutes($stateProvider: ng.ui.IStateProvider,
		                       $urlRouterProvider: ng.ui.IUrlRouterProvider,
		                       $locationProvider: angular.ILocationProvider) {
			$stateProvider.state("home", { url: '/home', templateUrl: "app/home/home.html" });
			//$stateProvider.state("/home", { template: "<div>test</div>" });
			$urlRouterProvider.otherwise("/home");

			//$locationProvider.html5Mode(true);
		}
	}
}