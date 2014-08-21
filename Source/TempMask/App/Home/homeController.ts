module Home {

    export class HomeController {

        public static $inject = ['$UserDataService'];

        public user: Models.User;
        public mealName: string;

        constructor(private $UserDataService: Services.UserDataService) {

            this.$UserDataService.getUser("5").then((results) => {
                this.user = results;
            });

        }

        public updateName(name:string) {
            this.user.renameFirstName(name);
        }

        public updateStatsByBw(bw: string) {
            this.user.updateStatsByBw(bw);
        }

        public updateStatsByBfp(bfp: string) {
            this.user.updateStatsByBfp(bfp);
        }

    }
}

app.registerController(Home.HomeController);
app.registerRoute('/', Home.HomeController, 'app/Home/home.html'); 