import React from 'react'
import axios from 'axios/dist/axios'
import marked from 'marked'
import { useParams } from 'react-router'

export const Recipe = () => {
    const params = useParams()

    const [state, setState] = React.useState({
        markdown: '',
        pull: true,
        id: params.id,
        tags: []
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

                                <h1>{state.title}</h1>
                                <h4>by: {state.author}</h4>
                            </div>{/* end title */}

                            <div className="blog-content" dangerouslySetInnerHTML={{ __html: marked(state.markdown) }} />

                            <div className="blog-title-area">
                                {/* <div className="tag-cloud-single">
                                    <span>Tags: </span>
                                    {state.tags.forEach(tag => <small><a href="/?" title="">{tag}</a></small>)
                                    }
                                </div> Implement tags here*/}

                                <div className="post-sharing">
                                    <ul className="d-flex">
                                        <div id="fb-root"></div>
                                            <div className="fb-share-button" 
                                              data-href="https://snackplease.com" 
                                              data-layout="button_count">
                                            </div>
                                          <script type="text/javscript" id="facebookScript" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0"/>
                                          <a className="twitter-share-button" href="https://twitter.com/intent/tweet" data-url={window.location.href} data-size="large" data-text="Check out this tasty snack!">
                                            Tweet This
                                          </a>
                                    </ul>
                                </div>{/* end post-sharing */}
                            </div>{/* end title */}

                            <hr className="invis1"/>         
                        </div>{/* end page-wrapper */}
                    </div>{/* end col */}

                </div>{/* end row */}
            </div>{/* end container */}
        </section>
    )
}





