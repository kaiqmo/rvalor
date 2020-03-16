import React from 'react';
import Header from './components/header/header.component.jsx';
import Chart from './components/chart/chart.component.jsx';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';


import Form from '../src/components/form/form.component.jsx';

class App extends React.Component{
  constructor(){
    super();  
    this.state = {
      btc:null,
      btc_hoje:null,
      value_field:2000,
      tempo:2,
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
      this.setState({ btc: btc, btc_hoje:btc[btc.length-1] });      
      this.Calculations()
    });
    
  }
  
  handleChange = async(e) => {
    await this.setState({value_field: e.target.value});
     this.Calculations();
  };

  handleSubs = async() =>{
    var subs =  parseInt(this.state.value_field) - 250;
    await  this.setState({value_field: subs});
    this.Calculations()
  };

  handleUps = async() =>{
    var subs =  parseInt(this.state.value_field) + 250;
    await this.setState({value_field: subs});
    this.Calculations()
  };

  handleUpTime = async() => {
    var new_time = this.state.tempo + 1;
    await this.setState({ tempo : new_time});
    this.Calculations()
  };

  handleDownTime = async() =>{
    var new_time = this.state.tempo - 1;
    await  this.setState({tempo: new_time});
    this.Calculations()
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
        <Header btc={this.state.btc_hoje}  />
        <div className="body">
          <Container>
            <Row>
             <Col>
            
              <Form   label='Dinheiro Investimento' labelinput='R$:' props={this.state} value={this.state.value_field} handleChange={this.handleChange} handleUps={this.handleUps} handleSubs={this.handleSubs} />
              <br />
              <Form   label='Tempo Total do Investimento' labelinput='Tempo:' props={this.state} value={this.state.tempo} handleChange={this.handleChange} handleUps={this.handleUpTime} handleSubs={this.handleDownTime} />
              <br />
          
            </Col>
            <Col>
              <span >
                Retorno Renda Fixa  a 10% ao ano:<input type="number" placeholder={this.state.renda_fixa} disabled></input>
              </span>
              <span>
                Retorno Bitcoin:<input type="number" placeholder={this.state.btc_retorno} disabled></input>
              </span>
          
            </Col>

            </Row>
          </Container>

            {
              this.state.btc?
            <Chart props={ this.state.btc} />
            :
            <a href="github.io/kaiqmo">Kaiqmo</a>
            }
        </div>
    </div>
  )};
}

export default App;
