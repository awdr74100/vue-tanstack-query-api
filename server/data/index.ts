export interface Project {
  id: number;
  title: string;
}

export interface Test {
  id: number;
  projectId: number;
  title: string;
  status: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "專案 A",
  },
  {
    id: 2,
    title: "專案 B",
  },
  {
    id: 3,
    title: "專案 C",
  },
];

export const tests: Test[] = [
  {
    id: 1,
    projectId: 2,
    title: "英文測驗",
    status: 0,
  },
  {
    id: 2,
    projectId: 3,
    title: "數學測驗",
    status: 1,
  },
  {
    id: 3,
    projectId: 1,
    title: "國文測驗",
    status: 2,
  },
  {
    id: 4,
    projectId: 2,
    title: "自然測驗",
    status: 0,
  },
  {
    id: 5,
    projectId: 3,
    title: "社會測驗",
    status: 1,
  },
  {
    id: 6,
    projectId: 1,
    title: "專業測驗",
    status: 2,
  },
];
