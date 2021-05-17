import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import index from '../pages/index';
import about from '../pages/about';
import tech from '../pages/tech';
import misc from '../pages/misc';


function Navbar() {
    return (
        <>

   <nav>
 <header className="header">
    <a href="#" className="logo">LOGO</a>
    <div className="menu-btn">
      <div className="menu-btn__lines" />
    </div>
    <ul className="menu-items">
      <li><a href="#" className="menu-item">Home</a></li>
      <li className="dropdown">
        <a href="#" className="menu-item expand-btn">Dropdown Menu</a>
        <ul className="dropdown-menu expandable">
          <li><a href="#" className="menu-item">Item 1</a></li>
          <li><a href="#" className="menu-item">Item 2</a></li>
          <li className="dropdown dropdown-right">
            <a href="#" className="menu-item expand-btn">
              Item 3
              <i className="fas fa-angle-right" />
            </a>
            <ul className="menu-right expandable">
              <li><a href="#" className="menu-item">Item 3.1</a></li>
              <li><a href="#" className="menu-item">Item 3.2</a></li>
              <li><a href="#" className="menu-item">Item 3.3</a></li>
              <li><a href="#" className="menu-item">Item 3.4</a></li>
            </ul>
          </li>
          <li><a href="#" className="menu-item">Item 4</a></li>
        </ul>
      </li>
      <li>
        <a href="#" className="menu-item expand-btn">Mega Menu</a>
        <div className="mega-menu expandable">
          <div className="content">
            <div className="col">
              <section>
                <h2>Featured 1</h2>
                <a href="#" className="img-wrapper"><span className="img"><img src="https://picsum.photos/400?random=1" alt="Random Image" /></span></a>
                <p>Lorem ipsum dolor sit amet.</p>
              </section>
            </div>
            <div className="col">
              <section>
                <h2>Featured 2</h2>
                <ul className="mega-links">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                  <li><a href="#">Item 4</a></li>
                  <li><a href="#">Item 5</a></li>
                </ul>
              </section>
            </div>
            <div className="col">
              <section>
                <h2>Featured 3</h2>
                <ul className="mega-links">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                  <li><a href="#">Item 4</a></li>
                  <li><a href="#">Item 5</a></li>
                </ul>
              </section>
            </div>
            <div className="col">
              <section>
                <h2>Featured 4</h2>
                <ul className="mega-links">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                  <li><a href="#">Item 4</a></li>
                  <li><a href="#">Item 5</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </li>
      <li>
        <a href="#" className="menu-item expand-btn">Blog</a>
        <div className="mega-menu blog expandable">
          <div className="content">
            <div className="col">
              <a href="#" className="img-wrapper"><span className="img"><img src="https://picsum.photos/400?random=2" alt="Random Image" /></span></a>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                quibusdam deserunt quis.
              </p>
              <a href="#" className="read-more">read more...</a>
            </div>
            <div className="col">
              <a href="#" className="img-wrapper"><span className="img"><img src="https://picsum.photos/400?random=3" alt="Random Image" /></span></a>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                quibusdam deserunt quis.
              </p>
              <a href="#" className="read-more">read more...</a>
            </div>
            <div className="col">
              <a href="#" className="img-wrapper"><span className="img"><img src="https://picsum.photos/400?random=4" alt="Random Image" /></span></a>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                quibusdam deserunt quis.
              </p>
              <a href="#" className="read-more">read more...</a>
            </div>
          </div>
        </div>
      </li>
      <li><a href="#" className="menu-item">About</a></li>
    </ul>
   </header>
                </nav>
           
        </>
    )
}

export default Navbar