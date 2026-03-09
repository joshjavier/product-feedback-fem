export interface ProductRequest {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  user: User;
  replies?: {
    content: string;
    replyingTo: string;
    user: User;
  }[];
}

export interface User {
  image: string;
  name: string;
  username: string;
}
