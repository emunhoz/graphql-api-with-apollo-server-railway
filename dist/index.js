"use strict";

// src/index.ts
function log({ message }) {
  console.log(message);
  return message;
}
log({ message: "Hello" });
