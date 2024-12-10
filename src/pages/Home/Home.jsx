import React, { Component } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import OurHistory  from '../../components/OurHistory'
import Popular from '../../components/Popular'

export default class Home extends Component {
  render() {
    return (
      <>
        <Header/>
        <Hero/>
        <Products/>
        <OurHistory/>
        <Popular/>
      </>
    )
  }
}
