var stateObject = {
	   'Andaman and Nicobar Islands':['NICOBARS', 'NORTH AND MIDDLE ANDAMAN', 'SOUTH ANDAMANS'],
	   'Andhra Pradesh':['ANANTAPUR', 'CHITTOOR', 'EAST GODAVARI', 'GUNTUR', 'KADAPA','KRISHNA', 'KURNOOL', 'PRAKASAM', 'SPSR NELLORE', 'SRIKAKULAM','VISAKHAPATANAM', 'VIZIANAGARAM', 'WEST GODAVARI'],
	   'Arunachal Pradesh':['ANJAW', 'CHANGLANG', 'DIBANG VALLEY', 'EAST KAMENG', 'EAST SIANG',
       'KURUNG KUMEY', 'LOHIT', 'LONGDING', 'LOWER DIBANG VALLEY','LOWER SUBANSIRI', 'NAMSAI', 'PAPUM PARE', 'TAWANG', 'TIRAP','UPPER SIANG', 'UPPER SUBANSIRI', 'WEST KAMENG', 'WEST SIANG'],
	   'Assam':['BAKSA', 'BARPETA', 'BONGAIGAON', 'CACHAR', 'CHIRANG', 'DARRANG','DHEMAJI', 'DHUBRI', 'DIBRUGARH', 'DIMA HASAO', 'GOALPARA','GOLAGHAT', 'HAILAKANDI', 'JORHAT', 'KAMRUP', 'KAMRUP METRO','KARBI ANGLONG', 'KARIMGANJ', 'KOKRAJHAR', 'LAKHIMPUR', 'MARIGAON','NAGAON', 'NALBARI', 'SIVASAGAR', 'SONITPUR', 'TINSUKIA','UDALGURI'],
	   'Bihar':['ARARIA', 'ARWAL', 'AURANGABAD', 'BANKA', 'BEGUSARAI', 'BHAGALPUR','BHOJPUR', 'BUXAR', 'DARBHANGA', 'GAYA', 'GOPALGANJ', 'JAMUI','JEHANABAD', 'KAIMUR (BHABUA)', 'KATIHAR', 'KHAGARIA','KISHANGANJ', 'LAKHISARAI', 'MADHEPURA', 'MADHUBANI', 'MUNGER','MUZAFFARPUR', 'NALANDA', 'NAWADA', 'PASHCHIM CHAMPARAN', 'PATNA','PURBI CHAMPARAN', 'PURNIA', 'ROHTAS', 'SAHARSA', 'SAMASTIPUR','SARAN', 'SHEIKHPURA', 'SHEOHAR', 'SITAMARHI', 'SIWAN', 'SUPAUL','VAISHALI'],
	   'Chandigarh':['CHANDIGARH'],
	   'Chhattisgarh':['BALOD', 'BALODA BAZAR', 'BALRAMPUR', 'BASTAR', 'BEMETARA','BIJAPUR', 'BILASPUR', 'DANTEWADA', 'DHAMTARI', 'DURG','GARIYABAND', 'JANJGIR-CHAMPA', 'JASHPUR', 'KABIRDHAM', 'KANKER','KONDAGAON', 'KORBA', 'KOREA', 'MAHASAMUND', 'MUNGELI','NARAYANPUR', 'RAIGARH', 'RAIPUR', 'RAJNANDGAON', 'SUKMA','SURAJPUR', 'SURGUJA'],
	   'Dadra and Nagar Haveli':['DADRA AND NAGAR HAVELI'],
	   'Goa':['NORTH GOA', 'SOUTH GOA'],
	   'Gujarat':['AHMADABAD', 'AMRELI', 'ANAND', 'BANAS KANTHA', 'BHARUCH','BHAVNAGAR', 'DANG', 'DOHAD', 'GANDHINAGAR', 'JAMNAGAR','JUNAGADH', 'KACHCHH', 'KHEDA', 'MAHESANA', 'NARMADA', 'NAVSARI','PANCH MAHALS', 'PATAN', 'PORBANDAR', 'RAJKOT', 'SABAR KANTHA','SURAT', 'SURENDRANAGAR', 'TAPI', 'VADODARA', 'VALSAD'],
	   'Haryana':['AMBALA', 'BHIWANI', 'FARIDABAD', 'FATEHABAD', 'GURGAON', 'HISAR','JHAJJAR', 'JIND', 'KAITHAL', 'KARNAL', 'KURUKSHETRA','MAHENDRAGARH', 'MEWAT', 'PALWAL', 'PANCHKULA', 'PANIPAT','REWARI', 'ROHTAK', 'SIRSA', 'SONIPAT', 'YAMUNANAGAR'],
	   'Himachal Pradesh':['CHAMBA', 'HAMIRPUR', 'KANGRA', 'KINNAUR', 'KULLU','LAHUL AND SPITI', 'MANDI', 'SHIMLA', 'SIRMAUR', 'SOLAN', 'UNA'],
	   'Jammu and Kashmir ':['ANANTNAG', 'BADGAM', 'BANDIPORA', 'BARAMULLA', 'DODA','GANDERBAL', 'JAMMU', 'KARGIL', 'KATHUA', 'KISHTWAR', 'KULGAM','KUPWARA', 'LEH LADAKH', 'POONCH', 'PULWAMA', 'RAJAURI', 'RAMBAN','REASI', 'SAMBA', 'SHOPIAN', 'SRINAGAR', 'UDHAMPUR'],
	   'Jharkhand':['BOKARO', 'CHATRA', 'DEOGHAR', 'DHANBAD', 'DUMKA', 'EAST SINGHBUM','GARHWA', 'GIRIDIH', 'GODDA', 'GUMLA', 'HAZARIBAGH', 'JAMTARA','KHUNTI', 'KODERMA', 'LATEHAR', 'LOHARDAGA', 'PAKUR', 'PALAMU','RAMGARH', 'RANCHI', 'SAHEBGANJ', 'SARAIKELA KHARSAWAN', 'SIMDEGA','WEST SINGHBHUM'],
	   'Karnataka':['BAGALKOT', 'BANGALORE RURAL', 'BELGAUM', 'BELLARY','BENGALURU URBAN', 'BIDAR', 'CHAMARAJANAGAR', 'CHIKBALLAPUR','CHIKMAGALUR', 'CHITRADURGA', 'DAKSHIN KANNAD', 'DAVANGERE','DHARWAD', 'GADAG', 'GULBARGA', 'HASSAN', 'HAVERI', 'KODAGU','KOLAR', 'KOPPAL', 'MANDYA', 'MYSORE', 'RAICHUR', 'RAMANAGARA','SHIMOGA', 'TUMKUR', 'UDUPI', 'UTTAR KANNAD', 'YADGIR'],
	   'Kerala':['ALAPPUZHA', 'ERNAKULAM', 'IDUKKI', 'KANNUR', 'KASARAGOD','KOLLAM', 'KOTTAYAM', 'KOZHIKODE', 'MALAPPURAM', 'PALAKKAD','PATHANAMTHITTA', 'THIRUVANANTHAPURAM', 'THRISSUR', 'WAYANAD'],
	   'Madhya Pradesh':['AGAR MALWA', 'ALIRAJPUR', 'ANUPPUR', 'ASHOKNAGAR', 'BALAGHAT','BARWANI', 'BETUL', 'BHIND', 'BHOPAL', 'BURHANPUR', 'CHHATARPUR','CHHINDWARA', 'DAMOH', 'DATIA', 'DEWAS', 'DHAR', 'DINDORI', 'GUNA','GWALIOR', 'HARDA', 'HOSHANGABAD', 'INDORE', 'JABALPUR', 'JHABUA','KATNI', 'KHANDWA', 'KHARGONE', 'MANDLA', 'MANDSAUR', 'MORENA','NARSINGHPUR', 'NEEMUCH', 'PANNA', 'RAISEN', 'RAJGARH', 'RATLAM', 'REWA', 'SAGAR', 'SATNA', 'SEHORE', 'SEONI', 'SHAHDOL', 'SHAJAPUR','SHEOPUR', 'SHIVPURI', 'SIDHI', 'SINGRAULI', 'TIKAMGARH', 'UJJAIN','UMARIA', 'VIDISHA'],
	   'Maharashtra':['AHMEDNAGAR', 'AKOLA', 'AMRAVATI', 'BEED', 'BHANDARA', 'BULDHANA',
       'CHANDRAPUR', 'DHULE', 'GADCHIROLI', 'GONDIA', 'HINGOLI','JALGAON', 'JALNA', 'KOLHAPUR', 'LATUR', 'MUMBAI', 'NAGPUR','NANDED', 'NANDURBAR', 'NASHIK', 'OSMANABAD', 'PALGHAR','PARBHANI', 'PUNE', 'RAIGAD', 'RATNAGIRI', 'SANGLI', 'SATARA','SINDHUDURG', 'SOLAPUR', 'THANE', 'WARDHA', 'WASHIM', 'YAVATMAL'],
	   'Manipur':['BISHNUPUR', 'CHANDEL', 'CHURACHANDPUR', 'IMPHAL EAST', 'IMPHAL WEST', 'SENAPATI', 'TAMENGLONG', 'THOUBAL', 'UKHRUL'],
	   'Meghalaya':['EAST GARO HILLS', 'EAST JAINTIA HILLS', 'EAST KHASI HILLS','NORTH GARO HILLS', 'RI BHOI', 'SOUTH GARO HILLS','SOUTH WEST GARO HILLS', 'SOUTH WEST KHASI HILLS','WEST GARO HILLS', 'WEST JAINTIA HILLS', 'WEST KHASI HILLS'],
	   'Mizoram':['AIZAWL', 'CHAMPHAI', 'KOLASIB', 'LAWNGTLAI', 'LUNGLEI', 'MAMIT', 'SAIHA', 'SERCHHIP'],
	   'Nagaland':['DIMAPUR', 'KIPHIRE', 'KOHIMA', 'LONGLENG', 'MOKOKCHUNG', 'MON','PEREN', 'PHEK', 'TUENSANG', 'WOKHA', 'ZUNHEBOTO'],
	   'Odisha':['ANUGUL', 'BALANGIR', 'BALESHWAR', 'BARGARH', 'BHADRAK', 'BOUDH','CUTTACK', 'DEOGARH', 'DHENKANAL', 'GAJAPATI', 'GANJAM','JAGATSINGHAPUR', 'JAJAPUR', 'JHARSUGUDA', 'KALAHANDI','KANDHAMAL', 'KENDRAPARA', 'KENDUJHAR', 'KHORDHA', 'KORAPUT','MALKANGIRI', 'MAYURBHANJ', 'NABARANGPUR', 'NAYAGARH', 'NUAPADA','PURI', 'RAYAGADA', 'SAMBALPUR', 'SONEPUR', 'SUNDARGARH'],
	   'Puducherry':['KARAIKAL', 'MAHE', 'PONDICHERRY', 'YANAM'],
       'Punjab':['AMRITSAR', 'BARNALA', 'BATHINDA', 'FARIDKOT', 'FATEHGARH SAHIB','FAZILKA', 'FIROZEPUR', 'GURDASPUR', 'HOSHIARPUR', 'JALANDHAR','KAPURTHALA', 'LUDHIANA', 'MANSA', 'MOGA', 'MUKTSAR', 'NAWANSHAHR','PATHANKOT', 'PATIALA', 'RUPNAGAR', 'S.A.S NAGAR', 'SANGRUR','TARN TARAN'],
	   'Rajasthan':['AJMER', 'ALWAR', 'BANSWARA', 'BARAN', 'BARMER', 'BHARATPUR','BHILWARA', 'BIKANER', 'BUNDI', 'CHITTORGARH', 'CHURU', 'DAUSA','DHOLPUR', 'DUNGARPUR', 'GANGANAGAR', 'HANUMANGARH', 'JAIPUR','JAISALMER', 'JALORE', 'JHALAWAR', 'JHUNJHUNU', 'JODHPUR','KARAULI', 'KOTA', 'NAGAUR', 'PALI', 'PRATAPGARH', 'RAJSAMAND','SAWAI MADHOPUR', 'SIKAR', 'SIROHI', 'TONK', 'UDAIPUR'],
	   'Sikkim':['EAST DISTRICT', 'NORTH DISTRICT', 'SOUTH DISTRICT','WEST DISTRICT'],
	   'Tamil Nadu':['ARIYALUR', 'COIMBATORE', 'CUDDALORE', 'DHARMAPURI', 'DINDIGUL','ERODE', 'KANCHIPURAM', 'KANNIYAKUMARI', 'KARUR', 'KRISHNAGIRI','MADURAI', 'NAGAPATTINAM', 'NAMAKKAL', 'PERAMBALUR', 'PUDUKKOTTAI','RAMANATHAPURAM', 'SALEM', 'SIVAGANGA', 'THANJAVUR','THE NILGIRIS', 'THENI', 'THIRUVALLUR', 'THIRUVARUR','TIRUCHIRAPPALLI', 'TIRUNELVELI', 'TIRUPPUR', 'TIRUVANNAMALAI','TUTICORIN', 'VELLORE', 'VILLUPURAM', 'VIRUDHUNAGAR'],
	   'Telangana ':['ADILABAD', 'HYDERABAD', 'KARIMNAGAR', 'KHAMMAM', 'MAHBUBNAGAR','MEDAK', 'NALGONDA', 'NIZAMABAD', 'RANGAREDDI', 'WARANGAL'],
       'Tripura':['DHALAI', 'GOMATI', 'KHOWAI', 'NORTH TRIPURA', 'SEPAHIJALA','SOUTH TRIPURA', 'UNAKOTI', 'WEST TRIPURA'],
	   'Uttar Pradesh':['AGRA', 'ALIGARH', 'ALLAHABAD', 'AMBEDKAR NAGAR', 'AMETHI','AMROHA', 'AURAIYA', 'AZAMGARH', 'BAGHPAT', 'BAHRAICH', 'BALLIA','BANDA', 'BARABANKI', 'BAREILLY', 'BASTI', 'BIJNOR', 'BUDAUN','BULANDSHAHR', 'CHANDAULI', 'CHITRAKOOT', 'DEORIA', 'ETAH','ETAWAH', 'FAIZABAD', 'FARRUKHABAD', 'FATEHPUR', 'FIROZABAD','GAUTAM BUDDHA NAGAR', 'GHAZIABAD', 'GHAZIPUR', 'GONDA','GORAKHPUR', 'HAPUR', 'HARDOI', 'HATHRAS', 'JALAUN', 'JAUNPUR','JHANSI', 'KANNAUJ', 'KANPUR DEHAT', 'KANPUR NAGAR', 'KASGANJ','KAUSHAMBI', 'KHERI', 'KUSHI NAGAR', 'LALITPUR', 'LUCKNOW','MAHARAJGANJ', 'MAHOBA', 'MAINPURI', 'MATHURA', 'MAU', 'MEERUT','MIRZAPUR', 'MORADABAD', 'MUZAFFARNAGAR', 'PILIBHIT', 'RAE BARELI','RAMPUR', 'SAHARANPUR', 'SAMBHAL', 'SANT KABEER NAGAR','SANT RAVIDAS NAGAR', 'SHAHJAHANPUR', 'SHAMLI', 'SHRAVASTI','SIDDHARTH NAGAR', 'SITAPUR', 'SONBHADRA', 'SULTANPUR', 'UNNAO','VARANASI'],
	   'Uttarakhand':['ALMORA', 'BAGESHWAR', 'CHAMOLI', 'CHAMPAWAT', 'DEHRADUN','HARIDWAR', 'NAINITAL', 'PAURI GARHWAL', 'PITHORAGARH','RUDRA PRAYAG', 'TEHRI GARHWAL', 'UDAM SINGH NAGAR', 'UTTAR KASHI'],
	   'West Bengal':['24 PARAGANAS NORTH', '24 PARAGANAS SOUTH', 'BANKURA', 'BARDHAMAN','BIRBHUM', 'COOCHBEHAR', 'DARJEELING', 'DINAJPUR DAKSHIN','DINAJPUR UTTAR', 'HOOGHLY', 'HOWRAH', 'JALPAIGURI', 'MALDAH','MEDINIPUR EAST', 'MEDINIPUR WEST', 'MURSHIDABAD', 'NADIA','PURULIA']
}

var seasonObject={
	'Autumn':['Paddy'],
	'Kharif':['Arecanut', 'Bajra', 'Bean', 'Cabbage', 'Castor seed', 'Colocosia','Cotton(lint)', 'Cowpea(Lobia)', 'Guar seed', 'Horse-gram','Jobster', 'Jowar', 'Jute', 'Jute & mesta', 'Kapas', 'Korra','Lemon', 'Masoor', 'Mesta', 'Moth', 'Niger seed', 'Perilla','Pome Granet', 'Ragi', 'Rajmash Kholar', 'Rice','Ricebean (nagadal)', 'Samai', 'Sapota', 'Sesamum','Small millets', 'Soyabean', 'Tobacco', 'Total foodgrain'],
	'Rabi':['Arhar/Tur', 'Barley', 'Blackgram', 'Gram', 'Groundnut', 'Khesari','Lentil', 'Linseed', 'Maize', 'Moong(Green Gram)','Peas & beans (Pulses)', 'Pineapple', 'Rapeseed &Mustard','Safflower', 'Sunflower', 'Urad', 'Varagu', 'Wheat'],
	'Whole Year':['Arcanut (Processed)', 'Atcanut (Raw)', 'Banana','Beans & Mutter(Vegetable)', 'Bhindi', 'Bitter Gourd','Black pepper', 'Bottle Gourd', 'Brinjal', 'Cardamom', 'Carrot','Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Cauliflower','Citrus Fruit', 'Coffee', 'Coriander', 'Drum Stick','Dry chillies', 'Dry ginger', 'Garlic', 'Ginger', 'Grapes','Jack Fruit', 'Mango', 'Oilseeds total', 'Onion', 'Orange','Papaya', 'Pome Fruit', 'Potato', 'Pulses total', 'Redish','Rubber', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tapioca','Tea', 'Tomato', 'Turmeric', 'Turnip'],
    'Summer':['Rice', 'Paddy', 'Maize', 'Moong(Green Gram)', 'Onion','Sunflower', 'Bajra', 'Groundnut', 'Sesamum', 'Urad', 'Jowar','Dry chillies', 'Cowpea(Lobia)', 'Cotton(lint)','Peas & beans (Pulses)', 'Potato', 'Ragi', 'Dry ginger', 'Jute','Sugarcane', 'Turmeric', 'Banana', 'Arhar/Tur', 'Wheat','Horse-gram', 'Brinjal', 'Tobacco', 'Small millets','Total foodgrain', 'Pulses total'],
	'Winter':['Rice', 'Paddy', 'Banana', 'Coriander', 'Gram','Rapeseed &Mustard', 'Sesamum', 'Sugarcane', 'Sunflower', 'Wheat','Niger seed', 'Arhar/Tur', 'Sannhamp', 'Maize', 'Potato', 'Onion','Peas & beans (Pulses)', 'Cotton(lint)', 'Dry chillies','Dry ginger', 'Soyabean', 'Turmeric', 'Sweet potato', 'Groundnut','Horse-gram', 'Urad', 'Moong(Green Gram)', 'Ragi']
}


window.onload = function () {
var stateSel = document.getElementById("stateSel"),
districtSel = document.getElementById("districtSel")
for (var state in stateObject) {
stateSel.options[stateSel.options.length] = new Option(state, state);
}
stateSel.onchange = function () {
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
var district = stateObject[this.value] 
for (var i = 0; i < district.length; i++) {
districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
}
}

var seasonSel = document.getElementById("seasonSel"),
cropSel = document.getElementById("cropSel")
for (var season in seasonObject) {
seasonSel.options[seasonSel.options.length] = new Option(season, season);
}
seasonSel.onchange = function () {
cropSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
var crop = seasonObject[this.value] 
for (var j = 0; j < crop.length; j++) {
cropSel.options[cropSel.options.length] = new Option(crop[j], crop[j]);
}
}

var yearSel=document.getElementById("yearSel")
var min=1996;
var max=min+20;
 for (var k = min; k <= max; k++) {
var option = document.createElement("OPTION");
option.innerHTML = k;
option.value = k;
yearSel.appendChild(option);
}

}