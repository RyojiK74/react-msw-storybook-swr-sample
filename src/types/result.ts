export type Result<T, E> = Ok<T> | Err<E> | ErrHandled;

export type Ok<T> = {
  ok: true;
  value: T;
};

export type Err<E> = {
  ok: false;
  error: E;
};

export type ErrHandled = {
  ok: false;
  error: null;
};
