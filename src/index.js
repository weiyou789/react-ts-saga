import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import configureStore from './configureStore';
import RouterMap from './router/index';
import { AppContainer } from 'react-hot-loader';
var store = configureStore();
var render = function (Component) {
    ReactDOM.render(React.createElement(Provider, { store: store },
        React.createElement(LocaleProvider, null,
            React.createElement(AppContainer, null,
                React.createElement(Component, null)))), document.getElementById('root'));
};
render(RouterMap);
if (module.hot) {
    module.hot.accept(['router'], function () {
        import('./router').then(function (mod) {
            render(mod.default);
        });
    });
}
//# sourceMappingURL=index.js.map