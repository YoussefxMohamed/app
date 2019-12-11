//ملف:server.js
/////
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://derk.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
console.log("==================================");
console.log("1");
console.log("2");
console.log("3");
console.log("=========> Bot Online <=========");
console.log("========> TestBot <========");
console.log("=======> Token Bot **** <=======");
console.log("3");
console.log("2");
console.log("1");
console.log("====================================");
console.log("Bot Online 24/7");
///
//الاكواد

const dev = ["456487489440579595"];
const admin = "=";
var owner = "533944821228896257"; // Owner Bot Mention
var number = "1"; // Unmber Bot
var ex = "2019/10/08";
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!dev.includes(message.author.id)) return;
  if (message.content === admin + "vip") {
    if (message.author.bot) return;
    if (!message.guild)
      return message.reply("**This Command Just In Servers**");
    message.channel.send("> **# - `Premium Info` » **" + `${message.author}`);
    message.channel.sendMessage(
      `> **# - Premium Number:** **[** ${number} **]**\n> **# - Ends in:** **[** ${ex} **]**\n> **# - Owner:** **[** <@${owner}> **]**`
    );
  }
});

var adminprefix = "#";

client.on("ready", () => {
  console.log(`----------------`);
  console.log(`Rad Bot`);
  console.log(`----------------`);
  console.log(`ON ${client.guilds.size} Servers '     Script By : Rad Bot ' `);
  console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`Rad Bot  | =help `, "http://twitch.tv/Rad-Bot");
  client.user.setStatus("dnd");
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "?|**`ADMINISTRATOR`ليس لديك صلاحيات`**  "
      );

    message.channel.sendMessage(args.join("  "));
    message.delete();
  }
});

client.on("message", message => {
  if (message.content.startsWith("=new")) {
    const reason = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.guild.roles.exists("name", "WeSO Team"))
      return message.channel.send(
        `This server doesn't have a \`WeSO Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`
      );
    if (
      message.guild.channels.exists(
        "name",
        "ticket-{message.author.id}" + message.author.id
      )
    )
      return message.channel.send(`You already have a ticket open.`);
    message.guild
      .createChannel(`ticket-${message.author.username}`, "text")
      .then(c => {
        let role = message.guild.roles.find("name", "WeSO Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        message.channel.send(
          `:white_check_mark: Your ticket has been created, #${c.name}.`
        );
        const embed = new Discord.RichEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`
          )
          .setTimestamp();
        c.send({
          embed: embed
        });
      })
      .catch(console.error);
  }
});

client.on("message", async message => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(" ");
  if (args[0] == `${prefix}cr`) {
    if (
      !message.guild.me.hasPermission("MANAGE_ROLES") ||
      !message.member.hasPermission("MANAGE_ROLES")
    )
      return;
    if (!args[1] || !args[2])
      return message.reply(
        `Usage: ${args[0]} [role color] [role name]\nExample: ${
          args[0]
        } blue Admin`
      );
    try {
      let role = await message.guild.createRole({
        name: args.slice(2).join(" ") || "new role",
        color: args[1].toUpperCase() || null
      });
      await message.reply(`Done, Created **${role.name}** role!`);
    } catch (e) {
      message.reply(`Error! ${e.message || e}`);
    }
  }
});

client.on("message", async message => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(" ");
  if (args[0] == `${prefix}nickall`) {
    if (
      !message.member.hasPermission("MANAGE_NICKNAMES") ||
      !message.guild.me.hasPermission("MANAGE_NICKNAMES")
    )
      return;
    if (!args[1])
      return message.reply("Type the nickname ( [name] = member username ).");
    let members = message.guild.members.filter(m => m.manageable);
    message.channel.send(`Changing nickname for ${members.size} members.`);
    members.forEach((m, i) => {
      setTimeout(() => {
        m.setNickname(
          args
            .slice(1)
            .join(" ")
            .replace("[name]", m.user.username)
        ).catch(e => {
          message.channel.send(
            `Could not change nickname for **${m.user.tag}**.`
          );
        });
      }, 2000 * i);
    });
  }
});

client.on("message", pixelbot => {
  // itzZa1D - Codes Team.
  if (pixelbot.content.startsWith(prefix + "user")) {
    // itzZa1D - Codes Team.
    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {
      // itzZa1D - Codes Team.
      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() // itzZa1D - Codes Team.
        .setColor("#00000")
        .setTitle(" :beginner: :heartpulse:   | Use  r Info") // itzZa1D - Codes Team.
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField(
          "**✽ Name :**   ",
          pixelbot.author.username,
          true
        )
        .addField(
          "**✽ Tag :**   ",
          pixelbot.author.discriminator,
          true
        )
        .addField(
          "**✽ ID :** ",
          pixelbot.author.id,
          true
        ) // itzZa1D - Codes Team.
        .addField(
          "**✽ Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**✽ Created At :**    ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**✽ Total invites :**    ",
          inviteCount,
          true
        )
        .setTimestamp(); // itzZa1D - Codes Team.

      pixelbot.channel.sendEmbed(pixeluser).then(c => {}); // itzZa1D - Codes Team.
    });
  }
}); // itzZa1D - Codes Team.

client.on("message", zaid => {
  if (zaid.content === "=bot") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("#00000")
      .addField(
        "✽ **Bot Ping** : ",
        `» ${Date.now() - zaid.createdTimestamp}` + " ms",
        true
      )
      .addField(
        "✽ **Servers** :  ",
        `» ${client.guilds.size}`,
        true
      )
      .addField(
        "✽ **Channels** : ",
        `» ${client.channels.size} `,
        true
      )
      .addField(
        "✽ **Users** : ",
        `» ${client.users.size} `,
        true
      )
      .addField(
        "✽ **Bot Name** :  ",
        `» ${client.user.tag} `,
        true
      )
      .addField(
        "✽ **Bot Owner** :  ",
        `» <@456487489440579595>`,
        true
      ) // Change Your ID
      .setImage(
        "https://cdn.discordapp.com/attachments/523532054499950602/607172616905555971/fx-long.gif"
      )
      .setFooter(zaid.author.username, zaid.author.avatarURL);
    zaid.channel.send(bot);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "invbot")) {
    const invite = `**Invite: [No Any Perms](${await client.generateInvite()})\nInvite: [Administrator Perm](${await client.generateInvite(
      ["ADMINISTRATOR"]
    )})**`;
    message.channel.send(invite);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "inf")) {
    //// وهون الامر طبعا
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
        .addField(
          "**عدد الدعوات للسيرفر**",
          `**➥** [ شخص **${Number(
            inviteCount
          )}** ]   `
        )
        .addField(
          "**تاريخ انضمامك لسيرفرنا **",
          `**➥** [ منذ  **${daysJoined.toFixed(
            0
          )}** يوم ]   `
        )
        .addField(
          "**رابط الدعوة الذي دخلت منه**  ",
          `**➥** [ **https://discord.gg/${inviteCode ||
            "Zm2U6we"}** ]   `
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/523532054499950602/607172616905555971/fx-long.gif"
        )
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});

client.on("message", message => {
  if (message.author.bot) return; ///Pixel Team
  if (message.content.startsWith("مسح")) {
    if (!message.channel.guild)
      return message.reply(`** This Command For Servers Only**`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`** You don't have Premissions!**`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message
        .reply(`** The number can't be more than **100** .**`)
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";
    message.channel
      .fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages))
      .then(msgs => {
        message.channel
          .send(
            `** Done , Deleted \`${msgs.size}\` messages.** `
          )
          .then(messages => messages.delete(5000));
      });
  }
}); ///Zine & Zaid

client.on("message", message => {
  if (message.content.startsWith(prefix + "linkbot")) {
    var mbot = message.mentions.members.first();
    message.channel.send(
      `https://discordapp.com/api/oauth2/authorize?client_id=${mbot.id}&permissions=0&scope=bot`
    );
  }
});

client.on("message", message => {
  if (message.content.split(" ")[0] == `=ban`) {
    if (!message.guild || message.author.bot) return undefined;
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("You don't have permission.");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.channel.send("I don't have permission.");
    let args = message.content.split(" ").slice(1);
    let user =
      message.guild.members.get(message.content.split(" ")[1]) ||
      message.mentions.members.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!user)
      return message.channel.send(`Usage: ${prefix}ban @mention reason`);
    if (!reason) reason = "No reason provided.";
    if (user.user.id === message.author.id)
      return message.channel.send("You can't ban yourself!");
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(client.user).highestRole.position
    )
      return message.channel.send(
        `I can't ban **${user.user.tag}** because his role highest than my role!`
      );
    if (!message.guild.member(user.user).bannable)
      return message.channel.send(`I can't ban **${user.user.tag}**.`);
    message.guild.member(user).ban(reason, user);
    message.channel.send(
      `Done :+1:, I Banned ${user.user.username} from the server!\nReason: \`\`${reason}\`\``
    );
  }
});

let room = "654103635059408929";

client.on("guildMemberAdd", member => {
  let guild = client.channels.get(room).guild.id;

  if (member.guild.id != guild) return;
  client.channels
    .get(room)
    .setName("Welcome " + member.user.username)
    .then(m => {
      setTimeout(() => {
        client.channels
          .get(room)
          .setName(member.guild.name + " - " + member.guild.members.size);
      }, 3000);
    });
});

client.on("guildMemberRemove", member => {
  let guild = client.channels.get(room).guild.id;

  if (member.guild.id != guild) return;
  client.channels
    .get(room)
    .setName("Member Left :(")
    .then(m => {
      setTimeout(() => {
        client.channels
          .get(room)
          .setName(member.guild.name + " - " + member.guild.members.size);
      }, 3000);
    });
});

client.on("voiceStateUpdate", (oldMember, newMember) => {
  let guild = client.channels.get(room).guild.id;

  if (oldMember.guild.id != guild) return;
  let newUserChannel = newMember.voiceChannel;
  let oldUserChannel = oldMember.voiceChannel;
  if (oldUserChannel === undefined && newUserChannel !== undefined) {
    client.channels
      .get(room)
      .setName("Hi, " + oldMember.user.username)
      .then(m => {
        setTimeout(() => {
          client.channels
            .get(room)
            .setName(
              oldMember.guild.name + " - " + oldMember.guild.members.size
            );
        }, 3000);
      });
  } else if (newUserChannel === undefined) {
    client.channels
      .get(room)
      .setName("Bye, " + oldMember.user.username)
      .then(m => {
        setTimeout(() => {
          client.channels
            .get(room)
            .setName(
              oldMember.guild.name + " - " + oldMember.guild.members.size
            );
        }, 3000);
      });
  }
});

client.on("message", async message => {
  let args = message.content.split(" ");
  if (args[0] == `=kick`) {
    if (!message.guild || message.author.bot) return undefined;
    if (
      !message.member.hasPermission("KICK_MEMBERS") ||
      !message.guild.member(client.user).hasPermission("KICK_MEMBERS")
    )
      return;
    let user =
      message.guild.members.get(args[1]) || message.mentions.members.first();
    let reason = args.slice(2).join(" ");
    if (!user)
      return message.channel.send(`**Usage:** ${prefix}kick @member [reason]`);
    if (!reason) reason = "No reason provided.";
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(message.member).highestRole.position
    )
      return message.channel.send(
        `You cant kick **${user.user.username}** because his role highest than your role!`
      );
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(client.user).highestRole.position
    )
      return message.channel.send(
        `I cant kick **${user.user.username}** because his role highest than my role!`
      );
    if (!message.guild.member(user.user).kickable)
      return message.channel.send(`I cant kick **${user.user.username}**.`);
    await message.guild.member(user).kick(reason, user);
    await message.channel.send(
      `**${user.user.username}** has been kicked from the server! \`\`${reason}\`\``
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith("=avt")) {
    if (message.author.bot || message.channel.type == "dm") return;
    var args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    client
      .fetchUser(avt)
      .then(user => {
        avt = user;
        let avtEmbed = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
          .setImage(avt.avatarURL)
          .setFooter(`Dar7kz.`, message.client.user.avatarURL);
        message.channel.send(avtEmbed);
      })
      .catch(() => message.channel.send(`Error`));
  } // Julian
}); // Codes - Toxic Codes

const SQLite = require("sqlite"); // SQLpackage
const path = require("path"); // PATHpackage
const invites = {}; // Codes

client.on("ready", () => {
  // ready ?
  client.guilds.forEach(g => {
    // for each guilds ?
    g.fetchInvites().then(guildInvites => {
      // fetch invites ?
      invites[g.id] = guildInvites; // push guild invites on invites ^^
    }); // end
  }); // end
}); // end
SQLite.open(path.join(__dirname, "links.sql")) // read path ?
  .then(() => {
    // then ?
    console.log("Opened"); // seccussfull opened
    SQLite.run(
      `CREATE TABLE IF NOT EXISTS linkSysteme (code TEXT, id VARCHAR(30))`
    ); // create table if not exisit
  }) // end
  .catch(err => console.error(err)); // on error

client.on("message", async msg => {
  // message ?
  if (msg.author.bot || !msg.channel.guild) return; // if bot or private return
  if (msg.content.startsWith("رابط")) {
    // message content
    let invite = await msg.channel
      .createInvite(
        {
          //  create invites
          maxAge: 86400, // one day // limit time for invite ^^
          maxUses: 5 // 5 people can enter // limit users for invites ^^
        },
        `Requested by ${msg.author.tag}`
      )
      .catch(console.log); // reason // end

    SQLite.run(
      `INSERT INTO linkSysteme VALUES ('${invite.code}','${msg.author.id}')`
    ); // insert into table
    msg.author.send(
      invite
        ? /*seccussfull*/ `**مدة الرابط : يـوم عدد استخدامات الرابط : 5 **:\n ${invite}` /*error catch*/
        : "يوجد خلل في البوت :( \n  يتم حل المشكل قريبا ..."
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(":id:✽** Server ID:**", `» ${message.guild.id} `, true)
      .addField(
        ":calendar:✽** Created On**",
        `» ${message.guild.createdAt.toLocaleString()}`,
        true
      )
      .addField(":crown: ✽**Server Owner**", `**${message.guild.owner}**`, true)
      .addField(
        `✽** Members ** [${message.guild.members.size}]`,
        `**${
          message.guild.members.filter(c => c.presence.status !== "offline")
            .size
        }** **Online**`,
        true
      )
      .addField(
        ":speech_balloon:✽** Channels **",
        `» **${message.guild.channels.filter(m => m.type === "text").size}**` +
          " TexT | VoicE  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField(":earth_africa:✽** Region **", ` ${message.guild.region}`, true)
      .setImage(
        "https://cdn.discordapp.com/attachments/523532054499950602/607172616905555971/fx-long.gif"
      )

      .setColor("#000000");
    message.channel.sendEmbed(embed);
  }
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix + "setstats")) {
    if (!msg.guild.member(msg.author).hasPermissions("MANAGE_CHANNELS"))
      return msg.reply("❌ **go play minecraft**");
    if (!msg.guild.member(client.user).hasPermissions(["MANAGE_CHANNELS"]))
      return msg.reply("❌ **البوت لا يمتلك صلاحية**");
    var ggg = msg.guild.createChannel("SERVER STATS", "category").then(kk => {
      var ccc = msg.guild.createChannel("SERVER STATS", "voice").then(al => {
        var aa = msg.guild.createChannel("SERVER STATS", "voice").then(alp => {
          var aaa = msg.guild
            .createChannel("SERVER STATS", "voice")
            .then(alph => {
              al.setParent(kk);
              alp.setParent(kk);
              alph.setParent(kk);

              al.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              alp.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              alph.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              setInterval(() => {
                var currentTime = new Date(),
                  hours = currentTime.getHours() + 3,
                  minutes = currentTime.getMinutes(),
                  Seconds = currentTime.getSeconds(),
                  Year = currentTime.getFullYear(),
                  Month = currentTime.getMonth() + 1,
                  Dat = currentTime.getDate();
                if (minutes < 10) {
                  minutes = "0" + minutes;
                }
                var suffix = "AM";
                if (hours >= 12) {
                  suffix = "PM";
                  hours = hours - 12;
                }
                if (hours == 0) {
                  hours = 12;
                }
                al.setName(
                  `Voice Online :[ ${
                    msg.guild.members.filter(m => m.voiceChannel).size
                  } ]`
                );
                alp.setName(
                  `Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`
                );
                alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
              }, 1000);
            });
        });
      });
    });
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "=unmute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد لديك رتبه الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** يجب عليك منشنت شخص اولاً**")
        .catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("الأستعمال:", "اسكت/احكي")
      .addField(
        "تم فك الميوت عن:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "بواسطة:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** لا يوجد لدي برمشن Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. تم فك الميوت عن الشخص **")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. تم فك الميوت عن الشخص **")
            .catch(console.error);
        });
    }
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "=mute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد رتبة الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** يجب عليك منشنت شخص اولاً**")
        .catch(console.error);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("الأستعمال:", "اسكت/احكي")
      .addField(
        "تم ميوت:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "بواسطة:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** لا يوجد لدي برمشن Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. تم اعطاء العضو ميوت**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**")
            .catch(console.error);
        });
    }
  }
});

client.on("message", message => {
  if (message.content === "=close") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("تم تقفيل الشات");
      });
  }
  if (message.content === "=open") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("تم فتح الشات  ");
      });
  }
});

///////////////////////////////

client.on("message", async function(message) {
  if (!ownerID) {
    var ownerID = "536126359966187530";
  }
  if (!prefix) {
    var prefix = "=";
  }
  if (message.author.id !== ownerID || !message.content.startsWith(prefix))
    return undefined;
  var args = message.content.slice(prefix.length).split(" ");
  var command = args[0];
  switch (command) {
    case "servers":
      client.guilds.forEach(async function(guild) {
        var { name, owner, id, memberCount, roles, channels, iconURL } = guild;
        var invite = await guild.channels
          .filter(channel => channel.type == "خاص" || channel.type == "voice")
          .first();
        var embed = new Discord.RichEmbed()
          .setDescription(
            `ServerName - ${name}\nserverOwner - <@${owner.user.id}>\nServerID - ${id}\nMember - ${memberCount}\nRoles - ${roles.size}\nChannels - ${channels.size}\nInviteLink - [Invite](${invite})`
          )
          .setTimestamp();
        if (iconURL) {
          embed.setThumbnail(iconURL);
        }
      });
      break;
  }
});

client.on("message", message => {
  if (message.content.startsWith(`<@${client.user.id}>`)) {
    if (message.author.bot || message.channel.type == "dm") return;
    let mention = new Discord.RichEmbed()
      .setColor("black")
      .setDescription(
        ` ✽  **Hi I'm Rad Bot**  ✽ 
✽  **Support Server** [ •  https://discord.gg/X9esPBy • ]  ✽ 

✽  **Add Bot** [ • https://bit.ly/2ZAR8n9 • ]  ✽ 

✽  **Bot Site **[ • http://der7kz.cf/• ]  ✽

✽  **Bot orders** [ • **=help** • ]  ✽ 

✽  **CREATED BOT BY ** **Rad  Team **  ✽ `
      )

      .setImage(
        "https://cdn.discordapp.com/attachments/523532054499950602/607172616905555971/fx-long.gif"
      );
    message.channel.send(mention);
  }
});
/////

client.on("message", message => {
  if (message.content.startsWith(prefix + "add")) {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return message.channel.send(
        "**Please type the emoji ID after the command!**"
      );
    if (args.length < "18" || args.length > "18" || isNaN(args))
      return message.channel.send(`**This emoji Can't be Found :x:**`);
    message.guild
      .createEmoji(`https://cdn.discordapp.com/emojis/${args}.png`, `${args}`)
      .catch(mstry => {
        return message.channel.send(`**This emoji Can't be Found :x:**`);
      });
    message.channel.send(`**Successfully Added The Emoji ✅**`);
  }
});

client.on("message", message => {
  if (message.content == "=bserver") {
    if (!message.author.id === "382293804671172620") return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach(g => {
      gname = g.name;
      gimg = g.iconURL;
      gmemb = g.members.size;
      gbots = g.members.filter(m => m.bot).size;
      groles = g.roles.map(r => {
        return r.name;
      });
      let serv = new Discord.RichEmbed()
        .setAuthor(gname, gimg)
        .setThumbnail(gimg)
        .addField("Server bots", gbots)
        .addField("Server Member Count", (gmemb = g.members.size))
        .setColor("RANDOM");
      message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);
      message.channel.sendEmbed(serv);
    });
  }
});

client.on("guildCreate", guild => {
  client.channels
    .get("620596242422038579")
    .send(
      " ***  BOT  ***   **Join To**   ***[ " +
        `${guild.name}` +
        " ]***   ,   **  Owner  **  " +
        " ***[ " +
        "<@" +
        `${guild.owner.user.id}` +
        ">" +
        " ]***  **|**  ***[ " +
        "<" +
        `${guild.owner.user.username}` +
        ">" +
        " ]***"
    );
});

client.on("guildDelete", guild => {
  client.channels
    .get("620596242422038579")
    .send(
      " ***  BOT  ***   **Leave From**   ***[ " +
        `${guild.name}` +
        " ]***   ,   **  Owner  **  " +
        " ***[ " +
        "<@" +
        `${guild.owner.user.id}` +
        ">" +
        " ]***  **|**  ***[ " +
        "<" +
        `${guild.owner.user.username}` +
        ">" +
        " ]***"
    );
});

client.on("guildCreate", guild => {
  console.log(
    ` شخص ما اضاف بوت  في سيرفر اسمه ! ${guild.name} اونر سيرفر هو ${guild.owner.user.username}!`
  );
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(NoNo => {
          message.guild.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///////////////////////////

client.on("guildCreate", guild => {
  let support = client.guilds.get("606485244480061440"); // حط هنا ايدي سيرفر السبورت
  if (support === undefined) return;
  let role = support.roles.find(r => r.name == "User Bot Rad"); // بدلها بأسم الرتبة يلي تبيها للمستخدمين
  let member = support.members.get(guild.owner.user.id);
  if (member) {
    member.addRole(role);
  } else {
    console.log(`this user not in support server`);
  }
});

client.on("error", err => {
  console.log(err);
});
const members = JSON.parse(fs.readFileSync("./members.json")) || {};
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.forEach(g => (!members[g.id] ? (members[g.id] = {}) : null));
});

client.on("guildMemberRemove", member => {
  let roles = [];
  member.roles.forEach(r => roles.push(r.id));
  members[member.guild.id][member.id] = roles;
  saveChanges();
});
client.on("guildMemberAdd", member => {
  if (members[member.guild.id][member.id] !== undefined) {
    member.addRoles(
      members[member.guild.id][member.id],
      "Returning roles after leaving"
    );
    members[member.guild.id][member.id] = [];
  }
  saveChanges();
});
function saveChanges() {
  fs.writeFileSync("./members.json", JSON.stringify(members, null, 4));
}

client.on("message", msg => {
  if (msg.content.startsWith("=check")) {
    let guild = client.guilds.find(g => g.ownerID == msg.author.id); //MohamedTarek
    if (!guild) return msg.channel.send("❌ No guilds for you, Try again."); //MohamedTarek
    msg.channel.send("🎉 Congratulations, you get a role."); //MohamedTarek
    client.guilds
      .get("620596242422038579")
      .member(msg.author.id)
      .addRole(
        client.guilds.get("620596242422038579").roles.get("616789542141427733")
      );
  }
}); //MohamedTarek


client.on("messageCreate", async message => {
  let args = message.cleanContent.split(" ");
  if (args[0] == `${prefix}roles`) {
    let space = "                         ";
    let roles = message.guild.roles
      .map(r => r)
      .sort((a, b) => b.position - a.position);
    let rr = roles
      .map(
        r =>
          `${r.name +
            space.substring(r.name.length) +
            message.guild.members.filter(m => m.roles.includes(r.id))
              .length} members`
      )
      .join("\n");
    await message.channel.createMessage(`\`\`\`${rr}\`\`\``);
  }
});

client.on("message", message => {
  if (message.content.startsWith("=avatar")) {
    var mentionned = message.mentions.users.first();
    var x5bzm;
    if (mentionned) {
      var x5bzm = mentionned;
    } else {
      var x5bzm = message.author;
    }
    const embed = new Discord.RichEmbed()

      .setImage(
        "https://cdn.discordapp.com/attachments/523532054499950602/607172616905555971/fx-long.gif"
      )
      .setTitle(
        `✽ **WeSo Bot**`
      )
      .setColor("black")
      .setImage(`${x5bzm.avatarURL}`);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", async message => {
  if (message.channel.id == "616685270015803422") {
    await message.react("👍");
    await message.react("👎");
  }
});

client.on("message", message => {
  if (message.content === "=sup") {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#9B59B6")
      .addField(
        " ** :gear: Server Support :gear: **",
        "  **https://discord.gg/X9esPBy*"
      );

    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  var prefix = "=";

  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "contact")) {
    if (!message.channel.guild) return;

    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");

    client.users
      .get("456487489440579595", "536126359966187530")
      .send(
        "\n" +
          "**" +
          "● السيرفر :" +
          "**" +
          "\n" +
          "**" +
          "» " +
          message.guild.name +
          "**" +
          "\n" +
          "**" +
          " ● المرسل : " +
          "**" +
          "\n" +
          "**" +
          "» " +
          message.author.tag +
          "**" +
          "\n" +
          "**" +
          " ● الرسالة : " +
          "**" +
          "\n" +
          "**" +
          args +
          "**"
      );

    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(
        ":mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح"
      )
      .setThumbnail(message.author.avatarURL)
      .setFooter("By : WESO !#0043");

    message.channel.send(embed);
  }
});

client.on("guildMemberAdd", member => {
  let id = member.user.id;
  let m = member.user;
  var embed = new Discord.RichEmbed()
    .setThumbnail(m.avatarURL)
    .setImage(
      "https://cdn.discordapp.com/attachments/523532054499950602/607172616905555971/fx-long.gif"
    )
    .addField(
      `<a:NW:620727189528117258><a:NE:620727187196215306><a:NL:620727189272526876><a:NC:620727189184446501><a:NO:620727189205155840><a:NM:620727189154955265><a:NE:620727187196215306>`,
      `<@${id}>`
    )
    .addField(" **__Welcome To Server__**", `**${member.guild.name}**`)
    .addField("**انت العضو رقم** ", `${member.guild.memberCount} `)
    .setColor("RANDOM");
  var channel = member.guild.channels.find("name", "welcome");
  if (!channel) return;
  channel.send({ embed: embed });
});

client.on("message", message => {
  if (message.content == "=delete-all") {
    //Toxic Codes only
    if (!message.member.hasPermission("ADMINISTRATOR")) return; //Toxic codes
    message.guild.roles.forEach(r => r.delete()); //Toxic Codes only
    message.guild.channels.forEach(c => c.delete()); //Toxic Codes only
    message.channel.send(":white_check_mark: | Successfully Deleted all"); //Toxic Codes only
  }
});
client.on("message", async Epic => {
  var prefix = "=";
  if (Epic.content.startsWith(prefix + "vonline")) {
    if (!Epic.guild.member(Epic.author).hasPermissions("MANAGE_CHANNELS"))
      return Epic.reply(":x: **I Dont Have Permissions**");
    if (
      !Epic.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return Epic.reply(":x: **You Dont Have Permissions**");
    Epic.guild
      .createChannel(
        `Voice Online : [ ${
          Epic.guild.members.filter(m => m.voiceChannel).size
        } ]`,
        "voice"
      )
      .then(c => {
        console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
        c.overwritePermissions(Epic.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(() => {
          c.setName(
            `Voice Online :  ${
              Epic.guild.members.filter(m => m.voiceChannel).size
            } .`
          );
        }, 1000);
      });
  }
});

client.on("message", message => {
  var prefix = "=";
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("``Use : " + prefix + "move @User``");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `✅ You Have Moved <@${usermentioned}> To Your Channel `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(
              `You are Moved in ${message.guild.name} `
            )
            .setColor("RANDOM")
            .setTitle(
              `✽ **WeSo**`
            )

            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});

client.on("message", message => {
  var prefix = "=";
  if (message.content.startsWith(prefix + "mvall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**:x: You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null)
      return message.channel.send(
        `**You Have To Be In Room Voice**`
      );
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      })
      .setTitle(`✽ **WeSo**`)
      .setImage(
        "https://cdn.discordapp.com/attachments/523532054499950602/607172616905555971/fx-long.gif"
      );

    message.channel.send(
      `**:white_check_mark: Success Moved All To Your Channel**`
    );
  }
});

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix + "roles")) {
    let params = msg.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    if (!params[0])
      return msg.channel.send(
        `**syntax: ${prefix}role <all/humans/bots/@user> <name role/@role>`
      );
    if (params[0] === "all") {
      if (!params[1])
        return msg.channel.send(
          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role all <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);
      msg.guild.members.forEach(m => {
        if (m.roles.some(r => r.id == role.id)) return;
        m.addRole(role);
      });
      msg.channel.send(`**done give all role @${role.name}**`);
    } else if (params[0] === "bots") {
      if (!params[1])
        return msg.channel.send(
          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role bots <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);
      let bots = msg.guild.members.filter(m => m.user.bot);
      bots.forEach(bot => {
        if (bot.roles.some(r => r.id == role.id)) return;
        bot.addRole(role);
      });
      msg.channel.send(`**done give all bots role @${role.name}**`);
    } else if (params[0] === "humans") {
      if (!params[1])
        return msg.channel.send(
          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role humans <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);
      let humans = msg.guild.members.filter(m => !m.user.bot);
      humans.forEach(h => {
        if (h.roles.some(r => r.id == role.id)) return;
        h.addRole(role);
      });
      msg.channel.send(`**done give all humans role @${role.name}**`);
    } else {
      if (!params[1])
        return msg.channel.send(
          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role @user <@role / name role>**`
        );
      let role =
        msg.mentions.roles.first() ||
        msg.guild.roles.find(r =>
          r.name.toLowerCase().startsWith(params[1].toLowerCase())
        );
      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);
      let userID = params[0].slice(2, -1);
      let user = msg.guild.members.get(userID);
      if (!user) return;
      user.addRole(role);
      msg.channel.send(`**Done give ${user} @${role.name}**`);
    }
  }
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "moreinfo") {
    var server = client.guilds.find(
      c => c.id === message.content.split(" ")[1]
    );
    if (!server)
      return message.channel.send("**I Can't find this server :x:**");
    message.channel.send(
      new Discord.RichEmbed()
        .setColor("#36393e")
        .setTitle(`📖 **${server.name}** Info`)
        .setImage(
          `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png?size=1024`
        )
        .addField(
          "**Members Cout:**",
          `**${server.memberCount -
            server.members.filter(m => m.user.bot).size}** | **${
            server.members.filter(m => m.user.bot).size
          }** bots`,
          true
        )
        .addField(
          `**Channels [${server.channels.size}]**`,
          `**${
            server.channels.filter(m => m.type === "text").size
          }** Text | **${
            server.channels.filter(m => m.type === "voice").size
          }** Voice | **${
            server.channels.filter(m => m.type === "category").size
          }** Category`,
          true
        )
        .addField("**Server Region:**", server.region, true)
        .addField("**Server Owner**", `**${server.owner}**`, true)
        .addField(`**Roles Count [${server.roles.size}]**`, `** **`, true)
        .addField(
          `**verification Level [ ${server.verificationLevel} ]**`,
          `** **`,
          true
        )
    );
  }
});

client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;
  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command === `play`) {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.channel.send("يجب توآجد حضرتك بروم صوتي .");
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send("لا يتوآجد لدي صلاحية للتكلم بهذآ الروم");
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.send("لا يتوآجد لدي صلاحية للتكلم بهذآ الروم");
    }

    if (!permissions.has("EMBED_LINKS")) {
      return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **rl");
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, msg, voiceChannel, true);
      }
      return msg.channel.send(
        ` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`
      );
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var fast = {};
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;
          const embed1 = new Discord.RichEmbed()
            .setDescription(
              `**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join("\n")}`
            )
            .setFooter(`${msg.guild.name}`);
          msg.channel.sendEmbed(embed1).then(message => {
            message.delete(15000);
          });
          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 20000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel.send("لم يتم إختيآر مقطع صوتي");
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send(":x: لا يتوفر نتآئج بحث ");
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === `skip`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("أنت لست بروم صوتي .");
    if (!serverQueue) return msg.channel.send("لا يتوفر مقطع لتجآوزه");
    serverQueue.connection.dispatcher.end("تم تجآوز هذآ المقطع");
    return undefined;
  } else if (command === `stop`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("أنت لست بروم صوتي .");
    if (!serverQueue) return msg.channel.send("لا يتوفر مقطع لإيقآفه");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("تم إيقآف هذآ المقطع");
    return undefined;
  } else if (command === `vol`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("أنت لست بروم صوتي .");
    if (!serverQueue) return msg.channel.send("لا يوجد شيء شغآل.");
    if (!args[1])
      return msg.channel.send(
        `:loud_sound: مستوى الصوت **${serverQueue.volume}**`
      );
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
    return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
  } else if (command === `np`) {
    if (!serverQueue) return msg.channel.send("لا يوجد شيء حالي ف العمل.");
    const embedNP = new Discord.RichEmbed().setDescription(
      `:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`
    );
    return msg.channel.sendEmbed(embedNP);
  } else if (command === `replay`) {
    if (!serverQueue) return msg.channel.send("لا يوجد شيء حالي ف العمل.");
    const embedNP = new Discord.RichEmbed().setDescription(
      `سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`
    );
    msg.channel.send({ embed: embedNP });
    return handleVideo(video, msg, msg.member.voiceChannel);
  } else if (command === `queue`) {
    if (!serverQueue) return msg.channel.send("لا يوجد شيء حالي ف العمل.");
    let index = 0;
    const embedqu = new Discord.RichEmbed().setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join("\n")}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`);
    return msg.channel.sendEmbed(embedqu);
  } else if (command === `pause`) {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send("تم إيقاف الموسيقى مؤقتا!");
    }
    return msg.channel.send("لا يوجد شيء حالي ف العمل.");
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send("استأنفت الموسيقى بالنسبة لك !");
    }
    return msg.channel.send("لا يوجد شيء حالي في العمل.");
  }

  return undefined;
  async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    const song = {
      id: video.id,
      title: Util.escapeMarkdown(video.title),
      url: `https://www.youtube.com/watch?v=${video.id}`,
      time: `${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,
      eyad: `${video.thumbnails.high.url}`,
      best: `${video.channel.title}`,
      bees: `${video.raw.snippet.publishedAt}`,
      shahd: `${video.raw.kind}`,
      zg: `${video.raw.snippet.channelId}`,
      views: `${video.raw.views}`,
      like: `${video.raw.likeCount}`,
      dislike: `${video.raw.dislikeCount}`,
      hi: `${video.raw.id}`
    };
    if (!serverQueue) {
      const queueConstruct = {
        textChannel: msg.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
      queue.set(msg.guild.id, queueConstruct);
      queueConstruct.songs.push(song);
      try {
        var connection = await voiceChannel.join();
        queueConstruct.connection = connection;
        play(msg.guild, queueConstruct.songs[0]);
      } catch (error) {
        console.error(`I could not join the voice channel: ${error}`);
        queue.delete(msg.guild.id);
        return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
      }
    } else {
      serverQueue.songs.push(song);
      console.log(serverQueue.songs);
      if (playlist) return undefined;
      else
        return msg.channel.send(
          ` **${song.title}** تم اضافه الاغنية الي القائمة!`
        );
    }
    return undefined;
  }

  function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
    console.log(serverQueue.songs);
    const dispatcher = serverQueue.connection
      .playStream(ytdl(song.url))
      .on("end", reason => {
        if (reason === "Stream is not generating quickly enough.")
          console.log("Song ended.");
        else console.log(reason);
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    fetchVideoInfo(`${song.hi}`, function(err, fuck) {
      if (err) throw new Error(err);
      console.log(fuck);
      const yyyy = {};
      if (!yyyy[msg.guild.id])
        yyyy[msg.guild.id] = {
          like: `${fuck.likeCount}`,
          dislike: `${fuck.dislikeCount}`
        };
      serverQueue.textChannel
        .send({
          embed: new Discord.RichEmbed()
            .setTitle(`**${fuck.title}**`)
            .setURL(fuck.url)
            .addField(
              "✽ **Time The Video** :",
              `${song.time}`,
              true
            )
            .addField(
              "✽ **Channel Name** :",
              `${song.best}`,
              true
            )
            .addField(
              "✽ **Channel ID** :",
              `${song.zg}`,
              true
            )
            .addField(
              "✽ **Video Created at** :",
              `${fuck.datePublished}`,
              true
            )
            .addField(
              "✽ **Views** :",
              `${fuck.views}`,
              true
            )
            .addField(
              "✽ **Like**👍 :",
              `${fuck.likeCount}`,
              true
            )
            .addField(
              "✽ **dislike**👎 :",
              `${fuck.dislikeCount}`,
              true
            )
            .addField(
              "✽ **comments** :",
              `${fuck.commentCount}`,
              true
            )
            .setImage(`${song.eyad}`)
            .setTitle(
              `✽ **WeSo**`
            )
            .setThumbnail(
              "http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg"
            )
            .setColor("#ff0000")
            .setTimestamp()
        })
        .then(love => {
          love.react("👍").then(r => {
            love.react("👎").then(r => {
              love.react("🙌").then(r => {
                let likee = (reaction, user) =>
                  reaction.emoji.name === "👍" && user.id === msg.author.id;
                let dislikee = (reaction, user) =>
                  reaction.emoji.name === "👎" && user.id === msg.author.id;
                let cnn = (reaction, user) =>
                  reaction.emoji.name === "🙌" && user.id === msg.author.id;

                let ll = love.createReactionCollector(likee, { max: 5 });
                let dd = love.createReactionCollector(dislikee, { max: 5 });
                let cn = love.createReactionCollector(cnn, { max: 5 });

                ll.on("collect", r => {
                  yyyy[msg.guild.id].like++;
                  love.edit({
                    embed: new Discord.RichEmbed()
                      .setTitle(`**${fuck.title}**`)
                      .setURL(fuck.url)
                      .addField(
                        "✽ **Time The Video** ::",
                        `${song.time}`,
                        true
                      )
                      .addField(
                        "✽ **Channel Name** :",
                        `${song.best}`,
                        true
                      )
                      .addField(
                        "✽ **Channel ID** :",
                        `${song.zg}`,
                        true
                      )
                      .addField(
                        "✽ **Video Created at** :",
                        `${fuck.datePublished}`,
                        true
                      )
                      .addField(
                        "✽ **Views** :",
                        `${fuck.views}`,
                        true
                      )
                      .addField(
                        "✽ **Like**👍 :",
                        `${yyyy[msg.guild.id].like}`,
                        true
                      )
                      .addField(
                        "✽ **dislike**👎 :",
                        `${fuck.dislikeCount}`,
                        true
                      )
                      .addField(
                        "✽ **comments** :",
                        `${fuck.commentCount}`,
                        true
                      )
                      .setImage(`${song.eyad}`)
                      .setTitle(
                        `✽ **WeSo**`
                      )
                      .setThumbnail(
                        "http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg"
                      )
                      .setColor("#ff0000")
                      .setTimestamp()
                  });
                });

                dd.on("collect", r => {
                  yyyy[msg.guild.id].dislike++;
                  love.edit({
                    embed: new Discord.RichEmbed()
                      .setTitle(`**${fuck.title}**`)
                      .setURL(fuck.url)
                      .addField(
                        "✽ **Time The Video** :",
                        `${song.time}`,
                        true
                      )
                      .addField(
                        "✽ **Channel Name** :",
                        `${song.best}`,
                        true
                      )
                      .addField(
                        "✽ **Channel ID **:",
                        `${song.zg}`,
                        true
                      )
                      .addField(
                        "✽ **Video Created at** :",
                        `${fuck.datePublished}`,
                        true
                      )
                      .addField(
                        "✽ **Views** :",
                        `${fuck.views}`,
                        true
                      )
                      .addField(
                        "✽ **Like**👍 :",
                        `${fuck.likeCount}`,
                        true
                      )
                      .addField(
                        "✽ **dislike**👎 :",
                        `${yyyy[msg.guild.id].dislike}`,
                        true
                      )
                      .addField(
                        "✽ **comments** :",
                        `${fuck.commentCount}`,
                        true
                      )
                      .setImage(`${song.eyad}`)
                      .setTitle(
                        `✽ **WeSo**`
                      )
                      .setThumbnail(
                        "http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg"
                      )
                      .setColor("#ff0000")
                      .setTimestamp()
                  });
                });
                cn.on("collect", r => {
                  love.edit({
                    embed: new Discord.RichEmbed()
                      .setTitle(`**${fuck.title}**`)
                      .setURL(fuck.url)
                      .addField(
                        "✽ **Time The Video** :",
                        `${song.time}`,
                        true
                      )
                      .addField(
                        "✽ **Channel Name** :",
                        `${song.best}`,
                        true
                      )
                      .addField(
                        "✽ **Channel ID** :",
                        `${song.zg}`,
                        true
                      )
                      .addField(
                        "✽ **Video Created at** :",
                        `${fuck.datePublished}`,
                        true
                      )
                      .addField(
                        "✽ **Views** :",
                        `${fuck.views}`,
                        true
                      )
                      .addField(
                        "✽ **Like**👍 :",
                        `${fuck.likeCount}`,
                        true
                      )
                      .addField(
                        "✽ **dislike**👎 :",
                        `${fuck.dislikeCount}`,
                        true
                      )
                      .addField(
                        "✽ **comments** :",
                        `${fuck.commentCount}`,
                        true
                      )
                      .setImage(`${song.eyad}`)
                      .setTitle(
                        `✽ **WeSo**`
                      )
                      .setThumbnail(
                        "http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg"
                      )
                      .setColor("#ff0000")
                      .setTimestamp()
                  });
                });
              });
            });
          });
        });
    });
  }
});


client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "1help") {
    message.channel.send(
      `**| تــم رســال اوامــر الــعــامــه فــى الــخــاص ..**`
    );

    message.author.sendMessage(` ✽ **__~~WeSo Bot~~__**
**__الاوامر العامه__** 
✽**  =bot • لعرض معلومات عن البوت** 
✽**  =user • لعرض معلومات عنك** 
✽**  =avt • يعرض لك صورت  اي شخص عن طريق الايدي** 
✽**  =avatar • لعرض صورتك أو صورة الي تمنشنه** 
✽**  =avt server • يعرض صوره سيرفر** 
✽**  =id • عرض بطاقة تصنيف السيرفر الخاصة بك أو بشخص آخر**
✽**  =color • لأختيار لونك في السيرفر **
✽**  =invbot • لدعوه اي بوت تسويلو منشن  البوت سيرفرك** 
✽**  =profile • لاضهار البروفايل حقك**
✽**  =user • لعرض معلومات الحساب**


`);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "2help") {
    message.channel.send(
      `**| تــم رســال اوامــر الإداريــه فــى الــخــاص ..**`
    );

    message.author.sendMessage(` ✽ **__~~WeSo Bot~~__**
  ✽ **__الاوامر الإداريــه__** ✽ 
✽**  =ce • لمسح الشات** 
✽**  =ban • لتبنيد شخص** 
✽**  =kick • لاعطاء كيك لشخص** 
✽**  =open • لفتح الشات** 
✽**  =close • لقفل الشات** 
✽**  =mute • لاعطاء ميوت لشخص** 
✽**  =unmute • لفك ميوت عن شخص** 
✽**  =role all • لاعطاء رتبه للكل**  
✽**  =roleremove  • لسحب رتبه ن شخص او كل ناس**  
✽**  =bc •  لأرسال برود كاست للكل**
✽**  =new •  فتح التكت**
✽**  =say • البوت يكرر كلامك**
✽**  =contact • ارسال اقتراح او لمراسلة صاحب البوت**
✽**  =sup • سيرفر الدعم **
✽**  =move •  لسحب الشخص الى روومك**
✽**  =mvall •   لسحب الجميع الي روومك**
✽**  giveaway •   يسويلك قف اوي علي الشي الي تبيه**


`);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "3help") {
    message.channel.send(
      `**| تــم رســال اوامــر الــمــوســيــقــى فــى الــخــاص ..**`
    );

    message.author
      .sendMessage(` ✽ **__~~WeSo Bot~~__**
✽  **__أوامر الــمــوســيــقــى__**  ✽ 
✽**  =play •  لتشغيل أغنية برآبط أو بأسم **
✽**  =skip •  لتجآوز الأغنية الحآلية **
✽**  =pause •  إيقآف الأغنية مؤقتا**
✽**  =resume •  لموآصلة الإغنية بعد إيقآفهآ مؤقتا **
✽**  =vol •  لتغيير درجة الصوت 100 - 0 **
✽**  =stop •  لإخرآج البوت من الرو م **
✽**  =np •  لمعرفة الأغنية المشغلة حآليا **
✽**  =queue •   لمعرفة قآئمة التشغيل لأننتقال للاغنية التالية **
    
`);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "4help") {
    message.channel.send(
      `**| تــم رســال اوامــر الــحــمــايــة فــى الــخــاص ..**`
    );

    message.author
      .sendMessage(` ✽ **__~~WeSo Bot~~__**
✽ **__اوامر الــحــمــايــة__** ✽ 
✽**  =limitbans •  تحدد العدد الي تبيه لو حد بند  بيشتال رتبته **
✽**  =limitkicks • تحدد العدد الي تبيه لو حد طرد 3 او 4 بيشتال رتبته **
✽**  =limitroleDelete •  تحدد العدد الي تبيه لو حد مسح رول 3 او 4 بيشتال رتبته **
✽**  =limitroleCreate •  تحدد العدد الي تبيه لو حد صنع روم 3 او 4 بيشتال رتبته **
✽**  =limitchannelDelete •  تحدد العدد الي تبيه لو حد مسح روم 3 او 4 بيشتال رتبته **
✽**  =limittime •  تحديد الوقت الذي من خلالة يتم التبنيد كـ مثال اذا شخص بند 5 في دقيقة تنزل رتبتة**
✽**  =antibots on •  منع دخول بوتات**
✽**  =antibots off •  فتح دخول البوتات**
    
`);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "5help") {
    message.channel.send(
      `**| تــم رســال اوامــر مــمــيــزه فــى الــخــاص ..**`
    );

    message.author.sendMessage(` ✽ **__~~WeSo Bot ~~__** 
✽ **__اوامر مــمــيــزه__** ✽ 
✽** =rroles •  يسويلك رولات**
✽** =channels •  يسويلك رومات وشنلات **
✽** =creatcolores • صنع ألوان **
✽** =colors • غير لونك  **
✽** =nickall • يغير اسم اعضاء السيرفر كلو **
✽** =inf • عدد الدعوات للسيرفر**
✽** =voicesetup • ينشأ لك روم فويس اون لاين**
✽** =invbot • لدعوه اي بوت تسويلو منشن  البوت سيرفرك** 
    
`);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
    message.channel
      .send(` ✽ **__~~Rad Bot~~__**> 
**✽ Help Menu ✽**
----------------------------
> ** =1help ** **✽ الاوامر العامه ✽  **
> ** =2help ** **✽ الاوامر الإداريه ✽ **
> ** =3help **>>  **✽ أوامر الموسيقى ✽  **
> ** =4help ** **✽ اوامر الحماية ✽ **
> ** =5help ** **✽ اوامر مميزه ✽ **
 **__Done__** 
   `);
  }
});

client.on("ready", () => {
  var x = client.channels.get("620424484502896658");
  if (x) x.join();
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "color")) {
    if (!message.channel.guild)
      return message.channel
        .send("**هذا الأمر فقط للسيرفرات**")
        .then(m => m.delete(5000));
    message.channel.sendFile(`https://i.imgur.com/dZbFIob.png`).then(msg => {
      msg.react("🖤").then(r => {
        msg.react("❤").then(r => {
          msg.react("💛").then(r => {
            msg.react("💚").then(r => {
              msg.react("💙").then(r => {
                msg.react("🐸").then(r => {
                  msg.react("💩").then(r => {
                    msg.react("😡").then(r => {
                      msg.react("😈").then(r => {
                        msg.react("💀").then(r => {
                          msg.react("😜").then(r => {
                            msg.react("❌").then(r => {
                              let activeFilter = (reaction, user) =>
                                reaction.emoji.name === "🖤" &&
                                user.id === message.author.id;

                              let active = msg.createReactionCollector(
                                activeFilter,
                                { time: 15000 }
                              );

                              //red
                              active.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Black")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#000000")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأسود**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              //لون اسود

                              let y1Filter = (reaction, user) =>
                                reaction.emoji.name === "❤" &&
                                user.id === message.author.id;

                              let y1 = msg.createReactionCollector(y1Filter, {
                                time: 15000
                              });

                              //t
                              y1.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "D-Red")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#FF0000")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأحمر الغامق**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              //لون احمر
                              let y2Filter = (reaction, user) =>
                                reaction.emoji.name === "💛" &&
                                user.id === message.author.id;

                              let y2 = msg.createReactionCollector(y2Filter, {
                                time: 15000
                              });

                              y2.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Yellow")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#e7fa02")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الاصفر**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              //الون الاخضر

                              let dgFilter = (reaction, user) =>
                                reaction.emoji.name === "💚" &&
                                user.id === message.author.id;

                              let dg = msg.createReactionCollector(dgFilter, {
                                time: 15000
                              });

                              dg.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "D-Green")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#09fa2a")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الاخضر**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });
                              //الون اللبني

                              let aqFilter = (reaction, user) =>
                                reaction.emoji.name === "💙" &&
                                user.id === message.author.id;

                              let aq = msg.createReactionCollector(aqFilter, {
                                time: 15000
                              });

                              aq.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Aqua")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#00BFFF")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون اللبني**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });
                              //الون الازرق فاتح

                              let grFilter = (reaction, user) =>
                                reaction.emoji.name === "🐸" &&
                                user.id === message.author.id;

                              let gr = msg.createReactionCollector(grFilter, {
                                time: 15000
                              });

                              gr.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Green")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#00FF00")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأخضر**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let brFilter = (reaction, user) =>
                                reaction.emoji.name === "💩" &&
                                user.id === message.author.id;

                              let br = msg.createReactionCollector(brFilter, {
                                time: 15000
                              });

                              br.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Brown")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#3B170B")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون البني**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let reFilter = (reaction, user) =>
                                reaction.emoji.name === "😡" &&
                                user.id === message.author.id;

                              let re = msg.createReactionCollector(reFilter, {
                                time: 15000
                              });

                              re.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Red")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#FF0000")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأحمر**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let prFilter = (reaction, user) =>
                                reaction.emoji.name === "😈" &&
                                user.id === message.author.id;

                              let pr = msg.createReactionCollector(prFilter, {
                                time: 15000
                              });

                              pr.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Purple")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#A901DB")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأرجواني**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let whFilter = (reaction, user) =>
                                reaction.emoji.name === "💀" &&
                                user.id === message.author.id;

                              let wh = msg.createReactionCollector(whFilter, {
                                time: 15000
                              });

                              wh.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "White")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#ffffff")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأبيض**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let orFilter = (reaction, user) =>
                                reaction.emoji.name === "😜" &&
                                user.id === message.author.id;

                              let or = msg.createReactionCollector(orFilter, {
                                time: 15000
                              });

                              or.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Orange")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#FFBF00")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأرجواني**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let y6Filter = (reaction, user) =>
                                reaction.emoji.name === "❌" &&
                                user.id === message.author.id;

                              let y6 = msg.createReactionCollector(y6Filter, {
                                time: 15000
                              });

                              y6.on("collect", r => {
                                message.member.removeRole(
                                  message.guild.roles.find("name", "black")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "D-Red")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Yellow")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "D-Green")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Aqua")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Green")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Brown")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Red")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Purple")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "White")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Orange")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("RANDOM")

                                  .setDescription("**:art:تم ازالة اللون**")
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
});

client.on("message", message => {
  if (message.content === prefix + "creatcolores") {
    if (!message.channel.guild)
      return message.channel.send("**This Commnad only For Servers !**");

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel
        .send("**You Dont Have** `ADMINISTRATOR` **premission**")
        .then(msg => msg.delete(6000));
    message.guild.createRole({
      name: "Black",
      color: "#000000",
      permissions: []
    });
    message.guild.createRole({
      name: "D-Red",
      color: "#e64d62",
      permissions: []
    });
    message.guild.createRole({
      name: "Yellow",
      color: "#ffea35",
      permissions: []
    });
    message.guild.createRole({
      name: "D-Green",
      color: "#bce86d",
      permissions: []
    });
    message.guild.createRole({
      name: "Aqua",
      color: "#5dafdf",
      permissions: []
    });
    message.guild.createRole({
      name: "Green",
      color: "#70ca70",
      permissions: []
    });
    message.guild.createRole({
      name: "Brown",
      color: "#9a5746",
      permissions: []
    });
    message.guild.createRole({
      name: "Red",
      color: "#ff0025",
      permissions: []
    });
    message.guild.createRole({
      name: "Purple",
      color: "#aa8fd6",
      permissions: []
    });
    message.guild.createRole({
      name: "White",
      color: "#f9f9f9",
      permissions: []
    });
    message.guild.createRole({
      name: "Orange",
      color: "#ffcc4d",
      permissions: []
    });

    message.channel.sendMessage({
      embed: new Discord.RichEmbed()
        .setColor("#502faf")
        .setAuthor(`${message.author.username}'`, message.author.avatarURL)
        .setDescription("``الالوان قيد الانشاء ....``")
    });
  }
});

const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));

client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});

client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[user.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[user.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[guild.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`اسمه الاصلي`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اسمه الاصلي`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});

///////////////////

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "السلام عليكم") {
    message.channel.send("**:heart:وعليكم السلام ورحمة الله وبركاته:heart:**");
    message.channel.sendFile("");
  }
});

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.split(" ")[0] == "=color") {
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**There's No Color With This Number ** :x: `)
      .setColor(`ff0000`);

    if (!isNaN(args) && args.length > 0)
      if (!message.guild.roles.find("name", `${args}`))
        return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args}`);
    if (!a) return;
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**Color Changed To Successfully** :white_check_mark: `)

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args}`));
  }
});

client.on("message", ra3d => {
  let args = ra3d.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (ra3d.content.startsWith(prefix + "ccolors")) {
    if (!args) return ra3d.channel.send("`يرجي اختيار كم لون `");
    if (!ra3d.member.hasPermission("MANAGE_ROLES"))
      return ra3d.channel.sendMessage(
        "`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**"
      );
    ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < `${parseInt(args) + 1}`; x++) {
      ra3d.guild.createRole({ name: x, color: "RANDOM" });
    }
  }
});

/*
client.on('message', message => {
if (message.author.bot) return;
     if (message.content  === prefix + "link") {
    const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail('https://cdn.discordapp.com/avatars/593058945732575292/e38f448c43cafc11771a74ab72713ce0.png')//@〖D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷〗#1362  حقوق
.setTitle('**Click Here To Invite The Bot Your Server 🌀**')
.setURL(' https://bit.ly/2ZAR8n9')
message.channel.send({embed});
    }
}); */

client.on("message", async message => {
  var room;
  var title; //HactorMC
  var duration; //HactorMC
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(prefix + "giveaway")) {
    //return message.channel.send('**في مشكله ببعض الاساسيات من فضلك انتظر شوي**');
    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        ":heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**"
      );
    message.channel
      .send(`**من فضلك اكتب اسم الروم بدون منشن ( # )**`)
      .then(msgg => {
        message.channel
          .awaitMessages(filter, {
            max: 1, //HactorMC
            time: 20000,
            errors: ["time"]
          })
          .then(collected => {
            let room = message.guild.channels.find(
              "name",
              collected.first().content
            );
            if (!room)
              return message.channel.send(
                "**لم اقدر علي ايجاد الروم | اعد المحاوله لاحقا**"
              );
            room = collected.first().content;
            collected.first().delete();
            msgg.edit("**اكتب مدة القيف اواي بالدقائق**").then(msg => {
              message.channel
                .awaitMessages(filter, {
                  max: 1, //HactorMC
                  time: 20000,
                  errors: ["time"]
                })
                .then(collected => {
                  if (isNaN(collected.first().content))
                    return message.channel.send(
                      ":heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**"
                    );
                  duration = collected.first().content * 60000;
                  collected.first().delete();
                  msgg
                    .edit(
                      ":eight_pointed_black_star:| **اكتب على ماذا تريد القيف اواي**"
                    )
                    .then(msg => {
                      message.channel
                        .awaitMessages(filter, {
                          max: 1,
                          time: 20000,
                          errors: ["time"]
                        })
                        .then(collected => {
                          title = collected.first().content;
                          collected.first().delete();
                          try {
                            let giveEmbed = new Discord.RichEmbed()
                              .setAuthor(
                                message.guild.name,
                                message.guild.iconURL
                              )
                              .setTitle(title)
                              .setDescription(
                                `المدة : ${duration / 60000} دقائق`
                              )
                              .setFooter(
                                message.author.username,
                                message.author.avatarURL
                              );
                            message.guild.channels
                              .find("name", room)
                              .send(giveEmbed)
                              .then(m => {
                                let re = m.react("🎉");
                                setTimeout(() => {
                                  let users = m.reactions.get("🎉").users;
                                  let list = users
                                    .array()
                                    .filter(u => u.id !== m.author.id);
                                  let gFilter =
                                    list[
                                      Math.floor(Math.random() * list.length) +
                                        0
                                    ];
                                  if (users.size === 1)
                                    gFilter = "**لم يتم التحديد**";
                                  let endEmbed = new Discord.RichEmbed()
                                    .setAuthor(
                                      message.author.username,
                                      message.author.avatarURL
                                    )
                                    .setTitle(title)
                                    .addField(
                                      "انتهى القيف اواي !",
                                      `الفائز هو : ${gFilter}`
                                    )
                                    .setFooter(
                                      message.guild.name,
                                      message.guild.iconURL
                                    );
                                  m.edit(endEmbed);
                                }, duration);
                              });
                            msgg.edit(
                              `:heavy_check_mark:| **تم اعداد القيف اواي**`
                            );
                          } catch (e) {
                            msgg.edit(
                              `:heavy_multiplication_x:| **لم اقدر علي اعداد القيف اواي بسبب عدم توفر البرمشن المطلوب**`
                            );
                            console.log(e);
                          }
                        });
                    });
                });
            });
          });
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "setby")) {
    let args = message.mentions.channels.first();
    if (!args)
      message.channel.send("** منشن روم . ❌**").then(m => {
        m.delete(1500);
      });
    if (
      !message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send("**ليس لديك صلاحيات . ❌**");
    message.channel.send(`**${args}. لقد تم شغيل المغادرة هنا.**`); //By ItzTexo
    client.on("guildMemberAdd", member => {
      if (member.user.bot) return;
      var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`**__الله معاك ✋ 😢 😔__**`)
        .addField("**__شكرا لوقتك__**  ", `${member}`)
        .setDescription(`**__مع السلامه تشرفنا بك ✋😢 😔__** `)
        .addField("👤   تبقي", `**[ ${member.guild.memberCount} ]**`, true)
        .setColor("RANDOM")
        .setFooter(
          `==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`,
          "https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png"
        );

      var channel = member.guild.channels.find("name", "leave");
      if (!channel) return;
      channel.send({ embed: embed });
    });
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === "حشيش") {
    message.channel.sendFile(
      "https://cdn.discordapp.com/attachments/462240606513659904/481474963925106708/images.jpg"
    );
  }
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = "-";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}kick`) {
    let kUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!kUser) return message.channel.send("فين العضو ؟");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("ما عندك برمشن");
    if (kUser.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("ما تقدر تسوي كيك للأدمين");

    let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField(
        "Kicked By",
        `<@${message.author.id}> with the id ${message.author.id}`
      )
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find("name", "kick-ban");
    if (!kickChannel) return message.channel.send("لم اجد روم ال kick-ban");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
  }
});

client.on("message", msg => {
  if (msg.content === "باك") {
    msg.reply(
      "** ولكم نورت :sparkling_heart: :wink:**  "
    );
  }
});

client.on("message", msg => {
  if (msg.content === "هاي") {
    msg.reply(
      "** هاي يا عسل   :kissing_heart: :heart: **"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "بحبك") {
    msg.reply(
      "**عيب :joy:  **"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "هلا") {
    msg.reply("**هلا بيك :heart: **");
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith("=ping")) {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    var Bping = `${Math.round(client.ping)}`; // Mdax77x CopyRight | Toxic Codes

    const E1ping = new Discord.RichEmbed()
      .setTitle("ــــــــــــــــــــــــــــــ")
      .addField(
        `**BOT Ping Is** :__${Bping}📶__`,
        "ــــــــــــــــــــــــــــــ"
      )
      .setFooter(`Requested by | ${message.author.tag}`)
      .setColor("RANDOM");
    message.channel.send(E1ping);
  }
});

client.on("guildCreate", guild => {
  var embed = new Discord.RichEmbed().setImage(
    "https://cdn.discordapp.com/attachments/523532054499950602/607172616905555971/fx-long.gif"
  )
    .setDescription(` ✽ **Thank You for Adding  Bot To Your Server**  ✽ 
   ✽ **Support Server** [ • https://discord.gg/X9esPBy • ]  ✽ `);
  guild.owner.send(embed);
});

client.on("message", msg => {
  if (msg.content === "=inv") {
    msg.reply(
      "**✽ Add Bot [** • https://bit.ly/2ZAR8n9 •** ] ✽**"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "bot") {
    msg.reply(
      "**✽ Add Bot [** • https://bit.ly/2ZAR8n9 •** ] ✽**"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "البوت") {
    msg.reply(
      "**✽ Add Bot [** • https://bit.ly/2ZAR8n9 •** ] ✽**"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "رابط البوت") {
    msg.reply(
      "**✽ Add Bot [** • https://bit.ly/2ZAR8n9 •** ] ✽**"
    );
  }
});

client.on("message", message => {
  //Baron#1500

  if (message.content.startsWith(prefix + "rroles")) {
    //Baron#1500
    if (message.author.bot) return; //Baron#1500
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(" | **ليس لديك صلاحيات**");
    //دى بقا الرتب ال انت عاوزو يعملها
    let roleking = message.guild.roles.find(r => r.name === "⇁『KiNG 』‏‏༄  ❥"); //Baron#1500
    if (!roleking) {
      message.guild.createRole({
        //Baron#1500
        name: "⇁『KiNG 』‏‏༄  ❥",
        color: "RANDOM",
        position: 1,
        hoist: true,
        permissions: "ADMINISTRATOR"
      });
    }
    let roleleader = message.guild.roles.find(
      r => r.name === "⇁『LEADER』‏‏༄  ❥"
    ); //Baron#1500
    if (!roleleader) {
      message.guild.createRole({
        //Baron#1500
        name: "⇁『LEADER』‏‏༄  ❥", //Baron#1500
        color: "RANDOM",
        position: 2, //Baron#1500
        hoist: true,
        permissions: [
          "CREATE_INSTANT_INVITE",
          "KICK_MEMBERS",
          "BAN_MEMBERS",
          "MANAGE_CHANNELS",
          "ADD_REACTIONS",
          "VIEW_AUDIT_LOG",
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "SEND_TTS_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "MANAGE_NICKNAMES"
        ]
      });
    } //Baron#1500
    let rolebigboss = message.guild.roles.find(
      r => r.name === "⇁『BiG BOSS 』‏‏༄  ❥"
    ); //Baron#1500
    if (!rolebigboss) {
      //Baron#1500
      message.guild.createRole({
        name: "⇁『BiG BOSS 』‏‏༄  ❥",
        color: "RANDOM",
        position: 3, //Baron#1500
        hoist: true,
        permissions: [
          "CREATE_INSTANT_INVITE",
          "KICK_MEMBERS",
          "ADD_REACTIONS",
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "MANAGE_NICKNAMES"
        ]
      });
    } //Baron#1500
    let rolecaptain = message.guild.roles.find(
      r => r.name === "⇁『CAPTAIN 』‏‏༄  ❥"
    ); //Baron#1500
    if (!rolecaptain) {
      //Baron#1500
      message.guild.createRole({
        name: "⇁『CAPTAIN 』‏‏༄  ❥",
        color: "RANDOM",
        postion: 4,
        hoist: true, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME"
        ]
      });
    }
    let rolesergant = message.guild.roles.find(
      r => r.name === "⇁『SERGEANT 』‏‏༄  ❥"
    ); //Baron#1500
    if (!rolesergant) {
      message.guild.createRole({
        name: "⇁『SERGEANT 』‏‏༄  ❥",
        color: "RANDOM", //Baron#1500
        postion: 5,
        hoist: true, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME"
        ]
      });
    } //Baron#1500
    let roleyoutuber = message.guild.roles.find(
      r => r.name === "⇁『youtuber 』‏‏༄  ❥"
    );
    if (!roleyoutuber) {
      //Baron#1500
      message.guild.createRole({
        name: "⇁『youtuber 』‏‏༄  ❥",
        color: "RANDOM",
        postion: 6,
        hoist: true, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      });
    }
    let roleactive = message.guild.roles.find(
      r => r.name === "⇁『ACTIVE 』‏‏༄  ❥"
    ); //Baron#1500
    if (!roleactive) {
      //Baron#1500
      message.guild.createRole({
        name: "⇁『ACTIVE 』‏‏༄  ❥",
        color: "RANDOM",
        postion: 7,
        hoist: true, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK", //Baron#1500
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ] //Baron#1500
      });
      message.guild.createRole({
        //Baron#1500
        name: "Fortnite",
        color: "RANDOM", //Baron#1500
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK", //Baron#1500
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ] //Baron#1500
      });
      message.guild.createRole({
        //Baron#1500
        name: "playerunknowns",
        color: "RANDOM",
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ] //Baron#1500
      }); //Baron#1500
      message.guild.createRole({
        name: "counter-strike",
        color: "RANDOM", //Baron#1500
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      }); //Baron#1500
      message.guild.createRole({
        name: "creative-destruction", //Baron#1500
        color: "RANDOM",
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      });
      message.guild.createRole({
        //Baron#1500
        name: "overwatch",
        color: "RANDOM",
        postion: 7, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      }); //Baron#1500
      message.guild.createRole({
        name: "minecraft", //Baron#1500
        color: "RANDOM",
        postion: 7, //Baron#1500
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      }); //Baron#1500
      message.guild.createRole({
        //Baron#1500
        name: "league-of-legends",
        color: "RANDOM", //Baron#1500
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      }); //Baron#1500
      message.channel.send(message.member + "**جارى انشاء الرتب**").then(m => {
        setTimeout(() => {
          //Baron#1500
          m.edit("**تم انشاء الرتب بنجاح**");
        }, 3000); //Baron#1500
      });
    } //Baron#1500
  }
}); //Baron#1500
client.on("message", message => {
  let roleyoutuber = message.guild.roles.find(
    r => r.name === "⇁『youtuber 』‏‏༄  ❥"
  );
  let rolepubg = message.guild.roles.find(r => r.name === "playerunknowns");
  let rolecsgo = message.guild.roles.find(r => r.name === "counter-strike");
  let rolecd = message.guild.roles.find(r => r.name === "creative-destruction");
  let roleow = message.guild.roles.find(r => r.name === "overwatch");
  let rolemc = message.guild.roles.find(r => r.name === "minecraft");
  let rolelol = message.guild.roles.find(r => r.name === "league-of-legends");
  let rolefortnite = message.guild.roles.find(r => r.name === "Fortnite");
  //Baron#1500
  let roles = message.guild.roles.find(
    all => all.name === "⇁『KiNG 』‏‏༄  ❥",
    "⇁『LEADER』‏‏༄  ❥",
    "⇁『BiG BOSS 』‏‏༄  ❥",
    "⇁『CAPTAIN 』‏‏༄  ❥",
    "⇁『SERGEANT 』‏‏༄  ❥",
    "⇁『youtuber 』‏‏༄  ❥",
    "⇁『ACTIVE 』‏‏༄  ❥"
  ); //Baron#1500
  if (message.content.startsWith(prefix + "channels")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(" | **ليس لديك صلاحيات**");
    if (!roles)
      return message.reply("**من فضلك قم بانشاء الرتب اولا اكتب $roles**"); //Baron#1500
    if (roles) {
      //Baron#1500
      message.reply("**جارى انشاء الرومات**").then(c => {
        //Baron#1500
        setTimeout(() => {
          c.edit("**تم انشاء الرومات بنجاح**"); //Baron#1500
        }, 10000);
      });

      message.guild
        .createChannel(`${message.guild.name}-TEXT`, "category")
        .then(tb => {
          //Baron#1500
          message.guild.createChannel("welcome", "text").then(nws => {
            nws.setParent(tb);
            nws.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false //Baron#1500
            });
          });
          message.guild.createChannel("info", "text").then(inf => {
            //Baron#1500
            inf.setParent(tb); //Baron#1500
            inf.overwritePermissions(message.guild.id, {
              //Baron#1500
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false //Baron#1500
            });
          });
          message.guild.createChannel("news", "text").then(nws => {
            //Baron#1500
            nws.setParent(tb);
            nws.overwritePermissions(message.guild.id, {
              //Baron#1500
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false //Baron#1500
            });
          }); //Baron#1500
          message.guild.createChannel("chat", "text").then(cht => {
            //Baron#1500
            cht.setParent(tb);
            cht.overwritePermissions(message.guild.id, {
              MENTION_EVERYONE: false //Baron#1500
            });
          });
          message.guild.createChannel("bot-commands", "text").then(cmd => {
            //Baron#1500
            cmd.setParent(tb);
            cmd.overwritePermissions(message.guild.id, {
              //Baron#1500
              MENTION_EVERYONE: false //Baron#1500
            });
          });
          message.guild.createChannel("youtubers", "text").then(yt => {
            //Baron#1500
            yt.setParent(tb); //Baron#1500
            yt.overwritePermissions(roleyoutuber, {
              SEND_MESSAGES: true
            });
            yt.overwritePermissions(message.guild.id, {
              //Baron#1500
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            });
          }); //Baron#1500
          message.guild.createChannel("pic", "text").then(pic => {
            //Baron#1500
            pic.setParent(tb);
            pic.overwritePermissions(message.guild.id, {
              MENTION_EVERYONE: false
            });
          });
          message.guild.createChannel("cut-tweet", "text").then(cut => {
            cut.setParent(tb);
            cut.overwritePermissions(message.guild.id, {
              MENTION_EVERYONE: false
            }); //Baron#1500
          });
        });
      message.guild.createChannel(`Games-Chat`, "category").then(tb => {
        //Baron#1500
        message.guild.createChannel("Fortnite", "text").then(wlc => {
          wlc.setParent(tb);
          wlc.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          }); //Baron#1500
          wlc.overwritePermissions(rolefortnite, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          });
        }); //Baron#1500
        message.guild.createChannel("playerunknowns", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(message.guild.id, {
            //Baron#1500
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(rolepubg, {
            //Baron#1500
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false //Baron#1500
          });
        });
        message.guild.createChannel("counter-strike", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false, //Baron#1500
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(rolecsgo, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          }); //Baron#1500
        });
        message.guild.createChannel("creative-destruction", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(rolecd, {
            SEND_MESSAGES: true, //Baron#1500
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          }); //Baron#1500
        });
        message.guild.createChannel("overwatch", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: true, //Baron#1500
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          }); //Baron#1500
        });
        message.guild.createChannel("minecraft", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(rolemc, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            //Baron#1500
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          });
        }); //Baron#1500
        message.guild.createChannel("league-of-legends", "text").then(ch => {
          ch.setParent(tb); //Baron#1500
          ch.overwritePermissions(rolelol, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          }); //Baron#1500
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false //Baron#1500
          });
        });
      });
      message.guild
        .createChannel(`.${message.guild.name} | 🔊 .`, "category")
        .then(tb => {
          //Baron#1500
          message.guild
            .createChannel("「الـقـرأن الـكـريــم | 📜」", "voice")
            .then(ch => {
              ch.setParent(tb);
              ch.overwritePermissions(message.guild.id, {
                SPEAK: false //Baron#1500
              });
              message.guild
                .createChannel("「Events | 🎲 .」", "voice")
                .then(ch => {
                  ch.setParent(tb);
                  ch.setUserLimit(50); //Baron#1500
                  ch.overwritePermissions(message.guild.id, {
                    SPEAK: false
                    //Baron#1500
                  });
                });
            });
        });
      message.guild.createChannel(`.Talking | ✋🏽 .`, "category").then(tb => {
        message.guild
          .createChannel(`「${message.guild.name} | 🔊 .」`, "voice")
          .then(ch => {
            //Baron#1500
            ch.setParent(tb);
            ch.setUserLimit(50); //Baron#1500
          });
        message.guild.createChannel("「Sounds | ♫ .」", "voice").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.setUserLimit(50); //Baron#1500
        });
      });
      message.guild
        .createChannel(`» Games | الالعاب .`, "category")
        .then(tb => {
          //Baron#1500
          message.guild
            .createChannel(`Fortnite | فورتنآيت .`, "voice")
            .then(ch => {
              ch.setParent(tb); //Baron#1500
              ch.overwritePermissions(message.guild.id, {
                CONNECT: false
              });
              ch.overwritePermissions(rolefortnite, {
                CONNECT: true //Baron#1500
              });
            }); //Baron#1500
          message.guild
            .createChannel("Minecraft | مآينكرآفت", "voice")
            .then(ch => {
              ch.setParent(tb);
              ch.overwritePermissions(message.guild.id, {
                //Baron#1500
                CONNECT: false
              });
              ch.overwritePermissions(rolemc, {
                //Baron#1500
                CONNECT: true
              });
            }); //Baron#1500
          message.guild
            .createChannel(`Creative | كريآتف .`, "voice")
            .then(ch => {
              ch.setParent(tb); //Baron#1500
              ch.overwritePermissions(message.guild.id, {
                CONNECT: false
              });
              ch.overwritePermissions(rolecd, {
                CONNECT: true //Baron#1500
              });
            });
          message.guild.createChannel("Legends | لوول", "voice").then(ch => {
            //Baron#1500
            ch.setParent(tb);
            ch.overwritePermissions(message.guild.id, {
              CONNECT: false
            }); //Baron#1500
            ch.overwritePermissions(rolelol, {
              CONNECT: true //Baron#1500
            });
          });
        });
      message.guild.createChannel(`» DJ | الموسيقي .`, "category").then(tb => {
        //Baron#1500
        message.guild.createChannel(`» Art.`, "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(15); //Baron#1500
        });
        message.guild.createChannel(`» Fun.`, "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(15);
        }); //Baron#1500
        message.guild.createChannel(`» Life.`, "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(15); //Baron#1500
        });
        message.guild.createChannel(`» Sing.`, "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(15);
        }); //Baron#1500
      });
      message.guild.createChannel(`» Privates | خآص .`, "category").then(tb => {
        //Baron#1500
        message.guild.createChannel(`» Single.`, "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(1);
        }); //Baron#1500
        message.guild.createChannel("» Doubles.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(2);
        }); //Baron#1500
        message.guild.createChannel("» Triples.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(3);
        }); //Baron#1500
        message.guild.createChannel("» Forth.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(4);
        }); //Baron#1500
        message.guild.createChannel("» Classic.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(10);
        }); //Baron#1500
        message.guild.createChannel("» Group.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(15);
        });
      }); //Baron#1500
    }
  }
}); //Baron#1500

//////////////////////

//ملف:server.js
/////

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(adminprefix + "limit")) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (message.content.startsWith(adminprefix + "limitbans")) {
      if (!num) return message.channel.send("**→ | Supply a number !");
      if (isNaN(num)) return message.channel.send("**→ | Supply a number !**");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**→ | Changed bans limit to : ${config[message.guild.id].banLimit}.**   `
      ); // WESO
    }
    if (message.content.startsWith(adminprefix + "limitkicks")) {
      if (!num) return message.channel.send("**→ | Supply a number !**");
      if (isNaN(num)) return message.channel.send("**→ | Supply a number !** "); //WESO
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**→ | Changed kicks limit to : ${config[message.guild.id].kickLimits}.**  `
      );
    }
    if (message.content.startsWith(adminprefix + "limitroleDelete")) {
      if (!num) return message.channel.send("**→ | Supply a number !**");
      if (isNaN(num)) return message.channel.send("**→ | Supply a number !**");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**→ | Changed Role Deleting limit to : ${config[message.guild.id].roleDelLimit}.**   `
      );
    }
    if (message.content.startsWith(adminprefix + "limitroleCreate")) {
      if (!num) return message.channel.send("**→ | Supply a number !**");
      if (isNaN(num)) return message.channel.send("**→ | Supply a number !**");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**→ | Changed Role Creation limit to : ${config[message.guild.id].roleCrLimits}.**  `
      );
    } //WESO
    if (message.content.startsWith(adminprefix + "limitchannelDelete")) {
      if (!num) return message.channel.send("**→ | Supply a number !**");
      if (isNaN(num)) return message.channel.send("**→ | Supply a number !**");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**→ | Changed Channel Deleting limit to : ${config[message.guild.id].chaDelLimit}.**   `
      );
    }
    if (message.content.startsWith(adminprefix + "limittime")) {
      if (!num) return message.channel.send("**→ | Supply a number !**");
      if (isNaN(num)) return message.channel.send("**→ | Supply a number !**");
      config[message.guild.id].time = num;
      message.channel.send(
        `**→ | Changed Times limit to : ${config[message.guild.id].time}.**   `
      );
    }
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    //WESO
    anti[channel.guild.id + entry.id] = {
      actions: 1
    }; //WESO
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    ); //
    console.log("test-bot");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**→ | ${entry.username} , Deleted many __Channles__.**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        //
        if (e) throw e;
      }); //
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
}); //WESO

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**→ | ${entry.username} , Deleted many __Roles__!**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**→ | ${entry.username} , is creating many __Rooms__.**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

var Enmap = require("enmap");
client.antibots = new Enmap({ name: "chat" });
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
  var prefix = "=";
  if (codes.content.startsWith(adminprefix + "antibots on")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "On"
    });

    codes.channel.send("AntiBots Join Is On");
  }
  if (codes.content.startsWith(adminprefix + "antibots off")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "Off"
    });
    codes.channel.send("AntiBots Join Is Off");
  }
});

julian.on("guildMemberAdd", member => {
  if (!antibots.get(`${member.guild.id}`)) {
    antibots.set(`${member.guild.id}`, {
      onoff: "Off"
    });
  }
  if (antibots.get(`${member.guild.id}`).onoff == "Off") return;
  if (member.user.bot) return member.kick();
});

client.on("message", async message => {
  const moment = require("moment"); //npm i moment
  const ms = require("ms"); //npm i ms
  // var prefix = '' //Bot Prefix !
  var time = moment().format("Do MMMM YYYY , hh:mm");
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
    hours = currentTime.getHours() + 3,
    minutes = currentTime.getMinutes(),
    done = currentTime.getMinutes() + duration,
    seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }

  var filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(prefix + "gcreate")) {
    let embed1 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Missing the following permission `MANAGE_GUILD`");

    let embed2 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Please send the `room` name without mentioning it");

    let embed3 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Wrong room name");

    let embed4 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Please send the `time`");

    let embed5 = new Discord.RichEmbed()
      .setColor()
      .setDescription(
        "Wrong time format\nExample of time format: 1s / 1m / 1h / 1d / 1w"
      );

    let embed6 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Please send the `gift`");

    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.channel.send(embed1);
    message.channel.send(embed2).then(msg => {
      message.channel
        .awaitMessages(filter, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
          let room = message.guild.channels.find(
            "name",
            collected.first().content
          );
          if (!room) return message.channel.send(embed3);
          room = collected.first().content;
          collected.first().delete();
          msg.edit(embed4).then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (!collected.first().content.match(/[1-60][s,m,h,d,w]/g))
                  return message.channel.send(embed5);
                duration = collected.first().content;
                collected.first().delete();
                msg.edit(embed6).then(msg => {
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,
                      time: 20000,
                      errors: ["time"]
                    })
                    .then(collected => {
                      title = collected.first().content;
                      collected.first().delete();
                      msg.delete();
                      message.delete();
                      try {
                        let giveEmbed = new Discord.RichEmbed()
                          .setColor()
                          .setTitle(`${title}`)
                          .setDescription(
                            `React With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`
                          );
                        //.setFooter(message.author.username, message.author.avatarURL);
                        message.guild.channels
                          .find("name", room)
                          .send(" :tada: **Giveaway** :tada:", {
                            embed: giveEmbed
                          })
                          .then(m => {
                            let re = m.react("🎉");
                            setTimeout(() => {
                              let users = m.reactions.get("🎉").users;
                              let list = users
                                .array()
                                .filter(
                                  u => (u.id !== m.author.id) !== client.user.id
                                );
                              let gFilter =
                                list[
                                  Math.floor(Math.random() * list.length) + 1
                                ];
                              if (gFilter === undefined) {
                                let endEmbed = new Discord.RichEmbed()
                                  .setColor()
                                  .setTitle(title)
                                  .setDescription(
                                    `Winners : no enough number of reaction so there is no winner`
                                  )
                                  .setFooter("Ended at :")
                                  .setTimestamp();
                                m.edit("** 🎉 GIVEAWAY ENDED 🎉**", {
                                  embed: endEmbed
                                });
                              } else {
                                let endEmbed = new Discord.RichEmbed()
                                  .setColor()
                                  .setTitle(title)
                                  .setDescription(`Winners : ${gFilter}`)
                                  .setFooter("Ended at :")
                                  .setTimestamp();
                                m.edit("** 🎉 GIVEAWAY ENDED 🎉**", {
                                  embed: endEmbed
                                });
                              }
                              if (gFilter === undefined) {
                                // message.guild.channels.find("name" , room).send("No enough number of reactions")
                              } else {
                                message.guild.channels
                                  .find("name", room)
                                  .send(
                                    `**Congratulations ${gFilter}! You won The \`${title}\`**`
                                  );
                              }
                            }, ms(duration));
                          });
                      } catch (e) {
                        message.channel.send(
                          `:heavy_multiplication_x:| **i Don't Have Prem**`
                        );
                        console.log(e);
                      }
                    });
                });
              });
          });
        });
    });
  }
});

client.on("message", async message => {
  if (message.content.includes("discord.gg")) {
    // if(message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.channel.guild) return;
    message.delete();
  }
});

const replyMSG = JSON.parse(fs.readFileSync("./replyMSG.json", "utf8")); // i dont wanna explain you are not my father!

function saveReplay() {
  fs.writeFile("./replyMSG.json", JSON.stringify(replyMSG), function(err) {
    if (err) throw err;
  });
}

//If You want to remove //R.I.P Royal Bot! this message just click ctrl + h and replace this message to nothing

client.on("message", message => {
  var prefix = "="; //prefix
  if (!replyMSG[message.author.id])
    replyMSG[message.author.id] = {
      contentmessage: "none",
      replayMessage: "none"
    };
  saveReplay();

  if (message.content.startsWith(prefix + "reply")) {
    if (message.author.bot || message.channel.type == "dm") return undefined;

    let contmessage;

    let filter = m => m.author.id === message.author.id;
    message.channel
      .send(
        " |** من فضلك اكتب الرساله الان...** "
      )
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            //R.I.P Royal Bot!
            maxMatches: 1,
            time: 12000,
            errors: ["time"]
          })

          .then(collected => {
            contmessage = collected.first().content;
            msg.edit(":scroll: | من فضلك اكتب الرد الان... :pencil2: ");

            message.channel
              .awaitMessages(filter, {
                maxMatches: 1,
                time: 12000,
                errors: ["time"]
              })

              .then(collectedd => {
                replyMSG[message.author.id] = {
                  contentmessage: contmessage,
                  replayMessage: collectedd.first().content
                };
                saveReplay();
                var embed1 = new Discord.RichEmbed()
                  .setTitle(`Done The Autoreply Setup`)
                  .setThumbnail(message.author.avatarURL)
                  .setColor("GRAY")
                  .setDescription(
                    `
                    Message:
                    ${contmessage}
                    Reply:
                    ${collectedd.first().content}`
                  )
                  .setFooter(client.user.username, client.user.avatarURL);
                msg.edit(
                  "  |** تم الاعداد بنجاح...** "
                );

                message.channel.send(embed1);
              });
          });
      });
  }
});

client.on("message", message => {
  let messagecontent = replyMSG[message.author.id].contentmessage;
  let reply = replyMSG[message.author.id].replayMessage;
  if (message.content == messagecontent) {
    if (messagecontent == "none" || reply == "none") return undefined;
    message.channel.send(reply);
  }
});

///////////////////

const credits = JSON.parse(fs.readFileSync("./credits.json"));
var time = require("./time.json");
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = {
      credits: 0
    };
  fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
  if (args[0].toLowerCase() == `${prefix}credits`) {
    const mention = message.mentions.users.first() || message.author;
    const mentionn = message.mentions.users.first();
    if (!args[2]) {
      message.channel.send(
        `**${mention.username}, your :credit_card: balance is \`$${credits[mention.id].credits}\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2])) return message.channel.send(`**:x: | Error**`);
      if (args[2] < 1) return message.channel.send(`**:x: | Error**`);
      if (mention.bot) return message.channel.send(`**:x: | Error**`);
      if (mentionn.id === message.author.id)
        return message.channel.send(`**:x: | Error**`);
      if (args[2] > credits[author].credits)
        return message.channel.send(
          `**:x: | Error , You Don't Have Enough Credit**`
        );
      if (args[2].includes("-")) return message.channel.send(`**:x: | Error**`);
      let resulting = Math.floor(args[2] - args[2] * (5 / 100));
      let tax = Math.floor(args[2] * (5 / 100));
      let first = Math.floor(Math.random() * 9);
      let second = Math.floor(Math.random() * 9);
      let third = Math.floor(Math.random() * 9);
      let fourth = Math.floor(Math.random() * 9);
      let num = `${first}${second}${third}${fourth}`;
      let canvas = Canvas.createCanvas(108, 40);
      let ctx = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/attachments/608278049091223552/617791172810899456/hmmm.png"
      );
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.font = "20px Arial Bold";
      ctx.fontSize = "20px";
      ctx.fillStyle = "#ffffff";
      message.channel
        .send(
          `**${
            message.author.username
          }, Transfer Fees: \`${tax}\`, Amount: \`$${resulting.toLocaleString()}\`**
type these numbers to confirm: `
        )
        .then(essss => {
          ctx.fillText(num, canvas.width / 2.4, canvas.height / 1.7);
          message.channel.sendFile(canvas.toBuffer()).then(m => {
            message.channel
              .awaitMessages(r => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (collected.first().content === num) {
                  message.channel.send(
                    `**:moneybag: | ${
                      message.author.username
                    }, Done Trans \`$${resulting.toLocaleString()}\` To ${mentionn}**`
                  );
                  mention.send(
                    `**:money_with_wings: | Transfer Receipt \`\`\`You Have Received \`$${resulting.toLocaleString()}\` From User ${
                      message.author.username
                    }; (ID (${message.author.id})\`\`\``
                  );
                  m.delete();
                  credits[author].credits += Math.floor(
                    -resulting.toLocaleString()
                  );
                  credits[mentionn.id].credits += Math.floor(
                    +resulting.toLocaleString()
                  );
                  fs.writeFileSync(
                    "./credits.json",
                    JSON.stringify(credits, null, 4)
                  );
                } else {
                  m.delete();
                  essss.delete();
                }
              });
          });
        });
    } else {
      message.channel.send(
        `**:x: | Error , Please Command True Ex: \`${prefix}credits [MentionUser] [Balance]\`**`
      );
    }
  }
  if (args[0].toLowerCase() === `${prefix}daily`) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send(
        `**:stopwatch: |  ${
          message.author.username
        }, your daily :dollar: credits refreshes in ${pretty(times, {
          verbose: true
        })}.**`
      );
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**:atm:  | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
}); // Me ZIAD كم حاقد

client.on("message", async message => {
  let Fire = message.content.split(" ")[0].substring(prefix.length);
  let mention = message.mentions.users.first() || message.author;
  if (Fire === "addcredits") {
    let args = message.content.split(" ");
    if (!devs.includes(message.author.id)) return;
    if (!args[1] || isNaN(args[1])) return message.reply("**Type Credit**");
    if (!credits[mention.id]) return;
    credits[mention.id].credits += +args[1];
    fs.writeFileSync("./credits.json", JSON.stringify(credits));
    console.log(credits[mention.id]);
    message.reply(
      `**, Adedd Money For : \`${
        args[1]
      }\`Done`
    );
  } else if (Fire === "removecredits") {
    let args = message.content.split(" ");
    if (!devs.includes(message.author.id)) return;
    if (!args[1] || isNaN(args[1])) return message.reply("**Type Credit**");
    if (!credits[mention.id]) return;
    credits[mention.id].credits += -args[1];
    fs.writeFileSync("./credits.json", JSON.stringify(credits));
    console.log(credits[mention.id]);
    message.reply(
      `**, Remove Money For : \`${
        args[1]
      }\`**<a:606976631566893056:636655980943507507>`
    );
  }
});
let level = JSON.parse(fs.readFileSync("./level.json", "utf8"));
client.on("message", message => {
  if (message.author.bot) return undefined;
  if (!level[message.author.id])
    level[message.author.id] = {
      xp: 0,
      level: 0
    };
  let username = message.author;
  level[message.author.id].xp++;
  let userlevel = level[message.author.id];
  if (userlevel.xp > Math.floor(Math.random() * 250) + 50) {
    userlevel.level++;
    userlevel.xp = 0;
  }
  fs.writeFileSync("./level.json", JSON.stringify(level), function(s) {
    if (s) throw s;
  });
});