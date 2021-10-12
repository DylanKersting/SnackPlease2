import React from 'react'


export const FoodTile = ({name, description, posted, author, id}) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="blog-box">
                <div className="post-media">
                    <a href={'/recipe/' + id} title="">
                        <img src={`/images/recipes/${id}/homePage.png`} alt="" className="img-fluid"/>
                        <div className="hovereffect"></div>
                    </a>
                </div>
                <div className="blog-meta big-meta">
                    <h4><a className="foodName" href={'/recipe/' + id} title="" style={{ fontFamily: 'Justforfun', fontSize: '1.75em' }}>{name || "Popcorn"}</a></h4>
                    <small><p href="#" title="">by {author || "Lauren"}</p></small>
                </div>
            </div>
        </div>
    )
}