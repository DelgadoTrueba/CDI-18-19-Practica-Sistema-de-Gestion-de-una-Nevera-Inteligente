import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
      transition('fridge => market', [
          /* order */
          /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
            , { optional: true }),
          /* 2 */ group([  // block executes in parallel
            query(':enter', [
              style({ transform: 'translateX(100%)' }),
              animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
              style({ transform: 'translateX(0%)' }),
              animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
        ]),
      ]),
      transition('market => settings', [
        /* order */
        /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
          , { optional: true }),
        /* 2 */ group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ]),
    ]),

      transition('settings => market', [
        /* order */
        /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
          , { optional: true }),
        /* 2 */ group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ]),
    ]),
      transition('market => fridge', [
        /* order */
        /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
          , { optional: true }),
        /* 2 */ group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ]),
    ]),
  ]);