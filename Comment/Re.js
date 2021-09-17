module.exports = {
  
  name: "remover",
  aliases: ['re','r'],
  code: `
$description[
$username Successfully Remover Cash 💵 $$getGlobalUserVar[money].]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$message]]
$argsCheck[>1;Use: \`$getServerVar[prefix] Cash 💵 <Ammount>\`]
$onlyIf[$message<=$getGlobalUserVar[money];**The deposit should not exceed the money you have!**]
$onlyIf[$message>=0;**You can only deposit more than $1.**]
$onlyForIDs[$botOwnerID;{description:❌ You are not my Developer}{color:RANDOM}]
`
}