
// const stdin = process.openStdin()

// process.stdout.write('Enter number: ')

// stdin.addListener('data', text => {
// 	for (let i = 1; i <= text; i++) {
// 		console.log('test' + i);
// 	}
// 	process.exit(0);
// })

let text = process.argv[2];
for (let i = 0; i < text; i++) {
	console.log(i);
}





