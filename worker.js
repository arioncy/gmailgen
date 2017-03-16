self.addEventListener('message',function(e){var data=e.data;generateEmails(data);},false);function generateEmails(username){var username_length=username.length;var combinations=Math.pow(2,username_length- 1);for(i=0;i<combinations;i++){var bin=decbin(i,username_length- 1);var full_email="";for(j=0;j<(username_length- 1);j++){full_email+=username[j];if(bin[j]==1){full_email+=".";}}
full_email+=username[j]+"@gmail.com\n";self.postMessage(full_email);}}
function decbin(dec,length){var out="";while(length--)
out+=(dec>>length)&1;return out;}