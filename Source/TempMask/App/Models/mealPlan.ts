module Models {
    
    export class MealPlan {

        public name: string;
        public macros: Models.Macro[];
        public totalCalories: number;

        constructor(json: any) {
            this.name = json.name,
            this.macros = Models.Macro.parse(json.macro),
            this.totalCalories = json.totalCalories
        }

        public static parse(json: any): MealPlan[] {
            return Enumerable.From(json).Select(v => new MealPlan(v)).ToArray();
        }
    }

    export class Macro {

        public name: string;
        public percentRatio: number;
        public grams: number;
        public calories: number;

        constructor(json: any) {
            this.name = json.name,
            this.percentRatio = json.percentRatio,
            this.grams = json.grams,
            this.calories = json.calories
        }

        public static parse(json: any): Macro[] {
            return Enumerable.From(json).Select(v => new Macro(v)).ToArray();
        }

        public calculateGrams(totalCalories: number, multiplier:number) {
            this.grams = totalCalories * this.percentRatio / multiplier;
        }
    }
} 