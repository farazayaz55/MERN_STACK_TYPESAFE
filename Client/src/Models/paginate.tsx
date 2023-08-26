//a generic type
export  type Paginate<T> = {
    results: Array<T>;
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
  };
  