import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {LocaleProvider} from 'antd';
import configureStore from './configureStore';
import RouterMap from './router/index';
import {AppContainer} from 'react-hot-loader';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const store = configureStore()

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <LocaleProvider locale={zhCN}>
                <AppContainer>
                    <Component/>
                </AppContainer>
            </LocaleProvider>
        </Provider>,
        document.getElementById('root') as HTMLElement
    )
}

render(RouterMap)
if ((module as any).hot) {
    (module as any).hot.accept(['router'], () => {
        import('./router').then(mod => {
            render(mod.default)
        })
    })
}
