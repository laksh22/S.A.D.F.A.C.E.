import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 100
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class SearchBar extends React.Component {
  state = {
    multiline: "Controlled",
    name: " "
  };

  changeVideo(e) {
    this.props.videoChanger(e.target.value);
    this.setState({ name: e.target.value });
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          value={this.state.name}
          onChange={e => this.changeVideo(e)}
          fullWidth
          id="outlined-search"
          label="Search for a new video"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
