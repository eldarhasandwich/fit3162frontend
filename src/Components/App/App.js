import React, {Component} from 'react';
import {connect} from 'react-redux'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap/lib'
import Graph from 'react-graph-vis'

class App extends Component {

    graph = {
        nodes: [
            {id: 1, label: 'Node 1'},
            {id: 2, label: 'Node 2'},
            {id: 3, label: 'Node 3'},
            {id: 4, label: 'Node 4'},
            {id: 5, label: 'Node 5'}
        ],
        edges: [
            {from: 1, to: 2},
            {from: 1, to: 3},
            {from: 2, to: 4},
            {from: 2, to: 5}
        ]
    };
      
    options = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: "#000000"
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
                    <NavItem>
                        Import Graph
                    </NavItem>

                    <NavDropdown title="Statistics">
                        <MenuItem>Closeness Centrality</MenuItem>
                        <MenuItem>Betweenness Centrality</MenuItem>
                        <MenuItem>Closeness Centrality</MenuItem>
                        <MenuItem>Closeness Centrality</MenuItem>
                        <MenuItem>Closeness Centrality</MenuItem>                        
                    </NavDropdown>
                </Nav>
                <Navbar.Text pullRight>Made by Eldar and Andrew</Navbar.Text>
                </Navbar>

                <Graph 
                    style={{
                        width: '100vw',
                        height: '100%',
                    }}
                    graph={this.graph} 
                    options={this.options} 
                    events={this.events}
                />

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