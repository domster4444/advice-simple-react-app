import React, { Component } from "react";
import "./Home.css";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.inputRef=React.createRef()
    this.state = {
      advice: null
    }
  }


  componentDidMount(){

    var A = "https://api.adviceslip.com/advice";

    fetch(A).then((resp) => {
      resp.json().then((result) => {
        // console.warn(result)

        // this.setState({testvalue:result.base})
        this.setState({ advice: result.slip.advice });
      });
    });

  

  }

  one() {
    var A = "https://api.adviceslip.com/advice";

    fetch(A).then((resp) => {
      resp.json().then((result) => {
        // console.warn(result)

        // this.setState({testvalue:result.base})
        this.setState({ advice: result.slip.advice });
      });
    });

  

  }


  render() {
    return (
      <div>
        <div className="grid-container">
          <main className="main">
            <div className="cardmain">
              <p style={{ color: "white" }}>
              
              {this.state.advice}</p>
              <div className='buttondiv'>
              <button  onMouseDown={()=>this.one()} onMouseUp={()=>timeoutfunction()} className='buttoncls'>Need More Advice?</button>
            </div>
              </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;

setTimeout(function(){ 
  document.getElementsByClassName("buttoncls")[0].style.opacity="0"
  
  
  
     }, 1);
     setTimeout(function(){ 
      document.getElementsByClassName("buttoncls")[0].style.opacity="1"
      
      
      
         }, 5000);



function timeoutfunction(){
  setTimeout(function(){ 
document.getElementsByClassName("buttoncls")[0].style.opacity="0"



   }, 1);
   setTimeout(function(){ 
    document.getElementsByClassName("buttoncls")[0].style.opacity="1"
    
    
    
       }, 5000);
    
    
    


  }