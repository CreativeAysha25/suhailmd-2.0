const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_36_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc1LFxuICAgICAgICA5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkwLFxuICAgICAgICA3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgNixcbiAgICAgICAgODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MixcbiAgICAgICAgMjIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyLFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICA5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDM1LFxuICAgICAgICA4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhJWlBDY3IyUnRXVFgxeHVCajRWUGJ3cnE1UWlEdlJ2QUlzMGcxNm4vTmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllNRDJOSVhzVC1hRFNsNEZjUXNKY3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTk1N2Q4YTAtMDEyMi00MDMzLThmYTAtYTUxZmVmOWZiZTFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDIyOCxcbiAgICAgIDEsXG4gICAgICAyNDYsXG4gICAgICA4NCxcbiAgICAgIDE5MyxcbiAgICAgIDkyLFxuICAgICAgMTczLFxuICAgICAgOTIsXG4gICAgICA0OSxcbiAgICAgIDEyMCxcbiAgICAgIDE3OSxcbiAgICAgIDIsXG4gICAgICAyMTcsXG4gICAgICA2NixcbiAgICAgIDgyLFxuICAgICAgMjQzLFxuICAgICAgMTMwLFxuICAgICAgMTA3LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDIxMixcbiAgICAgIDUyLFxuICAgICAgMjIzLFxuICAgICAgMTQwLFxuICAgICAgNTEsXG4gICAgICAyMyxcbiAgICAgIDE2OCxcbiAgICAgIDg0LFxuICAgICAgMjQ0LFxuICAgICAgNDIsXG4gICAgICAyOSxcbiAgICAgIDg5LFxuICAgICAgMTI2LFxuICAgICAgMjU0LFxuICAgICAgMTU4LFxuICAgICAgMTExLFxuICAgICAgMTU5LFxuICAgICAgNzgsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkdGV1BYUFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjc0OTIxMjE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkVsZWdhbnQgVmVpbHMgS2Fub1wiLFxuICAgIFwibGlkXCI6IFwiMTY1NTU4NTc0MTIxMTQzOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2FEbWV3Q0VKaTRvYnNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzWkV5SXJEbEJtMVprUS8zUVY0akJMTlNDd2dRL25naWtuZVpRejFjNVJRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRnaU9mc1NhQk1jSnd4UUFyc3JZNjZkdjdjWnpiQ0NsUUMrVmZPUWh5UmFpR2lrT00rVUY5YXBPNWVMSGhrNDljVU93MDFHTHZDQVRrZytuWXNuWkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZIendWamptMXZZNzVjaUlyRXVoakRUZXdkbzR0Qlp1QUdPcDNpVlplRnNHTk5CaTdoS1F2K2hQRzlNaDB2VHFyRnhRMkU5WU1KWUJCcHpvcTR1dGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjc0OTIxMjE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDg5MjU3MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
