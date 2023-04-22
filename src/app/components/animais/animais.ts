export interface Animal {

  id: number;

  postDate: Date;

  url: string;

  description: string;

  allowComments: string;

  likes: number;

  comments: number;

  userId: number;

}

export type Animais = Array<Animal>;
