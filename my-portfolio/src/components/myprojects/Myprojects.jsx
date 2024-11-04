import React from 'react'
import './myprojects.css'
import myimage from '../../assets/img3.png'
import img1 from '../../assets/img5.png'



const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={myimage} alt="" />
            </div>
            <h3>DICE GAME</h3>
            <small className='text-light'> ReactJs </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/SiddharthBorekar/Dice-Game" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>     
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={img1} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src={} alt="" /> */}
            </div>
            <h3>Up comming proj</h3>
            <small className='text-light'>HTML | CSS | JS | php | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
        </article>
        
       
      </div>
    </section>
  )
}

export default Myprojects