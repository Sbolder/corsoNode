'use strict'

const fp = require('fastify-plugin')
const MongoDB = require('fastify-mongodb')
const AuthMongoJwt = require('@matteo.collina/fastify-auth-mongo-jwt')

module.exports = fp(async function (fastify, opts) {
    const mongoOpts = Object.assign({}, {
        useNewUrlParser: true,
        url: process.env.MONGODB_URL
    }, opts.mongodb)
    fastify.register(MongoDB, mongoOpts)


})
