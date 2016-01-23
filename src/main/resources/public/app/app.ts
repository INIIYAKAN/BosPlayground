/// <reference path="_all.ts" />
((): void=> {
	var app = angular.module("swimmingApp", ['ui.router', 'ct.ui.router.extras']);
	app.config(swimmingApp.Routes.configureRoutes);
})()