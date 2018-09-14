
export function loadInFile (file) {
    return (dispatch, getState) => {
        console.log(file.name)
        fetch(file.name)
            .then(response => response.text())
            .then(text => {
                // console.log(text)
                let graph = { nodes: [], links: [] }
                let lines = text.split('\n')
                // console.log(lines)

                let nodeNames = {}

                for (let index = 0; index < lines.length; index++) {
                    const line = lines[index];
                    // console.log(line)
                    const words = line.split(' ')
                    // console.log(words)
                    if (words.length === 2) { // node
                        graph.nodes.push( {id: words[1]} )
                        nodeNames[words[0]] = words[1]
                    }
                    if (words.length === 3) { // edge
                        graph.links.push( {source: nodeNames[words[0]], target: nodeNames[words[1]]} )
                    }
                }
 
                console.log(graph)
                dispatch({
                    type: "LOAD_IN_GRAPH",
                    graph: graph
                })
            })
    }
}