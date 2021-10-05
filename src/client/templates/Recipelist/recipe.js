import React from 'react'
import axios from 'axios/dist/axios'
import marked from 'marked'
import { useParams } from 'react-router'

export const Recipe = () => {
    const params = useParams()

    const [state, setState] = React.useState({
        markdown: '',
        pull: true,
        id: params.id
    })

    if (state.pull) {
        axios.get(`/api/recipe/${state.id}`).then(res => {
            setState({ ...state, ...res.data, pull: false })
        })
    }


    return (

        <section >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="blog-title-area">

                                <h3>{state.title}</h3>
                            </div>{/* end title */}

                            <div className="blog-content" dangerouslySetInnerHTML={{ __html: marked(state.markdown) }} />

                            <div className="blog-title-area">
                                <div className="tag-cloud-single">
                                    <span>Tags</span>
                                    <small><a href="#" title="">lifestyle</a></small>
                                    <small><a href="#" title="">colorful</a></small>
                                    <small><a href="#" title="">trending</a></small>
                                    <small><a href="#" title="">another tag</a></small>
                                </div>{/* end meta */}

                                <div className="post-sharing">
                                    <ul className="list-inline">
                                        <div id="fb-root"></div>
                                            <div className="fb-share-button" 
                                            data-href="https://snackplease.com" 
                                            data-layout="button_count">
                                            </div>
                                          <script type="text/javscript" id="facebookScript" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0"/>
                                          <a class="twitter-share-button" href="https://twitter.com/intent/tweet" data-url={window.location.href} data-size="large" data-text="Check out this tasty snack!">
                                            Tweet This
                                          </a>
                                    </ul>
                                </div>{/* end post-sharing */}
                            </div>{/* end title */}

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-spot clearfix">
                                        <div className="banner-img">
                                            <img src="upload/banner_06.jpg" alt="" className="img-fluid"/>
                                        </div>{/* end banner-img */}
                                    </div>{/* end banner */}
                                </div>{/* end col */}
                            </div>{/* end row */}

                            <hr className="invis1"/>

                            <div className="custombox prevnextpost clearfix">
                                <div className="row">
                                    Insert Authur Pic
                                </div>{/* end row */}
                            </div>{/* end author-box */}            
                        </div>{/* end page-wrapper */}
                    </div>{/* end col */}

                </div>{/* end row */}
            </div>{/* end container */}
        </section>
    )
}





