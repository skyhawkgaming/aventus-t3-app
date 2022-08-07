import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsPersonCheckFill, BsCalendarEventFill } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';

export const UsersGrid = [
  { field: 'discordName',
    headerText: 'Discord Name',
    width: '135',
    textAlign: 'Center',
  },
  { field: 'osrsName',
    headerText: 'Osrs Username',
    width: '100',
    textAlign: 'Center',
  },
  { field: 'discordId',
    headerText: 'Discord id',
    width: '170',
    textAlign: 'Center',
  },
  { field: 'points',
    headerText: 'Points',
    width: '120',
    textAlign: 'Center' },

  { field: 'splits',
    headerText: 'Splits',
    width: '125',
    textAlign: 'Center' },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <RiDashboardFill />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
    ],
  },
];

export const dashInfo = [
  {
    icon: <BsPersonCheckFill />,
    amount: '62,400',
    percentage: '+4%',
    title: 'Total Points',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <FaCoins />,
    amount: '3,620M',
    percentage: '+23%',
    title: 'Total Splits',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <BsCalendarEventFill />,
    amount: 'Zulrah',
    percentage: '',
    title: 'Current Event',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const UsersData = [
  {
    discordid: '223842459346665473',
    discordname: '[Admin] Oen',
    osrsname: 'oenhuusen',
    points: 400,
    splits: 21000000,
  },
  {
    discordid: '366502634481254400',
    discordname: '[Recruiter] TearsOfWeezy',
    osrsname: 'TearsOfWeezy',
    points: 450,
    splits: 0,
  },
  {
    discordid: '374738974347886594',
    discordname: '[Recruiter] Tzidkiyahu',
    osrsname: 'Tzidkiyahu',
    points: 4100,
    splits: 265500000,
  },
  {
    discordid: '369807524506894338',
    discordname: '[T-Admin] Fritz',
    osrsname: 'sir fritzy',
    points: 0,
    splits: 0,
  },
  {
    discordid: '194524073273982977',
    discordname: 'chauman0819',
    osrsname: 'Chauman0819',
    points: 900,
    splits: 93000000,
  },
  {
    discordid: '194327102953226240',
    discordname: 'Limes_notBTW',
    osrsname: 'limes btw',
    points: 150,
    splits: 5000000,
  },
  {
    discordid: '134526831624716288',
    discordname: '[Ga]Yster',
    osrsname: 'Yster Bunny',
    points: 1100,
    splits: 12000000,
  },
  {
    discordid: '987030078401695815',
    discordname: 'WindyDays',
    osrsname: 'OPMC',
    points: 0,
    splits: 0,
  },
  {
    discordid: '136049877263056896',
    discordname: '[Mod] JCarrot',
    osrsname: 'JCarrot',
    points: 0,
    splits: 0,
  },
  {
    discordid: '303926478385709068',
    discordname: 'Th3Villager',
    osrsname: 'Th4Villager',
    points: 0,
    splits: 0,
  },
  {
    discordid: '264873380858036224',
    discordname: 'Dozer',
    osrsname: 'The Dyldozer',
    points: 0,
    splits: 0,
  },
  {
    discordid: '643472913936154693',
    discordname: 'Draeg0',
    osrsname: 'DRAEG0',
    points: 0,
    splits: 0,
  },
  {
    discordid: '120269943743709186',
    discordname: '[Mod] Franko',
    osrsname: 'rattattooey',
    points: 0,
    splits: 0,
  },
  {
    discordid: '456131067842265089',
    discordname: '[Recruiter] Tim',
    osrsname: 'Tis Tim',
    points: 500,
    splits: 0,
  },
  {
    discordid: '877988377599815681',
    discordname: 'wild clicks',
    osrsname: 'Wild Clicks',
    points: 1600,
    splits: 0,
  },
  {
    discordid: '334885275182432257',
    discordname: '[Recruiter] Lagodzacy',
    osrsname: 'lagodzacy',
    points: 200,
    splits: 0,
  },
  {
    discordid: '372140772608311297',
    discordname: 'KS Sn1per | SpoonMePlz',
    osrsname: 'SpoonMePlz',
    points: 1900,
    splits: 0,
  },
  {
    discordid: '304007049350742016',
    discordname: '[T-Admin] Tree',
    osrsname: 'TreeSZN',
    points: 100,
    splits: 0,
  },
  {
    discordid: '292771430087786496',
    discordname: 'rainbowcatyo',
    osrsname: 'Rainbowcatyo',
    points: 550,
    splits: 3000000,
  },
  {
    discordid: '95748968650125312',
    discordname: 'Handie / Handye',
    osrsname: 'Handye',
    points: 350,
    splits: 12000000,
  },
  {
    discordid: '340894902319841291',
    discordname: 'chickk',
    osrsname: 'chickk',
    points: 5150,
    splits: 16000000,
  },
  {
    discordid: '635584105433792512',
    discordname: 'Sourpatch',
    osrsname: 'Sourpatch',
    points: 1250,
    splits: 41000000,
  },
  {
    discordid: '553840415715885057',
    discordname: 'Buorin',
    osrsname: 'buorin',
    points: 9250,
    splits: 1028500000,
  },
  {
    discordid: '532309612255379459',
    discordname: 'BuiltToSpill',
    osrsname: 'BuiltToSpill',
    points: 100,
    splits: 0,
  },
  {
    discordid: '108208220044058624',
    discordname: 'toa930',
    osrsname: 'toa930',
    points: 200,
    splits: 0,
  },
  {
    discordid: '225682182180569088',
    discordname: 'I t I s',
    osrsname: 'I t I s',
    points: 7750,
    splits: 442000000,
  },
  {
    discordid: '696882095364112404',
    discordname: 'Shak',
    osrsname: 'shakiraships',
    points: 4650,
    splits: 3000000,
  },
  {
    discordid: '338677173646917632',
    discordname: '[Recruiter] Taint Slap',
    osrsname: 'Taint Slap',
    points: 500,
    splits: 63000000,
  },
  {
    discordid: '986329997818085396',
    discordname: 'Be Bone',
    osrsname: 'All a Bone',
    points: 2100,
    splits: 981000000,
  },
  {
    discordid: '143204294701613056',
    discordname: '[Mod] BlG_Moose',
    osrsname: 'BlG Moose',
    points: 650,
    splits: 96000000,
  },
  {
    discordid: '173918765807960064',
    discordname: 'DeluxeT',
    osrsname: 'DeluxeT',
    points: 700,
    splits: 0,
  },
  {
    discordid: '670679048178892803',
    discordname: 'Art show',
    osrsname: 'art show',
    points: 0,
    splits: 0,
  },
  {
    discordid: '348988019371540480',
    discordname: 'K1ng Th0r | 1ronK1ngTh0r_BTW',
    osrsname: 'K1ng Th0r',
    points: 0,
    splits: 0,
  },
  {
    discordid: '327706925754089472',
    discordname: 'Dustyroflman',
    osrsname: 'Dimed',
    points: 0,
    splits: 0,
  },
  {
    discordid: '539988035153035275',
    discordname: 'bigfnrocket',
    osrsname: 'bigfnrocket',
    points: 300,
    splits: 87000000,
  },
  {
    discordid: '142731965471260672',
    discordname: 'Pyro btw',
    osrsname: 'Pyro btw',
    points: 100,
    splits: 0,
  },
  {
    discordid: '812448040119304203',
    discordname: 'Adaptoh',
    osrsname: 'Adaptoh',
    points: 50,
    splits: 3000000,
  },
  {
    discordid: '506188289083179018',
    discordname: '[Recruiter] Harmo (Bi)',
    osrsname: 'Harmo',
    points: 2350,
    splits: 156500000,
  },
  {
    discordid: '365573558392324098',
    discordname: 'Give me 1 gp',
    osrsname: 'give me 1 gp',
    points: 1200,
    splits: 0,
  },
  {
    discordid: '127350906948812800',
    discordname: 'Hamston/LeadLogic',
    osrsname: 'LeadLogic',
    points: 500,
    splits: 0,
  },
  {
    discordid: '193093798971179008',
    discordname: 'CrazedAfro',
    osrsname: 'crazedafro',
    points: 400,
    splits: 0,
  },
  {
    discordid: '91249930517106688',
    discordname: 'Mineursoul',
    osrsname: 'mineursoul',
    points: 0,
    splits: 0,
  },
  {
    discordid: '286673071362932736',
    discordname: 'Kraken Beerz',
    osrsname: 'Kraken Beerz',
    points: 200,
    splits: 13000000,
  },
  {
    discordid: '293313589316550658',
    discordname: 'Benstjohn',
    osrsname: 'Benstjohn',
    points: 600,
    splits: 0,
  },
  {
    discordid: '136067681358053386',
    discordname: 'Cabbage Soup',
    osrsname: 'Cabbage Soup',
    points: 300,
    splits: 0,
  },
  {
    discordid: '204020794035011585',
    discordname: 'Mr KaL',
    osrsname: 'mr kal',
    points: 200,
    splits: 0,
  },
  {
    discordid: '338830572006670338',
    discordname: 'Ciuc',
    osrsname: 'Ciuc',
    points: 0,
    splits: 0,
  },
  {
    discordid: '696080096380846180',
    discordname: 'Dabsolutely',
    osrsname: 'Dabsolutely',
    points: 0,
    splits: 0,
  },
  {
    discordid: '280499062032302081',
    discordname: 'I-Iawk',
    osrsname: 'I Iawk',
    points: 0,
    splits: 0,
  },
  {
    discordid: '89891006735978496',
    discordname: 'Rainnos',
    osrsname: 'Rainnos',
    points: 500,
    splits: 0,
  },
  {
    discordid: '226026360320032768',
    discordname: 'Towelsauce',
    osrsname: 'rustytowels',
    points: 500,
    splits: 0,
  },
  {
    discordid: '183826315097407488',
    discordname: 'Fistyface',
    osrsname: 'fistyface',
    points: 750,
    splits: 0,
  },
  {
    discordid: '225332825283362826',
    discordname: 'WTFCANDY',
    osrsname: '409Clean',
    points: 0,
    splits: 0,
  },
  {
    discordid: '259819030494314496',
    discordname: 'dad kiss dad',
    osrsname: 'dad kiss dad',
    points: 0,
    splits: 0,
  },
  {
    discordid: '588850359972397115',
    discordname: 'FireFarts69',
    osrsname: 'firefarts69',
    points: 0,
    splits: 0,
  },
  {
    discordid: '698560983639261216',
    discordname: 'chau',
    osrsname: 'AltChau',
    points: 0,
    splits: 0,
  },
  {
    discordid: '227202808376459265',
    discordname: 'Dree Wizard',
    osrsname: 'dree wizard',
    points: 0,
    splits: 0,
  },
  {
    discordid: '588048999773372416',
    discordname: 'acd1230',
    osrsname: 'Acd1230',
    points: 250,
    splits: 31000000,
  },
  {
    discordid: '124597999379677184',
    discordname: 'broke nox',
    osrsname: 'Opgerookt',
    points: 400,
    splits: 0,
  },
  {
    discordid: '366821580027854848',
    discordname: 'Bakeddonut',
    osrsname: 'Bakeddonut',
    points: 50,
    splits: 4000000,
  },
  {
    discordid: '436564003980836896',
    discordname: 'Eier',
    osrsname: 'eier',
    points: 0,
    splits: 0,
  },
  {
    discordid: '422467441591975947',
    discordname: 'Year Of Iboy',
    osrsname: 'hi im swoozy',
    points: 0,
    splits: 0,
  },
  {
    discordid: '245671551481937920',
    discordname: 'fenty slides',
    osrsname: 'fenty slides',
    points: 500,
    splits: 146000000,
  },
  {
    discordid: '263001186653700097',
    discordname: 'Sir Gucci',
    osrsname: 's1r gucci',
    points: 50,
    splits: 3000000,
  },
  {
    discordid: '125651420304244736',
    discordname: 'Hallie',
    osrsname: 'Hallie1997',
    points: 100,
    splits: 0,
  },
  {
    discordid: '240731062857236480',
    discordname: 'War_x',
    osrsname: 'war x',
    points: 0,
    splits: 0,
  },
  {
    discordid: '164152755512934405',
    discordname: 'Indleberg',
    osrsname: 'Indleberg',
    points: 1850,
    splits: 0,
  },
  {
    discordid: '545449341356081162',
    discordname: 'Day',
    osrsname: 'S under',
    points: 0,
    splits: 0,
  },
  {
    discordid: '169199163639070721',
    discordname: 'Bradsys',
    osrsname: 'Bradsys',
    points: 0,
    splits: 0,
  },
  {
    discordid: '250861121689485323',
    discordname: 'Aunan (On-an)',
    osrsname: 'Aunan',
    points: 0,
    splits: 0,
  },
  {
    discordid: '132950122429415424',
    discordname: 'Swimcory',
    osrsname: 'swimcory2',
    points: 0,
    splits: 0,
  },
  {
    discordid: '600814707351486494',
    discordname: 'P Hat Patty',
    osrsname: 'P Hat Patty',
    points: 0,
    splits: 0,
  },
  {
    discordid: '179080842897784832',
    discordname: 'tirdburd',
    osrsname: 'tirdburd',
    points: 300,
    splits: 0,
  },
  {
    discordid: '692903505815666729',
    discordname: 'Gudmun',
    osrsname: 'gudmun',
    points: 0,
    splits: 0,
  },
  {
    discordid: '165140370487771136',
    discordname: 'Sp3eDIE',
    osrsname: 'sp3edie',
    points: 100,
    splits: 0,
  },
  {
    discordid: '141707683622289409',
    discordname: 'Spec Deck',
    osrsname: 'sp3c deck',
    points: 200,
    splits: 0,
  },
  {
    discordid: '676862018384560169',
    discordname: 'Jpatcho | IM Patcho',
    osrsname: 'IM Jpatcho',
    points: 0,
    splits: 0,
  },
  {
    discordid: '318219053934313472',
    discordname: 'oooooo73',
    osrsname: 'oooooo73',
    points: 0,
    splits: 0,
  },
  {
    discordid: '178989877570830337',
    discordname: 'B O S T O N',
    osrsname: 'B O S T O N',
    points: 200,
    splits: 0,
  },
  {
    discordid: '211306945292926986',
    discordname: 'Ille',
    osrsname: 'hilmersson',
    points: 0,
    splits: 0,
  },
  {
    discordid: '989946321689509939',
    discordname: 'WetDaddyRob',
    osrsname: 'wetdaddyrob',
    points: 100,
    splits: 0,
  },
  {
    discordid: '502305025859780617',
    discordname: 'FromSoftware',
    osrsname: 'FromSoftware',
    points: 200,
    splits: 0,
  },
  {
    discordid: '160571958155673601',
    discordname: 'Extenze',
    osrsname: 'not extenze',
    points: 50,
    splits: 3000000,
  },
  {
    discordid: '335834223611215878',
    discordname: 'Nursechilo',
    osrsname: 'NurseChilo',
    points: 300,
    splits: 0,
  },
  {
    discordid: '189988087483334656',
    discordname: 'Milky',
    osrsname: 'ImMilky',
    points: 0,
    splits: 0,
  },
  {
    discordid: '186123178203021312',
    discordname: 'Xarxantes',
    osrsname: 'xarxantes',
    points: 550,
    splits: 26000000,
  },
  {
    discordid: '261676820330446848',
    discordname: 'Qtlol',
    osrsname: 'Qtlol',
    points: 0,
    splits: 0,
  },
  {
    discordid: '161934147340730368',
    discordname: 'babajasco',
    osrsname: 'Babajasco',
    points: 0,
    splits: 0,
  },
  {
    discordid: '220381016148148224',
    discordname: 'Sweenbeann',
    osrsname: 'sweenbeann',
    points: 0,
    splits: 0,
  },
  {
    discordid: '149077206516105217',
    discordname: 'Aelin_wildfire',
    osrsname: 'aelinwh',
    points: 0,
    splits: 0,
  },
  {
    discordid: '370750717083779086',
    discordname: 'Reese',
    osrsname: 'reesedisco',
    points: 0,
    splits: 0,
  },
  {
    discordid: '367835068070101003',
    discordname: 'bakedbeagle',
    osrsname: 'Baked beagle',
    points: 500,
    splits: 0,
  },
  {
    discordid: '375486600911650816',
    discordname: 'CClockWork',
    osrsname: 'cclockwork',
    points: 0,
    splits: 0,
  },
  {
    discordid: '623729963673321472',
    discordname: 'EternityEndz',
    osrsname: 'eternityendz',
    points: 0,
    splits: 0,
  },
  {
    discordid: '327958659923443712',
    discordname: 'BoysRBuzzing',
    osrsname: 'BoysRBuzzing',
    points: 0,
    splits: 0,
  },
  {
    discordid: '80947475598290944',
    splits: 14000000,
    osrsname: 'Lunamoonrise',
    discordname: '[Mod] Luna',
    points: 150,
  },
  {
    discordid: '272121928276246528',
    splits: 37000000,
    osrsname: 'up s',
    discordname: 'Glizzy',
    points: 250,
  },
  {
    discordid: '103653967480766464',
    discordname: 'soulreaper',
    osrsname: 'S0ulreaper9',
    points: 700,
    splits: 0,
  },
  {
    discordid: '254010599095271424',
    discordname: 'YEAINTHEYEA',
    osrsname: 'YEAINTHEYEA',
    points: 0,
    splits: 0,
  },
  {
    discordid: '151126834979799040',
    discordname: 'Rose',
    osrsname: 'twimsty',
    points: 0,
    splits: 0,
  },
  {
    discordid: '263370607465463809',
    discordname: 'Robins Tits',
    osrsname: 'Robins Tits',
    points: 0,
    splits: 0,
  },
  {
    discordid: '737599935104548894',
    discordname: 'Iron zubzero',
    osrsname: 'Iron zubzero',
    points: 300,
    splits: 0,
  },
  {
    discordid: '592425088872087562',
    discordname: 'wba scott',
    osrsname: 'WBA Scott',
    points: 0,
    splits: 0,
  },
  {
    discordid: '584760091543339024',
    discordname: '420Bonds',
    osrsname: '420BONDS',
    points: 0,
    splits: 0,
  },
  {
    discordid: '435364151410556928',
    discordname: 'Budro Gosu',
    osrsname: 'budro gosu',
    points: 0,
    splits: 0,
  },
  {
    discordid: '493460515729702932',
    discordname: 'Nypson',
    osrsname: 'Nypsoni',
    points: 0,
    splits: 0,
  },
  {
    discordid: '176086736965861376',
    discordname: 'Sjotime',
    osrsname: 'Sjotime',
    points: 0,
    splits: 0,
  },
  {
    discordid: '882771682136297493',
    discordname: 'Zulrah Ape',
    osrsname: 'zulrah ape',
    points: 0,
    splits: 0,
  },
  {
    discordid: '809193766367395900',
    discordname: 'Holy Storms',
    osrsname: 'holy storms',
    points: 0,
    splits: 0,
  },
  {
    discordid: '947295161094901771',
    discordname: 'ManilaG',
    osrsname: 'RLTTZ',
    points: 0,
    splits: 0,
  },
  {
    discordid: '999772789441568788',
    discordname: 'Wanderer Dom',
    osrsname: 'Egob',
    points: 0,
    splits: 0,
  },
  {
    discordid: '358954967580803075',
    discordname: 'YeetusMcleetus',
    osrsname: 'Zenyte Polo',
    points: 0,
    splits: 0,
  },
  {
    discordid: '463855620500619284',
    discordname: 'Dr Spaceman',
    osrsname: 'spaceman md',
    points: 0,
    splits: 0,
  },
  {
    discordid: '396168659321487370',
    discordname: 'Slav',
    osrsname: 'I am Borat',
    points: 0,
    splits: 0,
  },
  {
    discordid: '466393895006240768',
    discordname: 'Jultan',
    osrsname: 'De Jultan',
    points: 0,
    splits: 0,
  },
  {
    discordid: '180526901847130112',
    discordname: 'dt duby',
    osrsname: 'dt duby',
    points: 100,
    splits: 0,
  },
  {
    discordid: '447450851477291009',
    discordname: 'JDukeNuke',
    osrsname: 'JDukeNuke',
    points: 0,
    splits: 0,
  },
  {
    discordid: '156779742362599424',
    discordname: 'jokmenen',
    osrsname: 'robin zorro',
    points: 0,
    splits: 0,
  },
  {
    discordid: '928668502720647168',
    discordname: 'SocialScaper',
    osrsname: 'socialscaper',
    points: 0,
    splits: 0,
  },
  {
    discordid: '759186689531969556',
    discordname: 'paranoia1988',
    osrsname: 'Paranoia1988',
    points: 0,
    splits: 0,
  },
  {
    discordid: '239575935928500224',
    discordname: 'Theos',
    osrsname: 'Azyrend',
    points: 0,
    splits: 0,
  },
  {
    discordid: '163790342049628160',
    discordname: 'Hawk',
    osrsname: 'im hawkward',
    points: 0,
    splits: 0,
  },
  {
    discordid: '169303802770358272',
    discordname: 'Gearset',
    osrsname: 'the zoldycks',
    points: 0,
    splits: 0,
  },
  {
    discordid: '321008409895895040',
    discordname: 'PesoProtagonist',
    osrsname: 'Mafukas',
    points: 150,
    splits: 15000000,
  },
  {
    discordid: '994651217819095083',
    discordname: 'ayegramz',
    osrsname: 'ayegramz',
    points: 0,
    splits: 0,
  },
  {
    discordid: '98293795895926784',
    discordname: 'Eshes',
    osrsname: 'NanahiraStan',
    points: 0,
    splits: 0,
  },
  {
    discordid: '198998145760231425',
    discordname: 'cee eye ay ay djent',
    osrsname: 'SCROMPY G',
    points: 0,
    splits: 0,
  },
  {
    discordid: '269613073466261506',
    discordname: 'PasteurizedToast',
    osrsname: 'Gold Akrisae',
    points: 0,
    splits: 0,
  },
  {
    discordid: '929411641513234462',
    discordname: 'Poet Klutz',
    osrsname: 'poet klutz',
    points: 0,
    splits: 0,
  },
  {
    discordid: '224705469816504322',
    discordname: 'Adrop8 (Aaron)',
    osrsname: 'Adrop8',
    points: 350,
    splits: 0,
  },
  {
    discordid: '478891366747996201',
    discordname: 'chrisellis333',
    osrsname: 'Valcan',
    points: 0,
    splits: 0,
  },
  {
    discordid: '575456333701316631',
    discordname: 'ChaysingSkye',
    osrsname: 'ChaysingSkye',
    points: 100,
    splits: 0,
  },
  {
    discordid: '256127389623517184',
    discordname: 'Bas (Stealth)',
    osrsname: 'Stealth GH',
    points: 0,
    splits: 0,
  },
  {
    discordid: '616409760551403520',
    discordname: 'lm kane',
    osrsname: 'Im Ka ne',
    points: 1500,
    splits: 0,
  },
  {
    discordid: '670085372151332876',
    discordname: 'Jo Pa1n',
    osrsname: 'Jo Pa1n',
    points: 550,
    splits: 0,
  },
  {
    discordid: '388859032015863810',
    discordname: 'shampKing',
    osrsname: 'so i am pro',
    points: 0,
    splits: 0,
  },
  {
    discordid: '144624615065387008',
    discordname: 'Ironbrakbtw',
    osrsname: 'brakvarosh',
    points: 0,
    splits: 0,
  },
  {
    discordid: '246440632564842496',
    discordname: 'Gonzo',
    osrsname: 'ex fe male',
    points: 0,
    splits: 0,
  },
  {
    discordid: '511272992488161302',
    discordname: '88Neighbors',
    osrsname: '99neighbors',
    points: 0,
    splits: 0,
  },
  {
    discordid: '308830900488241163',
    discordname: 'Grumpy Dumpy',
    osrsname: 'Grumpy Dumpy',
    points: 0,
    splits: 0,
  },
  {
    discordid: '448216563875577867',
    discordname: 'Em',
    osrsname: 'olaphyra',
    points: 0,
    splits: 0,
  },
  {
    discordid: '174478435828236288',
    discordname: 'Mjol nir',
    osrsname: 'Mjol nir',
    points: 0,
    splits: 0,
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];
