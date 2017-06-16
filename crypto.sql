DROP TABLE IF EXISTS BTC;
DROP TABLE IF EXISTS ETH;


CREATE TABLE BTC(
id SERIAL2 PRIMARY KEY,
ETH DECIMAL,
BTC DECIMAL,
USD DECIMAL,
EUR DECIMAL,
GBP DECIMAL,
tstamp_unix INT8 DEFAULT (extract(epoch from now())*1000),
tstamp_readable TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE ETH(
id SERIAL2 PRIMARY KEY,
ETH DECIMAL,
BTC DECIMAL,
USD DECIMAL,
EUR DECIMAL,
GBP DECIMAL,
tstamp_unix INT8 DEFAULT (extract(epoch from now())*1000),
tstamp_readable TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

