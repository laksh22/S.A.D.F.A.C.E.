import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ChangeEmotionButton from "./ChangeEmotionButton";
import EmotionGraph from "./EmotionGraph";
import DominantDisplay from "./DominantDisplay";

const styles = {
  card: {
    maxWidth: 640
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
    dominantEmotionText
  } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <EmotionGraph
          emotion={emotion}
          color={color}
          currentTime={currentTime}
          labels={labels}
          data={data}
        />
        <ChangeEmotionButton emotionHandler={emotionHandler} />
        <DominantDisplay
          color={dominantColor}
          dominantEmotionText={dominantEmotionText}
        />
      </CardContent>
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
  dominantEmotionText: PropTypes.string.isRequired
};

export default withStyles(styles)(EmotionCard);
