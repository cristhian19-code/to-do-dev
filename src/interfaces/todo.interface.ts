export interface Todo {
    id: number;
    description: string;
    done: boolean;
}

export type TypeFilter = "all" | "active" | "completed";
