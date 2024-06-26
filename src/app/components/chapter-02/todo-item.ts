// Before
// export class TodoItem {
//     public id: number
//     public task: string
//     public complete: boolean = false
//
//     public constructor(id: number, task: string, complete: boolean = false) {
//         this.id = id
//         this.task = task
//         this.complete = complete
//     }
//
//     public printDetails(): void {
//         console.log(`${this.id} ${this.task} ${this.complete ? this.complete : ''}`)
//     }
//
// }
// After
export class TodoItem {
    constructor(
        public id: number,
        public task: string,
        public complete: boolean = false,
    ) {}

    printDetails(): string {
        return `${this.id} ${this.task} ${this.complete ? '(complete)' : ''}`
    }
}
