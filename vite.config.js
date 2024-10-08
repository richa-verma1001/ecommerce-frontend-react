import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/.
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_AUTHO_DOMAIN': JSON.stringify(env.REACT_APP_AUTHO_DOMAIN),
      'process.env.REACT_APP_AUTHO_CLIENT_ID': JSON.stringify(env.REACT_APP_AUTHO_CLIENT_ID)

    },
    plugins: [react()],
  }
})
