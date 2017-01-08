module.exports = {
    "useBuildVersioning": false,
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img",
        "componentsFolderName": "modules"
    },
    "svg": {
        "active": true,
        "workflow": "symbols",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": ""
        }
    },
    "buildPath": "./builds/",
    "useImagesForDisplayWithDpi": [
        96,
        192
    ],
    "useArchiver": false,
    "ulimit": 4096,
    "cssPreprocessor": "scss",
    "notifyConfig": {
        "useNotify": true,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "templater": "handlebars",
    "js": {
        "workflow": "concat",
        "bundler": "webpack",
        "lint": false,
        "useBabel": false,
        "removeConsoleLog": true,
        "webpack": {
            "useHMR": false
        },
        "jsPathsToConcatBeforeModulesJs": [],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "css": {
        "workflow": "concat"
    },
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "minifyHtml": false,
    "postcss": [],
    "generateStaticPath": true
};