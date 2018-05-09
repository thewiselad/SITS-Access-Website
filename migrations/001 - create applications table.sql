-- Up
create table applications (
	id INTEGER PRIMARY KEY,
	initial_a=pplication DATE,
	approved DATE,
	access_granted DATE,
	title TEXT,
	firstname TEXT,
	lastname TEXT,
	kclemailaddress TEXT,
	telephoneextension TEXT,
	department TEXT,
	jobrole TEXT,
	campus TEXT,
	sitsclientaccess BOOLEAN,
	accessrequired TEXT,
	sraccess BOOLEAN,
	sraccessrequired TEXT,
	prscode TEXT,
	kingsid TEXT,
	termsandcond BOOLEAN
);

-- Down
drop table applications;