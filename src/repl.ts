import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';

export function cleanInput(input: string): string []{
    return input.trim().split(/\s+/);
}

export function startREPL(){

const rl = createInterface({
  input: stdin,
  output: stdout,
  prompt: 'Pokedex> ',
});

rl.prompt();


rl.on("line", (input) => {
    const clean = cleanInput(input);

    if (clean.length === 0) {
        rl.prompt();
        return;
    }

    console.log(`Your command was: ${clean[0]}`);
    rl.prompt();
});
}