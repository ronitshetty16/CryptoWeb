const req = new XMLHttpRequest();

req.onload = function(){
    console.log("Successfull")
    const data = JSON.parse(this.responseText);
    console.log(data[0].current_price)
  
    for(let i of data){
        console.log(i.name)
        const main=document.createElement('div');

        const Name = document.createElement('h1');
        const Price = document.createElement('p');
        const Symbol = document.createElement('p');
        const Volume = document.createElement('p');
        const Image = document.createElement('img');
        const Market = document.createElement('p');
        
        Name.classList.add('coin-name');
        Price.classList.add('coin-price');
        Symbol.classList.add('coin-symbol');
        Volume.classList.add('coin-volume');
        Image.classList.add('coin-symbol');
        Market.classList.add('coin-market');

        Name.innerHTML = `${i.name}`;
        Price.innerHTML = `${i.current_price}`;
        Symbol.innerHTML = `${i.symbol}`;
        Volume.innerHTML = `${i.total_volume.toLocaleString()}`;
        Image.src = `${i.image}`
        Market.innerHTML = `${i.market_cap.toLocaleString()}`;

        const box=document.getElementsByClassName('main-bit')
        
        main.appendChild(Name)
        main.appendChild(Price)
        main.appendChild(Symbol)
        main.appendChild(Volume)
        main.appendChild(Image)
        main.appendChild(Market)

        box[0].appendChild(main);
        
    }

    //document.getElementsByClassName("bit-text").innerHTML = `${data[0].name}`
    
    
    
}

req.onerror = function (){
    console.log("ERROR")
    console.log(this);
}

req.open('GET','https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
req.send();

//fetch('https://api.cryptonator.com/api/full/btc-usd')

export default function Bit(){
    return(
        <div className="main-bit">
            
            
        </div>
    ) 
}











/*const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};














export default Coin;*/
