var Models;
(function (Models) {
    var MealPlan = (function () {
        function MealPlan(json) {
            this.name = json.name;
            this.macros = Models.Macro.parse(json.macro);
            this.totalCalories = json.totalCalories;
            this.multiplier = json.multiplier;
            this.calculateTotalCalories();
        }
        MealPlan.parse = function (json) {
            return Enumerable.From(json).Select(function (v) {
                return new MealPlan(v);
            }).ToArray();
        };

        MealPlan.prototype.calculateTotalCalories = function () {
            this.totalCalories = Enumerable.From(this.macros).Sum(function (m) {
                return m.calories;
            });
        };
        return MealPlan;
    })();
    Models.MealPlan = MealPlan;

    var Macro = (function () {
        function Macro(json) {
            this.name = json.name;
            this.percentRatio = json.percentRatio;
            this.grams = json.grams;
            this.calories = json.calories;
            this.caloriePerGram = json.caloriePerGram;
        }
        Macro.parse = function (json) {
            return Enumerable.From(json).Select(function (v) {
                return new Macro(v);
            }).ToArray();
        };

        Macro.prototype.calculateGrams = function (totalCalories) {
            this.grams = totalCalories * this.percentRatio / this.caloriePerGram;
            this.calories = this.grams * this.caloriePerGram;
        };
        return Macro;
    })();
    Models.Macro = Macro;
})(Models || (Models = {}));
//# sourceMappingURL=mealPlan.js.map
