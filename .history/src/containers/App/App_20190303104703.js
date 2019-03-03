import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Alert } from "antd";
import AppHolder from "./commonStyle";


import Card from "../../components/uielements/card";

import Topbar from "../../containers/Topbar/Topbar";
import Sidebar from "../../containers/Sidebar/Sidebar";
import PageLoading from "../../components/PageLoading";

import appActions from "../../redux/app/actions";
import Dashboard from "../Views/Dashboard";
import Messages from "../Views/Messages";
import Enquiries from "../Views/Enquiries";

const { toggleAll } = appActions;
const Content = Layout.Content;

class Full extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: true,
      redirect: false,
      offline: !navigator.onLine
    };
  }
  componentDidMount() {
    window.addEventListener("online", this.setOfflineStatus);
    window.addEventListener("offline", this.setOfflineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.setOfflineStatus);
    window.removeEventListener("offline", this.setOfflineStatus);
  }

  setOfflineStatus = () => {
    this.setState({ offline: !navigator.onLine });
  };

  userComponent() {
    return (
      <Switch>
        <Route path="/feeds" name="Feeds" component={Dashboard} />
        <Route path="/enquiries" name="Enquiries" component={Enquiries} />
        <Route path="/messaging" name="Messaging" component={Messages} />
        <Redirect from="/" to="/feeds" />
      </Switch>
    );
  }

  render() {
    const userComponent = this.userComponent();

    return this.state.ready ? (
      userComponent !== "none" ? (
        <AppHolder>
          <Layout style={{ height: "100vh" }}>
            <Topbar {...this.props} />
            <Layout style={{ flexDirection: "row", overflowX: "hidden" }}>
              <Sidebar {...this.props} />
              <Layout
                className="isoContentMainLayout"
                style={{
                  height: "100vh"
                }}
              >
                <Content
                  className="isomorphicContent"
                  style={{
                    padding: "70px 0 0",
                    flexShrink: "0",
                    background: "#f1f3f6"
                  }}
                >
                {this.state.offline && (
                  <div style={{ display: "flex" }} >
                    <Alert
                      message="You're offline... Nevermind, you can still access almost everything"
                      type="error"
                      closable
                    />
                  </div>
                )}
                  <Card>{userComponent}</Card>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </AppHolder>
      ) : (
        <i />
      )
    ) : !this.state.redirect ? (
      <PageLoading />
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = state => {
  return {
    toggleAll
  };
};

export default connect(mapStateToProps)(Full);
