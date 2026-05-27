const Stack = require('./stack');

function depthFirstTraversal(graph, startingVertex) {
	if (!graph.adjacencyList[startingVertex]) {
		return [];
	}

	const stack = new Stack();
	const visited = {};
	const values = [];

	stack.push(startingVertex);

	visited[startingVertex] = true;

	while (!stack.isEmpty()) {
		const curr = stack.pop();

		values.push(curr);

		for (const vertex of graph.adjacencyList[curr]) {
			if (!visited[vertex]) {
				stack.push(vertex);

				visited[vertex] = true;
			}
		}
	}

	return values;
}

module.exports = depthFirstTraversal;
