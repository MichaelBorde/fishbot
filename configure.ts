import { Bot } from "grammy";

main().catch(console.error);

async function main() {
  const bot = new Bot(process.env.BOT_TOKEN || "", {
    client: {
      environment: "test",
    },
  });
  await bot.api.deleteMyCommands();
  await bot.api.setMyCommands([
    { command: "start", description: "Start the fish bot" },
    { command: "slap", description: "Slap someone with a trout" },
  ]);
  await bot.api.setMyName("Fishbot");
  await bot.api.setMyDescription("Fist bot");
  await bot.api.setMyShortDescription("This is the fish bot");
}
