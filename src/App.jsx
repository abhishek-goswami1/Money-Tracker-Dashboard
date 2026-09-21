import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <div className="flex w-full">
      {/* Side Navigation */}
      <NavigationBar />
      
      {/* Main Content Area will go here */}
      <main className="grow">
        <Dashboard/>
      </main>
    </div>
  )
}

export default App

