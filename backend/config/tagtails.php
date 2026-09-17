<?php

return [
    'frontend_url' => env('FRONTEND_URL', 'http://localhost:3000'),

    'plans' => [
        'basic' => [
            'id' => 'basic',
            'name' => 'Basic',
            'tagline' => 'The essentials, always close.',
            'price' => 0,
            'currency' => 'GBP',
            'interval' => null,
            'price_label' => '£0',
            'interval_label' => 'No subscription',
            'badge' => 'Free to get started',
            'features' => [
                'Pet photo and basic profile',
                'Editable owner contact details',
                'Unique QR tag linked to your pet',
                'Public lost-pet page for finders',
            ],
        ],
        'monthly' => [
            'id' => 'monthly',
            'name' => 'Premium monthly',
            'tagline' => 'A little more peace of mind.',
            'price' => 2.99,
            'currency' => 'GBP',
            'interval' => 'month',
            'price_label' => '£2.99',
            'interval_label' => 'per pet / month',
            'badge' => 'Flexible monthly plan',
            'features' => [
                'Everything in Basic',
                'Direct contact options for finders',
                'SMS alerts when a tag is scanned',
                'A map link to where it was scanned',
            ],
        ],
        'annual' => [
            'id' => 'annual',
            'name' => 'Premium annual',
            'tagline' => 'For all the adventures ahead.',
            'price' => 25,
            'currency' => 'GBP',
            'interval' => 'year',
            'price_label' => '£25',
            'interval_label' => 'per pet / year',
            'badge' => 'Save £10.88 a year',
            'features' => [
                'Everything in Premium monthly',
                'One yearly payment',
                'SMS alerts when a tag is scanned',
                'A map link to where it was scanned',
            ],
        ],
    ],

    'tags' => [
        'free_tags_per_order' => 3,
        'postage_gbp' => 2.99,
        'replacement_tag_gbp' => 0,
    ],
];
