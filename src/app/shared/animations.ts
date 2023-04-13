import { animate, AnimationTriggerMetadata, style, transition, trigger } from "@angular/animations";

export function FadeIn(delta: number): AnimationTriggerMetadata {
    return trigger('fadeIn', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(delta, style({ opacity: 1 })),
        ]),
    ]);
}

export function FadeOut(delta: number): AnimationTriggerMetadata {
    return trigger('fadeOut', [
        transition(':leave', [
            style({ opacity: 1 }),
            animate(delta, style({ opacity: 0 })),
        ]),
    ]);
}