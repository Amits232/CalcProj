import React, { Component } from "react";

export default class CCNums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      sum: null,
      oper: null
    };
  }

  FirstNumChange(event) {
    this.setState({ num1: Number(event.target.value) });
    console.log("num1: " + Number(event.target.value));
  }

  SecondNumChange(event) {
    this.setState({ num2: Number(event.target.value) });
    console.log("num2: " + Number(event.target.value));
  }


  SumNums = (event) => {
    this.setState({ oper: event.target.value})
    switch (this.state.oper) {
      case "+":
        this.setState({ sum: this.state.num1 + this.state.num2 });
        break;
      case "-":
        this.setState({ sum: this.state.num1 - this.state.num2 });
        break;
      case "*":
        this.setState({ sum: this.state.num1 * this.state.num2 });
        break;
      case "/":
        this.setState({ sum: this.state.num1 / this.state.num2 });
        break;

    }

  };

  render() {
    return (
      <div>
        <input type="number" onChange={(event) => this.FirstNumChange(event)} /> 
        <input type="number" onChange={(event) => this.SecondNumChange(event)} /> <br /> <br />
        <input type="submit" value={"+"} onClick={this.SumNums} />
        <input type="submit" value={"-"} onClick={this.SumNums} />
        <input type="submit" value={"*"} onClick={this.SumNums} />
        <input type="submit" value={"/"} onClick={this.SumNums}  />
        <br /> <br />
        <h4>        !!!יש ללחוץ על הכפתור פעמיים</h4>
          = {this.state.sum}

      </div>
    );
  }
}
