import React, {Component} from 'react';
import {connect} from 'react-redux'

import { Modal, FormControl, Button } from 'react-bootstrap/lib'

import *  as StateActions from '../../Actions/state'

class ImportGraphModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedFile: null
        }
    }

    selectFile = event => {
        console.log(event.target.files[0])
        this.setState({selectedFile: event.target.files[0]})
    }

    importFile = () => {
        this.props.importFile(this.state.selectedFile)
        this.resetAndClose()
    }

    resetAndClose = () => {
        this.setState({selectedFile: null})
        this.props.onHide()
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.resetAndClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Import Graph from File</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{overflow:'hidden'}}>
                    <h3>Click blah blah</h3>
                    <FormControl
                        id="fileUpload"
                        type="file"
                        accept=".txt"
                        onChange={this.selectFile}
                    />
                    <Button disabled={!this.state.selectedFile} style={{float:'right'}} bsStyle="primary" onClick={this.importFile}>
                        Upload
                    </Button>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        importFile: file => dispatch(StateActions.loadInFile(file))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportGraphModal)