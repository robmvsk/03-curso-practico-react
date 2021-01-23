const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//creamos un nuevo modulo que vamos a exportar con esta configuracion
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),  //permite detectr en el directorio en que nos encontramos, y le pasamos el dir en donde se van a guardar los archivos (dist)
        filename: 'bundle.js'  //nombre al archivo principal
    },
    //resolver las extensiones que vamos a utilizar en nuestro proyecto
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //creamos un modulos con las reglas necesarias pra nuestro proyecto
    module: {
        rules: [  //regla principal
            {
                test: /\.(js|jsx)$/,   //expresion regular que nos permita identificar los archivos js y jsx
                exclude: /node_modules/,  //directorio excluido
                //usar el loader, en este caso babel
                use: {
                    loader: "babel-loader"
                }
            },
            //creamos una nueva regla que nos permita trabajar con los archivos de html:
            {
                test: /\.html$/,   //expresion regular que nos permita identificar los archivos js y jsx
                //usar el loader, en este caso babel
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            //creamos una nueva regla que nos permita trabajar con los archivos css:
            {
                test: /\.(s*)css$/,   //expresion regular que nos permita identificar los archivos scss o css
                //usar el loader, en este caso el loader de css
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,  //referencia del plugin a utilizar
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            //regla para el manejo de nuestros archivos multimedia, es decir los iconos
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    //configuramos el nombre del archivo (en este caso tendra el nombre aleatorio del hash)
                    //y que respete la extension que tiene el archivo o imagen
                    options: { name: 'assets/[hash].[ext]' },
                  }
                ],
            },
        ]
    },
    //añadimos los plugins que requerimos
    plugins: [
        //creamos el HtmlWebPackPlugin y le pasamos un objeto con la configuracion que necesitamos
        new HtmlWebPackPlugin( {
            //donde esta ubicado el template que necesitamos
            template: './public/index.html',
            //el filename que va a tener
            filename: './index.html',
        } ),
        //nuevo plugin para SaSS
        new MiniCssExtractPlugin( {
            //parametro obligatorio, es el archivo resultante
            filename: 'assets/[name].css'
        } )
    ]
};