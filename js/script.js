'use script';

const api_endpoint = "https://api.github.com/repos/suzumiya-3/github-repo/contents";

const path = location.pathname.replace('/github-repo', '');

$(document).ready(function() {
    $.ajax({url: api_endpoint+path, dataType: 'json'})
    .done(function(data) {
        var ul = document.getElementById('file');

        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const _name = element.name;
            const _size = element.size;
            const _type = element.type
            const _download_url = element.download_url;
            var ignore = ["js", "img", "css", "404.html", "README.md"]
            if (path === "/" && ignore.includes(_name)) { continue; }
            
            var name = " ";
            
            var a = document.createElement('a');
            var li = document.createElement('li');
            var img = document.createElement('img');
            if (_type === 'dir') {
                name += _name + "/";
                a.href = "/" + _name;
                img.src = "img/folder.png";
            }else {
                var size;
                if (_size === 0) {
                      size = '0 Byte';
                }
                const k = 1024;
                const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB'];
                const b = Math.floor(Math.log(_size) / Math.log(k));
                size = (_size / Math.pow(k, b)).toFixed(2) + ' ' + sizes[b];

                name += _name + " | size: " + size;
                a.href = _download_url;
                img.src = "img/file.png";
            }
            var text = document.createTextNode(name);

            li.appendChild(img);
            a.appendChild(text);
            li.appendChild(a);
            ul.appendChild(li);
            
        }
    }).fail(function(err) {
        const status = err.status
        if (status == 429) {
            window.alert("github api is retrun too may requests.")
        }else if (status == 404) {
            window.alert("github api is retrun file or folder not found.")
        }else {
            console.error(status);
        }
    });
});
