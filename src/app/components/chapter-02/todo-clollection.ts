import {TodoItem} from '@/app/components/chapter-02/todo-item'

export class TodoCollection {
    private nextId: number = 1
    private itemMap = new Map<number, TodoItem>()

    constructor(
        public userName: string,
        public todoItems: TodoItem[]
    ) {
        todoItems.forEach(value => this.itemMap.set(value.id, value))
    }

    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task))
        return this.nextId
    }

    getTodoById(id: number): TodoItem | undefined {
        return this.itemMap.get(id)
    }

    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()]
            .filter(value => includeComplete || !value.complete)
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id)
        if(todoItem) {
            todoItem.complete = complete
        }
    }
}