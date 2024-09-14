import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer/inxex'
import FilterCategory from '../../Components/FilterCategory'
import { useState } from 'react'
import { Container } from './styled'


const Category = () => {
  

  const [search, setSearch] = useState("Romance");
  return (
    <>
    <Header value={search} setSearch={setSearch}/>
    <h1>Romance</h1>
    <Container>
    
       <FilterCategory categoria={search}/>
    </Container>
    <Footer />
    </>
  )
}

export default Category