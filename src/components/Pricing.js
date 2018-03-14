
import React from 'react';
import PriceDetail from './PriceDetail';
class Pricing extends React.Component {
    render() {
      return (
        <div className="container">
        <div className="row">
        <div className="col-sm toggleperiod">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autocomplete="off" checked/> Monthly
            </label>
            <label className="btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off"/> Yearly
            </label>
           
        </div>
        </div>
        </div>
        <div className="row priceDiv">
          <div className="col-sm pricing">
           <PriceDetail plan="BASIC" cost="30" />
          </div>
          <div className="col-sm pricing selected">
          <PriceDetail plan="POPULAR" cost="60"/>
          </div>
          <div className="col-sm pricing">
          <PriceDetail plan="PREMIER" cost="90"/>
          </div>
        </div>
      </div>
      )
    }
    }
export default Pricing;