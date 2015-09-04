window.addEventListener('load', function(e){
    var divs = document.querySelectorAll('.hilite');
    var div, codeNode, lineString, hiliteObj;
    for (var i = 0, l = divs.length; i < l; i++) {
        div = divs[i];
        if (! div.dataset.lines) continue;
        lineString = div.dataset.lines;
        hiliteObj = lineStrToObj(lineString);
        codeNode = div.querySelector('pre code');
        hiliteCode(codeNode, hiliteObj);
    }
});

function lineStrToObj(s) {
    var tokens = s.split(/\s*,\s*/);
    var rangeArray;
    var obj = { 
        "lines":       [ ], 
        "startRanges": [ ], 
        "endRanges":   [ ]
    };

    for (var i = 0, l = tokens.length; i < l; i++) {
        if (tokens[i].match(/^\d+$/)) {
            obj['lines'].push((tokens[i] * 1) - 1);
        }
        else if (tokens[i].match(/^\d+\s*-\s*\d+$/)) {
            rangeArray = tokens[i].split(/\s*-\s*/);
            obj['startRanges'].push((rangeArray[0] * 1) - 1);
            obj['endRanges'].push((rangeArray[1] * 1) - 1);
        }
        else {
            console.log("Problem: didn't catch case");
            console.log(tokens[i]);
        }
    }
    return(obj);
}

function hiliteCode(codeNode,obj) {
    var lines, n;
    lines = codeNode.textContent.split("\n");
    for (var i = 0, l = obj.lines.length; i < l; i++) {
        n = obj.lines[i];
        lines[n] = '<span>' + lines[n] + '</span>';        
    }
    for (var i = 0, l = obj.startRanges.length; i < l; i++) {
        n = obj.startRanges[i];
        lines[n] = '<span>' + lines[n];
    }
    for (var i = 0, l = obj.endRanges.length; i < l; i++) {
        n = obj.endRanges[i];
        lines[n] += '</span>';
    }
    codeNode.innerHTML = lines.join("\n");
}
