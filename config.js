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


global.devs = "" // Developer Contact 2348025012731
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_04_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2LFxuICAgICAgICAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA3LFxuICAgICAgICAzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI4LFxuICAgICAgICA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDg2LFxuICAgICAgICA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgMjQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICA2MixcbiAgICAgICAgODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NixcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc4LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxdy8wOHg2ajBQNHVlZkVjM2ZlMFRCZmthVnBDTlZOU2piT1BaczJwbGlrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLV3NhUmNmclJZcTIxdlBGcVpENGZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQyNDFiY2IxLTg5ODQtNGRiZS1hNzA4LTI2ZDI1ZTg4MzY2ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDU4LFxuICAgICAgMTA2LFxuICAgICAgMixcbiAgICAgIDIxNyxcbiAgICAgIDYyLFxuICAgICAgMTA4LFxuICAgICAgOTIsXG4gICAgICA1MSxcbiAgICAgIDE0LFxuICAgICAgMjI3LFxuICAgICAgMjIzLFxuICAgICAgMTAyLFxuICAgICAgOTUsXG4gICAgICA4NSxcbiAgICAgIDEyNSxcbiAgICAgIDMzLFxuICAgICAgMTI1LFxuICAgICAgMTUxLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAxNDIsXG4gICAgICAxNjcsXG4gICAgICAyLFxuICAgICAgMTg5LFxuICAgICAgMTM4LFxuICAgICAgMTEzLFxuICAgICAgMjA1LFxuICAgICAgMTI5LFxuICAgICAgMjAxLFxuICAgICAgMjE4LFxuICAgICAgODcsXG4gICAgICAxODMsXG4gICAgICAxMjMsXG4gICAgICA5NCxcbiAgICAgIDEzLFxuICAgICAgMjUzLFxuICAgICAgMTcyLFxuICAgICAgMTU1LFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGFPbk1nS0VMbVk2YmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJraFRMbTIzeXV1WE9YTWltbU92d1hJNTYyWVJZaVZpeUFaaU91aWg2NGlnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInd1T3pUT2VBTXg0NWdqT3NwZzBpMG5XMHl3L3JEQ0xwaUxPZ01TRUkrRW5CZndic2Zya1Bxc1M0QzhSMGtoUExKcmdNYWFxcmpxZzVqUk9TalFyMEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJFMUpOWFNBSjZzNzNPS21TUGlpeVRHalpHRis0NEtsZ3pYdCsvUTJKTUNMRCtnenlWU2hTUXFJanI0S2RMa2FBT2U2THR5M1FhcEZMUjkzNXcrUER3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAyNTAxMjczMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDA5MDU5NjE3MDU1NTM6MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMjUwMTI3MzE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODczODUyXG59Igp9"  // PUT your SESSION_ID 


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
