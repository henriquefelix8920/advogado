import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const agentDir = join(root, ".github", "agents");
const skillDir = join(root, ".github", "skills");
const required = ["AGENTS.md", ".devcontainer/devcontainer.json", ".github/instructions/web-studio.instructions.md", "docs/MASTER-PROMPT-WEB-STUDIO-v4.md"];
const errors = [];

for (const file of required) if (!existsSync(join(root, file))) errors.push(`Arquivo ausente: ${file}`);

const agents = existsSync(agentDir) ? readdirSync(agentDir).filter((f) => f.endsWith(".agent.md")) : [];
const skills = existsSync(skillDir) ? readdirSync(skillDir).filter((d) => existsSync(join(skillDir, d, "SKILL.md"))) : [];

for (const file of agents) {
  const text = readFileSync(join(agentDir, file), "utf8");
  if (!text.startsWith("---\n") || !text.includes("\nname:") || !text.includes("\ndescription:")) errors.push(`Frontmatter incompleto: ${file}`);
}
for (const name of skills) {
  const text = readFileSync(join(skillDir, name, "SKILL.md"), "utf8");
  if (!text.startsWith("---\n") || !text.includes(`\nname: ${name}`)) errors.push(`Skill inválida: ${name}`);
}

if (errors.length) {
  console.error("WEB STUDIO validation: FAILED");
  errors.forEach((e) => console.error("- " + e));
  process.exitCode = 1;
} else {
  console.log("WEB STUDIO validation: OK");
  console.log(`Agentes: ${agents.length} | Skills: ${skills.length}`);
  console.log("Verificação estrutural apenas; não confirma runtime do Copilot nem testa a aplicação.");
}
