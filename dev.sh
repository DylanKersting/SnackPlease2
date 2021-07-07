cp ./src/client/index.html ./dist/index.html
./node_modules/rollup/dist/bin/rollup -c -w -i 'src/client/index.js' -o 'dist/index.js'