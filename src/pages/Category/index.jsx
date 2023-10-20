import React from 'react'
import Header from "../../components/Header"
import { useParams } from 'react-router-dom'

const Category = () => {
  const { type } = useParams()
  return (
    <Header />
  )
}

export default Category