var Models;
(function (Models) {
    var User = (function () {
        function User(id, firstName, lastName, currentStat, mealPlans) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.currentStat = currentStat;
            this.mealPlans = mealPlans;
            this.calcMacros();
            console.log(this.mealPlans[0].macros);
        }
        User.parse = function (json) {
            if (!json)
                return null;

            return new User(json.id, json.firstName, json.lastName, Models.Stat.parse(json.currentStat), Models.MealPlan.parse(json.carbCycle));
        };

        User.prototype.renameFirstName = function (firstName) {
            this.firstName = firstName;
        };

        User.prototype.updateStatsByBw = function (bw) {
            this.currentStat.fw = parseFloat(bw) * this.currentStat.bfp / 100;
            this.currentStat.lbm = this.currentStat.bw - this.currentStat.fw;
            this.calcMacros();
        };
        User.prototype.updateStatsByBfp = function (bfp) {
            this.currentStat.fw = this.currentStat.bw * parseFloat(bfp) / 100;
            this.currentStat.lbm = this.currentStat.bw - this.currentStat.fw;
            this.calcMacros();
        };

        User.prototype.calcMacros = function () {
            var _this = this;
            Enumerable.From(this.mealPlans).ForEach(function (m) {
                Enumerable.From(m.macros).ForEach(function (mm) {
                    return mm.calculateGrams(_this.currentStat.lbm * m.multiplier);
                });
                m.calculateTotalCalories();
            });
        };
        return User;
    })();
    Models.User = User;
})(Models || (Models = {}));
//# sourceMappingURL=user.js.map
