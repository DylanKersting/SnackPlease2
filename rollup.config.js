import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy'

const isProduction = !process.env.ROLLUP_WATCH

const plugins = [
  babel({ 
    exclude: 'node_modules/**',
    presets: ['@babel/preset-react', '@babel/env']
  }),
  resolve(),
  postcss({
    extensions: [ '.css', 'scss' ]
  }),
  copy({
    targets: [
      { src: 'src/client/index.html', dest: 'dist' },
      { src: 'src/client/extensions/*', dest: 'dist/extensions' },
      { src: 'src/client/resources/*', dest: 'dist/resources' }
    ]
  }),
  json(),
  commonjs({
    namedExports: {
      'react': ['isValidElement', 'Children', 'cloneElement', 'useRef', 'useEffect', 'useState','memo',
      'Fragment', 'createElement', 'forwardRef', 'createRef', 'useMemo', 'createContext', 'findDOMNode',
      'useCallback', 'useImperativeHandle', 'useContext', 'useLayoutEffect', 'Component', 'useDebugValue', 'useReducer'],
      'react-dom': ['findDOMNode', 'createPortal', 'render', 'unmountComponentAtNode'],
      'prop-types': ['elementType'],
      'react-js': ['isValidElementType', 'isValidElement', 'isFragment'],
      'react-is': ['ForwardRef', 'Memo', 'isFragment', 'isValidElementType']
    }
  })

]
if(isProduction){
  plugins.push(replace({
    'hackjobgames': 'https://hackjob.games/backendServer',
    'process.env.NODE_ENV': JSON.stringify('production')
  }))
}
else {
  plugins.push(replace({
    'process.env.NODE_ENV': JSON.stringify('development')
  }))
}
export default {
  plugins,
  input: 'src/index.js',
  output: {
    file: `./dist/client.js`,
    format: 'iife',
    name: 'HackjobWebsite',
    sourcemap: true,
    intro: 'const global = window;'
  }
}