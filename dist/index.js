"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/index.ts
var import_reflect_metadata = require("reflect-metadata");

// src/main/graphql/apollo/setup.ts
var import_server = require("@apollo/server");
var import_type_graphql2 = require("type-graphql");
var import_standalone = require("@apollo/server/standalone");

// src/main/graphql/resolvers/hello-world.ts
var import_type_graphql = require("type-graphql");
var HelloWorldResolver = class {
  async log(message) {
    return `Hey there! This is the message: ${message}`;
  }
};
__decorateClass([
  (0, import_type_graphql.Query)(() => String),
  __decorateParam(0, (0, import_type_graphql.Arg)("message", (type) => String))
], HelloWorldResolver.prototype, "log", 1);
HelloWorldResolver = __decorateClass([
  (0, import_type_graphql.Resolver)()
], HelloWorldResolver);

// src/main/graphql/apollo/setup.ts
async function setupApolloServer() {
  const schema = await (0, import_type_graphql2.buildSchema)({
    resolvers: [HelloWorldResolver]
  });
  const server = new import_server.ApolloServer({ schema });
  const { url } = await (0, import_standalone.startStandaloneServer)(server, {
    listen: { port: Number(process.env.PORT) || 4e3 }
  });
  console.log(`\u{1F680} Server ready at ${url}`);
}

// src/index.ts
async function main() {
  await setupApolloServer();
}
main();
