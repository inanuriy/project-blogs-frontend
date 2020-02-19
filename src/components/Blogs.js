import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../actions";
// import {withRouter} from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Impact from "../assets/images/impact.png";
import NavBar from "./NavBar";

class Blogs extends Component {
  
  componentDidMount = () => {
    this.props.fetchBlogs();
  };

  render() {
    return (
      <div>
        <NavBar />
        {this.props.Blogs.map((value, index) => {
          return (
            <Card key={index}>
              <CardActionArea>
                <CardMedia image={value.Picture} title="Impact Byte" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {value.Title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {value.Description}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Nama Author
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Blogs: state.Blogs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBlogs: () => {
      dispatch(fetchBlogs());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
