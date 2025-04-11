import React from 'react'
import { assets } from '../assets/assets'
import MyButton from './MyButton'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation();

  return (
        <div>
            <div className="flex justify-between pt-8 pl-8 pr-9">
                <img src={assets.logo} alt="" className="w-36 h-14" />
                <ul className="flex gap-16 text-gray-300 font-extralight cursor-pointer text-xl">
                    <Link to="/">
                        <li className={`hover:text-white ${location.pathname === "/" ? "font-bold" : ""}`}>
                            Vaults
                        </li>
                    </Link>
                    <Link to="/leaderboards">
                        <li className={`hover:text-white ${location.pathname === "/leaderboards" ? "font-bold" : ""}`}>
                            Leaderboard
                        </li>
                    </Link>
                    <Link to="/myPortfolio">
                        <li className={`hover:text-white ${location.pathname === "/myPortfolio" ? "font-bold" : ""}`}>
                            My Portfolio
                        </li>
                    </Link>
                </ul>
                <MyButton />
            </div>
        </div>
  )
}

export default Navbar