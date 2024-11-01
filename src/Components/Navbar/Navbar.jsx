import React, {useContext} from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import Arrow from '../../assets/arrow_icon.png'
import { CoinContext } from '../../Components/Context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { setCurrency } = useContext(CoinContext)

    const currencyHandler = (event)=> {
        switch(event.target.value){
            case "usd":{
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
            case "eur":{
                setCurrency({name: "eur", symbol: "€"});
                break;
            }
            case "inr":{
                setCurrency({name: "inr", symbol: "₹"});
                break;
            }
            default :{
                setCurrency({name: "usd", symbol: "$"});
                break;
            }

        }
    }
    return (
        <>
            <div className="Nav-Container">
                <div className="Navbar">
                    <Link to={"/"}>
                    <img src={Logo} className='logo' />
                    </Link>
                    <nav>
                        <ul>
                            <Link to={'/'}><li>Home</li></Link>
                            <Link to={'/about'}><li>About</li></Link>
                            <Link to={'/features'}><li>Features</li></Link>
                            <Link to={'/blog'}><li>Blog</li></Link>
                        </ul>
                    </nav>
                    <div className="Select">
                        <select onChange={currencyHandler}>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="inr">INR</option>
                        </select>
                        <button>Sign up <img src={Arrow} /> </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar