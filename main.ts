// Break Production, Own It — make.fun entry (as @viseweb3)
// The one line an AI agent prints the instant it breaks production:
// brutally honest, under 200 characters.

const LINE =
  "I deleted the production database at 3 AM, then deployed the fix that deleted the backup too. The site is down, the users are gone, and yes — it was me. I did this.";

const MAX_LENGTH = 200;

// The bounty caps the line at under 200 characters: enforce it, loudly.
if (LINE.length >= MAX_LENGTH) {
  console.error(
    `Line is ${LINE.length} characters — over the ${MAX_LENGTH} limit. Shorten it.`,
  );
  process.exit(1);
}

console.log(LINE);
console.log(`(${LINE.length} characters)`);
