import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(), splitVendorChunkPlugin() ],

  resolveDependencies: (filename, deps, { hostId, hostType }) =>
  {
    return deps.filter(condition)

  },
},
)
