let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Hotlink 
╠➥ *60146727669*
╠➥ Chat Owner:
║- wa.me/79309770056
╠═〘 NaticsBotz 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viahotlink']
handler.tags = ['info']
handler.command = /^viahotlink$/i

module.exports = handler
