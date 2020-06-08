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
const ExpandLess_1 = __importDefault(require("@material-ui/icons/ExpandLess"));
const core_1 = require("@material-ui/core");
const weekNumCalc_1 = require("../../_helpers/weekNumCalc");
const CustWklyDespsTable_1 = __importDefault(require("./CustWklyDespsTable"));
const CustWklyDespsParams_1 = __importDefault(require("./CustWklyDespsParams"));
function CustWklyDesps() {
    const [apiParams, setapiParams] = react_1.useState(initialState);
    const [paramFormOpen, setparamFormOpen] = react_1.useState(true);
    function initialState() {
        let lastweek = new Date(); //Now
        lastweek.setDate(lastweek.getDate() - 7); //Minus a week
        let yrWk = weekNumCalc_1.getYearWeekString(lastweek);
        return { yearWeek: yrWk, queryDate: lastweek, customer: 'SARAM' };
    }
    function paramSubmit(cust, qDate, yearWk) {
        setapiParams({ yearWeek: yearWk, queryDate: qDate, customer: cust });
        setparamFormOpen(false);
    }
    function openParams() {
        setparamFormOpen(true);
    }
    return (react_1.default.createElement("div", { className: 'mainbody' },
        react_1.default.createElement("h3", null, "Customer Weekly Despatches"),
        react_1.default.createElement("p", { className: 'reportdescr' }, "Summary and detail of charges for a customer's weekly despatches"),
        paramFormOpen ? (react_1.default.createElement("div", null,
            react_1.default.createElement(CustWklyDespsParams_1.default, { spParameters: apiParams, selectedHandler: paramSubmit }))) : (react_1.default.createElement("div", null,
            react_1.default.createElement("span", null,
                react_1.default.createElement(core_1.IconButton, { size: 'medium', color: "primary", onClick: openParams },
                    "Parameters",
                    react_1.default.createElement(ExpandLess_1.default, { fontSize: 'large' }))),
            react_1.default.createElement(CustWklyDespsTable_1.default, { yearWeek: apiParams.yearWeek, customer: apiParams.customer, selDate: apiParams.queryDate })))));
    // const fetchCustomers = async () => { 
    //     try {
    //         let authH = authHeader()
    //         let yrWk = apiParams.yearWeek
    //         let query = buildCustomerQuery(yrWk)
    //         let fullUrl= ApiConf.url + 'sp/GetCustomers' + query
    //         console.log(authH + ':' + yrWk + ':' + fullUrl)
    //         let result = await axios(fullUrl, {headers:authH})
    //         setCustomers(result.data[0])
    //     } catch (error) {
    //         alert ('Error fetching customers:' + error)    
    //     }
    // }
    // function buildCustomerQuery (yearWk) {
    //     let query ='?parYearWeek='
    //     query += yearWk
    //     return query
    // }
    // function getAllCustomers(yearWk: string) {
    //   fetch(ApiConf.url + 'sp/GetCustomers' + buildCustomerQuery(yearWk))
    //     .then(response => {
    //       response.blob().then(blob => {
    //         let url = window.URL.createObjectURL(blob);
    //         let a = document.createElement('a');
    //         a.href = url;
    //         a.download = 'employees.json';
    //         a.click();
    //       });
    //       //window.location.href = response.url;
    //   });
    // }
    // function jsonToCsv(json3){
    //     var json = json3.items
    //     var fields = Object.keys(json[0])
    //     var replacer = function(key, value) { return value === null ? '' : value } 
    //     var csv = json.map(function(row){
    //     return fields.map(function(fieldName){
    //         return JSON.stringify(row[fieldName], replacer)
    //     }).join(',')
    //     })
    //     csv.unshift(fields.join(',')) // add header column
    //     csv = csv.join('\r\n');
    //     return csv
    // }
    // const downloadCustomerCsv = async (customer: string) =>{
    //     let authH = authHeader()
    //     let yrWk = weekNumberCalculation(queryDate)
    //     let filename = 'WeeklyDespatches_'+customer+'_'+yrWk+'.csv'
    //     let query = buildCustomerQuery(yrWk)
    //     let fullUrl= ApiConf.url + 'sp/GetCustWeeklyDespatchSummary' + query
    //     console.log(authH + ':' + yrWk + ':' + fullUrl)
    //     axios({
    //         url: fullUrl, //your url
    //         method: 'GET',
    //         responseType: 'arraybuffer', // important
    //         headers: authH,
    //       }).then((response) => {
    //         var buffer = new Buffer(response.data, 'binary');
    //         var jsondata = buffer.toJSON()
    //         const csv = jsonToCsv(jsondata)
    //         const url = window.URL.createObjectURL(new Blob([csv]));
    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.setAttribute('download', filename); //or any other extension
    //         document.body.appendChild(link);
    //         link.click();
    //       });
    // }
}
exports.default = CustWklyDesps;
//# sourceMappingURL=CustWklyDesps.js.map