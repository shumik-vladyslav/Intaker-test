import { SpeakersFacade } from './speakers-details.facade';
import { SpeakersListFacade } from './speakers-list.facade';

export const facades = [
    SpeakersListFacade,
    SpeakersFacade
];

export * from './speakers-list.facade';
export * from './speakers-details.facade';
