const parseEnv = () => {
    const envKeys = Object.keys(process.env);
    const result = [];

    envKeys.forEach(key => {
        if (key.startsWith('RSS_')) {
            result.push(`${key}=${process.env[key]}`);
        }
    })
    console.log(result.join("; "))
};

parseEnv();