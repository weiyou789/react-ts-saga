import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import configureStore from './store/configureStore';
import RouterMap from './router/routers';
import { AppContainer } from 'react-hot-loader';
import zhCN from 'antd/lib/locale-provider/zh_CN';
var store = configureStore();
var render = function (Component) {
    ReactDOM.render(React.createElement(Provider, { store: store },
        React.createElement(LocaleProvider, { locale: zhCN },
            React.createElement(AppContainer, null,
                React.createElement(Component, null)))), document.getElementById('root'));
};
/*ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <RouterMap />
        </AppContainer>
    </Provider>,
    document.getElementById('root') as HTMLElement
);*/
render(RouterMap);
if (module.hot) {
    module.hot.accept(['router'], function () {
        import('./router/routers').then(function (mod) { return render(mod.default); });
    });
}
//# sourceMappingURL=index.js.map