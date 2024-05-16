export default defineEventHandler(async (e) => {
  await delay(500);

  const tests = [
    {
      id: 1,
      title: "AAAAA",
      updatedAt: new Date().toLocaleString(),
    },
    {
      id: 2,
      title: "BBBBB",
      updatedAt: new Date().toLocaleString(),
    },
  ];

  return tests;
});
