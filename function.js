const { execSync } = require('child_process')
const { 
	location,
	address_a, 
	address_b,
	address_t
} = require('./config.json')
module.exports = { 
	rpcCmd, 
	gettemplate, 
	getbalance, 
	sendmoney, 
	sleep,
	genblock 
}

function rpcCmd( data ) {
	let user = ""
	if( data[0] != "" ){
		let port = 9334;
		if( data[0] == 'bob') port = 9333
		user = `-rpcuser=${data[0]} -rpcpassword=${data[0]} -rpcport=${port} -datadir=${location}${data[0]}`
	}
	let command = data[1]
	let subcommand;
	if( data[2] == undefined ){
		subcommand = ""
	}
	if( data[2] != undefined ){
		subcommand = `${data[2]}`
		if( subcommand.includes("{")) subcommand = `'${subcommand}'`
	}


	let fCommand = `bitcoin-cli -regtest ${user} ${command} ${subcommand}`
	let ans = execSync( fCommand )
	return ans.toString()
}

function gettemplate(){
	let ans = rpcCmd([ "", "getblocktemplate", '{"rules": ["segwit"]}'])
	return ans
}

function getbalance( name ){
	let ans = rpcCmd([ name, "getbalance"])
	return ans
}

function sendmoney(){
	let ans = rpcCmd(["alice", "sendtoaddress",  `${ address_b} 2`])
	return ans
}

function sleep(n){
	let now = Date.now()
	let curr = null
	do {
		curr = Date.now()
	} while ( curr - now < n * 1000 ) 
}

function genblock(){
	let ans = rpcCmd(["", "generatetoaddress", ` 1 ${ address_t}`])
	return ans
} 