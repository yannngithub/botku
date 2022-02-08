//SC ORI MHANKBARBAR
//GUE CMN NGE UPDATE SC JAN BULY:')
//THANKS TO
//LOLHUMAN
//MHANKBARBAR
//RAFLI  MAULAN
//FERNAZER
//RIYAN BOTZ
//DAN CREATOR BOT LAIN
const {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
 } = require("@adiwajshing/baileys")
 const qrcode = require("qrcode-terminal") 
 const moment = require("moment-timezone") 
 const fs = require("fs") 
 const crypto = require('crypto')
 const util = require('util')
 const imageToBase64 = require('image-to-base64')
 const axios = require('axios')
 const os = require('os')
 const { color, bgcolor } = require('./lib/color')
 const { bahasa } = require('./lib/bahasa')
 const { negara } = require('./lib/kodenegara')
 const { donasi } = require('./lib/donasi')
 const { sewabot } = require('./lib/sewabot')
 const { rules } = require('./lib/rules')
 const { developer } = require('./lib/developer')
 const { randompict } = require('./lib/randompict')
 const { fetchJson } = require('./lib/fetcher')
 const { recognize } = require('./lib/ocr')
 const fontPath = ('./lib/Zahraaa.ttf')
 const path = require('path')
 const { exec, spawn } = require("child_process")
 const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
 const tiktod = require('tiktok-scraper')
 const brainly = require('brainly-scraper')
 const ffmpeg = require('fluent-ffmpeg')
 const cd = 4.32e+7
 const { removeBackgroundFromImageFile } = require('remove.bg')
 const { ind } = require('./bahasa')
 
 /********** MENU SETTING **********/
 const vcard = 'BEGIN:VCARD\n' //jangan ganti Sayang
             + 'VERSION:3.0\n' //jangan ganti Sayang
             + 'FN:Alvianto\n' //ganti nama kamu sayang
             + 'ORG: Y-BOT\n' //ganti nama bot kamu sayang
             + 'TEL;type=CELL;type=VOICE;waid=62895401223315:+62895401223315\n'  //ganti nomor kamu sayang
             + 'END:VCARD' //jangan ganti sayang
 prefix = '.' //terserah mau ganti apa gak muach
 blocked = [] //biarin aja ya sayang
 limitawal = 99999 //terserah mau ganti apa gak sayang
 memberlimit = 99999 //terserah mau ganti apa gak sayang
 namabot = 'Y-BOT'
 cr = '*「 Y-BOT 」*' //ganti nama bot
 lolkey = '7813b18afdafac9d3df5d65a'
 xteamapi = 'a781ec5cc8d2e966'
 dapapi = 'alvianto'
 zahirapi = 'zahirgans'
 zeksapi = 'apivinz'
 alphaapi = 'Alphabot'
 /******** OWNER NUMBER**********/
 
 const ownerNumber = ["62895401223315@s.whatsapp.net"]   //ganti nomor kamu sayang
 
 /*********** LOAD FILE ***********/
 const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
 const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
 const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
 const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
 const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
 const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
 const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
 const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
 const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
 const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
 const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
 const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
 const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
 const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
 const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
 /*********** END LOAD ***********/
 
 /********** FUNCTION ***************/
 const getLevelingXp = (sender) => {
             let position = false
             Object.keys(_level).forEach((i) => {
                 if (_level[i].id === sender) {
                     position = i
                 }
             })
             if (position !== false) {
                 return _level[position].xp
             }
         }
 
         const getLevelingLevel = (sender) => {
             let position = false
             Object.keys(_level).forEach((i) => {
                 if (_level[i].id === sender) {
                     position = i
                 }
             })
             if (position !== false) {
                 return _level[position].level
             }
         }
 
         const getLevelingId = (sender) => {
             let position = false
             Object.keys(_level).forEach((i) => {
                 if (_level[i].id === sender) {
                     position = i
                 }
             })
             if (position !== false) {
                 return _level[position].id
             }
         }
 
         const addLevelingXp = (sender, amount) => {
             let position = false
             Object.keys(_level).forEach((i) => {
                 if (_level[i].id === sender) {
                     position = i
                 }
             })
             if (position !== false) {
                 _level[position].xp += amount
                 fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
             }
         }
 
         const addLevelingLevel = (sender, amount) => {
             let position = false
             Object.keys(_level).forEach((i) => {
                 if (_level[i].id === sender) {
                     position = i
                 }
             })
             if (position !== false) {
                 _level[position].level += amount
                 fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
             }
         }
 
         const addLevelingId = (sender) => {
             const obj = {id: sender, xp: 1, level: 1}
             _level.push(obj)
             fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
         }
              
          const getRegisteredRandomId = () => {
             return _registered[Math.floor(Math.random() * _registered.length)].id
         }
 
         const addRegisteredUser = (userid, sender, age, time, serials) => {
             const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
             _registered.push(obj)
             fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
         }
 
         const createSerial = (size) => {
             return crypto.randomBytes(size).toString('hex').slice(0, size)
         }
 
         const checkRegisteredUser = (sender) => {
             let status = false
             Object.keys(_registered).forEach((i) => {
                 if (_registered[i].id === sender) {
                     status = true
                 }
             })
             return status
         }
         
         const addATM = (sender) => {
             const obj = {id: sender, uang : 0}
             uang.push(obj)
             fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
         }
         
         const addKoinUser = (sender, amount) => {
             let position = false
             Object.keys(uang).forEach((i) => {
                 if (uang[i].id === sender) {
                     position = i
                 }
             })
             if (position !== false) {
                 uang[position].uang += amount
                 fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
             }
         }
         
         const checkATMuser = (sender) => {
             let position = false
             Object.keys(uang).forEach((i) => {
                 if (uang[i].id === sender) {
                     position = i
                 }
             })
             if (position !== false) {
                 return uang[position].uang
             }
         }
         
         const bayarLimit = (sender, amount) => {
             let position = false
             Object.keys(_limit).forEach((i) => {
                 if (_limit[i].id === sender) {
                     position = i
                 }
             })
             if (position !== false) {
                 _limit[position].limit -= amount
                 fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
             }
         }
             
         const confirmATM = (sender, amount) => {
             let position = false
             Object.keys(uang).forEach((i) => {
                 if (uang[i].id === sender) {
                     position = i
                 }
             })
             if (position !== false) {
                 uang[position].uang -= amount
                 fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
             }
         }
         
          const limitAdd = (sender) => {
              let position = false
             Object.keys(_limit).forEach((i) => {
                 if (_limit[i].id == sender) {
                     position = i
                 }
             })
             if (position !== false) {
                 _limit[position].limit += 1
                 fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
             }
         }
              
 const speed = require('performance-now')
 
 
 
 const runtime = function (seconds) {
   seconds = Number(seconds);
   var d = Math.floor(seconds / (3600 * 24));
   var h = Math.floor((seconds % (3600 * 24)) / 3600);
   var m = Math.floor((seconds % 3600) / 60);
   var s = Math.floor(seconds % 60);
   var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari ") : "";
   var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam ") : "";
   var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit ") : "";
   var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
   return dDisplay + hDisplay + mDisplay + sDisplay;
 }
 
 function kyun(seconds){
   function pad(s){
     return (s < 10 ? '0' : '') + s;
   }
   var hours = Math.floor(seconds / (60*60));
   var minutes = Math.floor(seconds % (60*60) / 60);
   var seconds = Math.floor(seconds % 60);
 
   //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
   return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
 }
 /********** FUNCTION ***************/
 
 const client = new WAConnection()
 //WWEB 
client.version = [2, 2149, 4]
    client.on('qr', qr => {
    qrcode.generate(qr, { small: true })
    console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now...','white'),color('Y A N','red'),color('X','lime'),color('LolHuman','red'))
 })
 
 client.on('credentials-updated', () => {
     const authInfo = client.base64EncodedAuthInfo()
    console.log(`credentials updated!`)
    fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
 })
 fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
 client.connect();
 
 
 client.on('group-participants-update', async (anu) => {
         if (!welkom.includes(anu.jid)) return
         try {
             const mdata = await client.groupMetadata(anu.jid)
             console.log(anu)
             if (anu.action == 'add') {
                 num = anu.participants[0]
                 try {
                     ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
                 } catch {
                     ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                 }
                 teks = `*Hallo* @${num.split('@')[0]}\n *SELAMAT DATANG DI GRUP ${mdata.subject}*
 ╭❲ JANGAN LUPA INTRO DULU ❳
 │  *ɴᴀᴍᴀ* :
 │  *ᴜᴍᴜʀ* :
 │  *ʜᴏʙʙʏ* :
 │  *ɢᴇɴᴅᴇʀ* :
 │  *ᴀꜱᴀʟ ᴋᴏᴛᴀ* :
 ╰────────────────⊱`
                 let buff = await getBuffer(ppimg)
                 client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
                 } else if (anu.action == 'remove') {
                 num = anu.participants[0]
                 try {
                     ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
                 } catch {
                     ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                 }
                     teks = `ALHAMDULILLAH BEBAN GRUP KELUAR\n
  @${num.split('@')[0]}\n\n❰ *SELAMAT JALAN KAKAK SEMOGA TENANG DI ALAM SANA* ❱`
                 let buff = await getBuffer(ppimg)
                 client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
             }
         } catch (e) {
             console.log('Error : %s', color(e, 'red'))
         }
     })
     client.on('CB:Blocklist', json => {
         if (blocked.length > 2) return
         for (let i of json[1].blocklist) {
             blocked.push(i.replace('c.us','s.whatsapp.net'))
         }
     })
 client.on('message-update', async (mek) => {
         try {
         //Update By Mzailani & Adi Official
        const from = mek.key.remoteJid
         const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
         const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
         const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
         const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
         const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
         const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
         const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
         const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
         if (messageStubType == 'REVOKE') {
             console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
             if (!isRevoke) return
             if (!isCtRevoke) return
             if (!isBanCtRevoke) return
             const from = mek.key.remoteJid
             const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
             let int
             let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
             const id_deleted = mek.key.id
             const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
             const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
             const opt4tag = {
                 contextInfo: { mentionedJid: [sender] }
             }
             for (let i = 0; i < infoMSG.length; i++) {
                 if (infoMSG[i].key.id == id_deleted) {
                     const dataInfo = infoMSG[i]
                     const type = Object.keys(infoMSG[i].message)[0]
                     const timestamp = infoMSG[i].messageTimestamp
                     int = {
                         no: i,
                         type: type,
                         timestamp: timestamp,
                         data: dataInfo
                     }    
                 }
             }
             const index = Number(int.no)
             const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
             const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
             var itsme = `${numbernye}@s.whatsapp.net`
                 var split = `${fake}`
                 // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                 var selepbot72 = {
                     contextInfo: {
                         participant: itsme,
                         quotedMessage: {
                             extendedTextMessage: {
                                 text: split,
                             }
                         }
                     }
                 }           
             if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                 const strConversation = `        「 *ANTI-DELETE* 」
 
 - *Nama :* *${pushname}* 
 - *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
 - *Tipe :* Text
 - *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
 - *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
 - *Pesan :* *${body ? body : '-'}*`
                 client.sendMessage(from, strConversation, MessageType.text, selepbot72)
             } else if (int.type == 'stickerMessage') {
                 var itsme = `${numbernye}@s.whatsapp.net`
                     var split = `${fake}`
                     const pingbro23 = {
                         contextInfo: {
                             participant: itsme,
                             quotedMessage: {
                                 extendedTextMessage: {
                                     text: split,
                                 }
                             }
                         }
                     }
                 const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                 const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
                 const strConversation = `        「 *ANTI-DELETE* 」
 
 - *Nama :* *${pushname}* 
 - *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
 - *Tipe :* *Sticker*
 - *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
 - *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`
 
                 const buff = fs.readFileSync(savedFilename)
                 client.sendMessage(from, strConversation, MessageType.text, opt4tag)
                 client.sendMessage(from, buff, MessageType.sticker, pingbro23)
                 // console.log(stdout)
                 fs.unlinkSync(savedFilename)
 
             } else if (int.type == 'imageMessage') {
                 var itsme = `${numbernye}@s.whatsapp.net`
                     var split = `${fake}`
                     const pingbro22 = {
                         contextInfo: {
                             participant: itsme,
                             quotedMessage: {
                                 extendedTextMessage: {
                                     text: split,
                                 }
                             }
                         }
                     }
                 const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                 const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
                 const buff = fs.readFileSync(savedFilename)
                 const strConversation = `    「 *ANTI-DELETE* 」
 
 - *Nama :* *${pushname}* 
 - *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
 - *Tipe :* Image
 - *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
 - *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
 - *Pesan :* ${body ? body : '-'}\`\`\``
                 client.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
                 fs.unlinkSync(savedFilename)
             }
         }
     } catch (e) {
         console.log('Message : %s', color(e, 'green'))
         // console.log(e)
     }
 })
 
     client.on('CB:Blocklist', json => {
 
         if (blocked.length > 2) return
 
         for (let i of json[1].blocklist) {
 
             blocked.push(i.replace('c.us','s.whatsapp.net'))
 
         }
 
     })
 
     client.on('message-new', async (mek) => {
     
         try {
             if (!mek.message) return
             if (mek.key && mek.key.remoteJid == 'status@broadcast') return
             if (mek.key.fromMe) return
             global.prefix
             global.blocked
             const content = JSON.stringify(mek.message)
             const from = mek.key.remoteJid
             const type = Object.keys(mek.message)[0]
             const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
             const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
             const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
             const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
             const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
             body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
             budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
             var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
             const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
             const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
             const args = body.trim().split(/ +/).slice(1)
             const isCmd = body.startsWith(prefix)
             const tescuk = ["0@s.whatsapp.net"]
             const isGroup = from.endsWith('@g.us')
             const q = args.join(' ')
             const botNumber = client.user.jid
             const sender = isGroup ? mek.participant : mek.key.remoteJid
             pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
             const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
             const groupName = isGroup ? groupMetadata.subject : ''
             const groupId = isGroup ? groupMetadata.jid : ''
             const groupMembers = isGroup ? groupMetadata.participants : ''
             const groupDesc = isGroup ? groupMetadata.desc : ''
             const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
             const ftoko = { key: { fromMe: false, participant: `62895401223315@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync('./src/logobot.png') }, "title": `Y-BOT CONNECTED`, "productImageCount": 9999 }, "businessOwnerJid": `62895401223315@s.whatsapp.net`}}}
             /************** SCURITY FEATURE ************/
             const isEventon = isGroup ? event.includes(from) : false
             const isBadWord = isGroup ? badword.includes(from) : false
             const isRegistered = checkRegisteredUser(sender)
             const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
             const isLevelingOn = isGroup ? _leveling.includes(from) : false
             const isGroupAdmins = groupAdmins.includes(sender) || false
             const isWelkom = isGroup ? welkom.includes(from) : false
             const isNsfw = isGroup ? nsfw.includes(from) : false
             const isSimi = isGroup ? samih.includes(from) : false
             const isAntilink = isGroup ? antilink.includes(from) : false
             const isOwner = ownerNumber.includes(sender)
             const isBanned = ban.includes(sender)
             const isPremium= prem.includes(sender)
             const isAdmin = adm.includes(sender)
             const isImage = type === 'imageMessage'
             const isUrl = (url) => {
                 return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
             }
             const reply = (teks) => {
                 client.sendMessage(from, teks, text, {quoted:mek})
             }
             const sendMess = (hehe, teks) => {
                 client.sendMessage(hehe, teks, text)
             }
             const mentions = (teks, memberr, id) => {
                 (id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
             }
             const sendImage = (teks) => {
             client.sendMessage(from, teks, image, {quoted:mek})
             }
             const costum = (pesan, tipe, target, target2) => {
             client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
             }
             const sendPtt = (teks) => {
             client.sendMessage(from, audio, mp3, {quoted:mek})
             }
 
             mess = {
                 wait: '```[ ! ] Tunggu Bentar...```',
                 success: '```Done Stah```',
                 error: {
                  bug: '```An Error Occurred Try Contacting Owner To Report Error```',
                 stick: '```Failed, an error occurred while converting the image to a sticker, try again```',
                 Iv: '```Invalid link```'
                 },  
             only: {
                 group: '```Maaf, perintah ini hanya dapat digunakan didalam grup```',
                 benned: '```Maaf, nomor Anda telah diblokir, hubungi pemilik bot untuk membuka BANNED Anda```',
                 ownerG: '```Maaf, perintah ini hanya dapat digunakan oleh pemilik grup```',
                 ownerB: '```Maaf, perintah ini hanya dapat digunakan oleh pemilik bot```',
                 premium: 'Maaf, Command ini hanya bisa digunakan oleh *Premium User*\n\n\nMau beli Premium User?\n\nPremium User Sebulan : 5k\n*Payment :*\n*_Gopay, Dana, Ovo, ShopeePay_*\nMinat?PC\nwa.me/62895401223315',
                 userB: `Hai ${pushname} You are not registered in the database, please type ${prefix}verify`,
                 admin: '```Maaf, perintah ini hanya dapat digunakan oleh admin grup```',
                 Badmin: '```Maaf, perintah ini hanya dapat digunakan ketika bot sudah menjadi admin```',
                 }
             }
 
 
 //HARI & BULAN
 var date = new Date();
         var tahun = date.getFullYear();
         var bulan1 = date.getMonth();
         var tanggal = date.getDate();
         var hari = date.getDay();
         var jam = date.getHours();
         var menit = date.getMinutes();
         var detik = date.getSeconds();
         var waktoo = date.getHours();
             switch(hari) {
                 case 0: hari = "Minggu"; break;
                 case 1: hari = "Senin"; break;
                 case 2: hari = "Selasa"; break;
                 case 3: hari = "Rabu"; break;
                 case 4: hari = "Kamis"; break;
                 case 5: hari = "Jum`at"; break;
                 case 6: hari = "Sabtu"; break;
             }
             switch(bulan1) {
                 case 0: bulan1 = "Januari"; break;
                 case 1: bulan1 = "Februari"; break;
                 case 2: bulan1 = "Maret"; break;
                 case 3: bulan1 = "April"; break;
                 case 4: bulan1 = "Mei"; break;
                 case 5: bulan1 = "Juni"; break;
                 case 6: bulan1 = "Juli"; break;
                 case 7: bulan1 = "Agustus"; break;
                 case 8: bulan1 = "September"; break;
                 case 9: bulan1 = "Oktober"; break;
                 case 10: bulan1 = "November"; break;
                 case 11: bulan1 = "Desember"; break;
             }
             var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
             var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";  
 //+++++++++++TIME+++++++++++//
             var ase = new Date();
                         var waktoo = ase.getHours();
                         switch(waktoo){
                 case 0: waktoo = "Waktu Tengah Malam🌚 - Tidur Kak :)"; break;
                 case 1: waktoo = "Waktu Tengah Malam🌚"; break;
                 case 2: waktoo = "Waktu Dini Hari🌒 - Tidur Kak :)"; break;
                 case 3: waktoo = "Waktu Dini Hari🌓"; break;
                 case 4: waktoo = "Subuh🌔"; break;
                 case 5: waktoo = "Subuh🌔"; break;
                 case 6: waktoo = "Selamat Pagi kak🌝"; break;
                 case 7: waktoo = "Selamat Pagi kak🌝"; break;
                 case 8: waktoo = "Selamat Pagi kak🌝"; break;
                 case 9: waktoo = "Selamat Pagi kak🌝 "; break;
                 case 10: waktoo = "Selamat Pagi kak🌝"; break;
                 case 11: waktoo = "Selamat Siang Kak🌞"; break;
                 case 12: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
                 case 13: waktoo = "Selamat Siang Kak🌞"; break;
                 case 14: waktoo = "Selamat Siang Kak🌞"; break;
                 case 15: waktoo = "Selamat Sore Kak🌝"; break;
                 case 16: waktoo = "Selamat Sore Kak🌝"; break;
                 case 17: waktoo = "Selamat Sore Kak🌖\n - Menjelang Malam🌚"; break;
                 case 18: waktoo = "Waktu Magrib🌘\n - Jangan Lupa Shalat Magrib"; break;
                 case 19: waktoo = "Waktu Magrib🌚"; break;
                 case 20: waktoo = "Selamat Malam🌚"; break;
                 case 21: waktoo = "Selamat Malam🌚"; break;
                 case 22: waktoo = "Selamat Malam🌚\n - Jangan Lupa Beristirahat"; break;
                 case 23: waktoo = "Tengah Malam🌚 \n - Tidur Kak, Ga baik bergadang :)"; break;
             }
             var tampilHari = "" + waktoo;
             /*****************END SCURITY FEATURE ********/
             
             const slot1 = ['🍋','🍐','🍓','🍇','🍒']
             const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
             const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
             const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
             const slot5 = ['🍋','🍐','🍓','🍇','🍒']
             const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
             const slot7 = ['🍋','🍐','🍓','🍇','🍒']
             const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
             const slot9 = ['🍋','🍐','🍓','🍇','🍒']
             const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
             const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
             const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
             const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
             const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
             const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]    
             const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
             const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
             const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]                           
             
         //role level
         const levelRole = getLevelingLevel(sender)
         var role = 'Newbie ㋡'
         if (levelRole <= 2) {
             role = 'Newbie ㋡'
         } else if (levelRole <= 4) {
             role = 'Beginner Grade 1 ⚊¹'
         } else if (levelRole <= 6) {
             role = 'Beginner Grade 2 ⚊²'
         } else if (levelRole <= 8) {
             role = 'Beginner Grade 3 ⚊³'
         } else if (levelRole <= 10) {
             role = 'Beginner Grade 4 ⚊⁴'
         } else if (levelRole <= 12) {
             role = 'Private Grade 1 ⚌¹'
         } else if (levelRole <= 14) {
             role = 'Private Grade 2 ⚌²'
         } else if (levelRole <= 16) {
             role = 'Private Grade 3 ⚌³'
         } else if (levelRole <= 18) {
             role = 'Private Grade 4 ⚌⁴'
         } else if (levelRole <= 20) {
             role = 'Private Grade 5 ⚌⁵'
         } else if (levelRole <= 22) {
             role = 'Corporal Grade 1 ☰¹'
         } else if (levelRole <= 24) {
             role = 'Corporal Grade 2 ☰²'
         } else if (levelRole <= 26) {
             role = 'Corporal Grade 3 ☰³'
         } else if (levelRole <= 28) {
             role = 'Corporal Grade 4 ☰⁴'
         } else if (levelRole <= 30) {
             role = 'Corporal Grade 5 ☰⁵'
         } else if (levelRole <= 32) {
             role = 'Sergeant Grade 1 ≣¹'
         } else if (levelRole <= 34) {
             role = 'Sergeant Grade 2 ≣²'
         } else if (levelRole <= 36) {
             role = 'Sergeant Grade 3 ≣³'
         } else if (levelRole <= 38) {
             role = 'Sergeant Grade 4 ≣⁴'
         } else if (levelRole <= 40) {
             role = 'Sergeant Grade 5 ≣⁵'
         } else if (levelRole <= 42) {
             role = 'Staff Grade 1 ﹀¹'
         } else if (levelRole <= 44) {
             role = 'Staff Grade 2 ﹀²'
         } else if (levelRole <= 46) {
             role = 'Staff Grade 3 ﹀³'
         } else if (levelRole <= 48) {
             role = 'Staff Grade 4 ﹀⁴'
         } else if (levelRole <= 50) {
             role = 'Staff Grade 5 ﹀⁵'
         } else if (levelRole <= 52) {
             role = 'Sergeant Grade 1 ︾¹'
         } else if (levelRole <= 54) {
             role = 'Sergeant Grade 2 ︾²'
         } else if (levelRole <= 56) {
             role = 'Sergeant Grade 3 ︾³'
         } else if (levelRole <= 58) {
             role = 'Sergeant Grade 4 ︾⁴'
         } else if (levelRole <= 60) {
             role = 'Sergeant Grade 5 ︾⁵'
         } else if (levelRole <= 62) {
             role = '2nd Lt. Grade 1 ♢¹ '
         } else if (levelRole <= 64) {
             role = '2nd Lt. Grade 2 ♢²'
         } else if (levelRole <= 66) {
             role = '2nd Lt. Grade 3 ♢³'
         } else if (levelRole <= 68) {
             role = '2nd Lt. Grade 4 ♢⁴'
         } else if (levelRole <= 70) {
             role = '2nd Lt. Grade 5 ♢⁵'
         } else if (levelRole <= 72) {
             role = '1st Lt. Grade 1 ♢♢¹'
         } else if (levelRole <= 74) {
             role = '1st Lt. Grade 2 ♢♢²'
         } else if (levelRole <= 76) {
             role = '1st Lt. Grade 3 ♢♢³'
         } else if (levelRole <= 78) {
             role = '1st Lt. Grade 4 ♢♢⁴'
         } else if (levelRole <= 80) {
             role = '1st Lt. Grade 5 ♢♢⁵'
         } else if (levelRole <= 82) {
             role = 'Major Grade 1 ✷¹'
         } else if (levelRole <= 84) {
             role = 'Major Grade 2 ✷²'
         } else if (levelRole <= 86) {
             role = 'Major Grade 3 ✷³'
         } else if (levelRole <= 88) {
             role = 'Major Grade 4 ✷⁴'
         } else if (levelRole <= 90) {
             role = 'Major Grade 5 ✷⁵'
         } else if (levelRole <= 92) {
             role = 'Colonel Grade 1 ✷✷¹'
         } else if (levelRole <= 94) {
             role = 'Colonel Grade 2 ✷✷²'
         } else if (levelRole <= 96) {
             role = 'Colonel Grade 3 ✷✷³'
         } else if (levelRole <= 98) {
             role = 'Colonel Grade 4 ✷✷⁴'
         } else if (levelRole <= 100) {
             role = 'Colonel Grade 5 ✷✷⁵'
         } else if (levelRole <= 102) {
             role = 'Brigadier Early ✰'
         } else if (levelRole <= 104) {
             role = 'Brigadier Silver ✩'
         } else if (levelRole <= 106) {
             role = 'Brigadier gold ✯'
         } else if (levelRole <= 108) {
             role = 'Brigadier Platinum ✬'
         } else if (levelRole <= 110) {
             role = 'Brigadier Diamond ✪'
         } else if (levelRole <= 112) {
             role = 'Major General Early ✰'
         } else if (levelRole <= 114) {
             role = 'Major General Silver ✩'
         } else if (levelRole <= 116) {
             role = 'Major General gold ✯'
         } else if (levelRole <= 118) {
             role = 'Major General Platinum ✬'
         } else if (levelRole <= 120) {
             role = 'Major General Diamond ✪'
         } else if (levelRole <= 122) {
             role = 'Lt. General Early ✰'
         } else if (levelRole <= 124) {
             role = 'Lt. General Silver ✩'
         } else if (levelRole <= 126) {
             role = 'Lt. General gold ✯'
         } else if (levelRole <= 128) {
             role = 'Lt. General Platinum ✬'
         } else if (levelRole <= 130) {
             role = 'Lt. General Diamond ✪'
         } else if (levelRole <= 132) {
             role = 'General Early ✰'
         } else if (levelRole <= 134) {
             role = 'General Silver ✩'
         } else if (levelRole <= 136) {
             role = 'General gold ✯'
         } else if (levelRole <= 138) {
             role = 'General Platinum ✬'
         } else if (levelRole <= 140) {
             role = 'General Diamond ✪'
         } else if (levelRole <= 142) {
             role = 'Commander Early ★'
         } else if (levelRole <= 144) {
             role = 'Commander Intermediate ⍣'
         } else if (levelRole <= 146) {
             role = 'Commander Elite ≛'
         } else if (levelRole <= 148) {
             role = 'The Commander Hero ⍟'
         } else if (levelRole <= 152) {
             role = 'Legends 忍'
         } else if (levelRole <= 154) {
             role = 'Legends 忍'
         } else if (levelRole <= 156) {
             role = 'Legends 忍'
         } else if (levelRole <= 158) {
             role = 'Legends 忍'
         } else if (levelRole <= 160) {
             role = 'Legends 忍'
         } else if (levelRole <= 162) {
             role = 'Legends 忍'
         } else if (levelRole <= 164) {
             role = 'Legends 忍'
         } else if (levelRole <= 166) {
             role = 'Legends 忍'
         } else if (levelRole <= 168) {
             role = 'Legends 忍'
         } else if (levelRole <= 170) {
             role = 'Legends 忍'
         } else if (levelRole <= 172) {
             role = 'Legends 忍'
         } else if (levelRole <= 174) {
             role = 'Legends 忍'
         } else if (levelRole <= 176) {
             role = 'Legends 忍'
         } else if (levelRole <= 178) {
             role = 'Legends 忍'
         } else if (levelRole <= 180) {
             role = 'Legends 忍'
         } else if (levelRole <= 182) {
             role = 'Legends 忍'
         } else if (levelRole <= 184) {
             role = 'Legends 忍'
         } else if (levelRole <= 186) {
             role = 'Legends 忍'
         } else if (levelRole <= 188) {
             role = 'Legends 忍'
         } else if (levelRole <= 190) {
             role = 'Legends 忍'
         } else if (levelRole <= 192) {
             role = 'Legends 忍'
         } else if (levelRole <= 194) {
             role = 'Legends 忍'
         } else if (levelRole <= 196) {
             role = 'Legends 忍'
         } else if (levelRole <= 198) {
             role = 'Legends 忍'
         } else if (levelRole <= 200) {
             role = 'Legends 忍'
         } else if (levelRole <= 210) {
             role = 'Legends 忍'
         } else if (levelRole <= 220) {
             role = 'Legends 忍'
         } else if (levelRole <= 230) {
             role = 'Legends 忍'
         } else if (levelRole <= 240) {
             role = 'Legends 忍'
         } else if (levelRole <= 250) {
             role = 'Legends 忍'
         } else if (levelRole <= 260) {
             role = 'Legends 忍'
         } else if (levelRole <= 270) {
             role = 'Legends 忍'
         } else if (levelRole <= 280) {
             role = 'Legends 忍'
         } else if (levelRole <= 290) {
             role = 'Legends 忍'
         } else if (levelRole <= 300) {
             role = 'Legends 忍'
         } else if (levelRole <= 310) {
             role = 'Legends 忍'
         } else if (levelRole <= 320) {
             role = 'Legends 忍'
         } else if (levelRole <= 330) {
             role = 'Legends 忍'
         } else if (levelRole <= 340) {
             role = 'Legends 忍'
         } else if (levelRole <= 350) {
             role = 'Legends 忍'
         } else if (levelRole <= 360) {
             role = 'Legends 忍'
         } else if (levelRole <= 370) {
             role = 'Legends 忍'
         } else if (levelRole <= 380) {
             role = 'Legends 忍'
         } else if (levelRole <= 390) {
             role = 'Legends 忍'
         } else if (levelRole <= 400) {
             role = 'Legends 忍'
         } else if (levelRole <= 410) {
             role = 'Legends 忍'
         } else if (levelRole <= 420) {
             role = 'Legends 忍'
         } else if (levelRole <= 430) {
             role = 'Legends 忍'
         } else if (levelRole <= 440) {
             role = 'Legends 忍'
         } else if (levelRole <= 450) {
             role = 'Legends 忍'
         } else if (levelRole <= 460) {
             role = 'Legends 忍'
         } else if (levelRole <= 470) {
             role = 'Legends 忍'
         } else if (levelRole <= 480) {
             role = 'Legends 忍'
         } else if (levelRole <= 490) {
             role = 'Legends 忍'
         } else if (levelRole <= 500) {
             role = 'Legends 忍'
         } else if (levelRole <= 600) {
             role = 'Legends 忍'
         } else if (levelRole <= 700) {
             role = 'Legends 忍'
         } else if (levelRole <= 800) {
             role = 'Legends 忍'
         } else if (levelRole <= 900) {
             role = 'Legends 忍'
         } else if (levelRole <= 1000) {
             role = 'Legends 忍'
         } else if (levelRole <= 2000) {
             role = 'Legends 忍'
         } else if (levelRole <= 3000) {
             role = 'Legends 忍'
         } else if (levelRole <= 4000) {
             role = 'Legends 忍'
         } else if (levelRole <= 5000) {
             role = 'Legends 忍'
         } else if (levelRole <= 6000) {
             role = 'Legends 忍'
         } else if (levelRole <= 7000) {
             role = 'Legends 忍'
         } else if (levelRole <= 8000) {
             role = 'Legends 忍'
         } else if (levelRole <= 9000) {
             role = 'Legends 忍'
         } else if (levelRole <= 10000) {
             role = 'Legends 忍'
            
            var prema = 'Free'
             if (!isAdmin) {
                 prema = 'Adminban'
             }
             if (!isPremium) {
                 prema = 'Premium'
             } 
             if (!isOwner) {
                 prema = 'Owner'
             }
     }
             //funtion nobadword
             if (isGroup && isBadWord) {
             if (bad.includes(messagesC)) {
                 if (!isGroupAdmins) {
                     return reply("JAGA UCAPAN DONG!! 😠")
                         .then(() => client.groupRemove(from, sender))
                         .then(() => {
                             client.sendMessage(from, `*「 ANTI BADWORD 」*\nAlvianto akan kick kamu karena berkata kasar!`, text ,{quoted: mek})
                         }).catch(() => client.sendMessage(from, `Untung saya bukan admin, kalo admin udah saya kick!`, text , {quoted : mek}))
                 } else {
                     return reply( "Tolong Jaga Ucapan Min 😇")
                 }
             }
         }
             
             //function leveling
             if (isGroup && isRegistered && isLevelingOn) {
             const currentLevel = getLevelingLevel(sender)
             const checkId = getLevelingId(sender)
             try {
                 if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                 const amountXp = Math.floor(Math.random() * 10) + 100
                 const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                 const getLevel = getLevelingLevel(sender)
                 addLevelingXp(sender, amountXp)
                 if (requiredXp <= getLevelingXp(sender)) {
                     addLevelingLevel(sender, 1)
                     bayarLimit(sender, 3)
                     await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                 }
             } catch (err) {
                 console.error(err)
             }
         }
           //function check limit
           const checkLimit = (sender) => {
             let found = false
                     for (let lmt of _limit) {
                         if (lmt.id === sender) {
                             let limitCounts = limitawal - lmt.limit
                             if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                             client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                             found = true
                         }
                     }
                     if (found === false) {
                         let obj = { id: sender, limit: 0 }
                         _limit.push(obj)
                         fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                         client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                     }
                 }
                 
             //funtion limited
            const isLimit = (sender) =>{ 
               let position = false
               for (let i of _limit) {
               if (i.id === sender) {
                 let limits = i.limit
               if (limits >= limitawal ) {
                   position = true
                     client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                     return true
               } else {
                 _limit
                   position = true
                   return false
                }
              }
            }
            if (position === false) {
             const obj = { id: sender, limit: 0 }
                 _limit.push(obj)
                 fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
            return false
        }
      }
 
         
             if (isGroup) {
                 try {
                     const getmemex = groupMembers.length
                         if (getmemex <= memberlimit) {
                         }
                } catch (err) { console.error(err)  }
         }
       
             //function balance
             if (isRegistered ) {
             const checkATM = checkATMuser(sender)
             try {
                 if (checkATM === undefined) addATM(sender)
                 const uangsaku = Math.floor(Math.random() * 10) + 90
                 addKoinUser(sender, uangsaku)
             } catch (err) {
                 console.error(err)
             }
         }
         if (messagesC.includes("://chat.whatsapp.com/")){
         if (!isGroup) return
         if (!isAntilink) return
         if (isGroupAdmins) return reply('karena kamu admin group, bot tidak akan kick kamu')
         client.updatePresence(from, Presence.composing)
         if (messagesC.includes("#izinmin")) return reply("#izinadmin diterima")
         var kic = `${sender.split("@")[0]}@s.whatsapp.net`
         reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group dalam 3 detik`)
         setTimeout( () => {
             client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
         }, 3000)
         setTimeout( () => {
             client.updatePresence(from, Presence.composing)
             reply("1")
         }, 2000)
         setTimeout( () => {
             client.updatePresence(from, Presence.composing)
             reply("2")
         }, 1000)
         setTimeout( () => {
             client.updatePresence(from, Presence.composing)
             reply("3")
         }, 0)
     }
           
             if (messagesC.includes("://kuotainternet.online/")){
         if (!isGroup) return
         if (!isAntilink) return
         if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
         client.updatePresence(from, Presence.composing)
         if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
         var kic = `${sender.split("@")[0]}@s.whatsapp.net`
         reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group dalam 3 detik`)
         setTimeout( () => {
             client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
         }, 3000)
         setTimeout( () => {
             client.updatePresence(from, Presence.composing)
             reply("1")
         }, 2000)
         setTimeout( () => {
             client.updatePresence(from, Presence.composing)
             reply("2")
         }, 1000)
         setTimeout( () => {
             client.updatePresence(from, Presence.composing)
             reply("3")
         }, 0)
     }
 
            
             if (messagesC.includes("://internet4g.live/")){
         if (!isGroup) return
         if (!isAntilink) return
         if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
         client.updatePresence(from, Presence.composing)
         if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
         var kic = `${sender.split("@")[0]}@s.whatsapp.net`
         reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group dalam 3 detik`)
         setTimeout( () => {
             client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
         }, 3000)
         setTimeout( () => {
             client.updatePresence(from, Presence.composing)
             reply("1")
         }, 2000)
         setTimeout( () => {
             client.updatePresence(from, Presence.composing)
             reply("2")
         }, 1000)
         setTimeout( () => {
             client.updatePresence(from, Presence.composing)
             reply("3")
         }, 0)
     }
          
 
              //kolor
             colors = ['red','white','black','blue','yellow','green']
             
             //detector media
             const isMedia = (type === 'imageMessage' || type === 'videoMessage')
             const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
             const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
             const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
             
             //private chat message
             if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
             if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
             
             //group message
             if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
             if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
             
             switch(command) {       
 
                 case 'nobadword':
                     if (!isOwner) return reply(mess.only.ownerB)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (args.length < 1) return reply('enable/disable')
                     if (args[0] === 'enable') {
                     if (isBadWord) return reply('*fitur BadWord sudah aktif tadi!!*')
                     badword.push(from)
                     fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                     reply(`badword is enable`)
                     } else if (args[0] === 'disable') {
                     badword.splice(from, 1)
                     fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                     reply(`badword is disable`)
                     } else {
                     reply(ind.satukos())
                     }
                     break
                 case 'addbadword':
                     if (!isOwner) return reply(mess.only.ownerB)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                     const bw = body.slice(12)
                     bad.push(bw)
                     fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                     reply('Success Menambahkan Bad Word!')
                     break
                 case 'delbadword':
                     if (!isOwner) return reply(mess.only.ownerB)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                     let dbw = body.slice(12)
                     bad.splice(dbw, 1)
                     fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                     reply('Success Menghapus BAD WORD!')
                     break 
                 case 'listbadword':
                    if (isBanned) return reply(mess.only.benned)
                     let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                     for (let i of bad) {
                     lbw += `➸ ${i.replace(bad)}\n`
                     }
                     await reply(lbw)
                     break   
 
         case 'kalkulator':
            if (isBanned) return reply(mess.only.benned)
                 if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
                 const Math_js = require('mathjs')
                 mtk = body.slice(12)
                 if (typeof Math_js.evaluate(mtk) !== "number") {
                     reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
                 } else {
                     reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
                 }
                 break
         case 'ping':
         case 'pong':
                     const timestamp = speed();
                     const latensi = speed() - timestamp
                     client.sendMessage(from, `Ping: *${latensi.toFixed(4)} Second*\n\nBot Aktif Selama : *${runtime(process.uptime())}*\nRuntime PC : *${runtime(os.uptime())}*`, text, { quoted: mek })
                     break
         case 'help': 
         case 'menu':
         case 'tomenu':
         case 'command':
         if (isBanned) return reply(mess.only.benned)
                 lzain = `╭──❲ INFO PENGGUNA ❳
│ Nama: *${pushname}*
│ Nomer: wa.me/${sender.split("@")[0]}
│ ${prefix}profile
╰───────────⊱
╭──❲ BUAT BELI ES-TEH ❳
│ ${prefix}donate
│ ${prefix}donasi
╰───────────⊱
╭──❲ MAIN ❳
│ ${prefix}help
│ ${prefix}info
│ ${prefix}owner
│ ${prefix}stikermenu
│ ${prefix}downloadmenu
│ ${prefix}grupmenu
│ ${prefix}informasimenu
│ ${prefix}stalkmenu
│ ${prefix}ownermenu
│ ${prefix}othermenu
╰───────────⊱
╭──❲ TEST BOT SUDAH AKTIF/BELUM ❳
│ ${prefix}ping
│ ${prefix}bot
╰───────────⊱`
reply( lzain )
break
 
 case 'stikermenu':
 reply(`╭──❲ MENU STIKER ❳
│ ${prefix}stiker
│ ${prefix}stikergif
│ ${prefix}toimg
╰───────────────⊱
 *NOTE* : Kirim gambar satu per satu, tidak boleh sekali kirim langsung dua gambar atau lebih`)
 break
 
 case 'downloadmenu':
 reply(`╭──❲ DOWNLOAD MENU ❳
│ ${prefix}tiktok
│ ${prefix}play
│ ${prefix}fb
│ ${prefix}ig
│ ${prefix}twit
│ ${prefix}tiktokmusik
│ ${prefix}playvideo
│ ${prefix}ytmp3
│ ${prefix}ytmp4
╰────────────────⊱`)
 break
 
 case 'grupmenu':
 reply(`╭──❲ GRUP MENU ❳
│ ${prefix}join [Link Group]
│ ${prefix}invite [Link Group]
│ ${prefix}promote [tag]
│ ${prefix}demote [tag]
│ ${prefix}welcome [1/0]
│ ${prefix}antilink [1/0]
│ ${prefix}tagall
│ ${prefix}listadmin
│ ${prefix}nobadword [enable/disable]
│ ${prefix}addbadword
│ ${prefix}delbadword
│ ${prefix}linkgc
│ ${prefix}hidetag
│ ${prefix}add [62]
│ ${prefix}kick [@tag]
│ ${prefix}setnamegrup
│ ${prefix}setdescgrup
│ ${prefix}setppgrup
│ ${prefix}delete
│ ${prefix}leave
│ ${prefix}grup [buka/tutup]
│ ${prefix}wa.me
╰────────────────⊱`)
 break
 
 case 'ownermenu':
 reply(`╭──❲ OWNER MENU ❳
│ ${prefix}ban
│ ${prefix}unban
│ ${prefix}banlist
│ ${prefix}block
│ ${prefix}unblock
│ ${prefix}blocklist
│ ${prefix}bc
│ ${prefix}reply
│ ${prefix}kickall (Resiko kena *BANNED*)
│ ${prefix}clearall
│ ${prefix}spamwa [62xxx]
│ ${prefix}spamsms [62xxx]
│ ${prefix}spamtlp [8xxx]
│ ${prefix}spamall [62xxx]
╰────────────────⊱`)
 break
 
 case 'informasimenu':
 reply(`╭──❲ INFORMASI MENU ❳
│ ${prefix}gempa
│ ${prefix}corona
│ ${prefix}cuaca [kota]
│ ${prefix}brainly [soal]
│ ${prefix}jadwalsholat [Daerah]
│ ${prefix}ip
╰────────────────⊱`)
 break
 
 case 'stalkmenu':
 reply(`╭──❲ INFORMASI MENU ❳
│ ${prefix}igstalk
│ ${prefix}tiktokstalk
│ ${prefix}githubstalk
│ ${prefix}mlstalk
│ ${prefix}ffstalk
╰────────────────⊱`)
 
 case 'othermenu':
 reply(`╭──❲ OTHER & FUN MENU ❳
│ ${prefix}lirik   
│ ${prefix}ppcp
╰────────────────⊱`)
 break
 
         case 'donasi':
         case 'donate':
                     donate = `*DONASI KAK BUAT BELI SERVER BOT NYA AGAR BISA AKTIF 24/7*\n
 GOPAY
 0895401223315\n\n
 DANA
 0895401223315\n\n
 SHOPEEPAY
 0895401223315\n\n
 SAWERIA KAK
 https://saweria.co/Alvianto17`
                     qris = fs.readFileSync(`./src/qr.jpg`)
                     client.sendMessage(from, qris, image, {caption: donate, quoted: mek})
                     break
         case 'sewabot':
         case 'sewa':
                     client.sendMessage(from, sewabot(), text)
                     break
          case 'rules':
                     client.sendMessage(from, rules(), text)
                     break
         case 'info':
                     const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
                     me = client.user
                     teks = `╭──❲ INFO BOT ❳
│  Nama BOT : Y - BOT
│  Owner : Alvianto
│  Nomer Owner : wa.me/62895401223315
│  Instagram Owner : https://www.instagram.com/alvianto.17/
│  Hostname : Yannn Windows
│  Platform : Windows Server 2012 R2
│  Device Manufacturer: ${client.user.phone.device_manufacturer}
│  Device Model: ${client.user.phone.device_model}
│  WhatsApp Version: ${client.user.phone.wa_version}
╰────────────────⊱`
                     logo = fs.readFileSync(`./src/logobot.png`)
                     client.sendMessage(from, logo, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
                     break
                     case 'antidelete':
                        if (isBanned) return reply(mess.only.benned)
                     
                     if (!isGroup) return reply(mess.only.group)
                     
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                 
                 const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
                 
                 const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
                 
                 const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
                 
                 const isRevoke = dataRevoke.includes(from)
                 
                 const isCtRevoke = dataCtRevoke.data
                 
                 const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
                 
                 const argz = body.split(' ')
                 
                 if (argz.length === 1) return client.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
                 
                 if (argz[1] == 'aktif') {
                 
                     if (isGroup) {
                     
                         if (isRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
                         
                         dataRevoke.push(from)
                         
                         fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                         
                         client.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
                         
                     } else if (!isGroup) {
                     
                         client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
                         
                     }
                     
                 } else if (argz[1] == 'ctaktif') {
                 
                     if (!isGroup) {
                     
                         if (isCtRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
                         
                         dataCtRevoke.data = true
                         
                         fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                         
                         client.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
                         
                     } else if (isGroup) {
                     
                         client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
                         
                     }
                     
                 } else if (argz[1] == 'banct') {
                 
                     if (isBanCtRevoke) return client.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
                     
                     if (argz.length === 2 || argz[2].startsWith('0')) return client.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
                     
                     dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
                     
                     fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
                     
                     client.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
                     
                 } else if (argz[1] == 'mati') {
                 
                     if (isGroup) {
                     
                         const index = dataRevoke.indexOf(from)
                         
                         dataRevoke.splice(index, 1)
                         
                         fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                         
                         client.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
                         
                     } else if (!isGroup) {
                     
                         client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
                         
                     }
                     
                 } else if (argz[1] == 'ctmati') {
                 
                     if (!isGroup) {
                     
                         dataCtRevoke.data = false
                         
                         fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                         
                         client.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
                         
                     } else if (isGroup) {
                     
                         client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
                         
                     }
                     
                 }
                 
                 break
                 case 'listadmin':
                    if (!isGroup) return reply(mess.only.group)
                    teks = `List admin di grup *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                    no = 0
                    for (let admon of groupAdmins) {
                        no += 1
                        teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                    }
                    mentions(teks, groupAdmins, true)
                    break
         case 'blocklist':
                    if (!isOwner) return reply(mess.only.ownerB) 
                     teks = '*This is list of blocked number* :\n'
                     for (let block of blocked) {
                         teks += `*~>* @${block.split('@')[0]}\n`
                     }
                     teks += `*Total* : ${blocked.length}`
                     client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
                     break
                     case 'ffstalk':
                        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} id`)
                     ff_id = args[0]
                     get_result = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${ff_id}?apikey=${lolkey}`)
                     reply(get_result.result)
                     break
                     case 'mlstalk':
                        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} id/server`)
                     ml_id = args[0]
                     get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${lolkey}`)
                     reply(get_result.result)
                     break
                 case 'hidetag':
                    if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     var value = body.slice(9)
                    var group = await client.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                    text: value,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                    }
                    client.sendMessage(from, options, text)
                    break
                 case 'ingfo':  
                 if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     var value = body.slice(7)
                     var group = await client.groupMetadata(from)
                     var member = group['participants']
                     var mem = []
                     member.map( async adm => {
                     mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                     })
                     var options = {
                     text: `DARI : *${pushname}*\nINGFO : *${value}*`,
                     contextInfo: { mentionedJid: mem },
                     quoted: mek
                     }
                     client.sendMessage(from, options, text, {quoted: mek})
                     break
                 case 'afk':
                    if (isBanned) return reply(mess.only.benned)
                                 tels = body.slice(4)
                                 if (args.length < 1) return reply('Kakak afk karena apa?')
                                 var ain = mek.participant
                                 const tagzz = {
                                                 text: `@${sender.split("@s.whatsapp.net")[0]} Sedang AFK. *_Karena ${tels}_*. Jangan Ganggu ya:)`,
                                                 contextInfo: { mentionedJid: [ain] }
                                         }
                                         client.sendMessage(from, tagzz, text, {quoted: mek})
                                         break
                 case 'profile':
                     client.updatePresence(from, Presence.composing)
                     try {
                     ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                     } catch {
                     ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                     }
                     profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────\n\n*JANGAN LUPA MAKAN YA KAK🙃*`
                     buffer = await getBuffer(ppimg)
                     client.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
                     break
    
         case 'setprefix':
                     if (args.length < 1) return
                     if (isBanned) return reply(mess.only.benned)
                     if (!isOwner) return reply(mess.only.ownerB)
                     prefix = args[0]
                     reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
                     break 
                  case 'linkgc':
                 if (isBanned) return reply(mess.only.benned)
                 if (!isGroup) return reply(mess.only.group)
                 if (!isBotGroupAdmins) return reply(mess.only.admin)
                 linkgc = await client.groupInviteCode (from)
                 yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
                 client.sendMessage(from, yeh, text, {quoted: mek})
                 break
                 case 'add':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (args.length < 1) return reply('Yang mau di add siapa??')
                     if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
                     try {
                     num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                     client.groupAdd(from, [num])
                     } catch (e) {
                     console.log('Error :', e)
                     reply('Gagal menambahkan target, mungkin karena di private')
                     }  
                     break 
         case 'bot':
                     client.sendMessage(from, 'Iya kak? \n.help untuk list lengkapya\nTerima Kasih ^_^"',MessageType.text, { quoted: mek} )
                     break
         case 'join':
         case 'invite':
                 if (isBanned) return reply(mess.only.benned)
                 if (args.length < 1) return reply('Link nya mana?')
                 client.query({
                 json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
                 })
                 reply('Sukses bergabung dalam group')
                 break
         case 'wa.me':
         case 'wame':
                     if (isBanned) return reply(mess.only.benned)
                     client.updatePresence(from, Presence.composing) 
                     options = {
                     text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nYour link WhatsApp : \n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Atau ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
                     contextInfo: { mentionedJid: [sender] }
                     }
                     client.sendMessage(from, options, text, { quoted: mek } )
                     break
                     if (data.error) return reply(data.error)
                     reply(data.result)
                     break
         case 'tagall':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     members_id = []
                     teks = (args.length > 1) ? body.slice(8).trim() : ''
                     teks += '\n\n'
                     for (let mem of groupMembers) {
                         teks += `*~>* @${mem.jid.split('@')[0]}\n`
                         members_id.push(mem.jid)
                     }
                     mentions(teks, members_id, true)
                     break
         case 'clearall':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isOwner) return reply(mess.only.ownerB)
                     anu = await client.chats.all()
                     client.setMaxListeners(25)
                     for (let _ of anu) {
                         client.deleteChat(_.jid)
                     }
                     reply(ind.clears())
                     break
                     case 'toimg':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedSticker) return reply('Reply/tag sticker !')
                     encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     media = await client.downloadAndSaveMediaMessage(encmedia)
                     ran = getRandom('.png')
                     exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                         fs.unlinkSync(media)
                         if (err) return reply('Eror Kak')
                         buffer = fs.readFileSync(ran)
                         client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Ayankkk>< '})
                         fs.unlinkSync(ran)
                     })
                     break
             case 'stickergif':
             case 'stikergif':
             case 'sgif':
             case 'stiker':
             case ' stiker':
             case 'sticker':
             case 's':
                        if (isBanned) return reply(mess.only.benned)
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                         const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                         const media = await client.downloadAndSaveMediaMessage(encmedia)
                         ran = getRandom('.webp')
                         await ffmpeg(`./${media}`)
                             .input(media)
                             .on('start', function (cmd) {
                                 console.log(`Started : ${cmd}`)
                             })
                             .on('error', function (err) {
                                 console.log(`Error : ${err}`)
                                 fs.unlinkSync(media)
                                 reply(mess.stick)
                             })
                             .on('end', function () {
                                 console.log('Stiker Finished')
                                 setTimeout( () => {}, 100)
                                 buffer = fs.readFileSync(ran)
                                 setTimeout( () => {
                                 client.sendMessage(from, buffer, sticker, {quoted: mek})}, 1000) 
                                 setTimeout( () => {
                                 fs.unlinkSync(media)
                                 fs.unlinkSync(ran)}, 10)
                             })
                             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                             .toFormat('webp')
                             .save(ran)
                     } else if ((isMedia && mek.message.videoMessage.seconds < 30 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && args.length == 0) {
                         const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                         const media = await client.downloadAndSaveMediaMessage(encmedia)
                         ran = getRandom('.webp')
                         await ffmpeg(`./${media}`)
                             .inputFormat(media.split('.')[1])
                             .on('start', function (cmd) {
                                 console.log(`Started : ${cmd}`)
                             })
                             .on('error', function (err) {
                                 console.log(`Error : ${err}`)
                                 fs.unlinkSync(media)
                                 tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                 reply(ind.stikga())
                             })
                             .on('end', function () {
                                 console.log('Finish')
                                 buffer = fs.readFileSync(ran)
                                 client.sendMessage(from, buffer, sticker, {quoted: mek})
                                 fs.unlinkSync(media)
                                 fs.unlinkSync(ran)
                             })
                             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                             .toFormat('webp')
                             .save(ran)
                             } else {
                         reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
                     }
                     break
         case 'block':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isOwner) return reply(mess.only.ownerB)
                     client.updatePresence(from, Presence.composing) 
                     client.chatRead (from)
                     if (!isOwner) return reply(mess.only.ownerB)
                     client.blockUser (`${body.slice(8)}@c.us`, "add")
                     client.sendMessage(from, `*Perintah Diterima, Memblokir* wa.me/${body.slice(8)}`, text)
                     break
         case 'unblock':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isOwner) return reply(mess.only.ownerB)
                     client.blockUser (`${body.slice(10)}@c.us`, "remove")
                     client.sendMessage(from, `*Perintah Diterima, Membuka Blokir* wa.me/${body.slice(10)}`, text)
                     break
         case 'leave':
                     if (!isGroup) return reply(mess.only.group)
                     if (!isOwner) return reply(mess.only.ownerB)
                     setTimeout( () => {
                        client.groupLeave (from) 
                        }, 6000)
                        setTimeout( () => {
                            client.updatePresence(from, Presence.composing)
                            costum('5', text, tescuk, cr)
                            }, 1000)                                                                                                                                   
                            setTimeout( () => {
                            costum('4', text, tescuk, cr)
                            }, 2000)    
                            setTimeout( () => {
                            costum('3', text, tescuk, cr)
                            }, 3000)    
                            setTimeout( () => {
                            costum('2', text, tescuk, cr)
                            }, 4000)                                       
                            setTimeout( () => {
                            costum('1', text, tescuk, cr)
                            }, 5000)                                                                                                                                                     
                            setTimeout( () => {
                        client.sendMessage(from, 'Bot akan keluar dalam 5 detik dari sekarang\nJangan lupa jaga kesehatan ya semua\n\nSee you~', text) // ur cods
                        },1)
                        break
         case 'bc': 
                     if (isBanned) return reply(mess.only.benned)
                     if (!isOwner) return reply(mess.only.ownerB) 
                     if (args.length < 1) return reply('.......')
                     anu = await client.chats.all()
                     if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                         const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                         buff = await client.downloadMediaMessage(encmedia)
                         for (let _ of anu) {
                             client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
                         }
                         reply('*Suksess broadcast* ')
                     } else {
                         for (let _ of anu) {
                             sendMess(_.jid, `*「 PESAN ${namabot} 」*\n\n${body.slice(4)}`)
                         }
                         reply('*Suksess broadcast* ')
                     }
                     break
         case 'setppgrup': 
                     if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     media = await client.downloadAndSaveMediaMessage(mek)
                     await client.updateProfilePicture (from, media)
                     reply('*Sukses mengganti icon group*')
                     break               
         
         case 'grup':
         case 'group':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (args[0] === 'buka') {
                         reply(`*BERHASIL MEMBUKA GROUP*`)
                         client.groupSettingChange(from, GroupSettingChange.messageSend, false)
                     } else if (args[0] === 'tutup') {
                         reply(`*BERHASIL MENUTUP GROUP*`)
                         client.groupSettingChange(from, GroupSettingChange.messageSend, true)
                     }
                     break
             case 'owner':
             case 'creator':
             case 'developer':
                   client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                   client.sendMessage(from, 'Tuh nomer owner ku >_<. Jangan spam ya atau ku block kamu',MessageType.text, { quoted: mek} )
                     break    
             case 'setnamegrup':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     client.groupUpdateSubject(from, `${body.slice(13)}`)
                     client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
                     break
             case 'setdescgrup':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     client.groupUpdateDescription(from, `${body.slice(13)}`)
                     client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
                     break
             case 'promote':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
                     mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                     if (mentioned.length > 1) {
                         teks = ''
                         for (let _ of mentioned) {
                             teks += `*Selamat* 🥳 *Anda naik menjadi admin group*  :\n`
                             teks += `@_.split('@')[0]`
                         }
                         mentions(teks, mentioned, true)
                         client.groupMakeAdmin(from, mentioned)
                     } else {
                         mentions(`*Selamat*🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🥳`, mentioned, true)
                         client.groupMakeAdmin(from, mentioned)
                     }
                     break
             case 'demote':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
                     mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                     if (mentioned.length > 1) {
                         teks = ''
                         for (let _ of mentioned) {
                             teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
                             teks += `@_.split('@')[0]`
                         }
                         mentions(teks, mentioned, true)
                         client.groupDemoteAdmin(from, mentioned)
                     } else {
                         mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
                         client.groupDemoteAdmin(from, mentioned)
                     }
                     break
                     case 'reply':
                    if (!isOwner) return reply(mess.only.ownerB)
                    client.updatePresence(from, Presence.composing) 
                    if (args.length < 1) return
                    cr = body.slice(7)
                    reply(`${cr}`)
                    break 
             case 'ban':
                 if (isBanned) return reply(mess.only.benned)
                 if (!isOwner) return reply(mess.only.ownerB)
                 if (!isGroup) return reply(mess.only.group)
                 bnnd = body.slice(6)
                 ban.push(`${bnnd}@s.whatsapp.net`)
                 fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
                 reply(`Berhasil membanned nomor wa.me/${bnnd} `)
                 break
             case 'unban':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isOwner) return reply(mess.only.ownerB)
                     if (!isGroup) return reply(mess.only.group)
                     bnnd = body.slice(7)
                ban.splice(`${bnnd}@s.whatsapp.net`, 1)
                fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
                reply(`Nomor wa.me/${bnnd} telah di unban!`)
                break
            case 'bann':
                        if (isBanned) return reply(mess.only.benned)
                        if (!isOwner) return reply(mess.only.ownerB)
                        if (args.length == 0) return reply(`*Contoh:* ${prefix + command} 62895401223315`)
                        bnnd = body.slice(6)
                        ban.push(`${bnnd}@s.whatsapp.net`)
                        fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
                        reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
                        break
            case 'unbann':
                        if (!isOwner) return reply(mess.only.ownerB)
                        bnnd = body.slice(8)
                        ban.splice(`${bnnd}@s.whatsapp.net`, 1)
                        fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
                        reply(`Nomor wa.me/${bnnd} telah di unban!`)
                        break
            case 'banlist':
                            if (!isOwner) return reply(mess.only.ownerB)
                            client.updatePresence(from, Presence.composing)   
                            teks = 'This is list of banned number :\n'
                            for (let benn of ban) {
                                teks += `~> @${benn.split('@')[0]}\n`
                                }
                                teks += `Total : ${ban.length}`
                            client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
                            break
         case 'kick':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                     mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                     if (mentioned.length > 1) {
                         teks = ''
                         for (let _ of mentioned) {
                             teks += `> *_BYE BYE BEBAN GRUB_*
  🤭 :\n`
                             teks += `@_.split('@')[0]`
                         }
                         mentions(teks, mentioned, true)
                         client.groupRemove(from, mentioned)
                     } else {
                         mentions(`*_BYE BYE BEBAN GRUB_*\n\n@${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
                         client.groupRemove(from, mentioned)
                     }
                     break
         case 'welcome':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (args.length < 1) return reply('enable/disable')
                 if (args[0] === 'enable') {
                 if (isWelkom) return reply('*fitur Welcome sudah aktif tadi!!*')
                        welkom.push(from)
                        fs.writeFileSync('./database/kelompok/welkom.json', JSON.stringify(welkom))
                        reply(`Welcome is enable`)
                   } else if (args[0] === 'disable') {
                       welkom.splice(from, 1)
                        fs.writeFileSync('./database/kelompok/welkom.json', JSON.stringify(welkom))
                         reply(`Welcome is disable`)
                    } else {
                        reply(ind.satukos())
                     }
                     break
                  case 'antilink':
                     if (isBanned) return reply(mess.only.benned)
                     if (!isGroup) return reply(mess.only.group)
                     if (!isGroupAdmins) return reply(mess.only.admin)
                     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
                     if (Number(args[0]) === 1) {
                         if (isAntilink) return reply('Anti link group sudah aktif')
                         antilink.push(from)
                         fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
                         reply('Sukses mengaktifkan anti link group di group ini ✔️')
                         client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
                     } else if (Number(args[0]) === 0) {
                         if (!isAntilink) return reply('Mode anti link group sudah disable')
                         antilink.splice(from, 1)
                         fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
                         reply('Sukes menonaktifkan anti link group di group ini ✔️')
                     } else {
                         reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                     }
                     break
                 case 'tts':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana kak?', text, {quoted: mek})
                     const gtts = require('./lib/gtts')(args[0])
                     if (args.length < 2) return client.sendMessage(from, 'Textnya mana kak?', text, {quoted: mek})
                     dtt = body.slice(9)
                     ranm = getRandom('.mp3')
                     dtt.length > 600
                     ? reply('Textnya kebanyakan kak')
                     : gtts.save(ranm, dtt, function() {
                         client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                         fs.unlinkSync(ranm)
                     })
                     break
                     case 'del':
                     case 'delete':
                     client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                     break
 //DOWNLOAD MENU     
                     case 'fb':
                    if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} https://www.facebook.com/groups/526925218448628/permalink/591475845326898/`)
                     link = args[0]
                     anu = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/snapsave?url=${link}&apikey=${dapapi}`)
                     anu = anu.result
                     anu1 = await getBuffer(anu.preview)
                     client.sendMessage(from, anu1, video, {mimetype: 'video/mp4', quoted:mek })
                     break
                     case 'ig':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} https://www.instagram.com/p/CNGxug9jy3D/`)
                     link = args[0]
                     anu = await fetchJson(`https://api.zekais.com/igdl2?url=${link}&apikey=xIWFufT6`)
                     anu1 = await getBuffer(anu.result[0].url)
                     client.sendMessage(from, anu1, video, {mimetype: 'video/mp4', quoted:mek })
                     break
                     case 'tiktok':
                     case 'tiktokvideo':
                     case 'tt':
                     case 't':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} https://vt.tiktok.com/ZSeMAUJbd/`)
                     link = args[0]
                     anu = await fetchJson(`https://hadi-api.herokuapp.com/api/tiktok?url=${link}`)
                     anu = anu.result
                     anu1 = anu.video
                     anu2 = await getBuffer(anu1.original)
                     client.sendMessage(from, anu2, video, { mimetype: 'video/mp4', quoted: mek })
                     break
                     case 'twit':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} https://twitter.com/dekai23/status/1488600754256551941`)
                     link = args[0]
                     anu = await fetchJson(`https://api.zekais.com/twtdl?url=${link}&apikey=xIWFufT6`)
                     anu1 = await getBuffer(anu.result)
                     client.sendMessage(from, anu1, video, {mimetype: 'video/mp4', quoted:mek })
                     break
                     case 'tiktokmusik':
                     case 'tiktokmusic':
                     case 'tiktokaudio':
                     case 'ta':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} https://vt.tiktok.com/ZSeMAUJbd/`)
                     link = args[0]
                     anu = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${link}`)
                     anu = anu.result
                     anu1 = anu.audio_only
                     anu2 = await getBuffer(anu1.original)
                     client.sendMessage(from, anu2, document, { mimetype: 'audio/mp3',filename: getRandom('.mp3'), quoted: mek })
                     break
                     case 'play':
                     case 'yt':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} Dj Tie Me Down`)
                     query = args.join(" ")
                     anu = await fetchJson(`https://melcanz.com/yts?query=${query}&apikey=TP9oxahL`)
                     anu1 = await getBuffer(anu.thumb)
                     anu2 = await getBuffer(anu.audio[0].url)
                     client.sendMessage(from, anu1, image, { quoted: mek, caption: `${anu.title}` })
                     client.sendMessage(from, anu2, document, { mimetype: 'audio/mp3',filename: `${anu.title}.mp3` , quoted: mek })
                     break
                     case 'playvideo':
                     case 'ytvideo':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} Dj Tie Me Down`)
                     query = args.join(" ")
                     anu = await fetchJson(`https://melcanz.com/yts?query=${query}&apikey=TP9oxahL`)
                     anu1 = await getBuffer(anu.thumb)
                     anu2 = await getBuffer(anu.video[0].url)
                     client.sendMessage(from, anu1, image, { quoted: mek, caption: `${anu.title}` })
                     client.sendMessage(from, anu2, video, { mimetype: 'video/mp4', quoted: mek })
                     break
                     case 'ytmp3':
                        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                     link = args[0]
                     anu = await fetchJson(`https://melcanz.com/yt?url=${link}&apikey=TP9oxahL`)
                     anu1 = await getBuffer(anu.thumb)
                     anu2 = await getBuffer(anu.audio[0].url)
                     client.sendMessage(from, anu1, image, { quoted: mek, caption: `${anu.title}`})
                     client.sendMessage(from, anu2, document, { mimetype: 'audio/mp3', filename: `${anu.title}.mp3`, quoted: mek})
                     break
                    case 'ytmp4':
                    if (args.length == 0) return reply(`*Contoh:* ${prefix + command} https://www.youtube.com/watch?v=d_HlPboLRL8`)
                    link = args[0]
                    anu = await fetchJson(`https://melcanz.com/yt?url=${link}&apikey=TP9oxahL`)
                    anu1 = await getBuffer(anu.thumb)
                    client.sendMessage(from, anu1, image, { quoted: mek, caption: `${anu.title}`})
                    anu2 = await getBuffer(anu.video[0].url)
                    client.sendMessage(from, anu2, video, { mimetype: 'video/mp4', quoted: mek})
                    break
 
 //MENU INFORMASI
                     case 'igstalk':
                        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} alvianto17`)
                     username = args.join(" ")
                     anu = await fetchJson(`https://hardianto.xyz/api/igstalk?username=${username}&apikey=hardianto`)
                     txt = `Username: ${anu.username}\n`
                     txt += `Fullname: ${anu.fullname}\n`
                     txt += `Bio: ${anu.bio}\n`
                     txt += `Followers: ${anu.followers}\n`
                     txt += `Following: ${anu.follow}\n`
                     txt += `Verified Account? Ngimpi awokawokawok\n\n`
                     txt += `Link: https://www.instagram.com/${username}/?hl=id`
                     anu1 = await getBuffer(anu.thumbnail)
                     client.sendMessage(from, anu1, image, {caption: txt, quoted: mek})
                     break
                     case 'tiktokstalk':
                        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} alvianto17`)
                     username = args.join(" ")
                     anu = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${username}?apikey=${lolkey}`)
                     anu = anu.result
                     txt = `Username: ${anu.username}\n`
                     txt += `Nickname: ${anu.nickname}\n`
                     txt += `Bio: ${anu.bio}\n`
                     txt += `Like: ${anu.likes}\n`
                     txt += `Video: ${anu.video}\n`
                     txt += `Followers: ${anu.followers}\n`
                     txt += `Following: ${anu.followings}`
                     anu1 = await getBuffer(anu.user_picture)
                     client.sendMessage(from, anu1, image, {caption: txt, quoted: mek})
                     break
                     case 'githubstalk':
                        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} alvianto17`)
                     username = args.join(" ")
                     anu = await fetchJson(`https://fxc7-api.herokuapp.com/api/stalk/github?apikey=LDQlH9CncZ&username=${username}`)
                     anu = anu.result
                     txt = `Username: ${anu.username}\n`
                     txt += `Name: ${anu.name}\n`
                     txt += `Bio: ${anu.bio}\n`
                     txt += `Blog: ${anu.blog}\n`
                     txt += `Location: ${anu.location}\n`
                     txt += `Repository: ${anu.repositoty_count}\n`
                     txt += `Followers: ${anu.followers}\n`
                     txt += `Following: ${anu.following}\n`
                     txt += `Account Created: ${anu.created_at}\n`
                     txt += `Account Update: ${anu.update_at}`
                     reply( txt )
                     break
                     case 'gempa':
                     get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
                     get_result = get_result.result
                     ini_txt = `*Koordinat* : ${get_result.koordinat}\n`
                     ini_txt += `*Magnitudo* : ${get_result.magnitude}\n`
                     ini_txt += `*Kedalaman* : ${get_result.kedalaman}\n`
                     ini_txt += `*Waktu* : ${get_result.waktu}\n`
                     ini_txt += `*Lokasi Gempa* : ${get_result.lokasi}\n`
                     ini_txt += `*Dirasakan* : ${get_result.potensi}\n\n`
                     ini_txt += `POWERED BY: BMKG.GO.ID`
                     anu = await getBuffer(get_result.map)
                     client.sendMessage(from, anu, image, {quoted: mek, caption: ini_txt })
                     break
                     case 'corona':
                     case 'covid':
                     get_result = await fetchJson(`https://restu-restapi.herokuapp.com/covid?country=indonesia`)
                     get_result = get_result.result
                     ini_txt = `*Positif* : ${get_result.positif}\n`
                     ini_txt += `*Sembuh* : ${get_result.sembuh}\n`
                     ini_txt += `*Meninggal* : ${get_result.meninggal}\n`
                     ini_txt += `*Update* : ${get_result.diperbarui}\n\n`
                     ini_txt += '*Data Ini Diambil Dari KEMENTRIAN KESEHATAN RI*'
                     reply( ini_txt )
                     break
                     case 'cuaca':
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} Yogyakarta`)
                     query = args.join(" ")
                     anu = await fetchJson(`https://api.xteam.xyz/cuaca?kota=${query}&APIKEY=${xteamapi}`)
                     anu = anu.message
                     txt = `*Kota* : ${anu.kota}\n`
                     txt += `*Hari* : ${anu.hari}\n`
                     txt += `*Cuaca* : ${anu.cuaca}\n`
                     txt += `*Deskripsi* : ${anu.deskripsi}\n`
                     txt += `*Suhu* : ${anu.suhu}\n`
                     txt += `*Kelembapan* : ${anu.kelembapan}\n`
                     txt += `*Angin* : ${anu.angin}\n`
                     txt += `*Pressure* : ${anu.pressure}`
                     reply( txt )
                     break
                     case 'jadwalsholat':
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} Yogyakarta`)
                     query = args.join(" ")
                     anu = await fetchJson(`https://api.zeks.me/api/jadwalsholat?apikey=alvianto17&daerah=${query}`)
                     anu = anu.data
                     anu1 = anu.object
                     ini_txt = `Shubuh : *${anu1.Shubuh}*\n`
                     ini_txt += `Dzuhur : *${anu1.Dzuhur}*\n`
                     ini_txt += `Ashar : *${anu1.Ashr}*\n`
                     ini_txt += `Maghrib : *${anu1.Maghrib}*\n`
                     ini_txt += `Isya : *${anu1.Isya}*\n\n\n`
                     ini_txt += `*List Daerah :*
 Ambarawa, Ambon, Amlapura, Amuntai, Argamakmur, ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Atambua, Babo, Bagan Siapiapi, Bajawa, Balige, Balik Papan, Banda Aceh, Bandarlampung, Bandung, Bangkalan, Bangkinang, Bangko, Bangli, Banjar, Banjar Baru, Banjarmasin, Banjarnegara, Bantaeng, Banten, Bantul, Banyuwangi, Barabai, Barito, Barru, Batam, Batang, Batu, Baturaja, Batusangkar, Baubau, Bekasi, Bengkalis, Bengkulu, Benteng, Biak, Bima, Binjai, Bireuen, Bitung, Blitar, Blora, Bogor, Bojonegoro, Bondowoso, Bontang, Boyolali, Brebes, Bukit Tinggi, Bulukumba, Buntok, Cepu, Ciamis, Cianjur, Cibinong, Cilacap, Cilegon, Cimahi, Cirebon, Curup, Demak, Denpasar, Depok, Dili, Dompu, Donggala, Dumai, Ende, Enggano, Enrekang, Fakfak, Garut, Gianyar, Gombong, Gorontalo, Gresik, Gunung Sitoli, Indramayu, Jakarta, Jambi, Jayapura, Jember, Jeneponto, Jepara, Jombang, Kabanjahe, Kalabahi, Kalianda, Kandangan, Karanganyar, Karawang, Kasungan, Kayuagung, Kebumen, Kediri, Kefamenanu, Kendal, Kendari, Kertosono, Ketapang, Kisaran, Klaten, Kolaka, Kota Baru Pulau Laut, Kota Bumi, Kota Jantho, Kota Mobagu, Kuala Kapuas, Kuala Kurun, Kuala Pembuang, Kuala Tungkal, Kudus, Kuningan, Kupang, Kutacane, Kutoarjo, Labuhan, Lahat, Lamongan, Langsa, Larantuka, Lawang, Lhoseumawe, Limboto, Lubuk Basung, Lubuk Linggau, Lubuk Pakam, Lubuk Sikaping, Lumajang, Luwuk, Madiun, Magelang, Magetan, Majalengka, Majene, Makale, Makassar, Malang, Mamuju, Manna, Manokwari, Marabahan, Maros, Martapura, Masohi, Mataram, Maumere, Medan, Mempawah, Menado, Mentok, Merauke, Metro, Meulaboh, Mojokerto, Muara Bulian, Muara Bungo, Muara Enim, Muara Teweh, Muaro Sijunjung, Muntilan, Nabire, Negara, Nganjuk, Ngawi, Nunukan, Pacitan, Padang, Padang Panjang, Padang Sidempuan, Pagaralam, Painan, Palangkaraya, Palembang, Palopo, Palu, Pamekasan, Pandeglang, Pangkajene, Pangkajene Sidenreng, Pangkalanbun, Pangkalpinang, Panyabungan, Pare, Parepare, Pariaman, Pasuruan, Pati, Payakumbuh, Pekalongan, Pekan Baru, Pemalang, Pematangsiantar, Pendopo, Pinrang, Pleihari, Polewali, Pondok Gede, Ponorogo, Pontianak, Poso, Prabumulih, Praya, Probolinggo, Purbalingga, Purukcahu, Purwakarta, Purwodadigrobogan, Purwokerto, Purworejo, Putussibau, Raha, Rangkasbitung, Rantau, Rantauprapat, Rantepao, Rembang, Rengat, Ruteng, Sabang, Salatiga, Samarinda, Sampang, Sampit, Sanggau, Sawahlunto, Sekayu, Selong, Semarang, Sengkang, Serang, Serui, Sibolga, Sidikalang, Sidoarjo, Sigli, Singaparna, Singaraja, Singkawang, Sinjai, Sintang, Situbondo, Slawi, Sleman, Soasiu, Soe, Solo, Solok, Soreang, Sorong, Sragen, Stabat, Subang, Sukabumi, Sukoharjo, Sumbawa Besar, Sumedang, Sumenep, Sungai Liat, Sungai Penuh, Sungguminasa, Surabaya, Surakarta, Tabanan, Tahuna, Takalar, Takengon, Tamiang Layang, Tanah Grogot, Tangerang, Tanjung Balai, Tanjung Enim, Tanjung Pandan, Tanjung Pinang, Tanjung Redep, Tanjung Selor, Tapak Tuan, Tarakan, Tarutung, Tasikmalaya, Tebing Tinggi, Tegal, Temanggung, Tembilahan, Tenggarong, Ternate, Tolitoli, Tondano, Trenggalek, Tual, Tuban, Tulung Agung, Ujung Berung, Ungaran, Waikabubak, Waingapu, Wamena, Watampone, Watansoppeng, Wates, Wonogiri, Wonosari, Wonosobo, Yogyakarta`
                     reply( ini_txt )
                     break
                     case 'brainly':
                        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} Apa itu TKJ?`)
                     query = args.join(" ")
                     anu = await fetchJson(`https://api.xteam.xyz/brainly?soal=${query}&APIKEY=${xteamapi}`)
                     anu1 = `*Soal :* ${query}\n\n`
                     anu1 += `*Jawaban :*\n${anu.jawaban}`
                     reply( anu1 ) 
                     break
                     case 'ip':
                        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} 1.1.1.1`)
                     ip = args.join(" ")
                     anu = await fetchJson(`http://ip-api.com/json/${ip}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`)
                     ini_txt = `Ip : ${ip}\n`
                     ini_txt += `Isp : ${anu.isp}\n`
                     ini_txt += `City : ${anu.city}\n`
                     ini_txt += `Region : ${anu.regionName}\n`
                     ini_txt += `ZipCode : ${anu.zip}\n`
                     ini_txt += `Country : ${anu.country}\n`
                     ini_txt += `TimeZone : ${anu.timezone}\n`
                     ini_txt += `Lat : ${anu.lat}\n`
                     ini_txt += `Lon : ${anu.lon}\n`
                     ini_txt += `ASN : ${anu.as}\n`
                     ini_txt += `AsName : ${anu.asname}\n`
                     ini_txt += `Org : ${anu.org}`
                     reply( ini_txt )
                     break
 
 //OTHER MENU
                    case 'lirik':
                        if (isBanned) return reply(mess.only.benned)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} Resah jadi luka`)
                     query = args.join(" ")
                     anu = await fetchJson(`https://hardianto.xyz/api/info/lirik?query=${query}&apikey=hardianto`)
                     ini_txt = `${anu.lirik}`
                     thumb = await getBuffer(anu.thumb)
                     client.sendMessage(from, thumb, image, {caption: ini_txt, quoted: mek})
                     break
                     case 'ppcp':
                        if (isBanned) return reply(mess.only.benned)
                     anu = await fetchJson(`https://api-xcoders.xyz/api/random/ppcouple?apikey=b9Kq8rLr3c`)
                     anu = anu.result
                     cwo = await getBuffer(anu.ppcwo)
                     cwe = await getBuffer(anu.ppcwe)
                     reply(`Tema: ${anu.theme}`)
                     client.sendMessage(from, cwo, image, {quoted: mek, caption: `Cowo`})
                     client.sendMessage(from, cwe, image, {quoted: mek, caption: `Cewe`})
                     break
 
 //Spam SMS
                     case 'spamwa':
                     if (!isOwner) return reply(mess.only.ownerB)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} 62xxxxxxxxxxx`)
                     query = args.join(" ")
                     spam = await fetchJson(`https://api.xteam.xyz/spammer/olx?no=${query}&APIKEY=${xteamapi}`)
                     txt = `${spam.result}`                 
                     reply(`Sukses Spam WhatsApp Nomer wa.me/${query}\n\nSN: ${txt}`)
                     break
                     case 'spamsms':
                     if (!isOwner) return reply(mess.only.ownerB)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} 62xxxxxxxxxxx`)
                     query = args.join(" ")
                     spam = await fetchJson(`https://api.xteam.xyz/spammer/icq?no=${query}&APIKEY=${xteamapi}`)
                     txt = `${spam.result}`                 
                     reply(`Sukses Spam WhatsApp Nomer wa.me/${query}\n\nSN: ${txt}`)
                     break
                     case 'spamtlp':
                     if (!isOwner) return reply(mess.only.ownerB)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} 8xxxxxxxxxx`)
                     query = args.join(" ")
                     spam = await fetchJson(`https://caliphapi.com/api/spamcall?no=${query}&apikey=DmmL8IQZ`)
                     txt = `${spam.result}`                 
                     reply(`Sukses Spam WhatsApp Nomer wa.me/62${query}\n\nSN: ${txt}`)
                     break
                     case 'spamall':
                     if (!isOwner) return reply(mess.only.ownerB)
                     if (args.length == 0) return reply(`*Contoh:* ${prefix + command} 62xxxxxxxxxxx`)
                     query = args.join(" ")
                     spam = await fetchJson(`https://api.xteam.xyz/spammer/pizzahut?no=${query}&APIKEY=${xteamapi}`)
                     spam1 = await fetchJson(`https://api.xteam.xyz/spammer/olx?no=${query}&APIKEY=${xteamapi}`)
                     spam2 = await fetchJson(`https://api.xteam.xyz/spammer/jagreward?no=${query}&APIKEY=${xteamapi}`)
                     spam3 = await fetchJson(`https://api.xteam.xyz/spammer/danacita?no=${query}&APIKEY=${xteamapi}`)
                     spam4 = await fetchJson(`https://api.xteam.xyz/spammer/akademi?no=${query}&APIKEY=${xteamapi}`)
                     spam5 = await fetchJson(`https://api.xteam.xyz/spammer//icq?no=${query}&APIKEY=${xteamapi}`)
                     reply(`Sukses Spam Nomer wa.me/${query}`)
                     break
                 default:
         if (budy.includes(`Assalamualaikum`)) {
                 reply(`Waalaikumsalam`)
                 }
         if (budy.includes(`assalamualaikum`)) {
                 reply(`Waalaikumsalam`)
                 }
         if (budy.includes(`62895401223315`)) {
                 reply(`Maaf ${pushname}, Dia baru sibuk, kadang sering ngesad:v\n\nPesanmu akan dibalas secepatnya\nTerima Kasih`)
                 }
         if (budy.includes(`62895401223315`)) {
                 reply(`Kalo penting spam aja via chat *(Khusus cewe)*, yang laki jangan coba coba spam, nanti diblock kamu😏`)
                 }
         if (budy.includes(`Virtual`)) {
                 sound = fs.readFileSync(`./mp3/virtual.mp3`)
                 client.sendMessage(from, sound, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})   
                 }
         if (budy.includes(`Info`)) {
                 sound = fs.readFileSync(`./mp3/info.mp3`)
                 client.sendMessage(from, sound, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})   
                 }
             if (isGroup && !isCmd && isSimi && budy != undefined) {
                         console.log(budy)
                         muehe = await simih(budy)
                         reply(ind.cmdnf(prefix, command))
                     } else {
                        console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
                     }
                     }
         } catch (e) {
             console.log('Error : %s', color(e, 'red'))
         }
     })
 
