FROM node:current-alpine3.16
WORKDIR /app
COPY package.json .
# RUN npm install
# RUN npm install --only=production

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi
COPY . ./
ENV PORT 3000
EXPOSE ${PORT}

#This is for developer mode
# CMD ["npm", "run", "dev"] 
#This is for  production mode
CMD [ "node", "index.js" ] 





