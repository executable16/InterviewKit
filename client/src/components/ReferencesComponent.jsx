import React, { Component } from 'react'

import './css/ReferencesComponent.css'

class ReferencesComponent extends Component {
    render() {
        return (
            <div className = "ref-list" id = "grad">
                <div className="ref">
                    <div className="ref_image">
                        <iframe src="https://www.youtube.com/embed/videoseries?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P" 
                            title="introduction" width = "100%" height="100%" 
                            frameBorder="0" allow="accelerometer; autoplay; 
                            clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="ref">
                    <div className="ref_image">
                        <iframe src="https://www.youtube.com/embed/videoseries?list=PL2_aWCzGMAwL3ldWlrii6YeLszojgH77j" 
                            title="introduction" width = "100%" height="100%" 
                            frameBorder="0" allow="accelerometer; autoplay; 
                            clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="ref">
                    <div className="ref_image">
                        <iframe src="https://www.youtube.com/embed/vidoseries?list=PLiQ766zSC5jN42O1DBalnkom5y2LXtnnK" 
                                title="introduction" width = "100%" height="100%" 
                                frameBorder="0" allow="accelerometer; autoplay; 
                                clipboard-write; encrypted-media; gyroscope; 
                                picture-in-picture" allowFullScreen>
                            </iframe>
                    </div>
                </div>
                <div className="ref">
                    <div className="ref_image">
                        <iframe src="https://www.youtube.com/embed/videoseries?list=PLiQ766zSC5jMZgWWdqy_6TpLivRGQaFD-" 
                                title="introduction" width = "100%" height="100%" 
                                frameBorder="0" allow="accelerometer; autoplay; 
                                clipboard-write; encrypted-media; gyroscope; 
                                picture-in-picture" allowFullScreen>
                            </iframe>
                    </div>
                </div>
                <div className="ref">
                    <div className="ref_image">
                        <iframe src="https://www.youtube.com/embed/videoseries?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" 
                                title="introduction" width = "100%" height="100%" 
                                frameBorder="0" allow="accelerometer; autoplay; 
                                clipboard-write; encrypted-media; gyroscope; 
                                picture-in-picture" allowFullScreen>
                            </iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReferencesComponent
