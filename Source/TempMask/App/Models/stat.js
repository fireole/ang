var Models;
(function (Models) {
    var Stat = (function () {
        function Stat(bfp, lbm, fw, bw) {
            this.bfp = bfp;
            this.lbm = lbm;
            this.fw = fw;
            this.bw = bw;
        }
        Stat.parse = function (json) {
            if (!json)
                return null;

            return new Stat(json.bfp, json.lbm, json.fw, json.bw);
        };
        return Stat;
    })();
    Models.Stat = Stat;
})(Models || (Models = {}));
//# sourceMappingURL=stat.js.map
