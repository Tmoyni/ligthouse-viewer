import React from 'react';
import '../App.css';


class Report extends React.Component {
  // console.log(props.info.audits['uses-responsive-images'])
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }  

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // let color

  colorPicker() {
    if (this.props.info.audits['uses-responsive-images'].score > .80) {
      return "green"
    } else if (this.props.info.audits['uses-responsive-images'].score < .80 && this.props.info.audits['uses-responsive-images'].score > .50) { 
      return "yellow"
    } return "red"
  }

  secondColorPicker() {
    if (this.props.secondReport.audits['uses-responsive-images'].score > .80) {
      return "green"
    } else if (this.props.secondReport.audits['uses-responsive-images'].score < .80 && this.props.secondReport.audits['uses-responsive-images'].score > .50) { 
      return "yellow"
    } return "red"
  }


  render() {
    console.log(this.props.secondReport)

    return (
      <div className="report">
        <div className="report-left">
          <div className="report-header">
            <button onClick={this.handleClick}>URLs</button>
            <div className="report-header-copy">
              <h4>{this.props.name}</h4>
              <p className="images-info">  
                <span className={this.colorPicker()}>Score: {Math.floor(this.props.info.audits['uses-responsive-images'].score * 100)}%</span>
                <span>   |   </span>
                {this.props.info.audits['uses-responsive-images'].displayValue}
                <span>   |   </span>
                {this.props.info.audits['uses-responsive-images'].numericValue} <span> </span>{this.props.info.audits['uses-responsive-images'].numericUnit}          
              </p>
            </div>
          </div>

          {this.state.isToggleOn 
          ? <table className="urlTable">
              <thead>
              <tr>
                <th>image</th>
                <th className="urltd">url</th>
                <th>total Bytes</th>
                <th>wasted Bytes</th>
                <th>wasted %</th>
              </tr>
              </thead>
              <tbody>

              {this.props.info.audits['uses-responsive-images']['details']['items'].map((image, index) => {
              return <tr key={index}>
                <td><img src={image.url} /></td>
                <td className="urltd">{image.url}</td>
                <td>{image.totalBytes}</td>
                <td>{image.wastedBytes}</td>
                <td>{Math.floor(image.wastedPercent)}%</td>
              </tr>
              })}
              </tbody>
            </table>
          : ""
          }
        </div>
        <div className="report-right">
          <div className="report-header">
            <button onClick={this.handleClick}>URLs</button>
            <div className="report-header-copy">
              <h4>{this.props.secondReport.finalUrl}</h4>
              <p className="images-info">  
                <span className={this.secondColorPicker()}>Score: {Math.floor(this.props.secondReport.audits['uses-responsive-images'].score * 100)}%</span>
                <span>   |   </span>
                {this.props.secondReport.audits['uses-responsive-images'].displayValue}
                <span>   |   </span>
                {this.props.secondReport.audits['uses-responsive-images'].numericValue} <span> </span>{this.props.secondReport.audits['uses-responsive-images'].numericUnit}          
              </p>
            </div>
          </div>

          {this.state.isToggleOn 
          ? <table className="urlTable">
              <thead>
              <tr>
                <th>image</th>
                <th className="urltd">url</th>
                <th>total Bytes</th>
                <th>wasted Bytes</th>
                <th>wasted %</th>
              </tr>
              </thead>
              <tbody>

              {this.props.secondReport.audits['uses-responsive-images']['details']['items'].map((image, index) => {
              return <tr key={index}>
                <td><img src={image.url} /></td>
                <td className="urltd">{image.url}</td>
                <td>{image.totalBytes}</td>
                <td>{image.wastedBytes}</td>
                <td>{Math.floor(image.wastedPercent)}%</td>
              </tr>
              })}
              </tbody>
            </table>
          : ""
          }
        </div>
      </div>
    );
  }
}

export default Report;
