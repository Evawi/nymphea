var re = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/igm
var res = textownstr.replace(re, '<a href="$&" target="_blank"> $& </a>');