"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var ReactDOM = require("react-dom");
var useState = react_1["default"].useState, useEffect = react_1["default"].useEffect, Suspense = react_1["default"].Suspense;
var relay_runtime_1 = require("relay-runtime");
var hooks_1 = require("react-relay/hooks");
var react_relay_1 = require("react-relay");
var HelloQuery = react_relay_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query srcHelloQuery {\n        hello\n      }\n"], ["\n  query srcHelloQuery {\n        hello\n      }\n"])));
function fetchGraphQL(text, variables) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:8080/graphql', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            query: text,
                            variables: variables
                        })
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: 
                // Get the response as JSON
                return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function fetchRelay(params, variables) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("fetching query " + params.name + " with " + JSON.stringify(variables));
            return [2 /*return*/, fetchGraphQL(params.text, variables)];
        });
    });
}
var RelayEnvironment = new relay_runtime_1.Environment({
    network: relay_runtime_1.Network.create(fetchRelay),
    store: new relay_runtime_1.Store(new relay_runtime_1.RecordSource())
});
var preloadedQuery = hooks_1.loadQuery(RelayEnvironment, HelloQuery, {});
function App(props) {
    var data = hooks_1.usePreloadedQuery(HelloQuery, props.preloadedQuery);
    return (<div className="App">
      <header className="App-header">
        <p></p>
      </header>
    </div>);
}
function AppRoot(props) {
    return (<hooks_1.RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery}/>
      </Suspense>
    </hooks_1.RelayEnvironmentProvider>);
}
exports["default"] = AppRoot;
var appContainer = document.getElementById('app');
ReactDOM.render(<AppRoot />, appContainer);
var templateObject_1;
