const { execSync } = require('child_process')


function rpcCmd( data ) {
	let user = ""
	if( data[0] != "" ){
		let port = 9334;
		if( data[0] == 'bob') port = 9333
		user = `-rpcuser=${data[0]} -rpcpassword=${data[0]} -rpcport=${port} -datadir=/home/xdude/.bitcoin/${data[0]}`
	}
	let command = data[1]
	let subcommand = ""
	if( data[2] != "" ){
		subcommand = `${data[2]}`
	}

	let fCommand = `bitcoin-cli -regtest ${user} ${command} '${subcommand}'`

	console.log("---~/pcode/getmerkleroot/index.js---15---👉", fCommand )
	let ans = execSync( fCommand )
	return JSON.parse( ans.toString())
}

let ans = rpcCmd([ "bob", "getblocktemplate", '{"rules": ["segwit"]}'])
console.log("---~/pcode/getmerkleroot/index.js---21---👉", ans )