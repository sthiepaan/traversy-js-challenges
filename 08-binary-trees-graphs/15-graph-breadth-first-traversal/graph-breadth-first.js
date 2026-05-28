const Queue = require('./queue');

function breadthFirstTraversal(graph, startingVertex) {
	const queue = new Queue();
	const visited = {};
	const values = [];

	queue.enqueue(startingVertex);

	visited[startingVertex] = true;

	while (!queue.isEmpty()) {
		let curr = queue.dequeue();

		values.push(curr);

		for (const vertex of graph.adjacencyList[curr]) {
			if (!visited[vertex]) {
				queue.enqueue(vertex);

				visited[vertex] = true;
			}
		}
	}

	return values;
}

module.exports = breadthFirstTraversal;
