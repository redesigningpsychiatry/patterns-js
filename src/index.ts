export interface NodeCategory {
  id: number;
  name: string;
  isBuildingBlock: boolean;
}


export interface RoleCategory extends NodeCategory {
}


export interface ContextCategory extends NodeCategory {
  iconName: string;
}


export function hello(): string {
  return 'Hello world!';
}

