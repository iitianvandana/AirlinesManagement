const airportArray = [
  {
    "city": "Atlanta",
    "airport": "Hartsfield–Jackson Atlanta International Airport",
    "code": "ATL",
    "country": "United States"
  },
  {
    "city": "Beijing",
    "airport": "Beijing Capital International Airport",
    "code": "PEK",
    "country": "China"
  },
  {
    "city": "Dubai",
    "airport": "Dubai International Airport",
    "code": "DXB",
    "country": "United Arab Emirates"
  },
  {
    "city": "Los Angeles",
    "airport": "Los Angeles International Airport",
    "code": "LAX",
    "country": "United States"
  },
  {
    "city": "Chicago",
    "airport": "O'Hare International Airport",
    "code": "ORD",
    "country": "United States"
  },
  {
    "city": "London",
    "airport": "Heathrow Airport",
    "code": "LHR",
    "country": "United Kingdom"
  },
  {
    "city": "Tokyo",
    "airport": "Haneda Airport",
    "code": "HND",
    "country": "Japan"
  },
  {
    "city": "Hong Kong",
    "airport": "Hong Kong International Airport",
    "code": "HKG",
    "country": "Hong Kong"
  },
  {
    "city": "Shanghai",
    "airport": "Shanghai Pudong International Airport",
    "code": "PVG",
    "country": "China"
  },
  {
    "city": "Paris",
    "airport": "Charles de Gaulle International Airport",
    "code": "CDG",
    "country": "France"
  },
  {
    "city": "Amsterdam",
    "airport": "Amsterdam Airport Schiphol",
    "code": "AMS",
    "country": "Netherlands"
  },
  {
    "city": "Dallas",
    "airport": "Dallas-Fort Worth International Airport",
    "code": "DFW",
    "country": "United States"
  },
  {
    "city": "Guangzhou",
    "airport": "Guangzhou Baiyun International Airport",
    "code": "CAN",
    "country": "China"
  },
  {
    "city": "Frankfurt",
    "airport": "Frankfurt am Main International Airport",
    "code": "FRA",
    "country": "Germany"
  },
  {
    "city": "Istanbul",
    "airport": "Istanbul Atatürk Airport",
    "code": "IST",
    "country": "Turkey"
  },
  {
    "city": "Delhi",
    "airport": "Indira Gandhi International Airport",
    "code": "DEL",
    "country": "India"
  },
  {
    "city": "Jakarta",
    "airport": "Soekarno-Hatta International Airport",
    "code": "CGK",
    "country": "Indonesia"
  },
  {
    "city": "Singapore",
    "airport": "Singapore Changi Airport",
    "code": "SIN",
    "country": "Singapore"
  },
  {
    "city": "Seoul",
    "airport": "Incheon International Airport",
    "code": "ICN",
    "country": "South Korea"
  },
  {
    "city": "Denver",
    "airport": "Denver International Airport",
    "code": "DEN",
    "country": "United States"
  },
  {
    "city": "Bangkok",
    "airport": "Suvarnabhumi Airport",
    "code": "BKK",
    "country": "Thailand"
  },
  {
    "city": "New York",
    "airport": "John F. Kennedy International Airport",
    "code": "JFK",
    "country": "United States"
  },
  {
    "city": "Kuala Lumpur",
    "airport": "Kuala Lumpur International Airport",
    "code": "KUL",
    "country": "Malaysia"
  },
  {
    "city": "San Francisco",
    "airport": "San Francisco International Airport",
    "code": "SFO",
    "country": "United States"
  },
  {
    "city": "Madrid",
    "airport": "Adolfo Suárez Madrid–Barajas Airport",
    "code": "MAD",
    "country": "Spain"
  },
  {
    "city": "Chengdu",
    "airport": "Chengdu Shuangliu International Airport",
    "code": "CTU",
    "country": "China"
  },
  {
    "city": "Las Vegas",
    "airport": "McCarran International Airport",
    "code": "LAS",
    "country": "United States"
  },
  {
    "city": "Barcelona",
    "airport": "Barcelona–El Prat Airport",
    "code": "BCN",
    "country": "Spain"
  },
  {
    "city": "Mumbai",
    "airport": "Chhatrapati Shivaji International Airport",
    "code": "BOM",
    "country": "India"
  },
  {
    "city": "Toronto",
    "airport": "Toronto Pearson International Airport",
    "code": "YYZ",
    "country": "Canada"
  },
  {
    "city": "Seattle",
    "airport": "Seattle–Tacoma International Airport",
    "code": "SEA",
    "country": "United States"
  },
  {
    "city": "Charlotte",
    "airport": "Charlotte Douglas International Airport",
    "code": "CLT",
    "country": "United States"
  },
  {
    "city": "London",
    "airport": "Gatwick Airport",
    "code": "LGW",
    "country": "United Kingdom"
  },
  {
    "city": "Shenzhen",
    "airport": "Shenzhen Bao'an International Airport",
    "code": "SZX",
    "country": "China"
  },
  {
    "city": "Taipei",
    "airport": "Taiwan Taoyuan International Airport",
    "code": "TPE",
    "country": "Taiwan"
  },
  {
    "city": "Mexico City",
    "airport": "Mexico City International Airport",
    "code": "MEX",
    "country": "Mexico"
  },
  {
    "city": "Kunming",
    "airport": "Kunming Changshui International Airport",
    "code": "KMG",
    "country": "China"
  },
  {
    "city": "Munich",
    "airport": "Munich Airport",
    "code": "MUC",
    "country": "Germany"
  },
  {
    "city": "Orlando",
    "airport": "Orlando International Airport",
    "code": "MCO",
    "country": "United States"
  },
  {
    "city": "Miami",
    "airport": "Miami International Airport",
    "code": "MIA",
    "country": "United States"
  },
  {
    "city": "Phoenix",
    "airport": "Phoenix Sky Harbor International Airport",
    "code": "PHX",
    "country": "United States"
  },
  {
    "city": "Sydney",
    "airport": "Sydney Airport",
    "code": "SYD",
    "country": "Australia"
  },
  {
    "city": "Newark",
    "airport": "Newark Liberty International Airport",
    "code": "EWR",
    "country": "United States"
  },
  {
    "city": "Manila",
    "airport": "Ninoy Aquino International Airport",
    "code": "MNL",
    "country": "Philippines"
  },
  {
    "city": "Shanghai",
    "airport": "Shanghai Hongqiao International Airport",
    "code": "SHA",
    "country": "China"
  },
  {
    "city": "Xi'an",
    "airport": "Xi'an Xianyang International Airport",
    "code": "XIY",
    "country": "China"
  },
  {
    "city": "Rome",
    "airport": "Leonardo da Vinci–Fiumicino Airport",
    "code": "FCO",
    "country": "Italy"
  },
  {
    "city": "Houston",
    "airport": "George Bush Intercontinental Houston Airport",
    "code": "IAH",
    "country": "United States"
  },
  {
    "city": "Tokyo",
    "airport": "Narita International Airport",
    "code": "NRT",
    "country": "Japan"
  },
  {
    "city": "Moscow",
    "airport": "Sheremetyevo International Airport",
    "code": "SVO",
    "country": "Russia"
  },
  {
    "city": "Chongqing",
    "airport": "Chongqing Jiangbei International Airport",
    "code": "CKG",
    "country": "China"
  },
  {
    "city": "Bangkok",
    "airport": "Don Mueang International Airport",
    "code": "DMK",
    "country": "Thailand"
  },
  {
    "city": "Minneapolis",
    "airport": "Minneapolis-St Paul International/Wold-Chamberlain Airport",
    "code": "MSP",
    "country": "United States"
  },
  {
    "city": "Sao Paulo",
    "airport": "São Paulo–Guarulhos International Airport",
    "code": "GRU",
    "country": "Brazil"
  },
  {
    "city": "Boston",
    "airport": "Logan International Airport",
    "code": "BOS",
    "country": "United States"
  },
  {
    "city": "Ho Chi Minh City",
    "airport": "Tan Son Nhat International Airport",
    "code": "SGN",
    "country": "Vietnam"
  },
  {
    "city": "Doha",
    "airport": "Hamad International Airport",
    "code": "DOH",
    "country": "Qatar"
  },
  {
    "city": "Hangzhou",
    "airport": "Hangzhou Xiaoshan International Airport",
    "code": "HGH",
    "country": "China"
  },
  {
    "city": "Detroit",
    "airport": "Detroit Metropolitan Wayne County Airport",
    "code": "DTW",
    "country": "United States"
  },
  {
    "city": "Jeddah",
    "airport": "King Abdulaziz International Airport",
    "code": "JED",
    "country": "Saudi Arabia"
  },
  {
    "city": "Melbourne",
    "airport": "Melbourne Airport",
    "code": "MEL",
    "country": "Australia"
  },
  {
    "city": "Fort Lauderdale",
    "airport": "Fort Lauderdale Hollywood International Airport",
    "code": "FLL",
    "country": "United States"
  },
  {
    "city": "Orlando",
    "airport": "Orlando Executive Airport",
    "code": "ORL",
    "country": "United States"
  },
  {
    "city": "Istanbul",
    "airport": "Sabiha Gökçen International Airport",
    "code": "SAW",
    "country": "Turkey"
  },
  {
    "city": "Bogota",
    "airport": "El Dorado International Airport",
    "code": "BOG",
    "country": "Colombia"
  },
  {
    "city": "Moscow",
    "airport": "Moscow Domodedovo Airport",
    "code": "DME",
    "country": "Russia"
  },
  {
    "city": "Cheju",
    "airport": "Jeju International Airport",
    "code": "CJU",
    "country": "South Korea"
  },
  {
    "city": "New York",
    "airport": "LaGuardia Airport",
    "code": "LGA",
    "country": "United States"
  },
  {
    "city": "Philadelphia",
    "airport": "Philadelphia International Airport",
    "code": "PHL",
    "country": "United States"
  },
  {
    "city": "Dublin",
    "airport": "Dublin Airport",
    "code": "DUB",
    "country": "Ireland"
  },
  {
    "city": "Zurich",
    "airport": "Zürich Airport",
    "code": "ZRH",
    "country": "Switzerland"
  },
  {
    "city": "Copenhagen",
    "airport": "Copenhagen Airport",
    "code": "CPH",
    "country": "Denmark"
  },
  {
    "city": "Osaka",
    "airport": "Kansai International Airport",
    "code": "KIX",
    "country": "Japan"
  },
  {
    "city": "Palma de Mallorca",
    "airport": "Palma De Mallorca Airport",
    "code": "PMI",
    "country": "Spain"
  },
  {
    "city": "Manchester",
    "airport": "Manchester Airport",
    "code": "MAN",
    "country": "United Kingdom"
  },
  {
    "city": "Oslo",
    "airport": "Oslo Airport, Gardermoen",
    "code": "OSL",
    "country": "Norway"
  },
  {
    "city": "Lisbon",
    "airport": "Lisbon Portela Airport",
    "code": "LIS",
    "country": "Portugal"
  },
  {
    "city": "Stockholm",
    "airport": "Stockholm Arlanda Airport",
    "code": "ARN",
    "country": "Sweden"
  },
  {
    "city": "Baltimore",
    "airport": "Baltimore/Washington International Thurgood Marshall Airport",
    "code": "BWI",
    "country": "United States"
  },
  {
    "city": "Antalya",
    "airport": "Antalya Airport",
    "code": "AYT",
    "country": "Turkey"
  },
  {
    "city": "London",
    "airport": "London Stansted Airport",
    "code": "STN",
    "country": "United Kingdom"
  },
  {
    "city": "Nanjing",
    "airport": "Nanjing Lukou International Airport",
    "code": "NKG",
    "country": "China"
  },
  {
    "city": "Seoul",
    "airport": "Gimpo International Airport",
    "code": "GMP",
    "country": "South Korea"
  },
  {
    "city": "Bangalore",
    "airport": "Kempegowda International Airport",
    "code": "BLR",
    "country": "India"
  },
  {
    "city": "Riyadh",
    "airport": "King Khaled International Airport",
    "code": "RUH",
    "country": "Saudi Arabia"
  },
  {
    "city": "Brussels",
    "airport": "Brussels Airport",
    "code": "BRU",
    "country": "Belgium"
  },
  {
    "city": "Duesseldorf",
    "airport": "Düsseldorf International Airport",
    "code": "DUS",
    "country": "Germany"
  },
  {
    "city": "Xiamen",
    "airport": "Xiamen Gaoqi International Airport",
    "code": "XMN",
    "country": "China"
  },
  {
    "city": "Vienna",
    "airport": "Vienna International Airport",
    "code": "VIE",
    "country": "Austria"
  },
  {
    "city": "Zhengzhou",
    "airport": "Zhengzhou Xinzheng International Airport",
    "code": "CGO",
    "country": "China"
  },
  {
    "city": "Salt Lake City",
    "airport": "Salt Lake City International Airport",
    "code": "SLC",
    "country": "United States"
  },
  {
    "city": "Vancouver",
    "airport": "Vancouver International Airport",
    "code": "YVR",
    "country": "Canada"
  },
  {
    "city": "Washington",
    "airport": "Ronald Reagan Washington National Airport",
    "code": "DCA",
    "country": "United States"
  },
  {
    "city": "Changcha",
    "airport": "Changsha Huanghua International Airport",
    "code": "CSX",
    "country": "China"
  },
  {
    "city": "Abu Dhabi",
    "airport": "Abu Dhabi International Airport",
    "code": "AUH",
    "country": "United Arab Emirates"
  },
  {
    "city": "Cancun",
    "airport": "Cancún International Airport",
    "code": "CUN",
    "country": "Mexico"
  },
  {
    "city": "Fukuoka",
    "airport": "Fukuoka Airport",
    "code": "FUK",
    "country": "Japan"
  },
  {
    "city": "Qingdao",
    "airport": "Liuting Airport",
    "code": "TAO",
    "country": "China"
  },
  {
    "city": "Brisbane",
    "airport": "Brisbane International Airport",
    "code": "BNE",
    "country": "Australia"
  },
  {
    "city": "Wuhan",
    "airport": "Wuhan Tianhe International Airport",
    "code": "WUH",
    "country": "China"
  },
  {
    "city": "Chennai",
    "airport": "Chennai International Airport",
    "code": "MAA",
    "country": "India"
  },
  {
    "city": "Kochi",
    "airport": "Cochin International Airport",
    "code": "COK",
    "country": "India"
  },
  {
    "city": "Hyderabad",
    "airport": "Rajiv Gandhi International Airport",
    "code": "HYD",
    "country": "India"
  },
  {
    "city": "Thiruvananthapuram",
    "airport": "Trivandrum International Airport",
    "code": "TRV",
    "country": "India"
  },
  {
    "city": "Kolkata",
    "airport": "Netaji Subhash Chandra Bose International Airport",
    "code": "CCU",
    "country": "India"
  },
  {
    "city": "Ahmedabad",
    "airport": "Sardar Vallabhbhai Patel International Airport",
    "code": "AMD",
    "country": "India"
  },
  {
    "city": "Calicut",
    "airport": "Calicut International Airport",
    "code": "CCJ",
    "country": "India"
  },
  {
    "city": "Jaipur",
    "airport": "Jaipur International Airport",
    "code": "JAI",
    "country": "India"
  },
  {
    "city": "Vasco da Gama",
    "airport": "Dabolim Airport",
    "code": "GOI",
    "country": "India"
  },
  {
    "city": "Lucknow",
    "airport": "Chaudhary Charan Singh International Airport",
    "code": "LKO",
    "country": "India"
  },
  {
    "city": "Coimbatore",
    "airport": "Coimbatore International Airport",
    "code": "CJB",
    "country": "India"
  },
  {
    "city": "Tiruchirappally",
    "airport": "Tiruchirapally Civil Airport Airport",
    "code": "TRZ",
    "country": "India"
  },
  {
    "city": "Pune",
    "airport": "Pune Airport",
    "code": "PNQ",
    "country": "India"
  },
  {
    "city": "Siliguri",
    "airport": "Bagdogra Airport",
    "code": "IXB",
    "country": "India"
  },
  {
    "city": "Guwahati",
    "airport": "Lokpriya Gopinath Bordoloi International Airport",
    "code": "GAU",
    "country": "India"
  },
  {
    "city": "Visakhapatnam",
    "airport": "Vishakhapatnam Airport",
    "code": "VTZ",
    "country": "India"
  },
  {
    "city": "Amritsar",
    "airport": "Sri Guru Ram Dass Jee International Airport",
    "code": "ATQ",
    "country": "India"
  },
  {
    "city": "Madurai",
    "airport": "Madurai Airport",
    "code": "IXM",
    "country": "India"
  },
  {
    "city": "Naqpur",
    "airport": "Dr. Babasaheb Ambedkar International Airport",
    "code": "NAG",
    "country": "India"
  },
  {
    "city": "Chandigarh",
    "airport": "Chandigarh Airport",
    "code": "IXC",
    "country": "India"
  },
  {
    "city": "Jammu",
    "airport": "Jammu Airport",
    "code": "IXJ",
    "country": "India"
  },
  {
    "city": "Srinagar",
    "airport": "Sheikh ul Alam Airport",
    "code": "SXR",
    "country": "India"
  },
  {
    "city": "Mangalore",
    "airport": "Mangalore International Airport",
    "code": "IXE",
    "country": "India"
  },
  {
    "city": "Port Blair",
    "airport": "Vir Savarkar International Airport",
    "code": "IXZ",
    "country": "India"
  },
  {
    "city": "Indore",
    "airport": "Devi Ahilyabai Holkar Airport",
    "code": "IDR",
    "country": "India"
  },
  {
    "city": "Agartala",
    "airport": "Agartala Airport",
    "code": "IXA",
    "country": "India"
  },
  {
    "city": "Patna",
    "airport": "Lok Nayak Jayaprakash Airport",
    "code": "PAT",
    "country": "India"
  }
]

export default airportArray;