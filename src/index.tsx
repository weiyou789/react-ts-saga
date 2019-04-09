import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {LocaleProvider} from 'antd';
import configureStore from './configureStore';
import RouterMap from './router/index';
import {AppContainer} from 'react-hot-loader';

const store = configureStore()

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <LocaleProvider>
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
