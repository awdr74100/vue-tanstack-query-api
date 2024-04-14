import { projects } from "../../data";

export default defineEventHandler(async (e) => {
  await delay(500);

  const { id } = getRouterParams(e);

  const project = projects.find((project) => project.id === id);

  return project;
});
