import React, { Component } from 'react';
import axios from 'axios';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], 
      isLoading: true, 
      error: null, 
    };
  }

  componentDidMount() {
    axios.get('https://api.sampleapis.com/coffee/hot')
      .then(response => {
        this.setState({ products: response.data, isLoading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, isLoading: false });
      });
  }

  render() {
    const { products, isLoading, error } = this.state;

    if (isLoading) {
      return (
        <div className='container py-[140px] flex justify-center'>
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-40 h-40 border-4 border-transparent text-white text-4xl animate-spin flex items-center justify-center border-t-white rounded-full">
              <div className="w-32 h-32 border-4 border-transparent text-white text-2xl animate-spin flex items-center justify-center border-t-white rounded-full"></div>
            </div>
          </div>
        </div>
      );
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    const limitedProducts = products.slice(0, 3);

    return (
      <div className='container py-[140px]'>
        <ul className='flex items-center gap-[36px] justify-center mb-[140px]'>
          {limitedProducts.map(product => (
            <li key={product.id}>
              <div className='flex items-center gap-[12px]'>
                <span className='font-[400] text-[24px] leading-[29px] text-text'>0{product.id}</span>
                <h2 className='font-[400] text-[24px] leading-[29px] text-whiteText'>{product.title}</h2>
              </div>
              <img
                src={product.image}
                alt={product.title}
                width={366}
                className='bg-black rounded-lg mt-[20px]'
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
