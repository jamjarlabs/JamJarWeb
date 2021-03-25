#!/bin/bash

rm -rf specs
mkdir -p specs

curl -L -o specs/protobuf.zip "https://github.com/jamjarlabs/jamjar-relay-server/releases/download/v0.2.0/protobuf.zip"
unzip specs/protobuf.zip -d "specs/"
rm -f specs/protobuf.zip
