import * as React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronLeftIcon } from '@radix-ui/react-icons'

export default function Chapter02() {
    console.log('First output')
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
            </section>
        </React.Fragment>
    )
}
