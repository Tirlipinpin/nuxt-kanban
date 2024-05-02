export enum FieldType {
  text,
  number,
  select,
  enum
}

export interface Field {
  type: FieldType
  label: string
  value: string | number
}

export interface FormBlock {
  type: string
  fields: Field[]
  title: string
}

export interface WhiteboardBlock {
  type: string
  content: string
  title: string
}

export interface Attachment {
  id: string
  title: string
  size: string
  type: string
}

export interface AttachmentsBlock {
  type: string
  attachments: Attachment[]
  title: string
}

export interface Message {
  content: string
  sender: string
  creationDate: string
}

export interface SocialBlock {
  type: string
  messages: Message[]
  title: string
}

export enum CardBlockType {
  form,
  whiteboard,
  attachments,
  social
}

export type CardBlock = FormBlock | WhiteboardBlock | AttachmentsBlock | SocialBlock