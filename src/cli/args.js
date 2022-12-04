const parseArgs = () => {
    const allArgs = process.argv;
    const result = [];

    allArgs.forEach((arg, idx) => {
        if (arg.startsWith('--')) {
            result.push(`${arg.slice(2)} is ${allArgs[idx + 1]}`);
        }
    })
    console.log(result.join(", "))
};

parseArgs();