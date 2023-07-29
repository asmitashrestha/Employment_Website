import ME from '../../assets/img.jpg'

const Home = () => {

  return (
    <div className="main">
      <h1>Find A <span style={{color:" rgb(49, 83, 49)"}}>Job</span> That <br/> 
      <span style={{color:" rgb(49, 83, 49)"}}> Matches </span>Your <br/>
      Passion</h1>
      <p>Hand-picked opportunities to work from home, remotely, freelance,
        <br/> full-time, part-time, contract and internships.</p>
      <div className="search">
        <input type="text" placeholder="Search by job title..........." />
        <button>Search</button>
      </div>
      <div className="images">
        <img src={ME} alt="my image" />
      </div>
       
    </div>
  )
}

export default Home