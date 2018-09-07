
export function loadInFile (file) {
    return (dispatch, getState) => {
        // turn this file into a graph ds
        // graph = {
        //     nodes: [
        //         {id: 1, label: 'jimmyboy@enron'},
        //         {id: 2, label: 'Node 2'},
        //         {id: 3, label: 'Node 3'},
        //         {id: 4, label: 'Node 4'},
        //         {id: 5, label: 'Node 5'}
        //     ],
        //     edges: [
        //         {from: 1, to: 2},
        //         {from: 1, to: 3},
        //         {from: 2, to: 4},
        //         {from: 2, to: 5}
        //     ]
        // };
        
        dispatch({
            type: "LOAD_IN_GRAPH",
            graph: file
        })
    }
}