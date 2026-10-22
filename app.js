/* English / Amharic strings */
(function () {
  var AF = (window.AF = window.AF || {});

  AF.STR = {
    en: {
      nav_home: 'Home', nav_plan: 'Plan', nav_stats: 'Progress',
      streak: '{n} Days', streak1: '{n} Day',
      ml: 'ml', goal: 'Goal',
      small: 'Small glass', standard: 'Glass', large: 'Bottle', custom: 'Custom amount',
      drank: 'Drank {n} ml', snooze: 'Snooze', dismiss: 'Dismiss', ok: 'OK',
      wake_title: '☀️ Good morning!', wake_body: 'Start your day with a glass of water 💧',
      water_time: 'Time to drink water 💧', water_body: 'Drink {n} ml to stay on track.',
      nx_title: 'Next reminder', nx_at: 'at {t} · reach {n} ml', nx_wake: 'at {t} · good-morning glass',
      nx_sleep: 'Sleeping hours · back at {t}', nx_off: 'Reminders are off', nx_tomorrow: 'Tomorrow at {t}',
      pace_goal: 'Daily goal reached! 🎉', pace_due: 'Drink {n} ml to stay on track', pace_ok: 'You are on track 👍',
      pace_sleep: 'Sleep well — reminders pause until morning', pace_off: 'Reminders are off',
      behind_badge: '{n} ml to go',
      today_sips: "Today's sips", no_sips: 'Nothing logged yet',
      h_m: '{h}h {m}m', m_only: '{m} min',
      added: '+{n} ml added', undo: 'Undo', removed: 'Removed',
      plan_title: "Today's plan", plan_sub: 'A reminder every {h} h while you are awake. Sleeping hours stay quiet.',
      wake_label: 'Wake-up alarm', bed_label: 'Bedtime', every_label: 'Remind me every',
      hr: 'h', slot_wake: 'Wake-up glass', slot_n: 'Reminder {n}', slot_reach: 'Reach {n} ml',
      slot_done: 'Done', slot_in: 'in {t}', slot_drink: 'Drink {n} ml', sleep_row: 'Sleep · reminders pause',
      plan_off: 'Reminders are off. Turn them on in Settings.',
      stats_title: 'Progress', st_streak: 'Streak', st_avg: '7-day average', st_hit: 'Goals hit',
      st_week: 'This week', st_month: 'Last 4 weeks', st_total: 'Total today',
      settings: 'Settings', weight: 'Body weight (kg)', daily_goal: 'Daily goal',
      auto_goal: 'Auto (weight × 35 ml)', wake_start: 'Wake-up time', wake_end: 'Bedtime',
      reminders: 'Water reminders', interval: 'Remind every (hours)', snooze_len: 'Snooze (minutes)',
      sound: 'Sound & vibration', h24: '24-hour time',
      test_alarm: 'Test reminder in 10 seconds',
      test_title: 'AquaFlow test', test_body: 'If you can hear this, reminders work with the app closed.',
      test_set: 'Test set — lock your phone and wait 10 seconds',
      quiet_note: 'Sleeping hours: no reminders between bedtime and the wake-up alarm.',
      enter_amount: 'Enter amount', enter_time: 'Enter time', done: 'Done', save: 'Save',
      invalid_time: 'Please enter a valid time', invalid_amount: 'Please enter an amount',
      perm_needed: 'Allow notifications so reminders can ring',
      lang_name: 'English', theme_dark: 'Dark mode', theme_light: 'Light mode',
      bg_title: 'Reminders in the background', bg_service: 'Reminder service', bg_notif: 'Notifications', bg_batt: 'Battery: Unrestricted',
      bg_auto: 'Autostart / background apps (Xiaomi, Oppo, Vivo, Huawei, Samsung)',
      bg_note: 'Press the test button, then lock the phone. If it does not ring, switch on every item above for this app.',
      am: 'AM', pm: 'PM', snoozed: 'Snoozed for {n} min'
    },
    am: {
      nav_home: 'መነሻ', nav_plan: 'እቅድ', nav_stats: 'ሂደት',
      streak: '{n} ቀናት', streak1: '{n} ቀን',
      ml: 'ሚ.ሊ', goal: 'ግብ',
      small: 'ትንሽ ብርጭቆ', standard: 'ብርጭቆ', large: 'ጠርሙስ', custom: 'ሌላ መጠን',
      drank: '{n} ሚ.ሊ ጠጣሁ', snooze: 'አሸልብ', dismiss: 'ዝጋ', ok: 'እሺ',
      wake_title: '☀️ እንደምን አደሩ!', wake_body: 'ቀንዎን በአንድ ብርጭቆ ውሃ ይጀምሩ 💧',
      water_time: 'ውሃ የሚጠጡበት ጊዜ ነው 💧', water_body: 'በእቅድዎ ለመቀጠል {n} ሚ.ሊ ይጠጡ።',
      nx_title: 'ቀጣይ ማስታወሻ', nx_at: 'በ{t} · {n} ሚ.ሊ ይድረሱ', nx_wake: 'በ{t} · የጠዋት ብርጭቆ',
      nx_sleep: 'የእንቅልፍ ሰዓት · በ{t} ይመለሳል', nx_off: 'ማስታወሻዎች ጠፍተዋል', nx_tomorrow: 'ነገ በ{t}',
      pace_goal: 'የዕለቱን ግብ አሳክተዋል! 🎉', pace_due: 'በእቅድ ለመቀጠል {n} ሚ.ሊ ይጠጡ', pace_ok: 'በጥሩ ሁኔታ ላይ ነዎት 👍',
      pace_sleep: 'ደህና እደሩ — ማስታወሻዎች እስከ ጠዋት ያርፋሉ', pace_off: 'ማስታወሻዎች ጠፍተዋል',
      behind_badge: '{n} ሚ.ሊ ይቀራል',
      today_sips: 'የዛሬ መጠጦች', no_sips: 'ገና ምንም አልተመዘገበም',
      h_m: '{h}ሰ {m}ደ', m_only: '{m} ደቂቃ',
      added: '+{n} ሚ.ሊ ተጨምሯል', undo: 'ቀልብስ', removed: 'ተወግዷል',
      plan_title: 'የዛሬ እቅድ', plan_sub: 'በነቁበት ጊዜ በየ{h} ሰዓቱ ማስታወሻ። የእንቅልፍ ሰዓት ጸጥ ይላል።',
      wake_label: 'የመነሻ ማንቂያ', bed_label: 'የመኝታ ሰዓት', every_label: 'ማስታወሻ በየ',
      hr: 'ሰ', slot_wake: 'የጠዋት ብርጭቆ', slot_n: 'ማስታወሻ {n}', slot_reach: '{n} ሚ.ሊ ይድረሱ',
      slot_done: 'ተጠናቋል', slot_in: 'በ{t} ውስጥ', slot_drink: '{n} ሚ.ሊ ጠጣ', sleep_row: 'እንቅልፍ · ማስታወሻዎች ያርፋሉ',
      plan_off: 'ማስታወሻዎች ጠፍተዋል። በቅንብሮች ውስጥ ያብሩ።',
      stats_title: 'ሂደት', st_streak: 'ተከታታይ', st_avg: 'የ7 ቀን አማካይ', st_hit: 'ግብ የተሳካባቸው',
      st_week: 'ይህ ሳምንት', st_month: 'ያለፉት 4 ሳምንታት', st_total: 'የዛሬ ድምር',
      settings: 'ቅንብሮች', weight: 'የሰውነት ክብደት (ኪ.ግ)', daily_goal: 'የዕለት ግብ',
      auto_goal: 'ራስ-ሰር (ክብደት × 35 ሚ.ሊ)', wake_start: 'የመነሳት ሰዓት', wake_end: 'የመኝታ ሰዓት',
      reminders: 'የውሃ ማስታወሻዎች', interval: 'ማስታወሻ በየ (ሰዓት)', snooze_len: 'ማሸለቢያ (ደቂቃ)',
      sound: 'ድምፅ እና ንዝረት', h24: 'የ24 ሰዓት አቀማመጥ',
      test_alarm: 'ማስታወሻን በ10 ሰከንድ ሞክር',
      test_title: 'የአኳፍሎው ሙከራ', test_body: 'ይህን ከሰሙ፣ መተግበሪያው ተዘግቶም ማስታወሻ ይሰራል።',
      test_set: 'ሙከራ ተዘጋጅቷል — ስልክዎን ቆልፈው 10 ሰከንድ ይጠብቁ',
      quiet_note: 'የእንቅልፍ ሰዓት፦ ከመኝታ ሰዓት እስከ መነሻ ማንቂያ ድረስ ማስታወሻ የለም።',
      enter_amount: 'መጠን ያስገቡ', enter_time: 'ሰዓት ያስገቡ', done: 'ተከናውኗል', save: 'አስቀምጥ',
      invalid_time: 'እባክዎ ትክክለኛ ሰዓት ያስገቡ', invalid_amount: 'እባክዎ መጠን ያስገቡ',
      perm_needed: 'ማስታወሻዎች እንዲደውሉ ማሳወቂያዎችን ይፍቀዱ',
      lang_name: 'አማርኛ', theme_dark: 'ጨለማ ገጽታ', theme_light: 'ብሩህ ገጽታ',
      bg_title: 'በጀርባ ማስታወሻ', bg_service: 'የማስታወሻ አገልግሎት', bg_notif: 'ማሳወቂያዎች', bg_batt: 'ባትሪ፦ ያልተገደበ',
      bg_auto: 'ራስ-ጀምር / የጀርባ መተግበሪያዎች (ሻዮሚ፣ ኦፖ፣ ቪቮ፣ ሁዋዌ፣ ሳምሰንግ)',
      bg_note: 'የሙከራ ቁልፉን ይጫኑ፣ ከዚያ ስልኩን ይቆልፉ። ካልደወለ ከላይ ያሉትን ሁሉ ለዚህ መተግበሪያ ያብሩ።',
      am: 'ጠዋት', pm: 'ከሰዓት', snoozed: 'ለ{n} ደቂቃ ተሸልቧል'
    }
  };

  AF.DAYS = {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    enShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    am: ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ'],
    amShort: ['እሁ', 'ሰኞ', 'ማክ', 'ረቡ', 'ሐሙ', 'ዓር', 'ቅዳ']
  };
  AF.MONTHS = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    enShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    am: ['መስከረም', 'ጥቅምት', 'ኅዳር', 'ታኅሣሥ', 'ጥር', 'የካቲት', 'መጋቢት', 'ሚያዝያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜን']
  };
})();

/* Gregorian <-> Ethiopian (Amete Mihret) calendar conversion */
(function () {
  var AF = (window.AF = window.AF || {});
  var EPOCH = 1723856;

  function gregToJDN(y, m, d) {
    var a = Math.floor((14 - m) / 12);
    var yy = y + 4800 - a;
    var mm = m + 12 * a - 3;
    return d + Math.floor((153 * mm + 2) / 5) + 365 * yy + Math.floor(yy / 4) - Math.floor(yy / 100) + Math.floor(yy / 400) - 32045;
  }
  function jdnToGreg(jd) {
    var a = jd + 32044;
    var b = Math.floor((4 * a + 3) / 146097);
    var c = a - Math.floor((146097 * b) / 4);
    var d = Math.floor((4 * c + 3) / 1461);
    var e = c - Math.floor((1461 * d) / 4);
    var m = Math.floor((5 * e + 2) / 153);
    return {
      d: e - Math.floor((153 * m + 2) / 5) + 1,
      m: m + 3 - 12 * Math.floor(m / 10),
      y: 100 * b + d - 4800 + Math.floor(m / 10)
    };
  }
  function jdnToEth(jd) {
    var r = (jd - EPOCH) % 1461;
    var n = (r % 365) + 365 * Math.floor(r / 1460);
    return {
      y: 4 * Math.floor((jd - EPOCH) / 1461) + Math.floor(r / 365) - Math.floor(r / 1460),
      m: Math.floor(n / 30) + 1,
      d: (n % 30) + 1
    };
  }
  function ethToJDN(y, m, d) {
    return EPOCH + 365 + 365 * (y - 1) + Math.floor(y / 4) + 30 * m + d - 31;
  }

  AF.toEth = function (date) {
    return jdnToEth(gregToJDN(date.getFullYear(), date.getMonth() + 1, date.getDate()));
  };
  AF.ethToDate = function (y, m, d) {
    var g = jdnToGreg(ethToJDN(y, m, d));
    return new Date(g.y, g.m - 1, g.d, 12, 0, 0);
  };
  AF.ethMonthLen = function (y, m) {
    if (m < 13) return 30;
    return y % 4 === 3 ? 6 : 5;
  };
})();

/* AquaFlow core: state, dates, hydration maths, reminder plan */
(function () {
  var AF = (window.AF = window.AF || {});
  var KEY = 'aquaflow.v1';

  function defaults() {
    return {
      theme: 'dark', lang: 'en',
      weight: 70, goalAuto: true, goalMl: 2500,
      wakeStart: '07:00', wakeEnd: '22:00', remind: true, interval: 3, snoozeMin: 10,
      sound: true, h24: false,
      logs: {}, snooze: null
    };
  }

  function load() {
    var s = defaults();
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var p = JSON.parse(raw);
        for (var k in s) if (p[k] !== undefined) s[k] = p[k];
      }
    } catch (e) {}
    return s;
  }

  AF.S = load();
  AF.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(AF.S)); } catch (e) {}
  };

  /* ---------- i18n helpers ---------- */
  AF.t = function (key, p) {
    var tab = AF.STR[AF.S.lang] || AF.STR.en;
    var s = tab[key];
    if (s === undefined) s = AF.STR.en[key];
    if (s === undefined) s = key;
    if (p) for (var k in p) s = s.split('{' + k + '}').join(p[k]);
    return s;
  };
  AF.isAm = function () { return AF.S.lang === 'am'; };
  AF.n = function (x) { return Math.round(x).toLocaleString('en-US'); };
  AF.pad = function (x, n) { x = String(x); while (x.length < (n || 2)) x = '0' + x; return x; };

  /* ---------- dates ---------- */
  AF.iso = function (d) { return d.getFullYear() + '-' + AF.pad(d.getMonth() + 1) + '-' + AF.pad(d.getDate()); };
  AF.addDays = function (d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n, 12, 0, 0); };
  AF.today = function () { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 0, 0); };
  AF.parseHM = function (s) { var p = s.split(':'); return (+p[0]) * 60 + (+p[1]); };
  AF.hm = function (min) { return AF.pad(Math.floor(min / 60) % 24) + ':' + AF.pad(min % 60); };
  AF.at = function (day, minutes) { return new Date(day.getFullYear(), day.getMonth(), day.getDate(), 0, minutes, 0, 0).getTime(); };

  AF.dayShort = function (d) { return AF.isAm() ? AF.DAYS.amShort[d.getDay()] : AF.DAYS.enShort[d.getDay()]; };
  /* 'short' => "Wed, Oct 21" (Amharic uses the Ethiopian calendar) ; 'day' => "Oct 21" */
  AF.fmtDate = function (d, mode) {
    if (AF.isAm()) {
      var e = AF.toEth(d), dn = AF.DAYS.am[d.getDay()];
      if (mode === 'day') return AF.MONTHS.am[e.m - 1] + ' ' + e.d;
      return dn + '፣ ' + AF.MONTHS.am[e.m - 1] + ' ' + e.d;
    }
    if (mode === 'day') return AF.MONTHS.enShort[d.getMonth()] + ' ' + d.getDate();
    return AF.DAYS.enShort[d.getDay()] + ', ' + AF.MONTHS.enShort[d.getMonth()] + ' ' + d.getDate();
  };
  /* day-of-month number shown in calendars (Ethiopian in Amharic) */
  AF.dayNum = function (d) { return AF.isAm() ? AF.toEth(d).d : d.getDate(); };
  AF.fmtTime = function (hh, mm) {
    if (AF.S.h24) return AF.pad(hh) + ':' + AF.pad(mm);
    var ap = hh >= 12 ? AF.t('pm') : AF.t('am');
    var h = hh % 12; if (h === 0) h = 12;
    return h + ':' + AF.pad(mm) + ' ' + ap;
  };
  AF.fmtMin = function (min) { return AF.fmtTime(Math.floor(min / 60) % 24, min % 60); };
  AF.fmtTs = function (ts) { var d = new Date(ts); return AF.fmtTime(d.getHours(), d.getMinutes()); };
  AF.fmtDur = function (min) {
    min = Math.max(1, Math.round(min));
    if (min >= 60) return AF.t('h_m', { h: Math.floor(min / 60), m: min % 60 });
    return AF.t('m_only', { m: min });
  };
  AF.fmtCd = function (ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
    return (h ? h + ':' + AF.pad(m) : m) + ':' + AF.pad(x);
  };

  /* ---------- water maths ---------- */
  AF.goal = function () {
    var S = AF.S;
    if (S.goalAuto) return Math.max(500, Math.round((S.weight * 35) / 50) * 50);
    return Math.max(250, S.goalMl);
  };
  AF.entries = function (key) { return AF.S.logs[key] || []; };
  AF.sum = function (key) {
    var a = AF.entries(key), s = 0;
    for (var i = 0; i < a.length; i++) s += a[i].ml;
    return s;
  };
  AF.addWater = function (ml, ts) {
    var key = AF.iso(ts ? new Date(ts) : new Date());
    if (!AF.S.logs[key]) AF.S.logs[key] = [];
    var entry = { t: ts || Date.now(), ml: ml };
    AF.S.logs[key].push(entry);
    AF.save();
    return { key: key, entry: entry };
  };
  AF.removeEntry = function (key, entry) {
    var a = AF.S.logs[key] || [];
    var i = a.indexOf(entry);
    if (i >= 0) a.splice(i, 1);
    if (!a.length) delete AF.S.logs[key];
    AF.save();
  };
  AF.streak = function () {
    var d = AF.today(), n = 0, G = AF.goal();
    if (AF.sum(AF.iso(d)) >= G) n++;
    for (var i = 1; i < 400; i++) {
      if (AF.sum(AF.iso(AF.addDays(d, -i))) >= G) n++; else break;
    }
    return n;
  };

  /* ---------- the daily plan: wake-up alarm, then a reminder every N hours until bedtime ---------- */
  AF.slots = function (day) {
    var S = AF.S, ws = AF.parseHM(S.wakeStart), we = AF.parseHM(S.wakeEnd);
    if (we <= ws) we = Math.min(1439, ws + 60);
    var iv = Math.max(30, Math.round(S.interval * 60)), G = AF.goal(), mins = [], m;
    for (m = ws; m < we; m += iv) mins.push(m);
    var n = mins.length;
    return mins.map(function (mm, i) {
      var cum = i === n - 1 ? G : Math.min(G, Math.round((G * (i + 1)) / n / 50) * 50);
      return { i: i, min: mm, ts: AF.at(day, mm), cum: cum, wake: i === 0 };
    });
  };
  /* amount asked for at each reminder */
  AF.glass = function () {
    var n = AF.slots(AF.today()).length;
    return Math.max(50, Math.round(AF.goal() / n / 50) * 50);
  };

  /* what the home screen says right now */
  AF.pacing = function (nowMs) {
    nowMs = nowMs || Date.now();
    var S = AF.S, today = AF.today(), G = AF.goal(), taken = AF.sum(AF.iso(today));
    var slots = AF.slots(today), ws = AF.parseHM(S.wakeStart), we = AF.parseHM(S.wakeEnd);
    var d = new Date(nowMs), mins = d.getHours() * 60 + d.getMinutes();
    var out = { taken: taken, goal: G, need: 0 };
    if (taken >= G) { out.state = 'goal'; return out; }
    if (!S.remind) { out.state = 'off'; return out; }
    if (mins < ws || mins >= we) { out.state = 'sleep'; return out; }
    var last = null;
    for (var i = 0; i < slots.length; i++) if (slots[i].ts <= nowMs) last = slots[i];
    if (last && taken < last.cum) { out.state = 'due'; out.need = Math.max(50, Math.ceil((last.cum - taken) / 50) * 50); return out; }
    out.state = 'ok';
    return out;
  };

  /* next reminder: {ts, prev, slot, tomorrow} or null */
  AF.nextReminder = function (nowMs) {
    nowMs = nowMs || Date.now();
    var S = AF.S;
    if (!S.remind) return null;
    var today = AF.today(), tom = AF.addDays(today, 1), yest = AF.addDays(today, -1);
    var all = AF.slots(yest).concat(AF.slots(today), AF.slots(tom));
    var next = null, prev = null;
    for (var i = 0; i < all.length; i++) {
      if (all[i].ts <= nowMs) prev = all[i];
      else if (!next) next = all[i];
    }
    if (S.snooze && S.snooze.at > nowMs && (!next || S.snooze.at < next.ts)) {
      return { ts: S.snooze.at, prev: nowMs, slot: null, snooze: true };
    }
    if (!next) return null;
    return { ts: next.ts, prev: prev ? prev.ts : nowMs - 3600000, slot: next, tomorrow: AF.iso(new Date(next.ts)) !== AF.iso(today) };
  };

  /* everything the phone should hold for us (daily repeating times + one optional snooze) */
  AF.buildTriggers = function (nowMs) {
    var S = AF.S, out = [];
    nowMs = nowMs || Date.now();
    if (S.remind) {
      var glass = AF.glass();
      AF.slots(AF.today()).forEach(function (s) {
        out.push({
          id: 101 + s.i, kind: s.wake ? 'alarm' : 'reminder',
          title: s.wake ? AF.t('wake_title') : AF.t('water_time'),
          body: s.wake ? AF.t('wake_body') : AF.t('water_body', { n: glass }),
          on: { hour: Math.floor(s.min / 60), minute: s.min % 60 }
        });
      });
    }
    if (S.snooze && S.snooze.at > nowMs) {
      out.push({ id: 2, kind: S.snooze.kind, title: S.snooze.title, body: S.snooze.body, at: S.snooze.at });
    } else if (S.snooze) {
      S.snooze = null; AF.save();
    }
    return out;
  };

  /* Next time (ms) after `from` that an `on` rule fires */
  AF.nextOn = function (on, from) {
    var base = new Date(from);
    for (var i = 0; i < 8; i++) {
      var d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i, on.hour, on.minute, 0, 0);
      if (d.getTime() <= from) continue;
      return d.getTime();
    }
    return null;
  };
})();

/* AquaFlow native layer: real alarm-clock behaviour on Android.
   The wake-up alarm and the water reminders are registered with Android's AlarmManager through the
   AlarmRinger plugin (written by native.py). The wake-up alarm rings in a loop; water reminders post a
   chime notification with "Drank" and "Snooze" buttons - all of it works with the app closed or the
   phone locked. In a normal browser everything falls back to in-page timers. */
(function () {
  var AF = (window.AF = window.AF || {});

  AF.isNative = false;
  try {
    AF.isNative = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  } catch (e) {}

  function plugin(name) {
    try {
      var C = window.Capacitor;
      if (C && typeof C.registerPlugin === 'function') return C.registerPlugin(name);
      return C && C.Plugins ? C.Plugins[name] : null;
    } catch (e) { return null; }
  }
  var AR = AF.isNative ? plugin('AlarmRinger') : null;
  var LN = AF.isNative ? plugin('LocalNotifications') : null; // only used to ask for the notification permission
  AF.AR = AR;
  AF.nativeOK = false;

  /* ---------- in-app chime (browser fallback only) ---------- */
  var actx = null;
  AF.playChime = function () {
    try {
      if (!AF.S.sound) return;
      if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === 'suspended') actx.resume();
      [880, 1108.7, 1318.5, 1760].forEach(function (f, i) {
        var o = actx.createOscillator(), g = actx.createGain();
        o.type = 'sine'; o.frequency.value = f;
        var t0 = actx.currentTime + i * 0.16;
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(0.25, t0 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.9);
        o.connect(g); g.connect(actx.destination);
        o.start(t0); o.stop(t0 + 1);
      });
    } catch (e) {}
  };
  AF.vibrate = function (p) { try { if (AF.S.sound && navigator.vibrate) navigator.vibrate(p); } catch (e) {} };

  /* ---------- permissions ---------- */
  AF.nativeInit = async function () {
    if (!AR) return;
    if (LN) {
      try {
        var p = await LN.checkPermissions();
        if (p.display !== 'granted') p = await LN.requestPermissions();
        if (p.display !== 'granted') AF.toast({ text: AF.t('perm_needed') });
      } catch (e) {}
    }
  };

  /* status bar / navigation bar follow the theme */
  AF.setBars = function () {
    if (!AR) return;
    var dark = AF.S.theme === 'dark';
    AR.setBars({
      status: dark ? '#1e1f22' : '#EDE6E6', nav: dark ? '#1e1f22' : '#EDE6E6',
      bg: dark ? '#1e1f22' : '#EDE6E6', darkIcons: !dark
    }).catch(function () {});
  };

  /* ---------- scheduling ---------- */
  var fb = {};            // in-page timers: used for the pop-up while the app is open
  var pending = null, running = false, again = false;

  AF.reschedule = function () {
    if (pending) clearTimeout(pending);
    pending = setTimeout(doReschedule, 150);
  };

  async function doReschedule() {
    pending = null;
    if (running) { again = true; return; }
    running = true;
    try {
      var trigs = AF.buildTriggers(Date.now());
      scheduleFallback(trigs);
      if (AR) {
        var items = trigs.map(function (t) {
          var it = { id: t.id, kind: t.kind, title: t.title, body: t.body };
          if (t.at) it.at = t.at; else { it.hour = t.on.hour; it.minute = t.on.minute; }
          return it;
        });
        await AR.sync({
          muted: !AF.S.sound, snoozeMin: AF.S.snoozeMin, glassMl: AF.glass(),
          labels: { drank: AF.t('drank', { n: AF.glass() }), snooze: AF.t('snooze'), dismiss: AF.t('dismiss') },
          items: items
        });
        AF.nativeOK = true;
      }
    } catch (e) {
      AF.nativeOK = false;
      try { console.warn('native sync failed', e); } catch (_) {}
    }
    running = false;
    AF.syncWidget();
    if (again) { again = false; doReschedule(); }
  }

  function scheduleFallback(trigs) {
    var now = Date.now();
    fb = {};
    trigs.forEach(function (t) {
      var next = t.at ? t.at : AF.nextOn(t.on, now);
      if (next && next > now) fb[t.id] = { t: t, next: next };
    });
  }

  /* pop-up while the app is open (the phone rings / notifies by itself) */
  AF.fallbackTick = function (nowMs) {
    Object.keys(fb).forEach(function (k) {
      var e = fb[k];
      if (e.next <= nowMs) {
        if (e.t.on) e.next = AF.nextOn(e.t.on, nowMs + 1000); else delete fb[k];
        if (AF.pacing(nowMs).state !== 'goal' || e.t.kind === 'alarm') AF.fire(e.t.kind, e.t.title, e.t.body);
      }
    });
  };

  /* rings in 10 seconds so the user can lock the phone and listen */
  AF.testRing = async function () {
    if (AR) {
      try { await AR.testRing({ delay: 10, muted: !AF.S.sound }); } catch (e) { AF.toast({ text: 'Test failed: ' + ((e && e.message) || e) }); return; }
    } else {
      fb[3] = { t: { kind: 'reminder', title: AF.t('test_title'), body: AF.t('test_body') }, next: Date.now() + 10000 };
    }
    AF.toast({ text: AF.t('test_set') });
  };

  /* silences a ringing alarm and clears the reminder notification */
  AF.clearDelivered = function () {
    if (!AR) return;
    try { AR.stop().catch(function () {}); } catch (e) {}
  };

  /* alarm ringing in the background right now? show the pop-up so it can be answered */
  AF.checkRing = async function () {
    if (!AR) return;
    try {
      var r = await AR.getRing();
      if (r && r.ringing) AF.fire(r.kind || 'alarm', r.title, r.body);
    } catch (e) {}
  };

  AF.bgStatus = async function () {
    if (!AR) return null;
    try { return await AR.status(); } catch (e) { return null; }
  };
  AF.openBg = function (type) {
    if (!AR) return;
    AR.openSettings({ type: type }).catch(function () { AF.toast({ text: 'Could not open that settings page' }); });
  };

  /* ---------- widget bridge + water added from notification / widget buttons ---------- */
  AF.syncWidget = function () {
    if (!AR) return;
    try {
      var nx = AF.nextReminder(Date.now());
      AR.setWidgetData({
        date: AF.iso(AF.today()), intake: AF.sum(AF.iso(AF.today())), goal: AF.goal(), nextAt: nx ? nx.ts : 0
      }).catch(function () {});
    } catch (e) {}
  };
  AF.consumeWidgetPending = async function () {
    if (!AR) return 0;
    try {
      var r = await AR.consumePending();
      var total = (r && r.ml) || 0;
      if (total > 0) {
        var a = r.entries || [];
        if (a.length) a.forEach(function (e) { AF.addWater(e.ml, e.t); });
        else AF.addWater(total);
      }
      return total;
    } catch (e) { return 0; }
  };
})();

/* AquaFlow UI */
(function () {
  var AF = (window.AF = window.AF || {});
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var t = AF.t, esc, ic;
  AF.$ = $; AF.$$ = $$;
  AF.esc = esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  AF.ic = ic = function (name, cls) { return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24"><use href="#i-' + name + '"/></svg>'; };
  function inner(p) { return $('#p-' + p + ' .page-in'); }

  AF.PAGES = ['home', 'plan', 'stats'];
  AF.NAV_ICONS = { home: 'home', plan: 'plan', stats: 'stats' };
  AF.page = 'home';

  /* ---------- theme ---------- */
  AF.applyTheme = function () {
    var dark = AF.S.theme === 'dark';
    document.documentElement.setAttribute('data-theme', AF.S.theme);
    document.documentElement.setAttribute('lang', AF.S.lang === 'am' ? 'am' : 'en');
    var m = $('meta[name=theme-color]'); if (m) m.setAttribute('content', dark ? '#1e1f22' : '#EDE6E6');
    AF.setBars();
  };

  /* ---------- header ---------- */
  AF.renderHeader = function () {
    var S = AF.S, st = AF.streak(), p = AF.pacing();
    var stTxt = st === 1 ? t('streak1', { n: st }) : t('streak', { n: st });
    var due = p.state === 'due' ? '<span class="chip warn">💧 ' + esc(t('behind_badge', { n: AF.n(p.need) })) + '</span>' : '';
    $('#hdr').innerHTML =
      '<div class="hd-l"><div class="hd-date">' + esc(AF.fmtDate(AF.today(), 'short')) + '</div>' +
      '<div class="hd-sub"><span class="flame">🔥 ' + esc(stTxt) + '</span>' + due + '</div></div>' +
      '<div class="hd-r">' +
      '<button class="theme-sw" data-act="theme" aria-label="Theme"><span class="knob">' + ic(S.theme === 'dark' ? 'moon' : 'sun') + '</span>' +
      '<span class="sw-ic l">' + ic('sun') + '</span><span class="sw-ic r">' + ic('moon') + '</span></button>' +
      '<button class="lang-sw ' + S.lang + '" data-act="lang" aria-label="Language"><span class="pill"></span><span class="fl">🇺🇸</span><span class="fl">🇪🇹</span></button>' +
      '<button class="icon-btn" data-act="settings" aria-label="Settings">' + ic('gear') + '</button></div>';
  };

  /* ---------- floating nav pill ---------- */
  AF.renderNav = function () {
    $('#nav').innerHTML = AF.PAGES.map(function (p) {
      return '<button class="nav-b' + (p === AF.page ? ' active' : '') + '" data-act="nav" data-page="' + p + '" aria-label="' + p + '">' +
        ic(AF.NAV_ICONS[p]) + '<span>' + esc(t('nav_' + p)) + '</span></button>';
    }).join('');
  };

  AF.go = function (page) {
    if (page === AF.page) return;
    var to = AF.PAGES.indexOf(page);
    AF.page = page;
    AF.PAGES.forEach(function (p, i) {
      var el = $('#p-' + p);
      el.classList.remove('active', 'before', 'after');
      el.classList.add(p === page ? 'active' : i < to ? 'before' : 'after');
    });
    $$('.nav-b').forEach(function (b) { b.classList.toggle('active', b.dataset.page === page); });
    $('#p-' + page).scrollTop = 0;
    if (page === 'home') AF.updateHome();
    if (page === 'plan') AF.buildPlan();
    if (page === 'stats') AF.buildStats();
  };

  /* ---------- toasts (swipe left/right to dismiss) ---------- */
  AF.toast = function (o) {
    var root = $('#toasts');
    if (!o.ring && !o.persist) $$('.toast:not(.ring)', root).forEach(function (x) { x.remove(); });
    var el = document.createElement('div');
    el.className = 'toast' + (o.ring ? ' ring' : '');
    var acts = '';
    if (o.actions && o.actions.length) {
      acts = '<div class="t-acts">' + o.actions.map(function (a, i) {
        return '<button class="t-btn ' + (a.cls || '') + '" data-i="' + i + '">' + esc(a.label) + '</button>';
      }).join('') + '</div>';
    }
    el.innerHTML = '<div class="t-main">' + (o.icon ? '<div class="t-ic">' + o.icon + '</div>' : '') +
      '<div class="t-body"><b>' + esc(o.title || o.text || '') + '</b>' + (o.body ? '<span>' + esc(o.body) + '</span>' : '') + '</div></div>' + acts;
    root.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('in'); });

    var closed = false, timer = null;
    function close() {
      if (closed) return; closed = true;
      if (timer) clearTimeout(timer);
      el.classList.remove('in'); el.classList.add('out');
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 260);
      if (o.onClose) o.onClose();
    }
    if (!o.persist) timer = setTimeout(close, o.ms || 3400);

    $$('.t-btn', el).forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var a = o.actions[+b.dataset.i];
        close();
        if (a && a.fn) a.fn();
      });
    });

    var sx = 0, dx = 0, drag = false;
    el.addEventListener('pointerdown', function (e) {
      if (e.target.closest('button')) return;
      drag = true; sx = e.clientX; dx = 0;
      try { el.setPointerCapture(e.pointerId); } catch (_) {}
      el.style.transition = 'none';
      if (timer) { clearTimeout(timer); timer = null; }
    });
    el.addEventListener('pointermove', function (e) {
      if (!drag) return;
      dx = e.clientX - sx;
      el.style.transform = 'translateX(' + dx + 'px)';
      el.style.opacity = String(1 - Math.min(1, Math.abs(dx) / 260));
    });
    function end() {
      if (!drag) return; drag = false;
      el.style.transition = '';
      if (Math.abs(dx) > 80) {
        el.style.transform = 'translateX(' + (dx > 0 ? '120%' : '-120%') + ')';
        el.style.opacity = '0';
        if (o.onSwipe) o.onSwipe();
        setTimeout(close, 200);
      } else {
        el.style.transform = ''; el.style.opacity = '';
        if (!o.persist && !closed) timer = setTimeout(close, 2500);
      }
    }
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    return { el: el, close: close };
  };

  /* ---------- modal (swipe down to close) ---------- */
  AF.modal = function (html, opts) {
    opts = opts || {};
    var root = $('#modal-root');
    var bd = document.createElement('div');
    bd.className = 'backdrop';
    bd.innerHTML = '<div class="sheet ' + (opts.cls || '') + '">' + html + '</div>';
    root.appendChild(bd);
    requestAnimationFrame(function () { bd.classList.add('in'); });
    var closed = false;
    var api = {
      el: bd, sheet: bd.firstChild,
      set: function (h) { api.sheet.innerHTML = h; },
      close: function () {
        if (closed) return; closed = true;
        bd.classList.remove('in');
        setTimeout(function () { if (bd.parentNode) bd.parentNode.removeChild(bd); }, 240);
        if (opts.onClose) opts.onClose();
      }
    };
    bd.addEventListener('click', function (e) { if (e.target === bd) api.close(); });
    var sy = 0, dy = 0, drag = false, sh = api.sheet;
    sh.addEventListener('pointerdown', function (e) {
      if (e.target.closest('button,input') || sh.scrollTop > 0) return;
      drag = true; sy = e.clientY; dy = 0; sh.style.transition = 'none';
    });
    sh.addEventListener('pointermove', function (e) {
      if (!drag) return;
      dy = Math.max(0, e.clientY - sy);
      sh.style.transform = 'translateY(' + dy + 'px)';
    });
    function end() {
      if (!drag) return; drag = false; sh.style.transition = '';
      if (dy > 110) api.close(); else sh.style.transform = '';
    }
    sh.addEventListener('pointerup', end);
    sh.addEventListener('pointercancel', end);
    return api;
  };

  /* ---------- frosted keypad: ml / whole number / time ---------- */
  var LIMIT = { ml: 5, int: 3, time: 4 };
  function fmtDisplay(tab, d) {
    d = d || '';
    if (tab.mode === 'ml') return '<b>' + AF.n(parseInt(d || '0', 10)) + '</b><i>' + t('ml') + '</i>';
    if (tab.mode === 'int') return '<b>' + (d || '0') + '</b><i>' + esc(tab.unit || '') + '</i>';
    var p = AF.pad(d, 4);
    return '<b>' + p.slice(0, 2) + ':' + p.slice(2) + '</b>';
  }
  function keypadValue(tab, d, ap) {
    d = d || '';
    if (tab.mode === 'ml' || tab.mode === 'int') return parseInt(d || '0', 10);
    var p = AF.pad(d, 4), hh = parseInt(p.slice(0, 2), 10), mm = parseInt(p.slice(2), 10);
    if (mm > 59) return null;
    if (AF.S.h24) return hh > 23 ? null : { h: hh, m: mm };
    if (hh < 1 || hh > 12) return null;
    return { h: (hh % 12) + (ap === 'pm' ? 12 : 0), m: mm };
  }
  /* cfg: {title, mode, init, ap, quick, unit, prompt, okLabel, ok(value)} */
  AF.keypad = function (cfg) {
    var digits = cfg.init || '', ap = cfg.ap || 'am', m;
    function draw() {
      var prompt = cfg.prompt || (cfg.mode === 'time' ? t('enter_time') : t('enter_amount'));
      var apH = cfg.mode === 'time' && !AF.S.h24 ?
        '<div class="seg ap"><button class="' + (ap === 'am' ? 'on' : '') + '" data-ap="am">' + t('am') + '</button><button class="' + (ap === 'pm' ? 'on' : '') + '" data-ap="pm">' + t('pm') + '</button></div>' : '';
      var quick = cfg.quick ? '<div class="quick">' + cfg.quick.map(function (q) { return '<button data-q="' + q + '">' + q + '</button>'; }).join('') + '</div>' : '';
      var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', 'B'].map(function (k) {
        return '<button class="key ' + (k === 'B' || k === 'C' ? 'alt' : '') + '" data-k="' + k + '">' + (k === 'B' ? ic('backspace') : k) + '</button>';
      }).join('');
      m.set('<div class="sheet-h"><h3>' + esc(cfg.title || '') + '</h3><button class="icon-btn sm" data-x="1" aria-label="Close">' + ic('x') + '</button></div>' +
        '<div class="kp-prompt">' + esc(prompt) + '</div><div class="kp-display">' + fmtDisplay(cfg, digits) + '</div>' + apH + quick +
        '<div class="keys">' + keys + '</div><button class="btn primary wide" data-ok="1">' + esc(cfg.okLabel || t('done')) + '</button>');
    }
    m = AF.modal('', { cls: 'kp' });
    m.sheet.addEventListener('click', function (e) {
      var el = e.target.closest('button');
      if (!el) return;
      if (el.dataset.x) return m.close();
      if (el.dataset.ap) { ap = el.dataset.ap; draw(); return; }
      if (el.dataset.q) { digits = String(parseInt(el.dataset.q, 10)); draw(); return; }
      if (el.dataset.k) {
        var k = el.dataset.k;
        if (k === 'B') digits = digits.slice(0, -1);
        else if (k === 'C') digits = '';
        else if (digits.length < LIMIT[cfg.mode]) digits = (digits === '0' && cfg.mode !== 'time') ? k : digits + k;
        draw(); AF.vibrate(8); return;
      }
      if (el.dataset.ok) {
        var v = keypadValue(cfg, digits, ap);
        if (v === null || (cfg.mode === 'time' && !digits)) { AF.toast({ text: t('invalid_time') }); return; }
        if (cfg.mode !== 'time' && !v) { AF.toast({ text: t('invalid_amount') }); return; }
        if (cfg.ok) cfg.ok(v);
        m.close();
      }
    });
    draw();
  };

  /* ---------- elastic overscroll ---------- */
  AF.bounce = function (scroller, inr) {
    var lastY = 0, off = 0, pulling = false;
    function rubber(x) { return Math.sign(x) * Math.pow(Math.abs(x), 0.82) * 0.9; }
    scroller.addEventListener('touchstart', function (e) {
      lastY = e.touches[0].clientY; off = 0; pulling = false; inr.style.transition = 'none';
    }, { passive: true });
    scroller.addEventListener('touchmove', function (e) {
      var y = e.touches[0].clientY, step = y - lastY; lastY = y;
      var atTop = scroller.scrollTop <= 0, atBot = scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 1;
      if (!pulling && ((atTop && step > 0) || (atBot && step < 0))) { pulling = true; off = 0; }
      if (pulling) {
        off += step;
        if ((atTop && !atBot && off < 0) || (atBot && !atTop && off > 0)) { pulling = false; off = 0; inr.style.transform = ''; return; }
        inr.style.transform = 'translate3d(0,' + rubber(off) + 'px,0)';
        if (e.cancelable) e.preventDefault();
      }
    }, { passive: false });
    function end() {
      if (!pulling && !off) return;
      pulling = false; off = 0;
      inr.style.transition = 'transform .55s cubic-bezier(.34,1.56,.64,1)';
      inr.style.transform = '';
    }
    scroller.addEventListener('touchend', end, { passive: true });
    scroller.addEventListener('touchcancel', end, { passive: true });
  };

  /* =====================================================================
     HOME: glass, next-reminder timer, quick drinks
     ===================================================================== */
  var GLASS_PATH = 'M50 20 L210 20 L190 266 Q188 280 174 280 L86 280 Q72 280 70 266 Z';
  function wavePath() {
    var s = 'M0 20 q27.5 -11 55 0';
    for (var i = 0; i < 7; i++) s += ' t55 0';
    return s + ' V330 H0 Z';
  }
  var DK = '<svg viewBox="0 0 40 48" class="dk-ic">';
  var iconSmall = DK + '<path d="M7 6h26l-3 34a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z" class="o"/><path d="M9 26h22l-1.4 14a3 3 0 0 1-3 3H13.4a3 3 0 0 1-3-3z" class="w"/></svg>';
  var iconStd = DK + '<path d="M7 6h26l-3 34a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z" class="o"/><path d="M8.4 14h23.2l-1.6 26a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z" class="w"/></svg>';
  var iconBottle = DK + '<path d="M16 3h8v5h-8z" class="o"/><path d="M15 8h10l3 6v26a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V14z" class="o"/><path d="M12 22h16v18a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4z" class="w"/></svg>';
  var RING_C = 2 * Math.PI * 27;

  AF.buildHome = function () {
    var G = AF.goal(), ticks = '';
    for (var ml = 500; ml < G; ml += 500) {
      var y = 280 - 260 * (ml / G), ex = 210 - (20 * (y - 20)) / 246;
      ticks += '<line x1="' + (ex + 2).toFixed(1) + '" y1="' + y.toFixed(1) + '" x2="' + (ex + 11).toFixed(1) + '" y2="' + y.toFixed(1) + '" class="g-tick"/>' +
        '<text x="' + (ex + 14).toFixed(1) + '" y="' + (y + 3.5).toFixed(1) + '" class="g-tl">' + AF.n(ml) + '</text>';
    }
    inner('home').innerHTML =
      '<div class="glass-wrap" id="glass-wrap">' +
      '<svg class="glass" viewBox="0 0 260 300" id="glass"><defs>' +
      '<clipPath id="gclip"><path d="' + GLASS_PATH + '"/></clipPath>' +
      '<linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--w1)"/><stop offset="1" style="stop-color:var(--w2)"/></linearGradient>' +
      '<linearGradient id="gs" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".18" stop-color="#fff" stop-opacity=".08"/><stop offset=".8" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".16"/></linearGradient>' +
      '</defs><path d="' + GLASS_PATH + '" class="g-body"/>' +
      '<g clip-path="url(#gclip)"><g id="water" class="water">' +
      '<g class="wave w2"><path d="' + wavePath() + '" fill="url(#wg)" opacity=".5"/></g>' +
      '<g class="wave w1"><path d="' + wavePath() + '" fill="url(#wg)"/></g></g>' +
      '<path d="' + GLASS_PATH + '" fill="url(#gs)"/></g>' +
      '<path d="M58 28 L74 262" class="g-hl"/><path d="M200 34 L186 150" class="g-hl2"/>' +
      '<ellipse cx="130" cy="20" rx="80" ry="6.5" class="g-rim"/><path d="' + GLASS_PATH + '" class="g-edge"/>' + ticks + '</svg>' +
      '<div class="bubbles" id="bubbles"></div>' +
      '<div class="g-chip"><div class="g-int"><b id="g-int">0</b><i>' + esc(t('ml')) + '</i></div><div class="g-line"></div>' +
      '<div class="g-goal" id="g-goal"></div><div class="g-pct" id="g-pct">0%</div></div></div>' +
      '<p class="pace" id="pace"></p>' +
      '<div class="next card"><svg class="nx-ring" viewBox="0 0 64 64"><circle cx="32" cy="32" r="27" class="nx-bg"/>' +
      '<circle cx="32" cy="32" r="27" class="nx-fg" id="nx-fg" stroke-dasharray="' + RING_C.toFixed(1) + '" stroke-dashoffset="' + RING_C.toFixed(1) + '"/></svg>' +
      '<div class="nx-t"><small id="nx-title"></small><b id="nx-cd">--:--</b><span id="nx-sub"></span></div></div>' +
      '<div class="dock">' +
      '<button class="dk" data-act="drink" data-ml="150">' + iconSmall + '<b>+150</b><span>' + esc(t('small')) + '</span></button>' +
      '<button class="dk primary" data-act="drink" data-ml="250">' + iconStd + '<b>+250</b><span>' + esc(t('standard')) + '</span></button>' +
      '<button class="dk" data-act="drink" data-ml="500">' + iconBottle + '<b>+500</b><span>' + esc(t('large')) + '</span></button></div>' +
      '<button class="btn ghost wide" data-act="custom-water">' + ic('plus') + ' ' + esc(t('custom')) + '</button>' +
      '<h4 class="sec">' + esc(t('today_sips')) + '</h4><div id="sips" class="card sips"></div>';
    AF.updateHome();
  };

  AF.updateHome = function () {
    if (!$('#water')) return;
    var key = AF.iso(AF.today()), G = AF.goal(), taken = AF.sum(key);
    var lvl = Math.max(0, Math.min(1, taken / G));
    $('#water').style.transform = 'translateY(' + (260 * (1 - lvl) + (lvl < 0.02 ? 12 : 0)).toFixed(1) + 'px)';
    $('#g-int').textContent = AF.n(taken);
    $('#g-goal').textContent = AF.n(G) + ' ' + t('ml');
    var p = AF.pacing(), pe = $('#g-pct');
    pe.textContent = Math.round((taken / G) * 100) + '%';
    pe.className = 'g-pct' + (p.state === 'goal' ? ' ok' : p.state === 'due' ? ' warn' : '');
    var msg = p.state === 'goal' ? t('pace_goal') : p.state === 'due' ? t('pace_due', { n: AF.n(p.need) }) :
      p.state === 'sleep' ? t('pace_sleep') : p.state === 'off' ? t('pace_off') : t('pace_ok');
    var pc = $('#pace'); pc.textContent = msg; pc.className = 'pace ' + p.state;

    var all = AF.entries(key), ents = all.slice().reverse().slice(0, 5);
    $('#sips').innerHTML = ents.length ? ents.map(function (e) {
      return '<div class="sip"><span class="s-t">' + esc(AF.fmtTs(e.t)) + '</span><b>+' + AF.n(e.ml) + ' ' + esc(t('ml')) + '</b>' +
        '<button class="icon-btn sm" data-act="sip-del" data-i="' + all.indexOf(e) + '" aria-label="Remove">' + ic('x') + '</button></div>';
    }).join('') : '<div class="empty">' + esc(t('no_sips')) + '</div>';
    AF.updateNext(true);
  };

  /* the countdown card: runs every second */
  var lastSub = '';
  AF.updateNext = function (force) {
    var cd = $('#nx-cd');
    if (!cd) return;
    var now = Date.now(), S = AF.S, nx = AF.nextReminder(now), p = AF.pacing(now);
    var title = t('nx_title'), sub = '';
    if (!S.remind || !nx) { title = t('nx_off'); cd.textContent = '--:--'; $('#nx-fg').style.strokeDashoffset = RING_C; }
    else {
      cd.textContent = AF.fmtCd(nx.ts - now);
      var frac = Math.max(0, Math.min(1, (now - nx.prev) / Math.max(1, nx.ts - nx.prev)));
      $('#nx-fg').style.strokeDashoffset = (RING_C * (1 - frac)).toFixed(1);
      var tm = AF.fmtTs(nx.ts);
      if (nx.snooze) sub = t('snooze') + ' · ' + tm;
      else if (p.state === 'sleep') sub = t('nx_sleep', { t: tm });
      else if (nx.tomorrow) sub = t('nx_tomorrow', { t: tm });
      else sub = nx.slot.wake ? t('nx_wake', { t: tm }) : t('nx_at', { t: tm, n: AF.n(nx.slot.cum) });
    }
    if (force || sub !== lastSub || $('#nx-title').textContent !== title) {
      $('#nx-title').textContent = title; $('#nx-sub').textContent = sub; lastSub = sub;
    }
  };

  AF.bubbles = function () {
    var wrap = $('#bubbles'), svg = $('#glass');
    if (!wrap || !svg) return;
    svg.classList.add('fast'); setTimeout(function () { svg.classList.remove('fast'); }, 1500);
    var h = wrap.clientHeight || 280;
    for (var i = 0; i < 14; i++) {
      (function (i) {
        var b = document.createElement('i'), sz = 4 + Math.random() * 7;
        b.style.cssText = 'left:' + (36 + Math.random() * 28).toFixed(1) + '%;width:' + sz.toFixed(1) + 'px;height:' + sz.toFixed(1) +
          'px;--dist:' + (-(h * (0.35 + Math.random() * 0.4))).toFixed(0) + 'px;animation-delay:' + (i * 55) + 'ms;--dx:' + ((Math.random() - 0.5) * 24).toFixed(0) + 'px';
        wrap.appendChild(b);
        setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 1700 + i * 55);
      })(i);
    }
  };

  AF.drink = function (ml, silent) {
    var r = AF.addWater(ml), G = AF.goal(), total = AF.sum(r.key);
    AF.vibrate(35);
    AF.refresh(); AF.bubbles(); AF.reschedule();
    if (!silent) {
      AF.toast({
        icon: '💧', title: t('added', { n: ml }),
        actions: [{ label: t('undo'), fn: function () { AF.removeEntry(r.key, r.entry); AF.refresh(); AF.reschedule(); } }]
      });
    }
    if (total >= G && total - ml < G) setTimeout(function () { AF.toast({ icon: '🎉', title: t('pace_goal') }); }, 700);
  };

  /* =====================================================================
     PLAN: the automatic day - wake-up alarm, then a reminder every N hours
     ===================================================================== */
  AF.buildPlan = function () {
    var S = AF.S, now = Date.now(), today = AF.today();
    var taken = AF.sum(AF.iso(today)), slots = AF.slots(today);
    var rows = slots.map(function (s) {
      var done = taken >= s.cum, due = !done && s.ts <= now;
      var st = done ? 'done' : due ? 'due' : 'up';
      var act = done ? '<span class="tl-ok">' + ic('check') + ' ' + esc(t('slot_done')) + '</span>' :
        due ? '<button class="btn primary sm" data-act="plan-drink" data-ml="' + (Math.max(50, Math.ceil((s.cum - taken) / 50) * 50)) + '">' +
          esc(t('slot_drink', { n: AF.n(Math.max(50, Math.ceil((s.cum - taken) / 50) * 50)) })) + '</button>' :
        '<span class="tl-in">' + esc(t('slot_in', { t: AF.fmtDur((s.ts - now) / 60000) })) + '</span>';
      return '<div class="tl-row ' + st + '"><div class="tl-time">' + esc(AF.fmtMin(s.min)) + '</div>' +
        '<div class="tl-dot"><i></i></div><div class="tl-card"><div class="tl-l"><b>' + esc(s.wake ? t('slot_wake') : t('slot_n', { n: s.i })) + '</b>' +
        '<span>' + esc(t('slot_reach', { n: AF.n(s.cum) })) + '</span></div>' + act + '</div></div>';
    }).join('');
    var we = AF.parseHM(S.wakeEnd);
    rows += '<div class="tl-row sleep"><div class="tl-time">' + esc(AF.fmtMin(we)) + '</div><div class="tl-dot"><i></i></div>' +
      '<div class="tl-card"><div class="tl-l"><b>🌙 ' + esc(t('sleep_row')) + '</b></div></div></div>';

    inner('plan').innerHTML =
      '<div class="page-h"><h2>' + esc(t('plan_title')) + '</h2><p>' + esc(t('plan_sub', { h: S.interval })) + '</p></div>' +
      '<div class="plan-set">' +
      '<button class="ps" data-act="set-wake"><span class="ps-ic">' + ic('sun') + '</span><small>' + esc(t('wake_label')) + '</small><b>' + esc(AF.fmtMin(AF.parseHM(S.wakeStart))) + '</b></button>' +
      '<button class="ps" data-act="set-bed"><span class="ps-ic">' + ic('moon') + '</span><small>' + esc(t('bed_label')) + '</small><b>' + esc(AF.fmtMin(we)) + '</b></button></div>' +
      '<div class="every card"><span>' + esc(t('every_label')) + '</span><div class="seg">' + [1, 2, 3, 4].map(function (h) {
        return '<button class="' + (S.interval === h ? 'on' : '') + '" data-act="interval" data-v="' + h + '">' + h + ' ' + esc(t('hr')) + '</button>';
      }).join('') + '</div></div>' +
      (S.remind ? '' : '<p class="hint warn">' + esc(t('plan_off')) + '</p>') +
      '<div class="tl' + (S.remind ? '' : ' off') + '">' + rows + '</div>';
  };

  /* =====================================================================
     PROGRESS: streak, week bars, last 4 weeks
     ===================================================================== */
  AF.buildStats = function () {
    var G = AF.goal(), today = AF.today(), week = [], i, d, v, max = G, hits = 0, sum = 0;
    for (i = 6; i >= 0; i--) {
      d = AF.addDays(today, -i); v = AF.sum(AF.iso(d));
      week.push({ d: d, v: v }); max = Math.max(max, v); sum += v; if (v >= G) hits++;
    }
    var bars = week.map(function (w, idx) {
      return '<button class="bar' + (w.v >= G ? ' hit' : '') + (idx === 6 ? ' today' : '') + '" data-act="day" data-iso="' + AF.iso(w.d) + '" style="--hr:' + (w.v / max).toFixed(3) + '">' +
        '<em>' + (w.v ? AF.n(w.v) : '') + '</em><i></i><span>' + esc(AF.dayShort(w.d)) + '</span></button>';
    }).join('');
    var cells = '';
    for (i = 27; i >= 0; i--) {
      d = AF.addDays(today, -i); v = AF.sum(AF.iso(d));
      var r = v / G, lv = v <= 0 ? 0 : r < 0.5 ? 1 : r < 1 ? 2 : 3;
      cells += '<button class="cell l' + lv + (i === 0 ? ' today' : '') + '" data-act="day" data-iso="' + AF.iso(d) + '">' + AF.dayNum(d) + '</button>';
    }
    inner('stats').innerHTML =
      '<div class="page-h"><h2>' + esc(t('stats_title')) + '</h2></div>' +
      '<div class="stat-row">' +
      '<div class="stat card"><small>' + esc(t('st_streak')) + '</small><b>🔥 ' + AF.streak() + '</b></div>' +
      '<div class="stat card"><small>' + esc(t('st_avg')) + '</small><b>' + AF.n(sum / 7) + '<i>' + esc(t('ml')) + '</i></b></div>' +
      '<div class="stat card"><small>' + esc(t('st_hit')) + '</small><b>' + hits + '<i>/7</i></b></div></div>' +
      '<h4 class="sec">' + esc(t('st_week')) + '</h4>' +
      '<div class="chart card"><div class="bars"><div class="goal-line" style="bottom:calc(22px + 148px * ' + (G / max).toFixed(3) + ')"><span>' + AF.n(G) + '</span></div>' + bars + '</div></div>' +
      '<h4 class="sec">' + esc(t('st_month')) + '</h4><div class="grid card">' + cells + '</div>';
  };

  /* =====================================================================
     SETTINGS
     ===================================================================== */
  AF.openSettings = function () {
    var m = AF.modal('', { cls: 'settings' }), bg = null;
    function row(label, val, act) { return '<button class="set-row" data-s="' + act + '"><span>' + esc(label) + '</span><b>' + val + '</b></button>'; }
    function sw(label, key) { return '<div class="set-row static"><span>' + esc(label) + '</span><button class="switch ' + (AF.S[key] ? 'on' : '') + '" data-s="' + key + '"><i></i></button></div>'; }
    function segRow(label, key, vals) {
      return '<div class="set-row static"><span>' + esc(label) + '</span><div class="seg tiny">' + vals.map(function (x) {
        return '<button class="' + (AF.S[key] === x ? 'on' : '') + '" data-s="seg" data-k="' + key + '" data-v="' + x + '">' + x + '</button>';
      }).join('') + '</div></div>';
    }
    function pill(ok, txt) { return '<span class="bg-pill' + (ok ? ' ok' : '') + '">' + (ok ? '&#10003;' : '!') + ' ' + esc(txt) + '</span>'; }
    function bgCard() {
      var native = !!AF.AR;
      return '<div class="bg-card"><h4>' + esc(t('bg_title')) + '</h4>' +
        (native ? '<div class="bg-status">' + pill(AF.nativeOK, t('bg_service')) + (bg ? pill(bg.notifications, t('bg_notif')) + pill(bg.battery, t('bg_batt')) : '') + '</div>' : '') +
        '<div class="bg-btns"><button class="btn primary full" data-s="test">' + ic('bell') + ' ' + esc(t('test_alarm')) + '</button>' +
        (native ? '<button class="btn ghost" data-s="bgn">' + esc(t('bg_notif')) + '</button><button class="btn ghost" data-s="bgb">' + esc(t('bg_batt')) + '</button>' +
          '<button class="btn ghost full" data-s="bga">' + esc(t('bg_auto')) + '</button>' : '') + '</div><p class="bg-note">' + esc(t('bg_note')) + '</p></div>';
    }
    function draw() {
      var S = AF.S;
      m.set('<div class="sheet-h"><h3>' + esc(t('settings')) + '</h3><button class="icon-btn sm" data-x="1">' + ic('x') + '</button></div>' +
        row(t('weight'), S.weight + ' kg', 'weight') +
        '<div class="set-row static"><span>' + esc(t('daily_goal')) + '</span><div class="seg tiny"><button class="' + (S.goalAuto ? 'on' : '') + '" data-s="goalauto">' + esc(t('auto_goal')) + '</button></div></div>' +
        row(t('goal'), AF.n(AF.goal()) + ' ' + esc(t('ml')), 'goal') +
        row(t('wake_start'), esc(AF.fmtMin(AF.parseHM(S.wakeStart))), 'wake') + row(t('wake_end'), esc(AF.fmtMin(AF.parseHM(S.wakeEnd))), 'bed') +
        sw(t('reminders'), 'remind') + segRow(t('interval'), 'interval', [1, 2, 3, 4]) + segRow(t('snooze_len'), 'snoozeMin', [5, 10, 15]) +
        sw(t('sound'), 'sound') + sw(t('h24'), 'h24') +
        '<p class="hint">' + esc(t('quiet_note')) + '</p>' + bgCard());
    }
    draw(); AF.bgStatus().then(function (st) { bg = st; draw(); });
    function changed() { AF.save(); AF.renderAll(); AF.reschedule(); draw(); }
    AF.pickTime = function (key, title) {
      var mm = AF.parseHM(AF.S[key]), h = Math.floor(mm / 60), h12 = h % 12 === 0 ? 12 : h % 12;
      AF.keypad({
        title: title, mode: 'time', init: String((AF.S.h24 ? h : h12) * 100 + (mm % 60)), ap: h >= 12 ? 'pm' : 'am', okLabel: t('save'),
        ok: function (v) { AF.S[key] = AF.hm(v.h * 60 + v.m); AF.save(); AF.renderAll(); AF.reschedule(); if (m && m.el.parentNode) draw(); }
      });
    };
    m.sheet.addEventListener('click', function (e) {
      var el = e.target.closest('[data-s],[data-x]');
      if (!el) return;
      if (el.dataset.x) return m.close();
      var S = AF.S, s = el.dataset.s;
      if (s === 'remind' || s === 'sound' || s === 'h24') { S[s] = !S[s]; return changed(); }
      switch (s) {
        case 'seg': S[el.dataset.k] = +el.dataset.v; changed(); break;
        case 'weight': AF.keypad({ title: t('weight'), mode: 'int', unit: 'kg', prompt: t('weight'), init: String(S.weight), okLabel: t('save'), ok: function (v) { S.weight = Math.min(250, Math.max(20, v)); changed(); } }); break;
        case 'goalauto': S.goalAuto = !S.goalAuto; if (!S.goalAuto) S.goalMl = AF.goal(); changed(); break;
        case 'goal': AF.keypad({ title: t('daily_goal'), mode: 'ml', init: String(AF.goal()), okLabel: t('save'), ok: function (v) { S.goalMl = Math.min(8000, Math.max(500, v)); S.goalAuto = false; changed(); } }); break;
        case 'wake': AF.pickTime('wakeStart', t('wake_start')); break;
        case 'bed': AF.pickTime('wakeEnd', t('wake_end')); break;
        case 'test': AF.testRing(); m.close(); break;
        case 'bgn': AF.openBg('notifications'); break;
        case 'bgb': AF.openBg('battery'); break;
        case 'bga': AF.openBg('autostart'); break;
      }
    });
  };

  /* =====================================================================
     RING: the pop-up shown when a reminder / wake-up alarm goes off
     ===================================================================== */
  var ringHandle = null;
  AF.doSnooze = function (kind, title, body) {
    var mins = AF.S.snoozeMin;
    AF.S.snooze = { at: Date.now() + mins * 60000, kind: kind, title: title, body: body };
    AF.save(); AF.reschedule(); AF.updateNext(true);
    AF.toast({ icon: '💤', title: t('snoozed', { n: mins }) });
  };
  AF.fire = function (kind, title, body) {
    if (ringHandle) { try { ringHandle.close(); } catch (e) {} ringHandle = null; }
    if (!AF.isNative) AF.playChime();
    AF.vibrate([300, 100, 300, 100, 400]);
    ringHandle = AF.toast({
      ring: true, persist: true, icon: kind === 'alarm' ? '☀️' : '💧', title: title, body: body,
      actions: [
        { label: '🥛 ' + t('drank', { n: AF.glass() }), cls: 'primary', fn: function () { AF.clearDelivered(); AF.drink(AF.glass()); } },
        { label: '💤 ' + t('snooze'), fn: function () { AF.clearDelivered(); AF.doSnooze(kind, title, body); } }
      ],
      onSwipe: function () { AF.clearDelivered(); }
    });
  };

  /* =====================================================================
     ACTIONS
     ===================================================================== */
  AF.act = {
    nav: function (el) { AF.go(el.dataset.page); },
    theme: function () { AF.S.theme = AF.S.theme === 'dark' ? 'light' : 'dark'; AF.save(); AF.applyTheme(); AF.renderHeader(); },
    lang: function () { AF.S.lang = AF.S.lang === 'en' ? 'am' : 'en'; AF.save(); AF.applyTheme(); AF.renderAll(); AF.reschedule(); },
    settings: function () { AF.openSettings(); },
    drink: function (el) { AF.drink(+el.dataset.ml); },
    'plan-drink': function (el) { AF.drink(+el.dataset.ml); },
    'custom-water': function () {
      AF.keypad({ title: t('custom'), mode: 'ml', init: '', quick: [100, 200, 300, 750], okLabel: t('save'), ok: function (v) { AF.drink(Math.min(v, 5000)); } });
    },
    'sip-del': function (el) {
      var key = AF.iso(AF.today()), e = AF.entries(key)[+el.dataset.i];
      if (!e) return;
      AF.removeEntry(key, e); AF.refresh(); AF.reschedule();
      AF.toast({ icon: '🗑️', title: t('removed'), actions: [{ label: t('undo'), fn: function () { AF.S.logs[key] = (AF.S.logs[key] || []).concat([e]); AF.S.logs[key].sort(function (a, b) { return a.t - b.t; }); AF.save(); AF.refresh(); AF.reschedule(); } }] });
    },
    'set-wake': function () { AF.pickTime('wakeStart', t('wake_start')); },
    'set-bed': function () { AF.pickTime('wakeEnd', t('wake_end')); },
    interval: function (el) { AF.S.interval = +el.dataset.v; AF.save(); AF.renderAll(); AF.reschedule(); },
    day: function (el) {
      var iso = el.dataset.iso, p = iso.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2], 12);
      AF.toast({ icon: '💧', title: AF.fmtDate(d, 'short'), body: AF.n(AF.sum(iso)) + ' / ' + AF.n(AF.goal()) + ' ' + t('ml') });
    }
  };
})();

/* AquaFlow main loop */
(function () {
  var AF = window.AF, $ = AF.$, $$ = AF.$$;
  var lastIso = '', lastMin = -1, lastPace = 0;

  AF.renderAll = function () {
    AF.applyTheme(); AF.renderHeader(); AF.renderNav();
    AF.buildHome(); AF.buildPlan(); AF.buildStats();
  };
  /* after water was added / removed */
  AF.refresh = function () {
    AF.renderHeader(); AF.updateHome(); AF.syncWidget();
    if (AF.page === 'plan') AF.buildPlan();
    if (AF.page === 'stats') AF.buildStats();
  };

  function tick() {
    var now = Date.now(), d = new Date(now);
    AF.fallbackTick(now);
    var iso = AF.iso(d);
    if (lastIso && iso !== lastIso) { AF.renderAll(); AF.reschedule(); }
    lastIso = iso;
    if (AF.page === 'home') AF.updateNext();
    if (d.getMinutes() !== lastMin) { lastMin = d.getMinutes(); AF.renderHeader(); }
    if (now - lastPace > 20000) {
      lastPace = now;
      if (AF.page === 'home') AF.updateHome();
      if (AF.page === 'plan') AF.buildPlan();
    }
  }

  async function onResume() {
    if (document.hidden) return;
    var added = await AF.consumeWidgetPending();
    AF.checkRing();
    AF.renderAll(); AF.reschedule();
    if (added > 0) AF.toast({ icon: '💧', title: AF.t('added', { n: added }) });
  }

  function init() {
    AF.applyTheme(); AF.renderAll();
    AF.PAGES.forEach(function (p) {
      var el = $('#p-' + p);
      el.classList.add(p === AF.page ? 'active' : 'after');
      AF.bounce(el, el.querySelector('.page-in'));
    });
    document.addEventListener('click', function (e) {
      var el = e.target.closest('[data-act]');
      if (!el) return;
      var fn = AF.act[el.dataset.act];
      if (fn) fn(el, e);
    });
    document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    document.addEventListener('visibilitychange', onResume);
    window.addEventListener('focus', onResume);
    setInterval(tick, 1000);
    (async function () {
      try { await AF.nativeInit(); } catch (e) {}
      await AF.consumeWidgetPending();
      AF.checkRing();
      AF.renderAll(); AF.reschedule();
    })();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
