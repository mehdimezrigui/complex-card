import React, { Component } from 'react'
import puce from './Puce.png'
export default class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            number:'',
            date:''
        }
    }
    changenumber=(e)=>{
        let regn=/[^0-9]/gi
        if(e.target.value.length<20){
        this.setState({
            number: e.target.value.replace(regn, '')
        }) }
    }
    
    changedate=(e)=>{
        let regd=/[^0-9]/gi
        if(e.target.value.length<6 &&  e.target.value.slice(0,2)<13 && e.target.value.slice(0,1)<2){
        this.setState({
            date: e.target.value.replace(regd, '').replace(/(.{2})/g, "$1/")
        })}
    }
    changename=(e)=>{
        let reg=/[^a-z ]/gi
        if(e.target.value.length<21)
        this.setState({
            name: e.target.value.replace(reg, '').toUpperCase()
        })
    }
    test = (x) =>{
        return x.replace(/(.{4})/g, '$1 ').trim()
    }
    remove =(x)=>{
        return x.replace(/[/]+$/g,'')
    }
    verif =(x)=>{
        switch(x.slice(0,1)){
            case 0: x.slice(1,1).replace(/[^1-9]/g, '')
            case 1: x.slice(1,1).replace(/[^0-2]/g, '' )
        }

    }
    
  render() {
    return (
      <div className="container">
        <div className="card">
        <h2  className="titre">Company name</h2>
        <img src={puce} className="puce"/>
        <h4 className="number">{this.test( this.state.number.padEnd(16,'*'))}</h4>
        <span className="date">Month/Year</span>
        <div className="thru"><span>VALID</span><span>THRU</span></div>
        <h5 className="validthru">{this.remove(this.state.date.padEnd(4,'*'))}</h5>
        <h4 className="name">{this.state.name.padEnd(5, '*')}</h4>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/MasterCard_early_1990s_logo.svg" className="logo"/>
        </div>
        <div className="form">
        <div className="text"><h5>Card number:</h5><input type="text"  onChange={(e)=>this.changenumber(e)} value={this.test(this.state.number)}/></div>
        <div className="text"><h5>User card:</h5><input type="text"  onChange={(e)=>this.changename(e)} value={this.state.name}/></div>
        <div className="text"><h5>Valid thru:</h5><input type="text" onChange={(e)=>this.changedate(e)} value={this.remove(this.state.date)}/></div>
        </div>
      </div>
    )
  }
}
