import React, { Component } from "react";
import "./services.scss";
import { motion } from "framer-motion";
import sunglasses from "../../assets/images/sunglasses.jpg";
import eyeExams from "../../assets/images/eyeExams.jpg";
import designerGlasses from "../../assets/images/designer-glasses.jpg";
import correctiveLens from "../../assets/images/correctiveLenses.jpg";
import contactLens from "../../assets/images/contactLens.jpg";
import ProductCards from "../ProductCards/ProductCards";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: "Contact Lenses",
          //   description:
          //     "Offering the premier in eye health products, including contact lenses and lens care products from the finest companies such as Bausch & Lomb, Johnson & Johnson, Coopervision, Ciba Vision. Offering a variety of the Best Eye Care products to meet your requirements",
          image: contactLens,
        },
        {
          id: 2,
          name: "Sunglasses",
          //   description:
          //     "We deal in premium brands from all over the world and offer our customers the latest in fashion eyewear from across the globe. Prestigious brands ranging from Cartier, Maybach, Chrome Hearts , DITA , IC Berlin to the more famous widely available brands such as Gucci, Armani, Rayban etc. Our Outlets are spread across New Delhi, India the capital region at premium locations.",
          image: sunglasses,
        },
        {
          id: 3,
          name: "Eye Exam",
          //   description:
          //     "Patel Optical offers fully equipped optometrist office which includes retinography and takes images of your eye and visual field by a licensed optometrist. Our experienced doctors are dedicated in creating more and more awareness about eye health and early detection of eye related problems.",
          image: eyeExams,
        },
        {
          id: 4,
          name: "Designer Frames",
          //   description:
          //     "We offer measuring, fitting and frame adjustments. No appointment is necessary. Walk-ins are always welcome",
          image: designerGlasses,
        },
        {
          id: 5,
          name: "Corrective Lenses",
          //   description:
          //     "From a range consisting of the prestigious German optical makers Carl Zeiss to French brands like ESSILOR amongst other brands like GKB, VisionRx, SIEKO, NIKON that empower us to provide our customers the best possible service for their vision",
          image: correctiveLens,
        },
      ],
    };
  }
  render() {
    return (
      <div className="products">
        <div className="products__container">
          <h1 className="products__heading">Services</h1>
          <div className="products__cards">
            {this.state.products.map(({ id, ...otherProductProps }) => (
              <ProductCards key={id} {...otherProductProps} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
