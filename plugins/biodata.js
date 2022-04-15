let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭══════════════════════
║╭─❉ *𝐁𝐈𝐎𝐃𝐀𝐓𝐀 𝐎𝐖𝐍𝐄𝐑* ❉─
║│➸ *Nama* : NoelDaniel🤸
║│➸ *Jantina* : Lelaki
║│➸ *Tempat Tinggal* :
║│➸ Malaysia
║│➸ *Agama* : Kristian
║│➸ *Umur* : 14
║│➸ *Kelas* : Ting.2
║│➸ *Status* : males pcrn
║│➸ *Hobi* : 
║│➸ Main Game
║╰────────────────────
╰══════════════════════
╭══════════════════════
║╭─❉ *𝐒𝐎𝐒𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀* ❉──
║│➸ *No.Owner* : 
║│➸ wa.me/79519874382 
║│➸ *No.Bot* : 
║│➸ wa.me/79519874382
║│➸ *Chanel Youtube* : 
║│➸ https://bit.ly/3uCVyeR
║│➸ *Gmail* : noeldaniel400@gmail.com
║│➸ *Github* : males ngisi
║╰─────────────────────
╰═══════════════════════
_Oke segitu aja_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Biodata')).buffer(), ext, 'Sc By LynnXzy💌', 'Nomor Owner👤', '.owner', 'Donasi💰', '.donasi', 'Sewa Bot🤖', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
