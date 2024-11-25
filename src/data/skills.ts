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
  { name: 'Java', stars: 4 },
  { name: 'Git', stars: 4 },
];

export default skills;
