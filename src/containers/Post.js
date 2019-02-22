import React, { Fragment } from "react";
import { withRouteData, Link } from "react-static";
import Moment from "react-moment";
import Markdown from "react-markdown";
import styled from "react-emotion";
import Utterances from "react-utterances";
import Script from "react-load-script";
import Component from "@reactions/component";

import Hero from "../components/hero";
import Content from "../components/content";
import Card from "../components/card";
import { H2, H3 } from "../components/typography";
import CommentCard from "../components/comment-card";
//

const PostCard = styled(Card)`
margin-top: -8rem;
  h3 {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  .card-title {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .post-title {
    flex: 3;
    padding: 2rem 1rem;
  }

  time {
    text-transform: uppercase;
    opacity: 0.5;
  }
  .back {
    border-radius: 0 0.5rem 0 0;
    display: flex;
    align-self: stretch;
    align-items: center;
    background: #fafafa;
    padding: 1rem;
    flex: 1
    height: 100%;
    user-select: none;
  }

  .back:hover,
  .back:focus,
  .back:active {
    background: #f0f0f0;
  }
`;

// const CommentCard = styled(Card)`
//   .react-utterences {
//     width: calc(100% - 2rem);
//     margin: 1rem;
//   }
// `;

const SectionLabel = styled(H3)`
  margin-top: 4rem;
`;

export default withRouteData(({ post }) => (
  <React.Fragment>
    <Hero backgroundImage={post.data.thumbnail} />
    <Content>
      <PostCard>
        <div className="card-title">
          <div className="post-title">
            <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
            <H2>{post.data.title}</H2>
          </div>

          <Link exact to="/blog/" className="back">
            back
          </Link>
        </div>
        <Markdown
          className="react-markdown"
          source={post.content}
          escapeHtml={false}
        />
      </PostCard>
      <SectionLabel id={"comments"}>Comments:</SectionLabel>
      <CommentCard />
    </Content>
  </React.Fragment>
));
