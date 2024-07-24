import React, { Component } from 'react'

export class NewsItem extends Component {
    // // agr hum JS me class bna rhe h to constructor ka use kr skte h.. aur constructor tb run hota h jb is class ka object bnta h..
    // constructor(){
    //     super();//compulsory h k super class k constructor ko call krna h else error ayegii hii..
    // }

    render() {
        // JS me ek destructuring ka concept hota h means this.props ek object h aur usme se title aur description dono pull kr k available kra di jayegi... in simple words propos agr ek object h to usme se hum particular value nikalna chahe to nikal sakte h..
        // {title,description}=this.props;

        let {title,description,imgUrl,newsUrl}=this.props;//newsUrl will uniquely identify each news..
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    {/* if any image url is null then replacing it by default url.. */}
                    <img src={imgUrl?imgUrl:"https://images.indianexpress.com/2024/07/India-vs-Nepal-W.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl}  target="_blank" className="btn btn-primary btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
