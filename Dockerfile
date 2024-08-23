FROM nginx:latest 
RUN rm /usr/share/nginx/html/index.html -f 
COPY ./dist/browser/ /usr/share/nginx/html
EXPOSE 80
