export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const todos: Todo[] = [
  { id: '1', title: 'todo1', completed: false },
  { id: '2', title: 'todo2', completed: false }
];