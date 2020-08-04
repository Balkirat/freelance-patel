import React, { Component } from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import MobileNav from "../../components/MobileNav/MobileNav"
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/services";

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
      if (window.scrollY > 250) {
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
        <MobileNav isNavOpen={this.state.mobileNavOpen} toggleNav={this.toggleNav} />
        <Hero showBackgroundColor={this.state.showBackgroundColor}/>
        <Services />
      </div>
    );
  }
}
