import React, {Component} from 'react';
import {connect} from 'react-redux'

import { Modal } from 'react-bootstrap/lib'

class ImportGraphModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Import Graph from File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Click blah blah</h3>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportGraphModal)