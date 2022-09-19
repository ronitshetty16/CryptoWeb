
import React, { useState, useEffect } from 'react';
//import './App.css';
import Coin from './coin';



function App() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(()=>{
        const req = new XMLHttpRequest();
        req.open('GET','https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        req.send();
        req.onload= function(){
            const data = JSON.parse(this.responseText);
            setCoins(data);
            console.log(data);
        }
        req.onerror= function(){
            console.log("error, try again");
            console.log(this);
        }
    },[]);



    const searchchange=(e)=>{
        setSearch(e.target.value);
    }

    const filteredcoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <div className='coin-app'>
            <div className='coin-search'>
                <div className='coin-text'> Search a currency</div>
                <form>
                    <input className='coin-input' type='text' onChange={searchchange} placeholder='Search'></input>
                </form>
            </div>
            {filteredcoins.map(coin=>{
                return(
                    <Coin
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.total_volume}
                    volume={coin.market_cap}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                    />
                );
            })}
        </div>
    );
}




export default App;