import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ChangeEmotionButton from "./ChangeEmotionButton";
import EmotionGraph from "./EmotionGraph";
import DominantDisplay from "./DominantDisplay";
import OverallGraph from "./OverallGraph";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: { minWidth: 1500, display: "block" },
  content: {
    display: "inline"
  },
  root: {
    flexGrow: 1
  }
};

function EmotionCard(props) {
  const {
    classes,
    emotion,
    emotionHandler,
    color,
    currentTime,
    labels,
    data,
    dominantColor,
    dominantEmotionText,
    graphData
  } = props;

  return (
    <Card className={classes.card} justify="center">
      <Grid container className={classes.root}>
        <Grid item xs={6}>
          <CardContent>
            <OverallGraph labels={labels} graphData={graphData} />
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <EmotionGraph
              emotion={emotion}
              color={color}
              currentTime={currentTime}
              labels={labels}
              data={data}
            />
          </CardContent>
        </Grid>
      </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={6}>
          <CardContent>
            <DominantDisplay
              color={dominantColor}
              dominantEmotionText={dominantEmotionText}
            />
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <ChangeEmotionButton emotionHandler={emotionHandler} />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

EmotionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  emotion: PropTypes.string.isRequired,
  emotionHandler: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  currentTime: PropTypes.number.isRequired,
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  dominantColor: PropTypes.string.isRequired,
  dominantEmotionText: PropTypes.string.isRequired,
  graphData: PropTypes.array.isRequired
};

export default withStyles(styles)(EmotionCard);
