import type { GeometryObject } from 'topojson-specification';
import { Continent } from '../../types/continents/types';
import { russiaArcs } from './countries-arcs/europe-arcs';
import { antarcticaArcs } from './countries-arcs/antarctica-arcs';
import { canadaArcs, usaArcs } from './countries-arcs/north-america-arcs';

export const geometries: Array<GeometryObject> = [
  {
    "type": "Polygon",
    "arcs": [
      [0, 1, 2, 3]
    ],
    "id": "716",
    "properties": {
      "name": "Zimbabwe",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-3, 4, 5, 6, 7, 8, 9]
    ],
    "id": "894",
    "properties": {
      "name": "Zambia",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [10, 11, 12]
      ],
      [
        [13]
      ],
      [
        [14]
      ],
      [
        [15]
      ],
      [
        [16]
      ]
    ],
    "id": "887",
    "properties": {
      "name": "Yemen",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [17]
      ],
      [
        [18, 19, 20, 21]
      ],
      [
        [22]
      ],
      [
        [23]
      ],
      [
        [24]
      ],
      [
        [25]
      ],
      [
        [26]
      ],
      [
        [27]
      ]
    ],
    "id": "704",
    "properties": {
      "name": "Vietnam",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [28]
      ],
      [
        [29]
      ],
      [
        [30]
      ],
      [
        [31]
      ],
      [
        [32, 33, 34, 35]
      ]
    ],
    "id": "862",
    "properties": {
      "name": "Venezuela",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [36]
    ],
    "id": "336",
    "properties": {
      "name": "Vatican",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [37]
      ],
      [
        [38]
      ],
      [
        [39]
      ],
      [
        [40]
      ],
      [
        [41]
      ],
      [
        [42]
      ],
      [
        [43]
      ],
      [
        [44]
      ],
      [
        [45]
      ],
      [
        [46]
      ],
      [
        [47]
      ],
      [
        [48]
      ],
      [
        [49]
      ],
      [
        [50]
      ]
    ],
    "id": "548",
    "properties": {
      "name": "Vanuatu",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [51, 52, 53, 54, 55],
        [56]
      ],
      [
        [57]
      ],
      [
        [58]
      ]
    ],
    "id": "860",
    "properties": {
      "name": "Uzbekistan",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [59, 60, 61]
    ],
    "id": "858",
    "properties": {
      "name": "Uruguay",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [62]
      ],
      [
        [63]
      ],
      [
        [64]
      ],
      [
        [65]
      ],
      [
        [66]
      ]
    ],
    "id": "583",
    "properties": {
      "name": "Micronesia",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [67]
      ],
      [
        [68]
      ],
      [
        [69]
      ],
      [
        [70]
      ],
      [
        [71]
      ]
    ],
    "id": "584",
    "properties": {
      "name": "Marshall Is.",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [72]
      ],
      [
        [73]
      ],
      [
        [74]
      ],
      [
        [75]
      ],
      [
        [76]
      ],
      [
        [77]
      ]
    ],
    "id": "580",
    "properties": {
      "name": "N. Mariana Is.",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [78]
      ],
      [
        [79]
      ],
      [
        [80]
      ]
    ],
    "id": "850",
    "properties": {
      "name": "U.S. Virgin Is.",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [81]
    ],
    "id": "316",
    "properties": {
      "name": "Guam",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [82]
    ],
    "id": "016",
    "properties": {
      "name": "American Samoa",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [83]
      ],
      [
        [84]
      ],
      [
        [85]
      ]
    ],
    "id": "630",
    "properties": {
      "name": "Puerto Rico",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": usaArcs,
    "id": "840",
    "properties": {
      "name": "United States of America",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [220]
      ],
      [
        [221]
      ]
    ],
    "id": "239",
    "properties": {
      "name": "S. Geo. and the Is.",
      continent: Continent.ANTARCTICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [222]
    ],
    "id": "086",
    "properties": {
      "name": "Br. Indian Ocean Ter.",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [223]
      ],
      [
        [224]
      ]
    ],
    "id": "654",
    "properties": {
      "name": "Saint Helena",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [225]
    ],
    "id": "612",
    "properties": {
      "name": "Pitcairn Is.",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [226]
    ],
    "id": "660",
    "properties": {
      "name": "Anguilla",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [227]
      ],
      [
        [228]
      ],
      [
        [229]
      ],
      [
        [230]
      ],
      [
        [231]
      ],
      [
        [232]
      ]
    ],
    "id": "238",
    "properties": {
      "name": "Falkland Is.",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [233]
      ],
      [
        [234]
      ],
      [
        [235]
      ]
    ],
    "id": "136",
    "properties": {
      "name": "Cayman Is.",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [236]
    ],
    "id": "060",
    "properties": {
      "name": "Bermuda",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [237]
      ],
      [
        [238]
      ],
      [
        [239]
      ]
    ],
    "id": "092",
    "properties": {
      "name": "British Virgin Is.",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [240]
      ],
      [
        [241]
      ],
      [
        [242]
      ]
    ],
    "id": "796",
    "properties": {
      "name": "Turks and Caicos Is.",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [243]
    ],
    "id": "500",
    "properties": {
      "name": "Montserrat",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [244]
    ],
    "id": "832",
    "properties": {
      "name": "Jersey",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [245]
    ],
    "id": "831",
    "properties": {
      "name": "Guernsey",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [246]
    ],
    "id": "833",
    "properties": {
      "name": "Isle of Man",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [247]
      ],
      [
        [248]
      ],
      [
        [249]
      ],
      [
        [250]
      ],
      [
        [251]
      ],
      [
        [252]
      ],
      [
        [253]
      ],
      [
        [254]
      ],
      [
        [255]
      ],
      [
        [256]
      ],
      [
        [257]
      ],
      [
        [258]
      ],
      [
        [259]
      ],
      [
        [260]
      ],
      [
        [261]
      ],
      [
        [262]
      ],
      [
        [263]
      ],
      [
        [264]
      ],
      [
        [265]
      ],
      [
        [266]
      ],
      [
        [267]
      ],
      [
        [268, 269]
      ],
      [
        [270]
      ]
    ],
    "id": "826",
    "properties": {
      "name": "United Kingdom",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [271, 272, 273, 274, 275],
        [276]
      ],
      [
        [277]
      ],
      [
        [278]
      ],
      [
        [279]
      ],
      [
        [280]
      ]
    ],
    "id": "784",
    "properties": {
      "name": "United Arab Emirates",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291]
      ],
      [
        [292]
      ]
    ],
    "id": "804",
    "properties": {
      "name": "Ukraine",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [293, 294, 295, 296, 297]
    ],
    "id": "800",
    "properties": {
      "name": "Uganda",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [298]
      ],
      [
        [-55, 299, 300, 301, 302]
      ]
    ],
    "id": "795",
    "properties": {
      "name": "Turkmenistan",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [303]
      ],
      [
        [304, 305, 306, 307, 308, 309, 310]
      ],
      [
        [311, 312, 313]
      ]
    ],
    "id": "792",
    "properties": {
      "name": "Turkey",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [314, 315, 316]
      ],
      [
        [317]
      ],
      [
        [318]
      ]
    ],
    "id": "788",
    "properties": {
      "name": "Tunisia",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [319]
      ],
      [
        [320]
      ]
    ],
    "id": "780",
    "properties": {
      "name": "Trinidad and Tobago",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [321]
      ],
      [
        [322]
      ],
      [
        [323]
      ]
    ],
    "id": "776",
    "properties": {
      "name": "Tonga",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [324, 325, 326, 327]
    ],
    "id": "768",
    "properties": {
      "name": "Togo",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [328]
      ],
      [
        [329, 330]
      ],
      [
        [331, 332]
      ]
    ],
    "id": "626",
    "properties": {
      "name": "Timor-Leste",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [333]
      ],
      [
        [334]
      ],
      [
        [335]
      ],
      [
        [336, 337, 338, 339, 340, 341]
      ],
      [
        [342]
      ],
      [
        [343]
      ],
      [
        [344]
      ],
      [
        [345]
      ],
      [
        [346]
      ],
      [
        [347]
      ]
    ],
    "id": "764",
    "properties": {
      "name": "Thailand",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [348]
      ],
      [
        [349]
      ],
      [
        [-8, 350, 351, 352, -294, 353, 354, 355, 356]
      ],
      [
        [357]
      ]
    ],
    "id": "834",
    "properties": {
      "name": "Tanzania",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-53, 358, 359, 360]
      ],
      [
        [-57]
      ],
      [
        [361]
      ]
    ],
    "id": "762",
    "properties": {
      "name": "Tajikistan",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [362]
      ],
      [
        [363]
      ]
    ],
    "id": "158",
    "properties": {
      "name": "Taiwan",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-310, 364, 365, 366, 367, 368]
    ],
    "id": "760",
    "properties": {
      "name": "Syria",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [369, 370, 371, 372, 373, 374]
    ],
    "id": "756",
    "properties": {
      "name": "Switzerland",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [375]
      ],
      [
        [376]
      ],
      [
        [377, 378, 379]
      ],
      [
        [380]
      ],
      [
        [381]
      ],
      [
        [382]
      ]
    ],
    "id": "752",
    "properties": {
      "name": "Sweden",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [383, 384]
    ],
    "id": "748",
    "properties": {
      "name": "eSwatini",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [385, 386, 387, 388]
    ],
    "id": "740",
    "properties": {
      "name": "Suriname",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-297, 389, 390, 391, 392, 393]
    ],
    "id": "728",
    "properties": {
      "name": "S. Sudan",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-392, 394, 395, 396, 397, 398, 399, 400]
    ],
    "id": "729",
    "properties": {
      "name": "Sudan",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [401]
      ],
      [
        [402]
      ],
      [
        [403]
      ]
    ],
    "id": "144",
    "properties": {
      "name": "Sri Lanka",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [404]
      ],
      [
        [405]
      ],
      [
        [406]
      ],
      [
        [407]
      ],
      [
        [408, 409, 410, 411, 412, 413]
      ],
      [
        [414]
      ],
      [
        [415]
      ],
      [
        [416]
      ],
      [
        [417]
      ],
      [
        [418]
      ],
      [
        [419]
      ],
      [
        [420]
      ]
    ],
    "id": "724",
    "properties": {
      "name": "Spain",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [421, 422]
      ],
      [
        [423]
      ],
      [
        [424]
      ],
      [
        [425]
      ],
      [
        [426]
      ],
      [
        [427]
      ],
      [
        [428]
      ],
      [
        [429]
      ],
      [
        [430]
      ],
      [
        [431]
      ],
      [
        [432]
      ]
    ],
    "id": "410",
    "properties": {
      "name": "South Korea",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-1, 433, -385, 434, 435, 436, 437],
        [438]
      ],
      [
        [439]
      ]
    ],
    "id": "710",
    "properties": {
      "name": "South Africa",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [440, 441, 442, 443]
    ],
    "id": "706",
    "properties": {
      "name": "Somalia",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-443, 444, 445, 446]
    ],
    "properties": {
      "name": "Somaliland",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [447]
      ],
      [
        [448]
      ],
      [
        [449]
      ],
      [
        [450]
      ],
      [
        [451]
      ],
      [
        [452]
      ],
      [
        [453]
      ],
      [
        [454]
      ],
      [
        [455]
      ],
      [
        [456]
      ],
      [
        [457]
      ],
      [
        [458]
      ],
      [
        [459]
      ],
      [
        [460]
      ],
      [
        [461]
      ],
      [
        [462]
      ],
      [
        [463]
      ],
      [
        [464]
      ],
      [
        [465]
      ],
      [
        [466]
      ],
      [
        [467]
      ]
    ],
    "id": "090",
    "properties": {
      "name": "Solomon Is.",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-289, 468, 469, 470, 471]
    ],
    "id": "703",
    "properties": {
      "name": "Slovakia",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [472, 473, 474, 475, 476]
    ],
    "id": "705",
    "properties": {
      "name": "Slovenia",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [477]
    ],
    "id": "702",
    "properties": {
      "name": "Singapore",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [478, 479, 480]
      ],
      [
        [481]
      ]
    ],
    "id": "694",
    "properties": {
      "name": "Sierra Leone",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [482]
    ],
    "id": "690",
    "properties": {
      "name": "Seychelles",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [483, 484, 485, 486, 487, 488, 489, 490]
    ],
    "id": "688",
    "properties": {
      "name": "Serbia",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [491, 492, 493, 494, 495, 496, 497]
    ],
    "id": "686",
    "properties": {
      "name": "Senegal",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [498]
      ],
      [
        [499]
      ],
      [
        [-12, 500, 501, 502, 503, 504, 505, 506, -274, 507]
      ],
      [
        [508]
      ]
    ],
    "id": "682",
    "properties": {
      "name": "Saudi Arabia",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [509]
      ],
      [
        [510]
      ]
    ],
    "id": "678",
    "properties": {
      "name": "São Tomé and Principe",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [511]
    ],
    "id": "674",
    "properties": {
      "name": "San Marino",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [512]
      ],
      [
        [513]
      ]
    ],
    "id": "882",
    "properties": {
      "name": "Samoa",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [514]
      ],
      [
        [515]
      ],
      [
        [516]
      ]
    ],
    "id": "670",
    "properties": {
      "name": "St. Vin. and Gren.",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [517]
    ],
    "id": "662",
    "properties": {
      "name": "Saint Lucia",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [518]
      ],
      [
        [519]
      ]
    ],
    "id": "659",
    "properties": {
      "name": "St. Kitts and Nevis",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-295, -353, 520, 521]
    ],
    "id": "646",
    "properties": {
      "name": "Rwanda",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": russiaArcs,
    "id": "643",
    "properties": {
      "name": "Russia",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-285, 640, 641, -491, 642, -287, 643]
    ],
    "id": "642",
    "properties": {
      "name": "Romania",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-506, 644]
    ],
    "id": "634",
    "properties": {
      "name": "Qatar",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [645]
      ],
      [
        [-413, 646]
      ],
      [
        [647]
      ],
      [
        [648]
      ],
      [
        [649]
      ],
      [
        [650]
      ],
      [
        [651]
      ],
      [
        [652]
      ],
      [
        [653]
      ]
    ],
    "id": "620",
    "properties": {
      "name": "Portugal",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-290, -472, 654, 655, 656, 657, 658, -637, 659, 660]
    ],
    "id": "616",
    "properties": {
      "name": "Poland",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [661]
      ],
      [
        [662]
      ],
      [
        [663]
      ],
      [
        [664]
      ],
      [
        [665]
      ],
      [
        [666]
      ],
      [
        [667]
      ],
      [
        [668]
      ],
      [
        [669]
      ],
      [
        [670]
      ],
      [
        [671]
      ],
      [
        [672]
      ],
      [
        [673]
      ],
      [
        [674]
      ],
      [
        [675]
      ],
      [
        [676]
      ],
      [
        [677]
      ],
      [
        [678]
      ],
      [
        [679]
      ],
      [
        [680]
      ],
      [
        [681]
      ],
      [
        [682]
      ],
      [
        [683]
      ],
      [
        [684]
      ],
      [
        [685]
      ],
      [
        [686]
      ],
      [
        [687]
      ],
      [
        [688]
      ],
      [
        [689]
      ],
      [
        [690]
      ],
      [
        [691]
      ],
      [
        [692]
      ],
      [
        [693]
      ],
      [
        [694]
      ],
      [
        [695]
      ],
      [
        [696]
      ],
      [
        [697]
      ],
      [
        [698]
      ],
      [
        [699]
      ],
      [
        [700]
      ],
      [
        [701]
      ],
      [
        [702]
      ],
      [
        [703]
      ],
      [
        [704]
      ],
      [
        [705]
      ],
      [
        [706]
      ],
      [
        [707]
      ],
      [
        [708]
      ]
    ],
    "id": "608",
    "properties": {
      "name": "Philippines",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [709, 710, 711, 712, 713, 714]
    ],
    "id": "604",
    "properties": {
      "name": "Peru",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [715, 716, 717]
    ],
    "id": "600",
    "properties": {
      "name": "Paraguay",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [718]
      ],
      [
        [719]
      ],
      [
        [720, 721]
      ],
      [
        [722]
      ],
      [
        [723]
      ],
      [
        [724]
      ],
      [
        [725]
      ],
      [
        [726]
      ],
      [
        [727]
      ],
      [
        [728]
      ],
      [
        [729]
      ],
      [
        [730]
      ],
      [
        [731]
      ],
      [
        [732]
      ],
      [
        [733]
      ],
      [
        [734]
      ],
      [
        [735]
      ],
      [
        [736]
      ],
      [
        [737]
      ],
      [
        [738]
      ],
      [
        [739]
      ],
      [
        [740]
      ],
      [
        [741]
      ],
      [
        [742]
      ],
      [
        [743]
      ],
      [
        [744]
      ]
    ],
    "id": "598",
    "properties": {
      "name": "Papua New Guinea",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [745, 746, 747, 748]
      ],
      [
        [749]
      ],
      [
        [750]
      ],
      [
        [751]
      ],
      [
        [752]
      ]
    ],
    "id": "591",
    "properties": {
      "name": "Panama",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [753]
      ],
      [
        [754]
      ]
    ],
    "id": "585",
    "properties": {
      "name": "Palau",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [755, 756, 757, 758, 759, 760]
    ],
    "id": "586",
    "properties": {
      "name": "Pakistan",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [761]
      ],
      [
        [-13, -508, -273, 762]
      ],
      [
        [-276, 763]
      ],
      [
        [-277]
      ]
    ],
    "id": "512",
    "properties": {
      "name": "Oman",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-378, 764, -554, 765]
      ],
      [
        [766]
      ],
      [
        [767]
      ],
      [
        [768]
      ],
      [
        [769]
      ],
      [
        [770]
      ],
      [
        [771]
      ],
      [
        [772]
      ],
      [
        [773]
      ],
      [
        [774]
      ],
      [
        [775]
      ],
      [
        [776]
      ],
      [
        [777]
      ],
      [
        [778]
      ],
      [
        [779]
      ],
      [
        [780]
      ],
      [
        [781]
      ],
      [
        [782]
      ],
      [
        [783]
      ],
      [
        [784]
      ],
      [
        [785]
      ],
      [
        [786]
      ],
      [
        [787]
      ],
      [
        [788]
      ],
      [
        [789]
      ],
      [
        [790]
      ],
      [
        [791]
      ],
      [
        [792]
      ],
      [
        [793]
      ],
      [
        [794]
      ],
      [
        [795]
      ],
      [
        [796]
      ]
    ],
    "id": "578",
    "properties": {
      "name": "Norway",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-422, 797, 798, -540, 799]
      ],
      [
        [800]
      ]
    ],
    "id": "408",
    "properties": {
      "name": "North Korea",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [801]
      ],
      [
        [802, 803, 804, 805, 806]
      ]
    ],
    "id": "566",
    "properties": {
      "name": "Nigeria",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-807, 807, 808, 809, 810, 811, 812]
    ],
    "id": "562",
    "properties": {
      "name": "Niger",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [813, 814, 815, 816]
    ],
    "id": "558",
    "properties": {
      "name": "Nicaragua",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [817]
      ],
      [
        [818]
      ],
      [
        [819]
      ],
      [
        [820]
      ],
      [
        [821]
      ],
      [
        [822]
      ],
      [
        [823]
      ],
      [
        [824]
      ],
      [
        [825]
      ],
      [
        [826]
      ],
      [
        [827]
      ],
      [
        [828]
      ],
      [
        [829]
      ]
    ],
    "id": "554",
    "properties": {
      "name": "New Zealand",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [830]
    ],
    "id": "570",
    "properties": {
      "name": "Niue",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [831]
    ],
    "id": "184",
    "properties": {
      "name": "Cook Is.",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [832, 833, 834]
      ],
      [
        [835, 836]
      ],
      [
        [837]
      ],
      [
        [838]
      ],
      [
        [839]
      ],
      [
        [840]
      ],
      [
        [841]
      ],
      [
        [842]
      ],
      [
        [843]
      ],
      [
        [844]
      ],
      [
        [845]
      ],
      [
        [846]
      ]
    ],
    "id": "528",
    "properties": {
      "name": "Netherlands",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [847]
    ],
    "id": "533",
    "properties": {
      "name": "Aruba",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [848]
    ],
    "id": "531",
    "properties": {
      "name": "Curaçao",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [849, 850]
    ],
    "id": "524",
    "properties": {
      "name": "Nepal",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [851]
    ],
    "id": "520",
    "properties": {
      "name": "Nauru",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-5, 852, -437, 853, 854]
    ],
    "id": "516",
    "properties": {
      "name": "Namibia",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-4, -10, 855, -356, 856, -435, -384, -434],
      [857],
      [858]
    ],
    "id": "508",
    "properties": {
      "name": "Mozambique",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [859, 860, 861]
    ],
    "id": "504",
    "properties": {
      "name": "Morocco",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [862, 863, 864, -861]
    ],
    "id": "732",
    "properties": {
      "name": "W. Sahara",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-487, 865, 866, 867, 868, 869]
    ],
    "id": "499",
    "properties": {
      "name": "Montenegro",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-542, 870]
    ],
    "id": "496",
    "properties": {
      "name": "Mongolia",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-286, -644]
    ],
    "id": "498",
    "properties": {
      "name": "Moldova",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [871, 872]
    ],
    "id": "492",
    "properties": {
      "name": "Monaco",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-167, 873, 874, 875, 876]
      ],
      [
        [877]
      ],
      [
        [878]
      ],
      [
        [879]
      ],
      [
        [880]
      ],
      [
        [881]
      ],
      [
        [882]
      ],
      [
        [883]
      ],
      [
        [884]
      ],
      [
        [885]
      ],
      [
        [886]
      ],
      [
        [887]
      ],
      [
        [888]
      ],
      [
        [889]
      ],
      [
        [890]
      ],
      [
        [891]
      ]
    ],
    "id": "484",
    "properties": {
      "name": "Mexico",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [892]
    ],
    "id": "480",
    "properties": {
      "name": "Mauritius",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [893]
      ],
      [
        [-498, 894, -864, 895, 896]
      ]
    ],
    "id": "478",
    "properties": {
      "name": "Mauritania",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [897]
      ],
      [
        [898]
      ]
    ],
    "id": "470",
    "properties": {
      "name": "Malta",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-492, -897, 899, -810, 900, 901, 902]
    ],
    "id": "466",
    "properties": {
      "name": "Mali",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [903]
      ],
      [
        [904]
      ]
    ],
    "id": "462",
    "properties": {
      "name": "Maldives",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-340, 905]
      ],
      [
        [906, 907, 908, 909, 910]
      ],
      [
        [911]
      ],
      [
        [912]
      ],
      [
        [913]
      ],
      [
        [914]
      ],
      [
        [915]
      ],
      [
        [916]
      ],
      [
        [917, 918]
      ]
    ],
    "id": "458",
    "properties": {
      "name": "Malaysia",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-859]
      ],
      [
        [-858]
      ],
      [
        [-9, -357, -856]
      ]
    ],
    "id": "454",
    "properties": {
      "name": "Malawi",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [919]
      ],
      [
        [920]
      ],
      [
        [921]
      ]
    ],
    "id": "450",
    "properties": {
      "name": "Madagascar",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-485, 922, 923, 924, 925]
    ],
    "id": "807",
    "properties": {
      "name": "Macedonia",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [926, 927, 928]
    ],
    "id": "442",
    "properties": {
      "name": "Luxembourg",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-639, 929]
      ],
      [
        [-636, 930, 931, 932, -660]
      ]
    ],
    "id": "440",
    "properties": {
      "name": "Lithuania",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-371, 933]
    ],
    "id": "438",
    "properties": {
      "name": "Liechtenstein",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-315, 934, 935, -397, 936, -812, 937]
    ],
    "id": "434",
    "properties": {
      "name": "Libya",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-479, 938, 939, 940]
    ],
    "id": "430",
    "properties": {
      "name": "Liberia",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-439]
    ],
    "id": "426",
    "properties": {
      "name": "Lesotho",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-368, 941, 942]
    ],
    "id": "422",
    "properties": {
      "name": "Lebanon",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-932, 943, 944, -550, 945]
    ],
    "id": "428",
    "properties": {
      "name": "Latvia",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-21, 946, -337, 947, 948]
    ],
    "id": "418",
    "properties": {
      "name": "Laos",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-52, 949, 950, -359],
      [-58],
      [-59],
      [-362]
    ],
    "id": "417",
    "properties": {
      "name": "Kyrgyzstan",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [951]
      ],
      [
        [-504, 952, 953]
      ]
    ],
    "id": "414",
    "properties": {
      "name": "Kuwait",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-486, -926, 954, -866]
    ],
    "properties": {
      "name": "Kosovo",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [955]
      ],
      [
        [956]
      ],
      [
        [957]
      ],
      [
        [958]
      ],
      [
        [959]
      ],
      [
        [960]
      ],
      [
        [961]
      ],
      [
        [962]
      ],
      [
        [963]
      ],
      [
        [964]
      ],
      [
        [965]
      ],
      [
        [966]
      ],
      [
        [967]
      ],
      [
        [968]
      ],
      [
        [969]
      ],
      [
        [970]
      ],
      [
        [971]
      ],
      [
        [972]
      ],
      [
        [973]
      ]
    ],
    "id": "296",
    "properties": {
      "name": "Kiribati",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [974]
      ],
      [
        [-298, -394, 975, -441, 976, -354]
      ]
    ],
    "id": "404",
    "properties": {
      "name": "Kenya",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [977]
      ],
      [
        [978]
      ],
      [
        [979]
      ],
      [
        [-56, -303, 980, -544, 981, -950]
      ]
    ],
    "id": "398",
    "properties": {
      "name": "Kazakhstan",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-366, 982, -502, 983, 984, 985, 986]
    ],
    "id": "400",
    "properties": {
      "name": "Jordan",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [987]
      ],
      [
        [988]
      ],
      [
        [989]
      ],
      [
        [990]
      ],
      [
        [991]
      ],
      [
        [992]
      ],
      [
        [993]
      ],
      [
        [994]
      ],
      [
        [995]
      ],
      [
        [996]
      ],
      [
        [997]
      ],
      [
        [998]
      ],
      [
        [999]
      ],
      [
        [1000]
      ],
      [
        [1001]
      ],
      [
        [1002]
      ],
      [
        [1003]
      ],
      [
        [1004]
      ],
      [
        [1005]
      ],
      [
        [1006]
      ],
      [
        [1007]
      ],
      [
        [1008]
      ],
      [
        [1009]
      ],
      [
        [1010]
      ],
      [
        [1011]
      ],
      [
        [1012]
      ],
      [
        [1013]
      ],
      [
        [1014]
      ],
      [
        [1015]
      ],
      [
        [1016]
      ],
      [
        [1017]
      ],
      [
        [1018]
      ],
      [
        [1019]
      ],
      [
        [1020]
      ]
    ],
    "id": "392",
    "properties": {
      "name": "Japan",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1021]
    ],
    "id": "388",
    "properties": {
      "name": "Jamaica",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-373, 1022, -475, 1023, 1024],
        [-37],
        [-512]
      ],
      [
        [1025]
      ],
      [
        [1026]
      ],
      [
        [1027]
      ],
      [
        [1028]
      ],
      [
        [1029]
      ],
      [
        [1030]
      ],
      [
        [1031]
      ]
    ],
    "id": "380",
    "properties": {
      "name": "Italy",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-367, -987, 1032, -985, 1033, 1034, 1035, 1036, -942]
    ],
    "id": "376",
    "properties": {
      "name": "Israel",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-1036, 1037, 1038]
      ],
      [
        [-986, -1033]
      ]
    ],
    "id": "275",
    "properties": {
      "name": "Palestine",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1039]
      ],
      [
        [-269, 1040]
      ]
    ],
    "id": "372",
    "properties": {
      "name": "Ireland",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-309, 1041, 1042, -953, -503, -983, -365]
    ],
    "id": "368",
    "properties": {
      "name": "Iraq",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1043]
      ],
      [
        [-301, 1044, -759, 1045, -1042, -308, 1046, 1047, 1048, 1049]
      ]
    ],
    "id": "364",
    "properties": {
      "name": "Iran",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1050]
      ],
      [
        [1051]
      ],
      [
        [1052]
      ],
      [
        [1053]
      ],
      [
        [1054]
      ],
      [
        [1055]
      ],
      [
        [1056]
      ],
      [
        [1057]
      ],
      [
        [1058]
      ],
      [
        [1059]
      ],
      [
        [1060]
      ],
      [
        [1061]
      ],
      [
        [1062]
      ],
      [
        [1063]
      ],
      [
        [1064]
      ],
      [
        [1065]
      ],
      [
        [1066]
      ],
      [
        [1067]
      ],
      [
        [1068]
      ],
      [
        [1069]
      ],
      [
        [1070]
      ],
      [
        [1071]
      ],
      [
        [1072]
      ],
      [
        [1073]
      ],
      [
        [1074]
      ],
      [
        [1075]
      ],
      [
        [1076]
      ],
      [
        [-907, 1077]
      ],
      [
        [1078]
      ],
      [
        [1079]
      ],
      [
        [1080]
      ],
      [
        [-330, 1081, -333, 1082]
      ],
      [
        [1083]
      ],
      [
        [1084]
      ],
      [
        [1085]
      ],
      [
        [-721, 1086]
      ],
      [
        [1087]
      ],
      [
        [1088]
      ],
      [
        [1089]
      ],
      [
        [1090]
      ],
      [
        [1091]
      ],
      [
        [1092]
      ],
      [
        [1093]
      ],
      [
        [1094]
      ],
      [
        [1095]
      ],
      [
        [1096]
      ],
      [
        [1097]
      ],
      [
        [1098]
      ],
      [
        [1099]
      ],
      [
        [1100]
      ],
      [
        [1101]
      ],
      [
        [1102]
      ],
      [
        [1103]
      ],
      [
        [1104]
      ],
      [
        [1105]
      ],
      [
        [1106]
      ],
      [
        [1107]
      ],
      [
        [1108]
      ],
      [
        [1109]
      ],
      [
        [1110]
      ],
      [
        [1111]
      ],
      [
        [1112]
      ],
      [
        [1113]
      ],
      [
        [1114]
      ],
      [
        [1115]
      ],
      [
        [1116]
      ],
      [
        [1117]
      ],
      [
        [1118]
      ],
      [
        [1119]
      ],
      [
        [1120]
      ],
      [
        [1121]
      ],
      [
        [1122]
      ],
      [
        [1123]
      ],
      [
        [1124]
      ],
      [
        [1125]
      ],
      [
        [1126]
      ],
      [
        [1127]
      ],
      [
        [1128]
      ],
      [
        [1129]
      ],
      [
        [1130]
      ],
      [
        [1131]
      ],
      [
        [1132]
      ],
      [
        [1133]
      ],
      [
        [1134]
      ],
      [
        [1135]
      ],
      [
        [1136]
      ],
      [
        [1137]
      ],
      [
        [1138]
      ],
      [
        [1139]
      ],
      [
        [1140]
      ],
      [
        [1141]
      ],
      [
        [1142]
      ],
      [
        [1143]
      ],
      [
        [1144]
      ],
      [
        [1145]
      ],
      [
        [1146]
      ],
      [
        [1147]
      ],
      [
        [1148]
      ],
      [
        [1149]
      ],
      [
        [1150]
      ],
      [
        [1151]
      ],
      [
        [1152]
      ],
      [
        [-918, 1153]
      ],
      [
        [1154]
      ],
      [
        [1155]
      ],
      [
        [1156]
      ],
      [
        [1157]
      ],
      [
        [1158]
      ],
      [
        [1159]
      ],
      [
        [1160]
      ],
      [
        [1161]
      ],
      [
        [1162]
      ],
      [
        [1163]
      ],
      [
        [1164]
      ],
      [
        [1165]
      ],
      [
        [1166]
      ],
      [
        [1167]
      ],
      [
        [1168]
      ],
      [
        [1169]
      ],
      [
        [1170]
      ],
      [
        [1171]
      ],
      [
        [1172]
      ],
      [
        [1173]
      ],
      [
        [1174]
      ],
      [
        [1175]
      ],
      [
        [1176]
      ],
      [
        [1177]
      ],
      [
        [1178]
      ],
      [
        [1179]
      ],
      [
        [1180]
      ],
      [
        [1181]
      ],
      [
        [1182]
      ],
      [
        [1183]
      ]
    ],
    "id": "360",
    "properties": {
      "name": "Indonesia",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-757, 1184, 1185, -850, 1186, 1187, 1188, 1189, 1190, 1191]
      ],
      [
        [1192]
      ],
      [
        [1193]
      ],
      [
        [1194]
      ],
      [
        [1195]
      ],
      [
        [1196]
      ],
      [
        [1197]
      ],
      [
        [1198]
      ],
      [
        [1199]
      ],
      [
        [1200]
      ],
      [
        [1201]
      ],
      [
        [1202]
      ],
      [
        [1203]
      ],
      [
        [1204]
      ]
    ],
    "id": "356",
    "properties": {
      "name": "India",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1205]
    ],
    "id": "352",
    "properties": {
      "name": "Iceland",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-288, -643, -490, 1206, -477, 1207, -469]
    ],
    "id": "348",
    "properties": {
      "name": "Hungary",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-817, 1208, 1209, 1210, 1211]
      ],
      [
        [1212]
      ],
      [
        [1213]
      ]
    ],
    "id": "340",
    "properties": {
      "name": "Honduras",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1214, 1215]
      ],
      [
        [1216]
      ],
      [
        [1217]
      ]
    ],
    "id": "332",
    "properties": {
      "name": "Haiti",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-33, 1218, -388, 1219]
    ],
    "id": "328",
    "properties": {
      "name": "Guyana",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-494, 1220, 1221]
      ],
      [
        [1222]
      ],
      [
        [1223]
      ],
      [
        [1224]
      ],
      [
        [1225]
      ],
      [
        [1226]
      ],
      [
        [1227]
      ]
    ],
    "id": "624",
    "properties": {
      "name": "Guinea-Bissau",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-481, 1228, -1221, -493, -903, 1229, -939]
    ],
    "id": "324",
    "properties": {
      "name": "Guinea",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-876, 1230, 1231, -1211, 1232, 1233]
    ],
    "id": "320",
    "properties": {
      "name": "Guatemala",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1234]
    ],
    "id": "308",
    "properties": {
      "name": "Grenada",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1235]
      ],
      [
        [1236]
      ],
      [
        [1237]
      ],
      [
        [1238]
      ],
      [
        [1239]
      ],
      [
        [1240]
      ],
      [
        [1241]
      ],
      [
        [1242]
      ],
      [
        [1243]
      ],
      [
        [1244]
      ],
      [
        [1245]
      ],
      [
        [1246]
      ],
      [
        [1247]
      ],
      [
        [1248]
      ],
      [
        [1249]
      ],
      [
        [1250]
      ],
      [
        [1251]
      ],
      [
        [1252]
      ],
      [
        [1253]
      ],
      [
        [1254]
      ],
      [
        [1255]
      ],
      [
        [1256]
      ],
      [
        [1257]
      ],
      [
        [1258]
      ],
      [
        [1259]
      ],
      [
        [1260]
      ],
      [
        [1261]
      ],
      [
        [1262]
      ],
      [
        [1263]
      ],
      [
        [1264]
      ],
      [
        [1265]
      ],
      [
        [1266]
      ],
      [
        [1267]
      ],
      [
        [1268]
      ],
      [
        [1269]
      ],
      [
        [1270]
      ],
      [
        [1271]
      ],
      [
        [1272]
      ],
      [
        [1273]
      ],
      [
        [-313, 1274, 1275, -924, 1276]
      ]
    ],
    "id": "300",
    "properties": {
      "name": "Greece",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-327, 1277, 1278, 1279, 1280, 1281]
    ],
    "id": "288",
    "properties": {
      "name": "Ghana",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-375, 1282, -927, 1283, -835, 1284, 1285, 1286, -656, 1287, 1288]
      ],
      [
        [1289]
      ],
      [
        [-658, 1290]
      ],
      [
        [1291]
      ],
      [
        [1292]
      ],
      [
        [1293]
      ]
    ],
    "id": "276",
    "properties": {
      "name": "Germany",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-305, 1294, -547, 1295, 1296]
    ],
    "id": "268",
    "properties": {
      "name": "Georgia",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-496, 1297]
    ],
    "id": "270",
    "properties": {
      "name": "Gambia",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1298, 1299, 1300, 1301]
    ],
    "id": "266",
    "properties": {
      "name": "Gabon",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1302]
      ],
      [
        [-374, -1025, 1303, -873, 1304, -411, 1305, -409, 1306, 1307, -928, -1283]
      ],
      [
        [1308]
      ],
      [
        [1309]
      ],
      [
        [1310]
      ],
      [
        [1311]
      ],
      [
        [1312]
      ],
      [
        [1313]
      ],
      [
        [1314]
      ],
      [
        [-386, 1315, 1316]
      ]
    ],
    "id": "250",
    "properties": {
      "name": "France",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1317]
      ],
      [
        [1318]
      ]
    ],
    "id": "666",
    "properties": {
      "name": "St. Pierre and Miquelon",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1319]
      ],
      [
        [1320]
      ]
    ],
    "id": "876",
    "properties": {
      "name": "Wallis and Futuna Is.",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1321, 1322]
    ],
    "id": "663",
    "properties": {
      "name": "St-Martin",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1323]
    ],
    "id": "652",
    "properties": {
      "name": "St-Barthélemy",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1324]
      ],
      [
        [1325]
      ],
      [
        [1326]
      ],
      [
        [1327]
      ],
      [
        [1328]
      ],
      [
        [1329]
      ],
      [
        [1330]
      ],
      [
        [1331]
      ],
      [
        [1332]
      ],
      [
        [1333]
      ],
      [
        [1334]
      ],
      [
        [1335]
      ],
      [
        [1336]
      ],
      [
        [1337]
      ],
      [
        [1338]
      ],
      [
        [1339]
      ],
      [
        [1340]
      ],
      [
        [1341]
      ],
      [
        [1342]
      ],
      [
        [1343]
      ],
      [
        [1344]
      ]
    ],
    "id": "258",
    "properties": {
      "name": "Fr. Polynesia",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1345]
      ],
      [
        [1346]
      ],
      [
        [1347]
      ],
      [
        [1348]
      ],
      [
        [1349]
      ],
      [
        [1350]
      ]
    ],
    "id": "540",
    "properties": {
      "name": "New Caledonia",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1351]
      ],
      [
        [1352]
      ],
      [
        [1353]
      ]
    ],
    "id": "260",
    "properties": {
      "name": "Fr. S. Antarctic Lands",
      continent: Continent.ANTARCTICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1354]
      ],
      [
        [1355]
      ],
      [
        [1356]
      ]
    ],
    "id": "248",
    "properties": {
      "name": "Åland",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-379, -766, -553, 1357]
      ],
      [
        [1358]
      ],
      [
        [1359]
      ],
      [
        [1360]
      ],
      [
        [1361]
      ],
      [
        [1362]
      ],
      [
        [1363]
      ],
      [
        [1364]
      ]
    ],
    "id": "246",
    "properties": {
      "name": "Finland",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1365]
      ],
      [
        [1366]
      ],
      [
        [1367]
      ],
      [
        [1368]
      ],
      [
        [1369]
      ],
      [
        [1370]
      ],
      [
        [1371]
      ],
      [
        [1372]
      ],
      [
        [1373]
      ],
      [
        [1374]
      ],
      [
        [1375]
      ],
      [
        [1376]
      ],
      [
        [1377]
      ],
      [
        [1378]
      ],
      [
        [1379]
      ],
      [
        [1380]
      ],
      [
        [1381]
      ],
      [
        [1382]
      ],
      [
        [1383]
      ],
      [
        [1384]
      ]
    ],
    "id": "242",
    "properties": {
      "name": "Fiji",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-393, -401, 1385, 1386, -445, -442, -976]
    ],
    "id": "231",
    "properties": {
      "name": "Ethiopia",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-945, 1387, -551]
      ],
      [
        [1388]
      ],
      [
        [1389]
      ],
      [
        [1390]
      ]
    ],
    "id": "233",
    "properties": {
      "name": "Estonia",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-400, 1391, 1392, -1386]
      ],
      [
        [1393]
      ],
      [
        [1394]
      ]
    ],
    "id": "232",
    "properties": {
      "name": "Eritrea",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1395]
      ],
      [
        [-1301, 1396, 1397]
      ]
    ],
    "id": "226",
    "properties": {
      "name": "Eq. Guinea",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-1210, 1398, -1233]
    ],
    "id": "222",
    "properties": {
      "name": "El Salvador",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-398, -936, 1399, -1038, -1035, 1400]
    ],
    "id": "818",
    "properties": {
      "name": "Egypt",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-714, 1401, 1402]
      ],
      [
        [1403]
      ],
      [
        [1404]
      ],
      [
        [1405]
      ],
      [
        [1406]
      ],
      [
        [1407]
      ],
      [
        [1408]
      ],
      [
        [1409]
      ],
      [
        [1410]
      ]
    ],
    "id": "218",
    "properties": {
      "name": "Ecuador",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-1215, 1411]
    ],
    "id": "214",
    "properties": {
      "name": "Dominican Rep."
      ,
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1412]
    ],
    "id": "212",
    "properties": {
      "name": "Dominica",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-446, -1387, -1393, 1413]
    ],
    "id": "262",
    "properties": {
      "name": "Djibouti",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1414]
      ],
      [
        [1415]
      ],
      [
        [1416]
      ],
      [
        [1417]
      ],
      [
        [1418]
      ],
      [
        [1419]
      ],
      [
        [1420]
      ],
      [
        [1421]
      ],
      [
        [1422]
      ],
      [
        [1423]
      ],
      [
        [1424]
      ],
      [
        [1425]
      ],
      [
        [1426]
      ],
      [
        [1427]
      ],
      [
        [1428]
      ],
      [
        [1429]
      ],
      [
        [1430]
      ]
    ],
    "id": "304",
    "properties": {
      "name": "Greenland",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1431]
      ],
      [
        [1432]
      ],
      [
        [1433]
      ],
      [
        [1434]
      ],
      [
        [1435]
      ]
    ],
    "id": "234",
    "properties": {
      "name": "Faeroe Is.",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1436]
      ],
      [
        [-1286, 1437]
      ],
      [
        [1438]
      ],
      [
        [1439]
      ],
      [
        [1440]
      ],
      [
        [1441]
      ],
      [
        [1442]
      ],
      [
        [1443]
      ],
      [
        [1444]
      ],
      [
        [1445]
      ],
      [
        [1446]
      ],
      [
        [1447]
      ]
    ],
    "id": "208",
    "properties": {
      "name": "Denmark",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-471, 1448, -1288, -655]
    ],
    "id": "203",
    "properties": {
      "name": "Czechia",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1449, 1450]
    ],
    "properties": {
      "name": "N. Cyprus",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-1450, 1451]
    ],
    "id": "196",
    "properties": {
      "name": "Cyprus",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1452]
      ],
      [
        [1453]
      ],
      [
        [1454]
      ],
      [
        [1455]
      ],
      [
        [1456]
      ],
      [
        [1457]
      ],
      [
        [1458]
      ]
    ],
    "id": "192",
    "properties": {
      "name": "Cuba",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-473, -1207, -489, 1459, 1460]
      ],
      [
        [1461]
      ],
      [
        [1462]
      ],
      [
        [1463]
      ],
      [
        [1464]
      ],
      [
        [1465]
      ],
      [
        [1466]
      ],
      [
        [1467]
      ],
      [
        [1468]
      ],
      [
        [1469]
      ],
      [
        [1470]
      ],
      [
        [1471]
      ],
      [
        [-869, 1472, 1473]
      ]
    ],
    "id": "191",
    "properties": {
      "name": "Croatia",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-1279, 1474]
      ],
      [
        [-902, 1475, -1281, 1476, -940, -1230]
      ]
    ],
    "id": "384",
    "properties": {
      "name": "Côte d'Ivoire",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-748, 1477, -815, 1478]
    ],
    "id": "188",
    "properties": {
      "name": "Costa Rica",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-7, 1479, 1480, 1481, 1482, 1483, -390, -296, -522, 1484, -351]
    ],
    "id": "180",
    "properties": {
      "name": "Dem. Rep. Congo",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-1299, 1485, 1486, -1483, 1487, 1488]
    ],
    "id": "178",
    "properties": {
      "name": "Congo",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1489]
      ],
      [
        [1490]
      ],
      [
        [1491]
      ]
    ],
    "id": "174",
    "properties": {
      "name": "Comoros",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-35, 1492, -715, -1403, 1493, -746, 1494]
      ],
      [
        [1495]
      ]
    ],
    "id": "170",
    "properties": {
      "name": "Colombia",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1496]
      ],
      [
        [1497]
      ],
      [
        [1498]
      ],
      [
        [1499]
      ],
      [
        [1500]
      ],
      [
        [1501]
      ],
      [
        [1502]
      ],
      [
        [1503]
      ],
      [
        [1504]
      ],
      [
        [1505]
      ],
      [
        [1506]
      ],
      [
        [-22, -949, 1507, -1189, 1508, -1187, -851, -1186, 1509, -761, 1510, -360, -951, -982, -543, -871, -541, -799, 1511, 1512, 1513, 1514, 1515]
      ],
      [
        [1516]
      ]
    ],
    "id": "156",
    "properties": {
      "name": "China",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-1515, 1517]
    ],
    "id": "446",
    "properties": {
      "name": "Macao",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-1513, 1518]
      ],
      [
        [1519]
      ],
      [
        [1520]
      ]
    ],
    "id": "344",
    "properties": {
      "name": "Hong Kong",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1521]
      ],
      [
        [1522]
      ],
      [
        [-712, 1523, 1524, 1525]
      ],
      [
        [1526, 1527]
      ],
      [
        [1528]
      ],
      [
        [1529]
      ],
      [
        [1530]
      ],
      [
        [1531]
      ],
      [
        [1532]
      ],
      [
        [1533]
      ],
      [
        [1534]
      ],
      [
        [1535]
      ],
      [
        [1536]
      ],
      [
        [1537]
      ],
      [
        [1538]
      ],
      [
        [1539]
      ],
      [
        [1540]
      ],
      [
        [1541]
      ],
      [
        [1542]
      ],
      [
        [1543]
      ],
      [
        [1544]
      ],
      [
        [1545]
      ],
      [
        [1546]
      ],
      [
        [1547]
      ],
      [
        [1548]
      ],
      [
        [1549]
      ],
      [
        [1550]
      ],
      [
        [1551]
      ],
      [
        [1552]
      ],
      [
        [1553]
      ],
      [
        [1554]
      ]
    ],
    "id": "152",
    "properties": {
      "name": "Chile",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-396, 1555, 1556, -803, -813, -937]
    ],
    "id": "148",
    "properties": {
      "name": "Chad",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-391, -1484, -1487, 1557, -1556, -395]
    ],
    "id": "140",
    "properties": {
      "name": "Central African Rep.",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1558]
      ],
      [
        [1559]
      ],
      [
        [1560]
      ],
      [
        [1561]
      ],
      [
        [1562]
      ],
      [
        [1563]
      ],
      [
        [1564]
      ],
      [
        [1565]
      ]
    ],
    "id": "132",
    "properties": {
      "name": "Cabo Verde",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": canadaArcs,
    "id": "124",
    "properties": {
      "name": "Canada",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-804, -1557, -1558, -1486, -1302, -1398, 1708]
    ],
    "id": "120",
    "properties": {
      "name": "Cameroon",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1709]
      ],
      [
        [1710]
      ],
      [
        [-20, 1711, -338, -947]
      ]
    ],
    "id": "116",
    "properties": {
      "name": "Cambodia",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-342, 1712, 1713, -1190, -1508, -948]
      ],
      [
        [1714]
      ],
      [
        [1715]
      ],
      [
        [1716]
      ],
      [
        [1717]
      ],
      [
        [1718]
      ],
      [
        [1719]
      ],
      [
        [1720]
      ],
      [
        [1721]
      ],
      [
        [1722]
      ],
      [
        [1723]
      ],
      [
        [1724]
      ],
      [
        [1725]
      ],
      [
        [1726]
      ],
      [
        [1727]
      ],
      [
        [1728]
      ],
      [
        [1729]
      ],
      [
        [1730]
      ],
      [
        [1731]
      ]
    ],
    "id": "104",
    "properties": {
      "name": "Myanmar",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-352, -1485, -521]
    ],
    "id": "108",
    "properties": {
      "name": "Burundi",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-328, -1282, -1476, -901, -809, 1732]
    ],
    "id": "854",
    "properties": {
      "name": "Burkina Faso",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-314, -1277, -923, -484, -642, 1733]
    ],
    "id": "100",
    "properties": {
      "name": "Bulgaria",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-910, 1734]
      ],
      [
        [-909, 1735]
      ]
    ],
    "id": "096",
    "properties": {
      "name": "Brunei",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-34, -1220, -387, -1317, 1736, -62, 1737, -716, 1738, -710, -1493]
      ],
      [
        [1739]
      ],
      [
        [1740]
      ],
      [
        [1741]
      ],
      [
        [1742]
      ],
      [
        [1743]
      ],
      [
        [1744]
      ],
      [
        [1745]
      ],
      [
        [1746]
      ],
      [
        [1747]
      ],
      [
        [1748]
      ],
      [
        [1749]
      ],
      [
        [1750]
      ],
      [
        [1751]
      ],
      [
        [1752]
      ],
      [
        [1753]
      ],
      [
        [1754]
      ]
    ],
    "id": "076",
    "properties": {
      "name": "Brazil",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-2, -438, -853]
    ],
    "id": "072",
    "properties": {
      "name": "Botswana",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-870, -1474, 1755, -1460, -488]
    ],
    "id": "070",
    "properties": {
      "name": "Bosnia and Herz.",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-711, -1739, -718, 1756, -1524]
    ],
    "id": "068",
    "properties": {
      "name": "Bolivia",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-1188, -1509]
    ],
    "id": "064",
    "properties": {
      "name": "Bhutan",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-325, -1733, -808, -806, 1757]
    ],
    "id": "204",
    "properties": {
      "name": "Benin",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-875, 1758, -1231]
      ],
      [
        [1759]
      ],
      [
        [1760]
      ]
    ],
    "id": "084",
    "properties": {
      "name": "Belize",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-833, -1284, -929, -1308, 1761, -836]
    ],
    "id": "056",
    "properties": {
      "name": "Belgium",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-291, -661, -933, -946, -549]
    ],
    "id": "112",
    "properties": {
      "name": "Belarus",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1762]
    ],
    "id": "052",
    "properties": {
      "name": "Barbados",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-1191, -1714, 1763]
      ],
      [
        [1764]
      ],
      [
        [1765]
      ],
      [
        [1766]
      ],
      [
        [1767]
      ],
      [
        [1768]
      ],
      [
        [1769]
      ]
    ],
    "id": "050",
    "properties": {
      "name": "Bangladesh",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1770]
    ],
    "id": "048",
    "properties": {
      "name": "Bahrain",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1771]
      ],
      [
        [1772]
      ],
      [
        [1773]
      ],
      [
        [1774]
      ],
      [
        [1775]
      ],
      [
        [1776]
      ],
      [
        [1777]
      ],
      [
        [1778]
      ],
      [
        [1779]
      ],
      [
        [1780]
      ],
      [
        [1781]
      ],
      [
        [1782]
      ],
      [
        [1783]
      ],
      [
        [1784]
      ],
      [
        [1785]
      ]
    ],
    "id": "044",
    "properties": {
      "name": "Bahamas",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-307, 1786, -1047]
      ],
      [
        [-1049, 1787, -1296, -546, 1788],
        [1789]
      ],
      [
        [1790]
      ]
    ],
    "id": "031",
    "properties": {
      "name": "Azerbaijan",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-370, -1289, -1449, -470, -1208, -476, -1023, -372, -934]
    ],
    "id": "040",
    "properties": {
      "name": "Austria",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1791]
      ],
      [
        [1792]
      ],
      [
        [1793]
      ],
      [
        [1794]
      ],
      [
        [1795]
      ],
      [
        [1796]
      ],
      [
        [1797]
      ],
      [
        [1798]
      ],
      [
        [1799]
      ],
      [
        [1800]
      ],
      [
        [1801]
      ],
      [
        [1802]
      ],
      [
        [1803]
      ],
      [
        [1804]
      ],
      [
        [1805]
      ],
      [
        [1806]
      ],
      [
        [1807]
      ],
      [
        [1808]
      ],
      [
        [1809]
      ],
      [
        [1810]
      ],
      [
        [1811]
      ],
      [
        [1812]
      ],
      [
        [1813]
      ],
      [
        [1814]
      ],
      [
        [1815]
      ],
      [
        [1816]
      ],
      [
        [1817]
      ],
      [
        [1818]
      ],
      [
        [1819]
      ],
      [
        [1820]
      ],
      [
        [1821]
      ],
      [
        [1822]
      ],
      [
        [1823]
      ],
      [
        [1824]
      ],
      [
        [1825]
      ],
      [
        [1826]
      ],
      [
        [1827]
      ],
      [
        [1828]
      ],
      [
        [1829]
      ],
      [
        [1830]
      ],
      [
        [1831]
      ],
      [
        [1832]
      ]
    ],
    "id": "036",
    "properties": {
      "name": "Australia",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1833]
      ],
      [
        [1834]
      ],
      [
        [1835]
      ]
    ],
    "properties": {
      "name": "Indian Ocean Ter.",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1836]
    ],
    "id": "334",
    "properties": {
      "name": "Heard I. and McDonald Is.",
      continent: Continent.ANTARCTICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1837]
    ],
    "id": "574",
    "properties": {
      "name": "Norfolk Island",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [1838]
    ],
    "id": "036",
    "properties": {
      "name": "Ashmore and Cartier Is.",
      continent: Continent.AUSTRALIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-306, -1297, -1788, -1048, -1787],
        [-1791]
      ],
      [
        [-1790]
      ]
    ],
    "id": "051",
    "properties": {
      "name": "Armenia",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-61, 1839, -1525, -1757, -717, -1738]
      ],
      [
        [-1527, 1840]
      ],
      [
        [1841]
      ],
      [
        [1842]
      ]
    ],
    "id": "032",
    "properties": {
      "name": "Argentina",
      continent: Continent.SOUTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [1843]
      ],
      [
        [1844]
      ]
    ],
    "id": "028",
    "properties": {
      "name": "Antigua and Barb.",
      continent: Continent.NORTH_AMERICA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": [
      [
        [-1482, 1845, -1488]
      ],
      [
        [-6, -855, 1846, -1480]
      ]
    ],
    "id": "024",
    "properties": {
      "name": "Angola",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-410, -1306]
    ],
    "id": "020",
    "properties": {
      "name": "Andorra",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-316, -938, -811, -900, -896, -863, -860, 1847]
    ],
    "id": "012",
    "properties": {
      "name": "Algeria",
      continent: Continent.AFRICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-867, -955, -925, -1276, 1848]
    ],
    "id": "008",
    "properties": {
      "name": "Albania",
      continent: Continent.EUROPE,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-54, -361, -1511, -760, -1045, -300]
    ],
    "id": "004",
    "properties": {
      "name": "Afghanistan",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-756, -1510, -1185]
    ],
    "properties": {
      "name": "Siachen Glacier",
      continent: Continent.ASIA,
    }
  },
  {
    "type": "MultiPolygon",
    "arcs": antarcticaArcs,
    "id": "010",
    "properties": {
      "name": "Antarctica",
      continent: Continent.ANTARCTICA,
    }
  },
  {
    "type": "Polygon",
    "arcs": [
      [-1322, 1958]
    ],
    "id": "534",
    "properties": {
      "name": "Sint Maarten",
      continent: Continent.NORTH_AMERICA,
    }
  }
]