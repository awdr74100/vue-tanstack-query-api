import { projects } from "../../data";

export default defineEventHandler(async (e) => {
  await delay(500);

  return projects;
});
