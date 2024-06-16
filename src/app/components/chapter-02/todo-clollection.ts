import {TodoItem} from '@/app/components/chapter-02/todo-item'

export class TodoCollection {
    private nextId: number = 1

    constructor(
        public userName: string,
        public todoItems: TodoItem[]
    ) {}

    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++
        }
        this.todoItems.push(new TodoItem(this.nextId, task))
        return this.nextId
    }

    getTodoById(id: number): TodoItem | undefined {
        return this.todoItems.find(value => value.id === id)
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id)
        if(todoItem) {
            todoItem.complete = complete
        }
    }
}