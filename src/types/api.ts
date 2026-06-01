// The raw response that fetch receives
export type FetchResponse<DataType> = {
  ok: boolean;
  status: number;
  data: ApiResponse<DataType>;
};

// The response that API/backend sends
export type ApiResponse<DataType> = {
  data: DataType;
  error: ResponseError;
  meta: ResponseMeta;
};

export type ResponseError = {
  message: string;
  fields: ResponseErrorField[];
};

export type ResponseErrorField = {
  name: string;
  tag: string;
  message: string;
};

export type ResponseMeta = {
  requestID: string;
  pagination: Pagination;
  warning: string[];
};

// Pagination provides pagination metadata.
export type Pagination = {
  // Page is the current page number (1‑based).
  page: number;

  // PageSize is the maximum number of items per page.
  pageSize: number;

  // TotalItems is the total number of items across all pages.
  totalItems: number;

  // TotalPages is the total number of pages (TotalItems / PageSize).
  totalPages: number;
};
