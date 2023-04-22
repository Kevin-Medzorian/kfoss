import { animate, AnimationTriggerMetadata, query, sequence, stagger, style, transition, trigger } from "@angular/animations";

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

export const DropDownAnimation = trigger("dropDownMenu", [
    transition(":enter", [
        style({ height: 0, overflow: "hidden" }),
        query(".menu-item", [
            style({ opacity: 0, transform: "translateY(-50px)" })
        ]),
        sequence([
            animate("100ms", style({ height: "*" })),
            query(".menu-item", [
                stagger(-25, [
                    animate("200ms ease", style({ opacity: 1, transform: "none" }))
                ])
            ])
        ])
    ]),

    transition(":leave", [
        style({ height: "*", overflow: "hidden" }),
        query(".menu-item", [style({ opacity: 1, transform: "none" })]),
        sequence([
            query(".menu-item", [
                stagger(25, [
                    animate(
                        "200ms ease",
                        style({ opacity: 0, transform: "translateY(-50px)" })
                    )
                ])
            ]),
            animate("100ms", style({ height: 0 }))
        ])
    ])
]);