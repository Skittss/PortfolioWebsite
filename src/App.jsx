import React from 'react';
import './css/main.scss';
import { Spin } from 'antd';
import {BrowserRouter, Route, Switch} from "react-router-dom";

const load = () => (
  <div className = "loadingPage"><Spin size="large"/></div>
)

const Main = React.lazy(() => import("./web/routers/main"));

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={load()}>
        <Switch>
          <Route path="/" render={props => <Main {...props}/>}/>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
export { load };
