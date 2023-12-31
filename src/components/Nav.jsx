import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
      <>
       <div className="h-28 bg-[#eef3f3] flex px-36 justify-between">
            <img className="mt-2 mb-2" src="/image/Ministry_of_Law_and_Justice.svg.png" alt="" />
            <img src="https://lawmin.gov.in/sites/all/themes/landj/images/swach-bharat.png" alt="" />
        </div>

       
    <header className={`flex items-center w-full bg-white overflow`}>
      <div className="container">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-60">
            <a href="/#" className="block w-full">
              <img
                src="/image/Logo_new.png"
                alt="logo"
                className="w-[90px] h-[90px] mx-28 "
              />
            </a>
          </div>
          <div className="flex items-center justify-between w-full px-4">
            <div>
              <button
                // @click="navbarOpen = !navbarOpen"
                onClick={() => setOpen(!open)}
                // :className="navbarOpen && 'navbarTogglerActive' "
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex text-blue-600 ">
                  <ListItem 
                    navItemStyles="text-dark"
                    NavLink="/#home"
                  >
                    Home
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/#about"
                  >
                    About
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/#vision"
                  >
                    Our Idea
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/#categories"
                  >
                    Categories
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/#FAQ"
                  >
                    FAQs
                  </ListItem>
                </ul>
              </nav>
            </div>
            <div className="justify-end hidden pr-16 mr-28 sm:flex lg:pr-0">
            <div className="flex items-center gap-5">
                <p className="font-semibold">Download</p>
            <button className="border to-black px-6 py-2 bg-[#2e34d2] text-white rounded-lg">Login/register</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;

const ListItem = ({ children, navItemStyles, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>
    
  );
};
