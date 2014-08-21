var Home;
(function (Home) {
    var HomeController = (function () {
        function HomeController($UserDataService) {
            var _this = this;
            this.$UserDataService = $UserDataService;
            this.$UserDataService.getUser("5").then(function (results) {
                _this.user = results;
            });
        }
        HomeController.prototype.updateName = function (name) {
            this.user.renameFirstName(name);
        };

        HomeController.prototype.updateStatsByBw = function (bw) {
            this.user.updateStatsByBw(bw);
        };

        HomeController.prototype.updateStatsByBfp = function (bfp) {
            this.user.updateStatsByBfp(bfp);
        };
        HomeController.$inject = ['$UserDataService'];
        return HomeController;
    })();
    Home.HomeController = HomeController;
})(Home || (Home = {}));

app.registerController(Home.HomeController);
app.registerRoute('/', Home.HomeController, 'app/Home/home.html');
//# sourceMappingURL=homeController.js.map
