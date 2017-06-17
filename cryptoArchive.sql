DROP TABLE IF EXISTS btc_daily;
DROP TABLE IF EXISTS eth_daily;
DROP FUNCTION IF EXISTS con_unix_check_duplicate();

CREATE TABLE btc_daily(
id SERIAL2 PRIMARY KEY,
ETH DECIMAL,
BTC DECIMAL,
USD DECIMAL,
EUR DECIMAL,
GBP DECIMAL,
tstamp_unix INT8,
tstamp_readable TIMESTAMPTZ 
);


CREATE TABLE eth_daily(
id SERIAL2 PRIMARY KEY,
ETH DECIMAL,
BTC DECIMAL,
USD DECIMAL,
EUR DECIMAL,
GBP DECIMAL,
tstamp_unix INT8,
tstamp_readable TIMESTAMPTZ
);



CREATE OR REPLACE FUNCTION con_unix_check_duplicate()
RETURNS TRIGGER AS $d$
DECLARE 
unix INT8 = NEW.tstamp_unix;
tstamp_converted_readable TIMESTAMPTZ := (
  SELECT TIMESTAMP WITH TIME ZONE 'epoch' + unix/1000 * INTERVAL '1 second'
);

BEGIN
IF (SELECT COUNT(*) FROM btc_daily WHERE tstamp_unix = NEW.tstamp_unix) > 0 THEN
RAISE EXCEPTION 'Duplicate Entry, Insert Aborted';
END IF;


NEW.tstamp_readable = tstamp_converted_readable;
RETURN NEW;
END;
$d$ LANGUAGE plpgsql;

CREATE TRIGGER convert_unix
BEFORE INSERT ON btc_daily
FOR EACH ROW
EXECUTE PROCEDURE con_unix_check_duplicate();
