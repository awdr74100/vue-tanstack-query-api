import type { Test } from "../../data";
import { tests } from "../../data";

export default defineEventHandler(async (e) => {
  await delay(500);

  const body = await readBody<Test>(e);

  tests.push(body);

  return body;
});
