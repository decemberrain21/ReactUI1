import React from 'react';

class PriceDetail extends React.Component {
    render() {
      return (
        <div className="pricingHeader">
          <h4> {this.props.plan}</h4>
          <div class="price">
                <span class="currency">$</span>
                <span class="pricevalue">{this.props.cost}</span> / 
                <span class="duration">MO</span>
            </div>
        </div>
      );
    }
  }
export default PriceDetail;