import { storyblokInit, apiPlugin } from '@storyblok/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

storyblokInit({
  accessToken: 'rlC8YKv8jb4tPyat2hZv3wtt',
  use: [apiPlugin],
  components: {
  },
})