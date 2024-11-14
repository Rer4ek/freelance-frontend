import React from "react";
import PropTypes from 'prop-types'

import { Carousel } from "react-bootstrap";
import { useState } from "react";

function CardCarousel({ className="", cardClassName="", title="", titleClassName="",  children }) {
    const [index, setIndex] = useState(0);
    
    let carouselItems = React.Children.map(children, (child, index) =>
        <Carousel.Item className={cardClassName} key={index}>{child}</Carousel.Item>
    );

    return (
        <div>
            <h3 className={titleClassName}>{title}</h3>
            <Carousel slide={false} className={className + " carousel-dark"} activeIndex={index} onSelect={setIndex}>
                {carouselItems}
            </Carousel>
        </div>
    );
}

CardCarousel.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    titleClassName: PropTypes.string,
    children: PropTypes.node,
    cardClassName: PropTypes.string
}

export default CardCarousel