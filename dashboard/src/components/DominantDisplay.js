import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit
  }
});

function DominantDisplay(props) {
  const { classes, color, dominantEmotionText } = props;
  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        style={{ backgroundColor: color, fontSize: "50" }}
      >
        {dominantEmotionText}
      </Button>
    </div>
  );
}

DominantDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  dominantEmotionText: PropTypes.string.isRequired
};

export default withStyles(styles)(DominantDisplay);
