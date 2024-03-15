#Stage 1
FROM node:18-alpine as builder
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD [ "npm", "run", "preview" ]

#Stage 2
FROM nginx:1.21.0-alpine as production
COPY --from=builder /frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]