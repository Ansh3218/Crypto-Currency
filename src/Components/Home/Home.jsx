import React, { useContext, useEffect, useState } from 'react'
import './Home.css';
import { CoinContext } from '../Context/CoinContext.jsx'
import { Link } from 'react-router-dom'

const Home = () => {

  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event)=> {
    setInput(event.target.value);
    if(event.target.value === ""){
      setDisplayCoin(allCoin)
    }
  }
  const searchHandler = async (event) => {
   event.preventDefault();
   const coins = await allCoin.filter((item)=> {
    return item.name.toLowerCase().includes(input.toLowerCase())
   })
   setDisplayCoin(coins)
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <>
      <div className="Home-container">
        <div className="content">
          <h1>Largest <br /> Crypto Marketplace</h1>
          <p>Welcome to the World Largest cryptocurrency marketplace <br />Sign up to explore more about cryptos</p>
          <form onSubmit={searchHandler}>
            <span className='searchBar'>

              <input onChange={inputHandler} type="text" placeholder="Search Crypto...." value={input} list='coinlist' required/>

                <datalist id='coinlist'>
                  {allCoin.map((item, index) => (<option key={index} value={item.name}/>))}
                </datalist>
                
              <button type='submit'>Submit</button>
            </span>
          </form>
        </div>
        <div className="crypto-table">
          <div  className="table-layout">
            <p>#</p>
            <p>Coins</p>
            <h4>Price</h4>
            <h4 style={{textAlign:"center"}}>24H Change</h4>
            <h4 className='market-cap'>MarketCap</h4>
          </div>
          
          {
              displayCoin.slice(0,10).map((item, index)=> (
                <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                  <p>{item.market_cap_rank}</p>
                  <div>
                    <img src={item.image} alt="" />
                    <p>{item.name + " - " + item.symbol}</p>
                  </div>
                  <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                  <p style={{textAlign:"center"}} className={item.price_change_percentage_24h>0?"green": "red"}>   {Math.floor(item.price_change_percentage_24h*100)/100}</p>
                  <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                </Link>
              ))
          }
          </div>
      </div>
    </>
  )
}
export default Home