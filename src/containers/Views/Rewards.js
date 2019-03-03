import React, { Component } from "react";
import { Collapse, Card } from "antd";

const Panel = Collapse.Panel;

class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <h3>What are Rewards and what can they be used for?</h3>
        <h5>Points gained can be used for but not limited to the following</h5>
        <ul>
          <li>Medical Checkups at partner hospitals</li>
          <li>Drug Purchases at partner pharmacies/hospitals</li>
          <li>Donate to Charity</li>
        </ul>
        <h3> Ways to acquire Reward Points:</h3>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Invite Friends" key="1">
            <p>
              You can invite your friends from facebook, instagram and other
              social media platform with your invite code or generate one
              through your profile
            </p>
          </Panel>
          <Panel header="Read Articles and give review" key="2">
            <p>
              Read articles on health and give review on it. Points would be
              added automatically once review has been approved
            </p>
          </Panel>
          <Panel header="Take short quizes" key="3">
            <p>Take short quizes or play games to earn points</p>
          </Panel>
        </Collapse>
      </Card>
    );
  }
}

export default Rewards;
