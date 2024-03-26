import React from 'react';
import './css/main.scss';
import { Spin } from 'antd';
import {HashRouter, Route, Routes} from "react-router-dom";
import { Helmet } from 'react-helmet';

const load = () => (
  <div className = "loadingPage"><Spin size="large"/></div>
)

const pageTitle = "Skittss"

const Main = React.lazy(() => import("./web/routers/main"));

const App = () => {
  return (
    <>
    <Helmet><title>{pageTitle}</title></Helmet>
    <HashRouter>
      <React.Suspense fallback={load()}>
        <Routes>
          <Route path="*" element={<Main />}/>
        </Routes>
      </React.Suspense>
    </HashRouter>
    </>
  );
}

export default App;
export { load };
