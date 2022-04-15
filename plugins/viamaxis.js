let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Maxis
╠➥ *60147751029*
║- Owner Bot:
║- wa.me/79519874382
╠═〘 NaticsBotz 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viamaxis']
handler.tags = ['info']
handler.command = /^viamaxis$/i

module.exports = handler
