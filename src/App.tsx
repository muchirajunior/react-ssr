import Todos from "./todos";

export default  function App() {

  return (
    <>      
      <div className="container">
        <h1 className="text-center my-5">Welcome to React SSR</h1>
        <p className="text-center">This is a simple server-side rendered React application.</p>
        <Todos />
      </div>
    </>
  )
}

