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

export let bankCode = {
  "3": {
    "cName": "渣打銀行（香港）有限公司",
    "eName": "Standard Chartered Bank (Hong Kong) Limited"
  },
  "4": {
    "cName": "香港上海滙豐銀行有限公司",
    "eName": "The Hongkong and Shanghai Banking Corporation"
  },
  "5": {
    "cName": "東方匯理銀行",
    "eName": "Credit Agricole Corporate and Investment Bank"
  },
  "6": {
    "cName": "花旗銀行",
    "eName": "Citibank, N.A."
  },
  "7": {
    "cName": "摩根大通銀行",
    "eName": "JPMorgan Chase Bank, N.A."
  },
  "8": {
    "cName": "NatWest Markets Plc",
    "eName": "NatWest Markets Plc"
  },
  "9": {
    "cName": "中國建設銀行（亞洲）股份有限公司",
    "eName": "China Construction Bank (Asia) Corporation Limited"
  },
  "12": {
    "cName": "中國銀行（香港）有限公司",
    "eName": "Bank of China (Hong Kong) Limited"
  },
  "14": {
    "cName": "中國銀行（香港）有限公司",
    "eName": "Bank of China (Hong Kong) Limited"
  },
  "15": {
    "cName": "東亞銀行有限公司",
    "eName": "The Bank of East Asia, Limited"
  },
  "16": {
    "cName": "星展銀行（香港）有限公司",
    "eName": "DBS Bank (Hong Kong) Limited"
  },
  "18": {
    "cName": "中信銀行國際有限公司",
    "eName": "China CITIC Bank International Limited"
  },
  "19": {
    "cName": "中國銀行（香港）有限公司",
    "eName": "Bank of China (Hong Kong) Limited"
  },
  "20": {
    "cName": "永隆銀行有限公司",
    "eName": "CMB Wing Lung Bank Limited"
  },
  "22": {
    "cName": "華僑銀行",
    "eName": "Oversea-Chinese Banking Corporation Ltd."
  },
  "24": {
    "cName": "恒生銀行有限公司",
    "eName": "Hang Seng Bank Ltd."
  },
  "25": {
    "cName": "上海商業銀行有限公司",
    "eName": "Shanghai Commercial Bank Ltd."
  },
  "26": {
    "cName": "中國銀行（香港）有限公司",
    "eName": "Bank of China (Hong Kong) Limited"
  },
  "27": {
    "cName": "交通銀行股份有限公司",
    "eName": "Bank of Communications Co., Ltd."
  },
  "28": {
    "cName": "大衆銀行(香港)有限公司",
    "eName": "Public Bank (Hong Kong) Limited"
  },
  "29": {
    "cName": "中國工商銀行（亞洲）有限公司",
    "eName": "Industrial and Commercial Bank of China (Asia)"
  },
  "30": {
    "cName": "中國銀行（香港）有限公司",
    "eName": "Bank of China (Hong Kong) Limited"
  },
  "31": {
    "cName": "中國銀行（香港）有限公司",
    "eName": "Bank of China (Hong Kong) Limited"
  },
  "33": {
    "cName": "中國銀行（香港）有限公司",
    "eName": "Bank of China (Hong Kong) Limited"
  },
  "35": {
    "cName": "華僑永亨銀行有限公司",
    "eName": "OCBC Wing Hang Bank Limited"
  },
  "36": {
    "cName": "中國銀行（香港）有限公司",
    "eName": "Bank of China (Hong Kong) Limited"
  },
  "38": {
    "cName": "大有銀行有限公司",
    "eName": "Tai Yau Bank Ltd."
  },
  "39": {
    "cName": "集友銀行有限公司",
    "eName": "Chiyu Banking Corporation Ltd."
  },
  "40": {
    "cName": "大新銀行有限公司",
    "eName": "Dah Sing Bank, Ltd."
  },
  "41": {
    "cName": "創興銀行有限公司",
    "eName": "Chong Hing Bank Limited"
  },
  "43": {
    "cName": "南洋商業銀行有限公司",
    "eName": "Nanyang Commercial Bank, Ltd."
  },
  "44": {
    "cName": "華僑永亨銀行有限公司",
    "eName": "OCBC Wing Hang Bank Limited"
  },
  "45": {
    "cName": "UCO Bank",
    "eName": "UCO Bank"
  },
  "46": {
    "cName": "KEB Hana Bank",
    "eName": "KEB Hana Bank"
  },
  "47": {
    "cName": "三菱 UFJ 銀行",
    "eName": "MUFG Bank, Ltd."
  },
  "49": {
    "cName": "盤谷銀行",
    "eName": "Bangkok Bank Public Company Limited"
  },
  "50": {
    "cName": "印度海外銀行",
    "eName": "Indian Overseas Bank"
  },
  "51": {
    "cName": "中信銀行國際有限公司",
    "eName": "China CITIC Bank International Limited"
  },
  "54": {
    "cName": "德意志銀行",
    "eName": "Deutsche Bank AG"
  },
  "55": {
    "cName": "美國銀行",
    "eName": "Bank of America, N.A."
  },
  "56": {
    "cName": "法國巴黎銀行",
    "eName": "BNP Paribas"
  },
  "58": {
    "cName": "印度銀行",
    "eName": "Bank of India"
  },
  "60": {
    "cName": "巴基斯坦國民銀行",
    "eName": "National Bank of Pakistan"
  },
  "61": {
    "cName": "大生銀行有限公司",
    "eName": "Tai Sang Bank Limited"
  },
  "63": {
    "cName": "馬來亞銀行",
    "eName": "Malayan Banking Berhad (Maybank)"
  },
  "64": {
    "cName": "中國銀行（香港）有限公司",
    "eName": "Bank of China (Hong Kong) Limited"
  },
  "65": {
    "cName": "三井住友銀行",
    "eName": "Sumitomo Mitsui Banking Corporation"
  },
  "66": {
    "cName": "印尼國家銀行",
    "eName": "PT. Bank Negara Indonesia (Persero) Tbk."
  },
  "67": {
    "cName": "金融銀行有限公司",
    "eName": "BDO Unibank, Inc."
  },
  "70": {
    "cName": "中國銀行（香港）有限公司",
    "eName": "Bank of China (Hong Kong) Limited"
  },
  "71": {
    "cName": "大華銀行有限公司",
    "eName": "United Overseas Bank Ltd."
  },
  "72": {
    "cName": "中國工商銀行（亞洲）有限公司",
    "eName": "Industrial and Commercial Bank of China (Asia)"
  },
  "74": {
    "cName": "Barclays Bank Plc.",
    "eName": "Barclays Bank Plc."
  },
  "76": {
    "cName": "加拿大豐業銀行",
    "eName": "The Bank of Nova Scotia"
  },
  "80": {
    "cName": "加拿大皇家銀行",
    "eName": "Royal Bank of Canada"
  },
  "81": {
    "cName": "法國興業銀行",
    "eName": "Societe Generale"
  },
  "82": {
    "cName": "印度國家銀行",
    "eName": "State Bank of India"
  },
  "85": {
    "cName": "加拿大多倫多道明銀行",
    "eName": "The Toronto-Dominion Bank"
  },
  "86": {
    "cName": "滿地可銀行",
    "eName": "Bank of Montreal"
  },
  "92": {
    "cName": "加拿大帝國商業銀行",
    "eName": "Canadian Imperial Bank of Commerce"
  },
  "97": {
    "cName": "德國商業銀行",
    "eName": "Commerzbank AG"
  },
  "103": {
    "cName": "瑞士銀行",
    "eName": "UBS AG, Hong Kong"
  },
  "109": {
    "cName": "瑞穗銀行",
    "eName": "Mizuho Bank, Ltd., Hong Kong Branch"
  },
  "113": {
    "cName": "德國中央合作銀行",
    "eName": "DZ BANK AG Deutsche Zentral-"
  },
  "118": {
    "cName": "友利銀行",
    "eName": "Woori Bank"
  },
  "119": {
    "cName": "Philippine National Bank",
    "eName": "Philippine National Bank"
  },
  "128": {
    "cName": "富邦銀行(香港)有限公司",
    "eName": "Fubon Bank (Hong Kong) Limited"
  },
  "138": {
    "cName": "三菱 UFJ 信託銀行",
    "eName": "Mitsubishi UFJ Trust and Banking Corporation"
  },
  "139": {
    "cName": "紐約梅隆銀行有限公司",
    "eName": "The Bank of New York Mellon"
  },
  "145": {
    "cName": "ING Bank N.V.",
    "eName": "ING Bank N.V."
  },
  "147": {
    "cName": "西班牙對外銀行",
    "eName": "Banco Bilbao Vizcaya Argentaria, S.A."
  },
  "150": {
    "cName": "澳洲銀行",
    "eName": "National Australia Bank Limited"
  },
  "151": {
    "cName": "西太平洋銀行",
    "eName": "Westpac Banking Corporation"
  },
  "152": {
    "cName": "澳洲紐西蘭銀行集團",
    "eName": "Australia and New Zealand Banking Group Ltd."
  },
  "153": {
    "cName": "澳洲聯邦銀行",
    "eName": "Commonwealth Bank of Australia"
  },
  "161": {
    "cName": "Intesa Sanpaolo S.p.A.",
    "eName": "Intesa Sanpaolo S.p.A."
  },
  "164": {
    "cName": "裕信銀行",
    "eName": "UniCredit Bank AG"
  },
  "165": {
    "cName": "瑞典商業銀行",
    "eName": "Svenska Handelsbanken AB (publ)"
  },
  "170": {
    "cName": "千葉銀行",
    "eName": "The Chiba Bank Ltd."
  },
  "178": {
    "cName": "比利時聯合銀行",
    "eName": "KBC Bank N.V., Hong Kong Branch"
  },
  "180": {
    "cName": "富國銀行香港分行",
    "eName": "Wells Fargo Bank, N.A., Hong Kong Branch"
  },
  "183": {
    "cName": "荷蘭合作銀行",
    "eName": "Coöperatieve Rabobank U.A."
  },
  "185": {
    "cName": "星展銀行香港分行",
    "eName": "DBS Bank Ltd, Hong Kong Branch"
  },
  "186": {
    "cName": "靜岡銀行",
    "eName": "The Shizuoka Bank Ltd."
  },
  "188": {
    "cName": "八十二銀行",
    "eName": "The Hachijuni Bank, Ltd."
  },
  "198": {
    "cName": "華南商業銀行股份有限公司",
    "eName": "Hua Nan Commercial Bank, Ltd."
  },
  "199": {
    "cName": "滋賀銀行",
    "eName": "The Shiga Bank, Ltd."
  },
  "201": {
    "cName": "臺灣銀行股份有限公司",
    "eName": "Bank of Taiwan"
  },
  "202": {
    "cName": "The Chugoku Bank Limited",
    "eName": "The Chugoku Bank Limited"
  },
  "203": {
    "cName": "第一商業銀行股份有限公司",
    "eName": "First Commercial Bank"
  },
  "206": {
    "cName": "彰化商業銀行股份有限公司",
    "eName": "Chang Hwa Commercial Bank, Ltd."
  },
  "210": {
    "cName": "法國外貿銀行",
    "eName": "Natixis"
  },
  "214": {
    "cName": "中國工商銀行股份有限公司",
    "eName": "Industrial and Commercial Bank of China Limited"
  },
  "220": {
    "cName": "美國道富銀行",
    "eName": "State Street Bank and Trust Company"
  },
  "221": {
    "cName": "中國建設銀行股份有限公司",
    "eName": "China Construction Bank Corporation"
  },
  "222": {
    "cName": "中國農業銀行股份有限公司",
    "eName": "Agricultural Bank of China Limited"
  },
  "227": {
    "cName": "Erste Group Bank AG",
    "eName": "Erste Group Bank AG"
  },
  "229": {
    "cName": "中國信託商業銀行股份有限公司",
    "eName": "CTBC Bank Co., Ltd."
  },
  "230": {
    "cName": "臺灣中小企業銀行",
    "eName": "Taiwan Business Bank, Hong Kong Branch"
  },
  "233": {
    "cName": "Credit Suisse AG",
    "eName": "Credit Suisse AG"
  },
  "236": {
    "cName": "國泰世華商業銀行股份有限公司",
    "eName": "Cathay United Bank Company, Limited"
  },
  "237": {
    "cName": "瑞士盈豐銀行股份有限公司",
    "eName": "EFG Bank AG"
  },
  "238": {
    "cName": "招商銀行股份有限公司",
    "eName": "China Merchants Bank Co., Ltd."
  },
  "239": {
    "cName": "台北富邦商業銀行股份有限公司",
    "eName": "Taipei Fubon Commercial Bank Co., Ltd."
  },
  "241": {
    "cName": "永豐商業銀行股份有限公司",
    "eName": "Bank SinoPac"
  },
  "242": {
    "cName": "兆豐國際商業銀行",
    "eName": "Mega International Commercial Bank Co., Ltd."
  },
  "243": {
    "cName": "玉山商業銀行股份有限公司",
    "eName": "E.Sun Commercial Bank, Ltd."
  },
  "245": {
    "cName": "台新國際商業銀行股份有限公司",
    "eName": "Taishin International Bank Co., Ltd."
  },
  "248": {
    "cName": "豐隆銀行有限公司",
    "eName": "Hong Leong Bank Berhad"
  },
  "250": {
    "cName": "花旗銀行(香港)有限公司",
    "eName": "Citibank (Hong Kong) Limited"
  },
  "251": {
    "cName": "ICICI Bank Limited",
    "eName": "ICICI Bank Limited"
  },
  "254": {
    "cName": "Melli Bank plc",
    "eName": "Melli Bank plc"
  },
  "258": {
    "cName": "華美銀行",
    "eName": "East West Bank"
  },
  "260": {
    "cName": "逺東國際商業銀行股份有限公司",
    "eName": "Far Eastern International Bank"
  },
  "261": {
    "cName": "Axis Bank Limited",
    "eName": "Axis Bank Limited"
  },
  "262": {
    "cName": "Canara Bank",
    "eName": "Canara Bank"
  },
  "263": {
    "cName": "國泰銀行",
    "eName": "Cathay Bank"
  },
  "264": {
    "cName": "台灣土地銀行股份有限公司",
    "eName": "Land Bank of Taiwan Co., Ltd."
  },
  "265": {
    "cName": "合作金庫銀行",
    "eName": "Taiwan Cooperative Bank, Ltd."
  },
  "266": {
    "cName": "Punjab National Bank",
    "eName": "Punjab National Bank"
  },
  "267": {
    "cName": "西班牙桑坦德銀行有限公司",
    "eName": "Banco Santander S.A."
  },
  "268": {
    "cName": "Union Bank of India",
    "eName": "Union Bank of India"
  },
  "269": {
    "cName": "上海商業儲蓄銀行股份有限公司",
    "eName": "The Shanghai Commercial & Savings Bank, Ltd."
  },
  "271": {
    "cName": "Industrial Bank of Korea",
    "eName": "Industrial Bank of Korea"
  },
  "272": {
    "cName": "新加坡銀行有限公司",
    "eName": "Bank of Singapore Limited"
  },
  "273": {
    "cName": "Shinhan Bank",
    "eName": "Shinhan Bank"
  },
  "274": {
    "cName": "王道商業銀行股份有限公司",
    "eName": "O-Bank Co., Ltd."
  },
  "275": {
    "cName": "BNP Paribas Securities Services",
    "eName": "BNP Paribas Securities Services"
  },
  "276": {
    "cName": "國家開發銀行",
    "eName": "China Development Bank"
  },
  "277": {
    "cName": "First Abu Dhabi Bank PJSC",
    "eName": "First Abu Dhabi Bank PJSC"
  },
  "278": {
    "cName": "Bank J. Safra Sarasin Ltd",
    "eName": "Bank J. Safra Sarasin Ltd."
  },
  "307": {
    "cName": "ABN AMRO Bank N.V.",
    "eName": "ABN AMRO Bank N.V."
  },
  "308": {
    "cName": "HDFC Bank Limited",
    "eName": "HDFC Bank Limited"
  },
  "309": {
    "cName": "Union Bancaire Privee, UBP SA",
    "eName": "Union Bancaire Privee, UBP SA"
  },
  "316": {
    "cName": "Skandinaviska Enskilda Banken AB",
    "eName": "Skandinaviska Enskilda Banken AB"
  },
  "320": {
    "cName": "Bank Julius Baer & Co. Ltd.",
    "eName": "Bank Julius Baer & Co. Ltd."
  },
  "324": {
    "cName": "Credit Industriel et Commercial",
    "eName": "Credit Industriel et Commercial"
  },
  "337": {
    "cName": "臺灣新光商業銀行股份有限公司",
    "eName": "Taiwan Shin Kong Commercial Bank Co., Ltd."
  },
  "339": {
    "cName": "CA Indosuez (Switzerland) SA",
    "eName": "CA Indosuez (Switzerland) SA"
  },
  "341": {
    "cName": "ICBC Standard Bank PLC",
    "eName": "ICBC Standard Bank PLC"
  },
  "342": {
    "cName": "LGT Bank AG",
    "eName": "LGT Bank AG"
  },
  "344": {
    "cName": "Macquarie Bank Limited",
    "eName": "Macquarie Bank Limited"
  },
  "345": {
    "cName": "上海浦東發展銀行股份有限公司",
    "eName": "Shanghai Pudong Development Bank Co., Ltd."
  },
  "353": {
    "cName": "中國民生銀行股份有限公司",
    "eName": "China Minsheng Banking Corp., Ltd."
  },
  "357": {
    "cName": "Pictet & Cie (Europe) S.A.",
    "eName": "Pictet & Cie (Europe) S.A."
  },
  "360": {
    "cName": "NatWest Markets N.V.",
    "eName": "NatWest Markets N.V."
  },
  "368": {
    "cName": "中國光大銀行股份有限公司",
    "eName": "China Everbright Bank Co., Ltd."
  },
  "371": {
    "cName": "三井住友信託銀行",
    "eName": "Sumitomo Mitsui Trust Bank, Limited"
  },
  "374": {
    "cName": "CIMB Bank Berhad",
    "eName": "CIMB Bank Berhad"
  },
  "377": {
    "cName": "興業銀行股份有限公司",
    "eName": "Industrial Bank Co., Ltd."
  },
  "378": {
    "cName": "元大商業銀行股份有限公司",
    "eName": "Yuanta Commercial Bank Co., Ltd."
  },
  "379": {
    "cName": "Mashreq Bank - Public Shareholding Company",
    "eName": "Mashreq Bank - Public Shareholding Company"
  },
  "381": {
    "cName": "Kookmin Bank",
    "eName": "Kookmin Bank"
  },
  "382": {
    "cName": "交通銀行(香港)有限公司",
    "eName": "Bank of Communications (Hong Kong) Limited"
  },
  "383": {
    "cName": "浙商銀行股份有限公司",
    "eName": "China Zheshang Bank Co., Ltd."
  },
  "929": {
    "cName": "僑達國際有限公司",
    "eName": "K & R INTERNATIONAL LIMITED"
  },
  "930": {
    "cName": "易票聯支付技術有限公司",
    "eName": "ePayLinks Technology Co., Limited"
  },
  "931": {
    "cName": "WeChat Pay Hong Kong Limited",
    "eName": "WeChat Pay Hong Kong Limited"
  },
  "933": {
    "cName": "三三金融服務有限公司",
    "eName": "33 Financial Services Limited"
  },
  "934": {
    "cName": "UniCard Solution Limited",
    "eName": "UniCard Solution Limited"
  },
  "935": {
    "cName": "HKT Payment Limited",
    "eName": "HKT Payment Limited"
  },
  "947": {
    "cName": "TNG (Asia) Limited",
    "eName": "TNG (Asia) Limited"
  },
  "948": {
    "cName": "Alipay Financial Services (HK) Limited",
    "eName": "Alipay Financial Services (HK) Limited"
  },
  "949": {
    "cName": "八達通卡有限公司",
    "eName": "Octopus Cards Limited"
  },
  "952": {
    "cName": "Autotoll Limited",
    "eName": "Autotoll Limited"
  }
}