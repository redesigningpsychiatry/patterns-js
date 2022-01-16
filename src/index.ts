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


export class NodeDefinition {
  id = 0;
  name = '';
  iconName = '';
  explanation = '';
  hyphenatedName = '';

  contextCat: ContextCategory;
  roleCat: RoleCategory;
  isCustom: boolean;

  constructor(
    contextCat: ContextCategory,
    roleCat: RoleCategory,
    isCustom = true,
  ) {
    this.contextCat = contextCat;
    this.roleCat = roleCat;
    this.isCustom = isCustom;
  }
}
