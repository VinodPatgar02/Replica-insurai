// next.config.mjs
export default {
    reactStrictMode: true,
    swcMinify: true, // Use SWC for minification
    webpack: (config, { isServer }) => {
        config.resolve.extensions.push('.ts', '.tsx');

        config.module.rules.push({
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192, // Limit for base64 inlining
                    name: '[name].[ext]',
                    outputPath: 'static/fonts/',
                    publicPath: '/_next/static/fonts/',
                },
            },
        });

        return config;
    },
};