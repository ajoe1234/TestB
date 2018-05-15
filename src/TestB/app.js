import React, { Component } from 'react';
const moment = require('moment')
const axios = require('axios')

const API = 'http://uinames.com/api/?ext&amount=30'
var getDay = (input) =>{
  var day = moment(input, "DD-MM-YYYY").day()
  return day
}

var getRendered = (array) => {
  let needtoRender
  let list = array.map((a, i) => {
    needtoRender = (
      <span>
        <img src={a.photo} alt="Responsive" className="img-thumbnail" />
        <p>{a.name}</p>
      </span>
    )
    return (
      <div key={i}>
        {needtoRender}
      </div>
    )
  })
  return list
}

class TestB extends Component {
  constructor (){
    super()
    this.state = {
      sunList: [],
      monList: [],
      tueList: [],
      wedList: [],
      thuList: [],
      friList: [],
      satList: []
    }
}
  componentDidMount() {
    var display = {
      SUN : [],
      MON : [],
      TUE : [],
      WED : [],
      THU : [],
      FRI : [],
      SAT : []
    }
    axios.get(API).then((response) =>{
      var people = response.data
      people.forEach(e => {
        // console.log(getDay(e.birthday.dmy))
        if (getDay(e.birthday.dmy) === 0) {
          display.SUN.push(e)
        } else if (getDay(e.birthday.dmy) === 1) {
          display.MON.push(e)
        } else if (getDay(e.birthday.dmy) === 2) {
          display.TUE.push(e)
        } else if (getDay(e.birthday.dmy) === 3) {
          display.WED.push(e)
        } else if (getDay(e.birthday.dmy) === 4) {
          display.THU.push(e)
        } else if (getDay(e.birthday.dmy) === 5) {
          display.FRI.push(e)
        } else if (getDay(e.birthday.dmy) === 6) {
          display.SAT.push(e)
        }
      })
      let sunList = getRendered(display.SUN)
      let monList = getRendered(display.MON)
      let tueList = getRendered(display.TUE)
      let wedList = getRendered(display.WED)
      let thuList = getRendered(display.THU)
      let friList = getRendered(display.FRI)
      let satList = getRendered(display.SAT)
      this.setState({sunList: sunList})
      this.setState({monList: monList})
      this.setState({tueList: tueList})
      this.setState({wedList: wedList})
      this.setState({thuList: thuList})
      this.setState({friList: friList})
      this.setState({satList: satList})
    })
  }

  render() {
    return (
      <React.Fragment>     
         <div className="container mb-3 mt-3">
          <div className="row">
            <div className="col-sm border">
              <h2 className="mt-2 mb-2"><strong>TestB</strong></h2>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">SUN</th>
                    <th scope="col">MON</th>
                    <th scope="col">TUE</th>
                    <th scope="col">WED</th>
                    <th scope="col">THU</th>
                    <th scope="col">FRI</th>
                    <th scope="col">SAT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">{this.state.sunList}</th>
                      <th scope="col">{this.state.monList}</th>
                      <th scope="col">{this.state.tueList}</th>
                      <th scope="col">{this.state.wedList}</th>
                      <th scope="col">{this.state.thuList}</th>
                      <th scope="col">{this.state.friList}</th>
                      <th scope="col">{this.state.satList}</th>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TestB;