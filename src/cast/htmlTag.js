'use strict';

export default function HtmlTag(data) {
    if (!(this instanceof HtmlTag)) return new HtmlTag(data);

    const linkRegExp = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/igm;

    this.data = data;

    this.link = function() { // ищет ссылки и оборачивает их в тег <a
        let test = this.data;
        let res = test.replace(linkRegExp, '<a href="$&" target="_blank"> $& </a>');
        return res
    };
}

