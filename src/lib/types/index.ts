type KeypressEventDetail = {
	letter: string;
};

export type KeypressEvent = CustomEvent<KeypressEventDetail>;
