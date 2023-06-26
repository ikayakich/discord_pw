var pwhs = "e9c577d3a43fa444c52fb83e41eaca9927bb6537595123fc6514880bd078306f";
var ussr = 'GQyH';
var ipths;

var btn = document.getElementById('btn');

var ipt;
var link2 = 'https://discord.gg/';
var link1 = 'kvySgG';
ipt = document.getElementById('ipt');

var btnc = function() {

    const sha256 = async (text) => {
        const uint8  = new TextEncoder().encode(text);
        const digest = await crypto.subtle.digest('SHA-256', uint8);
        return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('');
    }
    
    sha256(ipt.value).then(hash => ipths = hash );

    setTimeout(linkf(), 1000);
}

var linkf = function() {
    if( ipths == pwhs ) {
        window.location.href = link2 + link1 + ussr;
    }
}

btn.addEventListener('click', btnc);