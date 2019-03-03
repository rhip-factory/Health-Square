import React, { Component } from "react";
import PropTypes from '../Views/Messages'
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Debounce } from "react-throttle";
import { WindowResizeListener } from "react-window-resize-listener";
import AppHolder from "./commonStyle";


import Card from "../../components/uielements/card";

import Topbar from "../../containers/Topbar/Topbar";
import Sidebar from "../../containers/Sidebar/Sidebar";
import PageLoading from "../../components/PageLoading";

import appActions from "../../redux/app/actions";
import Dashboard from "../Views/Dashboard";
import Messages from '../Views/Messages'
import ChatBot from '../Views/Messages';
import Enquiries from "../Views/Enquiries"

const { toggleAll } = appActions;
const Content = Layout.Content;

class Full extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: true,
      redirect: false
    };
  }

  userComponent() {
    return (
      <Switch>
        <Route path="/feeds" name="Dashboard" component={Dashboard} />
        <Route path="/enquiries" name="Dashboard" component={Enquiries} />
        <Route path="/messaging" name="Dashboard" component={Messages} />
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
            <Debounce time="1000" handler="onResize">
              <WindowResizeListener
                onResize={windowSize =>
                  this.props.toggleAll(
                    windowSize.windowWidth,
                    windowSize.windowHeight
                  )
                }
              />
            </Debounce>
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
                  <Card>{userComponent}</Card>
                </Content>
                ) : (
                <i />
                )}
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
    toggleAll,
  };
};

export default connect(mapStateToProps)(Full);
