import React from 'react';

import './chatbot.styles.css';
import Header from '../chatbot-header/chatbot-header.component.jsx';
import Button from 'react-bootstrap/Button';

import {Container, Row,Col} from 'react-bootstrap';


const Chatbot = ({props})=>{
  return( <chatbot id="chatbot">
          <Header />
          <div className="chatbot-iframe">
            <div id="chatbot-frame" className="chatbot-frame scrollbar scrollbar-grey ">
              <Container>
                <Row>
                  <Col>
                    <h1>
                      <a href="https://api.whatsapp.com/send?phone=5514997792464&text=Oi%2C%20gostaria%20de%20falar%20sobre%20o%20projeto%20Real%20Valor%20que%20voc%C3%AA%20fez!">
                        Manda um Whats!
                      </a>
                    </h1>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="chatbot-text">
              <Button block size="lg" color="success">
                Enviar
              </Button>
            </div>
          </div>
        </chatbot>
  )
  }

  export default Chatbot;