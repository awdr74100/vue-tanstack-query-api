import { tests } from "../../data";

export default defineEventHandler(async (e) => {
  await delay(500);

  const { pid } = getQuery<{ pid: string }>(e);

  if (pid) {
    return tests.filter((test) => test.projectId === pid);
  } else {
    return tests;
  }
});
