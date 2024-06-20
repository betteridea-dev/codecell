// vite.config.ts
import { defineConfig } from "file:///Users/ankush/Developer/ARWEAVE/betteridea-dev/codecell/node_modules/vite/dist/node/index.js";
import react from "file:///Users/ankush/Developer/ARWEAVE/betteridea-dev/codecell/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import dts from "file:///Users/ankush/Developer/ARWEAVE/betteridea-dev/codecell/node_modules/vite-plugin-dts/dist/index.mjs";
import typescript from "file:///Users/ankush/Developer/ARWEAVE/betteridea-dev/codecell/node_modules/@rollup/plugin-typescript/dist/es/index.js";
import { typescriptPaths } from "file:///Users/ankush/Developer/ARWEAVE/betteridea-dev/codecell/node_modules/rollup-plugin-typescript-paths/dist/index.js";
var __vite_injected_original_dirname = "/Users/ankush/Developer/ARWEAVE/betteridea-dev/codecell";
var vite_config_default = defineConfig({
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "@betteridea/codecell",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      plugins: [
        typescriptPaths({
          preserveExtensions: true
        }),
        typescript({
          sourceMap: true,
          declaration: true,
          outDir: "dist"
        })
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [react(), dts()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYW5rdXNoL0RldmVsb3Blci9BUldFQVZFL2JldHRlcmlkZWEtZGV2L2NvZGVjZWxsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYW5rdXNoL0RldmVsb3Blci9BUldFQVZFL2JldHRlcmlkZWEtZGV2L2NvZGVjZWxsL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hbmt1c2gvRGV2ZWxvcGVyL0FSV0VBVkUvYmV0dGVyaWRlYS1kZXYvY29kZWNlbGwvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcbmltcG9ydCB0eXBlc2NyaXB0IGZyb20gXCJAcm9sbHVwL3BsdWdpbi10eXBlc2NyaXB0XCI7XG5pbXBvcnQgeyB0eXBlc2NyaXB0UGF0aHMgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi10eXBlc2NyaXB0LXBhdGhzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIG1hbmlmZXN0OiB0cnVlLFxuICAgIG1pbmlmeTogdHJ1ZSxcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnQGJldHRlcmlkZWEvY29kZWNlbGwnLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIHR5cGVzY3JpcHRQYXRocyh7XG4gICAgICAgICAgcHJlc2VydmVFeHRlbnNpb25zOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgdHlwZXNjcmlwdCh7XG4gICAgICAgICAgc291cmNlTWFwOiB0cnVlLFxuICAgICAgICAgIGRlY2xhcmF0aW9uOiB0cnVlLFxuICAgICAgICAgIG91dERpcjogXCJkaXN0XCIsXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBkdHMoKV0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VixTQUFTLG9CQUFvQjtBQUNwWCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHVCQUF1QjtBQUxoQyxJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixzQkFBc0I7QUFBQSxJQUN0QixLQUFLO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDN0MsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsU0FBUyxNQUFNO0FBQUEsSUFDdkM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixTQUFTO0FBQUEsUUFDUCxnQkFBZ0I7QUFBQSxVQUNkLG9CQUFvQjtBQUFBLFFBQ3RCLENBQUM7QUFBQSxRQUNELFdBQVc7QUFBQSxVQUNULFdBQVc7QUFBQSxVQUNYLGFBQWE7QUFBQSxVQUNiLFFBQVE7QUFBQSxRQUNWLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDMUIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
