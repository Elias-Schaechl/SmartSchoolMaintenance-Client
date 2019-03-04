FROM node:carbon as build-stage
    WORKDIR usr/src/app
    COPY package*.json ./
    RUN npm install
    COPY . .
    RUN npm run build

FROM nginx:1.15.5-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage usr/src/app/dist/SmartSchoolMaintenance-Client /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
