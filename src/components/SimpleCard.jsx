import PropTypes from 'prop-types'
import "../styles/card.css"

function SimpleCard({ className="", children, color="#CD5C5C"}) {    
    return (
        <div className={"default-card " + {className}}>
            <div className='color-plate' style={{backgroundColor: color}}>

            </div>
            <div className='card-child'>
                {children}
            </div>
        </div>
    );
}

SimpleCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string
}

export default SimpleCard