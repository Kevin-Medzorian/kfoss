/**
 * Copyright 2023, Kevin Medzorian 
 * This file is part of KFOSS.
 * KFOSS is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * KFOSS is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with KFOSS. If not, see <https://www.gnu.org/licenses/>.
 **/
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