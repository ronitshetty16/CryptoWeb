const req = new XMLHttpRequest();

req.onload = function(){
    console.log("Successfull")
    const data = JSON.parse(this.responseText);
    console.log(data[0].current_price)
    for(let i of data){
        console.log(i.name)
        const child1 = document.createElement('div');
        const child2 = document.createElement('div');
        child1.innerHTML = `<h1>${i.name}</h1>`;
        child2.innerHTML = `<p>${i.current_price}</p>`;
        const box=document.getElementsByClassName('main-bit')
        box[0].appendChild(child1)
        box[0].appendChild(child2)
    }

    //document.getElementsByClassName("bit-text").innerHTML = `${data[0].name}`
    
    
    
}

req.onerror = function (){
    console.log("ERROR")
    console.log(this);
}

req.open('GET','https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
req.send();

//fetch('https://api.cryptonator.com/api/full/btc-usd')

export default function Bit(){
    return(
        <div className="main-bit">
            
            
        </div>
    ) 
}