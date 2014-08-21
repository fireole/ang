var Services;
(function (Services) {
    var UserDataService = (function () {
        function UserDataService($q) {
            this.$q = $q;
        }
        UserDataService.prototype.getUser = function (id) {
            var deferred = this.$q.defer();
            deferred.resolve(Models.User.parse(mock.user));
            return deferred.promise;
        };
        UserDataService.$inject = ['$q'];
        return UserDataService;
    })();
    Services.UserDataService = UserDataService;
})(Services || (Services = {}));

app.registerService(Services.UserDataService, "$UserDataService");
//# sourceMappingURL=userDataService.js.map
