/// <reference path="_all.ts" />
((): void=> {
	var app = angular.module("budgetApp", ['ui.router']);
	app.config(budgetApp.Routes.configureRoutes);
})()