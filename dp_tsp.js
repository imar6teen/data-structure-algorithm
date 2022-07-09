const nodes = [
  [0, 5, 10, 4], //A
  [5, 0, 11, 7], //B
  [10, 11, 0, 9], //C
  [4, 7, 9, 0], //D
];
let memo = [];

/**
 *
 * @param {Number} startNode
 * @param {Number[]} availableNodes
 */
function tsp(startNode, availableNodes) {
  if (availableNodes.length === 0) return 0;

  if (memo[startNode] && memo[startNode][availableNodes])
    return memo[startNode][availableNodes];

  let result = Infinity;
  for (let i = 0; i < availableNodes.length; i++) {
    let node = availableNodes[i];

    let newAvailableNodes = [...availableNodes];

    newAvailableNodes.splice(i, 1);

    let minValue = nodes[startNode][node] + tsp(node, newAvailableNodes);

    if (minValue < result) result = minValue;
  }
  if (!memo[startNode]) memo[startNode] = [];

  memo[startNode][availableNodes] = result;

  return result;
}

console.time("tsp");
console.log(tsp(0, [1, 2, 3]));
console.timeEnd("tsp");
