// Yoga workout position data
var yogaPosData = [
  {fileName: "man-standing-on-one-leg",
    pos: "Vrikshasana (Tree Pose)", description: "Reps: 2–4 Sets: 1"},
  {fileName: "man-standing-on-his-right-leg-stretching-left-leg-and-right-arm",
    pos: "Natarajasana (Dancer Pose)", description: "Reps: 2–4 Sets: 1"},
  {fileName: "woman-stretching-and-flexing-legs-with-arms-up",
    pos: "Ashta chandrasana (Crescent warrior Pose)", description: "Reps: 2–4 Sets: 1"},
  {fileName: "man-standing-on-right-leg-stretching-leg-and-arms",
    pos: "Virabhadrasana III (Warrior III Pose)", description: "Reps: 2–4 per side Sets: 1"},
  {fileName: "man-supporting-himself-on-one-arm-and-stretching-right-arm",
    pos: "Vasisthasana (Side plank Pose)", description: "Reps: 2–4 per side Sets: 1"},
  {fileName: "woman-stretching-arms-and-flexing-legs",
    pos: "Trikonasana (Triangle Pose Pose)", description: "Reps: 1 on each side Sets: 1"},
  {fileName: "woman-laying-down-lifting-head",
    pos: "Urdhva Mukha Shvanasana (Upward-facing dog Pose)", description: "Reps: 2-4 Sets: 1"},
  {fileName: "man-flexing-waist",
    pos: "Adho mukha svanasana (Downward-facing dog Pose)", description: "Reps: 2-4 Sets: 1"}
]

// Our Classes and popular classes data
var yogaClassesData = [
  {yogaType: 'Kundalini Yoga', schedule: ['Mon', 'Wed', 'Fri'], time: '06:30pm - 07:45pm', description: "Anyone who wants more movement and less stillness from their yoga practice.",
    fileName: 'pexels-c-technical-6798377.jpg', alt:'A man doing kundalini yoga',
    trainer:"Patrick Lynch", level:'Beginner', popular: true},
  {yogaType: 'Vinyasa Yoga', schedule: ['Mon', 'Wed', 'Fri'], time: '06:30pm - 07:45pm', description: "Anyone who wants more movement and less stillness from their yoga practice.",
    fileName: 'pexels-pixabay-460307.jpg', alt:'A women doing vinyasa yoga',
    trainer:"Zara Heath",level:'Beginner', popular: false},
  {yogaType: 'Hatha Yoga', schedule: ['Mon', 'Wed', 'Fri'], time: '06:30pm - 07:45pm', description: "Anyone looking for a balanced practice, or those in search of a gentler type of yoga.",
    fileName: 'pexels-rfstudio-3820312.jpg', alt:'A women doing hatha yoga',
    trainer:"Francesca Nixon",level:'Beginner', popular: true},
  {yogaType: 'Ashtanga Yoga', schedule: ['Sun', 'Tue', 'Thu'], time: '06:30pm - 07:45pm', description: "Anyone who likes routine or a more physical yet spiritual practice.",
    fileName: 'pexels-c-technical-6799567.jpg', alt:'A man doing ashtanga yoga',
    trainer:"Patrick Lynch",level:'Beginner', popular: false},
  {yogaType: 'Yin Yoga', schedule: ['Mon', 'Wed', 'Fri'], time: '06:30pm - 07:45pm', description: "Those who need to stretch out after a tough workout, or anyone interested in a slower-paced practice.",
    fileName: 'pexels-elly-fairytale-3822164.jpg', alt:'A women doing yin yoga',
    trainer:"Zara Heath",level:'Beginner', popular: false},
  {yogaType: 'Acro yoga', schedule: ['Mon', 'Wed', 'Sat'], time: '06:30pm - 07:45pm', description: "Those who enjoy practicing with a partner, couples looking to build trust and intimacy, or anyone with an adventurous streak who likes to go upside down.",
    fileName: 'pexels-alexy-almond-3758138.jpg', alt:'A women doing zara yoga',
    trainer:"Francesca Nixon",level:'Beginner', popular: true},
  {yogaType: 'Bikram Yoga', schedule: ['Sun', 'Tue', 'Thu'], time: '06:30pm - 07:45pm', description: "Anyone who likes to sweat, someone who wants a more physical practice, or those who like routine.",
    fileName: 'pexels-elly-fairytale-3822906.jpg', alt:'A women doing bikram yoga',
    trainer:"Tia Little",level:'Beginner', popular: false},
  {yogaType: 'Power Yoga', schedule: ['Mon', 'Wed', 'Fri'], time: '06:30pm - 07:45pm', description: "Those who like ashtanga but want less rigidity, anyone who wants a good workout, and anyone who wants a less spiritual yoga practice.",
    fileName: 'pexels-anete-lusina-4793357.jpg', alt:'A women doing power yoga',
    trainer:"Francesca Nixon",level:'Beginner', popular: false},
  {yogaType: 'Sivananda Yoga', schedule: ['Mon', 'Wed', 'Fri'], time: '06:30pm - 07:45pm', description: "Those looking for a gentler form of yoga, anyone who wants a more spiritual practice.",
    fileName: 'pexels-the-lazy-artist-gallery-1346163.jpg', alt:'A man doing sivananda yoga',
    trainer:"Patrick Lynch",level:'Beginner', popular: false},
  {yogaType: 'Restorative Yoga', schedule: ['Sun', 'Tue', 'Sat'], time: '06:30pm - 07:45pm', description: "Anyone who needs to de-stress, those dealing with pain, and someone who struggles to relax.",
    fileName: 'pexels-marcus-aurelius-6787205.jpg', alt:'A women doing restorative yoga',
    trainer:"Tia Little",level:'Beginner', popular: false},
  {yogaType: 'Prenatal Yoga', schedule: ['Mon', 'Wed', 'Fri'], time: '06:30pm - 07:45pm', description: "Moms-to-be and new moms who are easing back into exercise.",
    fileName: 'pexels-c-technical-6798389.jpg', alt:'A women doing prenatal yoga',
    trainer:"Patrick Lynch",level:'Beginner', popular: true},
  {yogaType: 'Aerial Yoga', schedule: ['Mon', 'Wed', 'Fri'], time: '06:30pm - 07:45pm', description: "Those who want a nontraditional yoga experience, or anyone who wants the benefits of inversions but might fear going upside down on their own.",
    fileName: 'pexels-elly-fairytale-3822221.jpg', alt:'A man doing aerial yoga',
    trainer:"Tia Little",level:'Beginner', popular: false},
  {yogaType: 'Iyengar Yoga', schedule: ['Mon', 'Wed', 'Fri'], time: '06:30pm - 07:45pm', description: "Someone who likes detailed instruction, anyone with physical limitations, or those in search of a more classical form of yoga.",
    fileName: 'pexels-alexy-almond-3758145.jpg', alt:'A women doing iyengar yoga',
    trainer:"Francesca Nixon",level:'Beginner', popular: true},
];

// Articles Data
var articleData = [
  {author: 'AYURYOGA ECO ASHRAM',
    articleName: 'Reasons To Practice Hatha Yoga Asanas',
    articleIntro: 'Hatha yoga asanas are practised to increase your body’s abilities in many different ways. People of any age can perform them. There are several benefits of hatha yoga asanas such as mental health, good digestion, relaxation of the tensed muscles and more. Hatha yoga asanas can help you achieve optimum fitness level and maintain it over a long period of time.',
    content: [['Hatha yoga asanas improve balance',
      'The purpose of all hatha yoga asanas is to release tension and negative energy from every muscle of the body. The asanas help in restoring positive energy in your body and achieve balance. They improve the coordination between your muscles and are designed to build resistance. Thus your body’s overall strength increases as you perform them regularly.'],
      ['They are beneficial during pregnancy',
        'Pregnant women can relieve their back pain by practising hatha yoga asanas. They help in dealing with stress, mood swings and can also help prepare the body for easy and shorter labour. However, it is important that you consult your doctor before practising hath yoga asanas. Depending upon your medical condition some asanas may not be suitable for you.'],
      ['They improve overall body functioning',
        'Several hatha yoga asanas will require you to maintain a straight back. This will improve your posture consequently. Stretching your muscles to release tension is an important part of hath yoga asanas. Thus your body will become more flexible. Various injuries can be prevented if your body is flexible, particularly if you are a sportsperson. \n In hatha yoga asanas, you are required to control breathing so that you can connect with yourself. This, in turn, helps with breathing disorders and also improves blood circulation in the body. A good amount of oxygen supply to the brain ensures that you can perform your tasks optimally. \n All these benefits will follow only if you have learnt to practice hatha yoga asanas without exerting your body. AyurYoga Eco-Ashram in Mysore is one of the best centres to learn hatha yoga in India. You can begin your journey to fitness with Ayuryoga’s Beginner Yoga Retreat in India.']]
  },
  {author: 'AYURYOGA ECO ASHRAM',
    articleName: 'Myths About Yoga',
    articleIntro: 'The popularity of yoga is increasing very rapidly in all parts of the world. Every foreign national who comes to India takes back a different perception of yoga. In India itself there are various myths surrounding yoga. There is a good chance that what is being taught in many yoga schools is not truly the ancient practice of yoga. This makes a lot of difference to the end result.\n So what are these myths? Let’s learn about and bust a few of them below!',
    content: [
      ['That yoga is simply being able to perform unrealistic poses',
      'It is a common perception that yoga is mainly about asanas. But the truth is asanas are not the end. They are the means to an end, the end being yoga. Yoga is the awareness of the symbiosis of your own self and the source of life. Hatha yoga is misunderstood as being only for the physical body. You will be able to completely understand the purpose of hatha yoga if you look past the physical aspect. If you wish to learn yoga in its true form some ashrams like AyurYoga Eco-Ashram in Mysore offer dedicated courses for hatha yoga in India. Such yoga schools can help you realize the real power of yoga.'],
      ['Yoga should be practised with music',
        'The purpose of hatha yoga is to increase awareness about your body, energy, mind and your soul. Your focus should be entirely on the inside and this is possible only when there is no distraction in your surroundings. Music will not help in this regard. Yoga should be approached with a certain reverence.\n You must have seen the depiction of yoga classes in movies and TV serials. There is one big flaw in how classes are shown as being conducted. The instructor is always talking. The implication is not that there should be no communication at all. But the instructors normally speak only when it is necessary. \n People trying to learn yoga from a book might see its health benefits but ashrams in India are the best places to learn if you want to experience true yoga.']],
  },
  {author: 'AYURYOGA ECO ASHRAM',
    articleName: 'Hatha Yoga Precautions',
    articleIntro: 'Hatha Yoga asanas are considered to be among the easiest and safest. The exercises are not very demanding. In hatha yoga asanas, the movements are relatively slow and the impact on the targeted muscles is also not very intense. But that does not mean you can’t get injured while performing these asanas. If you are planning to practice Hatha Yoga then you must know about the precautions to be taken. It is advisable that beginners join a reputed hatha yoga class for a beneficial and injury-free experience.',
    content: [
      ['Form and Posture',
      'The key to getting the most out of hatha yoga asanas is good form and posture. You can’t do an asana half-heartedly and then expect to get good results. In fact, if your posture isn’t right you run the risk of getting injured. Therefore it is better to subscribe to a trusted hatha yoga program. The instructor will most likely explain to you the importance of breathing and correct posture.'],
      ['Safety measures for Advanced Poses',
        'Anybody can perform hatha yoga asanas irrespective of his/her fitness level. But there are some advanced poses that entail a risk if you are a beginner for example Garudasana (Eagle Pose) and Shirshasana (Headstand). It will require a bit of practice to do them perfectly. That is why it’s important to learn hatha yoga only from seasoned instructors, like the ones available at AyurYoga Eco-Ashram. Such instructors can guide you about an asana’s modifications if you’re not comfortable doing it. For instance, instead of doing the Headstand straightaway they might ask you to balance against a wall thus eliminating the risk of falling down, and injury.'],
      ['Yoga is not a competition',
        'It is essential that you build your fitness at the speed that your body can handle. Upon joining a hatha yoga class you are likely to see people who are extremely fit and who can perform even the toughest of asanas easily. It is not your goal to be like them. Your goal is to be able to do the asanas correctly. But if you try to push your body’s limits, the chances are high that you might get injured.'],
    ],
  },
  {author: 'AYURYOGA ECO ASHRAM',
    articleName: 'Ayurveda Can Change Your Life',
    articleIntro: 'If you are wondering why this 5000-year-old ancient medical practice is still in use even today – the answer is – because it works. The study of Ayurveda is vast and its students know that very well from experience. For a thorough understanding of this ancient wisdom there is no place better than the ayurvedic schools in India.\n Yoga and Ayurveda have grown side by side over the centuries. The Ayurveda schools in India give you an incredible opportunity to learn both, at the same place. But the question is why you even need to learn it. Well simply because it has the potential to change your life.',
    content: [
      ['Sustainable living',
      'According to Ayurveda, anything that puts pressure on our body system is unsustainable because it goes against the support of life. A lifestyle does not have to be perfect (which again is putting pressure) in order for it to be sustainable. It is important that it is balanced and caters to all aspects of our life – emotional, mental, and physical health.'],
      ['You can recognize your body’s needs',
        'Ayurveda’s premise is that each and every human has a different body mind-body constitution. You can know exactly what your type is by studying the Tridoshas: Vata-Pitta-Kapha. The study of Ayurveda will help you understand the tridoshas and recognize a person’s mind-body constitution. You will also be able to learn about the needs of different body types. Here’s a page on AyurYoga Eco-Ashram website where you can easily learn about and find your dosha.'],
      ['It will improve your social skills and work performance',
        'Relationships, be it personal or work, are greatly influenced by the constitution of our body. A person having Vata dosha will be forgetful. But if you have prior knowledge about their constitution then you will be more understanding towards them.\n Ayurveda also teaches to accept the difference in the constitution and adjust our expectations accordingly. For example, a Pitta dosha personality might get impatient with a forgetful colleague having vata dosha. But if they understand each other they will be able to work things out in a helpful manner.'],
    ],
  },
  {author: 'AYURYOGA ECO ASHRAM',
    articleName: 'Hatha Yoga Poses For Beginners',
    articleIntro: '“Ha” represents sun and “tha” represents moon. The purpose behind Hatha Yoga practice is to achieve balance. Life exists because there is balance between the earth’s elements. Sun rises for the moon to set and vice versa. Hatha implies that there are opposites in our lives. Yin and Yang, warm and cold, light and darkness; both are necessary in our life and hence there should be a balance between them.\n Hatha Yoga is for the physical body. By performing Hatha Yoga you can release the negative energy and tension in your body which has created an imbalance in it. Finding such balance is a step forward towards spiritual growth.\n You can practice the following Hatha Yoga poses to begin your spiritual journey.',
    content: [
      ['Tadasana (Mountain Pose)',
      'Stand straight with your feet touching each other and arms on either side. Stand in such a manner that your weight is equally distributed on the balls of your feet. Your tailbone should be tucked in. Then raise your arms over your head and bring them together so that the palms and fingers are touching. Please remember to breathe slowly and steadily. You should be relaxed. Then focus at a point ahead of you and remain in this pose for 60 seconds.'],
      ['Uttanasana (Standing Forward Bend Pose)',
        'Stand straight with feet shoulder width apart and hands on your hips. Stretch your arms over your head. Now slowly try bending your upper body so that your forehead, chest and nose rest on your thighs. Then hold the back of your ankles with your hands. Remain in this posture for 15-20 seconds.\n Note: This hatha yoga pose might be difficult for beginners as the hamstring will have to get accustomed to the stretch. So avoid overdoing it in the beginning.'],
      ['Adho Mukha Svanasana (Downward Facing Dog Pose)',
        'This Hatha Yoga posture has various benefits. Begin by coming onto your hands and knees. Keep your hands shoulder width apart and knees hip width apart. Slowly lift your knee with the support of hands and feet. Then raise your posterior upwards till your knees are straightened. Your head should not be hanging, and should be in line with your arms. Hold this posture for 20-30 sec.\n AyurYoga Eco-Ashram in Mysore, India is counted amongst the best schools to learn and master hatha yoga in India.'],
    ],
  },
  {author: 'AYURYOGA ECO ASHRAM',
    articleName: 'Things To Know Before A Yoga Retreat In India',
    articleIntro: 'The modern lifestyle takes a heavy toll on our health. The urban work culture is so demanding that people can be seen changing their eating habits and sleep patterns all too often, just to keep up with the pace of it all. This is particularly true for the western world where people regularly eat fast food just because they don’t have time. Hence the idea of a getaway is now changing. People want to go someplace where phones and emails can’t reach them. Therefore an escape to a hatha yoga retreat, such as the kinds offered by AyurYoga Eco-Ashram in Mysore, India is becoming a norm for westerners and Indians alike.',
    content: [
      ['Everybody can do yoga',
      'Yoga is a process in which you try to awaken your senses. Being able to perform complex postures is surely a part of the process. If you are a social media buff, you might already have some idea about these yoga postures. However, in order to learn these postures quickly, people often end up exerting their bodies and risking serious injuries.\n An instructor with comprehensive knowledge of yoga can tell you exactly when to push your body and when to stop. S/he will be able to explain to you the importance of proper breathing. This is one of the reasons why Indian hatha yoga retreats are highly trusted by all.\n Everybody can do yoga, you just need to know how to do it right.'],
      ['You get to eat healthy',
        'Everyone knows how beneficial vegetables can be. They are a rich source of vitamins and fiber which makes them very healthy. However the fact is that people don’t have time to cook healthy food. And making an all vegetable meal tasty will require some serious culinary skills. That’s where hatha yoga retreats do an excellent job. You get to eat meals prepared with local and organic vegetables. These meals keep the digestion system in good shape, and ensure that you stay energetic at all times.\n A couple of days in a yoga retreat can reset your body and mind to go back into the world with renewed energy.'],
    ],
  },
  {author: 'AYURYOGA ECO ASHRAM',
    articleName: 'What Is Hatha Yoga Pradipika',
    articleIntro: 'This is one of the three classic hatha yoga texts. The meaning of pradipika is to cast light. So Hatha Yoga Pradipika can be thought of as a guiding light to the mystic world of hatha yoga. This branch of yoga purifies the body by way of asana, bandha, concentration, mudra, pranayama, and shatkarma. It forms the basis to learn Raja yoga and samadhi.\n Raja Yoga teaches discipline and self-control which requires high levels of concentration. In order to achieve that, it is necessary to walk the path of hatha yoga. Hatha yoga pradipika is divided into four sections and its aim is to get rid of the toxins in the body. The four sections are asana, shatkarmas and pranayama, mudra and bandhas, and samadhi (enlightenment).',
    content: [
      ['Why is it important to read?',
      'All of us have some idea of what yoga is. The reach of mass media and internet has made that possible. The truth is – the farther yoga has gone from India the more it has been misunderstood. In the west yoga is depicted merely as some sort of physical regime intended merely to improve your body’s flexibility and strength. That is not to say that every Indian truly understands yoga. Many Indians too are susceptible to the same misconceptions.\n If you also share the same belief then reading Hatha Yoga Pradipika will be an eye-opening experience for you. The reason hatha yoga is said to be the foundation for Raja Yoga is that it teaches about the process of transformation. It helps you go beyond the realm of human understanding and expand your consciousness. Here’s a page on AyurYoga Eco-Ashram website where you can learn all about consciousness and how to expand it.\n Hatha Yoga Pradipika emphasizes relieving three kinds of pain namely environmental, physical, and emotional. Hatha yoga is as much a spiritual practice as it is physical. You can learn more  about Hatha Yoga Pradipika here.'],
    ],
  },
  {author: 'AYURYOGA ECO ASHRAM',
    articleName: 'Why Yoga Practice Is Better Than Gym Workout',
    articleIntro: 'This isn’t really a question. It’s rather an assertion. There are obvious reasons why practising yoga is better than working out in a gym. There are multitudes of benefits.',
    content: [
      ['Yoga benefits not just your muscles but also the internal organs',
      'Yoga asanas involve a lot of stretching, bending and folding. This has a positive impact on your digestive system, blood circulation, the lymph system and more. It helps in detoxifying your body too. And all this happens while you are practising complex postures to strengthen your body. In a gym workout, the major focus is on the muscles and increasing their strength. It doesn’t do so much for the internal body.'],

      ['You learn to accept yourself',
      'A lot of people might have been to the gym at some point in their life. It’s great if things work out for you. But if they don’t you end up feeling envious and worthless; neither is good for your mental health. In a yoga class, regardless of whether you’re a beginner or a seasoned campaigner, you will always see people who can perform the asanas better than you. Some of the best yoga schools in India will tell you to embrace yourself, to accept your strength and limits. There you will learn that yoga is not about improving the self rather accepting the self.'],

      ['Yoga schools help you focus on yourself',
      'Gyms are often packed with mirrors. It is common for people to stand in front of a mirror and lift while focusing entirely on the exterior, with the mind being totally distracted. Unlike gyms there are no mirrors in yoga schools. So when you practice you can focus on everything that is happening inside your body. You can focus on your breath and think about what every muscle is doing.\n Renowned yoga schools in India, like AyurYoga Eco-Ashram, will teach you the correct way to practice yoga. They will also teach you the importance of focusing while practising yoga.'],
  ],
  },
  {author: 'AYURYOGA ECO ASHRAM',
    articleName: 'Why You’ll Love Being A Hatha Yoga Teacher!',
    articleIntro: 'The light of the soul shines within every one of us. Practicing yoga makes that light shine even brighter. Yoga allows us to experience our true self, realize our potential, and prepare us for endless possibilities. Becoming a yoga teacher will give you the wonderful opportunity to help people connect with themselves. You’ll be able to sense the positive energy, the same light that shines within you radiates through them.\n Seeing people improve with your help can be an amazing experience. But merely knowing hatha yoga is not enough to be able to teach. A well-thought-out and comprehensive Hatha yoga teacher training program will enable you to conduct good yoga classes. You can opt for such advanced yoga teacher training programs at AyurYoga Eco-Ashram in Mysore, India.',
    content: [
      ['The moments of connection',
      'If you have seen rishis perform hatha yoga in ashrams in India you can tell that they are in total unison with nature, that they have connected themselves with it. Common people find it difficult to isolate their mind and are always distracted. Hence in a regular hatha yoga class, you won’t normally see the level of concentration that the sages are able to achieve.\n But there are those little moments when you can feel the connection. You can sense yoga when people embody an asana when they concentrate and their mind is calm, peaceful. These moments of heavenly bliss are worth everything.'],

      ['You get to make a difference',
      'People spend a better part of their lives trying to figure out their purpose. A lot of people are not content despite achieving their lofty ambitions. In trying to fulfil expectations people alienate themselves from who they truly are. The fact is, we all have a purpose, a role to play in this world. Nothing brings greater joy than to inspire other people and help them in some way.\n By teaching yoga you get to make a positive difference in the world. You get to inspire people to be their best version.'],

  ],
  },
  {author: 'AYURYOGA ECO ASHRAM',
    articleName: 'What To Expect From A Yoga Teacher Training School',
    articleIntro: 'Joining a yoga teacher training school is a lot about being responsible. As you’ll be teaching yoga to others afterwards, you have to be absolutely sure about whatever you teach. Therefore a yoga teacher school will require you to commit time and attention regardless of whether you are taking a 200 hr course or classes spread over several months. You will need to show dedication to learning.',
    content: [
      ['It will make you stronger',
      'You will be asked to practice the asanas more than you are used to. In some courses the practice will be up to 4 hours a day. In an advanced teacher training course, such as the one offered by AyurYoga Eco-Ashram, the schedule will be of up to 10 hours per day. You will be exhausted after such rigorous regime but the satisfaction at the end of each day will more than make up for it. A yoga teacher training school will test your limits but you will become much stronger at the end of it.'],

      ['Meeting like-minded people',
      'You will be amazed to see people from different walks of life join a yoga teacher training school. You will be able to see up and close how people despite their differences are so similar. The diversity in the crowd will be a good opportunity for you to widen and build your yoga network. And of course you will also meet your teacher, who will possess knowledge passed down over many centuries.'],
      ['You will have to step outside of your comfort zone',
      'It is safe to presume that most of those wishing to join a yoga teacher school would have finished their college long ago. Which means that you will not be in the habit of taking daily classes, let alone writing exams. As an adult you might not even be comfortable with it. There will be a lot of information that will be given to you and you might find it difficult to cope with.\n But that’s what a yoga teacher training school is all about – pushing your mental and physical limits. The path to becoming a yoga teacher is difficult but highly-rewarding in the end!'],

  ],
  },
  {author: 'AYURYOGA ECO ASHRAM',
    articleName: 'Ayurvedic Route To Beautiful Hair And Nails',
    articleIntro: 'How many times have you looked at someone’s glossy and thick hair, and wondered how is it possible?!\n Well, Ayurveda from India could be the answer!',
    content: [
      ['Key to healthy nails and hair as per Ayurveda',
      'As per Ayurveda, healthy nails and hair are a direct result of bone metabolism and hence your diet should be such that it nourishes your bone tissues. However, it should also purify the fat tissues of your body because the health of bone tissues depends a lot on fat issues.\n Hence, you should choose food items that simultaneously help in both the departments. People are normally advised to take plenty of calcium for strengthening their bones and nails, but calcium doesn’t help much if the fat issues are filled up with ama, the toxic waste from improper digestion.'],

      ['Recommended foods as per Ayurveda',
      'ou must opt for more bitter-tasting cooked greens, juicy sweet fruits, and green leafy vegetables. Regularly seasoning the vegetables with coriander, cumin, fenugreek and turmeric, sautéed in ghee would help in purification of fat issues and strengthening of the bones. Opting for healthy fats (like ghee or olive oil) and regularly adding shredded coconut to your foods, is also highly recommended.\n You must steer clear of food items that are difficult to digest and lead to digestive impurities, for instance, leftovers, packaged foods, deep-fried foods, unhealthy fats, ice-cold drinks, refined sugars, foods straight from the fridge etc.\n Eating food items that maintain the right balance and levels of kapha, pitta and vata are also important. Apart from that regular yoga exercises can help you maintain your body’s fat metabolism.\n You should also check out the AyurYoga Eco-Ashrams Rasayana Rejuvenation therapy for improvement of your overall vitality, metabolism and immunity.'],

  ],
  },
]

function onContactLoad(){}
function onArticlesLoad(){}
function onReportLoad(){}

//On page load functions
function onIndexLoad(){
// Handlebarjs for Yoga balance workout positions
  var yogaPosSrc = document.getElementById("yoga-pos-template").innerHTML;
  var yogaPosTemp = Handlebars.compile(yogaPosSrc);
  document.getElementById('yoga-pos-list').innerHTML += yogaPosTemp({yogaPosData});

  // Handlebarjs for popular classes
  var popularClassSrc = document.getElementById("popular-classes-template").innerHTML;
  var popularClassTemp = Handlebars.compile(popularClassSrc);
  document.getElementById('popular-class-sliderView').innerHTML += popularClassTemp({yogaClassesData});
}


function onClassesLoad(){
// Handlebarjs for Our classes search result
var classSrc = document.getElementById("search-template").innerHTML;
var classTemp = Handlebars.compile(classSrc);
document.getElementById('search-result').innerHTML += classTemp({yogaClassesData});
}



//////////////////////////////
//Handlebars JS custom helpers
/////////////////////////////
//breaklines helper - helps to replace \n to <br> tag
Handlebars.registerHelper('breaklines', function(text) {
  text = Handlebars.Utils.escapeExpression(text);
  text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
  return new Handlebars.SafeString(text);
});
//Check is the loop count is 0
Handlebars.registerHelper('zeroCount', function(index) {
  return (index === 0);
});
