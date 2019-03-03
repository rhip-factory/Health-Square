import React, { Component } from "react";
import { Row } from "antd";
import {
  PullToRefresh,
  PullDownContent,
  ReleaseContent,
  RefreshContent
} from "react-js-pull-to-refresh";
import FeedComponent from "../../components/Feeds";

const newsFeeds = [
  {
    id: "0_feed",
    title: "Diet",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
    description:
      "Let food be thy medicine and medicine be thy food. Hippocrates",
    date: 1550552969601
  },
  {
    id: "1_feed",
    title: "Wellness",
    imgUrl:
      "https://gq-images.condecdn.net/image/aDO9oP79Y66/crop/1620/f/fitness-01-gq-10sep18_b.jpg",
    description:
      "When the heart is at ease, the body is healthy. Chinese proverb",
    date: 1551552969601
  },
  {
    id: "2_feed",
    imgUrl:
      "https://img.freepik.com/free-vector/fitness-concept_23-2147511763.jpg?size=338&ext=jpg",
    description:
      "In a disordered mind, as in a disordered body, soundness of health is impossible. Marcus Tullius Cicero",
    title: "Wellness",
    date: 1551552969601
  },
  {
    id: "3_feed",
    imgUrl:
      "https://pngimage.net/wp-content/uploads/2018/06/fitness-vector-png-2.png",
    description:
      "Your health is what you make of it. Everything you do and think either adds to the vitality, energy and spirit you possess or takes away from it. Ann Wigmore",
    title: "Wellness",
    date: 1551522969601
  },
  {
    id: "4_feed",
    description:
      "He who has health has hope; and he who has hope has everything. Arabian proverb",
    imgUrl:
      "https://gq-images.condecdn.net/image/aDO9oP79Y66/crop/1620/f/fitness-01-gq-10sep18_b.jpg",
    title: "Wellness",
    date: 1521552969601
  },
  {
    id: "5_feed",
    imgUrl:
      "https://png.pngtree.com/element_origin_min_pic/17/07/13/403f4246337d3b2a668308815428d296.jpg",
    description:
      "A good laugh and a long sleep are the best cures in the doctor’s. Irish proverb",
    title: "Mind",
    date: 1531552969601
  },
  {
    id: "6_feed",
    imgUrl:
      "http://benefits-of-exercise.org/wp-content/uploads/2013/03/cardio-exercises-to-burn-fat.jpg",
    description:
      "Give a man health and a course to steer, and he’ll never stop to trouble about whether he’s happy or not. George Bernard Shaw",
    title: "Mind",
    date: 1511552969601
  },
  {
    id: "7_feed",
    imgUrl:
      "https://png.pngtree.com/element_origin_min_pic/16/07/02/015776a31087d23.jpg",
    description:
      "The scientific truth may be put quite briefly; eat moderately, having an ordinary mixed diet, and don’t worry. Robert Hutchison",
    title: "Wellness",
    date: 1551552969601
  }
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true
    };
  }

  handleRefresh = () => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  };

  render() {
    return (
      <div style={{ background: "#ECECEC" }}>
        <PullToRefresh
          pullDownContent={<PullDownContent />}
          releaseContent={<ReleaseContent />}
          refreshContent={<RefreshContent />}
          pullDownThreshold={200}
          onRefresh={this.handleRefresh}
          triggerHeight={50}
          backgroundColor="white"
        >
          <div className="loading">
            <span className="loading-ptr-1" />
            <span className="loading-ptr-2" />
            <span className="loading-ptr-3" />
          </div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {newsFeeds.map((feed, index) => (
              <FeedComponent key={`${index}_feed_component`} feed={feed} />
            ))}
          </Row>
        </PullToRefresh>
      </div>
    );
  }
}
