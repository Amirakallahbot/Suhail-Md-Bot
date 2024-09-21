const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348035249163";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_19_31_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICA5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDczLFxuICAgICAgICA5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDk1LFxuICAgICAgICA5NixcbiAgICAgICAgMjksXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICA5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICA0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4YzY5SEdRazNqVk1iMnRvQmpqNFdjclg4NVdiNFAxSnFHeGM3MXVZSUtJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5Y2stLTNVNFMtS2RYSkNkX1Z1WVR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVmZWI2YzM2LTg1ZDYtNGMyYi05ODM3LTBkYmExNWY0YWE2M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDAsXG4gICAgICAxMzEsXG4gICAgICAxOTEsXG4gICAgICAyMyxcbiAgICAgIDE0MSxcbiAgICAgIDIwMCxcbiAgICAgIDkyLFxuICAgICAgMTM0LFxuICAgICAgNjMsXG4gICAgICAyNixcbiAgICAgIDIzMixcbiAgICAgIDE5MSxcbiAgICAgIDUsXG4gICAgICAyMDUsXG4gICAgICA5MixcbiAgICAgIDIxNixcbiAgICAgIDkwLFxuICAgICAgMTQ0LFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgNjUsXG4gICAgICAxNjksXG4gICAgICAxNjMsXG4gICAgICAxNTksXG4gICAgICAxNzksXG4gICAgICA1MixcbiAgICAgIDIzMSxcbiAgICAgIDEzNyxcbiAgICAgIDE1OSxcbiAgICAgIDk1LFxuICAgICAgNzMsXG4gICAgICAyMjQsXG4gICAgICAxMDQsXG4gICAgICA2MyxcbiAgICAgIDEyMSxcbiAgICAgIDk2LFxuICAgICAgMzksXG4gICAgICA4OSxcbiAgICAgIDE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlk3VEE4UFdGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDM1MjQ5MTYzOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDIxNzY0MDMxMTYyMTQ6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjM0dEpNSkVQYTl2TGNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmVkdNVnN2VnlzRXBvMnJrU0tlQmdFdWc1My8wQWJra1pEclE0RlJqNUQ4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlIa05oaWF1SkJxTE1VVlI2NU5ZcjFoVDU4dSt4VE9IeTZXWVJ4NzdyZ0FqdXlGWnZ1cHl0WmgzNUhUVDV6STNWSk9OZEx1Nmk2eXYwVHQxMjlnTUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVOSDBmOXFBQmdST0dld2pXLzhINzRhWVQvY3RjaU93UW5DUnZzS1N5QXhkWVdiYnNDZytqRDVmVDcrWCtGMVp1TzhSclFjL3M0UUVZbXZNTUJ3ckFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzUyNDkxNjM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjk0NzA2NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
