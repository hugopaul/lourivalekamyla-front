FROM nginx:latest 
RUN rm /usr/share/nginx/html/index.html -f 
COPY dist/lourivalekamyla /usr/share/nginx/html/lourivalekamyla
EXPOSE 80
