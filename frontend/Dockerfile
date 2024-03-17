#Stage 1
FROM node:20.11.0 as builder
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#Stage 2
FROM nginx:1.23.1
COPY --from=builder /frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]