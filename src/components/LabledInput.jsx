import { Form } from "react-bootstrap";
import PropTypes from 'prop-types';

function LabledInput({
  className = "",
  labelClassName = "",
  inputClassName = "",
  labelTitle = "",
  helpTitle = "",
  labelIcon = "",
  ...inputProps
}) {
  return (
    <div className={className}>
      <Form.Label className={labelClassName}>
        {labelTitle} <i className={labelIcon} />
      </Form.Label>
      <Form.Control
        className={inputClassName}
        {...inputProps}
      />
      <Form.Text muted>{helpTitle}</Form.Text>
    </div>
  );
}

LabledInput.propTypes = {
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  labelTitle: PropTypes.string,
  helpTitle: PropTypes.string,
  labelIcon: PropTypes.string,
};

export default LabledInput;