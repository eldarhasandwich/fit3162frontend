import React, {Component} from 'react';
import {connect} from 'react-redux'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap/lib'
import { Graph } from 'react-d3-graph'
import ImportGraphModal from './ImportGraphModal';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            importModalVisible: false,
            hierarchicalLayout: false
        }
    }

    openImportModal = () => {
        this.setState({importModalVisible: true})
    }

    closeImportModal = () => {
        this.setState({importModalVisible: false})
    }

    toggleHierarchicalLayout = () => {
        this.setState({hierarchicalLayout: !this.state.hierarchicalLayout})
    }

    data = {
        nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
        links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
    };
      
    getOptions = () => {
        return {
            layout: {
                hierarchical: this.state.hierarchicalLayout
            },
            edges: {
                color: "#000000"
            }
        }
    };
      
    events = {
        select: function(event) {
            var { nodes, edges } = event;
        }
    }

    render() {
        return (
            <div style={{
                height: '100vh',
                width: '100vw',
            }}>
                <ImportGraphModal
                    show={this.state.importModalVisible}
                    onHide={this.closeImportModal}
                />

                <Navbar inverse style={{
                    borderRadius: '0',
                    height: '50px',
                    margin: '0',
                }}>
                <Navbar.Header>
                    <Navbar.Brand>
                        FIT3142 SNA
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem onClick={this.openImportModal}>
                        Import Graph
                    </NavItem>

                    <NavDropdown title="Statistics">
                        <MenuItem>Show None</MenuItem>
                        <MenuItem>Closeness Centrality</MenuItem>
                        <MenuItem>Betweenness Centrality</MenuItem>
                        <MenuItem>Closeness Centrality</MenuItem>
                        <MenuItem>Closeness Centrality</MenuItem>
                        <MenuItem>Closeness Centrality</MenuItem>                        
                    </NavDropdown>

                    <NavDropdown title="Display Options">
                        <MenuItem 
                            onClick={this.toggleHierarchicalLayout}>
                                {(this.state.hierarchicalLayout) ? 'Disable Hierarchical Layout' : 'Enable Hierarchical Layout'}
                        </MenuItem>                        
                    </NavDropdown>
                </Nav>
                <Navbar.Text pullRight>Made by Eldar and Andrew</Navbar.Text>
                </Navbar>

                {
                    (!this.props.state.loadedGraph) 
                        ? 
                            <div style={{textAlign: 'center', marginTop: '60px'}}> 
                                <h1>No Graph!</h1>
                                <p>Use <b>Import Graph</b> to load in a Graph to view.</p>
                            </div>
                        :
                            <Graph 
                                config={{
                                    width:window.innerWidth,
                                    height:window.innerHeight - 50
                                }}
                                id="graph-id"
                                data={this.props.state.loadedGraph}
                            />
                }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {state: state.state}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)