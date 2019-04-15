import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchTrendingProduct } from '../../store/reducer';
import Header from '../Header';
import Product from '../Product';
import './main-screen.css';
import Loader from '../Loader';
import Footer from '../Footer';

class MainScreen extends PureComponent {

  componentDidMount() {
    this.props.fetchTrendingProduct();
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        {this.props.isLoading &&
          <Loader />
        }
        {!this.props.isLoading &&
          <div className="products-list">
            {this.props.products.map((product, index) => {
              return <Product key={index+product.template} product={product} />
            })}
          </div>
        }
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { products, isLoading } = state;

  return {
    products,
    isLoading
  };
}

export default connect(mapStateToProps, { fetchTrendingProduct })(MainScreen);