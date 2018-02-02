-- Up
create table applications (
	id INTEGER PRIMARY KEY,
	initial_application DATE,
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
	Do you require access to SITS client? BOOLEAN,
	What access do you require? TEXT,
	Do you require access to Student Records? BOOLEAN,
	What access do you require? TEXT,
	PRS Code: TEXT
	Kings ID: TEXT
	I understand and accept my responsibilities in line with the Data Protection Act 1998 and the relevant College guidance and policies and have successfully completed the online Data Protection training http://keats.kcl.ac.uk/course/view.php?id=28832: BOOLEAN,
	I agree not to share access to the SITS system, or my username and password, with anybody. BOOLEAN,
	I will inform Registry Applications within IT when I no longer require access to the SITS system. BOOLEAN,
	I understand that unauthorised disclosure of data accessed by, processed by, or derived from the SITS system is subject to disciplinary proceedings. BOOLEAN,
	I have read and understand the notice College Business systems - personal data. BOOLEAN
);

-- Down
drop table applications;