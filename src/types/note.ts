import { Tag } from "./tag";

export type File = {
  ID: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  Name: string;
  URL: string;
};

export type Note = {
  ID: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  Title: string;
  Content: string;
  Tags: Tag[];
  Files?: File[] | null;
};

export function initNote(): Note {
  return {
    ID: "",
    Title: "",
    Content: "",
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    Files: [],
    Tags: [],
  };
}
