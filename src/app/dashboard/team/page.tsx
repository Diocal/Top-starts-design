import { ScrollArea } from "~/components/ui/scroll-area"

export default function Team() {
    return (

        <div className="flex h-screen bg-gray-100">
        {/* Main content */}
        <ScrollArea className="flex-1 p-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Teams</h2>
          <p>Here's a list of your current projects:</p>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              Project {i + 1}
            </div>
          ))}
        </div>
        </ScrollArea>
      </div>

)
}