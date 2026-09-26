#!/usr/bin/env node
// user-story-writer
// Usage: node index.js <path-to-input-file>
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { loadModel, completion, unloadModel, LLAMA_3_2_1B_INST_Q4_0 } from '@qvac/sdk';

const inputPath = process.argv[2] || "feature-idea.example.txt";

if (!existsSync(inputPath)) {
  console.error('Usage: node index.js <path-to-input-file>');
  process.exit(1);
}

const input = readFileSync(inputPath, 'utf-8').trim();

console.log('Loading language model on-device...');
const modelId = await loadModel({ modelSrc: LLAMA_3_2_1B_INST_Q4_0 });

const prompt = `Turn the feature idea below into 3-5 user stories in 'As a..., I want..., so that...' form, each with 2-4 Given/When/Then acceptance criteria. Note any open questions at the end. Markdown.

${input}`;

const { tokenStream } = completion({ modelId, history: [{ role: 'user', content: prompt }], stream: true });

let output = '';
console.log('\nResult:\n');
for await (const token of tokenStream) {
  process.stdout.write(token);
  output += token;
}
console.log();

writeFileSync("user-stories.md", output.trim() + '\n');
console.log('\nSaved to user-stories.md');

await unloadModel({ modelId });
