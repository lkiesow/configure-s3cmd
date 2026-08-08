import {build} from 'esbuild'

await build({
  entryPoints: ['lib/main.js'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile: 'dist/index.js',
  sourcemap: true,
  banner: {
    // tunnel (a CJS transitive dep of @actions/core) calls require() for
    // node builtins, which esbuild's ESM output otherwise has no require in scope for
    js: "import {createRequire} from 'module'; const require = createRequire(import.meta.url);"
  }
})
