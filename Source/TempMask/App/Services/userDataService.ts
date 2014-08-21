module Services {

    export class UserDataService {

        public static $inject = ['$q'];

        constructor(private $q) { }

        public getUser(id: string): ng.IPromise<Models.User> {
            var deferred = this.$q.defer();
            deferred.resolve(Models.User.parse(mock.user));
            return deferred.promise;
        }


    }
}

app.registerService(Services.UserDataService, "$UserDataService"); 