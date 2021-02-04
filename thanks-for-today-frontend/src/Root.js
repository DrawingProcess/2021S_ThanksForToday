import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from 'store/configure';
import { Route, useLocation, withRouter } from 'react-router-dom';

import App from 'components/App';

const store = configure();

function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <Route path="/" component={App} />
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
    );
};

export default Root;
