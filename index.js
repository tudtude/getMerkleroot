
const fs = require('fs');
const func = require('./function')
console.log('\n')


// let genblock = func.genblock()
// console.log("------------------ genblock ---------------------")
// console.log("---~/pcode/getmerkleroot/index.js---8---👉", genblock )
// console.log('\n')

let temp = func.gettemplate()
temp = JSON.parse( temp )
fs.writeFileSync( 'templateB.json', JSON.stringify( temp , null, 4 ) )
console.log("------------------ txid ---------------------")
temp.transactions.map( x => console.log( x.txid ))
console.log("---~/pcode/getmerkleroot/index.js---20---👉", temp.transactions.length)
console.log('\n')



// console.log("------------------ sendMoney ---------------------")
// let send = func.sendmoney()
// console.log( send )
// console.log('\n')


// func.sleep( 10 )
// let temp1 = func.gettemplate()
// temp1 = JSON.parse( temp1 )
// console.log("------------------ txid after ---------------------")
// temp1.transactions.map( y => console.log( y.txid ))
// console.log("---~/pcode/getmerkleroot/index.js---20---👉", temp1.transactions.length)
// console.log('\n')





// temp = func.gettemplate()
// temp = JSON.parse( temp )
// temp.transactions.map( x => console.log( x.txid ))

