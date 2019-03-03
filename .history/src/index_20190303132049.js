import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";
import * as serviceWorker from "./registerServiceWorker";
import themes from "./config/themes";
// import DashApp from './dashApp';
import AppLocale from "./languageProvider";
import { themeConfig } from "./config";
import DashAppHolder from "./dashAppStyle";
import { Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import PageLoading from "./components/PageLoading";

// Containers
import App from './containers/App/App'

// Views
import SignIn from "./containers/Page/signin";
import Landing from './'
import configureStore from "./store";

const store = configureStore(() => {});

export const history = createBrowserHistory();

const currentAppLocale = AppLocale.en;

class Main extends React.Component {
  state = {
    isReady: true
  };

  render() {
    if (!this.state.isReady) {
      return <PageLoading />;
    }
    return (
      <LocaleProvider locale={currentAppLocale.antd}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <ThemeProvider theme={themes[themeConfig.theme]}>
            <DashAppHolder>
              <Provider store={store} >
                <div>
                  <Router history={history}>
                    <Switch>
                      <Route
                        exact
                        path="/login"
                        name="Login Page"
                        component={SignIn}
                      />
                      <Route path="/" name="Home" component={App} />
                    </Switch>
                  </Router>
                </div>
              </Provider>
            </DashAppHolder>
          </ThemeProvider>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.register();
export { AppLocale };
