// Тип DeepReadonly робить всі властивості об'єкта доступними тільки для читання, включаючи вкладені об'єкти.
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Тип DeepRequireReadonly робить всі властивості об'єкта доступними тільки для читання та обов'язковими, включаючи вкладені об'єкти.
type DeepRequireReadonly<T> = {
  readonly [P in keyof T]-?: T[P] extends object
    ? DeepRequireReadonly<T[P]>
    : T[P];
};

// Тип UpperCaseKeys перетворює всі ключі об'єкта на верхній регістр.
type UpperCaseKeys<T> = {
  [P in keyof T as Uppercase<string & P>]: T[P];
};

// Тип ObjectToPropertyDescriptor перетворює кожне значення об'єкта на дескриптор властивості.
type ObjectToPropertyDescriptor<T> = {
  [P in keyof T]: PropertyDescriptor;
};
