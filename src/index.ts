// FIXME:
// @ts-nocheck
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export * from "./netease"
export * from "./api_protocol"
export * from "./qq"
export * from "./entities"
export * from "./models"