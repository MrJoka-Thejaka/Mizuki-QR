/* Copyright (C) 2021 Queen Amdi.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen Amdi - Black Amda
*/

//thanks for blackamda
const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./session');
const fs = require('fs');

async function mizuki () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2, 2140, 12]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('🔄 connecting', async () => {
        console.log(`${chalk.green.bold('Mizuki')}${chalk.blue.bold(' Qr')}
${chalk.white.italic('Mizuki Sting session')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('MIZUKI QR Code: '),
			'MIZUKI;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'MIZUKI;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('94')) {
			await conn.sendMessage(
				conn.user.jid,
				'*🛑 මේක කාටවත් දෙන්න එපා mchn  ' + conn.user.name + '* 🛑',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*🛑 Please Do Not Share This Code With Anyone mchn  ' + conn.user.name + '* 🛑',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"Meka copy karanna bari nm whatsapp eke athi bn code eka awith!\n"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

mizuki()
