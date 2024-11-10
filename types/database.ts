// types/database.ts
export interface DailyLog {
    id: string
    user_id: string
    date: string
    foods: Food[] | null
    daily_totals: DailyTotals | null
    note: string | null
    created_at: string
    updated_at: string | null
}

export interface Macros {
    calories: number
    protein: number
    carbs: number
    fat: number
}

export interface Food {
    name: string
    servings: number
    nutrition: Macros
}

export type DailyTotals = Macros