/**
 * Model User
 *
 */
export type User = {
    id: string
    owner: string
    name: string | null
    email: string
}

/**
 * Model Todo
 *
 */
export type Todo = {
    id: string
    owner: string
    title: string
    complete: boolean | null
    userId: string | null
}