
// Quran Metadata (ver 1.0) 
// Copyright (C) 2008-2009 Tanzil.info
// License: Creative Commons Attribution 3.0


var QuranData = {};

//------------------ Sura Data ---------------------

QuranData.Sura = [
	// [start, ayas, order, rukus, name, tname, ename, type]
	[],
	[0, 7, 5, 1, 'Ø§Ù„ÙØ§ØªØ­Ø©', "Al-Faatiha", 'The Opening', 'Meccan'],
	[7, 286, 87, 40, 'Ø§Ù„Ø¨Ù‚Ø±Ø©', "Al-Baqara", 'The Cow', 'Medinan'],
	[293, 200, 89, 20, 'Ø¢Ù„ Ø¹Ù…Ø±Ø§Ù†', "Aal-i-Imraan", 'The Family of Imraan', 'Medinan'],
	[493, 176, 92, 24, 'Ø§Ù„Ù†Ø³Ø§Ø¡', "An-Nisaa", 'The Women', 'Medinan'],
	[669, 120, 112, 16, 'Ø§Ù„Ù…Ø§Ø¦Ø¯Ø©', "Al-Maaida", 'The Table', 'Medinan'],
	[789, 165, 55, 20, 'Ø§Ù„Ø£Ù†Ø¹Ø§Ù…', "Al-An'aam", 'The Cattle', 'Meccan'],
	[954, 206, 39, 24, 'Ø§Ù„Ø£Ø¹Ø±Ø§Ù', "Al-A'raaf", 'The Heights', 'Meccan'],
	[1160, 75, 88, 10, 'Ø§Ù„Ø£Ù†ÙØ§Ù„', "Al-Anfaal", 'The Spoils of War', 'Medinan'],
	[1235, 129, 113, 16, 'Ø§Ù„ØªÙˆØ¨Ø©', "At-Tawba", 'The Repentance', 'Medinan'],
	[1364, 109, 51, 11, 'ÙŠÙˆÙ†Ø³', "Yunus", 'Jonas', 'Meccan'],
	[1473, 123, 52, 10, 'Ù‡ÙˆØ¯', "Hud", 'Hud', 'Meccan'],
	[1596, 111, 53, 12, 'ÙŠÙˆØ³Ù', "Yusuf", 'Joseph', 'Meccan'],
	[1707, 43, 96, 6, 'Ø§Ù„Ø±Ø¹Ø¯', "Ar-Ra'd", 'The Thunder', 'Medinan'],
	[1750, 52, 72, 7, 'Ø§Ø¨Ø±Ø§Ù‡ÙŠÙ…', "Ibrahim", 'Abraham', 'Meccan'],
	[1802, 99, 54, 6, 'Ø§Ù„Ø­Ø¬Ø±', "Al-Hijr", 'The Rock', 'Meccan'],
	[1901, 128, 70, 16, 'Ø§Ù„Ù†Ø­Ù„', "An-Nahl", 'The Bee', 'Meccan'],
	[2029, 111, 50, 12, 'Ø§Ù„Ø¥Ø³Ø±Ø§Ø¡', "Al-Israa", 'The Night Journey', 'Meccan'],
	[2140, 110, 69, 12, 'Ø§Ù„ÙƒÙ‡Ù', "Al-Kahf", 'The Cave', 'Meccan'],
	[2250, 98, 44, 6, 'Ù…Ø±ÙŠÙ…', "Maryam", 'Mary', 'Meccan'],
	[2348, 135, 45, 8, 'Ø·Ù‡', "Taa-Haa", 'Taa-Haa', 'Meccan'],
	[2483, 112, 73, 7, 'Ø§Ù„Ø£Ù†Ø¨ÙŠØ§Ø¡', "Al-Anbiyaa", 'The Prophets', 'Meccan'],
	[2595, 78, 103, 10, 'Ø§Ù„Ø­Ø¬', "Al-Hajj", 'The Pilgrimage', 'Medinan'],
	[2673, 118, 74, 6, 'Ø§Ù„Ù…Ø¤Ù…Ù†ÙˆÙ†', "Al-Muminoon", 'The Believers', 'Meccan'],
	[2791, 64, 102, 9, 'Ø§Ù„Ù†ÙˆØ±', "An-Noor", 'The Light', 'Medinan'],
	[2855, 77, 42, 6, 'Ø§Ù„ÙØ±Ù‚Ø§Ù†', "Al-Furqaan", 'The Criterion', 'Meccan'],
	[2932, 227, 47, 11, 'Ø§Ù„Ø´Ø¹Ø±Ø§Ø¡', "Ash-Shu'araa", 'The Poets', 'Meccan'],
	[3159, 93, 48, 7, 'Ø§Ù„Ù†Ù…Ù„', "An-Naml", 'The Ant', 'Meccan'],
	[3252, 88, 49, 8, 'Ø§Ù„Ù‚ØµØµ', "Al-Qasas", 'The Stories', 'Meccan'],
	[3340, 69, 85, 7, 'Ø§Ù„Ø¹Ù†ÙƒØ¨ÙˆØª', "Al-Ankaboot", 'The Spider', 'Meccan'],
	[3409, 60, 84, 6, 'Ø§Ù„Ø±ÙˆÙ…', "Ar-Room", 'The Romans', 'Meccan'],
	[3469, 34, 57, 3, 'Ù„Ù‚Ù…Ø§Ù†', "Luqman", 'Luqman', 'Meccan'],
	[3503, 30, 75, 3, 'Ø§Ù„Ø³Ø¬Ø¯Ø©', "As-Sajda", 'The Prostration', 'Meccan'],
	[3533, 73, 90, 9, 'Ø§Ù„Ø£Ø­Ø²Ø§Ø¨', "Al-Ahzaab", 'The Clans', 'Medinan'],
	[3606, 54, 58, 6, 'Ø³Ø¨Ø¥', "Saba", 'Sheba', 'Meccan'],
	[3660, 45, 43, 5, 'ÙØ§Ø·Ø±', "Faatir", 'The Originator', 'Meccan'],
	[3705, 83, 41, 5, 'ÙŠØ³', "Yaseen", 'Yaseen', 'Meccan'],
	[3788, 182, 56, 5, 'Ø§Ù„ØµØ§ÙØ§Øª', "As-Saaffaat", 'Those drawn up in Ranks', 'Meccan'],
	[3970, 88, 38, 5, 'Øµ', "Saad", 'The letter Saad', 'Meccan'],
	[4058, 75, 59, 8, 'Ø§Ù„Ø²Ù…Ø±', "Az-Zumar", 'The Groups', 'Meccan'],
	[4133, 85, 60, 9, 'ØºØ§ÙØ±', "Al-Ghaafir", 'The Forgiver', 'Meccan'],
	[4218, 54, 61, 6, 'ÙØµÙ„Øª', "Fussilat", 'Explained in detail', 'Meccan'],
	[4272, 53, 62, 5, 'Ø§Ù„Ø´ÙˆØ±Ù‰', "Ash-Shura", 'Consultation', 'Meccan'],
	[4325, 89, 63, 7, 'Ø§Ù„Ø²Ø®Ø±Ù', "Az-Zukhruf", 'Ornaments of gold', 'Meccan'],
	[4414, 59, 64, 3, 'Ø§Ù„Ø¯Ø®Ø§Ù†', "Ad-Dukhaan", 'The Smoke', 'Meccan'],
	[4473, 37, 65, 4, 'Ø§Ù„Ø¬Ø§Ø«ÙŠØ©', "Al-Jaathiya", 'Crouching', 'Meccan'],
	[4510, 35, 66, 4, 'Ø§Ù„Ø£Ø­Ù‚Ø§Ù', "Al-Ahqaf", 'The Dunes', 'Meccan'],
	[4545, 38, 95, 4, 'Ù…Ø­Ù…Ø¯', "Muhammad", 'Muhammad', 'Medinan'],
	[4583, 29, 111, 4, 'Ø§Ù„ÙØªØ­', "Al-Fath", 'The Victory', 'Medinan'],
	[4612, 18, 106, 2, 'Ø§Ù„Ø­Ø¬Ø±Ø§Øª', "Al-Hujuraat", 'The Inner Apartments', 'Medinan'],
	[4630, 45, 34, 3, 'Ù‚', "Qaaf", 'The letter Qaaf', 'Meccan'],
	[4675, 60, 67, 3, 'Ø§Ù„Ø°Ø§Ø±ÙŠØ§Øª', "Adh-Dhaariyat", 'The Winnowing Winds', 'Meccan'],
	[4735, 49, 76, 2, 'Ø§Ù„Ø·ÙˆØ±', "At-Tur", 'The Mount', 'Meccan'],
	[4784, 62, 23, 3, 'Ø§Ù„Ù†Ø¬Ù…', "An-Najm", 'The Star', 'Meccan'],
	[4846, 55, 37, 3, 'Ø§Ù„Ù‚Ù…Ø±', "Al-Qamar", 'The Moon', 'Meccan'],
	[4901, 78, 97, 3, 'Ø§Ù„Ø±Ø­Ù…Ù†', "Ar-Rahmaan", 'The Beneficent', 'Medinan'],
	[4979, 96, 46, 3, 'Ø§Ù„ÙˆØ§Ù‚Ø¹Ø©', "Al-Waaqia", 'The Inevitable', 'Meccan'],
	[5075, 29, 94, 4, 'Ø§Ù„Ø­Ø¯ÙŠØ¯', "Al-Hadid", 'The Iron', 'Medinan'],
	[5104, 22, 105, 3, 'Ø§Ù„Ù…Ø¬Ø§Ø¯Ù„Ø©', "Al-Mujaadila", 'The Pleading Woman', 'Medinan'],
	[5126, 24, 101, 3, 'Ø§Ù„Ø­Ø´Ø±', "Al-Hashr", 'The Exile', 'Medinan'],
	[5150, 13, 91, 2, 'Ø§Ù„Ù…Ù…ØªØ­Ù†Ø©', "Al-Mumtahana", 'She that is to be examined', 'Medinan'],
	[5163, 14, 109, 2, 'Ø§Ù„ØµÙ', "As-Saff", 'The Ranks', 'Medinan'],
	[5177, 11, 110, 2, 'Ø§Ù„Ø¬Ù…Ø¹Ø©', "Al-Jumu'a", 'Friday', 'Medinan'],
	[5188, 11, 104, 2, 'Ø§Ù„Ù…Ù†Ø§ÙÙ‚ÙˆÙ†', "Al-Munaafiqoon", 'The Hypocrites', 'Medinan'],
	[5199, 18, 108, 2, 'Ø§Ù„ØªØºØ§Ø¨Ù†', "At-Taghaabun", 'Mutual Disillusion', 'Medinan'],
	[5217, 12, 99, 2, 'Ø§Ù„Ø·Ù„Ø§Ù‚', "At-Talaaq", 'Divorce', 'Medinan'],
	[5229, 12, 107, 2, 'Ø§Ù„ØªØ­Ø±ÙŠÙ…', "At-Tahrim", 'The Prohibition', 'Medinan'],
	[5241, 30, 77, 2, 'Ø§Ù„Ù…Ù„Ùƒ', "Al-Mulk", 'The Sovereignty', 'Meccan'],
	[5271, 52, 2, 2, 'Ø§Ù„Ù‚Ù„Ù…', "Al-Qalam", 'The Pen', 'Meccan'],
	[5323, 52, 78, 2, 'Ø§Ù„Ø­Ø§Ù‚Ø©', "Al-Haaqqa", 'The Reality', 'Meccan'],
	[5375, 44, 79, 2, 'Ø§Ù„Ù…Ø¹Ø§Ø±Ø¬', "Al-Ma'aarij", 'The Ascending Stairways', 'Meccan'],
	[5419, 28, 71, 2, 'Ù†ÙˆØ­', "Nooh", 'Noah', 'Meccan'],
	[5447, 28, 40, 2, 'Ø§Ù„Ø¬Ù†', "Al-Jinn", 'The Jinn', 'Meccan'],
	[5475, 20, 3, 2, 'Ø§Ù„Ù…Ø²Ù…Ù„', "Al-Muzzammil", 'The Enshrouded One', 'Meccan'],
	[5495, 56, 4, 2, 'Ø§Ù„Ù…Ø¯Ø«Ø±', "Al-Muddaththir", 'The Cloaked One', 'Meccan'],
	[5551, 40, 31, 2, 'Ø§Ù„Ù‚ÙŠØ§Ù…Ø©', "Al-Qiyaama", 'The Resurrection', 'Meccan'],
	[5591, 31, 98, 2, 'Ø§Ù„Ø§Ù†Ø³Ø§Ù†', "Al-Insaan", 'Man', 'Medinan'],
	[5622, 50, 33, 2, 'Ø§Ù„Ù…Ø±Ø³Ù„Ø§Øª', "Al-Mursalaat", 'The Emissaries', 'Meccan'],
	[5672, 40, 80, 2, 'Ø§Ù„Ù†Ø¨Ø¥', "An-Naba", 'The Announcement', 'Meccan'],
	[5712, 46, 81, 2, 'Ø§Ù„Ù†Ø§Ø²Ø¹Ø§Øª', "An-Naazi'aat", 'Those who drag forth', 'Meccan'],
	[5758, 42, 24, 1, 'Ø¹Ø¨Ø³', "Abasa", 'He frowned', 'Meccan'],
	[5800, 29, 7, 1, 'Ø§Ù„ØªÙƒÙˆÙŠØ±', "At-Takwir", 'The Overthrowing', 'Meccan'],
	[5829, 19, 82, 1, 'Ø§Ù„Ø¥Ù†ÙØ·Ø§Ø±', "Al-Infitaar", 'The Cleaving', 'Meccan'],
	[5848, 36, 86, 1, 'Ø§Ù„Ù…Ø·ÙÙÙŠÙ†', "Al-Mutaffifin", 'Defrauding', 'Meccan'],
	[5884, 25, 83, 1, 'Ø§Ù„Ø¥Ù†Ø´Ù‚Ø§Ù‚', "Al-Inshiqaaq", 'The Splitting Open', 'Meccan'],
	[5909, 22, 27, 1, 'Ø§Ù„Ø¨Ø±ÙˆØ¬', "Al-Burooj", 'The Constellations', 'Meccan'],
	[5931, 17, 36, 1, 'Ø§Ù„Ø·Ø§Ø±Ù‚', "At-Taariq", 'The Morning Star', 'Meccan'],
	[5948, 19, 8, 1, 'Ø§Ù„Ø£Ø¹Ù„Ù‰', "Al-A'laa", 'The Most High', 'Meccan'],
	[5967, 26, 68, 1, 'Ø§Ù„ØºØ§Ø´ÙŠØ©', "Al-Ghaashiya", 'The Overwhelming', 'Meccan'],
	[5993, 30, 10, 1, 'Ø§Ù„ÙØ¬Ø±', "Al-Fajr", 'The Dawn', 'Meccan'],
	[6023, 20, 35, 1, 'Ø§Ù„Ø¨Ù„Ø¯', "Al-Balad", 'The City', 'Meccan'],
	[6043, 15, 26, 1, 'Ø§Ù„Ø´Ù…Ø³', "Ash-Shams", 'The Sun', 'Meccan'],
	[6058, 21, 9, 1, 'Ø§Ù„Ù„ÙŠÙ„', "Al-Lail", 'The Night', 'Meccan'],
	[6079, 11, 11, 1, 'Ø§Ù„Ø¶Ø­Ù‰', "Ad-Dhuhaa", 'The Morning Hours', 'Meccan'],
	[6090, 8, 12, 1, 'Ø§Ù„Ø´Ø±Ø­', "Ash-Sharh", 'The Consolation', 'Meccan'],
	[6098, 8, 28, 1, 'Ø§Ù„ØªÙŠÙ†', "At-Tin", 'The Fig', 'Meccan'],
	[6106, 19, 1, 1, 'Ø§Ù„Ø¹Ù„Ù‚', "Al-Alaq", 'The Clot', 'Meccan'],
	[6125, 5, 25, 1, 'Ø§Ù„Ù‚Ø¯Ø±', "Al-Qadr", 'The Power, Fate', 'Meccan'],
	[6130, 8, 100, 1, 'Ø§Ù„Ø¨ÙŠÙ†Ø©', "Al-Bayyina", 'The Evidence', 'Medinan'],
	[6138, 8, 93, 1, 'Ø§Ù„Ø²Ù„Ø²Ù„Ø©', "Az-Zalzala", 'The Earthquake', 'Medinan'],
	[6146, 11, 14, 1, 'Ø§Ù„Ø¹Ø§Ø¯ÙŠØ§Øª', "Al-Aadiyaat", 'The Chargers', 'Meccan'],
	[6157, 11, 30, 1, 'Ø§Ù„Ù‚Ø§Ø±Ø¹Ø©', "Al-Qaari'a", 'The Calamity', 'Meccan'],
	[6168, 8, 16, 1, 'Ø§Ù„ØªÙƒØ§Ø«Ø±', "At-Takaathur", 'Competition', 'Meccan'],
	[6176, 3, 13, 1, 'Ø§Ù„Ø¹ØµØ±', "Al-Asr", 'The Declining Day, Epoch', 'Meccan'],
	[6179, 9, 32, 1, 'Ø§Ù„Ù‡Ù…Ø²Ø©', "Al-Humaza", 'The Traducer', 'Meccan'],
	[6188, 5, 19, 1, 'Ø§Ù„ÙÙŠÙ„', "Al-Fil", 'The Elephant', 'Meccan'],
	[6193, 4, 29, 1, 'Ù‚Ø±ÙŠØ´', "Quraish", 'Quraysh', 'Meccan'],
	[6197, 7, 17, 1, 'Ø§Ù„Ù…Ø§Ø¹ÙˆÙ†', "Al-Maa'un", 'Almsgiving', 'Meccan'],
	[6204, 3, 15, 1, 'Ø§Ù„ÙƒÙˆØ«Ø±', "Al-Kawthar", 'Abundance', 'Meccan'],
	[6207, 6, 18, 1, 'Ø§Ù„ÙƒØ§ÙØ±ÙˆÙ†', "Al-Kaafiroon", 'The Disbelievers', 'Meccan'],
	[6213, 3, 114, 1, 'Ø§Ù„Ù†ØµØ±', "An-Nasr", 'Divine Support', 'Medinan'],
	[6216, 5, 6, 1, 'Ø§Ù„Ù…Ø³Ø¯', "Al-Masad", 'The Palm Fibre', 'Meccan'],
	[6221, 4, 22, 1, 'Ø§Ù„Ø¥Ø®Ù„Ø§Øµ', "Al-Ikhlaas", 'Sincerity', 'Meccan'],
	[6225, 5, 20, 1, 'Ø§Ù„ÙÙ„Ù‚', "Al-Falaq", 'The Dawn', 'Meccan'],
	[6230, 6, 21, 1, 'Ø§Ù„Ù†Ø§Ø³', "An-Naas", 'Mankind', 'Meccan'],
	[6236, 1]
];


//------------------ Juz Data ---------------------

QuranData.Juz = [
	// [sura, aya]
	[],	
	[1, 1], 	[2, 142], 	[2, 253], 	[3, 93], 	[4, 24],
	[4, 148], 	[5, 82], 	[6, 111], 	[7, 88], 	[8, 41],
	[9, 93], 	[11, 6], 	[12, 53], 	[15, 1], 	[17, 1],
	[18, 75], 	[21, 1], 	[23, 1], 	[25, 21], 	[27, 56],
	[29, 46], 	[33, 31], 	[36, 28], 	[39, 32], 	[41, 47],
	[46, 1], 	[51, 31], 	[58, 1], 	[67, 1], 	[78, 1],
	[115, 1] 
];

//------------------ Hizb Data ---------------------

QuranData.HizbQaurter = [
	// [sura, aya]
	[],	
	[1, 1], 	[2, 26], 	[2, 44], 	[2, 60],
	[2, 75], 	[2, 92], 	[2, 106], 	[2, 124],
	[2, 142], 	[2, 158], 	[2, 177], 	[2, 189],
	[2, 203], 	[2, 219], 	[2, 233], 	[2, 243],
	[2, 253], 	[2, 263], 	[2, 272], 	[2, 283],
	[3, 15], 	[3, 33], 	[3, 52], 	[3, 75],
	[3, 93], 	[3, 113], 	[3, 133], 	[3, 153],
	[3, 171], 	[3, 186], 	[4, 1], 	[4, 12],
	[4, 24], 	[4, 36], 	[4, 58], 	[4, 74],
	[4, 88], 	[4, 100], 	[4, 114], 	[4, 135],
	[4, 148], 	[4, 163], 	[5, 1], 	[5, 12],
	[5, 27], 	[5, 41], 	[5, 51], 	[5, 67],
	[5, 82], 	[5, 97], 	[5, 109], 	[6, 13],
	[6, 36], 	[6, 59], 	[6, 74], 	[6, 95],
	[6, 111], 	[6, 127], 	[6, 141], 	[6, 151],
	[7, 1], 	[7, 31], 	[7, 47], 	[7, 65],
	[7, 88], 	[7, 117], 	[7, 142], 	[7, 156],
	[7, 171], 	[7, 189], 	[8, 1], 	[8, 22],
	[8, 41], 	[8, 61], 	[9, 1], 	[9, 19],
	[9, 34], 	[9, 46], 	[9, 60], 	[9, 75],
	[9, 93], 	[9, 111], 	[9, 122], 	[10, 11],
	[10, 26], 	[10, 53], 	[10, 71], 	[10, 90],
	[11, 6], 	[11, 24], 	[11, 41], 	[11, 61],
	[11, 84], 	[11, 108], 	[12, 7], 	[12, 30],
	[12, 53], 	[12, 77], 	[12, 101], 	[13, 5],
	[13, 19], 	[13, 35], 	[14, 10], 	[14, 28],
	[15, 1], 	[15, 50], 	[16, 1], 	[16, 30],
	[16, 51], 	[16, 75], 	[16, 90], 	[16, 111],
	[17, 1], 	[17, 23], 	[17, 50], 	[17, 70],
	[17, 99], 	[18, 17], 	[18, 32], 	[18, 51],
	[18, 75], 	[18, 99], 	[19, 22], 	[19, 59],
	[20, 1], 	[20, 55], 	[20, 83], 	[20, 111],
	[21, 1], 	[21, 29], 	[21, 51], 	[21, 83],
	[22, 1], 	[22, 19], 	[22, 38], 	[22, 60],
	[23, 1], 	[23, 36], 	[23, 75], 	[24, 1],
	[24, 21], 	[24, 35], 	[24, 53], 	[25, 1],
	[25, 21], 	[25, 53], 	[26, 1], 	[26, 52],
	[26, 111], 	[26, 181], 	[27, 1], 	[27, 27],
	[27, 56], 	[27, 82], 	[28, 12], 	[28, 29],
	[28, 51], 	[28, 76], 	[29, 1], 	[29, 26],
	[29, 46], 	[30, 1], 	[30, 31], 	[30, 54],
	[31, 22], 	[32, 11], 	[33, 1], 	[33, 18],
	[33, 31], 	[33, 51], 	[33, 60], 	[34, 10],
	[34, 24], 	[34, 46], 	[35, 15], 	[35, 41],
	[36, 28], 	[36, 60], 	[37, 22], 	[37, 83],
	[37, 145], 	[38, 21], 	[38, 52], 	[39, 8],
	[39, 32], 	[39, 53], 	[40, 1], 	[40, 21],
	[40, 41], 	[40, 66], 	[41, 9], 	[41, 25],
	[41, 47], 	[42, 13], 	[42, 27], 	[42, 51],
	[43, 24], 	[43, 57], 	[44, 17], 	[45, 12],
	[46, 1], 	[46, 21], 	[47, 10], 	[47, 33],
	[48, 18], 	[49, 1], 	[49, 14], 	[50, 27],
	[51, 31], 	[52, 24], 	[53, 26], 	[54, 9],
	[55, 1], 	[56, 1], 	[56, 75], 	[57, 16],
	[58, 1], 	[58, 14], 	[59, 11], 	[60, 7],
	[62, 1], 	[63, 4], 	[65, 1], 	[66, 1],
	[67, 1], 	[68, 1], 	[69, 1], 	[70, 19],
	[72, 1], 	[73, 20], 	[75, 1], 	[76, 19],
	[78, 1], 	[80, 1], 	[82, 1], 	[84, 1],
	[87, 1], 	[90, 1], 	[94, 1], 	[100, 9],
	[115, 1] 
];

//------------------ Manzil Data ---------------------




//------------------ Ruku Data ---------------------




//------------------ Page Data ---------------------




//------------------ Sajda Data ---------------------




