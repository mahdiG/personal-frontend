export type Conversation = {
  ID: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: Date | null;
  Title: string;
  Messages: Message[];
};

export type Message = {
  ID: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: Date | null;
  Content: string;
  ConversationID: string;
  Role: string;
};

export type CreateMessageResponse = {
  User: Message;
  Assistant: Message;
};

export function initConversation(): Conversation {
  return {
    ID: "",
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    DeletedAt: null,
    Title: "",
    Messages: [],
  };
}
