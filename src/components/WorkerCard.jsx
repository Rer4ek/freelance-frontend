import {  Card } from "react-bootstrap";

import PropTypes from 'prop-types'

function WorkerCard({src="", cardTitle="", cardText="", rating="", higherRating="10", ratingIcon=""}){
    return (
        <Card className="best-worker-card">
            <Card.Img className="best-worker-image" variant="top" src={src} />
            <Card.Body>
                <Card.Title>
                    {cardTitle}
                </Card.Title>
                <Card.Text>
                    {cardText}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{rating} {ratingIcon}/ {higherRating} {ratingIcon} </Card.Footer>
        </Card>
    );
}

WorkerCard.propTypes = {
    src: PropTypes.string,
    cardTitle: PropTypes.string, 
    cardText: PropTypes.string, 
    rating: PropTypes.string, 
    higherRating: PropTypes.string, 
    ratingIcon: PropTypes.element
}

export default WorkerCard