#!name=❏ 彩云天气pro
#!desc=彩云天气pro
[Script]
彩云天气pro=type=http-response,pattern=https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user),requires-body=1,script-path= https://raw.githubusercontent.com/ExPensive-58/caiyunjs/main/caiyun.js

[MITM]
hostname= %APPEND% biz.caiyunapp.com
