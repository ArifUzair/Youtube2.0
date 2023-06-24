import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css"
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/store";
import { Provider } from "react-redux";
import MainContainer from "./Components/MainContainer";
import WatchContainer from "./Components/WatchContainer";


const appRouter= createBrowserRouter([{
  path:'/',
  element:<Body/>,
children:[
  {
    path:'/',
    element:<MainContainer/>
  },
  {
    path:'/watch',
    element:<WatchContainer/>
  }
]
}])

function App() {
  return (
    <>
    <Provider store ={store}>
      <Head/>
      <RouterProvider router={appRouter}/>
      </Provider>
    </>
  );
}

export default App;
