export type TUserCollectionItem = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type TUsersRequest = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TUserCollectionItem[];
};

export type TUserRequest = {
  data: TUserCollectionItem;
  support: {
    url: string;
    text: string;
  };
};
