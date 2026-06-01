import type { Tag } from "./tag";

export type Task = {
  ID: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: Date | null;
  Title: string;
  Description: string;
  DoneAt?: string | null;
  ParentID?: string;
  Subtasks: Task[];
  ScheduledFrom?: string;
  ScheduledTo?: string;
  Score: number;
  TargetScore: number;
  ScoreUnit: string;
  Tags: Tag[];
};

export function initTask(): Task {
  return {
    ID: "",
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    Title: "",
    Description: "",
    DoneAt: null,
    Score: 0,
    TargetScore: 1,
    ScoreUnit: "",
    Tags: [],
    Subtasks: [],
  };
}
