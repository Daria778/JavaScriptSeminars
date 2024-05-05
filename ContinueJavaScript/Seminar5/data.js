const tet = `[
    {
        "Cur_ID": 440,
        "Date": "2024-05-05T00:00:00",
        "Cur_Abbreviation": "AUD",
        "Cur_Scale": 1,
        "Cur_Name": "Австралийский доллар",
        "Cur_OfficialRate": 2.1131
    },
    {
        "Cur_ID": 510,
        "Date": "2024-05-05T00:00:00",
        "Cur_Abbreviation": "AMD",
        "Cur_Scale": 1000,
        "Cur_Name": "Армянских драмов",
        "Cur_OfficialRate": 8.3387
    },
    {
        "Cur_ID": 441,
        "Date": "2024-05-05T00:00:00",
        "Cur_Abbreviation": "BGN",
        "Cur_Scale": 1,
        "Cur_Name": "Болгарский лев",
        "Cur_OfficialRate": 1.7719
    },
    {
        "Cur_ID": 514,
        "Date": "2024-05-05T00:00:00",
        "Cur_Abbreviation": "BRL",
        "Cur_Scale": 10,
        "Cur_Name": "Бразильских реалов",
        "Cur_OfficialRate": 6.2291
    },
    {
        "Cur_ID": 449,
        "Date": "2024-05-05T00:00:00",
        "Cur_Abbreviation": "UAH",
        "Cur_Scale": 100,
        "Cur_Name": "Гривен",
        "Cur_OfficialRate": 8.2031
    },
    {
        "Cur_ID": 450,
        "Date": "2024-05-05T00:00:00",
        "Cur_Abbreviation": "DKK",
        "Cur_Scale": 10,
        "Cur_Name": "Датских крон",
        "Cur_OfficialRate": 4.6422
    },
    {
        "Cur_ID": 513,
        "Date": "2024-05-05T00:00:00",
        "Cur_Abbreviation": "AED",
        "Cur_Scale": 10,
        "Cur_Name": "Дирхамов ОАЭ",
        "Cur_OfficialRate": 8.8088
    }
]`;
const r = JSON.parse(tet);
console.log(r);