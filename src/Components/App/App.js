import React, {Component} from 'react';
import {connect} from 'react-redux'

import * as pjson from '../../../package.json'

class App extends Component {
    render() {
        return (
            <div>
                <h1
                    style={{textAlign:"center", marginBottom:"2px"}}
                >
                    <code>
                        FIT3162 Frontend
                    </code>
                </h1>

                <p
                    style={{textAlign:"center", marginTop:"2px"}}
                >
                    <code>@{pjson.version}</code>
                </p>

                <p
                    style={{textAlign:"center"}}
                >
                    If you're seeing this, everything is working!
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)