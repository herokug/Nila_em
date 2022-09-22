FROM nila/herokug:md-beta

RUN git clone https://github.com/herokug/Nila2 /root/nila
WORKDIR /root/nila/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "index.js"]
