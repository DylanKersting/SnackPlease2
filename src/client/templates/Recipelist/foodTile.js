import React from 'react'


export const FoodTile = ({name, description, posted, author}) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="blog-box">
                <div className="post-media">
                    <a href="food-single.html" title="">
                        <img src="/images/placeHolder.jpg" alt="" className="img-fluid"/>
                        <div className="hovereffect"></div>
                    </a>
                </div>
                <div className="blog-meta big-meta">
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <h4><a className="foodName" href="food-single.html" title="">{name || "Popcorn"}</a></h4>
                    <p>{description || 'This is food.'}</p>
                    <small><p href="food-single.html" title="">{posted || '2021-01-01'}</p></small>
                    <small><p href="#" title="">by {author || "Lauren"}</p></small>
                </div>
            </div>
        </div>
    )
}