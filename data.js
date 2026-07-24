const PEOPLE=[
    {
        "name": "Jonas Gahr Støre", 
        "role": "Statsminister",
        "parti": "Arbeiderpartiet",
        "img": "https://www.regjeringen.no/globalassets/departementene/smk/statsministerjonasgahrstore/statsminister_jgs.jpg?preset=portrait"
    },
    {
        "name": "Jan Christian Vestre", 
        "role": "Helse- og omsorgsminister",
        "parti": "Arbeiderpartiet",
        "img": "https://www.regjeringen.no/contentassets/cd27d59a8b4c48478f3edab3e28ca21d/jan-christian-vestre_4-til-profilside.jpg?preset=portrait"
    },
    {
        "name": "Jens Stoltenberg", 
        "role": "Finansminister",
        "parti": "Arbeiderpartiet",
        "img": "https://www.regjeringen.no/contentassets/61fcfe475abf42ed9e5787d64cae63a4/jens_stoltenberg_4.jpg?preset=portrait"
    },
    {
        "name": "Espen Barth Eide", 
        "role": "Utenriksminister",
        "parti": "Arbeiderpartiet",
        "img": "https://www.regjeringen.no/contentassets/075514388b5343fc8103f4ae3517edb7/espen-barth-eide-1.jpg?preset=portrait"
    },
    {
        "name": "Jon-Ivar Nygård", 
        "role": "Samferdselsminister",
        "parti": "Arbeiderpartiet", 
        "img": "https://www.regjeringen.no/contentassets/f68b345195754caea22dd4945887f326/nygaard.jpg?preset=portrait"
    },
    {
        "name": "Terje Aasland", 
        "role": "Energiminister",
        "parti": "Arbeiderpartiet", 
        "img": "https://www.regjeringen.no/globalassets/departementene/ed/2024/bilder-av-politisk-ledelse/energiminister-terje-aasland-095a7471-endelig.jpg?preset=portrait"
    },
    {
        "name": "Lubna Jaffery", 
        "role": "Kultur- og likestillingsminister",
        "parti": "Arbeiderpartiet", 
        "img": "https://www.regjeringen.no/globalassets/departementene/kud/bilder/ansatte/politisk-ledelse/statsrad-lubna-jaffery/lubnajaffery-foto-iljachendel-165pxl.jpg?preset=portrait"
    },
    {
        "name": "Bjørnar Selnes Skjæran", 
        "role": "Kommunal- og distriktsminister",
        "parti": "Arbeiderpartiet", 
        "img": "https://www.regjeringen.no/contentassets/bb1fc88b55f04431ac6a0ec1c59eea3b/skjaeran.jpg?preset=portrait"
    },
    {
        "name": "Karianne Oldernes Tung", 
        "role": "Digitaliserings- og forvaltningsminister",
        "parti": "Arbeiderpartiet", 
        "img": "https://www.regjeringen.no/contentassets/40a369b5e6e74143915bd9ce8a88d427/tung-forside.jpg?preset=portrait"
    },
    {
        "name": "Cecilie Myrseth", 
        "role": "Næringsminister",
        "parti": "Arbeiderpartiet",
        "img": "https://www.regjeringen.no/contentassets/b98d37f60b9f426ebce958a1145b5dd7/myrseth-nettside.jpg?preset=portrait"
    },
    {
        "name": "Kari Nessa Nordtun", 
        "role": "Kunnskapsminister",
        "parti": "Arbeiderpartiet",
        "img": "https://www.regjeringen.no/contentassets/8e907b9f81b448f7bc8cd80a8d6de944/nessa-nordtun_1200.jpg?preset=portrait"
    },
    {
        "name": "Andreas Bjelland Eriksen", 
        "role": "Klima- og miljøminister",
        "parti": "Arbeiderpartiet",
        "img": "https://www.regjeringen.no/contentassets/d4ddda3f501d4168983b494f95d58ecd/foto-ntb-kommunikasjonstatsministerens-kontor-format-34.jpg?preset=portrait"
    },
    {
        "name": "Marianne Sivertsen Næss", 
        "role": "Fiskeri- og havminister",
        "parti": "Arbeiderpartiet", 
        "img": "https://www.regjeringen.no/globalassets/departementene/nfd/bilder/politisk-ledelse/portrett-nettside-fhmin.jpg?preset=portrait"
    },
    {
        "name": "Tore O. Sandvik", 
        "role": "Forsvarsminister",
        "parti": "Arbeiderpartiet",
        "img": "https://www.regjeringen.no/contentassets/79871c7d4096475fbc232564ebc78a9f/20250204th_009.jpg?preset=portrait"
    },
    {
        "name": "Astri Aas-Hansen", 
        "role": "Justis- og beredskapsminister",
        "parti": "Arbeiderpartiet", 
        "img": "https://www.regjeringen.no/globalassets/departementene/jd/bilder/politisk-ledelse/astri-aas-hansen-portrett-nar.jpg?preset=portrait"
    },
    {
        "name": "Kjersti Stenseng", 
        "role": "Arbeids- og inkluderingsminister",
        "parti": "Arbeiderpartiet",
        "img": "https://www.regjeringen.no/globalassets/departementene/aid/bilder/aid-bruk-disse-ny/arbeids-og-inkluderingsminister_kjersti-stenseng.jpg?preset=portrait&v=936094499"
    },
    {  
        "name": "Sigrun Aasland", 
        "role": "Forsknings- og høyere utdanningsminister",
        "parti": "Arbeiderpartiet", 
        "img": "https://www.regjeringen.no/contentassets/097ba4ab603e400685ae7550605c9002/aasland_profil_880.jpg?preset=portrait&v=%E2%88%92377694806"
    },
    {
        "name": "Åsmund Grøver Aukrust", 
        "role": "Utviklingsminister",
        "parti": "Arbeiderpartiet",
        "img": "https://www.regjeringen.no/contentassets/ecd93ba3263840af8f7718540cfe6153/20250204th_028.jpg?preset=portrait&v=551061816"
    },
    {
        "name": "Lene Vågslid", 
        "role": "Barne- og familieminister",
        "parti": "Arbeiderpartiet", 
        "img": "https://www.regjeringen.no/globalassets/departementene/bfd/bilder/ansatte/politisk-ledelse-lene-vagslid/lene-vagslid-02-b.jpg?preset=portrait&v=%E2%88%921672324133"
    },
    {
        "name": "Nils Kristen Sandtrøen", 
        "role": "Landbruks- og matminister",
        "parti": "Arbeiderpartiet", 
        "img": "https://www.regjeringen.no/globalassets/departementene/lmd/politikere/nils-kristen-sandtroen/20250204th_024.jpg?preset=portrait&v=%E2%88%92523193750"
    }
];
