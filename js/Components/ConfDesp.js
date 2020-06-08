"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ConfirmedDespatchTable_1 = __importDefault(require("./ConfirmedDespatchTable"));
const ConfDespParams_1 = __importDefault(require("./ConfDespParams"));
const ExpandLess_1 = __importDefault(require("@material-ui/icons/ExpandLess"));
const styles_1 = require("@material-ui/core/styles");
const core_1 = require("@material-ui/core");
const weekNumCalc_1 = require("../_helpers/weekNumCalc");
const useStyles = styles_1.makeStyles((theme) => ({
    root: {
        '& > span': {
            margin: theme.spacing(2),
        },
    },
}));
function ConfDesp() {
    const [apiParams, setapiParams] = react_1.useState(initialState);
    const [paramFormOpen, setparamFormOpen] = react_1.useState(true);
    const classes = useStyles();
    function initialState() {
        let lastweek = new Date(); //Now
        lastweek.setDate(lastweek.getDate() - 7); //Minus a week
        let yrWk = weekNumCalc_1.getYearWeekString(lastweek);
        return { yearWeek: yrWk, queryDate: lastweek, matched: 'N', customer: 'SARAM' };
    }
    function paramSubmit(event, newParams) {
        setapiParams(newParams);
        setparamFormOpen(false);
    }
    function openParams() {
        setparamFormOpen(true);
    }
    return (react_1.default.createElement("div", { className: 'mainbody' },
        react_1.default.createElement("h3", null, "Confirmed Despatches"),
        react_1.default.createElement("p", null, "Confirmed Despatches and their related DPD invoice price."),
        paramFormOpen ? (react_1.default.createElement("div", null,
            react_1.default.createElement(ConfDespParams_1.default, { spParameters: apiParams, submitHandler: paramSubmit }))) : (react_1.default.createElement("div", null,
            react_1.default.createElement("span", null,
                "Parameters",
                react_1.default.createElement(core_1.IconButton, { size: 'medium', color: "primary", onClick: openParams },
                    react_1.default.createElement(ExpandLess_1.default, { fontSize: 'large' }))),
            react_1.default.createElement(ConfirmedDespatchTable_1.default, { queryDate: apiParams.queryDate, matched: apiParams.matched, customer: apiParams.customer })))));
}
exports.default = ConfDesp;
//# sourceMappingURL=ConfDesp.js.map