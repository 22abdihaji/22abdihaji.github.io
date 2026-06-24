// ============================================================
// KYSYMYKSET - laajennettu versio
// ============================================================
const kysymykset = {
  // ==========================================================
  // 1. PERUSVERSIO (fiilismittari)
  // ==========================================================
  fi: {
    kysymykset: [
      {
        tyyppi: "hymio",
        kysymys: "Miten voit juuri nyt?",
        vaihtoehdot: [
          "😊 Erinomaisesti",
          "🙂 Ihan hyvin",
          "😐 Ihan ok",
          "😞 Huonosti",
        ],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Miten arvioit energiatasosi tänään? (1 = hyvin vähän, 5 = erittäin paljon)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "Mikä on tämän päivän tärkein tunne? (vapaaehtoinen)",
        placeholder: "Kirjoita tähän...",
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Kuinka tyytyväinen olet elämääsi tällä hetkellä? (1 = en lainkaan, 5 = erittäin tyytyväinen)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "hymio",
        kysymys: "Miltä tuleva päivä näyttää?",
        vaihtoehdot: [
          "🌟 Innokkaana",
          "🙂 Ihan ok",
          "😐 Jännittyneenä",
          "😞 Huolestuneena",
        ],
      },
      {
        tyyppi: "teksti",
        kysymys: "Haluatko kertoa vielä jotain? (vapaaehtoinen)",
        placeholder: "Vapaa palaute...",
      },
    ],
  },
  en: {
    kysymykset: [
      {
        tyyppi: "hymio",
        kysymys: "How are you feeling right now?",
        vaihtoehdot: [
          "😊 Excellent",
          "🙂 Pretty good",
          "😐 Okay",
          "😞 Not good",
        ],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "How would you rate your energy level today? (1 = very low, 5 = very high)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "What is the main emotion you're feeling today? (optional)",
        placeholder: "Write here...",
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "How satisfied are you with your life right now? (1 = not at all, 5 = very satisfied)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "hymio",
        kysymys: "How does tomorrow look to you?",
        vaihtoehdot: ["🌟 Excited", "🙂 Okay", "😐 Nervous", "😞 Worried"],
      },
      {
        tyyppi: "teksti",
        kysymys: "Anything else you'd like to share? (optional)",
        placeholder: "Free feedback...",
      },
    ],
  },

  // ==========================================================
  // 2. AMK-VERSIO (opiskelijoille)
  // ==========================================================
  fi_amk: {
    kysymykset: [
      {
        tyyppi: "hymio",
        kysymys: "Miten opintosi sujuvat tällä hetkellä?",
        vaihtoehdot: [
          "😊 Todella hyvin",
          "🙂 Ihan ok",
          "😐 Haastavaa",
          "😞 Todella raskasta",
        ],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Kuinka hyvin olet pysynyt opinnoissa mukana? (1 = en ollenkaan, 5 = erittäin hyvin)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys:
          "Mikä on suurin haasteesi opinnoissa juuri nyt? (vapaaehtoinen)",
        placeholder: "Kerro haasteistasi...",
      },
      {
        tyyppi: "hymio",
        kysymys: "Miten jaksaminen on viime aikoina?",
        vaihtoehdot: [
          "💪 Erinomainen",
          "🙂 Ihan hyvä",
          "😐 Väsynyt",
          "😞 Uupunut",
        ],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Saatko riittävästi tukea opintoihisi? (1 = en ollenkaan, 5 = erittäin paljon)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "Millaista tukea toivoisit lisää? (vapaaehtoinen)",
        placeholder: "Kerro toiveistasi...",
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Miten koet opiskelumotivaatiosi tällä hetkellä? (1 = erittäin heikko, 5 = erittäin korkea)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "Vapaa palaute opiskeluelämästäsi (vapaaehtoinen)",
        placeholder: "Kerro vapaasti...",
      },
    ],
  },
  en_amk: {
    kysymykset: [
      {
        tyyppi: "hymio",
        kysymys: "How are your studies going right now?",
        vaihtoehdot: [
          "😊 Very well",
          "🙂 Okay",
          "😐 Challenging",
          "😞 Very tough",
        ],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "How well have you kept up with your studies? (1 = not at all, 5 = very well)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys:
          "What's your biggest challenge in your studies right now? (optional)",
        placeholder: "Tell us about your challenges...",
      },
      {
        tyyppi: "hymio",
        kysymys: "How has your well-being been lately?",
        vaihtoehdot: [
          "💪 Excellent",
          "🙂 Pretty good",
          "😐 Tired",
          "😞 Exhausted",
        ],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Do you get enough support for your studies? (1 = not at all, 5 = very much)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "What kind of additional support would you like? (optional)",
        placeholder: "Share your wishes...",
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "How would you rate your study motivation right now? (1 = very low, 5 = very high)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "Free feedback about your student life (optional)",
        placeholder: "Share freely...",
      },
    ],
  },

  // ==========================================================
  // 3. TYÖTTÖMÄT / TYÖNHAKIJAT
  // ==========================================================
  fi_tyoton: {
    kysymykset: [
      {
        tyyppi: "hymio",
        kysymys: "Miten työnhakusi sujuu tällä hetkellä?",
        vaihtoehdot: [
          "😊 Hyvin",
          "🙂 Ihan ok",
          "😐 Haastavaa",
          "😞 Turhauttavaa",
        ],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Kuinka aktiivisesti olet hakenut töitä viime aikoina? (1 = en ollenkaan, 5 = erittäin aktiivisesti)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "Mikä on suurin este työnhaussa juuri nyt? (vapaaehtoinen)",
        placeholder: "Kerro esteistäsi...",
      },
      {
        tyyppi: "hymio",
        kysymys: "Miten jaksaminen on työnhaussa?",
        vaihtoehdot: ["💪 Hyvin", "🙂 Ihan ok", "😐 Väsyttää", "😞 Uuvuttaa"],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Koetko saavasi tarpeeksi tukea työnhakuun? (1 = en ollenkaan, 5 = erittäin paljon)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "Millaista tukea toivoisit työnhakuun? (vapaaehtoinen)",
        placeholder: "Kerro toiveistasi...",
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Kuinka toiveikas olet työllistymisestä? (1 = en ollenkaan, 5 = erittäin toiveikas)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "Vapaa palaute työllisyyspalveluista (vapaaehtoinen)",
        placeholder: "Kerro kokemuksistasi...",
      },
    ],
  },
  en_tyoton: {
    kysymykset: [
      {
        tyyppi: "hymio",
        kysymys: "How is your job search going right now?",
        vaihtoehdot: ["😊 Well", "🙂 Okay", "😐 Challenging", "😞 Frustrating"],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "How actively have you been job searching lately? (1 = not at all, 5 = very actively)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys:
          "What's the biggest obstacle in your job search right now? (optional)",
        placeholder: "Tell us about obstacles...",
      },
      {
        tyyppi: "hymio",
        kysymys: "How are you coping with the job search?",
        vaihtoehdot: ["💪 Well", "🙂 Okay", "😐 Tired", "😞 Exhausted"],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Do you get enough support in your job search? (1 = not at all, 5 = very much)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "What kind of support would you like? (optional)",
        placeholder: "Tell us your wishes...",
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "How hopeful are you about finding employment? (1 = not at all, 5 = very hopeful)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "Free feedback about employment services (optional)",
        placeholder: "Share your experiences...",
      },
    ],
  },

  // ==========================================================
  // 4. YRITYKSET (asiakaskokemus)
  // ==========================================================
  fi_yritys: {
    kysymykset: [
      {
        tyyppi: "hymio",
        kysymys: "Miten vierailusi sujuu tänään?",
        vaihtoehdot: [
          "😊 Erinomaisesti",
          "🙂 Hyvin",
          "😐 Ihan ok",
          "😞 Huonosti",
        ],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Kuinka tyytyväinen olet saamaasi palveluun? (1 = en ollenkaan, 5 = erittäin tyytyväinen)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "Mikä oli vierailusi parasta? (vapaaehtoinen)",
        placeholder: "Kerro parhaasta...",
      },
      {
        tyyppi: "hymio",
        kysymys: "Kohtasiko palvelu odotuksesi?",
        vaihtoehdot: [
          "🌟 Ylitti odotukset",
          "🙂 Vastasi odotuksia",
          "😐 Osittain",
          "😞 Ei vastannut odotuksia",
        ],
      },
      {
        tyyppi: "teksti",
        kysymys: "Mitä voisimme tehdä paremmin? (vapaaehtoinen)",
        placeholder: "Kerro kehitysehdotuksia...",
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "Kuinka todennäköisesti suosittelisit meitä muille? (1 = en suosittelisi, 5 = suosittelisin ehdottomasti)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "Vapaa palaute vierailustasi (vapaaehtoinen)",
        placeholder: "Kerro vapaasti...",
      },
    ],
  },
  en_yritys: {
    kysymykset: [
      {
        tyyppi: "hymio",
        kysymys: "How is your visit going today?",
        vaihtoehdot: ["😊 Excellent", "🙂 Good", "😐 Okay", "😞 Not good"],
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "How satisfied are you with the service you received? (1 = not at all, 5 = very satisfied)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "What was the best part of your visit? (optional)",
        placeholder: "Tell us the best part...",
      },
      {
        tyyppi: "hymio",
        kysymys: "Did the service meet your expectations?",
        vaihtoehdot: [
          "🌟 Exceeded expectations",
          "🙂 Met expectations",
          "😐 Partially",
          "😞 Didn't meet expectations",
        ],
      },
      {
        tyyppi: "teksti",
        kysymys: "What could we do better? (optional)",
        placeholder: "Share improvement ideas...",
      },
      {
        tyyppi: "asteikko",
        kysymys:
          "How likely are you to recommend us to others? (1 = not likely, 5 = very likely)",
        min: 1,
        max: 5,
      },
      {
        tyyppi: "teksti",
        kysymys: "Free feedback about your visit (optional)",
        placeholder: "Share freely...",
      },
    ],
  },
};

// ============================================================
// SOVELLUKSEN TILA
// ============================================================
let nykyinenKieli = "fi";
let nykyinenVersio = "perus";
let vastaukset = {};
let nykyinenKysymysIndeksi = 0;

// Elementit
const kielivalinta = document.getElementById("kielivalinta");
const kysely = document.getElementById("kysely");
const loppu = document.getElementById("loppu");
const kysymysSisalto = document.getElementById("kysymys-sisalto");

// ============================================================
// VERSIOVALINTA
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  const versioNapit = document.querySelectorAll(".versio-nappi");
  versioNapit.forEach((nappi) => {
    nappi.addEventListener("click", function () {
      nykyinenVersio = this.dataset.versio;
      versioNapit.forEach((n) => {
        n.style.border = "3px solid transparent";
        n.style.transform = "scale(1)";
        n.style.boxShadow = "none";
        n.style.opacity = "0.7";
      });
      this.style.border = "3px solid white";
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "0 4px 16px rgba(0,0,0,0.3)";
      this.style.opacity = "1";

      console.log("Versio valittu:", nykyinenVersio);
      if (kysely.style.display === "block") {
        nykyinenKysymysIndeksi = 0;
        vastaukset = {};
        naytaKysymys();
      }
    });
  });
});

// ============================================================
// KIELIVALINTA
// ============================================================
document.querySelectorAll(".kieli-nappi").forEach((nappi) => {
  nappi.addEventListener("click", function () {
    nykyinenKieli = this.dataset.kieli;
    document.querySelectorAll(".kieli-nappi").forEach((n) => {
      n.style.border = "3px solid #1a3a6b";
      n.style.background = "white";
      n.style.color = "#1a3a6b";
    });
    this.style.background = "#1a3a6b";
    this.style.color = "white";

    console.log("Kieli valittu:", nykyinenKieli);
    kielivalinta.style.display = "none";
    kysely.style.display = "block";
    nykyinenKysymysIndeksi = 0;
    vastaukset = {};
    naytaKysymys();
  });
});

// ============================================================
// TAKAISIN-PAINIKE
// ============================================================
function naytaEdellinen() {
  if (nykyinenKysymysIndeksi > 0) {
    nykyinenKysymysIndeksi--;
    naytaKysymys();
  }
}

// ============================================================
// KYSYMYSTEN NÄYTTÖ (yksi kysymys kerrallaan)
// ============================================================
function naytaKysymys() {
  const avain =
    nykyinenVersio === "perus"
      ? nykyinenKieli
      : nykyinenKieli + "_" + nykyinenVersio;
  const data = kysymykset[avain];
  if (!data) {
    console.error("Ei löydy versiota:", avain);
    return;
  }

  const kysymysLista = data.kysymykset;
  if (nykyinenKysymysIndeksi >= kysymysLista.length) {
    naytaLoppu();
    return;
  }

  const k = kysymysLista[nykyinenKysymysIndeksi];
  const edistys = Math.round(
    (nykyinenKysymysIndeksi / kysymysLista.length) * 100
  );

  let html = `
        <div style="margin-bottom: 1.5rem;">
            <div style="background: #e8eff6; border-radius: 20px; height: 8px; width: 100%; overflow: hidden;">
                <div style="background: #1a3a6b; height: 100%; width: ${edistys}%; transition: width 0.3s;"></div>
            </div>
            <p style="font-size: 0.9rem; color: #4a5e7a; margin-top: 0.5rem;">${
              nykyinenKysymysIndeksi + 1
            } / ${kysymysLista.length}</p>
        </div>
        <div class="kysymys">
            <h2 style="font-size: 2rem;">${k.kysymys}</h2>
    `;

  if (k.tyyppi === "hymio") {
    html += `<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">`;
    k.vaihtoehdot.forEach((vaihtoehto, indeksi) => {
      html += `<button class="hymio-nappi" onclick="vastaaJaSeuraava('hymio', ${indeksi})">${vaihtoehto}</button>`;
    });
    html += `</div>`;
  } else if (k.tyyppi === "asteikko") {
    html += `<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;">`;
    for (let i = k.min; i <= k.max; i++) {
      html += `<button class="asteikko-nappi" onclick="vastaaJaSeuraava('asteikko', ${i})" style="min-width: 70px;">${i}</button>`;
    }
    html += `</div>`;
  } else if (k.tyyppi === "teksti") {
    html += `
            <textarea id="teksti-vastaus" rows="4" placeholder="${
              k.placeholder || "Kirjoita tähän..."
            }" style="width: 100%; padding: 18px; font-size: 1.6rem; border-radius: 24px; border: 2px solid #dce6f0;"></textarea>
            <div style="display: flex; justify-content: space-between; margin-top: 1rem;">
                <button onclick="naytaEdellinen()" style="background: #6a7a8a; padding: 14px 28px; font-size: 1.4rem; min-width: 120px;">← Edellinen</button>
                <button onclick="vastaaTekstiJaSeuraava()" class="ensisijainen" style="padding: 14px 28px; font-size: 1.4rem; min-width: 120px;">Seuraava →</button>
            </div>
        `;
  }

  // Lisätään "Takaisin"-painike myös hymiö- ja asteikkokysymyksiin
  if (k.tyyppi === "hymio" || k.tyyppi === "asteikko") {
    html += `
            <div style="display: flex; justify-content: center; margin-top: 1.5rem;">
                <button onclick="naytaEdellinen()" style="background: #6a7a8a; padding: 14px 28px; font-size: 1.4rem; min-width: 120px;">← Edellinen</button>
            </div>
        `;
  }

  html += `</div>`;
  kysymysSisalto.innerHTML = html;
}

// ============================================================
// VASTAUSTEN KERUU
// ============================================================
function vastaaJaSeuraava(tyyppi, arvo) {
  const avain =
    nykyinenVersio === "perus"
      ? nykyinenKieli
      : nykyinenKieli + "_" + nykyinenVersio;
  const data = kysymykset[avain];
  if (!data) {
    console.error("Virhe: dataa ei löydy avaimella", avain);
    return;
  }

  const k = data.kysymykset[nykyinenKysymysIndeksi];
  if (!k) {
    console.error(
      "Virhe: kysymystä ei löydy indeksillä",
      nykyinenKysymysIndeksi
    );
    return;
  }

  const avainNimi = "kysymys_" + nykyinenKysymysIndeksi;
  if (tyyppi === "hymio") {
    vastaukset[avainNimi] = k.vaihtoehdot[arvo];
  } else if (tyyppi === "asteikko") {
    vastaukset[avainNimi] = arvo + " / " + k.max;
  }

  console.log("Vastaus:", avainNimi, "=", vastaukset[avainNimi]);
  nykyinenKysymysIndeksi++;
  naytaKysymys();
}

function vastaaTekstiJaSeuraava() {
  const teksti = document.getElementById("teksti-vastaus")?.value || "";
  const avainNimi = "kysymys_" + nykyinenKysymysIndeksi;
  vastaukset[avainNimi] = teksti || "(tyhjä)";
  console.log("Vastaus:", avainNimi, "=", vastaukset[avainNimi]);
  nykyinenKysymysIndeksi++;
  naytaKysymys();
}

// ============================================================
// LOPPUNÄKYMÄ & LÄHETYS GOOGLE SHEETSIIN
// ============================================================
function naytaLoppu() {
  const avain =
    nykyinenVersio === "perus"
      ? nykyinenKieli
      : nykyinenKieli + "_" + nykyinenVersio;
  const data = kysymykset[avain];

  // ===== LÄHETÄÄN VASTAUKSET GOOGLE SHEETSIIN =====
  const lahetettavaData = {
    versio: nykyinenVersio,
    kieli: nykyinenKieli,
    ...vastaukset, // Tässä on kaikki kysymys_0 ... kysymys_N
  };

  // ⚠️ MUISTA KORVATA TÄMÄ OMASTA URL-OSOITTEELLASI ⚠️
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzEfDkPtBmFep5IyHPo6srrzp-BHGbRTfUDdcKFnaA-72q_4aur_ksCTJvUUi-QMb5L/exec";

  fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lahetettavaData),
  })
    .then(() => {
      console.log("Vastaukset lähetetty onnistuneesti");
    })
    .catch((error) => {
      console.error("Virhe lähetyksessä:", error);
    });

  // ===== NÄYTÄ LOPPUNÄKYMÄ =====
  console.log("=== KAIKKI VASTAUKSET ===");
  console.log("Versio:", nykyinenVersio);
  console.log("Kieli:", nykyinenKieli);
  Object.keys(vastaukset).forEach((key) => {
    console.log(key + ":", vastaukset[key]);
  });
  console.log("Aikaleima:", new Date().toISOString());

  kysely.style.display = "none";
  loppu.style.display = "block";
  document.getElementById("lopputeksti").innerHTML = `
        <p style="font-size: 2.2rem; font-weight: 600; color: #0a1e3c;">Kiitos palautteestasi! / Thank you for your feedback!</p>
        <p style="font-size: 1.6rem; color: #4a5e7a; margin-top: 0.5rem;">Vastauksesi on tallennettu anonyymisti. / Your response has been recorded anonymously.</p>
        <p style="font-size: 1.2rem; color: #4a5e7a; margin-top: 1rem;">Vastasit ${
          Object.keys(vastaukset).length
        } kysymykseen.</p>
    `;
}
