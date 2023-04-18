import './randomQuotes.css';
import axios from "axios";
import {useState} from "react";
function App() {
 
  const quoteUrl="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw";
  const [quote,setQuote]=useState("");
  const [author,setAuthor]=useState("");
  const [color,setColor]=useState('#F08080');

  function generateQuote(){
    let x=Math.floor((Math.random()*100));

    axios.get(quoteUrl).then((res)=>{
      setQuote(res.data.quotes[x].quote);
      setAuthor(res.data.quotes[x].author);
      const colors=['#87CEFA','#778899','#6495ED','#DC143C','#8FBC8F','#FF69B4','#D2B48C','#B0E0E6','#8B0000','#FFFACD','8C8F8F','#9370DB','FFC0CB'];
      const randomColor=colors[Math.floor(Math.random()*colors.length)];
      setColor(randomColor);
      console.log(res);
    });
    
  }
  return (
    <div className='wrap' style={{backgroundColor:color}}>
        <center>
      <div className='inner-wrap' style={{backgroundColor:'white',width:'50%'}}>
        <h3 className='quote' style={{color:color,text:'bold'}}>{quote}</h3>
        <h4 className='author'style={{color:color}}>-{author}</h4>
        <button className='btn' onClick={generateQuote} style={{backgroundColor:color}}>New quote!</button>
      </div>
      </center>
    </div>
    
  );
 
}

export default App;