import React, { Component } from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header"

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavOpen: false,
      showBackgroundColor: false
    };
  }

  toggleNav = () => {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen,
    });
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 550) {
        this.setState({
          showBackgroundColor: true,
        });
      } else {
        this.setState({
          showBackgroundColor: false,
        });
      }
    });
  }

  render() {
    return (
      <div className="HomePage">
        <Header
          showBackgroundColor={this.state.showBackgroundColor}
          toggleNav={this.toggleNav}
        />
        {/* <SideNav isNavOpen={this.state.isNavOpen} toggleNav={this.toggleNav} /> */}
      </div>
    );
  }
}
