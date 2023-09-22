import axios from "axios"
import { useEffect, useState } from 'react'
import Jobavailable from './Jobavailable'
import View from './View'
import Listedjob from './Listedjob'
import CategoryItem from './CategoryItem'
import Categories from './Categories'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Homefinal = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products)
        console.log(res.data.products)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <Home />
      <Categories name="Popular Categories" />
      <div className="cat">
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
      </div>

      <Listedjob />
        
          {
            products.length == 0
            &&
            <>
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
            </>
          }
          
             {
              products.map((product) => {
                return <Jobavailable  key={product.id} salary={product.price} para={product.title} title={product.category}/>
                
              })
            }
        </div>
  )
}

export default Homefinal