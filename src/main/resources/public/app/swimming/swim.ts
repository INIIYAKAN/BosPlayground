/// <reference path='../_all.ts' />

module swimmingApp {
    'use strict';

    export class Swim {
        constructor(
            public date: Date,
            public yards: number,
            public time: number //stored in seconds
         ) { }
    }
}