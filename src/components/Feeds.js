import React from "react";
import { Card, Icon, Avatar, Col, Comment, Tooltip } from "antd";

import moment from "moment";

const { Meta } = Card;

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
      action: null
    };
  }

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: "liked"
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: "disliked"
    });
  };

  render() {
    const { likes, dislikes, action } = this.state;
    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === "liked" ? "filled" : "outlined"}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{likes}</span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === "disliked" ? "filled" : "outlined"}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{dislikes}</span>
      </span>,
      <span>Reply to</span>
    ];

    const { feed } = this.props;
    return (
      <Col xs={24} style={{ marginBottom: "5px" }}>
        <Card
          cover={
            <img
              alt="example"
              src={feed.imgUrl}
            />
          }
          actions={[
            <Icon type="like" />,
            <Icon type="dislike" />,
            <Icon type="share-alt" />
          ]}
        >
          <Meta title={feed.title} description={feed.description} />
          <Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
            datetime={
              <Tooltip title={moment(feed.date).format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment(feed.date).fromNow()}</span>
              </Tooltip>
            }
          />
        </Card>
      </Col>
    );
  }
}

export default Feeds;
