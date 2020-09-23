const tree = {
  name: "root",
  children: [
    {
      name: "c1",
      children: [
        {
          name: "c11",
          children: [],
        },
        {
          name: "c12",
          children: [],
        },
      ],
    },
    {
      name: "c2",
      children: [
        {
          name: "c21",
          children: [],
        },
        {
          name: "c22",
          children: [],
        },
      ],
    },
  ],
};

// DFS 深度优先遍历

function DFS(root) {
  if (!root) {
    return [];
  }
  let results = [];
  let stack = [root];
  while (stack.length) {
    let t = stack.pop();
    results.push(t.name);
    if (t.children && t.children.length) {
      t.children.reverse().forEach((item) => {
        stack.push(item);
      });
    }
  }

  return results;
}
DFS(tree);
