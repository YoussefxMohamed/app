///هذا البوت الاصدار الثاني من بوت السيستم تحت ادارة اسامة خالد :
///رابط المقطع: https://youtu.be/6B9nrQp02Rk
//// البوت تجميع ، وليس عمل من الصفر والغاية بالاخير افادة الناس وجميع الحقوق محفوظة وموجودة
///اخر تحديث 11\5\2020
require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
const { MessageEmbed } = require("discord.js");

app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://turbo-bot-finsal.glitch.me/`);
}, 280000);

////بكجات
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: false });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
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
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyBGtbgG-QWkof0eInOgxKS6AXDiuzLA6Hs"); //تعديل اساسي سوي اي بي اي جديد
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyBGtbgG-QWkof0eInOgxKS6AXDiuzLA6Hs"; ///تعديل اساسي سوي اي بي اي جديد
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//كود تغيير الحالة
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map((c) => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("idle");

  client.user.setActivity(`${prefix}helpT`, { type: "Playing", status: "idle"});
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
message.delete()
   /* if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**ADMINISTRATOR ليس لديك صلاحيات :rolling_eyes:**"
      );*/

    message.channel.send(" " + args.join("  "));
  }
});

////كود تيكت
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "بس يابااااااااااااااااااا")) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists((gg) => gg.name === "Support Team"))
      return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\`.`);
    if (
      message.guild.channels.filter(
        (Channel) =>
          Channel.name == `ticket-${message.author.id}` &&
          Channel.type == "text"
      ).size > 0
    )
      return message.channel.send(`You already have a ticket open.`);
    message.guild
      .createChannel(`ticket-${message.author.id}`, "text")
      .then((c) => {
        let role = message.guild.roles.find((gg) => gg.name === "Support Team");
        let role2 = message.guild.roles.find((gg) => gg.name === "@everyone");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true,
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true,
        });
        c.overwritePermissions(message.guild.id, {
          READ_MESSAGES: false,
        });
        message.channel.send(`:white_check_mark: تم إنشاء تذكرتك, ${c}.`);
        const embed = new Discord.RichEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون ** موظفو الدعم ** لدينا هنا قريبًا للمساعدة.`
          )
          .setTimestamp();
        c.send({
          embed: embed,
        });
      })
      .catch(console.error);
  } else if (message.content.startsWith(prefix + "closet")) {
    if (!message.guild.roles.exists((gg) => gg.name === "Support Team"))
      return message.channel.send(` لازم تسوي رتبة اسمها \`Support Team\`.`);
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send("This isn't a ticket channel!");
    if (
      !message.member.roles.has(
        message.guild.roles.filter((r) => r.name === "Support Team").first().id
      )
    )
      return message.channel.send("You don't have the `Support Team` role!");
    message.channel
      .delete()
      .catch((e) => message.channel.send("Check my permissions!"));
  }
});

client.on("message", async (message) => {
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
        `Usage: ${args[0]} [role color] [role name]\nExample: ${args[0]} blue Admin`
      );
    try {
      let role = await message.guild.createRole({
        name: args.slice(2).join(" ") || "new role",
        color: args[1].toUpperCase() || null,
      });
      await message.reply(`Done, Created **${role.name}** role!`);
    } catch (e) {
      message.reply(`Error! ${e.message || e}`);
    }
  }
});

//// كود معلومات الشخص او اليوزر
client.on("message", (pixelbot) => {
  // itzZa1D - Codes Team.
  if (pixelbot.content.startsWith(prefix + "user")) {
    // itzZa1D - Codes Team.
    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply(
        "**<a:glt:929681265752412180> - This Command is only done on Servers**"
      );
    pixelbot.guild.fetchInvites().then((invites) => {
      // itzZa1D - Codes Team.
      let personalInvites = invites.filter(
        (i) => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map((roles) => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() // itzZa1D - Codes Team.
        .setColor("#FFEB3B")
        .setTitle(" :beginner: | User Info") // itzZa1D - Codes Team.
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("**✽ Name :**   ", pixelbot.author.username, true)
        .addField("**✽ Tag :**   ", pixelbot.author.discriminator, true)
        .addField("**✽ ID :** ", pixelbot.author.id, true) // itzZa1D - Codes Team.
        .addField(
          "**✽ Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          false
        )
        .addField(
          "**✽ Created At :**    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**✽ Total invites :**    ", inviteCount, true)
        .setTimestamp(); // itzZa1D - Codes Team.

      pixelbot.channel.send(pixeluser).then((c) => {}); // itzZa1D - Codes Team.
    });
  }
}); // itzZa1D - Codes Team.

////كود معلومات البوت
client.on("message", (message) => {
  if (message.content === prefix + "bot") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("#03A9F4")
      .addField("**Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**Channels** : ", `» ${client.channels.size} `, true)
      .addField("**Users** : ", `» ${client.users.size} `, true)
      .addField("**Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**Bot Owner** :  ", `» <@736038771535118377>`, true) // تعديل اساسي غير الايدي لايدي حسابك
      .setImage("")
      .setFooter(message.author.username, message.client.avatarURL);
    message.channel.send(bot);
  }
});

client.on("message", (message) => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.send("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**انا لا امتلك ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.send("**منشن شخص**");
    if (
      message.mentions.members.first().highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send("ما تقدر تبند شخص رتبته اعلى منك!");
    if (!message.guild.member(user).bannable)
      return message.send(
        "**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**"
      );

    message.guild.member(user).ban(7, user);

    message.channel.send(
      `**<a:s7gamda:929797437193867304> ${user.tag} banned from the server ! :airplane: **`
    );
    const banembed = new Discord.RichEmbed()
      .setColor("RED")
      .setImage("https://i.imgur.com/pgXofXt.gif")
      .setFooter("علوبي");
    message.channel.send(banembed);

    /// كود الانفايت
  }
});
client.on("message", async (message) => {
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

    message.guild.fetchInvites().then((invs) => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter((i) => i.inviter.id === oi);
      let urll = invs.filter((i) => i.inviter.id === oi);
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
      console.log(inviteCode);
      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`:incoming_envelope: **INVITE INFO** ${Username}`)
        .addField(
          "**عدد الدعوات للسيرفر**",
          `[ شخص **${Number(inviteCount)}** ]   `
        )
        .addField(
          "**تاريخ انضمامك لسيرفرنا **",
          ` [ منذ  **${daysJoined.toFixed(0)}** يوم ]   `
        )
        .addField(
          "**رابط الدعوة الذي دخلت منه**  ",
          `[ **${
            inviteCode &&
            inviteCode.code &&
            inviteCode.code.includes("discord.gg")
              ? inviteCode.code
              : `https://discord.gg/${inviteCode.code || "vHmbKTE"}`
          }** ]   `
        )
        .setImage("")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});

client.on("message", (message) => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if (!reason) return message.reply("**اكتب سبب الطرد**");
    if (!message.guild.member(user).kickable)
      return message.reply(
        "**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**"
      );
    if (
      message.mentions.members.first().highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send("ما تقدر تطرد شخص رتبته اعلى منك!");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED <a:rks:933077528933990401>`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send(kickembed);
  }
});
client.on("message", (message) => {
  if (message.content.split(" ")[0] === prefix + "avt") {
    if (message.author.bot || message.channel.type == "dm") return;
    var args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    client
      .fetchUser(avt)
      .then((user) => {
        avt = user;
        let avtEmbed = new Discord.RichEmbed()
          .setColor("#03A9F4")
          .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
          .setImage(avt.avatarURL)
          .setFooter(`Avatar`, message.client.user.avatarURL);
        message.channel.send(avtEmbed);
      })
      .catch(() => message.channel.send(`يجب عليك وضع ايدي الشخص`));
  } // Julian
}); // Codes - Toxic Codes

const SQLite = require("sqlite"); // SQLpackage
const path = require("path"); // PATHpackage
const invites = {}; // Codes

////كود معلومات السيرفر
client.on("message", (message) => {
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
          message.guild.members.filter((c) => c.presence.status !== "offline")
            .size
        }** ****`,
        true
      )
      .addField(
        ":speech_balloon:✽** Channels **",
        `» **${
          message.guild.channels.filter((m) => m.type === "text").size
        }**` +
          " TexT | VoicE  " +
          `**${
            message.guild.channels.filter((m) => m.type === "voice").size
          }** `,
        true
      )
      .addField(":earth_africa:✽** Region **", ` ${message.guild.region}`, true)
      .setImage("")

      .setColor("#FC0000");
    message.channel.send(embed);
  }
});

client.on("message", (message) => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "unmute") {
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find((gg) => gg.name === "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find((gg) => gg.name === "Muted");
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
      const avtEmbed = new Discord.RichEmbed()
        .setColor("#FFEB3B")
        .setDescription(
          `> **<a:s7gamda:929797437193867304>    تم فك الميوت عن الشخص **`
        );
      message.channel.send(avtEmbed);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          const avtEmbed = new Discord.RichEmbed()
            .setColor("#FFEB3B")
            .setDescription(
              `> **<a:s7gamda:929797437193867304>    تم فك الميوت عن الشخص **`
            );
          message.channel.send(avtEmbed);
        });
    }
  }
});

////كود ميوت او اسكات
client.on("message", (message) => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "mute") {
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find((gg) => gg.name === "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find((gg) => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد رتبة الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** يجب عليك تمنشن شخص اولاً**")
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
      const avtEmbed = new Discord.RichEmbed()
        .setColor("#FF1100")
        .setDescription(
          `> **<a:s7gamda:929797437193867304>    تم اعطاء العضو ميوت **`
        );
      message.channel.send(avtEmbed);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          const avtEmbed = new Discord.RichEmbed()
            .setColor("#FF1100")
            .setDescription(
              `> **<a:s7gamda:929797437193867304>    تم اعطاء العضو ميوت كتابي**`
            );
          message.channel.send(avtEmbed);
        });
    }
  }
});

//// كود فتح واغلاق الروم
client.on("message", (message) => {
  if (message.content === prefix + "close") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,
      })
      .then(() => {
        message.delete();
        const bot = new Discord.RichEmbed()
          .setColor("#FF1100")
          .setTitle(`> **تم قفل التشانل    <a:s7gamda:929797437193867304>**`);
        message.channel.send(bot);
      });
  }
  if (message.content === prefix + "open") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true,
      })
      .then(() => {
        message.delete();
        const bot = new Discord.RichEmbed()
          .setColor("#FF1100")
          .setTitle(`> **تم فتح التشانل    <a:s7gamda:929797437193867304>**`);
        message.channel.send(bot);
      });
  }
});

client.on("error", (err) => {
  console.log(err);
});

client.on("messageCreate", async (message) => {
  let args = message.cleanContent.split(" ");
  if (args[0] == `${prefix}roles`) {
    let space = "                         ";
    let roles = message.guild.roles
      .map((r) => r)
      .sort((a, b) => b.position - a.position);
    let rr = roles
      .map(
        (r) =>
          `${
            r.name +
            space.substring(r.name.length) +
            message.guild.members.filter((m) => m.roles.includes(r.id)).length
          } members`
      )
      .join("\n");
    await message.channel.sebd(`\`\`\`${rr}\`\`\``);
  }
});

//// كود سحب شخص
client.on("message", (message) => {
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
            .setColor("#03A9F4")
            .setDescription(
              `<a:s7gamda:929797437193867304> You Have Moved <@${usermentioned}> To Your Channel `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name} `)
            .setColor("RANDOM")
            .setTitle(`✽ **Premium**`)

            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then((m) => message.channel.send(embed));
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
      message.react("a:glt:929681265752412180");
    }
  }
});

client.on("message", function (message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then((messages) => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .send(
                " " +
                  "**```fix\n" +
                  messagesDeleted +
                  " " +
                  ": عدد الرسائل التي تم مسحها" +
                  "```**"
              )
              .then((m) => m.delete(10000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then((messages) => message.channel.bulkDelete(messages));
          message.channel
            .send(
              " " +
                "**```fix\n" +
                args[1] +
                " " +
                ": عدد الرسائل التي تم مسحها" +
                "```**"
            )
            .then((m) => m.delete(10000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("RANDOM");
        message.channel.send(manage);
        return;
      }
  }
});

/*
////كود قيف اوي
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
              gg => gg.name === collected.first().content
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
                              .find(gg => gg.name === room)
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
});*/
//all copyrighit for revenge https://github.com/Bowlingtoolkit

///تعديل غير اساسي
///تقدر الصورة الخلفية ، شوف الشرح الرابط فوق اول الكود
/*/// كود الوان
client.on("message", message => {
  if (!message.guild || message.author.bot) return;
  if (message.content == prefix + "colors") {
    var fsn = require("fs-nextra");
    fs.readdir("./colors", async (err, files) => {
      var f = files[Math.floor(Math.random() * files.length)];
      var { Canvas } = require("canvas-constructor");
      var x = 0;
      var y = 0;
      if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0)
        return;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(() => {
          x += 100;
          if (x > 100 * 12) {
            x = 100;
            y += 80;
          }
        });
      var image = await fsn.readFile(`./colors/${f}`);
      var xd = new Canvas(100 * 11, y + 350)
        .addBeveledImage(image, 0, 0, 100 * 11, y + 350, 100)
        .setTextBaseline("middle")
        .setColor("white")
        .setTextSize(60)
        .addText(`قائمة الألوان`, 375, 40);
      x = 0;
      y = 150;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(role => {
          x += 75;
          if (x > 100 * 10) {
            x = 75;
            y += 80;
          }
          xd.setTextBaseline("middle")
            .setTextAlign("center")
            .setColor(role.hexColor)
            .addBeveledRect(x, y, 60, 60, 15)
            .setColor("white");
          if (`${role.name}`.length > 2) {
            xd.setTextSize(30);
          } else if (`${role.name}`.length > 1) {
            xd.setTextSize(40);
          } else {
            xd.setTextSize(50);
          }
          xd.addText(role.name, x + 30, y + 30);
        });
      message.channel.sendFile(xd.toBuffer());
    });
  }
});*/

/// كود تعين اللوق
const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));

client.on("message", (message) => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find((r) => r.name == room);
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
    message.channel.send(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On",
    };
    fs.writeFile("./log.json", JSON.stringify(log), (err) => {
      if (err) console.error(err);
    });
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off",
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On"),
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off"),
      ];
    fs.writeFile("./log.json", JSON.stringify(log), (err) => {
      if (err)
        console.error(err).catch((err) => {
          console.error(err);
        });
    });
  }
});

client.on("messageDelete", (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off",
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    (c) => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**MESSAGE DELETE**")
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
      onoff: "Off",
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    (c) => c.name === `${log[oldMessage.guild.id].channel}`
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

client.on("roleCreate", (role) => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off",
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    (c) => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then((logs) => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**ROLE CREATE**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**<a:s7gamda:929797437193867304> Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", (role) => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off",
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    (c) => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then((logs) => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**ROLE DELETE**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**<a:s7gamda:929797437193867304> Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
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
      onoff: "Off",
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    (c) => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then((logs) => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**ROLE NAME UPDATE**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**<a:s7gamda:929797437193867304> Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#FFEB3B") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#FFEB3B") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**ROLE COLOR UPDATE**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**<a:s7gamda:929797437193867304> Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});

client.on("channelCreate", (channel) => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off",
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    (c) => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then((logs) => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**CHANNEL CREATE**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**<a:s7gamda:929797437193867304> Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", (channel) => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off",
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    (c) => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then((logs) => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**CHANNEL DELETE**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**<a:s7gamda:929797437193867304> Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
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
      onoff: "Off",
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    (c) => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then((logs) => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**CHANNEL EDIT**")
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
        .setTitle("**CHANNEL EDIT**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${
            oldChannel.topic || "NULL"
          }\`\`\`\n**New Topic:**\n\`\`\`${
            newChannel.topic || "NULL"
          }\`\`\`\n**Channel:** ${oldChannel} (ID: ${
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
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off",
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    (c) => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then((logs) => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**BANNED**")
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
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off",
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    (c) => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then((logs) => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**UNBANNED**")
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
      onoff: "Off",
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    (c) => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then((logs) => {
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
        .setTitle("**UPDATE MEMBER NICKNAME**")
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
        .filter((r) => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off",
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**ADDED ROLE TO MEMBER**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**<a:s7gamda:929797437193867304> Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter((r) => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off",
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**REMOVED ROLE FROM MEMBER**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**<a:s7gamda:929797437193867304> Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off",
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**UPDATE GUILD OWNER**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**<a:s7gamda:929797437193867304> Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
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
      onoff: "Off",
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    (c) => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then((logs) => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**VOICE MUTE**")
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
          onoff: "Off",
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**VOICE UNMUTE**")
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
          onoff: "Off",
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**VOICE DEAF**")
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
          onoff: "Off",
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**VOICE UNDEAF**")
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
        onoff: "Off",
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**CHANGED VOICE ROOM**")
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

///تعديل اساسي
/// كود الرد التلقائي
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", (message) => {
  if (message.content === "السلام عليكم") {
    message.channel.send("**:heart:وعليكم السلام ورحمة الله وبركاته **");
message.channel.sendFile();  }
});
client.on("message", (message) => {
  if (message.content === "خط") {
    message.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#FD1100")
      .setImage(`https://i.imgur.com/GzMoqJh.gif`)
    message.channel.send(bot);
  }
});
client.on("message", (message) => {
  if (message.content === "خط_جيف") {
    message.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#E91E63")
      .setImage(`https://i.imgur.com/WMP2z2T.gif`)
    message.channel.send(bot);
  }
});
client.on("message", (message) => {
  if (message.content === "خط_بارت") {
    message.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#F44336")
      .setImage(`https://i.imgur.com/GoOgpUO.gif`)
    message.channel.send(bot);
  }
});
client.on("message", (message) => {
  if (message.content === "خط_ايدي") {
    message.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#FF5722")
      .setImage(`https://i.imgur.com/hy5IrC0.gif`)
    message.channel.send(bot);
  }
});


////تعديل غير اساسي
/*/// كود اختيار لون

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.split(" ")[0] == prefix + "color") {
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**There's No Color With This Number ** :x: `)
      .setColor(`ff0000`);
    if (!args[0]) return message.channel.sendEmbed(embedd);
    if (isNaN(args[0]))
      return message.channel.sendEmbed(
        embedd.setDescription("Please select a number :x:")
      );
    if (!message.guild.roles.find("name", `${args[0]}`))
      return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args[0]}`);
    if (!a) return;
    if (a.hasPermission(8))
      return message.channel.send(
        embedd.setDescription("This color has administrator!")
      );
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**Color Changed To Successfully** :white_check_mark: `)

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args[0]) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args[0]}`));
  }
});
*/
///تعديل اساسي
///لو تبي تعطل كود بدون حذفه حط هذي الرموز

/*
///test
*/

///// كود خروج الاعضاء

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "setby")) {
    message.delete();
    let args = message.mentions.channels.first();
    if (!args)
      message.channel
        .send("** منشن روم . <a:glt:929681265752412180>**")
        .then((m) => {
          m.delete({ timeout: 1500, reason: 'It had to be done.' });
        });
    if (
      !message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send(
        "**ليس لديك صلاحيات . <a:glt:929681265752412180>**"
      );
    message.channel.send(
      `**${args}.  | :ballot_box_with_check: |لقد تم شغيل المغادرة هنا**`
    );
    client.on("guildMemberAdd", (member) => {
      if (member.user.bot) return;
      var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`**الله معاك ✋ **`)
        .addField("**__شكرا لوقتك__**  ", `${member}`)
        .setDescription(`**مع السلامه تشرفنا بك ✋** `)
        .addField("👤   تبقي", `**[ ${member.guild.memberCount} ]**`, true)
        .setColor("RANDOM")
        .setFooter(`نتمنى لكم الاستمتاع`);

      var channel = member.guild.channels.find((gg) => gg.name === "log"); //// تعديل اساسي
      if (!channel) return;
      channel.send(embed);
    });
  }
});
/*
/////كود سرعة البوت او البينق
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "ping")) {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    var Bping = `${Math.round(client.ping)}`;

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
});*/

let anti = JSON.parse(fs.readFileSync("./antigrefff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
client.on("message", (message) => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content.split(" ").slice(2).join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0,
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30,
    };
  if (message.content.startsWith(prefix + "settings")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    if (message.content.startsWith(prefix + "settings limitsban")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "settings limitskick")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleD")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${
          config[message.guild.id].roleDelLimit
        }**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleC")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${
          config[message.guild.id].roleCrLimits
        }**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelD")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelC")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitstime")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].time}**`
      );
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
    if (e) throw e;
  });
});
client.on("channelDelete", async (channel) => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE",
    })
    .then((audit) => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30,
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1,
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
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch((e) =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile(
        "./config.json",
        JSON.stringify(config, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
      fs.writeFile(
        "./antigreff.json",
        JSON.stringify(anti, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
    if (e) throw e;
  });
});

client.on("channelCreate", async (channel) => {
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30,
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE",
    })
    .then((audit) => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1,
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
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch((e) =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile(
        "./config.json",
        JSON.stringify(config, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
      fs.writeFile(
        "./antigreff.json",
        JSON.stringify(anti, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
    }

    fs.writeFile(
      "./config.json",
      JSON.stringify(config, null, 2),
      function (e) {
        if (e) throw e;
      }
    );
    fs.writeFile(
      "./antigreff.json",
      JSON.stringify(anti, null, 2),
      function (e) {
        if (e) throw e;
      }
    );
  }
});
client.on("roleDelete", async (channel) => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE",
    })
    .then((audit) => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30,
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1,
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
        .catch((e) =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile(
        "./config.json",
        JSON.stringify(config, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
      fs.writeFile(
        "./antigreff.json",
        JSON.stringify(anti, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async (channel) => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE",
    })
    .then((audit) => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30,
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1,
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
        .catch((e) =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile(
        "./config.json",
        JSON.stringify(config, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
      fs.writeFile(
        "./antigreff.json",
        JSON.stringify(anti, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD",
    })
    .then((audit) => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30,
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1,
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch((e) =>
          guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile(
        "./config.json",
        JSON.stringify(config, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
      fs.writeFile(
        "./antigreff.json",
        JSON.stringify(anti, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK",
    })
    .then((audit) => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30,
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1,
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch((e) =>
          guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile(
        "./config.json",
        JSON.stringify(config, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
      fs.writeFile(
        "./antigreff.json",
        JSON.stringify(anti, null, 2),
        function (e) {
          if (e) throw e;
        }
      );
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async (member) => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then((audit) => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK",
      })
      .then((audit) => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30,
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1,
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000 || 30000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members
          .get(entry.id)
          .ban()
          .catch((e) =>
            member.owner.send(
              `**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`
            )
          );
        anti[member.guild.id + entry.id].actions = 0;
        fs.writeFile(
          "./config.json",
          JSON.stringify(config, null, 2),
          function (e) {
            if (e) throw e;
          }
        );
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function (e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile(
      "./config.json",
      JSON.stringify(config, null, 2),
      function (e) {
        if (e) throw e;
      }
    );
    fs.writeFile(
      "./antigreff.json",
      JSON.stringify(anti, null, 2),
      function (e) {
        if (e) throw e;
      }
    );
  }
});

var antibots = JSON.parse(fs.readFileSync("./KickBots.json", "utf8"));
let saveSteve = () => {
  fs.writeFileSync(
    "./KickBots.json",
    JSON.stringify(antibots, null, 2),
    (err) => {
      if (err) throw err;
    }
  );
};
client.on("message", (message) => {
  if (!message.guild) return;
  if (!antibots[message.guild.id])
    config[message.guild.id] = {
      onoff: true,
    };
  if (message.content.startsWith(prefix + "antibots on")) {
    message.delete();
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    antibots[message.guild.id] = {
      onoff: true,
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is On :closed_lock_with_key: **");
  }
  if (message.content.startsWith(prefix + "antibots off")) {
    message.delete();
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    antibots[message.guild.id] = {
      onoff: false,
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is Off :unlock: **");
  }
  saveSteve();
});

client.on("guildMemberAdd", (member) => {
  if (!antibots[member.guild.id])
    config[member.guild.id] = {
      onoff: true,
    };
  if (antibots[member.guild.id].onoff == false) return;
  if (member.user.bot) return member.ban("Protection from Bots.");
  saveSteve();
});

///كود حذف الروابط
/// تعديل اساسي حذف روابط الديسكورد
/// تم حذف الكود لانه يسبب مشاكل مثلا يحذف كل الروابط حتى من الادارة ، يمكنك استخدام بوت بروبوت في الحماية من الروابط

const replyMSG = JSON.parse(fs.readFileSync("./replyMSG.json", "utf8"));

function saveReplay() {
  fs.writeFile("./replyMSG.json", JSON.stringify(replyMSG), function (err) {
    if (err) throw err;
  });
}

/////كود صنع رد تلقائي
client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "reply")) {
    if (message.author.bot || message.channel.type == "dm") return undefined;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    if (!replyMSG[message.author.id])
      replyMSG[message.author.id] = {
        contentmessage: "none",
        replayMessage: "none",
      };
    saveReplay();
    let contmessage;

    let filter = (m) => m.author.id === message.author.id;
    message.channel.send(" |** من فضلك اكتب الرساله الان...** ").then((msg) => {
      message.channel
        .awaitMessages(filter, {
          //R.I.P Royal Bot!
          maxMatches: 1,
          time: 12000,
          errors: ["time"],
        })

        .then((collected) => {
          contmessage = collected.first().content;
          msg.edit(":scroll: | من فضلك اكتب الرد الان... :pencil2: ");

          message.channel
            .awaitMessages(filter, {
              maxMatches: 1,
              time: 12000,
              errors: ["time"],
            })

            .then(async (collectedd) => {
              replyMSG[message.author.id] = {
                contentmessage: contmessage,
                replayMessage: collectedd.first().content,
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
                );
              let steve = await client.fetchUser("736038771535118377");
              embed1.setFooter(
                `رد تلقائي`,
                steve ? steve.displayAvatarURL : message.author.displayAvatarURL
              );
              msg.edit(
                " <a:s7gamda:929797437193867304> |** تم الاعداد بنجاح...**"
              );

              message.channel.send(embed1);
            });
        });
    });
  }
});

client.on("message", (message) => {
  if (
    !replyMSG[message.author.id] ||
    !replyMSG[message.author.id].contentmessage ||
    !replyMSG[message.author.id].replayMessage
  )
    return;
  let messagecontent = replyMSG[message.author.id].contentmessage;
  let reply = replyMSG[message.author.id].replayMessage;
  if (message.content == messagecontent) {
    if (messagecontent == "none" || reply == "none") return undefined;
    message.channel.send(` ${reply}`);
  }
});

/////كود كريدت

const credits = JSON.parse(fs.readFileSync("./credits.json"));
var time = require("./time.json");
client.on("message", async (message) => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = {
      credits: 0,
    };
  fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
  if (args[0].toLowerCase() == `${prefix}credits`) {
    const mention = message.mentions.users.first() || message.author;
    const mentionn = message.mentions.users.first();
    if (!args[2]) {
      message.channel.send(
        `**${mention.username}, your :credit_card: balance is \`$${
          credits[mention.id].credits
        }\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2]) || [",", "."].includes(args[2]))
        return message.channel.send(`**<a:glt:929681265752412180> | Error**`);

      if (args[2] < 1)
        return message.channel.send(`**<a:glt:929681265752412180> | Error**`);
      if (mention.bot)
        return message.channel.send(`**<a:glt:929681265752412180> | Error**`);
      if (mentionn.id === message.author.id)
        return message.channel.send(`**<a:glt:929681265752412180> | Error**`);
      if (args[2] > credits[author].credits)
        return message.channel.send(
          `**<a:glt:929681265752412180> | Error , You Don't Have Enough Credit**`
        );
      if (args[2].includes("-"))
        return message.channel.send(`**<a:glt:929681265752412180> | Error**`);
      let resulting =
        parseInt(args[2]) == 1
          ? parseInt(args[2])
          : Math.floor(args[2] - args[2] * (5 / 100));
      let tax =
        parseInt(args[2]) == 1
          ? parseInt(args[2])
          : Math.floor(args[2] * (5 / 100));
      let first = Math.floor(Math.random() * 9);
      let second = Math.floor(Math.random() * 9);
      let third = Math.floor(Math.random() * 9);
      let fourth = Math.floor(Math.random() * 9);
      let num = `${first}${second}${third}${fourth}`;
      let Canvas = require("canvas");
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
        .then(async (essss) => {
          message.channel.send(`\`${num}\``).then((m) => {
            message.channel
              .awaitMessages((r) => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"],
              })
              .then((collected) => {
                if (collected.first().content === num) {
                  essss.delete();
                  message.channel.send(
                    `**:moneybag: | ${
                      message.author.username
                    }, Done Trans \`$${resulting.toLocaleString()}\` To ${mentionn}**`
                  );
                  mention.send(
                    `**:money_with_wings: | Transfer Receipt **\`\`\`You Have Received \`$${resulting.toLocaleString()}\` From User ${
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
        `**<a:glt:929681265752412180> | Error , Please Command True Ex: \`${prefix}credits [MentionUser] [Balance]\`**`
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
        }, your daily :credit_card: credits refreshes in ${pretty(times, {
          verbose: true,
        })}.**`
      );
      fs.writeFile("./time.json", JSON.stringify(time), function (e) {
        if (e) throw e;
      });
    } else {
      let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**:atm:  | ${message.author.username}, you received your :credit_card: ${ammount} daily credits!**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function (e) {
        if (e) throw e;
      });
    }
  }
}); //

client.on("message", async (message) => {
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
    message.reply(`** Adedd Money For : \`${args[1]}\` Done **`);
  } else if (Fire === "removecredits") {
    let args = message.content.split(" ");
    if (!devs.includes(message.author.id)) return;
    if (!args[1] || isNaN(args[1])) return message.reply("**Type Credit**");
    if (!credits[mention.id]) return;
    credits[mention.id].credits += -args[1];
    fs.writeFileSync("./credits.json", JSON.stringify(credits));
    console.log(credits[mention.id]);
    message.reply(`**, Remove Money For : \`${args[1]}\`**`);
  }
});

const { Canvas } = require("canvas-constructor");
const { Attachment } = require("discord.js");
const { resolve, join } = require("path");
const fetch = require("node-fetch");
const prettySeconds = require("pretty-seconds");
const fsn = require("fs-nextra");

const welcome = JSON.parse(fs.readFileSync("./welcomer.json", "utf8")); //ملف تخزين كود الويلكم

//كود الويلكم
/*
client.on("guildMemberAdd", async member => {
  if (!welcome) return;
  if (!welcome[member.guild.id]) return;
  var findingWlcChannel = welcome[member.guild.id]
    ? welcome[member.guild.id].channel
    : "null";
  const channel = await member.guild.channels.find(
    r => r.name == findingWlcChannel
  );
  if (!channel) return;
  if (channel) {
    const imageUrlRegex = /\?size=2048$/g; ///تعديل غير اساسي
    const wlcImage = await fsn.readFile("./welcome111.png"); //اسم الصورة
    let result = await fetch(
      member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128")
    );
    if (!result.ok) throw new Error("Failed to get the avatar!");
    let avatar = await result.buffer();

    let name =
      member.user.username.length > 12
        ? member.user.username.substring(0, 11) + "..."
        : member.user.username;

    // تعديل غير اساسي : هنا خيارات الصورة لو تبى تغيرها

    //Welcome Image (background)
    var imageWidth = 500; //عرض الصورة
    var imageHeight = 266; //ارتفاع الصورة

    //Avatar
    var imageX = 250; //X coordinate
    var imageY = 145; //Y coordinate
    var imageRadius = 110; //نصف قطر الصورة الدائرية

    //Member Name
    var nameSize = "12pt"; //حجم خط الاسم
    var nameKind = "Source Sans Pro (OT1)"; //نوع خط الاسم
    var nameColor = "#ff9933"; //لون خط الاسم

    //Name Position
    var nameX = 247; //position x
    var nameY = 275; //position y

    let buffer = await new Canvas(500, 300)
      .addImage(wlcImage, 0, 0, imageWidth, imageHeight)
      .addCircularImage(avatar, imageX, imageY, imageRadius)
      .setTextAlign("center")
      .setTextFont(`${nameSize} ${nameKind}`)
      .setColor(nameColor)
      .addText(name, nameX, nameY)
      .toBuffer();
    const filename = `Baron-wlc-${member.id}.jpg`;
    const attachment = new Attachment(buffer, filename);
    await channel.send(attachment);
  }
});

//تحديد روم الويلكم
const wait = require("util").promisify(setTimeout);
client.on("ready", async () => {
  wait(1000);

  await client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
var gg2;

client.on("guildMemberAdd", async member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      by: "Off",
      channel: null
    };

  if (welcome[member.guild.id].by === "Off") return;
  let channel = member.guild.channels.find(
    c => c.name == welcome[member.guild.id].channel
  );
  if (!channel) return;

  await member.guild.fetchInvites().then(async guildInvites => {
    const ei = await invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = await guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter1 = await invite.inviter;
    const inviter =
      (await client.users.get(invite.inviter.id)) ||
      client.users.get(member.guild.owner.user.id);
    const logChannel = member.guild.channels.find(
      channel => channel.name === `${welcome[member.guild.id].channel}`
    );
    if (!logChannel) return console.log("I can't find welcomeChannel");
    let gg1 = await welcome[member.guild.id].msg.replace(
      "[member]",
      `<@!${member.id}>`
    );
    if (!inviter1 || !inviter1.id) {
      gg2 = await gg1.replace("[inviter]", `<@${member.guild.ownerID}>`);
    } else {
      gg2 = await gg1.replace("[inviter]", `<@${inviter1.id}>`);
    }
    setTimeout(() => {
      logChannel.send(`${gg2}`);
    }, 2000);
    fs.writeFile("./welcome.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  });
});
client.on("message", async message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setWelcomer")) {
    if (!welcome[message.guild.id]) {
      if (!message.channel.guild)
        return message.reply("**This Command Only For Servers**");
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
        );
      if (!room) return message.channel.send("Please Type The Channel Name");
      if (!findroom) return message.channel.send("Cant Find This Channel");
      let embed = new Discord.RichEmbed()
        .setTitle("**Done The Welcome Has Been Setup**")
        .addField("Channel:", `${room}`)
        .addField("Requested By:", `${message.author}`)
        .addField(
          "Default Message:",
          `**Welcome [member], You Joined by [inviter] invite**`
        )
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${client.user.username}`);
      message.channel.sendEmbed(embed);
      welcome[message.guild.id] = {
        channel: room,
        onoff: "On",
        by: "On",
        msg: `**Welcome [member], You Joined by [inviter] invite**`
      };
      fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
        if (err) console.error(err);
      });
    } else if (welcome[message.guild.id].channel) {
      let msg = await welcome[message.guild.id].msg;
      let by = await welcome[message.guild.id].by;
      if (!message.channel.guild)
        return message.reply("**This Command Only For Servers**");
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
        );
      if (!room) return message.channel.send("Please Type The Channel Name");
      if (!findroom) return message.channel.send("Cant Find This Channel");
      let embed = new Discord.RichEmbed()
        .setTitle("**Done The Welcome Has Been Setup**")
        .addField("Channel:", `${room}`)
        .addField("Requested By:", `${message.author}`)
        .addField("Default Message:", msg)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${client.user.username}`);
      message.channel.sendEmbed(embed);
      welcome[message.guild.id] = {
        channel: room,
        onoff: "On",
        by: by,
        msg: msg
      };
      fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
        if (err) console.error(err);
      });
    }
  }
});

client.on("message", async message => {
  let messageArray = message.content.split(" ");
  if (message.content.startsWith(prefix + "setMessage")) {
    if (!welcome[message.guild.id] || !welcome[message.guild.id].onoff == "On")
      return message.channel.send(
        `**please type \`${prefix}setWelcomer\` first **`
      );
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    let room = welcome[message.guild.id].channel;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("You don't have permission").then(msg => {
        msg.delete(4500);
        message.delete(4500);
      });

    message.channel
      .send(
        `**من فضلك اكتب رسالة الترحيب الان:
لعمل منشن للعضو او الشخص الذى قام بدعوتة
Ex : 
\`[member] Joined the server by [inviter]\`**`
      )
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            msg.edit("**تم الاعداد بنجاح**").then(msg => {
              let embed = new Discord.RichEmbed()
                .setTitle("**Done The Welcome Msg Has Been Setup**")
                .addField("Message:", `${thisMessage}`)
                .setThumbnail(message.author.avatarURL)
                .setFooter(`${client.user.username}`);
              message.channel.sendEmbed(embed);
              welcome[message.guild.id] = {
                channel: room,
                onoff: "On",
                by: "On",
                msg: thisMessage
              };
              fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
                if (err) console.error(err);
              });
            });
          });
      });
  }
});
*/
///كود منشن بوتات

client.on("message", (message) => {
  if (message.content === prefix + "ls") {
    var list_all = [];
    message.guild.members.forEach((bb) => {
      if (!bb.user.bot) return;
      list_all.push(`<@${bb.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});

////كود رابط
////تعديل غير اساسي

client.on("message", message => {
  if (message.content.split(" ")[0] === "رابط") {
return message.channel.send(`
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
> <a:rks:933077528933990401><a:rks:933077528933990401><a:rks:933077528933990401>
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
> https://discord.gg/mqkaUdE5dK
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
`)

  }
});

////لايحتاج تعديل
////كود الفويس اونلاين
/*
let vojson = JSON.parse(fs.readFileSync("vojson.json", "utf8")); // ملف تخزين الفويس اونلاين
client.on("message", message => {
  if (message.content.startsWith(prefix + "setVc")) {
    let channel = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**ADMINISTRATOR ليس لديك صلاحية :rolling_eyes: ** "
      );
    let channelfind = message.guild.channels.find(c => c.name == channel);
    if (!channel)
      return message.channel.send(
        "Please Type The Voice Channel Name Example: " +
          `${prefix}setVc <Channel name>`
      );
    if (!channelfind)
      return message.channel.send(`I can't find this channel \`${channel}\``);
    vojson[message.guild.id] = {
      stats: "enable",
      chid: channelfind.id,
      guild: message.guild.id
    };
    channelfind.setName(
      `Voice Online : ${message.guild.members.filter(m => m.voiceChannel).size}` ///تعديل غير اساسي تعديل اسم روم الفويس اونلاين
    );
    message.channel.send("**Done The Voice Online  Is Turned On**");
  }
  if (message.content.startsWith(prefix + "vc off")) {
    // ايقاف الفويس اونلاين
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "ADMINISTRATOR ليس لديك صلاحية :rolling_eyes:"
      );

    message.guild.channels
      .find(gg => gg.name === vojson[message.guild.id].chid)
      .delete();
    vojson[message.guild.id] = {
      stats: "disable",
      chid: "undefined",
      guild: message.guild.id
    };
    message.channel.send("**Done The Voice Online Is Turned Off**");
  }
  fs.writeFile("./vojson.json", JSON.stringify(vojson), err => {
    if (err) console.error(err);
  });
});

client.on("voiceStateUpdate", (oldMember, newMember) => {
  if (!vojson[oldMember.guild.id])
    vojson[oldMember.guild.id] = {
      stats: "disable",
      chid: "undefined",
      guild: "undefined"
    };
  if (vojson[oldMember.guild.id].stats === "enable") {
    let ch = vojson[oldMember.guild.id].chid;
    let channel = oldMember.guild.channels.get(ch);
    if (!channel) return;
    let guildid = vojson[oldMember.guild.id].guild;
    channel.setName(
      `Voice Online : ${
        oldMember.guild.members.filter(m => m.voiceChannel).size
      }` ///تعديل غير اساسي تغير اسم روم الفويس اونلاين
    );
  }
  if (vojson[oldMember.guild.id].stats === "disable") {
    return;
  }
});

client.on("ready", () => {
  console.log("hi");
});
*/
////تعديل غير اساسي

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "تقديم")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    let channel = message.guild.channels.find((gg) => gg.name === "التقديمات");
    if (!channel)
      return message.reply(
        "**لانشاء روم التقديمات ${prefix}room1 من فضلك اكتب الامر**"
      );
    if (channel) {
      message.channel.send(message.member + ", **:timer:**").then((m) => {
        m.edit(message.member + ", **اسمك الحقيقى  ✍**");
        m.channel
          .awaitMessages((m1) => m1.author == message.author, {
            maxMatches: 1,
            time: 60 * 1000,
          })
          .then((m1) => {
            m1 = m1.first();
            var name = m1.content;
            m1.delete();
            m.edit(message.member + ", **:timer:**").then((m) => {
              m.edit(message.member + ", **كم عمرك 🎓**");
              setTimeout(() => {
                m.delete();
              }, 10000);
              m.channel
                .awaitMessages((m2) => m2.author == message.author, {
                  maxMatches: 1,
                  time: 60 * 1000,
                })
                .then((m2) => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete();
                  message.channel
                    .send(message.member + ", **:timer:**")
                    .then((m) => {
                      m.edit(message.member + ", **هل تتفاعل في الرتبه🎙**");
                      setTimeout(() => {
                        m.delete();
                      }, 10000);
                      m.channel
                        .awaitMessages((m1) => m1.author == message.author, {
                          maxMatches: 1,
                          time: 60 * 1000,
                        })
                        .then((m3) => {
                          m3 = m3.first();
                          var ask = m3.content;
                          m3.delete();
                          message.channel
                            .send(message.member + ", **:timer:**")
                            .then((m) => {
                              m.edit(
                                message.member + ", **هل ستحترم القوانين ؟ 📑**"
                              );
                              setTimeout(() => {
                                m.delete();
                              }, 10000);
                              m.channel
                                .awaitMessages(
                                  (m1) => m1.author == message.author,
                                  { maxMatches: 1, time: 60 * 1000 }
                                )
                                .then((m4) => {
                                  m4 = m4.first();
                                  var ask2 = m4.content;
                                  m4.delete();
                                  message.channel
                                    .send(message.member + ", **:timer:**")
                                    .then((m) => {
                                      m.edit(
                                        message.member +
                                          ", **لماذا يجب علينا ان نقبلك ؟ وما هي الرتبه التي تريدها 🤔**"
                                      );
                                      m.channel
                                        .awaitMessages(
                                          (m1) => m1.author == message.author,
                                          { maxMatches: 1, time: 60 * 1000 }
                                        )
                                        .then((m5) => {
                                          m5 = m5.first();
                                          var ask3 = m5.content;
                                          m5.delete();
                                          m.edit(
                                            message.member +
                                              ", **....جارى جمع البيانات**"
                                          ).then((mtime) => {
                                            setTimeout(() => {
                                              let embed =
                                                new Discord.RichEmbed()
                                                  .setColor("RANDOM")
                                                  .setTitle(
                                                    `**تقديم على رتبه** [__**${message.guild.name}**__]`
                                                  )
                                                  .addField(
                                                    "**`الاسم`**",
                                                    `${name}`,
                                                    true
                                                  )
                                                  .addField(
                                                    "**`العمر`**",
                                                    `${age}`,
                                                    true
                                                  )
                                                  .addField(
                                                    "**`هل سوف يتفاعل ؟`**",
                                                    `${ask}`
                                                  )
                                                  .addField(
                                                    "**`هل سوف يحترم القوانين ؟`**",
                                                    `${ask2}`
                                                  )
                                                  .addField(
                                                    "**`لماذا يجب علينا قبوله|وماهى الرتبه اللتي يريدها`**",
                                                    `${ask3}`
                                                  )
                                                  .setFooter(
                                                    `Name : ${message.author.username}\nID User : ${message.author.id}`,
                                                    "https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif"
                                                  );
                                              channel.send(embed);
                                            }, 2500);
                                            setTimeout(() => {
                                              mtime.delete();
                                            }, 3000);
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
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "room1")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("`MANAGE_CHANNELS"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    message.guild.createChannel("التقديمات", { type: 'text'}).then((c) => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,
      });
    });
    message.channel.send(
      "**<a:s7gamda:929797437193867304> تم انشاء روم التقديمات بنجاح**"
    );
  }
});

client.on("message", (message) => {
  var args = message.content.split(" ").slice(1);
  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  if (!msg.startsWith(prefix + "role")) return;
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(" **ليس لديك صلاحيات :rolling_eyes:**");
  if (msg.toLowerCase().startsWith(prefix + "rerole")) {
    if (!args[0])
      return message.reply(
        "**<a:glt:929681265752412180> يرجى وضع منشن الشخص المراد سحب منه الرتبة**"
      );
    if (!args[1])
      return message.reply(
        "**<a:glt:929681265752412180> يرجى وضع اسم الرتبة المراد سحبها من الشخص**"
      );
    var role = msg.split(" ").slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles
      .filter((r) => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply(
        "**<a:glt:929681265752412180> يرجى وضع الرتبة المراد سحبها من الشخص**"
      );
    if (message.mentions.members.first()) {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          " اانت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.mentions.members.first().removeRole(role1);
      return message.reply(
        "**<a:s7gamda:929797437193867304> [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم سحب من **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members.forEach((m) => m.removeRole(role1));
      return message.reply(
        "**<a:s7gamda:929797437193867304> [ " +
          role1.name +
          " ] تم سحب من الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter((m) => m.user.bot)
        .forEach((m) => m.removeRole(role1));
      return message.reply(
        "**<a:s7gamda:929797437193867304> [ " +
          role1.name +
          " ] تم سحب من البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter((m) => !m.user.bot)
        .forEach((m) => m.removeRole(role1));
      return message.reply(
        "**<a:s7gamda:929797437193867304> [ " +
          role1.name +
          " ] تم سحب من الميمبر رتبة**"
      );
    }
  } else {
    if (!args[0])
      return message.reply(
        "**<a:glt:929681265752412180> يرجى وضع منشن الشخص المراد اعطائها الرتبة**"
      );
    if (!args[1])
      return message.reply(
        "**<a:glt:929681265752412180> يرجى وضع اسم الرتبة المراد اعطائها للشخص**"
      );
    var role = msg.split(" ").slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles
      .filter((r) => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply(
        "**<a:glt:929681265752412180> يرجى وضع اسم الرتبة المراد اعطائها للشخص**"
      );
    if (message.mentions.members.first()) {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );


      return message.send(
        "**<a:s7gamda:929797437193867304> [ " +
          args[0] +
          " ] تم اعطاء [ " +
          role1.name +
          " ] رتبة **"
        )
    }
    if (args[0].toLowerCase() == "all") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );
      message.guild.members.forEach((m) => m.addRole(role1));
      return message.send(
        "**<a:s7gamda:929797437193867304> [ " +
          role1.name +
          " ] تم اعطاء الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter((m) => m.user.bot)
        .forEach((m) => m.addRole(role1));
      return message.reply(
        "**<a:s7gamda:929797437193867304> [ " +
          role1.name +
          " ] تم اعطاء البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      if (role1.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      message.guild.members
        .filter((m) => !m.user.bot)
        .forEach((m) => m.addRole(role1));
      return message.reply(
        "**<a:s7gamda:929797437193867304> [ " +
          role1.name +
          " ] تم اعطاء البشريين رتبة**"
      );
    }
  }
});

client.on("message", async (message) => {
  if (!message.guild) return;
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find((gg) => gg.name === role);
  if (message.content.startsWith(prefix + "قبول")) {
    let acRoom = message.guild.channels.find(
      (gg) => gg.name === "القبول-الرفض"
    );
    if (!acRoom)
      return message.reply(
        `${prefix}room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر`
      );
    if (acRoom) {
      if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return;
      if (!mention) return message.reply("منشن شخص");
      if (!role) return message.reply("ادخل اسم رتبة");
      if (!mySupport) return message.reply("هذه الرتبة غير موجودة");
      if (mention.roles.has(mySupport))
        return message.reply("هذا الشخص معه الرتبة مسبقا");
      if (mySupport.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      mention.addRole(mySupport).then(() => {
        acRoom.send(
          `**[ ${mySupport} ] واعطائك رتبة ${mention} تم قبولك بنجاح**`
        );
      });
    }
  }
});

client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "رفض")) {
    if (!message.channel.guild) return;

    let mention = message.mentions.members.first();
    let acRoom = message.guild.channels.find("name", "القبول-الرفض");
    let rrrr = message.content.split(/ +/).slice(2);
    let reason = rrrr.join(" ");
    if (!acRoom)
      return message.reply(
        `${prefix}room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر`
      );
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!mention) return message.reply("منشن شخص");
    message.react("a:s7gamda:929797437193867304");
    acRoom
      .send(
        `**${mention} تم رفضك للأسف **
السبب : \`${reason}\``
      )
      .then((m) => m.react("a:s7gamda:929797437193867304"));
  }
});
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "room2")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    message.guild.createChannel("القبول-الرفض", "text").then((c) => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,
      });
    });
    message.channel.send(
      "**<a:s7gamda:929797437193867304> تم انشاء روم القبول والرفض بنجاح**"
    );
  }
});
client.on("message", async (msg) => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  let args = msg.content.split(" ");

  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);

  if (command === `avatar`) {
    if (msg.channel.type === "dm")
      return msg.channel.send(
        "Nope Nope!! u can't use avatar command in DMs (:"
      );
    let mentions = msg.mentions.members.first();
    if (!mentions) {
      let sicon = msg.author.avatarURL;
      let embed = new Discord.RichEmbed()
        .setImage(msg.author.avatarURL)
        .setColor("#5074b3");
      msg.channel.send(embed);
    } else {
      let sicon = mentions.user.avatarURL;
      let embed = new Discord.RichEmbed().setColor("#5074b3").setImage(sicon);
      msg.channel.send(embed);
    }
  }
});

//// تغير غير اساسي
///// كود ميوزك
/*
let cmds = {
  play: { cmd: "play", a: ["p", "شغل"] },
  skip: { cmd: "skip", a: ["s", "تخطى"] },
  stop: { cmd: "stop", a: ["ايقاف"] },
  pause: { cmd: "pause", a: ["ايقاف مؤقت"] },
  resume: { cmd: "resume", a: ["r", "كمل"] },
  volume: { cmd: "volume", a: ["vol", "صوت"] },
  queue: { cmd: "queue", a: ["q", "قائمة"] },
  repeat: { cmd: "repeat", a: ["re", "تكرار"] },
  forceskip: { cmd: "forceskip", a: ["تخطي الكل", "fskip"] },
  skipto: { cmd: "skipto", a: ["st", "اذهب الى"] },
  nowplaying: { cmd: "Nowplaying", a: ["np", "الان"] }
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

Object.keys(cmds).forEach(key => {
  var value = cmds[key];
  var command = value.cmd;
  client.commands.set(command, command);

  if (value.a) {
    value.a.forEach(alias => {
      client.aliases.set(alias, command);
    });
  }
});

let active = new Map();

client.on("warn", console.warn);

client.on("error", console.error);

client.on("ready", () => {
  console.log(`on`);
  console.log(`Guilds: ${client.guilds.size}`);
  console.log(`Users: ${client.users.size}`);
});

client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";

  let cmd =
    client.commands.get(command) ||
    client.commands.get(client.aliases.get(command));

  let s;

  if (cmd === "play") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send(
        `:no_entry_sign: **يجب أن تنضم الي قناة صوتية لاستخدام ذلك!**`
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        `:no_entry_sign:** لا يمكنني الانضمام إلى قناتك الصوتية لأنني لا أملكها** ` +
          "`" +
          "`CONNECT`" +
          "`" +
          ` permission!`
      );
    }

    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        `:no_entry_sign: لا أستطيع التحدث في قناتك الصوتية لأنني لا أملك ` +
          "`" +
          "`SPEAK`" +
          "`" +
          ` permission!`
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();

      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(`Added to queue: ${playlist.title}`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(args, 1);

          // eslint-disable-next-line max-depth
          var video = await youtube.getVideoByID(videos[0].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send("**لا أجد أي شيء**");
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }

    async function handleVideo(video, msg, voiceChannel, playlist = false) {
      const serverQueue = active.get(msg.guild.id);

      //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));

      let hrs =
        video.duration.hours > 0
          ? video.duration.hours > 9
            ? `${video.duration.hours}:`
            : `0${video.duration.hours}:`
          : "";
      let min =
        video.duration.minutes > 9
          ? `${video.duration.minutes}:`
          : `0${video.duration.minutes}:`;
      let sec =
        video.duration.seconds > 9
          ? `${video.duration.seconds}`
          : `0${video.duration.seconds}`;
      let dur = `${hrs}${min}${sec}`;

      let ms = video.durationSeconds * 1000;

      const song = {
        id: video.id,
        title: video.title,
        duration: dur,
        msDur: ms,
        url: `https://www.youtube.com/watch?v=${video.id}`
      };
      if (!serverQueue) {
        const queueConstruct = {
          textChannel: msg.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [], ////تعديل غير اساسي
          volume: 50, //// تعديل درجة الصوت الاساسية
          requester: msg.author,
          playing: true,
          repeating: false
        };
        active.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
          var connection = await voiceChannel.join();
          queueConstruct.connection = connection;
          play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
          console.error(`I could not join the voice channel: ${error}`);
          active.delete(msg.guild.id);
          return msg.channel.send(`I cant join this voice channel`);
        }
      } else {
        serverQueue.songs.push(song);

        if (playlist) return undefined;
        if (!args) return msg.channel.send("no results.");
        else
          return msg.channel
            .send(":watch: Loading... [`" + args + "`]")
            .then(m => {
              setTimeout(() => {
                //:watch: Loading... [let]
                m.edit(
                  `:notes: Added **${song.title}**` +
                    "(` " +
                    song.duration +
                    ")`" +
                    ` to the queue at position ` +
                    `${serverQueue.songs.length}`
                );
              }, 500);
            });
      }
      return undefined;
    }

    function play(guild, song) {
      const serverQueue = active.get(guild.id);

      if (!song) {
        serverQueue.voiceChannel.leave();
        active.delete(guild.id);
        return;
      }
      //console.log(serverQueue.songs);
      if (serverQueue.repeating) {
        console.log("Repeating");
      } else {
        serverQueue.textChannel.send(
          ":notes: Added **" +
            song.title +
            "** (`" +
            song.duration +
            "`) to begin playing."
        );
      }
      const dispatcher = serverQueue.connection
        .playStream(ytdl(song.url))
        .on("end", reason => {
          //if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
          //else console.log(reason);
          if (serverQueue.repeating) return play(guild, serverQueue.songs[0]);
          serverQueue.songs.shift();
          play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
    }
  } else if (cmd === "stop") {
    if (msg.guild.me.voiceChannel !== msg.member.voiceChannel)
      return msg.channel.send(
        `You must be in ${msg.guild.me.voiceChannel.name}`
      );
    // if (!msg.member.hasPermission("ADMINISTRATOR")) {
    //    msg.react("a:glt:929681265752412180");
    //    return msg.channel.send("You don't have permission `ADMINSTRATOR`");
    //  }
    let queue = active.get(msg.guild.id);
    if (queue.repeating)
      return msg.channel.send(
        "Repeating Mode is on, you can't stop the music, run `" +
          `${prefix}repeat` +
          "` to turn off it."
      );
    queue.songs = [];
    queue.connection.dispatcher.end();
    return msg.channel.send(
      ":notes: The player has stopped and the queue has been cleared."
    );
  } else if (cmd === "skip") {
    let vCh = msg.member.voiceChannel;

    let queue = active.get(msg.guild.id);

    if (!vCh)
      return msg.channel.send(
        "Sorry, but you can't because you are not in voice channel"
      );

    if (!queue) return msg.channel.send("No music playing to skip it");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip it, because repeating mode is on, run " +
          `\`${prefix}forceskip\``
      );

    // let req = vCh.members.size - 1;

    //if (req == 1) {
    msg.channel.send("**:notes: Skipped **" + args);
    return queue.connection.dispatcher.end("Skipping ..");
    // }

    // if (!queue.votes) queue.votes = [];

    // if (queue.votes.includes(msg.member.id))
    //  return msg.say(
    //    `You already voted for skip! ${queue.votes.length}/${req}`
    //  );

    //  queue.votes.push(msg.member.id);

    //  if (queue.votes.length >= req) {
    //     msg.channel.send("**:notes: Skipped **" + args);

    //     delete queue.votes;

    //     return queue.connection.dispatcher.end("Skipping ..");
    //   }
    //
    //  msg.channel.send(
    //  `**You have successfully voted for skip! ${queue.votes.length}/${req}**`
    // );
  } else if (cmd === "pause") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) {
      return msg.channel.send("No music playing to pause.");
    }

    if (!queue.playing)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let disp = queue.connection.dispatcher;

    disp.pause("Pausing..");

    queue.playing = false;

    msg.channel.send(
      ":notes: Paused " + args + ". **Type** `" + prefix + "resume` to unpause!"
    );
  } else if (cmd === "resume") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) return msg.channel.send(":notes: No music paused to resume.");

    if (queue.playing)
      return msg.channel.send(":notes: No music paused to resume.");

    let disp = queue.connection.dispatcher;

    disp.resume("Resuming..");

    queue.playing = true;

    msg.channel.send(":notes: Resumed.");
  } else if (cmd === "volume") {
    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send(
        ":notes: There is no music playing to set volume."
      );

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(":notes: You are not in my voice channel");

    let disp = queue.connection.dispatcher;

    if (isNaN(args[0])) return msg.channel.send(":notes: Numbers only!");

    if (parseInt(args[0]) > 100)
      return msg.channel.send("You can't set the volume more than **100**.");
    //:speaker: Volume changed from 20 to 20 ! The volume has been changed from ${queue.volume} to ${args[0]}
    msg.channel.send(
      ":loud_sound: Volume has been **changed** from (`" +
        queue.volume +
        "`) to (`" +
        args[0] +
        "`)"
    );

    queue.volume = args[0];

    disp.setVolumeLogarithmic(queue.volume / 100);
  } else if (cmd === "queue") {
    let queue = active.get(msg.guild.id);

    if (!queue)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let embed = new Discord.MessageEmbed().setAuthor(
      `${client.user.username}`,
      client.user.displayAvatarURL
    );
    let text = "";

    for (var i = 0; i < queue.songs.length; i++) {
      let num;
      if (i > 8) {
        let st = `${i + 1}`;
        let n1 = Converter.toWords(st[0]);
        let n2 = Converter.toWords(st[1]);
        num = `:${n1}::${n2}:`;
      } else {
        let n = Converter.toWords(i + 1);
        num = `:${n}:`;
      }
      text += `${num} ${queue.songs[i].title} [${queue.songs[i].duration}]\n`;
    }
    embed.setDescription(`Songs Queue | ${msg.guild.name}\n\n ${text}`);
    msg.channel.send(embed);
  } else if (cmd === "repeat") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send("There is no music playing to repeat it.");

    if (queue.repeating) {
      queue.repeating = false;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`False`)"
      );
    } else {
      queue.repeating = true;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`True`)"
      );
    }
  } else if (cmd === "forceskip") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (queue.repeating) {
      queue.repeating = false;

      msg.channel.send("ForceSkipped, Repeating mode is on.");

      queue.connection.dispatcher.end("ForceSkipping..");

      queue.repeating = true;
    } else {
      queue.connection.dispatcher.end("ForceSkipping..");

      msg.channel.send("ForceSkipped.");
    }
  } else if (cmd === "skipto") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue.songs || queue.songs < 2)
      return msg.channel.send("There is no music to skip to.");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip, because repeating mode is on, run " +
          `\`${prefix}repeat\` to turn off.`
      );

    if (!args[0] || isNaN(args[0]))
      return msg.channel.send(
        "Please input song number to skip to it, run " +
          prefix +
          `queue` +
          " to see songs numbers."
      );

    let sN = parseInt(args[0]) - 1;

    if (!queue.songs[sN])
      return msg.channel.send("There is no song with this number.");

    let i = 1;

    msg.channel.send(
      `Skipped to: **${queue.songs[sN].title}[${queue.songs[sN].duration}]**`
    );

    while (i < sN) {
      i++;
      queue.songs.shift();
    }

    queue.connection.dispatcher.end("SkippingTo..");
  } else if (cmd === "Nowplaying") {
    let q = active.get(msg.guild.id);

    let now = npMsg(q);

    msg.channel.send(now.mes, now.embed).then(me => {
      setInterval(() => {
        let noww = npMsg(q);
        me.edit(noww.mes, noww.embed);
      }, 5000);
    });

    function npMsg(queue) {
      let m =
        !queue || !queue.songs[0] ? "No music playing." : "Now Playing...";

      const eb = new Discord.RichEmbed();

      eb.setColor(msg.guild.me.displayHexColor);

      if (!queue || !queue.songs[0]) {
        eb.setTitle("No music playing");
        eb.setDescription(
          "\u23F9 " + bar(-1) + " " + volumeIcon(!queue ? 100 : queue.volume)
        );
      } else if (queue.songs) {
        if (queue.requester) {
          let u = msg.guild.members.get(queue.requester.id);

          if (!u) eb.setAuthor("Unkown (ID:" + queue.requester.id + ")");
          else eb.setAuthor(u.user.tag, u.user.displayAvatarURL);
        }

        if (queue.songs[0]) {
          try {
            eb.setTitle(queue.songs[0].title);
            eb.setURL(queue.songs[0].url);
          } catch (e) {
            eb.setTitle(queue.songs[0].title);
          }
        }
        eb.setDescription(embedFormat(queue));
      }

      return {
        mes: m,
        embed: eb
      };
    }

    function embedFormat(queue) {
      if (!queue || !queue.songs) {
        return "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(100);
      } else if (!queue.playing) {
        return (
          "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(queue.volume)
        );
      } else {
        let progress = queue.connection.dispatcher.time / queue.songs[0].msDur;
        let prog = bar(progress);
        let volIcon = volumeIcon(queue.volume);
        let playIcon = queue.connection.dispatcher.paused ? "\u23F8" : "\u25B6";
        let dura = queue.songs[0].duration;

        return (
          playIcon +
          " " +
          prog +
          " `[" +
          formatTime(queue.connection.dispatcher.time) +
          "/" +
          dura +
          "]`" +
          volIcon
        );
      }
    }

    function formatTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
    }

    function bar(precent) {
      var str = "";

      for (var i = 0; i < 12; i++) {
        let pre = precent;
        let res = pre * 12;

        res = parseInt(res);

        if (i == res) {
          str += "\uD83D\uDD18";
        } else {
          str += "▬";
        }
      }

      return str;
    }

    function volumeIcon(volume) {
      if (volume == 0) return "\uD83D\uDD07";
      if (volume < 30) return "\uD83D\uDD08";
      if (volume < 70) return "\uD83D\uDD09";
      return "\uD83D\uDD0A";
    }
  }
});*/

//// مهم
/// {} عند عمل ريمكس للبوت احذف مايوجد بملفات الجيسون وحط قوسين مثل
//// يجب ان يكون البوت رتبة اقل من رتبة البوتات الموثوقة والكبيرة مثل داينو بوت وبروبوت والاخرى لكي لا يعطيهم باند
//// يجب اعطاء البوت جميع الصلاحيات
//// البوت امن تماما من اي اخطاء في الحماية او حتى في اصل الاكواد
//// تم تجربة البوت اكثر من 3 ايام
//// هذا البوت هو الاصدار الثاني من بوت السيستم من قناة اسامة بلس
//// الاكواد مجمعة من سيرفرات كثير مثل الفا وتوكسك كودز
////شكر خاص لـ سرحان ولوفي ومرتجى على المساعدة لو لله وهم ماكان خلصنا هذا البوت الرهيب وما انسى بارون

/// ضريبة
const probot = require("probot-tax");
client.on("message", message => {
    if(message.content.startsWith( prefix + 'tax')) {
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.reply('متحط المبلغ ينجم <a:BlobBanHammer:922517087098921000> ')
    let embed = new Discord.RichEmbed()
    .setColor('#FFEB3B')
  /*  .addFields(
      {name:'`المبلغ المراد دفعه : `', value:'`**${args}**`'},
      {name:'`المبلغ شامل الضريبة :  `', value:'`**${probot.taxs(args)}**`'},
)*/
    .addField('`المبلغ المراد دفعه  :`', `**${args}**`, false)
    .addField('`المبلغ شامل الضريبة  :`', `**${probot.taxs(args)}**`, false)
    .setFooter(`By  : ${message.author.username}`, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
 
        message.channel.send(embed)
    }

    
});


///اخفاء واظهار
client.on("message", (message) => {
  if (message.content === prefix + "hide") {
    message.delete();
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        VIEW_CHANNEL: false,
      })
      .then(() => {
        const bot = new Discord.RichEmbed()
          .setColor("#FF1100")
          .setTitle(`> **تم اخفاء التشانل    <a:s7gamda:929797437193867304>**`);
        message.channel.send(bot);
      });
  }
  if (message.content === prefix + "show") {
    message.delete();
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        VIEW_CHANNEL: true,
      })
      .then(() => {
        const bot = new Discord.RichEmbed()
          .setColor("#FF1100")
          .setTitle(`> **تم اظهار التشانل    <a:s7gamda:929797437193867304>**`);
        message.channel.send(bot);
      });
  }
});

client.on("error", (err) => {
  console.log(err);
});

client.on("messageCreate", async (message) => {
  let args = message.cleanContent.split(" ");
  if (args[0] == `${prefix}roles`) {
    let space = "                         ";
    let roles = message.guild.roles
      .map((r) => r)
      .sort((a, b) => b.position - a.position);
    let rr = roles
      .map(
        (r) =>
          `${
            r.name +
            space.substring(r.name.length) +
            message.guild.members.filter((m) => m.roles.includes(r.id)).length
          } members`
      )
      .join("\n");
    await message.channel.sebd(`\`\`\`${rr}\`\`\``);
  }
});
//

///Embed Message
client.on("message", (embed1) => {
  if (embed1.content === prefix + "Ttdm") {
    embed1.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#FFEB3B")
      .setThumbnail("https://i.imgur.com/gCWiLdT.gif")
      .setTitle("**طريقة التسجيل <a:s7:929681264984858664> **")
      .setDescription(`**        
Team Name :
Team Leader :
P1 :
P2:
Logo 
     **` )
      .setImage("https://i.imgur.com/P9QVop4.gif")
      .setFooter("༺𝐔𝐋𝐓༻ 𝐄𝐒𝐏𝐎𝐑𝐓𝐒 彡", "https://i.imgur.com/gCWiLdT.gif");
    embed1.channel.send(bot);
return embed1.channel.send("@everyone")
  }
});

///Embed 2
client.on("message", (embed2) => {
  if (embed2.content === prefix + "Tcla") {
    embed2.delete();
    const bot2 = new Discord.RichEmbed()
      .setColor("#FFEB3B")
      .setThumbnail("https://i.imgur.com/gCWiLdT.gif")
      .setTitle("**طريقة التسجيل <a:s7:929681264984858664> **")
      .addField(
        `
Team Name :
Team Leader :
P1:
P2:
P3:
P4:
Logo `,
        " **(if you have )**"
      )
      .setImage("https://i.imgur.com/NmrD2dX.gif")
      .setFooter("༺𝐔𝐋𝐓༻ 𝐄𝐒𝐏𝐎𝐑𝐓𝐒 彡", "https://i.imgur.com/gCWiLdT.gif");
    embed2.channel.send(bot2);
return embed2.channel.send("@everyone")
  }
});

///Embed 3
client.on("message", (embed3) => {
  if (embed3.content === prefix + "serRULE") {
    embed3.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#FFEB3B")
      .setThumbnail("https://i.imgur.com/gCWiLdT.gif")
      .setTitle("**SERVER RULES <a:hypeshiny:930187068125118474> **")
      .setDescription(
        `**
1 - عدم أثارة المشاكل بالسيرفر او عالخاص

2 - احترم خصوصية الآخرين وعدم احراجهم

3 - مراعاة نظام كل روم و سياسته وقوانينه

4 - ممنوع السبام أو إرسال بكثرة بوقت قصير

5 - ممنوع طلب المال - بطاقات الستور - الألعاب

6 - يمنع دخول السيرفر بالأسماء والصور الغير لائقة

7 - يمنع نشر الروابط مثل السيرفرات , المقاطع , التويتش

8 - احترم جميع الموجودين في السيرفر احترم المشرفين

9 - في حاله وجود مشكله ابلغ الإدارة

10 - في حاله نشر أي سيرفر اخر في الخاص بلغ الإدارة

11 - يمنع استخدام برامج تغير الصوت

12 - ممنوع التكلم عن : السياسة .الدين .القبائل . الهاك

13 - في حاله وجود خلاف او انتهاك للقوانين يرجى إبلاغ احد المشرفين

14 - في حالة تخطي قوانين السيرفر يتم طردك من السيرفر**`
      )
      .setImage("https://probot.media/FCI8yRTiYE.gif")
      .setFooter("༺𝐔𝐋𝐓༻ 𝐄𝐒𝐏𝐎𝐑𝐓𝐒 彡", "https://i.imgur.com/gCWiLdT.gif");
    embed3.channel.send(bot);
return embed3.channel.send("@everyone")
  }
});

///Embed 4
client.on("message", (embed4) => {
  if (embed4.content === prefix + "claRULE") {
    embed4.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#FFEB3B")
      .setThumbnail("https://i.imgur.com/gCWiLdT.gif")
      .setTitle("SCRIM RULES <a:rule:880872686279094372> ")
      .setDescription(
        `**
ممنوع التفنيش بوكسات او طاسة الا في حالة عدم وجود سلاح و طلق

ممنوع نهائيا الجليتشات و الملفات التعديل

اي لاعب سولو سيتم اقصائه

متسجلش لو مش هتلعب اول روم يا متوحد

يرجوا الالتزام ب علي الاقل 2 من نفس ال نيم تاج

التصوير مطلوب من الجميع

ممنوع فتح المايك العام

الفلير مسموح

اي مخالفة لل قواعد هتأدي ل استبعاد ال تيم كلو**`
      )
      .setImage("https://probot.media/0Nl8JidD17.gif")
      .setFooter("༺𝐔𝐋𝐓༻ 𝐄𝐒𝐏𝐎𝐑𝐓𝐒 彡", "https://i.imgur.com/gCWiLdT.gif");
    embed4.channel.send(bot);
return embed4.channel.send("@everyone")
  }
});

///Embed 5
client.on("message", (embed5) => {
  if (embed5.content === prefix + "claINFO") {
    embed5.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#FFEB3B")
      .setThumbnail("https://i.imgur.com/gCWiLdT.gif")
      .setTitle("POINT SYSTEM <a:grs:922517063774400563> ")
      .setDescription(
        `**
1 st Place 15 Points

2 nd Place 12 Points

3 rd Place 10 Points

4 th Place 8 Points

5 th Place 6 Points

6 th Place 4 Points

7 th Place 2 Points

8-12 th Place 1 Points

13-16 th Place 0 Points

Kill 1 Point
** تحذير <a:rule:880872686279094372> **
فايت اول زون = بان اسبوع**`
      )
      .setImage("https://probot.media/JadMOeIOtg.gif")
      .setFooter("༺𝐔𝐋𝐓༻ 𝐄𝐒𝐏𝐎𝐑𝐓𝐒 彡", "https://i.imgur.com/gCWiLdT.gif");
    embed5.channel.send(bot);
return embed5.channel.send("@everyone")
  }
});

///Embed 6
client.on("message", (embed6) => {
  if (embed6.content === prefix + "tdmRULE") {
    embed6.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#FFEB3B")
      .setThumbnail("https://i.imgur.com/gCWiLdT.gif")
      .setTitle("TDM RULES <a:grs:922517063774400563> ")
      .setDescription(
        `**<a:s7:929681264984858664> مسموح البيستول
<a:s7:929681264984858664> مسموح الفيست والخوذة
<a:glt:929681265752412180> ممنوع استخدام أسلحه غير الامفور
<a:glt:929681265752412180> ممنوع استخدام الامفور التلجي فوق لفل 3
<a:glt:929681265752412180> ممنوع التحالف
<a:glt:929681265752412180> ممنوع استخدام النيدات
<a:glt:929681265752412180> ممنوع التأخر عن معاد الروم اكتر من خمس دقائق
<a:glt:929681265752412180> ممنوع الزحلقه
<a:glt:929681265752412180> ممنوع فتح مايك العام
<a:glt:929681265752412180> ممنوع الوقوف في البييز اكثر من عشر ثواني

** تحذير <a:rule:880872686279094372> **
التزم بالقوانين لتجنب البان
||لازم التصوير <a:dabos:922517076885798962>||**`
      )
      .setImage("https://probot.media/Cv77UM4buz.gif")
      .setFooter("༺𝐔𝐋𝐓༻ 𝐄𝐒𝐏𝐎𝐑𝐓𝐒 彡", "https://i.imgur.com/gCWiLdT.gif");
    embed6.channel.send(bot);
return embed6.channel.send("@everyone")
  }
});

///Embed 7

client.on("message", (helpT) => {
  if (helpT.content.startsWith(prefix + "helpT")) {
    helpT.react("a:s7gamda:929797437193867304");
    const bot = new Discord.RichEmbed()
      .setColor("#FFEB3B")
      .setThumbnail("https://i.imgur.com/NRYF2ma.png")
      .setTitle("**TURBO BOT Commands <a:grs:922517063774400563> **")
      .setDescription(
        `**<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
<a:gna7ym:930187081299423263> الأوامر العامة <a:gna7sh:930187075649679401> 
\`${prefix}bot\` : لعرض معلومات عن البوت 
\`${prefix}user\` : لعرض معلومات عنك 
\`${prefix}avt\` :يعرض لك صورت  اي شخص عن طريق الايدي 
\`${prefix}avatar\` : لعرض صورتك أو صورة الي تمنشنه 
\`${prefix}color\` : لأختيار لونك في السيرفر 
\`${prefix}credits\` : لمعرفة رصيدك  
\`${prefix}daily\` : لأخذ جائزة يومية
\`${prefix}inf\` : عدد الدعوات للسيرفر
\`${prefix}tax\` : لمعرفة ضريبة ProBot
\`${prefix}invite\` : لانشاء رابط دعوة البوت
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
<a:tag:929797450061987880> الأوامر الإدارية <a:tag:929797450061987880>
\`${prefix}clear\` : لمسح الشات 
\`${prefix}ban\` : لحظر شخص من السيرفر
\`${prefix}kick\` : لطرد شخص من السيرفر
\`${prefix}open\` : لفتح الشات
\`${prefix}close\` : لقفل الشات 
\`${prefix}mute\` : لإسكات شخص
\`${prefix}unmute\` : لـ فك إسكات شخص
\`${prefix}setup\` : إنشاء تيكت
\`${prefix}closet\` : لحذف روم التكت
\`${prefix}start\` : لإنشاء جيفاواي
\`${prefix}say\` : البوت يكرر كلامك
\`${prefix}move\` : لسحب الشخص الى روومك
\`${prefix}reply\` : لصنع رد تلقائي
\`${prefix}setLog\` : لتحديد روم السجلات 
\`${prefix}ls\` : لإظهار جميع بوتات السيرفر
\`${prefix}role\` : لاعطاء شخص رتبة
\`${prefix}role all\` : لـ إعطاء الجميع رتبة معينة
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
<a:s7gamda:929797437193867304> أوامر التقديم <a:s7gamda:929797437193867304>
\`${prefix}room1\` : لعمل روم التقديمات
\`${prefix}room2\` : لعمل روم القبول والرفض
\`${prefix}قبول\` : لقبول تقديم عضو
\`${prefix}رفض\` : لرفض عضو
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
<a:prv:932029032629956618> أوامر الحماية <a:prv:932029032629956618>
\`${prefix}antibots on\` : منع دخول بوتات
\`${prefix}antibots off\` : السماح للبوتات بالدخول
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
**`
      )
      .setImage("https://i.imgur.com/Ewfi7jU.gif");
    helpT.channel.send(bot);
   return helpT.channel.send("@everyone")
  }
});





///Embed 8
client.on("message", (embed8) => {
  if (embed8.content === prefix + "list") {
    embed8.delete();
    const bot = new Discord.RichEmbed()
    .setColor("#00BCD4")
    .setDescription(`**
**<a:gna7sh:930187075649679401><a:s_:930190463535816735><a:c_:930191251897217096><a:r_:930190480996728922><a:i_:930190442862112778><a:m_:930190482162712586><a:love:930190460683685978><a:l_:930190461077979196><a:i_:930190442862112778><a:s_:930190463535816735><a:t_:930190463384842261><a:gna7ym:930187081299423263>**

Failure to attend without an excuse will ban you from participating in the next scrims.

  ♡ عدم الحضور بدون عذر سوف يعرضك  للحظر من المشاركة في السكريمات القادمة. ♡ 


> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 1 : EMPTY

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 2 : EMPTY

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 3 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 4 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 5 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 6 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 7 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 8 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 9 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 10 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 11 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 12 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 13 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 14 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 15 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 16 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 17 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 18 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 19 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 20 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 21 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 22 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 23 : 

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 24 : EMPTY

> <a:shmec:930187069169479740> > 𝐓𝐄𝐀𝐌 25 : EMPTY

MAP  ➥ MIRAMAR - ERANGEL- SANHOK
 
 خش في مكانك بدل ما تاخد بال <a:shb:930193756114808872>

الكاريزمات الي مش هتخش التلت رومات هياخدوا ناحو <a:BlobBanHammer:922517087098921000>
**`);
    embed8.channel.send(bot);
return embed8.channel.send("@everyone")
  }
});

///Embed 9
client.on("message", (embed9) => {
  if (embed9.content === prefix + "idTDM") {
    embed9.delete();
    const bot2 = new Discord.RichEmbed()
      .setColor("#00BCD4")
      .setTitle(
        "**<a:gna7sh:930187075649679401>.<a:t_:930190463384842261><a:d_:930856769771696210><a:m_:930190482162712586>­<a:love:930190460683685978><a:i_:930190442862112778><a:d_:930856769771696210>.<a:gna7ym:930187081299423263>**"
      ).setDescription(`


**<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
> <a:shm2:930795173351407676>MAP : TDM
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
> <a:shm2:930795173351407676>ID :
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
> <a:shm2:930795173351407676>PASSWORD : 
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
> <a:shm2:930795173351407676>START :
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>

طبعاا الكاريزماات تخش عشان متنورش البلاك ليست <a:shb:930193756114808872>**
`);
    embed9.channel.send(bot2);
  }
});

///Embed 10
client.on("message", (embed10) => {
  if (embed10.content === prefix + "id") {
    embed10.delete();
    /*   return embed10.channel.send(`**TEST**`);*/
    const bot2 = new Discord.RichEmbed().setColor("#00BCD4")
      .setDescription(`**<a:gna7sh:930187075649679401><a:s_:930190463535816735><a:c_:930191251897217096><a:r_:930190480996728922><a:i_:930190442862112778><a:m_:930190482162712586><a:love:930190460683685978><a:i_:930190442862112778><a:d_:930856769771696210><a:gna7ym:930187081299423263>

<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
> <a:shm2:930795173351407676>MAP :  
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
> <a:shm2:930795173351407676>ID : 
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
> <a:shm2:930795173351407676>PASSWORD : 
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
> <a:shm2:930795173351407676>START : 
<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>

طبعاا الكريزمات تخش عشان متنورش البلاك ليست <a:shb:930193756114808872>**
`);
    /// <a:er:931287030128865321> /// <a:mir:931287029675868171> /// <a:sa:931287030145630249> /// <a:vi:931287030665707570>

    embed10.channel.send(bot2);
  }
});

///Embed 11
client.on("message", (embed11) => {
  if (embed11.content === prefix + "MVP") {
    embed11.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#FFEB3B")
      .setThumbnail("https://i.imgur.com/uUqpetM.gif")
      .setDescription(
        `**
<a:hypeshiny:930187068125118474> ༺𝐔𝐋𝐓༻ 𝐄𝐒𝐏𝐎𝐑𝐓𝐒 彡 𝙎𝘾𝙍𝙄𝙈𝙎 <a:hypeshiny:930187068125118474>
 

<a:shm2:930795173351407676> 𝙈𝙑𝙋 𝙏𝙚𝙖𝙢 𝙁𝙤𝙧 𝙇𝙖𝙨𝙩 𝙎𝙘𝙧𝙞𝙢 
 
<a:shm2:930795173351407676> <a:shm2:930795173351407676> <a:gna7sh:930187075649679401> WINNER <a:gna7ym:930187081299423263> 
 
 
Congratulations to you <a:g_:931289400246145054><a:g_:931289400246145054> <a:tag:929797450061987880>
@here
 **`
      )
      /*   .setImage()*/
      .setFooter("༺𝐔𝐋𝐓༻ 𝐄𝐒𝐏𝐎𝐑𝐓𝐒 彡", "https://i.imgur.com/gCWiLdT.gif");
    embed11.channel.send(bot);
   return embed11.channel.send("@everyone")

  }
});
/*
اضغط علي الرياكشن يا كاريزمه بدل متاخد بال  */

///Embed 12
client.on("message", (embed12) => {
  if (embed12.content.startsWith(prefix + "test")) {
    embed12.react("a:s7gamda:929797437193867304");
    return embed12.channel.send(
      `دوس علي <a:s7gamda:929797437193867304> يا كاريزمه بدل متاخد بال <a:shb:930193756114808872>`
    );
  }
});

///تعديل غير اساسي
////كود هيلب

client.on("message", (embed13) => {
  if (embed13.content === prefix + "helpT") {
    embed13.delete();
    embed13.react("a:s7gamda:929797437193867304");
    const bot = new Discord.RichEmbed()
            .setAuthor(
              `Music Commands ⚡`,"https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif"
            )
      .setColor("#FFEB3B")
      .setThumbnail("https://i.imgur.com/NRYF2ma.png")
      .setDescription("**`!autoplay` - التشغيل التلقائي للموسيقي \n `!dj` - Set Dj Role To Controle The Bot \n `!join` - 24/7 in the channel \n `!jump` - skip a specific song \n `!lang` - Change The Bot Lang In The Guild \n `!leave` - leave the 24/7 channel \n `!loop` - Loop Queue/Song \n `!lyrics` - Song lyrics \n `!music-data` - get all the playing music data \n `!nowplaying` - What is paying \n `!pause` - Pause The Music \n `!ping` - معرفة سرعة البوت \n `!play-playlist` - تشغيل قائمة التشغيل الخاصة بك \n `!play` - لتشغيل الأغاني \n `!queue` - معاينة قائمة انتظار الخادم \n `!resume` - لاستئناف الأغنية \n `!say` - اجعل البوت يقول أي شيء في القناة الصوتية \n `!search` - اجعل البوت يبحث عن اي شيء \n `!seek` - الذهاب الي وقت معين في الأغنية \n `!setup` - قم باعداد قناة جمع الاغاني \n `!skip` - تخطي الأغنية \n `!stop` - ايقاف الاغنية \n ``**")
      /*   .setImage()*/
      .setFooter("༺𝐔𝐋𝐓༻ 𝐄𝐒𝐏𝐎𝐑𝐓𝐒 彡", "https://i.imgur.com/gCWiLdT.gif");
    embed13.channel.send(bot);
  }
});


///Embed 14
client.on("message", (embed14) => {
  if (embed14.content === prefix + "listTDM") {
    embed14.delete();
    const bot = new Discord.RichEmbed()
.setColor("#FFEB3B")
      .setDescription(`<a:gna7sh:930187075649679401><a:t_:930190463384842261><a:d_:930856769771696210><a:m_:930190482162712586><a:hypeshiny:930187068125118474><a:l_:930190461077979196><a:i_:930190442862112778><a:s_:930190463535816735><a:t_:930190463384842261><a:gna7ym:930187081299423263>

> <a:1_:932038094088183808>  ­­­­­­  <a:vs:932717790106910771>

> <a:2_:932038094612471890>  ­­­­­­  <a:vs:932717790106910771>

> <a:3_:932038094952210432>  ­­­­­­  <a:vs:932717790106910771>

`);
    embed14.channel.send(bot);
   return embed14.channel.send("@everyone")
  }
});

///Embed 15
client.on("message", (خخخخ) => {
  if (خخخخ.content.startsWith("!say خخ")) {
     خخخخ.delete()
    return خخخخ.channel.send(
      `**البوت دا طاهر وهيفضل طول عمره طاهر <a:rks:933077528933990401>**`
    );
  }
});

///Embed 16
client.on("message", (خخخخ) => {
  if (خخخخ.content.startsWith("خخخ")) {
    خخخخ.delete()
if (خخخخ.member.hasPermission("ADMINISTRATOR")){
خخخخ.delete()
       خخخخ.channel.send(
        "**براحتك خااااااالص <a:rks:933077528933990401>**"
      )}
else
    return خخخخ.channel.send(
      `**السيرفر دا طاهر وهيفضل طول عمره طاهر <a:rks:933077528933990401>**`
    );
  }
});

client.on("message", (خخخخ) => {
  if (خخخخ.content.startsWith("كس")) {
    خخخخ.delete()
if (خخخخ.member.hasPermission("ADMINISTRATOR")){
خخخخ.delete()
       خخخخ.channel.send(
        "**خلاص يبو عمو عندي انا دي <a:rks:933077528933990401>**"
      )}
else
    return خخخخ.channel.send(
      `**كسمين امك يا ابن المتناكة **`
    );
  }
});

///Embed 17
client.on("message", (embed17) => {
  if (embed17.content.startsWith(prefix + "اثبت نفسك")) {
    embed17.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#03A9F4")
      .setThumbnail("https://i.imgur.com/gCWiLdT.gif")
      .setDescription(
        `<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>

**DJ | لاخذ رول تشغيل الأغاني في السيرفر | :musical_note: 

<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>

PC | لو انت كمبيوتر مش محتاجه يعني |  :desktop: 

<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>

Mobile | لو انت موبايل سهله اهي | :mobile_phone: 

<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>

90 Frame | :heart_on_fire:

<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
 
60 Frame |  :pirate_flag:  <:vi:931287030665707570>

<a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570>
**

`
      )
      .setImage("https://i.imgur.com/qmcdwmQ.gif");
    embed17.channel.send(bot);
   return embed17.channel.send("@everyone")

  }
});


///Embed 18

client.on("message", (embed18) => {
  if (embed18.content === prefix + "helpT") {
    embed18.delete();
    const bot = new Discord.RichEmbed()
      .setColor("#FFEB3B")
      .setTitle("Giveaway Commands <a:HyperTada:922517074771865600>")
      .setDescription("**・Giveaway **\n `!start` [channel-name] [Time] [winners] [Prize] \n `!reroll` [prize name] \n `!end` [prize name] \n <a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570><a:line:930859851133890570> \n **・Examples** \n `!start` #giveaway 5m 1 Testing \n `!end` Testing \n `reroll` Testing")
    embed18.channel.send(bot);
  }
});



/// Reaction Auto
client.on("message", message => {
  if (message.channel.id !== "918004475640287262") return;
  if(message.author.id === client.user.id) return
message.react("880872686891450479");
message.react("933077528933990401");
message.react("929797397318623262");
});

client.on("message", message => {
  if (message.channel.id !== "872242483420094506") return;
  if(message.author.id === client.user.id) return
message.react("880872686891450479");
message.react("933077528933990401");
message.react("929797397318623262");


});

//Embed19
client.on("message", message => {
  if (message.channel.id !== "872242483420094506") return;
  if(message.author.id === client.user.id) return
    const bot = new Discord.RichEmbed()
      .setColor("#FD1100")
      .setImage(`https://i.imgur.com/GzMoqJh.gif`)
    message.channel.send(bot);

});

//Embed20
client.on("message", message => {
  if (message.channel.id !== "918004475640287262") return;
  if(message.author.id === client.user.id) return
    const bot = new Discord.RichEmbed()
      .setColor("#FD1100")
      .setImage(`https://i.imgur.com/GzMoqJh.gif`)
    message.channel.send(bot);

});


/// Warn
client.on("message", message => {
     if(message.content.startsWith(prefix + "warn")) {
      if(!message.member.hasPermission("MUTE_MEMBERS"))
 return message.channel.send(`>>> You Don't have the permission `);
 let args = message.content.split(" ").slice(1);
 
    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor('#0083ff')
        .setTimestamp();
 
    if (!user) {
        embed.addField("**منشن الشخص** ", ` ${message.author.tag}?`)
            .setTimestamp();
        return message.channel.send(embed);
    } if (!reason) {
        embed.addField("**لماذا تريد اعطاء الشخص أنذار** ? ", ` ${user.tag}?`)
        return message.channel.send(embed);
        return message.channel.send(embed);
    }
    embed.addField("**تم ارسال الانذار** ", ` **${user.tag}!**`)
        .setTimestamp();
    message.channel.send(embed);
    const embed1 = new Discord.RichEmbed()
        .setColor('#FF1100')
        .setTimestamp()
        .setTitle("**تم تنذيرك <a:BlobBanHammer:922517087098921000>**")
        .setDescription(`**
لقد أخذت إنذار بسبب  :** **${reason}**
** بواسطة** **${message.author.tag}**`)
    user.send(embed1);
    message.delete();
}
});


///Profile
client.on('message', message => {
    if (message.content.startsWith(prefix + "profile")) {
        var args = message.content.split(" ").slice(1);
        var men = message.mentions.users.first();
        let user = message.mentions.users.first() || message.author;
        message.guild.fetchInvites().then(invites => {
            let personalInvites = invites.filter(
                i => i.inviter.id === message.mentions.users.first() || message.author.id
            );
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            var he;
            if (men) {
                he = men
            } else {
                he = message.author
            }
            var mon = message.mentions.members.first();
            var h;
            if (mon) {
                h = mon
            } else {
                h = message.member
            }
            var baderp = new Discord.RichEmbed()
                .setColor('Random')
                .setImage(`https://api.probot.io/profile/${user.id}`)
            message.channel.send(baderp)
        });
    }
});


/// Spin 
client.on('message', (msg) => {
  var word = [
    "You won Nitro Classic",
    "You won Nitro Gaming",
    "You won 10k Credits",
    "You won 20k Credits",
    "You won 40k Credits",
    "You won 50k Credits",
    "You won 100k Credits"
  ]
  if (msg.author.bot) return
  if (msg.content === prefix + "spin") {
    var result = word[Math.floor(Math.random() * word.length)];
    msg.channel.send(result)
  }
})

/// say embed
client.on('message', message => {
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
/*
let MADE = message.content.split(" ");
let BY = message.content.split(" ");*/
let BESHO = message.content.split(" ")
if (command === "embed") {
    if (!BESHO[1])
      return message.channel.send(`> ** اكتبلك انا ؟**`).catch(console.error);
message.delete()
  message.channel.send(new Discord.RichEmbed()
.setDescription(`${BESHO[1]}`)
.setThumbnail("https://i.imgur.com/gCWiLdT.gif")
.setColor("#03A9F4") )
.catch(console.error);
}
});



/// Send Message
client.on('ready', () => {
  setInterval(function() {
     let client = client.channels.get("all-members-24")
     if(client){
client.send("message")
     }
    }, 86400000)
});
/*
/// send nitro
const nitro = require('discordnitro')
client.on('ready', () => {
    setInterval(function () {
        let client2 = client.channels.cache.get("ايدى الشنل")
        if (client2) {
            client2.send(nitro(5))
        }
    }, 1000) //1000 = 1 second
});
*/


/// Delete Message
client.on("message",async message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}clear` || command == `${prefix}مسح` || command == `${prefix}cr`) { 
message.delete(1)
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);
 
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.channel.send(`\`\`\`javascript
لا أستطيع حذف أكثر من 100 رسالة 
\`\`\``).then(messages => messages.delete(10000))
if(!messagecount) messagecount = '100';
    message.channel.fetchMessages({limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
    message.channel.send(`\`\`\`js
${msgs.size} عدد الرسائل التي تم مسحها
\`\`\``).then(messages => 
messages.delete(10000));
    })
  }    
});


/// welcome
/*const guild = client.guilds.cache.get("872242482442809476")///ايدي السيرفر حقك
*/
client.on('guildMemberAdd', async (member) => {
  const channel = member.guild.channels.find(ch => ch.id === '872242482753183803');/// ايدي روم الترحيب
if (!channel) return;
channel.send(`مرحباً بك ${member} نورت سيرفرنا **${member.guild.name}**, `);/// الكلام الي فوق 
const wel = client.channels.cache.get("872242482753183803")/// ايدي روم الترحيب 
let msg = new Discord.RichEmbed()
let embed = new Discord.RichEmbed()
.setTitle(`༺𝐔𝐋𝐓༻ 𝐄𝐒𝐏𝐎𝐑𝐓𝐒 彡`)/// اسم سيرفرك
.setDescription(`نورت سيرفرنا والسيرفر نور بيك ♥`)///الكتابة الي تريدها 
.setImage(``)/// رابط الصوره الي بتضهر
.setThumbnail(member.user.avatarURL({dynamic:true}))
.setFooter(`**أصبحنا الآن ${member.guild.memberCount} صديق في السيرفر ✿**`) /// الكلام الي تحت 
.setColor('BLUE')
wel.send(embed).then((msg) => {
}).catch((e) => {
console.log(e)}
)
});



/// Verified
client.on('message', nibo => {
  if (nibo.content === prefix + "ver") {
    const embed = new Discord.RichEmbed()
.setColor("#03A9F4")//اللون
.setTitle(`Verified Bot`)
.setDescription(`لقد دخل بوتك  ${client.guilds.size} سيرفر من 100 **Dont Give Up**`)
.setFooter(`${client.user.username}`)
nibo.channel.send(embed);
}});