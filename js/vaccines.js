// vaccines.js — калькулятор прививок
window.calcVaccines = function(petType, ageWeeks) {
  const today = new Date();
  const addDays = (d) => { const n = new Date(today); n.setDate(n.getDate() + d); return n; };
  const fmt = (d) => d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  
  const weeksToDays = (w) => w * 7;

  const schedules = {
    cat: [
      { name: 'Первая вакцинация', week: 8 },
      { name: 'Ревакцинация', week: 12 },
      { name: 'Ежегодная', week: 52 }
    ],
    dog: [
      { name: 'Первая вакцинация', week: 8 },
      { name: 'Вторая вакцинация', week: 12 },
      { name: 'Третья (с бешенством)', week: 16 },
      { name: 'Ежегодная', week: 52 }
    ],
    rabbit: [
      { name: 'Первая вакцинация', week: 6 },
      { name: 'Ревакцинация', week: 10 },
      { name: 'Ежегодная', week: 52 }
    ]
  };

  if (petType === 'other') {
    return { other: true, message: 'Для других видов животных рекомендуем консультацию врача для составления индивидуального графика.' };
  }

  const list = schedules[petType] || schedules.cat;
  return list.map(item => {
    const weeksLeft = item.week - ageWeeks;
    const daysLeft = weeksToDays(weeksLeft);
    return {
      name: item.name,
      week: item.week,
      date: weeksLeft <= 0 ? 'Пора делать сейчас' : fmt(addDays(daysLeft))
    };
  });
};