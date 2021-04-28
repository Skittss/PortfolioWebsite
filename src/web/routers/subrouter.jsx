import React, { Suspense } from 'react'
import { Route, Switch, useLocation } from "react-router-dom";
import { load } from "../../App";

const _getBaseLocation = depth => {
    const fullLoc = useLocation().pathname;
    let baseLocEnd = 0;
    for (let i = 0; i < depth; i++) {
        baseLocEnd = fullLoc.indexOf("/", baseLocEnd+1);
    }
    baseLocEnd = baseLocEnd < 0 ? fullLoc.length : baseLocEnd;
    return fullLoc.substring(0, baseLocEnd);
}

// BE CAREFUL WITH ROUTE DEPTH HERE. IF A DIR IS SKIPPED I.E. /a/b/ IN ONE STEP THIS WILL CAUSE ISSUES!
// REFACTORING OF ROUTE PROPS WOULD BE REQUIRED TO ACCOUNT FOR THE NUMBER OF / IN NEXT DIR.

const SubRouter = ({routes, routerDepth}) => {
    const baseLocation = _getBaseLocation(routerDepth);
    return (
        <Suspense fallback={load()}>
            <Switch>
                {routes.map(route => {
                    console.log("generated route: ", baseLocation + route.path)
                    return route.component ? (
                        <Route 
                            path={baseLocation + route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                                <route.component {...props} routerDepth={routerDepth+1}/>
                            )}
                        />
                    ) : null;
                })}
            </Switch>
        </Suspense>
    )
}

export default SubRouter;