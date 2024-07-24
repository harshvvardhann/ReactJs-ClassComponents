import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    // IF WE USE THIS SAMPLE JASON FILE THEN A PERSON VISITING OUR APP AFTER 10 YEARS WON'T GET THE LATEST NEWS SO FOR THAT WE CAN USE FETCH API TO HIT THE ENDPOINT OF API SO THAT WE WILL GET THE LATEST NEWS...
    constructor(){
        super();

        // setting state in constructor.
        //creating object 
        this.state={
            articles:[],
            loading:false,
            page:1,//if the api has multiple pages then given by default 1st page to load and will create buttons for next and previous page.
            totalResults:9824
        };//current class articles
    }

    // FLOW OF CODE: AT FIRST CONSTRUCTOR WILL RUN THEN RENDER METHOD AND THEN COMPONENTDIDMOUNT METHOD.

    //Changing articler using componentDidMount()-this method will run after the render() method run.
    // async apni body k andr wait kr skta h kuch promises k resolve hone ka..
    // async This makes componentDidMount an asynchronous function.
    // Without async and await, you would need to handle promises using .then() and .catch() for error handling.
    // Using async and await simplifies the code and makes it look synchronous, which can be easier to read and understand
    async componentDidMount(){
        // url to fetch news..page parameter takes us to that page if there exists much data to load on that page, pageSize parameter tells us that how much content should load on a particular page so that out of total results we load x amount of content on a page then we can get the length of number of pages we could have so that we can disable the next button at right time.
        let url="https://newsapi.org/v2/everything?q=tesla&from=2024-06-24&sortBy=publishedAt&apiKey=10beedbf27ec47b29ea334b5f0a0c352&page=1&pageSize=20";

        // Using fetch API-it returns promise.
        // The fetch function returns a promise. The await keyword pauses the execution of the componentDidMount function until the promise is resolved. The resolved value (the response object) is then assigned to the data variable.
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);    
        this.setState({articles:parsedData.articles});
    }

    handelNextButton= async()=>{

        let url=`https://newsapi.org/v2/everything?q=tesla&from=2024-06-24&sortBy=publishedAt&apiKey=10beedbf27ec47b29ea334b5f0a0c352&page=${this.state.page+1}&pageSize=20`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);    
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles
        });
    }

    handelPrevButton=async()=>{
        if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

        }else{
        let url=`https://newsapi.org/v2/everything?q=tesla&from=2024-06-24&sortBy=publishedAt&apiKey=10beedbf27ec47b29ea334b5f0a0c352&page=${this.state.page-1}&pageSize=20`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);    
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles
        });
    }
    }


  render() {
    return (
        // looping throught the articles array for each newsItem
      <div className='container my-3'>
        {/* <h1 style={{textAlign:"center"}}>NewsMoney-Top Headlines</h1>=>as we are using bootstrap so we won't use style instead we'll use classes. */}
        <h1 className="text-center">NewsMoney-Top Headlines</h1>
        <div className="row">
        {this.state.loading ? (
            <p>Loading articles...</p>
          ) : (
        this.state.articles.map((element,index)=>{
            {/* 12-columns grid in bootstrap so 4 columns le legi agr ek to 4*3=12 yani ki ye row pura ka pura space le legi container k andr..*/}
           return <div className="col-md-4" key={index}>
            {/* The slice method in JavaScript is used to extract a portion of an array or string and returns it as a new array or string, without modifying the original array or string. It can take two arguments: the start index (inclusive) and the end index (exclusive). */}
<NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>          
        })
    )}
        </div>
        <div className="container d-flex justify-content-between">
            {/* as we are in class so calling the function using this keyword.. */}
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPrevButton}>&larr;Previous</button>
            {/* total results=9824 and pageSize is 20 so 9824/20=490 approx*/}
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handelNextButton}>Next&rarr;</button>
        </div>  
      </div>
    )
  }
}

export default News
