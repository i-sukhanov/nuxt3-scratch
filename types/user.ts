export type TUserCollectionItem = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type TUserRequest = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TUserCollectionItem[];
};
