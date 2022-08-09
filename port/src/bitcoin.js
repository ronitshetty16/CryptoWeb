const req = new XMLHttpRequest();

req.onload = function(){
    console.log("Successfull")
    const data = JSON.parse(this.responseText);
    console.log(data.bpi.USD.rate);
    document.querySelector('#val').innerHTML = `<p>${data.bpi.USD.rate}</p>`
}

req.onerror = function (){
    console.log("ERROR")
    console.log(this);
}

req.open('GET','https://api.coindesk.com/v1/bpi/currentprice.json')
req.send();

//fetch('https://api.cryptonator.com/api/full/btc-usd')

export default function Bit(){
    return(
        <div className="main-bit">
            <h2 className="bit-text">Bitcoin</h2>
            <p id="val"></p>
        </div>
    ) 
}