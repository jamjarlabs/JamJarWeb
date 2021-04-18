#!/bin/bash

[ ! -d "./specs" ] && echo "Missing specs directory, run yarn download-specs to download them" && exit 1

protoc -I=specs --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=paths=source_relative:./src/network $(find specs/ -iname '*.proto')
