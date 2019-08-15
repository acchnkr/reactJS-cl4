let htmlplugin = require("html-webpack-plugin")

module.exports = {
    // development - production
    mode : "development",
    // module hace referencia a las instrucciones que le quieren dar a webpack por cada archivo que tenga que compilar
    module : {
        rules : [
            {
                // que tipo de modulo buscamos
                test : /\.js$/,
                // que se le aplica al modulo
                use : "babel-loader"
            },
            {
                test : /\.css$/,
                // el orden de ejecucion en el array està invertido, el orden de ejecucion es importante
                use : ["style-loader", "css-loader"]
            }
        ]
    },
    // plugins es siempre un array de plugins
    plugins : [
        new htmlplugin({
            template : "./src/index.html",
            minify : {
                collapseWhitespace : true,
                removeAttributeQuotes : true,
                removeComments : true
            }
        })
    ]
}
