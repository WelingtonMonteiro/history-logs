const chai = require('chai');
const { expect, should, assert } = require('chai')
const sinon = require('sinon')
const sinonTest = require('sinon-test')
const test = sinonTest(sinon)
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);

global.should = should
global.expect = expect
global.assert = assert
global.sinon = sinon
global.test = test

