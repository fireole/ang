module Models {

    export class User {
        constructor(
            public id: string,
            public firstName: string,
            public lastName: string,
            public currentStat: Models.Stat,
            public mealPlans: Models.MealPlan[]
        ) {

            this.calcMacros();
            console.log(this.mealPlans[0].macros);
        }

        public static parse(json: any) {
            if (!json) return null;

            return new User(
                json.id,
                json.firstName,
                json.lastName,
                Models.Stat.parse(json.currentStat),
                Models.MealPlan.parse(json.carbCycle)
                );
        }

        public renameFirstName(firstName:string) {
            this.firstName = firstName;
        }

        public updateStatsByBw(bw: string) {
            this.currentStat.fw = parseFloat(bw) * this.currentStat.bfp / 100;
            this.currentStat.lbm = this.currentStat.bw - this.currentStat.fw;
            this.calcMacros();
        }
        public updateStatsByBfp(bfp: string) {
            this.currentStat.fw = this.currentStat.bw * parseFloat(bfp) / 100;
            this.currentStat.lbm = this.currentStat.bw - this.currentStat.fw;
            this.calcMacros();
        }

        public calcMacros() {
            Enumerable.From(this.mealPlans).ForEach((m) => {
                Enumerable.From(m.macros).ForEach(mm => mm.calculateGrams(this.currentStat.lbm * m.multiplier));
                m.calculateTotalCalories();
            });
        }
    }
}
