import React from 'react';
import Header from './components/header/header.component.jsx';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Form from '../src/components/form/form.component.jsx';
import Chatbot from '../src/components/chatbot/chatbot.component.jsx';
import Chart from '../src/components/chart/chart.component.jsx';

import {Container, Row,Col} from 'react-bootstrap';

class App extends React.Component{
  constructor(){
    super();  
    this.state = {
      btc:null,
      btc_hoje:null,
      value_field:10000,
      tempo:3,
      rentabilidade_rf:10,
      renda_fixa:null,
      btc_retorno:null
    }
  }

  componentDidMount(){
    fetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=BRL&&limit=2000&api_key=05c386517ece0de5f77db828f0d02bd35500a2887a4cffc158fe9ee901dcef5b')
    .then(res =>res.json())
    .then((data) => {
      var dados = data.Data;
      var btc = [];
      dados.forEach( (d)=>{
        var utcSeconds = d.time;
        var dia = new Date(0);
        dia.setUTCSeconds(utcSeconds);
        var obj = {};
        obj.price = d.close;
        obj.date = dia.toDateString().slice(4,d.length);
        btc.push(obj);
      });
      this.setState({ btc: btc, btc_hoje:btc[btc.length-1].price });      
      this.Calculations();
    });
    
  }
  
  handleChange = async(e) => {
    await this.setState({value_field: e.target.value});
     this.Calculations();
  };

  handleSubs = async() =>{
    var subs =  parseInt(this.state.value_field) - 1000;
    await  this.setState({value_field: subs});
    this.Calculations()
  };

  handleUps = async() =>{
    var subs =  parseInt(this.state.value_field) + 1000;
    await this.setState({value_field: subs});
    this.Calculations()
  };

  handleUpTime = async() => {
    var new_time = this.state.tempo + 1;
    if(new_time<=5){
      await this.setState({ tempo : new_time});
      this.Calculations()
    }
  };

  handleDownTime = async() =>{
    var new_time = this.state.tempo - 1;
    if(new_time >=1){
      await  this.setState({tempo: new_time});
      this.Calculations()
    }
  };
  Calculations = async() => {
    var rendimento = this.state.value_field * (1+( this.state.tempo * this.state.rentabilidade_rf )/100);
    var btc = this.state.btc;
    var tempo = btc.length - (this.state.tempo * 365);
    var total_btc = this.state.value_field / btc[tempo].price;    
    total_btc = total_btc * btc[btc.length-1].price;
    await this.setState({renda_fixa:rendimento, btc_retorno:total_btc});
  }
  render(){
  return(
    <div className="App">
        {
          this.state.btc_hoje?
          <Header btc_hoje={this.state.btc_hoje} />
          :
          <Header />
        }
        <div className="body">
          <Container>
            
            <Row md={{ span: 4, offset: 4 }} >
              <h2>O Bitcoin é uma criptomoeda, um ativo digital projetado para funcionar como um meio de troca que usa criptografia para controlar sua criação e gerenciamento, em vez de depender das autoridades centrais.</h2>
            </Row>

            <Row>
              <Col>
              <h1> Investimento Inicial</h1>
              <Form   label='Dinheiro' labelinput='R$:' props={this.state} value={this.state.value_field} handleChange={this.handleChange} handleUps={this.handleUps} handleSubs={this.handleSubs} />
              <Form   label='Tempo de Investimento' labelinput='Tempo:' props={this.state} value={this.state.tempo} handleChange={this.handleChange} handleUps={this.handleUpTime} handleSubs={this.handleDownTime} />
              </Col>
              <Col>
              <h1> Seus Rendimentos</h1>
              <h1>
                Renda Fixa:<input type="number" className="rendimentos" placeholder={this.state.renda_fixa} disabled></input>
              </h1>
              <h1>
                Bitcoin:<input type="number"  className="rendimentos" placeholder={this.state.btc_retorno} disabled></input>
              </h1>
              </Col>
            </Row>
            <h1> Veja o grafico fenomenal do Bitcoin abaixo!</h1>
            <Col md={{ span: 3, offset: 3 }}>
                {
                  this.state.btc?
                <Chart props={ this.state.btc} tempo={this.state.tempo} />
                :
                <a href="https://github.com/kaiqmo/rvalor/">Kaiqmo</a>
                }
            </Col>
          </Container>
          
        <Chatbot />
        </div>
    </div>
  )};
}

export default App;
