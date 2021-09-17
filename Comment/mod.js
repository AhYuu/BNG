module.exports = {
  
  name: "mods",
  code: `
$description[ Mods Successfully ✅!]
$addCmdReactions[✅]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];$message]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];$message]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];$message]]
$setGlobalUserVar[diamond;$sum[$getGlobalUserVar[diamond];$message]]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];$message]]
$setGlobalUserVar[pizza;$sum[$getGlobalUserVar[pizza];$message]]
$setGlobalUserVar[hm;$sum[$getGlobalUserVar[hm];$message]]
$setGlobalUserVar[car;$sum[$getGlobalUserVar[car];$message]]
$setGlobalUserVar[house;$sum[$getGlobalUserVar[house];$message]]
$setGlobalUserVar[drink;$sum[$getGlobalUserVar[drink];$message]]
$setGlobalUserVar[fishrod;$sum[$getGlobalUserVar[fishrod];$message]]
$setGlobalUserVar[fuel;$sum[$getGlobalUserVar[fuel];$message]]
$setGlobalUserVar[crypto1;$sum[$getGlobalUserVar[crypto1];$message]]
$setGlobalUserVar[crypto2;$sum[$getGlobalUserVar[crypto2];$message]]
$setGlobalUserVar[crypto3;$sum[$getGlobalUserVar[crypto3];$message]]
$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop];$message]]
$onlyForIDs[$botOwnerID;{description:❌ You are not my Developer}{color:RANDOM}]
`
}