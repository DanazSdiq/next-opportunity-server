CREATE TABLE IF NOT EXISTS opportunities (
	id uuid 		PRIMARY KEY DEFAULT gen_random_uuid(),
	title			TEXT,
	company			TEXT,
	description		TEXT,
	labels			TEXT[],
	commitment		TEXT,
	url				TEXT
);
