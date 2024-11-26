// data/skills.ts
export interface Skill {
  name: string;
  stars: number;
}

const skills: Skill[] = [
  { name: 'React', stars: 5 },
  { name: 'TypeScript', stars: 4 },
  { name: 'Node.js', stars: 4 },
  { name: 'PostgreSQL', stars: 4 },
  { name: 'Python', stars: 5 },
  { name: 'Express.js', stars: 4 },
  { name: 'Ajax', stars: 4 },
  { name: 'CI/CD', stars: 4 },
  { name: 'Kubernetes', stars: 3 },
  { name: 'C#', stars: 2 },
  { name: 'C', stars: 1 },
];

export default skills;
