import * as React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loading from './loading';
var RouterList = [
    {
        component: function () { return import('../features/insurance/insView'); },
        path: '/ins'
    },
    {
        component: function () { return import('../features/insurance/insView/trialPage'); },
        path: '/ins/trial'
    },
];
var RouterMap = function () { return (React.createElement(Router, null,
    React.createElement(Switch, null, RouterList.map(function (item) { return (React.createElement(Route, { key: item.path, exact: true, path: item.path, component: Loadable({
            loader: item.component,
            loading: loading
        }) })); })))); };
export default RouterMap;
//# sourceMappingURL=index.js.map