module.exports = {
  
  name: "Code",
   code: `
$if[$randomText[exfert5fy]==$message[1]]
$author[ Successfully.;https://media.discordapp.net/attachments/872700345388773396/873052319334412298/v.gif] 
$addCmdReactions[✅]
$description[You have received **$getServerVar[random]**  Redeem Code Successfully  Thanks!]


$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$getServerVar[random]]]
$globalCooldown[7d;**⏰ Wait for %time% Redeem Code again!**]

$title[Code Correct]



$footer[Successfully ✅]
$color[00FF09] 


$else

$addCmdReactions[❌]
$title[Code Incorrect]



$footer[Failing ❌]
$color[FF0000] 
$endif

   `
}