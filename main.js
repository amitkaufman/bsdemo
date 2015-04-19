requirejs.config({
    paths: {
        lodash: 'bower_components/lodash/dist/lodash.min',
        react: 'bower_components/react/react-with-addons',
        text: 'bower_components/requirejs-text/text',
        domReady: 'bower_components/requirejs-domready/domReady',
        jsx: 'lib/jsx',
        JSXTransformer: 'lib/JSXTransformer'
    },
    jsx: {
        fileExtension: '.js'
    }
});

requirejs(['react', 'jsx!app'], function (React, app) {
    require(['domReady!'], function (document) {
        /*eslint new-cap:0*/
        React.render(React.createElement(app), document.getElementById('main'));
    });
});
