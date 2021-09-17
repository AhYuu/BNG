module.exports = {
  
  name: "inven",
  code: `$title[Your Inventory $username[$findMember[$message]]]
$thumbnail[$userAvatar[$findMember[$message]]]
$description[**❤Health**
**Health**: $getGlobalUserVar[health;$findMember[$message]]% 
**Hunger Level**: $getGlobalUserVar[hungry;$findMember[$message]]%
**Level of thirst**: $getGlobalUserVar[thirsty;$findMember[$message]]%

**🗃Inventory:**
**Pizza**: $getGlobalUserVar[pizza;$findMember[$message]] 🍕
**Drink**: $getGlobalUserVar[drink;$findMember[$message]] 🥛
**Health Medicine**: $getGlobalUserVar[hm;$findMember[$message]] 💊
**Fish**: $getGlobalUserVar[fish;$findMember[$message]] Kg
**Fishing equipment**: $getGlobalUserVar[fishrod;$findMember[$message]] 🎣
**Diamond**: $getGlobalUserVar[diamond;$findMember[$message]] 💎
**Laptop**: $getGlobalUserVar[laptop;$findMember[$message]] 💻
**Car**: $getGlobalUserVar[car;$findMember[$message]] 🚗
**House**: $getGlobalUserVar[house;$findMember[$message]] 🏡

**1 Crypto**: $getGlobalUserVar[crypto1;$findMember[$message]] ₿
**2 Crypto**: $getGlobalUserVar[crypto2;$findMember[$message]] ₿
**3 Crypto**: $getGlobalUserVar[crypto3;$findMember[$message]] ₿

**⛽Fuel:**
**Fuel of Car**: $getGlobalUserVar[fuel;$findMember[$message]]L]

$color[RANDOM]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp`
}