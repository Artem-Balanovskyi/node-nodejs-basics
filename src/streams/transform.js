export const transform = async () => {
    process.stdin.on('data', chunk => {
        const reversed = chunk.toString().split('').reverse().join('');
        process.stdout.write(reversed);
    })

};

transform();