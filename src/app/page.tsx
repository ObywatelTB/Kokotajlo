export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Kokotajlo
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            French AI Agents Platform
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800">
              ✅ Frontend and Backend are running successfully!
            </p>
            <p className="text-sm text-blue-600 mt-2">
              Frontend: http://localhost:4000 | Backend: http://localhost:4001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
