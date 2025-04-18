import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mdx from '@mdx-js/rollup';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      // MDX 配置选项
      providerImportSource: '@mdx-js/react', // 使用 MDX React 提供者
      remarkPlugins: [
        // 可以添加 remark 插件，例如：
        // remarkGfm, // GitHub Flavored Markdown
      ],
      rehypePlugins: [
        // 可以添加 rehype 插件
      ],
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.mdx'], // 添加 .mdx 扩展名
  },
});
