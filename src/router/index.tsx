import * as React from 'react';
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loading from './loading';

const RouterList: any[] = [
    {
        component: () => import('../features/insurance/insView'),
        path: '/ins'
    },
    {
        component: () => import('../features/insurance/insView/trialPage'),
        path: '/ins/trial'
    },
]

const RouterMap = () => (
    <Router>
            <Switch>
                {RouterList.map(item => (
                    <Route
                        key={item.path}
                        exact={true}
                        path={item.path}
                        component={Loadable({
                            loader: item.component,
                            loading
                        })}
                    />
                ))}
            </Switch>
    </Router>
)

export default RouterMap

