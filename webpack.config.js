const path = require('path')
module.exports = {
    entry: './src/app.js',  //入口文件
    output: {  //输出文件路径设置
        filename: './output/app.bundle.js',  
        // 这个路径必须是绝对路径
   		 path: path.resolve('./dist')
    },  
    module: {  
        rules: [{  
            test: /\.js$/,  
            exclude: /node_modules/,  
            loader: 'babel-loader'  
        }]  
    }
}  
