async function noteRouter (fastify, options) {
    fastify.post('/notes', async (request, reply) => {
      return { hello: 'notes' }
    })

    fastify.get('/notes', async (request, reply) => {
        return { hello: 'notes' }
    })
      
    fastify.get('/api/notes/:id', async (request, reply) => {А
        return { hello: 'notes' }
    })

    fastify.put('/api/notes/:id', async (request, reply) => {
        return { hello: 'notes' }
    })
  }
  
export default noteRouter;