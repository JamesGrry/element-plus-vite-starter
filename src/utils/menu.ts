
// export interface MenuNode {
//   id: number | string
//   pid: number | string
//   children?: MenuNode[]
//   [key: string]: any
// }

// export function buildMenuTree(
//   items: MenuNode[],
//   options?: {
//     idKey?: string
//     pidKey?: string
//   }
// ): MenuNode[] {
//   const { idKey = 'id', pidKey = 'pid' } = options || {}
//   const tree: MenuNode[] = []
//   const map = new Map<string | number, MenuNode>()

//   // 建立映射表并初始化children
//   items.forEach(item => {
//     map.set(parseInt(item[idKey]), { ...item, children: [] })
//   })
//   // 构建树结构
//   items.forEach(item => {
//     const node = map.get(parseInt(item[idKey]))!
//     const parentId = item[pidKey]

//     if (parentId === -1) {
//       tree.push(node)
//     } else {
//       const parent = map.get(parentId)
//       parent?.children?.push(node)
//     }
//   })

//   return tree
// }

// 原始数据项类型（来自接口）
interface RawMenuItem {
  id: number | string;
  pid: number | string;
  title: string;
  sort?: number;
  [key: string]: any; // 允许额外属性
}

// 树节点类型
export interface MenuNode extends RawMenuItem {
  id: string;        // 确保是字符串
  pid: string;
  children?: MenuNode[];
}

// 构建树状结构函数
export function buildMenuTree(items: RawMenuItem[]): MenuNode[] {
  const nodeMap = new Map<string, MenuNode>();
  const tree: MenuNode[] = [];

  // 第一步：统一处理 ID/PID 类型并初始化 map
  items.forEach(item => {
    const node: MenuNode = {
      ...item,
      id: String(item.id),
      pid: String(item.pid),
      children: []
    };
    nodeMap.set(node.id, node);
  });

  // 第二步：构造树结构
  nodeMap.forEach(node => {
    if (node.pid === '-1') {
      tree.push(node);
    } else {
      const parent = nodeMap.get(node.pid);
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(node);
      }
    }
  });

  // 第三步：可选排序（根据 sort 字段）
  const sortTree = (nodes: MenuNode[]) => {
    nodes.sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0));
    nodes.forEach(child => {
      if (child.children && child.children.length > 0) {
        sortTree(child.children);
      }
    });
  };
  sortTree(tree);

  return tree;
}

const buildTreee=()=>{ 
}