import React from "react";
import {
  Avatar,
  Chip,
  Icon,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";
import getDateFromTimestamp from "./helpers/dates";

function Forum({ data, goToPage, modalOpen }) {
  return (
    <>
      <div
        className="flex_"
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 20,
          marginBottom: 20,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => modalOpen(true)}
        >
          Ask a question
        </Button>
      </div>
      {data.topics &&
        data.topics.map((topic) => (
          /* eslint no-underscore-dangle: 0 */
          <div key={topic._id} style={{ margin: 20 }}>
            <Paper
              onClick={() => goToPage(topic._id)}
              style={{ padding: 30, paddingRight: 50, paddingLeft: 50 }}
              elevation={3}
            >
              <div
                className="flex_"
                style={{ alignItems: "center", marginBottom: 20 }}
              >
                <Typography variant="h5" gutterBottom className="blue">
                  {topic.subject ? topic.subject : ""}
                </Typography>
                <div style={{ flex: 1 }} />

                <Button>
                  <div style={{ marginRight: 5 }}>
                    {topic.like ? topic.like : "0"}
                  </div>
                  <Icon className="blue" style={{ marginRight: 15 }}>
                    thumb_up
                  </Icon>
                </Button>
                <Icon className="blue" style={{ marginRight: 15 }}>
                  share
                </Icon>
              </div>

              <Typography variant="body2" gutterBottom>
                {topic.body}
              </Typography>
              <Paper elevation={3} />

              <div
                className="flex_"
                style={{ alignItems: "center", marginTop: 20 }}
              >
                <Avatar
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "orange",
                    marginRight: 5,
                  }}
                />
                <Typography
                  variant="button"
                  className="blue"
                  style={{ marginRight: 10 }}
                >
                  {topic.username}
                </Typography>
                <Typography variant="overline" className="lightgrey">
                  {getDateFromTimestamp(topic.createdAt)}
                </Typography>
                <div style={{ flex: 1 }} />
                {topic.tags.length > 0 &&
                  topic.tags.map((t, idx) => (
                    <Chip
                      key={t}
                      label={t}
                      variant="outlined"
                      style={{ marginRight: 5 }}
                      color={idx % 2 === 0 ? "primary" : "secondary"}
                    />
                  ))}
              </div>
            </Paper>
          </div>
        ))}
    </>
  );
}

export default Forum;
