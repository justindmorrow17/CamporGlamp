"use strict";
const search = {
    templateUrl:"app/components/search/search.html",
    controller: ['SearchService', function(SearchService) {
        const vm = this;
        vm.campSearch = function() {
            SearchService.get().then(function(response) {
                vm.campresults = response.data.data;
                console.log(vm.campresults);
            });
        };
    }]
};


angular.module("App").component("search", search);