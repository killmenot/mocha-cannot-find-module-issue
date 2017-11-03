#!/bin/bash

(cd vendor/mocha && npm install)
(cd vendor/mocha && make mocha.js)