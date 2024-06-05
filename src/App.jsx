import React from 'react'
import './styles/app.css'
import FooterMenu from './components/FooterMenu'
import PostCard from './components/PostCard'
import ImageCard from './components/imageCard'
import Logo from './components/Logo'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Search from './components/Search'
import ProfileCard from './components/ProfileCard'



const App = () => {
  return <>
    <div className='main'>
      <div className='grid-three'>
        <div className='col-1'>
          <div className='container logo'>
            <Logo />
          </div>
          <div className='container nav-menu'>
            <Navigation />
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>

        {/* Second column */}
        <div className='col-2'>
          <div className='container search-option'>
            <Search />
            <div className='filter-option'>
              <i className='bi bi-filter' /><span>Filters</span>
            </div>
          </div>
          <div className='post-container'>
            <PostCard />
            <div className=' container store-container'>
              <div className='image-card-container'>
                <ImageCard />
              </div>
            </div>

          </div>

        </div>

        {/* third column */}
        <div className='col-3'>
          <button className='container seller-button'>Become a Seller</button>
          <div className=' gallery'>
            <div className='gallery-type'>
              <span className='active'>Artist</span>
              <span>Photographer</span>
            </div>
            <div className='gallery-image-container'>
              <ProfileCard />
            </div>
          </div>
          <div className='footer'>
            <FooterMenu/>
          </div>
        </div>

      </div>
    </div>
  </>
}

export default App
