import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";


export const Contact = () => {
  const fromInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(fromInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch('http://localhost:5000/contact',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(formDetails),
    });
   setButtonText('Send Message');
   let result = await response.json();
   setFormDetails(fromInitialDetails);
   if (result.code === 200) {
    setStatus({sucess: true, message: 'Message Sent Successfully'});
   } else{
    setStatus({sucess: false, message: 'Message Failed to Send. Please Try Again'});
   }
  };


  return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col size={12} md={6}>
                    <img src={contactImg} alt='Contact Us'/>
                </Col>
                <Col size={12} md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col>
                                <textarea row='6' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.sucess === false ? 'danger': 'success'}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>

    </section>
  )
}
