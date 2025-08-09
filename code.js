document.addEventListener('DOMContentLoaded', function () {
  const btnGenAyah = document.getElementById('genAyah');
  const ayahCont = document.getElementById('Ayah');

  const ayahs = [
    {
      ar: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
      en: "Allah does not burden a soul beyond that it can bear."
    },
    {
      ar: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      en: "Indeed, with hardship comes ease. Indeed, with hardship comes ease."
    },
    {
      ar: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا",
      en: "Say, 'Nothing will ever befall us except what Allah has destined for us.'"
    },
    {
      ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
      en: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient."
    },
    {
      ar: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
      en: "Whoever fears Allah, He will make a way out for them and provide from where they do not expect."
    },
    {
      ar: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
      en: "Indeed, Allah is with the patient."
    },
    {
      ar: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
      en: "Indeed we belong to Allah, and indeed to Him we will return."
    },
    {
      ar: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
      en: "Verily, in the remembrance of Allah do hearts find rest."
    }
    ,
    {
      ar: "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
      en: "Allah does not burden a soul beyond that it can bear."
    }
    ,
    {
      ar: "لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ",
      en: "Do not despair of the mercy of Allah.."
    }
    ,
    {
      ar: "وَمَن يَغْفِرُ ٱلذُّنُوبَ إِلَّا ٱللَّهُ",
      en: "And who can forgive sins except Allah"
    }
  ];

  btnGenAyah.addEventListener('click', function () {
    const randomAyah = ayahs[Math.floor(Math.random() * ayahs.length)];
    ayahCont.innerHTML = `
      <div style="font-size: 24px; margin-bottom: 10px; font-family: QFF;">${randomAyah.ar}</div>
      <div style="font-size: 18px; color: gray; margin-top: -10px;">(${randomAyah.en})</div>
    `;
  });
});



