import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Side Navigation */}
      <NavigationBar />
      
      {/* Main Content Area will go here */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back!</h1>
        {/* Your dashboard cards and graphs will go here */}
      </main>
    </div>
  )
}

export default App

