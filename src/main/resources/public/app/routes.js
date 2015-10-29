/// <reference path="_all.ts" />
var budgetApp;
(function (budgetApp) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider.state("home", { url: '/home', templateUrl: "app/home/home.html" });
            //$stateProvider.state("/home", { template: "<div>test</div>" });
            $urlRouterProvider.otherwise("/home");
            //$locationProvider.html5Mode(true);
        };
        Routes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
        return Routes;
    })();
    budgetApp.Routes = Routes;
})(budgetApp || (budgetApp = {}));
//# sourceMappingURL=routes.js.map