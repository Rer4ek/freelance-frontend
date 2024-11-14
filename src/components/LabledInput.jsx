import { Form } from "react-bootstrap";

import PropTypes from 'prop-types'

function LabledInput({
                        className="", accept="", labelClassName="", inputClassName="", labelTitle="",
                        helpTitle="", labelIcon="",  rows="", onChange=() => {},
                        type="text", id}
                    ){
    return (
        <div className={className}>
            <Form.Label className={labelClassName} htmlFor={id}> {labelTitle} <i className={labelIcon}></i> </Form.Label>
            { type === "textarea" ?
                <Form.Control className={inputClassName} onChange={onChange} rows={rows} as={type} id={id} aria-describedby={id + "-help"}/> :             
                <Form.Control required className={inputClassName} onChange={onChange} type={type} id={id} aria-describedby={id + "-help"} accept={accept}/>
             }

            <Form.Text id={id + "-help"} muted> {helpTitle} </Form.Text>
        </div>
    );
}


LabledInput.propTypes = {
    className: PropTypes.string,
    accept: PropTypes.string,
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    labelTitle: PropTypes.string,
    helpTitle: PropTypes.string,
    labelIcon: PropTypes.string,
    rows: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    id: PropTypes.string.isRequired
}

export default LabledInput