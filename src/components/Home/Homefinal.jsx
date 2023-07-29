import React from 'react'
import Jobstitle from './Jobstitle'
import View from './View'
import Listedjob from './Listedjob'
import CategoryItem from './CategoryItem'
import Categories from './Categories'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

const Homefinal = () => {
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
      <div className="listed">
        <div className="list">
          <Jobstitle
            para="Match Company Limited"
            title="Fresher UI/UX Designer (3 Year Exp.)"
          />
        </div>
        <div className="list">
          <Jobstitle
            para="Match Company Limited"
            title="Fresher UI/UX Designer (3 Year Exp.)"
          />
        </div>
        <div className="list">
          <Jobstitle
            para="Match Company Limited"
            title="Fresher UI/UX Designer (3 Year Exp.)"
          />
        </div>
        <div className="list">
          <Jobstitle
            para="Match Company Limited"
            title="Fresher UI/UX Designer (3 Year Exp.)"
          />
        </div>
        <div className="list">
          <Jobstitle
            para="Match Company Limited"
            title="Fresher UI/UX Designer (3 Year Exp.)"
          />
        </div>
      </div>
      <View />
      <Footer />
    </div>
  )
}

export default Homefinal