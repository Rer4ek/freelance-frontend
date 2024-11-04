import { Form } from "react-bootstrap";

export default function LabledInput({accept="", labelClassName="", inputClassName="", labelTitle="", helpTitle="", labelIcon="",  rows="", onChange=(event) => {}, type="text", inputId}){
    return (
        <>
            <Form.Label className={labelClassName} htmlFor={inputId}> {labelTitle} <i className={labelIcon}></i> </Form.Label>
            { type === "textarea" ?
                <Form.Control className={inputClassName} onChange={onChange} rows={rows} as={type} id={inputId} aria-describedby={inputId + "-help"}/> :             
                <Form.Control className={inputClassName} onChange={onChange} type={type} id={inputId} aria-describedby={inputId + "-help"} accept={accept}/>
             }

            <Form.Text id={inputId + "-help"} muted> {helpTitle} </Form.Text>
        </>
    );
  }