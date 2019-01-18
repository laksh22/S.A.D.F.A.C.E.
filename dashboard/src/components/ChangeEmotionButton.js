import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class ChangeEmotionButton extends Component {
  state = {
    emotion: "",
    name: "hai",
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    switch (event.target.value) {
      case 10:
        this.props.emotionHandler("Happiness");
        break;
      case 20:
        this.props.emotionHandler("Anger");
        break;
      case 30:
        this.props.emotionHandler("Surprise");
        break;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-emotion-simple"
          >
            Emotion
          </InputLabel>
          <Select
            value={this.state.emotion}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="emotion"
                id="outlined-emotion-simple"
              />
            }
          >
            <MenuItem value={10} text="Happiness">
              Happiness
            </MenuItem>
            <MenuItem value={20} text="Anger">
              Anger
            </MenuItem>
            <MenuItem value={30} text="Surprise">
              Surprise
            </MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

ChangeEmotionButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChangeEmotionButton);
