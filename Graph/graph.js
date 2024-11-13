class Graph{
    constructor(){
        this.adjacencyList = [];
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1)
    }

    // Helper methods
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
        }
    }

    hasEdge(vertex1, vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return;
        }

        for(let adjacencyList of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacencyList);
        }
        delete this.adjacencyList[vertex]
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C")

graph.display()
console.log(graph.hasEdge("A", "C"))

// graph.removeEdge("A", "B");
// graph.display()

graph.removeVertex("B")
graph.display()



//Everymethod have constant time complexity except for removeVertex it has O(n)