var Models;
(function (Models) {
    var MealPlan = (function () {
        function MealPlan(json) {
            this.name = json.name, this.macros = Models.Macro.parse(json.macro), this.totalCalories = json.totalCalories;
        }
        MealPlan.parse = function (json) {
            return Enumerable.From(json).Select(function (v) {
                return new MealPlan(v);
            }).ToArray();
        };
        return MealPlan;
    })();
    Models.MealPlan = MealPlan;

    var Macro = (function () {
        function Macro(json) {
            this.name = json.name, this.percentRatio = json.percentRatio, this.grams = json.grams, this.calories = json.calories;
        }
        Macro.parse = function (json) {
            return Enumerable.From(json).Select(function (v) {
                return new Macro(v);
            }).ToArray();
        };

        Macro.prototype.calculateGrams = function (totalCalories, multiplier) {
            this.grams = totalCalories * this.percentRatio / multiplier;
        };
        return Macro;
    })();
    Models.Macro = Macro;
})(Models || (Models = {}));
//# sourceMappingURL=mealPlan.js.map
