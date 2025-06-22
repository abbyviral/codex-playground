const form = document.getElementById('astroForm');
const resultSection = document.getElementById('result');
const greeting = document.getElementById('greeting');
const description = document.getElementById('description');

const signs = [
  { name: 'मेष', from: '03-21', to: '04-19', traits: 'ऊर्जावान और आत्मविश्वासी' },
  { name: 'वृषभ', from: '04-20', to: '05-20', traits: 'धैर्यवान और भरोसेमंद' },
  { name: 'मिथुन', from: '05-21', to: '06-20', traits: 'मिलनसार और चतुर' },
  { name: 'कर्क', from: '06-21', to: '07-22', traits: 'भावुक और सुरक्षात्मक' },
  { name: 'सिंह', from: '07-23', to: '08-22', traits: 'नेतृत्वकर्ता और उदार' },
  { name: 'कन्या', from: '08-23', to: '09-22', traits: 'व्यावहारिक और मेहनती' },
  { name: 'तुला', from: '09-23', to: '10-22', traits: 'सामंजस्यपूर्ण और कूटनीतिक' },
  { name: 'वृश्चिक', from: '10-23', to: '11-21', traits: 'गंभीर और वफादार' },
  { name: 'धनु', from: '11-22', to: '12-21', traits: 'उत्साही और स्वतंत्र' },
  { name: 'मकर', from: '12-22', to: '01-19', traits: 'अनुशासित और महत्वाकांक्षी' },
  { name: 'कुंभ', from: '01-20', to: '02-18', traits: 'अवांछित और प्रगतिशील' },
  { name: 'मीन', from: '02-19', to: '03-20', traits: 'कलात्मक और संवेदनशील' },
];

function getZodiac(monthDay) {
  for (const sign of signs) {
    if (sign.from <= monthDay && monthDay <= sign.to) {
      return sign;
    }
    // Capricorn covers end of year to early year
    if (sign.name === 'मकर' && (monthDay >= '12-22' || monthDay <= '01-19')) {
      return sign;
    }
  }
  return null;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const dob = document.getElementById('dob').value;
  if (!dob) return;

  const monthDay = dob.slice(5); // MM-DD
  const sign = getZodiac(monthDay);

  if (sign) {
    greeting.textContent = `${name} जी, आपकी राशि है ${sign.name}`;
    description.textContent = `विशेषताएँ: ${sign.traits}`;
    resultSection.classList.remove('hidden');
  }
});
