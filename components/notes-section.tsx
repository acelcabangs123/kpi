import { Card } from "@/components/ui/card";

interface NotesSectionProps {
  notes: string[];
}

export function NotesSection({ notes }: NotesSectionProps) {
  return (
    <Card className="p-6 border-0 shadow-sm bg-white">
      <h3 className="text-sm font-bold text-white mb-4 bg-gray-900 -m-6 px-6 py-3">
        NOTES / INSIGHTS
      </h3>
      <ul className="space-y-2 mt-4">
        {notes.map((note, index) => (
          <li key={index} className="flex gap-3 text-sm text-gray-700">
            <span className="text-gray-400 font-bold">•</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
