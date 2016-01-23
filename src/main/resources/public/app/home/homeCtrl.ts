/// <reference path="../_all.ts" />
module swimmingApp {
    export interface IHomeScope extends ng.IScope {
        author: string;
        vm: HomeCtrl;
    }

    export class HomeCtrl {
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        public static $inject = [
            '$scope'
        ];

        constructor(
            private $scope: IHomeScope
        ) {
            // 'vm' stands for 'view model'. We're adding a reference to the controller to the scope
            // for its methods to be accessible from view / HTML
            $scope.vm = this;

            $scope.author = "boss";
        }

    }
}

