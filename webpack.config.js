 // webpack.config.js
 const path = require("path");
 const HtmlWebpackPlugin = require("html-webpack-plugin");
 
 
 module.exports = {
   mode: "production",
   entry: "./src/index.js",
   output: {
     filename: "bundle.js",
     path: path.resolve(__dirname, "dist"),
     clean: true,
   },
   module: {
     rules: [
    {
        test: /\.ts$/, // 👈 Add this rule for TypeScript
        use: "ts-loader",
        exclude: /node_modules/,
      },

       {
         test: /\.scss$/i,
         use: ["style-loader", "css-loader", "sass-loader"],
       },
       {
         test: /\.sass$/i,
         use: [
           "style-loader",
           "css-loader",
           {
             loader: "sass-loader",
             options: {
               sassOptions: {
                 indentedSyntax: true,
               },
             },
           },
         ],
       },
     ],
   },
   resolve: {
    extensions: [".ts", ".js"], // 👈 Allow both .ts and .js imports
  },
   plugins: [
     new HtmlWebpackPlugin({
       template: "./src/index.html",
     }),
   ]
 };