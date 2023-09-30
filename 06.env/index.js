const { OSS_SECRET_KEY } = process.env;

console.log("=== nodejs运行时 ===");
console.log(OSS_SECRET_KEY, CDN_SECRET_KEY); // 运行时拿不到系统环境变量，因为系统和容器是隔离的，而且构建环境和部署环境也不一样
console.log("====================");
