import * as React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import inquirer from 'inquirer'

import { TodoItem } from '@/app/components/chapter-02/todo-item'
import { TodoCollection } from '@/app/components/chapter-02/todo-clollection'

enum Commands {
    Quit = 'Quit',
}

function promptUser(): void {
    inquirer
        .prompt({
            type: 'list',
            name: 'command',
            message: 'Choose option',
            choices: Object.values(Commands),
        })
        .then((answer) => {
            if (answer['command'] != Commands.Quit) {
                promptUser()
            }
        })
}

export default function Chapter02() {
    const todos = [
        new TodoItem(1, 'Buy Flowers'),
        new TodoItem(2, 'Get Shoes'),
        new TodoItem(3, 'Collect tickets'),
        new TodoItem(4, 'Call Joe', true),
    ]

    const collection: TodoCollection = new TodoCollection('Adam', todos)
    // const newId = collection.addTodo('Go for run')
    // const todoItem = collection.getTodoById(newId)
    collection.addTodo('My custom task')
    collection.removeComplete()
    const result = collection
        .getTodoItems(true)
        .map((value) => value.printDetails())

    promptUser()

    return (
        <React.Fragment>
            <section className="container mx-auto">
                <div className="hidden space-y-6 p-10 pb-16 md:block">
                    <div className="my-1">
                        <Button asChild>
                            <Link href="/">
                                <ChevronLeftIcon className="h-4 w-4" />
                                Home
                            </Link>
                        </Button>
                    </div>
                    <div className="space-y-0.5">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Chapter 02
                        </h2>
                        <p className="text-muted-foreground">Open console</p>
                    </div>
                    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                        <div className="flex-1 lg:max-w-2xl"> </div>
                    </div>
                </div>
                <div className="text-2xl">
                    {collection.userName}s Todo List{' '}
                    {collection.getItemCounts().incomplete}
                </div>
                <div className="my-2 tracking-tight">
                    {result.map((value) => (
                        <div key={value}>{value}</div>
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}
