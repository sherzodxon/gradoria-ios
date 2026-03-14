import { Constitution } from '@/types';

export const constitution: Constitution = {
  rules: {
    positive: [
      {
        band: 1,
        title: "Fan, ijodkorlik va faoliyat bo'yicha +50",
        items: [
          { article: 1, mod: 1, description: "Maktab sha'nini himoya qiluvchi tadbirlarda faol ishtirok etish va maktabni rivojlantirish uchun hissa qo'shadigan g'oya yoki taklif berish.", points: 50 },
          { article: 2, mod: 2, description: "Maktabdagi tadbirlarni o'tkazishda faol qatnashish (boshlovchi, sahna ishtirokchisi, tashkilotchi bo'lish).", points: 50 },
          { article: 3, mod: 3, description: "Kitob muhokamalarida yaxshi qatnashgani uchun.", points: 50 },
        ],
      },
      {
        band: 2,
        title: "Xulq-atvor va intizom bo'yicha +10",
        items: [
          { article: 4, mod: 4, description: "Darsga vaqtida kelish va tayyor bo'lish.", points: 10 },
          { article: 5, mod: 5, description: "Dars jarayonida faol ishtirok etish, savollarga to'g'ri javob berish.", points: 10 },
          { article: 6, mod: 6, description: "Uy vazifalarini muntazam va sifatli bajarish.", points: 10 },
          { article: 7, mod: 7, description: "O'qituvchi topshiriqlarini e'tibor bilan tinglash va bajarish.", points: 10 },
          { article: 8, mod: 8, description: "Sinfda tartib-intizomga rioya qilish, o'zini odobli tutish.", points: 10 },
        ],
      },
      {
        band: 3,
        title: "Madaniyat, o'zaro hurmat va axloq bo'yicha",
        items: [
          { article: 9, mod: 9, description: "O'qituvchilar, kattalar va mehmonlar bilan salomlashish, hurmat bilan muomalal qilish.", points: 10 },
          { article: 10, mod: 10, description: "Sinfdoshlariga, kichik o'quvchilarga yordam berish.", points: 10 },
          { article: 11, mod: 11, description: "Jamoa orasida do'stona, tinch munosabatni saqlash.", points: 10 },
        ],
      },
      {
        band: 4,
        title: "Tozalik va mas'uliyat bo'yicha +10",
        items: [
          { article: 12, mod: 12, description: "Sinfxonada va maktab hududida tozalikni saqlash.", points: 10 },
          { article: 13, mod: 13, description: "Navbatchilik vazifasini vijdonan bajarish (sinfxonada va oshxonada).", points: 10 },
          { article: 14, mod: 14, description: "Maktab mulkini asrab-avaylash, buyumlarni joyiga qo'yish.", points: 10 },
          { article: 15, mod: 15, description: "O'quv asbob-uskunalaridan ehtiyotkorlik bilan foydalanish.", points: 10 },
        ],
      },
      {
        band: 5,
        title: "Shaxsiy rivojlanish va tashabbuskorlik bo'yicha",
        items: [
          { article: 16, mod: 16, description: "O'z fikrini mustaqil, madaniyatli tarzda ifoda etish.", points: 5 },
          { article: 17, mod: 17, description: "Boshqalarga ijobiy ta'sir ko'rsatish, namuna bo'lish.", points: 10 },
          { article: 18, mod: 18, description: "O'qituvchilar tomonidan intizomli, namunali o'quvchi sifatida e'tirof etilish.", points: 10 },
          { article: 19, mod: 19, description: "Kundalik vazifalarni har kuni telegram guruhlarga jo'natib borish.", points: 10 },
          { article: 20, mod: 20, description: "EdEx kundaligini muntazam to'ldirib borish.", points: 10 },
        ],
      },
      {
        band: 6,
        title: "Jamoaviy va ichki faoliyatga qo'shgan hissa",
        items: [
          { article: 21, mod: 21, description: "O'quvchilar o'rtasida kelishmovchiliklarni tinch yo'l bilan hal etishga yordam berish.", points: 10 },
          { article: 22, mod: 22, description: "O'qituvchi yoki ma'muriyat topshiriqlarini bajarishda mas'uliyatli bo'lish.", points: 10 },
        ],
      },
    ],
    negative: [
      {
        band: 7,
        title: "Jiddiy qoidabuzarliklar (Eng og'ir darajadagilar) -100 ball",
        items: [
          { article: 23, mod: 23, description: "Zo'ravonlik, urish, haqorat, tahdid yoki kamsitish harakatlarini sodir etish.", points: -100 },
          { article: 24, mod: 24, description: "O'qituvchilarga yoki maktab ma'muriyatiga hurmatsizlik ko'rsatish.", points: -100 },
          { article: 25, mod: 25, description: "Maktab mulkiga ataylab zarar yetkazish (mebel, texnika, devor, jihozlar va hokazo).", points: -100 },
          { article: 26, mod: 26, description: "Maktabga o'tkir buyum, pichoq, gaz balanchasi yoki boshqa xavfli vositalarni olib kirish.", points: -100 },
          { article: 27, mod: 27, description: "Boshqa o'quvchini kamsitish, haqoratli laqab qo'yish, zo'ravonlik yoki ig'vo, chaqimchilik qilish.", points: -100 },
          { article: 28, mod: 28, description: "Kiberzo'ravonlik — telefon, internet, ijtimoiy tarmoqlarda boshqalarni masxara qilish yoki ruxsatsiz ma'lumot tarqatish.", points: -100 },
          { article: 29, mod: 29, description: "Maktabda yoki maktab nomidan yolg'on axborot tarqatish.", points: -100 },
          { article: 30, mod: 30, description: "O'quvchilarning shaxsiy hayotiga, obro'siga zarar yetkazuvchi harakatlar qilish.", points: -100 },
        ],
      },
      {
        band: 8,
        title: "Xavfsizlik qoidalarini buzish holatlari -20 ball",
        items: [
          { article: 31, mod: 31, description: "Elektr jihozlariga ruxsatsiz tegish, ularni o'chirish yoki ulash.", points: -20 },
          { article: 32, mod: 32, description: "Yong'in xavfsizligi qoidalarini buzish (o'yinchoq gugurt, yoqilg'i vositalari bilan o'ynash).", points: -20 },
          { article: 33, mod: 33, description: "Zina, deraza, balkon yoki yuqori joylardan sakrash yoki turish.", points: -20 },
          { article: 34, mod: 34, description: "Sport zallarida o'qituvchi ruxsatsiz kirish.", points: -20 },
          { article: 35, mod: 35, description: "O'qituvchi ruxsatsiz maktab hududidan chiqib ketish.", points: -20 },
        ],
      },
      {
        band: 9,
        title: "Intizom va o'qishga oid qoidabuzarliklar -50 ball",
        items: [
          { article: 36, mod: 36, description: "Maktab hovlisida self-study vaqtida sayr qilib yurish.", points: -50 },
          { article: 37, mod: 37, description: "Darsdan qochish, darsni ataylab buzish yoki gaplashib darsni bo'lish.", points: -50 },
          { article: 38, mod: 38, description: "Uy vazifalarini bajarmaslik yoki boshqa o'quvchidan ko'chirish.", points: -50 },
          { article: 39, mod: 39, description: "Test, baho yoki hujjatlarda soxtalashtirishga urinish.", points: -50 },
          { article: 40, mod: 40, description: "O'qituvchi yoki nazoratchi ko'rsatmalarini bajarmaslik.", points: -50 },
          { article: 41, mod: 41, description: "Telefonlarni olib kirishga urinish.", points: -50 },
          { article: 42, mod: 42, description: "Darsga tayyorgarliksiz kelish, daftarsiz o'tirish.", points: -50 },
          { article: 43, mod: 43, description: "Maktab hududiga yeguliklar olib kirishga urinish.", points: -50 },
          { article: 44, mod: 44, description: "Dars paytida o'rinsiz kulish, chalg'ituvchi harakatlar qilish.", points: -50 },
        ],
      },
      {
        band: 10,
        title: "Kiyinish va tartib qoidalari",
        items: [
          { article: 45, mod: 45, description: "Haddan tashqari pardoz-andoz bilan kelish (bo'yoq, lak, zargarlik buyumlari va h.k.).", points: -100 },
          { article: 46, mod: 46, description: "Jismoniy tarbiya darslarida belgilangan sport kiyimini kiymagan holda bo'lsa.", points: -20 },
        ],
      },
      {
        band: 11,
        title: "Axloq va odobga oid qoidabuzarliklar -50 ball",
        items: [
          { article: 47, mod: 47, description: "Katta yoshdagilarga, mehmonlarga, o'qituvchilarga salom bermaslik.", points: -50 },
          { article: 48, mod: 48, description: "Sinfdoshlar bilan qo'pol munosabatda bo'lish, masxara qilish yoki so'kish.", points: -50 },
          { article: 49, mod: 49, description: "Shaxsiy narsalarni ruxsatsiz olish.", points: -50 },
          { article: 50, mod: 50, description: "O'zidan kichik o'quvchilarni kamsitish yoki masxara qilish.", points: -50 },
          { article: 51, mod: 51, description: "Ota-onasi yoki o'qituvchilari haqida salbiy fikrlar tarqatish.", points: -50 },
          { article: 52, mod: 52, description: "Odamlar bilan odobsiz gaplashish, kinoya yoki istehzo bilan so'zlashish.", points: -50 },
        ],
      },
      {
        band: 12,
        title: "Tozalik va madaniyat qoidalari -50 ball",
        items: [
          { article: 53, mod: 53, description: "Maktab hududida axlat tashlash, stol yoki devorga yozish, bezaklarni buzish.", points: -50 },
          { article: 54, mod: 54, description: "Sinfxonada saqich, yegulik iste'mol qilish.", points: -50 },
          { article: 55, mod: 55, description: "Stol ostiga, polga qog'oz yoki chiqindi tashlash.", points: -50 },
          { article: 56, mod: 56, description: "Maktab oshxonasida tayyorlangan ovqatlarni oshxonada yemagan holda (sinfxonasi yoki yo'lakda).", points: -50 },
          { article: 57, mod: 57, description: "Darslar tugagach sinfxonasi navbatchi o'quvchi tomonidan tozalanmasa.", points: -50 },
          { article: 58, mod: 58, description: "Maktab hojatxonasida yig'ilib olib suhbatlashish, pardoz qilish.", points: -50 },
        ],
      },
      {
        band: 13,
        title: "Tanaffus va dam olish paytidagi qoidalar -20 ball",
        items: [
          { article: 59, mod: 59, description: "Baland ovozda baqirish, yugurish yoki boshqalarni itarish.", points: -20 },
          { article: 60, mod: 60, description: "O'qituvchi yo'qligidan foydalanib, o'tirish yoki o'yin o'ynashda haddan oshish.", points: -20 },
          { article: 61, mod: 61, description: "Boshqa sinf yoki kabinetga ruxsatsiz kirish.", points: -20 },
          { article: 62, mod: 62, description: "Ovqatlanish joyida tartibni buzish, oziq-ovqatni uloqdirish.", points: -20 },
          { article: 63, mod: 63, description: "O'yinchoq, shar yoki boshqa chalg'ituvchi narsalarni darsda o'ynash.", points: -20 },
        ],
      },
      {
        band: 14,
        title: "Raqamli axborot madaniyati -20",
        items: [
          { article: 64, mod: 64, description: "Boshqa o'quvchi yoki o'qituvchi suratini ruxsatsiz tarqatish.", points: -20 },
        ],
      },
    ],
  },
};
