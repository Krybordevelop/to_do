// Import the framework and instantiate it
import Fastify from 'fastify'
import noteRouter from './src/routes/noteRoutes.js'
// import { Mongoose } from 'mongoose'
// import jwt from "@fastify/jwt"

const fastify = Fastify({
    logger: true
  })
  
fastify.register(noteRouter)

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}