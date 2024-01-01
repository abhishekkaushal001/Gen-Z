export default interface Response<T> {
  count: number;
  next: string | null;
  results: T[];
}
