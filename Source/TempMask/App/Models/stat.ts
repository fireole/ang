module Models {


    export class Stat {

        constructor(
            public bfp: number,
            public lbm: number,
            public fw: number,
            public bw: number) {}

        public static parse(json: any) {
            if (!json) return null;

            return new Stat(
                json.bfp,
                json.lbm,
                json.fw,
                json.bw
            );
        }
    }
}