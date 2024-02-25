// fastify.register(jwt, { secret: 'test', verify: { extractToken: (request) => request.headers.customauthheader } })



// fastify.post('/sign', function (request, reply) {
//     return reply.jwtSign(request.body)
//       .then(function (token) {
//         return { token }
//       })
//   })
  
//   fastify.get('/verify', function (request, reply) {
//     // token avaiable via `request.headers.customauthheader` as defined in fastify.register above
//     return request.jwtVerify()
//       .then(function (decodedToken) {
//         return reply.send(decodedToken)
//       })
//   })