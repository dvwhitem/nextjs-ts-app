import * as React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export default function Home() {
    return (
        <section className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Essential TypeScript 5, Third Edition
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                    <div className="p-4 md:p-6">
                        <h3 className="text-lg font-semibold group-hover:text-primary">
                            Chapter 02
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                            Discover how serverless technologies can
                            revolutionize your development process, enabling
                            faster deployment and enhanced scalability.
                        </p>
                        <div className="mt-4">
                            <a href={'/chapter-02'}>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="group rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                    <div className="p-4 md:p-6">
                        <h3 className="text-lg font-semibold group-hover:text-primary">
                            Chapter 03
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                            Dive deep into the world of React Hooks and learn
                            how to leverage these powerful tools to build more
                            efficient and maintainable applications.
                        </p>
                        <div className="mt-4">
                            <a href={'/chapter-03'}>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="group rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                    <div className="p-4 md:p-6">
                        <h3 className="text-lg font-semibold group-hover:text-primary">
                            Chapter 04
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                            Discover proven techniques to optimize your Next.js
                            application, from code splitting and image
                            optimization to server-side rendering and more.
                        </p>
                        <Collapsible className="mt-4">
                            <CollapsibleTrigger className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80">
                                Read More{' '}
                                <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform group-[&[data-state=open]]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                <p>
                                    Next.js has become a popular choice for
                                    building high- performance React
                                    applications, thanks to its powerful
                                    features and optimizations. However, to
                                    truly unlock the full potential of your
                                    Next.js application, it\'s essential to
                                    understand and implement various performance
                                    optimization techniques.
                                </p>
                                <p className="mt-4">
                                    In this article, we\'ll explore a range of
                                    strategies to optimize your Next.js
                                    application for maximum performance. We\'ll
                                    cover topics such as code splitting, image
                                    optimization, server-side rendering, and
                                    more. By implementing these best practices,
                                    you\'ll be able to significantly improve the
                                    loading times, responsiveness, and overall
                                    user experience of your application.
                                </p>
                                <p className="mt-4">
                                    Whether you\'re building a complex web
                                    application or a simple marketing site,
                                    these optimization techniques will help you
                                    deliver a lightning-fast and highly
                                    efficient experience to your users.
                                </p>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </div>
                <div className="group rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                    <div className="p-4 md:p-6">
                        <h3 className="text-lg font-semibold group-hover:text-primary">
                            Chapter 05
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                            Discover how Tailwind CSS can revolutionize your
                            front-end development workflow, enabling you to
                            build beautiful and responsive user interfaces with
                            ease.
                        </p>
                        <Collapsible className="mt-4">
                            <CollapsibleTrigger className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80">
                                Read More{' '}
                                <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform group-[&[data-state=open]]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                <p>
                                    Tailwind CSS has been gaining immense
                                    popularity in the front-end development
                                    community, and for good reason. This
                                    utility-first CSS framework offers a unique
                                    approach to styling your web applications,
                                    empowering you to build beautiful and
                                    responsive user interfaces with ease.
                                </p>
                                <p className="mt-4">
                                    In this comprehensive guide, we'll dive deep
                                    into the world of Tailwind CSS, exploring
                                    its core concepts, features, and best
                                    practices. We'll cover topics such as
                                    responsive design, customization, and
                                    integrating Tailwind with popular front-end
                                    frameworks like React and Vue.js.
                                </p>
                                <p className="mt-4">
                                    By the end of this guide, you'll have a
                                    solid understanding of Tailwind CSS and be
                                    equipped to leverage its power to streamline
                                    your front-end development workflow. You'll
                                    be able to create visually stunning and
                                    highly performant applications that deliver
                                    an exceptional user experience.
                                </p>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </div>
            </div>
        </section>
    )
}
