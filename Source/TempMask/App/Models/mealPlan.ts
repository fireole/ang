module Models {
    
    export class MealPlan {

        public name: string;
        public macros: Models.Macro[];
        public totalCalories: number;
        public multiplier: number;



        constructor(json: any) {
            this.name = json.name;
            this.macros = Models.Macro.parse(json.macro);
            this.totalCalories = json.totalCalories;
            this.multiplier = json.multiplier;
            this.calculateTotalCalories();
        }

        public static parse(json: any): MealPlan[] {
            return Enumerable.From(json).Select(v => new MealPlan(v)).ToArray();
        }

        public calculateTotalCalories() {
            this.totalCalories = Enumerable.From(this.macros).Sum(m => m.calories);
        }
    }

    export class Macro {

        public name: string;
        public percentRatio: number;
        public grams: number;
        public calories: number;
        public caloriePerGram: number;

        constructor(json: any) {
            this.name = json.name;
            this.percentRatio = json.percentRatio;
            this.grams = json.grams;
            this.calories = json.calories;
            this.caloriePerGram = json.caloriePerGram;
        }

        public static parse(json: any): Macro[] {
            return Enumerable.From(json).Select(v => new Macro(v)).ToArray();
        }

        public calculateGrams(totalCalories: number) {
            this.grams = totalCalories * this.percentRatio / this.caloriePerGram;
            this.calories = this.grams * this.caloriePerGram;
        }
    }
} 