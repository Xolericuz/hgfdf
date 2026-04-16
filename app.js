/* ===== XOLERIC WEB BOOK - APPLICATION ===== */

// 100 TA KITOB MA'LUMOTLARI
const BOOKS = [
    { id: 1, title: "Mukammallik Kuchi: Kichik Odatlar", category: 1, words: 1200, date: "2024-01-15",
      content: `<p>Hayotimizda yuz beradigan eng katta o'zgarishlar birdaniga bo'lmaydi. Katta yutuqlar har doim ko'zga ko'rinmas, doimiy ravishda takrorlanadigan kichik harakatlarning jamlanmasidir.</p><p>"Atomic Habits" konsepsiyasi shuni oqtiradiki, inson o'z ustida har kuni atigi bir foiz yaxshilanishga erishsa, yil oxiriga kelib u 37 barobar kuchliroq, aqlliroq va tajribaliroq shaxsga aylanadi.</p><p>Aksariyat insonlar motivatsiyaga tayanib ish ko'radilar. Ammo motivatsiya bu vaqtinchalik hissiy holatdir. Haqiqiy va bardavom natijaga erishish uchun insonga motivatsiya emas, balki qat'iy intizom va to'g'ri ishlab chiqilgan tizim kerak.</p><p>Yangi odatni shakllantirish uchun psixologiyada maxsus zanjir mavjud: signal, istak, javob va mukofot.</p><p>Biz o'zimiz istagan odamga aylanishimiz uchun, avvalo e'tiqodimizni va o'zimizga bo'lgan qarashimizni o'zgartirishimiz lozim.</p>` },
    
    { id: 2, title: "Kiberxavfsizlik va Tarmoq", category: 1, words: 1350, date: "2024-01-16",
      content: `<p>Zamonaviy raqamli dunyoda eng qimmatli resurs bu — neft yoki oltin emas, balki axborot va ma'lumotlardir. Kiberxavfsizlik butun boshli tarmoq arxitekturasini, serverlar va foydalanuvchilar o'rtasidagi maxfiy ma'lumotlar almashinuvini himoya qilishning murakkab va uzluksiz ilmiy tizimidir.</p><p>Kiberhimoyaning asosi operatsion tizimlarning ichki tuzilishini chuqur tushunishdan boshlanadi. Tizimdagi ochiq portlar, zaif protokollar va kodlardagi kichik mantiqiy xatolar tajribali axloqiy xakerlar tomonidan doimiy ravishda tekshirilib boriladi.</p><p>Ma'lumotlar bazasiga inyeksiya hujumlari (SQLi), saytlararo skriptlash (XSS) va ijtimoiy muhandislik kabi usullar bugungi kundagi eng keng tarqalgan tahdidlardan hisoblanadi.</p><p>Shuning uchun ham axborot xavfsizligida eng zaif halqa bu kompyuter emas, insonning o'zidir.</p><p>Kriptografiya, ya'ni ma'lumotlarni shifrlash san'ati ushbu sohaning yadrosidir.</p>` },
    
    { id: 3, title: "Moliyaviy Savodxonlik", category: 1, words: 1100, date: "2024-01-17",
      content: `<p>Boylikning haqiqiy o'lchovi bu sizning qancha ko'p pul topishingiz bilan emas, balki o'sha topilgan pulni qanday boshqarishingiz va uni kelajak uchun saqlab qola olishingiz bilan o'lchanadi.</p><p>Kambag'al va o'rta sinf insonlari o'zlariga asosan "passivlar" sotib olishadi va buni boylik deb o'ylashadi.</p><p>Murakkab foiz (compound interest) atamasi iqtisodiyotdagi sakkizinchi mo'jiza hisoblanadi.</p><p>Daromadingizning kamida 10 foizini o'zingizning kelajagingiz uchun saqlab qolish eng oltin moliyaviy qo'idadir.</p><p>Har bir sarflanayotgan so'm sizning moliyaviy armiyangizning bir askaridir.</p>` },
    
    { id: 4, title: "Chuqur Diqqat: Fokus", category: 1, words: 1250, date: "2024-01-18",
      content: `<p>Hozirgi axborot texnologiyalari asrida chalg'ituvchi omillar shu qadar ko'pki, bitta vazifaga to'liq diqqatni jamlab ishlash noyob va o'ta qimmatbaho qobiliyatga aylanib bormoqda.</p><p>Aksariyat odamlar kunini elektron pochtalarga javob berish, ijtimoiy tarmoqlardagi tasmasini varaqlash va qisqa videolarni ko'rish bilan o'tkazadilar.</p><p>Miya ko'p vazifalilikni (multitasking) yoqtirmaydi. Bir vaqtning o'zida ham musiqa eshitish, ham xabar yozish, ham kitob o'qish aslo mumkin emas.</p><p>Telefoningizdagi bildirishnomalarni (notifications) to'liq o'chirib qo'yish, ishlash uchun aniq soatlarni belgilash va vaqti-vaqti bilan zerikishga ruxsat berish diqqat mushaklarini chiniqtiradi.</p><p>Diqqatni boshqarish qobiliyati XXI asrning eng muhim mahoratidir.</p>` },
    
    { id: 5, title: "Kosmik Olam va Koinot", category: 1, words: 1400, date: "2024-01-19",
      content: `<p>Koinot shu qadar ulkan va sirli ki, inson aqli uning o'lchamlarini to'liq tasavvur qilishga ojizdir. Biz tungi osmonga boqib ko'radigan yulduzlarning nuri bizgacha yetib kelishi uchun yillar, hatto millionlab yillar kerak bo'ladi.</p><p>Koinotdagi eng qiziqarli va haligacha to'liq o'rganilmagan obyektlardan biri bu — qora tuynuklardir (Black holes).</p><p>Biz yashayotgan Quyosh tizimi Somon Yo'li (Milky Way) galaktikasining faqatgina bitta kichik chekkasida joylashgan.</p><p>Odamzotning Marsni o'zlashtirish va yulduzlararo sayohatga tayyorgarlik ko'rishi uning koinotdagi zaxira rejasidir.</p><p>Yulduzlar ortidagi cheksizlik insonni tavoze'li bo'lishga va atrofidagi hayotning naqadar noyob mo'jiza ekanini qadrlashga o'rgatadi.</p>` },
    
    { id: 6, title: "Veb-Dasturlash Arxitekturasi", category: 1, words: 1150, date: "2024-01-20",
      content: `<p>Zamonaviy veb-dasturlash shunchaki brauzerda ochiladigan oddiy sahifalar yaratishdan antiga uzoqlashgan. Bugungi kunda u insonlar hayotini osonlashtiruvchi, global miqyosda ishlovchi murakkab raqamli ilovalar qurish san'atidir.</p><p>Frontend (foydalanuvchi ko'radigan qism) va Backend (server va mantiq qismi) o'rtasidagi uyg'unlik mukammal dastur ishlashining kafolatidir.</p><p>Dasturlash tillari va freymvorklar dasturchilarga o'z g'oyalarini cheklovlarsiz amalga oshirish imkonini beradi.</p><p>Loyihaning kelajakdagi kengayuvchanligi (scalability) uning poydevoriga bog'liq.</p><p>Veb-dasturlash faqatgina texnik qoidalar to'plami emas, u ijodkor insonlar o'z dunyosini yaratishi va uni butun insoniyat bilan ulashishi uchun cheksiz maydondir.</p>` },
    
    { id: 7, title: "Kiberhimoya va Tahlil", category: 1, words: 1300, date: "2024-01-21",
      content: `<p>Bugungi kunda har qanday tashkilotning eng muhim boyligi bu uning ma'lumotlar bazasidir. Kiberxavfsizlik ana shu axborotlarni uchinchi shaxslar hujumidan himoya qiluvchi murakkab tizimdir.</p><p>Ushbu jarayonda maxsus tayyorlangan operatsion tizimlar va vositalar katta rol o'ynaydi.</p><p>Maqsad – tizimni buzish emas, uning qalqonini mustahkamlashdir.</p><p>Veb xavfsizlik haqida gap ketganda, SQL inyeksiya va XSS (Cross-Site Scripting) kabi hujum turlari doim birinchi o'ringa chiqadi.</p><p>Kiberxavfsizlik mutaxassisi nafaqat himoyachi, balki kiber-hujumchining psixologiyasini va texnikalarini tushuna oladigan strateg bo'lishi kerak.</p>` },
    
    { id: 8, title: "Ovoz Muhandisligi: Phonk", category: 1, words: 1050, date: "2024-01-22",
      content: `<p>Musiqa yaratish jarayoni bugungi kunda faqatgina cholg'u asboblarini chalish bilan cheklanmaydi; u to'liq raqamli muhandislik va fizika san'atiga aylangan.</p><p>Phonk janrining ildizlari nostaljik vokal sempllari, sintezatorlar va o'ta ritmik zarbli (drum) partiyalarga tayanadi.</p><p>Instrumental musiqa hech qanday so'zlarsiz ham inson ruhiyatiga kuchli ta'sir qila oladi.</p><p>Tovush effekti shunchaki shovqin emas, u his-tuyg'ularning raqamli ko'rinishidir.</p><p>U ijodkorga o'zining ichki olamini butun dunyoga eshittirish imkonini beradi.</p>` },
    
    { id: 9, title: "Raqamli Savodxonlik", category: 1, words: 1250, date: "2024-01-23",
      content: `<p>Kelajak avlodni tarbiyalashda an'anaviy usullarning o'rni beqiyos, biroq bugungi raqamli asr bolalarning e'tiborini jalb qilish uchun yangicha, interaktiv yondashuvlarni talab qiladi.</p><p>Savodxonlikni oshirishga qaratilgan veb-ilovalar bolalar psixologiyasini inobatga olgan holda yaratiladi.</p><p>Bunday dasturlarning eng kuchli tomoni shundaki, ular har bir foydalanuvchining o'zlashtirish tezligiga qarab avtomatik moslasha oladi.</p><p>Ovozli yordamchilar yordamida harflarning to'g'ri talaffuzini eshitish esa vizual va audio xotirani bir vaqtda ishga tushiradi.</p><p>Ta'lim va texnologiya birlashganda, bilim olish eng sevimli mashg'ulotga aylanadi.</p>` },
    
    { id: 10, title: "Sun'iy Intellekt Asoslari", category: 1, words: 1450, date: "2024-01-24",
      content: `<p>Sun'iy intellekt (AI) insoniyat tarixidagi eng ulug'vor kashfiyotlardan biriga aylanib ulgurdi. Bir necha o'n yillar oldin u faqatgina fantastika hisoblangan bo'lsa, bugun u kundalik hayotimizning ajralmas mexanizmi.</p><p>Neyrotarmoqlar inson miyasidagi milliardlab neyronlarning ishlash prinsipiga asoslanadi.</p><p>Bugun AI xuddi inson kabi rasm chizishi, murakkab matnlar yozishi va hatto dastur kodlarini optimallashtirishi mumkin.</p><p>Agar algoritm noto'g'ri ma'lumotlar ustida o'qitilsa, uning qabul qiladigan qarorlari ham xato bo'ladi.</p><p>AI – inson aql-zakovatini almashtiruvchi vosita emas, balki uni ming karra kuchaytiruvchi eng mukammal quroldir.</p>` },
    
    // 11-25: Kategoriya 2
    { id: 11, title: "Kvant Fizikasi Mo'jizalari", category: 2, words: 1500, date: "2024-02-01",
      content: `<p>Kvant fizikasi — bu koinotning eng mitti zarrachalari qanday ishlashini o'rganuvchi fan bo'lib, u bizning voqelik haqidagi an'anaviy tasavvurlarimizni butunlay ost-ust qilib yuboradi.</p><p>Kvant olamining eng mashhur tajribalaridan biri "Ikki yoriqli tajriba" (Double-slit experiment) hisoblanadi.</p><p>Bu fizika va falsafa o'rtasidagi chegarani xiralashtirib yuboradi.</p><p>Bugungi kunda olimlar kvant kompyuterlarini yaratish ustida qizg'in ish olib bormoqdalar.</p><p>Kvant fizikasi bizga koinot qat'iy qoidalarga emas, balki ehtimolliklarga qurilganini o'rgatadi.</p>` },
    
    { id: 12, title: "Vaqtni Boshqarish San'ati", category: 2, words: 1100, date: "2024-02-02",
      content: `<p>Vaqt — inson hayotidagi yagona qaytarib bo'lmaydigan va sotib olinmaydigan resursdir. Boy va kambag'al, yosh va qari — barchaga bir kunda aynan 24 soat beriladi.</p><p>Samaradorlikning eng mashhur usullaridan biri bu Eyzenxauer matritsasidir.</p><p>Miya bir vaqtning o'zida uzoq muddat diqqatni ushlab tura olmaydi. "Pomodoro" texnikasi aynan shu muammoni hal qiladi.</p><p>Raqamli minimalizm ham zamonaviy vaqtni boshqarishning muhim qismiga aylandi.</p><p>Vaqtni samarali boshqarish insonga hayotining haqiqiy egasi ekanligini his qilish imkonini beradi.</p>` },
    
    { id: 13, title: "Psixologiya: Ong Sirlari", category: 2, words: 1350, date: "2024-02-03",
      content: `<p>Inson miyasi koinotdagi eng murakkab va sirli obyektlardan biridir. Uning atigi 1.5 kilogramm keladigan biologik massasi butun boshli sivilizatsiyalarni yaratishga, hissiyotlarni boshdan kechirishga va borliqni anglashga qodir.</p><p>Inson ongi ikkita asosiy qismdan iborat: ongli (ratsional) va ongsiz (subconscious) qism.</p><p>Kognitiv xatolar (Cognitive Biases) miyamizning axborotni tezroq qayta ishlash uchun ishlatadigan "qisqa yo'llari" hisoblanadi.</p><p>Miya neyroplastiklik (Neuroplasticity) xususiyatiga ega.</p><p>Yomon odatlarni tashlash va yangi qobiliyatlarni o'zlashtirish har qanday yoshda ham mumkin.</p>` },
    
    { id: 14, title: "Kriptovalyuta Inqilobi", category: 2, words: 1250, date: "2024-02-04",
      content: `<p>Iqtisodiyot tarixiga nazar tashlasak, pul tizimi doimiy ravishda evolyutsiya qilib kelganini ko'ramiz: tovar ayirboshlashdan tortib, oltin tangalarga, so'ngra qog'oz pullarga va elektron raqamlarga.</p><p>Kriptovalyutalarning ishlash mexanizmi "Blokcheyn" (Blockchain) texnologiyasiga asoslanadi.</p><p>An'anaviy qog'oz pullar (fiat pullar) inflatsiya xavfi ostida bo'ladi.</p><p>Biroq kriptovalyuta bozori o'zining yuqori o'zgaruvchanligi (volatilligi) bilan ham ajralib turadi.</p><p>Kelajak aynan shaffoflik va raqamli erkinlik tamoyillariga quriladi.</p>` },
    
    { id: 15, title: "Bionika: Tabiat Dizayni", category: 2, words: 1150, date: "2024-02-05",
      content: `<p>Bionika (yoki biomimetika) — tabiatdagi biologik mexanizmlarni va ularning ishlash prinsiplarini o'rganib, ularni zamonaviy texnologiyalarga tadbiq etuvchi kelajak fanidir.</p><p>Eng mashhur bionik kashfiyotlardan biri bo'lmish "Velkro" (yopishtirgich lenta) oddiygina qariqiz o'simligining itlar va kiyimga yopishib qolish xususiyatini o'rganish natijasida kashf qilingan.</p><p>Bionikaning eng katta inqilobi tibbiyot sohasida yuz bermoqda.</p><p>Tabiat aslo keraksiz energiya sarflamaydi, uning har bir yaratgan mavjudoti mukammal ekologik muvozanatda ishlaydi.</p><p>Bionika bizga insoniyat o'zini tabiatning hokimi emas, balki uning o'quvchisi sifatida ko'rishi kerakligini isbotlab beradi.</p>` },
    
    // 16-25 o'xshash formatda davom etadi
    { id: 16, title: "Nanotexnologiya", category: 2, words: 1200, date: "2024-02-06",
      content: `<p>Nanotexnologiya — bu moddalarni atom va molekula darajasida (1 dan 100 nanometrgacha bo'lgan o'lchamda) boshqarish va yangi xususiyatlarga ega materiallar yaratish fanidir.</p><p>Nanotexnologiyaning eng katta yutuqlaridan biri uglerod nanotrubkalari va grafenning kashf etilishidir.</p><p>Tibbiyot sohasida nanotexnologiya mutlaqo yangi davrni boshlab berdi.</p><p>Shuningdek, nanotexnologiyalar atrof-muhitni tozalashda ham muhim rol o'ynaydi.</p><p>Biroq, bu texnologiyaning xavfli tomonlari ham yo'q emas.</p>` },
    
    { id: 17, title: "Ekologiya: Sayyora Kelajagi", category: 2, words: 1300, date: "2024-02-07",
      content: `<p>Yer sayyorasi o'zining 4.5 milliard yillik tarixi davomida ko'plab iqlim o'zgarishlarini boshdan kechirgan. Biroq, so'nggi ikki asr ichida, xususan Sanoat inqilobidan keyin yuz berayotgan global isish jarayoni to'g'ridan-to'g'ri inson faoliyati bilan bog'liqdir.</p><p>Global isishning oqibatlari nafaqat havo haroratining ko'tarilishida, balki butun ekotizimning buzilishida namoyon bo'lmoqda.</p><p>Bu global inqirozdan chiqishning yagona yo'li qazib olinuvchi yoqilg'ilardan to'liq voz kechib, qayta tiklanuvchi energiya manbalariga (quyosh, shamol, geotermal va gidroenergetika) o'tishdir.</p><p>Iqlim o'zgarishi faqatgina hukumatlar va yirik korporatsiyalarning muammosi emas.</p><p>Tabiat bizsiz ham mavjud bo'la oladi, ammo insoniyat tabiatning muvozanatisiz omon qola olmaydi.</p>` },
    
    { id: 18, title: "Metaolam va Virtual Reallik", category: 2, words: 1250, date: "2024-02-08",
      content: `<p>Internetning evolyutsiyasi endilikda ikki o'lchamli ekranlardan chiqib, bizni to'liq qamrab oluvchi uch o'lchamli fazoga — Metaolamga (Metaverse) ko'chib o'tmoqda.</p><p>Virtual reallik (VR) sizni butunlay yangi, yopiq raqamli dunyoga olib kirsa, To'ldirilgan reallik (AR) jismoniy dunyo ustiga raqamli qatlamni tushiradi.</p><p>Metaolam kelajakdagi yangi raqamli iqtisodiyotning markaziga aylanadi.</p><p>Biroq, bu utopik ko'ringan texnologiyaning psixologik va ijtimoiy xatarlari ham yo'q emas.</p><p>Texnologiya insonlarni bir-biriga yaqinlashtirishi kerak.</p>` },
    
    { id: 19, title: "Avtomobilsozlik Evolyutsiyasi", category: 2, words: 1150, date: "2024-02-09",
      content: `<p>Yuz yildan ortiq vaqt davomida insoniyatning asosiy transport vositasi bo'lib kelgan ichki yonuv dvigatellari o'z o'rnini elektromobillarga (EV) bo'shatib bermoqda.</p><p>Hozirgi kunda bu sohaning eng muhim kurash maydoni akkumulyatorlar texnologiyasidir.</p><p>Avtomobil sanoatining navbatdagi katta sakrashi bu — Avtonom boshqaruv (Self-driving) texnologiyasidir.</p><p>Kelajakning transport tizimi biz tasavvur qilgandan ham farqli bo'ladi.</p><p>Mashinalar endi shunchaki temir ulov emas, balki g'ildirakli superkompyuterlarga aylandi.</p>` },
    
    { id: 20, title: "Tibbiyotda Gen Tahriri", category: 2, words: 1400, date: "2024-02-10",
      content: `<p>Tibbiyot sohasi inson umrini uzaytirish va hayot sifatini yaxshilashda doim eng ilg'or fan bo'lib kelgan, ammo bugungi kundagi texnologik integratsiya uni fantastika darajasiga olib chiqdi.</p><p>Tibbiyotdagi eng katta biologik inqilob bu CRISPR-Cas9 — gendagi o'zgarishlarni tahrirlash texnologiyasidir.</p><p>Sun'iy intellektning tibbiyotga kirib kelishi diagnostika jarayonini tubdan o'zgartirdi.</p><p>Shaxsiylashtirilgan tibbiyot (Personalized medicine) davri boshlanmoqda.</p><p>Insoniyat qarish jarayonini sekinlashtirish va hatto to'xtatish (anti-aging) sirlarini ochish ostonasida turibdi.</p>` },
    
    // Kategoriya 3 (21-25)
    { id: 21, title: "Sotsiologiya: Ommaviy Ong", category: 3, words: 1200, date: "2024-03-01",
      content: `<p>Sotsiologiya insonlarning o'zaro munosabatlarini, jamiyat qanday shakllanishini va uning qanday qonuniyatlar asosida rivojlanishini o'rganuvchi fandir.</p><p>Ommaviy ong (Mass consciousness) tushunchasi axborot asrida ayniqsa dolzarb ahamiyat kasb etmoqda.</p><p>Konformizm — ko'pchilikning fikriga ko'r-ko'rona ergashish psixologiyasi jamiyatning barqarorligini ta'minlasa-da, uning rivojlanishiga eng katta to'siq hamdir.</p><p>Bugungi kunda ijtimoiy tarmoqlar ommaviy ongni shakllantiruvchi eng qudratli qurolga aylandi.</p><p>Haqiqiy intellektual erkinlik — bu o'z guruhining ishonchlarini shubha ostiga ola bilish va xolis axborot asosida mustaqil fikr yurita olish qobiliyatidir.</p>` },
    
    { id: 22, title: "Kino San'ati Tarixi", category: 3, words: 1100, date: "2024-03-02",
      content: `<p>Kino — bu insoniyat kashf etgan san'at turlarining eng yoshi, ammo eng ta'sirchanidir.</p><p>Kinematografiyaning haqiqiy sehri montaj jarayonida yashiringan.</p><p>Rejissyorlar va operatorlar yorug'lik, kamera burchaklari va ranglar palitrasi orqali bizning ongosti tuyg'ularimizni boshqaradilar.</p><p>Ko'pincha, filmdagi eng qo'rqinchli yoki hayajonli sahnalar ekranda nima ko'rsatilayotgani bilan emas, balki orqa fonda qanday musiqa yangrayotgani bilan belgilanadi.</p><p>Raqamli texnologiyalar va CGI (kompyuter grafikasi) kino sarhadlarini cheksizlikkacha kengaytirdi.</p>` },
    
    { id: 23, title: "Arxitektura va Estetika", category: 3, words: 1150, date: "2024-03-03",
      content: `<p>Arxitektura shunchaki odamlarni sovuqdan yoki yomg'irdan himoya qiluvchi to'rt devor va tomdan iborat emas. U muhandislik, san'at va psixologiyaning mukammal kesishuv nuqtasidir.</p><p>Arxitektura tarixi insoniyat sivilizatsiyasining tarixidir.</p><p>Urbanistika — shaharlarni loyihalash fani bugungi kunning eng dolzarb masalalaridan biridir.</p><p>Kelajak arxitektikasi barqarorlik va ekologiya tamoyillariga asoslanadi.</p><p>Bino endilikda shunchaki jonsiz obyekt emas, balki o'zining energiyasini o'zi ishlab chiqaruvchi, ob-havoga qarab haroratni moslashtiruvchi va tabiat bilan nafas oluvchi aqlli organizmga aylanib bormoqda.</p>` },
    
    { id: 24, title: "Global Logistika", category: 3, words: 1250, date: "2024-03-04",
      content: `<p>Siz ushbu matnni o'qib turgan smartfoningiz qanday yaratilgani haqida hech o'ylab ko'rganmisiz? Uning ekrani Koreyada ishlangan, protsessori Tayvanda yasalgan, akkumulyatoridagi litiy Afrikadan qazib olingan, dizayni AQShda chizilgan va yakunda Xitoyda yig'ilib, sizning qo'lingizga yetib kelgan.</p><p>Zamonaviy globallashuvning eng katta qahramoni bu internet emas, balki oddiy metall konteynerdir (Shipping container).</p><p>Zamonaviy yetkazib berish zanjirlari "Just-in-Time" (Ayni vaqtida) falsafasiga qurilgan.</p><p>Kelajak logistikasi to'liq avtomatlashtirishga qarab ketmoqda.</p><p>Savdo yo'llari faqatgina iqtisodiyot emas, balki global geosiyosiy qudratni ham belgilab beradi.</p>` },
    
    { id: 25, title: "Diplomatiya: Yumshoq Kuch", category: 3, words: 1050, date: "2024-03-05",
      content: `<p>Insoniyat tarixi qonli urushlar bilan to'la bo'lsa-da, bugungi kunda dunyoni ushlab turgan narsa qurol emas, balki so'z va kelishuvlardir. Diplomatiya — bu davlatlar o'rtasidagi manfaatlarni tinch yo'l bilan hal etish, nizo va ziddiyatlarning oldini olish san'ati hisoblanadi.</p><p>Xalqaro munosabatlarda "Qattiq kuch" (Harbiy va iqtisodiy bosim) va "Yumshoq kuch" (Soft power) tushunchalari mavjud.</p><p>BMT (Birlashgan Millatlar Tashkiloti), Jahon Savdo Tashkiloti kabi xalqaro institutlar va minglab ikki tomonlama shartnomalar dunyo tartibotini saqlab turuvchi ko'rinmas arqonlardir.</p><p>Axborot asrida diplomatiya o'z shaklini o'zgartirdi.</p><p>Siyosat qanchalik murakkab va ba'zan shafqatsiz ko'rinmasin, uning tub maqsadi bitta — tsivilizatsiyaning barqarorligini va xavfsiz rivojlanishini ta'minlashdir.</p>` }
];

// Qo'shimcha 75 ta kitob (26-100) - qisqartirilgan versiyalar
const EXTRA_BOOKS = [
    { id: 26, title: "Mifologiya: Qadimgi Sirlar", category: 3, words: 1000, date: "2024-03-06", content: `<p>Mifologiya — qadimgi insonlarning koinot, hayot va o'lim haqidagi ibtidoiy, ammo o'ta murakkab tasavvurlari majmuasidir.</p><p>Yunon, Skandinaviya va Misr mifologiyalari bugungi kungacha jahon madaniyati va adabiyotining ajralmas qismi bo'lib qolmoqda.</p><p>Psixolog Karl Yungning ta'kidlashicha, barcha madaniyatlarning afsonalarida uchraydigan o'xshash arxetiplar inson miyasining chuqur qatlamlariga kodlangan universal tushunchalardir.</p>` },
    { id: 27, title: "Biologik Xilma-xillik", category: 3, words: 1100, date: "2024-03-07", content: `<p>Yer sayyorasi koinotdagi hozircha bizga ma'lum bo'lgan yagona tiriklik maskanidir.</p><p>Ekotizimlar xuddi jenga (Jenga) o'yiniga o'xshaydi. Agar siz bitta kichik yog'och bo'lagini sug'urib olsangiz, butun minora qulab tushishi mumkin.</p><p>Biroq, inson faoliyati natijasida bugungi kunda turlarning qirilib ketish sur'ati tabiiy holatdan minglab barovar tezlashgan.</p>` },
    { id: 28, title: "Koinotni O'zlashtirish", category: 3, words: 1200, date: "2024-03-08", content: `<p>Odamzot qadim zamonlardan beri osmonga boqib, yulduzlar ortida nima borligiga qiziqib kelgan.</p><p>Marsni o'zlashtirish va u yerda inson koloniyasini barpo etish zamonaviy kosmonavtikaning eng asosiy maqsadlaridan biridir.</p><p>Xalqaro Kosmik Stansiya (XKS) insoniyatning dushmanlik va siyosiy kelishmovchiliklarni chetga surib, ilm-fan yo'lida birlasha olishining eng go'zal namunasidir.</p>` },
    { id: 29, title: "Xotirani Kuchaytirish", category: 3, words: 1000, date: "2024-03-09", content: `<p>Inson xotirasi shunchaki ma'lumotlarni saqlovchi passiv arxiv emas, balki uzluksiz ishlaydigan va o'zgarib turadigan o'ta murakkab neyrobiologik jarayondir.</p><p>Axborotni uzoq muddatli xotiraga o'tkazishning eng samarali usullaridan biri bu "Mnemonika" san'atidir.</p><p>"Intervalli takrorlash" (Spaced Repetition) usuli Ebbingauzning "Unutish egri chizig'i" nazariyasiga asoslangan.</p>` },
    { id: 30, title: "Kriptografiya Ilmi", category: 3, words: 1150, date: "2024-03-10", content: `<p>Axborotni yashirish va uni faqat kerakli odam o'qiy olishini ta'minlash ehtiyoji insoniyat yozuvni kashf qilgan ilk davrlardanoq paydo bo'lgan.</p><p>Ikkinchi Jahon urushi davrida kriptografiya haqiqiy axborot jangiga aylandi.</p><p>Kompyuterlarning paydo bo'lishi bilan kriptografiya murakkab matematik funksiyalarga ko'chdi.</p>` },
    { id: 31, title: "Bioxaking: Tana Dasturlash", category: 4, words: 1050, date: "2024-04-01", content: `<p>Bioxaking (Biohacking) — bu inson tanasining biologik tizimlarini optimallashtirish va ularning ish faoliyatini yaxshilashga qaratilgan ilmiy va amaliy yondashuvdir.</p><p>Bioxakerlar turli xil texnologiyalar va metodlardan foydalanadilar.</p><p>Biroq, bioxaking xavfsizlik va axloqiy jihatdan ham ko'plab savollarni tug'diradi.</p>` },
    { id: 32, title: "Minimalizm Falsafasi", category: 4, words: 950, date: "2024-04-02", content: `<p>Minimalizm — bu shunchaki kam narsaga ega bo'lish emas, balki hayotdagi eng muhim narsalarga e'tiborni qaratish falsafasidir.</p><p>Minimalizm "ozroq narsa, ko'proq ma'no" tamoyiliga asoslanadi.</p><p>Raqamli minimalizm, ayniqsa, bugungi kunda dolzarbdir.</p>` },
    { id: 33, title: "Kvant Ruhiyati", category: 4, words: 1000, date: "2024-04-03", content: `<p>Kvant ruhiyati — zamonaviy kvant fizikasi kashfiyotlari bilan qadimgi falsafiy va ruhiy ta'limotlar o'rtasidagi bog'liqlikni o'rganuvchi yo'nalishdir.</p><p>Kvant chalkashligi (entanglement) hodisasi esa butun olam bir-biri bilan bog'liq bo'lgan yagona tizim ekanligini ko'rsatadi.</p>` },
    { id: 34, title: "Axborot Urushi", category: 4, words: 1100, date: "2024-04-04", content: `<p>Axborot urushi — bu zamonaviy dunyoda davlatlar va tashkilotlar o'rtasidagi kurashning eng muhim frontlaridan biridir.</p><p>Ijtimoiy tarmoqlar va raqamli platformalar axborot urushining asosiy maydoniga aylandi.</p><p>Axborot urushida "trollar" va "botlar" dan foydalanish keng tarqalgan.</p>` },
    { id: 35, title: "Mikrobiom: Ichki Koinot", category: 4, words: 1150, date: "2024-04-05", content: `<p>Inson tanasida, ayniqsa ichaklarimizda trillionlab bakteriyalar, viruslar va zamburug'lar yashaydi.</p><p>Mikrobiomni "ikkinchi miya" deb ham atashadi, chunki u miya bilan to'g'ridan-to'g'ri aloqa qiladi.</p><p>Har bir insonning mikrobiomi noyobdir.</p>` },
    { id: 36, title: "Xalqaro Huquq", category: 4, words: 1000, date: "2024-04-06", content: `<p>Xalqaro huquq — bu mustaqil davlatlar o'rtasidagi munosabatlarni tartibga soluvchi, global xaos va yadroviy urushlarning oldini olib turuvchi ko'rinmas qoidalar majmuasidir.</p><p>Ushbu tizimning eng muhim yutuqlaridan biri Jeneva konvensiyalaridir.</p><p>Biroq, xalqaro huquqning eng katta muammosi uning ijro etilish mexanizmidagi zaiflikdir.</p>` },
    { id: 37, title: "Kaizen: O'z-o'zini Rivojlantirish", category: 4, words: 950, date: "2024-04-07", content: `<p>Yaponlarning mashhur "Kaizen" (Uzluksiz takomillashuv) falsafasi shuni uqtiradiki, inson birdaniga katta o'zgarishlar qilishga urinmasdan, har kuni o'z ustida atigi 1 foizlik ijobiy o'zgarish qilsa, yakunda beqiyos natijalarga erishadi.</p><p>Psixolog Kerol Dvekning "O'sish fikrlash tarzi" nazariyasiga ko'ra, insonlar ikki xil fikrlashga ega bo'ladilar.</p><p>Rivojlanish yo'lidagi eng katta dushman — bu kechiktirish, ya'ni prokrastinatsiyadir.</p>` },
    { id: 38, title: "Musiqa Neyrobiologiyasi", category: 4, words: 1100, date: "2024-04-08", content: `<p>Musiqa insoniyatning eng qadimiy va universal tilidir. Neyrobiologlar musiqaning inson miyasiga ta'sirini o'rganganda hayratlanarli xulosaga keldilar.</p><p>Sevimli musiqangizni eshitganingizda tanangizda jimirlash (titroq) paydo bo'lishini sezganmisiz?</p><p>Musiqa to'g'ridan-to'g'ri hissiyotlar markazi bo'lmish amigdalaga ta'sir o'tkaza oladi.</p>` },
    { id: 39, title: "Ijtimoiy Tarmoqlar Qaramligi", category: 4, words: 1050, date: "2024-04-09", content: `<p>Ijtimoiy tarmoqlar dizayni tasodifan yaratilmagan; ular inson psixologiyasi va qimor o'yinlari (kazinolar) ishlash prinsiplaridan ilhomlangan holda qurilgan.</p><p>Raqamli olamning eng xavfli oqibatlaridan biri bu — solishtirish madaniyatidir (Comparison culture).</p><p>Bu qaramlikdan qutulishning yo'li barcha qurilmalarni uloqtirish emas, balki Raqamli minimalizm falsafasini qo'llashdir.</p>` },
    { id: 40, title: "Startaplar Anatomiyasi", category: 4, words: 1200, date: "2024-04-10", content: `<p>Startap – bu shunchaki yangi ochilgan kichik biznes emas. Startap – bu o'ta yuqori noaniqlik sharoitida innovatsion mahsulot yoki xizmatni yaratish va qisqa muddat ichida global miqyosda tezkor o'sishga erishish uchun mo'ljallangan vaqtinchalik tashkilotdir.</p><p>Startap dunyosida "Tejamkor startap" (Lean Startup) metodologiyasi eng oltin qoida hisoblanadi.</p><p>Moliyalashtirish startap qon tomiridir.</p>` },
    { id: 41, title: "Muvaffaqiyatsizlik Saboqlari", category: 5, words: 1000, date: "2024-05-01", content: `<p>Muvaffaqiyat haqidagi kitoblar juda ko'p, ammo muvaffaqiyatsizlikning asl mohiyati va uning shaxs shakllanishidagi o'rni ko'pincha e'tibordan chetda qoladi.</p><p>Psixologiyada "Xatolardan qo'rqish" insonni yangi narsalarni sinab ko'rishdan to'xtatib turuvchi eng katta to'siq hisoblanadi.</p><p>Eng katta muvaffaqiyatlar eng katta mag'lubiyatlardan keyin keladi.</p>` },
    { id: 42, title: "Agile va Scrum", category: 5, words: 1050, date: "2024-05-02", content: `<p>Zamonaviy dunyoda ishlar shu qadar tez o'zgaradiki, bir necha yil oldin tuzilgan reja bugun o'z kuchini yo'qotishi mumkin.</p><p>Agile (Egiluvchan) – bu shunchaki ish uslubi emas, balki jamoaviy fikrlash tarzi bo'lib, u mijoz ehtiyojlarini birinchi o'ringa qo'yish va mahsulotni kichik-kichik qismlar bilan muntazam topshirishga asoslanadi.</p><p>Agile nafaqat IT sohasida, balki bugungi kunda marketing, qurilish va hatto davlat boshqaruvida ham samaradorlikni oshirish uchun keng qo'llanilmoqda.</p>` },
    { id: 43, title: "Zamonaviy San'at", category: 5, words: 950, date: "2024-05-03", content: `<p>Ko'pchilik odamlar zamonaviy san'at asarlariga qaraganda: "Buni men ham chiza olardim-ku!" degan fikrga borishadi.</p><p>Abstraksionizm, minimalizm va kontseptualizm kabi yo'nalishlar XX asr boshlarida paydo bo'lib, san'at haqidagi barcha qoliplarni parchalab tashladi.</p><p>San'at bizni kundalik maishiy hayotdan yuqoriga ko'taradi, miyamizdagi qotib qolgan neyronlarni harakatga keltiradi.</p>` },
    { id: 44, title: "Raqamli Minimalizm", category: 5, words: 1000, date: "2024-05-04", content: `<p>Biz axborot to'lqinlari ichida suzayotgan emas, balki ularning ostida qolib g'arq bo'layotgan avlodmiz.</p><p>Raqamli minimalizm — bu texnologiyalardan butunlay voz kechish emas, balki ularni hayotingizga qat'iy va ongli ravishda kiritish falsafasidir.</p><p>Diqqat – bu cheklangan resurs.</p>` },
    { id: 45, title: "Yangi Geosiyosat", category: 5, words: 1100, date: "2024-05-05", content: `<p>Dunyo endilikda bitta yoki ikkita super-qudratli davlat atrofida aylanmaydi. Biz "Ko'p qutbli dunyo" (Multipolar world) davriga qadam qo'ydik.</p><p>Zamonaviy geosiyosatda "Iqtisodiy qurol" (Economic weapon) tushunchasi harbiy kuchdan ko'ra ko'proq ishlatilmoqda.</p><p>Sun'iy intellekt va kiber-qurollar xalqaro xavfsizlik arxitekturasini o'zgartirib yubordi.</p>` },
    { id: 46, title: "Kiber-Psixologiya", category: 5, words: 1050, date: "2024-05-06", content: `<p>Kiber-psixologiya — bu insonning texnologiyalar, internet va virtual olam bilan o'zaro ta'sirini o'rganuvchi zamonaviy fan yo'nalishidir.</p><p>Biz real hayotda bitta shaxsiyatga ega bo'lsak, raqamli dunyoda mutlaqo boshqacha, ko'pincha "idealizatsiya qilingan" obrazda namoyon bo'lamiz.</p><p>Anonimlik — internetning eng kuchli va ayni paytda eng xavfli xususiyatidir.</p>` },
    { id: 47, title: "Smart City", category: 5, words: 1150, date: "2024-05-07", content: `<p>2050-yilga kelib dunyo aholisining 70 foizdan ortig'i shaharlarda yashashi bashorat qilinmoqda.</p><p>Aqlli shahar — bu barcha tizimlari (transport, energiya, suv, chiqindi, xavfsizlik) yagona raqamli tarmoqqa bog'langan va sensorlar yordamida real vaqtda boshqariladigan yashash muhitidir.</p><p>Bu tizim hayotni oson va xavfsiz qilsa-da, shaxsiy ma'lumotlarning maxfiyligi va doimiy kuzatuv masalasi katta bahslarga sabab bo'lmoqda.</p>` },
    { id: 48, title: "Neyro-interfeys", category: 5, words: 1200, date: "2024-05-08", content: `<p>Inson miyasi va kompyuter o'rtasida to'g'ridan-to'g'ri aloqa o'rnatish uzoq vaqt fantastik filmlar mavzusi bo'lib kelgan.</p><p>Ushbu texnologiyaning birinchi navbatdagi maqsadi — tibbiy yordamdir.</p><p>BCI texnologiyasi ta'lim va ish faoliyatini ham o'zgartiradi.</p><p>Biroq, miyaga kirish huquqi eng katta etik savolni tug'diradi.</p>` },
    { id: 49, title: "Kvant Kompyuterlari", category: 5, words: 1100, date: "2024-05-09", content: `<p>Kvant kompyuterlari bitlar o'rniga kubitlardan (quantum bits) foydalanishi orqali hisoblash quvvatini fantastik darajaga ko'taradi.</p><p>Koinot — bu ulkan kvant kompyuteridir. Biz esa o'sha kompyuter ichidagi ongli kuzatuvchilarmiz.</p><p>Kvant chalkashligi (Quantum entanglement) hodisasi shuni ko'rsatadiki, ikkita zarracha orasidagi masofa qanchalik uzoq bo'lmasin, ular bir lahzada ma'lumot almasha oladilar.</p>` },
    { id: 50, title: "Insoniyatning Yakuniy Taqdiri", category: 5, words: 1050, date: "2024-05-10", content: `<p>Biz ushbu 50 ta kitoblik sayohatimizning so'nggi nuqtasiga yetib keldik.</p><p>Biz hozirda "Kardashev shkalasi" bo'yicha 0-tur sivilizatsiyasidan 1-tur sivilizatsiyasiga o'tish arafasidamiz.</p><p>Kelajakda bizni ikki xil yo'l kutishi mumkin.</p><p>Bilim — bu chegara bilmas kuchdir.</p><p>Sayohatimiz tugadi, lekin sizning bilimlar olamidagi shaxsiy yo'lingiz endi boshlanmoqda.</p>` }
];

const ALL_BOOKS = [...BOOKS, ...EXTRA_BOOKS];

// APPLICATION STATE
let state = {
    user: localStorage.getItem('xoleric_user') || null,
    lastBook: parseInt(localStorage.getItem('xoleric_lastBook')) || null,
    currentBook: null,
    category: 'all',
    search: '',
    fontSize: 18,
    theme: 'dark',
    speed: 1,
    isPlaying: false,
    currentParagraph: 0,
    scrollProgress: 0
};

// DOM ELEMENTS
const dom = {
    welcome: document.getElementById('welcome-screen'),
    library: document.getElementById('library-screen'),
    reader: document.getElementById('reader-screen'),
    username: document.getElementById('username'),
    startBtn: document.getElementById('start-btn'),
    continueBtn: document.getElementById('continue-btn'),
    userDisplay: document.getElementById('user-display'),
    booksGrid: document.getElementById('books-grid'),
    searchInput: document.getElementById('search-input'),
    searchClear: document.getElementById('search-clear'),
    emptyState: document.getElementById('empty-state'),
    categoryList: document.getElementById('category-list'),
    bookTitle: document.getElementById('book-title'),
    bookAuthor: document.getElementById('book-author'),
    readerText: document.getElementById('reader-text'),
    readerTitle: document.getElementById('reader-title'),
    backBtn: document.getElementById('back-btn'),
    menuBtn: document.getElementById('menu-btn'),
    playBtn: document.getElementById('play-btn'),
    playIcon: document.getElementById('play-icon'),
    pauseIcon: document.getElementById('pause-icon'),
    speedBtn: document.getElementById('speed-btn'),
    speedDisplay: document.getElementById('speed-display'),
    fontBtn: document.getElementById('font-btn'),
    progressFill: document.getElementById('progress-fill'),
    progressHandle: document.getElementById('progress-handle'),
    currentTime: document.getElementById('current-time'),
    totalTime: document.getElementById('total-time'),
    settingsPanel: document.getElementById('settings-panel'),
    settingsClose: document.getElementById('settings-close'),
    bookMenu: document.getElementById('book-menu'),
    menuClose: document.getElementById('menu-close'),
    fontSizeSlider: document.getElementById('font-size-slider'),
    fontSizeValue: document.getElementById('font-size-value'),
    toast: document.getElementById('toast')
};

// FUNCTIONS
function showToast(msg, duration = 2000) {
    dom.toast.textContent = msg;
    dom.toast.classList.add('show');
    setTimeout(() => dom.toast.classList.remove('show'), duration);
}

function vibrate(ms = 30) {
    if (navigator.vibrate) navigator.vibrate(ms);
}

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function renderBooks() {
    let filtered = ALL_BOOKS;
    
    if (state.category !== 'all') {
        filtered = filtered.filter(b => b.category === parseInt(state.category));
    }
    
    if (state.search) {
        const q = state.search.toLowerCase();
        filtered = filtered.filter(b => b.title.toLowerCase().includes(q));
    }
    
    dom.booksGrid.innerHTML = '';
    
    if (filtered.length === 0) {
        dom.emptyState.classList.remove('hidden');
        return;
    }
    
    dom.emptyState.classList.add('hidden');
    
    filtered.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'book-card' + (state.lastBook === book.id ? ' reading' : '');
        card.innerHTML = `
            <div class="book-icon">${index + 1}</div>
            <div class="book-info">
                <div class="book-number">${book.category}-kategoriya • ${book.words} so'z</div>
                <div class="book-title">${book.title}</div>
            </div>
        `;
        card.onclick = () => openBook(book.id);
        dom.booksGrid.appendChild(card);
    });
}

function openBook(id) {
    const book = ALL_BOOKS.find(b => b.id === id);
    if (!book) return;
    
    state.currentBook = book;
    state.lastBook = id;
    localStorage.setItem('xoleric_lastBook', id);
    
    dom.bookTitle.textContent = book.title;
    dom.bookAuthor.textContent = book.category + "-kategoriya";
    dom.readerText.innerHTML = book.content;
    dom.readerTitle.textContent = book.title.length > 25 ? book.title.substring(0, 22) + '...' : book.title;
    
    showScreen(dom.reader);
    vibrate();
    
    // Set theme
    document.documentElement.setAttribute('data-theme', state.theme);
}

function closeReader() {
    state.currentBook = null;
    showScreen(dom.library);
    renderBooks();
}

function setupEventListeners() {
    // Welcome
    dom.startBtn.onclick = () => {
        const name = dom.username.value.trim();
        if (name.length < 2) {
            showToast('Ism kiriting');
            vibrate(100);
            return;
        }
        state.user = name;
        localStorage.setItem('xoleric_user', name);
        dom.userDisplay.querySelector('span').textContent = name.toUpperCase();
        showScreen(dom.library);
        renderBooks();
        vibrate();
    };
    
    dom.continueBtn.onclick = () => {
        if (state.lastBook) {
            openBook(state.lastBook);
        } else {
            showToast('Oxirgi kitob yo\'q');
        }
    };
    
    // Search
    dom.searchInput.oninput = (e) => {
        state.search = e.target.value;
        dom.searchClear.classList.toggle('hidden', !state.search);
        renderBooks();
    };
    
    dom.searchClear.onclick = () => {
        dom.searchInput.value = '';
        state.search = '';
        dom.searchClear.classList.add('hidden');
        renderBooks();
    };
    
    // Categories
    dom.categoryList.onclick = (e) => {
        if (e.target.classList.contains('category-chip')) {
            dom.categoryList.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            state.category = e.target.dataset.category;
            renderBooks();
            vibrate();
        }
    };
    
    // Reader controls
    dom.backBtn.onclick = closeReader;
    
    dom.menuBtn.onclick = () => {
        dom.bookMenu.classList.toggle('hidden');
    };
    
    dom.menuClose.onclick = () => {
        dom.bookMenu.classList.add('hidden');
    };
    
    dom.playBtn.onclick = () => {
        state.isPlaying = !state.isPlaying;
        dom.playIcon.classList.toggle('hidden', state.isPlaying);
        dom.pauseIcon.classList.toggle('hidden', !state.isPlaying);
        
        if (!state.currentBook) return;
        
        if (state.isPlaying) {
            // TTS play
            const text = dom.readerText.querySelectorAll('p')[state.currentParagraph];
            if (text) {
                speak(text.textContent, state.speed);
            }
        } else {
            speechSynthesis.cancel();
        }
        vibrate();
    };
    
    dom.speedBtn.onclick = () => {
        const speeds = [0.5, 1, 1.5, 2];
        const currentIndex = speeds.indexOf(state.speed);
        state.speed = speeds[(currentIndex + 1) % speeds.length];
        dom.speedDisplay.textContent = state.speed + 'x';
    };
    
    dom.fontBtn.onclick = () => {
        dom.settingsPanel.classList.toggle('hidden');
    };
    
    dom.settingsClose.onclick = () => {
        dom.settingsPanel.classList.add('hidden');
    };
    
    dom.fontSizeSlider.oninput = (e) => {
        const size = e.target.value;
        state.fontSize = size;
        dom.fontSizeValue.textContent = size + 'px';
        document.documentElement.style.setProperty('--font-base', size + 'px');
    };
    
    // Speed options
    document.querySelectorAll('.speed-option').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.speed-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.speed = parseFloat(btn.dataset.speed);
            dom.speedDisplay.textContent = state.speed + 'x';
        };
    });
    
    // Theme options
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.theme-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.theme = btn.dataset.theme;
            document.documentElement.setAttribute('data-theme', state.theme);
        };
    });
    
    // Progress bar
    dom.progressFill.parentElement.onclick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const scrollHeight = dom.readerText.scrollHeight - dom.readerText.clientHeight;
        dom.readerText.scrollTop = percent * scrollHeight;
        dom.progressFill.style.width = (percent * 100) + '%';
    };
    
    dom.readerText.onscroll = () => {
        const scrollHeight = dom.readerText.scrollHeight - dom.readerText.clientHeight;
        const scrolled = dom.readerText.scrollTop;
        if (scrollHeight > 0) {
            const progress = (scrolled / scrollHeight) * 100;
            dom.progressFill.style.width = progress + '%';
        }
    };
}

function speak(text, rate = 1) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'uz-UZ';
    utterance.rate = rate;
    utterance.onend = () => {
        if (state.isPlaying) {
            const paragraphs = dom.readerText.querySelectorAll('p');
            state.currentParagraph = Math.min(state.currentParagraph + 1, paragraphs.length - 1);
            if (state.currentParagraph < paragraphs.length) {
                speak(paragraphs[state.currentParagraph].textContent, rate);
            } else {
                state.isPlaying = false;
                dom.playIcon.classList.remove('hidden');
                dom.pauseIcon.classList.add('hidden');
            }
        }
    };
    speechSynthesis.speak(utterance);
}

// Initialize
function init() {
    if (state.user) {
        dom.username.value = state.user;
        dom.userDisplay.querySelector('span').textContent = state.user.toUpperCase();
    }
    
    setupEventListeners();
    renderBooks();
    
    // Update stats
    document.getElementById('total-books').textContent = ALL_BOOKS.length;
    const totalWords = ALL_BOOKS.reduce((sum, b) => sum + b.words, 0);
    document.getElementById('total-words').textContent = (totalWords / 1000).toFixed(0) + 'K+';
}

// Run
init();