'use client'
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

export default function Dashboard() {
  const supabase = createClient()

  const addSampleLog = async () => {
    const sampleLog = {
      date: new Date().toISOString().split('T')[0], // Just the date part 'YYYY-MM-DD'
      foods: [
        {
          name: "Chicken Breast",
          servings: 1,
          nutrition: {
            calories: 165,
            protein: 31,
            carbs: 0,
            fat: 3.6
          }
        },
        {
          name: "Brown Rice",
          servings: 1,
          nutrition: {
            calories: 216,
            protein: 5,
            carbs: 45,
            fat: 1.8
          }
        }
      ],
      daily_totals: {
        calories: 381,
        protein: 36,
        carbs: 45,
        fat: 5.4
      },
      note: "Sample log with chicken and rice"
    }

    const { data, error } = await supabase
      .from('daily_logs')
      .insert(sampleLog)
      .select()

    if (error) {
      console.error('Error inserting log:', error)
    } else {
      console.log('Successfully added log:', data)
    }
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <Button onClick={addSampleLog}>Add record</Button>
    </div>
  );
}