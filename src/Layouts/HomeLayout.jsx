import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import Footer from '../Components/Footer';

function HomeLayout({ children }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for checking is user is loged in
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  // for dispaying the option
  const role = useSelector((state)=> state?.auth?.role)

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

  function handleLogout(){
    e.preventDefault();

    // const res = await dispatchEvent(logout)

    Navigate('/');
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
      
      <div className="drawer-side w-0">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-[48] h-[100%] sm:w-80 bg-base-300 text-base-content relative" >
          <li className='w-fit absolute right-2 z-50'>
              <button onClick={hideDrawer}>
                 <AiFillCloseCircle size={24} />
              </button></li>
          <li className=''>
              <Link to="/">Home</Link>
          </li>

          {isLoggedIn && role == 'ADMIN' &&(
            <li>
              <Link to="/admin/dashboard">Admin Dashboard</Link>
            </li>
          )}

          <li className=''>
              <Link to="/courses">All Courses</Link>
          </li>

          <li className=''>
              <Link to="/contact">Contact Us</Link>
          </li>

          <li className=''>
              <Link to="/about">About Us</Link>
          </li>

          {!isLoggedIn && (
            <li className='relative top-4  bottom-4 w-[90%]'>
            <div className='w-full flex items-center justify-center'>
              <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                <Link to='/login'>Login</Link>
              </button>
              <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                <Link to='/login'>Sign Up</Link>
              </button>
            </div>
            </li> 
          )}

          {isLoggedIn && (
            <li className='relative top-4 bottom-4 w-[90%]'>
            <div className='w-full flex items-center justify-center'>
              <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                <Link to='/user/profile'>Profile</Link>
              </button>
              <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                <Link onClick={handleLogout}>Logout</Link>
              </button>
            </div>
            </li> 
          )}


        </ul>
       </div>
      
      </div>

      { children }

      <Footer />
    </div>
  )
}

export default HomeLayout