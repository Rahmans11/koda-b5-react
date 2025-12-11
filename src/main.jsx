import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Provider as ReduxProvider } from 'react-redux'
import Router from './Router'
import reduxStore from "./redux/store";
import UserProvider from './contexts/UserProvider'


createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <ReduxProvider store={reduxStore}>
      <UserProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </UserProvider>
    </ReduxProvider>
  </StrictMode>,
)
