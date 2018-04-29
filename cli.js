#!/usr/bin/env node

'use strict';

const scripts = require('./');
const logEnabled = true;

scripts.watch(logEnabled);
