type KeypressEventDetail = {
	letter: string;
};

/** @type { detail: { letter: string } } */
export type KeypressEvent = CustomEvent<KeypressEventDetail>;
