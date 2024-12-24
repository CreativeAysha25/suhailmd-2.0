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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_58_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICA1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0LFxuICAgICAgICA0MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjExLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMixcbiAgICAgICAgNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJocGM0N3lKVzZpSzM5SmlQMkx3dlNqeVlmRWQvbExlVmNsT1pxVCtBS1hJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYVFFxZm51SFRrLWVTVlFDdndCVlVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk4Yzg1YzBkLTA1NWQtNDA4MC05OGM1LWU0YWJhOWYwOTk5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODYsXG4gICAgICAxNzIsXG4gICAgICAyLFxuICAgICAgMjAxLFxuICAgICAgMTQ1LFxuICAgICAgNjEsXG4gICAgICAxNzksXG4gICAgICAxMjMsXG4gICAgICA2NSxcbiAgICAgIDE3MyxcbiAgICAgIDU4LFxuICAgICAgNjgsXG4gICAgICAyMzQsXG4gICAgICA4NCxcbiAgICAgIDIyNSxcbiAgICAgIDI1MixcbiAgICAgIDUyLFxuICAgICAgMTYsXG4gICAgICA0MCxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyNTEsXG4gICAgICAxMzgsXG4gICAgICAyMDcsXG4gICAgICAxOSxcbiAgICAgIDcxLFxuICAgICAgMTE0LFxuICAgICAgMTk0LFxuICAgICAgMjIsXG4gICAgICAyMTcsXG4gICAgICAyMDEsXG4gICAgICA5MixcbiAgICAgIDUwLFxuICAgICAgMTU4LFxuICAgICAgMTkwLFxuICAgICAgODUsXG4gICAgICAxMzEsXG4gICAgICAyNDgsXG4gICAgICA3NixcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGRlNUTEVEUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyNzQ5MjEyMTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRWxlZ2FudCBWZWlscyBLYW5vXCIsXG4gICAgXCJsaWRcIjogXCIxNjU1NTg1NzQxMjExNDM6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYURtZXdDRUpXM3Fic0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNaRXlJckRsQm0xWmtRLzNRVjRqQkxOU0N3Z1Evbmdpa25lWlF6MWM1UlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQWoyK1NZOWlER2dlakxRKzQ0a3N4QWtBOGFXbHZtSXh2NDhGL1VoMitaQzFoZ2tZUnpKcmF2b1lxaUZnL0JyTlg2WTM5RTBpRkc2ZVhabE4wVUpqQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM2pUOUtGd0xhQWhtTlRWRnY3WG5OTVlDUHpVWHlIMWVhYllGN0JoTVpzbloxdVZVNTBxOVFzNE9ZTjRNUHUrVEhxZFkwVWRoU1U0M01jYVd6WjcvQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyNzQ5MjEyMTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MDIzNTEzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 

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
