/**
 * @flow
 */

import Router from 'koa-router'
import { createReadStream } from 'fs'
import { join } from 'path'

const router = new Router()

/**
 * Let the client handle all other routes
 */

router.get('*', async ctx => {
  const path = join(__dirname, '..', '..', '..', 'client', 'dist', 'index.html')
  ctx.response.body = createReadStream(path)
  ctx.response.type = 'text/html'
})

export default router
