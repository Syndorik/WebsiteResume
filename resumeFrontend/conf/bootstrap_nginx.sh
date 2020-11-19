#!/bin/bash

nginx_config="$(cat /opt/app/conf/nginx_template.conf)"
echo "${nginx_config}" > /etc/nginx/nginx.conf

exec nginx -g "daemon off;"
