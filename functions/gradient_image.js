var gd = require('gd/gd'),
    stylus = require('stylus'),
    utils = stylus.utils,
    nodes = stylus.nodes,
    functions = require('stylus/lib/functions');

function colorAt(a, b, n, height) {
    return Math.round(a + (b - a) * n / height);
}

module.exports = exports = function gradient_image(direction, from, to, width, height) {
    utils.assertString(direction, 'direction');
    utils.assertColor(from, 'from');
    utils.assertColor(to, 'to');
    utils.assertType(width, 'unit', 'width');
    utils.assertType(height, 'unit', 'height');

    var image = gd.createTrueColor(width.val, height.val),
        r1 = functions.red(from),
        r2 = functions.red(to),
        g1 = functions.green(from),
        g2 = functions.green(to),
        b1 = functions.blue(from),
        b2 = functions.blue(to),
        lineTo = 0,
        countTo = 0;

    switch(direction.val) {
        case 'vertical':
            lineTo = width.val;
            countTo = height.val;
            break;
        case 'horizontal':
            lineTo = height.val;
            countTo = width.val;
            break;
        default:
            return null;
    }

    for(var i = 0; i < countTo; i++) {
        image.line(0, i, lineTo, i, image.colorAllocate(
                colorAt(r1.val, r2.val, i, countTo),
                colorAt(g1.val, g2.val, i, countTo),
                colorAt(b1.val, b2.val, i, countTo)
                ));
    }

    var base64 = new Buffer(image.pngPtr(), 'binary').toString('base64');
    return new nodes.Literal('url("data:image/png;base64,' + base64 + '")');
}
