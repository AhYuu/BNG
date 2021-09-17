module.exports = {
  
  name: "adminpay",
  aliases:['somluy'],
  code: `
$title[admin Pay.]
$thumbnail[$userAvatar[$authorID]]
$description[You have received **$getServerVar[adminpay]** of your Admin Pay allowance! The money is already in cash!]
$color[RANDOM]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getServerVar[adminpay]]]
$globalCooldown[12h;**⏰ Wait for %time% to claim adminpay pay again!**]
$onlyForIDs[$botOwnerID;{description:❌ You are not my Developer}{color:RANDOM}]
`
}