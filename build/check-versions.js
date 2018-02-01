/* 本文件是用来检测node和npm版本的 */
var chalk = require('chalk'); //颜色插件
var semver = require('semver'); //判断特定的版本号
var packageConfig = require('../package.json'); //使用里面的engines选项,返回的是Json对象
var shell = require('shelljs'); //用来执行Unix系统命令
function exec(cmd) { //Unix命令
    return require('child_process')
        .execSync(cmd)
        .toString()
        .trim() //把cmd这个参数传递的值转化成前后没有空格的字符串，也就是版本号
}

var versionRequirements = [
    {
        name: 'node',
        currentVersion: semver.clean(process.version), //使用semver插件吧版本信息转化成规定格式，也就是 '  =v1.2.3  ' -> '1.2.3' 这种功能
        versionRequirement: packageConfig.engines.node //规定的pakage.json中engines选项的node版本信息 "node":">= 4.0.0"
    }
]

if (shell.which('npm')) {
    versionRequirements.push({
        name: 'npm', currentVersion: exec('npm --version'), //自动调用npm --version命令，并且把参数返回给exec函数，从而获取纯净的版本号
        versionRequirement: packageConfig.engines.npm
    })
}

module.exports = function () {
    var warnings = [];
    for (var i = 0; i < versionRequirements.length; i++) {
        var mod = versionRequirements[i];
        if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
            //判断如果版本号不符合package.json文件中指定的版本号
            warnings.push(mod.name + ': ' + chalk.red(mod.currentVersion) + ' should be ' + chalk.green(mod.versionRequirement)
            // 大致意思就是 把当前版本号用红色字体 符合要求的版本号用绿色字体 给用户提示具体合适的版本
            )
        }
    }
    if (warnings.length) {
        console.log('')
        console.log(chalk.yellow('To use this template, you must update following to modules:'))
        console.log()
        for (var i = 0; i < warnings.length; i++) {
            var warning = warnings[i]
            console.log('  ' + warning)
        }
        console.log()
        process.exit(1)
    }
}