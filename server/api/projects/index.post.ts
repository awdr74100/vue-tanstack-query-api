import type { Project } from "../../data";
import { projects } from "../../data";

export default defineEventHandler(async (e) => {
  await delay(500);

  const body = await readBody<Project>(e);

  projects.push(body);

  return body;
});
