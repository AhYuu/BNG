module.exports = {
  
  name: "remods",
  code: `
$description[ Remove Mods Successfully ✅!]
$addCmdReactions[✅]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$message]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$message]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$message]]
$setGlobalUserVar[diamond;$sub[$getGlobalUserVar[diamond];$message]]
$setGlobalUserVar[fish;$sub[$getGlobalUserVar[fish];$message]]
$setGlobalUserVar[pizza;$sub[$getGlobalUserVar[pizza];$message]]
$setGlobalUserVar[hm;$sub[$getGlobalUserVar[hm];$message]]
$setGlobalUserVar[car;$sub[$getGlobalUserVar[car];$message]]
$setGlobalUserVar[house;$sub[$getGlobalUserVar[house];$message]]
$setGlobalUserVar[drink;$sub[$getGlobalUserVar[drink];$message]]
$setGlobalUserVar[fishrod;$sub[$getGlobalUserVar[fishrod];$message]]
$setGlobalUserVar[fuel;$sub[$getGlobalUserVar[fuel];$message]]
$setGlobalUserVar[crypto1;$sub[$getGlobalUserVar[crypto1];$message]]
$setGlobalUserVar[crypto2;$sub[$getGlobalUserVar[crypto2];$message]]
$setGlobalUserVar[crypto3;$sub[$getGlobalUserVar[crypto3];$message]]
$setGlobalUserVar[laptop;$sub[$getGlobalUserVar[laptop];$message]]
$onlyForIDs[$botOwnerID;{description:❌ You are not my Developer}{color:RANDOM}]
`
}