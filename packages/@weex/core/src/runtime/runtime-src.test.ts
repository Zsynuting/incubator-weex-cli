// The MIT License (MIT)

//   Copyright (c) 2016-3016 Infinite Red, Inc.

//   Permission is hereby granted, free of charge, to any person obtaining a copy
//   of this software and associated documentation files (the "Software"), to deal
//   in the Software without restriction, including without limitation the rights
//   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//   copies of the Software, and to permit persons to whom the Software is
//   furnished to do so, subject to the following conditions:

//   The above copyright notice and this permission notice shall be included in all
//   copies or substantial portions of the Software.

//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//   SOFTWARE.

import * as expect from 'expect'
import { Runtime } from './runtime'

test('runs a command explicitly', async () => {
  const r = new Runtime()
  r.addCoreExtensions()
  expect(r.defaultPlugin).toBeFalsy()
  r.addDefaultPlugin(`${__dirname}/../fixtures/good-plugins/threepack`)
  expect(r.defaultPlugin).toBeTruthy()
  const toolbox = await r.run('three')

  expect(toolbox.plugin).toBeTruthy()
  expect(toolbox.command).toBeTruthy()
  expect(toolbox.plugin.name).toBe('3pack')
  expect(toolbox.command.name).toBe('three')
  expect(toolbox.result).toEqual([1, 2, 3])
})

test('runs a command via passed in args', async () => {
  const r = new Runtime()
  r.addCoreExtensions()
  expect(r.defaultPlugin).toBeFalsy()
  r.addDefaultPlugin(`${__dirname}/../fixtures/good-plugins/threepack`)
  expect(r.defaultPlugin).toBeTruthy()
  const toolbox = await r.run('three')
  expect(toolbox.plugin).toBeTruthy()
  expect(toolbox.command).toBeTruthy()
  expect(toolbox.plugin.name).toBe('3pack')
  expect(toolbox.command.name).toBe('three')
  expect(toolbox.result).toEqual([1, 2, 3])
})
