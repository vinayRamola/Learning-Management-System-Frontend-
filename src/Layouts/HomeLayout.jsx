import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer';

function HomeLayout({ children }) {

  function changeWidth(){
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 'auto';
  }

  function hideDrawer(){
    const element = document.getElementsByClassName('drawer-toggle');
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  }

  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 z-50 w-fit">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="cursor relative">
        <FiMenu
          onClick={changeWidth}
          size={"32px"}
          className='font-bold text-white m-4'
        />
        </label>
      </div>
      
      <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content" >
          <li className='w-fit absolute right-2 z-50'>
              <button onClick={hideDrawer}>
                 <AiFillCloseCircle size={24} />
              </button></li>
          <li className=''>
              <Link to="/">Home</Link>
          </li>

          <li className=''>
              <Link to="/courses">All Courses</Link>
          </li>

          <li className=''>
              <Link to="/contact">Contact Us</Link>
          </li>

          <li className=''>
              <Link to="/about">About Us</Link>
          </li>
        </ul>
       </div>
      
      </div>

      { children }

      <Footer />
    </div>
  )
}

export default HomeLayout