import { SpeakersEffects } from './speakers-details.effects';
import { SpeakersListEffects } from './speakers-list.effects';

export * from './speakers-list.effects';
export * from './speakers-details.effects';

export const effects = [
    SpeakersListEffects,
    SpeakersEffects
];
