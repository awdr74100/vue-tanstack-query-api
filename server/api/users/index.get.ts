import { users } from "../../data";

export default defineEventHandler(async (e) => {
  await delay(500);

  const { page } = getQuery<{ page: string }>(e);

  return users.slice((+page - 1) * 10, +page * 10);
});
