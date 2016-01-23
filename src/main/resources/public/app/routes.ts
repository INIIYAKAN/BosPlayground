/// <reference path="_all.ts" />
module swimmingApp {
	export class Routes {
		static $inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
		static configureRoutes($stateProvider: ng.ui.extras.IStateProvider,
							   $urlRouterProvider: ng.ui.IUrlRouterProvider,
							   $stickyStateProvider: ng.ui.extras.IStickyStateProvider) {
			/*
			 * Define an abstract parent for the tabs. It's controller will only be fired one, no matter the active substate
			 */
			$stateProvider.state('home', {
				abstract: true,
				templateUrl: 'app/tabs.html',
				controller: function () {
					//generate a random number to prove this constructor is only fired once
					this.random = Math.floor((Math.random() * 10) + 1);
				},
				controllerAs: 'ctrl'
			});

			/*
			 * create the individual tabs and make them sticky
			 */
			$stateProvider.state('swimming', {
				sticky: true,
				deepStateRedirect: true,
				parent: 'home',
				url: '/swimming',
				views: {
					'swimming@home': {//sticky states MUST be coupled to named views
						controller: swimmingApp.SwimmingCtrl,
						templateUrl: 'app/swimming/swimming.html'
					}
				},
				onInactivate: function(){},
				onReactivate: function(){}
			});

			/*
			 * create the individual tabs and make them sticky
			 */
			$stateProvider.state('motivation', {
				sticky: true,
				deepStateRedirect: true,
				parent: 'home',
				url: '/motivation',
				views: {
					'motivation@home': {//sticky states MUST be coupled to named views
						templateUrl: 'app/motivation/motivation.html'
					}
				},
				onInactivate: function(){},
				onReactivate: function(){}
			});

			/*$stateProvider.state("home", {
				url: '/home',
				templateUrl: "app/home/home.html",
				controller: budgetApp.HomeCtrl
			});*/

			$urlRouterProvider.otherwise("/swimming");

			//$locationProvider.html5Mode(true);
		}
	}
}