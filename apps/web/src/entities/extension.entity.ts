export interface Extension {
  id: string;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export class ExtensionEntity implements Extension {
  constructor(data: Extension) {
    this.id = data.id;
    this.logo = data.logo;
    this.name = data.name;
    this.description = data.description;
    this.isActive = data.isActive;
  }

  id: string;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}
