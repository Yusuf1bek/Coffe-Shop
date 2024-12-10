import React, { Component } from 'react';
import axios from 'axios';
import cofee1 from "../assets/images/ourhistory.png"

export default class OurStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isLoading: true, 
      error: null, 
    };
  }

  componentDidMount() {
    axios
      .get('https://api.sampleapis.com/coffee/hot')
      .then((response) => {
        this.setState({ images: response.data.slice(3, 5), isLoading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, isLoading: false });
      });
  }

  render() {
    const { images, isLoading, error } = this.state;

    if (isLoading) {
      return (
        <div className="container py-[140px] flex justify-center">
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

    return (
      <div className="container flex flex-row gap-[50px] items-center justify-center mb-[140px]">
        <div className="grid grid-cols-1 gap-[16px]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.image} 
              alt={image.title}
              className={`rounded-lg w-[300px] h-[300px] object-cover ${
                index === 2 ? 'col-span-2' : ''
              }`} 
            />
          ))}
        </div>
        <div className=" flex text-left gap-[32px] text-white">
            <div className=''>
                <img src={cofee1} width={298} height={635} alt="" />
            </div>
            <div className='w-[510px] bg-[#1C1814] rounded-lg py-[120px] px-[56px]'>
            <h5 className="text-yellow-500 text-[18px] font-[600] leading-[21px] mb-[12px]">
                Our history
            </h5>
            <h2 className="text-[48px] font-[400] leading-[64px] mb-[24px] ">
                Create a <br />
                new story with us
            </h2>
            <p className="text-gray-400 text-[16px] leading-[28px] font-[500]">
                Mauris Rhoncus In Imperdiet Placeat. Vestibulum Emsimd Nisi Suscipit
                Ligula Volutpat. A Feyugiat Urn Maxmus Cars Massa Nibhincidunt.
                Donec Et Nibh Maximus. Est Eu, Mattis Nuce. Praesent Ut Quam Quis
                Quam Venenatis Fringilla. Morbi Vestibulum Id Tells Mmdoa Mattis.
                Aliquam Erat Volutpat.
            </p>
            </div>
        </div>
      </div>
    );
  }
}
