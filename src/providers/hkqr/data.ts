export let EMV = {
  0: {
    "id": "00",
    "name": "Payload Format Indicator",
    "format": "N",
    "length": "2",
    "present": "M"
  }, 1: {
    "id": "01",
    "name": "Point of Initiation Method",
    "format": "N",
    "length": "2",
    "present": "O"
  }, 26: {
    "id": "26",
    "name": "Merchant Account Information",
    "format": "ans",
    "length": "0",
    "present": "M"
  }, 52: {
    "id": "52",
    "name": "Merchant Category Code",
    "format": "N",
    "length": "4",
    "present": "M"
  }, 53: {
    "id": "53",
    "name": "Transaction Currency",
    "format": "N",
    "length": "3",
    "present": "M"
  }, 54: {
    "id": "54",
    "name": "Transaction Amount",
    "format": "ans",
    "length": "0",
    "present": "C"
  }, 55: {
    "id": "55",
    "name": "Tip or Convenience Indicator",
    "format": "N",
    "length": "2",
    "present": "O"
  }, 56: {
    "id": "56",
    "name": "Value of Convenience Fee Fixed",
    "format": "ans",
    "length": "0",
    "present": "C"
  }, 57: {
    "id": "57",
    "name": "Value of Convenience Fee Percentage",
    "format": "ans",
    "length": "0",
    "present": "C"
  }, 58: {
    "id": "58",
    "name": "Country Code",
    "format": "ans",
    "length": "2",
    "present": "M"
  }, 59: {
    "id": "59",
    "name": "Merchant Name",
    "format": "ans",
    "length": "0",
    "present": "M"
  }, 60: {
    "id": "60",
    "name": "Merchant City",
    "format": "ans",
    "length": "2",
    "present": "M"
  }, 61: {
    "id": "61",
    "name": "Postal Code",
    "format": "ans",
    "length": "up to 10",
    "present": "O"
  }, 62: {
    "id": "62",
    "name": "Additional Data Field Template",
    "format": "S",
    "length": "up to 99",
    "present": "O"
  }, 63: {
    "id": "63",
    "name": "CRC",
    "format": "S",
    "length": "4",
    "present": "M"
  }

}

export let bankCode = [
  [3,"渣打銀行（香港）有限公司","Standard Chartered Bank (Hong Kong) Limited"  ],
  [4,"香港上海滙豐銀行有限公司","The Hongkong and Shanghai Banking Corporation"  ],
  [5,"東方匯理銀行","Credit Agricole Corporate and Investment Bank"  ],
  [6,"花旗銀行","Citibank, N.A."  ],
  [7,"摩根大通銀行","JPMorgan Chase Bank, N.A."  ],
  [8,"NatWest Markets Plc","NatWest Markets Plc"  ],
  [9,"中國建設銀行（亞洲）股份有限公司","China Construction Bank (Asia) Corporation Limited"  ],
  [12,"中國銀行（香港）有限公司","Bank of China (Hong Kong) Limited"  ],
  [15,"東亞銀行有限公司","The Bank of East Asia, Limited"  ],
  [16,"星展銀行（香港）有限公司","DBS Bank (Hong Kong) Limited"  ],
  [18,"中信銀行國際有限公司","China CITIC Bank International Limited"  ],
  [20,"永隆銀行有限公司","CMB Wing Lung Bank Limited"  ],
  [22,"華僑銀行","Oversea-Chinese Banking Corporation Ltd."  ],
  [24,"恒生銀行有限公司","Hang Seng Bank Ltd."  ],
  [25,"上海商業銀行有限公司","Shanghai Commercial Bank Ltd."  ],
  [27,"交通銀行股份有限公司","Bank of Communications Co., Ltd."  ],
  [28,"大衆銀行(香港)有限公司","Public Bank (Hong Kong) Limited"  ],
  [29,"中國工商銀行（亞洲）有限公司","Industrial and Commercial Bank of China (Asia)"  ],
  [35,"華僑永亨銀行有限公司","OCBC Wing Hang Bank Limited"  ],
  [38,"大有銀行有限公司","Tai Yau Bank Ltd."  ],
  [39,"集友銀行有限公司","Chiyu Banking Corporation Ltd."  ],
  [40,"大新銀行有限公司","Dah Sing Bank, Ltd."  ],
  [41,"創興銀行有限公司","Chong Hing Bank Limited"  ],
  [43,"南洋商業銀行有限公司","Nanyang Commercial Bank, Ltd."  ],
  [44,"華僑永亨銀行有限公司","OCBC Wing Hang Bank Limited"  ],
  [45,"UCO Bank","UCO Bank"  ],
  [46,"KEB Hana Bank","KEB Hana Bank"  ],
  [47,"三菱 UFJ 銀行","MUFG Bank, Ltd."  ],
  [49,"盤谷銀行","Bangkok Bank Public Company Limited"  ],
  [50,"印度海外銀行","Indian Overseas Bank"  ],
  [51,"中信銀行國際有限公司","China CITIC Bank International Limited"  ],
  [54,"德意志銀行","Deutsche Bank AG"  ],
  [55,"美國銀行","Bank of America, N.A."  ],
  [56,"法國巴黎銀行","BNP Paribas"  ],
  [58,"印度銀行","Bank of India"  ],
  [60,"巴基斯坦國民銀行","National Bank of Pakistan"  ],
  [61,"大生銀行有限公司","Tai Sang Bank Limited"  ],
  [63,"馬來亞銀行","Malayan Banking Berhad (Maybank)"  ],
  [65,"三井住友銀行","Sumitomo Mitsui Banking Corporation"  ],
  [66,"印尼國家銀行","PT. Bank Negara Indonesia (Persero) Tbk."  ],
  [67,"金融銀行有限公司","BDO Unibank, Inc."  ],
  [71,"大華銀行有限公司","United Overseas Bank Ltd."  ],
  [72,"中國工商銀行（亞洲）有限公司","Industrial and Commercial Bank of China (Asia)"  ],
  [74,"Barclays Bank Plc.","Barclays Bank Plc."  ],
  [76,"加拿大豐業銀行","The Bank of Nova Scotia"  ],
  [80,"加拿大皇家銀行","Royal Bank of Canada"  ],
  [81,"法國興業銀行","Societe Generale"  ],
  [82,"印度國家銀行","State Bank of India"  ],
  [85,"加拿大多倫多道明銀行","The Toronto-Dominion Bank"  ],
  [86,"滿地可銀行","Bank of Montreal"  ],
  [92,"加拿大帝國商業銀行","Canadian Imperial Bank of Commerce"  ],
  [97,"德國商業銀行","Commerzbank AG"  ],
  [103,"瑞士銀行","UBS AG, Hong Kong"  ],
  [109,"瑞穗銀行","Mizuho Bank, Ltd., Hong Kong Branch"  ],
  [113,"德國中央合作銀行","DZ BANK AG Deutsche Zentral-"  ],
  [118,"友利銀行","Woori Bank"  ],
  [119,"Philippine National Bank","Philippine National Bank"  ],
  [128,"富邦銀行(香港)有限公司","Fubon Bank (Hong Kong) Limited"  ],
  [138,"三菱 UFJ 信託銀行","Mitsubishi UFJ Trust and Banking Corporation"  ],
  [139,"紐約梅隆銀行有限公司","The Bank of New York Mellon"  ],
  [145,"ING Bank N.V.","ING Bank N.V."  ],
  [147,"西班牙對外銀行","Banco Bilbao Vizcaya Argentaria, S.A."  ],
  [150,"澳洲銀行","National Australia Bank Limited"  ],
  [151,"西太平洋銀行","Westpac Banking Corporation"  ],
  [152,"澳洲紐西蘭銀行集團","Australia and New Zealand Banking Group Ltd."  ],
  [153,"澳洲聯邦銀行","Commonwealth Bank of Australia"  ],
  [161,"Intesa Sanpaolo S.p.A.","Intesa Sanpaolo S.p.A."  ],
  [164,"裕信銀行","UniCredit Bank AG"  ],
  [165,"瑞典商業銀行","Svenska Handelsbanken AB (publ)"  ],
  [170,"千葉銀行","The Chiba Bank Ltd."  ],
  [178,"比利時聯合銀行","KBC Bank N.V., Hong Kong Branch"  ],
  [180,"富國銀行香港分行","Wells Fargo Bank, N.A., Hong Kong Branch"  ],
  [183,"荷蘭合作銀行","Coöperatieve Rabobank U.A."  ],
  [185,"星展銀行香港分行","DBS Bank Ltd, Hong Kong Branch"  ],
  [186,"靜岡銀行","The Shizuoka Bank Ltd."  ],
  [188,"八十二銀行","The Hachijuni Bank, Ltd."  ],
  [198,"華南商業銀行股份有限公司","Hua Nan Commercial Bank, Ltd."  ],
  [199,"滋賀銀行","The Shiga Bank, Ltd."  ],
  [201,"臺灣銀行股份有限公司","Bank of Taiwan"  ],
  [202,"The Chugoku Bank Limited","The Chugoku Bank Limited"  ],
  [203,"第一商業銀行股份有限公司","First Commercial Bank"  ],
  [206,"彰化商業銀行股份有限公司","Chang Hwa Commercial Bank, Ltd."  ],
  [210,"法國外貿銀行","Natixis"  ],
  [214,"中國工商銀行股份有限公司","Industrial and Commercial Bank of China Limited"  ],
  [220,"美國道富銀行","State Street Bank and Trust Company"  ],
  [221,"中國建設銀行股份有限公司","China Construction Bank Corporation"  ],
  [222,"中國農業銀行股份有限公司","Agricultural Bank of China Limited"  ],
  [227,"Erste Group Bank AG","Erste Group Bank AG"  ],
  [229,"中國信託商業銀行股份有限公司","CTBC Bank Co., Ltd."  ],
  [230,"臺灣中小企業銀行","Taiwan Business Bank, Hong Kong Branch"  ],
  [233,"Credit Suisse AG","Credit Suisse AG"  ],
  [236,"國泰世華商業銀行股份有限公司","Cathay United Bank Company, Limited"  ],
  [237,"瑞士盈豐銀行股份有限公司","EFG Bank AG"  ],
  [238,"招商銀行股份有限公司","China Merchants Bank Co., Ltd."  ],
  [239,"台北富邦商業銀行股份有限公司","Taipei Fubon Commercial Bank Co., Ltd."  ],
  [241,"永豐商業銀行股份有限公司","Bank SinoPac"  ],
  [242,"兆豐國際商業銀行","Mega International Commercial Bank Co., Ltd."  ],
  [243,"玉山商業銀行股份有限公司","E.Sun Commercial Bank, Ltd."  ],
  [245,"台新國際商業銀行股份有限公司","Taishin International Bank Co., Ltd."  ],
  [248,"豐隆銀行有限公司","Hong Leong Bank Berhad"  ],
  [250,"花旗銀行(香港)有限公司","Citibank (Hong Kong) Limited"  ],
  [251,"ICICI Bank Limited","ICICI Bank Limited"  ],
  [254,"Melli Bank plc","Melli Bank plc"  ],
  [258,"華美銀行","East West Bank"  ],
  [260,"逺東國際商業銀行股份有限公司","Far Eastern International Bank"  ],
  [261,"Axis Bank Limited","Axis Bank Limited"  ],
  [262,"Canara Bank","Canara Bank"  ],
  [263,"國泰銀行","Cathay Bank"  ],
  [264,"台灣土地銀行股份有限公司","Land Bank of Taiwan Co., Ltd."  ],
  [265,"合作金庫銀行","Taiwan Cooperative Bank, Ltd."  ],
  [266,"Punjab National Bank","Punjab National Bank"  ],
  [267,"西班牙桑坦德銀行有限公司","Banco Santander S.A."  ],
  [268,"Union Bank of India","Union Bank of India"  ],
  [269,"上海商業儲蓄銀行股份有限公司","The Shanghai Commercial & Savings Bank, Ltd."  ],
  [271,"Industrial Bank of Korea","Industrial Bank of Korea"  ],
  [272,"新加坡銀行有限公司","Bank of Singapore Limited"  ],
  [273,"Shinhan Bank","Shinhan Bank"  ],
  [274,"王道商業銀行股份有限公司","O-Bank Co., Ltd."  ],
  [275,"BNP Paribas Securities Services","BNP Paribas Securities Services"  ],
  [276,"國家開發銀行","China Development Bank"  ],
  [277,"First Abu Dhabi Bank PJSC","First Abu Dhabi Bank PJSC"  ],
  [278,"Bank J. Safra Sarasin Ltd","Bank J. Safra Sarasin Ltd."  ],
  [307,"ABN AMRO Bank N.V.","ABN AMRO Bank N.V."  ],
  [308,"HDFC Bank Limited","HDFC Bank Limited"  ],
  [309,"Union Bancaire Privee, UBP SA","Union Bancaire Privee, UBP SA"  ],
  [316,"Skandinaviska Enskilda Banken AB","Skandinaviska Enskilda Banken AB"  ],
  [320,"Bank Julius Baer & Co. Ltd.","Bank Julius Baer & Co. Ltd."  ],
  [324,"Credit Industriel et Commercial","Credit Industriel et Commercial"  ],
  [337,"臺灣新光商業銀行股份有限公司","Taiwan Shin Kong Commercial Bank Co., Ltd."  ],
  [339,"CA Indosuez (Switzerland) SA","CA Indosuez (Switzerland) SA"  ],
  [341,"ICBC Standard Bank PLC","ICBC Standard Bank PLC"  ],
  [342,"LGT Bank AG","LGT Bank AG"  ],
  [344,"Macquarie Bank Limited","Macquarie Bank Limited"  ],
  [345,"上海浦東發展銀行股份有限公司","Shanghai Pudong Development Bank Co., Ltd."  ],
  [353,"中國民生銀行股份有限公司","China Minsheng Banking Corp., Ltd."  ],
  [357,"Pictet & Cie (Europe) S.A.","Pictet & Cie (Europe) S.A."  ],
  [360,"NatWest Markets N.V.","NatWest Markets N.V."  ],
  [368,"中國光大銀行股份有限公司","China Everbright Bank Co., Ltd."  ],
  [371,"三井住友信託銀行","Sumitomo Mitsui Trust Bank, Limited"  ],
  [374,"CIMB Bank Berhad","CIMB Bank Berhad"  ],
  [377,"興業銀行股份有限公司","Industrial Bank Co., Ltd."  ],
  [378,"元大商業銀行股份有限公司","Yuanta Commercial Bank Co., Ltd."  ],
  [379,"Mashreq Bank - Public Shareholding Company","Mashreq Bank - Public Shareholding Company"  ],
  [381,"Kookmin Bank","Kookmin Bank"  ],
  [382,"交通銀行(香港)有限公司","Bank of Communications (Hong Kong) Limited"  ],
  [383,"浙商銀行股份有限公司","China Zheshang Bank Co., Ltd."  ],
  [929,"僑達國際有限公司","K & R INTERNATIONAL LIMITED"  ],
  [930,"易票聯支付技術有限公司","ePayLinks Technology Co., Limited"  ],
  [931,"WeChat Pay Hong Kong Limited","WeChat Pay Hong Kong Limited"  ],
  [933,"三三金融服務有限公司","33 Financial Services Limited"  ],
  [934,"UniCard Solution Limited","UniCard Solution Limited"  ],
  [935,"HKT Payment Limited","HKT Payment Limited"  ],
  [947,"TNG (Asia) Limited","TNG (Asia) Limited"  ],
  [948,"Alipay Financial Services (HK) Limited","Alipay Financial Services (HK) Limited"  ],
  [949,"八達通卡有限公司","Octopus Cards Limited"  ],
  [952,"Autotoll Limited","Autotoll Limited"  ]
]